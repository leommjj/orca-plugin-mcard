var jsxRuntime = { exports: {} };
const _global_React = React;
var reactJsxRuntime_development = {};
var hasRequiredReactJsxRuntime_development;
function requireReactJsxRuntime_development() {
  if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
  hasRequiredReactJsxRuntime_development = 1;
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  {
    (function() {
      var React2 = _global_React;
      var REACT_ELEMENT_TYPE = Symbol.for("react.element");
      var REACT_PORTAL_TYPE = Symbol.for("react.portal");
      var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
      var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
      var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
      var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
      var REACT_CONTEXT_TYPE = Symbol.for("react.context");
      var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
      var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
      var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
      var REACT_MEMO_TYPE = Symbol.for("react.memo");
      var REACT_LAZY_TYPE = Symbol.for("react.lazy");
      var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
      var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== "object") {
          return null;
        }
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === "function") {
          return maybeIterator;
        }
        return null;
      }
      var ReactSharedInternals = React2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function error(format) {
        {
          {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning("error", format, args);
          }
        }
      }
      function printWarning(level, format, args) {
        {
          var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
          var stack = ReactDebugCurrentFrame2.getStackAddendum();
          if (stack !== "") {
            format += "%s";
            args = args.concat([stack]);
          }
          var argsWithFormat = args.map(function(item) {
            return String(item);
          });
          argsWithFormat.unshift("Warning: " + format);
          Function.prototype.apply.call(console[level], console, argsWithFormat);
        }
      }
      var enableScopeAPI = false;
      var enableCacheElement = false;
      var enableTransitionTracing = false;
      var enableLegacyHidden = false;
      var enableDebugTracing = false;
      var REACT_MODULE_REFERENCE;
      {
        REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
      }
      function isValidElementType(type) {
        if (typeof type === "string" || typeof type === "function") {
          return true;
        }
        if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
          return true;
        }
        if (typeof type === "object" && type !== null) {
          if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
          // types supported by any Flight configuration anywhere since
          // we don't know which Flight build this will end up being used
          // with.
          type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
            return true;
          }
        }
        return false;
      }
      function getWrappedName(outerType, innerType, wrapperName) {
        var displayName = outerType.displayName;
        if (displayName) {
          return displayName;
        }
        var functionName = innerType.displayName || innerType.name || "";
        return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
      }
      function getContextName(type) {
        return type.displayName || "Context";
      }
      function getComponentNameFromType(type) {
        if (type == null) {
          return null;
        }
        {
          if (typeof type.tag === "number") {
            error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
          }
        }
        if (typeof type === "function") {
          return type.displayName || type.name || null;
        }
        if (typeof type === "string") {
          return type;
        }
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
        }
        if (typeof type === "object") {
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              var context = type;
              return getContextName(context) + ".Consumer";
            case REACT_PROVIDER_TYPE:
              var provider = type;
              return getContextName(provider._context) + ".Provider";
            case REACT_FORWARD_REF_TYPE:
              return getWrappedName(type, type.render, "ForwardRef");
            case REACT_MEMO_TYPE:
              var outerName = type.displayName || null;
              if (outerName !== null) {
                return outerName;
              }
              return getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE: {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;
              try {
                return getComponentNameFromType(init(payload));
              } catch (x) {
                return null;
              }
            }
          }
        }
        return null;
      }
      var assign = Object.assign;
      var disabledDepth = 0;
      var prevLog;
      var prevInfo;
      var prevWarn;
      var prevError;
      var prevGroup;
      var prevGroupCollapsed;
      var prevGroupEnd;
      function disabledLog() {
      }
      disabledLog.__reactDisabledLog = true;
      function disableLogs() {
        {
          if (disabledDepth === 0) {
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd;
            var props = {
              configurable: true,
              enumerable: true,
              value: disabledLog,
              writable: true
            };
            Object.defineProperties(console, {
              info: props,
              log: props,
              warn: props,
              error: props,
              group: props,
              groupCollapsed: props,
              groupEnd: props
            });
          }
          disabledDepth++;
        }
      }
      function reenableLogs() {
        {
          disabledDepth--;
          if (disabledDepth === 0) {
            var props = {
              configurable: true,
              enumerable: true,
              writable: true
            };
            Object.defineProperties(console, {
              log: assign({}, props, {
                value: prevLog
              }),
              info: assign({}, props, {
                value: prevInfo
              }),
              warn: assign({}, props, {
                value: prevWarn
              }),
              error: assign({}, props, {
                value: prevError
              }),
              group: assign({}, props, {
                value: prevGroup
              }),
              groupCollapsed: assign({}, props, {
                value: prevGroupCollapsed
              }),
              groupEnd: assign({}, props, {
                value: prevGroupEnd
              })
            });
          }
          if (disabledDepth < 0) {
            error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
          }
        }
      }
      var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
      var prefix;
      function describeBuiltInComponentFrame(name, source, ownerFn) {
        {
          if (prefix === void 0) {
            try {
              throw Error();
            } catch (x) {
              var match = x.stack.trim().match(/\n( *(at )?)/);
              prefix = match && match[1] || "";
            }
          }
          return "\n" + prefix + name;
        }
      }
      var reentry = false;
      var componentFrameCache;
      {
        var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
        componentFrameCache = new PossiblyWeakMap();
      }
      function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) {
          return "";
        }
        {
          var frame = componentFrameCache.get(fn);
          if (frame !== void 0) {
            return frame;
          }
        }
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher;
        {
          previousDispatcher = ReactCurrentDispatcher.current;
          ReactCurrentDispatcher.current = null;
          disableLogs();
        }
        try {
          if (construct) {
            var Fake = function() {
              throw Error();
            };
            Object.defineProperty(Fake.prototype, "props", {
              set: function() {
                throw Error();
              }
            });
            if (typeof Reflect === "object" && Reflect.construct) {
              try {
                Reflect.construct(Fake, []);
              } catch (x) {
                control = x;
              }
              Reflect.construct(fn, [], Fake);
            } else {
              try {
                Fake.call();
              } catch (x) {
                control = x;
              }
              fn.call(Fake.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x) {
              control = x;
            }
            fn();
          }
        } catch (sample) {
          if (sample && control && typeof sample.stack === "string") {
            var sampleLines = sample.stack.split("\n");
            var controlLines = control.stack.split("\n");
            var s = sampleLines.length - 1;
            var c = controlLines.length - 1;
            while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
              c--;
            }
            for (; s >= 1 && c >= 0; s--, c--) {
              if (sampleLines[s] !== controlLines[c]) {
                if (s !== 1 || c !== 1) {
                  do {
                    s--;
                    c--;
                    if (c < 0 || sampleLines[s] !== controlLines[c]) {
                      var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                      if (fn.displayName && _frame.includes("<anonymous>")) {
                        _frame = _frame.replace("<anonymous>", fn.displayName);
                      }
                      {
                        if (typeof fn === "function") {
                          componentFrameCache.set(fn, _frame);
                        }
                      }
                      return _frame;
                    }
                  } while (s >= 1 && c >= 0);
                }
                break;
              }
            }
          }
        } finally {
          reentry = false;
          {
            ReactCurrentDispatcher.current = previousDispatcher;
            reenableLogs();
          }
          Error.prepareStackTrace = previousPrepareStackTrace;
        }
        var name = fn ? fn.displayName || fn.name : "";
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
        {
          if (typeof fn === "function") {
            componentFrameCache.set(fn, syntheticFrame);
          }
        }
        return syntheticFrame;
      }
      function describeFunctionComponentFrame(fn, source, ownerFn) {
        {
          return describeNativeComponentFrame(fn, false);
        }
      }
      function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
      }
      function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) {
          return "";
        }
        if (typeof type === "function") {
          {
            return describeNativeComponentFrame(type, shouldConstruct(type));
          }
        }
        if (typeof type === "string") {
          return describeBuiltInComponentFrame(type);
        }
        switch (type) {
          case REACT_SUSPENSE_TYPE:
            return describeBuiltInComponentFrame("Suspense");
          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame("SuspenseList");
        }
        if (typeof type === "object") {
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
              return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_LAZY_TYPE: {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;
              try {
                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
              } catch (x) {
              }
            }
          }
        }
        return "";
      }
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var loggedTypeFailures = {};
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame.setExtraStackFrame(stack);
          } else {
            ReactDebugCurrentFrame.setExtraStackFrame(null);
          }
        }
      }
      function checkPropTypes(typeSpecs, values, location, componentName, element) {
        {
          var has = Function.call.bind(hasOwnProperty);
          for (var typeSpecName in typeSpecs) {
            if (has(typeSpecs, typeSpecName)) {
              var error$1 = void 0;
              try {
                if (typeof typeSpecs[typeSpecName] !== "function") {
                  var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  err.name = "Invariant Violation";
                  throw err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ex) {
                error$1 = ex;
              }
              if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                setCurrentlyValidatingElement(null);
              }
              if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);
                error("Failed %s type: %s", location, error$1.message);
                setCurrentlyValidatingElement(null);
              }
            }
          }
        }
      }
      var isArrayImpl = Array.isArray;
      function isArray(a) {
        return isArrayImpl(a);
      }
      function typeName(value) {
        {
          var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
          var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          return type;
        }
      }
      function willCoercionThrow(value) {
        {
          try {
            testStringCoercion(value);
            return false;
          } catch (e) {
            return true;
          }
        }
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        {
          if (willCoercionThrow(value)) {
            error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
            return testStringCoercion(value);
          }
        }
      }
      var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
      var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };
      var specialPropKeyWarningShown;
      var specialPropRefWarningShown;
      function hasValidRef(config) {
        {
          if (hasOwnProperty.call(config, "ref")) {
            var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.ref !== void 0;
      }
      function hasValidKey(config) {
        {
          if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.key !== void 0;
      }
      function warnIfStringRefCannotBeAutoConverted(config, self) {
        {
          if (typeof config.ref === "string" && ReactCurrentOwner.current && self) ;
        }
      }
      function defineKeyPropWarningGetter(props, displayName) {
        {
          var warnAboutAccessingKey = function() {
            if (!specialPropKeyWarningShown) {
              specialPropKeyWarningShown = true;
              error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
      }
      function defineRefPropWarningGetter(props, displayName) {
        {
          var warnAboutAccessingRef = function() {
            if (!specialPropRefWarningShown) {
              specialPropRefWarningShown = true;
              error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
      }
      var ReactElement = function(type, key, ref, self, source, owner, props) {
        var element = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: REACT_ELEMENT_TYPE,
          // Built-in properties that belong on the element
          type,
          key,
          ref,
          props,
          // Record the component responsible for creating this element.
          _owner: owner
        };
        {
          element._store = {};
          Object.defineProperty(element._store, "validated", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
          });
          Object.defineProperty(element, "_self", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
          });
          Object.defineProperty(element, "_source", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
          });
          if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
          }
        }
        return element;
      };
      function jsxDEV(type, config, maybeKey, source, self) {
        {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          if (maybeKey !== void 0) {
            {
              checkKeyStringCoercion(maybeKey);
            }
            key = "" + maybeKey;
          }
          if (hasValidKey(config)) {
            {
              checkKeyStringCoercion(config.key);
            }
            key = "" + config.key;
          }
          if (hasValidRef(config)) {
            ref = config.ref;
            warnIfStringRefCannotBeAutoConverted(config, self);
          }
          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              props[propName] = config[propName];
            }
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          if (key || ref) {
            var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
            if (key) {
              defineKeyPropWarningGetter(props, displayName);
            }
            if (ref) {
              defineRefPropWarningGetter(props, displayName);
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
      }
      var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
      var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement$1(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
          } else {
            ReactDebugCurrentFrame$1.setExtraStackFrame(null);
          }
        }
      }
      var propTypesMisspellWarningShown;
      {
        propTypesMisspellWarningShown = false;
      }
      function isValidElement(object) {
        {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
      }
      function getDeclarationErrorAddendum() {
        {
          if (ReactCurrentOwner$1.current) {
            var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
      }
      function getSourceInfoErrorAddendum(source) {
        {
          return "";
        }
      }
      var ownerHasKeyUseWarning = {};
      function getCurrentComponentErrorInfo(parentType) {
        {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
      }
      function validateExplicitKey(element, parentType) {
        {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          setCurrentlyValidatingElement$1(element);
          error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
          setCurrentlyValidatingElement$1(null);
        }
      }
      function validateChildKeys(node, parentType) {
        {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
      }
      function validatePropTypes(element) {
        {
          var type = element.type;
          if (type === null || type === void 0 || typeof type === "string") {
            return;
          }
          var propTypes;
          if (typeof type === "function") {
            propTypes = type.propTypes;
          } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          type.$$typeof === REACT_MEMO_TYPE)) {
            propTypes = type.propTypes;
          } else {
            return;
          }
          if (propTypes) {
            var name = getComponentNameFromType(type);
            checkPropTypes(propTypes, element.props, "prop", name, element);
          } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true;
            var _name = getComponentNameFromType(type);
            error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
          }
          if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
            error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
          }
        }
      }
      function validateFragmentProps(fragment) {
        {
          var keys = Object.keys(fragment.props);
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (key !== "children" && key !== "key") {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
              setCurrentlyValidatingElement$1(null);
              break;
            }
          }
          if (fragment.ref !== null) {
            setCurrentlyValidatingElement$1(fragment);
            error("Invalid attribute `ref` supplied to `React.Fragment`.");
            setCurrentlyValidatingElement$1(null);
          }
        }
      }
      var didWarnAboutKeySpread = {};
      function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
        {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendum();
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
          }
          var element = jsxDEV(type, props, key, source, self);
          if (element == null) {
            return element;
          }
          if (validType) {
            var children = props.children;
            if (children !== void 0) {
              if (isStaticChildren) {
                if (isArray(children)) {
                  for (var i = 0; i < children.length; i++) {
                    validateChildKeys(children[i], type);
                  }
                  if (Object.freeze) {
                    Object.freeze(children);
                  }
                } else {
                  error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                }
              } else {
                validateChildKeys(children, type);
              }
            }
          }
          {
            if (hasOwnProperty.call(props, "key")) {
              var componentName = getComponentNameFromType(type);
              var keys = Object.keys(props).filter(function(k) {
                return k !== "key";
              });
              var beforeExample = keys.length > 0 ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
              if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                var afterExample = keys.length > 0 ? "{" + keys.join(": ..., ") + ": ...}" : "{}";
                error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                didWarnAboutKeySpread[componentName + beforeExample] = true;
              }
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
      }
      function jsxWithValidationStatic(type, props, key) {
        {
          return jsxWithValidation(type, props, key, true);
        }
      }
      function jsxWithValidationDynamic(type, props, key) {
        {
          return jsxWithValidation(type, props, key, false);
        }
      }
      var jsx = jsxWithValidationDynamic;
      var jsxs = jsxWithValidationStatic;
      reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
      reactJsxRuntime_development.jsx = jsx;
      reactJsxRuntime_development.jsxs = jsxs;
    })();
  }
  return reactJsxRuntime_development;
}
{
  jsxRuntime.exports = requireReactJsxRuntime_development();
}
var jsxRuntimeExports = jsxRuntime.exports;
const mcardStyles = '/* ========== 三栏布局容器 ========== */\n.inbox-webview {\n  display: none;\n  width: 0;\n  height: 1px;\n}\n.mcard-shell {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  min-height: 0;\n  overflow: hidden;\n  background: var(--orca-color-bg-1, #ffffff);\n  font-family: inherit;\n  color: var(--orca-color-text-1, #333333);\n}\n\n/* ========== 最左侧图标导航栏 ========== */\n.mcard-sidebar {\n  width: 64px;\n  background: var(--orca-color-bg-1, #fff);\n  border-right: 1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 60%, transparent);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px 0 16px;\n  flex-shrink: 0;\n  height: 100%;\n}\n\n.mcard-sidebar-toggle {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  flex-shrink: 0;\n  padding: 0;\n  transition: background 0.2s;\n}\n\n.mcard-sidebar-toggle:hover {\n  background: color-mix(in srgb, var(--mcard-accent, var(--orca-color-primary-5, #4a90d9)) 12%, transparent);\n}\n\n.mcard-hamburger-line {\n  display: block;\n  width: 18px;\n  height: 2px;\n  border-radius: 2px;\n  background: #666;\n}\n\n.mcard-sidebar-nav {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  flex: 1;\n  width: 100%;\n  padding: 0 8px;\n}\n\n.mcard-nav-item {\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border-radius: 10px;\n  position: relative;\n  transition: all 0.2s ease;\n  color: var(--orca-color-text-2, #555);\n  background: transparent;\n  border: none;\n  font-size: 20px;\n  margin: 0 auto;\n}\n\n.mcard-nav-item:hover {\n  background: var(--orca-color-bg-2, #f9f9f9);\n  color: var(--orca-color-text-1, #333);\n}\n\n.mcard-nav-item.active {\n  background: color-mix(in srgb, var(--mcard-accent, var(--orca-color-primary-5, #4a90d9)) 15%, transparent);\n  color: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n}\n\n.mcard-nav-item.active::before {\n  content: "";\n  position: absolute;\n  left: -8px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 3px;\n  height: 22px;\n  background: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n  border-radius: 0 3px 3px 0;\n}\n\n.mcard-nav-tooltip {\n  position: absolute;\n  left: calc(100% + 8px);\n  top: 50%;\n  transform: translateY(-50%);\n  background: var(--orca-color-text-2, #555);\n  color: var(--orca-color-bg-2, #f5f5f5);\n  font-size: 12px;\n  padding: 4px 8px;\n  border-radius: 4px;\n  white-space: nowrap;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 0.15s ease;\n  z-index: 10;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n\n.mcard-nav-item:hover .mcard-nav-tooltip {\n  opacity: 1;\n}\n\n.mcard-sidebar-bottom {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding-top: 10px;\n  border-top: 1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 40%, transparent);\n  margin-top: 4px;\n  width: 100%;\n}\n\n/* ========== 中间信息侧栏 ========== */\n.mcard-info-sidebar {\n  width: 240px;\n  background: var(--orca-color-bg-1, #fff);\n  border-right: 1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 60%, transparent);\n  padding: 12px 16px 16px;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  flex-shrink: 0;\n  min-height: 0;\n  scrollbar-width: thin;\n  transition: width 0.25s ease, padding 0.25s ease, opacity 0.2s ease;\n}\n\n.mcard-info-sidebar.collapsed {\n  width: 0;\n  padding: 0;\n  opacity: 0;\n  overflow: hidden;\n  border-right: none;\n}\n\n.mcard-info-sidebar::-webkit-scrollbar {\n  width: 4px;\n}\n\n.mcard-info-sidebar::-webkit-scrollbar-thumb {\n  background: color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 50%, transparent);\n  border-radius: 2px;\n}\n\n/* 搜索栏 */\n.mcard-main > .mcard-search-box {\n  margin: 8px 24px 0;\n  flex-shrink: 0;\n}\n\n.mcard-search-box {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 10px;\n  background: var(--orca-color-bg-1, #fff);\n  border: 1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 70%, transparent);\n  border-radius: 8px;\n  margin-bottom: 12px;\n  transition: border-color 0.15s ease;\n}\n\n.mcard-search-box:focus-within {\n  border-color: color-mix(in srgb, var(--mcard-accent, var(--orca-color-primary-5, #4a90d9)) 40%, var(--orca-color-gray-3, #e0e0e0));\n}\n\n.mcard-search-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 13px;\n  color: var(--orca-color-text-1, #333);\n  font-family: inherit;\n  min-width: 0;\n}\n\n.mcard-search-input::placeholder {\n  color: var(--orca-color-gray-5, #999);\n}\n\n.mcard-close-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: none;\n  border: 1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 70%, transparent);\n  border-radius: 8px;\n  cursor: pointer;\n  color: var(--orca-color-gray-5, #999);\n  padding: 0 10px;\n  height: 32px;\n  flex-shrink: 0;\n  transition: color 0.15s, background 0.15s, border-color 0.15s;\n}\n\n.mcard-close-btn:hover {\n  color: var(--orca-color-text-1, #333);\n  background: var(--orca-color-bg-3, #f0f0f0);\n  border-color: var(--orca-color-gray-4, #ccc);\n}\n\n/* 统计 */\n.mcard-stats {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 14px;\n  padding: 0 4px;\n}\n\n.mcard-stat-item {\n  text-align: center;\n  flex: 1;\n}\n\n.mcard-stat-num {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n  margin-bottom: 2px;\n  line-height: 1.2;\n}\n\n.mcard-stat-label {\n  font-size: 11px;\n  color: var(--orca-color-gray-5, #999);\n}\n\n/* ========== 信息栏热力图 ========== */\n.mcard-heatmap-container {\n  margin-bottom: 20px;\n  position: relative;\n  overflow: visible;\n  flex-shrink: 0;\n}\n\n.mcard-heatmap {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  grid-template-rows: repeat(7, 1fr);\n  gap: 4px;\n  margin-bottom: 8px;\n}\n\n.mcard-heatmap-cell {\n  width: 100%;\n  aspect-ratio: 1;\n  background-color: #ebedf0;\n  border-radius: 5px;\n  cursor: pointer;\n  position: relative;\n  transition: all 0.2s;\n}\n\n.mcard-heatmap-cell.level-1 {\n  background-color: #9be9a8;\n}\n\n.mcard-heatmap-cell.level-2 {\n  background-color: #40c463;\n}\n\n.mcard-heatmap-cell.level-3 {\n  background-color: #30a14e;\n}\n\n.mcard-heatmap-cell.level-4 {\n  background-color: #216e39;\n}\n\n.mcard-heatmap-cell:hover {\n  transform: scale(1.1);\n  box-shadow: 0 0 0 2px #40c463;\n}\n\n.mcard-heatmap-cell.selected {\n  box-shadow: 0 0 0 2px #216e39;\n}\n\n.mcard-heatmap-months {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  gap: 3px;\n  margin-top: 6px;\n  font-size: 11px;\n  color: var(--orca-color-gray-5, #999);\n}\n\n.mcard-heatmap-months span {\n  text-align: left;\n  white-space: nowrap;\n}\n\n/* 菜单项（全部笔记、每日回顾等） */\n.mcard-menu-list {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  margin-bottom: 14px;\n}\n\n.mcard-menu-item {\n  display: flex;\n  align-items: center;\n  padding: 8px 10px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  color: var(--orca-color-text-2, #555);\n  border: none;\n  background: transparent;\n  font-family: inherit;\n  font-size: 13px;\n  text-align: left;\n  width: 100%;\n}\n\n.mcard-menu-item:hover {\n  background: var(--orca-color-gray-2, #f0f0f0);\n}\n\n.mcard-menu-item.active {\n  background: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n  color: #ffffff;\n  font-weight: 500;\n}\n\n.mcard-menu-icon {\n  margin-right: 10px;\n  font-size: 15px;\n  width: 20px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n.mcard-menu-text {\n  flex: 1;\n  line-height: 1.3;\n}\n\n.mcard-menu-count {\n  font-size: 12px;\n  color: var(--orca-color-gray-5, #999);\n  font-variant-numeric: tabular-nums;\n  margin-left: 6px;\n}\n\n.mcard-menu-item.active .mcard-menu-count {\n  color: #ffffff;\n  opacity: 0.85;\n}\n\n/* 段落标题 */\n.mcard-section-title {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n  margin: 10px 0 6px;\n  padding: 0 4px;\n  letter-spacing: 0.02em;\n}\n\n/* 标签列表 */\n.mcard-tag-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n  padding: 0 4px;\n  margin-bottom: 14px;\n}\n\n.mcard-tag-chip {\n  font-size: 12px;\n  padding: 3px 9px;\n  border-radius: 12px;\n  border: 1px solid var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n  cursor: pointer;\n  background: var(--orca-color-bg-2, #f5f5f5);\n  color: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n  transition: all 0.15s ease;\n  font-family: inherit;\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n}\n\n.mcard-tag-chip:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);\n}\n\n.mcard-tag-chip.active {\n  background: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n  color: #ffffff;\n  font-weight: 600;\n}\n\n.mcard-tag-chip-count {\n  font-size: 11px;\n  opacity: 0.7;\n}\n\n.mcard-tag-chip.pinned {\n  border-color: #e8a735;\n  background: #fff8e8;\n  color: #b8860b;\n}\n\n.mcard-tag-pin-icon {\n  font-size: 10px;\n  margin-right: 1px;\n}\n\n/* 标签右键菜单 */\n.mcard-tag-menu-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 10000;\n  background: transparent;\n}\n\n.mcard-tag-menu-dropdown {\n  position: fixed;\n  background: #ffffff;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);\n  padding: 4px 0;\n  min-width: 160px;\n  z-index: 10001;\n}\n\n.mcard-tag-menu-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 14px;\n  cursor: pointer;\n  font-size: 13px;\n  color: #333;\n  transition: background 0.15s;\n}\n\n.mcard-tag-menu-item:hover {\n  background: #f5f5f5;\n}\n\n.mcard-tag-menu-item.danger {\n  color: #e53935;\n}\n\n.mcard-tag-menu-item.danger:hover {\n  background: #fef0f0;\n}\n\n.mcard-tag-menu-icon {\n  font-size: 14px;\n  width: 20px;\n  text-align: center;\n}\n\n/* 重命名标签弹窗 */\n.mcard-tag-rename-modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);\n  padding: 24px;\n  min-width: 320px;\n  z-index: 10002;\n}\n\n.mcard-tag-rename-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 14px;\n}\n\n.mcard-tag-rename-input {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  font-size: 14px;\n  outline: none;\n  transition: border-color 0.2s;\n  box-sizing: border-box;\n}\n\n.mcard-tag-rename-input:focus {\n  border-color: #4a90d9;\n}\n\n.mcard-tag-rename-hint {\n  font-size: 12px;\n  color: #999;\n  margin-top: 8px;\n  margin-bottom: 16px;\n}\n\n.mcard-tag-rename-actions {\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n}\n\n.mcard-tag-rename-cancel {\n  padding: 6px 16px;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  background: #fff;\n  color: #666;\n  cursor: pointer;\n  font-size: 13px;\n}\n\n.mcard-tag-rename-cancel:hover {\n  background: #f5f5f5;\n}\n\n.mcard-tag-rename-save {\n  padding: 6px 16px;\n  border: none;\n  border-radius: 6px;\n  background: #4a90d9;\n  color: #fff;\n  cursor: pointer;\n  font-size: 13px;\n}\n\n.mcard-tag-rename-save:hover {\n  background: #3a7bc8;\n}\n\n.mcard-tag-rename-danger {\n  padding: 6px 16px;\n  border: none;\n  border-radius: 6px;\n  background: #e53935;\n  color: #fff;\n  cursor: pointer;\n  font-size: 13px;\n}\n\n.mcard-tag-rename-danger:hover {\n  background: #c62828;\n}\n\n.mcard-filter-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 12px;\n  margin-bottom: 12px;\n  background: color-mix(in srgb, var(--orca-color-primary-5, #4a90d9) 8%, transparent);\n  border: 1px solid color-mix(in srgb, var(--orca-color-primary-5, #4a90d9) 30%, transparent);\n  border-radius: 8px;\n  font-size: 12px;\n}\n\n.mcard-filter-label {\n  color: var(--orca-color-text-2, #555);\n}\n\n.mcard-filter-clear {\n  background: transparent;\n  border: none;\n  color: var(--orca-color-primary-5, #4a90d9);\n  font-size: 12px;\n  cursor: pointer;\n  padding: 2px 6px;\n  border-radius: 4px;\n  transition: background 0.15s;\n}\n\n.mcard-filter-clear:hover {\n  background: color-mix(in srgb, var(--orca-color-primary-5, #4a90d9) 15%, transparent);\n}\n\n/* ========== 右侧主内容区 ========== */\n.mcard-main {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: var(--orca-color-bg-1, #fff);\n  overflow: hidden;\n  min-width: 0;\n  min-height: 0;\n  height: 100%;\n}\n\n/* 输入区 */\n.mcard-input-area {\n  padding: 8px 24px 16px;\n  border-bottom: 1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 40%, transparent);\n  flex-shrink: 0;\n  background: var(--orca-color-bg-1, #fff);\n}\n\n.mcard-input-box {\n  background-color: var(--orca-color-bg-1, #fff);\n  border: 1px solid #cccccc;\n  border-radius: 6px;\n  padding: 12px 16px;\n  transition: all 0.3s ease;\n  position: relative;\n}\n\n.mcard-input-box.focused {\n  border-color: var(--orca-color-primary-5, #4a90d9);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--orca-color-primary-5, #4a90d9) 15%, transparent);\n  background-color: var(--orca-color-bg-1, #fff);\n}\n\n.mcard-input-wrapper {\n  position: relative;\n  margin-bottom: 12px;\n  overflow: visible;\n}\n\n.mcard-input-field {\n  width: 100%;\n  min-height: 80px;\n  max-height: 240px;\n  border: none;\n  outline: none;\n  background: transparent;\n  color: var(--orca-color-text-1, #333);\n  font-size: var(--mcard-font-size, 14.5px);\n  line-height: 1.8;\n  font-family: inherit;\n  resize: none;\n  overflow-y: auto;\n  scrollbar-width: none;\n}\n\n.mcard-input-field::-webkit-scrollbar {\n  display: none;\n}\n\n.mcard-input-field::placeholder {\n  color: var(--orca-color-gray-5, #999);\n}\n\n.mcard-input-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 10px;\n}\n\n.mcard-toolbar-left {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.mcard-toolbar-icon {\n  background: transparent;\n  border: none;\n  color: var(--orca-color-gray-5, #999);\n  font-size: 14px;\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n}\n\n.mcard-toolbar-icon svg {\n  width: 16px;\n  height: 16px;\n}\n\n.mcard-toolbar-icon:hover {\n  background: var(--orca-color-gray-2, #f0f0f0);\n  color: var(--orca-color-text-2, #555);\n}\n\n.mcard-send-btn {\n  background: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n  color: #ffffff;\n  border: none;\n  border-radius: 8px;\n  width: 32px;\n  height: 32px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n}\n\n.mcard-send-btn svg {\n  width: 18px;\n  height: 18px;\n}\n\n.mcard-send-btn:hover:not(:disabled) {\n  opacity: 0.9;\n  transform: scale(1.05);\n}\n\n.mcard-send-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.mcard-tag-picker {\n  position: absolute;\n  left: 80px;\n  width: 260px;\n  background: #ffffff;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);\n  z-index: 200;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\n.mcard-tag-picker-title {\n  padding: 6px 10px;\n  font-size: 12px;\n  color: var(--orca-color-gray-5, #999);\n  border-bottom: 1px solid #eeeeee;\n  background: color-mix(in srgb, var(--orca-color-bg-2, #f5f5f5) 50%, transparent);\n}\n\n.mcard-tag-picker-search {\n  width: 100%;\n  border: none;\n  outline: none;\n  background: transparent;\n  padding: 8px 12px;\n  font-size: 13px;\n  color: var(--orca-color-text-2, #555);\n  border-bottom: 1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 40%, transparent);\n  box-sizing: border-box;\n}\n\n.mcard-tag-picker-list {\n  max-height: 220px;\n  overflow-y: auto;\n  scrollbar-width: thin;\n}\n\n.mcard-tag-picker-item {\n  padding: 6px 10px;\n  cursor: pointer;\n  transition: background 0.15s;\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n\n.mcard-tag-picker-item:hover,\n.mcard-tag-picker-item.active {\n  background: var(--orca-color-gray-2, #f0f0f0);\n}\n\n.mcard-tag-picker-item-hash {\n  color: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n  font-weight: 600;\n}\n\n.mcard-tag-picker-item-name {\n  color: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n  font-weight: 500;\n}\n\n/* 笔记列表（平铺） */\n.mcard-notes-list {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px 24px;\n  scrollbar-width: thin;\n  min-height: 0;\n}\n\n.mcard-notes-list::-webkit-scrollbar {\n  width: 6px;\n}\n\n.mcard-notes-list::-webkit-scrollbar-thumb {\n  background: color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 50%, transparent);\n  border-radius: 3px;\n}\n\n.mcard-date-group {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n  margin: 12px 0 10px;\n  padding: 0 4px;\n  letter-spacing: 0.01em;\n}\n\n.mcard-note-card {\n  position: relative;\n  background-color: color-mix(in srgb, var(--orca-color-bg-2, #f5f5f5) 30%, transparent);\n  border: 1px solid #cccccc;\n  border-radius: 6px;\n  padding: 14px;\n  margin-bottom: 16px;\n  transition: all 0.2s;\n  cursor: pointer;\n  width: 100%;\n  box-sizing: border-box;\n  overflow: visible;\n  user-select: text;\n  -webkit-user-select: text;\n}\n\n.mcard-note-card:hover {\n  border-color: var(--orca-color-primary-5, #4a90d9);\n  box-shadow: 0 2px 8px color-mix(in srgb, var(--orca-color-gray-5, #999) 12%, transparent);\n}\n\n.mcard-note-card.pinned {\n  border-color: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n  background-color: color-mix(in srgb, var(--mcard-accent, var(--orca-color-primary-5, #4a90d9)) 5%, transparent);\n}\n\n.mcard-note-card.pinned::before {\n  content: "📌";\n  position: absolute;\n  top: 6px;\n  right: 6px;\n  font-size: 10px;\n  opacity: 0.6;\n}\n\n.mcard-note-image {\n  max-width: 100%;\n  max-height: 300px;\n  border-radius: 8px;\n  margin: 6px 0;\n  display: block;\n  cursor: zoom-in;\n  object-fit: contain;\n}\n\n/* 图片画廊 */\n.mcard-gallery-header {\n  padding: 16px 16px 8px;\n}\n\n.mcard-gallery-header-top {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n\n.mcard-gallery-header-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #333;\n}\n\n.mcard-gallery-header-meta {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #999;\n}\n\n.mcard-gallery-header-dot {\n  opacity: 0.5;\n}\n\n.mcard-gallery-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 8px;\n}\n\n.mcard-gallery-tag-chip {\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  color: #666;\n  background: #f0f0f0;\n  cursor: pointer;\n  transition: all 0.2s;\n  user-select: none;\n}\n\n.mcard-gallery-tag-chip:hover {\n  background: #e0e0e0;\n}\n\n.mcard-gallery-tag-chip.active {\n  background: #4a90d9;\n  color: #fff;\n}\n\n.mcard-gallery-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n  gap: 8px;\n  padding: 12px;\n}\n\n.mcard-gallery-item {\n  aspect-ratio: 1;\n  overflow: hidden;\n  border-radius: 8px;\n  cursor: pointer;\n  background: #f5f5f5;\n  position: relative;\n}\n\n.mcard-gallery-img-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.mcard-gallery-item img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.2s;\n}\n\n.mcard-gallery-item:hover img {\n  transform: scale(1.05);\n}\n\n.mcard-gallery-overlay {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 8px;\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 60%);\n  opacity: 0;\n  transition: opacity 0.2s;\n  pointer-events: none;\n}\n\n.mcard-gallery-item:hover .mcard-gallery-overlay {\n  opacity: 1;\n}\n\n.mcard-gallery-overlay-tags {\n  color: #8cc8ff;\n  font-size: 11px;\n  margin-bottom: 4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.mcard-gallery-overlay-text {\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 12px;\n  line-height: 1.4;\n  margin-bottom: 4px;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.mcard-gallery-overlay-date {\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 10px;\n}\n\n/* 卡片闪烁高亮 */\n.mcard-note-card-flash {\n  animation: mcard-card-flash 2s ease-out;\n}\n\n@keyframes mcard-card-flash {\n  0% { background-color: rgba(74, 144, 217, 0.3); }\n  100% { background-color: transparent; }\n}\n\n/* 图片预览模态框 */\n.mcard-image-preview-modal {\n  position: fixed;\n  inset: 0;\n  z-index: 99999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.mcard-image-preview-overlay {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.9);\n}\n\n.mcard-image-preview-toolbar {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.mcard-image-preview-close {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.15);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n\n.mcard-image-preview-close:hover {\n  background: rgba(255, 255, 255, 0.3);\n}\n\n.mcard-image-preview-container {\n  position: relative;\n  z-index: 1;\n  max-width: 90vw;\n  max-height: 90vh;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.mcard-image-preview-img {\n  max-width: none;\n  max-height: none;\n  user-select: none;\n  transform-origin: center center;\n  transition: transform 0.05s ease-out;\n}\n\n.mcard-image-preview-img.dragging {\n  cursor: grabbing;\n  transition: none;\n}\n\n.mcard-image-preview-hint {\n  position: absolute;\n  bottom: 24px;\n  left: 50%;\n  transform: translateX(-50%);\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 12px;\n  padding: 4px 12px;\n  border-radius: 12px;\n  background: rgba(0, 0, 0, 0.4);\n  opacity: 0;\n  transition: opacity 0.3s;\n  pointer-events: none;\n  white-space: nowrap;\n}\n\n.mcard-image-preview-hint.show {\n  opacity: 1;\n}\n\n.mcard-note-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-width: 0;\n  overflow: hidden;\n}\n\n.mcard-note-actions {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-shrink: 0;\n  opacity: 0;\n  transition: opacity 0.2s;\n  position: relative;\n  pointer-events: auto;\n}\n\n.mcard-note-card:hover .mcard-note-actions,\n.mcard-note-actions:focus-within {\n  opacity: 1;\n  pointer-events: auto;\n}\n\n.mcard-note-menu-btn {\n  color: var(--orca-color-gray-5, #999);\n  cursor: pointer;\n  font-size: 14px;\n  width: 28px;\n  height: 28px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  transition: all 0.15s ease;\n  background: transparent;\n  border: none;\n  padding: 0;\n  outline: none;\n  -webkit-appearance: none;\n  appearance: none;\n  line-height: 0;\n  font-family: inherit;\n  pointer-events: auto;\n}\n\n.mcard-note-menu-btn svg {\n  width: 18px;\n  height: 18px;\n  display: block;\n  pointer-events: none;\n}\n\n.mcard-note-menu-btn:hover {\n  background: color-mix(in srgb, var(--orca-color-text-2, #555) 8%, transparent);\n  color: var(--orca-color-text-2, #555);\n}\n\n.mcard-note-menu-btn:active {\n  background: color-mix(in srgb, var(--orca-color-text-2, #555) 15%, transparent);\n  transform: scale(0.95);\n}\n\n.mcard-note-menu-dropdown {\n  background: var(--orca-color-bg-2, #ffffff);\n  border: 1px solid color-mix(in srgb, var(--orca-color-gray-3, #e5e5e5) 40%, transparent);\n  border-radius: 6px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06);\n  min-width: 160px;\n  padding: 5px 0;\n  overflow: hidden;\n  user-select: none;\n}\n\n.mcard-note-menu-dropdown .mcard-menu-item {\n  display: flex;\n  align-items: center;\n  padding: 6px 12px;\n  font-size: 13px;\n  color: var(--orca-color-text-2, #333);\n  cursor: pointer;\n  transition: background 0.12s ease, color 0.12s ease;\n  line-height: 1.4;\n  margin: 0 4px;\n  border-radius: 4px;\n  gap: 0;\n}\n\n.mcard-note-menu-dropdown .mcard-menu-item:hover {\n  background: var(--orca-color-gray-2, #f0f0f0);\n}\n\n.mcard-note-menu-dropdown .mcard-menu-item.danger {\n  color: var(--orca-color-error, #e53935);\n}\n\n.mcard-note-menu-dropdown .mcard-menu-item.danger:hover {\n  background: color-mix(in srgb, var(--orca-color-error, #e53935) 10%, transparent);\n}\n\n.mcard-note-menu-dropdown .mcard-menu-icon {\n  width: 16px;\n  height: 16px;\n  margin-right: 8px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: inherit;\n  flex-shrink: 0;\n}\n\n.mcard-note-menu-dropdown .mcard-menu-text {\n  flex: 1;\n}\n\n.mcard-note-menu-dropdown .mcard-menu-divider {\n  height: 1px;\n  background: var(--orca-color-gray-3, #e5e5e5);\n  margin: 4px 12px;\n  opacity: 0.6;\n}\n\n.mcard-note-date {\n  font-size: 12px;\n  color: var(--orca-color-text-2, #555);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex-shrink: 1;\n  min-width: 0;\n  user-select: text;\n  -webkit-user-select: text;\n}\n\n.mcard-note-menu {\n  color: var(--orca-color-gray-5, #999);\n  cursor: pointer;\n  font-size: 14px;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  transition: all 0.2s;\n}\n\n.mcard-note-menu:hover {\n  background-color: var(--orca-color-gray-2, #f0f0f0);\n  color: var(--orca-color-text-2, #555);\n}\n\n.mcard-note-menu svg {\n  width: 14px;\n  height: 14px;\n}\n\n.mcard-note-content {\n  font-size: var(--mcard-font-size, 14.5px);\n  line-height: 2;\n  color: var(--orca-color-text-1, #333);\n  margin-top: 6px;\n  margin-bottom: 0px;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  max-width: 100%;\n  overflow: hidden;\n  user-select: text;\n  -webkit-user-select: text;\n  white-space: pre-wrap;\n}\n\n/* Markdown 渲染内容 */\n.mcard-note-content-rendered {\n  font-size: var(--mcard-font-size, 14.5px);\n  line-height: 1.8;\n  color: #333;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  user-select: text;\n  -webkit-user-select: text;\n  white-space: normal;\n  display: block;\n}\n\n.mcard-note-content-rendered p {\n  margin: 0 0 8px;\n}\n\n.mcard-note-content-rendered p:last-child {\n  margin-bottom: 0;\n}\n\n.mcard-note-content-rendered h1,\n.mcard-note-content-rendered h2,\n.mcard-note-content-rendered h3,\n.mcard-note-content-rendered h4,\n.mcard-note-content-rendered h5,\n.mcard-note-content-rendered h6 {\n  margin: 12px 0 6px;\n  font-weight: 600;\n  line-height: 1.4;\n}\n\n.mcard-note-content-rendered h1 { font-size: 1.5em; }\n.mcard-note-content-rendered h2 { font-size: 1.3em; }\n.mcard-note-content-rendered h3 { font-size: 1.15em; }\n.mcard-note-content-rendered h4 { font-size: 1em; }\n.mcard-note-content-rendered h5 { font-size: 0.9em; }\n.mcard-note-content-rendered h6 { font-size: 0.85em; color: #999; }\n\n.mcard-note-content-rendered ul,\n.mcard-note-content-rendered ol {\n  margin: 4px 0 8px;\n  padding-left: 0;\n  list-style-type: none;\n  display: block;\n}\n\n.mcard-note-content-rendered ol {\n  counter-reset: list-counter;\n}\n\n.mcard-note-content-rendered li {\n  position: relative;\n  padding-left: 20px;\n  margin: 2px 0;\n  display: block;\n}\n\n.mcard-note-content-rendered ol li {\n  counter-increment: list-counter;\n}\n\n.mcard-note-content-rendered ol li::before {\n  content: counter(list-counter) ".";\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: #999;\n  font-size: inherit;\n}\n\n.mcard-note-content-rendered ul li:not(.task-item)::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  height: 6px;\n  width: 6px;\n  margin-top: -5px;\n  border-radius: 50%;\n  background-color: #999;\n}\n\n.mcard-note-content-rendered .task-list {\n  list-style: none;\n  padding-left: 4px;\n}\n\n.mcard-note-content-rendered .task-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 6px;\n}\n\n.mcard-note-content-rendered .mcard-task-checkbox {\n  margin-top: 4px;\n  cursor: default;\n}\n\n.mcard-note-content-rendered blockquote {\n  margin: 8px 0;\n  padding: 8px 12px;\n  border-left: 3px solid #4a90d9;\n  background: #f9f9f9;\n  border-radius: 0 4px 4px 0;\n  color: #666;\n}\n\n.mcard-note-content-rendered blockquote p:last-child {\n  margin-bottom: 0;\n}\n\n.mcard-note-content-rendered pre {\n  margin: 8px 0;\n  padding: 12px;\n  background: #f5f5f5;\n  border-radius: 6px;\n  overflow-x: auto;\n  font-size: 0.9em;\n  line-height: 1.5;\n}\n\n.mcard-note-content-rendered code {\n  padding: 2px 5px;\n  background: #f0f0f0;\n  border-radius: 3px;\n  font-size: 0.9em;\n  font-family: "SF Mono", Monaco, Consolas, "Courier New", monospace;\n}\n\n.mcard-note-content-rendered pre code {\n  padding: 0;\n  background: none;\n}\n\n.mcard-note-content-rendered a {\n  color: #4a90d9;\n  text-decoration: none;\n}\n\n.mcard-note-content-rendered a:hover {\n  text-decoration: underline;\n}\n\n.mcard-note-content-rendered strong {\n  font-weight: 600;\n}\n\n.mcard-note-content-rendered em {\n  font-style: italic;\n}\n\n.mcard-note-content-rendered del {\n  text-decoration: line-through;\n  color: #999;\n}\n\n.mcard-note-content-rendered hr {\n  border: none;\n  border-top: 1px solid #e0e0e0;\n  margin: 12px 0;\n}\n\n.mcard-note-content-rendered .mcard-inline-tag {\n  color: #4a90d9;\n  cursor: pointer;\n  font-weight: 500;\n}\n\n.mcard-note-content-rendered .mcard-inline-tag:hover {\n  text-decoration: underline;\n}\n\n.mcard-note-content-rendered .mcard-note-image {\n  max-width: 100%;\n  max-height: 300px;\n  border-radius: 8px;\n  margin: 6px 0;\n  display: block;\n  cursor: zoom-in;\n  object-fit: contain;\n}\n\n.mcard-inline-tag {\n  display: inline;\n  color: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n  font-weight: 500;\n  cursor: pointer;\n  padding: 1px 4px;\n  border-radius: 4px;\n  transition: background 0.12s ease, color 0.12s ease;\n}\n\n.mcard-inline-tag:hover {\n  background: color-mix(in srgb, var(--mcard-accent, var(--orca-color-primary-5, #4a90d9)) 12%, transparent);\n}\n\n.mcard-inline-tag.active {\n  background: color-mix(in srgb, var(--mcard-accent, var(--orca-color-primary-5, #4a90d9)) 20%, transparent);\n  color: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n}\n\n.mcard-note-tags {\n  margin-top: 8px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n\n.mcard-note-tag {\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 10px;\n  border: 1px solid var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n  background: color-mix(in srgb, var(--mcard-accent, var(--orca-color-primary-5, #4a90d9)) 12%, transparent);\n  color: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n  display: inline-block;\n}\n\n/* 空状态 */\n.mcard-empty {\n  text-align: center;\n  padding: 60px 20px;\n  color: var(--orca-color-gray-5, #999);\n  font-size: 13px;\n}\n\n.mcard-empty-icon {\n  font-size: 40px;\n  margin-bottom: 12px;\n  opacity: 0.4;\n}\n\n/* 回顾视图 */\n.mcard-review-card {\n  background: var(--orca-color-bg-1, #fff);\n  border: 1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 70%, transparent);\n  border-radius: 12px;\n  padding: 24px;\n  margin: 20px 24px;\n}\n\n.mcard-review-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  padding-bottom: 12px;\n  border-bottom: 1px dashed var(--orca-color-gray-3, #e0e0e0);\n}\n\n.mcard-review-title {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--orca-color-text-1, #333);\n}\n\n.mcard-review-progress {\n  font-size: 12px;\n  color: var(--orca-color-gray-5, #999);\n  font-variant-numeric: tabular-nums;\n}\n\n.mcard-review-content {\n  font-size: calc(var(--mcard-font-size, 14.5px) + 1px);\n  line-height: 1.75;\n  color: var(--orca-color-text-1, #333);\n  white-space: pre-wrap;\n  word-break: break-word;\n  min-height: 60px;\n}\n\n.mcard-review-actions {\n  display: flex;\n  gap: 8px;\n  margin-top: 16px;\n  padding-top: 14px;\n  border-top: 1px dashed var(--orca-color-gray-3, #e0e0e0);\n}\n\n.mcard-review-btn {\n  flex: 1;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  font-family: inherit;\n}\n\n.mcard-review-btn.primary {\n  background: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n  color: #ffffff;\n}\n\n.mcard-review-btn.secondary {\n  background: var(--orca-color-bg-1, #fff);\n  border: 1px solid var(--orca-color-gray-3, #e0e0e0);\n  color: var(--orca-color-text-2, #555);\n}\n\n.mcard-review-btn:hover {\n  opacity: 0.9;\n}\n\n/* Loading spinner */\n.mcard-spinner {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2px solid var(--orca-color-gray-3, #e0e0e0);\n  border-top-color: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n  border-radius: 50%;\n  animation: mcard-spin 0.8s linear infinite;\n}\n\n@keyframes mcard-spin {\n  to { transform: rotate(360deg); }\n}\n\n/* 每日回顾统计栏 */\n.mcard-daily-stats {\n  display: flex;\n  gap: 10px;\n  padding: 0 24px;\n  margin-bottom: 14px;\n}\n\n.mcard-daily-stat {\n  flex: 1;\n  background: var(--orca-color-bg-2, #f5f5f5);\n  border: 1px solid var(--orca-color-gray-3, #e0e0e0);\n  border-radius: 10px;\n  padding: 10px;\n  text-align: center;\n}\n\n.mcard-daily-stat-num {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n  line-height: 1.2;\n}\n\n.mcard-daily-stat-label {\n  font-size: 11px;\n  color: var(--orca-color-gray-5, #999);\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  margin-top: 2px;\n}\n\n/* 紧凑模式 */\n.mcard-root.compact .mcard-note-card {\n  padding: 8px 12px;\n  margin-bottom: 6px;\n}\n\n.mcard-root.compact .mcard-note-content {\n  font-size: calc(var(--mcard-font-size, 14.5px) - 1px);\n  line-height: 1.55;\n}\n\n.mcard-root.compact .mcard-note-header {\n  margin-bottom: 2px;\n}\n\n.mcard-root.compact .mcard-note-date {\n  font-size: 11px;\n}\n\n.mcard-root.compact .mcard-note-tags {\n  margin-top: 4px;\n  gap: 4px;\n}\n\n/* 模态框 */\n.mcard-capture-modal {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  font-family: inherit;\n}\n\n.mcard-capture-modal-inner {\n  width: 100%;\n  max-width: 460px;\n  background: #fff;\n  border-radius: 14px;\n  padding: 18px 18px 14px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n  border: 1px solid #e0e0e0;\n}\n\n.mcard-capture-modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n\n.mcard-capture-modal-title {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--orca-color-gray-5, #999);\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n}\n\n.mcard-capture-modal-close {\n  background: transparent;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: var(--orca-color-gray-5, #999);\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-family: inherit;\n}\n\n.mcard-capture-modal-close:hover {\n  background: var(--orca-color-gray-2, #f0f0f0);\n  color: var(--orca-color-text-2, #555);\n}\n\n.mcard-capture-modal textarea {\n  width: 100%;\n  min-height: 140px;\n  max-height: 320px;\n  resize: vertical;\n  border: none;\n  outline: none;\n  background: #fff;\n  color: #333;\n  font-size: 15px;\n  line-height: 1.7;\n  font-family: inherit;\n}\n\n.mcard-capture-modal-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 12px;\n  border-top: 1px solid var(--orca-color-gray-3, #e0e0e0);\n  gap: 8px;\n}\n\n.mcard-capture-modal-hint {\n  font-size: 11px;\n  color: var(--orca-color-gray-5, #999);\n}\n\n/* 隐藏旧的 mcard-root 基础样式，改为 shell 布局 */\n.mcard-root {\n  height: 100%;\n  width: 100%;\n  min-height: 0;\n  overflow: hidden;\n  display: block;\n  padding: 0 !important;\n  background: var(--orca-color-bg-1, #fff);\n  position: relative;\n}\n\n.mcard-root[data-mcard-theme="morandi"] {\n  --mcard-accent: var(--mcard-morandi-color, #9CAF88);\n  background: var(--mcard-morandi-bg, #F7F8F5);\n}\n\n.mcard-root[data-mcard-theme="siyuan"] {\n  --mcard-accent: var(--orca-color-primary-5, #4a90d9);\n}\n\n.mcard-root[data-mcard-theme="original"] {\n  --mcard-accent: var(--orca-color-primary-5, #2d7a7a);\n}\n\n/* ========== 统计视图 ========== */\n.mcard-stats-view {\n  padding: 20px 24px;\n  overflow-y: auto;\n  height: 100%;\n  box-sizing: border-box;\n}\n\n.mcard-stats-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n\n.mcard-stats-title {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--orca-color-text-1, #333);\n}\n\n.mcard-stats-year-select {\n  padding: 6px 12px;\n  border-radius: 8px;\n  border: 1px solid var(--orca-color-gray-3, #e0e0e0);\n  background: var(--orca-color-bg-2, #f5f5f5);\n  color: var(--orca-color-text-1, #333);\n  font-size: 13px;\n  cursor: pointer;\n  outline: none;\n}\n\n.mcard-stats-year-select:hover {\n  border-color: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n}\n\n.mcard-stats-cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));\n  gap: 12px;\n  margin-bottom: 24px;\n}\n\n.mcard-stat-card {\n  background: var(--orca-color-bg-1, #fff);\n  border: 1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 70%, transparent);\n  border-radius: 12px;\n  padding: 16px 12px;\n  text-align: center;\n  transition: all 0.15s ease;\n}\n\n.mcard-stat-card:hover {\n  border-color: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n  box-shadow: 0 4px 12px color-mix(in srgb, var(--mcard-accent, var(--orca-color-primary-5, #4a90d9)) 12%, transparent);\n}\n\n.mcard-stat-card-num {\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n  line-height: 1.2;\n}\n\n.mcard-stat-card-label {\n  font-size: 12px;\n  color: var(--orca-color-gray-5, #999);\n  margin-top: 4px;\n}\n\n.mcard-stats-section {\n  background: var(--orca-color-bg-1, #fff);\n  border: 1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 70%, transparent);\n  border-radius: 12px;\n  padding: 20px;\n  margin-bottom: 16px;\n}\n\n.mcard-stats-subtitle {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--orca-color-text-1, #333);\n  margin-bottom: 4px;\n}\n\n.mcard-stats-meta {\n  font-size: 12px;\n  color: var(--orca-color-gray-5, #999);\n  margin-bottom: 16px;\n}\n\n.mcard-stats-empty {\n  text-align: center;\n  color: var(--orca-color-gray-5, #999);\n  padding: 24px;\n  font-size: 13px;\n}\n\n/* 每日记录柱状图 */\n.mcard-monthly-bars {\n  display: flex;\n  align-items: flex-end;\n  gap: 4px;\n  height: 120px;\n  padding: 0 4px;\n  margin-bottom: 8px;\n}\n\n.mcard-monthly-bar {\n  flex: 1;\n  background: color-mix(in srgb, var(--mcard-accent, var(--orca-color-primary-5, #4a90d9)) 30%, transparent);\n  border-radius: 4px 4px 0 0;\n  position: relative;\n  min-height: 4px;\n  transition: all 0.15s ease;\n}\n\n.mcard-monthly-bar:hover {\n  background: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n}\n\n.mcard-monthly-bar-label {\n  position: absolute;\n  top: -18px;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 10px;\n  color: var(--orca-color-gray-5, #999);\n  white-space: nowrap;\n}\n\n.mcard-monthly-days {\n  display: flex;\n  gap: 4px;\n  padding: 0 4px;\n}\n\n.mcard-monthly-days span {\n  flex: 1;\n  text-align: center;\n  font-size: 10px;\n  color: var(--orca-color-gray-5, #999);\n}\n\n/* 月度分布柱状图 */\n.mcard-yearly-bars {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n  height: 120px;\n  padding: 0 4px;\n  margin-bottom: 8px;\n}\n\n.mcard-yearly-bar {\n  flex: 1;\n  background: color-mix(in srgb, var(--mcard-accent, var(--orca-color-primary-5, #4a90d9)) 40%, transparent);\n  border-radius: 6px 6px 0 0;\n  position: relative;\n  min-height: 6px;\n  transition: all 0.15s ease;\n}\n\n.mcard-yearly-bar:hover {\n  background: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n}\n\n.mcard-yearly-bar-label {\n  position: absolute;\n  top: -18px;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 11px;\n  color: var(--orca-color-gray-5, #999);\n  white-space: nowrap;\n}\n\n.mcard-yearly-months {\n  display: flex;\n  gap: 10px;\n  padding: 0 4px;\n}\n\n.mcard-yearly-months span {\n  flex: 1;\n  text-align: center;\n  font-size: 11px;\n  color: var(--orca-color-gray-5, #999);\n}\n\n/* 常用标签列表 */\n.mcard-tags-list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.mcard-tag-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.mcard-tag-name {\n  font-size: 13px;\n  padding: 3px 10px;\n  border-radius: 12px;\n  border: 1px solid;\n  flex-shrink: 0;\n  min-width: 80px;\n  text-align: center;\n}\n\n.mcard-tag-bar-wrapper {\n  flex: 1;\n  height: 8px;\n  background: color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 40%, transparent);\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.mcard-tag-bar {\n  height: 100%;\n  border-radius: 4px;\n  transition: width 0.3s ease;\n}\n\n.mcard-tag-count {\n  font-size: 12px;\n  color: var(--orca-color-gray-5, #999);\n  min-width: 30px;\n  text-align: right;\n}\n\n/* 标签云 */\n.mcard-tag-cloud {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding: 8px 0;\n}\n\n.mcard-tag-cloud-item {\n  padding: 6px 14px;\n  border-radius: 16px;\n  font-weight: 500;\n  transition: all 0.15s ease;\n  cursor: pointer;\n  border: 1px solid color-mix(in srgb, currentColor 20%, transparent);\n}\n\n.mcard-tag-cloud-item:hover {\n  transform: scale(1.08);\n  box-shadow: 0 4px 12px color-mix(in srgb, currentColor 20%, transparent);\n}\n\n/* ========== 设置视图 ========== */\n.mcard-settings-area {\n  flex: 1;\n  display: flex;\n  height: 100%;\n  overflow: hidden;\n  background: var(--orca-color-bg-1, #fff);\n}\n\n.mcard-settings-nav {\n  width: 200px;\n  min-width: 200px;\n  border-right: 1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 60%, transparent);\n  padding: 20px 12px;\n  overflow-y: auto;\n  box-sizing: border-box;\n}\n\n.mcard-settings-nav-header {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--orca-color-text-1, #333);\n  padding: 4px 12px 16px;\n}\n\n.mcard-settings-nav-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  font-size: 14px;\n  color: var(--orca-color-text-2, #555);\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n  margin-bottom: 2px;\n}\n\n.mcard-settings-nav-item:hover {\n  background: color-mix(in srgb, var(--orca-color-bg-2, #f5f5f5) 80%, transparent);\n}\n\n.mcard-settings-nav-item.active {\n  background: color-mix(in srgb, var(--mcard-accent, var(--orca-color-primary-5, #4a90d9)) 12%, transparent);\n  color: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n  font-weight: 500;\n}\n\n.mcard-settings-nav-icon {\n  font-size: 16px;\n  flex-shrink: 0;\n}\n\n.mcard-settings-content {\n  flex: 1;\n  padding: 24px 36px;\n  overflow-y: auto;\n  box-sizing: border-box;\n  max-width: 720px;\n}\n\n.mcard-settings-section-disabled {\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n.mcard-settings-section {\n  background: var(--orca-color-bg-1, #fff);\n  border: 1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 70%, transparent);\n  border-radius: 12px;\n  padding: 18px 20px;\n  margin-bottom: 14px;\n}\n\n.mcard-settings-subtitle {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--orca-color-text-1, #333);\n  margin-bottom: 6px;\n}\n\n.mcard-settings-desc {\n  font-size: 12px;\n  color: var(--orca-color-gray-5, #999);\n  margin-bottom: 12px;\n}\n\n.mcard-settings-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.mcard-settings-label {\n  font-size: 13px;\n  color: var(--orca-color-text-2, #555);\n}\n\n.mcard-settings-select {\n  padding: 6px 12px;\n  border-radius: 8px;\n  border: 1px solid var(--orca-color-gray-3, #e0e0e0);\n  background: var(--orca-color-bg-1, #fff);\n  color: var(--orca-color-text-1, #333);\n  font-size: 13px;\n  cursor: pointer;\n  outline: none;\n}\n\n.mcard-settings-select:hover {\n  border-color: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n}\n\n.mcard-settings-input {\n  padding: 6px 10px;\n  border-radius: 8px;\n  border: 1px solid var(--orca-color-gray-3, #e0e0e0);\n  background: var(--orca-color-bg-1, #fff);\n  color: var(--orca-color-text-1, #333);\n  font-size: 13px;\n  outline: none;\n  width: 100px;\n}\n\n.mcard-settings-input:focus {\n  border-color: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n}\n\n.mcard-settings-btn {\n  padding: 6px 14px;\n  border-radius: 8px;\n  border: 1px solid var(--orca-color-gray-3, #e0e0e0);\n  background: var(--orca-color-bg-1, #fff);\n  color: var(--orca-color-text-1, #333);\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n\n.mcard-settings-btn:hover {\n  background: var(--orca-color-bg-2, #f5f5f5);\n  border-color: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n}\n\n.mcard-settings-btn-danger {\n  color: #d32f2f;\n  border-color: #e57373;\n}\n.mcard-settings-btn-danger:hover {\n  background: #fde8e8;\n  border-color: #d32f2f;\n}\n\n.mcard-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0,0,0,0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n}\n\n.mcard-confirm-dialog {\n  background: var(--orca-color-bg-1, #fff);\n  border-radius: 12px;\n  padding: 24px;\n  max-width: 380px;\n  width: 90%;\n  box-shadow: 0 8px 32px rgba(0,0,0,0.2);\n}\n\n.mcard-confirm-title {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--orca-color-text-1, #333);\n  margin-bottom: 8px;\n}\n\n.mcard-confirm-desc {\n  font-size: 13px;\n  color: var(--orca-color-gray-5, #999);\n  line-height: 1.5;\n  margin-bottom: 20px;\n}\n\n.mcard-confirm-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n\n.mcard-settings-unit {\n  font-size: 12px;\n  color: var(--orca-color-gray-5, #999);\n}\n\n/* Toggle Switch */\n.mcard-toggle {\n  position: relative;\n  display: inline-block;\n  width: 44px;\n  height: 24px;\n  cursor: pointer;\n}\n\n.mcard-toggle input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.mcard-toggle-slider {\n  position: absolute;\n  inset: 0;\n  background: color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 60%, transparent);\n  border-radius: 24px;\n  transition: 0.2s;\n}\n\n.mcard-toggle-slider::before {\n  content: "";\n  position: absolute;\n  height: 18px;\n  width: 18px;\n  left: 3px;\n  top: 3px;\n  background: white;\n  border-radius: 50%;\n  transition: 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n\n.mcard-toggle input:checked + .mcard-toggle-slider {\n  background: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n}\n\n.mcard-toggle input:checked + .mcard-toggle-slider::before {\n  transform: translateX(20px);\n}\n\n/* 主题色选择 */\n.mcard-theme-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.mcard-theme-swatch {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  padding: 0;\n}\n\n.mcard-theme-swatch:hover {\n  transform: scale(1.1);\n}\n\n.mcard-theme-swatch.active {\n  border-color: var(--orca-color-text-1, #333);\n  box-shadow: 0 0 0 2px var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n}\n\n/* ========== 热力图（GitHub 风格贡献图） ========== */\n.mcard-contribution-section {\n  background: var(--orca-color-bg-1, #fff);\n  border-radius: 8px;\n  padding: 18px 20px;\n  margin-bottom: 12px;\n  border: 1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 25%, transparent);\n  box-shadow: none;\n}\n\n.mcard-contribution-body {\n  display: flex;\n  gap: 8px;\n  align-items: stretch;\n  width: 100%;\n}\n\n.mcard-contribution-columns {\n  display: flex;\n  gap: 4px;\n  width: 100%;\n}\n\n.mcard-contribution-column {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  min-width: 0;\n}\n\n.mcard-contribution-cell {\n  width: 100%;\n  aspect-ratio: 1;\n  border-radius: 3px;\n  background: #ebedf0;\n  cursor: pointer;\n  transition: transform 0.15s;\n  min-height: 0;\n}\n\n.mcard-contribution-cell:hover {\n  transform: scale(1.2);\n  box-shadow: 0 0 0 1px #40c463;\n}\n\n.mcard-contribution-cell.level-empty {\n  background: #ebedf0;\n  opacity: 0.5;\n  cursor: default;\n}\n\n.mcard-contribution-cell.level-empty:hover {\n  transform: none;\n  box-shadow: none;\n}\n\n.mcard-contribution-cell.level-1 {\n  background: #9be9a8;\n}\n\n.mcard-contribution-cell.level-2 {\n  background: #40c463;\n}\n\n.mcard-contribution-cell.level-3 {\n  background: #30a14e;\n}\n\n.mcard-contribution-cell.level-4 {\n  background: #216e39;\n}\n\n.mcard-contribution-months {\n  position: relative;\n  margin-top: 8px;\n  height: 16px;\n  width: 100%;\n}\n\n.mcard-contribution-month-label {\n  position: absolute;\n  transform: translateX(-50%);\n  font-size: 11px;\n  color: var(--orca-color-gray-5, #999);\n  white-space: nowrap;\n  line-height: 1;\n}\n\n.mcard-contribution-legend {\n  display: none;\n}\n\n/* ========== 长笔记自动折叠 ========== */\n.mcard-note-content.collapsed {\n  max-height: var(--collapse-max-height, 116px);\n  overflow: hidden;\n  -webkit-mask-image: linear-gradient(to bottom, black calc(100% - 36px), transparent 100%);\n  mask-image: linear-gradient(to bottom, black calc(100% - 36px), transparent 100%);\n}\n\n.mcard-note-content.expanded {\n  max-height: none;\n  -webkit-mask-image: none;\n  mask-image: none;\n}\n\n.mcard-expand-btn {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 2px;\n  margin-top: 4px;\n  color: var(--orca-color-gray-5, #999);\n  font-size: 13px;\n  cursor: pointer;\n  user-select: none;\n  transition: color 0.2s;\n  background: transparent;\n  border: none;\n  font-family: inherit;\n  padding: 2px 0;\n}\n\n.mcard-expand-btn:hover {\n  color: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n}\n\n.mcard-expand-btn svg {\n  width: 14px;\n  height: 14px;\n  transition: transform 0.2s;\n}\n\n.mcard-expand-btn.expanded svg {\n  transform: rotate(180deg);\n}\n\n/* ========== 批注（Memo）样式 ========== */\n.mcard-note-memo-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: transparent;\n  border: none;\n  color: var(--orca-color-gray-5, #999);\n  font-size: 12px;\n  cursor: pointer;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-family: inherit;\n  transition: background 0.15s, color 0.15s;\n}\n\n.mcard-note-memo-btn:hover {\n  background: var(--orca-color-gray-1, #f5f5f5);\n  color: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n}\n\n/* 头部圆形图标按钮 */\n.mcard-note-memo-btn-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  color: var(--orca-color-gray-5, #999);\n  cursor: pointer;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  font-family: inherit;\n  transition: background 0.15s, color 0.15s;\n  position: relative;\n}\n\n.mcard-note-memo-btn-icon:hover {\n  background: var(--orca-color-gray-1, #f5f5f5);\n  color: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n}\n\n.mcard-note-memo-btn-icon svg {\n  width: 14px;\n  height: 14px;\n}\n\n.mcard-note-memo-badge {\n  position: absolute;\n  top: 0;\n  right: 0;\n  min-width: 14px;\n  height: 14px;\n  padding: 0 3px;\n  background: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n  color: #fff;\n  font-size: 10px;\n  font-weight: 600;\n  line-height: 14px;\n  text-align: center;\n  border-radius: 7px;\n  transform: translate(2px, -2px);\n  pointer-events: none;\n}\n\n.mcard-note-memos {\n  margin-top: 8px;\n  padding-top: 8px;\n  border-top: 1px dashed var(--orca-color-gray-3, var(--orca-color-bg-2-light));\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.mcard-note-memo-item {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 6px 8px;\n  background: var(--orca-color-gray-1, #f5f5f5);\n  border-radius: 6px;\n  font-size: 13px;\n  line-height: 1.6;\n}\n\n.mcard-note-memo-content {\n  color: var(--orca-color-text-1, #333);\n  word-break: break-word;\n}\n\n.mcard-note-memo-actions {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 4px;\n}\n\n.mcard-note-memo-date {\n  font-size: 11px;\n  color: var(--orca-color-gray-5, #999);\n}\n\n.mcard-note-memo-menu-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 2px;\n  opacity: 0.5;\n  transition: opacity 0.15s;\n  border-radius: 3px;\n  color: var(--orca-color-text-2, #555);\n  display: flex;\n  align-items: center;\n}\n\n.mcard-note-memo-menu-btn:hover {\n  opacity: 1;\n  background: var(--orca-color-bg-2, #f5f5f5);\n}\n\n.mcard-note-memo-input-wrap {\n  margin-top: 6px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.mcard-note-memo-input {\n  width: 100%;\n  box-sizing: border-box;\n  resize: none;\n  border: 1px solid var(--orca-color-gray-1, #f5f5f5);\n  border-radius: 6px;\n  padding: 8px;\n  font-size: 13px;\n  line-height: 1.5;\n  font-family: inherit;\n  background: var(--orca-color-bg-1, #fff);\n  color: var(--orca-color-text-1, #333);\n  outline: none;\n  transition: border-color 0.2s;\n}\n\n.mcard-note-memo-input:focus {\n  border-color: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n}\n\n.mcard-note-memo-input-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 6px;\n}\n\n.mcard-note-memo-cancel {\n  background: transparent;\n  border: none;\n  color: var(--orca-color-gray-5, #999);\n  font-size: 12px;\n  cursor: pointer;\n  padding: 4px 10px;\n  border-radius: 4px;\n  font-family: inherit;\n}\n\n.mcard-note-memo-cancel:hover {\n  background: var(--orca-color-gray-1, #f5f5f5);\n}\n\n.mcard-note-memo-save {\n  background: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n  border: none;\n  color: #fff;\n  font-size: 12px;\n  cursor: pointer;\n  padding: 4px 14px;\n  border-radius: 4px;\n  font-family: inherit;\n  font-weight: 500;\n  transition: opacity 0.15s;\n}\n\n.mcard-note-memo-save:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.mcard-note-memo-save:not(:disabled):hover {\n  opacity: 0.85;\n}\n\n/* 详情面板批注 */\n.mcard-detail-memo-bar {\n  margin-top: 16px;\n}\n\n.mcard-detail-memos {\n  margin-top: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n/* 批注笔记底部显示原始笔记引用 */\n.mcard-note-relation {\n  margin-top: 8px;\n  padding-top: 8px;\n  border-top: 1px dashed var(--orca-color-gray-3, var(--orca-color-bg-2-light));\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 6px;\n}\n\n/* 多个关联区域相邻时，只保留第一个的虚线 */\n.mcard-note-relation + .mcard-note-relation {\n  border-top: none;\n  padding-top: 0;\n  margin-top: 0;\n}\n\n.mcard-note-relation-item {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 0;\n  background: transparent;\n  border-radius: 0;\n  cursor: pointer;\n  transition: opacity 0.15s;\n  font-size: 12px;\n}\n\n.mcard-note-relation-item:hover {\n  opacity: 0.8;\n}\n\n.mcard-note-relation-item svg {\n  width: 16px;\n  height: 16px;\n  color: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n  flex-shrink: 0;\n}\n\n.mcard-note-relation-info {\n  color: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n/* 编辑模式关联显示 */\n.mcard-edit-relation-list {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 6px;\n  padding-top: 6px;\n  border-top: 1px dashed var(--orca-color-gray-3, var(--orca-color-bg-2-light));\n  margin-top: 2px;\n}\n\n.mcard-edit-relation {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 8px;\n  background: var(--orca-color-bg-2, #f5f5f5);\n  border-radius: 6px;\n  font-size: 12px;\n  max-width: 100%;\n}\n\n.mcard-edit-relation-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-bottom: 4px;\n  padding-bottom: 6px;\n  border-bottom: 1px dashed var(--orca-color-gray-3, var(--orca-color-bg-2-light));\n}\n\n.mcard-edit-parent-picker-wrapper {\n  position: relative;\n  flex: 1;\n  min-width: 120px;\n}\n\n.mcard-parent-icon {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n  width: 16px;\n  height: 16px;\n}\n\n.mcard-parent-icon svg {\n  width: 16px;\n  height: 16px;\n  color: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n}\n\n.mcard-edit-parent-search {\n  width: 100%;\n  border: none;\n  border-radius: 0;\n  padding: 4px 8px;\n  font-size: 12px;\n  outline: none;\n  background: transparent;\n  color: var(--orca-color-text-1, #333);\n  font-family: inherit;\n}\n\n.mcard-edit-parent-search:focus {\n  outline: none;\n}\n\n.mcard-edit-parent-search::placeholder {\n  color: var(--orca-color-gray-5, #999);\n}\n\n.mcard-edit-parent-picker {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: var(--orca-color-bg-1, #fff);\n  border: 1px solid var(--orca-color-gray-3, #e0e0e0);\n  border-radius: 8px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n  z-index: 100;\n  max-height: 200px;\n  overflow-y: auto;\n  margin-top: 2px;\n}\n\n.mcard-edit-parent-picker-item {\n  padding: 6px 10px;\n  font-size: 12px;\n  cursor: pointer;\n  color: var(--orca-color-text-2, #555);\n  transition: background 0.15s;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.mcard-edit-parent-picker-item:hover {\n  background: var(--orca-color-gray-2, #f0f0f0);\n}\n.mcard-picker-title {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--orca-color-text-1, #333);\n  line-height: 1.3;\n}\n.mcard-picker-content {\n  font-size: 11px;\n  color: var(--orca-color-gray-5, #999);\n  line-height: 1.3;\n  margin-top: 2px;\n}\n\n.mcard-edit-relation-parent {\n  margin-bottom: 0;\n  border-bottom: none;\n  padding-bottom: 0;\n}\n\n.mcard-edit-relation svg {\n  width: 16px;\n  height: 16px;\n  color: var(--orca-color-gray-5, #999);\n  flex-shrink: 0;\n}\n\n.mcard-edit-relation-info {\n  flex: 0 1 auto;\n  color: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 1;\n}\n\n.mcard-edit-relation-remove {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 2px;\n  border-radius: 4px;\n  color: var(--orca-color-gray-5, #999);\n  opacity: 0.5;\n  transition: all 0.15s;\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n}\n\n.mcard-edit-relation-remove:hover {\n  opacity: 1;\n  color: var(--orca-color-error, #e53935);\n  background: color-mix(in srgb, var(--orca-color-error, #e53935) 10%, transparent);\n}\n\n.mcard-edit-relation-remove svg {\n  width: 14px;\n  height: 14px;\n}\n\n/* @ 提及/引用选择器 */\n.mcard-mention-picker {\n  background: var(--orca-color-bg-2, #f5f5f5);\n  border: 1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 40%, transparent);\n  border-radius: 8px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06);\n  min-width: 280px;\n  max-width: 360px;\n  max-height: 320px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  z-index: 99999;\n}\n\n.mcard-mention-picker-list {\n  max-height: 320px;\n  overflow-y: auto;\n  padding: 4px 0;\n}\n\n.mcard-mention-picker-item {\n  padding: 10px 14px;\n  cursor: pointer;\n  transition: background 0.15s;\n  border-bottom: 1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 40%, transparent);\n}\n\n.mcard-mention-picker-item:last-child {\n  border-bottom: none;\n}\n\n.mcard-mention-picker-item:hover {\n  background: var(--orca-color-gray-2, #f0f0f0);\n}\n\n.mcard-mention-picker-date {\n  font-size: 12px;\n  color: var(--orca-color-gray-5, #999);\n  margin-bottom: 4px;\n}\n\n.mcard-mention-picker-preview {\n  font-size: 14px;\n  color: var(--orca-color-text-1, #333);\n  line-height: 1.4;\n  word-break: break-word;\n}\n\n.mcard-mention-picker-title {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--orca-color-text-1, #333);\n  line-height: 1.5;\n  word-break: break-word;\n}\n\n.mcard-mention-picker-empty {\n  padding: 20px;\n  text-align: center;\n  color: var(--orca-color-gray-5, #999);\n  font-size: 13px;\n}\n\n.mcard-mention-highlight {\n  background-color: #ffeb3b;\n  color: #000;\n  border-radius: 2px;\n  padding: 0 1px;\n}\n\n/* 内容中的 @ 引用 */\n.mcard-memo-ref {\n  display: inline;\n  padding: 1px 4px;\n  background: color-mix(in srgb, var(--orca-color-primary-5, #4285f4) 12%, transparent);\n  color: var(--orca-color-primary-5, #4285f4);\n  border-radius: 3px;\n  font-size: inherit;\n  cursor: pointer;\n  margin: 0 1px;\n  transition: background 0.2s;\n  line-height: inherit;\n  white-space: nowrap;\n  word-break: break-all;\n}\n\n.mcard-memo-ref:hover {\n  background: color-mix(in srgb, var(--orca-color-primary-5, #4285f4) 30%, transparent);\n}\n\n/* ========== Flomo 同步面板 ========== */\n.mcard-flomo-panel {\n  padding: 20px 24px;\n  overflow-y: auto;\n  height: 100%;\n  box-sizing: border-box;\n  max-width: 720px;\n}\n\n.mcard-flomo-card {\n  background: var(--orca-color-bg-1, #fff);\n  border: 1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 70%, transparent);\n  border-radius: 12px;\n  padding: 18px 20px;\n  margin-bottom: 14px;\n}\n\n.mcard-flomo-card.disabled {\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n.mcard-flomo-card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n\n.mcard-flomo-card-title {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--orca-color-text-1, #333);\n}\n\n.mcard-flomo-card-desc {\n  font-size: 13px;\n  color: var(--orca-color-gray-5, #999);\n  margin-top: 2px;\n}\n\n.mcard-flomo-badge {\n  padding: 4px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n  background: #f5f5f5;\n  color: #888;\n}\n\n.mcard-flomo-badge.success {\n  background: #40c463;\n  color: #fff;\n}\n\n.mcard-flomo-form-row {\n  margin-bottom: 12px;\n}\n\n.mcard-flomo-form-label {\n  display: block;\n  font-size: 13px;\n  margin-bottom: 6px;\n  color: var(--orca-color-text-2, #555);\n}\n\n.mcard-flomo-input {\n  width: 100%;\n  padding: 8px 12px;\n  min-height: 36px;\n  font-size: 13px;\n  border-radius: 6px;\n  border: 1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 70%, transparent);\n  background: var(--orca-color-bg-1, #fff);\n  color: var(--orca-color-text-1, #333);\n  box-sizing: border-box;\n  font-family: inherit;\n}\n\n.mcard-flomo-input:focus {\n  outline: none;\n  border-color: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n}\n\n.mcard-flomo-input:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n\n.mcard-flomo-readonly {\n  padding: 8px 12px;\n  min-height: 36px;\n  font-size: 13px;\n  border-radius: 6px;\n  background: color-mix(in srgb, var(--orca-color-bg-2, #f5f5f5) 50%, transparent);\n  color: var(--orca-color-text-2, #555);\n  display: flex;\n  align-items: center;\n}\n\n.mcard-flomo-checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--orca-color-text-2, #555);\n  cursor: pointer;\n}\n\n.mcard-flomo-checkbox-label input[type="checkbox"] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n}\n\n.mcard-flomo-form-actions {\n  display: flex;\n  gap: 10px;\n}\n\n.mcard-flomo-btn {\n  padding: 8px 16px;\n  font-size: 13px;\n  border-radius: 6px;\n  border: none;\n  cursor: pointer;\n  font-family: inherit;\n  transition: opacity 0.2s;\n}\n\n.mcard-flomo-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.mcard-flomo-btn-primary {\n  background: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n  color: #fff;\n}\n\n.mcard-flomo-btn-secondary {\n  background: color-mix(in srgb, var(--orca-color-bg-2, #f5f5f5) 80%, transparent);\n  color: var(--orca-color-text-2, #555);\n}\n\n.mcard-flomo-message {\n  margin-top: 10px;\n  padding: 8px 12px;\n  font-size: 13px;\n  border-radius: 6px;\n  background: color-mix(in srgb, var(--orca-color-bg-2, #f5f5f5) 50%, transparent);\n  color: var(--orca-color-text-2, #555);\n}\n\n/* ========== 检索式设置 ========== */\n.chart-filter-option {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.chart-filter-option label {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--orca-color-text-2, #555);\n}\n\n.chart-filter-option select {\n  padding: 6px 10px;\n  border: 1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 70%, transparent);\n  border-radius: 6px;\n  background: var(--orca-color-bg-1, #fff);\n  color: var(--orca-color-text-1, #333);\n  font-size: 13px;\n  outline: none;\n  transition: border-color 0.15s ease;\n}\n\n.chart-filter-option select:focus {\n  border-color: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n}\n\n/* 检索式弹窗布局 */\n.mcard-expr-layout {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.mcard-expr-top {\n  flex-shrink: 0;\n  overflow-y: auto;\n  max-height: 45vh;\n}\n\n.mcard-expr-bottom {\n  flex: 1;\n  display: flex;\n  min-height: 0;\n  border-top: 1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 70%, transparent);\n}\n\n.mcard-expr-sidebar {\n  width: 140px;\n  flex-shrink: 0;\n  overflow-y: auto;\n  border-right: 1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 70%, transparent);\n}\n\n.mcard-expr-main {\n  flex: 1;\n  overflow-y: auto;\n  min-width: 0;\n}\n\n/* 匹配模式切换 */\n.mcard-match-mode {\n  display: flex;\n  border: 1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 70%, transparent);\n  border-radius: 6px;\n  overflow: hidden;\n  align-self: flex-start;\n}\n\n.mcard-match-mode-btn {\n  padding: 4px 14px;\n  font-size: 12px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: var(--orca-color-text-2, #555);\n  transition: background 0.12s, color 0.12s;\n}\n\n.mcard-match-mode-btn.active {\n  background: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n  color: #fff;\n}\n\n/* 文本筛选行 */\n.mcard-text-filter-row {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n\n.mcard-text-filter-row select,\n.mcard-text-filter-row input {\n  padding: 4px 8px;\n  border: 1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 70%, transparent);\n  border-radius: 6px;\n  font-size: 12px;\n  background: var(--orca-color-bg-1, #fff);\n  color: var(--orca-color-text-1, #333);\n  outline: none;\n}\n\n.mcard-text-filter-row select { width: 90px; }\n.mcard-text-filter-row input { flex: 1; min-width: 100px; }\n\n.mcard-text-filter-row .mcard-filter-remove {\n  padding: 2px 6px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: var(--orca-color-dangerous-5, #e74c3c);\n  font-size: 14px;\n  border-radius: 4px;\n}\n\n.mcard-text-filter-row .mcard-filter-remove:hover {\n  background: color-mix(in srgb, var(--orca-color-dangerous-5, #e74c3c) 10%, transparent);\n}\n\n/* 日期范围行 */\n.mcard-date-range {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n\n.mcard-date-range input {\n  flex: 1;\n  padding: 4px 8px;\n  border: 1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 70%, transparent);\n  border-radius: 6px;\n  font-size: 12px;\n  background: var(--orca-color-bg-1, #fff);\n  color: var(--orca-color-text-1, #333);\n  outline: none;\n}\n\n.mcard-date-range span {\n  font-size: 12px;\n  color: var(--orca-color-gray-5, #999);\n}\n\n/* 布尔筛选（有无图片/引用） */\n.mcard-bool-filters {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n\n.mcard-bool-filter {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: var(--orca-color-text-2, #555);\n}\n\n.mcard-bool-filter select {\n  padding: 4px 8px;\n  border: 1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 70%, transparent);\n  border-radius: 6px;\n  font-size: 12px;\n  background: var(--orca-color-bg-1, #fff);\n  color: var(--orca-color-text-1, #333);\n  outline: none;\n}\n\n/* 检索式侧边栏项 */\n.mcard-expr-sidebar-item {\n  padding: 8px 10px;\n  cursor: pointer;\n  font-size: 12px;\n  border-bottom: 1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 40%, transparent);\n  transition: background 0.12s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.mcard-expr-sidebar-item:hover {\n  background: color-mix(in srgb, var(--orca-color-bg-3, #f0f0f0) 50%, transparent);\n}\n\n.mcard-expr-sidebar-item.active {\n  background: color-mix(in srgb, var(--mcard-accent, var(--orca-color-primary-5, #4a90d9)) 12%, transparent);\n  font-weight: 600;\n}\n\n.mcard-expr-sidebar-item-name {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.mcard-expr-sidebar-item-actions {\n  display: flex;\n  gap: 2px;\n  flex-shrink: 0;\n}\n\n.mcard-expr-sidebar-item-actions button {\n  padding: 1px 5px;\n  font-size: 10px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: var(--orca-color-gray-5, #999);\n  border-radius: 3px;\n}\n\n.mcard-expr-sidebar-item-actions button:hover {\n  background: var(--orca-color-bg-3, #f0f0f0);\n  color: var(--orca-color-text-1, #333);\n}\n\n.mcard-expr-sidebar-item-actions button:hover.danger {\n  color: var(--orca-color-dangerous-5, #e74c3c);\n}\n\n/* ========== 卡片详情面板 ========== */\n/* ========== 卡片详情弹窗 ========== */\n.mcard-detail-overlay {\n  position: absolute;\n  inset: 0;\n  z-index: 10000;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  padding-top: 5vh;\n  background: rgba(0, 0, 0, 0.4);\n  backdrop-filter: blur(4px);\n  animation: mcard-detail-fade-in 0.2s ease;\n}\n\n@keyframes mcard-detail-fade-in {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n.mcard-detail-panel {\n  width: 620px;\n  max-width: 90vw;\n  max-height: 90vh;\n  background: var(--mcard-bg, #fff);\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.18);\n  animation: mcard-detail-pop-in 0.2s ease;\n  overflow: hidden;\n}\n\n@keyframes mcard-detail-pop-in {\n  from { transform: translateY(20px); opacity: 0; }\n  to { transform: translateY(0); opacity: 1; }\n}\n\n.mcard-detail-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-bottom: 1px solid var(--mcard-border, #f0f0f0);\n  flex-shrink: 0;\n}\n\n.mcard-detail-back {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: none;\n  border: none;\n  color: #666;\n  font-size: 14px;\n  cursor: pointer;\n  padding: 6px 10px;\n  border-radius: 6px;\n  transition: background 0.15s, color 0.15s;\n}\n\n.mcard-detail-back:hover {\n  background: var(--mcard-hover-bg, #f5f5f5);\n  color: #333;\n}\n\n.mcard-detail-back svg {\n  width: 18px;\n  height: 18px;\n}\n\n.mcard-detail-meta {\n  font-size: 12px;\n  color: #999;\n}\n\n.mcard-detail-edited {\n  margin-left: 6px;\n  color: #bbb;\n}\n\n.mcard-detail-action-btn {\n  padding: 6px 14px;\n  border-radius: 6px;\n  border: 1px solid var(--mcard-border, #e0e0e0);\n  background: var(--mcard-bg, #fff);\n  color: #666;\n  font-size: 12px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n\n.mcard-detail-action-btn:hover {\n  background: var(--mcard-hover-bg, #f5f5f5);\n  border-color: #ccc;\n}\n\n.mcard-detail-action-btn.danger {\n  color: #e53935;\n  border-color: #ffcdd2;\n}\n\n.mcard-detail-action-btn.danger:hover {\n  background: #fff5f5;\n  border-color: #e53935;\n}\n\n/* 详情弹窗区块 */\n.mcard-detail-section {\n  padding: 0 20px;\n  flex-shrink: 0;\n}\n\n.mcard-detail-section + .mcard-detail-section {\n  border-top: 1px solid var(--mcard-border, #f0f0f0);\n}\n\n.mcard-detail-section-label {\n  font-size: 11px;\n  font-weight: 600;\n  color: #999;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  padding: 12px 0 8px;\n}\n\n.mcard-detail-section-label-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 0 8px;\n}\n\n.mcard-detail-section-label-row .mcard-detail-section-label {\n  padding: 0;\n}\n\n.mcard-view-toggle {\n  background: none;\n  border: 1px solid var(--mcard-border, #e0e0e0);\n  border-radius: 4px;\n  cursor: pointer;\n  padding: 3px 5px;\n  display: flex;\n  align-items: center;\n  color: #999;\n  transition: all 0.15s;\n  flex-shrink: 0;\n}\n\n.mcard-view-toggle:hover {\n  background: var(--mcard-hover-bg, #f5f5f5);\n  color: #666;\n}\n\n/* 父级引用区 */\n.mcard-detail-parents {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n/* 卡片区 */\n.mcard-detail-card {\n  padding-top: 16px;\n  padding-bottom: 16px;\n  cursor: default;\n  flex-shrink: 0;\n}\n\n.mcard-detail-card-edit {\n  padding-top: 12px;\n  padding-bottom: 8px;\n  flex-shrink: 0;\n}\n\n.mcard-detail-content {\n  font-size: 15px;\n  line-height: 1.8;\n  color: var(--mcard-text, #333);\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  word-break: break-word;\n  min-height: 100px;\n}\n\n.mcard-detail-content img {\n  max-width: 100%;\n  border-radius: 8px;\n  margin: 8px 0;\n  cursor: pointer;\n}\n\n.mcard-detail-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-top: 12px;\n}\n\n.mcard-detail-tag {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  background: var(--mcard-tag-bg, #f0f5ff);\n  color: var(--mcard-accent, #4a90d9);\n  cursor: pointer;\n  transition: all 0.15s;\n}\n\n.mcard-detail-tag:hover {\n  opacity: 0.8;\n}\n\n.mcard-detail-tag-active {\n  background: var(--mcard-accent, #4a90d9);\n  color: #fff;\n}\n\n.mcard-detail-tag-excluded {\n  background: #fde8e8;\n  color: #d32f2f;\n  text-decoration: line-through;\n  opacity: 0.7;\n}\n\n/* 子级标签 */\n.mcard-detail-child-tags {\n  flex-shrink: 0;\n}\n\n.mcard-detail-child-tags-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  padding-bottom: 12px;\n}\n\n/* 子级卡片列表 - 可滚动 */\n.mcard-detail-child-cards {\n  flex: 1;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.mcard-detail-child-cards-list {\n  flex: 1;\n  overflow-y: auto;\n  padding-bottom: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.mcard-detail-child-cards-list.mcard-child-grid {\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.mcard-detail-child-cards-list.mcard-child-grid .mcard-detail-child-card {\n  width: calc(33.33% - 7px);\n  min-width: 0;\n  box-sizing: border-box;\n}\n\n.mcard-detail-child-card {\n  background: var(--mcard-surface, #f8f9fa);\n  border-radius: 8px;\n  padding: 12px 14px;\n  cursor: pointer;\n  transition: background 0.15s;\n  border: 1px solid var(--mcard-border, #eee);\n}\n\n.mcard-detail-child-card:hover {\n  background: var(--mcard-hover-bg, #f0f0f0);\n}\n\n.mcard-detail-child-card-title {\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 4px;\n  color: var(--mcard-text, #333);\n}\n\n.mcard-detail-child-card-content {\n  font-size: 13px;\n  line-height: 1.6;\n  color: var(--mcard-text-secondary, #555);\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  word-wrap: break-word;\n  word-break: break-word;\n}\n\n.mcard-detail-child-card-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 8px;\n  gap: 8px;\n}\n\n.mcard-detail-child-card-date {\n  font-size: 11px;\n  color: #999;\n  flex-shrink: 0;\n}\n\n.mcard-detail-child-card-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n\n.mcard-detail-empty {\n  text-align: center;\n  padding: 24px 0;\n  color: #999;\n  font-size: 13px;\n}\n\n/* ========== 卡片内联编辑 ========== */\n.mcard-inline-edit {\n  margin-bottom: 0;\n}\n\n.mcard-inline-edit .mcard-input-field {\n  min-height: 100px;\n  max-height: 400px;\n}\n\n.mcard-edit-title-input {\n  width: 100%;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--orca-color-text-1, #333);\n  font-family: inherit;\n  padding: 0 0 2px;\n  margin-bottom: 0;\n}\n\n.mcard-edit-title-input::placeholder {\n  color: var(--orca-color-gray-5, #999);\n  font-weight: 400;\n}\n\n.mcard-note-title {\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--orca-color-text-1, #333);\n  margin-bottom: 4px;\n  line-height: 1.4;\n}\n\n.mcard-inline-edit-cancel {\n  padding: 4px 10px;\n  font-size: 13px;\n  color: var(--orca-color-text-2, #555);\n  background: transparent;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background 0.15s;\n  font-family: inherit;\n}\n\n.mcard-inline-edit-cancel:hover {\n  background: var(--orca-color-gray-2, #f0f0f0);\n}\n\n/* ========== 提及选择器 ========== */\n.mcard-mention-picker {\n  background: var(--orca-color-bg-2, #fff);\n  border: 1px solid var(--orca-color-gray-3, #e0e0e0);\n  border-radius: 8px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n  min-width: 260px;\n  max-width: 320px;\n  max-height: 300px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  margin-top: 4px;\n  z-index: 100;\n}\n\n.mcard-mention-picker-search {\n  padding: 8px;\n  border-bottom: 1px solid var(--orca-color-gray-3, #e0e0e0);\n}\n\n.mcard-mention-picker-search input {\n  width: 100%;\n  box-sizing: border-box;\n  border: 1px solid var(--orca-color-gray-3, #e0e0e0);\n  border-radius: 4px;\n  padding: 6px 8px;\n  font-size: 13px;\n  outline: none;\n  background: var(--orca-color-bg-1, #fff);\n  color: var(--orca-color-text-1, #333);\n  font-family: inherit;\n}\n\n.mcard-mention-picker-search input:focus {\n  border-color: var(--mcard-accent, var(--orca-color-primary-5, #4a90d9));\n}\n\n.mcard-mention-picker-list {\n  overflow-y: auto;\n  flex: 1;\n}\n\n.mcard-mention-picker-item {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 8px 12px;\n  cursor: pointer;\n  border-bottom: 1px solid var(--orca-color-bg-2-light, #f0f0f0);\n  transition: background 0.1s;\n}\n\n.mcard-mention-picker-item:last-child {\n  border-bottom: none;\n}\n\n.mcard-mention-picker-item:hover,\n.mcard-mention-picker-item.active {\n  background: var(--orca-color-gray-1, #f5f5f5);\n}\n\n.mcard-mention-picker-date {\n  font-size: 11px;\n  color: var(--orca-color-text-2-light, #999);\n}\n\n.mcard-mention-picker-preview {\n  font-size: 13px;\n  color: var(--orca-color-text-1, #333);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.mcard-mention-picker-empty {\n  padding: 20px;\n  text-align: center;\n  font-size: 13px;\n  color: var(--orca-color-text-2-light, #999);\n}\n';
let _locale = "en";
let _translations = {};
function setupL10N(locale, builtinTranslations) {
  _locale = locale;
  _translations = builtinTranslations;
}
function t(key, args, locale) {
  var _a;
  const template = ((_a = _translations[locale ?? _locale]) == null ? void 0 : _a[key]) ?? key;
  return template;
}
const zhCN = {
  "Inbox name": "收件箱名称",
  "The text used for the block where Mcard notes are placed under.": "Mcard 笔记将放在该块下。",
  "Note tag": "笔记标签",
  "The tag applied to Mcard notes.": "Mcard 笔记使用的标签。",
  "View style": "视图样式",
  "Layout style for displaying notes.": "笔记展示布局样式。",
  "List (flat)": "平铺布局",
  "Card (masonry)": "卡片布局",
  "Theme mode": "主题模式",
  "Theme color scheme.": "主题配色方案。",
  "Original (green)": "原主题（绿色）",
  "SiYuan (follow)": "跟随思源",
  "Morandi": "莫兰迪",
  "Morandi color": "莫兰迪配色",
  "Select a Morandi color.": "选择莫兰迪配色。",
  "Font size": "字体大小",
  "Note body font size (px).": "笔记正文字体大小（像素）。",
  "Compact mode": "紧凑模式",
  "Reduce spacing between cards.": "减小卡片之间的间距。",
  "Daily review count": "每日回顾数量",
  "Number of notes shown in daily review.": "每日回顾时展示的笔记数量。",
  "Sync to journal": "同步到日记",
  "Automatically place new notes under today's journal.": "自动将新笔记放置到当日日记下。",
  "Quick capture": "速记",
  "Open Mcard panel": "打开 Mcard 面板",
  "Start capture": "开始记录",
  "Capture a quick note. Supports Markdown, #tags and images.": "快速记录一条想法。支持 Markdown、#标签 和图片。",
  "Your thoughts...": "你的想法……",
  "Write it down": "写下来",
  "Note saved": "笔记已保存",
  "Failed to save note": "保存笔记失败",
  "Today": "今天",
  "Yesterday": "昨天",
  "Days ago": "天前",
  "Tags": "标签",
  "Filter by tag": "按标签筛选",
  "All notes": "全部笔记",
  "No tags": "无标签",
  "Clear filter": "清除筛选",
  "Daily review": "每日回顾",
  "Random walk": "随机漫步",
  "Shuffle": "再来一张",
  "Refresh": "刷新",
  "Hot map": "热力图",
  "Total notes": "笔记总数",
  "Show tags": "显示标签",
  "Note": "笔记",
  "of": "/",
  "No notes yet. Capture your first thought!": "还没有笔记，写下你的第一个想法吧！",
  "Markdown, #tags, images supported": "支持 Markdown、#标签、图片"
};
function extractTags$1(text) {
  const tagRegex = /#([\w\u4e00-\u9fa5][\w\u4e00-\u9fa5\-_]*)/g;
  const tags = [];
  let match;
  while ((match = tagRegex.exec(text)) !== null) {
    tags.push(match[1]);
  }
  return tags;
}
function sanitizeText(input) {
  return input.replace(/\u0000/g, "").trim();
}
const MORANDI_COLORS = [
  { key: "dusty-pink", name: "Dusty Pink", color: "#D4A5A5", bg: "#FAF6F6" },
  { key: "sage-green", name: "Sage Green", color: "#9CAF88", bg: "#F7F8F5" },
  { key: "muted-blue", name: "Muted Blue", color: "#8FA1B3", bg: "#F5F7F9" },
  { key: "warm-beige", name: "Warm Beige", color: "#C4B7A6", bg: "#FAF8F5" },
  { key: "dusty-purple", name: "Dusty Purple", color: "#A898B5", bg: "#F7F5F9" },
  { key: "terracotta", name: "Terracotta", color: "#C78D7B", bg: "#FAF6F4" },
  { key: "olive-green", name: "Olive Green", color: "#A3A380", bg: "#F8F8F4" },
  { key: "slate-blue", name: "Slate Blue", color: "#7D8A9E", bg: "#F5F6F8" },
  { key: "mauve", name: "Mauve", color: "#B8A1A8", bg: "#F8F5F6" },
  { key: "warm-gray", name: "Warm Gray", color: "#A8A39D", bg: "#F8F7F6" },
  { key: "deep-bean", name: "Deep Bean", color: "#A67B7B", bg: "#FAF5F5" },
  { key: "dark-moss", name: "Dark Moss", color: "#7A8471", bg: "#F5F6F3" },
  { key: "neutral-gray", name: "Neutral Gray", color: "#9E9E9E", bg: "#F5F5F5" },
  { key: "caramel", name: "Caramel", color: "#A67C52", bg: "#FAF6F0" },
  { key: "dusk-purple", name: "Dusk Purple", color: "#8B7B8B", bg: "#F7F4F7" },
  { key: "deep-sea", name: "Deep Sea", color: "#5E738B", bg: "#F2F5F8" }
];
const TAG_COLORS = [
  { bg: "#E3F2FD", color: "#1976D2", border: "#BBDEFB" },
  { bg: "#F3E5F5", color: "#7B1FA2", border: "#E1BEE7" },
  { bg: "#E8F5E9", color: "#388E3C", border: "#C8E6C9" },
  { bg: "#FFF3E0", color: "#F57C00", border: "#FFE0B2" },
  { bg: "#FCE4EC", color: "#C2185B", border: "#F8BBD9" },
  { bg: "#E0F7FA", color: "#0097A7", border: "#B2EBF2" },
  { bg: "#F9FBE7", color: "#AFB42B", border: "#E6EE9C" },
  { bg: "#EFEBE9", color: "#5D4037", border: "#D7CCC8" },
  { bg: "#E8EAF6", color: "#303F9F", border: "#C5CAE9" },
  { bg: "#FBE9E7", color: "#D84315", border: "#FFCCBC" }
];
const DEFAULT_SETTINGS = {
  inboxName: "Mcard",
  noteTag: "Mcard",
  viewStyle: "card",
  themeMode: "morandi",
  morandiColor: "sage-green",
  fontSize: 14.5,
  compactMode: false,
  dailyCount: 8,
  syncToJournal: true,
  enterToSubmit: true,
  showMemoNotesInList: true
};
function getMorandiColor(key) {
  return MORANDI_COLORS.find((c) => c.key === key) || MORANDI_COLORS[0];
}
function getTagColor(tag) {
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = hash * 31 + tag.charCodeAt(i) | 0;
  }
  const idx = Math.abs(hash) % TAG_COLORS.length;
  return TAG_COLORS[idx];
}
function safeAdd(x, y) {
  const lsw = (x & 65535) + (y & 65535);
  const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 65535;
}
function bitRol(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
function cmn(q, a, b, x, s, t2) {
  return safeAdd(bitRol(safeAdd(safeAdd(a, q), safeAdd(x, t2)), s), b);
}
function ff(a, b, c, d, x, s, t2) {
  return cmn(b & c | ~b & d, a, b, x, s, t2);
}
function gg(a, b, c, d, x, s, t2) {
  return cmn(b & d | c & ~d, a, b, x, s, t2);
}
function hh(a, b, c, d, x, s, t2) {
  return cmn(b ^ c ^ d, a, b, x, s, t2);
}
function ii(a, b, c, d, x, s, t2) {
  return cmn(c ^ (b | ~d), a, b, x, s, t2);
}
function binlMD5(x, len) {
  x[len >> 5] |= 128 << len % 32;
  x[(len + 64 >>> 9 << 4) + 14] = len;
  let a = 1732584193;
  let b = -271733879;
  let c = -1732584194;
  let d = 271733878;
  for (let i = 0; i < x.length; i += 16) {
    const olda = a;
    const oldb = b;
    const oldc = c;
    const oldd = d;
    a = ff(a, b, c, d, x[i], 7, -680876936);
    d = ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = ff(c, d, a, b, x[i + 10], 17, -42063);
    b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = gg(b, c, d, a, x[i], 20, -373897302);
    a = gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = hh(a, b, c, d, x[i + 5], 4, -378558);
    d = hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = hh(d, a, b, c, x[i], 11, -358537222);
    c = hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = ii(a, b, c, d, x[i], 6, -198630844);
    d = ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }
  return [a, b, c, d];
}
function binl2rstr(input) {
  let output = "";
  for (let i = 0; i < input.length * 32; i += 8) {
    output += String.fromCharCode(input[i >> 5] >>> i % 32 & 255);
  }
  return output;
}
function rstr2binl(input) {
  const output = [];
  for (let i = 0; i < input.length * 8; i += 8) {
    output[i >> 5] |= (input.charCodeAt(i / 8) & 255) << i % 32;
  }
  return output;
}
function rstrMD5(s) {
  return binl2rstr(binlMD5(rstr2binl(s), s.length * 8));
}
function rstr2hex(input) {
  const hexTab = "0123456789abcdef";
  let output = "";
  for (let i = 0; i < input.length; i++) {
    const x = input.charCodeAt(i);
    output += hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(x & 15);
  }
  return output;
}
function str2rstrUTF8(input) {
  return unescape(encodeURIComponent(input));
}
function md5(s) {
  return rstr2hex(rstrMD5(str2rstrUTF8(s)));
}
const FLOMO_API_BASE = "https://flomoapp.com/api/v1";
const FLOMO_SECRET = "dbbc3dd73364b4084c3a69346e0ce2b2";
const FLOMO_API_KEY = "flomo_web";
const FLOMO_APP_VERSION = "2.0";
const DEFAULT_FLOMO_CONFIG = {
  username: "",
  password: "",
  accessToken: "",
  lastSyncTime: "",
  syncedSlugs: []
};
function createFlomoSign(param) {
  const sortParam = {};
  Object.keys(param).sort().forEach((key) => {
    sortParam[key] = param[key];
  });
  let paramString = "";
  for (const key in sortParam) {
    const value = sortParam[key];
    if (value === void 0 || value === null || value === "") continue;
    paramString += key + "=" + value + "&";
  }
  paramString = paramString.substring(0, paramString.length - 1);
  return md5(paramString + FLOMO_SECRET);
}
async function flomoLogin(username, password) {
  try {
    const timestamp = Math.floor(Date.now() / 1e3).toString();
    const params = {
      api_key: FLOMO_API_KEY,
      app_version: FLOMO_APP_VERSION,
      email: username,
      password,
      timestamp,
      webp: "1"
    };
    params.sign = createFlomoSign(params);
    const response = await fetch(`${FLOMO_API_BASE}/user/login_by_email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      },
      body: JSON.stringify(params)
    });
    const data = await response.json();
    if (data.code === 0 && data.data && data.data.access_token) {
      return {
        success: true,
        message: "登录成功",
        accessToken: data.data.access_token
      };
    }
    return { success: false, message: data.message || "登录失败" };
  } catch (e) {
    return { success: false, message: "登录失败: " + e.message };
  }
}
function htmlToText(html) {
  let text = html;
  text = text.replace(/<br\s*\/?>/gi, "\n");
  text = text.replace(/<\/p>/gi, "\n");
  text = text.replace(/<p[^>]*>/gi, "");
  text = text.replace(/<b[^>]*>(.*?)<\/b>/gi, "**$1**");
  text = text.replace(/<i[^>]*>(.*?)<\/i>/gi, "*$1*");
  text = text.replace(/<li[^>]*>(.*?)<\/li>/gi, "- $1\n");
  text = text.replace(/<\/?(ul|ol)[^>]*>/gi, "");
  text = text.replace(/<img[^>]*src=["']([^"']*)["'][^>]*>/gi, "![]($1)");
  text = text.replace(/<[^>]+>/g, "");
  text = text.replace(/&nbsp;/g, " ");
  text = text.replace(/&amp;/g, "&");
  text = text.replace(/&lt;/g, "<");
  text = text.replace(/&gt;/g, ">");
  return text.trim();
}
function extractFlomoTags(content) {
  const tagRegex = /#([\w\u4e00-\u9fa5][\w\u4e00-\u9fa5\-_]*)/g;
  const tags = [];
  let match;
  while ((match = tagRegex.exec(content)) !== null) {
    tags.push(match[1]);
  }
  return tags;
}
async function flomoSync(accessToken, lastSyncTime, isFullSync) {
  if (!accessToken) {
    return { memos: [], message: "请先登录 Flomo" };
  }
  try {
    const allMemos = [];
    const startTime = isFullSync ? "2020-01-01 00:00:00" : lastSyncTime || "2020-01-01 00:00:00";
    const limit = 200;
    let latestSlug = "";
    while (true) {
      const timestamp = Math.floor(Date.now() / 1e3).toString();
      const latestTimestamp = Math.floor(
        new Date(startTime).getTime() / 1e3
      ).toString();
      const params = {
        api_key: FLOMO_API_KEY,
        app_version: FLOMO_APP_VERSION,
        latest_slug: latestSlug,
        latest_updated_at: latestTimestamp,
        limit: limit.toString(),
        timestamp,
        tz: "8:0",
        webp: "1"
      };
      params.sign = createFlomoSign(params);
      const url = new URL(`${FLOMO_API_BASE}/memo/updated`);
      url.search = new URLSearchParams(params).toString();
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
      });
      const data = await response.json();
      if (data.code !== 0) {
        return {
          memos: [],
          message: "同步失败: " + (data.message || "未知错误")
        };
      }
      const records = data.data || [];
      const validRecords = records.filter((r) => !r.deleted_at);
      for (const record of validRecords) {
        const content = htmlToText(record.content || "");
        const tags = extractFlomoTags(content);
        allMemos.push({
          slug: record.slug,
          content,
          created_at: record.created_at,
          updated_at: record.updated_at,
          deleted_at: record.deleted_at,
          tags
        });
      }
      if (records.length < limit) break;
      const lastRecord = records[records.length - 1];
      latestSlug = lastRecord.slug;
    }
    if (allMemos.length === 0) {
      return { memos: [], message: "没有新的笔记需要同步" };
    }
    return { memos: allMemos, message: `成功同步 ${allMemos.length} 条笔记` };
  } catch (e) {
    return { memos: [], message: "同步失败: " + e.message };
  }
}
function memosToNotes(memos) {
  return memos.map((memo) => ({
    id: `flomo_${memo.slug}`,
    content: memo.content,
    tags: memo.tags,
    createdAt: new Date(memo.created_at).getTime(),
    source: "flomo"
  }));
}
const DEFAULT_INBOX_SETTINGS = {
  storageType: "s3",
  s3Endpoint: "",
  s3AccessKey: "",
  s3SecretKey: "",
  s3Bucket: "",
  s3Region: "us-east-1",
  inboxName: "inBox Inbox",
  noteTag: "inBox Note",
  afterDate: null,
  syncInterval: 30,
  enableAutoSync: false,
  debugRootPath: ""
};
function getResourceType(mimeType, resourceType) {
  const mime = mimeType;
  if (!mime) {
    if (resourceType === "image") return "image";
    if (resourceType === "video") return "video";
    if (resourceType === "audio") return "audio";
    return "attachment";
  }
  if (mime.startsWith("image/")) return "image";
  if (mime.startsWith("video/")) return "video";
  if (mime.startsWith("audio/")) return "audio";
  return "attachment";
}
function getCreatedAt(meta) {
  const timeStr = meta.createdAt || meta.created_at || "";
  if (!timeStr) return Date.now();
  return new Date(timeStr).getTime();
}
function getUpdatedAt(meta) {
  const timeStr = meta.updatedAt || meta.updated_at || "";
  if (!timeStr) return Date.now();
  return new Date(timeStr).getTime();
}
function getIsRemoved(flags) {
  return flags.isRemoved ?? flags.is_removed ?? false;
}
function getParentId(note) {
  return note.parentId || note.parent_id || null;
}
function extractTags(content) {
  const tags = [];
  const tagRegex = /#([\p{L}\p{N}_/]+)/gu;
  let match;
  while ((match = tagRegex.exec(content)) !== null) {
    const tag = match[1];
    if (tag && !tags.includes(tag)) {
      tags.push(tag);
    }
  }
  return tags;
}
function parseImageJson(imageJson) {
  if (!imageJson) return [];
  try {
    let parsed = JSON.parse(imageJson);
    if (typeof parsed === "string") {
      parsed = JSON.parse(parsed);
    }
    if (Array.isArray(parsed)) return parsed;
    return [];
  } catch {
    return [];
  }
}
function parseExtra(extra) {
  if (!extra) return {};
  try {
    return JSON.parse(extra);
  } catch {
    try {
      const p = JSON.parse(extra);
      if (typeof p === "string") return JSON.parse(p);
      return p;
    } catch {
      return {};
    }
  }
}
function parseAsset(resource) {
  return {
    remoteUrl: resource.remoteUrl || resource.url || resource.path,
    remotePath: resource.path || resource.url || resource.remoteUrl,
    mimeType: resource.mimeType || resource.mime_type || "",
    width: resource.width,
    height: resource.height,
    size: resource.size || resource.length || 0
  };
}
function parseAtomicNote(note) {
  var _a, _b, _c;
  const published = getCreatedAt(note.meta);
  const updated = getUpdatedAt(note.meta);
  const isRemoved = getIsRemoved(note.flags);
  const imageJsons = parseImageJson(note.imageJson);
  const extra = parseExtra(note.extra);
  const contentAssets = ((_a = note.content) == null ? void 0 : _a.assets) || [];
  const allImages = [...imageJsons, ...contentAssets];
  const content = ((_b = note.content) == null ? void 0 : _b.content) || "";
  const tags = extractTags(content);
  const images = [];
  const videos = [];
  const audios = [];
  const attachments = [];
  for (const img of allImages) {
    const parsed = parseAsset(img);
    const type = getResourceType(
      img.mimeType || img.mime_type,
      img.type || img.resourceType
    );
    if (type === "image") images.push(parsed);
    else if (type === "video") videos.push(parsed);
    else if (type === "audio") audios.push(parsed);
    else attachments.push(parsed);
  }
  if (extra.voice) {
    audios.push({
      remoteUrl: extra.voice.remoteUrl || extra.voice.path,
      remotePath: extra.voice.path,
      mimeType: "audio/mpeg",
      type: "audio",
      size: extra.voice.size,
      duration: extra.voice.duration
    });
  }
  return {
    blockId: note.blockId || 0,
    noteId: note.id || `note-${note.blockId}`,
    title: ((_c = note.content) == null ? void 0 : _c.title) || "Untitled",
    content,
    tags,
    images,
    videos,
    audios,
    attachments,
    createdAt: new Date(published),
    updatedAt: new Date(updated),
    published,
    isRemoved,
    parentId: getParentId(note) || void 0
  };
}
function validateInboxSettings(settings) {
  return !!(settings.s3Endpoint && settings.s3AccessKey && settings.s3SecretKey && settings.s3Bucket);
}
async function sha256Hex(data) {
  const enc = new TextEncoder();
  const bytes = enc.encode(data);
  const buf = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}
async function hmacSHA256Hex(key, data) {
  const sig = await hmacSHA256Raw(key, data);
  return Array.from(sig).map((b) => b.toString(16).padStart(2, "0")).join("");
}
async function hmacSHA256Raw(key, data) {
  const enc = new TextEncoder();
  const keyData = typeof key === "string" ? enc.encode(key) : key;
  const cryptoKey = await crypto.subtle.importKey("raw", keyData, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", cryptoKey, enc.encode(data));
  return new Uint8Array(sig);
}
async function getS3AuthHeadersDirect(config, method, path, query) {
  const { s3AccessKey: accessKey, s3SecretKey: secretKey, s3Region: region, s3Endpoint: endpoint } = config;
  const service = "s3";
  const now = /* @__PURE__ */ new Date();
  const pad = (n) => n.toString().padStart(2, "0");
  const dateStamp = now.getUTCFullYear() + pad(now.getUTCMonth() + 1) + pad(now.getUTCDate());
  const amzDate = dateStamp + "T" + pad(now.getUTCHours()) + pad(now.getUTCMinutes()) + pad(now.getUTCSeconds()) + "Z";
  const credentialScope = `${dateStamp}/${region}/${service}/aws4_request`;
  let host = endpoint;
  if (host.startsWith("http://")) host = host.substring(7);
  if (host.startsWith("https://")) host = host.substring(8);
  const portIdx = host.indexOf(":");
  if (portIdx !== -1) host = host.substring(0, portIdx);
  const headers = {
    host,
    "x-amz-content-sha256": "UNSIGNED-PAYLOAD",
    "x-amz-date": amzDate
  };
  const signedHeaderKeys = Object.keys(headers).map((k) => k.toLowerCase()).sort();
  const signedHeaders = signedHeaderKeys.join(";");
  let canonicalQuery = "";
  if (query) {
    const params = [];
    for (const key in query) {
      params.push(encodeURIComponent(key) + "=" + encodeURIComponent(query[key]));
    }
    params.sort();
    canonicalQuery = params.join("&");
  }
  const NL = "\n";
  let canonicalHeaders = "";
  for (const key of signedHeaderKeys) {
    canonicalHeaders += key + ":" + headers[key] + NL;
  }
  const canonicalRequest = method + NL + path + NL + canonicalQuery + NL + canonicalHeaders + NL + signedHeaders + NL + "UNSIGNED-PAYLOAD";
  const algorithm = "AWS4-HMAC-SHA256";
  const credentialString = algorithm + NL + amzDate + NL + credentialScope + NL;
  const canonicalRequestHash = await sha256Hex(canonicalRequest);
  const stringToSign = credentialString + canonicalRequestHash;
  const kDate = await hmacSHA256Raw("AWS4" + secretKey, dateStamp);
  const kRegion = await hmacSHA256Raw(kDate, region);
  const kService = await hmacSHA256Raw(kRegion, service);
  const kSigning = await hmacSHA256Raw(kService, "aws4_request");
  const signature = await hmacSHA256Hex(kSigning, stringToSign);
  const authorization = algorithm + " Credential=" + accessKey + "/" + credentialScope + ", SignedHeaders=" + signedHeaders + ", Signature=" + signature;
  headers["Authorization"] = authorization;
  return headers;
}
async function listCloudFilesDirect(settings) {
  const endpoint = (settings.s3Endpoint || "").trim();
  const bucket = (settings.s3Bucket || "").trim();
  const rootPath = settings.debugRootPath || "inBox";
  const prefix = rootPath + "/notes/";
  const url = `https://${endpoint}/${bucket}?list-type=2&prefix=${encodeURIComponent(prefix)}`;
  const path = "/" + bucket;
  const config = { s3Endpoint: endpoint, s3AccessKey: settings.s3AccessKey, s3SecretKey: settings.s3SecretKey, s3Region: settings.s3Region };
  const headers = await getS3AuthHeadersDirect(config, "GET", path, { "list-type": "2", prefix });
  const resp = await fetch(url, { method: "GET", headers, mode: "cors" });
  if (!resp.ok) {
    let errText = "";
    try {
      errText = await resp.text();
    } catch {
    }
    throw new Error(`S3 list HTTP ${resp.status}: ${errText.substring(0, 500)}`);
  }
  const text = await resp.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, "text/xml");
  const contents = doc.getElementsByTagName("Contents");
  const files = [];
  for (let i = 0; i < contents.length; i++) {
    const keyEl = contents[i].getElementsByTagName("Key")[0];
    if (!keyEl) continue;
    const key = keyEl.textContent || "";
    const fileName = key.split("/").pop() || "";
    if (!fileName.endsWith(".json")) continue;
    const noteId = fileName.replace(".json", "");
    const etagEl = contents[i].getElementsByTagName("ETag")[0];
    const etag = etagEl ? etagEl.textContent.replace(/"/g, "") : "";
    const lastModEl = contents[i].getElementsByTagName("LastModified")[0];
    let mtime = 0;
    if (lastModEl) {
      try {
        mtime = new Date(lastModEl.textContent).getTime();
      } catch {
      }
    }
    files.push({ id: noteId, etag, mtime, size: 0, path: key });
  }
  return files;
}
async function fetchCloudNoteDirect(settings, s3Path) {
  const endpoint = (settings.s3Endpoint || "").trim();
  const bucket = (settings.s3Bucket || "").trim();
  const url = `https://${endpoint}/${bucket}/${s3Path}`;
  const path = "/" + bucket + "/" + s3Path;
  const config = { s3Endpoint: endpoint, s3AccessKey: settings.s3AccessKey, s3SecretKey: settings.s3SecretKey, s3Region: settings.s3Region };
  const headers = await getS3AuthHeadersDirect(config, "GET", path, null);
  const resp = await fetch(url, { method: "GET", headers, mode: "cors" });
  if (!resp.ok) return null;
  const text = await resp.text();
  const data = JSON.parse(text);
  return data.data || data;
}
async function fetchCloudAssetDirect(settings, remotePath) {
  const endpoint = (settings.s3Endpoint || "").trim();
  const bucket = (settings.s3Bucket || "").trim();
  const url = remotePath.startsWith("http") ? remotePath : `https://${endpoint}/${bucket}/${remotePath}`;
  const pathParts = remotePath.split("/");
  pathParts[pathParts.length - 1];
  const path = "/" + bucket + "/" + remotePath;
  const config = { s3Endpoint: endpoint, s3AccessKey: settings.s3AccessKey, s3SecretKey: settings.s3SecretKey, s3Region: settings.s3Region };
  const headers = await getS3AuthHeadersDirect(config, "GET", path, null);
  const resp = await fetch(url, { method: "GET", headers, mode: "cors" });
  if (!resp.ok) return null;
  const buffer = await resp.arrayBuffer();
  const mimeType = resp.headers.get("content-type") || "application/octet-stream";
  return [mimeType, buffer];
}
function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function renderInline(text) {
  const codes = [];
  text = text.replace(/`([^`]+)`/g, (_match, code) => {
    codes.push(code);
    return `\0C${codes.length - 1}\0`;
  });
  text = text.replace(/<(https?:\/\/[^>]+)>/g, '<a href="$1" target="_blank">$1</a>');
  text = text.replace(/<([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})>/g, '<a href="mailto:$1">$1</a>');
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, label, url) => {
    if (label === "" && url.match(/\.(png|jpg|jpeg|gif|webp|svg|avif|bmp)$/i)) return _match;
    return `<a href="${url}" target="_blank">${label}</a>`;
  });
  text = text.replace(/~~([^~]+)~~/g, "<del>$1</del>");
  text = text.replace(/\*\*\*([^*]+)\*\*\*/g, "<strong><em>$1</em></strong>");
  text = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  text = text.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  text = text.replace(/___([^_]+)___/g, "<strong><em>$1</em></strong>");
  text = text.replace(/__([^_]+)__/g, "<strong>$1</strong>");
  text = text.replace(/_([^_]+)_/g, "<em>$1</em>");
  codes.forEach((code, idx) => {
    text = text.replace(`\0C${idx}\0`, `<code>${escapeHtml(code)}</code>`);
  });
  return text;
}
function isListItem(line) {
  return /^(\s*)([-*+]|\d+\.)\s+/.test(line) || /^(\s*)([-*+]|\d+\.)\s+\[([ xX])\]\s+/.test(line);
}
function isBlockStart(line) {
  const trimmed = line.trimStart();
  if (trimmed.startsWith("```")) return true;
  if (/^(#{1,6})\s+/.test(trimmed)) return true;
  if (/^(---|\*\*\*|___)\s*$/.test(trimmed)) return true;
  if (trimmed.startsWith(">")) return true;
  if (isListItem(trimmed)) return true;
  return false;
}
function renderBlockquote(lines, start) {
  const quoteLines = [];
  let i = start;
  while (i < lines.length) {
    const trimmed = lines[i].trimStart();
    if (trimmed.startsWith(">")) {
      quoteLines.push(lines[i].replace(/^>\s?/, ""));
      i++;
    } else if (trimmed === "" && quoteLines.length > 0) {
      if (i + 1 < lines.length && lines[i + 1].trimStart().startsWith(">")) {
        quoteLines.push("");
        i++;
      } else {
        break;
      }
    } else {
      break;
    }
  }
  const inner = renderMarkdown(quoteLines.join("\n"));
  return { html: `<blockquote>
${inner}
</blockquote>`, nextIndex: i };
}
function renderList(lines, start) {
  const items = [];
  let i = start;
  let listType = null;
  let startNum = null;
  while (i < lines.length) {
    let match = lines[i].match(/^(\s*)([-*+]|\d+\.)\s+\[([ xX])\]\s+(.*)$/);
    let isTask = false;
    let taskChecked = false;
    let marker;
    let content;
    if (match) {
      isTask = true;
      taskChecked = match[3] === "x" || match[3] === "X";
      marker = match[2];
      content = match[4];
    } else {
      match = lines[i].match(/^(\s*)([-*+]|\d+\.)\s+(.*)$/);
      if (!match) break;
      marker = match[2];
      content = match[3];
    }
    const isOrdered = /^\d+\./.test(marker);
    const currentType = isTask ? "task" : isOrdered ? "ol" : "ul";
    if (listType === null) {
      listType = currentType;
      if (isOrdered) startNum = parseInt(marker);
    } else if (listType !== currentType) {
      break;
    }
    content = renderInline(content);
    if (isTask) {
      const checked = taskChecked ? "checked" : "";
      items.push(`<li class="task-item"><input type="checkbox" class="mcard-task-checkbox" ${checked} disabled> <span>${content}</span></li>`);
    } else {
      items.push(`<li>${content}</li>`);
    }
    i++;
  }
  const tag = listType === "ol" ? "ol" : "ul";
  const classAttr = listType === "task" ? ' class="task-list"' : "";
  const startAttr = listType === "ol" && startNum !== null && startNum !== 1 ? ` start="${startNum}"` : "";
  const html = `<${tag}${classAttr}${startAttr}>
${items.join("\n")}
</${tag}>`;
  return { html, nextIndex: i };
}
function renderMarkdown(text) {
  text = text.replace(/^(\s*)&gt;(\s?)/gm, "$1>$2");
  const escapes = [];
  text = text.replace(/\\([\\`*_{}[\]()#+-.!~|>])/g, (_match, char) => {
    escapes.push(char);
    return `\0E${escapes.length - 1}\0`;
  });
  const lines = text.split("\n");
  const blocks = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trimStart();
    if (trimmed.startsWith("```")) {
      const fenceMatch = trimmed.match(/^(`{3,})/);
      const fence = fenceMatch ? fenceMatch[1] : "```";
      const lang = trimmed.slice(fence.length).trim();
      i++;
      const codeLines = [];
      while (i < lines.length) {
        if (lines[i].trimStart().startsWith(fence)) {
          i++;
          break;
        }
        codeLines.push(lines[i]);
        i++;
      }
      const code = escapeHtml(codeLines.join("\n"));
      blocks.push(`<pre><code${lang ? ` class="language-${lang}"` : ""}>${code}</code></pre>`);
      continue;
    }
    const headingMatch = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      blocks.push(`<h${level}>${renderInline(headingMatch[2])}</h${level}>`);
      i++;
      continue;
    }
    if (/^(---|\*\*\*|___)\s*$/.test(trimmed)) {
      blocks.push("<hr>");
      i++;
      continue;
    }
    if (trimmed.startsWith(">")) {
      const result = renderBlockquote(lines, i);
      blocks.push(result.html);
      i = result.nextIndex;
      continue;
    }
    if (isListItem(trimmed)) {
      const result = renderList(lines, i);
      blocks.push(result.html);
      i = result.nextIndex;
      continue;
    }
    if (trimmed === "") {
      i++;
      continue;
    }
    const paraLines = [];
    while (i < lines.length && lines[i].trim() !== "") {
      if (isBlockStart(lines[i])) break;
      paraLines.push(lines[i]);
      i++;
    }
    const para = paraLines.join("<br>").trim();
    if (para) {
      blocks.push(`<p>${renderInline(para)}</p>`);
    }
  }
  let html = blocks.join("\n");
  escapes.forEach((char, idx) => {
    html = html.replace(`\0E${idx}\0`, char);
  });
  return html;
}
function renderNoteHtml(content, resolveImageUrl, options = {}) {
  let text = content;
  const images = [];
  text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_match, alt, url) => {
    images.push({ alt, url: resolveImageUrl(url) });
    return `{{IMAGE${images.length - 1}}}`;
  });
  text = text.replace(/<img[^>]*src=["']([^"']+)["'][^>]*\/?>/gi, (_match, src) => {
    const altMatch = _match.match(/alt=["']([^"']*)["']/i);
    const alt = altMatch ? altMatch[1] : "";
    images.push({ alt, url: resolveImageUrl(src) });
    return `{{IMAGE${images.length - 1}}}`;
  });
  if (options.hideTags) {
    text = text.replace(/#[^\s\d][^\s]*(?:\/[^\s]+)*/g, "").trim();
  }
  text = escapeHtml(text);
  text = text.replace(/\{:([^}]+)\}/g, "");
  text = text.replace(/^&gt;\s*\[!NOTE\][^\n]*\n?/gm, "");
  text = text.replace(/^&gt;\s?/gm, "");
  text = text.replace(/\n{3,}/g, "\n\n");
  let html = renderMarkdown(text);
  html = html.replace(/#([\w/\u4e00-\u9fa5-]+)(?![\w/\u4e00-\u9fa5-])(?!#)/g, '<span class="mcard-inline-tag">#$1</span>');
  html = html.replace(/\[\[([^\]]+)\]\]/g, (_match, text2) => {
    var _a, _b;
    const noteByTitle = (_a = options.notes) == null ? void 0 : _a.find((n) => n.title === text2);
    const noteById = (_b = options.notes) == null ? void 0 : _b.find((n) => n.id === text2);
    const note = noteByTitle || noteById;
    if (!note) return _match;
    return `<span class="mcard-memo-ref" data-memo-id="${note.id}">${text2}</span>`;
  });
  images.forEach((img, index) => {
    const imgHtml = `<img src="${img.url}" alt="${escapeHtml(img.alt)}" class="mcard-note-image" loading="lazy" data-img-src="${img.url}">`;
    html = html.replace(`{{IMAGE${index}}}`, imgHtml);
  });
  return html;
}
const STORAGE_NOTES_KEY = "mcard.notes";
const STORAGE_REVIEW_KEY = "mcard.reviewHistory";
const STORAGE_FLOMO_KEY = "mcard.flomoConfig";
const STORAGE_INBOX_KEY = "mcard.inboxConfig";
const STORAGE_PINNED_TAGS_KEY = "mcard.pinnedTags";
const STORAGE_SEARCH_EXPR_KEY = "mcard.searchExprs";
const COLLAPSE_LINE_COUNT = 4;
async function loadNotes(pluginName2) {
  try {
    const raw = await orca.plugins.getData(pluginName2, STORAGE_NOTES_KEY);
    if (typeof raw === "string" && raw.trim()) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch {
  }
  return [];
}
async function saveNotes(pluginName2, notes) {
  try {
    await orca.plugins.setData(pluginName2, STORAGE_NOTES_KEY, JSON.stringify(notes));
  } catch {
  }
}
async function loadReviewHistory(pluginName2) {
  try {
    const raw = await orca.plugins.getData(pluginName2, STORAGE_REVIEW_KEY);
    if (typeof raw === "string" && raw.trim()) {
      return JSON.parse(raw);
    }
  } catch {
  }
  return {};
}
async function saveReviewHistory(pluginName2, history) {
  try {
    await orca.plugins.setData(pluginName2, STORAGE_REVIEW_KEY, JSON.stringify(history));
  } catch {
  }
}
async function loadPinnedTags(pluginName2) {
  try {
    const raw = await orca.plugins.getData(pluginName2, STORAGE_PINNED_TAGS_KEY);
    if (typeof raw === "string" && raw.trim()) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch {
  }
  return [];
}
async function savePinnedTags(pluginName2, tags) {
  try {
    await orca.plugins.setData(pluginName2, STORAGE_PINNED_TAGS_KEY, JSON.stringify(tags));
  } catch {
  }
}
async function loadFlomoConfig(pluginName2) {
  try {
    const raw = await orca.plugins.getData(pluginName2, STORAGE_FLOMO_KEY);
    if (typeof raw === "string" && raw.trim()) {
      return { ...DEFAULT_FLOMO_CONFIG, ...JSON.parse(raw) };
    }
  } catch {
  }
  return { ...DEFAULT_FLOMO_CONFIG };
}
async function saveFlomoConfig(pluginName2, config) {
  try {
    await orca.plugins.setData(pluginName2, STORAGE_FLOMO_KEY, JSON.stringify(config));
  } catch {
  }
}
function formatAgo(ts) {
  const diff = Date.now() - ts;
  const m = Math.floor(diff / 6e4);
  if (m < 1) return "刚刚";
  if (m < 60) return `${m} 分钟前`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h} 小时前`;
  const d = Math.floor(h / 24);
  if (d === 1) return t("Yesterday");
  if (d < 30) return `${d} ${t("Days ago")}`;
  const date = new Date(ts);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function getNotePreview(note) {
  if (note.title) return note.title;
  let preview = note.content.replace(/#[^\s\d][^\s]*(?:\/[^\s]+)*/g, "").trim().replace(/\s+/g, " ");
  preview = preview.split("\n")[0];
  return preview.substring(0, 18) + (preview.length > 18 ? "..." : "");
}
function highlightText(text, keyword) {
  if (!keyword || !text) return text;
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "gi"));
  return parts.map(
    (part, i) => part.toLowerCase() === keyword.toLowerCase() ? React.createElement("mark", { key: i, className: "mcard-mention-highlight" }, part) : part
  );
}
function formatDate(ts) {
  const d = new Date(ts);
  const weekday = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][d.getDay()];
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")} ${weekday}`;
}
function formatDateKey(ts) {
  const d = new Date(ts);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function isSameDay(a, b) {
  const da = new Date(a);
  const db = new Date(b);
  return da.getFullYear() === db.getFullYear() && da.getMonth() === db.getMonth() && da.getDate() === db.getDate();
}
function isThisWeek(ts) {
  const now = /* @__PURE__ */ new Date();
  const startOfWeek = new Date(now);
  const day = now.getDay() || 7;
  startOfWeek.setDate(now.getDate() - (day - 1));
  startOfWeek.setHours(0, 0, 0, 0);
  return ts >= startOfWeek.getTime();
}
function McardPanel({ pluginName: pluginName2, settings, onSettingsChange, panelId }) {
  const [notes, setNotes] = React.useState([]);
  const [tab, setTab] = React.useState("shuoshuo");
  const [shuoshuoView, setShuoshuoView] = React.useState("all");
  const [selectedTag, setSelectedTag] = React.useState(null);
  const [searchText, setSearchText] = React.useState("");
  const [reviewIndex, setReviewIndex] = React.useState(0);
  const [randomNote, setRandomNote] = React.useState(null);
  const [currentDate, setCurrentDate] = React.useState(/* @__PURE__ */ new Date());
  const [showTagPicker, setShowTagPicker] = React.useState(false);
  const [tagPickerFilter, setTagPickerFilter] = React.useState("");
  const [tagPickerActiveIdx, setTagPickerActiveIdx] = React.useState(0);
  const mentionPickerRef = React.useRef(null);
  const mentionTriggerPosRef = React.useRef(0);
  const memoTagPickerRef = React.useRef(null);
  const [captureText, setCaptureText] = React.useState("");
  const [captureTitle, setCaptureTitle] = React.useState("");
  const [captureParentIds, setCaptureParentIds] = React.useState([]);
  const [captureParentSearch, setCaptureParentSearch] = React.useState("");
  const [showCaptureParentPicker, setShowCaptureParentPicker] = React.useState(false);
  const [isSaving, setIsSaving] = React.useState(false);
  const reviewHistoryRef = React.useRef({});
  const [initLoaded, setInitLoaded] = React.useState(false);
  const textareaWrapperRef = React.useRef(null);
  const textareaRef = React.useRef(null);
  const [expandedNotes, setExpandedNotes] = React.useState(/* @__PURE__ */ new Set());
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(true);
  const [flomoConfig, setFlomoConfig] = React.useState({ ...DEFAULT_FLOMO_CONFIG });
  const [flomoUsername, setFlomoUsername] = React.useState("");
  const [flomoPassword, setFlomoPassword] = React.useState("");
  const [flomoSyncing, setFlomoSyncing] = React.useState(false);
  const [flomoLogging, setFlomoLogging] = React.useState(false);
  const [flomoMessage, setFlomoMessage] = React.useState("");
  const [flomoFullSync, setFlomoFullSync] = React.useState(false);
  const [inboxConfig, setInboxConfig] = React.useState({ ...DEFAULT_INBOX_SETTINGS });
  const [inboxSyncing, setInboxSyncing] = React.useState(false);
  const [inboxMessage, setInboxMessage] = React.useState("");
  const [inboxFullSync, setInboxFullSync] = React.useState(false);
  const [editingNoteId, setEditingNoteId] = React.useState(null);
  const [editText, setEditText] = React.useState("");
  const [editTitle, setEditTitle] = React.useState("");
  const [editParentSearch, setEditParentSearch] = React.useState("");
  const [showEditParentPicker, setShowEditParentPicker] = React.useState(false);
  const editTextareaRef = React.useRef(null);
  const [showEditTagPicker, setShowEditTagPicker] = React.useState(false);
  const [editTagPickerFilter, setEditTagPickerFilter] = React.useState("");
  const [editTagPickerActiveIdx, setEditTagPickerActiveIdx] = React.useState(0);
  const [tagPickerTop, setTagPickerTop] = React.useState(0);
  const [editTagPickerTop, setEditTagPickerTop] = React.useState(0);
  const [memoInputNoteId, setMemoInputNoteId] = React.useState(null);
  const [memoInputText, setMemoInputText] = React.useState("");
  const [showMemoMention, setShowMemoMention] = React.useState(false);
  const [memoMentionFilter, setMemoMentionFilter] = React.useState("");
  const [memoMentionActiveIdx, setMemoMentionActiveIdx] = React.useState(0);
  const [pinnedTags, setPinnedTags] = React.useState([]);
  const [tagMenuTag, setTagMenuTag] = React.useState(null);
  const [tagMenuPos, setTagMenuPos] = React.useState(null);
  const [renameTagOld, setRenameTagOld] = React.useState(null);
  const [renameTagNew, setRenameTagNew] = React.useState("");
  const [deleteTagTarget, setDeleteTagTarget] = React.useState(null);
  const [detailNote, setDetailNote] = React.useState(null);
  const [detailEditing, setDetailEditing] = React.useState(false);
  const [detailEditTitle, setDetailEditTitle] = React.useState("");
  const [detailEditText, setDetailEditText] = React.useState("");
  const [detailParentSearch, setDetailParentSearch] = React.useState("");
  const [showDetailParentPicker, setShowDetailParentPicker] = React.useState(false);
  const [showDetailTagPicker, setShowDetailTagPicker] = React.useState(false);
  const [detailTagPickerFilter, setDetailTagPickerFilter] = React.useState("");
  const [childTagIncluded, setChildTagIncluded] = React.useState([]);
  const [childTagExcluded, setChildTagExcluded] = React.useState([]);
  const [childCardGridMode, setChildCardGridMode] = React.useState(false);
  const [showSearchExprModal, setShowSearchExprModal] = React.useState(false);
  const [showExprBuilder, setShowExprBuilder] = React.useState(false);
  const [searchExprs, setSearchExprs] = React.useState([]);
  const [editingExpr, setEditingExpr] = React.useState(null);
  const [activeExprId, setActiveExprId] = React.useState(null);
  const [searchExprResultGrid, setSearchExprResultGrid] = React.useState(false);
  const [tagSearchMap, setTagSearchMap] = React.useState({});
  const [exprMenuId, setExprMenuId] = React.useState(null);
  const [exprTagIncluded, setExprTagIncluded] = React.useState([]);
  const [exprTagExcluded, setExprTagExcluded] = React.useState([]);
  React.useEffect(() => {
    let cancelled = false;
    void (async () => {
      const loaded = await loadNotes(pluginName2);
      if (!cancelled) {
        setNotes(loaded);
        setInitLoaded(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [pluginName2]);
  React.useEffect(() => {
    const refresh = async () => {
      const loaded = await loadNotes(pluginName2);
      setNotes(loaded);
    };
    window.addEventListener("mcard-notes-changed", refresh);
    return () => window.removeEventListener("mcard-notes-changed", refresh);
  }, [pluginName2]);
  React.useEffect(() => {
    let cancelled = false;
    void (async () => {
      const pt = await loadPinnedTags(pluginName2);
      if (!cancelled) setPinnedTags(pt);
    })();
    return () => {
      cancelled = true;
    };
  }, [pluginName2]);
  React.useEffect(() => {
    let cancelled = false;
    void (async () => {
      const h = await loadReviewHistory(pluginName2);
      if (!cancelled) reviewHistoryRef.current = h;
    })();
    return () => {
      cancelled = true;
    };
  }, [pluginName2]);
  React.useEffect(() => {
    if (!initLoaded) return;
    void saveNotes(pluginName2, notes);
  }, [notes, pluginName2, initLoaded]);
  React.useEffect(() => {
    if (!initLoaded) return;
    void savePinnedTags(pluginName2, pinnedTags);
  }, [pinnedTags, pluginName2, initLoaded]);
  React.useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_SEARCH_EXPR_KEY);
      if (raw) setSearchExprs(JSON.parse(raw));
    } catch {
    }
  }, []);
  React.useEffect(() => {
    try {
      localStorage.setItem(STORAGE_SEARCH_EXPR_KEY, JSON.stringify(searchExprs));
    } catch {
    }
  }, [searchExprs]);
  React.useEffect(() => {
    let cancelled = false;
    void (async () => {
      const cfg = await loadFlomoConfig(pluginName2);
      if (!cancelled) {
        setFlomoConfig(cfg);
        setFlomoUsername(cfg.username);
      }
      const inboxCfg = await loadInboxConfig(pluginName2);
      if (!cancelled) {
        setInboxConfig(inboxCfg);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [pluginName2]);
  React.useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") {
        if (detailEditing) {
          setDetailEditing(false);
          return;
        }
        if (detailNote) setDetailNote(null);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [detailNote, detailEditing]);
  React.useEffect(() => {
    if (detailNote) {
      setChildTagIncluded([]);
      setChildTagExcluded([]);
      setDetailEditing(false);
      setDetailEditTitle("");
      setDetailEditText("");
      setDetailParentSearch("");
      setShowDetailParentPicker(false);
    }
  }, [detailNote]);
  async function handleFlomoLogin() {
    const u = flomoUsername.trim();
    const p = flomoPassword.trim();
    if (!u || !p) {
      setFlomoMessage("请输入邮箱/手机号和密码");
      return;
    }
    setFlomoLogging(true);
    setFlomoMessage("登录中...");
    const result = await flomoLogin(u, p);
    if (result.success && result.accessToken) {
      const newCfg = { ...flomoConfig, username: u, password: p, accessToken: result.accessToken };
      setFlomoConfig(newCfg);
      await saveFlomoConfig(pluginName2, newCfg);
      setFlomoPassword("");
      setFlomoMessage("登录成功");
    } else {
      setFlomoMessage(result.message);
    }
    setFlomoLogging(false);
  }
  async function handleFlomoLogout() {
    const newCfg = { ...DEFAULT_FLOMO_CONFIG };
    setFlomoConfig(newCfg);
    setFlomoUsername("");
    setFlomoPassword("");
    await saveFlomoConfig(pluginName2, newCfg);
    setFlomoMessage("已退出登录");
  }
  async function handleFlomoSync() {
    if (!flomoConfig.accessToken) {
      setFlomoMessage("请先登录 Flomo");
      return;
    }
    setFlomoSyncing(true);
    setFlomoMessage(flomoFullSync ? "正在进行全量同步..." : "正在同步...");
    const result = await flomoSync(
      flomoConfig.accessToken,
      flomoConfig.lastSyncTime,
      flomoFullSync
    );
    if (result.memos.length > 0) {
      const flomoNotes = memosToNotes(result.memos);
      const existingIds = new Set(notes.map((n) => n.id));
      const newNotes = [];
      for (const fn of flomoNotes.filter((fn2) => !existingIds.has(fn2.id))) {
        let content = fn.content;
        const imgRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
        let imgMatch;
        const replacements = [];
        while ((imgMatch = imgRegex.exec(fn.content)) !== null) {
          const url = imgMatch[2];
          if (url.startsWith("http://") || url.startsWith("https://")) {
            try {
              const localPath = await uploadImageFromUrl(url);
              if (localPath) {
                replacements.push({
                  from: imgMatch[0],
                  to: `![${imgMatch[1]}](${localPath})`
                });
              }
            } catch (err) {
              console.warn("mcard download flomo image failed:", url, err);
            }
          }
        }
        for (const r of replacements) {
          content = content.split(r.from).join(r.to);
        }
        newNotes.push({
          id: fn.id,
          blockId: 0,
          content,
          tags: fn.tags,
          createdAt: fn.createdAt,
          updatedAt: fn.createdAt,
          pinned: false
        });
      }
      if (newNotes.length > 0) {
        setNotes((prev) => [...prev, ...newNotes]);
      }
      const now = (/* @__PURE__ */ new Date()).toISOString().replace("T", " ").substring(0, 19);
      const newCfg = {
        ...flomoConfig,
        lastSyncTime: now,
        syncedSlugs: [...flomoConfig.syncedSlugs, ...result.memos.map((m) => m.slug)]
      };
      setFlomoConfig(newCfg);
      await saveFlomoConfig(pluginName2, newCfg);
    }
    setFlomoMessage(result.message);
    setFlomoSyncing(false);
    setFlomoFullSync(false);
  }
  async function loadInboxConfig(pluginName22) {
    try {
      const raw = await orca.plugins.getData(pluginName22, STORAGE_INBOX_KEY);
      if (typeof raw === "string" && raw.trim()) {
        const parsed = JSON.parse(raw);
        return { ...DEFAULT_INBOX_SETTINGS, ...parsed };
      }
    } catch {
    }
    return { ...DEFAULT_INBOX_SETTINGS };
  }
  async function saveInboxConfig(pluginName22, config) {
    try {
      await orca.plugins.setData(pluginName22, STORAGE_INBOX_KEY, JSON.stringify(config));
    } catch {
    }
  }
  async function handleInboxSync() {
    if (!validateInboxSettings(inboxConfig)) {
      setInboxMessage("请先配置 S3 存储设置");
      return;
    }
    setInboxSyncing(true);
    setInboxMessage(inboxFullSync ? "正在进行全量同步..." : "正在同步...");
    try {
      setInboxMessage("正在扫描云端文件列表...");
      const cloudFiles = await listCloudFilesDirect(inboxConfig);
      if (cloudFiles.length === 0) {
        setInboxMessage("没有新的笔记");
        setInboxSyncing(false);
        setInboxFullSync(false);
        return;
      }
      const syncMetadataStr = await orca.plugins.getData(pluginName2, "syncMetadata") || '{"lastSyncTime":0,"lastSyncMeta":{},"version":"1"}';
      let syncMetadata = {};
      try {
        syncMetadata = JSON.parse(syncMetadataStr);
      } catch {
        syncMetadata = { lastSyncTime: 0, lastSyncMeta: {}, version: "1" };
      }
      const toDownload = [];
      for (const file of cloudFiles) {
        if (!inboxFullSync) {
          const localMeta = syncMetadata.lastSyncMeta[file.id];
          if (localMeta && localMeta.etag && file.etag && localMeta.etag === file.etag) continue;
        }
        toDownload.push({ id: file.id, path: file.path, etag: file.etag || "" });
      }
      if (toDownload.length === 0) {
        setInboxMessage("没有新的笔记需要同步");
        setInboxSyncing(false);
        setInboxFullSync(false);
        return;
      }
      setInboxMessage(`正在下载 ${toDownload.length} 条笔记...`);
      const existingIds = new Set(notes.map((n) => n.id));
      const newNotes = [];
      let processed = 0;
      for (const file of toDownload) {
        try {
          const atomic = await fetchCloudNoteDirect(inboxConfig, file.path);
          if (!atomic) continue;
          const pn = parseAtomicNote(atomic);
          if (pn.isRemoved) continue;
          const noteId = pn.noteId;
          if (existingIds.has(noteId)) continue;
          let content = pn.content || "";
          if (pn.images.length > 0) {
            for (const img of pn.images) {
              const remotePath = img.remotePath || img.remoteUrl;
              if (!remotePath) continue;
              try {
                const result = await fetchCloudAssetDirect(inboxConfig, remotePath);
                if (result && result.length >= 2) {
                  const [mimeType, buffer] = result;
                  const assetPath = await orca.invokeBackend("upload-asset-binary", mimeType, buffer);
                  if (assetPath) {
                    content = content.replace(remotePath, assetPath);
                    if (img.remoteUrl && img.remoteUrl !== remotePath) {
                      content = content.replace(img.remoteUrl, assetPath);
                    }
                  }
                }
              } catch (err) {
                console.warn("mcard download inbox image failed:", remotePath, err);
              }
            }
          }
          newNotes.push({
            id: noteId,
            blockId: 0,
            content,
            tags: pn.tags,
            createdAt: pn.createdAt.getTime(),
            updatedAt: pn.updatedAt.getTime(),
            pinned: false,
            ...pn.title && pn.title !== "Untitled" ? { title: pn.title } : {},
            ...pn.parentId ? { parent_ids: [pn.parentId] } : {}
          });
          syncMetadata.lastSyncMeta[file.id] = { etag: file.etag || "", mtime: 0 };
          existingIds.add(noteId);
        } catch (err) {
          console.warn("[inbox-sync] Failed to fetch note", file.id, ":", err);
        }
        processed++;
        if (processed % 5 === 0) {
          setInboxMessage(`正在下载... (${processed}/${toDownload.length})`);
        }
      }
      syncMetadata.lastSyncTime = Date.now();
      try {
        await orca.plugins.setData(pluginName2, "syncMetadata", JSON.stringify(syncMetadata));
      } catch {
      }
      if (newNotes.length > 0) {
        setNotes((prev) => [...prev, ...newNotes]);
      }
      setInboxMessage(`同步完成，新增 ${newNotes.length} 条笔记`);
    } catch (err) {
      setInboxMessage("同步失败：" + ((err == null ? void 0 : err.message) || String(err)));
      console.error("[inbox-sync] Sync error:", err);
    }
    setInboxSyncing(false);
    setInboxFullSync(false);
  }
  const allTags = React.useMemo(() => {
    const set = /* @__PURE__ */ new Set();
    for (const n of notes) for (const tag of n.tags) set.add(tag);
    const sorted = Array.from(set).sort();
    const pinned = sorted.filter((t2) => pinnedTags.includes(t2));
    const unpinned = sorted.filter((t2) => !pinnedTags.includes(t2));
    return [...pinned, ...unpinned];
  }, [notes, pinnedTags]);
  const filteredNotes = React.useMemo(() => {
    let list = [...notes];
    if (!settings.showMemoNotesInList) {
      list = list.filter((n) => !n.parent_ids || n.parent_ids.length === 0);
    }
    if (selectedTag) {
      list = list.filter(
        (n) => n.tags.some((t2) => t2 === selectedTag || t2.startsWith(selectedTag + "/"))
      );
    }
    if (searchText.trim()) {
      const q = searchText.trim().toLowerCase();
      list = list.filter((n) => n.content.toLowerCase().includes(q));
    }
    list.sort((a, b) => b.createdAt - a.createdAt);
    return list;
  }, [notes, selectedTag, searchText, settings.showMemoNotesInList]);
  const weekNotes = React.useMemo(() => {
    return notes.filter((n) => isThisWeek(n.createdAt)).sort((a, b) => b.createdAt - a.createdAt);
  }, [notes]);
  const reviewNotes = React.useMemo(() => {
    const total = settings.dailyCount || 8;
    const now = Date.now();
    const history = reviewHistoryRef.current;
    const scored = notes.map((n) => {
      const last = history[n.id] || 0;
      const daysSince = (now - last) / 864e5;
      const score = last === 0 ? 1e3 + Math.random() : daysSince * 100 + Math.random();
      return { n, score };
    }).sort((a, b) => b.score - a.score).slice(0, total).map((x) => x.n);
    return scored;
  }, [notes, settings.dailyCount, reviewIndex]);
  const sidebarHeatmap = React.useMemo(() => {
    const today = /* @__PURE__ */ new Date();
    const dayCounts = {};
    for (const n of notes) {
      const d = new Date(n.createdAt);
      const diff = Math.floor((today.getTime() - d.getTime()) / 864e5);
      if (diff >= 0 && diff < 84) {
        const key = formatDateKey(d.getTime());
        dayCounts[key] = (dayCounts[key] || 0) + 1;
      }
    }
    const cells = [];
    for (let row = 0; row < 7; row++) {
      for (let col = 0; col < 12; col++) {
        const dayIndex = col * 7 + row;
        const date = new Date(today);
        date.setDate(date.getDate() - (83 - dayIndex));
        const key = formatDateKey(date.getTime());
        const count = dayCounts[key] || 0;
        let level = 0;
        if (count >= 1) level = 2;
        if (count >= 3) level = 3;
        if (count >= 5) level = 4;
        const tooltip = count > 0 ? `${count}条 ${date.getMonth() + 1}月${date.getDate()}日` : `${date.getMonth() + 1}月${date.getDate()}日`;
        cells.push({ level, tooltip });
      }
    }
    const monthNames = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
    const months = [];
    for (let i = 2; i >= 0; i--) {
      const date = new Date(today);
      date.setMonth(date.getMonth() - i);
      months.push({ name: monthNames[date.getMonth()], start: 0, end: 0 });
    }
    const spans = [
      { start: 2, end: 4 },
      { start: 6, end: 8 },
      { start: 10, end: 12 }
    ];
    return { cells, months, spans };
  }, [notes]);
  const morandi = getMorandiColor(settings.morandiColor);
  const themeVars = {};
  if (settings.themeMode === "morandi") {
    themeVars["--mcard-morandi-color"] = morandi.color;
    themeVars["--mcard-morandi-bg"] = morandi.bg;
    themeVars["--mcard-font-size"] = `${settings.fontSize}px`;
  } else {
    themeVars["--mcard-font-size"] = `${settings.fontSize}px`;
  }
  async function handleSave() {
    var _a;
    const text = sanitizeText(captureText);
    if (!text || isSaving) return;
    setIsSaving(true);
    const tags = extractTags$1(text);
    const createdAt = Date.now();
    const newNote = {
      id: `mcard-${createdAt}-${Math.random().toString(36).slice(2, 7)}`,
      blockId: 0,
      content: text,
      tags,
      createdAt,
      updatedAt: createdAt,
      ...captureTitle.trim() ? { title: captureTitle.trim() } : {},
      ...captureParentIds.length > 0 ? { parent_ids: captureParentIds } : {}
    };
    try {
      if (settings.syncToJournal) {
        await insertNoteToJournal(newNote);
      }
      setNotes((prev) => [newNote, ...prev]);
      setCaptureText("");
      setCaptureTitle("");
      setCaptureParentIds([]);
      setCaptureParentSearch("");
      setShowCaptureParentPicker(false);
      orca.notify("success", t("Note saved"));
    } catch (err) {
      console.error("mcard save fail:", err);
      orca.notify("error", t("Failed to save note"));
    } finally {
      setIsSaving(false);
      (_a = textareaRef.current) == null ? void 0 : _a.focus();
    }
  }
  async function insertNoteToJournal(note) {
    try {
      const journal = await orca.invokeBackend("get-journal-block", new Date(note.createdAt));
      if (!journal) return 0;
      const inboxName = settings.inboxName || DEFAULT_SETTINGS.inboxName;
      await orca.commands.invokeGroup(async () => {
        var _a;
        let inboxBlock = null;
        for (const childId of journal.children || []) {
          const child = orca.state.blocks[childId];
          if (child && ((_a = child.text) == null ? void 0 : _a.trim()) === inboxName) {
            inboxBlock = child;
            break;
          }
        }
        if (!inboxBlock) {
          const bid = await orca.commands.invokeEditorCommand(
            "core.editor.insertBlock",
            null,
            journal,
            "lastChild",
            [{ t: "t", v: inboxName }]
          );
          inboxBlock = orca.state.blocks[bid];
        }
        if (!inboxBlock) return;
        const blockId = await orca.commands.invokeEditorCommand(
          "core.editor.insertBlock",
          null,
          inboxBlock,
          "lastChild",
          [{ t: "t", v: note.content }],
          { type: "text" },
          new Date(note.createdAt),
          new Date(note.updatedAt)
        );
        if (settings.noteTag) {
          await orca.commands.invokeEditorCommand(
            "core.editor.insertTag",
            null,
            blockId,
            settings.noteTag
          );
        }
      });
      return 1;
    } catch (err) {
      console.warn("mcard sync to journal skipped:", err);
      return 0;
    }
  }
  async function handleDelete(note) {
    setNotes((prev) => prev.filter((n) => n.id !== note.id));
    if (note.blockId && orca.state.blocks[note.blockId]) {
      try {
        await orca.commands.invokeGroup(async () => {
          await orca.commands.invokeEditorCommand(
            "core.editor.deleteBlocks",
            null,
            [note.blockId]
          );
        });
      } catch (err) {
        console.warn("mcard delete block skipped:", err);
      }
    }
  }
  async function handleDeleteAll() {
    if (!window.confirm("确认删除全部数据？此操作不可恢复！")) return;
    setNotes([]);
    await saveNotes(pluginName2, []);
  }
  async function handleImportNotes(importedNotes) {
    const existingIds = new Set(notes.map((n) => n.id));
    const newNotes = importedNotes.filter((n) => !existingIds.has(n.id));
    if (newNotes.length === 0) {
      orca.notify("info", "没有新笔记可导入");
      return;
    }
    const merged = [...newNotes, ...notes];
    setNotes(merged);
    await saveNotes(pluginName2, merged);
    orca.notify("success", `成功导入 ${newNotes.length} 条笔记`);
  }
  function autoResizeTextarea(ta) {
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = ta.scrollHeight + "px";
  }
  function startDetailEdit() {
    if (!detailNote) return;
    setDetailEditing(true);
    setDetailEditText(detailNote.content);
    setDetailEditTitle(detailNote.title || "");
    setTimeout(() => {
      const ta = document.querySelector(".mcard-detail-edit-area");
      if (ta) {
        ta.style.height = "auto";
        ta.style.height = ta.scrollHeight + "px";
        ta.focus();
      }
    }, 50);
  }
  async function saveDetailEdit() {
    if (!detailNote || !detailEditText.trim()) return;
    const text = detailEditText.trim();
    const tags = extractTags$1(text);
    const updated = notes.map(
      (n) => n.id === detailNote.id ? { ...n, content: text, tags, title: detailEditTitle || void 0, updatedAt: Date.now() } : n
    );
    setNotes(updated);
    setDetailNote({ ...detailNote, content: text, tags, title: detailEditTitle || void 0, updatedAt: Date.now() });
    setDetailEditing(false);
    await saveNotes(pluginName2, updated);
  }
  function cancelDetailEdit() {
    setDetailEditing(false);
  }
  function detailInsertText(before, after = "") {
    const ta = document.querySelector(".mcard-detail-edit-area");
    if (!ta) return;
    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    const text = ta.value;
    const newText = text.substring(0, start) + before + text.substring(end) + after;
    setDetailEditText(newText);
    const newPos = start + before.length;
    requestAnimationFrame(() => {
      ta.focus();
      ta.setSelectionRange(newPos, newPos);
    });
  }
  function handleDetailImageClick() {
    pickImage((markdown) => detailInsertText(markdown, ""));
  }
  function handleDetailAtClick() {
    const ta = document.querySelector(".mcard-detail-edit-area");
    showMentionPicker(ta, (inp, nid) => {
      const target = notes.find((n) => n.id === nid);
      const refText = (target == null ? void 0 : target.title) || nid;
      const start = inp.selectionStart;
      const end = inp.selectionEnd;
      const text = inp.value;
      const newText = text.substring(0, start) + `[[${refText}]]` + text.substring(end);
      inp.value = newText;
      inp.selectionStart = inp.selectionEnd = start + refText.length + 4;
      setDetailEditText(newText);
      inp.focus();
      closeMentionPicker();
    });
  }
  function startEditNote(note) {
    setEditingNoteId(note.id);
    setEditText(note.content);
    setEditTitle(note.title || "");
    setShowEditTagPicker(false);
    setEditTagPickerFilter("");
    setEditTagPickerActiveIdx(0);
    setEditParentSearch("");
    setShowEditParentPicker(false);
    requestAnimationFrame(() => autoResizeTextarea(editTextareaRef.current));
  }
  function cancelEditNote() {
    setEditingNoteId(null);
    setEditText("");
    setEditTitle("");
    setShowEditTagPicker(false);
    setEditTagPickerFilter("");
    setEditParentSearch("");
    setShowEditParentPicker(false);
  }
  async function saveEditNote(note) {
    const text = editText.trim();
    if (!text) return;
    const tags = extractTags$1(text);
    const title = editTitle.trim() || void 0;
    setNotes(
      (prev) => prev.map(
        (n) => n.id === note.id ? { ...n, content: text, tags, title, updatedAt: Date.now() } : n
      )
    );
    setEditingNoteId(null);
    setEditText("");
  }
  function togglePinTag(tagName) {
    setPinnedTags((prev) => {
      if (prev.includes(tagName)) {
        return prev.filter((t2) => t2 !== tagName);
      }
      return [...prev, tagName];
    });
    setTagMenuTag(null);
    setTagMenuPos(null);
  }
  function doRenameTag(oldName, newName) {
    if (!newName || newName === oldName) return;
    setNotes(
      (prev) => prev.map((n) => {
        let content = n.content;
        let tags = [...n.tags];
        tags = tags.map((t2) => {
          if (t2 === oldName) return newName;
          if (t2.startsWith(oldName + "/")) return newName + t2.substring(oldName.length);
          return t2;
        });
        const renameMap = [];
        for (const t2 of n.tags) {
          if (t2 === oldName) {
            renameMap.push([oldName, newName]);
          } else if (t2.startsWith(oldName + "/")) {
            renameMap.push([t2, newName + t2.substring(oldName.length)]);
          }
        }
        renameMap.sort((a, b) => b[0].length - a[0].length);
        for (const [from, to] of renameMap) {
          content = content.replace(
            new RegExp("#" + escapeRegExp(from) + "(?![\\w/])", "g"),
            "#" + to
          );
        }
        return { ...n, content, tags, updatedAt: Date.now() };
      })
    );
    setPinnedTags(
      (prev) => prev.map((t2) => {
        if (t2 === oldName) return newName;
        if (t2.startsWith(oldName + "/")) return newName + t2.substring(oldName.length);
        return t2;
      })
    );
    if (selectedTag === oldName) setSelectedTag(newName);
    else if (selectedTag == null ? void 0 : selectedTag.startsWith(oldName + "/"))
      setSelectedTag(newName + selectedTag.substring(oldName.length));
    setRenameTagOld(null);
    setRenameTagNew("");
  }
  function deleteTagOnly(tagName) {
    setNotes(
      (prev) => prev.map((n) => {
        const tags = n.tags.filter((t2) => t2 !== tagName && !t2.startsWith(tagName + "/"));
        let content = n.content;
        content = content.replace(new RegExp("#" + escapeRegExp(tagName) + "(?![\\w/])", "g"), "").replace(/\s+/g, " ").trim();
        return { ...n, content, tags, updatedAt: Date.now() };
      })
    );
    setPinnedTags((prev) => prev.filter((t2) => t2 !== tagName && !t2.startsWith(tagName + "/")));
    if (selectedTag === tagName || (selectedTag == null ? void 0 : selectedTag.startsWith(tagName + "/"))) setSelectedTag(null);
    setDeleteTagTarget(null);
  }
  function deleteTagAndNotes(tagName) {
    setNotes(
      (prev) => prev.filter((n) => !n.tags.some((t2) => t2 === tagName || t2.startsWith(tagName + "/")))
    );
    setPinnedTags((prev) => prev.filter((t2) => t2 !== tagName && !t2.startsWith(tagName + "/")));
    if (selectedTag === tagName || (selectedTag == null ? void 0 : selectedTag.startsWith(tagName + "/"))) setSelectedTag(null);
    setDeleteTagTarget(null);
  }
  function escapeRegExp(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function insertEditText(prefix, suffix) {
    const ta = editTextareaRef.current;
    if (!ta) return;
    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    const newText = editText.substring(0, start) + prefix + editText.substring(start, end) + suffix + editText.substring(end);
    setEditText(newText);
    requestAnimationFrame(() => {
      ta.focus();
      ta.selectionStart = start + prefix.length;
      ta.selectionEnd = end + prefix.length;
    });
  }
  function editToolbarTagClick() {
    insertEditText("#", "");
  }
  function editToolbarTaskClick() {
    insertEditText("- [ ] ", "");
  }
  function editToolbarUlClick() {
    insertEditText("- ", "");
  }
  function editToolbarOlClick() {
    const ta = editTextareaRef.current;
    if (!ta) return;
    const lines = ta.value.substring(0, ta.selectionStart).split("\n");
    const currentLine = lines[lines.length - 1];
    const match = currentLine.match(/^(\d+)\.\s/);
    const num = match ? parseInt(match[1]) + 1 : 1;
    insertEditText(`${num}. `, "");
  }
  function editToolbarImageClick() {
    pickImage((markdown) => insertEditText(markdown, ""));
  }
  function editToolbarAtClick() {
    insertEditText("@", " ");
  }
  function handleEditKeyDown(e) {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      return;
    }
    if (e.key === "#") {
      setTimeout(() => {
        if (editTextareaRef.current) setEditTagPickerTop(getCursorTop(editTextareaRef.current));
        setShowEditTagPicker(true);
        setEditTagPickerFilter("");
        setEditTagPickerActiveIdx(0);
      }, 10);
    }
    if (e.key === "Escape") {
      if (showEditTagPicker) {
        setShowEditTagPicker(false);
      }
    }
    if (showEditTagPicker) {
      const filtered = allTags.filter((t2) => !editTagPickerFilter || t2.includes(editTagPickerFilter));
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setEditTagPickerActiveIdx((i) => Math.min(i + 1, filtered.length));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setEditTagPickerActiveIdx((i) => Math.max(i - 1, 0));
      }
      if (e.key === "Enter" && !(e.metaKey || e.ctrlKey)) {
        if (filtered.length > 0 || editTagPickerFilter.trim()) {
          e.preventDefault();
          if (editTagPickerActiveIdx < filtered.length) {
            insertEditTag(filtered[editTagPickerActiveIdx]);
          } else if (editTagPickerFilter.trim()) {
            insertEditTag(editTagPickerFilter.trim());
          }
        } else {
          setShowEditTagPicker(false);
        }
      }
      if (e.key === "Escape") {
        e.preventDefault();
        setShowEditTagPicker(false);
      }
    }
  }
  function handleEditTextareaChange(e) {
    const newVal = e.target.value;
    setEditText(newVal);
    autoResizeTextarea(e.target);
    if (showEditTagPicker) {
      const ta = editTextareaRef.current;
      if (!ta) return;
      const cursorPos = ta.selectionStart;
      const beforeCursor = newVal.substring(0, cursorPos);
      const hashIdx = beforeCursor.lastIndexOf("#");
      if (hashIdx >= 0) {
        const filter = beforeCursor.substring(hashIdx + 1);
        if (!/\s/.test(filter)) {
          setEditTagPickerFilter(filter);
        } else {
          setShowEditTagPicker(false);
        }
      } else {
        setShowEditTagPicker(false);
      }
    }
  }
  function insertEditTag(tagName) {
    const ta = editTextareaRef.current;
    if (!ta) return;
    const cursorPos = ta.selectionStart;
    const text = editText;
    const beforeCursor = text.substring(0, cursorPos);
    const afterCursor = text.substring(cursorPos);
    const lastHash = beforeCursor.lastIndexOf("#");
    let newBefore;
    if (lastHash >= 0) {
      newBefore = beforeCursor.substring(0, lastHash) + "#" + tagName + " ";
    } else {
      newBefore = beforeCursor + "#" + tagName + " ";
    }
    const newText = newBefore + afterCursor;
    setEditText(newText);
    setShowEditTagPicker(false);
    setEditTagPickerFilter("");
    const newPos = newBefore.length;
    requestAnimationFrame(() => {
      ta.focus();
      ta.setSelectionRange(newPos, newPos);
    });
  }
  async function handleReviewNext() {
    const history = { ...reviewHistoryRef.current };
    if (reviewNotes[reviewIndex]) {
      history[reviewNotes[reviewIndex].id] = Date.now();
      reviewHistoryRef.current = history;
      await saveReviewHistory(pluginName2, history);
    }
    setReviewIndex((i) => (i + 1) % Math.max(reviewNotes.length, 1));
  }
  function handleRandomPick() {
    if (notes.length === 0) return;
    const pick = notes[Math.floor(Math.random() * notes.length)];
    setRandomNote(pick);
  }
  function shouldCollapseNote(note) {
    const lineCount = note.content.split("\n").length;
    return lineCount > COLLAPSE_LINE_COUNT || note.content.length > 200;
  }
  function isNoteExpanded(noteId) {
    return expandedNotes.has(noteId);
  }
  function insertMemoText(noteId, before, after = "") {
    const ta = document.querySelector(`[data-memo-input="${noteId}"]`);
    if (!ta) return;
    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    const val = ta.value;
    ta.value = val.substring(0, start) + before + val.substring(start, end) + after + val.substring(end);
    const newPos = start + before.length + (end - start);
    ta.selectionStart = ta.selectionEnd = newPos;
    ta.focus();
    setMemoInputText(ta.value);
  }
  function selectMentionNote(targetNote, currentNoteId) {
    let preview = targetNote.content.replace(/#[^\s\d][^\s]*(?:\/[^\s]+)*/g, "").trim().replace(/\s+/g, " ");
    preview = preview.split("\n")[0];
    preview = preview.substring(0, 40);
    const ref = `@[${preview}](ref:${targetNote.id}) `;
    insertMemoText(currentNoteId, ref);
    setShowMemoMention(false);
    setMemoMentionFilter("");
  }
  function toggleNoteExpand(noteId) {
    setExpandedNotes((prev) => {
      const next = new Set(prev);
      if (next.has(noteId)) {
        next.delete(noteId);
      } else {
        next.add(noteId);
      }
      return next;
    });
  }
  function getCursorTop(ta) {
    const text = ta.value.substring(0, ta.selectionStart);
    const lines = text.split("\n");
    const lineCount = lines.length;
    const fontSize = parseFloat(getComputedStyle(ta).fontSize) || 14.5;
    const lineHeight = fontSize * 1.8;
    const paddingTop = 12;
    return paddingTop + lineCount * lineHeight;
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      if (settings.enterToSubmit) {
        if (!e.shiftKey && !showTagPicker) {
          e.preventDefault();
          handleSave();
        }
      } else {
        if (e.metaKey || e.ctrlKey) {
          e.preventDefault();
          handleSave();
        }
      }
    }
    if (e.key === "#") {
      setTimeout(() => {
        if (textareaRef.current) setTagPickerTop(getCursorTop(textareaRef.current));
        setShowTagPicker(true);
        setTagPickerFilter("");
        setTagPickerActiveIdx(0);
      }, 10);
    }
    if (e.key === "Escape") {
      setShowTagPicker(false);
    }
    if (showTagPicker) {
      const filtered = allTags.filter((t2) => !tagPickerFilter || t2.includes(tagPickerFilter));
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setTagPickerActiveIdx((i) => Math.min(i + 1, filtered.length));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setTagPickerActiveIdx((i) => Math.max(i - 1, 0));
      }
      if (e.key === "Enter" && settings.enterToSubmit && e.shiftKey) ;
      else if (e.key === "Enter" && !settings.enterToSubmit) ;
      if (e.key === "Enter" && showTagPicker) {
        e.preventDefault();
        if (tagPickerActiveIdx < filtered.length) {
          insertTag(filtered[tagPickerActiveIdx]);
        } else if (tagPickerFilter.trim()) {
          insertTag(tagPickerFilter.trim());
        }
      }
    }
  }
  function handleTextareaChange(e) {
    const newVal = e.target.value;
    setCaptureText(newVal);
    if (showTagPicker) {
      const ta = textareaRef.current;
      if (!ta) return;
      const cursorPos = ta.selectionStart;
      const beforeCursor = newVal.substring(0, cursorPos);
      const hashIdx = beforeCursor.lastIndexOf("#");
      if (hashIdx >= 0) {
        const filter = beforeCursor.substring(hashIdx + 1);
        if (!/\s/.test(filter)) {
          setTagPickerFilter(filter);
        } else {
          setShowTagPicker(false);
        }
      } else {
        setShowTagPicker(false);
      }
    }
  }
  function insertText(before, after = "") {
    const ta = textareaRef.current;
    if (!ta) return;
    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    const text = ta.value;
    const newText = text.substring(0, start) + before + text.substring(end) + after;
    setCaptureText(newText);
    const newPos = start + before.length;
    requestAnimationFrame(() => {
      ta.focus();
      ta.setSelectionRange(newPos, newPos);
    });
  }
  function insertTag(tagName) {
    const ta = textareaRef.current;
    if (!ta) return;
    const cursorPos = ta.selectionStart;
    const text = ta.value;
    const beforeCursor = text.substring(0, cursorPos);
    const afterCursor = text.substring(cursorPos);
    const lastHash = beforeCursor.lastIndexOf("#");
    let newBefore;
    if (lastHash >= 0) {
      newBefore = beforeCursor.substring(0, lastHash) + "#" + tagName + " ";
    } else {
      newBefore = beforeCursor + "#" + tagName + " ";
    }
    const newText = newBefore + afterCursor;
    setCaptureText(newText);
    const newPos = newBefore.length;
    requestAnimationFrame(() => {
      ta.focus();
      ta.setSelectionRange(newPos, newPos);
    });
    setShowTagPicker(false);
    setTagPickerFilter("");
  }
  function handleToolbarTagClick() {
    var _a;
    if (showTagPicker) {
      setShowTagPicker(false);
    } else {
      setShowTagPicker(true);
      setTagPickerFilter("");
      setTagPickerActiveIdx(0);
      (_a = textareaRef.current) == null ? void 0 : _a.focus();
    }
  }
  function handleToolbarTaskClick() {
    insertText("- [ ] ", "");
  }
  function handleToolbarUlClick() {
    insertText("- ", "");
  }
  function handleToolbarOlClick() {
    const ta = textareaRef.current;
    if (!ta) return;
    const lines = ta.value.substring(0, ta.selectionStart).split("\n");
    const currentLine = lines[lines.length - 1];
    const match = currentLine.match(/^(\d+)\.\s/);
    const num = match ? parseInt(match[1]) + 1 : 1;
    insertText(`${num}. `, "");
  }
  function handleToolbarImageClick() {
    pickImage((markdown) => insertText(markdown, ""));
  }
  async function uploadImageAsset(file) {
    const arrayBuffer = await file.arrayBuffer();
    const assetPath = await orca.invokeBackend("upload-asset-binary", file.type, arrayBuffer);
    return assetPath || "";
  }
  async function uploadImageFromUrl(url) {
    const response = await fetch(url);
    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const mimeType = blob.type || "image/png";
    const assetPath = await orca.invokeBackend("upload-asset-binary", mimeType, arrayBuffer);
    return assetPath || "";
  }
  function pickImage(callback) {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.style.display = "none";
    document.body.appendChild(fileInput);
    fileInput.onchange = async () => {
      var _a;
      const file = (_a = fileInput.files) == null ? void 0 : _a[0];
      if (fileInput.parentNode) document.body.removeChild(fileInput);
      if (!file || !file.type.startsWith("image/")) return;
      try {
        const assetPath = await uploadImageAsset(file);
        if (assetPath) {
          callback(`![](${assetPath})`);
        }
      } catch (err) {
        console.warn("mcard upload image failed:", err);
      }
    };
    fileInput.click();
  }
  function handleToolbarAtClick() {
    showMentionPicker(textareaRef.current);
  }
  function showMentionPicker(input, onInsert) {
    if (!input) return;
    closeMentionPicker();
    const triggerPos = input.selectionStart;
    mentionTriggerPosRef.current = triggerPos;
    const value = input.value;
    input.value = value.substring(0, triggerPos) + "@" + value.substring(triggerPos);
    input.setSelectionRange(triggerPos + 1, triggerPos + 1);
    input.focus();
    _openMentionPicker(input, triggerPos, onInsert);
  }
  function _openMentionPicker(input, triggerPos, onInsert) {
    const picker = document.createElement("div");
    picker.className = "mcard-mention-picker";
    picker.dataset.triggerPos = String(triggerPos);
    if (onInsert) {
      picker.__onInsert = onInsert;
    }
    const cursorTop = getCursorTop(input);
    const rect = input.getBoundingClientRect();
    const fontSize = parseFloat(getComputedStyle(input).fontSize) || 14.5;
    const lineHeight = fontSize * 1.8;
    picker.style.position = "fixed";
    picker.style.left = `${rect.left + 20}px`;
    picker.style.top = `${rect.top + cursorTop + lineHeight}px`;
    picker.style.zIndex = "99999";
    document.body.appendChild(picker);
    mentionPickerRef.current = picker;
    const searchText2 = input.value.substring(triggerPos, input.selectionStart).replace(/^@/, "");
    _renderMentionPicker(picker, searchText2, input, onInsert);
    const close = (e) => {
      if (!picker.contains(e.target)) {
        closeMentionPicker();
        document.removeEventListener("click", close);
      }
    };
    setTimeout(() => document.addEventListener("click", close), 0);
  }
  function _renderMentionPicker(picker, searchText2, input, onInsert) {
    const savedOnInsert = onInsert || picker.__onInsert;
    const listEl = document.createElement("div");
    listEl.className = "mcard-mention-picker-list";
    const kw = searchText2.toLowerCase().trim();
    let matched = notes.filter((n) => !n.parent_ids || n.parent_ids.length === 0 || n.parent_ids && n.parent_ids.length > 0 && settings.showMemoNotesInList);
    if (kw) {
      matched = matched.filter((n) => (n.content || "").toLowerCase().includes(kw) || (n.title || "").toLowerCase().includes(kw));
    }
    matched = matched.slice(0, 20);
    if (matched.length === 0) {
      listEl.innerHTML = '<div class="mcard-mention-picker-empty">未找到相关笔记</div>';
    } else {
      listEl.innerHTML = matched.map((n) => {
        const dateStr = formatDate(n.createdAt).split(" ")[0];
        const titleText = n.title || "";
        const preview = (n.content || "").split("\n")[0].substring(0, 60);
        const titleHtml = titleText ? `<div class="mcard-mention-picker-title">${titleText}</div>` : "";
        const highlightContent = kw ? preview.replace(new RegExp(`(${kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi"), '<mark class="mcard-mention-highlight">$1</mark>') : preview;
        return `<div class="mcard-mention-picker-item" data-id="${n.id}">
          <div class="mcard-mention-picker-date">${dateStr}</div>
          ${titleHtml}
          <div class="mcard-mention-picker-preview">${highlightContent}</div>
        </div>`;
      }).join("");
    }
    picker.innerHTML = "";
    picker.appendChild(listEl);
    const insertFn = savedOnInsert || insertMention;
    listEl.querySelectorAll(".mcard-mention-picker-item").forEach((el) => {
      el.addEventListener("click", () => {
        const noteId = el.dataset.id;
        if (noteId) insertFn(input, noteId);
      });
    });
  }
  function filterMentionPicker(input) {
    const picker = mentionPickerRef.current;
    if (!picker) return;
    const triggerPos = parseInt(picker.dataset.triggerPos || "0", 10);
    const cursorPos = input.selectionStart;
    if (cursorPos <= triggerPos) {
      closeMentionPicker();
      return;
    }
    const value = input.value;
    if (value.substring(triggerPos, triggerPos + 1) !== "@") {
      closeMentionPicker();
      return;
    }
    const searchText2 = value.substring(triggerPos + 1, cursorPos);
    _renderMentionPicker(picker, searchText2, input, picker.__onInsert);
  }
  function insertMention(input, noteId, onUpdate) {
    const picker = mentionPickerRef.current;
    const triggerPos = picker ? parseInt(picker.dataset.triggerPos || "0", 10) : mentionTriggerPosRef.current;
    const savedPos = input.selectionStart;
    const value = input.value;
    if (triggerPos >= 0 && value.substring(triggerPos, triggerPos + 1) === "@") {
      const before = value.substring(0, triggerPos);
      const after = value.substring(savedPos);
      const note = notes.find((n) => n.id === noteId);
      const refText = (note == null ? void 0 : note.title) || noteId;
      const insertText2 = `[[${refText}]]`;
      input.value = before + insertText2 + after;
      const newPos = triggerPos + insertText2.length;
      input.setSelectionRange(newPos, newPos);
    }
    closeMentionPicker();
    input.focus();
    const updater = onUpdate || setCaptureText;
    updater(input.value);
  }
  function closeMentionPicker() {
    if (mentionPickerRef.current) {
      mentionPickerRef.current.remove();
      mentionPickerRef.current = null;
    }
  }
  function showMemoTagPicker(noteId, buttonEl) {
    closeMemoTagPicker();
    let ta = document.querySelector(`[data-memo-input="${noteId}"]`);
    if (!ta) ta = document.querySelector(`[data-detail-memo-input="${noteId}"]`);
    if (!ta) return;
    const wrapper = ta.parentElement;
    if (!wrapper) return;
    const isTextarea = buttonEl.tagName === "TEXTAREA";
    const picker = document.createElement("div");
    picker.className = "mcard-tag-picker";
    picker.style.left = "80px";
    if (isTextarea) {
      const cursorTop = getCursorTop(ta);
      picker.style.top = `${cursorTop}px`;
    } else {
      picker.style.bottom = "100%";
      picker.style.top = "auto";
    }
    const titleEl = document.createElement("div");
    titleEl.className = "mcard-tag-picker-title";
    titleEl.textContent = "选择标签";
    picker.appendChild(titleEl);
    const listEl = document.createElement("div");
    listEl.className = "mcard-tag-picker-list";
    picker.appendChild(listEl);
    wrapper.appendChild(picker);
    memoTagPickerRef.current = picker;
    let activeIdx = 0;
    const selectTag = (tagName) => {
      const ta2 = document.querySelector(`[data-memo-input="${noteId}"]`) || document.querySelector(`[data-detail-memo-input="${noteId}"]`);
      if (ta2) {
        const cursorPos = ta2.selectionStart;
        const val = ta2.value;
        const beforeCursor = val.substring(0, cursorPos);
        const afterCursor = val.substring(cursorPos);
        const lastHash = beforeCursor.lastIndexOf("#");
        let newBefore;
        if (lastHash >= 0) {
          newBefore = beforeCursor.substring(0, lastHash) + "#" + tagName + " ";
        } else {
          newBefore = beforeCursor + "#" + tagName + " ";
        }
        ta2.value = newBefore + afterCursor;
        const newPos = newBefore.length;
        ta2.selectionStart = ta2.selectionEnd = newPos;
        setMemoInputText(ta2.value);
        requestAnimationFrame(() => {
          ta2.focus();
          ta2.setSelectionRange(newPos, newPos);
        });
      }
      closeMemoTagPicker();
    };
    const renderTags = (filter) => {
      const kw = filter.toLowerCase().trim();
      let filtered = allTags.filter((t2) => !kw || t2.toLowerCase().includes(kw)).slice(0, 5);
      listEl.innerHTML = "";
      if (filtered.length > 0) {
        filtered.forEach((t2, idx) => {
          const item = document.createElement("div");
          item.className = `mcard-tag-picker-item${idx === activeIdx ? " active" : ""}`;
          item.dataset.tag = t2;
          item.dataset.idx = String(idx);
          item.innerHTML = `<span class="mcard-tag-picker-item-hash">#</span><span class="mcard-tag-picker-item-name">${t2}</span>`;
          item.addEventListener("mouseenter", () => {
            activeIdx = idx;
            listEl.querySelectorAll(".mcard-tag-picker-item").forEach((el, i) => {
              el.classList.toggle("active", i === idx);
            });
          });
          item.addEventListener("click", () => selectTag(t2));
          listEl.appendChild(item);
        });
      } else if (kw) {
        const item = document.createElement("div");
        item.className = "mcard-tag-picker-item active";
        item.dataset.tag = kw;
        item.innerHTML = `<span class="mcard-tag-picker-item-hash">#</span><span class="mcard-tag-picker-item-name">创建新标签 "${kw}"</span>`;
        item.addEventListener("click", () => selectTag(kw));
        listEl.appendChild(item);
      }
      picker.__firstItem = filtered.length > 0 ? filtered[activeIdx] || filtered[0] : kw;
    };
    picker.__renderTags = renderTags;
    if (isTextarea) {
      renderTags("");
      const onKeyDown = (e) => {
        if (e.key === "Escape") {
          e.preventDefault();
          closeMemoTagPicker();
          ta.removeEventListener("keydown", onKeyDown);
          return;
        }
        if (e.key === "Enter") {
          e.preventDefault();
          const tag = picker.__firstItem;
          if (tag) {
            selectTag(tag);
          } else {
            closeMemoTagPicker();
          }
          ta.removeEventListener("keydown", onKeyDown);
          return;
        }
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
          e.preventDefault();
          const items = listEl.querySelectorAll(".mcard-tag-picker-item");
          if (e.key === "ArrowDown") activeIdx = Math.min(activeIdx + 1, items.length - 1);
          else activeIdx = Math.max(activeIdx - 1, 0);
          items.forEach((item, i) => item.classList.toggle("active", i === activeIdx));
          const activeItem = items[activeIdx];
          if (activeItem) picker.__firstItem = activeItem.dataset.tag;
        }
      };
      ta.addEventListener("keydown", onKeyDown);
      picker.__cleanup = () => ta.removeEventListener("keydown", onKeyDown);
    } else {
      const input = document.createElement("input");
      input.className = "mcard-tag-picker-search";
      input.placeholder = "搜索或创建标签...";
      picker.insertBefore(input, titleEl.nextSibling);
      input.addEventListener("input", () => {
        activeIdx = 0;
        renderTags(input.value);
      });
      renderTags("");
      input.focus();
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          const tag = picker.__firstItem || input.value.trim();
          if (tag) selectTag(tag);
        }
        if (e.key === "Escape") closeMemoTagPicker();
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
          e.preventDefault();
          const items = listEl.querySelectorAll(".mcard-tag-picker-item");
          if (e.key === "ArrowDown") activeIdx = Math.min(activeIdx + 1, items.length - 1);
          else activeIdx = Math.max(activeIdx - 1, 0);
          items.forEach((item, i) => item.classList.toggle("active", i === activeIdx));
          const activeItem = items[activeIdx];
          if (activeItem) picker.__firstItem = activeItem.dataset.tag;
        }
      });
    }
  }
  function closeMemoTagPicker() {
    if (memoTagPickerRef.current) {
      if (memoTagPickerRef.current.__cleanup) {
        memoTagPickerRef.current.__cleanup();
      }
      memoTagPickerRef.current.remove();
      memoTagPickerRef.current = null;
    }
  }
  function handleInputDetectMention(e) {
    _handleMentionInput(e.currentTarget, void 0);
  }
  function handleEditInputDetectMention(e) {
    _handleMentionInput(e.currentTarget, setEditText);
  }
  function handleMemoInputDetectMention(e) {
    const input = e.currentTarget;
    _handleMentionInput(input, setMemoInputText);
    _handleMemoTagInput(input);
  }
  function _handleMemoTagInput(input) {
    const cursorPos = input.selectionStart;
    const value = input.value;
    const beforeCursor = value.substring(0, cursorPos);
    const currentLine = beforeCursor.split("\n").pop() || "";
    const hashIndex = currentLine.lastIndexOf("#");
    if (hashIndex >= 0) {
      const afterHash = currentLine.substring(hashIndex + 1);
      if (!afterHash.includes("#") && !/\s/.test(afterHash) && currentLine.length - hashIndex <= 40) {
        const noteId = input.dataset.memoInput || input.dataset.detailMemoInput;
        if (noteId && !memoTagPickerRef.current) {
          showMemoTagPicker(noteId, input);
        } else if (memoTagPickerRef.current && memoTagPickerRef.current.__renderTags) {
          memoTagPickerRef.current.__renderTags(afterHash);
        }
        return;
      }
    }
    if (memoTagPickerRef.current) {
      closeMemoTagPicker();
    }
  }
  function _handleMentionInput(input, onUpdate) {
    const cursorPos = input.selectionStart;
    const value = input.value;
    const beforeCursor = value.substring(0, cursorPos);
    const currentLine = beforeCursor.split("\n").pop() || "";
    const atIndex = currentLine.lastIndexOf("@");
    let onInsert;
    if (onUpdate) {
      onInsert = (inp, nid) => insertMention(inp, nid, onUpdate);
    }
    if (atIndex >= 0) {
      const afterAt = currentLine.substring(atIndex + 1);
      if (!afterAt.includes("@") && currentLine.length - atIndex <= 40) {
        const lineStartPos = cursorPos - currentLine.length;
        if (mentionPickerRef.current) {
          filterMentionPicker(input);
          return;
        }
        _openMentionPicker(input, lineStartPos + atIndex, onInsert);
        return;
      }
    }
    if (mentionPickerRef.current) {
      const triggerPos = parseInt(mentionPickerRef.current.dataset.triggerPos || "0", 10);
      if (cursorPos <= triggerPos || value.substring(triggerPos, triggerPos + 1) !== "@") {
        closeMentionPicker();
      } else {
        filterMentionPicker(input);
      }
    }
  }
  function togglePin(note) {
    const updated = notes.map(
      (n) => n.id === note.id ? { ...n, pinned: !n.pinned } : n
    );
    setNotes(updated);
    void saveNotes(pluginName2, updated);
  }
  function closeNoteMenu() {
    const existing = document.querySelector(".mcard-note-menu-dropdown");
    if (existing) existing.remove();
    const existingListener = document.__mcard_note_menu_listener;
    if (existingListener) {
      document.removeEventListener("click", existingListener);
      document.__mcard_note_menu_listener = null;
    }
  }
  function showNoteMenu(note, triggerEl) {
    closeNoteMenu();
    const menu = document.createElement("div");
    menu.className = "mcard-note-menu-dropdown";
    const items = [
      { action: "edit", icon: "✏️", label: "编辑" },
      { action: "pin", icon: note.pinned ? "📍" : "📌", label: note.pinned ? "取消置顶" : "置顶" },
      { action: "copy", icon: "📋", label: "复制" },
      { action: "share", icon: "📤", label: "分享" },
      { action: "open", icon: "🔗", label: "打开" },
      { action: "delete", icon: "🗑", label: "删除", danger: true }
    ];
    const itemsHtml = items.map(
      (it) => `<div class="mcard-menu-item${it.danger ? " danger" : ""}" data-action="${it.action}">
            <span class="mcard-menu-icon">${it.icon}</span>
            <span class="mcard-menu-text">${it.label}</span>
          </div>`
    ).join(`<div class="mcard-menu-divider"></div>`);
    menu.innerHTML = itemsHtml;
    document.body.appendChild(menu);
    const rect = triggerEl.getBoundingClientRect();
    menu.style.position = "fixed";
    menu.style.zIndex = "99999";
    menu.style.visibility = "hidden";
    const menuHeight = menu.offsetHeight;
    const menuWidth = menu.offsetWidth;
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    menu.style.visibility = "visible";
    if (rect.bottom + 4 + menuHeight > viewportHeight) {
      menu.style.top = `${Math.max(8, rect.top - menuHeight - 4)}px`;
    } else {
      menu.style.top = `${rect.bottom + 4}px`;
    }
    let left = rect.right - menuWidth;
    if (left + menuWidth > viewportWidth) {
      left = viewportWidth - menuWidth - 8;
    }
    if (left < 8) left = 8;
    menu.style.left = `${left}px`;
    const handleClick = (e) => {
      const target = e.target;
      const item = target.closest(".mcard-menu-item");
      if (!item) {
        closeNoteMenu();
        return;
      }
      e.stopPropagation();
      const action = item.dataset.action;
      closeNoteMenu();
      if (!action) return;
      switch (action) {
        case "edit":
          startEditNote(note);
          break;
        case "pin":
          togglePin(note);
          break;
        case "copy":
          try {
            void navigator.clipboard.writeText(note.content);
          } catch {
          }
          break;
        case "share":
          try {
            if (navigator.share) {
              void navigator.share({ text: note.content, title: "分享笔记" }).catch(() => {
              });
            } else {
              void navigator.clipboard.writeText(note.content);
            }
          } catch {
          }
          break;
        case "open":
          openNote(note);
          break;
        case "delete":
          void handleDelete(note);
          break;
      }
    };
    menu.addEventListener("click", handleClick);
    setTimeout(() => {
      const closeOnOutside = (e) => {
        if (!menu.contains(e.target)) {
          closeNoteMenu();
        }
      };
      document.__mcard_note_menu_listener = closeOnOutside;
      document.addEventListener("click", closeOnOutside);
    }, 0);
  }
  function openNote(note) {
    setShuoshuoView("all");
    setSearchText("");
    setSelectedTag(null);
    setCurrentDate(new Date(note.createdAt));
  }
  const resolveCacheRef = React.useRef(/* @__PURE__ */ new Map());
  function evaluateCondition(cond, note) {
    const content = note.content.toLowerCase();
    const title = (note.title || "").toLowerCase();
    switch (cond.field) {
      case "content": {
        const val = (cond.value || "").toLowerCase();
        if (!val) return true;
        switch (cond.operator) {
          case "contains":
            return content.includes(val) || title.includes(val);
          case "not_contains":
            return !content.includes(val) && !title.includes(val);
          case "equals":
            return content === val || title === val;
          default:
            return true;
        }
      }
      case "tag":
      case "tag_include": {
        const tags = Array.isArray(cond.value) ? cond.value : [];
        if (tags.length === 0) return true;
        if (cond.operator === "not_contains") return !tags.some((t2) => note.tags.includes(t2));
        return tags.some((t2) => note.tags.includes(t2));
      }
      case "tag_exclude": {
        const tags = Array.isArray(cond.value) ? cond.value : [];
        if (tags.length === 0) return true;
        return !tags.some((t2) => note.tags.includes(t2));
      }
      case "date": {
        const dateVal = cond.value;
        if (!dateVal) return true;
        const noteTime = note.createdAt;
        if (cond.operator === "after") {
          const t2 = new Date(dateVal).getTime();
          return !isNaN(t2) && noteTime >= t2;
        }
        if (cond.operator === "before") {
          const t2 = new Date(dateVal).getTime() + 864e5;
          return !isNaN(t2) && noteTime <= t2;
        }
        if (cond.operator === "between" && Array.isArray(dateVal)) {
          const t0 = dateVal[0] ? new Date(dateVal[0]).getTime() : 0;
          const t1 = dateVal[1] ? new Date(dateVal[1]).getTime() + 864e5 : Infinity;
          return noteTime >= t0 && noteTime <= t1;
        }
        return true;
      }
      case "time_range": {
        const rangeVal = cond.value;
        if (!rangeVal) return true;
        const match = rangeVal.match(/^(\d+)(d|M|y)$/);
        if (!match) return true;
        const num = parseInt(match[1]);
        const unit = match[2];
        const now = Date.now();
        let startTime;
        if (unit === "d") {
          startTime = now - num * 864e5;
        } else if (unit === "M") {
          const d = /* @__PURE__ */ new Date();
          d.setMonth(d.getMonth() - num);
          startTime = d.getTime();
        } else if (unit === "y") {
          const d = /* @__PURE__ */ new Date();
          d.setFullYear(d.getFullYear() - num);
          startTime = d.getTime();
        } else {
          return true;
        }
        return note.createdAt >= startTime;
      }
      case "has_image": {
        const hasImg = /!\[.*?\]\(.*?\)/.test(note.content);
        return cond.operator === "yes" ? hasImg : !hasImg;
      }
      case "has_reference": {
        const hasRef = /\[\[.*?\]\]/.test(note.content);
        return cond.operator === "yes" ? hasRef : !hasRef;
      }
      default:
        return true;
    }
  }
  function resolveAssetUrl(rawSrc) {
    const cached = resolveCacheRef.current.get(rawSrc);
    if (cached !== void 0) return cached;
    if (rawSrc.startsWith("http://") || rawSrc.startsWith("https://") || rawSrc.startsWith("data:") || rawSrc.startsWith("file://") || rawSrc.startsWith("file:")) {
      resolveCacheRef.current.set(rawSrc, rawSrc);
      return rawSrc;
    }
    const repoDir = orca.state.repoDir;
    const dataDir = orca.state.dataDir;
    const baseDir = repoDir || dataDir;
    if (!baseDir) {
      resolveCacheRef.current.set(rawSrc, rawSrc);
      return rawSrc;
    }
    let relPath = rawSrc.replace(/^\.\//, "");
    if (!relPath.startsWith("assets/") && !relPath.startsWith("assets\\")) {
      relPath = "assets/" + relPath;
    }
    const fullPath = baseDir.replace(/\\/g, "/") + "/" + relPath;
    const fileUrl = "file:///" + fullPath.replace(/^\//, "");
    resolveCacheRef.current.set(rawSrc, fileUrl);
    return fileUrl;
  }
  function showImagePreview(imgSrc) {
    const overlay = document.createElement("div");
    overlay.className = "mcard-image-preview-modal";
    overlay.innerHTML = `
      <div class="mcard-image-preview-overlay"></div>
      <div class="mcard-image-preview-toolbar">
        <div class="mcard-image-preview-close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </div>
      </div>
      <div class="mcard-image-preview-container">
        <img src="${imgSrc}" alt="图片预览" class="mcard-image-preview-img">
      </div>
      <div class="mcard-image-preview-hint">滚轮缩放 | 拖拽移动 | 双击重置</div>
    `;
    document.body.appendChild(overlay);
    const img = overlay.querySelector(".mcard-image-preview-img");
    const container = overlay.querySelector(".mcard-image-preview-container");
    const hint = overlay.querySelector(".mcard-image-preview-hint");
    let scale = 1;
    let fitScale = 1;
    let translateX = 0;
    let translateY = 0;
    let isDragging = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let startTX = 0;
    let startTY = 0;
    const applyTransform = () => {
      img.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    };
    const showHint = (text, duration = 2e3) => {
      hint.textContent = text;
      hint.classList.add("show");
      clearTimeout(hint._timer);
      hint._timer = setTimeout(() => hint.classList.remove("show"), duration);
    };
    const onImgReady = () => {
      const vw = window.innerWidth * 0.9;
      const vh = window.innerHeight * 0.9;
      const sx = vw / img.naturalWidth;
      const sy = vh / img.naturalHeight;
      fitScale = Math.min(sx, sy, 1);
      scale = fitScale;
      applyTransform();
    };
    if (img.complete && img.naturalWidth > 0) {
      onImgReady();
    } else {
      img.onload = onImgReady;
    }
    container.addEventListener("wheel", (e) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      scale = Math.max(fitScale * 0.3, Math.min(scale + delta * scale, 15));
      applyTransform();
      showHint(`缩放: ${Math.round(scale / fitScale * 100)}%`, 1500);
    }, { passive: false });
    img.addEventListener("mousedown", (e) => {
      if (e.button !== 0 || scale <= fitScale * 1.05) return;
      isDragging = true;
      img.classList.add("dragging");
      dragStartX = e.clientX;
      dragStartY = e.clientY;
      startTX = translateX;
      startTY = translateY;
    });
    const onMouseMove = (e) => {
      if (!isDragging) return;
      translateX = startTX + (e.clientX - dragStartX);
      translateY = startTY + (e.clientY - dragStartY);
      applyTransform();
    };
    const onMouseUp = () => {
      if (isDragging) {
        isDragging = false;
        img.classList.remove("dragging");
      }
    };
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    img.addEventListener("dblclick", () => {
      scale = fitScale;
      translateX = 0;
      translateY = 0;
      applyTransform();
      showHint("已重置", 1500);
    });
    const closeModal = () => {
      overlay.remove();
      document.removeEventListener("keydown", escHandler);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
    overlay.querySelector(".mcard-image-preview-overlay").addEventListener("click", closeModal);
    overlay.querySelector(".mcard-image-preview-close").addEventListener("click", closeModal);
    const escHandler = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", escHandler);
  }
  const noteHtmlCacheRef = React.useRef(/* @__PURE__ */ new Map());
  function renderNoteContent(note) {
    const cacheKey = `${note.id}::${note.content}`;
    let html = noteHtmlCacheRef.current.get(cacheKey);
    if (html === void 0) {
      html = renderNoteHtml(note.content, resolveAssetUrl, { notes });
      noteHtmlCacheRef.current.set(cacheKey, html);
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "mcard-note-content-rendered",
        dangerouslySetInnerHTML: { __html: html },
        onClick: (e) => {
          var _a;
          const tagEl = e.target.closest(".mcard-inline-tag");
          if (tagEl) {
            e.stopPropagation();
            const tagName = ((_a = tagEl.textContent) == null ? void 0 : _a.replace(/^#/, "")) || "";
            setSelectedTag(selectedTag === tagName ? null : tagName);
            return;
          }
          const imgEl = e.target.closest(".mcard-note-image");
          if (imgEl) {
            e.stopPropagation();
            showImagePreview(imgEl.src);
            return;
          }
          const refEl = e.target.closest(".mcard-memo-ref");
          if (refEl) {
            e.stopPropagation();
            const memoId = refEl.getAttribute("data-memo-id");
            if (memoId) {
              const targetNote = notes.find((n) => n.id === memoId);
              if (targetNote) setDetailNote(targetNote);
            }
            return;
          }
        },
        onDoubleClick: (e) => {
          const imgEl = e.target.closest(".mcard-note-image");
          if (imgEl) {
            e.stopPropagation();
            showImagePreview(imgEl.src);
          }
        }
      }
    );
  }
  React.useEffect(() => {
    if (!showTagPicker) return;
    const handleClickOutside = (e) => {
      const target = e.target;
      if (!target.closest(".mcard-tag-picker") && !target.closest(".mcard-toolbar-icon")) {
        setShowTagPicker(false);
      }
    };
    setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 0);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showTagPicker]);
  React.useEffect(() => {
    return () => {
      closeNoteMenu();
    };
  }, []);
  const groupedNotes = React.useMemo(() => {
    const groups = [];
    for (const n of filteredNotes) {
      const last = groups[groups.length - 1];
      if (last && isSameDay(last.date, n.createdAt)) {
        last.notes.push(n);
      } else {
        groups.push({ date: n.createdAt, notes: [n] });
      }
    }
    for (const g of groups) {
      g.notes.sort((a, b) => {
        if (!!b.pinned !== !!a.pinned) return b.pinned ? 1 : -1;
        return b.createdAt - a.createdAt;
      });
    }
    return groups;
  }, [filteredNotes]);
  const themeAttr = settings.themeMode;
  const wordCount = React.useMemo(() => {
    return notes.reduce((sum, n) => sum + n.content.replace(/\s+/g, "").length, 0);
  }, [notes]);
  const maxDaily = React.useMemo(() => {
    if (notes.length === 0) return 0;
    const map = /* @__PURE__ */ new Map();
    for (const n of notes) {
      const k = formatDateKey(n.createdAt);
      map.set(k, (map.get(k) || 0) + 1);
    }
    return Math.max(...map.values());
  }, [notes]);
  const streakDays = React.useMemo(() => {
    if (notes.length === 0) return 0;
    const set = /* @__PURE__ */ new Set();
    for (const n of notes) set.add(formatDateKey(n.createdAt));
    let streak = 0;
    const today = /* @__PURE__ */ new Date();
    for (let i = 0; i < 365; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const k = formatDateKey(d.getTime());
      if (set.has(k)) streak++;
      else break;
    }
    return streak;
  }, [notes]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `mcard-root ${settings.compactMode ? "compact" : ""}`,
      "data-mcard-theme": themeAttr,
      style: themeVars,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-shell", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-sidebar", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              className: `mcard-sidebar-toggle${sidebarCollapsed ? " collapsed" : ""}`,
              title: sidebarCollapsed ? "展开信息栏" : "折叠信息栏",
              onClick: () => setSidebarCollapsed((v) => !v),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-hamburger-line" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-hamburger-line" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-hamburger-line" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-sidebar-nav", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                className: `mcard-nav-item ${tab === "shuoshuo" ? "active" : ""}`,
                onClick: () => setTab("shuoshuo"),
                title: "说说",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "💬" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-nav-tooltip", children: "说说" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                className: `mcard-nav-item ${tab === "gallery" ? "active" : ""}`,
                onClick: () => setTab("gallery"),
                title: "图片",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🏔️" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-nav-tooltip", children: "图片" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                className: `mcard-nav-item ${tab === "stats" ? "active" : ""}`,
                onClick: () => setTab("stats"),
                title: "统计",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📊" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-nav-tooltip", children: "统计" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-sidebar-bottom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              className: `mcard-nav-item ${tab === "settings" ? "active" : ""}`,
              onClick: () => setTab("settings"),
              title: "设置",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "⚙️" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-nav-tooltip", children: "设置" })
              ]
            }
          ) })
        ] }),
        tab !== "stats" && tab !== "settings" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mcard-info-sidebar${sidebarCollapsed ? " collapsed" : ""}`, children: [
          tab === "shuoshuo" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-stats", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-stat-item", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-stat-num", children: notes.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-stat-label", children: "笔记" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-stat-item", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-stat-num", children: allTags.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-stat-label", children: "标签" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-stat-item", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-stat-num", children: new Set(notes.map((n) => new Date(n.createdAt).toDateString())).size }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-stat-label", children: "天" })
            ] })
          ] }),
          tab === "shuoshuo" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-heatmap-container", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-heatmap", children: sidebarHeatmap.cells.map((cell, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `mcard-heatmap-cell level-${cell.level}`,
                title: cell.tooltip
              },
              i
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-heatmap-months", children: sidebarHeatmap.months.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                style: { gridColumn: `${sidebarHeatmap.spans[i].start} / ${sidebarHeatmap.spans[i].end}`, textAlign: "center" },
                children: m.name
              },
              i
            )) })
          ] }),
          tab === "shuoshuo" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-menu-list", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  className: `mcard-menu-item ${shuoshuoView === "all" ? "active" : ""}`,
                  onClick: () => setShuoshuoView("all"),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-menu-icon", children: "💬" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-menu-text", children: "全部笔记" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-menu-count", children: notes.length })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  className: `mcard-menu-item ${shuoshuoView === "review" ? "active" : ""}`,
                  onClick: () => {
                    setShuoshuoView("review");
                    setReviewIndex(0);
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-menu-icon", children: "⭐" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-menu-text", children: "每日回顾" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-menu-count", children: reviewNotes.length })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  className: `mcard-menu-item ${shuoshuoView === "week" ? "active" : ""}`,
                  onClick: () => setShuoshuoView("week"),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-menu-icon", children: "📅" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-menu-text", children: "本周记录" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-menu-count", children: weekNotes.length })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  className: `mcard-menu-item ${shuoshuoView === "random" ? "active" : ""}`,
                  onClick: () => {
                    setShuoshuoView("random");
                    handleRandomPick();
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-menu-icon", children: "🎲" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-menu-text", children: "随机漫步" })
                  ]
                }
              )
            ] }),
            (() => {
              const pinnedExprs = searchExprs.filter((e) => e.pinned);
              if (pinnedExprs.length === 0) return null;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-section-title", children: "钉住的检索式" }),
                pinnedExprs.map((expr) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "mcard-menu-item",
                    style: { cursor: "pointer" },
                    onClick: () => {
                      setShowSearchExprModal(true);
                      setActiveExprId(expr.id);
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-menu-icon", children: "📌" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-menu-text", children: expr.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-menu-count", children: (() => {
                        let r = [...notes];
                        if (!settings.showMemoNotesInList) r = r.filter((n) => !n.parent_ids || n.parent_ids.length === 0);
                        if (expr.conditions.length > 0) {
                          r = r.filter((n) => {
                            const cr = expr.conditions.map((c) => evaluateCondition(c, n));
                            return expr.matchMode === "and" ? cr.every(Boolean) : cr.some(Boolean);
                          });
                        }
                        return r.length;
                      })() })
                    ]
                  },
                  expr.id
                ))
              ] });
            })(),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-section-title", children: "全部标签" }),
            allTags.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 12, color: "var(--orca-color-gray-5, #999)", padding: "0 4px" }, children: "暂无标签" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-tag-list", children: allTags.map((tag) => {
              const count = notes.filter((n) => n.tags.includes(tag)).length;
              const isPinned = pinnedTags.includes(tag);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  className: `mcard-tag-chip ${selectedTag === tag ? "active" : ""} ${isPinned ? "pinned" : ""}`,
                  onClick: (e) => {
                    e.stopPropagation();
                    setSelectedTag(selectedTag === tag ? null : tag);
                  },
                  onContextMenu: (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setTagMenuTag(tag);
                    setTagMenuPos({ x: e.clientX, y: e.clientY });
                  },
                  children: [
                    isPinned && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-tag-pin-icon", children: "📌" }),
                    "#",
                    tag,
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-tag-chip-count", children: count })
                  ]
                },
                tag
              );
            }) })
          ] }),
          tab === "gallery" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-stats", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-stat-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-stat-num", children: "0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-stat-label", children: "图片" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-stat-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-stat-num", children: "0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-stat-label", children: "待同步" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-menu-list", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "mcard-menu-item active", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-menu-icon", children: "🖼" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-menu-text", children: "图片视图" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "mcard-menu-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-menu-icon", children: "📤" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-menu-text", children: "图片同步" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "mcard-menu-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-menu-icon", children: "💾" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-menu-text", children: "存储管理" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-main", children: [
          tab === "shuoshuo" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 10, margin: "8px 24px 0", flexShrink: 0 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-search-box", style: { marginBottom: 0, flex: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                className: "mcard-search-input",
                placeholder: t("Search notes..."),
                value: searchText,
                onChange: (e) => setSearchText(e.target.value)
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "mcard-close-btn",
                title: "检索式",
                onClick: () => {
                  setShowSearchExprModal(true);
                  setEditingExpr(null);
                  setActiveExprId(null);
                  setShowExprBuilder(false);
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", width: "14", height: "14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 3h18v2l-7 7.5V21l-4-2.5v-8L3 5V3z" }) })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "mcard-close-btn",
                title: "关闭面板",
                onClick: () => {
                  try {
                    if (panelId) {
                      orca.nav.close(panelId);
                    } else {
                      const panels = orca.state.panels;
                      for (const [pid, panel] of Object.entries(panels)) {
                        if (panel.view === "mcard.panel") {
                          orca.nav.close(pid);
                          break;
                        }
                      }
                    }
                  } catch {
                  }
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", width: "14", height: "14", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                ] })
              }
            )
          ] }),
          tab === "shuoshuo" && shuoshuoView === "all" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-input-area", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mcard-input-box ${captureText ? "focused" : ""}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-edit-relation-row", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-parent-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "6", cy: "6", r: "3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "12", r: "3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "6", cy: "18", r: "3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "8.5", y1: "7.5", x2: "15.5", y2: "10.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "8.5", y1: "16.5", x2: "15.5", y2: "13.5" })
                ] }) }),
                captureParentIds.length > 0 && captureParentIds.map((pid) => {
                  const parentNote = notes.find((n) => n.id === pid);
                  if (!parentNote) return null;
                  const preview = getNotePreview(parentNote);
                  formatDate(parentNote.createdAt).split(" ")[0];
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-edit-relation mcard-edit-relation-parent", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-edit-relation-info", children: preview }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mcard-edit-relation-remove", onClick: () => {
                      setCaptureParentIds((prev) => prev.filter((id) => id !== pid));
                    }, title: "移除关联", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                    ] }) })
                  ] }, pid);
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-edit-parent-picker-wrapper", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      className: "mcard-edit-parent-search",
                      type: "text",
                      value: captureParentSearch,
                      onChange: (e) => {
                        setCaptureParentSearch(e.target.value);
                        setShowCaptureParentPicker(true);
                      },
                      onFocus: () => setShowCaptureParentPicker(true),
                      placeholder: "搜索父级卡片..."
                    }
                  ),
                  showCaptureParentPicker && captureParentSearch.trim() && (() => {
                    const keyword = captureParentSearch.trim().toLowerCase();
                    const filtered = notes.filter(
                      (n) => !captureParentIds.includes(n.id) && (n.content.toLowerCase().includes(keyword) || n.title && n.title.toLowerCase().includes(keyword))
                    ).slice(0, 5);
                    if (filtered.length === 0) return null;
                    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-edit-parent-picker", children: filtered.map((n) => {
                      const preview = getNotePreview(n);
                      formatDate(n.createdAt).split(" ")[0];
                      return /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "mcard-edit-parent-picker-item",
                          onClick: () => {
                            setCaptureParentIds((prev) => [...prev, n.id]);
                            setCaptureParentSearch("");
                            setShowCaptureParentPicker(false);
                          },
                          children: n.title ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-picker-title", children: highlightText(n.title, keyword) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-picker-content", children: highlightText(n.content.split("\n")[0].replace(/#[^\s]*/g, "").trim().substring(0, 40), keyword) })
                          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: highlightText(preview, keyword) })
                        },
                        n.id
                      );
                    }) });
                  })()
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  className: "mcard-edit-title-input",
                  type: "text",
                  value: captureTitle,
                  onChange: (e) => setCaptureTitle(e.target.value),
                  placeholder: "标题（可选）"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-input-wrapper", ref: textareaWrapperRef, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    ref: textareaRef,
                    className: "mcard-input-field",
                    value: captureText,
                    onChange: handleTextareaChange,
                    onKeyDown: handleKeyDown,
                    onInput: handleInputDetectMention,
                    onPaste: async (e) => {
                      var _a;
                      const items = (_a = e.clipboardData) == null ? void 0 : _a.items;
                      if (!items) return;
                      for (const item of items) {
                        if (item.type.startsWith("image/")) {
                          e.preventDefault();
                          const file = item.getAsFile();
                          if (!file) continue;
                          try {
                            const assetPath = await uploadImageAsset(file);
                            if (assetPath) {
                              insertText(`![](${assetPath})`, "");
                            }
                          } catch (err) {
                            console.warn("mcard paste image failed:", err);
                          }
                          return;
                        }
                      }
                    },
                    placeholder: "现在的想法是...",
                    rows: 3
                  }
                ),
                showTagPicker && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "mcard-tag-picker",
                    style: { top: `${tagPickerTop}px` },
                    onClick: (e) => e.stopPropagation(),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-tag-picker-title", children: "选择标签" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-tag-picker-list", children: (() => {
                        const filtered = allTags.filter(
                          (t2) => !tagPickerFilter || t2.toLowerCase().includes(tagPickerFilter.toLowerCase())
                        ).slice(0, 5);
                        if (filtered.length > 0) {
                          return filtered.map((tag, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              className: `mcard-tag-picker-item ${idx === tagPickerActiveIdx ? "active" : ""}`,
                              onMouseEnter: () => setTagPickerActiveIdx(idx),
                              onClick: () => insertTag(tag),
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-tag-picker-item-hash", children: "#" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-tag-picker-item-name", children: tag })
                              ]
                            },
                            tag
                          ));
                        }
                        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: "mcard-tag-picker-item active",
                            onClick: () => insertTag(tagPickerFilter || "新标签"),
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-tag-picker-item-hash", children: "#" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mcard-tag-picker-item-name", children: [
                                '创建新标签 "',
                                tagPickerFilter || "新标签",
                                '"'
                              ] })
                            ]
                          }
                        );
                      })() })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-input-toolbar", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-toolbar-left", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "mcard-toolbar-icon",
                      onClick: handleToolbarTagClick,
                      title: "标签",
                      children: "#"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "mcard-toolbar-icon",
                      onClick: handleToolbarImageClick,
                      title: "图片",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" }) })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "mcard-toolbar-icon",
                      onClick: handleToolbarTaskClick,
                      title: "任务列表",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 5h2v2H3zm4 0h14v2H7zm-4 6h2v2H3zm4 0h14v2H7zm-4 6h2v2H3zm4 0h14v2H7z" }) })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "mcard-toolbar-icon",
                      onClick: handleToolbarUlClick,
                      title: "无序列表",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" }) })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "mcard-toolbar-icon",
                      onClick: handleToolbarOlClick,
                      title: "有序列表",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 6h2v2H2zm4 0h14v2H6zM2 11h2v2H2zm4 0h14v2H6zM2 16h2v2H2zm4 0h14v2H6z" }) })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "mcard-toolbar-icon",
                      onClick: handleToolbarAtClick,
                      title: "快速引用",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" }) })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    className: "mcard-send-btn",
                    onClick: handleSave,
                    disabled: !captureText.trim() || isSaving,
                    title: "发送",
                    children: isSaving ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-spinner" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" }) })
                  }
                )
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-notes-list", children: [
              (selectedTag || searchText.trim()) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-filter-bar", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mcard-filter-label", children: [
                  "过滤: ",
                  selectedTag ? `#${selectedTag}` : "",
                  searchText ? ` "${searchText}"` : ""
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    className: "mcard-filter-clear",
                    onClick: () => {
                      setSelectedTag(null);
                      setSearchText("");
                    },
                    children: "清除 ✕"
                  }
                )
              ] }),
              groupedNotes.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-empty", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-empty-icon", children: "✎" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: t("No notes yet. Capture your first thought!") })
              ] }) : groupedNotes.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-date-group", children: formatDate(group.date) }),
                group.notes.map((note) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    "data-note-id": note.id,
                    className: `mcard-note-card${note.pinned ? " pinned" : ""}`,
                    onClick: (e) => {
                      e.stopPropagation();
                      if (editingNoteId === note.id) return;
                      const el = e.currentTarget;
                      if (el._mcardDblClick) return;
                      if (el._mcardClickTimer) clearTimeout(el._mcardClickTimer);
                      el._mcardClickTimer = setTimeout(() => {
                        el._mcardClickTimer = null;
                        setDetailNote(note);
                      }, 250);
                    },
                    onDoubleClick: (e) => {
                      e.stopPropagation();
                      const el = e.currentTarget;
                      if (el._mcardClickTimer) {
                        clearTimeout(el._mcardClickTimer);
                        el._mcardClickTimer = null;
                      }
                      el._mcardDblClick = true;
                      setTimeout(() => {
                        el._mcardDblClick = false;
                      }, 300);
                      startEditNote(note);
                    },
                    children: editingNoteId === note.id ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-input-box focused mcard-inline-edit", onClick: (e) => e.stopPropagation(), children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-edit-relation-row", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-parent-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "6", cy: "6", r: "3" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "12", r: "3" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "6", cy: "18", r: "3" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "8.5", y1: "7.5", x2: "15.5", y2: "10.5" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "8.5", y1: "16.5", x2: "15.5", y2: "13.5" })
                        ] }) }),
                        note.parent_ids && note.parent_ids.length > 0 && note.parent_ids.map((pid) => {
                          const parentNote = notes.find((n) => n.id === pid);
                          if (!parentNote) return null;
                          const preview = getNotePreview(parentNote);
                          formatDate(parentNote.createdAt).split(" ")[0];
                          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-edit-relation mcard-edit-relation-parent", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-edit-relation-info", children: preview }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mcard-edit-relation-remove", onClick: (e) => {
                              e.stopPropagation();
                              setNotes((prev) => prev.map(
                                (n) => {
                                  var _a;
                                  return n.id === note.id ? { ...n, parent_ids: (_a = n.parent_ids) == null ? void 0 : _a.filter((id) => id !== pid) } : n;
                                }
                              ));
                            }, title: "移除关联", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                            ] }) })
                          ] }, pid);
                        }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-edit-parent-picker-wrapper", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              className: "mcard-edit-parent-search",
                              type: "text",
                              value: editParentSearch,
                              onChange: (e) => {
                                setEditParentSearch(e.target.value);
                                setShowEditParentPicker(true);
                              },
                              onFocus: () => setShowEditParentPicker(true),
                              placeholder: "搜索父级卡片..."
                            }
                          ),
                          showEditParentPicker && editParentSearch.trim() && (() => {
                            const keyword = editParentSearch.trim().toLowerCase();
                            const existingIds = note.parent_ids || [];
                            const filtered = notes.filter(
                              (n) => n.id !== note.id && !existingIds.includes(n.id) && !(n.parent_ids && n.parent_ids.includes(note.id)) && (n.content.toLowerCase().includes(keyword) || n.title && n.title.toLowerCase().includes(keyword))
                            ).slice(0, 5);
                            if (filtered.length === 0) return null;
                            return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-edit-parent-picker", children: filtered.map((n) => {
                              const preview = getNotePreview(n);
                              formatDate(n.createdAt).split(" ")[0];
                              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "div",
                                {
                                  className: "mcard-edit-parent-picker-item",
                                  onClick: (e) => {
                                    e.stopPropagation();
                                    setNotes((prev) => prev.map(
                                      (item) => item.id === note.id ? { ...item, parent_ids: [...item.parent_ids || [], n.id] } : item
                                    ));
                                    setEditParentSearch("");
                                    setShowEditParentPicker(false);
                                  },
                                  children: n.title ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-picker-title", children: highlightText(n.title, keyword) }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-picker-content", children: highlightText(n.content.split("\n")[0].replace(/#[^\s]*/g, "").trim().substring(0, 40), keyword) })
                                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-edit-relation-info", children: highlightText(preview, keyword) })
                                },
                                n.id
                              );
                            }) });
                          })()
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          className: "mcard-edit-title-input",
                          type: "text",
                          value: editTitle,
                          onChange: (e) => setEditTitle(e.target.value),
                          placeholder: "标题（可选）"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-input-wrapper", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "textarea",
                          {
                            ref: editTextareaRef,
                            className: "mcard-input-field",
                            value: editText,
                            onChange: handleEditTextareaChange,
                            onInput: handleEditInputDetectMention,
                            onKeyDown: (e) => {
                              handleEditKeyDown(e);
                              if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
                                e.preventDefault();
                                void saveEditNote(note);
                              } else if (e.key === "Escape" && !showEditTagPicker) {
                                e.preventDefault();
                                cancelEditNote();
                              }
                            },
                            autoFocus: true
                          }
                        ),
                        showEditTagPicker && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-tag-picker", style: { top: `${editTagPickerTop}px` }, children: [
                          allTags.filter((t2) => !editTagPickerFilter || t2.includes(editTagPickerFilter)).map((tag, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              className: `mcard-tag-picker-item${idx === editTagPickerActiveIdx ? " active" : ""}`,
                              onClick: (e) => {
                                e.stopPropagation();
                                insertEditTag(tag);
                              },
                              children: [
                                "#",
                                tag
                              ]
                            },
                            tag
                          )),
                          editTagPickerFilter.trim() && !allTags.includes(editTagPickerFilter.trim()) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              className: `mcard-tag-picker-item${editTagPickerActiveIdx === allTags.filter((t2) => !editTagPickerFilter || t2.includes(editTagPickerFilter)).length ? " active" : ""}`,
                              onClick: (e) => {
                                e.stopPropagation();
                                insertEditTag(editTagPickerFilter.trim());
                              },
                              children: [
                                '+ 创建 "#',
                                editTagPickerFilter.trim(),
                                '"'
                              ]
                            }
                          )
                        ] })
                      ] }),
                      (() => {
                        const childNotes = notes.filter((n) => n.parent_ids && n.parent_ids.includes(note.id));
                        if (childNotes.length === 0) return null;
                        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-edit-relation-list", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-parent-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "6", r: "3" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "6", cy: "12", r: "3" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "18", r: "3" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "8.5", y1: "10.5", x2: "15.5", y2: "7.5" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "8.5", y1: "13.5", x2: "15.5", y2: "16.5" })
                          ] }) }),
                          childNotes.map((childNote) => {
                            const preview = getNotePreview(childNote);
                            formatDate(childNote.createdAt).split(" ")[0];
                            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-edit-relation mcard-edit-relation-child", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-edit-relation-info", children: preview }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mcard-edit-relation-remove", onClick: (e) => {
                                e.stopPropagation();
                                setNotes((prev) => prev.map(
                                  (n) => {
                                    var _a;
                                    return n.id === childNote.id ? { ...n, parent_ids: (_a = n.parent_ids) == null ? void 0 : _a.filter((id) => id !== note.id) } : n;
                                  }
                                ));
                              }, title: "移除关联", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                              ] }) })
                            ] }, childNote.id);
                          })
                        ] });
                      })(),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-input-toolbar", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-toolbar-left", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-toolbar-icon", onClick: editToolbarTagClick, title: "标签", children: "#" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-toolbar-icon", onClick: editToolbarImageClick, title: "图片", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" }) }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-toolbar-icon", onClick: editToolbarTaskClick, title: "任务列表", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 5h2v2H3zm4 0h14v2H7zm-4 6h2v2H3zm4 0h14v2H7zm-4 6h2v2H3zm4 0h14v2H7z" }) }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-toolbar-icon", onClick: editToolbarUlClick, title: "无序列表", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" }) }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-toolbar-icon", onClick: editToolbarOlClick, title: "有序列表", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 6h2v2H2zm4 0h14v2H6zM2 11h2v2H2zm4 0h14v2H6zM2 16h2v2H2zm4 0h14v2H6z" }) }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-toolbar-icon", onClick: editToolbarAtClick, title: "快速引用", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" }) }) })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              className: "mcard-inline-edit-cancel",
                              onClick: (e) => {
                                e.stopPropagation();
                                cancelEditNote();
                              },
                              children: "取消"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              className: "mcard-send-btn active",
                              onClick: (e) => {
                                e.stopPropagation();
                                void saveEditNote(note);
                              },
                              title: "保存",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" }) })
                            }
                          )
                        ] })
                      ] })
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: (() => {
                      const memoNotes = notes.filter((n) => n.parent_ids && n.parent_ids.includes(note.id));
                      const isAddingMemo = memoInputNoteId === note.id;
                      return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-note-header", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-note-date", children: formatAgo(note.createdAt) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              className: "mcard-note-actions",
                              onClick: (e) => e.stopPropagation(),
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "button",
                                  {
                                    className: "mcard-note-menu-btn",
                                    type: "button",
                                    onClick: (e) => {
                                      e.stopPropagation();
                                      e.preventDefault();
                                      const target = e.currentTarget;
                                      showNoteMenu(note, target);
                                    },
                                    title: "更多操作",
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }) })
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                  "button",
                                  {
                                    className: "mcard-note-memo-btn-icon",
                                    onClick: () => {
                                      if (isAddingMemo) {
                                        setMemoInputNoteId(null);
                                        setMemoInputText("");
                                      } else {
                                        setMemoInputNoteId(note.id);
                                        setMemoInputText("");
                                        setTimeout(() => {
                                          const el = document.querySelector(`[data-memo-input="${note.id}"]`);
                                          el == null ? void 0 : el.focus();
                                        }, 50);
                                      }
                                    },
                                    title: "批注",
                                    children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", width: "14", height: "14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }) }),
                                      memoNotes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-note-memo-badge", children: memoNotes.length })
                                    ]
                                  }
                                )
                              ]
                            }
                          )
                        ] }),
                        note.title && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-note-title", children: note.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: `mcard-note-content${shouldCollapseNote(note) ? isNoteExpanded(note.id) ? " expanded" : " collapsed" : ""}`,
                            children: renderNoteContent(note)
                          }
                        ),
                        shouldCollapseNote(note) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            className: `mcard-expand-btn${isNoteExpanded(note.id) ? " expanded" : ""}`,
                            onClick: (e) => {
                              e.stopPropagation();
                              toggleNoteExpand(note.id);
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isNoteExpanded(note.id) ? "收起" : "全文" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" }) })
                            ]
                          }
                        ),
                        note.parent_ids && note.parent_ids.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-note-relation", onClick: (e) => e.stopPropagation(), children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-parent-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "6", cy: "6", r: "3" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "12", r: "3" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "6", cy: "18", r: "3" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "8.5", y1: "7.5", x2: "15.5", y2: "10.5" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "8.5", y1: "16.5", x2: "15.5", y2: "13.5" })
                          ] }) }),
                          note.parent_ids.map((pid) => {
                            const parentNote = notes.find((n) => n.id === pid);
                            if (!parentNote) return null;
                            const preview = getNotePreview(parentNote);
                            formatDate(parentNote.createdAt).split(" ")[0];
                            return /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: "mcard-note-relation-item",
                                onClick: (e) => {
                                  e.stopPropagation();
                                  setDetailNote(parentNote);
                                },
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-note-relation-info", children: preview })
                              },
                              pid
                            );
                          })
                        ] }),
                        memoNotes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-note-relation", onClick: (e) => e.stopPropagation(), children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-parent-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "6", r: "3" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "6", cy: "12", r: "3" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "18", r: "3" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "8.5", y1: "10.5", x2: "15.5", y2: "7.5" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "8.5", y1: "13.5", x2: "15.5", y2: "16.5" })
                          ] }) }),
                          memoNotes.map((memoNote) => {
                            const preview = getNotePreview(memoNote);
                            formatDate(memoNote.createdAt).split(" ")[0];
                            return /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: "mcard-note-relation-item",
                                onClick: (e) => {
                                  e.stopPropagation();
                                  setDetailNote(memoNote);
                                },
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-note-relation-info", children: preview })
                              },
                              memoNote.id
                            );
                          })
                        ] }),
                        isAddingMemo && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-input-box focused", style: { marginTop: "6px" }, onClick: (e) => e.stopPropagation(), children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-input-wrapper", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "textarea",
                            {
                              "data-memo-input": note.id,
                              className: "mcard-input-field",
                              value: memoInputText,
                              onChange: (e) => setMemoInputText(e.target.value),
                              onInput: handleMemoInputDetectMention,
                              placeholder: "写下批注...",
                              rows: 2
                            }
                          ) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-input-toolbar", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-toolbar-left", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-toolbar-icon", onClick: (e) => {
                                showMemoTagPicker(note.id, e.currentTarget);
                              }, title: "标签", children: "#" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-toolbar-icon", onClick: () => pickImage((md) => insertMemoText(note.id, md)), title: "图片", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" }) }) }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-toolbar-icon", onClick: () => insertMemoText(note.id, "- [ ] "), title: "任务列表", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 5h2v2H3zm4 0h14v2H7zm-4 6h2v2H3zm4 0h14v2H7zm-4 6h2v2H3zm4 0h14v2H7z" }) }) }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-toolbar-icon", onClick: () => insertMemoText(note.id, "- "), title: "无序列表", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" }) }) }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-toolbar-icon", onClick: () => {
                                const ta = document.querySelector(`[data-memo-input="${note.id}"]`);
                                if (!ta) return;
                                const lines = ta.value.substring(0, ta.selectionStart).split("\n");
                                const currentLine = lines[lines.length - 1];
                                const match = currentLine.match(/^(\d+)\.\s/);
                                const num = match ? parseInt(match[1]) + 1 : 1;
                                insertMemoText(note.id, `${num}. `);
                              }, title: "有序列表", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 6h2v2H2zm4 0h14v2H6zM2 11h2v2H2zm4 0h14v2H6zM2 16h2v2H2zm4 0h14v2H6z" }) }) }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-toolbar-icon", onClick: () => {
                                const ta = document.querySelector(`[data-memo-input="${note.id}"]`);
                                if (ta) showMentionPicker(ta, (inp, nid) => insertMention(inp, nid, setMemoInputText));
                              }, title: "快速引用", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" }) }) })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  className: "mcard-inline-edit-cancel",
                                  onClick: () => {
                                    setMemoInputNoteId(null);
                                    setMemoInputText("");
                                  },
                                  children: "取消"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  className: "mcard-send-btn active",
                                  disabled: !memoInputText.trim(),
                                  onClick: async () => {
                                    const text = memoInputText.trim();
                                    if (!text) return;
                                    const createdAt = Date.now();
                                    const newNote = {
                                      id: `mcard-${createdAt}-${Math.random().toString(36).slice(2, 7)}`,
                                      blockId: 0,
                                      content: text,
                                      tags: extractTags$1(text),
                                      parent_ids: [note.id],
                                      createdAt,
                                      updatedAt: createdAt
                                    };
                                    const updated = [newNote, ...notes];
                                    setNotes(updated);
                                    await saveNotes(pluginName2, updated);
                                    setMemoInputNoteId(null);
                                    setMemoInputText("");
                                  },
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" }) })
                                }
                              )
                            ] })
                          ] })
                        ] }),
                        showMemoMention && memoInputNoteId === note.id && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-mention-picker", onClick: (e) => e.stopPropagation(), children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-mention-picker-search", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              type: "text",
                              value: memoMentionFilter,
                              onChange: (e) => setMemoMentionFilter(e.target.value),
                              onKeyDown: (e) => {
                                const filtered = notes.filter((n) => !n.parent_ids || n.parent_ids.length === 0 && n.id !== note.id && (!memoMentionFilter || n.content.includes(memoMentionFilter)));
                                if (e.key === "ArrowDown") {
                                  e.preventDefault();
                                  setMemoMentionActiveIdx((i) => Math.min(i + 1, filtered.length - 1));
                                } else if (e.key === "ArrowUp") {
                                  e.preventDefault();
                                  setMemoMentionActiveIdx((i) => Math.max(i - 1, 0));
                                } else if (e.key === "Enter") {
                                  e.preventDefault();
                                  if (filtered[memoMentionActiveIdx]) {
                                    selectMentionNote(filtered[memoMentionActiveIdx], note.id);
                                  }
                                } else if (e.key === "Escape") {
                                  setShowMemoMention(false);
                                }
                              },
                              placeholder: "搜索笔记...",
                              autoFocus: true
                            }
                          ) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-mention-picker-list", children: [
                            notes.filter((n) => !n.parent_ids || n.parent_ids.length === 0 && n.id !== note.id && (!memoMentionFilter || n.content.includes(memoMentionFilter))).slice(0, 20).map((n, idx) => {
                              let preview = n.content.replace(/#[^\s\d][^\s]*(?:\/[^\s]+)*/g, "").trim().replace(/\s+/g, " ");
                              preview = preview.split("\n")[0];
                              preview = preview.substring(0, 60) + (preview.length > 60 ? "..." : "");
                              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                "div",
                                {
                                  className: `mcard-mention-picker-item${idx === memoMentionActiveIdx ? " active" : ""}`,
                                  onClick: () => selectMentionNote(n, note.id),
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-mention-picker-date", children: formatDate(n.createdAt).split(" ")[0] }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-mention-picker-preview", children: preview })
                                  ]
                                },
                                n.id
                              );
                            }),
                            notes.filter((n) => !n.parent_ids || n.parent_ids.length === 0 && n.id !== note.id && (!memoMentionFilter || n.content.includes(memoMentionFilter))).length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-mention-picker-empty", children: "无匹配笔记" })
                          ] })
                        ] })
                      ] });
                    })() })
                  },
                  note.id
                ))
              ] }, group.date))
            ] })
          ] }),
          tab === "shuoshuo" && shuoshuoView === "review" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            ReviewView,
            {
              notes: reviewNotes,
              index: reviewIndex,
              onNext: handleReviewNext,
              onPick: (i) => setReviewIndex(i),
              renderContent: renderNoteContent
            }
          ),
          tab === "shuoshuo" && shuoshuoView === "week" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            WeekView,
            {
              notes: weekNotes,
              onDelete: (n) => {
                void handleDelete(n);
              },
              onOpen: openNote,
              onShowMenu: (n, el) => showNoteMenu(n, el),
              renderContent: renderNoteContent,
              onTogglePin: togglePin,
              onEdit: startEditNote
            }
          ),
          tab === "shuoshuo" && shuoshuoView === "random" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            RandomView,
            {
              note: randomNote,
              total: notes.length,
              onShuffle: handleRandomPick,
              onOpen: openNote,
              onDelete: handleDelete,
              renderContent: renderNoteContent
            }
          ),
          tab === "gallery" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            GalleryView,
            {
              notes,
              allTags,
              resolveAssetUrl,
              showImagePreview,
              onJumpToNote: (noteId) => {
                setTab("shuoshuo");
                setShuoshuoView("all");
                setSearchText("");
                setSelectedTag(null);
                const note = notes.find((n) => n.id === noteId);
                if (note) setCurrentDate(new Date(note.createdAt));
                setTimeout(() => {
                  const el = document.querySelector(`[data-note-id="${noteId}"]`);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "center" });
                    el.classList.add("mcard-note-card-flash");
                    setTimeout(() => el.classList.remove("mcard-note-card-flash"), 2e3);
                  }
                }, 100);
              }
            }
          ),
          tab === "stats" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatsView,
            {
              notes,
              wordCount,
              maxDaily,
              streakDays
            }
          ),
          tab === "settings" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            SettingsView,
            {
              settings,
              onChange: onSettingsChange,
              notes,
              flomoConfig,
              flomoUsername,
              flomoPassword,
              flomoSyncing,
              flomoLogging,
              flomoMessage,
              flomoFullSync,
              onFlomoUsernameChange: setFlomoUsername,
              onFlomoPasswordChange: setFlomoPassword,
              onFlomoLogin: handleFlomoLogin,
              onFlomoLogout: handleFlomoLogout,
              onFlomoSync: handleFlomoSync,
              onFlomoFullSyncChange: setFlomoFullSync,
              inboxConfig,
              inboxSyncing,
              inboxMessage,
              inboxFullSync,
              onInboxConfigChange: (cfg) => {
                setInboxConfig(cfg);
                void saveInboxConfig(pluginName2, cfg);
              },
              onInboxSync: handleInboxSync,
              onInboxFullSyncChange: setInboxFullSync,
              onDeleteAll: handleDeleteAll,
              onImportNotes: handleImportNotes
            }
          )
        ] }),
        detailNote && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-detail-overlay", onClick: () => {
          if (detailEditing) return;
          setDetailNote(null);
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-detail-panel", onClick: (e) => e.stopPropagation(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-detail-header", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "mcard-detail-back", onClick: () => setDetailNote(null), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "20", height: "20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" }) }),
              "返回"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-detail-meta", children: [
              formatDate(detailNote.createdAt),
              detailNote.updatedAt !== detailNote.createdAt && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-detail-edited", children: "（已编辑）" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "6px" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mcard-detail-action-btn", onClick: startDetailEdit, children: "编辑" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mcard-detail-action-btn danger", onClick: () => {
                setDetailNote(null);
                void handleDelete(detailNote);
              }, children: "删除" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-detail-section mcard-detail-parents", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-edit-relation-row", style: { borderTop: "none", paddingTop: 0 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-parent-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "6", cy: "6", r: "3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "12", r: "3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "6", cy: "18", r: "3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "8.5", y1: "7.5", x2: "15.5", y2: "10.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "8.5", y1: "16.5", x2: "15.5", y2: "13.5" })
            ] }) }),
            detailNote.parent_ids && detailNote.parent_ids.length > 0 && detailNote.parent_ids.map((pid) => {
              const parentNote = notes.find((n) => n.id === pid);
              if (!parentNote) return null;
              const preview = getNotePreview(parentNote);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-edit-relation mcard-edit-relation-parent", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-edit-relation-info", style: { cursor: "pointer" }, onClick: () => setDetailNote(parentNote), children: preview }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mcard-edit-relation-remove", onClick: (e) => {
                  var _a;
                  e.stopPropagation();
                  const updated = notes.map(
                    (n) => {
                      var _a2;
                      return n.id === detailNote.id ? { ...n, parent_ids: (_a2 = n.parent_ids) == null ? void 0 : _a2.filter((id) => id !== pid) } : n;
                    }
                  );
                  setNotes(updated);
                  setDetailNote({ ...detailNote, parent_ids: (_a = detailNote.parent_ids) == null ? void 0 : _a.filter((id) => id !== pid) });
                  void saveNotes(pluginName2, updated);
                }, title: "移除关联", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                ] }) })
              ] }, pid);
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-edit-parent-picker-wrapper", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  className: "mcard-edit-parent-search",
                  type: "text",
                  value: detailParentSearch,
                  onChange: (e) => {
                    setDetailParentSearch(e.target.value);
                    setShowDetailParentPicker(true);
                  },
                  onFocus: () => setShowDetailParentPicker(true),
                  onBlur: () => setTimeout(() => setShowDetailParentPicker(false), 200),
                  placeholder: "搜索父级卡片..."
                }
              ),
              showDetailParentPicker && detailParentSearch.trim() && (() => {
                const keyword = detailParentSearch.trim().toLowerCase();
                const existingIds = detailNote.parent_ids || [];
                const filtered = notes.filter(
                  (n) => n.id !== detailNote.id && !existingIds.includes(n.id) && !(n.parent_ids && n.parent_ids.includes(detailNote.id)) && (n.title && n.title.toLowerCase().includes(keyword) || n.content.toLowerCase().includes(keyword))
                ).slice(0, 5);
                if (filtered.length === 0) return null;
                return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-edit-parent-picker", children: filtered.map((n) => {
                  const preview = getNotePreview(n);
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "mcard-edit-parent-picker-item",
                      onMouseDown: (e) => {
                        e.preventDefault();
                        const updated = notes.map(
                          (item) => item.id === detailNote.id ? { ...item, parent_ids: [...item.parent_ids || [], n.id] } : item
                        );
                        setNotes(updated);
                        setDetailNote({ ...detailNote, parent_ids: [...detailNote.parent_ids || [], n.id] });
                        setDetailParentSearch("");
                        setShowDetailParentPicker(false);
                        void saveNotes(pluginName2, updated);
                      },
                      children: n.title ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-picker-title", children: highlightText(n.title, keyword) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-picker-content", children: highlightText(n.content.split("\n")[0].replace(/#[^\s]*/g, "").trim().substring(0, 40), keyword) })
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-edit-relation-info", children: highlightText(preview, keyword) })
                    },
                    n.id
                  );
                }) });
              })()
            ] })
          ] }) }),
          detailEditing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-detail-section mcard-detail-card-edit", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                className: "mcard-edit-title-input",
                type: "text",
                value: detailEditTitle,
                onChange: (e) => setDetailEditTitle(e.target.value),
                placeholder: "标题（可选）"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-input-wrapper", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  className: "mcard-input-field mcard-detail-edit-area",
                  value: detailEditText,
                  onChange: (e) => setDetailEditText(e.target.value),
                  onInput: (e) => {
                    const ta = e.currentTarget;
                    ta.style.height = "auto";
                    ta.style.height = ta.scrollHeight + "px";
                    const val = ta.value;
                    const cursorPos = ta.selectionStart;
                    const beforeCursor = val.substring(0, cursorPos);
                    const hashIdx = beforeCursor.lastIndexOf("#");
                    if (hashIdx >= 0) {
                      const filter = beforeCursor.substring(hashIdx + 1);
                      if (!/\s/.test(filter)) {
                        setDetailTagPickerFilter(filter);
                        setShowDetailTagPicker(true);
                      } else {
                        setShowDetailTagPicker(false);
                      }
                    } else {
                      setShowDetailTagPicker(false);
                    }
                    const atIdx = beforeCursor.lastIndexOf("@");
                    if (atIdx >= 0) {
                      const filter = beforeCursor.substring(atIdx + 1);
                      if (!/\s/.test(filter)) {
                        mentionTriggerPosRef.current = cursorPos;
                        const filteredAtNotes = notes.filter((n) => {
                          const kw = filter.toLowerCase();
                          return n.title && n.title.toLowerCase().includes(kw) || n.content.toLowerCase().includes(kw);
                        }).slice(0, 8);
                        if (filteredAtNotes.length > 0) {
                          showMentionPicker(ta, (inp, nid) => {
                            const target = notes.find((n) => n.id === nid);
                            const refText = (target == null ? void 0 : target.title) || nid;
                            const start = mentionTriggerPosRef.current;
                            const text = inp.value;
                            const beforeAt = text.substring(0, start - filter.length - 1);
                            const afterAt = text.substring(inp.selectionEnd);
                            const newText = beforeAt + `[[${refText}]]` + afterAt;
                            inp.value = newText;
                            inp.selectionStart = inp.selectionEnd = beforeAt.length + refText.length + 4;
                            setDetailEditText(newText);
                            inp.focus();
                            closeMentionPicker();
                          });
                        }
                      }
                    }
                  },
                  onKeyDown: (e) => {
                    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
                      e.preventDefault();
                      void saveDetailEdit();
                    } else if (e.key === "Escape") {
                      e.preventDefault();
                      cancelDetailEdit();
                    }
                  },
                  autoFocus: true
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-input-toolbar", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-toolbar-left", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-toolbar-icon", title: "标签", onClick: () => setShowDetailTagPicker(!showDetailTagPicker), children: "#" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-toolbar-icon", onClick: handleDetailImageClick, title: "图片", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" }) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-toolbar-icon", onClick: () => detailInsertText("- [ ] ", ""), title: "任务列表", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 5h2v2H3zm4 0h14v2H7zm-4 6h2v2H3zm4 0h14v2H7zm-4 6h2v2H3zm4 0h14v2H7z" }) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-toolbar-icon", onClick: () => detailInsertText("- ", ""), title: "无序列表", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" }) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-toolbar-icon", onClick: () => {
                    const ta = document.querySelector(".mcard-detail-edit-area");
                    if (!ta) return;
                    const lines = ta.value.substring(0, ta.selectionStart).split("\n");
                    const currentLine = lines[lines.length - 1];
                    const match = currentLine.match(/^(\d+)\.\s/);
                    const num = match ? parseInt(match[1]) + 1 : 1;
                    detailInsertText(`${num}. `, "");
                  }, title: "有序列表", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 6h2v2H2zm4 0h14v2H6zM2 11h2v2H2zm4 0h14v2H6zM2 16h2v2H2zm4 0h14v2H6z" }) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-toolbar-icon", onClick: handleDetailAtClick, title: "快速引用", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" }) }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "8px", alignItems: "center" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mcard-inline-edit-cancel", onClick: cancelDetailEdit, children: "取消" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mcard-send-btn active", disabled: !detailEditText.trim(), onClick: () => void saveDetailEdit(), children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" }) }) })
                ] })
              ] })
            ] }),
            showDetailTagPicker && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-tag-picker", style: { position: "relative", marginTop: "4px" }, children: allTags.filter((t2) => !detailTagPickerFilter || t2.toLowerCase().includes(detailTagPickerFilter.toLowerCase())).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-tag-picker-item", onClick: () => {
              const ta = document.querySelector(".mcard-detail-edit-area");
              if (ta) {
                const start = ta.selectionStart;
                const val = ta.value;
                const newVal = val.substring(0, start) + `#${tag} ` + val.substring(ta.selectionEnd);
                ta.value = newVal;
                ta.selectionStart = ta.selectionEnd = start + tag.length + 2;
                setDetailEditText(newVal);
              }
              setShowDetailTagPicker(false);
              setDetailTagPickerFilter("");
            }, children: [
              "#",
              tag
            ] }, tag)) })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-detail-section mcard-detail-card", onDoubleClick: startDetailEdit, children: [
            detailNote.title && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-note-title", children: detailNote.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-detail-content", children: renderNoteContent(detailNote) })
          ] }),
          (() => {
            const childCards = notes.filter((n) => n.parent_ids && n.parent_ids.includes(detailNote.id));
            const tagCounts = {};
            for (const child of childCards) {
              for (const tag of child.tags) {
                tagCounts[tag] = (tagCounts[tag] || 0) + 1;
              }
            }
            const sortedTags = Object.entries(tagCounts).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count);
            if (sortedTags.length === 0) return null;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-detail-section mcard-detail-child-tags", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-detail-section-label", children: "标签显示区" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-detail-child-tags-list", children: [
                (childTagIncluded.length > 0 || childTagExcluded.length > 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mcard-detail-tag mcard-detail-tag-active", onClick: () => {
                  setChildTagIncluded([]);
                  setChildTagExcluded([]);
                }, children: [
                  "全部 (",
                  childCards.length,
                  ")"
                ] }),
                sortedTags.map(({ name, count }) => {
                  const isIncluded = childTagIncluded.includes(name);
                  const isExcluded = childTagExcluded.includes(name);
                  const cls = isIncluded ? "mcard-detail-tag mcard-detail-tag-active" : isExcluded ? "mcard-detail-tag mcard-detail-tag-excluded" : "mcard-detail-tag";
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: cls,
                      onClick: () => {
                        if (isExcluded) {
                          setChildTagExcluded(childTagExcluded.filter((t2) => t2 !== name));
                        }
                        setChildTagIncluded(isIncluded ? childTagIncluded.filter((t2) => t2 !== name) : [...childTagIncluded, name]);
                      },
                      onContextMenu: (e) => {
                        e.preventDefault();
                        if (isIncluded) {
                          setChildTagIncluded(childTagIncluded.filter((t2) => t2 !== name));
                        }
                        setChildTagExcluded(isExcluded ? childTagExcluded.filter((t2) => t2 !== name) : [...childTagExcluded, name]);
                      },
                      title: isExcluded ? "点击取消排除" : "点击包含 | 右键排除",
                      children: [
                        "#",
                        name,
                        " (",
                        count,
                        ")"
                      ]
                    },
                    name
                  );
                })
              ] })
            ] });
          })(),
          (() => {
            const allChildCards = notes.filter((n) => n.parent_ids && n.parent_ids.includes(detailNote.id));
            const filteredChildCards = allChildCards.filter((c) => {
              if (childTagIncluded.length > 0 && !childTagIncluded.every((t2) => c.tags.includes(t2))) return false;
              if (childTagExcluded.length > 0 && childTagExcluded.some((t2) => c.tags.includes(t2))) return false;
              return true;
            });
            if (allChildCards.length === 0) return null;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-detail-section mcard-detail-child-cards", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-detail-section-label-row", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-detail-section-label", children: childTagIncluded.length > 0 || childTagExcluded.length > 0 ? `子级引用卡片区 (${filteredChildCards.length})` : `子级引用卡片区 (${allChildCards.length})` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mcard-view-toggle", onClick: () => setChildCardGridMode(!childCardGridMode), title: childCardGridMode ? "列表视图" : "卡片视图", children: childCardGridMode ? /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "14", height: "14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 4h4v4H4zm6 0h10v4H10zM4 10h4v4H4zm6 0h10v4H10zM4 16h4v4H4zm6 0h10v4H10z" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "14", height: "14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 4h5v5H4zm7 0h5v5h-5zm-7 7h5v5H4zm7 0h5v5h-5z" }) }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mcard-detail-child-cards-list ${childCardGridMode ? "mcard-child-grid" : ""}`, children: [
                filteredChildCards.map((childNote) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-detail-child-card", onClick: () => setDetailNote(childNote), children: [
                  childNote.title && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-detail-child-card-title", children: childNote.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-detail-child-card-content", children: (() => {
                    const cacheKey = `${childNote.id}::hide::${childNote.content}`;
                    let html = noteHtmlCacheRef.current.get(cacheKey);
                    if (html === void 0) {
                      html = renderNoteHtml(childNote.content, resolveAssetUrl, { hideTags: true, notes });
                      noteHtmlCacheRef.current.set(cacheKey, html);
                    }
                    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dangerouslySetInnerHTML: { __html: html } });
                  })() }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-detail-child-card-footer", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-detail-child-card-date", children: formatAgo(childNote.createdAt) }),
                    childNote.tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-detail-child-card-tags", children: childNote.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mcard-detail-tag", children: [
                      "#",
                      tag
                    ] }, tag)) })
                  ] })
                ] }, childNote.id)),
                filteredChildCards.length === 0 && (childTagIncluded.length > 0 || childTagExcluded.length > 0) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-detail-empty", children: "没有匹配的子级卡片" })
              ] })
            ] });
          })()
        ] }) }),
        showSearchExprModal && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-detail-overlay", onClick: () => {
          setShowSearchExprModal(false);
          setEditingExpr(null);
          setActiveExprId(null);
          setShowExprBuilder(false);
          setExprMenuId(null);
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-detail-panel", onClick: (e) => e.stopPropagation(), style: { maxWidth: 780, height: "65vh", display: "flex", flexDirection: "column" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-detail-header", style: { flexShrink: 0 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "mcard-detail-back", onClick: () => {
              setShowSearchExprModal(false);
              setEditingExpr(null);
              setActiveExprId(null);
              setShowExprBuilder(false);
              setTagSearchMap({});
              setExprMenuId(null);
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "20", height: "20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" }) }),
              "返回"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-detail-meta", children: "检索式" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-expr-bottom", style: { flex: 1, borderTop: "none" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-expr-sidebar", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "10px 10px 8px", display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 11, fontWeight: 600, color: "var(--orca-color-gray-6, #777)", textTransform: "uppercase", letterSpacing: "0.05em" }, children: "已保存" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    style: { padding: "2px 8px", fontSize: 11, border: "1px dashed var(--orca-color-gray-3, #e0e0e0)", borderRadius: 6, background: "transparent", cursor: "pointer", color: "var(--orca-color-text-2, #555)" },
                    onClick: () => {
                      setEditingExpr({ id: "", name: "", matchMode: "and", conditions: [], pinned: false });
                      setShowExprBuilder(true);
                    },
                    children: "+ 新建"
                  }
                )
              ] }),
              searchExprs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "20px 10px", textAlign: "center", fontSize: 12, color: "var(--orca-color-gray-5, #999)" }, children: "暂无检索式" }) : searchExprs.map((expr) => {
                const exprCount = (() => {
                  let r = [...notes];
                  if (!settings.showMemoNotesInList) r = r.filter((n) => !n.parent_ids || n.parent_ids.length === 0);
                  if (expr.conditions.length > 0) {
                    r = r.filter((n) => {
                      const cr = expr.conditions.map((c) => evaluateCondition(c, n));
                      return expr.matchMode === "and" ? cr.every(Boolean) : cr.some(Boolean);
                    });
                  }
                  return r.length;
                })();
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `mcard-expr-sidebar-item ${activeExprId === expr.id ? "active" : ""}`,
                    onClick: () => {
                      setActiveExprId(activeExprId === expr.id ? null : expr.id);
                      setExprTagIncluded([]);
                      setExprTagExcluded([]);
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-expr-sidebar-item-name", children: expr.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-menu-count", style: { fontSize: 10, marginLeft: 4 }, children: exprCount }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-expr-sidebar-item-actions", style: { position: "relative" }, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { title: "更多", onClick: (e) => {
                          e.stopPropagation();
                          setExprMenuId(exprMenuId === expr.id ? null : expr.id);
                        }, style: { fontSize: 14, lineHeight: 1 }, children: "⋯" }),
                        exprMenuId === expr.id && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            style: { position: "absolute", right: 0, top: "100%", zIndex: 100, background: "var(--orca-color-bg-1, #fff)", border: "1px solid var(--orca-color-gray-3, #e0e0e0)", borderRadius: 6, boxShadow: "0 4px 12px rgba(0,0,0,0.12)", minWidth: 100, padding: "4px 0" },
                            onClick: (e) => e.stopPropagation(),
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                "div",
                                {
                                  style: { padding: "6px 12px", cursor: "pointer", fontSize: 12, display: "flex", alignItems: "center", gap: 6, color: expr.pinned ? "var(--mcard-accent, #4a90d9)" : "var(--orca-color-text-1, #333)" },
                                  onClick: () => {
                                    const updated = { ...expr, pinned: !expr.pinned };
                                    setSearchExprs((prev) => prev.map((e2) => e2.id === expr.id ? updated : e2));
                                    setExprMenuId(null);
                                  },
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📌" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: expr.pinned ? "取消钉住" : "钉住" })
                                  ]
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                "div",
                                {
                                  style: { padding: "6px 12px", cursor: "pointer", fontSize: 12, display: "flex", alignItems: "center", gap: 6, color: "var(--orca-color-text-1, #333)" },
                                  onClick: () => {
                                    setEditingExpr({ ...expr });
                                    setShowExprBuilder(true);
                                    setExprMenuId(null);
                                  },
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "✎" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "编辑" })
                                  ]
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                "div",
                                {
                                  style: { padding: "6px 12px", cursor: "pointer", fontSize: 12, display: "flex", alignItems: "center", gap: 6, color: "var(--orca-color-text-1, #333)" },
                                  onClick: () => {
                                    const exprResult = (() => {
                                      let r = [...notes];
                                      if (!settings.showMemoNotesInList) r = r.filter((n) => !n.parent_ids || n.parent_ids.length === 0);
                                      if (expr.conditions.length > 0) {
                                        r = r.filter((n) => {
                                          const cr = expr.conditions.map((c) => evaluateCondition(c, n));
                                          return expr.matchMode === "and" ? cr.every(Boolean) : cr.some(Boolean);
                                        });
                                      }
                                      return r;
                                    })();
                                    const exportData = exprResult.map((n) => ({ id: n.id, title: n.title || "", content: n.content, tags: n.tags, createdAt: new Date(n.createdAt).toISOString() }));
                                    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
                                    const url = URL.createObjectURL(blob);
                                    const a = document.createElement("a");
                                    a.href = url;
                                    a.download = `${expr.name}_export.json`;
                                    a.click();
                                    URL.revokeObjectURL(url);
                                    setExprMenuId(null);
                                  },
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📤" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "导出" })
                                  ]
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: 1, background: "var(--orca-color-gray-3, #e0e0e0)", margin: "4px 0" } }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                "div",
                                {
                                  style: { padding: "6px 12px", cursor: "pointer", fontSize: 12, display: "flex", alignItems: "center", gap: 6, color: "var(--orca-color-dangerous-5, #e74c3c)" },
                                  onClick: () => {
                                    setSearchExprs((prev) => prev.filter((e2) => e2.id !== expr.id));
                                    if (activeExprId === expr.id) setActiveExprId(null);
                                    setExprMenuId(null);
                                  },
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🗑" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "删除" })
                                  ]
                                }
                              )
                            ]
                          }
                        )
                      ] })
                    ]
                  },
                  expr.id
                );
              })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-expr-main", style: { padding: "0 16px" }, children: activeExprId ? (() => {
              const expr = searchExprs.find((e) => e.id === activeExprId);
              if (!expr) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-detail-empty", children: "未找到检索式" });
              let result = [...notes];
              if (!settings.showMemoNotesInList) {
                result = result.filter((n) => !n.parent_ids || n.parent_ids.length === 0);
              }
              if (expr.conditions.length > 0) {
                result = result.filter((n) => {
                  const condResults = expr.conditions.map((c) => evaluateCondition(c, n));
                  return expr.matchMode === "and" ? condResults.every(Boolean) : condResults.some(Boolean);
                });
              }
              result.sort((a, b) => b.createdAt - a.createdAt);
              const filteredResult = result.filter((n) => {
                if (exprTagIncluded.length > 0 && !exprTagIncluded.every((t2) => n.tags.includes(t2))) return false;
                if (exprTagExcluded.length > 0 && exprTagExcluded.some((t2) => n.tags.includes(t2))) return false;
                return true;
              });
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0 8px", borderBottom: "1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 70%, transparent)", marginBottom: 8 }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexWrap: "wrap", gap: 4, flex: 1, alignItems: "center" }, children: [
                    (exprTagIncluded.length > 0 || exprTagExcluded.length > 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "mcard-detail-tag mcard-detail-tag-active",
                        style: { fontSize: 11 },
                        onClick: () => {
                          setExprTagIncluded([]);
                          setExprTagExcluded([]);
                        },
                        children: [
                          "全部 (",
                          result.length,
                          ")"
                        ]
                      }
                    ),
                    (() => {
                      const tagMap = /* @__PURE__ */ new Map();
                      result.forEach((n) => n.tags.forEach((t2) => tagMap.set(t2, (tagMap.get(t2) || 0) + 1)));
                      const sortedTags = [...tagMap.entries()].sort((a, b) => b[1] - a[1]);
                      return sortedTags.map(([tag, count]) => {
                        const isIncluded = exprTagIncluded.includes(tag);
                        const isExcluded = exprTagExcluded.includes(tag);
                        const cls = isIncluded ? "mcard-detail-tag mcard-detail-tag-active" : isExcluded ? "mcard-detail-tag mcard-detail-tag-excluded" : "mcard-detail-tag";
                        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "span",
                          {
                            className: cls,
                            style: { fontSize: 11, cursor: "pointer" },
                            onClick: () => {
                              if (isExcluded) {
                                setExprTagExcluded(exprTagExcluded.filter((t2) => t2 !== tag));
                              }
                              setExprTagIncluded(isIncluded ? exprTagIncluded.filter((t2) => t2 !== tag) : [...exprTagIncluded, tag]);
                            },
                            onContextMenu: (e) => {
                              e.preventDefault();
                              if (isIncluded) {
                                setExprTagIncluded(exprTagIncluded.filter((t2) => t2 !== tag));
                              }
                              setExprTagExcluded(isExcluded ? exprTagExcluded.filter((t2) => t2 !== tag) : [...exprTagExcluded, tag]);
                            },
                            title: isExcluded ? "点击取消排除" : "点击包含 | 右键排除",
                            children: [
                              "#",
                              tag,
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 9, opacity: 0.6, marginLeft: 2 }, children: count })
                            ]
                          },
                          tag
                        );
                      });
                    })()
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", gap: 6, flexShrink: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      className: "mcard-detail-action-btn",
                      style: { fontSize: 11, padding: "2px 8px" },
                      onClick: () => setSearchExprResultGrid(!searchExprResultGrid),
                      children: searchExprResultGrid ? "列表" : "卡片"
                    }
                  ) })
                ] }),
                filteredResult.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-detail-empty", children: "无匹配卡片" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mcard-detail-child-cards-list ${searchExprResultGrid ? "mcard-child-grid" : ""}`, children: filteredResult.map((note) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "mcard-detail-child-card",
                    onClick: () => {
                      setShowSearchExprModal(false);
                      setDetailNote(note);
                    },
                    children: [
                      note.title && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-detail-child-card-title", children: note.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-detail-child-card-content", children: (() => {
                        const cacheKey = `${note.id}::hide::${note.content}`;
                        let html = noteHtmlCacheRef.current.get(cacheKey);
                        if (html === void 0) {
                          html = renderNoteHtml(note.content, resolveAssetUrl, { hideTags: true, notes });
                          noteHtmlCacheRef.current.set(cacheKey, html);
                        }
                        return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dangerouslySetInnerHTML: { __html: html } });
                      })() }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-detail-child-card-footer", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-detail-child-card-date", children: formatAgo(note.createdAt) }),
                        note.tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-detail-child-card-tags", children: note.tags.map((t2) => `#${t2}`).join(" ") })
                      ] })
                    ]
                  },
                  note.id
                )) })
              ] });
            })() : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-detail-empty", style: { paddingTop: 40 }, children: "从左侧选择一个检索式查看结果" }) })
          ] })
        ] }) }),
        showExprBuilder && editingExpr && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-detail-overlay", onClick: () => {
          setShowExprBuilder(false);
          setEditingExpr(null);
        }, style: { zIndex: 10001 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-detail-panel", onClick: (e) => e.stopPropagation(), style: { maxWidth: 500, maxHeight: "80vh" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-detail-header", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "mcard-detail-back", onClick: () => {
              setShowExprBuilder(false);
              setEditingExpr(null);
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "20", height: "20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" }) }),
              "返回"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-detail-meta", children: editingExpr.id ? "编辑检索式" : "新建检索式" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "0 16px 16px", overflowY: "auto" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "chart-filter-option", style: { marginTop: 12 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "检索式命名" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  className: "mcard-edit-title-input",
                  type: "text",
                  placeholder: "命名此检索式",
                  value: editingExpr.name,
                  onChange: (e) => setEditingExpr({ ...editingExpr, name: e.target.value })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "chart-filter-option", style: { marginTop: 12 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "匹配模式" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-match-mode", style: { marginTop: 4 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    className: `mcard-match-mode-btn ${editingExpr.matchMode === "and" ? "active" : ""}`,
                    onClick: () => setEditingExpr({ ...editingExpr, matchMode: "and" }),
                    children: "全部满足"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    className: `mcard-match-mode-btn ${editingExpr.matchMode === "or" ? "active" : ""}`,
                    onClick: () => setEditingExpr({ ...editingExpr, matchMode: "or" }),
                    children: "满足任一"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "chart-filter-option", style: { marginTop: 12 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "筛选条件" }),
              editingExpr.conditions.map((cond, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 6, padding: 8, border: "1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 70%, transparent)", borderRadius: 6 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 6, alignItems: "center" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: cond.field,
                      style: { flex: 3, padding: "4px 6px", border: "1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 70%, transparent)", borderRadius: 4, fontSize: 12, background: "var(--orca-color-bg-1, #fff)", color: "var(--orca-color-text-1, #333)", outline: "none" },
                      onChange: (e) => {
                        const newField = e.target.value;
                        const newConditions = [...editingExpr.conditions];
                        let newOp = "contains";
                        let newVal = "";
                        if (newField === "tag") {
                          newOp = "contains";
                          newVal = [];
                        } else if (newField === "date") {
                          newOp = "after";
                          newVal = "";
                        } else if (newField === "time_range") {
                          newOp = "contains";
                          newVal = "7d";
                        } else if (newField === "has_image" || newField === "has_reference") {
                          newOp = "yes";
                          newVal = "";
                        }
                        newConditions[idx] = { field: newField, operator: newOp, value: newVal };
                        setEditingExpr({ ...editingExpr, conditions: newConditions });
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "content", children: "内容" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "tag", children: "标签" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "date", children: "日期" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "time_range", children: "时间范围" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "has_image", children: "图片" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "has_reference", children: "引用" })
                      ]
                    }
                  ),
                  cond.field === "content" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: cond.operator,
                      style: { flex: 2, padding: "4px 6px", border: "1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 70%, transparent)", borderRadius: 4, fontSize: 12, background: "var(--orca-color-bg-1, #fff)", color: "var(--orca-color-text-1, #333)", outline: "none" },
                      onChange: (e) => {
                        const newConditions = [...editingExpr.conditions];
                        newConditions[idx] = { ...cond, operator: e.target.value };
                        setEditingExpr({ ...editingExpr, conditions: newConditions });
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "contains", children: "包含" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "not_contains", children: "不包含" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "equals", children: "等于" })
                      ]
                    }
                  ),
                  cond.field === "date" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: cond.operator,
                      style: { flex: 2, padding: "4px 6px", border: "1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 70%, transparent)", borderRadius: 4, fontSize: 12, background: "var(--orca-color-bg-1, #fff)", color: "var(--orca-color-text-1, #333)", outline: "none" },
                      onChange: (e) => {
                        const newConditions = [...editingExpr.conditions];
                        const newOp = e.target.value;
                        newConditions[idx] = { ...cond, operator: newOp, value: newOp === "between" ? ["", ""] : "" };
                        setEditingExpr({ ...editingExpr, conditions: newConditions });
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "after", children: "之后" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "before", children: "之前" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "between", children: "范围" })
                      ]
                    }
                  ),
                  (cond.field === "has_image" || cond.field === "has_reference") && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: cond.operator,
                      style: { flex: 2, padding: "4px 6px", border: "1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 70%, transparent)", borderRadius: 4, fontSize: 12, background: "var(--orca-color-bg-1, #fff)", color: "var(--orca-color-text-1, #333)", outline: "none" },
                      onChange: (e) => {
                        const newConditions = [...editingExpr.conditions];
                        newConditions[idx] = { ...cond, operator: e.target.value };
                        setEditingExpr({ ...editingExpr, conditions: newConditions });
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "yes", children: "有" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "no", children: "无" })
                      ]
                    }
                  ),
                  cond.field === "tag" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: cond.operator,
                      style: { flex: 2, padding: "4px 6px", border: "1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 70%, transparent)", borderRadius: 4, fontSize: 12, background: "var(--orca-color-bg-1, #fff)", color: "var(--orca-color-text-1, #333)", outline: "none" },
                      onChange: (e) => {
                        const newConditions = [...editingExpr.conditions];
                        newConditions[idx] = { ...cond, operator: e.target.value };
                        setEditingExpr({ ...editingExpr, conditions: newConditions });
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "contains", children: "包含" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "not_contains", children: "不包含" })
                      ]
                    }
                  ),
                  (cond.field === "tag_include" || cond.field === "tag_exclude") && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { flex: 2, fontSize: 12, color: "var(--orca-color-gray-5, #999)" }, children: "选择标签" }),
                  cond.field === "tag" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      placeholder: "搜索标签...",
                      value: tagSearchMap[idx] || "",
                      style: { flex: 4, padding: "4px 8px", border: "1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 70%, transparent)", borderRadius: 4, fontSize: 12, background: "var(--orca-color-bg-1, #fff)", color: "var(--orca-color-text-1, #333)", outline: "none" },
                      onChange: (e) => setTagSearchMap({ ...tagSearchMap, [idx]: e.target.value })
                    }
                  ),
                  cond.field === "content" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      placeholder: "...",
                      value: cond.value || "",
                      style: { flex: 4, padding: "4px 8px", border: "1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 70%, transparent)", borderRadius: 4, fontSize: 12, background: "var(--orca-color-bg-1, #fff)", color: "var(--orca-color-text-1, #333)", outline: "none" },
                      onChange: (e) => {
                        const newConditions = [...editingExpr.conditions];
                        newConditions[idx] = { ...cond, value: e.target.value };
                        setEditingExpr({ ...editingExpr, conditions: newConditions });
                      }
                    }
                  ),
                  cond.field === "date" && cond.operator === "between" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 4, display: "flex", gap: 4, alignItems: "center" }, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "date",
                        value: Array.isArray(cond.value) ? cond.value[0] || "" : "",
                        style: { flex: 1, padding: "3px 6px", border: "1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 70%, transparent)", borderRadius: 4, fontSize: 11, background: "var(--orca-color-bg-1, #fff)", color: "var(--orca-color-text-1, #333)", outline: "none" },
                        onChange: (e) => {
                          const newConditions = [...editingExpr.conditions];
                          const arr = Array.isArray(cond.value) ? [...cond.value] : ["", ""];
                          arr[0] = e.target.value;
                          newConditions[idx] = { ...cond, value: arr };
                          setEditingExpr({ ...editingExpr, conditions: newConditions });
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 11, color: "var(--orca-color-gray-5, #999)" }, children: "~" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "date",
                        value: Array.isArray(cond.value) ? cond.value[1] || "" : "",
                        style: { flex: 1, padding: "3px 6px", border: "1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 70%, transparent)", borderRadius: 4, fontSize: 11, background: "var(--orca-color-bg-1, #fff)", color: "var(--orca-color-text-1, #333)", outline: "none" },
                        onChange: (e) => {
                          const newConditions = [...editingExpr.conditions];
                          const arr = Array.isArray(cond.value) ? [...cond.value] : ["", ""];
                          arr[1] = e.target.value;
                          newConditions[idx] = { ...cond, value: arr };
                          setEditingExpr({ ...editingExpr, conditions: newConditions });
                        }
                      }
                    )
                  ] }),
                  cond.field === "date" && cond.operator !== "between" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "date",
                      value: typeof cond.value === "string" ? cond.value : "",
                      style: { flex: 4, padding: "3px 6px", border: "1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 70%, transparent)", borderRadius: 4, fontSize: 11, background: "var(--orca-color-bg-1, #fff)", color: "var(--orca-color-text-1, #333)", outline: "none" },
                      onChange: (e) => {
                        const newConditions = [...editingExpr.conditions];
                        newConditions[idx] = { ...cond, value: e.target.value };
                        setEditingExpr({ ...editingExpr, conditions: newConditions });
                      }
                    }
                  ),
                  (cond.field === "has_image" || cond.field === "has_reference") && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { flex: 4, fontSize: 12, color: "var(--orca-color-gray-5, #999)" }, children: "-" }),
                  cond.field === "time_range" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: cond.value || "7d",
                      style: { flex: 4, padding: "4px 6px", border: "1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 70%, transparent)", borderRadius: 4, fontSize: 12, background: "var(--orca-color-bg-1, #fff)", color: "var(--orca-color-text-1, #333)", outline: "none" },
                      onChange: (e) => {
                        const newConditions = [...editingExpr.conditions];
                        newConditions[idx] = { ...cond, value: e.target.value };
                        setEditingExpr({ ...editingExpr, conditions: newConditions });
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "1d", children: "最近1天" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "7d", children: "最近7天" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "14d", children: "最近14天" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "30d", children: "最近30天" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "90d", children: "最近3个月" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "180d", children: "最近6个月" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "365d", children: "最近1年" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      style: { padding: "2px 6px", border: "none", background: "transparent", cursor: "pointer", color: "var(--orca-color-dangerous-5, #e74c3c)", fontSize: 14, flexShrink: 0 },
                      onClick: () => setEditingExpr({ ...editingExpr, conditions: editingExpr.conditions.filter((_, i) => i !== idx) }),
                      children: "×"
                    }
                  )
                ] }),
                (cond.field === "tag_include" || cond.field === "tag_exclude") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 4 }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      placeholder: "搜索标签...",
                      value: tagSearchMap[idx] || "",
                      style: { width: "100%", padding: "4px 8px", border: "1px solid color-mix(in srgb, var(--orca-color-gray-3, #e0e0e0) 70%, transparent)", borderRadius: 4, fontSize: 11, background: "var(--orca-color-bg-1, #fff)", color: "var(--orca-color-text-1, #333)", outline: "none", boxSizing: "border-box", marginBottom: 6 },
                      onChange: (e) => setTagSearchMap({ ...tagSearchMap, [idx]: e.target.value })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexWrap: "wrap", gap: 4, maxHeight: 120, overflowY: "auto" }, children: [
                    allTags.filter((tag) => !tagSearchMap[idx] || tag.includes(tagSearchMap[idx])).map((tag) => {
                      const selected = Array.isArray(cond.value) && cond.value.includes(tag);
                      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: `mcard-detail-tag ${selected ? "mcard-detail-tag-active" : ""}`,
                          onClick: () => {
                            const newConditions = [...editingExpr.conditions];
                            const arr = Array.isArray(cond.value) ? [...cond.value] : [];
                            newConditions[idx] = { ...cond, value: selected ? arr.filter((t2) => t2 !== tag) : [...arr, tag] };
                            setEditingExpr({ ...editingExpr, conditions: newConditions });
                          },
                          children: [
                            "#",
                            tag
                          ]
                        },
                        tag
                      );
                    }),
                    allTags.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 12, color: "var(--orca-color-gray-5, #999)" }, children: "暂无标签" })
                  ] })
                ] }),
                cond.field === "tag" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexWrap: "wrap", gap: 4, maxHeight: 120, overflowY: "auto" }, children: [
                  allTags.filter((tag) => !tagSearchMap[idx] || tag.includes(tagSearchMap[idx])).map((tag) => {
                    const selected = Array.isArray(cond.value) && cond.value.includes(tag);
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: `mcard-detail-tag ${selected ? "mcard-detail-tag-active" : ""}`,
                        onClick: () => {
                          const newConditions = [...editingExpr.conditions];
                          const arr = Array.isArray(cond.value) ? [...cond.value] : [];
                          newConditions[idx] = { ...cond, value: selected ? arr.filter((t2) => t2 !== tag) : [...arr, tag] };
                          setEditingExpr({ ...editingExpr, conditions: newConditions });
                        },
                        children: [
                          "#",
                          tag
                        ]
                      },
                      tag
                    );
                  }),
                  allTags.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 12, color: "var(--orca-color-gray-5, #999)" }, children: "暂无标签" })
                ] }) })
              ] }, idx)),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  style: { marginTop: 6, padding: "4px 10px", fontSize: 11, border: "1px dashed var(--orca-color-gray-3, #e0e0e0)", borderRadius: 6, background: "transparent", cursor: "pointer", color: "var(--orca-color-text-2, #555)", width: "100%" },
                  onClick: () => setEditingExpr({ ...editingExpr, conditions: [...editingExpr.conditions, { field: "content", operator: "contains", value: "" }] }),
                  children: "+ 添加条件"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 16 }, children: [
              editingExpr.id && searchExprs.find((e) => e.id === editingExpr.id) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: "mcard-detail-action-btn danger",
                  onClick: () => {
                    setSearchExprs((prev) => prev.filter((e) => e.id !== editingExpr.id));
                    setShowExprBuilder(false);
                    setEditingExpr(null);
                    if (activeExprId === editingExpr.id) setActiveExprId(null);
                  },
                  children: "删除"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: "mcard-detail-action-btn",
                  onClick: () => {
                    if (!editingExpr.name.trim()) return;
                    const existing = searchExprs.find((e) => e.id === editingExpr.id);
                    if (existing) {
                      setSearchExprs((prev) => prev.map((e) => e.id === editingExpr.id ? editingExpr : e));
                    } else {
                      const newExpr = { ...editingExpr, id: `expr-${Date.now()}-${Math.random().toString(36).slice(2, 6)}` };
                      setSearchExprs((prev) => [...prev, newExpr]);
                      setEditingExpr(newExpr);
                    }
                    setShowExprBuilder(false);
                  },
                  children: "保存"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: "mcard-detail-action-btn",
                  onClick: () => {
                    if (!editingExpr.id) {
                      const newExpr = { ...editingExpr, id: `expr-${Date.now()}-${Math.random().toString(36).slice(2, 6)}` };
                      setSearchExprs((prev) => [...prev, newExpr]);
                      setActiveExprId(newExpr.id);
                      setEditingExpr(newExpr);
                    } else {
                      setActiveExprId(editingExpr.id);
                    }
                    setShowExprBuilder(false);
                  },
                  children: "保存并执行"
                }
              )
            ] })
          ] })
        ] }) }),
        tagMenuTag && tagMenuPos && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "mcard-tag-menu-overlay",
            onClick: () => {
              setTagMenuTag(null);
              setTagMenuPos(null);
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "mcard-tag-menu-dropdown",
                style: { top: tagMenuPos.y, left: tagMenuPos.x },
                onClick: (e) => e.stopPropagation(),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "mcard-tag-menu-item",
                      onClick: () => togglePinTag(tagMenuTag),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-tag-menu-icon", children: "📌" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: pinnedTags.includes(tagMenuTag) ? "取消置顶" : "置顶" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "mcard-tag-menu-item",
                      onClick: () => {
                        setRenameTagOld(tagMenuTag);
                        setRenameTagNew(tagMenuTag);
                        setTagMenuTag(null);
                        setTagMenuPos(null);
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-tag-menu-icon", children: "✏️" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "重命名" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "mcard-tag-menu-item danger",
                      onClick: () => {
                        setDeleteTagTarget(tagMenuTag);
                        setTagMenuTag(null);
                        setTagMenuPos(null);
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-tag-menu-icon", children: "🗑️" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "删除标签" })
                      ]
                    }
                  )
                ]
              }
            )
          }
        ),
        renameTagOld && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-tag-menu-overlay", onClick: () => {
          setRenameTagOld(null);
          setRenameTagNew("");
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-tag-rename-modal", onClick: (e) => e.stopPropagation(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-tag-rename-title", children: "重命名标签" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              className: "mcard-tag-rename-input",
              value: renameTagNew,
              onChange: (e) => setRenameTagNew(e.target.value),
              onKeyDown: (e) => {
                if (e.key === "Enter") doRenameTag(renameTagOld, renameTagNew.trim());
              },
              autoFocus: true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-tag-rename-hint", children: "使用 标签/次级标签 格式创建多级标签" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-tag-rename-actions", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mcard-tag-rename-cancel", onClick: () => {
              setRenameTagOld(null);
              setRenameTagNew("");
            }, children: "取消" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mcard-tag-rename-save", onClick: () => doRenameTag(renameTagOld, renameTagNew.trim()), children: "保存" })
          ] })
        ] }) }),
        deleteTagTarget && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-tag-menu-overlay", onClick: () => setDeleteTagTarget(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-tag-rename-modal", onClick: (e) => e.stopPropagation(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-tag-rename-title", children: [
            "删除标签 #",
            deleteTagTarget
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-tag-rename-hint", children: "选择删除方式：" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-tag-rename-actions", style: { flexDirection: "column", gap: 8 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "mcard-tag-rename-save",
                onClick: () => deleteTagOnly(deleteTagTarget),
                children: "仅删除标签（保留笔记）"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "mcard-tag-rename-danger",
                onClick: () => deleteTagAndNotes(deleteTagTarget),
                children: "删除标签和关联笔记"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mcard-tag-rename-cancel", onClick: () => setDeleteTagTarget(null), children: "取消" })
          ] })
        ] }) })
      ] })
    }
  );
}
function GalleryView({ notes, allTags, resolveAssetUrl, showImagePreview, onJumpToNote }) {
  const [selectedTag, setSelectedTag] = React.useState(null);
  const imageList = React.useMemo(() => {
    const list = [];
    const regex = /!\[[^\]]*\]\(([^)]+)\)/g;
    for (const note of notes) {
      let m;
      while ((m = regex.exec(note.content)) !== null) {
        const text = note.content.replace(m[0], "").replace(/!\[[^\]]*\]\([^)]+\)/g, "").trim();
        list.push({
          src: m[1],
          noteId: note.id,
          createdAt: note.createdAt,
          text: text.length > 100 ? text.substring(0, 100) + "..." : text,
          tags: note.tags
        });
      }
    }
    return list;
  }, [notes]);
  const filteredList = React.useMemo(() => {
    if (!selectedTag) return imageList;
    return imageList.filter((item) => item.tags.includes(selectedTag));
  }, [imageList, selectedTag]);
  const sortedTags = React.useMemo(() => {
    const tagCounts = {};
    for (const item of imageList) {
      for (const t2 of item.tags) {
        tagCounts[t2] = (tagCounts[t2] || 0) + 1;
      }
    }
    return Object.keys(tagCounts).sort((a, b) => tagCounts[b] - tagCounts[a]);
  }, [imageList]);
  const dateRange = React.useMemo(() => {
    if (filteredList.length === 0) return "";
    const dates = filteredList.map((i) => i.createdAt).sort((a, b) => a - b);
    const earliest = new Date(dates[0]);
    const latest = new Date(dates[dates.length - 1]);
    const fmt = (d) => `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
    return earliest.getFullYear() === latest.getFullYear() && earliest.getMonth() === latest.getMonth() ? `${fmt(earliest)} - ${String(latest.getMonth() + 1).padStart(2, "0")}.${String(latest.getDate()).padStart(2, "0")}` : `${fmt(earliest)} - ${fmt(latest)}`;
  }, [filteredList]);
  if (imageList.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-notes-list", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-empty", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-empty-icon", children: "🖼" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "暂无图片" })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-gallery-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-gallery-header-top", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-gallery-header-title", children: "拾光" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-gallery-header-meta", children: [
          dateRange && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-gallery-header-date", children: dateRange }),
          dateRange && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-gallery-header-dot", children: "·" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mcard-gallery-header-count", children: [
            filteredList.length,
            " 张照片"
          ] })
        ] })
      ] }),
      sortedTags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-gallery-tags", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: `mcard-gallery-tag-chip ${!selectedTag ? "active" : ""}`,
            onClick: () => setSelectedTag(null),
            children: "全部"
          }
        ),
        sortedTags.map((t2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: `mcard-gallery-tag-chip ${selectedTag === t2 ? "active" : ""}`,
            onClick: () => setSelectedTag(selectedTag === t2 ? null : t2),
            children: t2
          },
          t2
        ))
      ] })
    ] }),
    filteredList.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-notes-list", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-empty", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-empty-icon", children: "🖼" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "该标签下暂无照片" })
    ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-gallery-grid", children: filteredList.map((img, i) => {
      const date = new Date(img.createdAt);
      const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "mcard-gallery-item",
          onClick: () => onJumpToNote(img.noteId),
          onDoubleClick: (e) => {
            e.stopPropagation();
            showImagePreview(resolveAssetUrl(img.src));
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-gallery-img-wrapper", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: resolveAssetUrl(img.src), alt: "", loading: "lazy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-gallery-overlay", children: [
              img.tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-gallery-overlay-tags", children: img.tags.map((t2) => `#${t2}`).join(" ") }),
              img.text && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-gallery-overlay-text", children: img.text }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-gallery-overlay-date", children: dateStr })
            ] })
          ] })
        },
        i
      );
    }) })
  ] });
}
function ReviewView({
  notes,
  index,
  onNext,
  onPick,
  renderContent
}) {
  if (notes.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-notes-list", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-empty", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-empty-icon", children: "◐" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "暂无待回顾的笔记" })
    ] }) });
  }
  const note = notes[index];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-daily-stats", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-daily-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-daily-stat-num", children: notes.length }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-daily-stat-label", children: "待回顾" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-daily-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-daily-stat-num", children: index + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-daily-stat-label", children: "当前" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-daily-stat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-daily-stat-num", children: [
          Math.round((index + 1) / notes.length * 100),
          "%"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-daily-stat-label", children: "进度" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-notes-list", style: { paddingTop: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-review-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-review-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-review-title", children: "每日回顾" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-review-progress", children: [
          index + 1,
          " / ",
          notes.length
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-review-content", children: renderContent(note) }),
      note.tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-note-tags", style: { marginTop: 10 }, children: note.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mcard-note-tag", children: [
        "#",
        tag
      ] }, tag)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-review-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "mcard-review-btn secondary",
            onClick: () => onPick((index - 1 + notes.length) % notes.length),
            children: "← 上一条"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mcard-review-btn primary", onClick: onNext, children: "下一条 →" })
      ] })
    ] }) })
  ] });
}
function WeekView({
  notes,
  onDelete,
  onOpen,
  onShowMenu,
  renderContent,
  onTogglePin,
  onEdit
}) {
  if (notes.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-notes-list", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-empty", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-empty-icon", children: "📅" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "本周还没有笔记，开始记录吧！" })
    ] }) });
  }
  const grouped = [];
  for (const n of notes) {
    const last = grouped[grouped.length - 1];
    if (last && isSameDay(last.date, n.createdAt)) {
      last.notes.push(n);
    } else {
      grouped.push({ date: n.createdAt, notes: [n] });
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-notes-list", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "0 4px", marginBottom: 12, fontSize: 13, color: "var(--orca-color-gray-5, #999)" }, children: [
      "本周共 ",
      notes.length,
      " 条笔记"
    ] }),
    grouped.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-date-group", children: formatDate(group.date) }),
      group.notes.map((note) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-note-id": note.id,
          className: `mcard-note-card${note.pinned ? " pinned" : ""}`,
          onDoubleClick: (e) => {
            e.stopPropagation();
            onEdit(note);
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-note-header", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-note-date", children: formatAgo(note.createdAt) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "mcard-note-actions",
                  onClick: (e) => e.stopPropagation(),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      className: "mcard-note-menu-btn",
                      type: "button",
                      onClick: (e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        const target = e.currentTarget;
                        onShowMenu(note, target);
                      },
                      title: "更多操作",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }) })
                    }
                  )
                }
              )
            ] }),
            note.title && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-note-title", children: note.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-note-content", children: renderContent(note) })
          ]
        },
        note.id
      ))
    ] }, group.date))
  ] });
}
function RandomView({
  note,
  total,
  onShuffle,
  onOpen,
  onDelete,
  renderContent
}) {
  if (total === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-notes-list", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-empty", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-empty-icon", children: "🎲" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: t("No notes yet. Capture your first thought!") })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-notes-list", style: { paddingTop: 20 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-review-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-review-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-review-title", children: "🎲 随机漫步" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "mcard-review-btn secondary",
          style: { flex: "0 0 auto", padding: "4px 12px", fontSize: 12 },
          onClick: onShuffle,
          children: "换一条"
        }
      )
    ] }),
    note ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "mcard-review-content",
          style: { cursor: "pointer" },
          onClick: () => onOpen(note),
          children: renderContent(note)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 11, color: "var(--orca-color-gray-5, #999)", marginTop: 10 }, children: formatAgo(note.createdAt) }),
      note.tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-note-tags", style: { marginTop: 10 }, children: note.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mcard-note-tag", children: [
        "#",
        tag
      ] }, tag)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-review-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mcard-review-btn secondary", onClick: () => onDelete(note), children: "删除" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mcard-review-btn primary", onClick: () => onOpen(note), children: "打开" })
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-empty", children: "Loading..." })
  ] }) }) });
}
function StatsView({
  notes,
  wordCount,
  maxDaily,
  streakDays
}) {
  const [selectedYear, setSelectedYear] = React.useState((/* @__PURE__ */ new Date()).getFullYear());
  const [selectedMonth, setSelectedMonth] = React.useState((/* @__PURE__ */ new Date()).getMonth() + 1);
  const tagCounts = React.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    for (const n of notes) {
      for (const tag of n.tags) {
        map.set(tag, (map.get(tag) || 0) + 1);
      }
    }
    return Array.from(map.entries()).map(([tag, count]) => ({ tag, count })).sort((a, b) => b.count - a.count);
  }, [notes]);
  const tagCloud = React.useMemo(() => {
    if (tagCounts.length === 0) return [];
    const maxCount = Math.max(...tagCounts.map((t2) => t2.count));
    return tagCounts.slice(0, 40).map((t2) => ({
      ...t2,
      size: 12 + t2.count / Math.max(maxCount, 1) * 14,
      color: getTagColor(t2.tag).color
    }));
  }, [tagCounts]);
  const yearOptions = React.useMemo(() => {
    if (notes.length === 0) return [(/* @__PURE__ */ new Date()).getFullYear()];
    const years = /* @__PURE__ */ new Set([(/* @__PURE__ */ new Date()).getFullYear()]);
    for (const n of notes) years.add(new Date(n.createdAt).getFullYear());
    return Array.from(years).sort().reverse();
  }, [notes]);
  const monthDailyData = React.useMemo(() => {
    const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
    const arr = new Array(daysInMonth).fill(0);
    for (const n of notes) {
      const d = new Date(n.createdAt);
      if (d.getFullYear() === selectedYear && d.getMonth() + 1 === selectedMonth) {
        arr[d.getDate() - 1]++;
      }
    }
    return arr;
  }, [notes, selectedYear, selectedMonth]);
  const monthTotal = monthDailyData.reduce((a, b) => a + b, 0);
  const yearMonthlyData = React.useMemo(() => {
    const arr = new Array(12).fill(0);
    for (const n of notes) {
      const d = new Date(n.createdAt);
      if (d.getFullYear() === selectedYear) {
        arr[d.getMonth()]++;
      }
    }
    return arr;
  }, [notes, selectedYear]);
  const yearTotal = yearMonthlyData.reduce((a, b) => a + b, 0);
  const stats = React.useMemo(() => {
    const totalDays = /* @__PURE__ */ new Set();
    for (const n of notes) totalDays.add(formatDateKey(n.createdAt));
    return {
      records: notes.length,
      tags: new Set(notes.flatMap((n) => n.tags)).size,
      words: wordCount,
      maxDaily,
      streak: streakDays
    };
  }, [notes, wordCount, maxDaily, streakDays]);
  const maxMonthDaily = Math.max(1, ...monthDailyData);
  const maxMonthTotal = Math.max(1, ...yearMonthlyData);
  const topTags = tagCounts.slice(0, 10);
  const heatmapData = React.useMemo(() => {
    const yearStart = new Date(selectedYear, 0, 1);
    const startDate = new Date(yearStart);
    startDate.setDate(yearStart.getDate() - yearStart.getDay());
    const yearEnd = new Date(selectedYear, 11, 31);
    const totalDays = Math.floor((yearEnd.getTime() - startDate.getTime()) / 864e5) + 1;
    const weeks = Math.ceil(totalDays / 7);
    const dayCounts = {};
    for (const n of notes) {
      const d = new Date(n.createdAt);
      if (d.getFullYear() === selectedYear) {
        const key = formatDateKey(d.getTime());
        dayCounts[key] = (dayCounts[key] || 0) + 1;
      }
    }
    const columns = [];
    for (let week = 0; week < weeks; week++) {
      const column = [];
      for (let day = 0; day < 7; day++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + week * 7 + day);
        if (date.getFullYear() === selectedYear) {
          const dateStr = formatDateKey(date.getTime());
          const count = dayCounts[dateStr] || 0;
          let level = 0;
          if (count >= 1) level = 2;
          if (count >= 3) level = 3;
          if (count >= 5) level = 4;
          column.push({ level, dateStr, count, tooltip: `${dateStr}: ${count}条记录` });
        } else {
          column.push({ level: -1, dateStr: "", count: 0, tooltip: "" });
        }
      }
      columns.push(column);
    }
    const monthNames = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
    const monthStartWeek = new Array(12).fill(-1);
    const monthEndWeek = new Array(12).fill(-1);
    for (let week = 0; week < weeks; week++) {
      for (let day = 0; day < 7; day++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + week * 7 + day);
        if (date.getFullYear() === selectedYear) {
          const m = date.getMonth();
          if (monthStartWeek[m] === -1) monthStartWeek[m] = week;
          monthEndWeek[m] = week;
        }
      }
    }
    const monthLabels = [];
    for (let m = 0; m < 12; m++) {
      if (monthStartWeek[m] !== -1) {
        const midWeek = (monthStartWeek[m] + monthEndWeek[m]) / 2;
        const leftPercent = ((midWeek + 0.5) / weeks * 100).toFixed(2) + "%";
        monthLabels.push({ name: monthNames[m], left: leftPercent });
      }
    }
    return { columns, monthLabels, weeks };
  }, [notes, selectedYear]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-stats-view", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-stats-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-stats-title", children: "记录统计" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "select",
        {
          className: "mcard-stats-year-select",
          value: selectedYear,
          onChange: (e) => setSelectedYear(Number(e.target.value)),
          children: yearOptions.map((y) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: y, children: [
            y,
            "年"
          ] }, y))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-stats-cards", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-stat-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-stat-card-num", children: stats.records }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-stat-card-label", children: "记录" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-stat-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-stat-card-num", children: stats.tags }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-stat-card-label", children: "标签" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-stat-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-stat-card-num", children: stats.words }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-stat-card-label", children: "字数" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-stat-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-stat-card-num", children: maxDaily }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-stat-card-label", children: "单日最多" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-stat-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-stat-card-num", children: wordCount > 0 ? Math.round(wordCount / Math.max(1, maxDaily)) : 0 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-stat-card-label", children: "单日最多字数" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-stat-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-stat-card-num", children: streakDays }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-stat-card-label", children: "坚持天数" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-contribution-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-contribution-body", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-contribution-columns", children: heatmapData.columns.map((column, weekIdx) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-contribution-column", children: column.map((cell, dayIdx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `mcard-contribution-cell${cell.level === -1 ? " level-empty" : cell.level > 0 ? ` level-${cell.level}` : ""}`,
          title: cell.tooltip
        },
        dayIdx
      )) }, weekIdx)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-contribution-months", children: heatmapData.monthLabels.map((label, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "mcard-contribution-month-label",
          style: { left: label.left },
          children: label.name
        },
        i
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-stats-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-stats-subtitle", children: [
        "每日记录 — ",
        selectedYear,
        "-",
        String(selectedMonth).padStart(2, "0")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-stats-meta", children: [
        selectedYear,
        "-",
        String(selectedMonth).padStart(2, "0"),
        " 共 ",
        monthTotal,
        " 条"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-monthly-bars", children: monthDailyData.map((count, i) => {
        const ratio = count / maxMonthDaily;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "mcard-monthly-bar",
            style: { height: `${Math.max(8, ratio * 100)}px` },
            title: `${selectedMonth}/${i + 1}: ${count}条`,
            children: count > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-monthly-bar-label", children: count })
          },
          i
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-monthly-days", children: monthDailyData.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: i + 1 }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-stats-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-stats-subtitle", children: "月度分布" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-stats-meta", children: [
        selectedYear,
        "年 共 ",
        yearTotal,
        " 条"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-yearly-bars", children: yearMonthlyData.map((count, i) => {
        const ratio = count / maxMonthTotal;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "mcard-yearly-bar",
            style: { height: `${Math.max(12, ratio * 100)}px` },
            title: `${i + 1}月: ${count}条`,
            children: count > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-yearly-bar-label", children: count })
          },
          i
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-yearly-months", children: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: m }, m)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-stats-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-stats-subtitle", children: "常用标签" }),
      topTags.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-stats-empty", children: "暂无标签数据" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-tags-list", children: topTags.map((t2) => {
        const color = getTagColor(t2.tag);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-tag-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "mcard-tag-name",
              style: { background: color.bg, color: color.color, borderColor: color.border },
              children: [
                "#",
                t2.tag
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-tag-bar-wrapper", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "mcard-tag-bar",
              style: {
                width: `${t2.count / Math.max(...topTags.map((x) => x.count)) * 100}%`,
                background: color.color
              }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-tag-count", children: t2.count })
        ] }, t2.tag);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-stats-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-stats-subtitle", children: "标签云" }),
      tagCloud.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-stats-empty", children: "暂无标签数据" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-tag-cloud", children: tagCloud.map((t2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "span",
        {
          className: "mcard-tag-cloud-item",
          style: {
            fontSize: `${t2.size}px`,
            color: t2.color,
            background: getTagColor(t2.tag).bg
          },
          title: `${t2.tag}: ${t2.count}条`,
          children: [
            "#",
            t2.tag
          ]
        },
        t2.tag
      )) })
    ] })
  ] });
}
function SettingsView({
  settings,
  onChange,
  notes,
  flomoConfig,
  flomoUsername,
  flomoPassword,
  flomoSyncing,
  flomoLogging,
  flomoMessage,
  flomoFullSync,
  onFlomoUsernameChange,
  onFlomoPasswordChange,
  onFlomoLogin,
  onFlomoLogout,
  onFlomoSync,
  onFlomoFullSyncChange,
  inboxConfig,
  inboxSyncing,
  inboxMessage,
  inboxFullSync,
  onInboxConfigChange,
  onInboxSync,
  onInboxFullSyncChange,
  onDeleteAll,
  onImportNotes
}) {
  const [activeGroup, setActiveGroup] = React.useState("view");
  const [fontSizeInput, setFontSizeInput] = React.useState(String(settings.fontSize));
  const navItems = [
    { key: "view", label: "说说视图", icon: "📋" },
    { key: "sync", label: "说说同步", icon: "🔄" },
    { key: "flomo", label: "Flomo 同步", icon: "🌊" },
    { key: "inbox", label: "Inbox 同步", icon: "📦" },
    { key: "data", label: "数据管理", icon: "💾" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-settings-area", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-settings-nav", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-nav-header", children: "设置" }),
      navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `mcard-settings-nav-item ${activeGroup === item.key ? "active" : ""}`,
          onClick: () => setActiveGroup(item.key),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-settings-nav-icon", children: item.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.label })
          ]
        },
        item.key
      ))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-settings-content", children: [
      activeGroup === "view" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-settings-section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-subtitle", children: "紧凑模式" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-desc", children: "开启后，视图中的笔记间距更紧凑" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mcard-toggle", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                checked: settings.compactMode,
                onChange: (e) => onChange({ compactMode: e.target.checked })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-toggle-slider" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-settings-section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-subtitle", children: "字体大小" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-desc", children: "调整说说内容的字体大小" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-settings-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "number",
                className: "mcard-settings-input",
                value: fontSizeInput,
                step: 0.5,
                min: 12,
                max: 20,
                onChange: (e) => setFontSizeInput(e.target.value),
                onBlur: () => {
                  const v = Number(fontSizeInput);
                  if (v > 0 && v <= 24) onChange({ fontSize: v });
                  else setFontSizeInput(String(settings.fontSize));
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-settings-unit", children: "px" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-settings-section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-subtitle", children: "主题色" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-desc", children: "选择莫兰迪色系主题" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-theme-grid", children: [
            { key: "sage-green", name: "灰绿", color: "#9CAF88" },
            { key: "dusty-pink", name: "灰粉", color: "#D4A5A5" },
            { key: "muted-blue", name: "灰蓝", color: "#8FA1B3" },
            { key: "warm-beige", name: "暖米", color: "#C4B7A6" },
            { key: "dusty-purple", name: "灰紫", color: "#A898B5" },
            { key: "terracotta", name: "陶土", color: "#C78D7B" },
            { key: "deep-sea", name: "深海", color: "#5E738B" },
            { key: "dark-moss", name: "深苔", color: "#7A8471" },
            { key: "neutral-gray", name: "中性灰", color: "#9E9E9E" }
          ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `mcard-theme-swatch ${settings.morandiColor === c.key ? "active" : ""}`,
              style: { background: c.color },
              onClick: () => onChange({ morandiColor: c.key }),
              title: c.name
            },
            c.key
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-settings-section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-subtitle", children: "回车提交" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-desc", children: "开启后按 Enter 直接提交，Shift+Enter 换行；关闭时需 Ctrl+Enter 提交" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mcard-toggle", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                checked: settings.enterToSubmit,
                onChange: (e) => onChange({ enterToSubmit: e.target.checked })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-toggle-slider" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-settings-section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-subtitle", children: "显示批注笔记" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-desc", children: "关闭后带有批注的笔记不会出现在卡片列表中（仍可在原始笔记下方查看）" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mcard-toggle", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                checked: settings.showMemoNotesInList,
                onChange: (e) => onChange({ showMemoNotesInList: e.target.checked })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-toggle-slider" })
          ] })
        ] })
      ] }),
      activeGroup === "sync" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-settings-section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-subtitle", children: "同步选项" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-desc", children: "笔记自动同步到思源笔记" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mcard-toggle", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                checked: settings.syncToJournal,
                onChange: (e) => onChange({ syncToJournal: e.target.checked })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-toggle-slider" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-settings-section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-subtitle", children: "每日回顾数量" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-desc", children: "每日回顾时展示的笔记数量" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-settings-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "number",
                className: "mcard-settings-input",
                value: settings.dailyCount,
                min: 1,
                max: 30,
                onChange: (e) => onChange({ dailyCount: Number(e.target.value) || 8 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-settings-unit", children: "条" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-settings-section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-subtitle", children: "默认收件箱名" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-desc", children: "同步到思源时使用的收件箱名称" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-row", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              className: "mcard-settings-input",
              value: settings.inboxName,
              onChange: (e) => onChange({ inboxName: e.target.value })
            }
          ) })
        ] })
      ] }),
      activeGroup === "flomo" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-settings-section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-subtitle", children: "Flomo 账号" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-desc", children: "登录 flomo 账号以同步笔记" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-row", style: { justifyContent: "flex-end", marginBottom: 12 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `mcard-flomo-badge ${flomoConfig.accessToken ? "success" : ""}`, children: flomoConfig.accessToken ? "已登录" : "未登录" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-flomo-form-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mcard-flomo-form-label", children: "邮箱 / 手机号" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                className: "mcard-flomo-input",
                placeholder: "请输入 flomo 登录邮箱或手机号",
                value: flomoUsername,
                onChange: (e) => onFlomoUsernameChange(e.target.value),
                disabled: !!flomoConfig.accessToken
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-flomo-form-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mcard-flomo-form-label", children: "密码" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "password",
                className: "mcard-flomo-input",
                placeholder: "请输入 flomo 密码",
                value: flomoPassword,
                onChange: (e) => onFlomoPasswordChange(e.target.value),
                disabled: !!flomoConfig.accessToken
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-flomo-form-actions", children: !flomoConfig.accessToken ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "mcard-flomo-btn mcard-flomo-btn-primary",
              onClick: onFlomoLogin,
              disabled: flomoLogging,
              children: flomoLogging ? "登录中..." : "登录"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "mcard-flomo-btn mcard-flomo-btn-secondary",
              onClick: onFlomoLogout,
              children: "退出登录"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mcard-settings-section ${!flomoConfig.accessToken ? "mcard-settings-section-disabled" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-subtitle", children: "同步设置" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-desc", children: "将 flomo 笔记同步到说说列表" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-flomo-form-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mcard-flomo-form-label", children: "上次同步时间" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-flomo-readonly", children: flomoConfig.lastSyncTime || "从未同步" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-flomo-form-row", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mcard-flomo-checkbox-label", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                checked: flomoFullSync,
                onChange: (e) => onFlomoFullSyncChange(e.target.checked)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "全量同步（重新同步所有笔记）" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-flomo-form-actions", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "mcard-flomo-btn mcard-flomo-btn-primary",
              onClick: onFlomoSync,
              disabled: flomoSyncing || !flomoConfig.accessToken,
              children: flomoSyncing ? "同步中..." : "开始同步"
            }
          ) }),
          flomoMessage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-flomo-message", children: flomoMessage })
        ] })
      ] }),
      activeGroup === "inbox" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-settings-section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-subtitle", children: "S3 存储配置" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-desc", children: "配置 inBox 云端 S3 存储连接信息" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-flomo-form-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mcard-flomo-form-label", children: "S3 Endpoint" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                className: "mcard-flomo-input",
                placeholder: "例如 s3.amazonaws.com",
                value: inboxConfig.s3Endpoint,
                onChange: (e) => onInboxConfigChange({ ...inboxConfig, s3Endpoint: e.target.value })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-flomo-form-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mcard-flomo-form-label", children: "Access Key" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                className: "mcard-flomo-input",
                placeholder: "S3 Access Key ID",
                value: inboxConfig.s3AccessKey,
                onChange: (e) => onInboxConfigChange({ ...inboxConfig, s3AccessKey: e.target.value })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-flomo-form-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mcard-flomo-form-label", children: "Secret Key" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "password",
                className: "mcard-flomo-input",
                placeholder: "S3 Secret Access Key",
                value: inboxConfig.s3SecretKey,
                onChange: (e) => onInboxConfigChange({ ...inboxConfig, s3SecretKey: e.target.value })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-flomo-form-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mcard-flomo-form-label", children: "Bucket" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                className: "mcard-flomo-input",
                placeholder: "S3 存储桶名称",
                value: inboxConfig.s3Bucket,
                onChange: (e) => onInboxConfigChange({ ...inboxConfig, s3Bucket: e.target.value })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-flomo-form-row", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mcard-flomo-form-label", children: "Region" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                className: "mcard-flomo-input",
                placeholder: "us-east-1",
                value: inboxConfig.s3Region,
                onChange: (e) => onInboxConfigChange({ ...inboxConfig, s3Region: e.target.value })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-settings-section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-subtitle", children: "同步选项" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-desc", children: "配置 inBox 笔记同步行为" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-flomo-form-row", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mcard-flomo-checkbox-label", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                checked: inboxFullSync,
                onChange: (e) => onInboxFullSyncChange(e.target.checked)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "全量同步（重新同步所有笔记）" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-flomo-form-actions", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "mcard-flomo-btn mcard-flomo-btn-primary",
              onClick: onInboxSync,
              disabled: inboxSyncing,
              children: inboxSyncing ? "同步中..." : "开始同步"
            }
          ) }),
          inboxMessage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-flomo-message", children: inboxMessage })
        ] })
      ] }),
      activeGroup === "data" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-settings-section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-subtitle", children: "危险操作" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-desc", children: "以下操作不可恢复，请谨慎使用" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 8 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "mcard-settings-btn mcard-settings-btn-danger",
              id: "mcard-delete-all-btn",
              onClick: onDeleteAll,
              children: "删除全部数据"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-settings-section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-subtitle", children: "导入数据" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-desc", children: "从 JSON 文件导入笔记，自动跳过重复数据" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 8 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "mcard-settings-btn",
              onClick: () => {
                const input = document.createElement("input");
                input.type = "file";
                input.accept = ".json";
                input.onchange = () => {
                  var _a;
                  const file = (_a = input.files) == null ? void 0 : _a[0];
                  if (!file) return;
                  const reader = new FileReader();
                  reader.onload = async (ev) => {
                    var _a2;
                    try {
                      const text = (_a2 = ev.target) == null ? void 0 : _a2.result;
                      if (!text) {
                        orca.notify("error", "文件内容为空");
                        return;
                      }
                      const imported = JSON.parse(text);
                      if (!Array.isArray(imported)) {
                        orca.notify("error", "无效的 JSON 格式，需要数组");
                        return;
                      }
                      const validNotes = [];
                      for (const item of imported) {
                        if (!item.id || !item.content) continue;
                        validNotes.push({
                          id: item.id,
                          blockId: item.blockId || 0,
                          content: item.content,
                          tags: Array.isArray(item.tags) ? item.tags : extractTags$1(item.content),
                          createdAt: item.createdAt || Date.now(),
                          updatedAt: item.updatedAt || Date.now(),
                          pinned: item.pinned || false,
                          parent_ids: item.parent_ids || void 0,
                          title: item.title || void 0
                        });
                      }
                      if (validNotes.length === 0) {
                        orca.notify("info", "没有有效的笔记数据");
                        return;
                      }
                      await onImportNotes(validNotes);
                    } catch (e) {
                      console.error("[mcard] import error:", e);
                      orca.notify("error", "导入失败：" + (e instanceof Error ? e.message : "JSON 解析错误"));
                    }
                  };
                  reader.onerror = () => {
                    orca.notify("error", "文件读取失败");
                  };
                  reader.readAsText(file, "utf-8");
                };
                input.click();
              },
              children: "导入 JSON"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-settings-section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-subtitle", children: "导出数据" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-desc", children: "将笔记数据导出为 JSON 或 Markdown 格式" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8, marginTop: 8 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "mcard-settings-btn",
                onClick: async () => {
                  const dateStr = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
                  const data = JSON.stringify(notes, null, 2);
                  const blob = new Blob([data], { type: "application/json" });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = `mcard-backup-${dateStr}.json`;
                  a.click();
                  URL.revokeObjectURL(url);
                  orca.notify("success", "JSON 数据已导出");
                },
                children: "导出 JSON"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "mcard-settings-btn",
                onClick: async () => {
                  const dateStr = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
                  const now = /* @__PURE__ */ new Date();
                  const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
                  let md = `# Mcard 备份
> 导出时间：${dateStr} ${timeStr}
> 共 ${notes.length} 条笔记

---

`;
                  const sorted = [...notes].sort((a2, b) => a2.createdAt - b.createdAt);
                  for (const n of sorted) {
                    const d = new Date(n.createdAt);
                    const dateKey = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
                    const t2 = `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
                    const tags = (n.tags || []).map((tg) => `#${tg}`).join(" ");
                    md += `## ${dateKey} ${t2}

${n.content || ""}

`;
                    if (tags) md += `${tags}

`;
                    md += `---

`;
                  }
                  const blob = new Blob([md], { type: "text/markdown" });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = `mcard-backup-${dateStr}.md`;
                  a.click();
                  URL.revokeObjectURL(url);
                  orca.notify("success", "Markdown 数据已导出");
                },
                children: "导出 Markdown"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-settings-section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-subtitle", children: "数据存储" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-desc", children: "笔记数据通过 Orca 插件 API 存储，支持多端同步" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-settings-section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-subtitle", children: "版本" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-settings-desc", children: "Mcard Plugin v0.1.0" })
        ] })
      ] })
    ] })
  ] });
}
let pluginName;
const PANEL_TYPE = "mcard.panel";
const STYLE_ROLE = "orca-plugin-mcard-style";
let registeredPanelType = null;
function injectStylesOnce() {
  if (document.head.querySelector(`style[data-role="${STYLE_ROLE}"]`)) return;
  const style = document.createElement("style");
  style.dataset.role = STYLE_ROLE;
  style.innerHTML = mcardStyles;
  document.head.appendChild(style);
}
function mergedSettings() {
  try {
    const raw = localStorage.getItem(`mcard_settings_${pluginName}`);
    if (raw) {
      const saved = JSON.parse(raw);
      return { ...DEFAULT_SETTINGS, ...saved };
    }
  } catch {
  }
  const state = orca.state.plugins[pluginName] || {};
  return { ...DEFAULT_SETTINGS, ...state.settings || {} };
}
function McardPanelRenderer(props) {
  const { useEffect, useState } = window.React;
  const [settings, setSettings] = useState(mergedSettings());
  useEffect(() => {
    const tick = () => setSettings(mergedSettings());
    tick();
    const onSettings = () => tick();
    window.addEventListener("focus", onSettings);
    return () => window.removeEventListener("focus", onSettings);
  }, []);
  const onSettingsChange = async (patch) => {
    const merged = { ...settings, ...patch };
    setSettings(merged);
    try {
      localStorage.setItem(`mcard_settings_${pluginName}`, JSON.stringify(merged));
    } catch {
    }
    try {
      await orca.plugins.setSettings("app", pluginName, merged);
    } catch {
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(McardPanel, { pluginName, settings, onSettingsChange, panelId: props.panelId });
}
function CaptureModal({ onClose }) {
  const { useEffect, useState, useRef } = window.React;
  const [text, setText] = useState("");
  const taRef = useRef(null);
  const lastCursorRef = useRef({ start: 0, end: 0 });
  const [showTagPicker, setShowTagPicker] = useState(false);
  const [tagPickerFilter, setTagPickerFilter] = useState("");
  const [tagPickerActiveIdx, setTagPickerActiveIdx] = useState(0);
  const [loadedTags, setLoadedTags] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const existing = await orca.plugins.getData(pluginName, "mcard.notes");
        const notes = typeof existing === "string" && existing.trim() ? JSON.parse(existing) : [];
        const tagSet = /* @__PURE__ */ new Set();
        for (const n of notes) for (const tag of n.tags || []) tagSet.add(tag);
        setLoadedTags(Array.from(tagSet).sort());
      } catch {
        setLoadedTags([]);
      }
    })();
  }, []);
  function saveCursor() {
    const ta = taRef.current;
    if (ta) {
      lastCursorRef.current = { start: ta.selectionStart, end: ta.selectionEnd };
    }
  }
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        if (showTagPicker) {
          setShowTagPicker(false);
          return;
        }
        onClose();
      }
      const settings = mergedSettings();
      if (e.key === "Enter") {
        if (showTagPicker) {
          e.preventDefault();
          const filtered = loadedTags.filter((t2) => !tagPickerFilter || t2.includes(tagPickerFilter));
          if (tagPickerActiveIdx < filtered.length) {
            doInsertTag(filtered[tagPickerActiveIdx]);
          } else if (tagPickerFilter.trim()) {
            doInsertTag(tagPickerFilter.trim());
          }
          return;
        }
        if (settings.enterToSubmit) {
          if (!e.shiftKey) {
            e.preventDefault();
            void submit();
          }
        } else {
          if (e.metaKey || e.ctrlKey) {
            e.preventDefault();
            void submit();
          }
        }
      }
      if (e.key === "#" && !showTagPicker) {
        setTimeout(() => {
          setShowTagPicker(true);
          setTagPickerFilter("");
          setTagPickerActiveIdx(0);
        }, 10);
      }
      if (showTagPicker) {
        const filtered = loadedTags.filter((t2) => !tagPickerFilter || t2.includes(tagPickerFilter));
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setTagPickerActiveIdx((i) => Math.min(i + 1, filtered.length));
        }
        if (e.key === "ArrowUp") {
          e.preventDefault();
          setTagPickerActiveIdx((i) => Math.max(i - 1, 0));
        }
      }
    };
    document.addEventListener("keydown", onKey);
    setTimeout(() => {
      var _a;
      return (_a = taRef.current) == null ? void 0 : _a.focus();
    }, 30);
    return () => document.removeEventListener("keydown", onKey);
  }, [text, showTagPicker, tagPickerFilter, tagPickerActiveIdx, loadedTags]);
  function insertText(before, after = "") {
    const ta = taRef.current;
    if (!ta) return;
    const start = lastCursorRef.current.start;
    const end = lastCursorRef.current.end;
    const v = ta.value;
    const newText = v.substring(0, start) + before + v.substring(end) + after;
    setText(newText);
    const newPos = start + before.length;
    lastCursorRef.current = { start: newPos, end: newPos };
    requestAnimationFrame(() => {
      ta.focus();
      ta.setSelectionRange(newPos, newPos);
    });
  }
  function doInsertTag(tagName) {
    const ta = taRef.current;
    if (!ta) return;
    const cursorPos = lastCursorRef.current.start;
    const v = ta.value;
    const beforeCursor = v.substring(0, cursorPos);
    const afterCursor = v.substring(cursorPos);
    const lastHash = beforeCursor.lastIndexOf("#");
    let newBefore;
    if (lastHash >= 0) {
      newBefore = beforeCursor.substring(0, lastHash) + "#" + tagName + " ";
    } else {
      newBefore = beforeCursor + "#" + tagName + " ";
    }
    const newText = newBefore + afterCursor;
    setText(newText);
    const newPos = newBefore.length;
    lastCursorRef.current = { start: newPos, end: newPos };
    requestAnimationFrame(() => {
      ta.focus();
      ta.setSelectionRange(newPos, newPos);
    });
    setShowTagPicker(false);
    setTagPickerFilter("");
  }
  async function uploadAndInsertImage(file) {
    try {
      const arrayBuffer = await file.arrayBuffer();
      const assetPath = await orca.invokeBackend("upload-asset-binary", file.type, arrayBuffer);
      if (assetPath) {
        insertText(`![](${assetPath})`, "");
      }
    } catch (err) {
      console.warn("mcard upload image failed:", err);
    }
  }
  function pickImage() {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.style.display = "none";
    document.body.appendChild(fileInput);
    fileInput.onchange = async () => {
      var _a;
      const file = (_a = fileInput.files) == null ? void 0 : _a[0];
      if (fileInput.parentNode) document.body.removeChild(fileInput);
      if (!file || !file.type.startsWith("image/")) return;
      await uploadAndInsertImage(file);
    };
    fileInput.click();
  }
  async function insertNoteToJournal(content, createdAt) {
    const settings = mergedSettings();
    try {
      const journal = await orca.invokeBackend("get-journal-block", new Date(createdAt));
      if (!journal) return;
      const inboxName = settings.inboxName || DEFAULT_SETTINGS.inboxName;
      await orca.commands.invokeGroup(async () => {
        var _a;
        let inbox = null;
        for (const cid of journal.children || []) {
          const c = orca.state.blocks[cid];
          if (c && ((_a = c.text) == null ? void 0 : _a.trim()) === inboxName) {
            inbox = c;
            break;
          }
        }
        if (!inbox) {
          const bid = await orca.commands.invokeEditorCommand(
            "core.editor.insertBlock",
            null,
            journal,
            "lastChild",
            [{ t: "t", v: inboxName }]
          );
          inbox = orca.state.blocks[bid];
        }
        if (inbox) {
          const blockId = await orca.commands.invokeEditorCommand(
            "core.editor.insertBlock",
            null,
            inbox,
            "lastChild",
            [{ t: "t", v: content }],
            { type: "text" },
            new Date(createdAt),
            new Date(createdAt)
          );
          if (settings.noteTag && blockId) {
            await orca.commands.invokeEditorCommand(
              "core.editor.insertTag",
              null,
              blockId,
              settings.noteTag
            );
          }
        }
      });
    } catch (e) {
      console.warn("mcard capture sync skipped:", e);
    }
  }
  async function submit() {
    const raw = sanitizeText(text);
    if (!raw) return;
    const settings = mergedSettings();
    const createdAt = Date.now();
    const tags = extractTags$1(raw);
    const newNote = {
      id: `mcard-${createdAt}-${Math.random().toString(36).slice(2, 7)}`,
      blockId: 0,
      content: raw,
      tags,
      createdAt,
      updatedAt: createdAt
    };
    try {
      const existing = await orca.plugins.getData(pluginName, "mcard.notes");
      const notes = typeof existing === "string" && existing.trim() ? JSON.parse(existing) : [];
      notes.unshift(newNote);
      await orca.plugins.setData(pluginName, "mcard.notes", JSON.stringify(notes));
      window.dispatchEvent(new CustomEvent("mcard-notes-changed"));
      if (settings.syncToJournal) {
        await insertNoteToJournal(raw, createdAt);
      }
      orca.notify("success", t("Note saved"));
      setText("");
      onClose();
    } catch (err) {
      console.error("mcard capture fail:", err);
      orca.notify("error", t("Failed to save note"));
    }
  }
  function handleTextareaChange(e) {
    const newVal = e.target.value;
    setText(newVal);
    if (showTagPicker) {
      const ta = taRef.current;
      if (!ta) return;
      const cursorPos = ta.selectionStart;
      const beforeCursor = newVal.substring(0, cursorPos);
      const hashIdx = beforeCursor.lastIndexOf("#");
      if (hashIdx >= 0) {
        const filter = beforeCursor.substring(hashIdx + 1);
        if (!/\s/.test(filter)) {
          setTagPickerFilter(filter);
        } else {
          setShowTagPicker(false);
        }
      } else {
        setShowTagPicker(false);
      }
    }
  }
  const themeVars = {
    "--mcard-font-size": `${mergedSettings().fontSize}px`
  };
  const filteredTags = loadedTags.filter((t2) => !tagPickerFilter || t2.includes(tagPickerFilter));
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-root", "data-mcard-theme": mergedSettings().themeMode, style: themeVars, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-capture-modal", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-capture-modal-inner", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-capture-modal-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-capture-modal-title", children: t("Start capture") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mcard-capture-modal-close", onClick: onClose, children: "✕" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-input-box focused", style: { margin: 0, border: "none", boxShadow: "none" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-input-wrapper", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            ref: (el) => taRef.current = el,
            className: "mcard-input-field",
            value: text,
            onChange: handleTextareaChange,
            onSelect: saveCursor,
            onClick: saveCursor,
            onKeyUp: saveCursor,
            onPaste: async (e) => {
              var _a;
              const items = (_a = e.clipboardData) == null ? void 0 : _a.items;
              if (!items) return;
              for (const item of items) {
                if (item.type.startsWith("image/")) {
                  e.preventDefault();
                  const file = item.getAsFile();
                  if (file) await uploadAndInsertImage(file);
                  return;
                }
              }
            },
            placeholder: "现在的想法是...",
            rows: 3
          }
        ),
        showTagPicker && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-tag-picker", style: { top: 40 }, onClick: (e) => e.stopPropagation(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mcard-tag-picker-title", children: "选择标签" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-tag-picker-list", children: [
            filteredTags.length > 0 ? filteredTags.map((tag, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `mcard-tag-picker-item ${idx === tagPickerActiveIdx ? "active" : ""}`,
                onMouseEnter: () => setTagPickerActiveIdx(idx),
                onClick: () => doInsertTag(tag),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-tag-picker-item-hash", children: "#" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-tag-picker-item-name", children: tag })
                ]
              },
              tag
            )) : null,
            tagPickerFilter.trim() && !filteredTags.includes(tagPickerFilter.trim()) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `mcard-tag-picker-item ${tagPickerActiveIdx === filteredTags.length ? "active" : ""}`,
                onClick: () => doInsertTag(tagPickerFilter.trim()),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-tag-picker-item-hash", children: "#" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mcard-tag-picker-item-name", children: [
                    '创建新标签 "',
                    tagPickerFilter.trim(),
                    '"'
                  ] })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-input-toolbar", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mcard-toolbar-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-toolbar-icon", onMouseDown: (e) => e.preventDefault(), onClick: () => {
            var _a;
            setShowTagPicker(!showTagPicker);
            setTagPickerFilter("");
            setTagPickerActiveIdx(0);
            (_a = taRef.current) == null ? void 0 : _a.focus();
          }, title: "标签", children: "#" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-toolbar-icon", onMouseDown: (e) => e.preventDefault(), onClick: pickImage, title: "图片", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-toolbar-icon", onMouseDown: (e) => e.preventDefault(), onClick: () => insertText("- [ ] ", ""), title: "任务列表", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 5h2v2H3zm4 0h14v2H7zm-4 6h2v2H3zm4 0h14v2H7zm-4 6h2v2H3zm4 0h14v2H7z" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-toolbar-icon", onMouseDown: (e) => e.preventDefault(), onClick: () => insertText("- ", ""), title: "无序列表", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mcard-toolbar-icon", onMouseDown: (e) => e.preventDefault(), onClick: () => insertText("1. ", ""), title: "有序列表", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 6h2v2H2zm4 0h14v2H6zM2 11h2v2H2zm4 0h14v2H6zM2 16h2v2H2zm4 0h14v2H6z" }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "mcard-send-btn",
            onClick: () => void submit(),
            disabled: !text.trim(),
            title: "发送",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", width: "18", height: "18", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" }) })
          }
        )
      ] })
    ] })
  ] }) }) });
}
async function load(_name) {
  pluginName = _name;
  setupL10N(orca.state.locale, { "zh-CN": zhCN });
  injectStylesOnce();
  const Button = orca.components.Button;
  orca.components.HoverContextMenu;
  orca.components.MenuText;
  orca.panels.registerPanel(PANEL_TYPE, McardPanelRenderer);
  registeredPanelType = PANEL_TYPE;
  if (orca.state.commands["mcard.capture"] == null) {
    orca.commands.registerCommand(
      "mcard.capture",
      async () => {
        openCaptureModal();
      },
      t("Start capture")
    );
  }
  try {
    await orca.shortcuts.assign("ctrl+shift+u", "mcard.capture");
    await orca.shortcuts.assign("ctrl+shift+alt+o", "mcard.capture");
  } catch (e) {
    console.warn("mcard: failed to assign shortcut:", e);
  }
  if (orca.state.commands["mcard.open"] == null) {
    orca.commands.registerCommand(
      "mcard.open",
      async () => {
        openMcardPanel();
      },
      t("Open Mcard panel")
    );
  }
  if (orca.state.headbarButtons["mcard.button"] == null) {
    orca.headbar.registerHeadbarButton("mcard.button", () => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        variant: "plain",
        onClick: () => orca.commands.invokeCommand("mcard.open"),
        title: t("Open Mcard panel"),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "14px", fontWeight: 600 }, children: "✎" })
      }
    ));
  }
  console.log(`${pluginName} loaded.`);
}
async function unload() {
  orca.headbar.unregisterHeadbarButton("mcard.button");
  orca.commands.unregisterCommand("mcard.capture");
  orca.commands.unregisterCommand("mcard.open");
  if (registeredPanelType) {
    orca.panels.unregisterPanel(registeredPanelType);
    registeredPanelType = null;
  }
  closeCaptureModal();
  const styleEl = document.head.querySelector(`style[data-role="${STYLE_ROLE}"]`);
  if (styleEl) styleEl.remove();
  console.log(`${pluginName} unloaded.`);
}
function getPluginName() {
  return pluginName;
}
function openCaptureModal() {
  if (document.mcardCaptureOpened) return;
  document.mcardCaptureOpened = true;
  const mountId = "mcard-capture-mount";
  let mount = document.getElementById(mountId);
  if (!mount) {
    mount = document.createElement("div");
    mount.id = mountId;
    mount.dataset.role = mountId;
    document.body.appendChild(mount);
  }
  const createRoot = window.createRoot;
  if (typeof createRoot !== "function") {
    console.error("mcard: window.createRoot not found");
    return;
  }
  const root = createRoot(mount);
  root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(CaptureModal, { onClose: () => closeCaptureModal() }));
  window.__mcard_capture_root = { root, mount };
}
function closeCaptureModal() {
  document.mcardCaptureOpened = false;
  const entry = window.__mcard_capture_root;
  if (entry == null ? void 0 : entry.root) {
    try {
      entry.root.unmount();
    } catch {
    }
  }
  if ((entry == null ? void 0 : entry.mount) && entry.mount.parentNode) {
    entry.mount.parentNode.removeChild(entry.mount);
  } else {
    const mount = document.getElementById("mcard-capture-mount");
    if (mount && mount.parentNode) mount.parentNode.removeChild(mount);
  }
  window.__mcard_capture_root = null;
}
async function openMcardPanel() {
  const activePanelId = orca.state.activePanel;
  if (!activePanelId) {
    orca.notify("warn", "No active panel");
    return;
  }
  const panels = orca.state.panels;
  let targetId = null;
  for (const [pid, panel] of Object.entries(panels)) {
    if (panel.view === PANEL_TYPE) {
      targetId = pid;
      break;
    }
  }
  if (!targetId) {
    const rightPanelId = orca.nav.addTo(activePanelId, "right", {
      view: PANEL_TYPE,
      viewArgs: {},
      viewState: {}
    });
    targetId = rightPanelId;
  }
  if (targetId) {
    orca.nav.goTo(PANEL_TYPE, {}, targetId);
    setTimeout(() => orca.nav.switchFocusTo(targetId), 80);
    orca.notify("success", "Mcard panel opened", { title: "Mcard" });
  } else {
    orca.notify("error", "Cannot create Mcard panel");
  }
}
export {
  getPluginName,
  load,
  unload
};
