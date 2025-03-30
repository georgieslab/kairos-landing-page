/*! For license information please see main.20eaa770.js.LICENSE.txt */
(()=>{var e={43:(e,t,n)=>{"use strict";e.exports=n(202)},153:(e,t,n)=>{"use strict";var r=n(43),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,r)&&!s.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:a,type:e,key:c,ref:u,props:i,_owner:l.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function v(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var x=b.prototype=new v;x.constructor=b,m(x,y.prototype),x.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,k={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var a,i={},o=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)S.call(t,a)&&!j.hasOwnProperty(a)&&(i[a]=t[a]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===i[a]&&(i[a]=s[a]);return{$$typeof:n,type:e,key:o,ref:l,props:i,_owner:k.current}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var N=/\/+/g;function P(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,a,i,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return o=o(s=e),e=""===i?"."+P(s,0):i,w(o)?(a="",null!=e&&(a=e.replace(N,"$&/")+"/"),_(o,t,a,"",(function(e){return e}))):null!=o&&(C(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,a+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(N,"$&/")+"/")+e)),t.push(o)),1;if(s=0,i=""===i?".":i+":",w(e))for(var c=0;c<e.length;c++){var u=i+P(l=e[c],c);s+=_(l,t,a,u,o)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(l=e.next()).done;)s+=_(l=l.value,t,a,u=i+P(l,c++),o);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function T(e,t,n){if(null==e)return e;var r=[],a=0;return _(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function z(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},I={transition:null},R={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:I,ReactCurrentOwner:k};function D(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:T,forEach:function(e,t,n){T(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=a,t.Profiler=o,t.PureComponent=b,t.StrictMode=i,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,t.act=D,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=m({},e.props),i=e.key,o=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,l=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)S.call(t,c)&&!j.hasOwnProperty(c)&&(a[c]=void 0===t[c]&&void 0!==s?s[c]:t[c])}var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];a.children=s}return{$$typeof:n,type:e.type,key:i,ref:o,props:a,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:z}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=D,t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return O.current.useTransition()},t.version="18.3.1"},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<i(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,o=a>>>1;r<o;){var l=2*(r+1)-1,s=e[l],c=l+1,u=e[c];if(0>i(s,n))c<a&&0>i(u,s)?(e[r]=u,e[c]=n,r=c):(e[r]=s,e[l]=n,r=l);else{if(!(c<a&&0>i(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],u=[],d=1,p=null,f=3,h=!1,m=!1,g=!1,y="function"===typeof setTimeout?setTimeout:null,v="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=r(u);null!==t;){if(null===t.callback)a(u);else{if(!(t.startTime<=e))break;a(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function w(e){if(g=!1,x(e),!m)if(null!==r(c))m=!0,I(S);else{var t=r(u);null!==t&&R(w,t.startTime-e)}}function S(e,n){m=!1,g&&(g=!1,v(C),C=-1),h=!0;var i=f;try{for(x(n),p=r(c);null!==p&&(!(p.expirationTime>n)||e&&!_());){var o=p.callback;if("function"===typeof o){p.callback=null,f=p.priorityLevel;var l=o(p.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?p.callback=l:p===r(c)&&a(c),x(n)}else a(c);p=r(c)}if(null!==p)var s=!0;else{var d=r(u);null!==d&&R(w,d.startTime-n),s=!1}return s}finally{p=null,f=i,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,j=!1,E=null,C=-1,N=5,P=-1;function _(){return!(t.unstable_now()-P<N)}function T(){if(null!==E){var e=t.unstable_now();P=e;var n=!0;try{n=E(!0,e)}finally{n?k():(j=!1,E=null)}}else j=!1}if("function"===typeof b)k=function(){b(T)};else if("undefined"!==typeof MessageChannel){var z=new MessageChannel,O=z.port2;z.port1.onmessage=T,k=function(){O.postMessage(null)}}else k=function(){y(T,0)};function I(e){E=e,j||(j=!0,k())}function R(e,n){C=y((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,I(S))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,a,i){var o=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?o+i:o:i=o,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:i,expirationTime:l=i+l,sortIndex:-1},i>o?(e.sortIndex=i,n(u,e),null===r(c)&&e===r(u)&&(g?(v(C),C=-1):g=!0,R(w,i-o))):(e.sortIndex=l,n(c,e),m||h||(m=!0,I(S))),e},t.unstable_shouldYield=_,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}},324:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var c=i[s];if(!l(c))return!1;var u=e[c],d=t[c];if(!1===(a=n?n.call(r,u,d,c):void 0)||void 0===a&&u!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},579:(e,t,n)=>{"use strict";e.exports=n(153)},730:(e,t,n)=>{"use strict";var r=n(43),a=n(853);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,l={};function s(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(l[e]=t,e=0;e<t.length;e++)o.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},h={};function m(e,t,n,r,a,i,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var y=/[\-:]([a-z])/g;function v(e){return e[1].toUpperCase()}function b(e,t,n,r){var a=g.hasOwnProperty(t)?g[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!d.call(h,e)||!d.call(f,e)&&(p.test(e)?h[e]=!0:(f[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(y,v);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(y,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(y,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var x=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),S=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),N=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),O=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var I=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var R=Symbol.iterator;function D(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=R&&e[R]||e["@@iterator"])?e:null}var L,$=Object.assign;function A(e){if(void 0===L)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);L=t&&t[1]||""}return"\n"+L+e}var F=!1;function M(e,t){if(!e||F)return"";F=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&"string"===typeof c.stack){for(var a=c.stack.split("\n"),i=r.stack.split("\n"),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(1!==o||1!==l)do{if(o--,0>--l||a[o]!==i[l]){var s="\n"+a[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=o&&0<=l);break}}}finally{F=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?A(e):""}function B(e){switch(e.tag){case 5:return A(e.type);case 16:return A("Lazy");case 13:return A("Suspense");case 19:return A("SuspenseList");case 0:case 2:case 15:return e=M(e.type,!1);case 11:return e=M(e.type.render,!1);case 1:return e=M(e.type,!0);default:return""}}function U(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case k:return"Fragment";case S:return"Portal";case E:return"Profiler";case j:return"StrictMode";case _:return"Suspense";case T:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case N:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case P:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case z:return null!==(t=e.displayName||null)?t:U(e.type)||"Memo";case O:t=e._payload,e=e._init;try{return U(e(t))}catch(n){}}return null}function W(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return U(t);case 8:return t===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function V(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function H(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Y(e){e._valueTracker||(e._valueTracker=function(e){var t=H(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=H(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Q(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function G(e,t){var n=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function q(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=V(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function J(e,t){null!=(t=t.checked)&&b(e,"checked",t,!1)}function X(e,t){J(e,t);var n=V(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,V(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Q(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+V(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(i(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(i(92));if(te(n)){if(1<n.length)throw Error(i(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:V(n)}}function ie(e,t){var n=V(t.value),r=V(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function oe(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ue(e,t)}))}:ue);function pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||fe.hasOwnProperty(e)&&fe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(fe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fe[t]=fe[e]}))}));var ye=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ve(e,t){if(t){if(ye[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(i(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(i(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(i(62))}}function be(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Se=null,ke=null,je=null;function Ee(e){if(e=ba(e)){if("function"!==typeof Se)throw Error(i(280));var t=e.stateNode;t&&(t=wa(t),Se(e.stateNode,e.type,t))}}function Ce(e){ke?je?je.push(e):je=[e]:ke=e}function Ne(){if(ke){var e=ke,t=je;if(je=ke=null,Ee(e),t)for(e=0;e<t.length;e++)Ee(t[e])}}function Pe(e,t){return e(t)}function _e(){}var Te=!1;function ze(e,t,n){if(Te)return e(t,n);Te=!0;try{return Pe(e,t,n)}finally{Te=!1,(null!==ke||null!==je)&&(_e(),Ne())}}function Oe(e,t){var n=e.stateNode;if(null===n)return null;var r=wa(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(i(231,t,typeof n));return n}var Ie=!1;if(u)try{var Re={};Object.defineProperty(Re,"passive",{get:function(){Ie=!0}}),window.addEventListener("test",Re,Re),window.removeEventListener("test",Re,Re)}catch(ue){Ie=!1}function De(e,t,n,r,a,i,o,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Le=!1,$e=null,Ae=!1,Fe=null,Me={onError:function(e){Le=!0,$e=e}};function Be(e,t,n,r,a,i,o,l,s){Le=!1,$e=null,De.apply(Me,arguments)}function Ue(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function We(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Ve(e){if(Ue(e)!==e)throw Error(i(188))}function He(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ue(e)))throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var o=a.alternate;if(null===o){if(null!==(r=a.return)){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return Ve(a),e;if(o===r)return Ve(a),t;o=o.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=o;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=o;break}if(s===r){l=!0,r=a,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=a;break}if(s===r){l=!0,r=o,n=a;break}s=s.sibling}if(!l)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(3!==n.tag)throw Error(i(188));return n.stateNode.current===n?e:t}(e))?Ye(e):null}function Ye(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ye(e);if(null!==t)return t;e=e.sibling}return null}var Ke=a.unstable_scheduleCallback,Qe=a.unstable_cancelCallback,Ge=a.unstable_shouldYield,qe=a.unstable_requestPaint,Je=a.unstable_now,Xe=a.unstable_getCurrentPriorityLevel,Ze=a.unstable_ImmediatePriority,et=a.unstable_UserBlockingPriority,tt=a.unstable_NormalPriority,nt=a.unstable_LowPriority,rt=a.unstable_IdlePriority,at=null,it=null;var ot=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ct=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=268435455&n;if(0!==o){var l=o&~a;0!==l?r=dt(l):0!==(i&=o)&&(r=dt(i))}else 0!==(o=n&~a)?r=dt(o):0!==i&&(r=dt(i));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(i=t&-t)||16===a&&0!==(4194240&i)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-ot(t)),r|=e[n],t&=~a;return r}function ft(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-ot(t)]=n}function vt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var bt=0;function xt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,St,kt,jt,Et,Ct=!1,Nt=[],Pt=null,_t=null,Tt=null,zt=new Map,Ot=new Map,It=[],Rt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dt(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":zt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ot.delete(t.pointerId)}}function Lt(e,t,n,r,a,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},null!==t&&(null!==(t=ba(t))&&St(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function $t(e){var t=va(e.target);if(null!==t){var n=Ue(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=We(n)))return e.blockedOn=t,void Et(e.priority,(function(){kt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function At(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ba(n))&&St(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);xe=r,n.target.dispatchEvent(r),xe=null,t.shift()}return!0}function Ft(e,t,n){At(e)&&n.delete(t)}function Mt(){Ct=!1,null!==Pt&&At(Pt)&&(Pt=null),null!==_t&&At(_t)&&(_t=null),null!==Tt&&At(Tt)&&(Tt=null),zt.forEach(Ft),Ot.forEach(Ft)}function Bt(e,t){e.blockedOn===t&&(e.blockedOn=null,Ct||(Ct=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Mt)))}function Ut(e){function t(t){return Bt(t,e)}if(0<Nt.length){Bt(Nt[0],e);for(var n=1;n<Nt.length;n++){var r=Nt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Pt&&Bt(Pt,e),null!==_t&&Bt(_t,e),null!==Tt&&Bt(Tt,e),zt.forEach(t),Ot.forEach(t),n=0;n<It.length;n++)(r=It[n]).blockedOn===e&&(r.blockedOn=null);for(;0<It.length&&null===(n=It[0]).blockedOn;)$t(n),null===n.blockedOn&&It.shift()}var Wt=x.ReactCurrentBatchConfig,Vt=!0;function Ht(e,t,n,r){var a=bt,i=Wt.transition;Wt.transition=null;try{bt=1,Kt(e,t,n,r)}finally{bt=a,Wt.transition=i}}function Yt(e,t,n,r){var a=bt,i=Wt.transition;Wt.transition=null;try{bt=4,Kt(e,t,n,r)}finally{bt=a,Wt.transition=i}}function Kt(e,t,n,r){if(Vt){var a=Gt(e,t,n,r);if(null===a)Vr(e,t,r,Qt,n),Dt(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return Pt=Lt(Pt,e,t,n,r,a),!0;case"dragenter":return _t=Lt(_t,e,t,n,r,a),!0;case"mouseover":return Tt=Lt(Tt,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return zt.set(i,Lt(zt.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Ot.set(i,Lt(Ot.get(i)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Dt(e,r),4&t&&-1<Rt.indexOf(e)){for(;null!==a;){var i=ba(a);if(null!==i&&wt(i),null===(i=Gt(e,t,n,r))&&Vr(e,t,r,Qt,n),i===a)break;a=i}null!==a&&r.stopPropagation()}else Vr(e,t,r,null,n)}}var Qt=null;function Gt(e,t,n,r){if(Qt=null,null!==(e=va(e=we(r))))if(null===(t=Ue(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=We(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qt=e,null}function qt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xe()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Jt=null,Xt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Xt,r=n.length,a="value"in Jt?Jt.value:Jt.textContent,i=a.length;for(e=0;e<r&&n[e]===a[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===a[i-t];t++);return Zt=a.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,a,i){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(a):a[o]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,ln,sn,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},un=an(cn),dn=$({},cn,{view:0,detail:0}),pn=an(dn),fn=$({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:En,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(on=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=on=0,sn=e),on)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),hn=an(fn),mn=an($({},fn,{dataTransfer:0})),gn=an($({},dn,{relatedTarget:0})),yn=an($({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),vn=$({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bn=an(vn),xn=an($({},cn,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=kn[e])&&!!t[e]}function En(){return jn}var Cn=$({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Sn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:En,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Nn=an(Cn),Pn=an($({},fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),_n=an($({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:En})),Tn=an($({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),zn=$({},fn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),On=an(zn),In=[9,13,27,32],Rn=u&&"CompositionEvent"in window,Dn=null;u&&"documentMode"in document&&(Dn=document.documentMode);var Ln=u&&"TextEvent"in window&&!Dn,$n=u&&(!Rn||Dn&&8<Dn&&11>=Dn),An=String.fromCharCode(32),Fn=!1;function Mn(e,t){switch(e){case"keyup":return-1!==In.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Un=!1;var Wn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Wn[e.type]:"textarea"===t}function Hn(e,t,n,r){Ce(r),0<(t=Yr(t,"onChange")).length&&(n=new un("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yn=null,Kn=null;function Qn(e){Ar(e,0)}function Gn(e){if(K(xa(e)))return e}function qn(e,t){if("change"===e)return t}var Jn=!1;if(u){var Xn;if(u){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Xn=Zn}else Xn=!1;Jn=Xn&&(!document.documentMode||9<document.documentMode)}function tr(){Yn&&(Yn.detachEvent("onpropertychange",nr),Kn=Yn=null)}function nr(e){if("value"===e.propertyName&&Gn(Kn)){var t=[];Hn(t,Kn,e,we(e)),ze(Qn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Kn=n,(Yn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ar(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Gn(Kn)}function ir(e,t){if("click"===e)return Gn(t)}function or(e,t){if("input"===e||"change"===e)return Gn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!d.call(t,a)||!lr(e[a],t[a]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ur(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pr(){for(var e=window,t=Q();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Q((e=t.contentWindow).document)}return t}function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=pr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&fr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=void 0===r.end?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=ur(n,i);var o=ur(n,r);a&&o&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=u&&"documentMode"in document&&11>=document.documentMode,gr=null,yr=null,vr=null,br=!1;function xr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;br||null==gr||gr!==Q(r)||("selectionStart"in(r=gr)&&fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},vr&&sr(vr,r)||(vr=r,0<(r=Yr(yr,"onSelect")).length&&(t=new un("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},kr={},jr={};function Er(e){if(kr[e])return kr[e];if(!Sr[e])return e;var t,n=Sr[e];for(t in n)if(n.hasOwnProperty(t)&&t in jr)return kr[e]=n[t];return e}u&&(jr=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);var Cr=Er("animationend"),Nr=Er("animationiteration"),Pr=Er("animationstart"),_r=Er("transitionend"),Tr=new Map,zr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(e,t){Tr.set(e,t),s(t,[e])}for(var Ir=0;Ir<zr.length;Ir++){var Rr=zr[Ir];Or(Rr.toLowerCase(),"on"+(Rr[0].toUpperCase()+Rr.slice(1)))}Or(Cr,"onAnimationEnd"),Or(Nr,"onAnimationIteration"),Or(Pr,"onAnimationStart"),Or("dblclick","onDoubleClick"),Or("focusin","onFocus"),Or("focusout","onBlur"),Or(_r,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));function $r(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,o,l,s,c){if(Be.apply(this,arguments),Le){if(!Le)throw Error(i(198));var u=$e;Le=!1,$e=null,Ae||(Ae=!0,Fe=u)}}(r,t,void 0,e),e.currentTarget=null}function Ar(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==i&&a.isPropagationStopped())break e;$r(a,l,c),i=s}else for(o=0;o<r.length;o++){if(s=(l=r[o]).instance,c=l.currentTarget,l=l.listener,s!==i&&a.isPropagationStopped())break e;$r(a,l,c),i=s}}}if(Ae)throw e=Fe,Ae=!1,Fe=null,e}function Fr(e,t){var n=t[ma];void 0===n&&(n=t[ma]=new Set);var r=e+"__bubble";n.has(r)||(Wr(t,e,2,!1),n.add(r))}function Mr(e,t,n){var r=0;t&&(r|=4),Wr(n,e,r,t)}var Br="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[Br]){e[Br]=!0,o.forEach((function(t){"selectionchange"!==t&&(Lr.has(t)||Mr(t,!1,e),Mr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Br]||(t[Br]=!0,Mr("selectionchange",!1,t))}}function Wr(e,t,n,r){switch(qt(t)){case 1:var a=Ht;break;case 4:a=Yt;break;default:a=Kt}n=a.bind(null,t,n,e),a=void 0,!Ie||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Vr(e,t,n,r,a){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var l=r.stateNode.containerInfo;if(l===a||8===l.nodeType&&l.parentNode===a)break;if(4===o)for(o=r.return;null!==o;){var s=o.tag;if((3===s||4===s)&&((s=o.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;o=o.return}for(;null!==l;){if(null===(o=va(l)))return;if(5===(s=o.tag)||6===s){r=i=o;continue e}l=l.parentNode}}r=r.return}ze((function(){var r=i,a=we(n),o=[];e:{var l=Tr.get(e);if(void 0!==l){var s=un,c=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=Nn;break;case"focusin":c="focus",s=gn;break;case"focusout":c="blur",s=gn;break;case"beforeblur":case"afterblur":s=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=_n;break;case Cr:case Nr:case Pr:s=yn;break;case _r:s=Tn;break;case"scroll":s=pn;break;case"wheel":s=On;break;case"copy":case"cut":case"paste":s=bn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=Pn}var u=0!==(4&t),d=!u&&"scroll"===e,p=u?null!==l?l+"Capture":null:l;u=[];for(var f,h=r;null!==h;){var m=(f=h).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==p&&(null!=(m=Oe(h,p))&&u.push(Hr(h,m,f)))),d)break;h=h.return}0<u.length&&(l=new s(l,c,null,n,a),o.push({event:l,listeners:u}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===xe||!(c=n.relatedTarget||n.fromElement)||!va(c)&&!c[ha])&&(s||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(c=(c=n.relatedTarget||n.toElement)?va(c):null)&&(c!==(d=Ue(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(s=null,c=r),s!==c)){if(u=hn,m="onMouseLeave",p="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(u=Pn,m="onPointerLeave",p="onPointerEnter",h="pointer"),d=null==s?l:xa(s),f=null==c?l:xa(c),(l=new u(m,h+"leave",s,n,a)).target=d,l.relatedTarget=f,m=null,va(a)===r&&((u=new u(p,h+"enter",c,n,a)).target=f,u.relatedTarget=d,m=u),d=m,s&&c)e:{for(p=c,h=0,f=u=s;f;f=Kr(f))h++;for(f=0,m=p;m;m=Kr(m))f++;for(;0<h-f;)u=Kr(u),h--;for(;0<f-h;)p=Kr(p),f--;for(;h--;){if(u===p||null!==p&&u===p.alternate)break e;u=Kr(u),p=Kr(p)}u=null}else u=null;null!==s&&Qr(o,l,s,u,!1),null!==c&&null!==d&&Qr(o,d,c,u,!0)}if("select"===(s=(l=r?xa(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=qn;else if(Vn(l))if(Jn)g=or;else{g=ar;var y=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=ir);switch(g&&(g=g(e,r))?Hn(o,g,n,a):(y&&y(e,l,r),"focusout"===e&&(y=l._wrapperState)&&y.controlled&&"number"===l.type&&ee(l,"number",l.value)),y=r?xa(r):window,e){case"focusin":(Vn(y)||"true"===y.contentEditable)&&(gr=y,yr=r,vr=null);break;case"focusout":vr=yr=gr=null;break;case"mousedown":br=!0;break;case"contextmenu":case"mouseup":case"dragend":br=!1,xr(o,n,a);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":xr(o,n,a)}var v;if(Rn)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Un?Mn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&($n&&"ko"!==n.locale&&(Un||"onCompositionStart"!==b?"onCompositionEnd"===b&&Un&&(v=en()):(Xt="value"in(Jt=a)?Jt.value:Jt.textContent,Un=!0)),0<(y=Yr(r,b)).length&&(b=new xn(b,e,null,n,a),o.push({event:b,listeners:y}),v?b.data=v:null!==(v=Bn(n))&&(b.data=v))),(v=Ln?function(e,t){switch(e){case"compositionend":return Bn(t);case"keypress":return 32!==t.which?null:(Fn=!0,An);case"textInput":return(e=t.data)===An&&Fn?null:e;default:return null}}(e,n):function(e,t){if(Un)return"compositionend"===e||!Rn&&Mn(e,t)?(e=en(),Zt=Xt=Jt=null,Un=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $n&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Yr(r,"onBeforeInput")).length&&(a=new xn("onBeforeInput","beforeinput",null,n,a),o.push({event:a,listeners:r}),a.data=v))}Ar(o,t)}))}function Hr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yr(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,i=a.stateNode;5===a.tag&&null!==i&&(a=i,null!=(i=Oe(e,n))&&r.unshift(Hr(e,i,a)),null!=(i=Oe(e,t))&&r.push(Hr(e,i,a))),e=e.return}return r}function Kr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Qr(e,t,n,r,a){for(var i=t._reactName,o=[];null!==n&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==c&&(l=c,a?null!=(s=Oe(n,i))&&o.unshift(Hr(n,s,l)):a||null!=(s=Oe(n,i))&&o.push(Hr(n,s,l))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Gr=/\r\n?/g,qr=/\u0000|\uFFFD/g;function Jr(e){return("string"===typeof e?e:""+e).replace(Gr,"\n").replace(qr,"")}function Xr(e,t,n){if(t=Jr(t),Jr(e)!==t&&n)throw Error(i(425))}function Zr(){}var ea=null,ta=null;function na(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ra="function"===typeof setTimeout?setTimeout:void 0,aa="function"===typeof clearTimeout?clearTimeout:void 0,ia="function"===typeof Promise?Promise:void 0,oa="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ia?function(e){return ia.resolve(null).then(e).catch(la)}:ra;function la(e){setTimeout((function(){throw e}))}function sa(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void Ut(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);Ut(t)}function ca(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ua(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var da=Math.random().toString(36).slice(2),pa="__reactFiber$"+da,fa="__reactProps$"+da,ha="__reactContainer$"+da,ma="__reactEvents$"+da,ga="__reactListeners$"+da,ya="__reactHandles$"+da;function va(e){var t=e[pa];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ha]||n[pa]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ua(e);null!==e;){if(n=e[pa])return n;e=ua(e)}return t}n=(e=n).parentNode}return null}function ba(e){return!(e=e[pa]||e[ha])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function xa(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(i(33))}function wa(e){return e[fa]||null}var Sa=[],ka=-1;function ja(e){return{current:e}}function Ea(e){0>ka||(e.current=Sa[ka],Sa[ka]=null,ka--)}function Ca(e,t){ka++,Sa[ka]=e.current,e.current=t}var Na={},Pa=ja(Na),_a=ja(!1),Ta=Na;function za(e,t){var n=e.type.contextTypes;if(!n)return Na;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,i={};for(a in n)i[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Oa(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Ia(){Ea(_a),Ea(Pa)}function Ra(e,t,n){if(Pa.current!==Na)throw Error(i(168));Ca(Pa,t),Ca(_a,n)}function Da(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(i(108,W(e)||"Unknown",a));return $({},n,r)}function La(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Na,Ta=Pa.current,Ca(Pa,e),Ca(_a,_a.current),!0}function $a(e,t,n){var r=e.stateNode;if(!r)throw Error(i(169));n?(e=Da(e,t,Ta),r.__reactInternalMemoizedMergedChildContext=e,Ea(_a),Ea(Pa),Ca(Pa,e)):Ea(_a),Ca(_a,n)}var Aa=null,Fa=!1,Ma=!1;function Ba(e){null===Aa?Aa=[e]:Aa.push(e)}function Ua(){if(!Ma&&null!==Aa){Ma=!0;var e=0,t=bt;try{var n=Aa;for(bt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Aa=null,Fa=!1}catch(a){throw null!==Aa&&(Aa=Aa.slice(e+1)),Ke(Ze,Ua),a}finally{bt=t,Ma=!1}}return null}var Wa=[],Va=0,Ha=null,Ya=0,Ka=[],Qa=0,Ga=null,qa=1,Ja="";function Xa(e,t){Wa[Va++]=Ya,Wa[Va++]=Ha,Ha=e,Ya=t}function Za(e,t,n){Ka[Qa++]=qa,Ka[Qa++]=Ja,Ka[Qa++]=Ga,Ga=e;var r=qa;e=Ja;var a=32-ot(r)-1;r&=~(1<<a),n+=1;var i=32-ot(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,qa=1<<32-ot(t)+a|n<<a|r,Ja=i+e}else qa=1<<i|n<<a|r,Ja=e}function ei(e){null!==e.return&&(Xa(e,1),Za(e,1,0))}function ti(e){for(;e===Ha;)Ha=Wa[--Va],Wa[Va]=null,Ya=Wa[--Va],Wa[Va]=null;for(;e===Ga;)Ga=Ka[--Qa],Ka[Qa]=null,Ja=Ka[--Qa],Ka[Qa]=null,qa=Ka[--Qa],Ka[Qa]=null}var ni=null,ri=null,ai=!1,ii=null;function oi(e,t){var n=zc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function li(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ni=e,ri=ca(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ni=e,ri=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Ga?{id:qa,overflow:Ja}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=zc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ni=e,ri=null,!0);default:return!1}}function si(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ci(e){if(ai){var t=ri;if(t){var n=t;if(!li(e,t)){if(si(e))throw Error(i(418));t=ca(n.nextSibling);var r=ni;t&&li(e,t)?oi(r,n):(e.flags=-4097&e.flags|2,ai=!1,ni=e)}}else{if(si(e))throw Error(i(418));e.flags=-4097&e.flags|2,ai=!1,ni=e}}}function ui(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ni=e}function di(e){if(e!==ni)return!1;if(!ai)return ui(e),ai=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!na(e.type,e.memoizedProps)),t&&(t=ri)){if(si(e))throw pi(),Error(i(418));for(;t;)oi(e,t),t=ca(t.nextSibling)}if(ui(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ri=ca(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ri=null}}else ri=ni?ca(e.stateNode.nextSibling):null;return!0}function pi(){for(var e=ri;e;)e=ca(e.nextSibling)}function fi(){ri=ni=null,ai=!1}function hi(e){null===ii?ii=[e]:ii.push(e)}var mi=x.ReactCurrentBatchConfig;function gi(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(i(309));var r=n.stateNode}if(!r)throw Error(i(147,e));var a=r,o=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;null===e?delete t[o]:t[o]=e},t._stringRef=o,t)}if("string"!==typeof e)throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function yi(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vi(e){return(0,e._init)(e._payload)}function bi(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=Ic(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=$c(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function c(e,t,n,r){var i=n.type;return i===k?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===O&&vi(i)===t.type)?((r=a(t,n.props)).ref=gi(e,t,n),r.return=e,r):((r=Rc(n.type,n.key,n.props,null,e.mode,r)).ref=gi(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Ac(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,i){return null===t||7!==t.tag?((t=Dc(n,e.mode,r,i)).return=e,t):((t=a(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=$c(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Rc(t.type,t.key,t.props,null,e.mode,n)).ref=gi(e,null,t),n.return=e,n;case S:return(t=Ac(t,e.mode,n)).return=e,t;case O:return p(e,(0,t._init)(t._payload),n)}if(te(t)||D(t))return(t=Dc(t,e.mode,n,null)).return=e,t;yi(e,t)}return null}function f(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===a?c(e,t,n,r):null;case S:return n.key===a?u(e,t,n,r):null;case O:return f(e,t,(a=n._init)(n._payload),r)}if(te(n)||D(n))return null!==a?null:d(e,t,n,r,null);yi(e,n)}return null}function h(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case S:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case O:return h(e,t,n,(0,r._init)(r._payload),a)}if(te(r)||D(r))return d(t,e=e.get(n)||null,r,a,null);yi(t,r)}return null}function m(a,i,l,s){for(var c=null,u=null,d=i,m=i=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var y=f(a,d,l[m],s);if(null===y){null===d&&(d=g);break}e&&d&&null===y.alternate&&t(a,d),i=o(y,i,m),null===u?c=y:u.sibling=y,u=y,d=g}if(m===l.length)return n(a,d),ai&&Xa(a,m),c;if(null===d){for(;m<l.length;m++)null!==(d=p(a,l[m],s))&&(i=o(d,i,m),null===u?c=d:u.sibling=d,u=d);return ai&&Xa(a,m),c}for(d=r(a,d);m<l.length;m++)null!==(g=h(d,a,m,l[m],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),i=o(g,i,m),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach((function(e){return t(a,e)})),ai&&Xa(a,m),c}function g(a,l,s,c){var u=D(s);if("function"!==typeof u)throw Error(i(150));if(null==(s=u.call(s)))throw Error(i(151));for(var d=u=null,m=l,g=l=0,y=null,v=s.next();null!==m&&!v.done;g++,v=s.next()){m.index>g?(y=m,m=null):y=m.sibling;var b=f(a,m,v.value,c);if(null===b){null===m&&(m=y);break}e&&m&&null===b.alternate&&t(a,m),l=o(b,l,g),null===d?u=b:d.sibling=b,d=b,m=y}if(v.done)return n(a,m),ai&&Xa(a,g),u;if(null===m){for(;!v.done;g++,v=s.next())null!==(v=p(a,v.value,c))&&(l=o(v,l,g),null===d?u=v:d.sibling=v,d=v);return ai&&Xa(a,g),u}for(m=r(a,m);!v.done;g++,v=s.next())null!==(v=h(m,a,g,v.value,c))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),l=o(v,l,g),null===d?u=v:d.sibling=v,d=v);return e&&m.forEach((function(e){return t(a,e)})),ai&&Xa(a,g),u}return function e(r,i,o,s){if("object"===typeof o&&null!==o&&o.type===k&&null===o.key&&(o=o.props.children),"object"===typeof o&&null!==o){switch(o.$$typeof){case w:e:{for(var c=o.key,u=i;null!==u;){if(u.key===c){if((c=o.type)===k){if(7===u.tag){n(r,u.sibling),(i=a(u,o.props.children)).return=r,r=i;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===O&&vi(c)===u.type){n(r,u.sibling),(i=a(u,o.props)).ref=gi(r,u,o),i.return=r,r=i;break e}n(r,u);break}t(r,u),u=u.sibling}o.type===k?((i=Dc(o.props.children,r.mode,s,o.key)).return=r,r=i):((s=Rc(o.type,o.key,o.props,null,r.mode,s)).ref=gi(r,i,o),s.return=r,r=s)}return l(r);case S:e:{for(u=o.key;null!==i;){if(i.key===u){if(4===i.tag&&i.stateNode.containerInfo===o.containerInfo&&i.stateNode.implementation===o.implementation){n(r,i.sibling),(i=a(i,o.children||[])).return=r,r=i;break e}n(r,i);break}t(r,i),i=i.sibling}(i=Ac(o,r.mode,s)).return=r,r=i}return l(r);case O:return e(r,i,(u=o._init)(o._payload),s)}if(te(o))return m(r,i,o,s);if(D(o))return g(r,i,o,s);yi(r,o)}return"string"===typeof o&&""!==o||"number"===typeof o?(o=""+o,null!==i&&6===i.tag?(n(r,i.sibling),(i=a(i,o)).return=r,r=i):(n(r,i),(i=$c(o,r.mode,s)).return=r,r=i),l(r)):n(r,i)}}var xi=bi(!0),wi=bi(!1),Si=ja(null),ki=null,ji=null,Ei=null;function Ci(){Ei=ji=ki=null}function Ni(e){var t=Si.current;Ea(Si),e._currentValue=t}function Pi(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _i(e,t){ki=e,Ei=ji=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(bl=!0),e.firstContext=null)}function Ti(e){var t=e._currentValue;if(Ei!==e)if(e={context:e,memoizedValue:t,next:null},null===ji){if(null===ki)throw Error(i(308));ji=e,ki.dependencies={lanes:0,firstContext:e}}else ji=ji.next=e;return t}var zi=null;function Oi(e){null===zi?zi=[e]:zi.push(e)}function Ii(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,Oi(t)):(n.next=a.next,a.next=n),t.interleaved=n,Ri(e,r)}function Ri(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Di=!1;function Li(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $i(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ai(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fi(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Ps)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Ri(e,n)}return null===(a=r.interleaved)?(t.next=t,Oi(r)):(t.next=a.next,a.next=t),r.interleaved=t,Ri(e,n)}function Mi(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}function Bi(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===i?a=i=o:i=i.next=o,n=n.next}while(null!==n);null===i?a=i=t:i=i.next=t}else a=i=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ui(e,t,n,r){var a=e.updateQueue;Di=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,c=s.next;s.next=null,null===o?i=c:o.next=c,o=s;var u=e.alternate;null!==u&&((l=(u=u.updateQueue).lastBaseUpdate)!==o&&(null===l?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(null!==i){var d=a.baseState;for(o=0,u=c=s=null,l=i;;){var p=l.lane,f=l.eventTime;if((r&p)===p){null!==u&&(u=u.next={eventTime:f,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,m=l;switch(p=t,f=n,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(f,d,p);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(p="function"===typeof(h=m.payload)?h.call(f,d,p):h)||void 0===p)break e;d=$({},d,p);break e;case 2:Di=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(p=a.effects)?a.effects=[l]:p.push(l))}else f={eventTime:f,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===u?(c=u=f,s=d):u=u.next=f,o|=p;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(p=l).next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}if(null===u&&(s=d),a.baseState=s,a.firstBaseUpdate=c,a.lastBaseUpdate=u,null!==(t=a.shared.interleaved)){a=t;do{o|=a.lane,a=a.next}while(a!==t)}else null===i&&(a.shared.lanes=0);Ls|=o,e.lanes=o,e.memoizedState=d}}function Wi(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!==typeof a)throw Error(i(191,a));a.call(r)}}}var Vi={},Hi=ja(Vi),Yi=ja(Vi),Ki=ja(Vi);function Qi(e){if(e===Vi)throw Error(i(174));return e}function Gi(e,t){switch(Ca(Ki,t),Ca(Yi,e),Ca(Hi,Vi),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ea(Hi),Ca(Hi,t)}function qi(){Ea(Hi),Ea(Yi),Ea(Ki)}function Ji(e){Qi(Ki.current);var t=Qi(Hi.current),n=se(t,e.type);t!==n&&(Ca(Yi,e),Ca(Hi,n))}function Xi(e){Yi.current===e&&(Ea(Hi),Ea(Yi))}var Zi=ja(0);function eo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=[];function no(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var ro=x.ReactCurrentDispatcher,ao=x.ReactCurrentBatchConfig,io=0,oo=null,lo=null,so=null,co=!1,uo=!1,po=0,fo=0;function ho(){throw Error(i(321))}function mo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function go(e,t,n,r,a,o){if(io=o,oo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=null===e||null===e.memoizedState?Zo:el,e=n(r,a),uo){o=0;do{if(uo=!1,po=0,25<=o)throw Error(i(301));o+=1,so=lo=null,t.updateQueue=null,ro.current=tl,e=n(r,a)}while(uo)}if(ro.current=Xo,t=null!==lo&&null!==lo.next,io=0,so=lo=oo=null,co=!1,t)throw Error(i(300));return e}function yo(){var e=0!==po;return po=0,e}function vo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===so?oo.memoizedState=so=e:so=so.next=e,so}function bo(){if(null===lo){var e=oo.alternate;e=null!==e?e.memoizedState:null}else e=lo.next;var t=null===so?oo.memoizedState:so.next;if(null!==t)so=t,lo=e;else{if(null===e)throw Error(i(310));e={memoizedState:(lo=e).memoizedState,baseState:lo.baseState,baseQueue:lo.baseQueue,queue:lo.queue,next:null},null===so?oo.memoizedState=so=e:so=so.next=e}return so}function xo(e,t){return"function"===typeof t?t(e):t}function wo(e){var t=bo(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=lo,a=r.baseQueue,o=n.pending;if(null!==o){if(null!==a){var l=a.next;a.next=o.next,o.next=l}r.baseQueue=a=o,n.pending=null}if(null!==a){o=a.next,r=r.baseState;var s=l=null,c=null,u=o;do{var d=u.lane;if((io&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(s=c=p,l=r):c=c.next=p,oo.lanes|=d,Ls|=d}u=u.next}while(null!==u&&u!==o);null===c?l=r:c.next=s,lr(r,t.memoizedState)||(bl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do{o=a.lane,oo.lanes|=o,Ls|=o,a=a.next}while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function So(e){var t=bo(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{o=e(o,l.action),l=l.next}while(l!==a);lr(o,t.memoizedState)||(bl=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ko(){}function jo(e,t){var n=oo,r=bo(),a=t(),o=!lr(r.memoizedState,a);if(o&&(r.memoizedState=a,bl=!0),r=r.queue,Lo(No.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||null!==so&&1&so.memoizedState.tag){if(n.flags|=2048,zo(9,Co.bind(null,n,r,a,t),void 0,null),null===_s)throw Error(i(349));0!==(30&io)||Eo(n,t,a)}return a}function Eo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Co(e,t,n,r){t.value=n,t.getSnapshot=r,Po(t)&&_o(e)}function No(e,t,n){return n((function(){Po(t)&&_o(e)}))}function Po(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function _o(e){var t=Ri(e,1);null!==t&&nc(t,e,1,-1)}function To(e){var t=vo();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:e},t.queue=e,e=e.dispatch=Qo.bind(null,oo,e),[t.memoizedState,e]}function zo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Oo(){return bo().memoizedState}function Io(e,t,n,r){var a=vo();oo.flags|=e,a.memoizedState=zo(1|t,n,void 0,void 0===r?null:r)}function Ro(e,t,n,r){var a=bo();r=void 0===r?null:r;var i=void 0;if(null!==lo){var o=lo.memoizedState;if(i=o.destroy,null!==r&&mo(r,o.deps))return void(a.memoizedState=zo(t,n,i,r))}oo.flags|=e,a.memoizedState=zo(1|t,n,i,r)}function Do(e,t){return Io(8390656,8,e,t)}function Lo(e,t){return Ro(2048,8,e,t)}function $o(e,t){return Ro(4,2,e,t)}function Ao(e,t){return Ro(4,4,e,t)}function Fo(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Mo(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ro(4,4,Fo.bind(null,t,e),n)}function Bo(){}function Uo(e,t){var n=bo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wo(e,t){var n=bo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Vo(e,t,n){return 0===(21&io)?(e.baseState&&(e.baseState=!1,bl=!0),e.memoizedState=n):(lr(n,t)||(n=mt(),oo.lanes|=n,Ls|=n,e.baseState=!0),t)}function Ho(e,t){var n=bt;bt=0!==n&&4>n?n:4,e(!0);var r=ao.transition;ao.transition={};try{e(!1),t()}finally{bt=n,ao.transition=r}}function Yo(){return bo().memoizedState}function Ko(e,t,n){var r=tc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Go(e))qo(t,n);else if(null!==(n=Ii(e,t,n,r))){nc(n,e,r,ec()),Jo(n,t,r)}}function Qo(e,t,n){var r=tc(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Go(e))qo(t,a);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var o=t.lastRenderedState,l=i(o,n);if(a.hasEagerState=!0,a.eagerState=l,lr(l,o)){var s=t.interleaved;return null===s?(a.next=a,Oi(t)):(a.next=s.next,s.next=a),void(t.interleaved=a)}}catch(c){}null!==(n=Ii(e,t,a,r))&&(nc(n,e,r,a=ec()),Jo(n,t,r))}}function Go(e){var t=e.alternate;return e===oo||null!==t&&t===oo}function qo(e,t){uo=co=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Jo(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}var Xo={readContext:Ti,useCallback:ho,useContext:ho,useEffect:ho,useImperativeHandle:ho,useInsertionEffect:ho,useLayoutEffect:ho,useMemo:ho,useReducer:ho,useRef:ho,useState:ho,useDebugValue:ho,useDeferredValue:ho,useTransition:ho,useMutableSource:ho,useSyncExternalStore:ho,useId:ho,unstable_isNewReconciler:!1},Zo={readContext:Ti,useCallback:function(e,t){return vo().memoizedState=[e,void 0===t?null:t],e},useContext:Ti,useEffect:Do,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Io(4194308,4,Fo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Io(4194308,4,e,t)},useInsertionEffect:function(e,t){return Io(4,2,e,t)},useMemo:function(e,t){var n=vo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ko.bind(null,oo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},vo().memoizedState=e},useState:To,useDebugValue:Bo,useDeferredValue:function(e){return vo().memoizedState=e},useTransition:function(){var e=To(!1),t=e[0];return e=Ho.bind(null,e[1]),vo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oo,a=vo();if(ai){if(void 0===n)throw Error(i(407));n=n()}else{if(n=t(),null===_s)throw Error(i(349));0!==(30&io)||Eo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Do(No.bind(null,r,o,e),[e]),r.flags|=2048,zo(9,Co.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=vo(),t=_s.identifierPrefix;if(ai){var n=Ja;t=":"+t+"R"+(n=(qa&~(1<<32-ot(qa)-1)).toString(32)+n),0<(n=po++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=fo++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:Ti,useCallback:Uo,useContext:Ti,useEffect:Lo,useImperativeHandle:Mo,useInsertionEffect:$o,useLayoutEffect:Ao,useMemo:Wo,useReducer:wo,useRef:Oo,useState:function(){return wo(xo)},useDebugValue:Bo,useDeferredValue:function(e){return Vo(bo(),lo.memoizedState,e)},useTransition:function(){return[wo(xo)[0],bo().memoizedState]},useMutableSource:ko,useSyncExternalStore:jo,useId:Yo,unstable_isNewReconciler:!1},tl={readContext:Ti,useCallback:Uo,useContext:Ti,useEffect:Lo,useImperativeHandle:Mo,useInsertionEffect:$o,useLayoutEffect:Ao,useMemo:Wo,useReducer:So,useRef:Oo,useState:function(){return So(xo)},useDebugValue:Bo,useDeferredValue:function(e){var t=bo();return null===lo?t.memoizedState=e:Vo(t,lo.memoizedState,e)},useTransition:function(){return[So(xo)[0],bo().memoizedState]},useMutableSource:ko,useSyncExternalStore:jo,useId:Yo,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=$({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:$({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var al={isMounted:function(e){return!!(e=e._reactInternals)&&Ue(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ec(),a=tc(e),i=Ai(r,a);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Fi(e,i,a))&&(nc(t,e,a,r),Mi(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ec(),a=tc(e),i=Ai(r,a);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Fi(e,i,a))&&(nc(t,e,a,r),Mi(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),r=tc(e),a=Ai(n,r);a.tag=2,void 0!==t&&null!==t&&(a.callback=t),null!==(t=Fi(e,a,r))&&(nc(t,e,r,n),Mi(t,e,r))}};function il(e,t,n,r,a,i,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,o):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(a,i))}function ol(e,t,n){var r=!1,a=Na,i=t.contextType;return"object"===typeof i&&null!==i?i=Ti(i):(a=Oa(t)?Ta:Pa.current,i=(r=null!==(r=t.contextTypes)&&void 0!==r)?za(e,a):Na),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=al,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&al.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Li(e);var i=t.contextType;"object"===typeof i&&null!==i?a.context=Ti(i):(i=Oa(t)?Ta:Pa.current,a.context=za(e,i)),a.state=e.memoizedState,"function"===typeof(i=t.getDerivedStateFromProps)&&(rl(e,t,i,n),a.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(t=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&al.enqueueReplaceState(a,a.state,null),Ui(e,n,a,r),a.state=e.memoizedState),"function"===typeof a.componentDidMount&&(e.flags|=4194308)}function cl(e,t){try{var n="",r=t;do{n+=B(r),r=r.return}while(r);var a=n}catch(i){a="\nError generating stack: "+i.message+"\n"+i.stack}return{value:e,source:t,stack:a,digest:null}}function ul(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var pl="function"===typeof WeakMap?WeakMap:Map;function fl(e,t,n){(n=Ai(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Vs||(Vs=!0,Hs=r),dl(0,t)},n}function hl(e,t,n){(n=Ai(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){dl(0,t)}}var i=e.stateNode;return null!==i&&"function"===typeof i.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===Ys?Ys=new Set([this]):Ys.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ml(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new pl;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Ec.bind(null,e,t,n),t.then(e,e))}function gl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function yl(e,t,n,r,a){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Ai(-1,1)).tag=2,Fi(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var vl=x.ReactCurrentOwner,bl=!1;function xl(e,t,n,r){t.child=null===e?wi(t,null,n,r):xi(t,e.child,n,r)}function wl(e,t,n,r,a){n=n.render;var i=t.ref;return _i(t,a),r=go(e,t,n,r,i,a),n=yo(),null===e||bl?(ai&&n&&ei(t),t.flags|=1,xl(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Vl(e,t,a))}function Sl(e,t,n,r,a){if(null===e){var i=n.type;return"function"!==typeof i||Oc(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Rc(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,kl(e,t,i,r,a))}if(i=e.child,0===(e.lanes&a)){var o=i.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(o,r)&&e.ref===t.ref)return Vl(e,t,a)}return t.flags|=1,(e=Ic(i,r)).ref=t.ref,e.return=t,t.child=e}function kl(e,t,n,r,a){if(null!==e){var i=e.memoizedProps;if(sr(i,r)&&e.ref===t.ref){if(bl=!1,t.pendingProps=r=i,0===(e.lanes&a))return t.lanes=e.lanes,Vl(e,t,a);0!==(131072&e.flags)&&(bl=!0)}}return Cl(e,t,n,r,a)}function jl(e,t,n){var r=t.pendingProps,a=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ca(Is,Os),Os|=n;else{if(0===(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ca(Is,Os),Os|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==i?i.baseLanes:n,Ca(Is,Os),Os|=r}else null!==i?(r=i.baseLanes|n,t.memoizedState=null):r=n,Ca(Is,Os),Os|=r;return xl(e,t,a,n),t.child}function El(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cl(e,t,n,r,a){var i=Oa(n)?Ta:Pa.current;return i=za(t,i),_i(t,a),n=go(e,t,n,r,i,a),r=yo(),null===e||bl?(ai&&r&&ei(t),t.flags|=1,xl(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Vl(e,t,a))}function Nl(e,t,n,r,a){if(Oa(n)){var i=!0;La(t)}else i=!1;if(_i(t,a),null===t.stateNode)Wl(e,t),ol(t,n,r),sl(t,n,r,a),r=!0;else if(null===e){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,c=n.contextType;"object"===typeof c&&null!==c?c=Ti(c):c=za(t,c=Oa(n)?Ta:Pa.current);var u=n.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof o.getSnapshotBeforeUpdate;d||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l!==r||s!==c)&&ll(t,o,r,c),Di=!1;var p=t.memoizedState;o.state=p,Ui(t,r,o,a),s=t.memoizedState,l!==r||p!==s||_a.current||Di?("function"===typeof u&&(rl(t,n,u,r),s=t.memoizedState),(l=Di||il(t,n,l,r,p,s,c))?(d||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=c,r=l):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,$i(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:nl(t.type,l),o.props=c,d=t.pendingProps,p=o.context,"object"===typeof(s=n.contextType)&&null!==s?s=Ti(s):s=za(t,s=Oa(n)?Ta:Pa.current);var f=n.getDerivedStateFromProps;(u="function"===typeof f||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l!==d||p!==s)&&ll(t,o,r,s),Di=!1,p=t.memoizedState,o.state=p,Ui(t,r,o,a);var h=t.memoizedState;l!==d||p!==h||_a.current||Di?("function"===typeof f&&(rl(t,n,f,r),h=t.memoizedState),(c=Di||il(t,n,c,r,p,h,s)||!1)?(u||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,h,s),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),o.props=r,o.state=h,o.context=s,r=c):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Pl(e,t,n,r,i,a)}function Pl(e,t,n,r,a,i){El(e,t);var o=0!==(128&t.flags);if(!r&&!o)return a&&$a(t,n,!1),Vl(e,t,i);r=t.stateNode,vl.current=t;var l=o&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=xi(t,e.child,null,i),t.child=xi(t,null,l,i)):xl(e,t,l,i),t.memoizedState=r.state,a&&$a(t,n,!0),t.child}function _l(e){var t=e.stateNode;t.pendingContext?Ra(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ra(0,t.context,!1),Gi(e,t.containerInfo)}function Tl(e,t,n,r,a){return fi(),hi(a),t.flags|=256,xl(e,t,n,r),t.child}var zl,Ol,Il,Rl,Dl={dehydrated:null,treeContext:null,retryLane:0};function Ll(e){return{baseLanes:e,cachePool:null,transitions:null}}function $l(e,t,n){var r,a=t.pendingProps,o=Zi.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&o)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),Ca(Zi,1&o),null===e)return ci(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=a.children,e=a.fallback,l?(a=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&a)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Lc(s,a,0,null),e=Dc(e,a,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ll(n),t.memoizedState=Dl,e):Al(t,s));if(null!==(o=e.memoizedState)&&null!==(r=o.dehydrated))return function(e,t,n,r,a,o,l){if(n)return 256&t.flags?(t.flags&=-257,Fl(e,t,l,r=ul(Error(i(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=r.fallback,a=t.mode,r=Lc({mode:"visible",children:r.children},a,0,null),(o=Dc(o,a,l,null)).flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,0!==(1&t.mode)&&xi(t,e.child,null,l),t.child.memoizedState=Ll(l),t.memoizedState=Dl,o);if(0===(1&t.mode))return Fl(e,t,l,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var s=r.dgst;return r=s,Fl(e,t,l,r=ul(o=Error(i(419)),r,void 0))}if(s=0!==(l&e.childLanes),bl||s){if(null!==(r=_s)){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(r.suspendedLanes|l))?0:a)&&a!==o.retryLane&&(o.retryLane=a,Ri(e,a),nc(r,e,a,-1))}return mc(),Fl(e,t,l,r=ul(Error(i(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=Nc.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,ri=ca(a.nextSibling),ni=t,ai=!0,ii=null,null!==e&&(Ka[Qa++]=qa,Ka[Qa++]=Ja,Ka[Qa++]=Ga,qa=e.id,Ja=e.overflow,Ga=t),t=Al(t,r.children),t.flags|=4096,t)}(e,t,s,a,r,o,n);if(l){l=a.fallback,s=t.mode,r=(o=e.child).sibling;var c={mode:"hidden",children:a.children};return 0===(1&s)&&t.child!==o?((a=t.child).childLanes=0,a.pendingProps=c,t.deletions=null):(a=Ic(o,c)).subtreeFlags=14680064&o.subtreeFlags,null!==r?l=Ic(r,l):(l=Dc(l,s,n,null)).flags|=2,l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,s=null===(s=e.child.memoizedState)?Ll(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Dl,a}return e=(l=e.child).sibling,a=Ic(l,{mode:"visible",children:a.children}),0===(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Al(e,t){return(t=Lc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Fl(e,t,n,r){return null!==r&&hi(r),xi(t,e.child,null,n),(e=Al(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ml(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Pi(e.return,t,n)}function Bl(e,t,n,r,a){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function Ul(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(xl(e,t,r.children,n),0!==(2&(r=Zi.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ml(e,n,t);else if(19===e.tag)Ml(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ca(Zi,r),0===(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===eo(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Bl(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===eo(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Bl(t,!0,n,null,i);break;case"together":Bl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ls|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(n=Ic(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ic(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Hl(e,t){if(!ai)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Yl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Kl(e,t,n){var r=t.pendingProps;switch(ti(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yl(t),null;case 1:case 17:return Oa(t.type)&&Ia(),Yl(t),null;case 3:return r=t.stateNode,qi(),Ea(_a),Ea(Pa),no(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(di(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ii&&(oc(ii),ii=null))),Ol(e,t),Yl(t),null;case 5:Xi(t);var a=Qi(Ki.current);if(n=t.type,null!==e&&null!=t.stateNode)Il(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(i(166));return Yl(t),null}if(e=Qi(Hi.current),di(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[pa]=t,r[fa]=o,e=0!==(1&t.mode),n){case"dialog":Fr("cancel",r),Fr("close",r);break;case"iframe":case"object":case"embed":Fr("load",r);break;case"video":case"audio":for(a=0;a<Dr.length;a++)Fr(Dr[a],r);break;case"source":Fr("error",r);break;case"img":case"image":case"link":Fr("error",r),Fr("load",r);break;case"details":Fr("toggle",r);break;case"input":q(r,o),Fr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Fr("invalid",r);break;case"textarea":ae(r,o),Fr("invalid",r)}for(var s in ve(n,o),a=null,o)if(o.hasOwnProperty(s)){var c=o[s];"children"===s?"string"===typeof c?r.textContent!==c&&(!0!==o.suppressHydrationWarning&&Xr(r.textContent,c,e),a=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==o.suppressHydrationWarning&&Xr(r.textContent,c,e),a=["children",""+c]):l.hasOwnProperty(s)&&null!=c&&"onScroll"===s&&Fr("scroll",r)}switch(n){case"input":Y(r),Z(r,o,!0);break;case"textarea":Y(r),oe(r);break;case"select":case"option":break;default:"function"===typeof o.onClick&&(r.onclick=Zr)}r=a,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[pa]=t,e[fa]=r,zl(e,t,!1,!1),t.stateNode=e;e:{switch(s=be(n,r),n){case"dialog":Fr("cancel",e),Fr("close",e),a=r;break;case"iframe":case"object":case"embed":Fr("load",e),a=r;break;case"video":case"audio":for(a=0;a<Dr.length;a++)Fr(Dr[a],e);a=r;break;case"source":Fr("error",e),a=r;break;case"img":case"image":case"link":Fr("error",e),Fr("load",e),a=r;break;case"details":Fr("toggle",e),a=r;break;case"input":q(e,r),a=G(e,r),Fr("invalid",e);break;case"option":default:a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=$({},r,{value:void 0}),Fr("invalid",e);break;case"textarea":ae(e,r),a=re(e,r),Fr("invalid",e)}for(o in ve(n,a),c=a)if(c.hasOwnProperty(o)){var u=c[o];"style"===o?ge(e,u):"dangerouslySetInnerHTML"===o?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===o?"string"===typeof u?("textarea"!==n||""!==u)&&pe(e,u):"number"===typeof u&&pe(e,""+u):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(l.hasOwnProperty(o)?null!=u&&"onScroll"===o&&Fr("scroll",e):null!=u&&b(e,o,u,s))}switch(n){case"input":Y(e),Z(e,r,!1);break;case"textarea":Y(e),oe(e);break;case"option":null!=r.value&&e.setAttribute("value",""+V(r.value));break;case"select":e.multiple=!!r.multiple,null!=(o=r.value)?ne(e,!!r.multiple,o,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Yl(t),null;case 6:if(e&&null!=t.stateNode)Rl(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(i(166));if(n=Qi(Ki.current),Qi(Hi.current),di(t)){if(r=t.stateNode,n=t.memoizedProps,r[pa]=t,(o=r.nodeValue!==n)&&null!==(e=ni))switch(e.tag){case 3:Xr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Xr(r.nodeValue,n,0!==(1&e.mode))}o&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[pa]=t,t.stateNode=r}return Yl(t),null;case 13:if(Ea(Zi),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ai&&null!==ri&&0!==(1&t.mode)&&0===(128&t.flags))pi(),fi(),t.flags|=98560,o=!1;else if(o=di(t),null!==r&&null!==r.dehydrated){if(null===e){if(!o)throw Error(i(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(i(317));o[pa]=t}else fi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Yl(t),o=!1}else null!==ii&&(oc(ii),ii=null),o=!0;if(!o)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&Zi.current)?0===Rs&&(Rs=3):mc())),null!==t.updateQueue&&(t.flags|=4),Yl(t),null);case 4:return qi(),Ol(e,t),null===e&&Ur(t.stateNode.containerInfo),Yl(t),null;case 10:return Ni(t.type._context),Yl(t),null;case 19:if(Ea(Zi),null===(o=t.memoizedState))return Yl(t),null;if(r=0!==(128&t.flags),null===(s=o.rendering))if(r)Hl(o,!1);else{if(0!==Rs||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=eo(e))){for(t.flags|=128,Hl(o,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(o=n).flags&=14680066,null===(s=o.alternate)?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ca(Zi,1&Zi.current|2),t.child}e=e.sibling}null!==o.tail&&Je()>Us&&(t.flags|=128,r=!0,Hl(o,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=eo(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Hl(o,!0),null===o.tail&&"hidden"===o.tailMode&&!s.alternate&&!ai)return Yl(t),null}else 2*Je()-o.renderingStartTime>Us&&1073741824!==n&&(t.flags|=128,r=!0,Hl(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=o.last)?n.sibling=s:t.child=s,o.last=s)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Je(),t.sibling=null,n=Zi.current,Ca(Zi,r?1&n|2:1&n),t):(Yl(t),null);case 22:case 23:return dc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Os)&&(Yl(t),6&t.subtreeFlags&&(t.flags|=8192)):Yl(t),null;case 24:case 25:return null}throw Error(i(156,t.tag))}function Ql(e,t){switch(ti(t),t.tag){case 1:return Oa(t.type)&&Ia(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return qi(),Ea(_a),Ea(Pa),no(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Xi(t),null;case 13:if(Ea(Zi),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));fi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ea(Zi),null;case 4:return qi(),null;case 10:return Ni(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}zl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ol=function(){},Il=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Qi(Hi.current);var i,o=null;switch(n){case"input":a=G(e,a),r=G(e,r),o=[];break;case"select":a=$({},a,{value:void 0}),r=$({},r,{value:void 0}),o=[];break;case"textarea":a=re(e,a),r=re(e,r),o=[];break;default:"function"!==typeof a.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(u in ve(n,r),n=null,a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&null!=a[u])if("style"===u){var s=a[u];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(l.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(s=null!=a?a[u]:void 0,r.hasOwnProperty(u)&&c!==s&&(null!=c||null!=s))if("style"===u)if(s){for(i in s)!s.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in c)c.hasOwnProperty(i)&&s[i]!==c[i]&&(n||(n={}),n[i]=c[i])}else n||(o||(o=[]),o.push(u,n)),n=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,s=s?s.__html:void 0,null!=c&&s!==c&&(o=o||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(o=o||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(l.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&Fr("scroll",e),o||s===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},Rl=function(e,t,n,r){n!==r&&(t.flags|=4)};var Gl=!1,ql=!1,Jl="function"===typeof WeakSet?WeakSet:Set,Xl=null;function Zl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){jc(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){jc(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,void 0!==i&&es(t,n,i)}a=a.next}while(a!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function as(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function is(e){var t=e.alternate;null!==t&&(e.alternate=null,is(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[pa],delete t[fa],delete t[ma],delete t[ga],delete t[ya])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function os(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||os(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function cs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cs(e,t,n),e=e.sibling;null!==e;)cs(e,t,n),e=e.sibling}var us=null,ds=!1;function ps(e,t,n){for(n=n.child;null!==n;)fs(e,t,n),n=n.sibling}function fs(e,t,n){if(it&&"function"===typeof it.onCommitFiberUnmount)try{it.onCommitFiberUnmount(at,n)}catch(l){}switch(n.tag){case 5:ql||Zl(n,t);case 6:var r=us,a=ds;us=null,ps(e,t,n),ds=a,null!==(us=r)&&(ds?(e=us,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):us.removeChild(n.stateNode));break;case 18:null!==us&&(ds?(e=us,n=n.stateNode,8===e.nodeType?sa(e.parentNode,n):1===e.nodeType&&sa(e,n),Ut(e)):sa(us,n.stateNode));break;case 4:r=us,a=ds,us=n.stateNode.containerInfo,ds=!0,ps(e,t,n),us=r,ds=a;break;case 0:case 11:case 14:case 15:if(!ql&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,void 0!==o&&(0!==(2&i)||0!==(4&i))&&es(n,t,o),a=a.next}while(a!==r)}ps(e,t,n);break;case 1:if(!ql&&(Zl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){jc(n,t,l)}ps(e,t,n);break;case 21:ps(e,t,n);break;case 22:1&n.mode?(ql=(r=ql)||null!==n.memoizedState,ps(e,t,n),ql=r):ps(e,t,n);break;default:ps(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Jl),t.forEach((function(t){var r=Pc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function ms(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var o=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:us=s.stateNode,ds=!1;break e;case 3:case 4:us=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===us)throw Error(i(160));fs(o,l,a),us=null,ds=!1;var c=a.alternate;null!==c&&(c.return=null),a.return=null}catch(u){jc(a,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gs(t,e),t=t.sibling}function gs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ms(t,e),ys(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(g){jc(e,e.return,g)}try{ns(5,e,e.return)}catch(g){jc(e,e.return,g)}}break;case 1:ms(t,e),ys(e),512&r&&null!==n&&Zl(n,n.return);break;case 5:if(ms(t,e),ys(e),512&r&&null!==n&&Zl(n,n.return),32&e.flags){var a=e.stateNode;try{pe(a,"")}catch(g){jc(e,e.return,g)}}if(4&r&&null!=(a=e.stateNode)){var o=e.memoizedProps,l=null!==n?n.memoizedProps:o,s=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===s&&"radio"===o.type&&null!=o.name&&J(a,o),be(s,l);var u=be(s,o);for(l=0;l<c.length;l+=2){var d=c[l],p=c[l+1];"style"===d?ge(a,p):"dangerouslySetInnerHTML"===d?de(a,p):"children"===d?pe(a,p):b(a,d,p,u)}switch(s){case"input":X(a,o);break;case"textarea":ie(a,o);break;case"select":var f=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var h=o.value;null!=h?ne(a,!!o.multiple,h,!1):f!==!!o.multiple&&(null!=o.defaultValue?ne(a,!!o.multiple,o.defaultValue,!0):ne(a,!!o.multiple,o.multiple?[]:"",!1))}a[fa]=o}catch(g){jc(e,e.return,g)}}break;case 6:if(ms(t,e),ys(e),4&r){if(null===e.stateNode)throw Error(i(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(g){jc(e,e.return,g)}}break;case 3:if(ms(t,e),ys(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ut(t.containerInfo)}catch(g){jc(e,e.return,g)}break;case 4:default:ms(t,e),ys(e);break;case 13:ms(t,e),ys(e),8192&(a=e.child).flags&&(o=null!==a.memoizedState,a.stateNode.isHidden=o,!o||null!==a.alternate&&null!==a.alternate.memoizedState||(Bs=Je())),4&r&&hs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(ql=(u=ql)||d,ms(t,e),ql=u):ms(t,e),ys(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(Xl=e,d=e.child;null!==d;){for(p=Xl=d;null!==Xl;){switch(h=(f=Xl).child,f.tag){case 0:case 11:case 14:case 15:ns(4,f,f.return);break;case 1:Zl(f,f.return);var m=f.stateNode;if("function"===typeof m.componentWillUnmount){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){jc(r,n,g)}}break;case 5:Zl(f,f.return);break;case 22:if(null!==f.memoizedState){ws(p);continue}}null!==h?(h.return=f,Xl=h):ws(p)}d=d.sibling}e:for(d=null,p=e;;){if(5===p.tag){if(null===d){d=p;try{a=p.stateNode,u?"function"===typeof(o=a.style).setProperty?o.setProperty("display","none","important"):o.display="none":(s=p.stateNode,l=void 0!==(c=p.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,s.style.display=me("display",l))}catch(g){jc(e,e.return,g)}}}else if(6===p.tag){if(null===d)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(g){jc(e,e.return,g)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ms(t,e),ys(e),4&r&&hs(e);case 21:}}function ys(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(os(n)){var r=n;break e}n=n.return}throw Error(i(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(pe(a,""),r.flags&=-33),cs(e,ls(e),a);break;case 3:case 4:var o=r.stateNode.containerInfo;ss(e,ls(e),o);break;default:throw Error(i(161))}}catch(l){jc(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function vs(e,t,n){Xl=e,bs(e,t,n)}function bs(e,t,n){for(var r=0!==(1&e.mode);null!==Xl;){var a=Xl,i=a.child;if(22===a.tag&&r){var o=null!==a.memoizedState||Gl;if(!o){var l=a.alternate,s=null!==l&&null!==l.memoizedState||ql;l=Gl;var c=ql;if(Gl=o,(ql=s)&&!c)for(Xl=a;null!==Xl;)s=(o=Xl).child,22===o.tag&&null!==o.memoizedState?Ss(a):null!==s?(s.return=o,Xl=s):Ss(a);for(;null!==i;)Xl=i,bs(i,t,n),i=i.sibling;Xl=a,Gl=l,ql=c}xs(e)}else 0!==(8772&a.subtreeFlags)&&null!==i?(i.return=a,Xl=i):xs(e)}}function xs(e){for(;null!==Xl;){var t=Xl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:ql||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!ql)if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&Wi(t,o,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Wi(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var p=d.dehydrated;null!==p&&Ut(p)}}}break;default:throw Error(i(163))}ql||512&t.flags&&as(t)}catch(f){jc(t,t.return,f)}}if(t===e){Xl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Xl=n;break}Xl=t.return}}function ws(e){for(;null!==Xl;){var t=Xl;if(t===e){Xl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Xl=n;break}Xl=t.return}}function Ss(e){for(;null!==Xl;){var t=Xl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){jc(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(s){jc(t,a,s)}}var i=t.return;try{as(t)}catch(s){jc(t,i,s)}break;case 5:var o=t.return;try{as(t)}catch(s){jc(t,o,s)}}}catch(s){jc(t,t.return,s)}if(t===e){Xl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Xl=l;break}Xl=t.return}}var ks,js=Math.ceil,Es=x.ReactCurrentDispatcher,Cs=x.ReactCurrentOwner,Ns=x.ReactCurrentBatchConfig,Ps=0,_s=null,Ts=null,zs=0,Os=0,Is=ja(0),Rs=0,Ds=null,Ls=0,$s=0,As=0,Fs=null,Ms=null,Bs=0,Us=1/0,Ws=null,Vs=!1,Hs=null,Ys=null,Ks=!1,Qs=null,Gs=0,qs=0,Js=null,Xs=-1,Zs=0;function ec(){return 0!==(6&Ps)?Je():-1!==Xs?Xs:Xs=Je()}function tc(e){return 0===(1&e.mode)?1:0!==(2&Ps)&&0!==zs?zs&-zs:null!==mi.transition?(0===Zs&&(Zs=mt()),Zs):0!==(e=bt)?e:e=void 0===(e=window.event)?16:qt(e.type)}function nc(e,t,n,r){if(50<qs)throw qs=0,Js=null,Error(i(185));yt(e,n,r),0!==(2&Ps)&&e===_s||(e===_s&&(0===(2&Ps)&&($s|=n),4===Rs&&lc(e,zs)),rc(e,r),1===n&&0===Ps&&0===(1&t.mode)&&(Us=Je()+500,Fa&&Ua()))}function rc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-ot(i),l=1<<o,s=a[o];-1===s?0!==(l&n)&&0===(l&r)||(a[o]=ft(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}(e,t);var r=pt(e,e===_s?zs:0);if(0===r)null!==n&&Qe(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Qe(n),1===t)0===e.tag?function(e){Fa=!0,Ba(e)}(sc.bind(null,e)):Ba(sc.bind(null,e)),oa((function(){0===(6&Ps)&&Ua()})),n=null;else{switch(xt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=_c(n,ac.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ac(e,t){if(Xs=-1,Zs=0,0!==(6&Ps))throw Error(i(327));var n=e.callbackNode;if(Sc()&&e.callbackNode!==n)return null;var r=pt(e,e===_s?zs:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gc(e,r);else{t=r;var a=Ps;Ps|=2;var o=hc();for(_s===e&&zs===t||(Ws=null,Us=Je()+500,pc(e,t));;)try{vc();break}catch(s){fc(e,s)}Ci(),Es.current=o,Ps=a,null!==Ts?t=0:(_s=null,zs=0,t=Rs)}if(0!==t){if(2===t&&(0!==(a=ht(e))&&(r=a,t=ic(e,a))),1===t)throw n=Ds,pc(e,0),lc(e,r),rc(e,Je()),n;if(6===t)lc(e,r);else{if(a=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!lr(i(),a))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=gc(e,r))&&(0!==(o=ht(e))&&(r=o,t=ic(e,o))),1===t))throw n=Ds,pc(e,0),lc(e,r),rc(e,Je()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(i(345));case 2:case 5:wc(e,Ms,Ws);break;case 3:if(lc(e,r),(130023424&r)===r&&10<(t=Bs+500-Je())){if(0!==pt(e,0))break;if(((a=e.suspendedLanes)&r)!==r){ec(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ra(wc.bind(null,e,Ms,Ws),t);break}wc(e,Ms,Ws);break;case 4:if(lc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-ot(r);o=1<<l,(l=t[l])>a&&(a=l),r&=~o}if(r=a,10<(r=(120>(r=Je()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*js(r/1960))-r)){e.timeoutHandle=ra(wc.bind(null,e,Ms,Ws),r);break}wc(e,Ms,Ws);break;default:throw Error(i(329))}}}return rc(e,Je()),e.callbackNode===n?ac.bind(null,e):null}function ic(e,t){var n=Fs;return e.current.memoizedState.isDehydrated&&(pc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=Ms,Ms=n,null!==t&&oc(t)),e}function oc(e){null===Ms?Ms=e:Ms.push.apply(Ms,e)}function lc(e,t){for(t&=~As,t&=~$s,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function sc(e){if(0!==(6&Ps))throw Error(i(327));Sc();var t=pt(e,0);if(0===(1&t))return rc(e,Je()),null;var n=gc(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=ic(e,r))}if(1===n)throw n=Ds,pc(e,0),lc(e,t),rc(e,Je()),n;if(6===n)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,Ms,Ws),rc(e,Je()),null}function cc(e,t){var n=Ps;Ps|=1;try{return e(t)}finally{0===(Ps=n)&&(Us=Je()+500,Fa&&Ua())}}function uc(e){null!==Qs&&0===Qs.tag&&0===(6&Ps)&&Sc();var t=Ps;Ps|=1;var n=Ns.transition,r=bt;try{if(Ns.transition=null,bt=1,e)return e()}finally{bt=r,Ns.transition=n,0===(6&(Ps=t))&&Ua()}}function dc(){Os=Is.current,Ea(Is)}function pc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,aa(n)),null!==Ts)for(n=Ts.return;null!==n;){var r=n;switch(ti(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Ia();break;case 3:qi(),Ea(_a),Ea(Pa),no();break;case 5:Xi(r);break;case 4:qi();break;case 13:case 19:Ea(Zi);break;case 10:Ni(r.type._context);break;case 22:case 23:dc()}n=n.return}if(_s=e,Ts=e=Ic(e.current,null),zs=Os=t,Rs=0,Ds=null,As=$s=Ls=0,Ms=Fs=null,null!==zi){for(t=0;t<zi.length;t++)if(null!==(r=(n=zi[t]).interleaved)){n.interleaved=null;var a=r.next,i=n.pending;if(null!==i){var o=i.next;i.next=a,r.next=o}n.pending=r}zi=null}return e}function fc(e,t){for(;;){var n=Ts;try{if(Ci(),ro.current=Xo,co){for(var r=oo.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}co=!1}if(io=0,so=lo=oo=null,uo=!1,po=0,Cs.current=null,null===n||null===n.return){Rs=1,Ds=t,Ts=null;break}e:{var o=e,l=n.return,s=n,c=t;if(t=zs,s.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=s,p=d.tag;if(0===(1&d.mode)&&(0===p||11===p||15===p)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=gl(l);if(null!==h){h.flags&=-257,yl(h,l,s,0,t),1&h.mode&&ml(o,u,t),c=u;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(c),t.updateQueue=g}else m.add(c);break e}if(0===(1&t)){ml(o,u,t),mc();break e}c=Error(i(426))}else if(ai&&1&s.mode){var y=gl(l);if(null!==y){0===(65536&y.flags)&&(y.flags|=256),yl(y,l,s,0,t),hi(cl(c,s));break e}}o=c=cl(c,s),4!==Rs&&(Rs=2),null===Fs?Fs=[o]:Fs.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,Bi(o,fl(0,c,t));break e;case 1:s=c;var v=o.type,b=o.stateNode;if(0===(128&o.flags)&&("function"===typeof v.getDerivedStateFromError||null!==b&&"function"===typeof b.componentDidCatch&&(null===Ys||!Ys.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t,Bi(o,hl(o,s,t));break e}}o=o.return}while(null!==o)}xc(n)}catch(x){t=x,Ts===n&&null!==n&&(Ts=n=n.return);continue}break}}function hc(){var e=Es.current;return Es.current=Xo,null===e?Xo:e}function mc(){0!==Rs&&3!==Rs&&2!==Rs||(Rs=4),null===_s||0===(268435455&Ls)&&0===(268435455&$s)||lc(_s,zs)}function gc(e,t){var n=Ps;Ps|=2;var r=hc();for(_s===e&&zs===t||(Ws=null,pc(e,t));;)try{yc();break}catch(a){fc(e,a)}if(Ci(),Ps=n,Es.current=r,null!==Ts)throw Error(i(261));return _s=null,zs=0,Rs}function yc(){for(;null!==Ts;)bc(Ts)}function vc(){for(;null!==Ts&&!Ge();)bc(Ts)}function bc(e){var t=ks(e.alternate,e,Os);e.memoizedProps=e.pendingProps,null===t?xc(e):Ts=t,Cs.current=null}function xc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Kl(n,t,Os)))return void(Ts=n)}else{if(null!==(n=Ql(n,t)))return n.flags&=32767,void(Ts=n);if(null===e)return Rs=6,void(Ts=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Ts=t);Ts=t=e}while(null!==t);0===Rs&&(Rs=5)}function wc(e,t,n){var r=bt,a=Ns.transition;try{Ns.transition=null,bt=1,function(e,t,n,r){do{Sc()}while(null!==Qs);if(0!==(6&Ps))throw Error(i(327));n=e.finishedWork;var a=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-ot(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}(e,o),e===_s&&(Ts=_s=null,zs=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Ks||(Ks=!0,_c(tt,(function(){return Sc(),null}))),o=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||o){o=Ns.transition,Ns.transition=null;var l=bt;bt=1;var s=Ps;Ps|=4,Cs.current=null,function(e,t){if(ea=Vt,fr(e=pr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(w){n=null;break e}var l=0,s=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var h;p!==n||0!==a&&3!==p.nodeType||(s=l+a),p!==o||0!==r&&3!==p.nodeType||(c=l+r),3===p.nodeType&&(l+=p.nodeValue.length),null!==(h=p.firstChild);)f=p,p=h;for(;;){if(p===e)break t;if(f===n&&++u===a&&(s=l),f===o&&++d===r&&(c=l),null!==(h=p.nextSibling))break;f=(p=f).parentNode}p=h}n=-1===s||-1===c?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ta={focusedElem:e,selectionRange:n},Vt=!1,Xl=t;null!==Xl;)if(e=(t=Xl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Xl=e;else for(;null!==Xl;){t=Xl;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,y=m.memoizedState,v=t.stateNode,b=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:nl(t.type,g),y);v.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(i(163))}}catch(w){jc(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Xl=e;break}Xl=t.return}m=ts,ts=!1}(e,n),gs(n,e),hr(ta),Vt=!!ea,ta=ea=null,e.current=n,vs(n,e,a),qe(),Ps=s,bt=l,Ns.transition=o}else e.current=n;if(Ks&&(Ks=!1,Qs=e,Gs=a),o=e.pendingLanes,0===o&&(Ys=null),function(e){if(it&&"function"===typeof it.onCommitFiberRoot)try{it.onCommitFiberRoot(at,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),rc(e,Je()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Vs)throw Vs=!1,e=Hs,Hs=null,e;0!==(1&Gs)&&0!==e.tag&&Sc(),o=e.pendingLanes,0!==(1&o)?e===Js?qs++:(qs=0,Js=e):qs=0,Ua()}(e,t,n,r)}finally{Ns.transition=a,bt=r}return null}function Sc(){if(null!==Qs){var e=xt(Gs),t=Ns.transition,n=bt;try{if(Ns.transition=null,bt=16>e?16:e,null===Qs)var r=!1;else{if(e=Qs,Qs=null,Gs=0,0!==(6&Ps))throw Error(i(331));var a=Ps;for(Ps|=4,Xl=e.current;null!==Xl;){var o=Xl,l=o.child;if(0!==(16&Xl.flags)){var s=o.deletions;if(null!==s){for(var c=0;c<s.length;c++){var u=s[c];for(Xl=u;null!==Xl;){var d=Xl;switch(d.tag){case 0:case 11:case 15:ns(8,d,o)}var p=d.child;if(null!==p)p.return=d,Xl=p;else for(;null!==Xl;){var f=(d=Xl).sibling,h=d.return;if(is(d),d===u){Xl=null;break}if(null!==f){f.return=h,Xl=f;break}Xl=h}}}var m=o.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var y=g.sibling;g.sibling=null,g=y}while(null!==g)}}Xl=o}}if(0!==(2064&o.subtreeFlags)&&null!==l)l.return=o,Xl=l;else e:for(;null!==Xl;){if(0!==(2048&(o=Xl).flags))switch(o.tag){case 0:case 11:case 15:ns(9,o,o.return)}var v=o.sibling;if(null!==v){v.return=o.return,Xl=v;break e}Xl=o.return}}var b=e.current;for(Xl=b;null!==Xl;){var x=(l=Xl).child;if(0!==(2064&l.subtreeFlags)&&null!==x)x.return=l,Xl=x;else e:for(l=b;null!==Xl;){if(0!==(2048&(s=Xl).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(S){jc(s,s.return,S)}if(s===l){Xl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Xl=w;break e}Xl=s.return}}if(Ps=a,Ua(),it&&"function"===typeof it.onPostCommitFiberRoot)try{it.onPostCommitFiberRoot(at,e)}catch(S){}r=!0}return r}finally{bt=n,Ns.transition=t}}return!1}function kc(e,t,n){e=Fi(e,t=fl(0,t=cl(n,t),1),1),t=ec(),null!==e&&(yt(e,1,t),rc(e,t))}function jc(e,t,n){if(3===e.tag)kc(e,e,n);else for(;null!==t;){if(3===t.tag){kc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Ys||!Ys.has(r))){t=Fi(t,e=hl(t,e=cl(n,e),1),1),e=ec(),null!==t&&(yt(t,1,e),rc(t,e));break}}t=t.return}}function Ec(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,_s===e&&(zs&n)===n&&(4===Rs||3===Rs&&(130023424&zs)===zs&&500>Je()-Bs?pc(e,0):As|=n),rc(e,t)}function Cc(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var n=ec();null!==(e=Ri(e,t))&&(yt(e,t,n),rc(e,n))}function Nc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Cc(e,n)}function Pc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(i(314))}null!==r&&r.delete(t),Cc(e,n)}function _c(e,t){return Ke(e,t)}function Tc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zc(e,t,n,r){return new Tc(e,t,n,r)}function Oc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ic(e,t){var n=e.alternate;return null===n?((n=zc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Rc(e,t,n,r,a,o){var l=2;if(r=e,"function"===typeof e)Oc(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case k:return Dc(n.children,a,o,t);case j:l=8,a|=8;break;case E:return(e=zc(12,n,t,2|a)).elementType=E,e.lanes=o,e;case _:return(e=zc(13,n,t,a)).elementType=_,e.lanes=o,e;case T:return(e=zc(19,n,t,a)).elementType=T,e.lanes=o,e;case I:return Lc(n,a,o,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case C:l=10;break e;case N:l=9;break e;case P:l=11;break e;case z:l=14;break e;case O:l=16,r=null;break e}throw Error(i(130,null==e?e:typeof e,""))}return(t=zc(l,n,t,a)).elementType=e,t.type=r,t.lanes=o,t}function Dc(e,t,n,r){return(e=zc(7,e,r,t)).lanes=n,e}function Lc(e,t,n,r){return(e=zc(22,e,r,t)).elementType=I,e.lanes=n,e.stateNode={isHidden:!1},e}function $c(e,t,n){return(e=zc(6,e,null,t)).lanes=n,e}function Ac(e,t,n){return(t=zc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fc(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Mc(e,t,n,r,a,i,o,l,s){return e=new Fc(e,t,n,l,s),1===t?(t=1,!0===i&&(t|=8)):t=0,i=zc(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Li(i),e}function Bc(e){if(!e)return Na;e:{if(Ue(e=e._reactInternals)!==e||1!==e.tag)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oa(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(i(171))}if(1===e.tag){var n=e.type;if(Oa(n))return Da(e,n,t)}return t}function Uc(e,t,n,r,a,i,o,l,s){return(e=Mc(n,r,!0,e,0,i,0,l,s)).context=Bc(null),n=e.current,(i=Ai(r=ec(),a=tc(n))).callback=void 0!==t&&null!==t?t:null,Fi(n,i,a),e.current.lanes=a,yt(e,a,r),rc(e,r),e}function Wc(e,t,n,r){var a=t.current,i=ec(),o=tc(a);return n=Bc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Ai(i,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Fi(a,t,o))&&(nc(e,a,o,i),Mi(e,a,o)),o}function Vc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Hc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Yc(e,t){Hc(e,t),(e=e.alternate)&&Hc(e,t)}ks=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||_a.current)bl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return bl=!1,function(e,t,n){switch(t.tag){case 3:_l(t),fi();break;case 5:Ji(t);break;case 1:Oa(t.type)&&La(t);break;case 4:Gi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Ca(Si,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ca(Zi,1&Zi.current),t.flags|=128,null):0!==(n&t.child.childLanes)?$l(e,t,n):(Ca(Zi,1&Zi.current),null!==(e=Vl(e,t,n))?e.sibling:null);Ca(Zi,1&Zi.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Ul(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ca(Zi,Zi.current),r)break;return null;case 22:case 23:return t.lanes=0,jl(e,t,n)}return Vl(e,t,n)}(e,t,n);bl=0!==(131072&e.flags)}else bl=!1,ai&&0!==(1048576&t.flags)&&Za(t,Ya,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wl(e,t),e=t.pendingProps;var a=za(t,Pa.current);_i(t,n),a=go(null,t,r,e,a,n);var o=yo();return t.flags|=1,"object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oa(r)?(o=!0,La(t)):o=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,Li(t),a.updater=al,t.stateNode=a,a._reactInternals=t,sl(t,r,e,n),t=Pl(null,t,r,!0,o,n)):(t.tag=0,ai&&o&&ei(t),xl(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wl(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"===typeof e)return Oc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===P)return 11;if(e===z)return 14}return 2}(r),e=nl(r,e),a){case 0:t=Cl(null,t,r,e,n);break e;case 1:t=Nl(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=Sl(null,t,r,nl(r.type,e),n);break e}throw Error(i(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,Cl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 1:return r=t.type,a=t.pendingProps,Nl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 3:e:{if(_l(t),null===e)throw Error(i(387));r=t.pendingProps,a=(o=t.memoizedState).element,$i(e,t),Ui(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Tl(e,t,r,n,a=cl(Error(i(423)),t));break e}if(r!==a){t=Tl(e,t,r,n,a=cl(Error(i(424)),t));break e}for(ri=ca(t.stateNode.containerInfo.firstChild),ni=t,ai=!0,ii=null,n=wi(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(fi(),r===a){t=Vl(e,t,n);break e}xl(e,t,r,n)}t=t.child}return t;case 5:return Ji(t),null===e&&ci(t),r=t.type,a=t.pendingProps,o=null!==e?e.memoizedProps:null,l=a.children,na(r,a)?l=null:null!==o&&na(r,o)&&(t.flags|=32),El(e,t),xl(e,t,l,n),t.child;case 6:return null===e&&ci(t),null;case 13:return $l(e,t,n);case 4:return Gi(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=xi(t,null,r,n):xl(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,wl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 7:return xl(e,t,t.pendingProps,n),t.child;case 8:case 12:return xl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,o=t.memoizedProps,l=a.value,Ca(Si,r._currentValue),r._currentValue=l,null!==o)if(lr(o.value,l)){if(o.children===a.children&&!_a.current){t=Vl(e,t,n);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var s=o.dependencies;if(null!==s){l=o.child;for(var c=s.firstContext;null!==c;){if(c.context===r){if(1===o.tag){(c=Ai(-1,n&-n)).tag=2;var u=o.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,null!==(c=o.alternate)&&(c.lanes|=n),Pi(o.return,n,t),s.lanes|=n;break}c=c.next}}else if(10===o.tag)l=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(l=o.return))throw Error(i(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),Pi(l,n,t),l=o.sibling}else l=o.child;if(null!==l)l.return=o;else for(l=o;null!==l;){if(l===t){l=null;break}if(null!==(o=l.sibling)){o.return=l.return,l=o;break}l=l.return}o=l}xl(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,_i(t,n),r=r(a=Ti(a)),t.flags|=1,xl(e,t,r,n),t.child;case 14:return a=nl(r=t.type,t.pendingProps),Sl(e,t,r,a=nl(r.type,a),n);case 15:return kl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:nl(r,a),Wl(e,t),t.tag=1,Oa(r)?(e=!0,La(t)):e=!1,_i(t,n),ol(t,r,a),sl(t,r,a,n),Pl(null,t,r,!0,e,n);case 19:return Ul(e,t,n);case 22:return jl(e,t,n)}throw Error(i(156,t.tag))};var Kc="function"===typeof reportError?reportError:function(e){console.error(e)};function Qc(e){this._internalRoot=e}function Gc(e){this._internalRoot=e}function qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Jc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Xc(){}function Zc(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if("function"===typeof a){var l=a;a=function(){var e=Vc(o);l.call(e)}}Wc(t,o,e,a)}else o=function(e,t,n,r,a){if(a){if("function"===typeof r){var i=r;r=function(){var e=Vc(o);i.call(e)}}var o=Uc(t,r,e,0,null,!1,0,"",Xc);return e._reactRootContainer=o,e[ha]=o.current,Ur(8===e.nodeType?e.parentNode:e),uc(),o}for(;a=e.lastChild;)e.removeChild(a);if("function"===typeof r){var l=r;r=function(){var e=Vc(s);l.call(e)}}var s=Mc(e,0,!1,null,0,!1,0,"",Xc);return e._reactRootContainer=s,e[ha]=s.current,Ur(8===e.nodeType?e.parentNode:e),uc((function(){Wc(t,s,n,r)})),s}(n,t,e,a,r);return Vc(o)}Gc.prototype.render=Qc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));Wc(e,t,null,null)},Gc.prototype.unmount=Qc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc((function(){Wc(null,e,null,null)})),t[ha]=null}},Gc.prototype.unstable_scheduleHydration=function(e){if(e){var t=jt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<It.length&&0!==t&&t<It[n].priority;n++);It.splice(n,0,e),0===n&&$t(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(vt(t,1|n),rc(t,Je()),0===(6&Ps)&&(Us=Je()+500,Ua()))}break;case 13:uc((function(){var t=Ri(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}})),Yc(e,1)}},St=function(e){if(13===e.tag){var t=Ri(e,134217728);if(null!==t)nc(t,e,134217728,ec());Yc(e,134217728)}},kt=function(e){if(13===e.tag){var t=tc(e),n=Ri(e,t);if(null!==n)nc(n,e,t,ec());Yc(e,t)}},jt=function(){return bt},Et=function(e,t){var n=bt;try{return bt=e,t()}finally{bt=n}},Se=function(e,t,n){switch(t){case"input":if(X(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=wa(r);if(!a)throw Error(i(90));K(r),X(r,a)}}}break;case"textarea":ie(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Pe=cc,_e=uc;var eu={usingClientEntryPoint:!1,Events:[ba,xa,wa,Ce,Ne,cc]},tu={findFiberByHostInstance:va,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nu={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=He(e))?null:e.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{at=ru.inject(nu),it=ru}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eu,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!qc(t))throw Error(i(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:S,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!qc(e))throw Error(i(299));var n=!1,r="",a=Kc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=Mc(e,1,!1,null,0,n,0,r,a),e[ha]=t.current,Ur(8===e.nodeType?e.parentNode:e),new Qc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=null===(e=He(t))?null:e.stateNode},t.flushSync=function(e){return uc(e)},t.hydrate=function(e,t,n){if(!Jc(t))throw Error(i(200));return Zc(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!qc(e))throw Error(i(405));var r=null!=n&&n.hydratedSources||null,a=!1,o="",l=Kc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Uc(t,null,e,1,null!=n?n:null,a,0,o,l),e[ha]=t.current,Ur(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Gc(t)},t.render=function(e,t,n){if(!Jc(t))throw Error(i(200));return Zc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Jc(e))throw Error(i(40));return!!e._reactRootContainer&&(uc((function(){Zc(null,null,e,!1,(function(){e._reactRootContainer=null,e[ha]=null}))})),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Jc(n))throw Error(i(200));if(null==e||void 0===e._reactInternals)throw Error(i(38));return Zc(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},853:(e,t,n)=>{"use strict";e.exports=n(234)},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var o={};e=e||[null,t({}),t([]),t(t)];for(var l=2&a&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>o[e]=()=>r[e]));return o.default=()=>r,n.d(i,o),i}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{"use strict";var e,t=n(43),r=n.t(t,2),a=n(391),i=n(950),o=n.t(i,2);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(e||(e={}));const s="popstate";function c(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function u(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function d(e,t){return{usr:e.state,key:e.key,idx:t}}function p(e,t,n,r){return void 0===n&&(n=null),l({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?h(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function f(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function h(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function m(t,n,r,a){void 0===a&&(a={});let{window:i=document.defaultView,v5Compat:o=!1}=a,u=i.history,h=e.Pop,m=null,g=y();function y(){return(u.state||{idx:null}).idx}function v(){h=e.Pop;let t=y(),n=null==t?null:t-g;g=t,m&&m({action:h,location:x.location,delta:n})}function b(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"===typeof e?e:f(e);return n=n.replace(/ $/,"%20"),c(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,u.replaceState(l({},u.state,{idx:g}),""));let x={get action(){return h},get location(){return t(i,u)},listen(e){if(m)throw new Error("A history only accepts one active listener");return i.addEventListener(s,v),m=e,()=>{i.removeEventListener(s,v),m=null}},createHref:e=>n(i,e),createURL:b,encodeLocation(e){let t=b(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(t,n){h=e.Push;let a=p(x.location,t,n);r&&r(a,t),g=y()+1;let l=d(a,g),s=x.createHref(a);try{u.pushState(l,"",s)}catch(c){if(c instanceof DOMException&&"DataCloneError"===c.name)throw c;i.location.assign(s)}o&&m&&m({action:h,location:x.location,delta:1})},replace:function(t,n){h=e.Replace;let a=p(x.location,t,n);r&&r(a,t),g=y();let i=d(a,g),l=x.createHref(a);u.replaceState(i,"",l),o&&m&&m({action:h,location:x.location,delta:0})},go:e=>u.go(e)};return x}var g;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(g||(g={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function y(e,t,n){return void 0===n&&(n="/"),v(e,t,n,!1)}function v(e,t,n,r){let a=O(("string"===typeof t?h(t):t).pathname||"/",n);if(null==a)return null;let i=b(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let o=null;for(let l=0;null==o&&l<i.length;++l){let e=z(a);o=_(i[l],e,r)}return o}function b(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let a=(e,a,i)=>{let o={relativePath:void 0===i?e.path||"":i,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};o.relativePath.startsWith("/")&&(c(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),o.relativePath=o.relativePath.slice(r.length));let l=$([r,o.relativePath]),s=n.concat(o);e.children&&e.children.length>0&&(c(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),b(e.children,t,s,l)),(null!=e.path||e.index)&&t.push({path:l,score:P(l,e.index),routesMeta:s})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of x(e.path))a(e,t,r);else a(e,t)})),t}function x(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===r.length)return a?[i,""]:[i];let o=x(r.join("/")),l=[];return l.push(...o.map((e=>""===e?i:[i,e].join("/")))),a&&l.push(...o),l.map((t=>e.startsWith("/")&&""===t?"/":t))}const w=/^:[\w-]+$/,S=3,k=2,j=1,E=10,C=-2,N=e=>"*"===e;function P(e,t){let n=e.split("/"),r=n.length;return n.some(N)&&(r+=C),t&&(r+=k),n.filter((e=>!N(e))).reduce(((e,t)=>e+(w.test(t)?S:""===t?j:E)),r)}function _(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,a={},i="/",o=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,c="/"===i?t:t.slice(i.length)||"/",u=T({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},c),d=e.route;if(!u&&s&&n&&!r[r.length-1].route.index&&(u=T({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(a,u.params),o.push({params:a,pathname:$([i,u.pathname]),pathnameBase:A($([i,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(i=$([i,u.pathnameBase]))}return o}function T(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);u("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))");let i=new RegExp(a,t?void 0:"i");return[i,r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=l[n]||"";o=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=a&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{}),pathname:i,pathnameBase:o,pattern:e}}function z(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return u(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function O(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function I(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function R(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function D(e,t){let n=R(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function L(e,t,n,r){let a;void 0===r&&(r=!1),"string"===typeof e?a=h(e):(a=l({},e),c(!a.pathname||!a.pathname.includes("?"),I("?","pathname","search",a)),c(!a.pathname||!a.pathname.includes("#"),I("#","pathname","hash",a)),c(!a.search||!a.search.includes("#"),I("#","search","hash",a)));let i,o=""===e||""===a.pathname,s=o?"/":a.pathname;if(null==s)i=n;else{let e=t.length-1;if(!r&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}i=e>=0?t[e]:"/"}let u=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"===typeof e?h(e):e,i=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:i,search:F(r),hash:M(a)}}(a,i),d=s&&"/"!==s&&s.endsWith("/"),p=(o||"."===s)&&n.endsWith("/");return u.pathname.endsWith("/")||!d&&!p||(u.pathname+="/"),u}const $=e=>e.join("/").replace(/\/\/+/g,"/"),A=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),F=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",M=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function B(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const U=["post","put","patch","delete"],W=(new Set(U),["get",...U]);new Set(W),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function V(){return V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V.apply(this,arguments)}const H=t.createContext(null);const Y=t.createContext(null);const K=t.createContext(null);const Q=t.createContext(null);const G=t.createContext({outlet:null,matches:[],isDataRoute:!1});const q=t.createContext(null);function J(){return null!=t.useContext(Q)}function X(){return J()||c(!1),t.useContext(Q).location}function Z(e){t.useContext(K).static||t.useLayoutEffect(e)}function ee(){let{isDataRoute:e}=t.useContext(G);return e?function(){let{router:e}=ue(se.UseNavigateStable),n=pe(ce.UseNavigateStable),r=t.useRef(!1);return Z((()=>{r.current=!0})),t.useCallback((function(t,a){void 0===a&&(a={}),r.current&&("number"===typeof t?e.navigate(t):e.navigate(t,V({fromRouteId:n},a)))}),[e,n])}():function(){J()||c(!1);let e=t.useContext(H),{basename:n,future:r,navigator:a}=t.useContext(K),{matches:i}=t.useContext(G),{pathname:o}=X(),l=JSON.stringify(D(i,r.v7_relativeSplatPath)),s=t.useRef(!1);return Z((()=>{s.current=!0})),t.useCallback((function(t,r){if(void 0===r&&(r={}),!s.current)return;if("number"===typeof t)return void a.go(t);let i=L(t,JSON.parse(l),o,"path"===r.relative);null==e&&"/"!==n&&(i.pathname="/"===i.pathname?n:$([n,i.pathname])),(r.replace?a.replace:a.push)(i,r.state,r)}),[n,a,l,o,e])}()}function te(e,n){let{relative:r}=void 0===n?{}:n,{future:a}=t.useContext(K),{matches:i}=t.useContext(G),{pathname:o}=X(),l=JSON.stringify(D(i,a.v7_relativeSplatPath));return t.useMemo((()=>L(e,JSON.parse(l),o,"path"===r)),[e,l,o,r])}function ne(n,r,a,i){J()||c(!1);let{navigator:o,static:l}=t.useContext(K),{matches:s}=t.useContext(G),u=s[s.length-1],d=u?u.params:{},p=(u&&u.pathname,u?u.pathnameBase:"/");u&&u.route;let f,m=X();if(r){var g;let e="string"===typeof r?h(r):r;"/"===p||(null==(g=e.pathname)?void 0:g.startsWith(p))||c(!1),f=e}else f=m;let v=f.pathname||"/",b=v;if("/"!==p){let e=p.replace(/^\//,"").split("/");b="/"+v.replace(/^\//,"").split("/").slice(e.length).join("/")}let x=!l&&a&&a.matches&&a.matches.length>0?a.matches:y(n,{pathname:b});let w=le(x&&x.map((e=>Object.assign({},e,{params:Object.assign({},d,e.params),pathname:$([p,o.encodeLocation?o.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?p:$([p,o.encodeLocation?o.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),s,a,i);return r&&w?t.createElement(Q.Provider,{value:{location:V({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:e.Pop}},w):w}function re(){let e=function(){var e;let n=t.useContext(q),r=de(ce.UseRouteError),a=pe(ce.UseRouteError);if(void 0!==n)return n;return null==(e=r.errors)?void 0:e[a]}(),n=B(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:a};return t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),r?t.createElement("pre",{style:i},r):null,null)}const ae=t.createElement(re,null);class ie extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(G.Provider,{value:this.props.routeContext},t.createElement(q.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function oe(e){let{routeContext:n,match:r,children:a}=e,i=t.useContext(H);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),t.createElement(G.Provider,{value:n},a)}function le(e,n,r,a){var i;if(void 0===n&&(n=[]),void 0===r&&(r=null),void 0===a&&(a=null),null==e){var o;if(!r)return null;if(r.errors)e=r.matches;else{if(!(null!=(o=a)&&o.v7_partialHydration&&0===n.length&&!r.initialized&&r.matches.length>0))return null;e=r.matches}}let l=e,s=null==(i=r)?void 0:i.errors;if(null!=s){let e=l.findIndex((e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id])));e>=0||c(!1),l=l.slice(0,Math.min(l.length,e+1))}let u=!1,d=-1;if(r&&a&&a.v7_partialHydration)for(let t=0;t<l.length;t++){let e=l[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=t),e.route.id){let{loaderData:t,errors:n}=r,a=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||a){u=!0,l=d>=0?l.slice(0,d+1):[l[0]];break}}}return l.reduceRight(((e,a,i)=>{let o,c=!1,p=null,f=null;var h;r&&(o=s&&a.route.id?s[a.route.id]:void 0,p=a.route.errorElement||ae,u&&(d<0&&0===i?(h="route-fallback",!1||fe[h]||(fe[h]=!0),c=!0,f=null):d===i&&(c=!0,f=a.route.hydrateFallbackElement||null)));let m=n.concat(l.slice(0,i+1)),g=()=>{let n;return n=o?p:c?f:a.route.Component?t.createElement(a.route.Component,null):a.route.element?a.route.element:e,t.createElement(oe,{match:a,routeContext:{outlet:e,matches:m,isDataRoute:null!=r},children:n})};return r&&(a.route.ErrorBoundary||a.route.errorElement||0===i)?t.createElement(ie,{location:r.location,revalidation:r.revalidation,component:p,error:o,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()}),null)}var se=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(se||{}),ce=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ce||{});function ue(e){let n=t.useContext(H);return n||c(!1),n}function de(e){let n=t.useContext(Y);return n||c(!1),n}function pe(e){let n=function(){let e=t.useContext(G);return e||c(!1),e}(),r=n.matches[n.matches.length-1];return r.route.id||c(!1),r.route.id}const fe={};function he(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}r.startTransition;function me(e){c(!1)}function ge(n){let{basename:r="/",children:a=null,location:i,navigationType:o=e.Pop,navigator:l,static:s=!1,future:u}=n;J()&&c(!1);let d=r.replace(/^\/*/,"/"),p=t.useMemo((()=>({basename:d,navigator:l,static:s,future:V({v7_relativeSplatPath:!1},u)})),[d,u,l,s]);"string"===typeof i&&(i=h(i));let{pathname:f="/",search:m="",hash:g="",state:y=null,key:v="default"}=i,b=t.useMemo((()=>{let e=O(f,d);return null==e?null:{location:{pathname:e,search:m,hash:g,state:y,key:v},navigationType:o}}),[d,f,m,g,y,v,o]);return null==b?null:t.createElement(K.Provider,{value:p},t.createElement(Q.Provider,{children:a,value:b}))}function ye(e){let{children:t,location:n}=e;return ne(ve(t),n)}new Promise((()=>{}));t.Component;function ve(e,n){void 0===n&&(n=[]);let r=[];return t.Children.forEach(e,((e,a)=>{if(!t.isValidElement(e))return;let i=[...n,a];if(e.type===t.Fragment)return void r.push.apply(r,ve(e.props.children,i));e.type!==me&&c(!1),e.props.index&&e.props.children&&c(!1);let o={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(o.children=ve(e.props.children,i)),r.push(o)})),r}function be(){return be=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},be.apply(this,arguments)}function xe(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const we=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(Go){}new Map;const Se=r.startTransition;o.flushSync,r.useId;function ke(e){let{basename:n,children:r,future:a,window:i}=e,o=t.useRef();var l;null==o.current&&(o.current=(void 0===(l={window:i,v5Compat:!0})&&(l={}),m((function(e,t){let{pathname:n="/",search:r="",hash:a=""}=h(e.location.hash.substr(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),p("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n)}return r+"#"+("string"===typeof t?t:f(t))}),(function(e,t){u("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")}),l)));let s=o.current,[c,d]=t.useState({action:s.action,location:s.location}),{v7_startTransition:g}=a||{},y=t.useCallback((e=>{g&&Se?Se((()=>d(e))):d(e)}),[d,g]);return t.useLayoutEffect((()=>s.listen(y)),[s,y]),t.useEffect((()=>he(a)),[a]),t.createElement(ge,{basename:n,children:r,location:c.location,navigationType:c.action,navigator:s,future:a})}const je="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,Ee=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ce=t.forwardRef((function(e,n){let r,{onClick:a,relative:i,reloadDocument:o,replace:l,state:s,target:u,to:d,preventScrollReset:p,viewTransition:h}=e,m=xe(e,we),{basename:g}=t.useContext(K),y=!1;if("string"===typeof d&&Ee.test(d)&&(r=d,je))try{let e=new URL(window.location.href),t=d.startsWith("//")?new URL(e.protocol+d):new URL(d),n=O(t.pathname,g);t.origin===e.origin&&null!=n?d=n+t.search+t.hash:y=!0}catch(Go){}let v=function(e,n){let{relative:r}=void 0===n?{}:n;J()||c(!1);let{basename:a,navigator:i}=t.useContext(K),{hash:o,pathname:l,search:s}=te(e,{relative:r}),u=l;return"/"!==a&&(u="/"===l?a:$([a,l])),i.createHref({pathname:u,search:s,hash:o})}(d,{relative:i}),b=function(e,n){let{target:r,replace:a,state:i,preventScrollReset:o,relative:l,viewTransition:s}=void 0===n?{}:n,c=ee(),u=X(),d=te(e,{relative:l});return t.useCallback((t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,r)){t.preventDefault();let n=void 0!==a?a:f(u)===f(d);c(e,{replace:n,state:i,preventScrollReset:o,relative:l,viewTransition:s})}}),[u,c,d,a,i,r,e,o,l,s])}(d,{replace:l,state:s,target:u,preventScrollReset:p,relative:i,viewTransition:h});return t.createElement("a",be({},m,{href:r||v,onClick:y||o?a:function(e){a&&a(e),e.defaultPrevented||b(e)},ref:n,target:u}))}));var Ne,Pe;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ne||(Ne={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Pe||(Pe={}));var _e={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Te=t.createContext&&t.createContext(_e),ze=function(){return ze=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},ze.apply(this,arguments)},Oe=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function Ie(e){return e&&e.map((function(e,n){return t.createElement(e.tag,ze({key:n},e.attr),Ie(e.child))}))}function Re(e){return function(n){return t.createElement(De,ze({attr:ze({},e.attr)},n),Ie(e.child))}}function De(e){var n=function(n){var r,a=e.attr,i=e.size,o=e.title,l=Oe(e,["attr","size","title"]),s=i||n.size||"1em";return n.className&&(r=n.className),e.className&&(r=(r?r+" ":"")+e.className),t.createElement("svg",ze({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,a,l,{className:r,style:ze(ze({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&t.createElement("title",null,o),e.children)};return void 0!==Te?t.createElement(Te.Consumer,null,(function(e){return n(e)})):n(_e)}function Le(e){return Re({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"}}]})(e)}function $e(e){return Re({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"}}]})(e)}function Ae(e){return Re({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"}}]})(e)}function Fe(e){return Re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}}]})(e)}function Me(e){return Re({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"}}]})(e)}function Be(e){return Re({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"}}]})(e)}function Ue(e){return Re({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M127.1 146.5c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C111.8 5.9 105 0 96.8 0H80.4C70.6 0 63 8.5 64.1 18c3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zm112 0c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C223.8 5.9 217 0 208.8 0h-16.4c-9.8 0-17.5 8.5-16.3 18 3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zM400 192H32c-17.7 0-32 14.3-32 32v192c0 53 43 96 96 96h192c53 0 96-43 96-96h16c61.8 0 112-50.2 112-112s-50.2-112-112-112zm0 160h-16v-96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48z"}}]})(e)}var We=n(579);const Ve=()=>{console.log("SimpleLandingPage component is rendering");const[e,n]=(0,t.useState)(!1),[r,a]=(0,t.useState)(!1);(0,t.useEffect)((()=>{console.log("SimpleLandingPage useEffect is running");const e=()=>{window.scrollY>50?n(!0):n(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]);return(0,We.jsxs)(We.Fragment,{children:[(0,We.jsx)("nav",{className:"navbar "+(e?"scrolled":""),children:(0,We.jsxs)("div",{className:"container navbar-container",children:[(0,We.jsx)(Ce,{to:"/",className:"navbar-logo",children:(0,We.jsx)("img",{src:"/kairos-landing-page/static/icons/kairos-logo.svg",alt:"\u039a\u03b1\u03b9\u03c1\u03cc\u03c2"})}),(0,We.jsx)("button",{className:"mobile-toggle",onClick:()=>{a(!r)},children:(0,We.jsx)("i",{className:r?"fas fa-times":"fas fa-bars"})}),(0,We.jsxs)("div",{className:"navbar-links "+(r?"active":""),children:[(0,We.jsx)("a",{href:"#problem",className:"navbar-link",children:"Problem"}),(0,We.jsx)("a",{href:"#solution",className:"navbar-link",children:"Solution"}),(0,We.jsx)("a",{href:"#products",className:"navbar-link",children:"Products"}),(0,We.jsx)("a",{href:"#contact",className:"navbar-link",children:"Contact"}),(0,We.jsxs)("a",{href:"https://ko-fi.com/kairosaijournal",className:"kofi-button",target:"_blank",rel:"noreferrer",children:[(0,We.jsx)(Ue,{})," Support on Ko-Fi"]}),(0,We.jsxs)(Ce,{to:"/nda",className:"cta-button",children:[(0,We.jsx)(Me,{})," Get Confidential Info"]})]})]})}),(0,We.jsx)("section",{className:"hero",children:(0,We.jsx)("div",{className:"container",children:(0,We.jsxs)("div",{className:"hero-content",children:[(0,We.jsxs)("div",{className:"hero-text",children:[(0,We.jsx)("h1",{className:"hero-title fade-in",children:"Ancient Wisdom Meets AI"}),(0,We.jsx)("div",{className:"hero-subtitle fade-in delay-100",children:"Bridging traditional journaling with AI-powered insights"}),(0,We.jsx)("p",{className:"hero-description fade-in delay-200",children:"Transform your handwritten reflections into personalized growth opportunities with our NFC-enabled journals and AI analysis."}),(0,We.jsxs)("div",{className:"hero-buttons",children:[(0,We.jsxs)("a",{href:"#problem",className:"primary-button fade-in delay-300",children:[(0,We.jsx)(Le,{})," Learn More"]}),(0,We.jsxs)(Ce,{to:"/nda",className:"secondary-button fade-in delay-400",children:[(0,We.jsx)(Me,{})," Get Confidential Info"]}),(0,We.jsxs)("a",{href:"https://ko-fi.com/kairosaijournal",className:"outline-button fade-in delay-500",target:"_blank",rel:"noreferrer",children:[(0,We.jsx)(Ue,{})," Support Our Work"]})]})]}),(0,We.jsx)("div",{className:"hero-image fade-in delay-300",children:(0,We.jsx)("img",{src:"/kairos-landing-page/static/images/product/journal_essential.jpg",alt:"\u039a\u03b1\u03b9\u03c1\u03cc\u03c2 Smart Journal"})})]})})}),(0,We.jsx)("section",{id:"problem",className:"section",children:(0,We.jsxs)("div",{className:"container",children:[(0,We.jsx)("h2",{className:"section-title",children:"The Personal Growth Challenge"}),(0,We.jsx)("p",{className:"section-subtitle",children:"In our increasingly digital world, people are struggling to maintain consistent journaling practices while also managing screen fatigue."}),(0,We.jsxs)("div",{className:"problem-grid",children:[(0,We.jsxs)("div",{className:"problem-card fade-in",children:[(0,We.jsx)("div",{className:"problem-icon",children:(0,We.jsx)($e,{})}),(0,We.jsx)("h3",{className:"problem-title",children:"Abandoned Journals"}),(0,We.jsx)("p",{className:"problem-description",children:"80% of journals are abandoned within a month of purchase. Users lack structure and guidance to maintain the habit."})]}),(0,We.jsxs)("div",{className:"problem-card fade-in delay-100",children:[(0,We.jsx)("div",{className:"problem-icon",children:(0,We.jsx)(Ae,{})}),(0,We.jsx)("p",{className:"problem-title",children:"Lost Insights"}),(0,We.jsx)("p",{className:"problem-description",children:"90% of handwritten entries are never revisited for patterns. Valuable self-knowledge remains buried in unanalyzed pages."})]}),(0,We.jsxs)("div",{className:"problem-card fade-in delay-200",children:[(0,We.jsx)("div",{className:"problem-icon",children:(0,We.jsx)(Be,{})}),(0,We.jsx)("h3",{className:"problem-title",children:"Digital Dilemma"}),(0,We.jsx)("p",{className:"problem-description",children:"Digital journaling increases screen time and anxiety. We spend 7+ hours daily on screens already, yet handwriting offers neurological benefits."})]})]})]})}),(0,We.jsx)("section",{id:"solution",className:"section section-colored",children:(0,We.jsxs)("div",{className:"container",children:[(0,We.jsx)("h2",{className:"section-title",children:"Our Solution"}),(0,We.jsx)("p",{className:"section-subtitle",children:"\u039a\u03b1\u03b9\u03c1\u03cc\u03c2 bridges the gap between traditional journaling and AI-powered insights, creating a seamless experience that honors both worlds."}),(0,We.jsxs)("div",{className:"solution-container",children:[(0,We.jsx)("div",{className:"solution-image fade-in",children:(0,We.jsx)("img",{src:"/kairos-landing-page/static/images/product/nfc_scanning.jpg",alt:"NFC Scanning"})}),(0,We.jsxs)("div",{className:"solution-content",children:[(0,We.jsx)("h3",{className:"solution-title fade-in",children:"The Physical-Digital Bridge"}),(0,We.jsx)("p",{className:"solution-description fade-in delay-100",children:"Our innovative approach combines the best of both worlds - the therapeutic benefits of handwriting with the analytical power of AI."}),(0,We.jsxs)("div",{className:"solution-features",children:[(0,We.jsxs)("div",{className:"feature-item fade-in delay-200",children:[(0,We.jsx)("div",{className:"feature-icon",children:(0,We.jsx)(Fe,{})}),(0,We.jsxs)("div",{className:"feature-text",children:[(0,We.jsx)("h4",{className:"feature-title",children:"Premium NFC Journals"}),(0,We.jsx)("p",{className:"feature-description",children:"Beautifully crafted journals with embedded NFC technology."})]})]}),(0,We.jsxs)("div",{className:"feature-item fade-in delay-300",children:[(0,We.jsx)("div",{className:"feature-icon",children:(0,We.jsx)(Fe,{})}),(0,We.jsxs)("div",{className:"feature-text",children:[(0,We.jsx)("h4",{className:"feature-title",children:"AI Insight Analysis"}),(0,We.jsx)("p",{className:"feature-description",children:"Advanced pattern recognition identifies growth opportunities."})]})]}),(0,We.jsxs)("div",{className:"feature-item fade-in delay-400",children:[(0,We.jsx)("div",{className:"feature-icon",children:(0,We.jsx)(Fe,{})}),(0,We.jsxs)("div",{className:"feature-text",children:[(0,We.jsx)("h4",{className:"feature-title",children:"Structured Journeys"}),(0,We.jsx)("p",{className:"feature-description",children:"Guided reflection paths for consistent practice and progress."})]})]})]}),(0,We.jsxs)(Ce,{to:"/nda",className:"primary-button fade-in delay-500",children:[(0,We.jsx)(Me,{})," Learn More"]})]})]})]})}),(0,We.jsx)("section",{id:"products",className:"section",children:(0,We.jsxs)("div",{className:"container",children:[(0,We.jsxs)("div",{className:"products-heading",children:[(0,We.jsx)("h2",{className:"section-title",children:"Our Products"}),(0,We.jsx)("p",{className:"section-subtitle",children:"Choose the journaling experience that fits your needs, from essential to premium."})]}),(0,We.jsxs)("div",{className:"product-grid",children:[(0,We.jsxs)("div",{className:"product-card fade-in",children:[(0,We.jsx)("div",{className:"product-image",children:(0,We.jsx)("img",{src:"/kairos-landing-page/static/images/product/journal_essential.jpg",alt:"Essential Journal"})}),(0,We.jsxs)("div",{className:"product-content",children:[(0,We.jsx)("div",{className:"product-category",children:"Basic"}),(0,We.jsx)("h3",{className:"product-title",children:"\u039a\u03b1\u03b9\u03c1\u03cc\u03c2 Essential"}),(0,We.jsx)("div",{className:"product-price",children:"\u20ac89"}),(0,We.jsx)("p",{className:"product-description",children:"Perfect entry point with leatherette journal, 200 pages, and 1-month complimentary subscription."}),(0,We.jsx)(Ce,{to:"/nda",className:"product-button",children:"Learn More"})]})]}),(0,We.jsxs)("div",{className:"product-card fade-in delay-100",children:[(0,We.jsx)("div",{className:"product-image",children:(0,We.jsx)("img",{src:"/kairos-landing-page/static/images/product/journal_insight.jpg",alt:"Insight Journal"})}),(0,We.jsxs)("div",{className:"product-content",children:[(0,We.jsx)("div",{className:"product-category",children:"Advanced"}),(0,We.jsx)("h3",{className:"product-title",children:"\u039a\u03b1\u03b9\u03c1\u03cc\u03c2 Insight"}),(0,We.jsx)("div",{className:"product-price",children:"\u20ac149"}),(0,We.jsx)("p",{className:"product-description",children:"Premium leather journal with brass pen, specialty nibs, and 3-month complimentary subscription."}),(0,We.jsx)(Ce,{to:"/nda",className:"product-button",children:"Learn More"})]})]}),(0,We.jsxs)("div",{className:"product-card fade-in delay-200",children:[(0,We.jsx)("div",{className:"product-image",children:(0,We.jsx)("img",{src:"/kairos-landing-page/static/images/product/journal_legacy.jpg",alt:"Legacy Journal"})}),(0,We.jsxs)("div",{className:"product-content",children:[(0,We.jsx)("div",{className:"product-category",children:"Premium"}),(0,We.jsx)("h3",{className:"product-title",children:"\u039a\u03b1\u03b9\u03c1\u03cc\u03c2 Legacy"}),(0,We.jsx)("div",{className:"product-price",children:"\u20ac249"}),(0,We.jsx)("p",{className:"product-description",children:"Exquisite hand-bound leather journal with complete journaling ritual kit and 6-month complimentary subscription."}),(0,We.jsx)(Ce,{to:"/nda",className:"product-button",children:"Learn More"})]})]})]}),(0,We.jsxs)("div",{className:"subscription-teaser",style:{textAlign:"center",marginTop:"40px",padding:"30px",backgroundColor:"rgba(13, 123, 62, 0.1)",borderRadius:"15px"},children:[(0,We.jsx)("h3",{style:{marginBottom:"15px",color:"#0D7B3E"},children:"Digital Subscription Plans"}),(0,We.jsx)("p",{style:{maxWidth:"800px",margin:"0 auto 20px"},children:"After your complimentary period, continue your journaling journey with our flexible subscription options starting at \u20ac11.99/month."}),(0,We.jsx)(Ce,{to:"/nda",className:"secondary-button",children:"View Subscription Details"})]})]})}),(0,We.jsx)("section",{className:"section section-colored",children:(0,We.jsx)("div",{className:"container",children:(0,We.jsxs)("div",{className:"kofi-container",children:[(0,We.jsx)("h2",{className:"kofi-heading",children:"Support Our Development"}),(0,We.jsx)("p",{className:"kofi-description",children:"Help us bring \u039a\u03b1\u03b9\u03c1\u03cc\u03c2 to life by supporting our development efforts. Every contribution helps us create a better product."}),(0,We.jsx)("iframe",{id:"kofiframe",src:"https://ko-fi.com/kairosaijournal/?hidefeed=true&widget=true&embed=true&preview=true",style:{border:"none",width:"100%",padding:"4px",background:"#f9f9f9",borderRadius:"8px",height:"550px"},title:"ko-fi widget"})]})})}),(0,We.jsx)("section",{id:"contact",className:"section",children:(0,We.jsxs)("div",{className:"container",children:[(0,We.jsx)("h2",{className:"section-title",children:"Contact Us"}),(0,We.jsx)("p",{className:"section-subtitle",children:"Have questions about \u039a\u03b1\u03b9\u03c1\u03cc\u03c2? We'd love to hear from you."}),(0,We.jsxs)("div",{className:"contact-container",children:[(0,We.jsxs)("div",{className:"contact-info",children:[(0,We.jsx)("h3",{className:"contact-title fade-in",children:"Get in Touch"}),(0,We.jsx)("p",{className:"contact-description fade-in delay-100",children:"Schedule a call to discuss how \u039a\u03b1\u03b9\u03c1\u03cc\u03c2 is transforming personal growth through the bridge between ancient wisdom and AI."}),(0,We.jsxs)("div",{className:"contact-links",children:[(0,We.jsxs)("a",{href:"mailto:hello@kairos-journal.com",className:"contact-link fade-in delay-200",children:[(0,We.jsx)("span",{className:"contact-icon",children:(0,We.jsx)("i",{className:"fas fa-envelope"})}),"hello@kairos-journal.com"]}),(0,We.jsxs)(Ce,{to:"/nda",className:"primary-button fade-in delay-300",children:[(0,We.jsx)(Me,{})," Access Confidential Info"]})]})]}),(0,We.jsx)("div",{className:"calendly-container",style:{width:"100%",height:"700px",overflow:"hidden",border:"none",borderRadius:"8px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)",marginTop:"20px"},children:(0,We.jsx)("iframe",{src:"https://calendly.com/georgieslab/google-meet-jump-in",width:"100%",height:"100%",frameBorder:"0",title:"Schedule Meeting",style:{border:"none"}})})]})]})}),(0,We.jsx)("footer",{className:"footer",children:(0,We.jsxs)("div",{className:"container",children:[(0,We.jsxs)("div",{className:"footer-container",children:[(0,We.jsxs)("div",{children:[(0,We.jsxs)("div",{className:"footer-logo",children:[(0,We.jsx)("img",{src:"/kairos-landing-page/static/icons/kairos-logo.svg",alt:"\u039a\u03b1\u03b9\u03c1\u03cc\u03c2"}),"\u039a\u03b1\u03b9\u03c1\u03cc\u03c2"]}),(0,We.jsx)("p",{className:"footer-description",children:"Bridging traditional journaling with AI-powered insights to transform personal reflection into structured growth."})]}),(0,We.jsxs)("div",{children:[(0,We.jsx)("h3",{className:"footer-title",children:"Quick Links"}),(0,We.jsxs)("div",{className:"footer-links",children:[(0,We.jsx)("a",{href:"#problem",className:"footer-link",children:"Problem"}),(0,We.jsx)("a",{href:"#solution",className:"footer-link",children:"Solution"}),(0,We.jsx)("a",{href:"#products",className:"footer-link",children:"Products"}),(0,We.jsx)("a",{href:"#contact",className:"footer-link",children:"Contact"})]})]}),(0,We.jsxs)("div",{children:[(0,We.jsx)("h3",{className:"footer-title",children:"Legal"}),(0,We.jsxs)("div",{className:"footer-links",children:[(0,We.jsx)(Ce,{to:"/privacy-policy",className:"footer-link",children:"Privacy Policy"}),(0,We.jsx)(Ce,{to:"/terms-of-service",className:"footer-link",children:"Terms of Service"}),(0,We.jsx)(Ce,{to:"/confidentiality",className:"footer-link",children:"Confidentiality"})]})]})]}),(0,We.jsxs)("div",{className:"footer-bottom",children:["\xa9 ",(new Date).getFullYear()," \u039a\u03b1\u03b9\u03c1\u03cc\u03c2. All rights reserved."]})]})})]})};var He=function(){return He=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},He.apply(this,arguments)};Object.create;function Ye(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var Ke=n(324),Qe=n.n(Ke),Ge="-ms-",qe="-moz-",Je="-webkit-",Xe="comm",Ze="rule",et="decl",tt="@keyframes",nt=Math.abs,rt=String.fromCharCode,at=Object.assign;function it(e){return e.trim()}function ot(e,t){return(e=t.exec(e))?e[0]:e}function lt(e,t,n){return e.replace(t,n)}function st(e,t,n){return e.indexOf(t,n)}function ct(e,t){return 0|e.charCodeAt(t)}function ut(e,t,n){return e.slice(t,n)}function dt(e){return e.length}function pt(e){return e.length}function ft(e,t){return t.push(e),e}function ht(e,t){return e.filter((function(e){return!ot(e,t)}))}var mt=1,gt=1,yt=0,vt=0,bt=0,xt="";function wt(e,t,n,r,a,i,o,l){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:mt,column:gt,length:o,return:"",siblings:l}}function St(e,t){return at(wt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function kt(e){for(;e.root;)e=St(e.root,{children:[e]});ft(e,e.siblings)}function jt(){return bt=vt>0?ct(xt,--vt):0,gt--,10===bt&&(gt=1,mt--),bt}function Et(){return bt=vt<yt?ct(xt,vt++):0,gt++,10===bt&&(gt=1,mt++),bt}function Ct(){return ct(xt,vt)}function Nt(){return vt}function Pt(e,t){return ut(xt,e,t)}function _t(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Tt(e){return mt=gt=1,yt=dt(xt=e),vt=0,[]}function zt(e){return xt="",e}function Ot(e){return it(Pt(vt-1,Dt(91===e?e+2:40===e?e+1:e)))}function It(e){for(;(bt=Ct())&&bt<33;)Et();return _t(e)>2||_t(bt)>3?"":" "}function Rt(e,t){for(;--t&&Et()&&!(bt<48||bt>102||bt>57&&bt<65||bt>70&&bt<97););return Pt(e,Nt()+(t<6&&32==Ct()&&32==Et()))}function Dt(e){for(;Et();)switch(bt){case e:return vt;case 34:case 39:34!==e&&39!==e&&Dt(bt);break;case 40:41===e&&Dt(e);break;case 92:Et()}return vt}function Lt(e,t){for(;Et()&&e+bt!==57&&(e+bt!==84||47!==Ct()););return"/*"+Pt(t,vt-1)+"*"+rt(47===e?e:Et())}function $t(e){for(;!_t(Ct());)Et();return Pt(e,vt)}function At(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Ft(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case et:return e.return=e.return||e.value;case Xe:return"";case tt:return e.return=e.value+"{"+At(e.children,r)+"}";case Ze:if(!dt(e.value=e.props.join(",")))return""}return dt(n=At(e.children,r))?e.return=e.value+"{"+n+"}":""}function Mt(e,t,n){switch(function(e,t){return 45^ct(e,0)?(((t<<2^ct(e,0))<<2^ct(e,1))<<2^ct(e,2))<<2^ct(e,3):0}(e,t)){case 5103:return Je+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Je+e+e;case 4789:return qe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Je+e+qe+e+Ge+e+e;case 5936:switch(ct(e,t+11)){case 114:return Je+e+Ge+lt(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Je+e+Ge+lt(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Je+e+Ge+lt(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Je+e+Ge+e+e;case 6165:return Je+e+Ge+"flex-"+e+e;case 5187:return Je+e+lt(e,/(\w+).+(:[^]+)/,Je+"box-$1$2"+Ge+"flex-$1$2")+e;case 5443:return Je+e+Ge+"flex-item-"+lt(e,/flex-|-self/g,"")+(ot(e,/flex-|baseline/)?"":Ge+"grid-row-"+lt(e,/flex-|-self/g,""))+e;case 4675:return Je+e+Ge+"flex-line-pack"+lt(e,/align-content|flex-|-self/g,"")+e;case 5548:return Je+e+Ge+lt(e,"shrink","negative")+e;case 5292:return Je+e+Ge+lt(e,"basis","preferred-size")+e;case 6060:return Je+"box-"+lt(e,"-grow","")+Je+e+Ge+lt(e,"grow","positive")+e;case 4554:return Je+lt(e,/([^-])(transform)/g,"$1"+Je+"$2")+e;case 6187:return lt(lt(lt(e,/(zoom-|grab)/,Je+"$1"),/(image-set)/,Je+"$1"),e,"")+e;case 5495:case 3959:return lt(e,/(image-set\([^]*)/,Je+"$1$`$1");case 4968:return lt(lt(e,/(.+:)(flex-)?(.*)/,Je+"box-pack:$3"+Ge+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Je+e+e;case 4200:if(!ot(e,/flex-|baseline/))return Ge+"grid-column-align"+ut(e,t)+e;break;case 2592:case 3360:return Ge+lt(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,ot(e.props,/grid-\w+-end/)}))?~st(e+(n=n[t].value),"span",0)?e:Ge+lt(e,"-start","")+e+Ge+"grid-row-span:"+(~st(n,"span",0)?ot(n,/\d+/):+ot(n,/\d+/)-+ot(e,/\d+/))+";":Ge+lt(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return ot(e.props,/grid-\w+-start/)}))?e:Ge+lt(lt(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return lt(e,/(.+)-inline(.+)/,Je+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(dt(e)-1-t>6)switch(ct(e,t+1)){case 109:if(45!==ct(e,t+4))break;case 102:return lt(e,/(.+:)(.+)-([^]+)/,"$1"+Je+"$2-$3$1"+qe+(108==ct(e,t+3)?"$3":"$2-$3"))+e;case 115:return~st(e,"stretch",0)?Mt(lt(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return lt(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,a,i,o,l){return Ge+n+":"+r+l+(a?Ge+n+"-span:"+(i?o:+o-+r)+l:"")+e}));case 4949:if(121===ct(e,t+6))return lt(e,":",":"+Je)+e;break;case 6444:switch(ct(e,45===ct(e,14)?18:11)){case 120:return lt(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Je+(45===ct(e,14)?"inline-":"")+"box$3$1"+Je+"$2$3$1"+Ge+"$2box$3")+e;case 100:return lt(e,":",":"+Ge)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return lt(e,"scroll-","scroll-snap-")+e}return e}function Bt(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case et:return void(e.return=Mt(e.value,e.length,n));case tt:return At([St(e,{value:lt(e.value,"@","@"+Je)})],r);case Ze:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(ot(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":kt(St(e,{props:[lt(t,/:(read-\w+)/,":-moz-$1")]})),kt(St(e,{props:[t]})),at(e,{props:ht(n,r)});break;case"::placeholder":kt(St(e,{props:[lt(t,/:(plac\w+)/,":"+Je+"input-$1")]})),kt(St(e,{props:[lt(t,/:(plac\w+)/,":-moz-$1")]})),kt(St(e,{props:[lt(t,/:(plac\w+)/,Ge+"input-$1")]})),kt(St(e,{props:[t]})),at(e,{props:ht(n,r)})}return""}))}}function Ut(e){return zt(Wt("",null,null,null,[""],e=Tt(e),0,[0],e))}function Wt(e,t,n,r,a,i,o,l,s){for(var c=0,u=0,d=o,p=0,f=0,h=0,m=1,g=1,y=1,v=0,b="",x=a,w=i,S=r,k=b;g;)switch(h=v,v=Et()){case 40:if(108!=h&&58==ct(k,d-1)){-1!=st(k+=lt(Ot(v),"&","&\f"),"&\f",nt(c?l[c-1]:0))&&(y=-1);break}case 34:case 39:case 91:k+=Ot(v);break;case 9:case 10:case 13:case 32:k+=It(h);break;case 92:k+=Rt(Nt()-1,7);continue;case 47:switch(Ct()){case 42:case 47:ft(Ht(Lt(Et(),Nt()),t,n,s),s);break;default:k+="/"}break;case 123*m:l[c++]=dt(k)*y;case 125*m:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:-1==y&&(k=lt(k,/\f/g,"")),f>0&&dt(k)-d&&ft(f>32?Yt(k+";",r,n,d-1,s):Yt(lt(k," ","")+";",r,n,d-2,s),s);break;case 59:k+=";";default:if(ft(S=Vt(k,t,n,c,u,a,l,b,x=[],w=[],d,i),i),123===v)if(0===u)Wt(k,t,S,S,x,i,d,l,w);else switch(99===p&&110===ct(k,3)?100:p){case 100:case 108:case 109:case 115:Wt(e,S,S,r&&ft(Vt(e,S,S,0,0,a,l,b,a,x=[],d,w),w),a,w,d,l,r?x:w);break;default:Wt(k,S,S,S,[""],w,0,l,w)}}c=u=f=0,m=y=1,b=k="",d=o;break;case 58:d=1+dt(k),f=h;default:if(m<1)if(123==v)--m;else if(125==v&&0==m++&&125==jt())continue;switch(k+=rt(v),v*m){case 38:y=u>0?1:(k+="\f",-1);break;case 44:l[c++]=(dt(k)-1)*y,y=1;break;case 64:45===Ct()&&(k+=Ot(Et())),p=Ct(),u=d=dt(b=k+=$t(Nt())),v++;break;case 45:45===h&&2==dt(k)&&(m=0)}}return i}function Vt(e,t,n,r,a,i,o,l,s,c,u,d){for(var p=a-1,f=0===a?i:[""],h=pt(f),m=0,g=0,y=0;m<r;++m)for(var v=0,b=ut(e,p+1,p=nt(g=o[m])),x=e;v<h;++v)(x=it(g>0?f[v]+" "+b:lt(b,/&\f/g,f[v])))&&(s[y++]=x);return wt(e,t,n,0===a?Ze:l,s,c,u,d)}function Ht(e,t,n,r){return wt(e,t,n,Xe,rt(bt),ut(e,2,-2),0,r)}function Yt(e,t,n,r,a){return wt(e,t,n,et,ut(e,0,r),ut(e,r+1,-1),r,a)}var Kt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Qt="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/kairos-landing-page",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/kairos-landing-page",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/kairos-landing-page",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",Gt="active",qt="data-styled-version",Jt="6.1.16",Xt="/*!sc*/\n",Zt="undefined"!=typeof window&&"HTMLElement"in window,en=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/kairos-landing-page",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/kairos-landing-page",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/kairos-landing-page",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/kairos-landing-page",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/kairos-landing-page",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/kairos-landing-page",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/kairos-landing-page",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/kairos-landing-page",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/kairos-landing-page",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/kairos-landing-page",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),tn={},nn=(new Set,Object.freeze([])),rn=Object.freeze({});function an(e,t,n){return void 0===n&&(n=rn),e.theme!==n.theme&&e.theme||t||n.theme}var on=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ln=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,sn=/(^-|-$)/g;function cn(e){return e.replace(ln,"-").replace(sn,"")}var un=/(a)(d)/gi,dn=function(e){return String.fromCharCode(e+(e>25?39:97))};function pn(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=dn(t%52)+n;return(dn(t%52)+n).replace(un,"$1-$2")}var fn,hn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},mn=function(e){return hn(5381,e)};function gn(e){return pn(mn(e)>>>0)}function yn(e){return e.displayName||e.name||"Component"}function vn(e){return"string"==typeof e&&!0}var bn="function"==typeof Symbol&&Symbol.for,xn=bn?Symbol.for("react.memo"):60115,wn=bn?Symbol.for("react.forward_ref"):60112,Sn={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},kn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},jn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},En=((fn={})[wn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},fn[xn]=jn,fn);function Cn(e){return("type"in(t=e)&&t.type.$$typeof)===xn?jn:"$$typeof"in e?En[e.$$typeof]:Sn;var t}var Nn=Object.defineProperty,Pn=Object.getOwnPropertyNames,_n=Object.getOwnPropertySymbols,Tn=Object.getOwnPropertyDescriptor,zn=Object.getPrototypeOf,On=Object.prototype;function In(e,t,n){if("string"!=typeof t){if(On){var r=zn(t);r&&r!==On&&In(e,r,n)}var a=Pn(t);_n&&(a=a.concat(_n(t)));for(var i=Cn(e),o=Cn(t),l=0;l<a.length;++l){var s=a[l];if(!(s in kn||n&&n[s]||o&&s in o||i&&s in i)){var c=Tn(t,s);try{Nn(e,s,c)}catch(e){}}}}return e}function Rn(e){return"function"==typeof e}function Dn(e){return"object"==typeof e&&"styledComponentId"in e}function Ln(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function $n(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function An(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Fn(e,t,n){if(void 0===n&&(n=!1),!n&&!An(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Fn(e[r],t[r]);else if(An(t))for(var r in t)e[r]=Fn(e[r],t[r]);return e}function Mn(e,t){Object.defineProperty(e,"toString",{value:t})}function Bn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Un=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw Bn(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var i=r;i<a;i++)this.groupSizes[i]=0}for(var o=this.indexOfGroup(e+1),l=(i=0,t.length);i<l;i++)this.tag.insertRule(o,t[i])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,i=r;i<a;i++)t+="".concat(this.tag.getRule(i)).concat(Xt);return t},e}(),Wn=new Map,Vn=new Map,Hn=1,Yn=function(e){if(Wn.has(e))return Wn.get(e);for(;Vn.has(Hn);)Hn++;var t=Hn++;return Wn.set(e,t),Vn.set(t,e),t},Kn=function(e,t){Hn=t+1,Wn.set(e,t),Vn.set(t,e)},Qn="style[".concat(Qt,"][").concat(qt,'="').concat(Jt,'"]'),Gn=new RegExp("^".concat(Qt,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),qn=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},Jn=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Xt),a=[],i=0,o=r.length;i<o;i++){var l=r[i].trim();if(l){var s=l.match(Gn);if(s){var c=0|parseInt(s[1],10),u=s[2];0!==c&&(Kn(u,c),qn(e,u,s[3]),e.getTag().insertRules(c,a)),a.length=0}else a.push(l)}}},Xn=function(e){for(var t=document.querySelectorAll(Qn),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(Qt)!==Gt&&(Jn(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function Zn(){return n.nc}var er=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(Qt,"]")));return t[t.length-1]}(n),i=void 0!==a?a.nextSibling:null;r.setAttribute(Qt,Gt),r.setAttribute(qt,Jt);var o=Zn();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},tr=function(){function e(e){this.element=er(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}throw Bn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),nr=function(){function e(e){this.element=er(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),rr=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),ar=Zt,ir={isServer:!Zt,useCSSOMInjection:!en},or=function(){function e(e,t,n){void 0===e&&(e=rn),void 0===t&&(t={});var r=this;this.options=He(He({},ir),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Zt&&ar&&(ar=!1,Xn(this)),Mn(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return Vn.get(e)}(n);if(void 0===a)return"continue";var i=e.names.get(a),o=t.getGroup(n);if(void 0===i||!i.size||0===o.length)return"continue";var l="".concat(Qt,".g").concat(n,'[id="').concat(a,'"]'),s="";void 0!==i&&i.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(o).concat(l,'{content:"').concat(s,'"}').concat(Xt)},i=0;i<n;i++)a(i);return r}(r)}))}return e.registerId=function(e){return Yn(e)},e.prototype.rehydrate=function(){!this.server&&Zt&&Xn(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(He(He({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new rr(n):t?new tr(n):new nr(n)}(this.options),new Un(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Yn(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Yn(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Yn(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),lr=/&/g,sr=/^\s*\/\/.*$/gm;function cr(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=cr(e.children,t)),e}))}function ur(e){var t,n,r,a=void 0===e?rn:e,i=a.options,o=void 0===i?rn:i,l=a.plugins,s=void 0===l?nn:l,c=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},u=s.slice();u.push((function(e){e.type===Ze&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(lr,n).replace(r,c))})),o.prefix&&u.push(Bt),u.push(Ft);var d=function(e,a,i,l){void 0===a&&(a=""),void 0===i&&(i=""),void 0===l&&(l="&"),t=l,n=a,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(sr,""),c=Ut(i||a?"".concat(i," ").concat(a," { ").concat(s," }"):s);o.namespace&&(c=cr(c,o.namespace));var d,p=[];return At(c,function(e){var t=pt(e);return function(n,r,a,i){for(var o="",l=0;l<t;l++)o+=e[l](n,r,a,i)||"";return o}}(u.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),p};return d.hash=s.length?s.reduce((function(e,t){return t.name||Bn(15),hn(e,t.name)}),5381).toString():"",d}var dr=new or,pr=ur(),fr=t.createContext({shouldForwardProp:void 0,styleSheet:dr,stylis:pr}),hr=(fr.Consumer,t.createContext(void 0));function mr(){return(0,t.useContext)(fr)}function gr(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],a=n[1],i=mr().styleSheet,o=(0,t.useMemo)((function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,i]),l=(0,t.useMemo)((function(){return ur({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})}),[e.enableVendorPrefixes,e.namespace,r]);(0,t.useEffect)((function(){Qe()(r,e.stylisPlugins)||a(e.stylisPlugins)}),[e.stylisPlugins]);var s=(0,t.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:o,stylis:l}}),[e.shouldForwardProp,o,l]);return t.createElement(fr.Provider,{value:s},t.createElement(hr.Provider,{value:l},e.children))}var yr=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=pr);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Mn(this,(function(){throw Bn(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=pr),this.name+e.hash},e}(),vr=function(e){return e>="A"&&e<="Z"};function br(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;vr(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var xr=function(e){return null==e||!1===e||""===e},wr=function(e){var t,n,r=[];for(var a in e){var i=e[a];e.hasOwnProperty(a)&&!xr(i)&&(Array.isArray(i)&&i.isCss||Rn(i)?r.push("".concat(br(a),":"),i,";"):An(i)?r.push.apply(r,Ye(Ye(["".concat(a," {")],wr(i),!1),["}"],!1)):r.push("".concat(br(a),": ").concat((t=a,null==(n=i)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in Kt||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Sr(e,t,n,r){return xr(e)?[]:Dn(e)?[".".concat(e.styledComponentId)]:Rn(e)?!Rn(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:Sr(e(t),t,n,r):e instanceof yr?n?(e.inject(n,r),[e.getName(r)]):[e]:An(e)?wr(e):Array.isArray(e)?Array.prototype.concat.apply(nn,e.map((function(e){return Sr(e,t,n,r)}))):[e.toString()];var a}function kr(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Rn(n)&&!Dn(n))return!1}return!0}var jr=mn(Jt),Er=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&kr(e),this.componentId=t,this.baseHash=hn(jr,t),this.baseStyle=n,or.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Ln(r,this.staticRulesId);else{var a=$n(Sr(this.rules,e,t,n)),i=pn(hn(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,i)){var o=n(a,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,o)}r=Ln(r,i),this.staticRulesId=i}else{for(var l=hn(this.baseHash,n.hash),s="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)s+=u;else if(u){var d=$n(Sr(u,e,t,n));l=hn(l,d+c),s+=d}}if(s){var p=pn(l>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(s,".".concat(p),void 0,this.componentId)),r=Ln(r,p)}}return r},e}(),Cr=t.createContext(void 0);Cr.Consumer;function Nr(e){var n=t.useContext(Cr),r=(0,t.useMemo)((function(){return function(e,t){if(!e)throw Bn(14);if(Rn(e))return e(t);if(Array.isArray(e)||"object"!=typeof e)throw Bn(8);return t?He(He({},t),e):e}(e.theme,n)}),[e.theme,n]);return e.children?t.createElement(Cr.Provider,{value:r},e.children):null}var Pr={};new Set;function _r(e,n,r){var a=Dn(e),i=e,o=!vn(e),l=n.attrs,s=void 0===l?nn:l,c=n.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":cn(e);Pr[n]=(Pr[n]||0)+1;var r="".concat(n,"-").concat(gn(Jt+n+Pr[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,d=n.displayName,p=void 0===d?function(e){return vn(e)?"styled.".concat(e):"Styled(".concat(yn(e),")")}(e):d,f=n.displayName&&n.componentId?"".concat(cn(n.displayName),"-").concat(n.componentId):n.componentId||u,h=a&&i.attrs?i.attrs.concat(s).filter(Boolean):s,m=n.shouldForwardProp;if(a&&i.shouldForwardProp){var g=i.shouldForwardProp;if(n.shouldForwardProp){var y=n.shouldForwardProp;m=function(e,t){return g(e,t)&&y(e,t)}}else m=g}var v=new Er(r,f,a?i.componentStyle:void 0);function b(e,n){return function(e,n,r){var a=e.attrs,i=e.componentStyle,o=e.defaultProps,l=e.foldedComponentIds,s=e.styledComponentId,c=e.target,u=t.useContext(Cr),d=mr(),p=e.shouldForwardProp||d.shouldForwardProp,f=an(n,u,o)||rn,h=function(e,t,n){for(var r,a=He(He({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var o=Rn(r=e[i])?r(a):r;for(var l in o)a[l]="className"===l?Ln(a[l],o[l]):"style"===l?He(He({},a[l]),o[l]):o[l]}return t.className&&(a.className=Ln(a.className,t.className)),a}(a,n,f),m=h.as||c,g={};for(var y in h)void 0===h[y]||"$"===y[0]||"as"===y||"theme"===y&&h.theme===f||("forwardedAs"===y?g.as=h.forwardedAs:p&&!p(y,m)||(g[y]=h[y]));var v=function(e,t){var n=mr();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,h),b=Ln(l,s);return v&&(b+=" "+v),h.className&&(b+=" "+h.className),g[vn(m)&&!on.has(m)?"class":"className"]=b,r&&(g.ref=r),(0,t.createElement)(m,g)}(x,e,n)}b.displayName=p;var x=t.forwardRef(b);return x.attrs=h,x.componentStyle=v,x.displayName=p,x.shouldForwardProp=m,x.foldedComponentIds=a?Ln(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=f,x.target=a?i.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)Fn(e,a[r],!0);return e}({},i.defaultProps,e):e}}),Mn(x,(function(){return".".concat(x.styledComponentId)})),o&&In(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Tr(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var zr=function(e){return Object.assign(e,{isCss:!0})};function Or(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Rn(e)||An(e))return zr(Sr(Tr(nn,Ye([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Sr(r):zr(Sr(Tr(r,t)))}function Ir(e,t,n){if(void 0===n&&(n=rn),!t)throw Bn(1,t);var r=function(r){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];return e(t,n,Or.apply(void 0,Ye([r],a,!1)))};return r.attrs=function(r){return Ir(e,t,He(He({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Ir(e,t,He(He({},n),r))},r}var Rr=function(e){return Ir(_r,e)},Dr=Rr;on.forEach((function(e){Dr[e]=Rr(e)}));var Lr=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=kr(e),or.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var a=r($n(Sr(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&or.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function $r(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=$n(Or.apply(void 0,Ye([e],t,!1))),a=gn(r);return new yr(a,r)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Zn(),r=$n([n&&'nonce="'.concat(n,'"'),"".concat(Qt,'="true"'),"".concat(qt,'="').concat(Jt,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Bn(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw Bn(2);var r=e.instance.toString();if(!r)return[];var a=((n={})[Qt]="",n[qt]=Jt,n.dangerouslySetInnerHTML={__html:r},n),i=Zn();return i&&(a.nonce=i),[t.createElement("style",He({},a,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new or({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Bn(2);return t.createElement(gr,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Bn(3)}})(),"__sc-".concat(Qt,"__");const Ar=Dr.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  padding: 40px 20px;
  color: ${e=>{let{theme:t}=e;return t.colors.textPrimary}};
`,Fr=Dr.div`
  max-width: 850px;
  margin: 0 auto;
`,Mr=Dr.header`
  text-align: center;
  margin-bottom: 40px;
  position: relative;
`,Br=(Dr.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #0D7B3E 0%, #10B068 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1px;
  position: relative;
  animation: fadeIn 2s ease-in-out, colorShift 5s infinite;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes colorShift {
    0%, 100% {
      background: linear-gradient(135deg, #0D7B3E 0%, #10B068 100%);
      -webkit-background-clip: text;
    }
    50% {
      background: linear-gradient(135deg, #10B068 0%, #0D7B3E 100%);
      -webkit-background-clip: text;
    }
  }
`,Dr.img`
  height: 80px;
  width: auto;
  margin: 0 auto 15px;
  display: block;
`),Ur=Dr.div`
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.colors.textSecondary}};
  margin-bottom: 20px;
`,Wr=Dr.div`
  color: ${e=>{let{theme:t}=e;return t.colors.textSecondary}};
  font-size: 0.9rem;
  margin-bottom: 20px;
`,Vr=Dr.div`
  position: absolute;
  top: 10px;
  right: 0;
  font-size: 0.8rem;
  color: ${e=>{let{theme:t}=e;return t.colors.textSecondary}};
`,Hr=Dr.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  font-size: 8rem;
  color: rgba(226, 232, 240, 0.3);
  pointer-events: none;
  z-index: 0;
  white-space: nowrap;
`,Yr=Dr.div`
  background: ${e=>{let{theme:t}=e;return t.colors.white}};
  padding: 40px;
  border-radius: 12px;
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.lg}};
  color: ${e=>{let{theme:t}=e;return t.colors.black}};
`,Kr=Dr.h1`
  font-size: 1.8rem;
  margin-bottom: 25px;
  color: #111827;
  text-align: center;
  padding-bottom: 15px;
  border-bottom: 1px solid #E5E7EB;
`,Qr=Dr.h2`
  font-size: 1.25rem;
  margin: 35px 0 15px;
  color: #1F2937;
`,Gr=Dr.p`
  margin-bottom: 15px;
  color: #4B5563;
`,qr=Dr.ul`
  margin: 15px 0 20px 20px;
`,Jr=Dr.li`
  margin-bottom: 8px;
  color: #4B5563;
`,Xr=Dr.div`
  margin-top: 50px;
  padding-top: 40px;
  border-top: 1px solid #E5E7EB;
`,Zr=Dr.div`
  margin-top: 20px;
  padding: 25px;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  background-color: #FAFAFA;
`,ea=Dr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 15px;
`,ta=Dr.div`
  flex: 1;
  min-width: 200px;
`,na=Dr.label`
  font-weight: bold;
  display: block;
  margin-top: 15px;
  margin-bottom: 5px;
  color: #374151;
`,ra=Dr.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #D1D5DB;
  border-radius: 6px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #10B068;
    box-shadow: 0 0 0 3px rgba(16, 176, 104, 0.1);
  }
`,aa=Dr.canvas`
  border: 1px solid #D1D5DB;
  border-radius: 6px;
  display: block;
  margin-top: 10px;
  background-color: white;
  width: 100%;
  touch-action: none;
`,ia=Dr.div`
  font-size: 0.9rem;
  color: #6B7280;
  margin-top: 5px;
  margin-bottom: 10px;
  font-style: italic;
`,oa=Dr.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`,la=Dr.button`
  padding: 10px 16px;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  font-weight: 500;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`,sa=Dr(la)`
  background: #F87171;
  color: white;

  &:hover {
    background: #EF4444;
  }
`,ca=Dr(la)`
  margin-top: 30px;
  padding: 12px 24px;
  font-size: 1.1rem;
  width: 100%;
  background: #10B068;
  color: white;

  &:hover {
    background: #0D8D54;
  }

  &:disabled {
    background: #A7F3D0;
    cursor: not-allowed;
  }
`,ua=Dr.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(13, 123, 62, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: ${e=>{let{isVisible:t}=e;return t?"1":"0"}};
  visibility: ${e=>{let{isVisible:t}=e;return t?"visible":"hidden"}};
  transition: opacity 0.5s, visibility 0.5s;
`,da=Dr.div`
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  transform: translateY(${e=>{let{isVisible:t}=e;return t?"0":"20px"}});
  opacity: ${e=>{let{isVisible:t}=e;return t?"1":"0"}};
  transition: transform 0.5s, opacity 0.5s;
  transition-delay: ${e=>{let{isVisible:t}=e;return t?"0.2s":"0"}};
`,pa=Dr.div`
  width: 80px;
  height: 80px;
  background-color: #10B068;
  border-radius: 50%;
  color: white;
  font-size: 45px;
  line-height: 80px;
  margin: 0 auto 20px;
  position: relative;
  animation: scaleIn 0.6s ease-out forwards;

  @keyframes scaleIn {
    0% { transform: scale(0); }
    70% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
`,fa=Dr.h2`
  color: #10B068;
  font-size: 28px;
  margin-bottom: 15px;
`,ha=Dr.p`
  color: #4B5563;
  margin-bottom: 12px;
  font-size: 16px;
`,ma=Dr.div`
  height: 6px;
  background-color: #E6E6E6;
  border-radius: 3px;
  margin-top: 25px;
  overflow: hidden;
`,ga=Dr.div`
  height: 100%;
  width: ${e=>{let{isVisible:t}=e;return t?"100%":"0%"}};
  background-color: #10B068;
  border-radius: 3px;
  transition: width 3.5s linear;
`,ya=Dr.div`
  margin-top: 40px;
  text-align: center;
  color: ${e=>{let{theme:t}=e;return t.colors.textSecondary}};
  font-size: 0.9rem;
`,va=Dr.footer`
  text-align: center;
  margin-top: 30px;
  font-size: 0.8rem;
  color: ${e=>{let{theme:t}=e;return t.colors.textSecondary}};
`;const ba=function(e){let{setAuthenticated:n}=e;const[r,a]=(0,t.useState)({recipientName:"",companyName:"",recipientTitle:"",recipientEmail:"",signingDate:function(){const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}()}),[i,o]=(0,t.useState)(""),[l,s]=(0,t.useState)(!1),[c,u]=(0,t.useState)(0),[d,p]=(0,t.useState)(0),[f,h]=(0,t.useState)(!1),[m,g]=(0,t.useState)(!1),y=(0,t.useRef)(null),v=ee();(0,t.useEffect)((()=>{const e=y.current;if(e){const t=e.getContext("2d");e.width=e.offsetWidth,e.height=150,t.lineWidth=2,t.lineCap="round",t.lineJoin="round",t.strokeStyle="#000";const n=()=>{const n=t.getImageData(0,0,e.width,e.height);e.width=e.offsetWidth,t.putImageData(n,0,0),t.lineWidth=2,t.lineCap="round",t.lineJoin="round",t.strokeStyle="#000"};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}}}),[]);const b=e=>{const{name:t,value:n}=e.target;a({...r,[t]:n})},x=e=>{const t=y.current.getBoundingClientRect();return e.type.includes("touch")?{x:e.touches[0].clientX-t.left,y:e.touches[0].clientY-t.top}:{x:e.clientX-t.left,y:e.clientY-t.top}},w=e=>{const t=x(e);s(!0),u(t.x),p(t.y);const n=y.current.getContext("2d");n.beginPath(),n.moveTo(t.x,t.y),e.preventDefault()},S=e=>{if(!l)return;const t=x(e),n=y.current.getContext("2d");n.beginPath(),n.moveTo(c,d),n.lineTo(t.x,t.y),n.stroke(),u(t.x),p(t.y),e.preventDefault()},k=()=>{if(l){s(!1);const e=y.current;o(e.toDataURL())}};return(0,We.jsxs)(Ar,{children:[(0,We.jsx)(Hr,{children:"CONFIDENTIAL"}),(0,We.jsxs)(Fr,{children:[(0,We.jsxs)(Mr,{children:[(0,We.jsx)(Vr,{children:"Document ID: KAIROS-NDA-2025"}),(0,We.jsx)(Br,{src:"/kairos-landing-page/static/icons/kairos-logo.svg",alt:"\u039a\u03b1\u03b9\u03c1\u03cc\u03c2"}),(0,We.jsx)(Ur,{children:"AI-Enhanced Journaling Experience"}),(0,We.jsx)(Wr,{children:"Last Updated: March 23, 2025"})]}),(0,We.jsxs)(Yr,{children:[(0,We.jsx)(Kr,{children:"Non-Disclosure Agreement"}),(0,We.jsx)(Gr,{children:'This Non-Disclosure Agreement (the "Agreement") is made and entered into as of the date of the latest signature below (the "Effective Date") between:'}),(0,We.jsxs)(Gr,{children:[(0,We.jsx)("strong",{children:"\u039a\u03b1\u03b9\u03c1\u03cc\u03c2"}),', a company established under the laws of Austria, with its principal place of business at Neustiftgasse 21/1/9, B\xf6heimkirchen, 3107, Austria (hereinafter referred to as the "',(0,We.jsx)("strong",{children:"Company"}),'"), represented by Giorgi Akopashvili, and']}),(0,We.jsxs)(Gr,{children:['The undersigned individual or entity, including its representatives and affiliates (hereinafter referred to as the "',(0,We.jsx)("strong",{children:"Recipient"}),'").']}),(0,We.jsx)(Gr,{children:'The Company and Recipient shall be collectively referred to as the "Parties" and individually as a "Party".'}),(0,We.jsx)(Qr,{children:"1. Purpose"}),(0,We.jsx)(Gr,{children:'The Parties wish to explore a potential business relationship related to the Company\'s AI-enhanced journaling platform (the "Purpose"). In connection with the Purpose, the Recipient may have access to certain proprietary and confidential information of the Company.'}),(0,We.jsx)(Qr,{children:"2. Definition of Confidential Information"}),(0,We.jsxs)(Gr,{children:['For the purposes of this Agreement, "',(0,We.jsx)("strong",{children:"Confidential Information"}),'" means any and all information disclosed by the Company to the Recipient, whether orally, in writing, electronically, or by any other means, that:']}),(0,We.jsxs)(qr,{children:[(0,We.jsx)(Jr,{children:"Is designated as confidential or proprietary;"}),(0,We.jsx)(Jr,{children:"By its nature would reasonably be considered confidential; or"}),(0,We.jsx)(Jr,{children:"Is specifically identified below as Confidential Information."})]}),(0,We.jsx)(Gr,{children:"Confidential Information includes, but is not limited to:"}),(0,We.jsxs)(qr,{children:[(0,We.jsx)(Jr,{children:"Technical information about the Company's NFC-enabled journaling system and AI analysis capabilities;"}),(0,We.jsx)(Jr,{children:"The structure, organization, and code of any software or algorithms used in the Company's products;"}),(0,We.jsx)(Jr,{children:"Business models, pricing strategies, and financial projections;"}),(0,We.jsx)(Jr,{children:"Marketing plans, research, and strategic initiatives;"}),(0,We.jsx)(Jr,{children:"User experience designs, product development roadmaps, and future feature plans;"}),(0,We.jsx)(Jr,{children:"AI and machine learning methodologies and implementations;"}),(0,We.jsx)(Jr,{children:"Customer data, analytics, and insights models;"}),(0,We.jsx)(Jr,{children:"Partnership opportunities and negotiation strategies;"}),(0,We.jsx)(Jr,{children:"Unpublished patent applications, trade secrets, and know-how; and"}),(0,We.jsx)(Jr,{children:"Any other information that provides the Company with a competitive advantage."})]}),(0,We.jsxs)(Xr,{children:[(0,We.jsx)(Qr,{children:"Agreement Acknowledgment"}),(0,We.jsx)(Gr,{children:"By signing below, the Recipient acknowledges understanding and agreement to the terms outlined above."}),(0,We.jsxs)("form",{onSubmit:e=>{e.preventDefault(),r.recipientName&&r.recipientEmail&&i?(g(!0),setTimeout((()=>{sessionStorage.setItem("hasSignedNDA","true"),n&&n(!0),h(!0),setTimeout((()=>{v("/journal")}),4e3)}),1e3)):alert("Please fill in all required fields and provide a signature.")},children:[(0,We.jsxs)(Zr,{children:[(0,We.jsxs)(ea,{children:[(0,We.jsxs)(ta,{children:[(0,We.jsx)(na,{htmlFor:"recipientName",children:"Full Name:"}),(0,We.jsx)(ra,{type:"text",id:"recipientName",name:"recipientName",value:r.recipientName,onChange:b,required:!0})]}),(0,We.jsxs)(ta,{children:[(0,We.jsx)(na,{htmlFor:"companyName",children:"Company/Organization:"}),(0,We.jsx)(ra,{type:"text",id:"companyName",name:"companyName",value:r.companyName,onChange:b})]})]}),(0,We.jsxs)(ea,{children:[(0,We.jsxs)(ta,{children:[(0,We.jsx)(na,{htmlFor:"recipientTitle",children:"Title/Position:"}),(0,We.jsx)(ra,{type:"text",id:"recipientTitle",name:"recipientTitle",value:r.recipientTitle,onChange:b})]}),(0,We.jsxs)(ta,{children:[(0,We.jsx)(na,{htmlFor:"recipientEmail",children:"Email Address:"}),(0,We.jsx)(ra,{type:"email",id:"recipientEmail",name:"recipientEmail",value:r.recipientEmail,onChange:b,required:!0})]})]}),(0,We.jsx)(na,{htmlFor:"signingDate",children:"Date:"}),(0,We.jsx)(ra,{type:"date",id:"signingDate",name:"signingDate",value:r.signingDate,onChange:b,required:!0}),(0,We.jsx)(na,{children:"Signature:"}),(0,We.jsx)(ia,{children:"Draw your signature below using your mouse or finger on touch devices"}),(0,We.jsx)(aa,{ref:y,onMouseDown:w,onMouseMove:S,onMouseUp:k,onMouseLeave:k,onTouchStart:w,onTouchMove:S,onTouchEnd:k}),(0,We.jsx)(oa,{children:(0,We.jsx)(sa,{type:"button",onClick:()=>{const e=y.current;e.getContext("2d").clearRect(0,0,e.width,e.height),o("")},children:"Clear Signature"})})]}),(0,We.jsx)(ca,{type:"submit",disabled:m,children:m?"Submitting...":"Submit Signed Agreement"})]})]})]}),(0,We.jsxs)(ya,{children:["For any questions regarding this agreement, please contact:",(0,We.jsx)("br",{}),(0,We.jsx)("strong",{children:"giorgi@kairos.startup"})]}),(0,We.jsx)(va,{children:"\u039a\u03b1\u03b9\u03c1\u03cc\u03c2 NDA | Confidential | Page 1 of 1"})]}),(0,We.jsx)(ua,{isVisible:f,children:(0,We.jsxs)(da,{isVisible:f,children:[(0,We.jsx)(pa,{children:"\u2713"}),(0,We.jsx)(fa,{children:"Thank You!"}),(0,We.jsx)(ha,{children:"Your NDA has been successfully submitted."}),(0,We.jsx)(ha,{children:"You'll be redirected to our confidential information package in a moment..."}),(0,We.jsx)(ma,{children:(0,We.jsx)(ga,{isVisible:f})})]})})]})},xa=Dr.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${e=>{let{theme:t}=e;return t.colors.brand}};
  padding: 20px;
`,wa=Dr.div`
  max-width: 600px;
  width: 100%;
  text-align: center;
  background-color: ${e=>{let{theme:t}=e;return t.colors.white}};
  padding: 40px;
  border-radius: 12px;
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.lg}};
  animation: fadeIn 0.8s ease-out;

  @keyframes fadeIn {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
`,Sa=Dr.div`
  width: 100px;
  height: 100px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.accent}};
  color: white;
  border-radius: 50%;
  font-size: 60px;
  line-height: 100px;
  margin: 0 auto 30px;
  animation: scaleIn 0.6s ease-out;

  @keyframes scaleIn {
    0% { transform: scale(0); }
    70% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
`,ka=Dr.h1`
  color: ${e=>{let{theme:t}=e;return t.colors.brandDark}};
  font-size: 2.5rem;
  margin-bottom: 20px;
`,ja=Dr.p`
  color: ${e=>{let{theme:t}=e;return t.colors.textSecondary}};
  font-size: 1.2rem;
  margin-bottom: 30px;
`,Ea=Dr.div`
  width: 100%;
  height: 8px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  border-radius: 4px;
  margin: 40px 0;
  overflow: hidden;
`,Ca=Dr.div`
  height: 100%;
  width: ${e=>{let{progress:t}=e;return`${t}%`}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.accent}};
  border-radius: 4px;
  transition: width 3s linear;
`,Na=Dr.img`
  height: 50px;
  margin-bottom: 20px;
`,Pa=()=>{const e=ee(),[n,r]=t.useState(0);return(0,t.useEffect)((()=>{setTimeout((()=>{r(100)}),200);const t=setTimeout((()=>{e("/journal")}),3500);return()=>clearTimeout(t)}),[e]),(0,We.jsx)(xa,{children:(0,We.jsxs)(wa,{children:[(0,We.jsx)(Na,{src:"/static/icons/logo/kairos-logo.svg",alt:"\u039a\u03b1\u03b9\u03c1\u03cc\u03c2 Logo"}),(0,We.jsx)(Sa,{children:"\u2713"}),(0,We.jsx)(ka,{children:"Thank You!"}),(0,We.jsx)(ja,{children:"Your NDA has been successfully submitted and processed."}),(0,We.jsx)(ja,{children:"You're being redirected to our confidential information package..."}),(0,We.jsx)(Ea,{children:(0,We.jsx)(Ca,{progress:n})})]})})},_a=$r`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ta=$r`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,za=$r`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  80% {
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`,Oa=$r`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`,Ia=$r`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Ra=$r`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`,Da=$r`
  0% { box-shadow: 0 0 0 0 rgba(230, 184, 156, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(230, 184, 156, 0); }
  100% { box-shadow: 0 0 0 0 rgba(230, 184, 156, 0); }
`,La=Dr.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #1F2E28 0%, #0A1612 100%);
  background-size: 200% 200%;
  animation: ${Ia} 15s ease infinite;
  border-radius: 10px;
  color: ${e=>{let{theme:t}=e;return t.colors.white}};
  padding: 50px 20px;
  text-align: center;
  position: relative;
  margin-bottom: 50px;
  overflow: hidden;

  &::before {
    content: "CONFIDENTIAL";
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 0.8rem;
    letter-spacing: 1px;
    padding: 8px 15px;
    border: 1px solid rgba(230, 184, 156, 0.3);
    background-color: rgba(10, 22, 18, 0.7);
    border-radius: 4px;
    opacity: 0;
    animation: ${Ta} 1s forwards, ${Da} 2s infinite;
    animation-delay: 2s, 3s;
  }
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 30%, rgba(85, 139, 110, 0.05) 0%, transparent 70%),
                radial-gradient(circle at 70% 70%, rgba(230, 184, 156, 0.05) 0%, transparent 70%);
    z-index: 1;
  }
`,$a=Dr.div`
  position: relative;
  z-index: 2;
`,Aa=Dr.div`
  font-size: 4rem;
  font-weight: 300;
  margin-bottom: 20px;
  letter-spacing: 2px;
  opacity: 0;
  animation: ${za} 0.8s forwards, ${Oa} 6s ease-in-out infinite;
  animation-delay: 0.2s, 1s;
  
  background: linear-gradient(
    to right,
    ${e=>{let{theme:t}=e;return t.colors.brand}},
    ${e=>{let{theme:t}=e;return t.colors.accent}},
    ${e=>{let{theme:t}=e;return t.colors.brandLight}}
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`,Fa=Dr.img`
  height: 80px;
  margin-bottom: 20px;
  opacity: 0;
  animation: ${za} 0.8s forwards;
  animation-delay: 0.1s;
  filter: drop-shadow(0 0 20px rgba(85, 139, 110, 0.4));
`,Ma=Dr.div`
  font-size: 1.6rem;
  font-weight: 300;
  margin-bottom: 40px;
  opacity: 0;
  animation: ${_a} 0.8s forwards;
  animation-delay: 0.5s;
  color: ${e=>{let{theme:t}=e;return t.colors.accentLight}};
  letter-spacing: 1px;
`,Ba=Dr.h1`
  font-size: 2.8rem;
  margin-bottom: 30px;
  max-width: 800px;
  opacity: 0;
  animation: ${_a} 0.8s forwards;
  animation-delay: 0.8s;
  
  background: linear-gradient(
    to right,
    ${e=>{let{theme:t}=e;return t.colors.accent}},
    ${e=>{let{theme:t}=e;return t.colors.accentLight}},
    ${e=>{let{theme:t}=e;return t.colors.accent}}
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${_a} 0.8s forwards, ${Ra} 6s linear infinite;
  animation-delay: 0.8s, 2s;
  
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: linear-gradient(
      to right,
      ${e=>{let{theme:t}=e;return t.colors.brand}},
      ${e=>{let{theme:t}=e;return t.colors.accent}}
    );
  }
`,Ua=Dr.p`
  font-size: 1.3rem;
  max-width: 700px;
  opacity: 0;
  animation: ${_a} 0.8s forwards;
  animation-delay: 1.1s;
  line-height: 1.7;
  color: #d0d0d0;
`,Wa=Dr.div`
  position: absolute;
  bottom: 30px;
  font-size: 0.9rem;
  opacity: 0;
  animation: ${Ta} 1s forwards;
  animation-delay: 1.5s;
  color: ${e=>{let{theme:t}=e;return t.colors.textSecondary}};
  letter-spacing: 1px;
`,Va=()=>(0,We.jsxs)(La,{children:[(0,We.jsxs)($a,{children:[(0,We.jsx)(Fa,{src:"/kairos-landing-page/static/icons/kairos-logo.svg",alt:"\u039a\u03b1\u03b9\u03c1\u03cc\u03c2"}),(0,We.jsx)(Aa,{children:"\u039a\u03b1\u03b9\u03c1\u03cc\u03c2"}),(0,We.jsx)(Ma,{children:"Smart Journal for Mindful Growth"}),(0,We.jsx)(Ba,{children:"Confidential Information Package"}),(0,We.jsx)(Ua,{children:"Bridging analog journaling with AI-powered insights to transform personal reflection into structured growth."})]}),(0,We.jsx)(Wa,{children:(new Date).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})})]}),Ha=$r`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ya=$r`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,Ka=$r`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`,Qa=Dr.div`
  background-color: rgba(20, 20, 20, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 40px;
  margin-bottom: 50px;
  opacity: 0;
  animation: ${Ha} 0.8s forwards;
  animation-delay: 0.2s;
  animation-play-state: ${e=>{let{isVisible:t}=e;return t?"running":"paused"}};
`,Ga=Dr.h2`
  font-size: 1.8rem;
  margin-bottom: 30px;
  color: ${e=>{let{theme:t}=e;return t.colors.accentLight}};
  padding-bottom: 10px;
  border-bottom: 2px solid;
  border-image: linear-gradient(
    to right,
    ${e=>{let{theme:t}=e;return t.colors.brand}},
    ${e=>{let{theme:t}=e;return t.colors.accent}}
  ) 1;
  
  background: linear-gradient(
    to right,
    ${e=>{let{theme:t}=e;return t.colors.brand}},
    ${e=>{let{theme:t}=e;return t.colors.accent}},
    ${e=>{let{theme:t}=e;return t.colors.brandLight}}
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${Ka} 6s linear infinite;
`,qa=Dr.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
`,Ja=Dr.li`
  margin-bottom: 15px;
  opacity: 0;
  transform: translateX(-30px);
  animation: ${Ya} 0.5s forwards;
  animation-delay: ${e=>{let{delay:t}=e;return t||"0s"}};
  animation-play-state: ${e=>{let{isVisible:t}=e;return t?"running":"paused"}};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
  }
`,Xa=Dr.button`
  display: flex;
  align-items: center;
  color: #d0d0d0;
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 15px;
  text-align: left;
  width: 100%;
  border-radius: 30px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: linear-gradient(
      45deg,
      rgba(85, 139, 110, 0.1),
      rgba(230, 184, 156, 0.2)
    );
    transition: width 0.4s ease;
    z-index: -1;
    border-radius: 30px;
  }
  
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.accentLight}};
    
    &:before {
      width: 100%;
    }
  }
`,Za=Dr.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: linear-gradient(
    45deg,
    ${e=>{let{theme:t}=e;return t.colors.brand}},
    ${e=>{let{theme:t}=e;return t.colors.brandDark}}
  );
  color: white;
  border-radius: 50%;
  margin-right: 15px;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(85, 139, 110, 0.3);

  ${Xa}:hover & {
    transform: scale(1.1);
    background: linear-gradient(
      45deg,
      ${e=>{let{theme:t}=e;return t.colors.accent}},
      ${e=>{let{theme:t}=e;return t.colors.accentDark}}
    );
    box-shadow: 0 2px 15px rgba(230, 184, 156, 0.4);
  }
`,ei=e=>{let{sections:n,onSectionClick:r}=e;const[a,i]=(0,t.useState)(!1),o=(0,t.useRef)(null);return(0,t.useEffect)((()=>{const e=new IntersectionObserver((e=>{e[0].isIntersecting&&i(!0)}),{threshold:.2});return o.current&&e.observe(o.current),()=>{o.current&&e.unobserve(o.current)}}),[]),(0,We.jsxs)(Qa,{ref:o,isVisible:a,children:[(0,We.jsx)(Ga,{children:"Contents"}),(0,We.jsx)(qa,{children:n.map(((e,t)=>(0,We.jsx)(Ja,{delay:.3+.1*t+"s",isVisible:a,children:(0,We.jsxs)(Xa,{onClick:()=>r(e.id),children:[(0,We.jsx)(Za,{children:e.number})," ",e.title]})},e.id)))})]})},ti=$r`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,ni=$r`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,ri=$r`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`,ai=($r`
  0% {
    box-shadow: 0 0 5px rgba(85, 139, 110, 0.2);
  }
  50% {
    box-shadow: 0 0 20px rgba(85, 139, 110, 0.4);
  }
  100% {
    box-shadow: 0 0 5px rgba(85, 139, 110, 0.2);
  }
`,Dr.div`
  background-color: rgba(20, 20, 20, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 40px;
  position: relative;
  color: ${e=>{let{theme:t}=e;return t.colors.textPrimary}};
  opacity: 0;
  transform: translateY(20px);
  animation: ${ti} 0.8s forwards;
  animation-delay: ${e=>{let{delay:t}=e;return t||"0s"}};
  animation-play-state: ${e=>{let{isVisible:t}=e;return t?"running":"paused"}};
  
  &:hover {
    box-shadow: 0 0 30px rgba(85, 139, 110, 0.2);
  }
`),ii=Dr.div`
  position: absolute;
  top: -20px;
  left: 40px;
  width: 40px;
  height: 40px;
  background: linear-gradient(45deg, ${e=>{let{theme:t}=e;return t.colors.brand}}, ${e=>{let{theme:t}=e;return t.colors.brandDark}});
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.2rem;
  box-shadow: 0 4px 15px rgba(85, 139, 110, 0.4);
  z-index: 10;
`,oi=Dr.h2`
  font-size: 2rem;
  margin-bottom: 25px;
  color: ${e=>{let{theme:t}=e;return t.colors.accentLight}};
  padding-bottom: 10px;
  border-bottom: 2px solid;
  border-image: linear-gradient(
    to right,
    ${e=>{let{theme:t}=e;return t.colors.brand}},
    ${e=>{let{theme:t}=e;return t.colors.accent}}
  ) 1;
  
  background: linear-gradient(
    to right,
    ${e=>{let{theme:t}=e;return t.colors.accent}},
    ${e=>{let{theme:t}=e;return t.colors.brand}},
    ${e=>{let{theme:t}=e;return t.colors.brandLight}}
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: ${e=>{let{theme:t}=e;return t.colors.accent}}; /* Fallback color */
  animation: ${ri} 6s linear infinite;
`,li=Dr.div`
  opacity: 0;
  animation: ${ti} 0.6s forwards;
  animation-delay: ${e=>{let{delay:t}=e;return t||"0s"}};
  animation-play-state: ${e=>{let{isVisible:t}=e;return t?"running":"paused"}};
`,si=Dr.h3`
  font-size: 1.5rem;
  margin: 30px 0 15px;
  color: ${e=>{let{theme:t}=e;return t.colors.accent}};
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40%;
    height: 2px;
    background-color: ${e=>{let{theme:t}=e;return t.colors.accent}};
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`,ci=Dr.h4`
  font-size: 1.2rem;
  margin: 25px 0 15px;
  color: ${e=>{let{theme:t}=e;return t.colors.accentLight}};
  font-weight: 500;
`,ui=Dr.p`
  margin-bottom: 20px;
  color: #e0e0e0;
  line-height: 1.7;
`,di=Dr.ul`
  margin: 0 0 20px 20px;
`,pi=Dr.li`
  margin-bottom: 10px;
  position: relative;
  opacity: 0;
  animation: ${ni} 0.4s forwards;
  animation-delay: ${e=>{let{delay:t}=e;return t||"0s"}};
  animation-play-state: ${e=>{let{isVisible:t}=e;return t?"running":"paused"}};
  color: #d0d0d0;
  
  &::before {
    content: '•';
    color: ${e=>{let{theme:t}=e;return t.colors.accent}};
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`,fi=Dr.div`
  background: linear-gradient(
    135deg,
    rgba(230, 184, 156, 0.1) 0%,
    rgba(230, 184, 156, 0.2) 100%
  );
  border-left: 4px solid ${e=>{let{theme:t}=e;return t.colors.accent}};
  padding: 25px;
  margin: 30px 0;
  border-radius: 0 10px 10px 0;
  opacity: 0;
  animation: ${ti} 0.8s forwards;
  animation-delay: ${e=>{let{delay:t}=e;return t||"0s"}};
  animation-play-state: ${e=>{let{isVisible:t}=e;return t?"running":"paused"}};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }

  & h4 {
    margin-top: 0;
    color: ${e=>{let{theme:t}=e;return t.colors.accent}};
  }

  & p:last-child {
    margin-bottom: 0;
  }
`,hi=Dr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 30px 0;
`,mi=Dr.div`
  background: linear-gradient(
    135deg,
    rgba(43, 70, 60, 0.6) 0%,
    rgba(43, 70, 60, 0.3) 100%
  );
  padding: 25px;
  border-radius: 12px;
  text-align: center;
  opacity: 0;
  animation: ${ti} 0.6s forwards;
  animation-delay: ${e=>{let{delay:t}=e;return t||"0s"}};
  animation-play-state: ${e=>{let{isVisible:t}=e;return t?"running":"paused"}};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`,gi=Dr.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${e=>{let{theme:t}=e;return t.colors.accent}};
  margin-bottom: 5px;
`,yi=Dr.div`
  font-size: 1rem;
  color: #b0b0b0;
`,vi=Dr.div`
  background: linear-gradient(
    135deg,
    rgba(43, 70, 60, 0.6) 0%,
    rgba(43, 70, 60, 0.3) 100%
  );
  border-radius: 12px;
  padding: 25px;
  margin: 30px 0;
  text-align: center;
  opacity: 0;
  animation: ${ti} 0.8s forwards;
  animation-delay: ${e=>{let{delay:t}=e;return t||"0s"}};
  animation-play-state: ${e=>{let{isVisible:t}=e;return t?"running":"paused"}};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }
`,bi=Dr.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease;
  display: block;
  margin: 0 auto;
`,xi=e=>{let{section:n}=e;const[r,a]=(0,t.useState)(!1),i=(0,t.useRef)(null);(0,t.useEffect)((()=>{const e=new IntersectionObserver((e=>{e[0].isIntersecting&&a(!0)}),{threshold:.2});return i.current&&e.observe(i.current),()=>{i.current&&e.unobserve(i.current)}}),[]);return(0,We.jsxs)(ai,{id:n.id,ref:i,delay:"0.2s",isVisible:r,children:[(0,We.jsx)(ii,{children:n.number}),(0,We.jsx)(oi,{children:n.title}),(o=n.content,o?o.map(((e,t)=>{const n=.1+.1*t;switch(e.type){case"paragraph":return(0,We.jsx)(li,{delay:`${n}s`,isVisible:r,children:(0,We.jsx)(ui,{children:e.text})},t);case"subheading":return(0,We.jsx)(li,{delay:`${n}s`,isVisible:r,children:(0,We.jsx)(si,{children:e.text})},t);case"smallheading":return(0,We.jsx)(li,{delay:`${n}s`,isVisible:r,children:(0,We.jsx)(ci,{children:e.text})},t);case"list":return(0,We.jsx)(li,{delay:`${n}s`,isVisible:r,children:(0,We.jsx)(di,{children:e.items.map(((e,t)=>(0,We.jsx)(pi,{delay:`${n+.05*t}s`,isVisible:r,children:e},t)))})},t);case"highlight":return(0,We.jsxs)(fi,{delay:`${n}s`,isVisible:r,children:[(0,We.jsx)(ci,{children:e.title}),e.text&&(0,We.jsx)(ui,{children:e.text}),e.items&&(0,We.jsx)(di,{children:e.items.map(((e,t)=>(0,We.jsx)(pi,{delay:`${n+.1+.05*t}s`,isVisible:r,children:e},t)))})]},t);case"stats":return(0,We.jsx)(hi,{children:e.items.map(((e,t)=>(0,We.jsxs)(mi,{delay:`${n+.1*t}s`,isVisible:r,children:[(0,We.jsx)(gi,{children:e.value}),(0,We.jsx)(yi,{children:e.label})]},t)))},t);case"chart":return(0,We.jsx)(vi,{delay:`${n}s`,isVisible:r,children:(0,We.jsx)(bi,{src:e.src,alt:e.alt})},t);case"custom":return(0,We.jsx)(li,{delay:`${n}s`,isVisible:r,children:e.render(r)},t);default:return null}})):null)]});var o},wi=$r`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Si=$r`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`,ki=Dr.footer`
  text-align: center;
  padding: 40px 20px;
  margin-top: 50px;
  color: ${e=>{let{theme:t}=e;return t.colors.textSecondary}};
  font-size: 0.9rem;
  position: relative;
  opacity: 0;
  animation: ${wi} 1s forwards;
  animation-delay: 0.2s;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      ${e=>{let{theme:t}=e;return t.colors.brand}},
      ${e=>{let{theme:t}=e;return t.colors.accent}},
      transparent
    );
  }
`,ji=Dr.div`
  font-size: 1.8rem;
  font-weight: 300;
  margin-bottom: 15px;
  letter-spacing: 2px;
  
  background: linear-gradient(
    to right,
    ${e=>{let{theme:t}=e;return t.colors.brand}},
    ${e=>{let{theme:t}=e;return t.colors.accent}},
    ${e=>{let{theme:t}=e;return t.colors.brandLight}}
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${Si} 6s linear infinite;
  display: inline-block;
`,Ei=Dr.p`
  color: ${e=>{let{theme:t}=e;return t.colors.textSecondary}};
  margin-bottom: 15px;
  font-size: 1rem;
  letter-spacing: 1px;
`,Ci=Dr.p`
  color: ${e=>{let{theme:t}=e;return t.colors.textSecondary}};
  margin-bottom: 8px;
  font-size: 0.85rem;
`,Ni=Dr.p`
  color: ${e=>{let{theme:t}=e;return t.colors.accent}};
  font-size: 0.85rem;
  letter-spacing: 0.5px;
`,Pi=()=>{const e=(new Date).getFullYear();return(0,We.jsxs)(ki,{children:[(0,We.jsx)(ji,{children:"\u039a\u03b1\u03b9\u03c1\u03cc\u03c2"}),(0,We.jsx)(Ei,{children:"Smart Journal for Mindful Growth"}),(0,We.jsxs)(Ci,{children:["\xa9 ",e," \u039a\u03b1\u03b9\u03c1\u03cc\u03c2. All rights reserved."]}),(0,We.jsx)(Ni,{children:"This document contains confidential information and is protected under NDA."})]})},_i=($r`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Dr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin: 40px 0;
`),Ti=Dr.div`
  background: linear-gradient(
    135deg,
    rgba(43, 70, 60, 0.8) 0%,
    rgba(43, 70, 60, 0.5) 100%
  );
  border-radius: 15px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: ${e=>{let{accentColor:t}=e;return t||"linear-gradient(90deg, #0D7B3E, #10B068)"}};
    opacity: 0.8;
  }

  ${e=>{let{popular:t}=e;return t&&"\n    border: 2px solid rgba(230, 184, 156, 0.5);\n    transform: scale(1.05);\n    \n    &:hover {\n      transform: translateY(-10px) scale(1.05);\n    }\n    \n    &::before {\n      height: 7px;\n    }\n  "}}
`,zi=Dr.div`
  position: absolute;
  top: 15px;
  right: -30px;
  background: ${e=>{let{theme:t}=e;return t.colors.accent}};
  color: white;
  padding: 5px 40px;
  font-size: 0.8rem;
  font-weight: 600;
  transform: rotate(45deg);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`,Oi=Dr.h3`
  font-size: 1.8rem;
  margin: 0 0 15px;
  color: white;
`,Ii=Dr.div`
  margin: 20px 0;
`,Ri=Dr.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${e=>{let{theme:t}=e;return t.colors.accentLight}};
  margin: 5px 0;
  
  span {
    font-size: 1rem;
    opacity: 0.8;
  }
`,Di=Dr.div`
  font-size: 0.9rem;
  color: #b0b0b0;
  margin-bottom: 20px;
`,Li=Dr.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 30px;
  flex-grow: 1;
`,$i=Dr.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  color: #e0e0e0;
  font-size: 0.95rem;
  line-height: 1.5;
  
  svg {
    margin-right: 10px;
    color: ${e=>{let{theme:t}=e;return t.colors.accent}};
    min-width: 20px;
    margin-top: 2px;
  }
`,Ai=e=>{let{isVisible:t}=e;const n=()=>(0,We.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,We.jsx)("polyline",{points:"20 6 9 17 4 12"})});return(0,We.jsxs)(_i,{children:[(0,We.jsxs)(Ti,{accentColor:"linear-gradient(90deg, #0D7B3E, #0A6030)",children:[(0,We.jsx)(Oi,{children:"Essential"}),(0,We.jsxs)(Ii,{children:[(0,We.jsxs)(Ri,{children:["\u20ac11.99",(0,We.jsx)("span",{children:"/mo"})]}),(0,We.jsx)(Di,{children:"Billed monthly"})]}),(0,We.jsxs)(Li,{children:[(0,We.jsxs)($i,{children:[n()," Text extraction and basic insights"]}),(0,We.jsxs)($i,{children:[n()," 10-day Self-Discovery journey"]}),(0,We.jsxs)($i,{children:[n()," Progress tracking"]}),(0,We.jsxs)($i,{children:[n()," 1GB cloud storage"]}),(0,We.jsxs)($i,{children:[n()," Basic privacy features"]})]})]}),(0,We.jsxs)(Ti,{accentColor:"linear-gradient(90deg, #E6B89C, #E69A73)",popular:!0,children:[(0,We.jsx)(zi,{children:"POPULAR"}),(0,We.jsx)(Oi,{children:"Insight"}),(0,We.jsxs)(Ii,{children:[(0,We.jsxs)(Ri,{children:["\u20ac16.99",(0,We.jsx)("span",{children:"/mo"})]}),(0,We.jsx)(Di,{children:"Billed monthly"})]}),(0,We.jsxs)(Li,{children:[(0,We.jsxs)($i,{children:[n()," Everything in Essential, plus:"]}),(0,We.jsxs)($i,{children:[n()," Advanced pattern recognition"]}),(0,We.jsxs)($i,{children:[n()," Emotional insights analysis"]}),(0,We.jsxs)($i,{children:[n()," Custom audio meditations"]}),(0,We.jsxs)($i,{children:[n()," Three journey themes"]}),(0,We.jsxs)($i,{children:[n()," 5GB cloud storage"]}),(0,We.jsxs)($i,{children:[n()," Enhanced privacy options"]})]})]}),(0,We.jsxs)(Ti,{accentColor:"linear-gradient(90deg, #B3A369, #D4C483)",children:[(0,We.jsx)(Oi,{children:"Legacy"}),(0,We.jsxs)(Ii,{children:[(0,We.jsxs)(Ri,{children:["\u20ac21.99",(0,We.jsx)("span",{children:"/mo"})]}),(0,We.jsx)(Di,{children:"Billed monthly"})]}),(0,We.jsxs)(Li,{children:[(0,We.jsxs)($i,{children:[n()," Everything in Insight, plus:"]}),(0,We.jsxs)($i,{children:[n()," Custom journey creation"]}),(0,We.jsxs)($i,{children:[n()," Monthly AI coaching session"]}),(0,We.jsxs)($i,{children:[n()," Personal journal book compilation"]}),(0,We.jsxs)($i,{children:[n()," Unlimited cloud storage"]}),(0,We.jsxs)($i,{children:[n()," Export features"]}),(0,We.jsxs)($i,{children:[n()," Priority support"]})]})]})]})},Fi=[{id:"vision",number:"1",title:"Executive Overview & Vision",content:[{type:"subheading",text:"Our Core Purpose"},{type:"paragraph",text:"\u039a\u03b1\u03b9\u03c1\u03cc\u03c2 exists to bridge the gap between the deeply personal experience of handwritten journaling and the insights made possible through technology, creating a seamless experience that honors both worlds without compromising either."},{type:"highlight",title:"Our Name: \u039a\u03b1\u03b9\u03c1\u03cc\u03c2",text:'From ancient Greek, meaning "the opportune moment" or "the right time for action." In our context, it represents:',items:["The perfect moment to bridge analog and digital worlds","The opportune time for meaningful self-reflection","The right balance between technological efficiency and human touch"]},{type:"subheading",text:"The Problems We're Solving"},{type:"stats",items:[{value:"80%",label:"Journals abandoned within first month"},{value:"90%",label:"Entries never revisited for patterns"},{value:"7hr",label:"Average daily screen time (ages 25-40)"},{value:"70%+",label:"Users cite privacy concerns with digital journaling"}]},{type:"paragraph",text:"We've identified four critical problems in the journaling space:"},{type:"list",items:["The Abandonment Problem: 80% of journals are abandoned within a month of purchase. Users lack structure and guidance to maintain the habit.","The Insight Gap: 90% of handwritten entries are never revisited for patterns. Valuable self-knowledge remains buried in unanalyzed pages.","The Digital Dilemma: Digital journaling increases screen time and anxiety, while handwriting offers neurological benefits that typing can't match.",'The Structure Deficit: Most journaling practices lack progressive frameworks, leaving users uncertain about "what to write" or "if they\'re doing it right."']},{type:"subheading",text:"Our Solution: The Physical-Digital Bridge"},{type:"paragraph",text:"\u039a\u03b1\u03b9\u03c1\u03cc\u03c2 creates a seamless bridge between analog writing and digital insights through:"},{type:"list",items:["NFC-Enabled Journals: Premium physical journals with embedded NFC technology","Smartphone Scanning: Quick scanning of handwritten entries","AI-Powered Analysis: Handwriting recognition with emotional pattern detection","Structured Journey Framework: Guided 10-day journaling paths","Privacy-First Design: Local processing options for sensitive content"]},{type:"highlight",title:"Key Transformations We Create",items:["Scattered thoughts \u2192 Structured insights","Abandoned practice \u2192 Consistent habit","Uncertainty about progress \u2192 Visible growth","One-time reflections \u2192 Progressive journeys","Isolated writing \u2192 Connected experience"]}]},{id:"product",number:"2",title:"Product Specifications",content:[{type:"subheading",text:"Physical Journal Packages"},{type:"smallheading",text:"Essential Package (\u20ac79)"},{type:"paragraph",text:"Perfect entry point for quality-conscious journalers with the full NFC technology."},{type:"list",items:["Dark green leatherette journal with NFC","200 pages of 100gsm cream paper","\u039a\u03b1\u03b9\u03c1\u03cc\u03c2 branded ergonomic gel pen","Single black ribbon bookmark","3-month Essential subscription"]},{type:"smallheading",text:"Insight Package (\u20ac129)"},{type:"paragraph",text:"Enhanced experience with premium materials and advanced analytics."},{type:"list",items:["Genuine leather journal with gold accents","250 pages of 120gsm premium paper","Brass dip pen with three nibs","Dual-colored ribbon bookmarks","6-month Insight subscription"]},{type:"smallheading",text:"Legacy Package (\u20ac199)"},{type:"paragraph",text:"Exquisite craftsmanship with maximum personalization features."},{type:"list",items:["Hand-bound full-grain leather journal","300 pages with gold leaf edges","Handcrafted quill & brass dip pens","Complete journaling ritual kit","12-month Legacy subscription"]},{type:"subheading",text:"Digital Subscription Tiers"},{type:"smallheading",text:"Essential Tier (\u20ac9.99/month)"},{type:"list",items:["Basic text extraction & emotional tone analysis","Self-Discovery Journey (10-day framework)","Basic progress tracking dashboard","1GB cloud storage (optional)","Daily journaling reminder"]},{type:"smallheading",text:"Insight Tier (\u20ac14.99/month)"},{type:"list",items:["Advanced pattern recognition across entries","Access to all three standard journaling paths","Custom audio meditations","Enhanced privacy options","Interactive journaling prompts"]},{type:"smallheading",text:"Legacy Tier (\u20ac19.99/month)"},{type:"list",items:["Custom journey creation tools","Monthly AI coaching session","Personal journal book compilation","Maximum privacy with local-only processing","Integration with third-party apps"]},{type:"subheading",text:"Journey Framework"},{type:"paragraph",text:"All journeys follow our structured progressive framework, adapted to their specific duration:"},{type:"list",items:["Introduction: Establishing baseline and intentions","Exploration: Open-ended discovery of the theme","Challenge: Confronting obstacles and resistance","Insight: Drawing connections and patterns","Integration: Applying learnings to daily life","Synthesis: Reviewing and setting future direction"]},{type:"highlight",title:"New in \u039a\u03b1\u03b9\u03c1\u03cc\u03c2 v1.4.0 (March 2025)",text:"Our latest release introduces several major enhancements:",items:["Flexible Journey Architecture - Support for multiple durations (10, 14, 21, 30, and 100 days)","New Creative Expression Journey - 14-day path for developing artistic practice","New Habit Formation Journey - 30-day framework for lasting behavior changes","Premium Life Vision Journey - 100-day guided life planning experience","Journey Filtering System - Filter paths by status or duration","Adaptive UI System - Interface that adjusts to journey length","Journey Theming Engine - Path-specific color schemes and iconography"]}]},{id:"technology",number:"3",title:"Technical Innovation",content:[{type:"subheading",text:"System Architecture"},{type:"paragraph",text:"The \u039a\u03b1\u03b9\u03c1\u03cc\u03c2 system creates a seamless bridge between physical journals and digital analysis through our proprietary architecture, now enhanced with a centralized journey registry:"},{type:"list",items:["Centralized Journey Registry: Core architecture enabling easy addition of new paths with minimal code changes","Flexible Path Architecture: Support for paths of varied durations (10, 14, 21, 30, and 100 days)","Dynamic Content Delivery: Intelligent day grouping and themed presentation","Multi-tier Privacy Model: User control over data processing with flexible options"]},{type:"chart",src:"/static/diagrams/system-architecture-diagram.svg",alt:"System Architecture Diagram"},{type:"subheading",text:"NFC Implementation"},{type:"paragraph",text:"Our NFC implementation contains several innovative elements that elevate it beyond standard NFC applications:"},{type:"list",items:["Dynamic URL Routing: Unlike static NFC tags, our system generates context-aware deep links","Cross-Device Continuity: Session state maintained across multiple devices","Progressive Authentication: Tiered access with optional privacy modes","Offline Capability: Functions without internet connection","Hardware-Software Binding: Physical journal linked to digital account securely"]},{type:"chart",src:"/static/diagrams/nfc-implementation-diagram.svg",alt:"NFC Implementation Diagram"},{type:"subheading",text:"Handwriting Recognition System"},{type:"paragraph",text:"The \u039a\u03b1\u03b9\u03c1\u03cc\u03c2 handwriting analysis system employs a custom-trained machine learning model specifically optimized for journal entries:"},{type:"list",items:["Handles varied handwriting styles with 92%+ accuracy","Preserves semantic meaning over literal transcription","Recognizes emotional indicators from pressure and style","Maintains connection between visual elements and text","Adapts to individual user's handwriting over time","Operates partially or fully on-device for privacy"]},{type:"subheading",text:"Privacy Architecture"},{type:"paragraph",text:"A core innovation is our tiered privacy model that puts users in control of their data:"},{type:"list",items:["Level 1: Complete local processing (no cloud)","Level 2: Anonymized pattern analysis only","Level 3: Full cloud processing with encryption","Level 4: Secure sharing with selected mentors/coaches"]},{type:"highlight",title:"Intellectual Property Protection",text:"Our technology is protected through a comprehensive IP strategy:",items:["Provisional patent application filed for the integrated physical-digital journaling system",'Trademark protection for "\u039a\u03b1\u03b9\u03c1\u03cc\u03c2" in relation to journaling products',"Software copyright for the handwriting analysis algorithm","Trade secrets protection for the journey framework methodology"]}]},{id:"market",number:"4",title:"Market & Business Model",content:[{type:"subheading",text:"Target Market"},{type:"paragraph",text:"Our solution is designed primarily for:"},{type:"list",items:["Age: 25-40 years old (Millennials and Gen Z)","Mindset: Values both technology and meaningful analog experiences","Behaviors: Has attempted journaling before but struggled with consistency","Desires: Seeks personal growth, mindfulness, and self-understanding","Frustrations: Feels torn between digital efficiency and screen-free experiences"]},{type:"subheading",text:"Market Size & Opportunity"},{type:"stats",items:[{value:"\u20ac150-160B",label:"Global stationery market size"},{value:"\u20ac1-5B",label:"Premium journal segment"},{value:"\u20ac10-15B",label:"Wellness app market size"},{value:"20-30%",label:"Millennials & Gen Z journaling adoption"}]},{type:"highlight",title:"Competitive Landscape",text:"The journaling market is fragmented with no dominant player bridging physical and digital:",items:["Traditional Journal Brands: Moleskine, Leuchtturm1917, Papier (no digital component)","Digital Journaling Apps: Day One, Journey, Daylio (no physical component)","Limited Bridge Attempts: Rocketbook, Moleskine Smart Writing Set (focus on replication, not enhancement)"]},{type:"paragraph",text:"\u039a\u03b1\u03b9\u03c1\u03cc\u03c2 stands apart by creating true enhancement of the writing experience rather than just digitization."},{type:"subheading",text:"Business Model"},{type:"smallheading",text:"Revenue Streams"},{type:"list",items:["Physical Products: One-time purchases of journals and accessories (\u20ac79-499)","Digital Subscriptions: Monthly recurring revenue (\u20ac9.99-19.99/month)","B2B Partnerships: Team packages and organizational implementations","Expanded Accessories: Additional journals, pens, and complementary items"]},{type:"chart",src:"/static/charts/revenue-mix-pie-chart.svg",alt:"Revenue Mix Pie Chart"},{type:"smallheading",text:"Unit Economics (Industry-Validated)"},{type:"list",items:["Journal Gross Margin: 40% (aligned with premium stationery industry averages)","Subscription Gross Margin: 80-85% (after infrastructure costs)","Customer Acquisition Cost (CAC): \u20ac37","Lifetime Value (LTV): \u20ac111","LTV:CAC Ratio: 3:1 (industry standard for sustainable growth)"]}]},{id:"roadmap",number:"5",title:"Growth Roadmap",content:[{type:"subheading",text:"Current Status"},{type:"paragraph",text:"We've been developing the \u039a\u03b1\u03b9\u03c1\u03cc\u03c2 concept for about three weeks, and have achieved:"},{type:"list",items:["Functioning prototype with NFC chip integration","Complete v1.4.0 software release with flexible journey architecture","Seven journaling paths of varying durations (10-100 days)","Three specialized journeys for creativity, habits, and life planning","Adaptive UI system with journey-specific theming","Created visual assets and landing page with NDA functionality","Developed early waitlist with 179+ signups"]},{type:"subheading",text:"Development Timeline"},{type:"smallheading",text:"Q2 2025: Validation & Pre-Seed"},{type:"list",items:["Complete working prototype with functional NFC","Secure pre-seed funding of \u20ac10,000","Grow waitlist to 500+ potential customers","Conduct user testing with 10-15 beta testers","File provisional patent application"]},{type:"smallheading",text:"Q3 2025: Seed Funding & Production"},{type:"list",items:["Secure seed funding of \u20ac250,000","Launch Kickstarter campaign for initial orders","Establish manufacturing partnerships","Finalize app development for both iOS and Android","Prepare for limited production run"]},{type:"smallheading",text:"Q4 2025: Launch & Initial Distribution"},{type:"list",items:["Begin first production run (2,000 units)","Launch to waitlist and Kickstarter backers","Establish direct-to-consumer sales channel","Begin outreach to premium retail partners","Start development of add-on products"]},{type:"smallheading",text:"2026: Growth & Expansion"},{type:"list",items:["Scale production to 10,000+ units","Expand to select European retail partners","Launch complete add-on product ecosystem","Develop B2B offering for corporate wellness","Prepare for Series A funding round"]},{type:"subheading",text:"Key Metrics for Success"},{type:"stats",items:[{value:"500+",label:"Waitlist signups by Q2 2025"},{value:"5,000",label:"Units sold in first year"},{value:"40%",label:"Subscription retention rate"},{value:"\u20ac750K",label:"Revenue target for year 1"}]}]},{id:"investment",number:"6",title:"Investment Opportunity",content:[{type:"subheading",text:"Funding Strategy"},{type:"chart",src:"/static/charts/funding-roadmap-chart.svg",alt:"Funding Roadmap Chart"},{type:"paragraph",text:"We are taking a staged approach to funding to maximize value creation at each step:"},{type:"smallheading",text:"Current Funding Round Details"},{type:"highlight",title:"Pre-Seed Round Details",items:["Raising: \u20ac10,000","Instrument: Convertible note with 20% discount at seed","Minimum Investment: \u20ac2,000","Use of Funds: Production-ready prototype, app development, IP protection","Timeline: Closing by April 2025"]},{type:"subheading",text:"Financial Projections"},{type:"paragraph",text:"Based on validated industry metrics:"},{type:"chart",src:"/static/charts/revenue-growth-chart.svg",alt:"Revenue Growth Chart"},{type:"subheading",text:"Use of Funds"},{type:"chart",src:"/static/charts/use-of-funds-pie-chart-final.svg",alt:"Use of Funds Pie Chart"},{type:"paragraph",text:"The pre-seed investment will be allocated to:"},{type:"list",items:["40% - Product Development: Finalize NFC implementation, create production-ready prototypes","30% - Software Development: Complete core app functionality for both iOS and Android","15% - IP Protection: File provisional patent, trademark registration","10% - Marketing: Grow waitlist, create professional photography and video","5% - Operations: Legal, administrative, and business development"]}]},{id:"team",number:"7",title:"Contact & Next Steps",content:[{type:"highlight",title:"Connect With Us",items:["Email: hello@kairos-journal.com","Phone: +44 123 456 7890","Schedule a call via our calendar booking system"]},{type:"subheading",text:"Ways to Get Involved"},{type:"smallheading",text:"Investment Partner"},{type:"paragraph",text:"Join our pre-seed funding round with a minimum investment of \u20ac2,000 and be part of our journey from the beginning. Includes exclusive investor updates and early access to product developments."},{type:"smallheading",text:"Strategic Partner"},{type:"paragraph",text:"Offer your expertise in manufacturing, technology, or distribution. We're looking for partners who can help us bring \u039a\u03b1\u03b9\u03c1\u03cc\u03c2 to market efficiently and with excellence."},{type:"smallheading",text:"Beta Tester"},{type:"paragraph",text:"Join our early access program to test prototypes and provide valuable feedback. Help shape the \u039a\u03b1\u03b9\u03c1\u03cc\u03c2 experience before it reaches the wider market."},{type:"highlight",title:"Why This Matters",text:"In a world increasingly dominated by screens and digital tools, \u039a\u03b1\u03b9\u03c1\u03cc\u03c2 represents something vital: technology that honors and enhances our most human experiences rather than replacing them."},{type:"paragraph",text:"By creating a bridge between handwritten reflection and digital insight, we're not just building another app or another journal\u2014we're demonstrating a new way that technology can serve our deepest human needs for reflection, growth, and meaning."}]},{id:"references",number:"8",title:"References & Sources",content:[{type:"subheading",text:"Market Research"},{type:"list",items:["Grand View Research (2024). Stationery Products Market Size And Share Report, 2030.","Fortune Business Insights (2024). Stationery Products Market Size, Share & Growth Report, 2032.","Grand View Research (2024). Wellness Apps Market Size & Share Report, 2030.","Verified Market Research (2024). Journal App Market Size, Share, Scope, Opportunities & Forecast."]},{type:"subheading",text:"User Behavior"},{type:"list",items:["Study Finds (2024). New habits die easy: Average person gives up on positive lifestyle changes after 7 weeks.","Backlinko (2024). Revealing Average Screen Time Statistics for 2025.","Research2Guidance (2023). mHealth App Economy 2023: Current Status and Future Trends in Mobile Health."]},{type:"subheading",text:"Industry Metrics"},{type:"list",items:["Moleskine SpA (2024). Financial Results.","RevenueCat (2024). Average subscription renewal rates for apps by category.","Business of Apps (2024). App user retention statistics."]}]}],Mi=$r`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,Bi=$r`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
`,Ui=Dr.div`
  width: 100%;
  min-height: 100vh;
  background-color: #121212; /* Much darker background */
  background-image: radial-gradient(
    circle at 10% 20%, 
    rgba(43, 70, 60, 0.3) 0%,
    rgba(30, 30, 30, 0.5) 50%,
    rgba(13, 13, 13, 0.7) 100%
  );
  background-size: 200% 200%;
  animation: ${Bi} 30s ease infinite;
  color: ${e=>{let{theme:t}=e;return t.colors.textPrimary}};
  padding: 20px;
`,Wi=Dr.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`,Vi=Dr.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  font-size: 12vw;
  color: rgba(255, 255, 255, 0.02);
  pointer-events: none;
  z-index: 1;
  font-weight: 700;
  white-space: nowrap;
`,Hi=Dr.div`
  position: relative;
  border-radius: 15px;
  margin-bottom: 60px;
  
  &::before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    z-index: -1;
    border-radius: 18px;
    background: linear-gradient(
      45deg, 
      ${e=>{let{theme:t}=e;return t.colors.brand}}, 
      ${e=>{let{theme:t}=e;return t.colors.accent}}, 
      ${e=>{let{theme:t}=e;return t.colors.brandDark}}, 
      ${e=>{let{theme:t}=e;return t.colors.accentLight}}
    );
    background-size: 300% 300%;
    animation: ${Mi} 10s ease infinite;
    opacity: 0.7;
    filter: blur(3px);
  }
`,Yi=Dr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 30px 0;
`,Ki=Dr.div`
  background: linear-gradient(
    135deg,
    rgba(43, 70, 60, 0.7) 0%,
    rgba(43, 70, 60, 0.4) 100%
  );
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
`,Qi=Dr.div`
  height: 250px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${Ki}:hover & img {
    transform: scale(1.05);
  }
`,Gi=Dr.div`
  padding: 25px;
`,qi=Dr.div`
  display: inline-block;
  padding: 5px 10px;
  background: ${e=>{let{theme:t}=e;return t.colors.brand}};
  color: white;
  font-size: 0.8rem;
  border-radius: 20px;
  margin-bottom: 10px;
`,Ji=Dr.h3`
  font-size: 1.5rem;
  margin: 10px 0;
  color: ${e=>{let{theme:t}=e;return t.colors.accent}};
`,Xi=Dr.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 15px 0;
  color: ${e=>{let{theme:t}=e;return t.colors.accentLight}};
`,Zi=Dr.p`
  color: #d0d0d0;
  margin-bottom: 20px;
  line-height: 1.6;
`,eo={id:"products-section",number:"5",title:"Our Product Lineup",content:[{type:"paragraph",text:"Our product range offers a complete journaling experience, from premium physical journals with embedded NFC technology to digital subscriptions that provide AI-powered insights."},{type:"subheading",text:"Physical Products"},{type:"custom",render:e=>(0,We.jsxs)(Yi,{children:[(0,We.jsxs)(Ki,{children:[(0,We.jsx)(Qi,{children:(0,We.jsx)("img",{src:"/kairos-landing-page/static/images/product/journal_essential.jpg",alt:"Essential Journal"})}),(0,We.jsxs)(Gi,{children:[(0,We.jsx)(qi,{children:"Basic"}),(0,We.jsx)(Ji,{children:"\u039a\u03b1\u03b9\u03c1\u03cc\u03c2 Essential"}),(0,We.jsx)(Xi,{children:"\u20ac89"}),(0,We.jsx)(Zi,{children:"Perfect entry point with leatherette journal, 200 pages, and 1-month complimentary subscription."})]})]}),(0,We.jsxs)(Ki,{children:[(0,We.jsx)(Qi,{children:(0,We.jsx)("img",{src:"/kairos-landing-page/static/images/product/journal_insight.jpg",alt:"Insight Journal"})}),(0,We.jsxs)(Gi,{children:[(0,We.jsx)(qi,{children:"Advanced"}),(0,We.jsx)(Ji,{children:"\u039a\u03b1\u03b9\u03c1\u03cc\u03c2 Insight"}),(0,We.jsx)(Xi,{children:"\u20ac149"}),(0,We.jsx)(Zi,{children:"Premium leather journal with brass pen, specialty nibs, and 3-month complimentary subscription."})]})]}),(0,We.jsxs)(Ki,{children:[(0,We.jsx)(Qi,{children:(0,We.jsx)("img",{src:"/kairos-landing-page/static/images/product/journal_legacy.jpg",alt:"Legacy Journal"})}),(0,We.jsxs)(Gi,{children:[(0,We.jsx)(qi,{children:"Premium"}),(0,We.jsx)(Ji,{children:"\u039a\u03b1\u03b9\u03c1\u03cc\u03c2 Legacy"}),(0,We.jsx)(Xi,{children:"\u20ac249"}),(0,We.jsx)(Zi,{children:"Exquisite hand-bound leather journal with complete journaling ritual kit and 6-month complimentary subscription."})]})]})]})},{type:"paragraph",text:"Each product tier includes our proprietary NFC technology and provides access to our AI-powered app that transforms handwritten journal entries into structured insights."},{type:"subheading",text:"Digital Subscriptions"},{type:"paragraph",text:"After your complimentary subscription period ends, choose from one of our flexible subscription plans to continue your journaling journey:"},{type:"custom",render:e=>(0,We.jsx)(Ai,{isVisible:e})},{type:"highlight",title:"Bundle & Save",text:"Get more value with our special product bundles:",items:["Essential Bundle (\u20ac189): Journal + 12-month subscription (Save \u20ac64)","Insight Bundle (\u20ac269): Journal + 12-month subscription (Save \u20ac84)","Legacy Bundle (\u20ac379): Journal + 12-month subscription (Save \u20ac114)","Family Bundle (\u20ac499): 2 Insight + 2 Essential journals + 12-month subscription for 4 (Save \u20ac326)"]}]},to=()=>{const[e,n]=(0,t.useState)(!0);(0,t.useEffect)((()=>{window.scrollTo(0,0)}),[]);const r=[...Fi];return r.splice(3,0,eo),(0,We.jsxs)(Ui,{children:[(0,We.jsx)(Vi,{children:"CONFIDENTIAL"}),(0,We.jsxs)(Wi,{children:[(0,We.jsx)(Hi,{children:(0,We.jsx)(Va,{})}),(0,We.jsx)(Hi,{children:(0,We.jsx)(ei,{sections:r,onSectionClick:e=>{const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})}})}),r.map((e=>(0,We.jsx)(Hi,{children:(0,We.jsx)(xi,{section:e})},e.id))),(0,We.jsx)(Pi,{})]})]})},no=Dr.div`
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  min-height: 100vh;
  padding: 80px 20px 40px;
  color: ${e=>{let{theme:t}=e;return t.colors.textPrimary}};
`,ro=Dr.div`
  max-width: 900px;
  margin: 0 auto;
  background-color: ${e=>{let{theme:t}=e;return t.colors.white}};
  padding: 40px;
  border-radius: 15px;
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.md}};
`,ao=Dr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.border}};
`,io=Dr(Ce)`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${e=>{let{theme:t}=e;return t.colors.brand}};
  text-decoration: none;
  display: flex;
  align-items: center;
  
  img {
    height: 40px;
    margin-right: 10px;
  }
`,oo=Dr(Ce)`
  padding: 8px 15px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  color: ${e=>{let{theme:t}=e;return t.colors.textSecondary}};
  text-decoration: none;
  border-radius: 5px;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.border}};
  }
`,lo=Dr.h1`
  font-size: 2.4rem;
  margin-bottom: 20px;
  color: ${e=>{let{theme:t}=e;return t.colors.textPrimary}};
`,so=Dr.p`
  font-size: 0.9rem;
  color: ${e=>{let{theme:t}=e;return t.colors.textSecondary}};
  margin-bottom: 30px;
`,co=Dr.section`
  margin-bottom: 30px;
`,uo=Dr.h2`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: ${e=>{let{theme:t}=e;return t.colors.brand}};
`,po=Dr.p`
  margin-bottom: 15px;
  line-height: 1.6;
`,fo=Dr.ul`
  margin: 15px 0 15px 20px;
`,ho=Dr.li`
  margin-bottom: 10px;
  line-height: 1.6;
`,mo=Dr.footer`
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.colors.border}};
  font-size: 0.9rem;
  color: ${e=>{let{theme:t}=e;return t.colors.textSecondary}};
  text-align: center;
`,go=()=>((0,t.useEffect)((()=>{window.scrollTo(0,0)}),[]),(0,We.jsx)(no,{children:(0,We.jsxs)(ro,{children:[(0,We.jsxs)(ao,{children:[(0,We.jsxs)(io,{to:"/",children:[(0,We.jsx)("img",{src:"/kairos-landing-page/static/icons/kairos-logo.svg",alt:"\u039a\u03b1\u03b9\u03c1\u03cc\u03c2"}),"\u039a\u03b1\u03b9\u03c1\u03cc\u03c2"]}),(0,We.jsx)(oo,{to:"/",children:"\u2190 Back to Home"})]}),(0,We.jsx)(lo,{children:"Privacy Policy"}),(0,We.jsx)(so,{children:"Last Updated: March 15, 2025"}),(0,We.jsx)(co,{children:(0,We.jsx)(po,{children:"At \u039a\u03b1\u03b9\u03c1\u03cc\u03c2, we take your privacy seriously. This Privacy Policy describes how your personal information is collected, used, and shared when you visit our website or use our Smart Journal service."})}),(0,We.jsxs)(co,{children:[(0,We.jsx)(uo,{children:"1. Information We Collect"}),(0,We.jsx)(po,{children:"When you use our services, we may collect several types of information:"}),(0,We.jsxs)(fo,{children:[(0,We.jsxs)(ho,{children:[(0,We.jsx)("strong",{children:"Account Information:"})," When you create an account, we collect your name, email address, and other contact information."]}),(0,We.jsxs)(ho,{children:[(0,We.jsx)("strong",{children:"Journal Content:"})," The content you write in your journal, which may include personal reflections and experiences."]}),(0,We.jsxs)(ho,{children:[(0,We.jsx)("strong",{children:"Usage Data:"})," Information about how you use our service, including frequency of journaling, features used, and time spent."]}),(0,We.jsxs)(ho,{children:[(0,We.jsx)("strong",{children:"Device Information:"})," Information about the device you use to access our service, including hardware model, operating system, and browser type."]})]})]}),(0,We.jsxs)(co,{children:[(0,We.jsx)(uo,{children:"2. How We Use Your Information"}),(0,We.jsx)(po,{children:"We use the information we collect to:"}),(0,We.jsxs)(fo,{children:[(0,We.jsx)(ho,{children:"Provide, maintain, and improve our services"}),(0,We.jsx)(ho,{children:"Process and fulfill your requests for our products and services"}),(0,We.jsx)(ho,{children:"Analyze patterns and trends to enhance the user experience"}),(0,We.jsx)(ho,{children:"Communicate with you about our services, including updates and promotional offers"}),(0,We.jsx)(ho,{children:"Detect, investigate, and prevent fraudulent transactions and unauthorized access to our services"})]})]}),(0,We.jsxs)(co,{children:[(0,We.jsx)(uo,{children:"3. Privacy Controls and Choices"}),(0,We.jsx)(po,{children:"\u039a\u03b1\u03b9\u03c1\u03cc\u03c2 offers a multi-tiered privacy architecture that gives you control over your data:"}),(0,We.jsxs)(fo,{children:[(0,We.jsxs)(ho,{children:[(0,We.jsx)("strong",{children:"Level 1 - Complete Local Processing:"})," Your journal entries remain on your device, with no cloud transmission."]}),(0,We.jsxs)(ho,{children:[(0,We.jsx)("strong",{children:"Level 2 - Anonymized Pattern Analysis:"})," Only anonymized patterns are analyzed in the cloud."]}),(0,We.jsxs)(ho,{children:[(0,We.jsx)("strong",{children:"Level 3 - Full Cloud Processing:"})," Entries are processed in the cloud with encryption."]}),(0,We.jsxs)(ho,{children:[(0,We.jsx)("strong",{children:"Level 4 - Secure Sharing:"})," Optional secure sharing with selected mentors or coaches."]})]}),(0,We.jsx)(po,{children:"You can change your privacy settings at any time through your account preferences."})]}),(0,We.jsxs)(co,{children:[(0,We.jsx)(uo,{children:"4. Data Retention"}),(0,We.jsx)(po,{children:"We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law."}),(0,We.jsx)(po,{children:"You can request deletion of your account and associated data at any time through your account settings or by contacting us directly."})]}),(0,We.jsxs)(co,{children:[(0,We.jsx)(uo,{children:"5. Security"}),(0,We.jsx)(po,{children:"We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."}),(0,We.jsx)(po,{children:"These measures include encryption of sensitive data, secure authentication mechanisms, and regular security assessments."})]}),(0,We.jsxs)(co,{children:[(0,We.jsx)(uo,{children:"6. Changes to This Policy"}),(0,We.jsx)(po,{children:'We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.'})]}),(0,We.jsxs)(co,{children:[(0,We.jsx)(uo,{children:"7. Contact Us"}),(0,We.jsx)(po,{children:"If you have any questions about this Privacy Policy or our data practices, please contact us at:"}),(0,We.jsxs)(po,{children:[(0,We.jsx)("strong",{children:"Email:"})," privacy@kairos-journal.com",(0,We.jsx)("br",{}),(0,We.jsx)("strong",{children:"Address:"})," Neustiftgasse 21/1/9, B\xf6heimkirchen, 3107, Austria"]})]}),(0,We.jsxs)(mo,{children:["\xa9 ",(new Date).getFullYear()," \u039a\u03b1\u03b9\u03c1\u03cc\u03c2. All rights reserved."]})]})})),yo=Dr.div`
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  min-height: 100vh;
  padding: 80px 20px 40px;
  color: ${e=>{let{theme:t}=e;return t.colors.textPrimary}};
`,vo=Dr.div`
  max-width: 900px;
  margin: 0 auto;
  background-color: ${e=>{let{theme:t}=e;return t.colors.white}};
  padding: 40px;
  border-radius: 15px;
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.md}};
`,bo=Dr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.border}};
`,xo=Dr(Ce)`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${e=>{let{theme:t}=e;return t.colors.brand}};
  text-decoration: none;
  display: flex;
  align-items: center;
  
  img {
    height: 40px;
    margin-right: 10px;
  }
`,wo=Dr(Ce)`
  padding: 8px 15px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  color: ${e=>{let{theme:t}=e;return t.colors.textSecondary}};
  text-decoration: none;
  border-radius: 5px;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.border}};
  }
`,So=Dr.h1`
  font-size: 2.4rem;
  margin-bottom: 20px;
  color: ${e=>{let{theme:t}=e;return t.colors.textPrimary}};
`,ko=Dr.p`
  font-size: 0.9rem;
  color: ${e=>{let{theme:t}=e;return t.colors.textSecondary}};
  margin-bottom: 30px;
`,jo=Dr.section`
  margin-bottom: 30px;
`,Eo=Dr.h2`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: ${e=>{let{theme:t}=e;return t.colors.brand}};
`,Co=Dr.h3`
  font-size: 1.2rem;
  margin: 20px 0 10px;
  color: ${e=>{let{theme:t}=e;return t.colors.textPrimary}};
`,No=Dr.p`
  margin-bottom: 15px;
  line-height: 1.6;
`,Po=(Dr.ul`
  margin: 15px 0 15px 20px;
`,Dr.li`
  margin-bottom: 10px;
  line-height: 1.6;
`,Dr.footer`
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.colors.border}};
  font-size: 0.9rem;
  color: ${e=>{let{theme:t}=e;return t.colors.textSecondary}};
  text-align: center;
`),_o=()=>((0,t.useEffect)((()=>{window.scrollTo(0,0)}),[]),(0,We.jsx)(yo,{children:(0,We.jsxs)(vo,{children:[(0,We.jsxs)(bo,{children:[(0,We.jsxs)(xo,{to:"/",children:[(0,We.jsx)("img",{src:"/kairos-landing-page/static/icons/kairos-logo.svg",alt:"\u039a\u03b1\u03b9\u03c1\u03cc\u03c2"}),"\u039a\u03b1\u03b9\u03c1\u03cc\u03c2"]}),(0,We.jsx)(wo,{to:"/",children:"\u2190 Back to Home"})]}),(0,We.jsx)(So,{children:"Terms of Service"}),(0,We.jsx)(ko,{children:"Last Updated: March 15, 2025"}),(0,We.jsxs)(jo,{children:[(0,We.jsx)(No,{children:'These Terms of Service ("Terms") govern your access to and use of the \u039a\u03b1\u03b9\u03c1\u03cc\u03c2 Smart Journal service, including our website, mobile applications, and physical products (collectively, the "Service").'}),(0,We.jsx)(No,{children:"By using our Service, you agree to these Terms. If you do not agree to these Terms, you may not use the Service."})]}),(0,We.jsxs)(jo,{children:[(0,We.jsx)(Eo,{children:"1. Using Our Service"}),(0,We.jsx)(Co,{children:"1.1 Account Registration"}),(0,We.jsx)(No,{children:"To use certain features of the Service, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete."}),(0,We.jsx)(Co,{children:"1.2 Account Security"}),(0,We.jsx)(No,{children:'You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your account. We encourage you to use "strong" passwords (passwords that use a combination of upper and lower case letters, numbers, and symbols) with your account.'}),(0,We.jsx)(Co,{children:"1.3 Age Restrictions"}),(0,We.jsx)(No,{children:"The Service is not directed to children under 16. If you are under 16, you may not use the Service. If we learn that we have collected personal information from a child under 16, we will delete that information as quickly as possible."})]}),(0,We.jsxs)(jo,{children:[(0,We.jsx)(Eo,{children:"2. Subscriptions and Purchases"}),(0,We.jsx)(Co,{children:"2.1 Fees and Billing"}),(0,We.jsx)(No,{children:"Certain aspects of the Service require payment of fees. You agree to pay all fees in accordance with the fees, charges, and billing terms in effect at the time a fee is due and payable."}),(0,We.jsx)(Co,{children:"2.2 Subscription Terms"}),(0,We.jsx)(No,{children:"Our subscription services are billed on a recurring basis. You can cancel your subscription at any time, but no refunds will be issued for any partial billing periods."}),(0,We.jsx)(Co,{children:"2.3 Physical Products"}),(0,We.jsx)(No,{children:"For physical products purchased from \u039a\u03b1\u03b9\u03c1\u03cc\u03c2, title and risk of loss pass to you upon delivery of the product to the carrier. We reserve the right to modify, suspend, or discontinue the sale of any product at any time without notice."})]}),(0,We.jsxs)(jo,{children:[(0,We.jsx)(Eo,{children:"3. User Content"}),(0,We.jsx)(No,{children:'Our Service allows you to create, store, and share content such as journal entries, reflections, and associated data ("User Content").'}),(0,We.jsx)(Co,{children:"3.1 Ownership"}),(0,We.jsx)(No,{children:"You retain all rights in, and are solely responsible for, the User Content you create using our Service."}),(0,We.jsx)(Co,{children:"3.2 License to \u039a\u03b1\u03b9\u03c1\u03cc\u03c2"}),(0,We.jsx)(No,{children:"By submitting User Content to the Service, you grant \u039a\u03b1\u03b9\u03c1\u03cc\u03c2 a worldwide, non-exclusive, royalty-free license to use, copy, process, and store your User Content for the purposes of providing the Service to you. This license is solely to enable us to technically provide, improve, and develop the Service."}),(0,We.jsx)(Co,{children:"3.3 Privacy Controls"}),(0,We.jsx)(No,{children:"You have control over your User Content through our multi-tiered privacy architecture, as outlined in our Privacy Policy."})]}),(0,We.jsxs)(jo,{children:[(0,We.jsx)(Eo,{children:"4. Intellectual Property"}),(0,We.jsx)(No,{children:"The Service and its original content (excluding User Content), features, and functionality are and will remain the exclusive property of \u039a\u03b1\u03b9\u03c1\u03cc\u03c2 and its licensors."}),(0,We.jsx)(No,{children:"Our trademarks, service marks, and logos used and displayed on the Service are registered or unregistered trademarks of \u039a\u03b1\u03b9\u03c1\u03cc\u03c2. You may not use, copy, reproduce, or display any of these marks without our prior written permission."})]}),(0,We.jsxs)(jo,{children:[(0,We.jsx)(Eo,{children:"5. Disclaimer of Warranties"}),(0,We.jsx)(No,{children:'THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.'}),(0,We.jsx)(No,{children:"\u039a\u03b1\u03b9\u03c1\u03cc\u03c2 does not warrant that the Service will be uninterrupted or error-free, that defects will be corrected, or that the Service or the servers that make it available are free of viruses or other harmful components."})]}),(0,We.jsxs)(jo,{children:[(0,We.jsx)(Eo,{children:"6. Limitation of Liability"}),(0,We.jsx)(No,{children:"IN NO EVENT SHALL \u039a\u0391\u0399\u03a1\u038c\u03a3, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES WHATSOEVER ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE."}),(0,We.jsx)(No,{children:"Our liability is limited to the maximum extent permitted by law."})]}),(0,We.jsxs)(jo,{children:[(0,We.jsx)(Eo,{children:"7. Changes to These Terms"}),(0,We.jsx)(No,{children:'We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page and updating the "Last Updated" date.'}),(0,We.jsx)(No,{children:"You are advised to review these Terms periodically for any changes. Changes to these Terms are effective when they are posted on this page."})]}),(0,We.jsxs)(jo,{children:[(0,We.jsx)(Eo,{children:"8. Contact Us"}),(0,We.jsx)(No,{children:"If you have any questions about these Terms, please contact us at:"}),(0,We.jsxs)(No,{children:[(0,We.jsx)("strong",{children:"Email:"})," legal@kairos-journal.com",(0,We.jsx)("br",{}),(0,We.jsx)("strong",{children:"Address:"})," Neustiftgasse 21/1/9, B\xf6heimkirchen, 3107, Austria"]})]}),(0,We.jsxs)(Po,{children:["\xa9 ",(new Date).getFullYear()," \u039a\u03b1\u03b9\u03c1\u03cc\u03c2. All rights reserved."]})]})})),To=Dr.div`
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  min-height: 100vh;
  padding: 80px 20px 40px;
  color: ${e=>{let{theme:t}=e;return t.colors.textPrimary}};
`,zo=Dr.div`
  max-width: 900px;
  margin: 0 auto;
  background-color: ${e=>{let{theme:t}=e;return t.colors.white}};
  padding: 40px;
  border-radius: 15px;
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.md}};
`,Oo=Dr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.border}};
`,Io=Dr(Ce)`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${e=>{let{theme:t}=e;return t.colors.brand}};
  text-decoration: none;
  display: flex;
  align-items: center;
  
  img {
    height: 40px;
    margin-right: 10px;
  }
`,Ro=Dr(Ce)`
  padding: 8px 15px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  color: ${e=>{let{theme:t}=e;return t.colors.textSecondary}};
  text-decoration: none;
  border-radius: 5px;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.border}};
  }
`,Do=Dr.h1`
  font-size: 2.4rem;
  margin-bottom: 20px;
  color: ${e=>{let{theme:t}=e;return t.colors.textPrimary}};
`,Lo=Dr.p`
  font-size: 0.9rem;
  color: ${e=>{let{theme:t}=e;return t.colors.textSecondary}};
  margin-bottom: 30px;
`,$o=Dr.section`
  margin-bottom: 30px;
`,Ao=Dr.h2`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: ${e=>{let{theme:t}=e;return t.colors.brand}};
`,Fo=Dr.div`
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  border-left: 4px solid ${e=>{let{theme:t}=e;return t.colors.brand}};
  padding: 20px;
  margin: 20px 0;
  border-radius: 0 5px 5px 0;
`,Mo=Dr.p`
  margin-bottom: 15px;
  line-height: 1.6;
`,Bo=Dr.ul`
  margin: 15px 0 15px 20px;
`,Uo=Dr.li`
  margin-bottom: 10px;
  line-height: 1.6;
`,Wo=Dr.footer`
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.colors.border}};
  font-size: 0.9rem;
  color: ${e=>{let{theme:t}=e;return t.colors.textSecondary}};
  text-align: center;
`,Vo=Dr(Ce)`
  display: inline-block;
  background-color: ${e=>{let{theme:t}=e;return t.colors.brand}};
  color: white;
  padding: 12px 25px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 500;
  margin-top: 10px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.brandDark}};
  }
`,Ho=()=>((0,t.useEffect)((()=>{window.scrollTo(0,0)}),[]),(0,We.jsx)(To,{children:(0,We.jsxs)(zo,{children:[(0,We.jsxs)(Oo,{children:[(0,We.jsxs)(Io,{to:"/",children:[(0,We.jsx)("img",{src:"/kairos-landing-page/static/icons/kairos-logo.svg",alt:"\u039a\u03b1\u03b9\u03c1\u03cc\u03c2"}),"\u039a\u03b1\u03b9\u03c1\u03cc\u03c2"]}),(0,We.jsx)(Ro,{to:"/",children:"\u2190 Back to Home"})]}),(0,We.jsx)(Do,{children:"Confidentiality Statement"}),(0,We.jsx)(Lo,{children:"Last Updated: March 15, 2025"}),(0,We.jsx)($o,{children:(0,We.jsx)(Mo,{children:"At \u039a\u03b1\u03b9\u03c1\u03cc\u03c2, we understand the deeply personal nature of journaling. Your private thoughts, reflections, and personal growth journey deserve the highest level of confidentiality and protection. This Confidentiality Statement outlines our commitment to safeguarding your journal content and personal information."})}),(0,We.jsxs)($o,{children:[(0,We.jsx)(Ao,{children:"Our Confidentiality Promise"}),(0,We.jsx)(Fo,{children:(0,We.jsxs)(Mo,{children:[(0,We.jsx)("strong",{children:"Your journal is your sanctuary."})," We believe that your personal reflections should remain private and secure, with you in complete control of who\u2014if anyone\u2014can access your content."]})}),(0,We.jsx)(Mo,{children:"Unlike social media platforms or other digital services that monetize your data, \u039a\u03b1\u03b9\u03c1\u03cc\u03c2 is built on a foundation of privacy-first design. We provide a secure space for reflection without the pressure of sharing or exposure."})]}),(0,We.jsxs)($o,{children:[(0,We.jsx)(Ao,{children:"Multi-Tiered Privacy Architecture"}),(0,We.jsx)(Mo,{children:"Our unique approach to confidentiality gives you unprecedented control through our multi-tiered privacy architecture:"}),(0,We.jsxs)(Bo,{children:[(0,We.jsxs)(Uo,{children:[(0,We.jsx)("strong",{children:"Level 1: Complete Local Processing"}),(0,We.jsx)("br",{}),"Your journal entries never leave your device. Processing and analysis happen entirely on your local device with no cloud transmission."]}),(0,We.jsxs)(Uo,{children:[(0,We.jsx)("strong",{children:"Level 2: Anonymized Pattern Analysis"}),(0,We.jsx)("br",{}),"Only anonymized patterns and metrics are sent to our servers for processing. Your actual journal content remains on your device."]}),(0,We.jsxs)(Uo,{children:[(0,We.jsx)("strong",{children:"Level 3: Full Cloud Processing with Encryption"}),(0,We.jsx)("br",{}),"Your encrypted journal content is processed in the cloud with advanced security measures, enabling enhanced insights and features."]}),(0,We.jsxs)(Uo,{children:[(0,We.jsx)("strong",{children:"Level 4: Secure Sharing (Optional)"}),(0,We.jsx)("br",{}),"You can selectively share specific entries or insights with trusted mentors, coaches, or therapists through encrypted channels."]})]}),(0,We.jsx)(Mo,{children:"You choose your privacy level and can change it at any time. By default, all new accounts start at Level 1 (maximum privacy)."})]}),(0,We.jsxs)($o,{children:[(0,We.jsx)(Ao,{children:"Technical Safeguards"}),(0,We.jsx)(Mo,{children:"To ensure the confidentiality of your data, we implement:"}),(0,We.jsxs)(Bo,{children:[(0,We.jsxs)(Uo,{children:[(0,We.jsx)("strong",{children:"End-to-End Encryption:"})," When data leaves your device, it's protected using AES-256 encryption."]}),(0,We.jsxs)(Uo,{children:[(0,We.jsx)("strong",{children:"Zero-Knowledge Architecture:"})," For cloud storage options, we implement zero-knowledge encryption where not even \u039a\u03b1\u03b9\u03c1\u03cc\u03c2 staff can access your unencrypted content."]}),(0,We.jsxs)(Uo,{children:[(0,We.jsx)("strong",{children:"Secure Authentication:"})," Multi-factor authentication and biometric verification options to prevent unauthorized access."]}),(0,We.jsxs)(Uo,{children:[(0,We.jsx)("strong",{children:"Regular Security Audits:"})," Third-party security experts regularly evaluate our systems for vulnerabilities."]}),(0,We.jsxs)(Uo,{children:[(0,We.jsx)("strong",{children:"Transparent Data Handling:"})," Clear documentation of how data flows through our system, with no hidden processes."]})]})]}),(0,We.jsxs)($o,{children:[(0,We.jsx)(Ao,{children:"Our Confidentiality Commitment"}),(0,We.jsx)(Mo,{children:"We will:"}),(0,We.jsxs)(Bo,{children:[(0,We.jsx)(Uo,{children:"Never sell your journal data or personal information to third parties"}),(0,We.jsx)(Uo,{children:"Never use your journal content for targeted advertising"}),(0,We.jsx)(Uo,{children:"Never scan your journal content for marketing purposes"}),(0,We.jsx)(Uo,{children:"Never share your identifiable data without your explicit consent"}),(0,We.jsx)(Uo,{children:"Always give you the option to permanently delete your data"}),(0,We.jsx)(Uo,{children:"Always prioritize your privacy in how we design and update our services"})]})]}),(0,We.jsxs)($o,{children:[(0,We.jsx)(Ao,{children:"Confidential Information Package"}),(0,We.jsx)(Mo,{children:"For investors, partners, and other interested parties, we provide a Confidential Information Package that contains detailed information about our technology, business model, and future plans. This information is protected by a Non-Disclosure Agreement (NDA)."}),(0,We.jsx)(Mo,{children:"To access our Confidential Information Package, please sign our NDA:"}),(0,We.jsx)(Vo,{to:"/nda",children:"Access Confidential Information"})]}),(0,We.jsxs)($o,{children:[(0,We.jsx)(Ao,{children:"Questions About Confidentiality"}),(0,We.jsx)(Mo,{children:"If you have any questions or concerns about how we protect your confidential information, please contact us at:"}),(0,We.jsxs)(Mo,{children:[(0,We.jsx)("strong",{children:"Email:"})," confidentiality@kairos-journal.com",(0,We.jsx)("br",{}),(0,We.jsx)("strong",{children:"Address:"})," Neustiftgasse 21/1/9, B\xf6heimkirchen, 3107, Austria"]})]}),(0,We.jsxs)(Wo,{children:["\xa9 ",(new Date).getFullYear()," \u039a\u03b1\u03b9\u03c1\u03cc\u03c2. All rights reserved."]})]})}));const Yo=function(){const[e,n]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{const e="true"===sessionStorage.getItem("hasSignedNDA");n(e)}),[]),(0,We.jsx)(ke,{children:(0,We.jsxs)(ye,{children:[(0,We.jsx)(me,{path:"/",element:(0,We.jsx)(Ve,{})}),(0,We.jsx)(me,{path:"/nda",element:(0,We.jsx)(ba,{setAuthenticated:n})}),(0,We.jsx)(me,{path:"/nda/thank-you",element:(0,We.jsx)(Pa,{})}),(0,We.jsx)(me,{path:"/journal",element:(0,We.jsx)(to,{})}),(0,We.jsx)(me,{path:"/privacy-policy",element:(0,We.jsx)(go,{})}),(0,We.jsx)(me,{path:"/terms-of-service",element:(0,We.jsx)(_o,{})}),(0,We.jsx)(me,{path:"/confidentiality",element:(0,We.jsx)(Ho,{})})]})})},Ko={colors:{brand:"#558B6E",brandLight:"#88A38F",brandDark:"#2B463C",accent:"#E6B89C",accentLight:"#F9DCC4",accentDark:"#D49A76",background:"#1E1E1E",surface:"rgba(46, 70, 60, 0.8)",textPrimary:"#F5F5F0",textSecondary:"#D8D8D0",white:"#FFFFFF",black:"#000000",error:"#F87171",success:"#10B068"},fonts:{body:'"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',heading:'"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'},fontWeights:{light:300,normal:400,medium:500,semibold:600,bold:700},fontSizes:{xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem","7xl":"4.5rem","8xl":"6rem"},space:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem","2xl":"2.5rem","3xl":"3rem","4xl":"4rem"},borderRadius:{sm:"0.125rem",md:"0.25rem",lg:"0.5rem",xl:"1rem",full:"9999px"},breakpoints:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)"},transitions:{default:"all 0.3s ease",fast:"all 0.15s ease",slow:"all 0.5s ease"},zIndices:{base:0,overlay:10,modal:20,navbar:30,tooltip:40}},Qo=(function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var a=Or.apply(void 0,Ye([e],n,!1)),i="sc-global-".concat(gn(JSON.stringify(a))),o=new Lr(a,i),l=function(e){var n=mr(),r=t.useContext(Cr),a=t.useRef(n.styleSheet.allocateGSInstance(i)).current;return n.styleSheet.server&&s(a,e,n.styleSheet,r,n.stylis),t.useLayoutEffect((function(){if(!n.styleSheet.server)return s(a,e,n.styleSheet,r,n.stylis),function(){return o.removeStyles(a,n.styleSheet)}}),[a,e,n.styleSheet,r,n.stylis]),null};function s(e,t,n,r,a){if(o.isStatic)o.renderStyles(e,tn,n,a);else{var i=He(He({},t),{theme:an(t,r,l.defaultProps)});o.renderStyles(e,i,n,a)}}return t.memo(l)})`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${Ko.fonts.body};
    background-color: ${Ko.colors.background};
    color: ${Ko.colors.textPrimary};
    overflow-x: hidden;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${Ko.fonts.heading};
    line-height: 1.2;
  }

  h1 {
    font-size: ${Ko.fontSizes["5xl"]};
    font-weight: ${Ko.fontWeights.bold};
    margin-bottom: ${Ko.space.lg};
  }

  h2 {
    font-size: ${Ko.fontSizes["3xl"]};
    font-weight: ${Ko.fontWeights.semibold};
    margin-bottom: ${Ko.space.lg};
  }

  h3 {
    font-size: ${Ko.fontSizes["2xl"]};
    font-weight: ${Ko.fontWeights.medium};
    margin-bottom: ${Ko.space.md};
  }

  p {
    font-size: ${Ko.fontSizes.lg};
    line-height: 1.6;
    margin-bottom: ${Ko.space.lg};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    font-family: inherit;
  }

  ul, ol {
    list-style-position: inside;
  }

  @media (max-width: ${Ko.breakpoints.md}) {
    h1 {
      font-size: ${Ko.fontSizes["4xl"]};
    }

    h2 {
      font-size: ${Ko.fontSizes["2xl"]};
    }

    h3 {
      font-size: ${Ko.fontSizes.xl};
    }

    p {
      font-size: ${Ko.fontSizes.md};
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 0.8s forwards;
  }

  .delay-100 { animation-delay: 0.1s; }
  .delay-200 { animation-delay: 0.2s; }
  .delay-300 { animation-delay: 0.3s; }
  .delay-400 { animation-delay: 0.4s; }
  .delay-500 { animation-delay: 0.5s; }
`;a.createRoot(document.getElementById("root")).render((0,We.jsx)(t.StrictMode,{children:(0,We.jsxs)(Nr,{theme:Ko,children:[(0,We.jsx)(Qo,{}),(0,We.jsx)(Yo,{})]})}))})()})();
//# sourceMappingURL=main.20eaa770.js.map