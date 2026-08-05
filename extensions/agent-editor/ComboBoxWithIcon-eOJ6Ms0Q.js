import { r as qi, j as Ji } from "./jsx-runtime-CWOFuNcx.js";
import { _ as rs, I as ns } from "./ComboBox-CJjZjYuG.js";
import { I as os, r as as } from "./PageContainers-1sk3OYaf.js";
import { T as is } from "./TextWithIcon-Cn_oiqNe.js";
var Ln = {}, So = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jl;
function ls() {
  if (Jl) return So;
  Jl = 1;
  var ue = qi();
  function A(a) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, p = 1; p < arguments.length; p++) u += "&args[]=" + encodeURIComponent(arguments[p]);
    return "Minified React error #" + a + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var $ = Object.prototype.hasOwnProperty, ve = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, h = {}, N = {};
  function vt(a) {
    return $.call(N, a) ? !0 : $.call(h, a) ? !1 : ve.test(a) ? N[a] = !0 : (h[a] = !0, !1);
  }
  function ne(a, u, p, g, w, y, C) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = g, this.attributeNamespace = w, this.mustUseProperty = p, this.propertyName = a, this.type = u, this.sanitizeURL = y, this.removeEmptyString = C;
  }
  var k = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    k[a] = new ne(a, 0, !1, a, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var u = a[0];
    k[u] = new ne(u, 1, !1, a[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    k[a] = new ne(a, 2, !1, a.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    k[a] = new ne(a, 2, !1, a, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    k[a] = new ne(a, 3, !1, a.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    k[a] = new ne(a, 3, !0, a, null, !1, !1);
  }), ["capture", "download"].forEach(function(a) {
    k[a] = new ne(a, 4, !1, a, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(a) {
    k[a] = new ne(a, 6, !1, a, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(a) {
    k[a] = new ne(a, 5, !1, a.toLowerCase(), null, !1, !1);
  });
  var E = /[\-:]([a-z])/g;
  function Ct(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var u = a.replace(
      E,
      Ct
    );
    k[u] = new ne(u, 1, !1, a, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var u = a.replace(E, Ct);
    k[u] = new ne(u, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var u = a.replace(E, Ct);
    k[u] = new ne(u, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(a) {
    k[a] = new ne(a, 1, !1, a.toLowerCase(), null, !1, !1);
  }), k.xlinkHref = new ne("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(a) {
    k[a] = new ne(a, 1, !1, a.toLowerCase(), null, !0, !0);
  });
  var M = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, J = ["Webkit", "ms", "Moz", "O"];
  Object.keys(M).forEach(function(a) {
    J.forEach(function(u) {
      u = u + a.charAt(0).toUpperCase() + a.substring(1), M[u] = M[a];
    });
  });
  var tn = /["'&<>]/;
  function ce(a) {
    if (typeof a == "boolean" || typeof a == "number") return "" + a;
    a = "" + a;
    var u = tn.exec(a);
    if (u) {
      var p = "", g, w = 0;
      for (g = u.index; g < a.length; g++) {
        switch (a.charCodeAt(g)) {
          case 34:
            u = "&quot;";
            break;
          case 38:
            u = "&amp;";
            break;
          case 39:
            u = "&#x27;";
            break;
          case 60:
            u = "&lt;";
            break;
          case 62:
            u = "&gt;";
            break;
          default:
            continue;
        }
        w !== g && (p += a.substring(w, g)), w = g + 1, p += u;
      }
      a = w !== g ? p + a.substring(w, g) : p;
    }
    return a;
  }
  var $t = /([A-Z])/g, O = /^ms-/, P = Array.isArray;
  function me(a, u) {
    return { insertionMode: a, selectedValue: u };
  }
  function Tt(a, u, p) {
    switch (u) {
      case "select":
        return me(1, p.value != null ? p.value : p.defaultValue);
      case "svg":
        return me(2, null);
      case "math":
        return me(3, null);
      case "foreignObject":
        return me(1, null);
      case "table":
        return me(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return me(5, null);
      case "colgroup":
        return me(7, null);
      case "tr":
        return me(6, null);
    }
    return 4 <= a.insertionMode || a.insertionMode === 0 ? me(1, null) : a;
  }
  var Ae = /* @__PURE__ */ new Map();
  function te(a, u, p) {
    if (typeof p != "object") throw Error(A(62));
    u = !0;
    for (var g in p) if ($.call(p, g)) {
      var w = p[g];
      if (w != null && typeof w != "boolean" && w !== "") {
        if (g.indexOf("--") === 0) {
          var y = ce(g);
          w = ce(("" + w).trim());
        } else {
          y = g;
          var C = Ae.get(y);
          C !== void 0 || (C = ce(y.replace($t, "-$1").toLowerCase().replace(O, "-ms-")), Ae.set(y, C)), y = C, w = typeof w == "number" ? w === 0 || $.call(M, g) ? "" + w : w + "px" : ce(("" + w).trim());
        }
        u ? (u = !1, a.push(' style="', y, ":", w)) : a.push(";", y, ":", w);
      }
    }
    u || a.push('"');
  }
  function le(a, u, p, g) {
    switch (p) {
      case "style":
        te(a, u, g);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < p.length) || p[0] !== "o" && p[0] !== "O" || p[1] !== "n" && p[1] !== "N") {
      if (u = k.hasOwnProperty(p) ? k[p] : null, u !== null) {
        switch (typeof g) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!u.acceptsBooleans) return;
        }
        switch (p = u.attributeName, u.type) {
          case 3:
            g && a.push(" ", p, '=""');
            break;
          case 4:
            g === !0 ? a.push(" ", p, '=""') : g !== !1 && a.push(" ", p, '="', ce(g), '"');
            break;
          case 5:
            isNaN(g) || a.push(" ", p, '="', ce(g), '"');
            break;
          case 6:
            !isNaN(g) && 1 <= g && a.push(" ", p, '="', ce(g), '"');
            break;
          default:
            u.sanitizeURL && (g = "" + g), a.push(" ", p, '="', ce(g), '"');
        }
      } else if (vt(p)) {
        switch (typeof g) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = p.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") return;
        }
        a.push(" ", p, '="', ce(g), '"');
      }
    }
  }
  function X(a, u, p) {
    if (u != null) {
      if (p != null) throw Error(A(60));
      if (typeof u != "object" || !("__html" in u)) throw Error(A(61));
      u = u.__html, u != null && a.push("" + u);
    }
  }
  function tt(a) {
    var u = "";
    return ue.Children.forEach(a, function(p) {
      p != null && (u += p);
    }), u;
  }
  function K(a, u, p, g) {
    a.push(xe(p));
    var w = p = null, y;
    for (y in u) if ($.call(u, y)) {
      var C = u[y];
      if (C != null) switch (y) {
        case "children":
          p = C;
          break;
        case "dangerouslySetInnerHTML":
          w = C;
          break;
        default:
          le(a, g, y, C);
      }
    }
    return a.push(">"), X(a, w, p), typeof p == "string" ? (a.push(ce(p)), null) : p;
  }
  var gt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, $e = /* @__PURE__ */ new Map();
  function xe(a) {
    var u = $e.get(a);
    if (u === void 0) {
      if (!gt.test(a)) throw Error(A(65, a));
      u = "<" + a, $e.set(a, u);
    }
    return u;
  }
  function Et(a, u, p, g, w) {
    switch (u) {
      case "select":
        a.push(xe("select"));
        var y = null, C = null;
        for (B in p) if ($.call(p, B)) {
          var F = p[B];
          if (F != null) switch (B) {
            case "children":
              y = F;
              break;
            case "dangerouslySetInnerHTML":
              C = F;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              le(a, g, B, F);
          }
        }
        return a.push(">"), X(a, C, y), y;
      case "option":
        C = w.selectedValue, a.push(xe("option"));
        var L = F = null, U = null, B = null;
        for (y in p) if ($.call(p, y)) {
          var V = p[y];
          if (V != null) switch (y) {
            case "children":
              F = V;
              break;
            case "selected":
              U = V;
              break;
            case "dangerouslySetInnerHTML":
              B = V;
              break;
            case "value":
              L = V;
            default:
              le(a, g, y, V);
          }
        }
        if (C != null) if (p = L !== null ? "" + L : tt(F), P(C)) {
          for (g = 0; g < C.length; g++)
            if ("" + C[g] === p) {
              a.push(' selected=""');
              break;
            }
        } else "" + C === p && a.push(' selected=""');
        else U && a.push(' selected=""');
        return a.push(">"), X(a, B, F), F;
      case "textarea":
        a.push(xe("textarea")), B = C = y = null;
        for (F in p) if ($.call(p, F) && (L = p[F], L != null)) switch (F) {
          case "children":
            B = L;
            break;
          case "value":
            y = L;
            break;
          case "defaultValue":
            C = L;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(A(91));
          default:
            le(
              a,
              g,
              F,
              L
            );
        }
        if (y === null && C !== null && (y = C), a.push(">"), B != null) {
          if (y != null) throw Error(A(92));
          if (P(B) && 1 < B.length) throw Error(A(93));
          y = "" + B;
        }
        return typeof y == "string" && y[0] === `
` && a.push(`
`), y !== null && a.push(ce("" + y)), null;
      case "input":
        a.push(xe("input")), L = B = F = y = null;
        for (C in p) if ($.call(p, C) && (U = p[C], U != null)) switch (C) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(A(399, "input"));
          case "defaultChecked":
            L = U;
            break;
          case "defaultValue":
            F = U;
            break;
          case "checked":
            B = U;
            break;
          case "value":
            y = U;
            break;
          default:
            le(a, g, C, U);
        }
        return B !== null ? le(a, g, "checked", B) : L !== null && le(a, g, "checked", L), y !== null ? le(a, g, "value", y) : F !== null && le(a, g, "value", F), a.push("/>"), null;
      case "menuitem":
        a.push(xe("menuitem"));
        for (var Pe in p) if ($.call(p, Pe) && (y = p[Pe], y != null)) switch (Pe) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(A(400));
          default:
            le(a, g, Pe, y);
        }
        return a.push(">"), null;
      case "title":
        a.push(xe("title")), y = null;
        for (V in p) if ($.call(p, V) && (C = p[V], C != null)) switch (V) {
          case "children":
            y = C;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(A(434));
          default:
            le(a, g, V, C);
        }
        return a.push(">"), y;
      case "listing":
      case "pre":
        a.push(xe(u)), C = y = null;
        for (L in p) if ($.call(p, L) && (F = p[L], F != null)) switch (L) {
          case "children":
            y = F;
            break;
          case "dangerouslySetInnerHTML":
            C = F;
            break;
          default:
            le(a, g, L, F);
        }
        if (a.push(">"), C != null) {
          if (y != null) throw Error(A(60));
          if (typeof C != "object" || !("__html" in C)) throw Error(A(61));
          p = C.__html, p != null && (typeof p == "string" && 0 < p.length && p[0] === `
` ? a.push(`
`, p) : a.push("" + p));
        }
        return typeof y == "string" && y[0] === `
` && a.push(`
`), y;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        a.push(xe(u));
        for (var Fe in p) if ($.call(p, Fe) && (y = p[Fe], y != null)) switch (Fe) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(A(399, u));
          default:
            le(a, g, Fe, y);
        }
        return a.push("/>"), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return K(
          a,
          p,
          u,
          g
        );
      case "html":
        return w.insertionMode === 0 && a.push("<!DOCTYPE html>"), K(a, p, u, g);
      default:
        if (u.indexOf("-") === -1 && typeof p.is != "string") return K(a, p, u, g);
        a.push(xe(u)), C = y = null;
        for (U in p) if ($.call(p, U) && (F = p[U], F != null)) switch (U) {
          case "children":
            y = F;
            break;
          case "dangerouslySetInnerHTML":
            C = F;
            break;
          case "style":
            te(a, g, F);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            vt(U) && typeof F != "function" && typeof F != "symbol" && a.push(" ", U, '="', ce(F), '"');
        }
        return a.push(">"), X(a, C, y), y;
    }
  }
  function rt(a, u, p) {
    if (a.push('<!--$?--><template id="'), p === null) throw Error(A(395));
    return a.push(p), a.push('"></template>');
  }
  function Er(a, u, p, g) {
    switch (p.insertionMode) {
      case 0:
      case 1:
        return a.push('<div hidden id="'), a.push(u.segmentPrefix), u = g.toString(16), a.push(u), a.push('">');
      case 2:
        return a.push('<svg aria-hidden="true" style="display:none" id="'), a.push(u.segmentPrefix), u = g.toString(16), a.push(u), a.push('">');
      case 3:
        return a.push('<math aria-hidden="true" style="display:none" id="'), a.push(u.segmentPrefix), u = g.toString(16), a.push(u), a.push('">');
      case 4:
        return a.push('<table hidden id="'), a.push(u.segmentPrefix), u = g.toString(16), a.push(u), a.push('">');
      case 5:
        return a.push('<table hidden><tbody id="'), a.push(u.segmentPrefix), u = g.toString(16), a.push(u), a.push('">');
      case 6:
        return a.push('<table hidden><tr id="'), a.push(u.segmentPrefix), u = g.toString(16), a.push(u), a.push('">');
      case 7:
        return a.push('<table hidden><colgroup id="'), a.push(u.segmentPrefix), u = g.toString(16), a.push(u), a.push('">');
      default:
        throw Error(A(397));
    }
  }
  function Rr(a, u) {
    switch (u.insertionMode) {
      case 0:
      case 1:
        return a.push("</div>");
      case 2:
        return a.push("</svg>");
      case 3:
        return a.push("</math>");
      case 4:
        return a.push("</table>");
      case 5:
        return a.push("</tbody></table>");
      case 6:
        return a.push("</tr></table>");
      case 7:
        return a.push("</colgroup></table>");
      default:
        throw Error(A(397));
    }
  }
  var Ir = /[<\u2028\u2029]/g;
  function nt(a) {
    return JSON.stringify(a).replace(Ir, function(u) {
      switch (u) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  function Me(a, u) {
    return u = u === void 0 ? "" : u, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: u + "P:", segmentPrefix: u + "S:", boundaryPrefix: u + "B:", idPrefix: u, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: a };
  }
  function ir(a, u, p, g) {
    return p.generateStaticMarkup ? (a.push(ce(u)), !1) : (u === "" ? a = g : (g && a.push("<!-- -->"), a.push(ce(u)), a = !0), a);
  }
  var oe = Object.assign, ae = Symbol.for("react.element"), lr = Symbol.for("react.portal"), Rt = Symbol.for("react.fragment"), fe = Symbol.for("react.strict_mode"), se = Symbol.for("react.profiler"), Nt = Symbol.for("react.provider"), Vt = Symbol.for("react.context"), _e = Symbol.for("react.forward_ref"), mt = Symbol.for("react.suspense"), ke = Symbol.for("react.suspense_list"), sr = Symbol.for("react.memo"), ye = Symbol.for("react.lazy"), Ce = Symbol.for("react.scope"), ur = Symbol.for("react.debug_trace_mode"), Yt = Symbol.for("react.legacy_hidden"), rn = Symbol.for("react.default_value"), Ne = Symbol.iterator;
  function Gt(a) {
    if (a == null) return null;
    if (typeof a == "function") return a.displayName || a.name || null;
    if (typeof a == "string") return a;
    switch (a) {
      case Rt:
        return "Fragment";
      case lr:
        return "Portal";
      case se:
        return "Profiler";
      case fe:
        return "StrictMode";
      case mt:
        return "Suspense";
      case ke:
        return "SuspenseList";
    }
    if (typeof a == "object") switch (a.$$typeof) {
      case Vt:
        return (a.displayName || "Context") + ".Consumer";
      case Nt:
        return (a._context.displayName || "Context") + ".Provider";
      case _e:
        var u = a.render;
        return a = a.displayName, a || (a = u.displayName || u.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
      case sr:
        return u = a.displayName || null, u !== null ? u : Gt(a.type) || "Memo";
      case ye:
        u = a._payload, a = a._init;
        try {
          return Gt(a(u));
        } catch {
        }
    }
    return null;
  }
  var Xt = {};
  function nn(a, u) {
    if (a = a.contextTypes, !a) return Xt;
    var p = {}, g;
    for (g in a) p[g] = u[g];
    return p;
  }
  var Ve = null;
  function we(a, u) {
    if (a !== u) {
      a.context._currentValue2 = a.parentValue, a = a.parent;
      var p = u.parent;
      if (a === null) {
        if (p !== null) throw Error(A(401));
      } else {
        if (p === null) throw Error(A(401));
        we(a, p);
      }
      u.context._currentValue2 = u.value;
    }
  }
  function ge(a) {
    a.context._currentValue2 = a.parentValue, a = a.parent, a !== null && ge(a);
  }
  function Pr(a) {
    var u = a.parent;
    u !== null && Pr(u), a.context._currentValue2 = a.value;
  }
  function Fr(a, u) {
    if (a.context._currentValue2 = a.parentValue, a = a.parent, a === null) throw Error(A(402));
    a.depth === u.depth ? we(a, u) : Fr(a, u);
  }
  function Dr(a, u) {
    var p = u.parent;
    if (p === null) throw Error(A(402));
    a.depth === p.depth ? we(a, p) : Dr(a, p), u.context._currentValue2 = u.value;
  }
  function de(a) {
    var u = Ve;
    u !== a && (u === null ? Pr(a) : a === null ? ge(u) : u.depth === a.depth ? we(u, a) : u.depth > a.depth ? Fr(u, a) : Dr(u, a), Ve = a);
  }
  var Ar = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(a, u) {
    a = a._reactInternals, a.queue !== null && a.queue.push(u);
  }, enqueueReplaceState: function(a, u) {
    a = a._reactInternals, a.replace = !0, a.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function on(a, u, p, g) {
    var w = a.state !== void 0 ? a.state : null;
    a.updater = Ar, a.props = p, a.state = w;
    var y = { queue: [], replace: !1 };
    a._reactInternals = y;
    var C = u.contextType;
    if (a.context = typeof C == "object" && C !== null ? C._currentValue2 : g, C = u.getDerivedStateFromProps, typeof C == "function" && (C = C(p, w), w = C == null ? w : oe({}, w, C), a.state = w), typeof u.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function")) if (u = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), u !== a.state && Ar.enqueueReplaceState(a, a.state, null), y.queue !== null && 0 < y.queue.length) if (u = y.queue, C = y.replace, y.queue = null, y.replace = !1, C && u.length === 1) a.state = u[0];
    else {
      for (y = C ? u[0] : a.state, w = !0, C = C ? 1 : 0; C < u.length; C++) {
        var F = u[C];
        F = typeof F == "function" ? F.call(a, y, p, g) : F, F != null && (w ? (w = !1, y = oe({}, y, F)) : oe(y, F));
      }
      a.state = y;
    }
    else y.queue = null;
  }
  var an = { id: 1, overflow: "" };
  function Mr(a, u, p) {
    var g = a.id;
    a = a.overflow;
    var w = 32 - cr(g) - 1;
    g &= ~(1 << w), p += 1;
    var y = 32 - cr(u) + w;
    if (30 < y) {
      var C = w - w % 5;
      return y = (g & (1 << C) - 1).toString(32), g >>= C, w -= C, { id: 1 << 32 - cr(u) + w | p << w | g, overflow: y + a };
    }
    return { id: 1 << y | p << w | g, overflow: a };
  }
  var cr = Math.clz32 ? Math.clz32 : It, Bn = Math.log, _r = Math.LN2;
  function It(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (Bn(a) / _r | 0) | 0;
  }
  function Or(a, u) {
    return a === u && (a !== 0 || 1 / a === 1 / u) || a !== a && u !== u;
  }
  var ln = typeof Object.is == "function" ? Object.is : Or, Ee = null, ot = null, Pt = null, Z = null, Ft = !1, fr = !1, Zt = 0, at = null, dr = 0;
  function yt() {
    if (Ee === null) throw Error(A(321));
    return Ee;
  }
  function Se() {
    if (0 < dr) throw Error(A(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Lr() {
    return Z === null ? Pt === null ? (Ft = !1, Pt = Z = Se()) : (Ft = !0, Z = Pt) : Z.next === null ? (Ft = !1, Z = Z.next = Se()) : (Ft = !0, Z = Z.next), Z;
  }
  function Br() {
    ot = Ee = null, fr = !1, Pt = null, dr = 0, Z = at = null;
  }
  function sn(a, u) {
    return typeof u == "function" ? u(a) : u;
  }
  function pe(a, u, p) {
    if (Ee = yt(), Z = Lr(), Ft) {
      var g = Z.queue;
      if (u = g.dispatch, at !== null && (p = at.get(g), p !== void 0)) {
        at.delete(g), g = Z.memoizedState;
        do
          g = a(g, p.action), p = p.next;
        while (p !== null);
        return Z.memoizedState = g, [g, u];
      }
      return [Z.memoizedState, u];
    }
    return a = a === sn ? typeof u == "function" ? u() : u : p !== void 0 ? p(u) : u, Z.memoizedState = a, a = Z.queue = { last: null, dispatch: null }, a = a.dispatch = Un.bind(null, Ee, a), [Z.memoizedState, a];
  }
  function Ur(a, u) {
    if (Ee = yt(), Z = Lr(), u = u === void 0 ? null : u, Z !== null) {
      var p = Z.memoizedState;
      if (p !== null && u !== null) {
        var g = p[1];
        e: if (g === null) g = !1;
        else {
          for (var w = 0; w < g.length && w < u.length; w++) if (!ln(u[w], g[w])) {
            g = !1;
            break e;
          }
          g = !0;
        }
        if (g) return p[0];
      }
    }
    return a = a(), Z.memoizedState = [a, u], a;
  }
  function Un(a, u, p) {
    if (25 <= dr) throw Error(A(301));
    if (a === Ee) if (fr = !0, a = { action: p, next: null }, at === null && (at = /* @__PURE__ */ new Map()), p = at.get(u), p === void 0) at.set(u, a);
    else {
      for (u = p; u.next !== null; ) u = u.next;
      u.next = a;
    }
  }
  function Hn() {
    throw Error(A(394));
  }
  function it() {
  }
  var Hr = { readContext: function(a) {
    return a._currentValue2;
  }, useContext: function(a) {
    return yt(), a._currentValue2;
  }, useMemo: Ur, useReducer: pe, useRef: function(a) {
    Ee = yt(), Z = Lr();
    var u = Z.memoizedState;
    return u === null ? (a = { current: a }, Z.memoizedState = a) : u;
  }, useState: function(a) {
    return pe(sn, a);
  }, useInsertionEffect: it, useLayoutEffect: function() {
  }, useCallback: function(a, u) {
    return Ur(function() {
      return a;
    }, u);
  }, useImperativeHandle: it, useEffect: it, useDebugValue: it, useDeferredValue: function(a) {
    return yt(), a;
  }, useTransition: function() {
    return yt(), [
      !1,
      Hn
    ];
  }, useId: function() {
    var a = ot.treeContext, u = a.overflow;
    a = a.id, a = (a & ~(1 << 32 - cr(a) - 1)).toString(32) + u;
    var p = pr;
    if (p === null) throw Error(A(404));
    return u = Zt++, a = ":" + p.idPrefix + "R" + a, 0 < u && (a += "H" + u.toString(32)), a + ":";
  }, useMutableSource: function(a, u) {
    return yt(), u(a._source);
  }, useSyncExternalStore: function(a, u, p) {
    if (p === void 0) throw Error(A(407));
    return p();
  } }, pr = null, Dt = ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Oe(a) {
    return console.error(a), null;
  }
  function lt() {
  }
  function hr(a, u, p, g, w, y, C, F, L) {
    var U = [], B = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: g === void 0 ? 12800 : g, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: B, pingedTasks: U, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: w === void 0 ? Oe : w, onAllReady: lt, onShellReady: C === void 0 ? lt : C, onShellError: lt, onFatalError: lt }, p = Mt(u, 0, null, p, !1, !1), p.parentFlushed = !0, a = At(u, a, null, p, B, Xt, null, an), U.push(a), u;
  }
  function At(a, u, p, g, w, y, C, F) {
    a.allPendingTasks++, p === null ? a.pendingRootTasks++ : p.pendingTasks++;
    var L = { node: u, ping: function() {
      var U = a.pingedTasks;
      U.push(L), U.length === 1 && Re(a);
    }, blockedBoundary: p, blockedSegment: g, abortSet: w, legacyContext: y, context: C, treeContext: F };
    return w.add(L), L;
  }
  function Mt(a, u, p, g, w, y) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: g, boundary: p, lastPushedText: w, textEmbedded: y };
  }
  function st(a, u) {
    if (a = a.onError(u), a != null && typeof a != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
  }
  function _t(a, u) {
    var p = a.onShellError;
    p(u), p = a.onFatalError, p(u), a.destination !== null ? (a.status = 2, a.destination.destroy(u)) : (a.status = 1, a.fatalError = u);
  }
  function Le(a, u, p, g, w) {
    for (Ee = {}, ot = u, Zt = 0, a = p(g, w); fr; ) fr = !1, Zt = 0, dr += 1, Z = null, a = p(g, w);
    return Br(), a;
  }
  function un(a, u, p, g) {
    var w = p.render(), y = g.childContextTypes;
    if (y != null) {
      var C = u.legacyContext;
      if (typeof p.getChildContext != "function") g = C;
      else {
        p = p.getChildContext();
        for (var F in p) if (!(F in y)) throw Error(A(108, Gt(g) || "Unknown", F));
        g = oe({}, C, p);
      }
      u.legacyContext = g, he(a, u, w), u.legacyContext = C;
    } else he(a, u, w);
  }
  function cn(a, u) {
    if (a && a.defaultProps) {
      u = oe({}, u), a = a.defaultProps;
      for (var p in a) u[p] === void 0 && (u[p] = a[p]);
      return u;
    }
    return u;
  }
  function St(a, u, p, g, w) {
    if (typeof p == "function") if (p.prototype && p.prototype.isReactComponent) {
      w = nn(p, u.legacyContext);
      var y = p.contextType;
      y = new p(g, typeof y == "object" && y !== null ? y._currentValue2 : w), on(y, p, g, w), un(a, u, y, p);
    } else {
      y = nn(p, u.legacyContext), w = Le(a, u, p, g, y);
      var C = Zt !== 0;
      if (typeof w == "object" && w !== null && typeof w.render == "function" && w.$$typeof === void 0) on(w, p, g, y), un(a, u, w, p);
      else if (C) {
        g = u.treeContext, u.treeContext = Mr(g, 1, 0);
        try {
          he(a, u, w);
        } finally {
          u.treeContext = g;
        }
      } else he(a, u, w);
    }
    else if (typeof p == "string") {
      switch (w = u.blockedSegment, y = Et(w.chunks, p, g, a.responseState, w.formatContext), w.lastPushedText = !1, C = w.formatContext, w.formatContext = Tt(C, p, g), ct(a, u, y), w.formatContext = C, p) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          w.chunks.push("</", p, ">");
      }
      w.lastPushedText = !1;
    } else {
      switch (p) {
        case Yt:
        case ur:
        case fe:
        case se:
        case Rt:
          he(a, u, g.children);
          return;
        case ke:
          he(a, u, g.children);
          return;
        case Ce:
          throw Error(A(343));
        case mt:
          e: {
            p = u.blockedBoundary, w = u.blockedSegment, y = g.fallback, g = g.children, C = /* @__PURE__ */ new Set();
            var F = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: C, errorDigest: null }, L = Mt(a, w.chunks.length, F, w.formatContext, !1, !1);
            w.children.push(L), w.lastPushedText = !1;
            var U = Mt(a, 0, null, w.formatContext, !1, !1);
            U.parentFlushed = !0, u.blockedBoundary = F, u.blockedSegment = U;
            try {
              if (ct(
                a,
                u,
                g
              ), a.responseState.generateStaticMarkup || U.lastPushedText && U.textEmbedded && U.chunks.push("<!-- -->"), U.status = 1, Ye(F, U), F.pendingTasks === 0) break e;
            } catch (B) {
              U.status = 4, F.forceClientRender = !0, F.errorDigest = st(a, B);
            } finally {
              u.blockedBoundary = p, u.blockedSegment = w;
            }
            u = At(a, y, p, L, C, u.legacyContext, u.context, u.treeContext), a.pingedTasks.push(u);
          }
          return;
      }
      if (typeof p == "object" && p !== null) switch (p.$$typeof) {
        case _e:
          if (g = Le(a, u, p.render, g, w), Zt !== 0) {
            p = u.treeContext, u.treeContext = Mr(p, 1, 0);
            try {
              he(a, u, g);
            } finally {
              u.treeContext = p;
            }
          } else he(a, u, g);
          return;
        case sr:
          p = p.type, g = cn(p, g), St(a, u, p, g, w);
          return;
        case Nt:
          if (w = g.children, p = p._context, g = g.value, y = p._currentValue2, p._currentValue2 = g, C = Ve, Ve = g = { parent: C, depth: C === null ? 0 : C.depth + 1, context: p, parentValue: y, value: g }, u.context = g, he(a, u, w), a = Ve, a === null) throw Error(A(403));
          g = a.parentValue, a.context._currentValue2 = g === rn ? a.context._defaultValue : g, a = Ve = a.parent, u.context = a;
          return;
        case Vt:
          g = g.children, g = g(p._currentValue2), he(a, u, g);
          return;
        case ye:
          w = p._init, p = w(p._payload), g = cn(p, g), St(
            a,
            u,
            p,
            g,
            void 0
          );
          return;
      }
      throw Error(A(130, p == null ? p : typeof p, ""));
    }
  }
  function he(a, u, p) {
    if (u.node = p, typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ae:
          St(a, u, p.type, p.props, p.ref);
          return;
        case lr:
          throw Error(A(257));
        case ye:
          var g = p._init;
          p = g(p._payload), he(a, u, p);
          return;
      }
      if (P(p)) {
        ut(a, u, p);
        return;
      }
      if (p === null || typeof p != "object" ? g = null : (g = Ne && p[Ne] || p["@@iterator"], g = typeof g == "function" ? g : null), g && (g = g.call(p))) {
        if (p = g.next(), !p.done) {
          var w = [];
          do
            w.push(p.value), p = g.next();
          while (!p.done);
          ut(a, u, w);
        }
        return;
      }
      throw a = Object.prototype.toString.call(p), Error(A(31, a === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : a));
    }
    typeof p == "string" ? (g = u.blockedSegment, g.lastPushedText = ir(u.blockedSegment.chunks, p, a.responseState, g.lastPushedText)) : typeof p == "number" && (g = u.blockedSegment, g.lastPushedText = ir(u.blockedSegment.chunks, "" + p, a.responseState, g.lastPushedText));
  }
  function ut(a, u, p) {
    for (var g = p.length, w = 0; w < g; w++) {
      var y = u.treeContext;
      u.treeContext = Mr(y, g, w);
      try {
        ct(a, u, p[w]);
      } finally {
        u.treeContext = y;
      }
    }
  }
  function ct(a, u, p) {
    var g = u.blockedSegment.formatContext, w = u.legacyContext, y = u.context;
    try {
      return he(a, u, p);
    } catch (L) {
      if (Br(), typeof L == "object" && L !== null && typeof L.then == "function") {
        p = L;
        var C = u.blockedSegment, F = Mt(a, C.chunks.length, null, C.formatContext, C.lastPushedText, !0);
        C.children.push(F), C.lastPushedText = !1, a = At(a, u.node, u.blockedBoundary, F, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, p.then(a, a), u.blockedSegment.formatContext = g, u.legacyContext = w, u.context = y, de(y);
      } else throw u.blockedSegment.formatContext = g, u.legacyContext = w, u.context = y, de(y), L;
    }
  }
  function Ot(a) {
    var u = a.blockedBoundary;
    a = a.blockedSegment, a.status = 3, ft(this, u, a);
  }
  function vr(a, u, p) {
    var g = a.blockedBoundary;
    a.blockedSegment.status = 3, g === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.push(null))) : (g.pendingTasks--, g.forceClientRender || (g.forceClientRender = !0, a = p === void 0 ? Error(A(432)) : p, g.errorDigest = u.onError(a), g.parentFlushed && u.clientRenderedBoundaries.push(g)), g.fallbackAbortableTasks.forEach(function(w) {
      return vr(w, u, p);
    }), g.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (g = u.onAllReady, g()));
  }
  function Ye(a, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var p = u.children[0];
      p.id = u.id, p.parentFlushed = !0, p.status === 1 && Ye(a, p);
    } else a.completedSegments.push(u);
  }
  function ft(a, u, p) {
    if (u === null) {
      if (p.parentFlushed) {
        if (a.completedRootSegment !== null) throw Error(A(389));
        a.completedRootSegment = p;
      }
      a.pendingRootTasks--, a.pendingRootTasks === 0 && (a.onShellError = lt, u = a.onShellReady, u());
    } else u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (p.parentFlushed && p.status === 1 && Ye(u, p), u.parentFlushed && a.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(Ot, a), u.fallbackAbortableTasks.clear()) : p.parentFlushed && p.status === 1 && (Ye(u, p), u.completedSegments.length === 1 && u.parentFlushed && a.partialBoundaries.push(u)));
    a.allPendingTasks--, a.allPendingTasks === 0 && (a = a.onAllReady, a());
  }
  function Re(a) {
    if (a.status !== 2) {
      var u = Ve, p = Dt.current;
      Dt.current = Hr;
      var g = pr;
      pr = a.responseState;
      try {
        var w = a.pingedTasks, y;
        for (y = 0; y < w.length; y++) {
          var C = w[y], F = a, L = C.blockedSegment;
          if (L.status === 0) {
            de(C.context);
            try {
              he(F, C, C.node), F.responseState.generateStaticMarkup || L.lastPushedText && L.textEmbedded && L.chunks.push("<!-- -->"), C.abortSet.delete(C), L.status = 1, ft(F, C.blockedBoundary, L);
            } catch (De) {
              if (Br(), typeof De == "object" && De !== null && typeof De.then == "function") {
                var U = C.ping;
                De.then(U, U);
              } else {
                C.abortSet.delete(C), L.status = 4;
                var B = C.blockedBoundary, V = De, Pe = st(F, V);
                if (B === null ? _t(F, V) : (B.pendingTasks--, B.forceClientRender || (B.forceClientRender = !0, B.errorDigest = Pe, B.parentFlushed && F.clientRenderedBoundaries.push(B))), F.allPendingTasks--, F.allPendingTasks === 0) {
                  var Fe = F.onAllReady;
                  Fe();
                }
              }
            } finally {
            }
          }
        }
        w.splice(0, y), a.destination !== null && Ie(a, a.destination);
      } catch (De) {
        st(a, De), _t(a, De);
      } finally {
        pr = g, Dt.current = p, p === Hr && de(u);
      }
    }
  }
  function Lt(a, u, p) {
    switch (p.parentFlushed = !0, p.status) {
      case 0:
        var g = p.id = a.nextSegmentId++;
        return p.lastPushedText = !1, p.textEmbedded = !1, a = a.responseState, u.push('<template id="'), u.push(a.placeholderPrefix), a = g.toString(16), u.push(a), u.push('"></template>');
      case 1:
        p.status = 2;
        var w = !0;
        g = p.chunks;
        var y = 0;
        p = p.children;
        for (var C = 0; C < p.length; C++) {
          for (w = p[C]; y < w.index; y++) u.push(g[y]);
          w = Jt(a, u, w);
        }
        for (; y < g.length - 1; y++) u.push(g[y]);
        return y < g.length && (w = u.push(g[y])), w;
      default:
        throw Error(A(390));
    }
  }
  function Jt(a, u, p) {
    var g = p.boundary;
    if (g === null) return Lt(a, u, p);
    if (g.parentFlushed = !0, g.forceClientRender) return a.responseState.generateStaticMarkup || (g = g.errorDigest, u.push("<!--$!-->"), u.push("<template"), g && (u.push(' data-dgst="'), g = ce(g), u.push(g), u.push('"')), u.push("></template>")), Lt(a, u, p), a = a.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), a;
    if (0 < g.pendingTasks) {
      g.rootSegmentID = a.nextSegmentId++, 0 < g.completedSegments.length && a.partialBoundaries.push(g);
      var w = a.responseState, y = w.nextSuspenseID++;
      return w = w.boundaryPrefix + y.toString(16), g = g.id = w, rt(u, a.responseState, g), Lt(a, u, p), u.push("<!--/$-->");
    }
    if (g.byteSize > a.progressiveChunkSize) return g.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(g), rt(u, a.responseState, g.id), Lt(a, u, p), u.push("<!--/$-->");
    if (a.responseState.generateStaticMarkup || u.push("<!--$-->"), p = g.completedSegments, p.length !== 1) throw Error(A(391));
    return Jt(a, u, p[0]), a = a.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), a;
  }
  function gr(a, u, p) {
    return Er(u, a.responseState, p.formatContext, p.id), Jt(a, u, p), Rr(u, p.formatContext);
  }
  function ze(a, u, p) {
    for (var g = p.completedSegments, w = 0; w < g.length; w++) dt(a, u, p, g[w]);
    if (g.length = 0, a = a.responseState, g = p.id, p = p.rootSegmentID, u.push(a.startInlineScript), a.sentCompleteBoundaryFunction ? u.push('$RC("') : (a.sentCompleteBoundaryFunction = !0, u.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), g === null) throw Error(A(395));
    return p = p.toString(16), u.push(g), u.push('","'), u.push(a.segmentPrefix), u.push(p), u.push('")<\/script>');
  }
  function dt(a, u, p, g) {
    if (g.status === 2) return !0;
    var w = g.id;
    if (w === -1) {
      if ((g.id = p.rootSegmentID) === -1) throw Error(A(392));
      return gr(a, u, g);
    }
    return gr(a, u, g), a = a.responseState, u.push(a.startInlineScript), a.sentCompleteSegmentFunction ? u.push('$RS("') : (a.sentCompleteSegmentFunction = !0, u.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), u.push(a.segmentPrefix), w = w.toString(16), u.push(w), u.push('","'), u.push(a.placeholderPrefix), u.push(w), u.push('")<\/script>');
  }
  function Ie(a, u) {
    try {
      var p = a.completedRootSegment;
      if (p !== null && a.pendingRootTasks === 0) {
        Jt(a, u, p), a.completedRootSegment = null;
        var g = a.responseState.bootstrapChunks;
        for (p = 0; p < g.length - 1; p++) u.push(g[p]);
        p < g.length && u.push(g[p]);
      }
      var w = a.clientRenderedBoundaries, y;
      for (y = 0; y < w.length; y++) {
        var C = w[y];
        g = u;
        var F = a.responseState, L = C.id, U = C.errorDigest, B = C.errorMessage, V = C.errorComponentStack;
        if (g.push(F.startInlineScript), F.sentClientRenderFunction ? g.push('$RX("') : (F.sentClientRenderFunction = !0, g.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), L === null) throw Error(A(395));
        if (g.push(L), g.push('"'), U || B || V) {
          g.push(",");
          var Pe = nt(U || "");
          g.push(Pe);
        }
        if (B || V) {
          g.push(",");
          var Fe = nt(B || "");
          g.push(Fe);
        }
        if (V) {
          g.push(",");
          var De = nt(V);
          g.push(De);
        }
        if (!g.push(")<\/script>")) {
          a.destination = null, y++, w.splice(0, y);
          return;
        }
      }
      w.splice(0, y);
      var Bt = a.completedBoundaries;
      for (y = 0; y < Bt.length; y++) if (!ze(a, u, Bt[y])) {
        a.destination = null, y++, Bt.splice(0, y);
        return;
      }
      Bt.splice(0, y);
      var pt = a.partialBoundaries;
      for (y = 0; y < pt.length; y++) {
        var yr = pt[y];
        e: {
          w = a, C = u;
          var Ut = yr.completedSegments;
          for (F = 0; F < Ut.length; F++) if (!dt(w, C, yr, Ut[F])) {
            F++, Ut.splice(0, F);
            var Qt = !1;
            break e;
          }
          Ut.splice(0, F), Qt = !0;
        }
        if (!Qt) {
          a.destination = null, y++, pt.splice(0, y);
          return;
        }
      }
      pt.splice(0, y);
      var bt = a.completedBoundaries;
      for (y = 0; y < bt.length; y++) if (!ze(a, u, bt[y])) {
        a.destination = null, y++, bt.splice(0, y);
        return;
      }
      bt.splice(0, y);
    } finally {
      a.allPendingTasks === 0 && a.pingedTasks.length === 0 && a.clientRenderedBoundaries.length === 0 && a.completedBoundaries.length === 0 && u.push(null);
    }
  }
  function mr(a, u) {
    try {
      var p = a.abortableTasks;
      p.forEach(function(g) {
        return vr(g, a, u);
      }), p.clear(), a.destination !== null && Ie(a, a.destination);
    } catch (g) {
      st(a, g), _t(a, g);
    }
  }
  function be() {
  }
  function Be(a, u, p, g) {
    var w = !1, y = null, C = "", F = { push: function(U) {
      return U !== null && (C += U), !0;
    }, destroy: function(U) {
      w = !0, y = U;
    } }, L = !1;
    if (a = hr(a, Me(p, u ? u.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, be, void 0, function() {
      L = !0;
    }), Re(a), mr(a, g), a.status === 1) a.status = 2, F.destroy(a.fatalError);
    else if (a.status !== 2 && a.destination === null) {
      a.destination = F;
      try {
        Ie(a, F);
      } catch (U) {
        st(a, U), _t(a, U);
      }
    }
    if (w) throw y;
    if (!L) throw Error(A(426));
    return C;
  }
  return So.renderToNodeStream = function() {
    throw Error(A(207));
  }, So.renderToStaticMarkup = function(a, u) {
    return Be(a, u, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, So.renderToStaticNodeStream = function() {
    throw Error(A(208));
  }, So.renderToString = function(a, u) {
    return Be(a, u, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, So.version = "18.3.1", So;
}
var Qi = {};
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ql;
function ss() {
  if (Ql) return Qi;
  Ql = 1;
  var ue = qi();
  function A(i) {
    for (var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, f = 1; f < arguments.length; f++) s += "&args[]=" + encodeURIComponent(arguments[f]);
    return "Minified React error #" + i + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var $ = null, ve = 0;
  function h(i, s) {
    if (s.length !== 0) if (512 < s.length) 0 < ve && (i.enqueue(new Uint8Array($.buffer, 0, ve)), $ = new Uint8Array(512), ve = 0), i.enqueue(s);
    else {
      var f = $.length - ve;
      f < s.length && (f === 0 ? i.enqueue($) : ($.set(s.subarray(0, f), ve), i.enqueue($), s = s.subarray(f)), $ = new Uint8Array(512), ve = 0), $.set(s, ve), ve += s.length;
    }
  }
  function N(i, s) {
    return h(i, s), !0;
  }
  function vt(i) {
    $ && 0 < ve && (i.enqueue(new Uint8Array($.buffer, 0, ve)), $ = null, ve = 0);
  }
  var ne = new TextEncoder();
  function k(i) {
    return ne.encode(i);
  }
  function E(i) {
    return ne.encode(i);
  }
  function Ct(i, s) {
    typeof i.error == "function" ? i.error(s) : i.close();
  }
  var M = Object.prototype.hasOwnProperty, J = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, tn = {}, ce = {};
  function $t(i) {
    return M.call(ce, i) ? !0 : M.call(tn, i) ? !1 : J.test(i) ? ce[i] = !0 : (tn[i] = !0, !1);
  }
  function O(i, s, f, v, x, b, T) {
    this.acceptsBooleans = s === 2 || s === 3 || s === 4, this.attributeName = v, this.attributeNamespace = x, this.mustUseProperty = f, this.propertyName = i, this.type = s, this.sanitizeURL = b, this.removeEmptyString = T;
  }
  var P = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i) {
    P[i] = new O(i, 0, !1, i, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(i) {
    var s = i[0];
    P[s] = new O(s, 1, !1, i[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(i) {
    P[i] = new O(i, 2, !1, i.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(i) {
    P[i] = new O(i, 2, !1, i, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i) {
    P[i] = new O(i, 3, !1, i.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(i) {
    P[i] = new O(i, 3, !0, i, null, !1, !1);
  }), ["capture", "download"].forEach(function(i) {
    P[i] = new O(i, 4, !1, i, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(i) {
    P[i] = new O(i, 6, !1, i, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(i) {
    P[i] = new O(i, 5, !1, i.toLowerCase(), null, !1, !1);
  });
  var me = /[\-:]([a-z])/g;
  function Tt(i) {
    return i[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i) {
    var s = i.replace(
      me,
      Tt
    );
    P[s] = new O(s, 1, !1, i, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i) {
    var s = i.replace(me, Tt);
    P[s] = new O(s, 1, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(i) {
    var s = i.replace(me, Tt);
    P[s] = new O(s, 1, !1, i, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(i) {
    P[i] = new O(i, 1, !1, i.toLowerCase(), null, !1, !1);
  }), P.xlinkHref = new O("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(i) {
    P[i] = new O(i, 1, !1, i.toLowerCase(), null, !0, !0);
  });
  var Ae = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, te = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ae).forEach(function(i) {
    te.forEach(function(s) {
      s = s + i.charAt(0).toUpperCase() + i.substring(1), Ae[s] = Ae[i];
    });
  });
  var le = /["'&<>]/;
  function X(i) {
    if (typeof i == "boolean" || typeof i == "number") return "" + i;
    i = "" + i;
    var s = le.exec(i);
    if (s) {
      var f = "", v, x = 0;
      for (v = s.index; v < i.length; v++) {
        switch (i.charCodeAt(v)) {
          case 34:
            s = "&quot;";
            break;
          case 38:
            s = "&amp;";
            break;
          case 39:
            s = "&#x27;";
            break;
          case 60:
            s = "&lt;";
            break;
          case 62:
            s = "&gt;";
            break;
          default:
            continue;
        }
        x !== v && (f += i.substring(x, v)), x = v + 1, f += s;
      }
      i = x !== v ? f + i.substring(x, v) : f;
    }
    return i;
  }
  var tt = /([A-Z])/g, K = /^ms-/, gt = Array.isArray, $e = E("<script>"), xe = E("<\/script>"), Et = E('<script src="'), rt = E('<script type="module" src="'), Er = E('" async=""><\/script>'), Rr = /(<\/|<)(s)(cript)/gi;
  function Ir(i, s, f, v) {
    return "" + s + (f === "s" ? "\\u0073" : "\\u0053") + v;
  }
  function nt(i, s, f, v, x) {
    i = i === void 0 ? "" : i, s = s === void 0 ? $e : E('<script nonce="' + X(s) + '">');
    var b = [];
    if (f !== void 0 && b.push(s, k(("" + f).replace(Rr, Ir)), xe), v !== void 0) for (f = 0; f < v.length; f++) b.push(Et, k(X(v[f])), Er);
    if (x !== void 0) for (v = 0; v < x.length; v++) b.push(rt, k(X(x[v])), Er);
    return { bootstrapChunks: b, startInlineScript: s, placeholderPrefix: E(i + "P:"), segmentPrefix: E(i + "S:"), boundaryPrefix: i + "B:", idPrefix: i, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Me(i, s) {
    return { insertionMode: i, selectedValue: s };
  }
  function ir(i) {
    return Me(i === "http://www.w3.org/2000/svg" ? 2 : i === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function oe(i, s, f) {
    switch (s) {
      case "select":
        return Me(1, f.value != null ? f.value : f.defaultValue);
      case "svg":
        return Me(2, null);
      case "math":
        return Me(3, null);
      case "foreignObject":
        return Me(1, null);
      case "table":
        return Me(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return Me(5, null);
      case "colgroup":
        return Me(7, null);
      case "tr":
        return Me(6, null);
    }
    return 4 <= i.insertionMode || i.insertionMode === 0 ? Me(1, null) : i;
  }
  var ae = E("<!-- -->");
  function lr(i, s, f, v) {
    return s === "" ? v : (v && i.push(ae), i.push(k(X(s))), !0);
  }
  var Rt = /* @__PURE__ */ new Map(), fe = E(' style="'), se = E(":"), Nt = E(";");
  function Vt(i, s, f) {
    if (typeof f != "object") throw Error(A(62));
    s = !0;
    for (var v in f) if (M.call(f, v)) {
      var x = f[v];
      if (x != null && typeof x != "boolean" && x !== "") {
        if (v.indexOf("--") === 0) {
          var b = k(X(v));
          x = k(X(("" + x).trim()));
        } else {
          b = v;
          var T = Rt.get(b);
          T !== void 0 || (T = E(X(b.replace(tt, "-$1").toLowerCase().replace(K, "-ms-"))), Rt.set(b, T)), b = T, x = typeof x == "number" ? x === 0 || M.call(Ae, v) ? k("" + x) : k(x + "px") : k(X(("" + x).trim()));
        }
        s ? (s = !1, i.push(fe, b, se, x)) : i.push(Nt, b, se, x);
      }
    }
    s || i.push(ke);
  }
  var _e = E(" "), mt = E('="'), ke = E('"'), sr = E('=""');
  function ye(i, s, f, v) {
    switch (f) {
      case "style":
        Vt(i, s, v);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < f.length) || f[0] !== "o" && f[0] !== "O" || f[1] !== "n" && f[1] !== "N") {
      if (s = P.hasOwnProperty(f) ? P[f] : null, s !== null) {
        switch (typeof v) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!s.acceptsBooleans) return;
        }
        switch (f = k(s.attributeName), s.type) {
          case 3:
            v && i.push(_e, f, sr);
            break;
          case 4:
            v === !0 ? i.push(_e, f, sr) : v !== !1 && i.push(_e, f, mt, k(X(v)), ke);
            break;
          case 5:
            isNaN(v) || i.push(_e, f, mt, k(X(v)), ke);
            break;
          case 6:
            !isNaN(v) && 1 <= v && i.push(_e, f, mt, k(X(v)), ke);
            break;
          default:
            s.sanitizeURL && (v = "" + v), i.push(_e, f, mt, k(X(v)), ke);
        }
      } else if ($t(f)) {
        switch (typeof v) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (s = f.toLowerCase().slice(0, 5), s !== "data-" && s !== "aria-") return;
        }
        i.push(_e, k(f), mt, k(X(v)), ke);
      }
    }
  }
  var Ce = E(">"), ur = E("/>");
  function Yt(i, s, f) {
    if (s != null) {
      if (f != null) throw Error(A(60));
      if (typeof s != "object" || !("__html" in s)) throw Error(A(61));
      s = s.__html, s != null && i.push(k("" + s));
    }
  }
  function rn(i) {
    var s = "";
    return ue.Children.forEach(i, function(f) {
      f != null && (s += f);
    }), s;
  }
  var Ne = E(' selected=""');
  function Gt(i, s, f, v) {
    i.push(we(f));
    var x = f = null, b;
    for (b in s) if (M.call(s, b)) {
      var T = s[b];
      if (T != null) switch (b) {
        case "children":
          f = T;
          break;
        case "dangerouslySetInnerHTML":
          x = T;
          break;
        default:
          ye(i, v, b, T);
      }
    }
    return i.push(Ce), Yt(i, x, f), typeof f == "string" ? (i.push(k(X(f))), null) : f;
  }
  var Xt = E(`
`), nn = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ve = /* @__PURE__ */ new Map();
  function we(i) {
    var s = Ve.get(i);
    if (s === void 0) {
      if (!nn.test(i)) throw Error(A(65, i));
      s = E("<" + i), Ve.set(i, s);
    }
    return s;
  }
  var ge = E("<!DOCTYPE html>");
  function Pr(i, s, f, v, x) {
    switch (s) {
      case "select":
        i.push(we("select"));
        var b = null, T = null;
        for (z in f) if (M.call(f, z)) {
          var D = f[z];
          if (D != null) switch (z) {
            case "children":
              b = D;
              break;
            case "dangerouslySetInnerHTML":
              T = D;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ye(i, v, z, D);
          }
        }
        return i.push(Ce), Yt(i, T, b), b;
      case "option":
        T = x.selectedValue, i.push(we("option"));
        var H = D = null, W = null, z = null;
        for (b in f) if (M.call(f, b)) {
          var q = f[b];
          if (q != null) switch (b) {
            case "children":
              D = q;
              break;
            case "selected":
              W = q;
              break;
            case "dangerouslySetInnerHTML":
              z = q;
              break;
            case "value":
              H = q;
            default:
              ye(i, v, b, q);
          }
        }
        if (T != null) if (f = H !== null ? "" + H : rn(D), gt(T)) {
          for (v = 0; v < T.length; v++)
            if ("" + T[v] === f) {
              i.push(Ne);
              break;
            }
        } else "" + T === f && i.push(Ne);
        else W && i.push(Ne);
        return i.push(Ce), Yt(i, z, D), D;
      case "textarea":
        i.push(we("textarea")), z = T = b = null;
        for (D in f) if (M.call(f, D) && (H = f[D], H != null)) switch (D) {
          case "children":
            z = H;
            break;
          case "value":
            b = H;
            break;
          case "defaultValue":
            T = H;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(A(91));
          default:
            ye(i, v, D, H);
        }
        if (b === null && T !== null && (b = T), i.push(Ce), z != null) {
          if (b != null) throw Error(A(92));
          if (gt(z) && 1 < z.length) throw Error(A(93));
          b = "" + z;
        }
        return typeof b == "string" && b[0] === `
` && i.push(Xt), b !== null && i.push(k(X("" + b))), null;
      case "input":
        i.push(we("input")), H = z = D = b = null;
        for (T in f) if (M.call(f, T) && (W = f[T], W != null)) switch (T) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(A(399, "input"));
          case "defaultChecked":
            H = W;
            break;
          case "defaultValue":
            D = W;
            break;
          case "checked":
            z = W;
            break;
          case "value":
            b = W;
            break;
          default:
            ye(i, v, T, W);
        }
        return z !== null ? ye(
          i,
          v,
          "checked",
          z
        ) : H !== null && ye(i, v, "checked", H), b !== null ? ye(i, v, "value", b) : D !== null && ye(i, v, "value", D), i.push(ur), null;
      case "menuitem":
        i.push(we("menuitem"));
        for (var He in f) if (M.call(f, He) && (b = f[He], b != null)) switch (He) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(A(400));
          default:
            ye(i, v, He, b);
        }
        return i.push(Ce), null;
      case "title":
        i.push(we("title")), b = null;
        for (q in f) if (M.call(f, q) && (T = f[q], T != null)) switch (q) {
          case "children":
            b = T;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(A(434));
          default:
            ye(i, v, q, T);
        }
        return i.push(Ce), b;
      case "listing":
      case "pre":
        i.push(we(s)), T = b = null;
        for (H in f) if (M.call(f, H) && (D = f[H], D != null)) switch (H) {
          case "children":
            b = D;
            break;
          case "dangerouslySetInnerHTML":
            T = D;
            break;
          default:
            ye(i, v, H, D);
        }
        if (i.push(Ce), T != null) {
          if (b != null) throw Error(A(60));
          if (typeof T != "object" || !("__html" in T)) throw Error(A(61));
          f = T.__html, f != null && (typeof f == "string" && 0 < f.length && f[0] === `
` ? i.push(Xt, k(f)) : i.push(k("" + f)));
        }
        return typeof b == "string" && b[0] === `
` && i.push(Xt), b;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        i.push(we(s));
        for (var Xe in f) if (M.call(f, Xe) && (b = f[Xe], b != null)) switch (Xe) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(A(399, s));
          default:
            ye(i, v, Xe, b);
        }
        return i.push(ur), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Gt(i, f, s, v);
      case "html":
        return x.insertionMode === 0 && i.push(ge), Gt(i, f, s, v);
      default:
        if (s.indexOf("-") === -1 && typeof f.is != "string") return Gt(i, f, s, v);
        i.push(we(s)), T = b = null;
        for (W in f) if (M.call(f, W) && (D = f[W], D != null)) switch (W) {
          case "children":
            b = D;
            break;
          case "dangerouslySetInnerHTML":
            T = D;
            break;
          case "style":
            Vt(i, v, D);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            $t(W) && typeof D != "function" && typeof D != "symbol" && i.push(_e, k(W), mt, k(X(D)), ke);
        }
        return i.push(Ce), Yt(i, T, b), b;
    }
  }
  var Fr = E("</"), Dr = E(">"), de = E('<template id="'), Ar = E('"></template>'), on = E("<!--$-->"), an = E('<!--$?--><template id="'), Mr = E('"></template>'), cr = E("<!--$!-->"), Bn = E("<!--/$-->"), _r = E("<template"), It = E('"'), Or = E(' data-dgst="');
  E(' data-msg="'), E(' data-stck="');
  var ln = E("></template>");
  function Ee(i, s, f) {
    if (h(i, an), f === null) throw Error(A(395));
    return h(i, f), N(i, Mr);
  }
  var ot = E('<div hidden id="'), Pt = E('">'), Z = E("</div>"), Ft = E('<svg aria-hidden="true" style="display:none" id="'), fr = E('">'), Zt = E("</svg>"), at = E('<math aria-hidden="true" style="display:none" id="'), dr = E('">'), yt = E("</math>"), Se = E('<table hidden id="'), Lr = E('">'), Br = E("</table>"), sn = E('<table hidden><tbody id="'), pe = E('">'), Ur = E("</tbody></table>"), Un = E('<table hidden><tr id="'), Hn = E('">'), it = E("</tr></table>"), Hr = E('<table hidden><colgroup id="'), pr = E('">'), Dt = E("</colgroup></table>");
  function Oe(i, s, f, v) {
    switch (f.insertionMode) {
      case 0:
      case 1:
        return h(i, ot), h(i, s.segmentPrefix), h(i, k(v.toString(16))), N(i, Pt);
      case 2:
        return h(i, Ft), h(i, s.segmentPrefix), h(i, k(v.toString(16))), N(i, fr);
      case 3:
        return h(i, at), h(i, s.segmentPrefix), h(i, k(v.toString(16))), N(i, dr);
      case 4:
        return h(i, Se), h(i, s.segmentPrefix), h(i, k(v.toString(16))), N(i, Lr);
      case 5:
        return h(i, sn), h(i, s.segmentPrefix), h(i, k(v.toString(16))), N(i, pe);
      case 6:
        return h(i, Un), h(i, s.segmentPrefix), h(i, k(v.toString(16))), N(i, Hn);
      case 7:
        return h(
          i,
          Hr
        ), h(i, s.segmentPrefix), h(i, k(v.toString(16))), N(i, pr);
      default:
        throw Error(A(397));
    }
  }
  function lt(i, s) {
    switch (s.insertionMode) {
      case 0:
      case 1:
        return N(i, Z);
      case 2:
        return N(i, Zt);
      case 3:
        return N(i, yt);
      case 4:
        return N(i, Br);
      case 5:
        return N(i, Ur);
      case 6:
        return N(i, it);
      case 7:
        return N(i, Dt);
      default:
        throw Error(A(397));
    }
  }
  var hr = E('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), At = E('$RS("'), Mt = E('","'), st = E('")<\/script>'), _t = E('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), Le = E('$RC("'), un = E('","'), cn = E('")<\/script>'), St = E('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), he = E('$RX("'), ut = E('"'), ct = E(")<\/script>"), Ot = E(","), vr = /[<\u2028\u2029]/g;
  function Ye(i) {
    return JSON.stringify(i).replace(vr, function(s) {
      switch (s) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  var ft = Object.assign, Re = Symbol.for("react.element"), Lt = Symbol.for("react.portal"), Jt = Symbol.for("react.fragment"), gr = Symbol.for("react.strict_mode"), ze = Symbol.for("react.profiler"), dt = Symbol.for("react.provider"), Ie = Symbol.for("react.context"), mr = Symbol.for("react.forward_ref"), be = Symbol.for("react.suspense"), Be = Symbol.for("react.suspense_list"), a = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), p = Symbol.for("react.scope"), g = Symbol.for("react.debug_trace_mode"), w = Symbol.for("react.legacy_hidden"), y = Symbol.for("react.default_value"), C = Symbol.iterator;
  function F(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case Jt:
        return "Fragment";
      case Lt:
        return "Portal";
      case ze:
        return "Profiler";
      case gr:
        return "StrictMode";
      case be:
        return "Suspense";
      case Be:
        return "SuspenseList";
    }
    if (typeof i == "object") switch (i.$$typeof) {
      case Ie:
        return (i.displayName || "Context") + ".Consumer";
      case dt:
        return (i._context.displayName || "Context") + ".Provider";
      case mr:
        var s = i.render;
        return i = i.displayName, i || (i = s.displayName || s.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
      case a:
        return s = i.displayName || null, s !== null ? s : F(i.type) || "Memo";
      case u:
        s = i._payload, i = i._init;
        try {
          return F(i(s));
        } catch {
        }
    }
    return null;
  }
  var L = {};
  function U(i, s) {
    if (i = i.contextTypes, !i) return L;
    var f = {}, v;
    for (v in i) f[v] = s[v];
    return f;
  }
  var B = null;
  function V(i, s) {
    if (i !== s) {
      i.context._currentValue = i.parentValue, i = i.parent;
      var f = s.parent;
      if (i === null) {
        if (f !== null) throw Error(A(401));
      } else {
        if (f === null) throw Error(A(401));
        V(i, f);
      }
      s.context._currentValue = s.value;
    }
  }
  function Pe(i) {
    i.context._currentValue = i.parentValue, i = i.parent, i !== null && Pe(i);
  }
  function Fe(i) {
    var s = i.parent;
    s !== null && Fe(s), i.context._currentValue = i.value;
  }
  function De(i, s) {
    if (i.context._currentValue = i.parentValue, i = i.parent, i === null) throw Error(A(402));
    i.depth === s.depth ? V(i, s) : De(i, s);
  }
  function Bt(i, s) {
    var f = s.parent;
    if (f === null) throw Error(A(402));
    i.depth === f.depth ? V(i, f) : Bt(i, f), s.context._currentValue = s.value;
  }
  function pt(i) {
    var s = B;
    s !== i && (s === null ? Fe(i) : i === null ? Pe(s) : s.depth === i.depth ? V(s, i) : s.depth > i.depth ? De(s, i) : Bt(s, i), B = i);
  }
  var yr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(i, s) {
    i = i._reactInternals, i.queue !== null && i.queue.push(s);
  }, enqueueReplaceState: function(i, s) {
    i = i._reactInternals, i.replace = !0, i.queue = [s];
  }, enqueueForceUpdate: function() {
  } };
  function Ut(i, s, f, v) {
    var x = i.state !== void 0 ? i.state : null;
    i.updater = yr, i.props = f, i.state = x;
    var b = { queue: [], replace: !1 };
    i._reactInternals = b;
    var T = s.contextType;
    if (i.context = typeof T == "object" && T !== null ? T._currentValue : v, T = s.getDerivedStateFromProps, typeof T == "function" && (T = T(f, x), x = T == null ? x : ft({}, x, T), i.state = x), typeof s.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function")) if (s = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), s !== i.state && yr.enqueueReplaceState(i, i.state, null), b.queue !== null && 0 < b.queue.length) if (s = b.queue, T = b.replace, b.queue = null, b.replace = !1, T && s.length === 1) i.state = s[0];
    else {
      for (b = T ? s[0] : i.state, x = !0, T = T ? 1 : 0; T < s.length; T++) {
        var D = s[T];
        D = typeof D == "function" ? D.call(i, b, f, v) : D, D != null && (x ? (x = !1, b = ft({}, b, D)) : ft(b, D));
      }
      i.state = b;
    }
    else b.queue = null;
  }
  var Qt = { id: 1, overflow: "" };
  function bt(i, s, f) {
    var v = i.id;
    i = i.overflow;
    var x = 32 - Kt(v) - 1;
    v &= ~(1 << x), f += 1;
    var b = 32 - Kt(s) + x;
    if (30 < b) {
      var T = x - x % 5;
      return b = (v & (1 << T) - 1).toString(32), v >>= T, x -= T, { id: 1 << 32 - Kt(s) + x | f << x | v, overflow: b + i };
    }
    return { id: 1 << b | f << x | v, overflow: i };
  }
  var Kt = Math.clz32 ? Math.clz32 : fn, Sa = Math.log, ba = Math.LN2;
  function fn(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (Sa(i) / ba | 0) | 0;
  }
  function ht(i, s) {
    return i === s && (i !== 0 || 1 / i === 1 / s) || i !== i && s !== s;
  }
  var wa = typeof Object.is == "function" ? Object.is : ht, wt = null, jn = null, dn = null, Q = null, qt = !1, pn = !1, er = 0, Ht = null, hn = 0;
  function jt() {
    if (wt === null) throw Error(A(321));
    return wt;
  }
  function Ge() {
    if (0 < hn) throw Error(A(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function zn() {
    return Q === null ? dn === null ? (qt = !1, dn = Q = Ge()) : (qt = !0, Q = dn) : Q.next === null ? (qt = !1, Q = Q.next = Ge()) : (qt = !0, Q = Q.next), Q;
  }
  function jr() {
    jn = wt = null, pn = !1, dn = null, hn = 0, Q = Ht = null;
  }
  function wo(i, s) {
    return typeof s == "function" ? s(i) : s;
  }
  function vn(i, s, f) {
    if (wt = jt(), Q = zn(), qt) {
      var v = Q.queue;
      if (s = v.dispatch, Ht !== null && (f = Ht.get(v), f !== void 0)) {
        Ht.delete(v), v = Q.memoizedState;
        do
          v = i(v, f.action), f = f.next;
        while (f !== null);
        return Q.memoizedState = v, [v, s];
      }
      return [Q.memoizedState, s];
    }
    return i = i === wo ? typeof s == "function" ? s() : s : f !== void 0 ? f(s) : s, Q.memoizedState = i, i = Q.queue = { last: null, dispatch: null }, i = i.dispatch = xa.bind(null, wt, i), [Q.memoizedState, i];
  }
  function xo(i, s) {
    if (wt = jt(), Q = zn(), s = s === void 0 ? null : s, Q !== null) {
      var f = Q.memoizedState;
      if (f !== null && s !== null) {
        var v = f[1];
        e: if (v === null) v = !1;
        else {
          for (var x = 0; x < v.length && x < s.length; x++) if (!wa(s[x], v[x])) {
            v = !1;
            break e;
          }
          v = !0;
        }
        if (v) return f[0];
      }
    }
    return i = i(), Q.memoizedState = [i, s], i;
  }
  function xa(i, s, f) {
    if (25 <= hn) throw Error(A(301));
    if (i === wt) if (pn = !0, i = { action: f, next: null }, Ht === null && (Ht = /* @__PURE__ */ new Map()), f = Ht.get(s), f === void 0) Ht.set(s, i);
    else {
      for (s = f; s.next !== null; ) s = s.next;
      s.next = i;
    }
  }
  function ka() {
    throw Error(A(394));
  }
  function gn() {
  }
  var ko = { readContext: function(i) {
    return i._currentValue;
  }, useContext: function(i) {
    return jt(), i._currentValue;
  }, useMemo: xo, useReducer: vn, useRef: function(i) {
    wt = jt(), Q = zn();
    var s = Q.memoizedState;
    return s === null ? (i = { current: i }, Q.memoizedState = i) : s;
  }, useState: function(i) {
    return vn(wo, i);
  }, useInsertionEffect: gn, useLayoutEffect: function() {
  }, useCallback: function(i, s) {
    return xo(function() {
      return i;
    }, s);
  }, useImperativeHandle: gn, useEffect: gn, useDebugValue: gn, useDeferredValue: function(i) {
    return jt(), i;
  }, useTransition: function() {
    return jt(), [!1, ka];
  }, useId: function() {
    var i = jn.treeContext, s = i.overflow;
    i = i.id, i = (i & ~(1 << 32 - Kt(i) - 1)).toString(32) + s;
    var f = zr;
    if (f === null) throw Error(A(404));
    return s = er++, i = ":" + f.idPrefix + "R" + i, 0 < s && (i += "H" + s.toString(32)), i + ":";
  }, useMutableSource: function(i, s) {
    return jt(), s(i._source);
  }, useSyncExternalStore: function(i, s, f) {
    if (f === void 0) throw Error(A(407));
    return f();
  } }, zr = null, Wn = ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Ca(i) {
    return console.error(i), null;
  }
  function Sr() {
  }
  function $n(i, s, f, v, x, b, T, D, H) {
    var W = [], z = /* @__PURE__ */ new Set();
    return s = { destination: null, responseState: s, progressiveChunkSize: v === void 0 ? 12800 : v, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: z, pingedTasks: W, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: x === void 0 ? Ca : x, onAllReady: b === void 0 ? Sr : b, onShellReady: T === void 0 ? Sr : T, onShellError: D === void 0 ? Sr : D, onFatalError: H === void 0 ? Sr : H }, f = br(s, 0, null, f, !1, !1), f.parentFlushed = !0, i = Nn(s, i, null, f, z, L, null, Qt), W.push(i), s;
  }
  function Nn(i, s, f, v, x, b, T, D) {
    i.allPendingTasks++, f === null ? i.pendingRootTasks++ : f.pendingTasks++;
    var H = { node: s, ping: function() {
      var W = i.pingedTasks;
      W.push(H), W.length === 1 && Fo(i);
    }, blockedBoundary: f, blockedSegment: v, abortSet: x, legacyContext: b, context: T, treeContext: D };
    return x.add(H), H;
  }
  function br(i, s, f, v, x, b) {
    return { status: 0, id: -1, index: s, parentFlushed: !1, chunks: [], children: [], formatContext: v, boundary: f, lastPushedText: x, textEmbedded: b };
  }
  function Wr(i, s) {
    if (i = i.onError(s), i != null && typeof i != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
    return i;
  }
  function mn(i, s) {
    var f = i.onShellError;
    f(s), f = i.onFatalError, f(s), i.destination !== null ? (i.status = 2, Ct(i.destination, s)) : (i.status = 1, i.fatalError = s);
  }
  function Co(i, s, f, v, x) {
    for (wt = {}, jn = s, er = 0, i = f(v, x); pn; ) pn = !1, er = 0, hn += 1, Q = null, i = f(v, x);
    return jr(), i;
  }
  function To(i, s, f, v) {
    var x = f.render(), b = v.childContextTypes;
    if (b != null) {
      var T = s.legacyContext;
      if (typeof f.getChildContext != "function") v = T;
      else {
        f = f.getChildContext();
        for (var D in f) if (!(D in b)) throw Error(A(108, F(v) || "Unknown", D));
        v = ft({}, T, f);
      }
      s.legacyContext = v, Ue(i, s, x), s.legacyContext = T;
    } else Ue(i, s, x);
  }
  function Eo(i, s) {
    if (i && i.defaultProps) {
      s = ft({}, s), i = i.defaultProps;
      for (var f in i) s[f] === void 0 && (s[f] = i[f]);
      return s;
    }
    return s;
  }
  function yn(i, s, f, v, x) {
    if (typeof f == "function") if (f.prototype && f.prototype.isReactComponent) {
      x = U(f, s.legacyContext);
      var b = f.contextType;
      b = new f(v, typeof b == "object" && b !== null ? b._currentValue : x), Ut(b, f, v, x), To(i, s, b, f);
    } else {
      b = U(f, s.legacyContext), x = Co(i, s, f, v, b);
      var T = er !== 0;
      if (typeof x == "object" && x !== null && typeof x.render == "function" && x.$$typeof === void 0) Ut(x, f, v, b), To(i, s, x, f);
      else if (T) {
        v = s.treeContext, s.treeContext = bt(v, 1, 0);
        try {
          Ue(i, s, x);
        } finally {
          s.treeContext = v;
        }
      } else Ue(i, s, x);
    }
    else if (typeof f == "string") {
      switch (x = s.blockedSegment, b = Pr(x.chunks, f, v, i.responseState, x.formatContext), x.lastPushedText = !1, T = x.formatContext, x.formatContext = oe(T, f, v), Sn(i, s, b), x.formatContext = T, f) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          x.chunks.push(Fr, k(f), Dr);
      }
      x.lastPushedText = !1;
    } else {
      switch (f) {
        case w:
        case g:
        case gr:
        case ze:
        case Jt:
          Ue(i, s, v.children);
          return;
        case Be:
          Ue(i, s, v.children);
          return;
        case p:
          throw Error(A(343));
        case be:
          e: {
            f = s.blockedBoundary, x = s.blockedSegment, b = v.fallback, v = v.children, T = /* @__PURE__ */ new Set();
            var D = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: T, errorDigest: null }, H = br(i, x.chunks.length, D, x.formatContext, !1, !1);
            x.children.push(H), x.lastPushedText = !1;
            var W = br(i, 0, null, x.formatContext, !1, !1);
            W.parentFlushed = !0, s.blockedBoundary = D, s.blockedSegment = W;
            try {
              if (Sn(
                i,
                s,
                v
              ), W.lastPushedText && W.textEmbedded && W.chunks.push(ae), W.status = 1, bn(D, W), D.pendingTasks === 0) break e;
            } catch (z) {
              W.status = 4, D.forceClientRender = !0, D.errorDigest = Wr(i, z);
            } finally {
              s.blockedBoundary = f, s.blockedSegment = x;
            }
            s = Nn(i, b, f, H, T, s.legacyContext, s.context, s.treeContext), i.pingedTasks.push(s);
          }
          return;
      }
      if (typeof f == "object" && f !== null) switch (f.$$typeof) {
        case mr:
          if (v = Co(i, s, f.render, v, x), er !== 0) {
            f = s.treeContext, s.treeContext = bt(f, 1, 0);
            try {
              Ue(i, s, v);
            } finally {
              s.treeContext = f;
            }
          } else Ue(i, s, v);
          return;
        case a:
          f = f.type, v = Eo(f, v), yn(i, s, f, v, x);
          return;
        case dt:
          if (x = v.children, f = f._context, v = v.value, b = f._currentValue, f._currentValue = v, T = B, B = v = { parent: T, depth: T === null ? 0 : T.depth + 1, context: f, parentValue: b, value: v }, s.context = v, Ue(i, s, x), i = B, i === null) throw Error(A(403));
          v = i.parentValue, i.context._currentValue = v === y ? i.context._defaultValue : v, i = B = i.parent, s.context = i;
          return;
        case Ie:
          v = v.children, v = v(f._currentValue), Ue(i, s, v);
          return;
        case u:
          x = f._init, f = x(f._payload), v = Eo(f, v), yn(i, s, f, v, void 0);
          return;
      }
      throw Error(A(
        130,
        f == null ? f : typeof f,
        ""
      ));
    }
  }
  function Ue(i, s, f) {
    if (s.node = f, typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Re:
          yn(i, s, f.type, f.props, f.ref);
          return;
        case Lt:
          throw Error(A(257));
        case u:
          var v = f._init;
          f = v(f._payload), Ue(i, s, f);
          return;
      }
      if (gt(f)) {
        Ro(i, s, f);
        return;
      }
      if (f === null || typeof f != "object" ? v = null : (v = C && f[C] || f["@@iterator"], v = typeof v == "function" ? v : null), v && (v = v.call(f))) {
        if (f = v.next(), !f.done) {
          var x = [];
          do
            x.push(f.value), f = v.next();
          while (!f.done);
          Ro(i, s, x);
        }
        return;
      }
      throw i = Object.prototype.toString.call(f), Error(A(31, i === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : i));
    }
    typeof f == "string" ? (v = s.blockedSegment, v.lastPushedText = lr(s.blockedSegment.chunks, f, i.responseState, v.lastPushedText)) : typeof f == "number" && (v = s.blockedSegment, v.lastPushedText = lr(s.blockedSegment.chunks, "" + f, i.responseState, v.lastPushedText));
  }
  function Ro(i, s, f) {
    for (var v = f.length, x = 0; x < v; x++) {
      var b = s.treeContext;
      s.treeContext = bt(b, v, x);
      try {
        Sn(i, s, f[x]);
      } finally {
        s.treeContext = b;
      }
    }
  }
  function Sn(i, s, f) {
    var v = s.blockedSegment.formatContext, x = s.legacyContext, b = s.context;
    try {
      return Ue(i, s, f);
    } catch (H) {
      if (jr(), typeof H == "object" && H !== null && typeof H.then == "function") {
        f = H;
        var T = s.blockedSegment, D = br(i, T.chunks.length, null, T.formatContext, T.lastPushedText, !0);
        T.children.push(D), T.lastPushedText = !1, i = Nn(i, s.node, s.blockedBoundary, D, s.abortSet, s.legacyContext, s.context, s.treeContext).ping, f.then(i, i), s.blockedSegment.formatContext = v, s.legacyContext = x, s.context = b, pt(b);
      } else throw s.blockedSegment.formatContext = v, s.legacyContext = x, s.context = b, pt(b), H;
    }
  }
  function Ta(i) {
    var s = i.blockedBoundary;
    i = i.blockedSegment, i.status = 3, Po(this, s, i);
  }
  function Io(i, s, f) {
    var v = i.blockedBoundary;
    i.blockedSegment.status = 3, v === null ? (s.allPendingTasks--, s.status !== 2 && (s.status = 2, s.destination !== null && s.destination.close())) : (v.pendingTasks--, v.forceClientRender || (v.forceClientRender = !0, i = f === void 0 ? Error(A(432)) : f, v.errorDigest = s.onError(i), v.parentFlushed && s.clientRenderedBoundaries.push(v)), v.fallbackAbortableTasks.forEach(function(x) {
      return Io(x, s, f);
    }), v.fallbackAbortableTasks.clear(), s.allPendingTasks--, s.allPendingTasks === 0 && (v = s.onAllReady, v()));
  }
  function bn(i, s) {
    if (s.chunks.length === 0 && s.children.length === 1 && s.children[0].boundary === null) {
      var f = s.children[0];
      f.id = s.id, f.parentFlushed = !0, f.status === 1 && bn(i, f);
    } else i.completedSegments.push(s);
  }
  function Po(i, s, f) {
    if (s === null) {
      if (f.parentFlushed) {
        if (i.completedRootSegment !== null) throw Error(A(389));
        i.completedRootSegment = f;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && (i.onShellError = Sr, s = i.onShellReady, s());
    } else s.pendingTasks--, s.forceClientRender || (s.pendingTasks === 0 ? (f.parentFlushed && f.status === 1 && bn(s, f), s.parentFlushed && i.completedBoundaries.push(s), s.fallbackAbortableTasks.forEach(Ta, i), s.fallbackAbortableTasks.clear()) : f.parentFlushed && f.status === 1 && (bn(s, f), s.completedSegments.length === 1 && s.parentFlushed && i.partialBoundaries.push(s)));
    i.allPendingTasks--, i.allPendingTasks === 0 && (i = i.onAllReady, i());
  }
  function Fo(i) {
    if (i.status !== 2) {
      var s = B, f = Wn.current;
      Wn.current = ko;
      var v = zr;
      zr = i.responseState;
      try {
        var x = i.pingedTasks, b;
        for (b = 0; b < x.length; b++) {
          var T = x[b], D = i, H = T.blockedSegment;
          if (H.status === 0) {
            pt(T.context);
            try {
              Ue(D, T, T.node), H.lastPushedText && H.textEmbedded && H.chunks.push(ae), T.abortSet.delete(T), H.status = 1, Po(D, T.blockedBoundary, H);
            } catch (Ze) {
              if (jr(), typeof Ze == "object" && Ze !== null && typeof Ze.then == "function") {
                var W = T.ping;
                Ze.then(W, W);
              } else {
                T.abortSet.delete(T), H.status = 4;
                var z = T.blockedBoundary, q = Ze, He = Wr(D, q);
                if (z === null ? mn(D, q) : (z.pendingTasks--, z.forceClientRender || (z.forceClientRender = !0, z.errorDigest = He, z.parentFlushed && D.clientRenderedBoundaries.push(z))), D.allPendingTasks--, D.allPendingTasks === 0) {
                  var Xe = D.onAllReady;
                  Xe();
                }
              }
            } finally {
            }
          }
        }
        x.splice(0, b), i.destination !== null && Vn(i, i.destination);
      } catch (Ze) {
        Wr(i, Ze), mn(i, Ze);
      } finally {
        zr = v, Wn.current = f, f === ko && pt(s);
      }
    }
  }
  function wn(i, s, f) {
    switch (f.parentFlushed = !0, f.status) {
      case 0:
        var v = f.id = i.nextSegmentId++;
        return f.lastPushedText = !1, f.textEmbedded = !1, i = i.responseState, h(s, de), h(s, i.placeholderPrefix), i = k(v.toString(16)), h(s, i), N(s, Ar);
      case 1:
        f.status = 2;
        var x = !0;
        v = f.chunks;
        var b = 0;
        f = f.children;
        for (var T = 0; T < f.length; T++) {
          for (x = f[T]; b < x.index; b++) h(s, v[b]);
          x = xn(i, s, x);
        }
        for (; b < v.length - 1; b++) h(s, v[b]);
        return b < v.length && (x = N(s, v[b])), x;
      default:
        throw Error(A(390));
    }
  }
  function xn(i, s, f) {
    var v = f.boundary;
    if (v === null) return wn(i, s, f);
    if (v.parentFlushed = !0, v.forceClientRender) v = v.errorDigest, N(s, cr), h(s, _r), v && (h(s, Or), h(s, k(X(v))), h(s, It)), N(s, ln), wn(i, s, f);
    else if (0 < v.pendingTasks) {
      v.rootSegmentID = i.nextSegmentId++, 0 < v.completedSegments.length && i.partialBoundaries.push(v);
      var x = i.responseState, b = x.nextSuspenseID++;
      x = E(x.boundaryPrefix + b.toString(16)), v = v.id = x, Ee(s, i.responseState, v), wn(i, s, f);
    } else if (v.byteSize > i.progressiveChunkSize) v.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(v), Ee(s, i.responseState, v.id), wn(i, s, f);
    else {
      if (N(s, on), f = v.completedSegments, f.length !== 1) throw Error(A(391));
      xn(i, s, f[0]);
    }
    return N(s, Bn);
  }
  function Do(i, s, f) {
    return Oe(s, i.responseState, f.formatContext, f.id), xn(i, s, f), lt(s, f.formatContext);
  }
  function Ao(i, s, f) {
    for (var v = f.completedSegments, x = 0; x < v.length; x++) Mo(i, s, f, v[x]);
    if (v.length = 0, i = i.responseState, v = f.id, f = f.rootSegmentID, h(s, i.startInlineScript), i.sentCompleteBoundaryFunction ? h(s, Le) : (i.sentCompleteBoundaryFunction = !0, h(s, _t)), v === null) throw Error(A(395));
    return f = k(f.toString(16)), h(s, v), h(s, un), h(s, i.segmentPrefix), h(s, f), N(s, cn);
  }
  function Mo(i, s, f, v) {
    if (v.status === 2) return !0;
    var x = v.id;
    if (x === -1) {
      if ((v.id = f.rootSegmentID) === -1) throw Error(A(392));
      return Do(i, s, v);
    }
    return Do(i, s, v), i = i.responseState, h(s, i.startInlineScript), i.sentCompleteSegmentFunction ? h(s, At) : (i.sentCompleteSegmentFunction = !0, h(s, hr)), h(s, i.segmentPrefix), x = k(x.toString(16)), h(s, x), h(s, Mt), h(s, i.placeholderPrefix), h(s, x), N(s, st);
  }
  function Vn(i, s) {
    $ = new Uint8Array(512), ve = 0;
    try {
      var f = i.completedRootSegment;
      if (f !== null && i.pendingRootTasks === 0) {
        xn(i, s, f), i.completedRootSegment = null;
        var v = i.responseState.bootstrapChunks;
        for (f = 0; f < v.length - 1; f++) h(s, v[f]);
        f < v.length && N(s, v[f]);
      }
      var x = i.clientRenderedBoundaries, b;
      for (b = 0; b < x.length; b++) {
        var T = x[b];
        v = s;
        var D = i.responseState, H = T.id, W = T.errorDigest, z = T.errorMessage, q = T.errorComponentStack;
        if (h(v, D.startInlineScript), D.sentClientRenderFunction ? h(v, he) : (D.sentClientRenderFunction = !0, h(
          v,
          St
        )), H === null) throw Error(A(395));
        h(v, H), h(v, ut), (W || z || q) && (h(v, Ot), h(v, k(Ye(W || "")))), (z || q) && (h(v, Ot), h(v, k(Ye(z || "")))), q && (h(v, Ot), h(v, k(Ye(q)))), N(v, ct);
      }
      x.splice(0, b);
      var He = i.completedBoundaries;
      for (b = 0; b < He.length; b++) Ao(i, s, He[b]);
      He.splice(0, b), vt(s), $ = new Uint8Array(512), ve = 0;
      var Xe = i.partialBoundaries;
      for (b = 0; b < Xe.length; b++) {
        var Ze = Xe[b];
        e: {
          x = i, T = s;
          var kn = Ze.completedSegments;
          for (D = 0; D < kn.length; D++) if (!Mo(
            x,
            T,
            Ze,
            kn[D]
          )) {
            D++, kn.splice(0, D);
            var Oo = !1;
            break e;
          }
          kn.splice(0, D), Oo = !0;
        }
        if (!Oo) {
          i.destination = null, b++, Xe.splice(0, b);
          return;
        }
      }
      Xe.splice(0, b);
      var $r = i.completedBoundaries;
      for (b = 0; b < $r.length; b++) Ao(i, s, $r[b]);
      $r.splice(0, b);
    } finally {
      vt(s), i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && s.close();
    }
  }
  function _o(i, s) {
    try {
      var f = i.abortableTasks;
      f.forEach(function(v) {
        return Io(v, i, s);
      }), f.clear(), i.destination !== null && Vn(i, i.destination);
    } catch (v) {
      Wr(i, v), mn(i, v);
    }
  }
  return Qi.renderToReadableStream = function(i, s) {
    return new Promise(function(f, v) {
      var x, b, T = new Promise(function(z, q) {
        b = z, x = q;
      }), D = $n(i, nt(s ? s.identifierPrefix : void 0, s ? s.nonce : void 0, s ? s.bootstrapScriptContent : void 0, s ? s.bootstrapScripts : void 0, s ? s.bootstrapModules : void 0), ir(s ? s.namespaceURI : void 0), s ? s.progressiveChunkSize : void 0, s ? s.onError : void 0, b, function() {
        var z = new ReadableStream({ type: "bytes", pull: function(q) {
          if (D.status === 1) D.status = 2, Ct(q, D.fatalError);
          else if (D.status !== 2 && D.destination === null) {
            D.destination = q;
            try {
              Vn(D, q);
            } catch (He) {
              Wr(D, He), mn(D, He);
            }
          }
        }, cancel: function() {
          _o(D);
        } }, { highWaterMark: 0 });
        z.allReady = T, f(z);
      }, function(z) {
        T.catch(function() {
        }), v(z);
      }, x);
      if (s && s.signal) {
        var H = s.signal, W = function() {
          _o(D, H.reason), H.removeEventListener("abort", W);
        };
        H.addEventListener("abort", W);
      }
      Fo(D);
    });
  }, Qi.version = "18.3.1", Qi;
}
var bo = {};
/**
 * @license React
 * react-dom-server-legacy.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kl;
function us() {
  return Kl || (Kl = 1, process.env.NODE_ENV !== "production" && function() {
    var ue = qi(), A = "18.3.1", $ = ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ve(e) {
      {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          r[o - 1] = arguments[o];
        N("warn", e, r);
      }
    }
    function h(e) {
      {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          r[o - 1] = arguments[o];
        N("error", e, r);
      }
    }
    function N(e, t, r) {
      {
        var o = $.ReactDebugCurrentFrame, l = o.getStackAddendum();
        l !== "" && (t += "%s", r = r.concat([l]));
        var c = r.map(function(d) {
          return String(d);
        });
        c.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, c);
      }
    }
    function vt(e) {
      e();
    }
    function ne(e) {
    }
    function k(e, t) {
      E(e, t);
    }
    function E(e, t) {
      return e.push(t);
    }
    function Ct(e) {
    }
    function M(e) {
      e.push(null);
    }
    function J(e) {
      return e;
    }
    function tn(e) {
      return e;
    }
    function ce(e, t) {
      e.destroy(t);
    }
    function $t(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, r = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return r;
      }
    }
    function O(e) {
      try {
        return P(e), !1;
      } catch {
        return !0;
      }
    }
    function P(e) {
      return "" + e;
    }
    function me(e, t) {
      if (O(e))
        return h("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, $t(e)), P(e);
    }
    function Tt(e, t) {
      if (O(e))
        return h("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, $t(e)), P(e);
    }
    function Ae(e) {
      if (O(e))
        return h("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", $t(e)), P(e);
    }
    var te = Object.prototype.hasOwnProperty, le = 0, X = 1, tt = 2, K = 3, gt = 4, $e = 5, xe = 6, Et = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", rt = Et + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Er = new RegExp("^[" + Et + "][" + rt + "]*$"), Rr = {}, Ir = {};
    function nt(e) {
      return te.call(Ir, e) ? !0 : te.call(Rr, e) ? !1 : Er.test(e) ? (Ir[e] = !0, !0) : (Rr[e] = !0, h("Invalid attribute name: `%s`", e), !1);
    }
    function Me(e, t, r, o) {
      if (r !== null && r.type === le)
        return !1;
      switch (typeof t) {
        case "function":
        // $FlowIssue symbol is perfectly valid here
        case "symbol":
          return !0;
        case "boolean": {
          if (r !== null)
            return !r.acceptsBooleans;
          var l = e.toLowerCase().slice(0, 5);
          return l !== "data-" && l !== "aria-";
        }
        default:
          return !1;
      }
    }
    function ir(e) {
      return ae.hasOwnProperty(e) ? ae[e] : null;
    }
    function oe(e, t, r, o, l, c, d) {
      this.acceptsBooleans = t === tt || t === K || t === gt, this.attributeName = o, this.attributeNamespace = l, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = c, this.removeEmptyString = d;
    }
    var ae = {}, lr = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    lr.forEach(function(e) {
      ae[e] = new oe(
        e,
        le,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], r = e[1];
      ae[t] = new oe(
        t,
        X,
        !1,
        // mustUseProperty
        r,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      ae[e] = new oe(
        e,
        tt,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      ae[e] = new oe(
        e,
        tt,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      ae[e] = new oe(
        e,
        K,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      ae[e] = new oe(
        e,
        K,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      ae[e] = new oe(
        e,
        gt,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      ae[e] = new oe(
        e,
        xe,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      ae[e] = new oe(
        e,
        $e,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Rt = /[\-\:]([a-z])/g, fe = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Rt, fe);
      ae[t] = new oe(
        t,
        X,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Rt, fe);
      ae[t] = new oe(
        t,
        X,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Rt, fe);
      ae[t] = new oe(
        t,
        X,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      ae[e] = new oe(
        e,
        X,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var se = "xlinkHref";
    ae[se] = new oe(
      "xlinkHref",
      X,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      ae[e] = new oe(
        e,
        X,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Nt = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Vt(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var _e = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Nt).forEach(function(e) {
      _e.forEach(function(t) {
        Nt[Vt(t, e)] = Nt[e];
      });
    });
    var mt = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function ke(e, t) {
      mt[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || h("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || h("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function sr(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        // These are reserved SVG and MathML elements.
        // We don't mind this list too much because we expect it to never grow.
        // The alternative is to track the namespace in a few places which is convoluted.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var ye = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Ce = {}, ur = new RegExp("^(aria)-[" + rt + "]*$"), Yt = new RegExp("^(aria)[A-Z][" + rt + "]*$");
    function rn(e, t) {
      {
        if (te.call(Ce, t) && Ce[t])
          return !0;
        if (Yt.test(t)) {
          var r = "aria-" + t.slice(4).toLowerCase(), o = ye.hasOwnProperty(r) ? r : null;
          if (o == null)
            return h("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Ce[t] = !0, !0;
          if (t !== o)
            return h("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, o), Ce[t] = !0, !0;
        }
        if (ur.test(t)) {
          var l = t.toLowerCase(), c = ye.hasOwnProperty(l) ? l : null;
          if (c == null)
            return Ce[t] = !0, !1;
          if (t !== c)
            return h("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, c), Ce[t] = !0, !0;
        }
      }
      return !0;
    }
    function Ne(e, t) {
      {
        var r = [];
        for (var o in t) {
          var l = rn(e, o);
          l || r.push(o);
        }
        var c = r.map(function(d) {
          return "`" + d + "`";
        }).join(", ");
        r.length === 1 ? h("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, e) : r.length > 1 && h("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, e);
      }
    }
    function Gt(e, t) {
      sr(e, t) || Ne(e, t);
    }
    var Xt = !1;
    function nn(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Xt && (Xt = !0, e === "select" && t.multiple ? h("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : h("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Ve = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, we = function() {
    };
    {
      var ge = {}, Pr = /^on./, Fr = /^on[^A-Z]/, Dr = new RegExp("^(aria)-[" + rt + "]*$"), de = new RegExp("^(aria)[A-Z][" + rt + "]*$");
      we = function(e, t, r, o) {
        if (te.call(ge, t) && ge[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return h("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ge[t] = !0, !0;
        if (o != null) {
          var c = o.registrationNameDependencies, d = o.possibleRegistrationNames;
          if (c.hasOwnProperty(t))
            return !0;
          var m = d.hasOwnProperty(l) ? d[l] : null;
          if (m != null)
            return h("Invalid event handler property `%s`. Did you mean `%s`?", t, m), ge[t] = !0, !0;
          if (Pr.test(t))
            return h("Unknown event handler property `%s`. It will be ignored.", t), ge[t] = !0, !0;
        } else if (Pr.test(t))
          return Fr.test(t) && h("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), ge[t] = !0, !0;
        if (Dr.test(t) || de.test(t))
          return !0;
        if (l === "innerhtml")
          return h("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ge[t] = !0, !0;
        if (l === "aria")
          return h("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ge[t] = !0, !0;
        if (l === "is" && r !== null && r !== void 0 && typeof r != "string")
          return h("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof r), ge[t] = !0, !0;
        if (typeof r == "number" && isNaN(r))
          return h("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), ge[t] = !0, !0;
        var S = ir(t), R = S !== null && S.type === le;
        if (Ve.hasOwnProperty(l)) {
          var I = Ve[l];
          if (I !== t)
            return h("Invalid DOM property `%s`. Did you mean `%s`?", t, I), ge[t] = !0, !0;
        } else if (!R && t !== l)
          return h("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), ge[t] = !0, !0;
        return typeof r == "boolean" && Me(t, r, S) ? (r ? h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', r, t, t, r, t) : h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', r, t, t, r, t, t, t), ge[t] = !0, !0) : R ? !0 : Me(t, r, S) ? (ge[t] = !0, !1) : ((r === "false" || r === "true") && S !== null && S.type === K && (h("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", r, t, r === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, r), ge[t] = !0), !0);
      };
    }
    var Ar = function(e, t, r) {
      {
        var o = [];
        for (var l in t) {
          var c = we(e, l, t[l], r);
          c || o.push(l);
        }
        var d = o.map(function(m) {
          return "`" + m + "`";
        }).join(", ");
        o.length === 1 ? h("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e) : o.length > 1 && h("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e);
      }
    };
    function on(e, t, r) {
      sr(e, t) || Ar(e, t, r);
    }
    var an = function() {
    };
    {
      var Mr = /^(?:webkit|moz|o)[A-Z]/, cr = /^-ms-/, Bn = /-(.)/g, _r = /;\s*$/, It = {}, Or = {}, ln = !1, Ee = !1, ot = function(e) {
        return e.replace(Bn, function(t, r) {
          return r.toUpperCase();
        });
      }, Pt = function(e) {
        It.hasOwnProperty(e) && It[e] || (It[e] = !0, h(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          ot(e.replace(cr, "ms-"))
        ));
      }, Z = function(e) {
        It.hasOwnProperty(e) && It[e] || (It[e] = !0, h("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Ft = function(e, t) {
        Or.hasOwnProperty(t) && Or[t] || (Or[t] = !0, h(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(_r, "")));
      }, fr = function(e, t) {
        ln || (ln = !0, h("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Zt = function(e, t) {
        Ee || (Ee = !0, h("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      an = function(e, t) {
        e.indexOf("-") > -1 ? Pt(e) : Mr.test(e) ? Z(e) : _r.test(t) && Ft(e, t), typeof t == "number" && (isNaN(t) ? fr(e, t) : isFinite(t) || Zt(e, t));
      };
    }
    var at = an, dr = /["'&<>]/;
    function yt(e) {
      Ae(e);
      var t = "" + e, r = dr.exec(t);
      if (!r)
        return t;
      var o, l = "", c, d = 0;
      for (c = r.index; c < t.length; c++) {
        switch (t.charCodeAt(c)) {
          case 34:
            o = "&quot;";
            break;
          case 38:
            o = "&amp;";
            break;
          case 39:
            o = "&#x27;";
            break;
          case 60:
            o = "&lt;";
            break;
          case 62:
            o = "&gt;";
            break;
          default:
            continue;
        }
        d !== c && (l += t.substring(d, c)), d = c + 1, l += o;
      }
      return d !== c ? l + t.substring(d, c) : l;
    }
    function Se(e) {
      return typeof e == "boolean" || typeof e == "number" ? "" + e : yt(e);
    }
    var Lr = /([A-Z])/g, Br = /^ms-/;
    function sn(e) {
      return e.replace(Lr, "-$1").toLowerCase().replace(Br, "-ms-");
    }
    var pe = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Ur = !1;
    function Un(e) {
      !Ur && pe.test(e) && (Ur = !0, h("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    var Hn = Array.isArray;
    function it(e) {
      return Hn(e);
    }
    var Hr = "<script>";
    function pr(e, t, r, o, l) {
      var c = e === void 0 ? "" : e, d = Hr, m = [];
      return {
        bootstrapChunks: m,
        startInlineScript: d,
        placeholderPrefix: c + "P:",
        segmentPrefix: c + "S:",
        boundaryPrefix: c + "B:",
        idPrefix: c,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var Dt = 0, Oe = 1, lt = 2, hr = 3, At = 4, Mt = 5, st = 6, _t = 7;
    function Le(e, t) {
      return {
        insertionMode: e,
        selectedValue: t
      };
    }
    function un(e, t, r) {
      switch (t) {
        case "select":
          return Le(Oe, r.value != null ? r.value : r.defaultValue);
        case "svg":
          return Le(lt, null);
        case "math":
          return Le(hr, null);
        case "foreignObject":
          return Le(Oe, null);
        // Table parents are special in that their children can only be created at all if they're
        // wrapped in a table parent. So we need to encode that we're entering this mode.
        case "table":
          return Le(At, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return Le(Mt, null);
        case "colgroup":
          return Le(_t, null);
        case "tr":
          return Le(st, null);
      }
      return e.insertionMode >= At || e.insertionMode === Dt ? Le(Oe, null) : e;
    }
    var cn = null;
    function St(e) {
      var t = e.nextSuspenseID++;
      return e.boundaryPrefix + t.toString(16);
    }
    function he(e, t, r) {
      var o = e.idPrefix, l = ":" + o + "R" + t;
      return r > 0 && (l += "H" + r.toString(32)), l + ":";
    }
    function ut(e) {
      return Se(e);
    }
    var ct = "<!-- -->";
    function Ot(e, t, r, o) {
      return t === "" ? o : (o && e.push(ct), e.push(ut(t)), !0);
    }
    function vr(e, t, r, o) {
      r && o && e.push(ct);
    }
    var Ye = /* @__PURE__ */ new Map();
    function ft(e) {
      var t = Ye.get(e);
      if (t !== void 0)
        return t;
      var r = Se(sn(e));
      return Ye.set(e, r), r;
    }
    var Re = ' style="', Lt = ":", Jt = ";";
    function gr(e, t, r) {
      if (typeof r != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var o = !0;
      for (var l in r)
        if (te.call(r, l)) {
          var c = r[l];
          if (!(c == null || typeof c == "boolean" || c === "")) {
            var d = void 0, m = void 0, S = l.indexOf("--") === 0;
            S ? (d = Se(l), Tt(c, l), m = Se(("" + c).trim())) : (at(l, c), d = ft(l), typeof c == "number" ? c !== 0 && !te.call(Nt, l) ? m = c + "px" : m = "" + c : (Tt(c, l), m = Se(("" + c).trim()))), o ? (o = !1, e.push(Re, d, Lt, m)) : e.push(Jt, d, Lt, m);
          }
        }
      o || e.push(Ie);
    }
    var ze = " ", dt = '="', Ie = '"', mr = '=""';
    function be(e, t, r, o) {
      switch (r) {
        case "style": {
          gr(e, t, o);
          return;
        }
        case "defaultValue":
        case "defaultChecked":
        // These shouldn't be set as attributes on generic HTML elements.
        case "innerHTML":
        // Must use dangerouslySetInnerHTML instead.
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (
        // shouldIgnoreAttribute
        // We have already filtered out null/undefined and reserved words.
        !(r.length > 2 && (r[0] === "o" || r[0] === "O") && (r[1] === "n" || r[1] === "N"))
      ) {
        var l = ir(r);
        if (l !== null) {
          switch (typeof o) {
            case "function":
            // $FlowIssue symbol is perfectly valid here
            case "symbol":
              return;
            case "boolean":
              if (!l.acceptsBooleans)
                return;
          }
          var c = l.attributeName, d = c;
          switch (l.type) {
            case K:
              o && e.push(ze, d, mr);
              return;
            case gt:
              o === !0 ? e.push(ze, d, mr) : o === !1 || e.push(ze, d, dt, Se(o), Ie);
              return;
            case $e:
              isNaN(o) || e.push(ze, d, dt, Se(o), Ie);
              break;
            case xe:
              !isNaN(o) && o >= 1 && e.push(ze, d, dt, Se(o), Ie);
              break;
            default:
              l.sanitizeURL && (me(o, c), o = "" + o, Un(o)), e.push(ze, d, dt, Se(o), Ie);
          }
        } else if (nt(r)) {
          switch (typeof o) {
            case "function":
            // $FlowIssue symbol is perfectly valid here
            case "symbol":
              return;
            case "boolean": {
              var m = r.toLowerCase().slice(0, 5);
              if (m !== "data-" && m !== "aria-")
                return;
            }
          }
          e.push(ze, r, dt, Se(o), Ie);
        }
      }
    }
    var Be = ">", a = "/>";
    function u(e, t, r) {
      if (t != null) {
        if (r != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof t != "object" || !("__html" in t))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var o = t.__html;
        o != null && (Ae(o), e.push("" + o));
      }
    }
    var p = !1, g = !1, w = !1, y = !1, C = !1, F = !1, L = !1;
    function U(e, t) {
      {
        var r = e[t];
        if (r != null) {
          var o = it(r);
          e.multiple && !o ? h("The `%s` prop supplied to <select> must be an array if `multiple` is true.", t) : !e.multiple && o && h("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", t);
        }
      }
    }
    function B(e, t, r) {
      ke("select", t), U(t, "value"), U(t, "defaultValue"), t.value !== void 0 && t.defaultValue !== void 0 && !w && (h("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), w = !0), e.push(ht("select"));
      var o = null, l = null;
      for (var c in t)
        if (te.call(t, c)) {
          var d = t[c];
          if (d == null)
            continue;
          switch (c) {
            case "children":
              o = d;
              break;
            case "dangerouslySetInnerHTML":
              l = d;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              be(e, r, c, d);
              break;
          }
        }
      return e.push(Be), u(e, l, o), o;
    }
    function V(e) {
      var t = "";
      return ue.Children.forEach(e, function(r) {
        r != null && (t += r, !C && typeof r != "string" && typeof r != "number" && (C = !0, h("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), t;
    }
    var Pe = ' selected=""';
    function Fe(e, t, r, o) {
      var l = o.selectedValue;
      e.push(ht("option"));
      var c = null, d = null, m = null, S = null;
      for (var R in t)
        if (te.call(t, R)) {
          var I = t[R];
          if (I == null)
            continue;
          switch (R) {
            case "children":
              c = I;
              break;
            case "selected":
              m = I, L || (h("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), L = !0);
              break;
            case "dangerouslySetInnerHTML":
              S = I;
              break;
            // eslint-disable-next-line-no-fallthrough
            case "value":
              d = I;
            // We intentionally fallthrough to also set the attribute on the node.
            // eslint-disable-next-line-no-fallthrough
            default:
              be(e, r, R, I);
              break;
          }
        }
      if (l != null) {
        var _;
        if (d !== null ? (me(d, "value"), _ = "" + d) : (S !== null && (F || (F = !0, h("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), _ = V(c)), it(l))
          for (var j = 0; j < l.length; j++) {
            me(l[j], "value");
            var G = "" + l[j];
            if (G === _) {
              e.push(Pe);
              break;
            }
          }
        else
          me(l, "select.value"), "" + l === _ && e.push(Pe);
      } else m && e.push(Pe);
      return e.push(Be), u(e, S, c), c;
    }
    function De(e, t, r) {
      ke("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !g && (h("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", t.type), g = !0), t.value !== void 0 && t.defaultValue !== void 0 && !p && (h("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", t.type), p = !0), e.push(ht("input"));
      var o = null, l = null, c = null, d = null;
      for (var m in t)
        if (te.call(t, m)) {
          var S = t[m];
          if (S == null)
            continue;
          switch (m) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            // eslint-disable-next-line-no-fallthrough
            case "defaultChecked":
              d = S;
              break;
            case "defaultValue":
              l = S;
              break;
            case "checked":
              c = S;
              break;
            case "value":
              o = S;
              break;
            default:
              be(e, r, m, S);
              break;
          }
        }
      return c !== null ? be(e, r, "checked", c) : d !== null && be(e, r, "checked", d), o !== null ? be(e, r, "value", o) : l !== null && be(e, r, "value", l), e.push(a), null;
    }
    function Bt(e, t, r) {
      ke("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !y && (h("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), y = !0), e.push(ht("textarea"));
      var o = null, l = null, c = null;
      for (var d in t)
        if (te.call(t, d)) {
          var m = t[d];
          if (m == null)
            continue;
          switch (d) {
            case "children":
              c = m;
              break;
            case "value":
              o = m;
              break;
            case "defaultValue":
              l = m;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            // eslint-disable-next-line-no-fallthrough
            default:
              be(e, r, d, m);
              break;
          }
        }
      if (o === null && l !== null && (o = l), e.push(Be), c != null) {
        if (h("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), o != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (it(c)) {
          if (c.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          Ae(c[0]), o = "" + c[0];
        }
        Ae(c), o = "" + c;
      }
      return typeof o == "string" && o[0] === `
` && e.push(Kt), o !== null && (me(o, "value"), e.push(ut("" + o))), null;
    }
    function pt(e, t, r, o) {
      e.push(ht(r));
      for (var l in t)
        if (te.call(t, l)) {
          var c = t[l];
          if (c == null)
            continue;
          switch (l) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(r + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            // eslint-disable-next-line-no-fallthrough
            default:
              be(e, o, l, c);
              break;
          }
        }
      return e.push(a), null;
    }
    function yr(e, t, r) {
      e.push(ht("menuitem"));
      for (var o in t)
        if (te.call(t, o)) {
          var l = t[o];
          if (l == null)
            continue;
          switch (o) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            // eslint-disable-next-line-no-fallthrough
            default:
              be(e, r, o, l);
              break;
          }
        }
      return e.push(Be), null;
    }
    function Ut(e, t, r) {
      e.push(ht("title"));
      var o = null;
      for (var l in t)
        if (te.call(t, l)) {
          var c = t[l];
          if (c == null)
            continue;
          switch (l) {
            case "children":
              o = c;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            // eslint-disable-next-line-no-fallthrough
            default:
              be(e, r, l, c);
              break;
          }
        }
      e.push(Be);
      {
        var d = Array.isArray(o) && o.length < 2 ? o[0] || null : o;
        Array.isArray(o) && o.length > 1 ? h("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : d != null && d.$$typeof != null ? h("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : d != null && typeof d != "string" && typeof d != "number" && h("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return o;
    }
    function Qt(e, t, r, o) {
      e.push(ht(r));
      var l = null, c = null;
      for (var d in t)
        if (te.call(t, d)) {
          var m = t[d];
          if (m == null)
            continue;
          switch (d) {
            case "children":
              l = m;
              break;
            case "dangerouslySetInnerHTML":
              c = m;
              break;
            default:
              be(e, o, d, m);
              break;
          }
        }
      return e.push(Be), u(e, c, l), typeof l == "string" ? (e.push(ut(l)), null) : l;
    }
    function bt(e, t, r, o) {
      e.push(ht(r));
      var l = null, c = null;
      for (var d in t)
        if (te.call(t, d)) {
          var m = t[d];
          if (m == null)
            continue;
          switch (d) {
            case "children":
              l = m;
              break;
            case "dangerouslySetInnerHTML":
              c = m;
              break;
            case "style":
              gr(e, o, m);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              nt(d) && typeof m != "function" && typeof m != "symbol" && e.push(ze, d, dt, Se(m), Ie);
              break;
          }
        }
      return e.push(Be), u(e, c, l), l;
    }
    var Kt = `
`;
    function Sa(e, t, r, o) {
      e.push(ht(r));
      var l = null, c = null;
      for (var d in t)
        if (te.call(t, d)) {
          var m = t[d];
          if (m == null)
            continue;
          switch (d) {
            case "children":
              l = m;
              break;
            case "dangerouslySetInnerHTML":
              c = m;
              break;
            default:
              be(e, o, d, m);
              break;
          }
        }
      if (e.push(Be), c != null) {
        if (l != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof c != "object" || !("__html" in c))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var S = c.__html;
        S != null && (typeof S == "string" && S.length > 0 && S[0] === `
` ? e.push(Kt, S) : (Ae(S), e.push("" + S)));
      }
      return typeof l == "string" && l[0] === `
` && e.push(Kt), l;
    }
    var ba = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, fn = /* @__PURE__ */ new Map();
    function ht(e) {
      var t = fn.get(e);
      if (t === void 0) {
        if (!ba.test(e))
          throw new Error("Invalid tag: " + e);
        t = "<" + e, fn.set(e, t);
      }
      return t;
    }
    var wa = "<!DOCTYPE html>";
    function wt(e, t, r, o, l) {
      switch (Gt(t, r), nn(t, r), on(t, r, null), !r.suppressContentEditableWarning && r.contentEditable && r.children != null && h("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), l.insertionMode !== lt && l.insertionMode !== hr && t.indexOf("-") === -1 && typeof r.is != "string" && t.toLowerCase() !== t && h("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", t), t) {
        // Special tags
        case "select":
          return B(e, r, o);
        case "option":
          return Fe(e, r, o, l);
        case "textarea":
          return Bt(e, r, o);
        case "input":
          return De(e, r, o);
        case "menuitem":
          return yr(e, r, o);
        case "title":
          return Ut(e, r, o);
        // Newline eating tags
        case "listing":
        case "pre":
          return Sa(e, r, t, o);
        // Omitted close tags
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return pt(e, r, t, o);
        // These are reserved SVG and MathML elements, that are never custom elements.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return Qt(e, r, t, o);
        case "html":
          return l.insertionMode === Dt && e.push(wa), Qt(e, r, t, o);
        default:
          return t.indexOf("-") === -1 && typeof r.is != "string" ? Qt(e, r, t, o) : bt(e, r, t, o);
      }
    }
    var jn = "</", dn = ">";
    function Q(e, t, r) {
      switch (t) {
        // Omitted close tags
        // TODO: Instead of repeating this switch we could try to pass a flag from above.
        // That would require returning a tuple. Which might be ok if it gets inlined.
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          e.push(jn, t, dn);
      }
    }
    function qt(e, t) {
      for (var r = t.bootstrapChunks, o = 0; o < r.length - 1; o++)
        k(e, r[o]);
      return o < r.length ? E(e, r[o]) : !0;
    }
    var pn = '<template id="', er = '"></template>';
    function Ht(e, t, r) {
      k(e, pn), k(e, t.placeholderPrefix);
      var o = r.toString(16);
      return k(e, o), E(e, er);
    }
    var hn = "<!--$-->", jt = '<!--$?--><template id="', Ge = '"></template>', zn = "<!--$!-->", jr = "<!--/$-->", wo = "<template", vn = '"', xo = ' data-dgst="', xa = ' data-msg="', ka = ' data-stck="', gn = "></template>";
    function ko(e, t) {
      return E(e, hn);
    }
    function zr(e, t, r) {
      if (k(e, jt), r === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return k(e, r), E(e, Ge);
    }
    function Wn(e, t, r, o, l) {
      var c;
      return c = E(e, zn), k(e, wo), r && (k(e, xo), k(e, Se(r)), k(e, vn)), o && (k(e, xa), k(e, Se(o)), k(e, vn)), l && (k(e, ka), k(e, Se(l)), k(e, vn)), c = E(e, gn), c;
    }
    function Ca(e, t) {
      return E(e, jr);
    }
    function Sr(e, t) {
      return E(e, jr);
    }
    function $n(e, t) {
      return E(e, jr);
    }
    var Nn = '<div hidden id="', br = '">', Wr = "</div>", mn = '<svg aria-hidden="true" style="display:none" id="', Co = '">', To = "</svg>", Eo = '<math aria-hidden="true" style="display:none" id="', yn = '">', Ue = "</math>", Ro = '<table hidden id="', Sn = '">', Ta = "</table>", Io = '<table hidden><tbody id="', bn = '">', Po = "</tbody></table>", Fo = '<table hidden><tr id="', wn = '">', xn = "</tr></table>", Do = '<table hidden><colgroup id="', Ao = '">', Mo = "</colgroup></table>";
    function Vn(e, t, r, o) {
      switch (r.insertionMode) {
        case Dt:
        case Oe:
          return k(e, Nn), k(e, t.segmentPrefix), k(e, o.toString(16)), E(e, br);
        case lt:
          return k(e, mn), k(e, t.segmentPrefix), k(e, o.toString(16)), E(e, Co);
        case hr:
          return k(e, Eo), k(e, t.segmentPrefix), k(e, o.toString(16)), E(e, yn);
        case At:
          return k(e, Ro), k(e, t.segmentPrefix), k(e, o.toString(16)), E(e, Sn);
        // TODO: For the rest of these, there will be extra wrapper nodes that never
        // get deleted from the document. We need to delete the table too as part
        // of the injected scripts. They are invisible though so it's not too terrible
        // and it's kind of an edge case to suspend in a table. Totally supported though.
        case Mt:
          return k(e, Io), k(e, t.segmentPrefix), k(e, o.toString(16)), E(e, bn);
        case st:
          return k(e, Fo), k(e, t.segmentPrefix), k(e, o.toString(16)), E(e, wn);
        case _t:
          return k(e, Do), k(e, t.segmentPrefix), k(e, o.toString(16)), E(e, Ao);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function _o(e, t) {
      switch (t.insertionMode) {
        case Dt:
        case Oe:
          return E(e, Wr);
        case lt:
          return E(e, To);
        case hr:
          return E(e, Ue);
        case At:
          return E(e, Ta);
        case Mt:
          return E(e, Po);
        case st:
          return E(e, xn);
        case _t:
          return E(e, Mo);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var i = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", s = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', f = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', v = i + ';$RS("', x = '$RS("', b = '","', T = '")<\/script>';
    function D(e, t, r) {
      k(e, t.startInlineScript), t.sentCompleteSegmentFunction ? k(e, x) : (t.sentCompleteSegmentFunction = !0, k(e, v)), k(e, t.segmentPrefix);
      var o = r.toString(16);
      return k(e, o), k(e, b), k(e, t.placeholderPrefix), k(e, o), E(e, T);
    }
    var H = s + ';$RC("', W = '$RC("', z = '","', q = '")<\/script>';
    function He(e, t, r, o) {
      if (k(e, t.startInlineScript), t.sentCompleteBoundaryFunction ? k(e, W) : (t.sentCompleteBoundaryFunction = !0, k(e, H)), r === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var l = o.toString(16);
      return k(e, r), k(e, z), k(e, t.segmentPrefix), k(e, l), E(e, q);
    }
    var Xe = f + ';$RX("', Ze = '$RX("', kn = '"', Oo = ")<\/script>", $r = ",";
    function el(e, t, r, o, l, c) {
      if (k(e, t.startInlineScript), t.sentClientRenderFunction ? k(e, Ze) : (t.sentClientRenderFunction = !0, k(e, Xe)), r === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return k(e, r), k(e, kn), (o || l || c) && (k(e, $r), k(e, Ea(o || ""))), (l || c) && (k(e, $r), k(e, Ea(l || ""))), c && (k(e, $r), k(e, Ea(c))), E(e, Oo);
    }
    var tl = /[<\u2028\u2029]/g;
    function Ea(e) {
      var t = JSON.stringify(e);
      return t.replace(tl, function(r) {
        switch (r) {
          // santizing breaking out of strings and script tags
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    function rl(e, t) {
      var r = pr(t);
      return {
        // Keep this in sync with ReactDOMServerFormatConfig
        bootstrapChunks: r.bootstrapChunks,
        startInlineScript: r.startInlineScript,
        placeholderPrefix: r.placeholderPrefix,
        segmentPrefix: r.segmentPrefix,
        boundaryPrefix: r.boundaryPrefix,
        idPrefix: r.idPrefix,
        nextSuspenseID: r.nextSuspenseID,
        sentCompleteSegmentFunction: r.sentCompleteSegmentFunction,
        sentCompleteBoundaryFunction: r.sentCompleteBoundaryFunction,
        sentClientRenderFunction: r.sentClientRenderFunction,
        // This is an extra field for the legacy renderer
        generateStaticMarkup: e
      };
    }
    function nl() {
      return {
        insertionMode: Oe,
        // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
        selectedValue: null
      };
    }
    function ci(e, t, r, o) {
      return r.generateStaticMarkup ? (e.push(Se(t)), !1) : Ot(e, t, r, o);
    }
    function fi(e, t, r, o) {
      if (!t.generateStaticMarkup)
        return vr(e, t, r, o);
    }
    function ol(e, t) {
      return t.generateStaticMarkup ? !0 : ko(e);
    }
    function al(e, t, r, o, l) {
      return t.generateStaticMarkup ? !0 : Wn(e, t, r, o, l);
    }
    function il(e, t) {
      return t.generateStaticMarkup ? !0 : Ca(e);
    }
    function ll(e, t) {
      return t.generateStaticMarkup ? !0 : $n(e);
    }
    var We = Object.assign, sl = Symbol.for("react.element"), di = Symbol.for("react.portal"), Lo = Symbol.for("react.fragment"), Je = Symbol.for("react.strict_mode"), pi = Symbol.for("react.profiler"), Bo = Symbol.for("react.provider"), Uo = Symbol.for("react.context"), Ho = Symbol.for("react.forward_ref"), jo = Symbol.for("react.suspense"), Yn = Symbol.for("react.suspense_list"), Gn = Symbol.for("react.memo"), Cn = Symbol.for("react.lazy"), Ra = Symbol.for("react.scope"), Ia = Symbol.for("react.debug_trace_mode"), Pa = Symbol.for("react.legacy_hidden"), zo = Symbol.for("react.default_value"), hi = Symbol.iterator, ul = "@@iterator";
    function cl(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = hi && e[hi] || e[ul];
      return typeof t == "function" ? t : null;
    }
    function fl(e, t, r) {
      var o = e.displayName;
      if (o)
        return o;
      var l = t.displayName || t.name || "";
      return l !== "" ? r + "(" + l + ")" : r;
    }
    function Fa(e) {
      return e.displayName || "Context";
    }
    function ie(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Lo:
          return "Fragment";
        case di:
          return "Portal";
        case pi:
          return "Profiler";
        case Je:
          return "StrictMode";
        case jo:
          return "Suspense";
        case Yn:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Uo:
            var t = e;
            return Fa(t) + ".Consumer";
          case Bo:
            var r = e;
            return Fa(r._context) + ".Provider";
          case Ho:
            return fl(e, e.render, "ForwardRef");
          case Gn:
            var o = e.displayName || null;
            return o !== null ? o : ie(e.type) || "Memo";
          case Cn: {
            var l = e, c = l._payload, d = l._init;
            try {
              return ie(d(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Xn = 0, vi, Da, re, Tn, Aa, Ma, _a;
    function Oa() {
    }
    Oa.__reactDisabledLog = !0;
    function gi() {
      {
        if (Xn === 0) {
          vi = console.log, Da = console.info, re = console.warn, Tn = console.error, Aa = console.group, Ma = console.groupCollapsed, _a = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Oa,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Xn++;
      }
    }
    function mi() {
      {
        if (Xn--, Xn === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: We({}, e, {
              value: vi
            }),
            info: We({}, e, {
              value: Da
            }),
            warn: We({}, e, {
              value: re
            }),
            error: We({}, e, {
              value: Tn
            }),
            group: We({}, e, {
              value: Aa
            }),
            groupCollapsed: We({}, e, {
              value: Ma
            }),
            groupEnd: We({}, e, {
              value: _a
            })
          });
        }
        Xn < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Wo = $.ReactCurrentDispatcher, $o;
    function Zn(e, t, r) {
      {
        if ($o === void 0)
          try {
            throw Error();
          } catch (l) {
            var o = l.stack.trim().match(/\n( *(at )?)/);
            $o = o && o[1] || "";
          }
        return `
` + $o + e;
      }
    }
    var La = !1, En;
    {
      var Ba = typeof WeakMap == "function" ? WeakMap : Map;
      En = new Ba();
    }
    function Nr(e, t) {
      if (!e || La)
        return "";
      {
        var r = En.get(e);
        if (r !== void 0)
          return r;
      }
      var o;
      La = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = Wo.current, Wo.current = null, gi();
      try {
        if (t) {
          var d = function() {
            throw Error();
          };
          if (Object.defineProperty(d.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(d, []);
            } catch (Te) {
              o = Te;
            }
            Reflect.construct(e, [], d);
          } else {
            try {
              d.call();
            } catch (Te) {
              o = Te;
            }
            e.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Te) {
            o = Te;
          }
          e();
        }
      } catch (Te) {
        if (Te && o && typeof Te.stack == "string") {
          for (var m = Te.stack.split(`
`), S = o.stack.split(`
`), R = m.length - 1, I = S.length - 1; R >= 1 && I >= 0 && m[R] !== S[I]; )
            I--;
          for (; R >= 1 && I >= 0; R--, I--)
            if (m[R] !== S[I]) {
              if (R !== 1 || I !== 1)
                do
                  if (R--, I--, I < 0 || m[R] !== S[I]) {
                    var _ = `
` + m[R].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && En.set(e, _), _;
                  }
                while (R >= 1 && I >= 0);
              break;
            }
        }
      } finally {
        La = !1, Wo.current = c, mi(), Error.prepareStackTrace = l;
      }
      var j = e ? e.displayName || e.name : "", G = j ? Zn(j) : "";
      return typeof e == "function" && En.set(e, G), G;
    }
    function Ua(e, t, r) {
      return Nr(e, !0);
    }
    function Jn(e, t, r) {
      return Nr(e, !1);
    }
    function dl(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Qn(e, t, r) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Nr(e, dl(e));
      if (typeof e == "string")
        return Zn(e);
      switch (e) {
        case jo:
          return Zn("Suspense");
        case Yn:
          return Zn("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Ho:
            return Jn(e.render);
          case Gn:
            return Qn(e.type, t, r);
          case Cn: {
            var o = e, l = o._payload, c = o._init;
            try {
              return Qn(c(l), t, r);
            } catch {
            }
          }
        }
      return "";
    }
    var yi = {}, Ha = $.ReactDebugCurrentFrame;
    function No(e) {
      if (e) {
        var t = e._owner, r = Qn(e.type, e._source, t ? t.type : null);
        Ha.setExtraStackFrame(r);
      } else
        Ha.setExtraStackFrame(null);
    }
    function Vo(e, t, r, o, l) {
      {
        var c = Function.call.bind(te);
        for (var d in e)
          if (c(e, d)) {
            var m = void 0;
            try {
              if (typeof e[d] != "function") {
                var S = Error((o || "React class") + ": " + r + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw S.name = "Invariant Violation", S;
              }
              m = e[d](t, d, o, r, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              m = R;
            }
            m && !(m instanceof Error) && (No(l), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", r, d, typeof m), No(null)), m instanceof Error && !(m.message in yi) && (yi[m.message] = !0, No(l), h("Failed %s type: %s", r, m.message), No(null));
          }
      }
    }
    var Yo;
    Yo = {};
    var Kn = {};
    Object.freeze(Kn);
    function qn(e, t) {
      {
        var r = e.contextTypes;
        if (!r)
          return Kn;
        var o = {};
        for (var l in r)
          o[l] = t[l];
        {
          var c = ie(e) || "Unknown";
          Vo(r, o, "context", c);
        }
        return o;
      }
    }
    function Si(e, t, r, o) {
      {
        if (typeof e.getChildContext != "function") {
          {
            var l = ie(t) || "Unknown";
            Yo[l] || (Yo[l] = !0, h("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", l, l));
          }
          return r;
        }
        var c = e.getChildContext();
        for (var d in c)
          if (!(d in o))
            throw new Error((ie(t) || "Unknown") + '.getChildContext(): key "' + d + '" is not defined in childContextTypes.');
        {
          var m = ie(t) || "Unknown";
          Vo(o, c, "child context", m);
        }
        return We({}, r, c);
      }
    }
    var Vr;
    Vr = {};
    var Go = null, wr = null;
    function ja(e) {
      e.context._currentValue2 = e.parentValue;
    }
    function Yr(e) {
      e.context._currentValue2 = e.value;
    }
    function Xo(e, t) {
      if (e !== t) {
        ja(e);
        var r = e.parent, o = t.parent;
        if (r === null) {
          if (o !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (o === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          Xo(r, o);
        }
        Yr(t);
      }
    }
    function xr(e) {
      ja(e);
      var t = e.parent;
      t !== null && xr(t);
    }
    function Zo(e) {
      var t = e.parent;
      t !== null && Zo(t), Yr(e);
    }
    function Jo(e, t) {
      ja(e);
      var r = e.parent;
      if (r === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      r.depth === t.depth ? Xo(r, t) : Jo(r, t);
    }
    function eo(e, t) {
      var r = t.parent;
      if (r === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      e.depth === r.depth ? Xo(e, r) : eo(e, r), Yr(t);
    }
    function to(e) {
      var t = wr, r = e;
      t !== r && (t === null ? Zo(r) : r === null ? xr(t) : t.depth === r.depth ? Xo(t, r) : t.depth > r.depth ? Jo(t, r) : eo(t, r), wr = r);
    }
    function bi(e, t) {
      var r;
      r = e._currentValue2, e._currentValue2 = t, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== Vr && h("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = Vr;
      var o = wr, l = {
        parent: o,
        depth: o === null ? 0 : o.depth + 1,
        context: e,
        parentValue: r,
        value: t
      };
      return wr = l, l;
    }
    function wi(e) {
      var t = wr;
      if (t === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      t.context !== e && h("The parent context is not the expected context. This is probably a bug in React.");
      {
        var r = t.parentValue;
        r === zo ? t.context._currentValue2 = t.context._defaultValue : t.context._currentValue2 = r, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== Vr && h("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = Vr;
      }
      return wr = t.parent;
    }
    function xi() {
      return wr;
    }
    function kr(e) {
      var t = e._currentValue2;
      return t;
    }
    function za(e) {
      return e._reactInternals;
    }
    function pl(e, t) {
      e._reactInternals = t;
    }
    var ki = {}, Rn = {}, ro, Wa, Qo, Ko, qo, In, no, oo, ea;
    {
      ro = /* @__PURE__ */ new Set(), Wa = /* @__PURE__ */ new Set(), Qo = /* @__PURE__ */ new Set(), no = /* @__PURE__ */ new Set(), Ko = /* @__PURE__ */ new Set(), oo = /* @__PURE__ */ new Set(), ea = /* @__PURE__ */ new Set();
      var ao = /* @__PURE__ */ new Set();
      In = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var r = t + "_" + e;
          ao.has(r) || (ao.add(r), h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, qo = function(e, t) {
        if (t === void 0) {
          var r = ie(e) || "Component";
          Ko.has(r) || (Ko.add(r), h("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", r));
        }
      };
    }
    function ta(e, t) {
      {
        var r = e.constructor, o = r && ie(r) || "ReactClass", l = o + "." + t;
        if (ki[l])
          return;
        h(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, t, t, o), ki[l] = !0;
      }
    }
    var ra = {
      isMounted: function(e) {
        return !1;
      },
      enqueueSetState: function(e, t, r) {
        var o = za(e);
        o.queue === null ? ta(e, "setState") : (o.queue.push(t), r != null && In(r, "setState"));
      },
      enqueueReplaceState: function(e, t, r) {
        var o = za(e);
        o.replace = !0, o.queue = [t], r != null && In(r, "setState");
      },
      enqueueForceUpdate: function(e, t) {
        var r = za(e);
        r.queue === null ? ta(e, "forceUpdate") : t != null && In(t, "setState");
      }
    };
    function $a(e, t, r, o, l) {
      var c = r(l, o);
      qo(t, c);
      var d = c == null ? o : We({}, o, c);
      return d;
    }
    function Ci(e, t, r) {
      var o = Kn, l = e.contextType;
      if ("contextType" in e) {
        var c = (
          // Allow null for conditional declaration
          l === null || l !== void 0 && l.$$typeof === Uo && l._context === void 0
        );
        if (!c && !ea.has(e)) {
          ea.add(e);
          var d = "";
          l === void 0 ? d = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof l != "object" ? d = " However, it is set to a " + typeof l + "." : l.$$typeof === Bo ? d = " Did you accidentally pass the Context.Provider instead?" : l._context !== void 0 ? d = " Did you accidentally pass the Context.Consumer instead?" : d = " However, it is set to an object with keys {" + Object.keys(l).join(", ") + "}.", h("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", ie(e) || "Component", d);
        }
      }
      typeof l == "object" && l !== null ? o = kr(l) : o = r;
      var m = new e(t, o);
      {
        if (typeof e.getDerivedStateFromProps == "function" && (m.state === null || m.state === void 0)) {
          var S = ie(e) || "Component";
          ro.has(S) || (ro.add(S), h("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", S, m.state === null ? "null" : "undefined", S));
        }
        if (typeof e.getDerivedStateFromProps == "function" || typeof m.getSnapshotBeforeUpdate == "function") {
          var R = null, I = null, _ = null;
          if (typeof m.componentWillMount == "function" && m.componentWillMount.__suppressDeprecationWarning !== !0 ? R = "componentWillMount" : typeof m.UNSAFE_componentWillMount == "function" && (R = "UNSAFE_componentWillMount"), typeof m.componentWillReceiveProps == "function" && m.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? I = "componentWillReceiveProps" : typeof m.UNSAFE_componentWillReceiveProps == "function" && (I = "UNSAFE_componentWillReceiveProps"), typeof m.componentWillUpdate == "function" && m.componentWillUpdate.__suppressDeprecationWarning !== !0 ? _ = "componentWillUpdate" : typeof m.UNSAFE_componentWillUpdate == "function" && (_ = "UNSAFE_componentWillUpdate"), R !== null || I !== null || _ !== null) {
            var j = ie(e) || "Component", G = typeof e.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Qo.has(j) || (Qo.add(j), h(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, j, G, R !== null ? `
  ` + R : "", I !== null ? `
  ` + I : "", _ !== null ? `
  ` + _ : ""));
          }
        }
      }
      return m;
    }
    function Ti(e, t, r) {
      {
        var o = ie(t) || "Component", l = e.render;
        l || (t.prototype && typeof t.prototype.render == "function" ? h("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : h("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), e.getInitialState && !e.getInitialState.isReactClassApproved && !e.state && h("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), e.getDefaultProps && !e.getDefaultProps.isReactClassApproved && h("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), e.propTypes && h("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), e.contextType && h("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), e.contextTypes && h("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !oo.has(t) && (oo.add(t), h("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof e.componentShouldUpdate == "function" && h("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof e.shouldComponentUpdate < "u" && h("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", ie(t) || "A pure component"), typeof e.componentDidUnmount == "function" && h("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof e.componentDidReceiveProps == "function" && h("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof e.componentWillRecieveProps == "function" && h("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof e.UNSAFE_componentWillRecieveProps == "function" && h("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var c = e.props !== r;
        e.props !== void 0 && c && h("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), e.defaultProps && h("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof e.getSnapshotBeforeUpdate == "function" && typeof e.componentDidUpdate != "function" && !Wa.has(t) && (Wa.add(t), h("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", ie(t))), typeof e.getDerivedStateFromProps == "function" && h("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof e.getDerivedStateFromError == "function" && h("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && h("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var d = e.state;
        d && (typeof d != "object" || it(d)) && h("%s.state: must be set to an object or null", o), typeof e.getChildContext == "function" && typeof t.childContextTypes != "object" && h("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function Ei(e, t) {
      var r = t.state;
      if (typeof t.componentWillMount == "function") {
        if (t.componentWillMount.__suppressDeprecationWarning !== !0) {
          var o = ie(e) || "Unknown";
          Rn[o] || (ve(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            o
          ), Rn[o] = !0);
        }
        t.componentWillMount();
      }
      typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), r !== t.state && (h("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ie(e) || "Component"), ra.enqueueReplaceState(t, t.state, null));
    }
    function hl(e, t, r, o) {
      if (e.queue !== null && e.queue.length > 0) {
        var l = e.queue, c = e.replace;
        if (e.queue = null, e.replace = !1, c && l.length === 1)
          t.state = l[0];
        else {
          for (var d = c ? l[0] : t.state, m = !0, S = c ? 1 : 0; S < l.length; S++) {
            var R = l[S], I = typeof R == "function" ? R.call(t, d, r, o) : R;
            I != null && (m ? (m = !1, d = We({}, d, I)) : We(d, I));
          }
          t.state = d;
        }
      } else
        e.queue = null;
    }
    function Ri(e, t, r, o) {
      Ti(e, t, r);
      var l = e.state !== void 0 ? e.state : null;
      e.updater = ra, e.props = r, e.state = l;
      var c = {
        queue: [],
        replace: !1
      };
      pl(e, c);
      var d = t.contextType;
      if (typeof d == "object" && d !== null ? e.context = kr(d) : e.context = o, e.state === r) {
        var m = ie(t) || "Component";
        no.has(m) || (no.add(m), h("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", m));
      }
      var S = t.getDerivedStateFromProps;
      typeof S == "function" && (e.state = $a(e, t, S, l, r)), typeof t.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function") && (Ei(t, e), hl(c, e, r, o));
    }
    var vl = {
      id: 1,
      overflow: ""
    };
    function gl(e) {
      var t = e.overflow, r = e.id, o = r & ~ml(r);
      return o.toString(32) + t;
    }
    function Na(e, t, r) {
      var o = e.id, l = e.overflow, c = io(o) - 1, d = o & ~(1 << c), m = r + 1, S = io(t) + c;
      if (S > 30) {
        var R = c - c % 5, I = (1 << R) - 1, _ = (d & I).toString(32), j = d >> R, G = c - R, Te = io(t) + G, qr = m << G, en = qr | j, ar = _ + l;
        return {
          id: 1 << Te | en,
          overflow: ar
        };
      } else {
        var On = m << c, Zl = On | d, ts = l;
        return {
          id: 1 << S | Zl,
          overflow: ts
        };
      }
    }
    function io(e) {
      return 32 - yl(e);
    }
    function ml(e) {
      return 1 << io(e) - 1;
    }
    var yl = Math.clz32 ? Math.clz32 : Sl, Va = Math.log, na = Math.LN2;
    function Sl(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Va(t) / na | 0) | 0;
    }
    function bl(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var wl = typeof Object.is == "function" ? Object.is : bl, tr = null, Ya = null, oa = null, ee = null, Qe = !1, Pn = !1, Gr = 0, Y = null, Cr = 0, aa = 25, Ke = !1, qe;
    function zt() {
      if (tr === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Ke && h("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), tr;
    }
    function xl(e, t) {
      if (t === null)
        return h("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", qe), !1;
      e.length !== t.length && h(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, qe, "[" + e.join(", ") + "]", "[" + t.join(", ") + "]");
      for (var r = 0; r < t.length && r < e.length; r++)
        if (!wl(e[r], t[r]))
          return !1;
      return !0;
    }
    function xt() {
      if (Cr > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function Tr() {
      return ee === null ? oa === null ? (Qe = !1, oa = ee = xt()) : (Qe = !0, ee = oa) : ee.next === null ? (Qe = !1, ee = ee.next = xt()) : (Qe = !0, ee = ee.next), ee;
    }
    function Xr(e, t) {
      tr = t, Ya = e, Ke = !1, Gr = 0;
    }
    function kl(e, t, r, o) {
      for (; Pn; )
        Pn = !1, Gr = 0, Cr += 1, ee = null, r = e(t, o);
      return lo(), r;
    }
    function Ga() {
      var e = Gr !== 0;
      return e;
    }
    function lo() {
      Ke = !1, tr = null, Ya = null, Pn = !1, oa = null, Cr = 0, Y = null, ee = null;
    }
    function Cl(e) {
      return Ke && h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), kr(e);
    }
    function Tl(e) {
      return qe = "useContext", zt(), kr(e);
    }
    function ia(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Xa(e) {
      return qe = "useState", Ii(
        ia,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function Ii(e, t, r) {
      if (e !== ia && (qe = "useReducer"), tr = zt(), ee = Tr(), Qe) {
        var o = ee.queue, l = o.dispatch;
        if (Y !== null) {
          var c = Y.get(o);
          if (c !== void 0) {
            Y.delete(o);
            var d = ee.memoizedState, m = c;
            do {
              var S = m.action;
              Ke = !0, d = e(d, S), Ke = !1, m = m.next;
            } while (m !== null);
            return ee.memoizedState = d, [d, l];
          }
        }
        return [ee.memoizedState, l];
      } else {
        Ke = !0;
        var R;
        e === ia ? R = typeof t == "function" ? t() : t : R = r !== void 0 ? r(t) : t, Ke = !1, ee.memoizedState = R;
        var I = ee.queue = {
          last: null,
          dispatch: null
        }, _ = I.dispatch = Fi.bind(null, tr, I);
        return [ee.memoizedState, _];
      }
    }
    function Pi(e, t) {
      tr = zt(), ee = Tr();
      var r = t === void 0 ? null : t;
      if (ee !== null) {
        var o = ee.memoizedState;
        if (o !== null && r !== null) {
          var l = o[1];
          if (xl(r, l))
            return o[0];
        }
      }
      Ke = !0;
      var c = e();
      return Ke = !1, ee.memoizedState = [c, r], c;
    }
    function Za(e) {
      tr = zt(), ee = Tr();
      var t = ee.memoizedState;
      if (t === null) {
        var r = {
          current: e
        };
        return Object.seal(r), ee.memoizedState = r, r;
      } else
        return t;
    }
    function El(e, t) {
      qe = "useLayoutEffect", h("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Fi(e, t, r) {
      if (Cr >= aa)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (e === tr) {
        Pn = !0;
        var o = {
          action: r,
          next: null
        };
        Y === null && (Y = /* @__PURE__ */ new Map());
        var l = Y.get(t);
        if (l === void 0)
          Y.set(t, o);
        else {
          for (var c = l; c.next !== null; )
            c = c.next;
          c.next = o;
        }
      }
    }
    function Di(e, t) {
      return Pi(function() {
        return e;
      }, t);
    }
    function Rl(e, t, r) {
      return zt(), t(e._source);
    }
    function Il(e, t, r) {
      if (r === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return r();
    }
    function Pl(e) {
      return zt(), e;
    }
    function Fl() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function Dl() {
      return zt(), [!1, Fl];
    }
    function Al() {
      var e = Ya, t = gl(e.treeContext), r = Ja;
      if (r === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var o = Gr++;
      return he(r, t, o);
    }
    function la() {
    }
    var Ai = {
      readContext: Cl,
      useContext: Tl,
      useMemo: Pi,
      useReducer: Ii,
      useRef: Za,
      useState: Xa,
      useInsertionEffect: la,
      useLayoutEffect: El,
      useCallback: Di,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: la,
      // Effects are not run in the server environment.
      useEffect: la,
      // Debugging effect
      useDebugValue: la,
      useDeferredValue: Pl,
      useTransition: Dl,
      useId: Al,
      // Subscriptions are not setup in a server environment.
      useMutableSource: Rl,
      useSyncExternalStore: Il
    }, Ja = null;
    function Mi(e) {
      Ja = e;
    }
    function sa(e) {
      try {
        var t = "", r = e;
        do {
          switch (r.tag) {
            case 0:
              t += Zn(r.type, null, null);
              break;
            case 1:
              t += Jn(r.type, null, null);
              break;
            case 2:
              t += Ua(r.type, null, null);
              break;
          }
          r = r.parent;
        } while (r);
        return t;
      } catch (o) {
        return `
Error generating stack: ` + o.message + `
` + o.stack;
      }
    }
    var ua = $.ReactCurrentDispatcher, so = $.ReactDebugCurrentFrame, ca = 0, Fn = 1, fa = 2, da = 3, pa = 4, Dn = 0, Qa = 1, Zr = 2, _i = 12800;
    function Ml(e) {
      return console.error(e), null;
    }
    function An() {
    }
    function Mn(e, t, r, o, l, c, d, m, S) {
      var R = [], I = /* @__PURE__ */ new Set(), _ = {
        destination: null,
        responseState: t,
        progressiveChunkSize: o === void 0 ? _i : o,
        status: Dn,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: I,
        pingedTasks: R,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: l === void 0 ? Ml : l,
        onAllReady: An,
        onShellReady: d === void 0 ? An : d,
        onShellError: An,
        onFatalError: An
      }, j = ha(
        _,
        0,
        null,
        r,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      j.parentFlushed = !0;
      var G = Jr(_, e, null, j, I, Kn, Go, vl);
      return R.push(G), _;
    }
    function _l(e, t) {
      var r = e.pingedTasks;
      r.push(t), r.length === 1 && vt(function() {
        return li(e);
      });
    }
    function Ol(e, t) {
      return {
        id: cn,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        forceClientRender: !1,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: t,
        errorDigest: null
      };
    }
    function Jr(e, t, r, o, l, c, d, m) {
      e.allPendingTasks++, r === null ? e.pendingRootTasks++ : r.pendingTasks++;
      var S = {
        node: t,
        ping: function() {
          return _l(e, S);
        },
        blockedBoundary: r,
        blockedSegment: o,
        abortSet: l,
        legacyContext: c,
        context: d,
        treeContext: m
      };
      return S.componentStack = null, l.add(S), S;
    }
    function ha(e, t, r, o, l, c) {
      return {
        status: ca,
        id: -1,
        // lazily assigned later
        index: t,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: o,
        boundary: r,
        lastPushedText: l,
        textEmbedded: c
      };
    }
    var rr = null;
    function Ka() {
      return rr === null || rr.componentStack === null ? "" : sa(rr.componentStack);
    }
    function Qr(e, t) {
      e.componentStack = {
        tag: 0,
        parent: e.componentStack,
        type: t
      };
    }
    function uo(e, t) {
      e.componentStack = {
        tag: 1,
        parent: e.componentStack,
        type: t
      };
    }
    function nr(e, t) {
      e.componentStack = {
        tag: 2,
        parent: e.componentStack,
        type: t
      };
    }
    function Wt(e) {
      e.componentStack === null ? h("Unexpectedly popped too many stack frames. This is a bug in React.") : e.componentStack = e.componentStack.parent;
    }
    var or = null;
    function va(e, t) {
      {
        var r;
        typeof t == "string" ? r = t : t && typeof t.message == "string" ? r = t.message : r = String(t);
        var o = or || Ka();
        or = null, e.errorMessage = r, e.errorComponentStack = o;
      }
    }
    function co(e, t) {
      var r = e.onError(t);
      if (r != null && typeof r != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof r + '" instead');
      return r;
    }
    function kt(e, t) {
      var r = e.onShellError;
      r(t);
      var o = e.onFatalError;
      o(t), e.destination !== null ? (e.status = Zr, ce(e.destination, t)) : (e.status = Qa, e.fatalError = t);
    }
    function fo(e, t, r) {
      Qr(t, "Suspense");
      var o = t.blockedBoundary, l = t.blockedSegment, c = r.fallback, d = r.children, m = /* @__PURE__ */ new Set(), S = Ol(e, m), R = l.chunks.length, I = ha(
        e,
        R,
        S,
        l.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      l.children.push(I), l.lastPushedText = !1;
      var _ = ha(
        e,
        0,
        null,
        l.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      _.parentFlushed = !0, t.blockedBoundary = S, t.blockedSegment = _;
      try {
        if (je(e, t, d), fi(_.chunks, e.responseState, _.lastPushedText, _.textEmbedded), _.status = Fn, _n(S, _), S.pendingTasks === 0) {
          Wt(t);
          return;
        }
      } catch (G) {
        _.status = pa, S.forceClientRender = !0, S.errorDigest = co(e, G), va(S, G);
      } finally {
        t.blockedBoundary = o, t.blockedSegment = l;
      }
      var j = Jr(e, c, o, I, m, t.legacyContext, t.context, t.treeContext);
      j.componentStack = t.componentStack, e.pingedTasks.push(j), Wt(t);
    }
    function qa(e, t, r, o) {
      Qr(t, r);
      var l = t.blockedSegment, c = wt(l.chunks, r, o, e.responseState, l.formatContext);
      l.lastPushedText = !1;
      var d = l.formatContext;
      l.formatContext = un(d, r, o), je(e, t, c), l.formatContext = d, Q(l.chunks, r), l.lastPushedText = !1, Wt(t);
    }
    function po(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function ho(e, t, r, o, l) {
      var c = {};
      Xr(t, c);
      var d = r(o, l);
      return kl(r, o, d, l);
    }
    function Oi(e, t, r, o, l) {
      var c = r.render();
      r.props !== l && (ti || h("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ie(o) || "a component"), ti = !0);
      {
        var d = o.childContextTypes;
        if (d != null) {
          var m = t.legacyContext, S = Si(r, o, m, d);
          t.legacyContext = S, et(e, t, c), t.legacyContext = m;
          return;
        }
      }
      et(e, t, c);
    }
    function Ll(e, t, r, o) {
      nr(t, r);
      var l = qn(r, t.legacyContext), c = Ci(r, o, l);
      Ri(c, r, o, l), Oi(e, t, c, r, o), Wt(t);
    }
    var Li = {}, vo = {}, ei = {}, Bi = {}, ti = !1, go = {}, ri = !1, ni = !1, oi = !1;
    function Ui(e, t, r, o) {
      var l;
      if (l = qn(r, t.legacyContext), uo(t, r), r.prototype && typeof r.prototype.render == "function") {
        var c = ie(r) || "Unknown";
        Li[c] || (h("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", c, c), Li[c] = !0);
      }
      var d = ho(e, t, r, o, l), m = Ga();
      if (typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0) {
        var S = ie(r) || "Unknown";
        vo[S] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", S, S, S), vo[S] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0
      ) {
        {
          var R = ie(r) || "Unknown";
          vo[R] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), vo[R] = !0);
        }
        Ri(d, r, o, l), Oi(e, t, d, r, o);
      } else if (Hi(r), m) {
        var I = t.treeContext, _ = 1, j = 0;
        t.treeContext = Na(I, _, j);
        try {
          et(e, t, d);
        } finally {
          t.treeContext = I;
        }
      } else
        et(e, t, d);
      Wt(t);
    }
    function Hi(e) {
      {
        if (e && e.childContextTypes && h("%s(...): childContextTypes cannot be defined on a function component.", e.displayName || e.name || "Component"), e.defaultProps !== void 0) {
          var t = ie(e) || "Unknown";
          go[t] || (h("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", t), go[t] = !0);
        }
        if (typeof e.getDerivedStateFromProps == "function") {
          var r = ie(e) || "Unknown";
          Bi[r] || (h("%s: Function components do not support getDerivedStateFromProps.", r), Bi[r] = !0);
        }
        if (typeof e.contextType == "object" && e.contextType !== null) {
          var o = ie(e) || "Unknown";
          ei[o] || (h("%s: Function components do not support contextType.", o), ei[o] = !0);
        }
      }
    }
    function ai(e, t) {
      if (e && e.defaultProps) {
        var r = We({}, t), o = e.defaultProps;
        for (var l in o)
          r[l] === void 0 && (r[l] = o[l]);
        return r;
      }
      return t;
    }
    function ji(e, t, r, o, l) {
      uo(t, r.render);
      var c = ho(e, t, r.render, o, l), d = Ga();
      if (d) {
        var m = t.treeContext, S = 1, R = 0;
        t.treeContext = Na(m, S, R);
        try {
          et(e, t, c);
        } finally {
          t.treeContext = m;
        }
      } else
        et(e, t, c);
      Wt(t);
    }
    function Bl(e, t, r, o, l) {
      var c = r.type, d = ai(c, o);
      ii(e, t, c, d, l);
    }
    function Ul(e, t, r, o) {
      r._context === void 0 ? r !== r.Consumer && (oi || (oi = !0, h("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : r = r._context;
      var l = o.children;
      typeof l != "function" && h("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var c = kr(r), d = l(c);
      et(e, t, d);
    }
    function zi(e, t, r, o) {
      var l = r._context, c = o.value, d = o.children, m;
      m = t.context, t.context = bi(l, c), et(e, t, d), t.context = wi(l), m !== t.context && h("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function Hl(e, t, r, o, l) {
      Qr(t, "Lazy");
      var c = r._payload, d = r._init, m = d(c), S = ai(m, o);
      ii(e, t, m, S, l), Wt(t);
    }
    function ii(e, t, r, o, l) {
      if (typeof r == "function")
        if (po(r)) {
          Ll(e, t, r, o);
          return;
        } else {
          Ui(e, t, r, o);
          return;
        }
      if (typeof r == "string") {
        qa(e, t, r, o);
        return;
      }
      switch (r) {
        // TODO: LegacyHidden acts the same as a fragment. This only works
        // because we currently assume that every instance of LegacyHidden is
        // accompanied by a host component wrapper. In the hidden mode, the host
        // component is given a `hidden` attribute, which ensures that the
        // initial HTML is not visible. To support the use of LegacyHidden as a
        // true fragment, without an extra DOM node, we would have to hide the
        // initial HTML in some other way.
        // TODO: Add REACT_OFFSCREEN_TYPE here too with the same capability.
        case Pa:
        case Ia:
        case Je:
        case pi:
        case Lo: {
          et(e, t, o.children);
          return;
        }
        case Yn: {
          Qr(t, "SuspenseList"), et(e, t, o.children), Wt(t);
          return;
        }
        case Ra:
          throw new Error("ReactDOMServer does not yet support scope components.");
        // eslint-disable-next-line-no-fallthrough
        case jo: {
          fo(e, t, o);
          return;
        }
      }
      if (typeof r == "object" && r !== null)
        switch (r.$$typeof) {
          case Ho: {
            ji(e, t, r, o, l);
            return;
          }
          case Gn: {
            Bl(e, t, r, o, l);
            return;
          }
          case Bo: {
            zi(e, t, r, o);
            return;
          }
          case Uo: {
            Ul(e, t, r, o);
            return;
          }
          case Cn: {
            Hl(e, t, r, o);
            return;
          }
        }
      var c = "";
      throw (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (r == null ? r : typeof r) + "." + c));
    }
    function jl(e, t) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      e[Symbol.toStringTag] === "Generator" && (ri || h("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ri = !0), e.entries === t && (ni || h("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ni = !0);
    }
    function et(e, t, r) {
      try {
        return zl(e, t, r);
      } catch (o) {
        throw typeof o == "object" && o !== null && typeof o.then == "function" || (or = or !== null ? or : Ka()), o;
      }
    }
    function zl(e, t, r) {
      if (t.node = r, typeof r == "object" && r !== null) {
        switch (r.$$typeof) {
          case sl: {
            var o = r, l = o.type, c = o.props, d = o.ref;
            ii(e, t, l, c, d);
            return;
          }
          case di:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          // eslint-disable-next-line-no-fallthrough
          case Cn: {
            var m = r, S = m._payload, R = m._init, I;
            try {
              I = R(S);
            } catch (On) {
              throw typeof On == "object" && On !== null && typeof On.then == "function" && Qr(t, "Lazy"), On;
            }
            et(e, t, I);
            return;
          }
        }
        if (it(r)) {
          ga(e, t, r);
          return;
        }
        var _ = cl(r);
        if (_) {
          jl(r, _);
          var j = _.call(r);
          if (j) {
            var G = j.next();
            if (!G.done) {
              var Te = [];
              do
                Te.push(G.value), G = j.next();
              while (!G.done);
              ga(e, t, Te);
              return;
            }
            return;
          }
        }
        var qr = Object.prototype.toString.call(r);
        throw new Error("Objects are not valid as a React child (found: " + (qr === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : qr) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof r == "string") {
        var en = t.blockedSegment;
        en.lastPushedText = ci(t.blockedSegment.chunks, r, e.responseState, en.lastPushedText);
        return;
      }
      if (typeof r == "number") {
        var ar = t.blockedSegment;
        ar.lastPushedText = ci(t.blockedSegment.chunks, "" + r, e.responseState, ar.lastPushedText);
        return;
      }
      typeof r == "function" && h("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function ga(e, t, r) {
      for (var o = r.length, l = 0; l < o; l++) {
        var c = t.treeContext;
        t.treeContext = Na(c, o, l);
        try {
          je(e, t, r[l]);
        } finally {
          t.treeContext = c;
        }
      }
    }
    function Wl(e, t, r) {
      var o = t.blockedSegment, l = o.chunks.length, c = ha(
        e,
        l,
        null,
        o.formatContext,
        // Adopt the parent segment's leading text embed
        o.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      o.children.push(c), o.lastPushedText = !1;
      var d = Jr(e, t.node, t.blockedBoundary, c, t.abortSet, t.legacyContext, t.context, t.treeContext);
      t.componentStack !== null && (d.componentStack = t.componentStack.parent);
      var m = d.ping;
      r.then(m, m);
    }
    function je(e, t, r) {
      var o = t.blockedSegment.formatContext, l = t.legacyContext, c = t.context, d = null;
      d = t.componentStack;
      try {
        return et(e, t, r);
      } catch (m) {
        if (lo(), typeof m == "object" && m !== null && typeof m.then == "function") {
          Wl(e, t, m), t.blockedSegment.formatContext = o, t.legacyContext = l, t.context = c, to(c), t.componentStack = d;
          return;
        } else
          throw t.blockedSegment.formatContext = o, t.legacyContext = l, t.context = c, to(c), t.componentStack = d, m;
      }
    }
    function $l(e, t, r, o) {
      var l = co(e, o);
      if (t === null ? kt(e, o) : (t.pendingTasks--, t.forceClientRender || (t.forceClientRender = !0, t.errorDigest = l, va(t, o), t.parentFlushed && e.clientRenderedBoundaries.push(t))), e.allPendingTasks--, e.allPendingTasks === 0) {
        var c = e.onAllReady;
        c();
      }
    }
    function Wi(e) {
      var t = this, r = e.blockedBoundary, o = e.blockedSegment;
      o.status = da, Ni(t, r, o);
    }
    function $i(e, t, r) {
      var o = e.blockedBoundary, l = e.blockedSegment;
      if (l.status = da, o === null)
        t.allPendingTasks--, t.status !== Zr && (t.status = Zr, t.destination !== null && M(t.destination));
      else {
        if (o.pendingTasks--, !o.forceClientRender) {
          o.forceClientRender = !0;
          var c = r === void 0 ? new Error("The render was aborted by the server without a reason.") : r;
          o.errorDigest = t.onError(c);
          {
            var d = "The server did not finish this Suspense boundary: ";
            c && typeof c.message == "string" ? c = d + c.message : c = d + String(c);
            var m = rr;
            rr = e;
            try {
              va(o, c);
            } finally {
              rr = m;
            }
          }
          o.parentFlushed && t.clientRenderedBoundaries.push(o);
        }
        if (o.fallbackAbortableTasks.forEach(function(R) {
          return $i(R, t, r);
        }), o.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0) {
          var S = t.onAllReady;
          S();
        }
      }
    }
    function _n(e, t) {
      if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
        var r = t.children[0];
        r.id = t.id, r.parentFlushed = !0, r.status === Fn && _n(e, r);
      } else {
        var o = e.completedSegments;
        o.push(t);
      }
    }
    function Ni(e, t, r) {
      if (t === null) {
        if (r.parentFlushed) {
          if (e.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          e.completedRootSegment = r;
        }
        if (e.pendingRootTasks--, e.pendingRootTasks === 0) {
          e.onShellError = An;
          var o = e.onShellReady;
          o();
        }
      } else if (t.pendingTasks--, !t.forceClientRender) {
        if (t.pendingTasks === 0)
          r.parentFlushed && r.status === Fn && _n(t, r), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(Wi, e), t.fallbackAbortableTasks.clear();
        else if (r.parentFlushed && r.status === Fn) {
          _n(t, r);
          var l = t.completedSegments;
          l.length === 1 && t.parentFlushed && e.partialBoundaries.push(t);
        }
      }
      if (e.allPendingTasks--, e.allPendingTasks === 0) {
        var c = e.onAllReady;
        c();
      }
    }
    function Nl(e, t) {
      var r = t.blockedSegment;
      if (r.status === ca) {
        to(t.context);
        var o = null;
        o = rr, rr = t;
        try {
          et(e, t, t.node), fi(r.chunks, e.responseState, r.lastPushedText, r.textEmbedded), t.abortSet.delete(t), r.status = Fn, Ni(e, t.blockedBoundary, r);
        } catch (c) {
          if (lo(), typeof c == "object" && c !== null && typeof c.then == "function") {
            var l = t.ping;
            c.then(l, l);
          } else
            t.abortSet.delete(t), r.status = pa, $l(e, t.blockedBoundary, r, c);
        } finally {
          rr = o;
        }
      }
    }
    function li(e) {
      if (e.status !== Zr) {
        var t = xi(), r = ua.current;
        ua.current = Ai;
        var o;
        o = so.getCurrentStack, so.getCurrentStack = Ka;
        var l = Ja;
        Mi(e.responseState);
        try {
          var c = e.pingedTasks, d;
          for (d = 0; d < c.length; d++) {
            var m = c[d];
            Nl(e, m);
          }
          c.splice(0, d), e.destination !== null && ya(e, e.destination);
        } catch (S) {
          co(e, S), kt(e, S);
        } finally {
          Mi(l), ua.current = r, so.getCurrentStack = o, r === Ai && to(t);
        }
      }
    }
    function Kr(e, t, r) {
      switch (r.parentFlushed = !0, r.status) {
        case ca: {
          var o = r.id = e.nextSegmentId++;
          return r.lastPushedText = !1, r.textEmbedded = !1, Ht(t, e.responseState, o);
        }
        case Fn: {
          r.status = fa;
          for (var l = !0, c = r.chunks, d = 0, m = r.children, S = 0; S < m.length; S++) {
            for (var R = m[S]; d < R.index; d++)
              k(t, c[d]);
            l = mo(e, t, R);
          }
          for (; d < c.length - 1; d++)
            k(t, c[d]);
          return d < c.length && (l = E(t, c[d])), l;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function mo(e, t, r) {
      var o = r.boundary;
      if (o === null)
        return Kr(e, t, r);
      if (o.parentFlushed = !0, o.forceClientRender)
        return al(t, e.responseState, o.errorDigest, o.errorMessage, o.errorComponentStack), Kr(e, t, r), ll(t, e.responseState);
      if (o.pendingTasks > 0) {
        o.rootSegmentID = e.nextSegmentId++, o.completedSegments.length > 0 && e.partialBoundaries.push(o);
        var l = o.id = St(e.responseState);
        return zr(t, e.responseState, l), Kr(e, t, r), Sr(t, e.responseState);
      } else {
        if (o.byteSize > e.progressiveChunkSize)
          return o.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(o), zr(t, e.responseState, o.id), Kr(e, t, r), Sr(t, e.responseState);
        ol(t, e.responseState);
        var c = o.completedSegments;
        if (c.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var d = c[0];
        return mo(e, t, d), il(t, e.responseState);
      }
    }
    function Vl(e, t, r) {
      return el(t, e.responseState, r.id, r.errorDigest, r.errorMessage, r.errorComponentStack);
    }
    function si(e, t, r) {
      return Vn(t, e.responseState, r.formatContext, r.id), mo(e, t, r), _o(t, r.formatContext);
    }
    function yo(e, t, r) {
      for (var o = r.completedSegments, l = 0; l < o.length; l++) {
        var c = o[l];
        Vi(e, t, r, c);
      }
      return o.length = 0, He(t, e.responseState, r.id, r.rootSegmentID);
    }
    function ma(e, t, r) {
      for (var o = r.completedSegments, l = 0; l < o.length; l++) {
        var c = o[l];
        if (!Vi(e, t, r, c))
          return l++, o.splice(0, l), !1;
      }
      return o.splice(0, l), !0;
    }
    function Vi(e, t, r, o) {
      if (o.status === fa)
        return !0;
      var l = o.id;
      if (l === -1) {
        var c = o.id = r.rootSegmentID;
        if (c === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return si(e, t, o);
      } else
        return si(e, t, o), D(t, e.responseState, l);
    }
    function ya(e, t) {
      try {
        var r = e.completedRootSegment;
        r !== null && e.pendingRootTasks === 0 && (mo(e, t, r), e.completedRootSegment = null, qt(t, e.responseState));
        var o = e.clientRenderedBoundaries, l;
        for (l = 0; l < o.length; l++) {
          var c = o[l];
          if (!Vl(e, t, c)) {
            e.destination = null, l++, o.splice(0, l);
            return;
          }
        }
        o.splice(0, l);
        var d = e.completedBoundaries;
        for (l = 0; l < d.length; l++) {
          var m = d[l];
          if (!yo(e, t, m)) {
            e.destination = null, l++, d.splice(0, l);
            return;
          }
        }
        d.splice(0, l);
        var S = e.partialBoundaries;
        for (l = 0; l < S.length; l++) {
          var R = S[l];
          if (!ma(e, t, R)) {
            e.destination = null, l++, S.splice(0, l);
            return;
          }
        }
        S.splice(0, l);
        var I = e.completedBoundaries;
        for (l = 0; l < I.length; l++) {
          var _ = I[l];
          if (!yo(e, t, _)) {
            e.destination = null, l++, I.splice(0, l);
            return;
          }
        }
        I.splice(0, l);
      } finally {
        e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && (e.abortableTasks.size !== 0 && h("There was still abortable task at the root when we closed. This is a bug in React."), M(t));
      }
    }
    function Yi(e) {
      vt(function() {
        return li(e);
      });
    }
    function Yl(e, t) {
      if (e.status === Qa) {
        e.status = Zr, ce(t, e.fatalError);
        return;
      }
      if (e.status !== Zr && e.destination === null) {
        e.destination = t;
        try {
          ya(e, t);
        } catch (r) {
          co(e, r), kt(e, r);
        }
      }
    }
    function Gi(e, t) {
      try {
        var r = e.abortableTasks;
        r.forEach(function(o) {
          return $i(o, e, t);
        }), r.clear(), e.destination !== null && ya(e, e.destination);
      } catch (o) {
        co(e, o), kt(e, o);
      }
    }
    function ui() {
    }
    function Xi(e, t, r, o) {
      var l = !1, c = null, d = "", m = {
        push: function(_) {
          return _ !== null && (d += _), !0;
        },
        destroy: function(_) {
          l = !0, c = _;
        }
      }, S = !1;
      function R() {
        S = !0;
      }
      var I = Mn(e, rl(r, t ? t.identifierPrefix : void 0), nl(), 1 / 0, ui, void 0, R);
      if (Yi(I), Gi(I, o), Yl(I, m), l)
        throw c;
      if (!S)
        throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return d;
    }
    function Gl(e, t) {
      return Xi(e, t, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function Zi(e, t) {
      return Xi(e, t, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function Xl() {
      throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function n() {
      throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    bo.renderToNodeStream = Xl, bo.renderToStaticMarkup = Zi, bo.renderToStaticNodeStream = n, bo.renderToString = Gl, bo.version = A;
  }()), bo;
}
var Ki = {};
/**
 * @license React
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ql;
function cs() {
  return ql || (ql = 1, process.env.NODE_ENV !== "production" && function() {
    var ue = qi(), A = "18.3.1", $ = ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ve(n) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
          t[r - 1] = arguments[r];
        N("warn", n, t);
      }
    }
    function h(n) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
          t[r - 1] = arguments[r];
        N("error", n, t);
      }
    }
    function N(n, e, t) {
      {
        var r = $.ReactDebugCurrentFrame, o = r.getStackAddendum();
        o !== "" && (e += "%s", t = t.concat([o]));
        var l = t.map(function(c) {
          return String(c);
        });
        l.unshift("Warning: " + e), Function.prototype.apply.call(console[n], console, l);
      }
    }
    function vt(n) {
      n();
    }
    var ne = 512, k = null, E = 0;
    function Ct(n) {
      k = new Uint8Array(ne), E = 0;
    }
    function M(n, e) {
      if (e.length !== 0) {
        if (e.length > ne) {
          E > 0 && (n.enqueue(new Uint8Array(k.buffer, 0, E)), k = new Uint8Array(ne), E = 0), n.enqueue(e);
          return;
        }
        var t = e, r = k.length - E;
        r < t.length && (r === 0 ? n.enqueue(k) : (k.set(t.subarray(0, r), E), n.enqueue(k), t = t.subarray(r)), k = new Uint8Array(ne), E = 0), k.set(t, E), E += t.length;
      }
    }
    function J(n, e) {
      return M(n, e), !0;
    }
    function tn(n) {
      k && E > 0 && (n.enqueue(new Uint8Array(k.buffer, 0, E)), k = null, E = 0);
    }
    function ce(n) {
      n.close();
    }
    var $t = new TextEncoder();
    function O(n) {
      return $t.encode(n);
    }
    function P(n) {
      return $t.encode(n);
    }
    function me(n, e) {
      typeof n.error == "function" ? n.error(e) : n.close();
    }
    function Tt(n) {
      {
        var e = typeof Symbol == "function" && Symbol.toStringTag, t = e && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return t;
      }
    }
    function Ae(n) {
      try {
        return te(n), !1;
      } catch {
        return !0;
      }
    }
    function te(n) {
      return "" + n;
    }
    function le(n, e) {
      if (Ae(n))
        return h("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", e, Tt(n)), te(n);
    }
    function X(n, e) {
      if (Ae(n))
        return h("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", e, Tt(n)), te(n);
    }
    function tt(n) {
      if (Ae(n))
        return h("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Tt(n)), te(n);
    }
    var K = Object.prototype.hasOwnProperty, gt = 0, $e = 1, xe = 2, Et = 3, rt = 4, Er = 5, Rr = 6, Ir = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", nt = Ir + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Me = new RegExp("^[" + Ir + "][" + nt + "]*$"), ir = {}, oe = {};
    function ae(n) {
      return K.call(oe, n) ? !0 : K.call(ir, n) ? !1 : Me.test(n) ? (oe[n] = !0, !0) : (ir[n] = !0, h("Invalid attribute name: `%s`", n), !1);
    }
    function lr(n, e, t, r) {
      if (t !== null && t.type === gt)
        return !1;
      switch (typeof e) {
        case "function":
        // $FlowIssue symbol is perfectly valid here
        case "symbol":
          return !0;
        case "boolean": {
          if (t !== null)
            return !t.acceptsBooleans;
          var o = n.toLowerCase().slice(0, 5);
          return o !== "data-" && o !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Rt(n) {
      return se.hasOwnProperty(n) ? se[n] : null;
    }
    function fe(n, e, t, r, o, l, c) {
      this.acceptsBooleans = e === xe || e === Et || e === rt, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = t, this.propertyName = n, this.type = e, this.sanitizeURL = l, this.removeEmptyString = c;
    }
    var se = {}, Nt = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Nt.forEach(function(n) {
      se[n] = new fe(
        n,
        gt,
        !1,
        // mustUseProperty
        n,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
      var e = n[0], t = n[1];
      se[e] = new fe(
        e,
        $e,
        !1,
        // mustUseProperty
        t,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
      se[n] = new fe(
        n,
        xe,
        !1,
        // mustUseProperty
        n.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
      se[n] = new fe(
        n,
        xe,
        !1,
        // mustUseProperty
        n,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(n) {
      se[n] = new fe(
        n,
        Et,
        !1,
        // mustUseProperty
        n.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(n) {
      se[n] = new fe(
        n,
        Et,
        !0,
        // mustUseProperty
        n,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(n) {
      se[n] = new fe(
        n,
        rt,
        !1,
        // mustUseProperty
        n,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(n) {
      se[n] = new fe(
        n,
        Rr,
        !1,
        // mustUseProperty
        n,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(n) {
      se[n] = new fe(
        n,
        Er,
        !1,
        // mustUseProperty
        n.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Vt = /[\-\:]([a-z])/g, _e = function(n) {
      return n[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(n) {
      var e = n.replace(Vt, _e);
      se[e] = new fe(
        e,
        $e,
        !1,
        // mustUseProperty
        n,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(n) {
      var e = n.replace(Vt, _e);
      se[e] = new fe(
        e,
        $e,
        !1,
        // mustUseProperty
        n,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(n) {
      var e = n.replace(Vt, _e);
      se[e] = new fe(
        e,
        $e,
        !1,
        // mustUseProperty
        n,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(n) {
      se[n] = new fe(
        n,
        $e,
        !1,
        // mustUseProperty
        n.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var mt = "xlinkHref";
    se[mt] = new fe(
      "xlinkHref",
      $e,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(n) {
      se[n] = new fe(
        n,
        $e,
        !1,
        // mustUseProperty
        n.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var ke = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function sr(n, e) {
      return n + e.charAt(0).toUpperCase() + e.substring(1);
    }
    var ye = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ke).forEach(function(n) {
      ye.forEach(function(e) {
        ke[sr(e, n)] = ke[n];
      });
    });
    var Ce = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function ur(n, e) {
      Ce[e.type] || e.onChange || e.onInput || e.readOnly || e.disabled || e.value == null || h("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), e.onChange || e.readOnly || e.disabled || e.checked == null || h("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Yt(n, e) {
      if (n.indexOf("-") === -1)
        return typeof e.is == "string";
      switch (n) {
        // These are reserved SVG and MathML elements.
        // We don't mind this list too much because we expect it to never grow.
        // The alternative is to track the namespace in a few places which is convoluted.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var rn = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Ne = {}, Gt = new RegExp("^(aria)-[" + nt + "]*$"), Xt = new RegExp("^(aria)[A-Z][" + nt + "]*$");
    function nn(n, e) {
      {
        if (K.call(Ne, e) && Ne[e])
          return !0;
        if (Xt.test(e)) {
          var t = "aria-" + e.slice(4).toLowerCase(), r = rn.hasOwnProperty(t) ? t : null;
          if (r == null)
            return h("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", e), Ne[e] = !0, !0;
          if (e !== r)
            return h("Invalid ARIA attribute `%s`. Did you mean `%s`?", e, r), Ne[e] = !0, !0;
        }
        if (Gt.test(e)) {
          var o = e.toLowerCase(), l = rn.hasOwnProperty(o) ? o : null;
          if (l == null)
            return Ne[e] = !0, !1;
          if (e !== l)
            return h("Unknown ARIA attribute `%s`. Did you mean `%s`?", e, l), Ne[e] = !0, !0;
        }
      }
      return !0;
    }
    function Ve(n, e) {
      {
        var t = [];
        for (var r in e) {
          var o = nn(n, r);
          o || t.push(r);
        }
        var l = t.map(function(c) {
          return "`" + c + "`";
        }).join(", ");
        t.length === 1 ? h("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", l, n) : t.length > 1 && h("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", l, n);
      }
    }
    function we(n, e) {
      Yt(n, e) || Ve(n, e);
    }
    var ge = !1;
    function Pr(n, e) {
      {
        if (n !== "input" && n !== "textarea" && n !== "select")
          return;
        e != null && e.value === null && !ge && (ge = !0, n === "select" && e.multiple ? h("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", n) : h("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", n));
      }
    }
    var Fr = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Dr = function() {
    };
    {
      var de = {}, Ar = /^on./, on = /^on[^A-Z]/, an = new RegExp("^(aria)-[" + nt + "]*$"), Mr = new RegExp("^(aria)[A-Z][" + nt + "]*$");
      Dr = function(n, e, t, r) {
        if (K.call(de, e) && de[e])
          return !0;
        var o = e.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return h("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), de[e] = !0, !0;
        if (r != null) {
          var l = r.registrationNameDependencies, c = r.possibleRegistrationNames;
          if (l.hasOwnProperty(e))
            return !0;
          var d = c.hasOwnProperty(o) ? c[o] : null;
          if (d != null)
            return h("Invalid event handler property `%s`. Did you mean `%s`?", e, d), de[e] = !0, !0;
          if (Ar.test(e))
            return h("Unknown event handler property `%s`. It will be ignored.", e), de[e] = !0, !0;
        } else if (Ar.test(e))
          return on.test(e) && h("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", e), de[e] = !0, !0;
        if (an.test(e) || Mr.test(e))
          return !0;
        if (o === "innerhtml")
          return h("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), de[e] = !0, !0;
        if (o === "aria")
          return h("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), de[e] = !0, !0;
        if (o === "is" && t !== null && t !== void 0 && typeof t != "string")
          return h("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof t), de[e] = !0, !0;
        if (typeof t == "number" && isNaN(t))
          return h("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", e), de[e] = !0, !0;
        var m = Rt(e), S = m !== null && m.type === gt;
        if (Fr.hasOwnProperty(o)) {
          var R = Fr[o];
          if (R !== e)
            return h("Invalid DOM property `%s`. Did you mean `%s`?", e, R), de[e] = !0, !0;
        } else if (!S && e !== o)
          return h("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", e, o), de[e] = !0, !0;
        return typeof t == "boolean" && lr(e, t, m) ? (t ? h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', t, e, e, t, e) : h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', t, e, e, t, e, e, e), de[e] = !0, !0) : S ? !0 : lr(e, t, m) ? (de[e] = !0, !1) : ((t === "false" || t === "true") && m !== null && m.type === Et && (h("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", t, e, t === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', e, t), de[e] = !0), !0);
      };
    }
    var cr = function(n, e, t) {
      {
        var r = [];
        for (var o in e) {
          var l = Dr(n, o, e[o], t);
          l || r.push(o);
        }
        var c = r.map(function(d) {
          return "`" + d + "`";
        }).join(", ");
        r.length === 1 ? h("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, n) : r.length > 1 && h("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, n);
      }
    };
    function Bn(n, e, t) {
      Yt(n, e) || cr(n, e, t);
    }
    var _r = function() {
    };
    {
      var It = /^(?:webkit|moz|o)[A-Z]/, Or = /^-ms-/, ln = /-(.)/g, Ee = /;\s*$/, ot = {}, Pt = {}, Z = !1, Ft = !1, fr = function(n) {
        return n.replace(ln, function(e, t) {
          return t.toUpperCase();
        });
      }, Zt = function(n) {
        ot.hasOwnProperty(n) && ot[n] || (ot[n] = !0, h(
          "Unsupported style property %s. Did you mean %s?",
          n,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          fr(n.replace(Or, "ms-"))
        ));
      }, at = function(n) {
        ot.hasOwnProperty(n) && ot[n] || (ot[n] = !0, h("Unsupported vendor-prefixed style property %s. Did you mean %s?", n, n.charAt(0).toUpperCase() + n.slice(1)));
      }, dr = function(n, e) {
        Pt.hasOwnProperty(e) && Pt[e] || (Pt[e] = !0, h(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, n, e.replace(Ee, "")));
      }, yt = function(n, e) {
        Z || (Z = !0, h("`NaN` is an invalid value for the `%s` css style property.", n));
      }, Se = function(n, e) {
        Ft || (Ft = !0, h("`Infinity` is an invalid value for the `%s` css style property.", n));
      };
      _r = function(n, e) {
        n.indexOf("-") > -1 ? Zt(n) : It.test(n) ? at(n) : Ee.test(e) && dr(n, e), typeof e == "number" && (isNaN(e) ? yt(n, e) : isFinite(e) || Se(n, e));
      };
    }
    var Lr = _r, Br = /["'&<>]/;
    function sn(n) {
      tt(n);
      var e = "" + n, t = Br.exec(e);
      if (!t)
        return e;
      var r, o = "", l, c = 0;
      for (l = t.index; l < e.length; l++) {
        switch (e.charCodeAt(l)) {
          case 34:
            r = "&quot;";
            break;
          case 38:
            r = "&amp;";
            break;
          case 39:
            r = "&#x27;";
            break;
          case 60:
            r = "&lt;";
            break;
          case 62:
            r = "&gt;";
            break;
          default:
            continue;
        }
        c !== l && (o += e.substring(c, l)), c = l + 1, o += r;
      }
      return c !== l ? o + e.substring(c, l) : o;
    }
    function pe(n) {
      return typeof n == "boolean" || typeof n == "number" ? "" + n : sn(n);
    }
    var Ur = /([A-Z])/g, Un = /^ms-/;
    function Hn(n) {
      return n.replace(Ur, "-$1").toLowerCase().replace(Un, "-ms-");
    }
    var it = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Hr = !1;
    function pr(n) {
      !Hr && it.test(n) && (Hr = !0, h("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(n)));
    }
    var Dt = Array.isArray;
    function Oe(n) {
      return Dt(n);
    }
    var lt = P("<script>"), hr = P("<\/script>"), At = P('<script src="'), Mt = P('<script type="module" src="'), st = P('" async=""><\/script>');
    function _t(n) {
      return tt(n), ("" + n).replace(Le, un);
    }
    var Le = /(<\/|<)(s)(cript)/gi, un = function(n, e, t, r) {
      return "" + e + (t === "s" ? "\\u0073" : "\\u0053") + r;
    };
    function cn(n, e, t, r, o) {
      var l = n === void 0 ? "" : n, c = e === void 0 ? lt : P('<script nonce="' + pe(e) + '">'), d = [];
      if (t !== void 0 && d.push(c, O(_t(t)), hr), r !== void 0)
        for (var m = 0; m < r.length; m++)
          d.push(At, O(pe(r[m])), st);
      if (o !== void 0)
        for (var S = 0; S < o.length; S++)
          d.push(Mt, O(pe(o[S])), st);
      return {
        bootstrapChunks: d,
        startInlineScript: c,
        placeholderPrefix: P(l + "P:"),
        segmentPrefix: P(l + "S:"),
        boundaryPrefix: l + "B:",
        idPrefix: l,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var St = 0, he = 1, ut = 2, ct = 3, Ot = 4, vr = 5, Ye = 6, ft = 7;
    function Re(n, e) {
      return {
        insertionMode: n,
        selectedValue: e
      };
    }
    function Lt(n) {
      var e = n === "http://www.w3.org/2000/svg" ? ut : n === "http://www.w3.org/1998/Math/MathML" ? ct : St;
      return Re(e, null);
    }
    function Jt(n, e, t) {
      switch (e) {
        case "select":
          return Re(he, t.value != null ? t.value : t.defaultValue);
        case "svg":
          return Re(ut, null);
        case "math":
          return Re(ct, null);
        case "foreignObject":
          return Re(he, null);
        // Table parents are special in that their children can only be created at all if they're
        // wrapped in a table parent. So we need to encode that we're entering this mode.
        case "table":
          return Re(Ot, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return Re(vr, null);
        case "colgroup":
          return Re(ft, null);
        case "tr":
          return Re(Ye, null);
      }
      return n.insertionMode >= Ot || n.insertionMode === St ? Re(he, null) : n;
    }
    var gr = null;
    function ze(n) {
      var e = n.nextSuspenseID++;
      return P(n.boundaryPrefix + e.toString(16));
    }
    function dt(n, e, t) {
      var r = n.idPrefix, o = ":" + r + "R" + e;
      return t > 0 && (o += "H" + t.toString(32)), o + ":";
    }
    function Ie(n) {
      return pe(n);
    }
    var mr = P("<!-- -->");
    function be(n, e, t, r) {
      return e === "" ? r : (r && n.push(mr), n.push(O(Ie(e))), !0);
    }
    function Be(n, e, t, r) {
      t && r && n.push(mr);
    }
    var a = /* @__PURE__ */ new Map();
    function u(n) {
      var e = a.get(n);
      if (e !== void 0)
        return e;
      var t = P(pe(Hn(n)));
      return a.set(n, t), t;
    }
    var p = P(' style="'), g = P(":"), w = P(";");
    function y(n, e, t) {
      if (typeof t != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var r = !0;
      for (var o in t)
        if (K.call(t, o)) {
          var l = t[o];
          if (!(l == null || typeof l == "boolean" || l === "")) {
            var c = void 0, d = void 0, m = o.indexOf("--") === 0;
            m ? (c = O(pe(o)), X(l, o), d = O(pe(("" + l).trim()))) : (Lr(o, l), c = u(o), typeof l == "number" ? l !== 0 && !K.call(ke, o) ? d = O(l + "px") : d = O("" + l) : (X(l, o), d = O(pe(("" + l).trim())))), r ? (r = !1, n.push(p, c, g, d)) : n.push(w, c, g, d);
          }
        }
      r || n.push(L);
    }
    var C = P(" "), F = P('="'), L = P('"'), U = P('=""');
    function B(n, e, t, r) {
      switch (t) {
        case "style": {
          y(n, e, r);
          return;
        }
        case "defaultValue":
        case "defaultChecked":
        // These shouldn't be set as attributes on generic HTML elements.
        case "innerHTML":
        // Must use dangerouslySetInnerHTML instead.
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (
        // shouldIgnoreAttribute
        // We have already filtered out null/undefined and reserved words.
        !(t.length > 2 && (t[0] === "o" || t[0] === "O") && (t[1] === "n" || t[1] === "N"))
      ) {
        var o = Rt(t);
        if (o !== null) {
          switch (typeof r) {
            case "function":
            // $FlowIssue symbol is perfectly valid here
            case "symbol":
              return;
            case "boolean":
              if (!o.acceptsBooleans)
                return;
          }
          var l = o.attributeName, c = O(l);
          switch (o.type) {
            case Et:
              r && n.push(C, c, U);
              return;
            case rt:
              r === !0 ? n.push(C, c, U) : r === !1 || n.push(C, c, F, O(pe(r)), L);
              return;
            case Er:
              isNaN(r) || n.push(C, c, F, O(pe(r)), L);
              break;
            case Rr:
              !isNaN(r) && r >= 1 && n.push(C, c, F, O(pe(r)), L);
              break;
            default:
              o.sanitizeURL && (le(r, l), r = "" + r, pr(r)), n.push(C, c, F, O(pe(r)), L);
          }
        } else if (ae(t)) {
          switch (typeof r) {
            case "function":
            // $FlowIssue symbol is perfectly valid here
            case "symbol":
              return;
            case "boolean": {
              var d = t.toLowerCase().slice(0, 5);
              if (d !== "data-" && d !== "aria-")
                return;
            }
          }
          n.push(C, O(t), F, O(pe(r)), L);
        }
      }
    }
    var V = P(">"), Pe = P("/>");
    function Fe(n, e, t) {
      if (e != null) {
        if (t != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof e != "object" || !("__html" in e))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var r = e.__html;
        r != null && (tt(r), n.push(O("" + r)));
      }
    }
    var De = !1, Bt = !1, pt = !1, yr = !1, Ut = !1, Qt = !1, bt = !1;
    function Kt(n, e) {
      {
        var t = n[e];
        if (t != null) {
          var r = Oe(t);
          n.multiple && !r ? h("The `%s` prop supplied to <select> must be an array if `multiple` is true.", e) : !n.multiple && r && h("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", e);
        }
      }
    }
    function Sa(n, e, t) {
      ur("select", e), Kt(e, "value"), Kt(e, "defaultValue"), e.value !== void 0 && e.defaultValue !== void 0 && !pt && (h("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), pt = !0), n.push(Ge("select"));
      var r = null, o = null;
      for (var l in e)
        if (K.call(e, l)) {
          var c = e[l];
          if (c == null)
            continue;
          switch (l) {
            case "children":
              r = c;
              break;
            case "dangerouslySetInnerHTML":
              o = c;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              B(n, t, l, c);
              break;
          }
        }
      return n.push(V), Fe(n, o, r), r;
    }
    function ba(n) {
      var e = "";
      return ue.Children.forEach(n, function(t) {
        t != null && (e += t, !Ut && typeof t != "string" && typeof t != "number" && (Ut = !0, h("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), e;
    }
    var fn = P(' selected=""');
    function ht(n, e, t, r) {
      var o = r.selectedValue;
      n.push(Ge("option"));
      var l = null, c = null, d = null, m = null;
      for (var S in e)
        if (K.call(e, S)) {
          var R = e[S];
          if (R == null)
            continue;
          switch (S) {
            case "children":
              l = R;
              break;
            case "selected":
              d = R, bt || (h("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), bt = !0);
              break;
            case "dangerouslySetInnerHTML":
              m = R;
              break;
            // eslint-disable-next-line-no-fallthrough
            case "value":
              c = R;
            // We intentionally fallthrough to also set the attribute on the node.
            // eslint-disable-next-line-no-fallthrough
            default:
              B(n, t, S, R);
              break;
          }
        }
      if (o != null) {
        var I;
        if (c !== null ? (le(c, "value"), I = "" + c) : (m !== null && (Qt || (Qt = !0, h("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), I = ba(l)), Oe(o))
          for (var _ = 0; _ < o.length; _++) {
            le(o[_], "value");
            var j = "" + o[_];
            if (j === I) {
              n.push(fn);
              break;
            }
          }
        else
          le(o, "select.value"), "" + o === I && n.push(fn);
      } else d && n.push(fn);
      return n.push(V), Fe(n, m, l), l;
    }
    function wa(n, e, t) {
      ur("input", e), e.checked !== void 0 && e.defaultChecked !== void 0 && !Bt && (h("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", e.type), Bt = !0), e.value !== void 0 && e.defaultValue !== void 0 && !De && (h("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", e.type), De = !0), n.push(Ge("input"));
      var r = null, o = null, l = null, c = null;
      for (var d in e)
        if (K.call(e, d)) {
          var m = e[d];
          if (m == null)
            continue;
          switch (d) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            // eslint-disable-next-line-no-fallthrough
            case "defaultChecked":
              c = m;
              break;
            case "defaultValue":
              o = m;
              break;
            case "checked":
              l = m;
              break;
            case "value":
              r = m;
              break;
            default:
              B(n, t, d, m);
              break;
          }
        }
      return l !== null ? B(n, t, "checked", l) : c !== null && B(n, t, "checked", c), r !== null ? B(n, t, "value", r) : o !== null && B(n, t, "value", o), n.push(Pe), null;
    }
    function wt(n, e, t) {
      ur("textarea", e), e.value !== void 0 && e.defaultValue !== void 0 && !yr && (h("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), yr = !0), n.push(Ge("textarea"));
      var r = null, o = null, l = null;
      for (var c in e)
        if (K.call(e, c)) {
          var d = e[c];
          if (d == null)
            continue;
          switch (c) {
            case "children":
              l = d;
              break;
            case "value":
              r = d;
              break;
            case "defaultValue":
              o = d;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            // eslint-disable-next-line-no-fallthrough
            default:
              B(n, t, c, d);
              break;
          }
        }
      if (r === null && o !== null && (r = o), n.push(V), l != null) {
        if (h("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), r != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (Oe(l)) {
          if (l.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          tt(l[0]), r = "" + l[0];
        }
        tt(l), r = "" + l;
      }
      return typeof r == "string" && r[0] === `
` && n.push(er), r !== null && (le(r, "value"), n.push(O(Ie("" + r)))), null;
    }
    function jn(n, e, t, r) {
      n.push(Ge(t));
      for (var o in e)
        if (K.call(e, o)) {
          var l = e[o];
          if (l == null)
            continue;
          switch (o) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(t + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            // eslint-disable-next-line-no-fallthrough
            default:
              B(n, r, o, l);
              break;
          }
        }
      return n.push(Pe), null;
    }
    function dn(n, e, t) {
      n.push(Ge("menuitem"));
      for (var r in e)
        if (K.call(e, r)) {
          var o = e[r];
          if (o == null)
            continue;
          switch (r) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            // eslint-disable-next-line-no-fallthrough
            default:
              B(n, t, r, o);
              break;
          }
        }
      return n.push(V), null;
    }
    function Q(n, e, t) {
      n.push(Ge("title"));
      var r = null;
      for (var o in e)
        if (K.call(e, o)) {
          var l = e[o];
          if (l == null)
            continue;
          switch (o) {
            case "children":
              r = l;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            // eslint-disable-next-line-no-fallthrough
            default:
              B(n, t, o, l);
              break;
          }
        }
      n.push(V);
      {
        var c = Array.isArray(r) && r.length < 2 ? r[0] || null : r;
        Array.isArray(r) && r.length > 1 ? h("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : c != null && c.$$typeof != null ? h("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : c != null && typeof c != "string" && typeof c != "number" && h("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return r;
    }
    function qt(n, e, t, r) {
      n.push(Ge(t));
      var o = null, l = null;
      for (var c in e)
        if (K.call(e, c)) {
          var d = e[c];
          if (d == null)
            continue;
          switch (c) {
            case "children":
              o = d;
              break;
            case "dangerouslySetInnerHTML":
              l = d;
              break;
            default:
              B(n, r, c, d);
              break;
          }
        }
      return n.push(V), Fe(n, l, o), typeof o == "string" ? (n.push(O(Ie(o))), null) : o;
    }
    function pn(n, e, t, r) {
      n.push(Ge(t));
      var o = null, l = null;
      for (var c in e)
        if (K.call(e, c)) {
          var d = e[c];
          if (d == null)
            continue;
          switch (c) {
            case "children":
              o = d;
              break;
            case "dangerouslySetInnerHTML":
              l = d;
              break;
            case "style":
              y(n, r, d);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              ae(c) && typeof d != "function" && typeof d != "symbol" && n.push(C, O(c), F, O(pe(d)), L);
              break;
          }
        }
      return n.push(V), Fe(n, l, o), o;
    }
    var er = P(`
`);
    function Ht(n, e, t, r) {
      n.push(Ge(t));
      var o = null, l = null;
      for (var c in e)
        if (K.call(e, c)) {
          var d = e[c];
          if (d == null)
            continue;
          switch (c) {
            case "children":
              o = d;
              break;
            case "dangerouslySetInnerHTML":
              l = d;
              break;
            default:
              B(n, r, c, d);
              break;
          }
        }
      if (n.push(V), l != null) {
        if (o != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof l != "object" || !("__html" in l))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var m = l.__html;
        m != null && (typeof m == "string" && m.length > 0 && m[0] === `
` ? n.push(er, O(m)) : (tt(m), n.push(O("" + m))));
      }
      return typeof o == "string" && o[0] === `
` && n.push(er), o;
    }
    var hn = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, jt = /* @__PURE__ */ new Map();
    function Ge(n) {
      var e = jt.get(n);
      if (e === void 0) {
        if (!hn.test(n))
          throw new Error("Invalid tag: " + n);
        e = P("<" + n), jt.set(n, e);
      }
      return e;
    }
    var zn = P("<!DOCTYPE html>");
    function jr(n, e, t, r, o) {
      switch (we(e, t), Pr(e, t), Bn(e, t, null), !t.suppressContentEditableWarning && t.contentEditable && t.children != null && h("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), o.insertionMode !== ut && o.insertionMode !== ct && e.indexOf("-") === -1 && typeof t.is != "string" && e.toLowerCase() !== e && h("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e) {
        // Special tags
        case "select":
          return Sa(n, t, r);
        case "option":
          return ht(n, t, r, o);
        case "textarea":
          return wt(n, t, r);
        case "input":
          return wa(n, t, r);
        case "menuitem":
          return dn(n, t, r);
        case "title":
          return Q(n, t, r);
        // Newline eating tags
        case "listing":
        case "pre":
          return Ht(n, t, e, r);
        // Omitted close tags
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return jn(n, t, e, r);
        // These are reserved SVG and MathML elements, that are never custom elements.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return qt(n, t, e, r);
        case "html":
          return o.insertionMode === St && n.push(zn), qt(n, t, e, r);
        default:
          return e.indexOf("-") === -1 && typeof t.is != "string" ? qt(n, t, e, r) : pn(n, t, e, r);
      }
    }
    var wo = P("</"), vn = P(">");
    function xo(n, e, t) {
      switch (e) {
        // Omitted close tags
        // TODO: Instead of repeating this switch we could try to pass a flag from above.
        // That would require returning a tuple. Which might be ok if it gets inlined.
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          n.push(wo, O(e), vn);
      }
    }
    function xa(n, e) {
      for (var t = e.bootstrapChunks, r = 0; r < t.length - 1; r++)
        M(n, t[r]);
      return r < t.length ? J(n, t[r]) : !0;
    }
    var ka = P('<template id="'), gn = P('"></template>');
    function ko(n, e, t) {
      M(n, ka), M(n, e.placeholderPrefix);
      var r = O(t.toString(16));
      return M(n, r), J(n, gn);
    }
    var zr = P("<!--$-->"), Wn = P('<!--$?--><template id="'), Ca = P('"></template>'), Sr = P("<!--$!-->"), $n = P("<!--/$-->"), Nn = P("<template"), br = P('"'), Wr = P(' data-dgst="'), mn = P(' data-msg="'), Co = P(' data-stck="'), To = P("></template>");
    function Eo(n, e) {
      return J(n, zr);
    }
    function yn(n, e, t) {
      if (M(n, Wn), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return M(n, t), J(n, Ca);
    }
    function Ue(n, e, t, r, o) {
      var l;
      return l = J(n, Sr), M(n, Nn), t && (M(n, Wr), M(n, O(pe(t))), M(n, br)), r && (M(n, mn), M(n, O(pe(r))), M(n, br)), o && (M(n, Co), M(n, O(pe(o))), M(n, br)), l = J(n, To), l;
    }
    function Ro(n, e) {
      return J(n, $n);
    }
    function Sn(n, e) {
      return J(n, $n);
    }
    function Ta(n, e) {
      return J(n, $n);
    }
    var Io = P('<div hidden id="'), bn = P('">'), Po = P("</div>"), Fo = P('<svg aria-hidden="true" style="display:none" id="'), wn = P('">'), xn = P("</svg>"), Do = P('<math aria-hidden="true" style="display:none" id="'), Ao = P('">'), Mo = P("</math>"), Vn = P('<table hidden id="'), _o = P('">'), i = P("</table>"), s = P('<table hidden><tbody id="'), f = P('">'), v = P("</tbody></table>"), x = P('<table hidden><tr id="'), b = P('">'), T = P("</tr></table>"), D = P('<table hidden><colgroup id="'), H = P('">'), W = P("</colgroup></table>");
    function z(n, e, t, r) {
      switch (t.insertionMode) {
        case St:
        case he:
          return M(n, Io), M(n, e.segmentPrefix), M(n, O(r.toString(16))), J(n, bn);
        case ut:
          return M(n, Fo), M(n, e.segmentPrefix), M(n, O(r.toString(16))), J(n, wn);
        case ct:
          return M(n, Do), M(n, e.segmentPrefix), M(n, O(r.toString(16))), J(n, Ao);
        case Ot:
          return M(n, Vn), M(n, e.segmentPrefix), M(n, O(r.toString(16))), J(n, _o);
        // TODO: For the rest of these, there will be extra wrapper nodes that never
        // get deleted from the document. We need to delete the table too as part
        // of the injected scripts. They are invisible though so it's not too terrible
        // and it's kind of an edge case to suspend in a table. Totally supported though.
        case vr:
          return M(n, s), M(n, e.segmentPrefix), M(n, O(r.toString(16))), J(n, f);
        case Ye:
          return M(n, x), M(n, e.segmentPrefix), M(n, O(r.toString(16))), J(n, b);
        case ft:
          return M(n, D), M(n, e.segmentPrefix), M(n, O(r.toString(16))), J(n, H);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function q(n, e) {
      switch (e.insertionMode) {
        case St:
        case he:
          return J(n, Po);
        case ut:
          return J(n, xn);
        case ct:
          return J(n, Mo);
        case Ot:
          return J(n, i);
        case vr:
          return J(n, v);
        case Ye:
          return J(n, T);
        case ft:
          return J(n, W);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var He = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", Xe = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', Ze = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', kn = P(He + ';$RS("'), Oo = P('$RS("'), $r = P('","'), el = P('")<\/script>');
    function tl(n, e, t) {
      M(n, e.startInlineScript), e.sentCompleteSegmentFunction ? M(n, Oo) : (e.sentCompleteSegmentFunction = !0, M(n, kn)), M(n, e.segmentPrefix);
      var r = O(t.toString(16));
      return M(n, r), M(n, $r), M(n, e.placeholderPrefix), M(n, r), J(n, el);
    }
    var Ea = P(Xe + ';$RC("'), rl = P('$RC("'), nl = P('","'), ci = P('")<\/script>');
    function fi(n, e, t, r) {
      if (M(n, e.startInlineScript), e.sentCompleteBoundaryFunction ? M(n, rl) : (e.sentCompleteBoundaryFunction = !0, M(n, Ea)), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var o = O(r.toString(16));
      return M(n, t), M(n, nl), M(n, e.segmentPrefix), M(n, o), J(n, ci);
    }
    var ol = P(Ze + ';$RX("'), al = P('$RX("'), il = P('"'), ll = P(")<\/script>"), We = P(",");
    function sl(n, e, t, r, o, l) {
      if (M(n, e.startInlineScript), e.sentClientRenderFunction ? M(n, al) : (e.sentClientRenderFunction = !0, M(n, ol)), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return M(n, t), M(n, il), (r || o || l) && (M(n, We), M(n, O(Lo(r || "")))), (o || l) && (M(n, We), M(n, O(Lo(o || "")))), l && (M(n, We), M(n, O(Lo(l)))), J(n, ll);
    }
    var di = /[<\u2028\u2029]/g;
    function Lo(n) {
      var e = JSON.stringify(n);
      return e.replace(di, function(t) {
        switch (t) {
          // santizing breaking out of strings and script tags
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    var Je = Object.assign, pi = Symbol.for("react.element"), Bo = Symbol.for("react.portal"), Uo = Symbol.for("react.fragment"), Ho = Symbol.for("react.strict_mode"), jo = Symbol.for("react.profiler"), Yn = Symbol.for("react.provider"), Gn = Symbol.for("react.context"), Cn = Symbol.for("react.forward_ref"), Ra = Symbol.for("react.suspense"), Ia = Symbol.for("react.suspense_list"), Pa = Symbol.for("react.memo"), zo = Symbol.for("react.lazy"), hi = Symbol.for("react.scope"), ul = Symbol.for("react.debug_trace_mode"), cl = Symbol.for("react.legacy_hidden"), fl = Symbol.for("react.default_value"), Fa = Symbol.iterator, ie = "@@iterator";
    function Xn(n) {
      if (n === null || typeof n != "object")
        return null;
      var e = Fa && n[Fa] || n[ie];
      return typeof e == "function" ? e : null;
    }
    function vi(n, e, t) {
      var r = n.displayName;
      if (r)
        return r;
      var o = e.displayName || e.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function Da(n) {
      return n.displayName || "Context";
    }
    function re(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case Uo:
          return "Fragment";
        case Bo:
          return "Portal";
        case jo:
          return "Profiler";
        case Ho:
          return "StrictMode";
        case Ra:
          return "Suspense";
        case Ia:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case Gn:
            var e = n;
            return Da(e) + ".Consumer";
          case Yn:
            var t = n;
            return Da(t._context) + ".Provider";
          case Cn:
            return vi(n, n.render, "ForwardRef");
          case Pa:
            var r = n.displayName || null;
            return r !== null ? r : re(n.type) || "Memo";
          case zo: {
            var o = n, l = o._payload, c = o._init;
            try {
              return re(c(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Tn = 0, Aa, Ma, _a, Oa, gi, mi, Wo;
    function $o() {
    }
    $o.__reactDisabledLog = !0;
    function Zn() {
      {
        if (Tn === 0) {
          Aa = console.log, Ma = console.info, _a = console.warn, Oa = console.error, gi = console.group, mi = console.groupCollapsed, Wo = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: $o,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        Tn++;
      }
    }
    function La() {
      {
        if (Tn--, Tn === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Je({}, n, {
              value: Aa
            }),
            info: Je({}, n, {
              value: Ma
            }),
            warn: Je({}, n, {
              value: _a
            }),
            error: Je({}, n, {
              value: Oa
            }),
            group: Je({}, n, {
              value: gi
            }),
            groupCollapsed: Je({}, n, {
              value: mi
            }),
            groupEnd: Je({}, n, {
              value: Wo
            })
          });
        }
        Tn < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var En = $.ReactCurrentDispatcher, Ba;
    function Nr(n, e, t) {
      {
        if (Ba === void 0)
          try {
            throw Error();
          } catch (o) {
            var r = o.stack.trim().match(/\n( *(at )?)/);
            Ba = r && r[1] || "";
          }
        return `
` + Ba + n;
      }
    }
    var Ua = !1, Jn;
    {
      var dl = typeof WeakMap == "function" ? WeakMap : Map;
      Jn = new dl();
    }
    function Qn(n, e) {
      if (!n || Ua)
        return "";
      {
        var t = Jn.get(n);
        if (t !== void 0)
          return t;
      }
      var r;
      Ua = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = En.current, En.current = null, Zn();
      try {
        if (e) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (G) {
              r = G;
            }
            Reflect.construct(n, [], c);
          } else {
            try {
              c.call();
            } catch (G) {
              r = G;
            }
            n.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (G) {
            r = G;
          }
          n();
        }
      } catch (G) {
        if (G && r && typeof G.stack == "string") {
          for (var d = G.stack.split(`
`), m = r.stack.split(`
`), S = d.length - 1, R = m.length - 1; S >= 1 && R >= 0 && d[S] !== m[R]; )
            R--;
          for (; S >= 1 && R >= 0; S--, R--)
            if (d[S] !== m[R]) {
              if (S !== 1 || R !== 1)
                do
                  if (S--, R--, R < 0 || d[S] !== m[R]) {
                    var I = `
` + d[S].replace(" at new ", " at ");
                    return n.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", n.displayName)), typeof n == "function" && Jn.set(n, I), I;
                  }
                while (S >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        Ua = !1, En.current = l, La(), Error.prepareStackTrace = o;
      }
      var _ = n ? n.displayName || n.name : "", j = _ ? Nr(_) : "";
      return typeof n == "function" && Jn.set(n, j), j;
    }
    function yi(n, e, t) {
      return Qn(n, !0);
    }
    function Ha(n, e, t) {
      return Qn(n, !1);
    }
    function No(n) {
      var e = n.prototype;
      return !!(e && e.isReactComponent);
    }
    function Vo(n, e, t) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return Qn(n, No(n));
      if (typeof n == "string")
        return Nr(n);
      switch (n) {
        case Ra:
          return Nr("Suspense");
        case Ia:
          return Nr("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case Cn:
            return Ha(n.render);
          case Pa:
            return Vo(n.type, e, t);
          case zo: {
            var r = n, o = r._payload, l = r._init;
            try {
              return Vo(l(o), e, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Yo = {}, Kn = $.ReactDebugCurrentFrame;
    function qn(n) {
      if (n) {
        var e = n._owner, t = Vo(n.type, n._source, e ? e.type : null);
        Kn.setExtraStackFrame(t);
      } else
        Kn.setExtraStackFrame(null);
    }
    function Si(n, e, t, r, o) {
      {
        var l = Function.call.bind(K);
        for (var c in n)
          if (l(n, c)) {
            var d = void 0;
            try {
              if (typeof n[c] != "function") {
                var m = Error((r || "React class") + ": " + t + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw m.name = "Invariant Violation", m;
              }
              d = n[c](e, c, r, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              d = S;
            }
            d && !(d instanceof Error) && (qn(o), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", r || "React class", t, c, typeof d), qn(null)), d instanceof Error && !(d.message in Yo) && (Yo[d.message] = !0, qn(o), h("Failed %s type: %s", t, d.message), qn(null));
          }
      }
    }
    var Vr;
    Vr = {};
    var Go = {};
    Object.freeze(Go);
    function wr(n, e) {
      {
        var t = n.contextTypes;
        if (!t)
          return Go;
        var r = {};
        for (var o in t)
          r[o] = e[o];
        {
          var l = re(n) || "Unknown";
          Si(t, r, "context", l);
        }
        return r;
      }
    }
    function ja(n, e, t, r) {
      {
        if (typeof n.getChildContext != "function") {
          {
            var o = re(e) || "Unknown";
            Vr[o] || (Vr[o] = !0, h("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", o, o));
          }
          return t;
        }
        var l = n.getChildContext();
        for (var c in l)
          if (!(c in r))
            throw new Error((re(e) || "Unknown") + '.getChildContext(): key "' + c + '" is not defined in childContextTypes.');
        {
          var d = re(e) || "Unknown";
          Si(r, l, "child context", d);
        }
        return Je({}, t, l);
      }
    }
    var Yr;
    Yr = {};
    var Xo = null, xr = null;
    function Zo(n) {
      n.context._currentValue = n.parentValue;
    }
    function Jo(n) {
      n.context._currentValue = n.value;
    }
    function eo(n, e) {
      if (n !== e) {
        Zo(n);
        var t = n.parent, r = e.parent;
        if (t === null) {
          if (r !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (r === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          eo(t, r);
        }
        Jo(e);
      }
    }
    function to(n) {
      Zo(n);
      var e = n.parent;
      e !== null && to(e);
    }
    function bi(n) {
      var e = n.parent;
      e !== null && bi(e), Jo(n);
    }
    function wi(n, e) {
      Zo(n);
      var t = n.parent;
      if (t === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      t.depth === e.depth ? eo(t, e) : wi(t, e);
    }
    function xi(n, e) {
      var t = e.parent;
      if (t === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      n.depth === t.depth ? eo(n, t) : xi(n, t), Jo(e);
    }
    function kr(n) {
      var e = xr, t = n;
      e !== t && (e === null ? bi(t) : t === null ? to(e) : e.depth === t.depth ? eo(e, t) : e.depth > t.depth ? wi(e, t) : xi(e, t), xr = t);
    }
    function za(n, e) {
      var t;
      t = n._currentValue, n._currentValue = e, n._currentRenderer !== void 0 && n._currentRenderer !== null && n._currentRenderer !== Yr && h("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), n._currentRenderer = Yr;
      var r = xr, o = {
        parent: r,
        depth: r === null ? 0 : r.depth + 1,
        context: n,
        parentValue: t,
        value: e
      };
      return xr = o, o;
    }
    function pl(n) {
      var e = xr;
      if (e === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      e.context !== n && h("The parent context is not the expected context. This is probably a bug in React.");
      {
        var t = e.parentValue;
        t === fl ? e.context._currentValue = e.context._defaultValue : e.context._currentValue = t, n._currentRenderer !== void 0 && n._currentRenderer !== null && n._currentRenderer !== Yr && h("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), n._currentRenderer = Yr;
      }
      return xr = e.parent;
    }
    function ki() {
      return xr;
    }
    function Rn(n) {
      var e = n._currentValue;
      return e;
    }
    function ro(n) {
      return n._reactInternals;
    }
    function Wa(n, e) {
      n._reactInternals = e;
    }
    var Qo = {}, Ko = {}, qo, In, no, oo, ea, ao, ta, ra, $a;
    {
      qo = /* @__PURE__ */ new Set(), In = /* @__PURE__ */ new Set(), no = /* @__PURE__ */ new Set(), ta = /* @__PURE__ */ new Set(), oo = /* @__PURE__ */ new Set(), ra = /* @__PURE__ */ new Set(), $a = /* @__PURE__ */ new Set();
      var Ci = /* @__PURE__ */ new Set();
      ao = function(n, e) {
        if (!(n === null || typeof n == "function")) {
          var t = e + "_" + n;
          Ci.has(t) || (Ci.add(t), h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", e, n));
        }
      }, ea = function(n, e) {
        if (e === void 0) {
          var t = re(n) || "Component";
          oo.has(t) || (oo.add(t), h("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", t));
        }
      };
    }
    function Ti(n, e) {
      {
        var t = n.constructor, r = t && re(t) || "ReactClass", o = r + "." + e;
        if (Qo[o])
          return;
        h(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, e, e, r), Qo[o] = !0;
      }
    }
    var Ei = {
      isMounted: function(n) {
        return !1;
      },
      enqueueSetState: function(n, e, t) {
        var r = ro(n);
        r.queue === null ? Ti(n, "setState") : (r.queue.push(e), t != null && ao(t, "setState"));
      },
      enqueueReplaceState: function(n, e, t) {
        var r = ro(n);
        r.replace = !0, r.queue = [e], t != null && ao(t, "setState");
      },
      enqueueForceUpdate: function(n, e) {
        var t = ro(n);
        t.queue === null ? Ti(n, "forceUpdate") : e != null && ao(e, "setState");
      }
    };
    function hl(n, e, t, r, o) {
      var l = t(o, r);
      ea(e, l);
      var c = l == null ? r : Je({}, r, l);
      return c;
    }
    function Ri(n, e, t) {
      var r = Go, o = n.contextType;
      if ("contextType" in n) {
        var l = (
          // Allow null for conditional declaration
          o === null || o !== void 0 && o.$$typeof === Gn && o._context === void 0
        );
        if (!l && !$a.has(n)) {
          $a.add(n);
          var c = "";
          o === void 0 ? c = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof o != "object" ? c = " However, it is set to a " + typeof o + "." : o.$$typeof === Yn ? c = " Did you accidentally pass the Context.Provider instead?" : o._context !== void 0 ? c = " Did you accidentally pass the Context.Consumer instead?" : c = " However, it is set to an object with keys {" + Object.keys(o).join(", ") + "}.", h("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", re(n) || "Component", c);
        }
      }
      typeof o == "object" && o !== null ? r = Rn(o) : r = t;
      var d = new n(e, r);
      {
        if (typeof n.getDerivedStateFromProps == "function" && (d.state === null || d.state === void 0)) {
          var m = re(n) || "Component";
          qo.has(m) || (qo.add(m), h("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", m, d.state === null ? "null" : "undefined", m));
        }
        if (typeof n.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function") {
          var S = null, R = null, I = null;
          if (typeof d.componentWillMount == "function" && d.componentWillMount.__suppressDeprecationWarning !== !0 ? S = "componentWillMount" : typeof d.UNSAFE_componentWillMount == "function" && (S = "UNSAFE_componentWillMount"), typeof d.componentWillReceiveProps == "function" && d.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? R = "componentWillReceiveProps" : typeof d.UNSAFE_componentWillReceiveProps == "function" && (R = "UNSAFE_componentWillReceiveProps"), typeof d.componentWillUpdate == "function" && d.componentWillUpdate.__suppressDeprecationWarning !== !0 ? I = "componentWillUpdate" : typeof d.UNSAFE_componentWillUpdate == "function" && (I = "UNSAFE_componentWillUpdate"), S !== null || R !== null || I !== null) {
            var _ = re(n) || "Component", j = typeof n.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            no.has(_) || (no.add(_), h(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, _, j, S !== null ? `
  ` + S : "", R !== null ? `
  ` + R : "", I !== null ? `
  ` + I : ""));
          }
        }
      }
      return d;
    }
    function vl(n, e, t) {
      {
        var r = re(e) || "Component", o = n.render;
        o || (e.prototype && typeof e.prototype.render == "function" ? h("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", r) : h("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", r)), n.getInitialState && !n.getInitialState.isReactClassApproved && !n.state && h("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", r), n.getDefaultProps && !n.getDefaultProps.isReactClassApproved && h("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", r), n.propTypes && h("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", r), n.contextType && h("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", r), n.contextTypes && h("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", r), e.contextType && e.contextTypes && !ra.has(e) && (ra.add(e), h("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", r)), typeof n.componentShouldUpdate == "function" && h("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", r), e.prototype && e.prototype.isPureReactComponent && typeof n.shouldComponentUpdate < "u" && h("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", re(e) || "A pure component"), typeof n.componentDidUnmount == "function" && h("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", r), typeof n.componentDidReceiveProps == "function" && h("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", r), typeof n.componentWillRecieveProps == "function" && h("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", r), typeof n.UNSAFE_componentWillRecieveProps == "function" && h("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", r);
        var l = n.props !== t;
        n.props !== void 0 && l && h("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", r, r), n.defaultProps && h("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", r, r), typeof n.getSnapshotBeforeUpdate == "function" && typeof n.componentDidUpdate != "function" && !In.has(e) && (In.add(e), h("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", re(e))), typeof n.getDerivedStateFromProps == "function" && h("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", r), typeof n.getDerivedStateFromError == "function" && h("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", r), typeof e.getSnapshotBeforeUpdate == "function" && h("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", r);
        var c = n.state;
        c && (typeof c != "object" || Oe(c)) && h("%s.state: must be set to an object or null", r), typeof n.getChildContext == "function" && typeof e.childContextTypes != "object" && h("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", r);
      }
    }
    function gl(n, e) {
      var t = e.state;
      if (typeof e.componentWillMount == "function") {
        if (e.componentWillMount.__suppressDeprecationWarning !== !0) {
          var r = re(n) || "Unknown";
          Ko[r] || (ve(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            r
          ), Ko[r] = !0);
        }
        e.componentWillMount();
      }
      typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), t !== e.state && (h("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", re(n) || "Component"), Ei.enqueueReplaceState(e, e.state, null));
    }
    function Na(n, e, t, r) {
      if (n.queue !== null && n.queue.length > 0) {
        var o = n.queue, l = n.replace;
        if (n.queue = null, n.replace = !1, l && o.length === 1)
          e.state = o[0];
        else {
          for (var c = l ? o[0] : e.state, d = !0, m = l ? 1 : 0; m < o.length; m++) {
            var S = o[m], R = typeof S == "function" ? S.call(e, c, t, r) : S;
            R != null && (d ? (d = !1, c = Je({}, c, R)) : Je(c, R));
          }
          e.state = c;
        }
      } else
        n.queue = null;
    }
    function io(n, e, t, r) {
      vl(n, e, t);
      var o = n.state !== void 0 ? n.state : null;
      n.updater = Ei, n.props = t, n.state = o;
      var l = {
        queue: [],
        replace: !1
      };
      Wa(n, l);
      var c = e.contextType;
      if (typeof c == "object" && c !== null ? n.context = Rn(c) : n.context = r, n.state === t) {
        var d = re(e) || "Component";
        ta.has(d) || (ta.add(d), h("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", d));
      }
      var m = e.getDerivedStateFromProps;
      typeof m == "function" && (n.state = hl(n, e, m, o, t)), typeof e.getDerivedStateFromProps != "function" && typeof n.getSnapshotBeforeUpdate != "function" && (typeof n.UNSAFE_componentWillMount == "function" || typeof n.componentWillMount == "function") && (gl(e, n), Na(l, n, t, r));
    }
    var ml = {
      id: 1,
      overflow: ""
    };
    function yl(n) {
      var e = n.overflow, t = n.id, r = t & ~Sl(t);
      return r.toString(32) + e;
    }
    function Va(n, e, t) {
      var r = n.id, o = n.overflow, l = na(r) - 1, c = r & ~(1 << l), d = t + 1, m = na(e) + l;
      if (m > 30) {
        var S = l - l % 5, R = (1 << S) - 1, I = (c & R).toString(32), _ = c >> S, j = l - S, G = na(e) + j, Te = d << j, qr = Te | _, en = I + o;
        return {
          id: 1 << G | qr,
          overflow: en
        };
      } else {
        var ar = d << l, On = ar | c, Zl = o;
        return {
          id: 1 << m | On,
          overflow: Zl
        };
      }
    }
    function na(n) {
      return 32 - bl(n);
    }
    function Sl(n) {
      return 1 << na(n) - 1;
    }
    var bl = Math.clz32 ? Math.clz32 : Ya, wl = Math.log, tr = Math.LN2;
    function Ya(n) {
      var e = n >>> 0;
      return e === 0 ? 32 : 31 - (wl(e) / tr | 0) | 0;
    }
    function oa(n, e) {
      return n === e && (n !== 0 || 1 / n === 1 / e) || n !== n && e !== e;
    }
    var ee = typeof Object.is == "function" ? Object.is : oa, Qe = null, Pn = null, Gr = null, Y = null, Cr = !1, aa = !1, Ke = 0, qe = null, zt = 0, xl = 25, xt = !1, Tr;
    function Xr() {
      if (Qe === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return xt && h("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Qe;
    }
    function kl(n, e) {
      if (e === null)
        return h("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Tr), !1;
      n.length !== e.length && h(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Tr, "[" + n.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var t = 0; t < e.length && t < n.length; t++)
        if (!ee(n[t], e[t]))
          return !1;
      return !0;
    }
    function Ga() {
      if (zt > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function lo() {
      return Y === null ? Gr === null ? (Cr = !1, Gr = Y = Ga()) : (Cr = !0, Y = Gr) : Y.next === null ? (Cr = !1, Y = Y.next = Ga()) : (Cr = !0, Y = Y.next), Y;
    }
    function Cl(n, e) {
      Qe = e, Pn = n, xt = !1, Ke = 0;
    }
    function Tl(n, e, t, r) {
      for (; aa; )
        aa = !1, Ke = 0, zt += 1, Y = null, t = n(e, r);
      return Xa(), t;
    }
    function ia() {
      var n = Ke !== 0;
      return n;
    }
    function Xa() {
      xt = !1, Qe = null, Pn = null, aa = !1, Gr = null, zt = 0, qe = null, Y = null;
    }
    function Ii(n) {
      return xt && h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Rn(n);
    }
    function Pi(n) {
      return Tr = "useContext", Xr(), Rn(n);
    }
    function Za(n, e) {
      return typeof e == "function" ? e(n) : e;
    }
    function El(n) {
      return Tr = "useState", Fi(
        Za,
        // useReducer has a special case to support lazy useState initializers
        n
      );
    }
    function Fi(n, e, t) {
      if (n !== Za && (Tr = "useReducer"), Qe = Xr(), Y = lo(), Cr) {
        var r = Y.queue, o = r.dispatch;
        if (qe !== null) {
          var l = qe.get(r);
          if (l !== void 0) {
            qe.delete(r);
            var c = Y.memoizedState, d = l;
            do {
              var m = d.action;
              xt = !0, c = n(c, m), xt = !1, d = d.next;
            } while (d !== null);
            return Y.memoizedState = c, [c, o];
          }
        }
        return [Y.memoizedState, o];
      } else {
        xt = !0;
        var S;
        n === Za ? S = typeof e == "function" ? e() : e : S = t !== void 0 ? t(e) : e, xt = !1, Y.memoizedState = S;
        var R = Y.queue = {
          last: null,
          dispatch: null
        }, I = R.dispatch = Pl.bind(null, Qe, R);
        return [Y.memoizedState, I];
      }
    }
    function Di(n, e) {
      Qe = Xr(), Y = lo();
      var t = e === void 0 ? null : e;
      if (Y !== null) {
        var r = Y.memoizedState;
        if (r !== null && t !== null) {
          var o = r[1];
          if (kl(t, o))
            return r[0];
        }
      }
      xt = !0;
      var l = n();
      return xt = !1, Y.memoizedState = [l, t], l;
    }
    function Rl(n) {
      Qe = Xr(), Y = lo();
      var e = Y.memoizedState;
      if (e === null) {
        var t = {
          current: n
        };
        return Object.seal(t), Y.memoizedState = t, t;
      } else
        return e;
    }
    function Il(n, e) {
      Tr = "useLayoutEffect", h("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function Pl(n, e, t) {
      if (zt >= xl)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (n === Qe) {
        aa = !0;
        var r = {
          action: t,
          next: null
        };
        qe === null && (qe = /* @__PURE__ */ new Map());
        var o = qe.get(e);
        if (o === void 0)
          qe.set(e, r);
        else {
          for (var l = o; l.next !== null; )
            l = l.next;
          l.next = r;
        }
      }
    }
    function Fl(n, e) {
      return Di(function() {
        return n;
      }, e);
    }
    function Dl(n, e, t) {
      return Xr(), e(n._source);
    }
    function Al(n, e, t) {
      if (t === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return t();
    }
    function la(n) {
      return Xr(), n;
    }
    function Ai() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function Ja() {
      return Xr(), [!1, Ai];
    }
    function Mi() {
      var n = Pn, e = yl(n.treeContext), t = so;
      if (t === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var r = Ke++;
      return dt(t, e, r);
    }
    function sa() {
    }
    var ua = {
      readContext: Ii,
      useContext: Pi,
      useMemo: Di,
      useReducer: Fi,
      useRef: Rl,
      useState: El,
      useInsertionEffect: sa,
      useLayoutEffect: Il,
      useCallback: Fl,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: sa,
      // Effects are not run in the server environment.
      useEffect: sa,
      // Debugging effect
      useDebugValue: sa,
      useDeferredValue: la,
      useTransition: Ja,
      useId: Mi,
      // Subscriptions are not setup in a server environment.
      useMutableSource: Dl,
      useSyncExternalStore: Al
    }, so = null;
    function ca(n) {
      so = n;
    }
    function Fn(n) {
      try {
        var e = "", t = n;
        do {
          switch (t.tag) {
            case 0:
              e += Nr(t.type, null, null);
              break;
            case 1:
              e += Ha(t.type, null, null);
              break;
            case 2:
              e += yi(t.type, null, null);
              break;
          }
          t = t.parent;
        } while (t);
        return e;
      } catch (r) {
        return `
Error generating stack: ` + r.message + `
` + r.stack;
      }
    }
    var fa = $.ReactCurrentDispatcher, da = $.ReactDebugCurrentFrame, pa = 0, Dn = 1, Qa = 2, Zr = 3, _i = 4, Ml = 0, An = 1, Mn = 2, _l = 12800;
    function Ol(n) {
      return console.error(n), null;
    }
    function Jr() {
    }
    function ha(n, e, t, r, o, l, c, d, m) {
      var S = [], R = /* @__PURE__ */ new Set(), I = {
        destination: null,
        responseState: e,
        progressiveChunkSize: r === void 0 ? _l : r,
        status: Ml,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: R,
        pingedTasks: S,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: o === void 0 ? Ol : o,
        onAllReady: l === void 0 ? Jr : l,
        onShellReady: c === void 0 ? Jr : c,
        onShellError: d === void 0 ? Jr : d,
        onFatalError: m === void 0 ? Jr : m
      }, _ = uo(
        I,
        0,
        null,
        t,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      _.parentFlushed = !0;
      var j = Qr(I, n, null, _, R, Go, Xo, ml);
      return S.push(j), I;
    }
    function rr(n, e) {
      var t = n.pingedTasks;
      t.push(e), t.length === 1 && vt(function() {
        return si(n);
      });
    }
    function Ka(n, e) {
      return {
        id: gr,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        forceClientRender: !1,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: e,
        errorDigest: null
      };
    }
    function Qr(n, e, t, r, o, l, c, d) {
      n.allPendingTasks++, t === null ? n.pendingRootTasks++ : t.pendingTasks++;
      var m = {
        node: e,
        ping: function() {
          return rr(n, m);
        },
        blockedBoundary: t,
        blockedSegment: r,
        abortSet: o,
        legacyContext: l,
        context: c,
        treeContext: d
      };
      return m.componentStack = null, o.add(m), m;
    }
    function uo(n, e, t, r, o, l) {
      return {
        status: pa,
        id: -1,
        // lazily assigned later
        index: e,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: r,
        boundary: t,
        lastPushedText: o,
        textEmbedded: l
      };
    }
    var nr = null;
    function Wt() {
      return nr === null || nr.componentStack === null ? "" : Fn(nr.componentStack);
    }
    function or(n, e) {
      n.componentStack = {
        tag: 0,
        parent: n.componentStack,
        type: e
      };
    }
    function va(n, e) {
      n.componentStack = {
        tag: 1,
        parent: n.componentStack,
        type: e
      };
    }
    function co(n, e) {
      n.componentStack = {
        tag: 2,
        parent: n.componentStack,
        type: e
      };
    }
    function kt(n) {
      n.componentStack === null ? h("Unexpectedly popped too many stack frames. This is a bug in React.") : n.componentStack = n.componentStack.parent;
    }
    var fo = null;
    function qa(n, e) {
      {
        var t;
        typeof e == "string" ? t = e : e && typeof e.message == "string" ? t = e.message : t = String(e);
        var r = fo || Wt();
        fo = null, n.errorMessage = t, n.errorComponentStack = r;
      }
    }
    function po(n, e) {
      var t = n.onError(e);
      if (t != null && typeof t != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof t + '" instead');
      return t;
    }
    function ho(n, e) {
      var t = n.onShellError;
      t(e);
      var r = n.onFatalError;
      r(e), n.destination !== null ? (n.status = Mn, me(n.destination, e)) : (n.status = An, n.fatalError = e);
    }
    function Oi(n, e, t) {
      or(e, "Suspense");
      var r = e.blockedBoundary, o = e.blockedSegment, l = t.fallback, c = t.children, d = /* @__PURE__ */ new Set(), m = Ka(n, d), S = o.chunks.length, R = uo(
        n,
        S,
        m,
        o.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      o.children.push(R), o.lastPushedText = !1;
      var I = uo(
        n,
        0,
        null,
        o.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      I.parentFlushed = !0, e.blockedBoundary = m, e.blockedSegment = I;
      try {
        if (_n(n, e, c), Be(I.chunks, n.responseState, I.lastPushedText, I.textEmbedded), I.status = Dn, Kr(m, I), m.pendingTasks === 0) {
          kt(e);
          return;
        }
      } catch (j) {
        I.status = _i, m.forceClientRender = !0, m.errorDigest = po(n, j), qa(m, j);
      } finally {
        e.blockedBoundary = r, e.blockedSegment = o;
      }
      var _ = Qr(n, l, r, R, d, e.legacyContext, e.context, e.treeContext);
      _.componentStack = e.componentStack, n.pingedTasks.push(_), kt(e);
    }
    function Ll(n, e, t, r) {
      or(e, t);
      var o = e.blockedSegment, l = jr(o.chunks, t, r, n.responseState, o.formatContext);
      o.lastPushedText = !1;
      var c = o.formatContext;
      o.formatContext = Jt(c, t, r), _n(n, e, l), o.formatContext = c, xo(o.chunks, t), o.lastPushedText = !1, kt(e);
    }
    function Li(n) {
      return n.prototype && n.prototype.isReactComponent;
    }
    function vo(n, e, t, r, o) {
      var l = {};
      Cl(e, l);
      var c = t(r, o);
      return Tl(t, r, c, o);
    }
    function ei(n, e, t, r, o) {
      var l = t.render();
      t.props !== o && (oi || h("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", re(r) || "a component"), oi = !0);
      {
        var c = r.childContextTypes;
        if (c != null) {
          var d = e.legacyContext, m = ja(t, r, d, c);
          e.legacyContext = m, je(n, e, l), e.legacyContext = d;
          return;
        }
      }
      je(n, e, l);
    }
    function Bi(n, e, t, r) {
      co(e, t);
      var o = wr(t, e.legacyContext), l = Ri(t, r, o);
      io(l, t, r, o), ei(n, e, l, t, r), kt(e);
    }
    var ti = {}, go = {}, ri = {}, ni = {}, oi = !1, Ui = {}, Hi = !1, ai = !1, ji = !1;
    function Bl(n, e, t, r) {
      var o;
      if (o = wr(t, e.legacyContext), va(e, t), t.prototype && typeof t.prototype.render == "function") {
        var l = re(t) || "Unknown";
        ti[l] || (h("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", l, l), ti[l] = !0);
      }
      var c = vo(n, e, t, r, o), d = ia();
      if (typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0) {
        var m = re(t) || "Unknown";
        go[m] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", m, m, m), go[m] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0
      ) {
        {
          var S = re(t) || "Unknown";
          go[S] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", S, S, S), go[S] = !0);
        }
        io(c, t, r, o), ei(n, e, c, t, r);
      } else if (Ul(t), d) {
        var R = e.treeContext, I = 1, _ = 0;
        e.treeContext = Va(R, I, _);
        try {
          je(n, e, c);
        } finally {
          e.treeContext = R;
        }
      } else
        je(n, e, c);
      kt(e);
    }
    function Ul(n) {
      {
        if (n && n.childContextTypes && h("%s(...): childContextTypes cannot be defined on a function component.", n.displayName || n.name || "Component"), n.defaultProps !== void 0) {
          var e = re(n) || "Unknown";
          Ui[e] || (h("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", e), Ui[e] = !0);
        }
        if (typeof n.getDerivedStateFromProps == "function") {
          var t = re(n) || "Unknown";
          ni[t] || (h("%s: Function components do not support getDerivedStateFromProps.", t), ni[t] = !0);
        }
        if (typeof n.contextType == "object" && n.contextType !== null) {
          var r = re(n) || "Unknown";
          ri[r] || (h("%s: Function components do not support contextType.", r), ri[r] = !0);
        }
      }
    }
    function zi(n, e) {
      if (n && n.defaultProps) {
        var t = Je({}, e), r = n.defaultProps;
        for (var o in r)
          t[o] === void 0 && (t[o] = r[o]);
        return t;
      }
      return e;
    }
    function Hl(n, e, t, r, o) {
      va(e, t.render);
      var l = vo(n, e, t.render, r, o), c = ia();
      if (c) {
        var d = e.treeContext, m = 1, S = 0;
        e.treeContext = Va(d, m, S);
        try {
          je(n, e, l);
        } finally {
          e.treeContext = d;
        }
      } else
        je(n, e, l);
      kt(e);
    }
    function ii(n, e, t, r, o) {
      var l = t.type, c = zi(l, r);
      ga(n, e, l, c, o);
    }
    function jl(n, e, t, r) {
      t._context === void 0 ? t !== t.Consumer && (ji || (ji = !0, h("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : t = t._context;
      var o = r.children;
      typeof o != "function" && h("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var l = Rn(t), c = o(l);
      je(n, e, c);
    }
    function et(n, e, t, r) {
      var o = t._context, l = r.value, c = r.children, d;
      d = e.context, e.context = za(o, l), je(n, e, c), e.context = pl(o), d !== e.context && h("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function zl(n, e, t, r, o) {
      or(e, "Lazy");
      var l = t._payload, c = t._init, d = c(l), m = zi(d, r);
      ga(n, e, d, m, o), kt(e);
    }
    function ga(n, e, t, r, o) {
      if (typeof t == "function")
        if (Li(t)) {
          Bi(n, e, t, r);
          return;
        } else {
          Bl(n, e, t, r);
          return;
        }
      if (typeof t == "string") {
        Ll(n, e, t, r);
        return;
      }
      switch (t) {
        // TODO: LegacyHidden acts the same as a fragment. This only works
        // because we currently assume that every instance of LegacyHidden is
        // accompanied by a host component wrapper. In the hidden mode, the host
        // component is given a `hidden` attribute, which ensures that the
        // initial HTML is not visible. To support the use of LegacyHidden as a
        // true fragment, without an extra DOM node, we would have to hide the
        // initial HTML in some other way.
        // TODO: Add REACT_OFFSCREEN_TYPE here too with the same capability.
        case cl:
        case ul:
        case Ho:
        case jo:
        case Uo: {
          je(n, e, r.children);
          return;
        }
        case Ia: {
          or(e, "SuspenseList"), je(n, e, r.children), kt(e);
          return;
        }
        case hi:
          throw new Error("ReactDOMServer does not yet support scope components.");
        // eslint-disable-next-line-no-fallthrough
        case Ra: {
          Oi(n, e, r);
          return;
        }
      }
      if (typeof t == "object" && t !== null)
        switch (t.$$typeof) {
          case Cn: {
            Hl(n, e, t, r, o);
            return;
          }
          case Pa: {
            ii(n, e, t, r, o);
            return;
          }
          case Yn: {
            et(n, e, t, r);
            return;
          }
          case Gn: {
            jl(n, e, t, r);
            return;
          }
          case zo: {
            zl(n, e, t, r);
            return;
          }
        }
      var l = "";
      throw (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (t == null ? t : typeof t) + "." + l));
    }
    function Wl(n, e) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      n[Symbol.toStringTag] === "Generator" && (Hi || h("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Hi = !0), n.entries === e && (ai || h("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ai = !0);
    }
    function je(n, e, t) {
      try {
        return $l(n, e, t);
      } catch (r) {
        throw typeof r == "object" && r !== null && typeof r.then == "function" || (fo = fo !== null ? fo : Wt()), r;
      }
    }
    function $l(n, e, t) {
      if (e.node = t, typeof t == "object" && t !== null) {
        switch (t.$$typeof) {
          case pi: {
            var r = t, o = r.type, l = r.props, c = r.ref;
            ga(n, e, o, l, c);
            return;
          }
          case Bo:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          // eslint-disable-next-line-no-fallthrough
          case zo: {
            var d = t, m = d._payload, S = d._init, R;
            try {
              R = S(m);
            } catch (ar) {
              throw typeof ar == "object" && ar !== null && typeof ar.then == "function" && or(e, "Lazy"), ar;
            }
            je(n, e, R);
            return;
          }
        }
        if (Oe(t)) {
          Wi(n, e, t);
          return;
        }
        var I = Xn(t);
        if (I) {
          Wl(t, I);
          var _ = I.call(t);
          if (_) {
            var j = _.next();
            if (!j.done) {
              var G = [];
              do
                G.push(j.value), j = _.next();
              while (!j.done);
              Wi(n, e, G);
              return;
            }
            return;
          }
        }
        var Te = Object.prototype.toString.call(t);
        throw new Error("Objects are not valid as a React child (found: " + (Te === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : Te) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof t == "string") {
        var qr = e.blockedSegment;
        qr.lastPushedText = be(e.blockedSegment.chunks, t, n.responseState, qr.lastPushedText);
        return;
      }
      if (typeof t == "number") {
        var en = e.blockedSegment;
        en.lastPushedText = be(e.blockedSegment.chunks, "" + t, n.responseState, en.lastPushedText);
        return;
      }
      typeof t == "function" && h("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function Wi(n, e, t) {
      for (var r = t.length, o = 0; o < r; o++) {
        var l = e.treeContext;
        e.treeContext = Va(l, r, o);
        try {
          _n(n, e, t[o]);
        } finally {
          e.treeContext = l;
        }
      }
    }
    function $i(n, e, t) {
      var r = e.blockedSegment, o = r.chunks.length, l = uo(
        n,
        o,
        null,
        r.formatContext,
        // Adopt the parent segment's leading text embed
        r.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      r.children.push(l), r.lastPushedText = !1;
      var c = Qr(n, e.node, e.blockedBoundary, l, e.abortSet, e.legacyContext, e.context, e.treeContext);
      e.componentStack !== null && (c.componentStack = e.componentStack.parent);
      var d = c.ping;
      t.then(d, d);
    }
    function _n(n, e, t) {
      var r = e.blockedSegment.formatContext, o = e.legacyContext, l = e.context, c = null;
      c = e.componentStack;
      try {
        return je(n, e, t);
      } catch (d) {
        if (Xa(), typeof d == "object" && d !== null && typeof d.then == "function") {
          $i(n, e, d), e.blockedSegment.formatContext = r, e.legacyContext = o, e.context = l, kr(l), e.componentStack = c;
          return;
        } else
          throw e.blockedSegment.formatContext = r, e.legacyContext = o, e.context = l, kr(l), e.componentStack = c, d;
      }
    }
    function Ni(n, e, t, r) {
      var o = po(n, r);
      if (e === null ? ho(n, r) : (e.pendingTasks--, e.forceClientRender || (e.forceClientRender = !0, e.errorDigest = o, qa(e, r), e.parentFlushed && n.clientRenderedBoundaries.push(e))), n.allPendingTasks--, n.allPendingTasks === 0) {
        var l = n.onAllReady;
        l();
      }
    }
    function Nl(n) {
      var e = this, t = n.blockedBoundary, r = n.blockedSegment;
      r.status = Zr, mo(e, t, r);
    }
    function li(n, e, t) {
      var r = n.blockedBoundary, o = n.blockedSegment;
      if (o.status = Zr, r === null)
        e.allPendingTasks--, e.status !== Mn && (e.status = Mn, e.destination !== null && ce(e.destination));
      else {
        if (r.pendingTasks--, !r.forceClientRender) {
          r.forceClientRender = !0;
          var l = t === void 0 ? new Error("The render was aborted by the server without a reason.") : t;
          r.errorDigest = e.onError(l);
          {
            var c = "The server did not finish this Suspense boundary: ";
            l && typeof l.message == "string" ? l = c + l.message : l = c + String(l);
            var d = nr;
            nr = n;
            try {
              qa(r, l);
            } finally {
              nr = d;
            }
          }
          r.parentFlushed && e.clientRenderedBoundaries.push(r);
        }
        if (r.fallbackAbortableTasks.forEach(function(S) {
          return li(S, e, t);
        }), r.fallbackAbortableTasks.clear(), e.allPendingTasks--, e.allPendingTasks === 0) {
          var m = e.onAllReady;
          m();
        }
      }
    }
    function Kr(n, e) {
      if (e.chunks.length === 0 && e.children.length === 1 && e.children[0].boundary === null) {
        var t = e.children[0];
        t.id = e.id, t.parentFlushed = !0, t.status === Dn && Kr(n, t);
      } else {
        var r = n.completedSegments;
        r.push(e);
      }
    }
    function mo(n, e, t) {
      if (e === null) {
        if (t.parentFlushed) {
          if (n.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          n.completedRootSegment = t;
        }
        if (n.pendingRootTasks--, n.pendingRootTasks === 0) {
          n.onShellError = Jr;
          var r = n.onShellReady;
          r();
        }
      } else if (e.pendingTasks--, !e.forceClientRender) {
        if (e.pendingTasks === 0)
          t.parentFlushed && t.status === Dn && Kr(e, t), e.parentFlushed && n.completedBoundaries.push(e), e.fallbackAbortableTasks.forEach(Nl, n), e.fallbackAbortableTasks.clear();
        else if (t.parentFlushed && t.status === Dn) {
          Kr(e, t);
          var o = e.completedSegments;
          o.length === 1 && e.parentFlushed && n.partialBoundaries.push(e);
        }
      }
      if (n.allPendingTasks--, n.allPendingTasks === 0) {
        var l = n.onAllReady;
        l();
      }
    }
    function Vl(n, e) {
      var t = e.blockedSegment;
      if (t.status === pa) {
        kr(e.context);
        var r = null;
        r = nr, nr = e;
        try {
          je(n, e, e.node), Be(t.chunks, n.responseState, t.lastPushedText, t.textEmbedded), e.abortSet.delete(e), t.status = Dn, mo(n, e.blockedBoundary, t);
        } catch (l) {
          if (Xa(), typeof l == "object" && l !== null && typeof l.then == "function") {
            var o = e.ping;
            l.then(o, o);
          } else
            e.abortSet.delete(e), t.status = _i, Ni(n, e.blockedBoundary, t, l);
        } finally {
          nr = r;
        }
      }
    }
    function si(n) {
      if (n.status !== Mn) {
        var e = ki(), t = fa.current;
        fa.current = ua;
        var r;
        r = da.getCurrentStack, da.getCurrentStack = Wt;
        var o = so;
        ca(n.responseState);
        try {
          var l = n.pingedTasks, c;
          for (c = 0; c < l.length; c++) {
            var d = l[c];
            Vl(n, d);
          }
          l.splice(0, c), n.destination !== null && ui(n, n.destination);
        } catch (m) {
          po(n, m), ho(n, m);
        } finally {
          ca(o), fa.current = t, da.getCurrentStack = r, t === ua && kr(e);
        }
      }
    }
    function yo(n, e, t) {
      switch (t.parentFlushed = !0, t.status) {
        case pa: {
          var r = t.id = n.nextSegmentId++;
          return t.lastPushedText = !1, t.textEmbedded = !1, ko(e, n.responseState, r);
        }
        case Dn: {
          t.status = Qa;
          for (var o = !0, l = t.chunks, c = 0, d = t.children, m = 0; m < d.length; m++) {
            for (var S = d[m]; c < S.index; c++)
              M(e, l[c]);
            o = ma(n, e, S);
          }
          for (; c < l.length - 1; c++)
            M(e, l[c]);
          return c < l.length && (o = J(e, l[c])), o;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function ma(n, e, t) {
      var r = t.boundary;
      if (r === null)
        return yo(n, e, t);
      if (r.parentFlushed = !0, r.forceClientRender)
        return Ue(e, n.responseState, r.errorDigest, r.errorMessage, r.errorComponentStack), yo(n, e, t), Ta(e, n.responseState);
      if (r.pendingTasks > 0) {
        r.rootSegmentID = n.nextSegmentId++, r.completedSegments.length > 0 && n.partialBoundaries.push(r);
        var o = r.id = ze(n.responseState);
        return yn(e, n.responseState, o), yo(n, e, t), Sn(e, n.responseState);
      } else {
        if (r.byteSize > n.progressiveChunkSize)
          return r.rootSegmentID = n.nextSegmentId++, n.completedBoundaries.push(r), yn(e, n.responseState, r.id), yo(n, e, t), Sn(e, n.responseState);
        Eo(e, n.responseState);
        var l = r.completedSegments;
        if (l.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var c = l[0];
        return ma(n, e, c), Ro(e, n.responseState);
      }
    }
    function Vi(n, e, t) {
      return sl(e, n.responseState, t.id, t.errorDigest, t.errorMessage, t.errorComponentStack);
    }
    function ya(n, e, t) {
      return z(e, n.responseState, t.formatContext, t.id), ma(n, e, t), q(e, t.formatContext);
    }
    function Yi(n, e, t) {
      for (var r = t.completedSegments, o = 0; o < r.length; o++) {
        var l = r[o];
        Gi(n, e, t, l);
      }
      return r.length = 0, fi(e, n.responseState, t.id, t.rootSegmentID);
    }
    function Yl(n, e, t) {
      for (var r = t.completedSegments, o = 0; o < r.length; o++) {
        var l = r[o];
        if (!Gi(n, e, t, l))
          return o++, r.splice(0, o), !1;
      }
      return r.splice(0, o), !0;
    }
    function Gi(n, e, t, r) {
      if (r.status === Qa)
        return !0;
      var o = r.id;
      if (o === -1) {
        var l = r.id = t.rootSegmentID;
        if (l === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return ya(n, e, r);
      } else
        return ya(n, e, r), tl(e, n.responseState, o);
    }
    function ui(n, e) {
      Ct();
      try {
        var t = n.completedRootSegment;
        t !== null && n.pendingRootTasks === 0 && (ma(n, e, t), n.completedRootSegment = null, xa(e, n.responseState));
        var r = n.clientRenderedBoundaries, o;
        for (o = 0; o < r.length; o++) {
          var l = r[o];
          Vi(n, e, l);
        }
        r.splice(0, o);
        var c = n.completedBoundaries;
        for (o = 0; o < c.length; o++) {
          var d = c[o];
          Yi(n, e, d);
        }
        c.splice(0, o), tn(e), Ct(e);
        var m = n.partialBoundaries;
        for (o = 0; o < m.length; o++) {
          var S = m[o];
          if (!Yl(n, e, S)) {
            n.destination = null, o++, m.splice(0, o);
            return;
          }
        }
        m.splice(0, o);
        var R = n.completedBoundaries;
        for (o = 0; o < R.length; o++) {
          var I = R[o];
          Yi(n, e, I);
        }
        R.splice(0, o);
      } finally {
        tn(e), n.allPendingTasks === 0 && n.pingedTasks.length === 0 && n.clientRenderedBoundaries.length === 0 && n.completedBoundaries.length === 0 && (n.abortableTasks.size !== 0 && h("There was still abortable task at the root when we closed. This is a bug in React."), ce(e));
      }
    }
    function Xi(n) {
      vt(function() {
        return si(n);
      });
    }
    function Gl(n, e) {
      if (n.status === An) {
        n.status = Mn, me(e, n.fatalError);
        return;
      }
      if (n.status !== Mn && n.destination === null) {
        n.destination = e;
        try {
          ui(n, e);
        } catch (t) {
          po(n, t), ho(n, t);
        }
      }
    }
    function Zi(n, e) {
      try {
        var t = n.abortableTasks;
        t.forEach(function(r) {
          return li(r, n, e);
        }), t.clear(), n.destination !== null && ui(n, n.destination);
      } catch (r) {
        po(n, r), ho(n, r);
      }
    }
    function Xl(n, e) {
      return new Promise(function(t, r) {
        var o, l, c = new Promise(function(_, j) {
          l = _, o = j;
        });
        function d() {
          var _ = new ReadableStream(
            {
              type: "bytes",
              pull: function(j) {
                Gl(S, j);
              },
              cancel: function(j) {
                Zi(S);
              }
            },
            // $FlowFixMe size() methods are not allowed on byte streams.
            {
              highWaterMark: 0
            }
          );
          _.allReady = c, t(_);
        }
        function m(_) {
          c.catch(function() {
          }), r(_);
        }
        var S = ha(n, cn(e ? e.identifierPrefix : void 0, e ? e.nonce : void 0, e ? e.bootstrapScriptContent : void 0, e ? e.bootstrapScripts : void 0, e ? e.bootstrapModules : void 0), Lt(e ? e.namespaceURI : void 0), e ? e.progressiveChunkSize : void 0, e ? e.onError : void 0, l, d, m, o);
        if (e && e.signal) {
          var R = e.signal, I = function() {
            Zi(S, R.reason), R.removeEventListener("abort", I);
          };
          R.addEventListener("abort", I);
        }
        Xi(S);
      });
    }
    Ki.renderToReadableStream = Xl, Ki.version = A;
  }()), Ki;
}
var es;
function fs() {
  if (es) return Ln;
  es = 1;
  var ue, A;
  return process.env.NODE_ENV === "production" ? (ue = ls(), A = ss()) : (ue = us(), A = cs()), Ln.version = ue.version, Ln.renderToString = ue.renderToString, Ln.renderToStaticMarkup = ue.renderToStaticMarkup, Ln.renderToNodeStream = ue.renderToNodeStream, Ln.renderToStaticNodeStream = ue.renderToStaticNodeStream, Ln.renderToReadableStream = A.renderToReadableStream, Ln;
}
var ds = fs();
const ps = os.div`
    & [role="combobox"] {
        ${(ue) => ue.iconurl && `
            background-image: url(${ue.iconurl});
            background-repeat: no-repeat;
            background-position: 4px center;
            background-size: 16px 16px;
            padding-left: 24px;
        `}
    }
`, ys = ({
  ariaLabel: ue,
  isDisabled: A = !1,
  label: $,
  options: ve,
  onSelectionChange: h,
  selectedKey: N,
  validate: vt
}) => {
  const ne = as.useMemo(() => {
    const k = ve.find((Ct) => Ct.key === N);
    if (!k?.icon) return;
    if (typeof k.icon == "string") return k.icon;
    const E = ds.renderToStaticMarkup(k.icon);
    return `data:image/svg+xml,${encodeURIComponent(E)}`;
  }, [ve, N]);
  return /* @__PURE__ */ Ji.jsx(ps, { iconurl: ne, children: /* @__PURE__ */ Ji.jsx(
    rs,
    {
      "aria-label": ue,
      isDisabled: A,
      label: $,
      value: N,
      onChange: h,
      validate: vt,
      children: ve.map((k) => /* @__PURE__ */ Ji.jsx(ns, { id: k.key, textValue: k.caption, children: /* @__PURE__ */ Ji.jsx(is, { text: k.caption, icon: k.icon }) }, k.key))
    }
  ) });
};
export {
  ys as C
};
