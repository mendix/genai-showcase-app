import { getComponentFramework as gt } from "@mendix/component-framework";
import { getModelAccessWithComponentProxy as Ut } from "@mendix/model-access-sdk";
function Yt(W) {
  const l = gt(W);
  function p(J, ne) {
    return Ut(J, ne, W, void 0, { dynamicModelImport: !0 });
  }
  return {
    app: {
      files: l.getApi("mendix.AppFilesApi"),
      model: {
        domainModels: p(
          "mendix.DomainModelApi",
          "DomainModels$DomainModel"
        ),
        pages: p("mendix.PageApi", "Pages$Page"),
        constants: p(
          "mendix.ConstantApi",
          "Constants$Constant"
        ),
        enumerations: p(
          "mendix.EnumerationApi",
          "Enumerations$Enumeration"
        ),
        snippets: p(
          "mendix.SnippetApi",
          "Pages$Snippet"
        ),
        buildingBlocks: p(
          "mendix.BuildingBlockApi",
          "Pages$BuildingBlock"
        ),
        projects: l.getApi("mendix.ProjectApi"),
        modules: l.getApi("mendix.ModuleApi"),
        moduleSettings: p(
          "mendix.ModuleSettingsApi",
          "Projects$ModuleSettings"
        ),
        microflows: p(
          "mendix.MicroflowModelApi",
          "Microflows$Microflow"
        ),
        customBlobDocuments: l.getApi("mendix.CustomBlobDocumentApi"),
        importMappings: p(
          "mendix.ImportMappingModelApi",
          "ImportMappings$ImportMapping"
        ),
        exportMappings: p(
          "mendix.ExportMappingModelApi",
          "ExportMappings$ExportMapping"
        ),
        jsonStructures: p(
          "mendix.JsonStructureModelApi",
          "JsonStructures$JsonStructure"
        ),
        messageDefinitions: p(
          "mendix.MessageDefinitionModelApi",
          "MessageDefinitions$MessageDefinitionCollection"
        ),
        xmlSchemas: p(
          "mendix.XmlSchemaModelApi",
          "XmlSchemas$XmlSchema"
        ),
        workflows: p(
          "mendix.WorkflowApi",
          "Workflows$Workflow"
        ),
        imageCollections: p(
          "mendix.ImageCollectionApi",
          "Images$ImageCollection"
        ),
        regularExpressions: p(
          "mendix.RegularExpressionApi",
          "RegularExpressions$RegularExpression"
        ),
        moduleSecurity: p(
          "mendix.ModuleSecurityApi",
          "Security$ModuleSecurity"
        ),
        viewEntitySourceDocuments: p(
          "mendix.ViewEntitySourceDocumentApi",
          "DomainModels$ViewEntitySourceDocument"
        ),
        layouts: p("mendix.LayoutApi", "Pages$Layout"),
        pageTemplates: p(
          "mendix.PageTemplateApi",
          "Pages$PageTemplate"
        ),
        customIconCollections: p(
          "mendix.CustomIconCollectionApi",
          "CustomIcons$CustomIconCollection"
        ),
        dataSets: p(
          "mendix.DataSetApi",
          "DataSets$DataSet"
        ),
        documentTemplates: p(
          "mendix.DocumentTemplateApi",
          "DocumentTemplates$DocumentTemplate"
        ),
        menuDocuments: p(
          "mendix.MenuDocumentApi",
          "Menus$MenuDocument"
        ),
        nanoflows: p(
          "mendix.NanoflowApi",
          "Microflows$Nanoflow"
        ),
        rules: p("mendix.RuleApi", "Microflows$Rule"),
        mlMappingDocuments: p(
          "mendix.MLMappingDocumentApi",
          "MLMappings$MLMappingDocument"
        ),
        queues: p("mendix.QueueApi", "Queues$Queue"),
        dataTransformers: p(
          "mendix.DataTransformerApi",
          "DataTransformers$DataTransformer"
        ),
        messageDefinitions2: p(
          "mendix.MessageDefinition2Api",
          "MessageDefinitions$MessageDefinition2"
        ),
        publishedODataServices2: p(
          "mendix.PublishedODataService2Api",
          "ODataPublish$PublishedODataService2"
        ),
        consumedODataServices: p(
          "mendix.ConsumedODataServiceApi",
          "Rest$ConsumedODataService"
        ),
        consumedRestServices: p(
          "mendix.ConsumedRestServiceApi",
          "Rest$ConsumedRestService"
        ),
        publishedRestServices: p(
          "mendix.PublishedRestServiceApi",
          "Rest$PublishedRestService"
        ),
        importedWebServices: p(
          "mendix.ImportedWebServiceApi",
          "WebServices$ImportedWebService"
        ),
        publishedWebServices: p(
          "mendix.PublishedWebServiceApi",
          "WebServices$PublishedWebService"
        ),
        scheduledEvents: p(
          "mendix.ScheduledEventApi",
          "ScheduledEvents$ScheduledEvent"
        ),
        javaActions: p(
          "mendix.JavaActionApi",
          "JavaActions$JavaAction"
        ),
        javaScriptActions: p(
          "mendix.JavaScriptActionApi",
          "JavaScriptActions$JavaScriptAction"
        ),
        authentications: p(
          "mendix.AuthenticationApi",
          "Authentication$Authentication"
        ),
        connectors: p(
          "mendix.ConnectorApi",
          "ConnectorKit$Connector"
        ),
        connectorTypes: p(
          "mendix.ConnectorTypeApi",
          "ConnectorKit$ConnectorType"
        ),
        databaseConnections: p(
          "mendix.DatabaseConnectionApi",
          "DatabaseConnector$DatabaseConnection"
        ),
        excelDataImporterTemplates: p(
          "mendix.ExcelDataImporterTemplateApi",
          "ExcelDataImporter$Template"
        ),
        businessEventServices: p(
          "mendix.BusinessEventServiceApi",
          "BusinessEvents$BusinessEventService"
        ),
        entityChangeDataCaptureServices: p(
          "mendix.EntityChangeDataCaptureServiceApi",
          "ChangeDataCapture$EntityChangeDataCaptureService"
        )
      }
    }
  };
}
function Xt(W) {
  if (W.runMode !== "ui")
    throw new Error("getStudioProApi can only be used in UI mode, please use getHeadlessStudioProApi instead");
  const l = gt(W);
  return {
    app: {
      ...Yt(W).app,
      projectChanges: l.getApi("mendix.ProjectChangesApi")
    },
    ui: {
      messageBoxes: l.getApi("mendix.MessageBoxApi"),
      tabs: l.getApi("mendix.TabApi"),
      panes: l.getApi("mendix.DockablePaneApi"),
      extensionsMenu: l.getApi("mendix.ExtensionsMenuApi"),
      preferences: l.getApi("mendix.PreferencesApi"),
      dialogs: l.getApi("mendix.DialogApi"),
      notifications: l.getApi("mendix.NotificationApi"),
      editors: l.getApi("mendix.EditorApi"),
      elementSelectors: l.getApi("mendix.ElementSelectorApi"),
      versionControl: l.getApi("mendix.VersionControlApi"),
      appExplorer: l.getApi("mendix.AppExplorerApi"),
      documents: l.getApi("mendix.DocumentEditorApi"),
      messagePassing: l.getApi("mendix.MessagePassingApi"),
      extensionPermissions: l.getApi("mendix.ExtensionPermissionsApi")
    },
    network: {
      httpProxy: l.getApi("mendix.HttpProxyApi")
    },
    runtime: {
      controller: l.getApi("mendix.RuntimeControllerApi"),
      configuration: l.getApi("mendix.RuntimeConfigurationApi")
    }
  };
}
var hr = { exports: {} }, Xe = {}, gr = { exports: {} }, g = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dt;
function Bt() {
  if (dt) return g;
  dt = 1;
  var W = Symbol.for("react.element"), l = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), ne = Symbol.for("react.profiler"), ae = Symbol.for("react.provider"), oe = Symbol.for("react.context"), ee = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), re = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), Y = Symbol.iterator;
  function te(n) {
    return n === null || typeof n != "object" ? null : (n = Y && n[Y] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var G = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, le = Object.assign, De = {};
  function ie(n, u, b) {
    this.props = n, this.context = u, this.refs = De, this.updater = b || G;
  }
  ie.prototype.isReactComponent = {}, ie.prototype.setState = function(n, u) {
    if (typeof n != "object" && typeof n != "function" && n != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, u, "setState");
  }, ie.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function ue() {
  }
  ue.prototype = ie.prototype;
  function M(n, u, b) {
    this.props = n, this.context = u, this.refs = De, this.updater = b || G;
  }
  var he = M.prototype = new ue();
  he.constructor = M, le(he, ie.prototype), he.isPureReactComponent = !0;
  var se = Array.isArray, N = Object.prototype.hasOwnProperty, H = { current: null }, fe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ve(n, u, b) {
    var E, S = {}, O = null, P = null;
    if (u != null) for (E in u.ref !== void 0 && (P = u.ref), u.key !== void 0 && (O = "" + u.key), u) N.call(u, E) && !fe.hasOwnProperty(E) && (S[E] = u[E]);
    var T = arguments.length - 2;
    if (T === 1) S.children = b;
    else if (1 < T) {
      for (var w = Array(T), V = 0; V < T; V++) w[V] = arguments[V + 2];
      S.children = w;
    }
    if (n && n.defaultProps) for (E in T = n.defaultProps, T) S[E] === void 0 && (S[E] = T[E]);
    return { $$typeof: W, type: n, key: O, ref: P, props: S, _owner: H.current };
  }
  function Re(n, u) {
    return { $$typeof: W, type: n.type, key: u, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function Se(n) {
    return typeof n == "object" && n !== null && n.$$typeof === W;
  }
  function Ue(n) {
    var u = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(b) {
      return u[b];
    });
  }
  var Ce = /\/+/g;
  function X(n, u) {
    return typeof n == "object" && n !== null && n.key != null ? Ue("" + n.key) : u.toString(36);
  }
  function Q(n, u, b, E, S) {
    var O = typeof n;
    (O === "undefined" || O === "boolean") && (n = null);
    var P = !1;
    if (n === null) P = !0;
    else switch (O) {
      case "string":
      case "number":
        P = !0;
        break;
      case "object":
        switch (n.$$typeof) {
          case W:
          case l:
            P = !0;
        }
    }
    if (P) return P = n, S = S(P), n = E === "" ? "." + X(P, 0) : E, se(S) ? (b = "", n != null && (b = n.replace(Ce, "$&/") + "/"), Q(S, u, b, "", function(V) {
      return V;
    })) : S != null && (Se(S) && (S = Re(S, b + (!S.key || P && P.key === S.key ? "" : ("" + S.key).replace(Ce, "$&/") + "/") + n)), u.push(S)), 1;
    if (P = 0, E = E === "" ? "." : E + ":", se(n)) for (var T = 0; T < n.length; T++) {
      O = n[T];
      var w = E + X(O, T);
      P += Q(O, u, b, w, S);
    }
    else if (w = te(n), typeof w == "function") for (n = w.call(n), T = 0; !(O = n.next()).done; ) O = O.value, w = E + X(O, T++), P += Q(O, u, b, w, S);
    else if (O === "object") throw u = String(n), Error("Objects are not valid as a React child (found: " + (u === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : u) + "). If you meant to render a collection of children, use an array instead.");
    return P;
  }
  function B(n, u, b) {
    if (n == null) return n;
    var E = [], S = 0;
    return Q(n, E, "", "", function(O) {
      return u.call(b, O, S++);
    }), E;
  }
  function ce(n) {
    if (n._status === -1) {
      var u = n._result;
      u = u(), u.then(function(b) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = b);
      }, function(b) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = b);
      }), n._status === -1 && (n._status = 0, n._result = u);
    }
    if (n._status === 1) return n._result.default;
    throw n._result;
  }
  var v = { current: null }, de = { transition: null }, we = { ReactCurrentDispatcher: v, ReactCurrentBatchConfig: de, ReactCurrentOwner: H };
  function me() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return g.Children = { map: B, forEach: function(n, u, b) {
    B(n, function() {
      u.apply(this, arguments);
    }, b);
  }, count: function(n) {
    var u = 0;
    return B(n, function() {
      u++;
    }), u;
  }, toArray: function(n) {
    return B(n, function(u) {
      return u;
    }) || [];
  }, only: function(n) {
    if (!Se(n)) throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, g.Component = ie, g.Fragment = p, g.Profiler = ne, g.PureComponent = M, g.StrictMode = J, g.Suspense = F, g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = we, g.act = me, g.cloneElement = function(n, u, b) {
    if (n == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var E = le({}, n.props), S = n.key, O = n.ref, P = n._owner;
    if (u != null) {
      if (u.ref !== void 0 && (O = u.ref, P = H.current), u.key !== void 0 && (S = "" + u.key), n.type && n.type.defaultProps) var T = n.type.defaultProps;
      for (w in u) N.call(u, w) && !fe.hasOwnProperty(w) && (E[w] = u[w] === void 0 && T !== void 0 ? T[w] : u[w]);
    }
    var w = arguments.length - 2;
    if (w === 1) E.children = b;
    else if (1 < w) {
      T = Array(w);
      for (var V = 0; V < w; V++) T[V] = arguments[V + 2];
      E.children = T;
    }
    return { $$typeof: W, type: n.type, key: S, ref: O, props: E, _owner: P };
  }, g.createContext = function(n) {
    return n = { $$typeof: oe, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: ae, _context: n }, n.Consumer = n;
  }, g.createElement = ve, g.createFactory = function(n) {
    var u = ve.bind(null, n);
    return u.type = n, u;
  }, g.createRef = function() {
    return { current: null };
  }, g.forwardRef = function(n) {
    return { $$typeof: ee, render: n };
  }, g.isValidElement = Se, g.lazy = function(n) {
    return { $$typeof: L, _payload: { _status: -1, _result: n }, _init: ce };
  }, g.memo = function(n, u) {
    return { $$typeof: re, type: n, compare: u === void 0 ? null : u };
  }, g.startTransition = function(n) {
    var u = de.transition;
    de.transition = {};
    try {
      n();
    } finally {
      de.transition = u;
    }
  }, g.unstable_act = me, g.useCallback = function(n, u) {
    return v.current.useCallback(n, u);
  }, g.useContext = function(n) {
    return v.current.useContext(n);
  }, g.useDebugValue = function() {
  }, g.useDeferredValue = function(n) {
    return v.current.useDeferredValue(n);
  }, g.useEffect = function(n, u) {
    return v.current.useEffect(n, u);
  }, g.useId = function() {
    return v.current.useId();
  }, g.useImperativeHandle = function(n, u, b) {
    return v.current.useImperativeHandle(n, u, b);
  }, g.useInsertionEffect = function(n, u) {
    return v.current.useInsertionEffect(n, u);
  }, g.useLayoutEffect = function(n, u) {
    return v.current.useLayoutEffect(n, u);
  }, g.useMemo = function(n, u) {
    return v.current.useMemo(n, u);
  }, g.useReducer = function(n, u, b) {
    return v.current.useReducer(n, u, b);
  }, g.useRef = function(n) {
    return v.current.useRef(n);
  }, g.useState = function(n) {
    return v.current.useState(n);
  }, g.useSyncExternalStore = function(n, u, b) {
    return v.current.useSyncExternalStore(n, u, b);
  }, g.useTransition = function() {
    return v.current.useTransition();
  }, g.version = "18.3.1", g;
}
var Ze = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Ze.exports;
var pt;
function zt() {
  return pt || (pt = 1, function(W, l) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var p = "18.3.1", J = Symbol.for("react.element"), ne = Symbol.for("react.portal"), ae = Symbol.for("react.fragment"), oe = Symbol.for("react.strict_mode"), ee = Symbol.for("react.profiler"), F = Symbol.for("react.provider"), re = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), le = Symbol.for("react.lazy"), De = Symbol.for("react.offscreen"), ie = Symbol.iterator, ue = "@@iterator";
      function M(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = ie && e[ie] || e[ue];
        return typeof r == "function" ? r : null;
      }
      var he = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, se = {
        transition: null
      }, N = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, H = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, fe = {}, ve = null;
      function Re(e) {
        ve = e;
      }
      fe.setExtraStackFrame = function(e) {
        ve = e;
      }, fe.getCurrentStack = null, fe.getStackAddendum = function() {
        var e = "";
        ve && (e += ve);
        var r = fe.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var Se = !1, Ue = !1, Ce = !1, X = !1, Q = !1, B = {
        ReactCurrentDispatcher: he,
        ReactCurrentBatchConfig: se,
        ReactCurrentOwner: H
      };
      B.ReactDebugCurrentFrame = fe, B.ReactCurrentActQueue = N;
      function ce(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          de("warn", e, a);
        }
      }
      function v(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          de("error", e, a);
        }
      }
      function de(e, r, a) {
        {
          var o = B.ReactDebugCurrentFrame, s = o.getStackAddendum();
          s !== "" && (r += "%s", a = a.concat([s]));
          var m = a.map(function(d) {
            return String(d);
          });
          m.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, m);
        }
      }
      var we = {};
      function me(e, r) {
        {
          var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", s = o + "." + r;
          if (we[s])
            return;
          v("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, o), we[s] = !0;
        }
      }
      var n = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, r, a) {
          me(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, r, a, o) {
          me(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, r, a, o) {
          me(e, "setState");
        }
      }, u = Object.assign, b = {};
      Object.freeze(b);
      function E(e, r, a) {
        this.props = e, this.context = r, this.refs = b, this.updater = a || n;
      }
      E.prototype.isReactComponent = {}, E.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, E.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var S = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, O = function(e, r) {
          Object.defineProperty(E.prototype, e, {
            get: function() {
              ce("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var P in S)
          S.hasOwnProperty(P) && O(P, S[P]);
      }
      function T() {
      }
      T.prototype = E.prototype;
      function w(e, r, a) {
        this.props = e, this.context = r, this.refs = b, this.updater = a || n;
      }
      var V = w.prototype = new T();
      V.constructor = w, u(V, E.prototype), V.isPureReactComponent = !0;
      function br() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var er = Array.isArray;
      function je(e) {
        return er(e);
      }
      function _r(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function $e(e) {
        try {
          return ge(e), !1;
        } catch {
          return !0;
        }
      }
      function ge(e) {
        return "" + e;
      }
      function Ae(e) {
        if ($e(e))
          return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", _r(e)), ge(e);
      }
      function rr(e, r, a) {
        var o = e.displayName;
        if (o)
          return o;
        var s = r.displayName || r.name || "";
        return s !== "" ? a + "(" + s + ")" : a;
      }
      function Te(e) {
        return e.displayName || "Context";
      }
      function pe(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case ae:
            return "Fragment";
          case ne:
            return "Portal";
          case ee:
            return "Profiler";
          case oe:
            return "StrictMode";
          case Y:
            return "Suspense";
          case te:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case re:
              var r = e;
              return Te(r) + ".Consumer";
            case F:
              var a = e;
              return Te(a._context) + ".Provider";
            case L:
              return rr(e, e.render, "ForwardRef");
            case G:
              var o = e.displayName || null;
              return o !== null ? o : pe(e.type) || "Memo";
            case le: {
              var s = e, m = s._payload, d = s._init;
              try {
                return pe(d(m));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Pe = Object.prototype.hasOwnProperty, Me = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, tr, nr, Ie;
      Ie = {};
      function Ye(e) {
        if (Pe.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Be(e) {
        if (Pe.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Er(e, r) {
        var a = function() {
          tr || (tr = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function ar(e, r) {
        var a = function() {
          nr || (nr = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function or(e) {
        if (typeof e.ref == "string" && H.current && e.__self && H.current.stateNode !== e.__self) {
          var r = pe(H.current.type);
          Ie[r] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), Ie[r] = !0);
        }
      }
      var ze = function(e, r, a, o, s, m, d) {
        var y = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: J,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: a,
          props: d,
          // Record the component responsible for creating this element.
          _owner: m
        };
        return y._store = {}, Object.defineProperty(y._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(y, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(y, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: s
        }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
      };
      function Rr(e, r, a) {
        var o, s = {}, m = null, d = null, y = null, R = null;
        if (r != null) {
          Ye(r) && (d = r.ref, or(r)), Be(r) && (Ae(r.key), m = "" + r.key), y = r.__self === void 0 ? null : r.__self, R = r.__source === void 0 ? null : r.__source;
          for (o in r)
            Pe.call(r, o) && !Me.hasOwnProperty(o) && (s[o] = r[o]);
        }
        var x = arguments.length - 2;
        if (x === 1)
          s.children = a;
        else if (x > 1) {
          for (var k = Array(x), D = 0; D < x; D++)
            k[D] = arguments[D + 2];
          Object.freeze && Object.freeze(k), s.children = k;
        }
        if (e && e.defaultProps) {
          var $ = e.defaultProps;
          for (o in $)
            s[o] === void 0 && (s[o] = $[o]);
        }
        if (m || d) {
          var U = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && Er(s, U), d && ar(s, U);
        }
        return ze(e, m, d, y, R, H.current, s);
      }
      function Sr(e, r) {
        var a = ze(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function Cr(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, s = u({}, e.props), m = e.key, d = e.ref, y = e._self, R = e._source, x = e._owner;
        if (r != null) {
          Ye(r) && (d = r.ref, x = H.current), Be(r) && (Ae(r.key), m = "" + r.key);
          var k;
          e.type && e.type.defaultProps && (k = e.type.defaultProps);
          for (o in r)
            Pe.call(r, o) && !Me.hasOwnProperty(o) && (r[o] === void 0 && k !== void 0 ? s[o] = k[o] : s[o] = r[o]);
        }
        var D = arguments.length - 2;
        if (D === 1)
          s.children = a;
        else if (D > 1) {
          for (var $ = Array(D), U = 0; U < D; U++)
            $[U] = arguments[U + 2];
          s.children = $;
        }
        return ze(e.type, m, d, y, R, x, s);
      }
      function be(e) {
        return typeof e == "object" && e !== null && e.$$typeof === J;
      }
      var ir = ".", wr = ":";
      function qe(e) {
        var r = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(r, function(s) {
          return a[s];
        });
        return "$" + o;
      }
      var Ke = !1, _e = /\/+/g;
      function Fe(e) {
        return e.replace(_e, "$&/");
      }
      function xe(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (Ae(e.key), qe("" + e.key)) : r.toString(36);
      }
      function Oe(e, r, a, o, s) {
        var m = typeof e;
        (m === "undefined" || m === "boolean") && (e = null);
        var d = !1;
        if (e === null)
          d = !0;
        else
          switch (m) {
            case "string":
            case "number":
              d = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case J:
                case ne:
                  d = !0;
              }
          }
        if (d) {
          var y = e, R = s(y), x = o === "" ? ir + xe(y, 0) : o;
          if (je(R)) {
            var k = "";
            x != null && (k = Fe(x) + "/"), Oe(R, r, k, "", function(Vt) {
              return Vt;
            });
          } else R != null && (be(R) && (R.key && (!y || y.key !== R.key) && Ae(R.key), R = Sr(
            R,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (R.key && (!y || y.key !== R.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Fe("" + R.key) + "/"
            ) : "") + x
          )), r.push(R));
          return 1;
        }
        var D, $, U = 0, q = o === "" ? ir : o + wr;
        if (je(e))
          for (var yr = 0; yr < e.length; yr++)
            D = e[yr], $ = q + xe(D, yr), U += Oe(D, r, a, $, s);
        else {
          var Vr = M(e);
          if (typeof Vr == "function") {
            var ct = e;
            Vr === ct.entries && (Ke || ce("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ke = !0);
            for (var Wt = Vr.call(ct), lt, Nt = 0; !(lt = Wt.next()).done; )
              D = lt.value, $ = q + xe(D, Nt++), U += Oe(D, r, a, $, s);
          } else if (m === "object") {
            var ft = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (ft === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : ft) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return U;
      }
      function Le(e, r, a) {
        if (e == null)
          return e;
        var o = [], s = 0;
        return Oe(e, o, "", "", function(m) {
          return r.call(a, m, s++);
        }), o;
      }
      function ur(e) {
        var r = 0;
        return Le(e, function() {
          r++;
        }), r;
      }
      function Ar(e, r, a) {
        Le(e, function() {
          r.apply(this, arguments);
        }, a);
      }
      function sr(e) {
        return Le(e, function(r) {
          return r;
        }) || [];
      }
      function cr(e) {
        if (!be(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function Tr(e) {
        var r = {
          $$typeof: re,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: F,
          _context: r
        };
        var a = !1, o = !1, s = !1;
        {
          var m = {
            $$typeof: re,
            _context: r
          };
          Object.defineProperties(m, {
            Provider: {
              get: function() {
                return o || (o = !0, v("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(d) {
                r.Provider = d;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(d) {
                r._currentValue = d;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(d) {
                r._currentValue2 = d;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(d) {
                r._threadCount = d;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, v("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(d) {
                s || (ce("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", d), s = !0);
              }
            }
          }), r.Consumer = m;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var ke = -1, We = 0, Je = 1, Pr = 2;
      function xr(e) {
        if (e._status === ke) {
          var r = e._result, a = r();
          if (a.then(function(m) {
            if (e._status === We || e._status === ke) {
              var d = e;
              d._status = Je, d._result = m;
            }
          }, function(m) {
            if (e._status === We || e._status === ke) {
              var d = e;
              d._status = Pr, d._result = m;
            }
          }), e._status === ke) {
            var o = e;
            o._status = We, o._result = a;
          }
        }
        if (e._status === Je) {
          var s = e._result;
          return s === void 0 && v(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, s), "default" in s || v(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, s), s.default;
        } else
          throw e._result;
      }
      function Or(e) {
        var r = {
          // We use these fields to store the result.
          _status: ke,
          _result: e
        }, a = {
          $$typeof: le,
          _payload: r,
          _init: xr
        };
        {
          var o, s;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(m) {
                v("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = m, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return s;
              },
              set: function(m) {
                v("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), s = m, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function kr(e) {
        e != null && e.$$typeof === G ? v("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? v("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && v("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && v("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: L,
          render: e
        };
        {
          var a;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(o) {
              a = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return r;
      }
      var t;
      t = Symbol.for("react.module.reference");
      function i(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === ae || e === ee || Q || e === oe || e === Y || e === te || X || e === De || Se || Ue || Ce || typeof e == "object" && e !== null && (e.$$typeof === le || e.$$typeof === G || e.$$typeof === F || e.$$typeof === re || e.$$typeof === L || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === t || e.getModuleId !== void 0));
      }
      function c(e, r) {
        i(e) || v("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: G,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var o;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(s) {
              o = s, !e.name && !e.displayName && (e.displayName = s);
            }
          });
        }
        return a;
      }
      function f() {
        var e = he.current;
        return e === null && v(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function C(e) {
        var r = f();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? v("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && v("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function A(e) {
        var r = f();
        return r.useState(e);
      }
      function _(e, r, a) {
        var o = f();
        return o.useReducer(e, r, a);
      }
      function h(e) {
        var r = f();
        return r.useRef(e);
      }
      function z(e, r) {
        var a = f();
        return a.useEffect(e, r);
      }
      function j(e, r) {
        var a = f();
        return a.useInsertionEffect(e, r);
      }
      function I(e, r) {
        var a = f();
        return a.useLayoutEffect(e, r);
      }
      function Z(e, r) {
        var a = f();
        return a.useCallback(e, r);
      }
      function Ee(e, r) {
        var a = f();
        return a.useMemo(e, r);
      }
      function ye(e, r, a) {
        var o = f();
        return o.useImperativeHandle(e, r, a);
      }
      function K(e, r) {
        {
          var a = f();
          return a.useDebugValue(e, r);
        }
      }
      function He() {
        var e = f();
        return e.useTransition();
      }
      function Dr(e) {
        var r = f();
        return r.useDeferredValue(e);
      }
      function jr() {
        var e = f();
        return e.useId();
      }
      function _t(e, r, a) {
        var o = f();
        return o.useSyncExternalStore(e, r, a);
      }
      var Ge = 0, Ur, Yr, Br, zr, qr, Kr, Jr;
      function Hr() {
      }
      Hr.__reactDisabledLog = !0;
      function Et() {
        {
          if (Ge === 0) {
            Ur = console.log, Yr = console.info, Br = console.warn, zr = console.error, qr = console.group, Kr = console.groupCollapsed, Jr = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: Hr,
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
          Ge++;
        }
      }
      function Rt() {
        {
          if (Ge--, Ge === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: u({}, e, {
                value: Ur
              }),
              info: u({}, e, {
                value: Yr
              }),
              warn: u({}, e, {
                value: Br
              }),
              error: u({}, e, {
                value: zr
              }),
              group: u({}, e, {
                value: qr
              }),
              groupCollapsed: u({}, e, {
                value: Kr
              }),
              groupEnd: u({}, e, {
                value: Jr
              })
            });
          }
          Ge < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var $r = B.ReactCurrentDispatcher, Mr;
      function lr(e, r, a) {
        {
          if (Mr === void 0)
            try {
              throw Error();
            } catch (s) {
              var o = s.stack.trim().match(/\n( *(at )?)/);
              Mr = o && o[1] || "";
            }
          return `
` + Mr + e;
        }
      }
      var Ir = !1, fr;
      {
        var St = typeof WeakMap == "function" ? WeakMap : Map;
        fr = new St();
      }
      function Gr(e, r) {
        if (!e || Ir)
          return "";
        {
          var a = fr.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        Ir = !0;
        var s = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var m;
        m = $r.current, $r.current = null, Et();
        try {
          if (r) {
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
              } catch (q) {
                o = q;
              }
              Reflect.construct(e, [], d);
            } else {
              try {
                d.call();
              } catch (q) {
                o = q;
              }
              e.call(d.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (q) {
              o = q;
            }
            e();
          }
        } catch (q) {
          if (q && o && typeof q.stack == "string") {
            for (var y = q.stack.split(`
`), R = o.stack.split(`
`), x = y.length - 1, k = R.length - 1; x >= 1 && k >= 0 && y[x] !== R[k]; )
              k--;
            for (; x >= 1 && k >= 0; x--, k--)
              if (y[x] !== R[k]) {
                if (x !== 1 || k !== 1)
                  do
                    if (x--, k--, k < 0 || y[x] !== R[k]) {
                      var D = `
` + y[x].replace(" at new ", " at ");
                      return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && fr.set(e, D), D;
                    }
                  while (x >= 1 && k >= 0);
                break;
              }
          }
        } finally {
          Ir = !1, $r.current = m, Rt(), Error.prepareStackTrace = s;
        }
        var $ = e ? e.displayName || e.name : "", U = $ ? lr($) : "";
        return typeof e == "function" && fr.set(e, U), U;
      }
      function Ct(e, r, a) {
        return Gr(e, !1);
      }
      function wt(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function dr(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Gr(e, wt(e));
        if (typeof e == "string")
          return lr(e);
        switch (e) {
          case Y:
            return lr("Suspense");
          case te:
            return lr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case L:
              return Ct(e.render);
            case G:
              return dr(e.type, r, a);
            case le: {
              var o = e, s = o._payload, m = o._init;
              try {
                return dr(m(s), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var Xr = {}, Qr = B.ReactDebugCurrentFrame;
      function pr(e) {
        if (e) {
          var r = e._owner, a = dr(e.type, e._source, r ? r.type : null);
          Qr.setExtraStackFrame(a);
        } else
          Qr.setExtraStackFrame(null);
      }
      function At(e, r, a, o, s) {
        {
          var m = Function.call.bind(Pe);
          for (var d in e)
            if (m(e, d)) {
              var y = void 0;
              try {
                if (typeof e[d] != "function") {
                  var R = Error((o || "React class") + ": " + a + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw R.name = "Invariant Violation", R;
                }
                y = e[d](r, d, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (x) {
                y = x;
              }
              y && !(y instanceof Error) && (pr(s), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, d, typeof y), pr(null)), y instanceof Error && !(y.message in Xr) && (Xr[y.message] = !0, pr(s), v("Failed %s type: %s", a, y.message), pr(null));
            }
        }
      }
      function Ne(e) {
        if (e) {
          var r = e._owner, a = dr(e.type, e._source, r ? r.type : null);
          Re(a);
        } else
          Re(null);
      }
      var Fr;
      Fr = !1;
      function Zr() {
        if (H.current) {
          var e = pe(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function Tt(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
      function Pt(e) {
        return e != null ? Tt(e.__source) : "";
      }
      var et = {};
      function xt(e) {
        var r = Zr();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
      function rt(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = xt(r);
          if (!et[a]) {
            et[a] = !0;
            var o = "";
            e && e._owner && e._owner !== H.current && (o = " It was passed a child from " + pe(e._owner.type) + "."), Ne(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), Ne(null);
          }
        }
      }
      function tt(e, r) {
        if (typeof e == "object") {
          if (je(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              be(o) && rt(o, r);
            }
          else if (be(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var s = M(e);
            if (typeof s == "function" && s !== e.entries)
              for (var m = s.call(e), d; !(d = m.next()).done; )
                be(d.value) && rt(d.value, r);
          }
        }
      }
      function nt(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var a;
          if (typeof r == "function")
            a = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === L || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === G))
            a = r.propTypes;
          else
            return;
          if (a) {
            var o = pe(r);
            At(a, e.props, "prop", o, e);
          } else if (r.PropTypes !== void 0 && !Fr) {
            Fr = !0;
            var s = pe(r);
            v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Ot(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var o = r[a];
            if (o !== "children" && o !== "key") {
              Ne(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), Ne(null);
              break;
            }
          }
          e.ref !== null && (Ne(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), Ne(null));
        }
      }
      function at(e, r, a) {
        var o = i(e);
        if (!o) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var m = Pt(r);
          m ? s += m : s += Zr();
          var d;
          e === null ? d = "null" : je(e) ? d = "array" : e !== void 0 && e.$$typeof === J ? (d = "<" + (pe(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, v("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, s);
        }
        var y = Rr.apply(this, arguments);
        if (y == null)
          return y;
        if (o)
          for (var R = 2; R < arguments.length; R++)
            tt(arguments[R], e);
        return e === ae ? Ot(y) : nt(y), y;
      }
      var ot = !1;
      function kt(e) {
        var r = at.bind(null, e);
        return r.type = e, ot || (ot = !0, ce("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return ce("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function Dt(e, r, a) {
        for (var o = Cr.apply(this, arguments), s = 2; s < arguments.length; s++)
          tt(arguments[s], o.type);
        return nt(o), o;
      }
      function jt(e, r) {
        var a = se.transition;
        se.transition = {};
        var o = se.transition;
        se.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (se.transition = a, a === null && o._updatedFibers) {
            var s = o._updatedFibers.size;
            s > 10 && ce("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var it = !1, vr = null;
      function $t(e) {
        if (vr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), a = W && W[r];
            vr = a.call(W, "timers").setImmediate;
          } catch {
            vr = function(s) {
              it === !1 && (it = !0, typeof MessageChannel > "u" && v("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var m = new MessageChannel();
              m.port1.onmessage = s, m.port2.postMessage(void 0);
            };
          }
        return vr(e);
      }
      var Ve = 0, ut = !1;
      function st(e) {
        {
          var r = Ve;
          Ve++, N.current === null && (N.current = []);
          var a = N.isBatchingLegacy, o;
          try {
            if (N.isBatchingLegacy = !0, o = e(), !a && N.didScheduleLegacyUpdate) {
              var s = N.current;
              s !== null && (N.didScheduleLegacyUpdate = !1, Nr(s));
            }
          } catch ($) {
            throw mr(r), $;
          } finally {
            N.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var m = o, d = !1, y = {
              then: function($, U) {
                d = !0, m.then(function(q) {
                  mr(r), Ve === 0 ? Lr(q, $, U) : $(q);
                }, function(q) {
                  mr(r), U(q);
                });
              }
            };
            return !ut && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              d || (ut = !0, v("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), y;
          } else {
            var R = o;
            if (mr(r), Ve === 0) {
              var x = N.current;
              x !== null && (Nr(x), N.current = null);
              var k = {
                then: function($, U) {
                  N.current === null ? (N.current = [], Lr(R, $, U)) : $(R);
                }
              };
              return k;
            } else {
              var D = {
                then: function($, U) {
                  $(R);
                }
              };
              return D;
            }
          }
        }
      }
      function mr(e) {
        e !== Ve - 1 && v("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ve = e;
      }
      function Lr(e, r, a) {
        {
          var o = N.current;
          if (o !== null)
            try {
              Nr(o), $t(function() {
                o.length === 0 ? (N.current = null, r(e)) : Lr(e, r, a);
              });
            } catch (s) {
              a(s);
            }
          else
            r(e);
        }
      }
      var Wr = !1;
      function Nr(e) {
        if (!Wr) {
          Wr = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var a = e[r];
              do
                a = a(!0);
              while (a !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(r + 1), o;
          } finally {
            Wr = !1;
          }
        }
      }
      var Mt = at, It = Dt, Ft = kt, Lt = {
        map: Le,
        forEach: Ar,
        count: ur,
        toArray: sr,
        only: cr
      };
      l.Children = Lt, l.Component = E, l.Fragment = ae, l.Profiler = ee, l.PureComponent = w, l.StrictMode = oe, l.Suspense = Y, l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B, l.act = st, l.cloneElement = It, l.createContext = Tr, l.createElement = Mt, l.createFactory = Ft, l.createRef = br, l.forwardRef = kr, l.isValidElement = be, l.lazy = Or, l.memo = c, l.startTransition = jt, l.unstable_act = st, l.useCallback = Z, l.useContext = C, l.useDebugValue = K, l.useDeferredValue = Dr, l.useEffect = z, l.useId = jr, l.useImperativeHandle = ye, l.useInsertionEffect = j, l.useLayoutEffect = I, l.useMemo = Ee, l.useReducer = _, l.useRef = h, l.useState = A, l.useSyncExternalStore = _t, l.useTransition = He, l.version = p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Ze, Ze.exports)), Ze.exports;
}
var vt;
function bt() {
  return vt || (vt = 1, process.env.NODE_ENV === "production" ? gr.exports = Bt() : gr.exports = zt()), gr.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mt;
function qt() {
  if (mt) return Xe;
  mt = 1;
  var W = bt(), l = Symbol.for("react.element"), p = Symbol.for("react.fragment"), J = Object.prototype.hasOwnProperty, ne = W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ae = { key: !0, ref: !0, __self: !0, __source: !0 };
  function oe(ee, F, re) {
    var L, Y = {}, te = null, G = null;
    re !== void 0 && (te = "" + re), F.key !== void 0 && (te = "" + F.key), F.ref !== void 0 && (G = F.ref);
    for (L in F) J.call(F, L) && !ae.hasOwnProperty(L) && (Y[L] = F[L]);
    if (ee && ee.defaultProps) for (L in F = ee.defaultProps, F) Y[L] === void 0 && (Y[L] = F[L]);
    return { $$typeof: l, type: ee, key: te, ref: G, props: Y, _owner: ne.current };
  }
  return Xe.Fragment = p, Xe.jsx = oe, Xe.jsxs = oe, Xe;
}
var Qe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yt;
function Kt() {
  return yt || (yt = 1, process.env.NODE_ENV !== "production" && function() {
    var W = bt(), l = Symbol.for("react.element"), p = Symbol.for("react.portal"), J = Symbol.for("react.fragment"), ne = Symbol.for("react.strict_mode"), ae = Symbol.for("react.profiler"), oe = Symbol.for("react.provider"), ee = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), te = Symbol.for("react.lazy"), G = Symbol.for("react.offscreen"), le = Symbol.iterator, De = "@@iterator";
    function ie(t) {
      if (t === null || typeof t != "object")
        return null;
      var i = le && t[le] || t[De];
      return typeof i == "function" ? i : null;
    }
    var ue = W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function M(t) {
      {
        for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), f = 1; f < i; f++)
          c[f - 1] = arguments[f];
        he("error", t, c);
      }
    }
    function he(t, i, c) {
      {
        var f = ue.ReactDebugCurrentFrame, C = f.getStackAddendum();
        C !== "" && (i += "%s", c = c.concat([C]));
        var A = c.map(function(_) {
          return String(_);
        });
        A.unshift("Warning: " + i), Function.prototype.apply.call(console[t], console, A);
      }
    }
    var se = !1, N = !1, H = !1, fe = !1, ve = !1, Re;
    Re = Symbol.for("react.module.reference");
    function Se(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === J || t === ae || ve || t === ne || t === re || t === L || fe || t === G || se || N || H || typeof t == "object" && t !== null && (t.$$typeof === te || t.$$typeof === Y || t.$$typeof === oe || t.$$typeof === ee || t.$$typeof === F || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === Re || t.getModuleId !== void 0));
    }
    function Ue(t, i, c) {
      var f = t.displayName;
      if (f)
        return f;
      var C = i.displayName || i.name || "";
      return C !== "" ? c + "(" + C + ")" : c;
    }
    function Ce(t) {
      return t.displayName || "Context";
    }
    function X(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && M("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case J:
          return "Fragment";
        case p:
          return "Portal";
        case ae:
          return "Profiler";
        case ne:
          return "StrictMode";
        case re:
          return "Suspense";
        case L:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case ee:
            var i = t;
            return Ce(i) + ".Consumer";
          case oe:
            var c = t;
            return Ce(c._context) + ".Provider";
          case F:
            return Ue(t, t.render, "ForwardRef");
          case Y:
            var f = t.displayName || null;
            return f !== null ? f : X(t.type) || "Memo";
          case te: {
            var C = t, A = C._payload, _ = C._init;
            try {
              return X(_(A));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Q = Object.assign, B = 0, ce, v, de, we, me, n, u;
    function b() {
    }
    b.__reactDisabledLog = !0;
    function E() {
      {
        if (B === 0) {
          ce = console.log, v = console.info, de = console.warn, we = console.error, me = console.group, n = console.groupCollapsed, u = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: b,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        B++;
      }
    }
    function S() {
      {
        if (B--, B === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Q({}, t, {
              value: ce
            }),
            info: Q({}, t, {
              value: v
            }),
            warn: Q({}, t, {
              value: de
            }),
            error: Q({}, t, {
              value: we
            }),
            group: Q({}, t, {
              value: me
            }),
            groupCollapsed: Q({}, t, {
              value: n
            }),
            groupEnd: Q({}, t, {
              value: u
            })
          });
        }
        B < 0 && M("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var O = ue.ReactCurrentDispatcher, P;
    function T(t, i, c) {
      {
        if (P === void 0)
          try {
            throw Error();
          } catch (C) {
            var f = C.stack.trim().match(/\n( *(at )?)/);
            P = f && f[1] || "";
          }
        return `
` + P + t;
      }
    }
    var w = !1, V;
    {
      var br = typeof WeakMap == "function" ? WeakMap : Map;
      V = new br();
    }
    function er(t, i) {
      if (!t || w)
        return "";
      {
        var c = V.get(t);
        if (c !== void 0)
          return c;
      }
      var f;
      w = !0;
      var C = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var A;
      A = O.current, O.current = null, E();
      try {
        if (i) {
          var _ = function() {
            throw Error();
          };
          if (Object.defineProperty(_.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_, []);
            } catch (K) {
              f = K;
            }
            Reflect.construct(t, [], _);
          } else {
            try {
              _.call();
            } catch (K) {
              f = K;
            }
            t.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (K) {
            f = K;
          }
          t();
        }
      } catch (K) {
        if (K && f && typeof K.stack == "string") {
          for (var h = K.stack.split(`
`), z = f.stack.split(`
`), j = h.length - 1, I = z.length - 1; j >= 1 && I >= 0 && h[j] !== z[I]; )
            I--;
          for (; j >= 1 && I >= 0; j--, I--)
            if (h[j] !== z[I]) {
              if (j !== 1 || I !== 1)
                do
                  if (j--, I--, I < 0 || h[j] !== z[I]) {
                    var Z = `
` + h[j].replace(" at new ", " at ");
                    return t.displayName && Z.includes("<anonymous>") && (Z = Z.replace("<anonymous>", t.displayName)), typeof t == "function" && V.set(t, Z), Z;
                  }
                while (j >= 1 && I >= 0);
              break;
            }
        }
      } finally {
        w = !1, O.current = A, S(), Error.prepareStackTrace = C;
      }
      var Ee = t ? t.displayName || t.name : "", ye = Ee ? T(Ee) : "";
      return typeof t == "function" && V.set(t, ye), ye;
    }
    function je(t, i, c) {
      return er(t, !1);
    }
    function _r(t) {
      var i = t.prototype;
      return !!(i && i.isReactComponent);
    }
    function $e(t, i, c) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return er(t, _r(t));
      if (typeof t == "string")
        return T(t);
      switch (t) {
        case re:
          return T("Suspense");
        case L:
          return T("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case F:
            return je(t.render);
          case Y:
            return $e(t.type, i, c);
          case te: {
            var f = t, C = f._payload, A = f._init;
            try {
              return $e(A(C), i, c);
            } catch {
            }
          }
        }
      return "";
    }
    var ge = Object.prototype.hasOwnProperty, Ae = {}, rr = ue.ReactDebugCurrentFrame;
    function Te(t) {
      if (t) {
        var i = t._owner, c = $e(t.type, t._source, i ? i.type : null);
        rr.setExtraStackFrame(c);
      } else
        rr.setExtraStackFrame(null);
    }
    function pe(t, i, c, f, C) {
      {
        var A = Function.call.bind(ge);
        for (var _ in t)
          if (A(t, _)) {
            var h = void 0;
            try {
              if (typeof t[_] != "function") {
                var z = Error((f || "React class") + ": " + c + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              h = t[_](i, _, f, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              h = j;
            }
            h && !(h instanceof Error) && (Te(C), M("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", c, _, typeof h), Te(null)), h instanceof Error && !(h.message in Ae) && (Ae[h.message] = !0, Te(C), M("Failed %s type: %s", c, h.message), Te(null));
          }
      }
    }
    var Pe = Array.isArray;
    function Me(t) {
      return Pe(t);
    }
    function tr(t) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, c = i && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return c;
      }
    }
    function nr(t) {
      try {
        return Ie(t), !1;
      } catch {
        return !0;
      }
    }
    function Ie(t) {
      return "" + t;
    }
    function Ye(t) {
      if (nr(t))
        return M("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tr(t)), Ie(t);
    }
    var Be = ue.ReactCurrentOwner, Er = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ar, or;
    function ze(t) {
      if (ge.call(t, "ref")) {
        var i = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Rr(t) {
      if (ge.call(t, "key")) {
        var i = Object.getOwnPropertyDescriptor(t, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Sr(t, i) {
      typeof t.ref == "string" && Be.current;
    }
    function Cr(t, i) {
      {
        var c = function() {
          ar || (ar = !0, M("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function be(t, i) {
      {
        var c = function() {
          or || (or = !0, M("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var ir = function(t, i, c, f, C, A, _) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: t,
        key: i,
        ref: c,
        props: _,
        // Record the component responsible for creating this element.
        _owner: A
      };
      return h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(h, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.defineProperty(h, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    };
    function wr(t, i, c, f, C) {
      {
        var A, _ = {}, h = null, z = null;
        c !== void 0 && (Ye(c), h = "" + c), Rr(i) && (Ye(i.key), h = "" + i.key), ze(i) && (z = i.ref, Sr(i, C));
        for (A in i)
          ge.call(i, A) && !Er.hasOwnProperty(A) && (_[A] = i[A]);
        if (t && t.defaultProps) {
          var j = t.defaultProps;
          for (A in j)
            _[A] === void 0 && (_[A] = j[A]);
        }
        if (h || z) {
          var I = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          h && Cr(_, I), z && be(_, I);
        }
        return ir(t, h, z, C, f, Be.current, _);
      }
    }
    var qe = ue.ReactCurrentOwner, Ke = ue.ReactDebugCurrentFrame;
    function _e(t) {
      if (t) {
        var i = t._owner, c = $e(t.type, t._source, i ? i.type : null);
        Ke.setExtraStackFrame(c);
      } else
        Ke.setExtraStackFrame(null);
    }
    var Fe;
    Fe = !1;
    function xe(t) {
      return typeof t == "object" && t !== null && t.$$typeof === l;
    }
    function Oe() {
      {
        if (qe.current) {
          var t = X(qe.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Le(t) {
      return "";
    }
    var ur = {};
    function Ar(t) {
      {
        var i = Oe();
        if (!i) {
          var c = typeof t == "string" ? t : t.displayName || t.name;
          c && (i = `

Check the top-level render call using <` + c + ">.");
        }
        return i;
      }
    }
    function sr(t, i) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var c = Ar(i);
        if (ur[c])
          return;
        ur[c] = !0;
        var f = "";
        t && t._owner && t._owner !== qe.current && (f = " It was passed a child from " + X(t._owner.type) + "."), _e(t), M('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, f), _e(null);
      }
    }
    function cr(t, i) {
      {
        if (typeof t != "object")
          return;
        if (Me(t))
          for (var c = 0; c < t.length; c++) {
            var f = t[c];
            xe(f) && sr(f, i);
          }
        else if (xe(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var C = ie(t);
          if (typeof C == "function" && C !== t.entries)
            for (var A = C.call(t), _; !(_ = A.next()).done; )
              xe(_.value) && sr(_.value, i);
        }
      }
    }
    function Tr(t) {
      {
        var i = t.type;
        if (i == null || typeof i == "string")
          return;
        var c;
        if (typeof i == "function")
          c = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === F || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === Y))
          c = i.propTypes;
        else
          return;
        if (c) {
          var f = X(i);
          pe(c, t.props, "prop", f, t);
        } else if (i.PropTypes !== void 0 && !Fe) {
          Fe = !0;
          var C = X(i);
          M("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", C || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && M("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ke(t) {
      {
        for (var i = Object.keys(t.props), c = 0; c < i.length; c++) {
          var f = i[c];
          if (f !== "children" && f !== "key") {
            _e(t), M("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), _e(null);
            break;
          }
        }
        t.ref !== null && (_e(t), M("Invalid attribute `ref` supplied to `React.Fragment`."), _e(null));
      }
    }
    var We = {};
    function Je(t, i, c, f, C, A) {
      {
        var _ = Se(t);
        if (!_) {
          var h = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = Le();
          z ? h += z : h += Oe();
          var j;
          t === null ? j = "null" : Me(t) ? j = "array" : t !== void 0 && t.$$typeof === l ? (j = "<" + (X(t.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : j = typeof t, M("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, h);
        }
        var I = wr(t, i, c, C, A);
        if (I == null)
          return I;
        if (_) {
          var Z = i.children;
          if (Z !== void 0)
            if (f)
              if (Me(Z)) {
                for (var Ee = 0; Ee < Z.length; Ee++)
                  cr(Z[Ee], t);
                Object.freeze && Object.freeze(Z);
              } else
                M("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              cr(Z, t);
        }
        if (ge.call(i, "key")) {
          var ye = X(t), K = Object.keys(i).filter(function(jr) {
            return jr !== "key";
          }), He = K.length > 0 ? "{key: someKey, " + K.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!We[ye + He]) {
            var Dr = K.length > 0 ? "{" + K.join(": ..., ") + ": ...}" : "{}";
            M(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, He, ye, Dr, ye), We[ye + He] = !0;
          }
        }
        return t === J ? ke(I) : Tr(I), I;
      }
    }
    function Pr(t, i, c) {
      return Je(t, i, c, !0);
    }
    function xr(t, i, c) {
      return Je(t, i, c, !1);
    }
    var Or = xr, kr = Pr;
    Qe.Fragment = J, Qe.jsx = Or, Qe.jsxs = kr;
  }()), Qe;
}
var ht;
function Jt() {
  return ht || (ht = 1, process.env.NODE_ENV === "production" ? hr.exports = qt() : hr.exports = Kt()), hr.exports;
}
var Qt = Jt();
export {
  Yt as a,
  Xt as d,
  Qt as j,
  bt as r
};
