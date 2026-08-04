import { j as e } from "./jsx-runtime-CWOFuNcx.js";
import { r as x, Y as s1, V as o1, W as n1, Z as r1 } from "./PageContainers-1sk3OYaf.js";
import { u as K, c as i1 } from "./useDependentDocumentChanges-Dso85RXC.js";
import { b as l1, d as a1, e as d1 } from "./documentInitUtils-COeMuvhV.js";
import { g as W, c as z, u as S } from "./modelUtils-CmV-OfWF.js";
import { C as c1 } from "./CenteredLoadingSpinner-BZzc9Oqr.js";
import { C as p1 } from "./ComboBoxWithIcon-eOJ6Ms0Q.js";
import { G as C1 } from "./GroupBox-BxPlcX3c.js";
import { M as g, a as k } from "./model-BUBkL5rT.js";
import { y as E } from "./Link-DIvQSyO2.js";
import { i as G, C as p, B as $, v as A } from "./validationUtils-BWaKRNki.js";
import { u as Y } from "./useExtensionPermissionsChanged-CmzSIPTq.js";
import { W as U } from "./Banner-BjuZQV3q.js";
import { T as X } from "./Table-CLlb8DoS.js";
import { a as T } from "./TextWithIcon-Cn_oiqNe.js";
import { D as w, a as H, d as O } from "./formelements-CKhf3RUn.js";
import { B as N, C as R } from "./text-Kj7UY3CS.js";
import { h as P, g as f1 } from "./constantUtils-D0RXxXWn.js";
import { createStudioProLogger as u1 } from "./logger-gMbuSAUF.js";
import { d as x1 } from "./mxCloudGenAIUtils-U7THU9De.js";
import { T as b } from "./TextInputLabeled-CTvLZgVy.js";
const h1 = (t, n, s, o) => async () => {
  if (t.provider !== o) {
    if (o === g.MxCloudGenAI) {
      const r = l1(), d = {
        ...t,
        provider: o,
        providerFields: r
      };
      n(d), s(d);
    }
    if (o === g.Azure) {
      const r = a1(), d = {
        ...t,
        provider: o,
        providerFields: r
      };
      n(d), s(d);
    }
    if (!o) {
      const r = {
        ...t,
        provider: void 0,
        providerFields: {}
      };
      n(r), s(r);
    }
  }
}, j1 = async (t, n) => {
  let s = [];
  const o = [
    {
      title: "Getting available deployments",
      description: "Getting available deployments",
      action: async () => {
        const d = await W(t, n);
        return typeof d == "string" ? d : (s = d, !0);
      }
    }
  ], r = await t.ui.dialogs.showProgressDialog("Model deployments", o);
  switch (r.result) {
    case "Success":
      return s;
    case "UserCancelled":
      return;
    case "Failure": {
      const d = `No connection. Make sure you are connected to the internet and check that a valid key and endpoint have been set as value for the selected constants. 
The project endpoint must be of format https://resource-name.services.ai.azure.com/api/projects/project-name`, c = r.failedStep?.error ?? "";
      await t.ui.messageBoxes.show("error", d, c);
      return;
    }
  }
};
async function m1(t, n) {
  const s = n.providerFields, o = await t.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" },
    selectedElementId: s?.key?.documentId
  });
  if (o.status === "ok")
    return {
      ...n,
      providerFields: {
        ...n.providerFields,
        key: {
          documentId: o.selected.id,
          qualifiedName: o.selected.module + "." + o.selected.name
        }
      }
    };
  if (o.status === "none")
    return { ...n, providerFields: { ...n.providerFields, key: void 0 } };
}
async function g1(t, n) {
  const s = n.providerFields, o = await t.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" },
    selectedElementId: s?.endpoint?.documentId
  });
  if (o.status === "ok")
    return {
      ...n,
      providerFields: {
        ...n.providerFields,
        endpoint: {
          documentId: o.selected.id,
          qualifiedName: o.selected.module + "." + o.selected.name
        }
      }
    };
  if (o.status === "none")
    return { ...n, providerFields: { ...n.providerFields, endpoint: void 0 } };
}
const F1 = ({
  width: t = "1em",
  height: n = "1em",
  fill: s = "currentColor",
  className: o,
  style: r
}) => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: t,
    height: n,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: o,
    style: r,
    children: [
      /* @__PURE__ */ e.jsx("path", { d: "M9.06641 3.18945L12.899 12.8024L15.0007 12.8024L11.1681 3.18945L9.06641 3.18945Z", fill: s }),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M4.61938 8.99843L5.93076 5.62017L7.24216 8.99843H4.61938ZM4.83198 3.18945L1 12.8024H3.14261L3.92632 10.7837H7.93534L8.71891 12.8024H10.8615L7.02954 3.18945L4.83198 3.18945Z",
          fill: s
        }
      )
    ]
  }
), v1 = ({
  width: t = "1em",
  height: n = "1em",
  fill: s = "currentColor",
  className: o,
  style: r
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: n,
    viewBox: "0 0 20 20",
    fill: s,
    xmlns: "http://www.w3.org/2000/svg",
    className: o,
    style: r,
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        d: "M20.6671 6.55367C20.4795 6.46132 20.3988 6.63731 20.2892 6.72664C20.2516 6.75546 20.2198 6.7929 20.1882 6.82747C19.9141 7.1216 19.5938 7.31482 19.1754 7.29175C18.5638 7.25718 18.0414 7.45035 17.5798 7.92033C17.4816 7.34077 17.1556 6.99459 16.6594 6.7727C16.3997 6.65737 16.1371 6.54195 15.9553 6.29109C15.8284 6.11237 15.7937 5.91336 15.7302 5.71727C15.6899 5.59912 15.6494 5.47795 15.5138 5.4577C15.3666 5.43462 15.3088 5.55857 15.2512 5.6625C15.0204 6.08642 14.9309 6.55353 14.9397 7.02638C14.9599 8.09052 15.4071 8.93818 16.2958 9.54096C16.3968 9.61018 16.4227 9.67936 16.3911 9.78028C16.3305 9.98796 16.2583 10.1897 16.1949 10.3974C16.1545 10.5301 16.0938 10.5589 15.9524 10.5013C15.4648 10.2966 15.0435 9.9937 14.6712 9.62756C14.0393 9.01329 13.4681 8.33564 12.7553 7.805C12.5904 7.68245 12.421 7.56607 12.2475 7.4561C11.5204 6.74675 12.3427 6.16417 12.5331 6.09504C12.7322 6.0229 12.6024 5.77496 11.9589 5.77783C11.3154 5.7807 10.7268 5.99695 9.97662 6.28534C9.86694 6.32867 9.75158 6.36036 9.63322 6.38621C8.95226 6.25643 8.24534 6.22761 7.50664 6.31119C6.11581 6.46683 5.00501 7.12725 4.18845 8.25478C3.20745 9.61032 2.97655 11.1501 3.25934 12.7563C3.55653 14.4489 4.41636 15.8504 5.73791 16.9463C7.10848 18.0823 8.68686 18.6389 10.4873 18.5322C11.5808 18.4688 12.7985 18.3218 14.172 17.1538C14.5182 17.3268 14.8818 17.3961 15.4849 17.4479C15.9494 17.4913 16.3967 17.4249 16.7429 17.3529C17.2854 17.2375 17.2479 16.7329 17.0517 16.6407C15.4619 15.8967 15.8109 16.1995 15.4935 15.9544C16.3014 14.9942 17.5191 13.9964 17.9952 10.7638C18.0327 10.5072 18.0009 10.3458 17.9952 10.1381C17.9923 10.0113 18.0211 9.96224 18.1655 9.94778C18.5636 9.90159 18.9502 9.79215 19.3052 9.59596C20.3352 9.03076 20.7508 8.10225 20.8489 6.98918C20.8633 6.81908 20.846 6.64315 20.6671 6.55381V6.55367ZM11.6906 16.5712C10.1497 15.3545 9.40245 14.9535 9.09373 14.9709C8.80522 14.9882 8.85711 15.3198 8.92058 15.5361C8.98691 15.7495 9.07358 15.8965 9.1947 16.0839C9.27837 16.208 9.33612 16.3924 9.11108 16.531C8.61481 16.8394 7.75203 16.4271 7.71158 16.4069C6.70747 15.8129 5.8678 15.0285 5.27623 13.9559C4.70497 12.9234 4.37309 11.8163 4.31834 10.6339C4.30391 10.3485 4.38762 10.2474 4.67033 10.1956C5.04251 10.1264 5.42628 10.1119 5.79851 10.1667C7.37103 10.3974 8.70983 11.1039 9.8323 12.2227C10.4729 12.8599 10.9576 13.6213 11.4569 14.3652C11.9878 15.1553 12.5591 15.908 13.2862 16.5251C13.5431 16.7413 13.7479 16.9057 13.9441 17.0269C13.3526 17.0932 12.3657 17.1076 11.6906 16.5712ZM12.4359 11.7434C12.4603 11.644 12.5494 11.5711 12.6572 11.5711C12.6838 11.5712 12.7102 11.5761 12.7351 11.5855C12.7669 11.5971 12.7957 11.6144 12.8188 11.6403C12.8592 11.6807 12.8823 11.7384 12.8823 11.7989C12.8823 11.9258 12.7813 12.0267 12.6544 12.0267C12.6008 12.0272 12.5488 12.0082 12.508 11.9733C12.4672 11.9384 12.4403 11.8899 12.4323 11.8367C12.4273 11.8057 12.4285 11.774 12.4359 11.7434ZM14.6487 13.0109C14.5266 13.0578 14.405 13.0946 14.2875 13.0994C14.0682 13.1109 13.8287 13.0215 13.6989 12.9119C13.497 12.7419 13.3527 12.6468 13.2921 12.3496C13.2661 12.2227 13.2805 12.0267 13.3036 11.9142C13.3556 11.672 13.2978 11.5162 13.1277 11.375C12.9892 11.2596 12.8131 11.2279 12.6198 11.2279C12.5477 11.2279 12.4813 11.1962 12.4323 11.1703C12.3515 11.13 12.2851 11.029 12.3486 10.905C12.3688 10.8647 12.467 10.7666 12.4901 10.7493C12.7526 10.5994 13.0556 10.6484 13.3354 10.7608C13.5951 10.8675 13.7914 11.0636 14.0741 11.3404C14.3626 11.6748 14.4146 11.7672 14.5791 12.018C14.709 12.2141 14.8272 12.416 14.9081 12.6466C14.9492 12.7672 14.9114 12.8698 14.7983 12.9422C14.7523 12.9717 14.6995 12.9914 14.6487 13.0109Z",
        fill: "#4D6BFE"
      }
    )
  }
), y1 = ({
  width: t = "1em",
  height: n = "1em",
  fill: s = "currentColor",
  className: o,
  style: r
}) => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: t,
    height: n,
    viewBox: "0 0 24 24",
    fill: s,
    xmlns: "http://www.w3.org/2000/svg",
    className: o,
    style: r,
    children: [
      /* @__PURE__ */ e.jsx(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M6 12C6 9.92893 4.32107 8.25 2.25 8.25V6.75C4.32107 6.75 6 5.07107 6 3H7.5C7.5 5.07107 9.17893 6.75 11.25 6.75V8.25C9.17893 8.25 7.5 9.92893 7.5 12H6ZM4.95569 7.5C5.69016 7.05744 6.30744 6.44016 6.75 5.70569C7.19256 6.44016 7.80984 7.05744 8.54431 7.5C7.80984 7.94256 7.19256 8.55984 6.75 9.29431C6.30744 8.55984 5.69016 7.94256 4.95569 7.5Z",
          fill: "black"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M15 21C15 18.1005 12.6495 15.75 9.75 15.75L9.75 14.25C12.6495 14.25 15 11.8995 15 9H16.5C16.5 11.8995 18.8505 14.25 21.75 14.25V15.75C18.8505 15.75 16.5 18.1005 16.5 21H15ZM15.75 12.0954C16.3929 13.339 17.411 14.3571 18.6546 15C17.411 15.6429 16.3929 16.661 15.75 17.9046C15.1071 16.661 14.089 15.6429 12.8454 15C14.089 14.3571 15.1071 13.339 15.75 12.0954Z",
          fill: "black"
        }
      )
    ]
  }
), M1 = ({
  width: t = "1em",
  height: n = "1em",
  fill: s = "currentColor",
  className: o,
  style: r
}) => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: t,
    height: n,
    viewBox: "0 0 24 24",
    fill: s,
    xmlns: "http://www.w3.org/2000/svg",
    className: o,
    style: r,
    children: [
      /* @__PURE__ */ e.jsx("mask", { id: "mask0_9657_331949", maskUnits: "userSpaceOnUse", x: "2", y: "2", width: "20", height: "20", children: /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M21.8079 10.1448H12.213V13.9894H17.7263C17.6377 14.5336 17.4387 15.0688 17.1472 15.5569C16.8133 16.1161 16.4006 16.5418 15.9775 16.866C14.7101 17.8372 13.2325 18.0358 12.2063 18.0358C9.61409 18.0358 7.39919 16.3604 6.54176 14.0838C6.50716 14.0012 6.48418 13.9159 6.4562 13.8315C6.26673 13.2521 6.1632 12.6384 6.1632 12.0006C6.1632 11.3369 6.27531 10.7014 6.47972 10.1013C7.28599 7.73451 9.55082 5.96672 12.2082 5.96672C12.7427 5.96672 13.2574 6.03034 13.7455 6.15724C14.861 6.44725 15.6501 7.01843 16.1336 7.47023L19.0511 4.61313C17.2764 2.98597 14.9629 2 12.2033 2C9.99721 1.99995 7.96042 2.68732 6.29134 3.84899C4.93776 4.79107 3.82764 6.0524 3.07844 7.5173C2.38158 8.87555 2 10.3808 2 11.9991C2 13.6176 2.38216 15.1384 3.07902 16.4841V16.4932C3.81508 17.9218 4.89146 19.1519 6.19967 20.0897C7.34254 20.9089 9.39181 22 12.2033 22C13.8202 22 15.2531 21.7085 16.5169 21.1622C17.4285 20.7681 18.2363 20.2541 18.9676 19.5935C19.9339 18.7206 20.6906 17.6409 21.2072 16.3987C21.7237 15.1565 22 13.7518 22 12.2289C22 11.5196 21.9288 10.7993 21.8079 10.1447V10.1448Z",
          fill: "white"
        }
      ) }),
      /* @__PURE__ */ e.jsxs("g", { mask: "url(#mask0_9657_331949)", children: [
        /* @__PURE__ */ e.jsx("g", { filter: "url(#filter0_f_9657_331949)", children: /* @__PURE__ */ e.jsx(
          "path",
          {
            d: "M1.85278 12.067C1.86339 13.66 2.31728 15.3034 3.00433 16.6302V16.6393C3.50075 17.6028 4.17922 18.3639 4.95198 19.118L9.61927 17.415C8.73625 16.9665 8.60151 16.6916 7.96852 16.1901C7.32167 15.5379 6.83956 14.789 6.53933 13.911H6.52723L6.53933 13.9019C6.34181 13.3221 6.32232 12.7067 6.31504 12.067H1.85278Z",
            fill: "url(#paint0_radial_9657_331949)"
          }
        ) }),
        /* @__PURE__ */ e.jsx("g", { filter: "url(#filter1_f_9657_331949)", children: /* @__PURE__ */ e.jsx(
          "path",
          {
            d: "M12.2131 1.92728C11.7518 3.54794 11.9282 5.12327 12.2131 6.03987C12.7458 6.04027 13.259 6.10377 13.7456 6.23027C14.8611 6.52029 15.6501 7.09148 16.1336 7.54328L19.1257 4.61319C17.3532 2.98797 15.22 1.92984 12.2131 1.92728Z",
            fill: "url(#paint1_radial_9657_331949)"
          }
        ) }),
        /* @__PURE__ */ e.jsx("g", { filter: "url(#filter2_f_9657_331949)", children: /* @__PURE__ */ e.jsx(
          "path",
          {
            d: "M12.203 1.91446C9.94028 1.91441 7.85121 2.61942 6.13928 3.81092C5.50364 4.25332 4.92032 4.76437 4.40092 5.33267C4.26485 6.60922 5.41952 8.17823 7.70612 8.16524C8.81557 6.8747 10.4564 6.03973 12.2827 6.03973C12.2844 6.03973 12.286 6.03986 12.2876 6.03987L12.2131 1.91475C12.2097 1.91475 12.2064 1.91446 12.203 1.91446Z",
            fill: "url(#paint2_radial_9657_331949)"
          }
        ) }),
        /* @__PURE__ */ e.jsx("g", { filter: "url(#filter3_f_9657_331949)", children: /* @__PURE__ */ e.jsx(
          "path",
          {
            d: "M19.6715 12.529L17.6518 13.9164C17.5632 14.4606 17.364 14.9958 17.0726 15.4839C16.7387 16.0431 16.3259 16.4688 15.9028 16.793C14.6381 17.7622 13.1644 17.9618 12.1385 17.9626C11.0781 19.7686 10.8922 20.6732 12.2131 22.1308C13.8475 22.1296 15.2965 21.8345 16.5746 21.2821C17.4985 20.8827 18.317 20.3618 19.0581 19.6923C20.0374 18.8077 20.8044 17.7135 21.3279 16.4546C21.8513 15.1958 22.1312 13.7723 22.1312 12.2289L19.6715 12.529Z",
            fill: "url(#paint3_radial_9657_331949)"
          }
        ) }),
        /* @__PURE__ */ e.jsx("g", { filter: "url(#filter4_f_9657_331949)", children: /* @__PURE__ */ e.jsx(
          "path",
          {
            d: "M12.064 9.99872V14.1355H21.7811C21.8665 13.569 22.1492 12.8359 22.1492 12.2289C22.1492 11.5197 22.078 10.6534 21.9572 9.99872H12.064Z",
            fill: "#3086FF"
          }
        ) }),
        /* @__PURE__ */ e.jsx("g", { filter: "url(#filter5_f_9657_331949)", children: /* @__PURE__ */ e.jsx(
          "path",
          {
            d: "M4.44723 5.18661C3.84758 5.84271 3.3353 6.57707 2.92912 7.37126C2.23227 8.72952 1.85071 10.3808 1.85071 11.9992C1.85071 12.022 1.8526 12.0443 1.85275 12.0671C2.16136 12.6588 6.11569 12.5455 6.315 12.0671C6.31475 12.0447 6.31224 12.023 6.31224 12.0006C6.31224 11.3368 6.42438 10.8475 6.62879 10.2474C6.88095 9.5072 7.27578 8.82556 7.78066 8.23826C7.89511 8.09214 8.20039 7.77802 8.28946 7.5896C8.32339 7.51784 8.22786 7.47755 8.22252 7.45229C8.21655 7.42404 8.08847 7.44676 8.05978 7.42571C7.96868 7.35889 7.78828 7.32399 7.67873 7.29298C7.44459 7.22668 7.05654 7.08047 6.84101 6.92892C6.15972 6.44985 5.09651 5.87761 4.44723 5.18661Z",
            fill: "url(#paint4_radial_9657_331949)"
          }
        ) }),
        /* @__PURE__ */ e.jsx("g", { filter: "url(#filter6_f_9657_331949)", children: /* @__PURE__ */ e.jsx(
          "path",
          {
            d: "M6.8557 7.45513C8.43554 8.41212 8.88987 6.97208 9.94024 6.52146L8.11309 2.73242C7.44096 3.01492 6.80593 3.36589 6.21672 3.77597C5.33679 4.3884 4.55974 5.13574 3.91785 5.98622L6.8557 7.45513Z",
            fill: "url(#paint5_radial_9657_331949)"
          }
        ) }),
        /* @__PURE__ */ e.jsx("g", { filter: "url(#filter7_f_9657_331949)", children: /* @__PURE__ */ e.jsx(
          "path",
          {
            d: "M7.49866 17.1223C5.37793 17.8879 5.04592 17.9154 4.85071 19.2297C5.22375 19.5937 5.62456 19.9305 6.05047 20.2358C7.19334 21.055 9.39173 22.1461 12.2033 22.1461C12.2066 22.1461 12.2097 22.1458 12.213 22.1458V17.8896C12.2109 17.8896 12.2084 17.8897 12.2063 17.8897C11.1535 17.8897 10.3122 17.6132 9.44958 17.1323C9.2369 17.0138 8.85104 17.3321 8.65489 17.1898C8.38436 16.9935 7.7333 17.3589 7.49866 17.1223Z",
            fill: "url(#paint6_radial_9657_331949)"
          }
        ) }),
        /* @__PURE__ */ e.jsx("g", { opacity: "0.5", filter: "url(#filter8_f_9657_331949)", children: /* @__PURE__ */ e.jsx(
          "path",
          {
            d: "M10.9712 17.7555V22.0721C11.3646 22.1181 11.774 22.1461 12.2034 22.1461C12.634 22.1461 13.0505 22.124 13.4552 22.0833V17.7846C13.0016 17.8622 12.5745 17.8897 12.2065 17.8897C11.7827 17.8897 11.3705 17.8404 10.9712 17.7555Z",
            fill: "url(#paint7_linear_9657_331949)"
          }
        ) })
      ] }),
      /* @__PURE__ */ e.jsxs("defs", { children: [
        /* @__PURE__ */ e.jsxs(
          "filter",
          {
            id: "filter0_f_9657_331949",
            x: "1.81772",
            y: "12.032",
            width: "7.8366",
            height: "7.12112",
            filterUnits: "userSpaceOnUse",
            "color-interpolation-filters": "sRGB",
            children: [
              /* @__PURE__ */ e.jsx("feFlood", { "flood-opacity": "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ e.jsx("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
              /* @__PURE__ */ e.jsx("feGaussianBlur", { stdDeviation: "0.0175303", result: "effect1_foregroundBlur_9657_331949" })
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "filter",
          {
            id: "filter1_f_9657_331949",
            x: "11.8944",
            y: "1.89222",
            width: "7.26641",
            height: "5.68612",
            filterUnits: "userSpaceOnUse",
            "color-interpolation-filters": "sRGB",
            children: [
              /* @__PURE__ */ e.jsx("feFlood", { "flood-opacity": "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ e.jsx("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
              /* @__PURE__ */ e.jsx("feGaussianBlur", { stdDeviation: "0.0175303", result: "effect1_foregroundBlur_9657_331949" })
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "filter",
          {
            id: "filter2_f_9657_331949",
            x: "4.35508",
            y: "1.8794",
            width: "7.96758",
            height: "6.32098",
            filterUnits: "userSpaceOnUse",
            "color-interpolation-filters": "sRGB",
            children: [
              /* @__PURE__ */ e.jsx("feFlood", { "flood-opacity": "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ e.jsx("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
              /* @__PURE__ */ e.jsx("feGaussianBlur", { stdDeviation: "0.0175303", result: "effect1_foregroundBlur_9657_331949" })
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "filter",
          {
            id: "filter3_f_9657_331949",
            x: "11.2473",
            y: "12.1939",
            width: "10.919",
            height: "9.97198",
            filterUnits: "userSpaceOnUse",
            "color-interpolation-filters": "sRGB",
            children: [
              /* @__PURE__ */ e.jsx("feFlood", { "flood-opacity": "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ e.jsx("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
              /* @__PURE__ */ e.jsx("feGaussianBlur", { stdDeviation: "0.0175303", result: "effect1_foregroundBlur_9657_331949" })
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "filter",
          {
            id: "filter4_f_9657_331949",
            x: "12.0289",
            y: "9.96366",
            width: "10.1553",
            height: "4.20696",
            filterUnits: "userSpaceOnUse",
            "color-interpolation-filters": "sRGB",
            children: [
              /* @__PURE__ */ e.jsx("feFlood", { "flood-opacity": "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ e.jsx("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
              /* @__PURE__ */ e.jsx("feGaussianBlur", { stdDeviation: "0.0175303", result: "effect1_foregroundBlur_9657_331949" })
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "filter",
          {
            id: "filter5_f_9657_331949",
            x: "1.81565",
            y: "5.15155",
            width: "6.51617",
            height: "7.35299",
            filterUnits: "userSpaceOnUse",
            "color-interpolation-filters": "sRGB",
            children: [
              /* @__PURE__ */ e.jsx("feFlood", { "flood-opacity": "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ e.jsx("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
              /* @__PURE__ */ e.jsx("feGaussianBlur", { stdDeviation: "0.0175303", result: "effect1_foregroundBlur_9657_331949" })
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "filter",
          {
            id: "filter6_f_9657_331949",
            x: "3.67136",
            y: "2.48593",
            width: "6.51532",
            height: "5.53732",
            filterUnits: "userSpaceOnUse",
            "color-interpolation-filters": "sRGB",
            children: [
              /* @__PURE__ */ e.jsx("feFlood", { "flood-opacity": "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ e.jsx("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
              /* @__PURE__ */ e.jsx("feGaussianBlur", { stdDeviation: "0.123245", result: "effect1_foregroundBlur_9657_331949" })
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "filter",
          {
            id: "filter7_f_9657_331949",
            x: "4.81565",
            y: "17.0702",
            width: "7.43243",
            height: "5.11092",
            filterUnits: "userSpaceOnUse",
            "color-interpolation-filters": "sRGB",
            children: [
              /* @__PURE__ */ e.jsx("feFlood", { "flood-opacity": "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ e.jsx("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
              /* @__PURE__ */ e.jsx("feGaussianBlur", { stdDeviation: "0.0175303", result: "effect1_foregroundBlur_9657_331949" })
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "filter",
          {
            id: "filter8_f_9657_331949",
            x: "10.9361",
            y: "17.7205",
            width: "2.55413",
            height: "4.46069",
            filterUnits: "userSpaceOnUse",
            "color-interpolation-filters": "sRGB",
            children: [
              /* @__PURE__ */ e.jsx("feFlood", { "flood-opacity": "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ e.jsx("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
              /* @__PURE__ */ e.jsx("feGaussianBlur", { stdDeviation: "0.0175303", result: "effect1_foregroundBlur_9657_331949" })
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "radialGradient",
          {
            id: "paint0_radial_9657_331949",
            cx: "0",
            cy: "0",
            r: "1",
            gradientTransform: "matrix(-0.415601 -9.95993 14.9426 -0.597686 9.52584 18.968)",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ e.jsx("stop", { offset: "0.141612", "stop-color": "#1ABD4D" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.247515", "stop-color": "#6EC30D" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.311547", "stop-color": "#8AC502" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.366013", "stop-color": "#A2C600" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.445673", "stop-color": "#C8C903" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.540305", "stop-color": "#EBCB03" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.615636", "stop-color": "#F7CD07" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.699345", "stop-color": "#FDCD04" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.771242", "stop-color": "#FDCE05" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.860566", "stop-color": "#FFCE0A" })
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "radialGradient",
          {
            id: "paint1_radial_9657_331949",
            cx: "0",
            cy: "0",
            r: "1",
            gradientTransform: "matrix(7.05806 -1.69631e-05 -9.92038e-06 8.92438 18.8458 7.33128)",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ e.jsx("stop", { offset: "0.408458", "stop-color": "#FB4E5A" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "1", "stop-color": "#FF4540" })
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "radialGradient",
          {
            id: "paint2_radial_9657_331949",
            cx: "0",
            cy: "0",
            r: "1",
            gradientTransform: "matrix(-9.88885 5.36243 7.4323 13.1383 14.9913 0.622623)",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ e.jsx("stop", { offset: "0.231273", "stop-color": "#FF4541" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.311547", "stop-color": "#FF4540" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.457516", "stop-color": "#FF4640" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.540305", "stop-color": "#FF473F" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.699346", "stop-color": "#FF5138" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.771242", "stop-color": "#FF5B33" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.860566", "stop-color": "#FF6C29" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "1", "stop-color": "#FF8C18" })
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "radialGradient",
          {
            id: "paint3_radial_9657_331949",
            cx: "0",
            cy: "0",
            r: "1",
            gradientTransform: "matrix(-17.9337 -22.9206 -8.64137 6.48127 12.3601 20.8364)",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ e.jsx("stop", { offset: "0.131546", "stop-color": "#0CBA65" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.209784", "stop-color": "#0BB86D" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.297297", "stop-color": "#09B479" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.396257", "stop-color": "#08AD93" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.477124", "stop-color": "#0AA6A9" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.568425", "stop-color": "#0D9CC6" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.667385", "stop-color": "#1893DD" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.768727", "stop-color": "#258BF1" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.858506", "stop-color": "#3086FF" })
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "radialGradient",
          {
            id: "paint4_radial_9657_331949",
            cx: "0",
            cy: "0",
            r: "1",
            gradientTransform: "matrix(-1.26913 10.7101 15.1251 1.71807 11.3366 3.80339)",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ e.jsx("stop", { offset: "0.366013", "stop-color": "#FF4E3A" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.457516", "stop-color": "#FF8A1B" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.540305", "stop-color": "#FFA312" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.615636", "stop-color": "#FFB60C" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.771242", "stop-color": "#FFCD0A" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.860566", "stop-color": "#FECF0A" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.915033", "stop-color": "#FECF08" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "1", "stop-color": "#FDCD01" })
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "radialGradient",
          {
            id: "paint5_radial_9657_331949",
            cx: "0",
            cy: "0",
            r: "1",
            gradientTransform: "matrix(-3.66844 3.97231 -11.4435 -10.1305 9.55195 3.6923)",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ e.jsx("stop", { offset: "0.315904", "stop-color": "#FF4C3C" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.603818", "stop-color": "#FF692C" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.726837", "stop-color": "#FF7825" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.884534", "stop-color": "#FF8D1B" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "1", "stop-color": "#FF9F13" })
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "radialGradient",
          {
            id: "paint6_radial_9657_331949",
            cx: "0",
            cy: "0",
            r: "1",
            gradientTransform: "matrix(-9.88885 -5.36243 7.4323 -13.1383 14.9913 23.3771)",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ e.jsx("stop", { offset: "0.231273", "stop-color": "#0FBC5F" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.311547", "stop-color": "#0FBC5F" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.366013", "stop-color": "#0FBC5E" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.457516", "stop-color": "#0FBC5D" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.540305", "stop-color": "#12BC58" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.699346", "stop-color": "#28BF3C" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.771242", "stop-color": "#38C02B" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.860566", "stop-color": "#52C218" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "0.915033", "stop-color": "#67C30F" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "1", "stop-color": "#86C504" })
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "linearGradient",
          {
            id: "paint7_linear_9657_331949",
            x1: "10.9712",
            y1: "19.9508",
            x2: "13.4552",
            y2: "19.9508",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ e.jsx("stop", { "stop-color": "#0FBC5C" }),
              /* @__PURE__ */ e.jsx("stop", { offset: "1", "stop-color": "#0CBA65" })
            ]
          }
        )
      ] })
    ]
  }
), V1 = ({
  width: t = "1em",
  height: n = "1em",
  fill: s = "currentColor",
  className: o,
  style: r
}) => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: t,
    height: n,
    viewBox: "0 0 20 20",
    fill: s,
    xmlns: "http://www.w3.org/2000/svg",
    className: o,
    style: r,
    children: [
      /* @__PURE__ */ e.jsxs("g", { "clip-path": "url(#clip0_9657_332013)", children: [
        /* @__PURE__ */ e.jsx("path", { d: "M5.6173 15.2111H2V15.7308H5.6173V15.2111Z", fill: "#1F70C1" }),
        /* @__PURE__ */ e.jsx("path", { d: "M5.6173 14.2187H2V14.7384H5.6173V14.2187Z", fill: "#1F70C1" }),
        /* @__PURE__ */ e.jsx("path", { d: "M4.58359 13.2273H3.03198V13.747H4.58359V13.2273Z", fill: "#1F70C1" }),
        /* @__PURE__ */ e.jsx("path", { d: "M4.58359 12.2358H3.03198V12.7555H4.58359V12.2358Z", fill: "#1F70C1" }),
        /* @__PURE__ */ e.jsx("path", { d: "M4.58359 11.2444H3.03198V11.764H4.58359V11.2444Z", fill: "#1F70C1" }),
        /* @__PURE__ */ e.jsx("path", { d: "M4.58359 10.2513H3.03198V10.7709H4.58359V10.2513Z", fill: "#1F70C1" }),
        /* @__PURE__ */ e.jsx("path", { d: "M5.6173 9.25983H2V9.77949H5.6173V9.25983Z", fill: "#1F70C1" }),
        /* @__PURE__ */ e.jsx("path", { d: "M5.6173 8.26837H2V8.78804H5.6173V8.26837Z", fill: "#1F70C1" }),
        /* @__PURE__ */ e.jsx(
          "path",
          {
            d: "M6.13342 15.7261L9.98663 15.7316C10.5026 15.7316 10.9688 15.5326 11.3171 15.2119H6.13348L6.13342 15.7261Z",
            fill: "#1F70C1"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "path",
          {
            d: "M6.13342 14.7384H11.6968C11.7907 14.578 11.8608 14.403 11.9032 14.2187H6.1335L6.13342 14.7384Z",
            fill: "#1F70C1"
          }
        ),
        /* @__PURE__ */ e.jsx("path", { d: "M8.71688 13.2273H7.16711V13.747H8.71688V13.2273Z", fill: "#1F70C1" }),
        /* @__PURE__ */ e.jsx(
          "path",
          {
            d: "M10.2684 13.2273V13.747H11.9601C11.9601 13.5682 11.9361 13.3932 11.8901 13.2273H10.2684Z",
            fill: "#1F70C1"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "path",
          {
            d: "M11.2637 12.2358H7.16711V12.7555H11.6966C11.5786 12.5565 11.4331 12.3814 11.2635 12.2358H11.2637Z",
            fill: "#1F70C1"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "path",
          {
            d: "M7.16711 11.2444V11.764H11.2637C11.4369 11.6185 11.5825 11.4434 11.6967 11.2444H7.16711Z",
            fill: "#1F70C1"
          }
        ),
        /* @__PURE__ */ e.jsx("path", { d: "M8.71688 10.2513H7.16711V10.7709H8.71688V10.2513Z", fill: "#1F70C1" }),
        /* @__PURE__ */ e.jsx(
          "path",
          {
            d: "M10.2684 10.7709H11.8901C11.9361 10.605 11.9601 10.43 11.9601 10.2512H10.2684V10.7709Z",
            fill: "#1F70C1"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "path",
          {
            d: "M11.6968 9.25983H6.13342V9.77949H11.9031C11.8552 9.59521 11.7852 9.42016 11.6967 9.25983H11.6968Z",
            fill: "#1F70C1"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "path",
          {
            d: "M9.98663 8.26837H6.13342V8.78804H11.3154C10.9689 8.46739 10.499 8.26837 9.98674 8.26837H9.98663Z",
            fill: "#1F70C1"
          }
        ),
        /* @__PURE__ */ e.jsx("path", { d: "M12.3362 9.77949H15.8171L15.6383 9.25983H12.3362V9.77949Z", fill: "#1F70C1" }),
        /* @__PURE__ */ e.jsx("path", { d: "M12.3362 8.78804H15.4744L15.2956 8.26837H12.3362V8.78804Z", fill: "#1F70C1" }),
        /* @__PURE__ */ e.jsx("path", { d: "M18.0192 15.732V15.2124H20.6047V15.732H18.0192Z", fill: "#1F70C1" }),
        /* @__PURE__ */ e.jsx("path", { d: "M18.0192 14.7383V14.2187H20.6047V14.7383H18.0192Z", fill: "#1F70C1" }),
        /* @__PURE__ */ e.jsx(
          "path",
          {
            d: "M16.4694 11.6645L16.3239 11.2444H14.9197H13.368V11.764H14.9197V11.2868L15.0838 11.764H17.8553L18.0192 11.2868V11.764H19.5708V11.2444H18.0192H16.6151L16.4694 11.6645Z",
            fill: "#1F70C1"
          }
        ),
        /* @__PURE__ */ e.jsx("path", { d: "M19.5707 10.2513H16.9577L16.7789 10.7709H19.5707V10.2513Z", fill: "#1F70C1" }),
        /* @__PURE__ */ e.jsx("path", { d: "M20.6047 8.78804V8.26837H17.6452L17.4664 8.78804H20.6047Z", fill: "#1F70C1" }),
        /* @__PURE__ */ e.jsx("path", { d: "M16.2908 15.212L16.4694 15.7261L16.6482 15.212H16.2908Z", fill: "#1F70C1" }),
        /* @__PURE__ */ e.jsx("path", { d: "M15.9442 14.2187L16.1267 14.7383H16.8123L16.9965 14.2187H15.9442Z", fill: "#1F70C1" }),
        /* @__PURE__ */ e.jsx("path", { d: "M15.5959 13.2273L15.7785 13.7469H17.1606L17.3429 13.2273H15.5959Z", fill: "#1F70C1" }),
        /* @__PURE__ */ e.jsx("path", { d: "M15.432 12.7555H17.5088L17.6857 12.2358H15.2532L15.432 12.7555Z", fill: "#1F70C1" }),
        /* @__PURE__ */ e.jsx("path", { d: "M13.368 10.7709H16.1599L15.9813 10.2513H13.368V10.7709Z", fill: "#1F70C1" }),
        /* @__PURE__ */ e.jsx("path", { d: "M20.6047 9.25983H17.3005L17.1238 9.77949H20.6047V9.25983Z", fill: "#1F70C1" }),
        /* @__PURE__ */ e.jsx("path", { d: "M14.9217 15.212H12.3362V15.7317H14.9217V15.212Z", fill: "#1F70C1" }),
        /* @__PURE__ */ e.jsx("path", { d: "M14.9217 14.2187H12.3362V14.7384H14.9217V14.2187Z", fill: "#1F70C1" }),
        /* @__PURE__ */ e.jsx("path", { d: "M14.9197 13.2273H13.368V13.747H14.9197V13.2273Z", fill: "#1F70C1" }),
        /* @__PURE__ */ e.jsx("path", { d: "M14.9197 12.2358H13.368V12.7555H14.9197V12.2358Z", fill: "#1F70C1" }),
        /* @__PURE__ */ e.jsx("path", { d: "M19.5708 12.2358H18.0192V12.7555H19.5708V12.2358Z", fill: "#1F70C1" }),
        /* @__PURE__ */ e.jsx("path", { d: "M19.5708 13.2273H18.0192V13.747H19.5708V13.2273Z", fill: "#1F70C1" }),
        /* @__PURE__ */ e.jsx(
          "path",
          {
            d: "M21.572 14.913C21.4635 14.913 21.3594 14.9561 21.2826 15.0329C21.2058 15.1097 21.1627 15.2138 21.1627 15.3223C21.1627 15.4309 21.2058 15.535 21.2826 15.6117C21.3594 15.6885 21.4635 15.7316 21.572 15.7316C21.6806 15.7316 21.7847 15.6885 21.8614 15.6117C21.9382 15.535 21.9813 15.4309 21.9813 15.3223C21.9813 15.2138 21.9382 15.1097 21.8614 15.0329C21.7847 14.9561 21.6806 14.913 21.572 14.913ZM21.572 14.9874C21.6608 14.9874 21.746 15.0227 21.8088 15.0855C21.8716 15.1483 21.9069 15.2335 21.9069 15.3223C21.9069 15.4111 21.8716 15.4963 21.8088 15.5591C21.746 15.6219 21.6608 15.6572 21.572 15.6572C21.4832 15.6572 21.398 15.6219 21.3352 15.5591C21.2724 15.4963 21.2371 15.4111 21.2371 15.3223C21.2371 15.2335 21.2724 15.1483 21.3352 15.0855C21.398 15.0227 21.4832 14.9874 21.572 14.9874ZM21.3981 15.1138V15.5308H21.4996V15.387H21.5572L21.6347 15.5308H21.7459L21.6525 15.3712C21.6983 15.3532 21.7281 15.3113 21.7281 15.2456C21.7281 15.1696 21.6804 15.1138 21.587 15.1138H21.3981ZM21.4996 15.1936H21.575C21.6068 15.1936 21.6246 15.2076 21.6246 15.2374V15.2675C21.6246 15.2973 21.6068 15.3114 21.575 15.3114H21.4996V15.1936Z",
            fill: "#1F70C1"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "clip0_9657_332013", children: /* @__PURE__ */ e.jsx("rect", { width: "20", height: "7.46326", fill: "white", transform: "translate(2 8.26837)" }) }) })
    ]
  }
), H1 = ({
  width: t = "1em",
  height: n = "1em",
  fill: s = "currentColor",
  className: o,
  style: r
}) => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: t,
    height: n,
    viewBox: "0 0 24 24",
    fill: s,
    xmlns: "http://www.w3.org/2000/svg",
    className: o,
    style: r,
    children: [
      /* @__PURE__ */ e.jsxs("g", { "clip-path": "url(#clip0_9657_331913)", children: [
        /* @__PURE__ */ e.jsx("path", { d: "M2 2H22V22H2V2Z", fill: "#F3F3F3" }),
        /* @__PURE__ */ e.jsx("path", { d: "M2.86963 2.86954H11.5653V11.5652H2.86963V2.86954Z", fill: "#F35325" }),
        /* @__PURE__ */ e.jsx("path", { d: "M12.4348 2.86954H21.1305V11.5652H12.4348V2.86954Z", fill: "#81BC06" }),
        /* @__PURE__ */ e.jsx("path", { d: "M2.86963 12.4348H11.5653V21.1305H2.86963V12.4348Z", fill: "#05A6F0" }),
        /* @__PURE__ */ e.jsx("path", { d: "M12.4348 12.4348H21.1305V21.1305H12.4348V12.4348Z", fill: "#FFBA08" })
      ] }),
      /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "clip0_9657_331913", children: /* @__PURE__ */ e.jsx("rect", { width: "20", height: "20", fill: "white", transform: "translate(2 2)" }) }) })
    ]
  }
), _1 = ({
  width: t = "1em",
  height: n = "1em",
  fill: s = "currentColor",
  className: o,
  style: r
}) => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: t,
    height: n,
    viewBox: "0 0 24 24",
    fill: s,
    xmlns: "http://www.w3.org/2000/svg",
    className: o,
    style: r,
    children: [
      /* @__PURE__ */ e.jsx("path", { d: "M7.49892 4.5H4.49939V7.47165H7.49892V4.5Z", fill: "#2F3646" }),
      /* @__PURE__ */ e.jsx("path", { d: "M19.4986 4.5H16.499V7.47165H19.4986V4.5Z", fill: "#2F3646" }),
      /* @__PURE__ */ e.jsx("path", { d: "M10.4985 7.47133H4.49939V10.443H10.4985V7.47133Z", fill: "#2F3646" }),
      /* @__PURE__ */ e.jsx("path", { d: "M19.4987 7.47133H13.4996V10.443H19.4987V7.47133Z", fill: "#2F3646" }),
      /* @__PURE__ */ e.jsx("path", { d: "M19.4989 10.4428H4.49939V13.4143H19.4989V10.4428Z", fill: "#2F3646" }),
      /* @__PURE__ */ e.jsx("path", { d: "M7.49892 13.4151H4.49939V16.3868H7.49892V13.4151Z", fill: "#2F3646" }),
      /* @__PURE__ */ e.jsx("path", { d: "M13.4988 13.4151H10.4993V16.3868H13.4988V13.4151Z", fill: "#2F3646" }),
      /* @__PURE__ */ e.jsx("path", { d: "M19.4986 13.4151H16.499V16.3868H19.4986V13.4151Z", fill: "#2F3646" }),
      /* @__PURE__ */ e.jsx("path", { d: "M10.5004 16.3886H1.5V19.3602H10.5004V16.3886Z", fill: "#2F3646" }),
      /* @__PURE__ */ e.jsx("path", { d: "M22.5 16.3886H13.4996V19.3602H22.5V16.3886Z", fill: "#2F3646" })
    ]
  }
), w1 = ({
  width: t = "1em",
  height: n = "1em",
  fill: s = "currentColor",
  className: o,
  style: r
}) => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: t,
    height: n,
    viewBox: "0 0 16 16",
    fill: s,
    xmlns: "http://www.w3.org/2000/svg",
    className: o,
    style: r,
    children: [
      /* @__PURE__ */ e.jsxs("g", { "clip-path": "url(#clip0_9657_331994)", children: [
        /* @__PURE__ */ e.jsx(
          "path",
          {
            d: "M21.8605 18.8972C21.8605 19.1118 21.7029 19.2558 21.5163 19.2558V19.2545C21.3245 19.2558 21.1698 19.1118 21.1698 18.8973C21.1698 18.6828 21.3245 18.5392 21.5163 18.5392C21.7029 18.5391 21.8605 18.6827 21.8605 18.8972ZM22 18.8972C22 18.6027 21.7713 18.4318 21.5163 18.4318C21.2596 18.4318 21.0309 18.6027 21.0309 18.8972C21.0309 19.1915 21.2597 19.3632 21.5163 19.3632C21.7713 19.3632 22 19.1915 22 18.8972ZM21.4361 18.9366H21.4879L21.6079 19.1473H21.7397L21.6068 18.9277C21.6755 18.9228 21.732 18.8901 21.732 18.7976C21.732 18.6827 21.6527 18.6458 21.5186 18.6458H21.3245V19.1473H21.4361V18.9366M21.4361 18.8517V18.7309H21.5137C21.5559 18.7309 21.6135 18.7344 21.6135 18.7859C21.6135 18.8419 21.5837 18.8517 21.5339 18.8517H21.4361Z",
            fill: "black"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "path",
          {
            d: "M18.7426 16.3318L19.3457 17.9817H18.1209L18.7426 16.3318ZM18.0967 15.6894L16.7069 19.2107H17.6883L17.9082 18.5885H19.5529L19.7609 19.2107H20.8263L19.4262 15.6889L18.0967 15.6894ZM15.3065 19.212H16.3022V15.6883L15.3063 15.6881L15.3065 19.212ZM8.39435 15.6881L7.56365 18.4809L6.76788 15.6883L5.69356 15.6881L6.83008 19.212H8.2645L9.41017 15.6881H8.39435ZM12.419 16.4554H12.8469C13.4678 16.4554 13.8693 16.7341 13.8693 17.4575C13.8693 18.181 13.4678 18.4597 12.8469 18.4597H12.419V16.4554ZM11.4317 15.6881V19.212H13.0459C13.9059 19.212 14.1867 19.0691 14.4904 18.7484C14.7048 18.5232 14.8436 18.029 14.8436 17.4888C14.8436 16.9933 14.7262 16.5517 14.5215 16.2765C14.1527 15.7843 13.6214 15.6881 12.8285 15.6881H11.4317ZM2 15.6832V19.212H3.0041V16.5326L3.78211 16.5328C4.03972 16.5328 4.22335 16.597 4.34741 16.7295C4.50475 16.8971 4.569 17.1676 4.569 17.6625V19.212H5.54197V17.2623C5.54197 15.8708 4.65504 15.6832 3.78723 15.6832H2ZM9.82923 15.6881L9.82963 19.212H10.8248V15.6881H9.82923Z",
            fill: "black"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "path",
          {
            d: "M4.67587 8.67158C4.67587 8.67158 5.95647 6.78215 8.5134 6.58668V5.9012C5.68127 6.12865 3.22876 8.52733 3.22876 8.52733C3.22876 8.52733 4.61782 12.5429 8.5134 12.9105V12.1819C5.65464 11.8223 4.67587 8.67158 4.67587 8.67158ZM8.5134 10.7329V11.4001C6.35281 11.015 5.75309 8.76901 5.75309 8.76901C5.75309 8.76901 6.79047 7.6198 8.5134 7.43343V8.16564C8.51209 8.16564 8.51118 8.16524 8.5101 8.16524C7.60582 8.05672 6.89939 8.90148 6.89939 8.90148C6.89939 8.90148 7.29534 10.3236 8.5134 10.7329ZM8.5134 4.63687V5.9012C8.59654 5.89482 8.67968 5.88942 8.76327 5.88657C11.9831 5.77805 14.081 8.52733 14.081 8.52733C14.081 8.52733 11.6715 11.4573 9.16116 11.4573C8.93109 11.4573 8.7157 11.4359 8.5134 11.4001V12.1819C8.68639 12.2039 8.86576 12.2168 9.05292 12.2168C11.3889 12.2168 13.0783 11.0238 14.7141 9.61178C14.9853 9.82898 16.0957 10.3574 16.3239 10.5887C14.7686 11.8909 11.1437 12.9406 9.08872 12.9406C8.89063 12.9406 8.70039 12.9286 8.5134 12.9105V14.0091H17.3925V4.63687H8.5134ZM8.5134 7.43343V6.58668C8.59569 6.58093 8.6786 6.57655 8.76327 6.57388C11.0786 6.50115 12.5977 8.56358 12.5977 8.56358C12.5977 8.56358 10.957 10.8422 9.1978 10.8422C8.94463 10.8422 8.71769 10.8016 8.5134 10.7329V8.16564C9.41478 8.27455 9.59614 8.67272 10.1381 9.5761L11.3433 8.55982C11.3433 8.55982 10.4635 7.40595 8.98037 7.40595C8.81915 7.40589 8.66488 7.41722 8.5134 7.43343Z",
            fill: "#77B900"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("clipPath", { id: "clip0_9657_331994", children: /* @__PURE__ */ e.jsx("rect", { width: "20", height: "14.7263", fill: "white", transform: "translate(2 4.63684)" }) }) })
    ]
  }
), L1 = ({
  width: t = "1em",
  height: n = "1em",
  fill: s = "currentColor",
  className: o,
  style: r
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: t,
    height: n,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: o,
    style: r,
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        d: "M14.0755 6.72948C14.2351 6.25714 14.2883 5.75855 14.2395 5.26434C14.1908 4.77013 14.0267 4.29342 13.7741 3.86481C13.3972 3.21752 12.8209 2.70582 12.1294 2.39967C11.4378 2.09352 10.6664 2.0148 9.9261 2.17224C9.59361 1.80049 9.18133 1.50309 8.72028 1.30191C8.25924 1.10072 7.76273 0.995758 7.25735 1.00013C6.49929 1.00013 5.76338 1.23193 5.14718 1.67366C4.53541 2.11101 4.07879 2.73206 3.84384 3.44057C3.35176 3.54116 2.88628 3.74235 2.47843 4.03538C2.07058 4.3284 1.72923 4.70016 1.48098 5.13314C1.09973 5.78042 0.940138 6.5283 1.01993 7.2718C1.09973 8.01531 1.41448 8.71508 1.92429 9.27052C1.7647 9.74286 1.7115 10.2414 1.76027 10.7357C1.81346 11.2299 1.97306 11.7066 2.22575 12.1352C2.60256 12.7825 3.17887 13.2942 3.87043 13.6003C4.562 13.9065 5.33337 13.9852 6.0737 13.8278C6.40619 14.1995 6.81847 14.4969 7.27951 14.6981C7.74056 14.8993 8.23707 15.0042 8.74245 14.9999C9.50051 14.9999 10.2408 14.7681 10.8526 14.3263C11.4644 13.889 11.921 13.2679 12.156 12.5551C12.648 12.4545 13.1135 12.2533 13.5214 11.9602C13.9292 11.6672 14.2661 11.2955 14.5188 10.8625C14.9001 10.2152 15.0597 9.46733 14.9799 8.72382C14.9001 7.98032 14.5853 7.28055 14.0755 6.72948ZM8.77348 14.0814C8.06862 14.0814 7.5189 13.8671 7.04456 13.4735C7.06672 13.4604 7.10219 13.4429 7.12879 13.4254L9.95269 11.8159C10.0236 11.7766 10.0813 11.7197 10.1212 11.6497C10.1611 11.5798 10.1832 11.501 10.1832 11.4223V7.49485L11.3757 8.17713C11.3757 8.17713 11.389 8.18588 11.3935 8.19025C11.3935 8.19462 11.3979 8.20337 11.4023 8.20774V11.4617C11.4023 12.9356 10.1566 14.0858 8.77348 14.0858V14.0814ZM3.03257 11.676C2.72225 11.1468 2.607 10.5214 2.71782 9.9178C2.73999 9.93092 2.77546 9.95279 2.80206 9.96591L5.62596 11.5754C5.69689 11.6147 5.77669 11.6366 5.85648 11.6366C5.93628 11.6366 6.01607 11.6147 6.087 11.5754L9.53598 9.61165V10.9718C9.53598 10.9718 9.53598 10.9849 9.53598 10.9937C9.53598 10.9981 9.52711 11.0068 9.52268 11.0112L6.66775 12.6381C6.05597 12.9837 5.33337 13.0799 4.65067 12.9006C3.96797 12.7212 3.38723 12.2795 3.03701 11.6803L3.03257 11.676ZM2.28781 5.59236C2.59813 5.05879 3.0902 4.65205 3.67095 4.44212L3.67095 7.75727C3.67095 7.83599 3.69311 7.91472 3.73301 7.98469C3.77291 8.05467 3.83054 8.11153 3.90147 8.15089L7.35045 10.1146L6.15793 10.7969C6.15793 10.7969 6.14464 10.8013 6.1402 10.8056C6.13134 10.8056 6.1269 10.8056 6.11804 10.8056L3.2631 9.17867C2.65133 8.82879 2.20802 8.25585 2.02626 7.5867C1.8445 6.91317 1.93759 6.20028 2.28781 5.59673V5.59236ZM12.0983 7.84474L8.64936 5.88101L9.84186 5.20311C9.84186 5.20311 9.85517 5.19874 9.8596 5.19437H9.88177L12.7367 6.82133C13.1756 7.07062 13.5302 7.438 13.7652 7.87973C14.0001 8.32146 14.0977 8.82004 14.0578 9.31425C14.0134 9.81284 13.8273 10.2852 13.5214 10.6788C13.2155 11.0768 12.8032 11.3786 12.3289 11.5491V8.23398C12.3289 8.15526 12.3067 8.07654 12.2668 8.00656C12.2269 7.93658 12.1693 7.87973 12.0983 7.84036V7.84474ZM13.2864 6.07782C13.2864 6.07782 13.2288 6.04284 13.2022 6.02972L10.3783 4.42025C10.3073 4.38089 10.2275 4.35902 10.1478 4.35902C10.068 4.35902 9.98373 4.38089 9.91723 4.42025L6.46825 6.38397V5.0238C6.46825 5.0238 6.46825 5.01068 6.46825 5.00193C6.46825 4.99756 6.47712 4.98881 6.48156 4.98444L9.33649 3.35748C9.77537 3.10818 10.2719 2.98572 10.7773 3.00759C11.2826 3.02946 11.7703 3.19128 12.1826 3.47556C12.5948 3.75984 12.9185 4.15784 13.1135 4.61706C13.3086 5.07628 13.3662 5.58361 13.282 6.07345L13.2864 6.07782ZM5.81659 8.50514L4.62407 7.82287C4.62407 7.82287 4.61077 7.81412 4.60634 7.80975C4.60634 7.80538 4.60191 7.79663 4.59747 7.79226L4.59747 4.53833C4.59747 4.03975 4.74376 3.55429 5.01418 3.13005C5.2846 2.71019 5.67029 2.37343 6.13133 2.1635C6.58795 1.95357 7.09776 1.87484 7.5987 1.93607C8.09964 2.00167 8.57399 2.20286 8.95968 2.52213C8.93751 2.53525 8.90204 2.55274 8.87544 2.57024L6.05154 4.1797C5.98061 4.21907 5.92298 4.27592 5.88308 4.3459C5.84318 4.41587 5.82102 4.4946 5.82102 4.57332V8.50077L5.81659 8.50514ZM6.46382 7.12748L7.99769 6.25277L9.53155 7.12748V8.8769L7.99769 9.75161L6.46382 8.8769V7.12748Z",
        fill: s
      }
    )
  }
), y = {
  OpenAI: "openai",
  Anthropic: "anthropic",
  Mistral: "mistral",
  Microsoft: "microsoft",
  Google: "google",
  Deepseek: "deepseek",
  Nvidia: "nvidia",
  IBM: "ibm"
}, k1 = Object.values(y), B1 = {
  [y.OpenAI]: (t) => /* @__PURE__ */ e.jsx(L1, { width: t, height: t }),
  [y.Anthropic]: (t) => /* @__PURE__ */ e.jsx(F1, { width: t, height: t }),
  [y.Mistral]: (t) => /* @__PURE__ */ e.jsx(_1, { width: t, height: t }),
  [y.Microsoft]: (t) => /* @__PURE__ */ e.jsx(H1, { width: t, height: t }),
  [y.Google]: (t) => /* @__PURE__ */ e.jsx(M1, { width: t, height: t }),
  [y.Deepseek]: (t) => /* @__PURE__ */ e.jsx(v1, { width: t, height: t }),
  [y.Nvidia]: (t) => /* @__PURE__ */ e.jsx(w1, { width: t, height: t }),
  [y.IBM]: (t) => /* @__PURE__ */ e.jsx(V1, { width: t, height: t })
}, J = (t, n) => {
  const s = t?.toLowerCase() ?? "";
  for (const o of k1)
    if (s.includes(o))
      return B1[o](n);
  return /* @__PURE__ */ e.jsx(y1, { width: n, height: n });
}, Z1 = ({
  studioPro: t,
  documentId: n,
  model: s,
  analyticsService: o,
  setModel: r,
  updateStudioProDocument: d
}) => {
  const [c, h] = x.useState(), [u, C] = x.useState(), [j, F] = x.useState(null), [f, V] = x.useState(null), i = s.providerFields, v = async () => {
    i.key && P(t, i.key);
  }, M = async () => {
    i.endpoint && P(t, i.endpoint);
  }, m = async (l) => {
    const q = l.providerFields, e1 = await A(t, q.key);
    h(e1);
    const t1 = await A(t, q.endpoint);
    C(t1), F(null), V(null);
  }, B = async () => {
    const l = await g1(t, s);
    l && (r(l), d(l), m(l));
  }, Z = async () => {
    const l = await m1(t, s);
    l && (r(l), d(l), m(l));
  }, a = async () => {
    o.trackModelListTriggered(n, s.provider);
    const l = await j1(t, s);
    l ? (F(l), V(/* @__PURE__ */ new Date())) : (V(null), F(null));
  }, I = (l) => {
    (i.key && l.includes(i.key.documentId) || i.endpoint && l.includes(i.endpoint.documentId) || l.includes("projectSettings")) && m(s);
  };
  K({
    studioPro: t,
    dependentIds: [i.key?.documentId, i.endpoint?.documentId].filter(
      (l) => !!l
    ),
    watchProjectSettings: !0,
    onDependentDocumentsChanged: I
  }), Y({
    studioPro: t,
    onPermissionsChanged: () => m(s)
  }), x.useEffect(() => {
    m(s);
  }, []);
  const _ = (l) => l === p.Required ? "This field is required" : l === p.NotFound ? "Selected constant not found. It might have been deleted or renamed. Please update the constant selection." : l === p.InvalidType ? "Selected constant must be of type string." : l === p.Excluded ? "Selected constant is excluded from the project and cannot be used." : !0, L = c === p.EmptyValue || c === p.InvalidContent || c === p.PrivateValue, Q = u === p.EmptyValue || u === p.InvalidContent || u === p.PrivateValue;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      T,
      {
        label: "Project endpoint",
        ariaLabel: "Project endpoint",
        value: i.endpoint?.qualifiedName ?? "",
        icon: i.endpoint ? /* @__PURE__ */ e.jsx(G, {}) : void 0,
        buttonCaption: "Select...",
        onClick: B,
        onClickSecondary: i.endpoint ? M : void 0,
        validate: () => _(u),
        buttonCaptionSecondary: i.endpoint ? "Show" : void 0
      }
    ),
    Q && /* @__PURE__ */ e.jsxs(U, { children: [
      /* @__PURE__ */ e.jsx(N, { children: u === p.PrivateValue ? "Missing permissions" : "Invalid constant value" }),
      /* @__PURE__ */ e.jsx("div", { children: u === p.PrivateValue ? "Private constants require additional permissions for local use. Grant access via View > Extensions and reopen the current tab." : "In order to test your Model locally, please set a valid value for the endpoint constant. E.g. https://resource-name.services.ai.azure.com/api/projects/project-name" })
    ] }),
    /* @__PURE__ */ e.jsx(
      T,
      {
        label: "API key",
        ariaLabel: "API key",
        value: i.key?.qualifiedName ?? "",
        icon: i.key ? /* @__PURE__ */ e.jsx(G, {}) : void 0,
        buttonCaption: "Select...",
        onClick: Z,
        onClickSecondary: i.key ? v : void 0,
        validate: () => _(c),
        buttonCaptionSecondary: i.key ? "Show" : void 0
      }
    ),
    L && /* @__PURE__ */ e.jsxs(U, { children: [
      /* @__PURE__ */ e.jsx(N, { children: c === p.PrivateValue ? "Missing permissions" : "Invalid constant value" }),
      /* @__PURE__ */ e.jsx("div", { children: c === p.PrivateValue ? "Private constants require additional permissions for local use. Grant access via View > Extensions and reopen the current tab." : "In order to test your Model locally, please set a valid value for the key constant." })
    ] }),
    (!i.endpoint || !i.key) && /* @__PURE__ */ e.jsxs(w, { children: [
      /* @__PURE__ */ e.jsx(H, { children: /* @__PURE__ */ e.jsx(O, {}) }),
      /* @__PURE__ */ e.jsx(H, { fullWidth: !0, children: /* @__PURE__ */ e.jsx(
        E,
        {
          href: "https://docs.mendix.com/agents/reference-guide/external-connectors/openai/#azure-resource-name",
          target: "_blank",
          rel: "noreferrer,noopener",
          children: "How to get the project endpoint and API key"
        }
      ) })
    ] }),
    i.endpoint && i.key && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx($, { label: "Deployments", buttonCaption: "List deployments", onPress: a }),
      f && /* @__PURE__ */ e.jsxs(R, { children: [
        "Last updated: ",
        f.toLocaleString()
      ] }),
      j && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(
          X,
          {
            ariaLabel: "Deployments table",
            columns: [
              {
                id: "name",
                caption: "Deployment",
                allowsResizing: !0,
                isRowHeader: !0
              },
              {
                id: "model",
                caption: "Model",
                allowsResizing: !0
              },
              {
                id: "publisher",
                caption: "Publisher",
                allowsResizing: !0
              }
            ],
            data: j.map((l) => [
              {
                cellContent: l.name,
                tooltipText: l.name
              },
              {
                cellContent: l.modelName,
                tooltipText: `${l.modelName} (version ${l.modelVersion})`
              },
              {
                cellContent: /* @__PURE__ */ e.jsxs(w, { alignItems: "center", children: [
                  J(l.modelPublisher, "1.3em"),
                  /* @__PURE__ */ e.jsx("div", { children: l.modelPublisher })
                ] }),
                tooltipText: l.modelPublisher
              }
            ])
          }
        ),
        /* @__PURE__ */ e.jsx(R, { children: "This list may contain deployments that are not text-to-text supported." })
      ] })
    ] })
  ] });
}, I1 = async (t, n, s, o, r) => {
  const d = u1(t);
  let c;
  try {
    const h = n.providerFields, u = await f1(t, h.key);
    if (!u)
      throw new Error("No key value found. Please make sure the key constant is correctly configured.");
    const C = x1(t, u);
    if (C.type !== "TEXT_GENERATION")
      throw new Error(
        `Unsupported key type: ${C.type}. Only Text Generation keys are currently supported.`
      );
    const j = {
      key: h.key,
      keyId: C.keyId || "",
      keyName: C.keyName || "",
      resourceName: C.name || "",
      environment: C.environment || "",
      deepLinkURL: C.deepLinkUrl || ""
    };
    if (h?.keyId === j.keyId)
      return;
    c = {
      ...n,
      providerFields: {
        ...j
      }
    }, o(c), r(c);
  } catch (h) {
    d.error("Error during MxCloud GenAI key import:", h), s(p.InvalidContent), c = z(n), o(c), r(c);
  }
}, S1 = async (t, n) => {
  let s = [];
  const o = [
    {
      title: "Getting available model versions",
      description: "Getting available model versions",
      action: async () => {
        const d = await W(t, n);
        return typeof d == "string" ? d : (s = d, !0);
      }
    }
  ], r = await t.ui.dialogs.showProgressDialog("Model versions", o);
  switch (r.result) {
    case "Success":
      return s;
    case "UserCancelled":
      return;
    case "Failure": {
      const d = "No connection. Make sure you are connected to the internet and check that a valid key is set as value for the selected constant.", c = r.failedStep?.error ?? "";
      await t.ui.messageBoxes.show("error", d, c);
      return;
    }
  }
};
async function b1(t, n) {
  const s = n.providerFields, o = await t.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" },
    selectedElementId: s?.key?.documentId
  });
  if (o.status === "ok")
    return {
      ...n,
      providerFields: {
        ...n.providerFields,
        key: {
          documentId: o.selected.id,
          qualifiedName: o.selected.module + "." + o.selected.name
        }
      }
    };
  if (o.status === "none")
    return { ...n, providerFields: { ...n.providerFields, key: void 0 } };
}
const D = () => {
}, D1 = ({
  studioPro: t,
  documentId: n,
  model: s,
  setModel: o,
  analyticsService: r,
  updateStudioProDocument: d
}) => {
  const [c, h] = x.useState(), [u, C] = x.useState(null), [j, F] = x.useState(null), f = s.providerFields, V = async () => {
    f.key && P(t, f.key);
  }, i = async (a) => {
    const I = a.providerFields, _ = await A(t, I.key);
    if (h(_), C(null), F(null), !_)
      I1(t, a, h, o, d);
    else {
      const L = z(a);
      o(L), d(L);
    }
  }, v = async () => {
    const a = await b1(t, s);
    a && (o(a), d(a), await i(a));
  }, M = async () => {
    r.trackModelListTriggered(n, s.provider);
    const a = await S1(t, s);
    a ? (C(a), F(/* @__PURE__ */ new Date())) : (F(null), C(null));
  }, m = (a) => {
    (f.key && a.includes(f.key.documentId) || a.includes("projectSettings")) && i(s);
  };
  K({
    studioPro: t,
    dependentIds: [f.key?.documentId].filter((a) => !!a),
    watchProjectSettings: !0,
    onDependentDocumentsChanged: m
  }), Y({
    studioPro: t,
    onPermissionsChanged: () => i(s)
  }), x.useEffect(() => {
    i(s);
  }, []);
  const B = (a) => a === p.Required ? "Model key is required" : a === p.NotFound ? "Selected constant not found. It might have been deleted or renamed. Please update the constant selection." : a === p.InvalidType ? "Selected constant must be of type string." : a === p.Excluded ? "Selected constant is excluded from the project and cannot be used." : !0, Z = c === p.EmptyValue || c === p.InvalidContent || c === p.PrivateValue;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      T,
      {
        label: "Model key",
        ariaLabel: "Model key",
        value: f.key?.qualifiedName ?? "",
        icon: f.key ? /* @__PURE__ */ e.jsx(G, {}) : void 0,
        buttonCaption: "Select...",
        onClick: v,
        onClickSecondary: f.key ? V : void 0,
        validate: () => B(c),
        buttonCaptionSecondary: f.key ? "Show" : void 0
      }
    ),
    !f.key && /* @__PURE__ */ e.jsxs(w, { children: [
      /* @__PURE__ */ e.jsx(H, { children: /* @__PURE__ */ e.jsx(O, {}) }),
      /* @__PURE__ */ e.jsx(H, { fullWidth: !0, children: /* @__PURE__ */ e.jsx(
        E,
        {
          href: "https://genai.home.mendix.com/p/resources",
          target: "_blank",
          rel: "noreferrer,noopener",
          children: "Create a key in the portal"
        }
      ) })
    ] }),
    Z && /* @__PURE__ */ e.jsxs(U, { children: [
      /* @__PURE__ */ e.jsx(N, { children: c === p.PrivateValue ? "Missing permissions" : "Invalid constant value" }),
      /* @__PURE__ */ e.jsx("div", { children: c === p.PrivateValue ? "Private constants require additional permissions for local use. Grant access via View > Extensions and reopen the current tab." : "In order to test your Model locally, please set a valid value for the key constant." })
    ] }),
    f.keyId && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(
        b,
        {
          label: "Resource",
          ariaLabel: "Resource name",
          value: f.resourceName,
          onChange: D,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ e.jsx(
        b,
        {
          label: "Key name",
          ariaLabel: "Key name",
          value: f.keyName,
          onChange: D,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ e.jsx(
        b,
        {
          label: "Environment",
          ariaLabel: "Environment",
          value: f.environment,
          onChange: D,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ e.jsxs(w, { children: [
        /* @__PURE__ */ e.jsx(H, { children: /* @__PURE__ */ e.jsx(O, {}) }),
        /* @__PURE__ */ e.jsx(H, { fullWidth: !0, children: /* @__PURE__ */ e.jsx(E, { href: f.deepLinkURL, target: "_blank", rel: "noreferrer,noopener", children: "View resource in the portal" }) })
      ] }),
      /* @__PURE__ */ e.jsx($, { label: "Model versions", buttonCaption: "List models", onPress: M }),
      j && /* @__PURE__ */ e.jsxs(R, { children: [
        "Last updated: ",
        j.toLocaleString()
      ] }),
      u && /* @__PURE__ */ e.jsx(
        X,
        {
          ariaLabel: "Model versions table",
          columns: [
            {
              id: "name",
              caption: "Model",
              allowsResizing: !0,
              isRowHeader: !0
            },
            {
              id: "id",
              caption: "Model ID",
              allowsResizing: !0
            }
          ],
          data: u.map((a) => [
            {
              cellContent: /* @__PURE__ */ e.jsxs(w, { alignItems: "center", children: [
                J(a.id, "1.3em"),
                /* @__PURE__ */ e.jsx("div", { children: a.name })
              ] }),
              tooltipText: a.name
            },
            {
              cellContent: a.id,
              tooltipText: a.id
            }
          ])
        }
      )
    ] })
  ] });
}, E1 = d1(), G1 = ({ studioPro: t, analyticsService: n, documentId: s }) => {
  const o = t.ui.messageBoxes, r = t.app.model.customBlobDocuments, [d, c] = x.useState(0), [h, u] = x.useState(!1), [C, j] = x.useState(E1), F = [
    {
      key: g.MxCloudGenAI,
      caption: k[g.MxCloudGenAI].caption,
      icon: k[g.MxCloudGenAI].icon
    },
    {
      key: g.Azure,
      caption: k[g.Azure].caption,
      icon: k[g.Azure].icon
    }
  ];
  x.useEffect(() => {
    const i = (v) => {
      const { documents: M } = v;
      M.some((m) => m.documentId === s) && c((m) => m + 1);
    };
    return r.addEventListener("documentsChanged", i), () => {
      r.removeEventListener("documentsChanged", i);
    };
  }, []), x.useEffect(() => {
    r.getDocumentById(s).then(async (i) => {
      if (i && !("error" in i)) {
        const v = i.document.contents;
        j({ ...v }), u(!0);
      } else
        throw new Error(i?.error || "Document not found");
    }).catch(async (i) => {
      await o.show("error", "Error loading document", "Details: " + i?.message || i);
    });
  }, [d]);
  const f = async (i) => {
    const v = C.provider, M = i;
    n.trackModelProviderUpdated(s, v, M), h1(C, j, S(t, s), M)();
  }, V = () => C.provider ? !0 : "Model provider is required.";
  return /* @__PURE__ */ e.jsx(s1, { studioPro: t, children: /* @__PURE__ */ e.jsxs(o1, { children: [
    !h && /* @__PURE__ */ e.jsx(c1, {}),
    h && /* @__PURE__ */ e.jsx(n1, { children: /* @__PURE__ */ e.jsx(r1, { children: /* @__PURE__ */ e.jsxs(C1, { label: "Configuration", children: [
      /* @__PURE__ */ e.jsx(
        p1,
        {
          ariaLabel: "Provider",
          label: "Provider",
          selectedKey: C.provider ?? null,
          options: F,
          onSelectionChange: f,
          validate: V
        }
      ),
      C.provider === g.MxCloudGenAI && /* @__PURE__ */ e.jsx(
        D1,
        {
          studioPro: t,
          documentId: s,
          model: C,
          setModel: j,
          analyticsService: n,
          updateStudioProDocument: S(t, s)
        }
      ),
      C.provider === g.Azure && /* @__PURE__ */ e.jsx(
        Z1,
        {
          studioPro: t,
          documentId: s,
          model: C,
          setModel: j,
          analyticsService: n,
          updateStudioProDocument: S(t, s)
        }
      )
    ] }) }) })
  ] }) });
}, r2 = i1(G1);
export {
  G1 as App,
  r2 as component
};
