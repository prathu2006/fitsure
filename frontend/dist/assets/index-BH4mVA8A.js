function S_(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function M_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Jm={exports:{}},Hl={},Qm={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ya=Symbol.for("react.element"),E_=Symbol.for("react.portal"),w_=Symbol.for("react.fragment"),T_=Symbol.for("react.strict_mode"),b_=Symbol.for("react.profiler"),A_=Symbol.for("react.provider"),C_=Symbol.for("react.context"),R_=Symbol.for("react.forward_ref"),P_=Symbol.for("react.suspense"),N_=Symbol.for("react.memo"),L_=Symbol.for("react.lazy"),Qh=Symbol.iterator;function D_(t){return t===null||typeof t!="object"?null:(t=Qh&&t[Qh]||t["@@iterator"],typeof t=="function"?t:null)}var eg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tg=Object.assign,ng={};function Gs(t,e,n){this.props=t,this.context=e,this.refs=ng,this.updater=n||eg}Gs.prototype.isReactComponent={};Gs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Gs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ig(){}ig.prototype=Gs.prototype;function zd(t,e,n){this.props=t,this.context=e,this.refs=ng,this.updater=n||eg}var Bd=zd.prototype=new ig;Bd.constructor=zd;tg(Bd,Gs.prototype);Bd.isPureReactComponent=!0;var ef=Array.isArray,rg=Object.prototype.hasOwnProperty,jd={current:null},sg={key:!0,ref:!0,__self:!0,__source:!0};function ag(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)rg.call(e,i)&&!sg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ya,type:t,key:s,ref:a,props:r,_owner:jd.current}}function U_(t,e){return{$$typeof:Ya,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ya}function I_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var tf=/\/+/g;function mc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?I_(""+t.key):e.toString(36)}function Yo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ya:case E_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+mc(a,0):i,ef(r)?(n="",t!=null&&(n=t.replace(tf,"$&/")+"/"),Yo(r,e,n,"",function(u){return u})):r!=null&&(Hd(r)&&(r=U_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(tf,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",ef(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+mc(s,o);a+=Yo(s,e,n,l,r)}else if(l=D_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+mc(s,o++),a+=Yo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function so(t,e,n){if(t==null)return t;var i=[],r=0;return Yo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function O_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var en={current:null},qo={transition:null},F_={ReactCurrentDispatcher:en,ReactCurrentBatchConfig:qo,ReactCurrentOwner:jd};function og(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:so,forEach:function(t,e,n){so(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return so(t,function(){e++}),e},toArray:function(t){return so(t,function(e){return e})||[]},only:function(t){if(!Hd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=Gs;$e.Fragment=w_;$e.Profiler=b_;$e.PureComponent=zd;$e.StrictMode=T_;$e.Suspense=P_;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F_;$e.act=og;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=tg({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=jd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)rg.call(e,l)&&!sg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Ya,type:t.type,key:r,ref:s,props:i,_owner:a}};$e.createContext=function(t){return t={$$typeof:C_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:A_,_context:t},t.Consumer=t};$e.createElement=ag;$e.createFactory=function(t){var e=ag.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:R_,render:t}};$e.isValidElement=Hd;$e.lazy=function(t){return{$$typeof:L_,_payload:{_status:-1,_result:t},_init:O_}};$e.memo=function(t,e){return{$$typeof:N_,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=qo.transition;qo.transition={};try{t()}finally{qo.transition=e}};$e.unstable_act=og;$e.useCallback=function(t,e){return en.current.useCallback(t,e)};$e.useContext=function(t){return en.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return en.current.useDeferredValue(t)};$e.useEffect=function(t,e){return en.current.useEffect(t,e)};$e.useId=function(){return en.current.useId()};$e.useImperativeHandle=function(t,e,n){return en.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return en.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return en.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return en.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return en.current.useReducer(t,e,n)};$e.useRef=function(t){return en.current.useRef(t)};$e.useState=function(t){return en.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return en.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return en.current.useTransition()};$e.version="18.3.1";Qm.exports=$e;var P=Qm.exports;const lg=M_(P),k_=S_({__proto__:null,default:lg},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_=P,B_=Symbol.for("react.element"),j_=Symbol.for("react.fragment"),H_=Object.prototype.hasOwnProperty,V_=z_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,G_={key:!0,ref:!0,__self:!0,__source:!0};function cg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)H_.call(e,i)&&!G_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:B_,type:t,key:s,ref:a,props:r,_owner:V_.current}}Hl.Fragment=j_;Hl.jsx=cg;Hl.jsxs=cg;Jm.exports=Hl;var c=Jm.exports,ug={exports:{}},xn={},dg={exports:{}},hg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,k){var G=L.length;L.push(k);e:for(;0<G;){var j=G-1>>>1,q=L[j];if(0<r(q,k))L[j]=k,L[G]=q,G=j;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var k=L[0],G=L.pop();if(G!==k){L[0]=G;e:for(var j=0,q=L.length,K=q>>>1;j<K;){var te=2*(j+1)-1,ne=L[te],he=te+1,oe=L[he];if(0>r(ne,G))he<q&&0>r(oe,ne)?(L[j]=oe,L[he]=G,j=he):(L[j]=ne,L[te]=G,j=te);else if(he<q&&0>r(oe,G))L[j]=oe,L[he]=G,j=he;else break e}}return k}function r(L,k){var G=L.sortIndex-k.sortIndex;return G!==0?G:L.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],d=1,f=null,p=3,g=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var k=n(u);k!==null;){if(k.callback===null)i(u);else if(k.startTime<=L)i(u),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(u)}}function S(L){if(y=!1,v(L),!_)if(n(l)!==null)_=!0,B(C);else{var k=n(u);k!==null&&O(S,k.startTime-L)}}function C(L,k){_=!1,y&&(y=!1,h(D),D=-1),g=!0;var G=p;try{for(v(k),f=n(l);f!==null&&(!(f.expirationTime>k)||L&&!z());){var j=f.callback;if(typeof j=="function"){f.callback=null,p=f.priorityLevel;var q=j(f.expirationTime<=k);k=t.unstable_now(),typeof q=="function"?f.callback=q:f===n(l)&&i(l),v(k)}else i(l);f=n(l)}if(f!==null)var K=!0;else{var te=n(u);te!==null&&O(S,te.startTime-k),K=!1}return K}finally{f=null,p=G,g=!1}}var b=!1,M=null,D=-1,T=5,w=-1;function z(){return!(t.unstable_now()-w<T)}function $(){if(M!==null){var L=t.unstable_now();w=L;var k=!0;try{k=M(!0,L)}finally{k?Q():(b=!1,M=null)}}else b=!1}var Q;if(typeof x=="function")Q=function(){x($)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,H=U.port2;U.port1.onmessage=$,Q=function(){H.postMessage(null)}}else Q=function(){m($,0)};function B(L){M=L,b||(b=!0,Q())}function O(L,k){D=m(function(){L(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,B(C))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(p){case 1:case 2:case 3:var k=3;break;default:k=p}var G=p;p=k;try{return L()}finally{p=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,k){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var G=p;p=L;try{return k()}finally{p=G}},t.unstable_scheduleCallback=function(L,k,G){var j=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?j+G:j):G=j,L){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=G+q,L={id:d++,callback:k,priorityLevel:L,startTime:G,expirationTime:q,sortIndex:-1},G>j?(L.sortIndex=G,e(u,L),n(l)===null&&L===n(u)&&(y?(h(D),D=-1):y=!0,O(S,G-j))):(L.sortIndex=q,e(l,L),_||g||(_=!0,B(C))),L},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(L){var k=p;return function(){var G=p;p=k;try{return L.apply(this,arguments)}finally{p=G}}}})(hg);dg.exports=hg;var W_=dg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X_=P,_n=W_;function de(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fg=new Set,Aa={};function Ur(t,e){Ns(t,e),Ns(t+"Capture",e)}function Ns(t,e){for(Aa[t]=e,t=0;t<e.length;t++)fg.add(e[t])}var fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cu=Object.prototype.hasOwnProperty,$_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nf={},rf={};function Y_(t){return Cu.call(rf,t)?!0:Cu.call(nf,t)?!1:$_.test(t)?rf[t]=!0:(nf[t]=!0,!1)}function q_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function K_(t,e,n,i){if(e===null||typeof e>"u"||q_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function tn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){zt[t]=new tn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];zt[e]=new tn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){zt[t]=new tn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){zt[t]=new tn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){zt[t]=new tn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){zt[t]=new tn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){zt[t]=new tn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){zt[t]=new tn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){zt[t]=new tn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Vd=/[\-:]([a-z])/g;function Gd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Vd,Gd);zt[e]=new tn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Vd,Gd);zt[e]=new tn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Vd,Gd);zt[e]=new tn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){zt[t]=new tn(t,1,!1,t.toLowerCase(),null,!1,!1)});zt.xlinkHref=new tn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){zt[t]=new tn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wd(t,e,n,i){var r=zt.hasOwnProperty(e)?zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(K_(e,n,r,i)&&(n=null),i||r===null?Y_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var xi=X_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ao=Symbol.for("react.element"),os=Symbol.for("react.portal"),ls=Symbol.for("react.fragment"),Xd=Symbol.for("react.strict_mode"),Ru=Symbol.for("react.profiler"),pg=Symbol.for("react.provider"),mg=Symbol.for("react.context"),$d=Symbol.for("react.forward_ref"),Pu=Symbol.for("react.suspense"),Nu=Symbol.for("react.suspense_list"),Yd=Symbol.for("react.memo"),Ci=Symbol.for("react.lazy"),gg=Symbol.for("react.offscreen"),sf=Symbol.iterator;function Zs(t){return t===null||typeof t!="object"?null:(t=sf&&t[sf]||t["@@iterator"],typeof t=="function"?t:null)}var ft=Object.assign,gc;function da(t){if(gc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);gc=e&&e[1]||""}return`
`+gc+t}var vc=!1;function _c(t,e){if(!t||vc)return"";vc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{vc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?da(t):""}function Z_(t){switch(t.tag){case 5:return da(t.type);case 16:return da("Lazy");case 13:return da("Suspense");case 19:return da("SuspenseList");case 0:case 2:case 15:return t=_c(t.type,!1),t;case 11:return t=_c(t.type.render,!1),t;case 1:return t=_c(t.type,!0),t;default:return""}}function Lu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ls:return"Fragment";case os:return"Portal";case Ru:return"Profiler";case Xd:return"StrictMode";case Pu:return"Suspense";case Nu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case mg:return(t.displayName||"Context")+".Consumer";case pg:return(t._context.displayName||"Context")+".Provider";case $d:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yd:return e=t.displayName||null,e!==null?e:Lu(t.type)||"Memo";case Ci:e=t._payload,t=t._init;try{return Lu(t(e))}catch{}}return null}function J_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lu(e);case 8:return e===Xd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Zi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Q_(t){var e=vg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function oo(t){t._valueTracker||(t._valueTracker=Q_(t))}function _g(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=vg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function cl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Du(t,e){var n=e.checked;return ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function af(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Zi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function xg(t,e){e=e.checked,e!=null&&Wd(t,"checked",e,!1)}function Uu(t,e){xg(t,e);var n=Zi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Iu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Iu(t,e.type,Zi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function of(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Iu(t,e,n){(e!=="number"||cl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ha=Array.isArray;function Es(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Zi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ou(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(de(91));return ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function lf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(de(92));if(ha(n)){if(1<n.length)throw Error(de(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Zi(n)}}function yg(t,e){var n=Zi(e.value),i=Zi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function cf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Sg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Sg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var lo,Mg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(lo=lo||document.createElement("div"),lo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=lo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ca(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ma={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ex=["Webkit","ms","Moz","O"];Object.keys(ma).forEach(function(t){ex.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ma[e]=ma[t]})});function Eg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ma.hasOwnProperty(t)&&ma[t]?(""+e).trim():e+"px"}function wg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Eg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var tx=ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ku(t,e){if(e){if(tx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(de(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(de(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(de(61))}if(e.style!=null&&typeof e.style!="object")throw Error(de(62))}}function zu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bu=null;function qd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ju=null,ws=null,Ts=null;function uf(t){if(t=Za(t)){if(typeof ju!="function")throw Error(de(280));var e=t.stateNode;e&&(e=$l(e),ju(t.stateNode,t.type,e))}}function Tg(t){ws?Ts?Ts.push(t):Ts=[t]:ws=t}function bg(){if(ws){var t=ws,e=Ts;if(Ts=ws=null,uf(t),e)for(t=0;t<e.length;t++)uf(e[t])}}function Ag(t,e){return t(e)}function Cg(){}var xc=!1;function Rg(t,e,n){if(xc)return t(e,n);xc=!0;try{return Ag(t,e,n)}finally{xc=!1,(ws!==null||Ts!==null)&&(Cg(),bg())}}function Ra(t,e){var n=t.stateNode;if(n===null)return null;var i=$l(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(de(231,e,typeof n));return n}var Hu=!1;if(fi)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){Hu=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{Hu=!1}function nx(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var ga=!1,ul=null,dl=!1,Vu=null,ix={onError:function(t){ga=!0,ul=t}};function rx(t,e,n,i,r,s,a,o,l){ga=!1,ul=null,nx.apply(ix,arguments)}function sx(t,e,n,i,r,s,a,o,l){if(rx.apply(this,arguments),ga){if(ga){var u=ul;ga=!1,ul=null}else throw Error(de(198));dl||(dl=!0,Vu=u)}}function Ir(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Pg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function df(t){if(Ir(t)!==t)throw Error(de(188))}function ax(t){var e=t.alternate;if(!e){if(e=Ir(t),e===null)throw Error(de(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return df(r),t;if(s===i)return df(r),e;s=s.sibling}throw Error(de(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(de(189))}}if(n.alternate!==i)throw Error(de(190))}if(n.tag!==3)throw Error(de(188));return n.stateNode.current===n?t:e}function Ng(t){return t=ax(t),t!==null?Lg(t):null}function Lg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Lg(t);if(e!==null)return e;t=t.sibling}return null}var Dg=_n.unstable_scheduleCallback,hf=_n.unstable_cancelCallback,ox=_n.unstable_shouldYield,lx=_n.unstable_requestPaint,xt=_n.unstable_now,cx=_n.unstable_getCurrentPriorityLevel,Kd=_n.unstable_ImmediatePriority,Ug=_n.unstable_UserBlockingPriority,hl=_n.unstable_NormalPriority,ux=_n.unstable_LowPriority,Ig=_n.unstable_IdlePriority,Vl=null,Jn=null;function dx(t){if(Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(Vl,t,void 0,(t.current.flags&128)===128)}catch{}}var Hn=Math.clz32?Math.clz32:px,hx=Math.log,fx=Math.LN2;function px(t){return t>>>=0,t===0?32:31-(hx(t)/fx|0)|0}var co=64,uo=4194304;function fa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=fa(o):(s&=a,s!==0&&(i=fa(s)))}else a=n&~r,a!==0?i=fa(a):s!==0&&(i=fa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Hn(e),r=1<<n,i|=t[n],e&=~r;return i}function mx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Hn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=mx(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Gu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Og(){var t=co;return co<<=1,!(co&4194240)&&(co=64),t}function yc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function qa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Hn(e),t[e]=n}function vx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Hn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Zd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Hn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var tt=0;function Fg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var kg,Jd,zg,Bg,jg,Wu=!1,ho=[],ki=null,zi=null,Bi=null,Pa=new Map,Na=new Map,Ni=[],_x="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ff(t,e){switch(t){case"focusin":case"focusout":ki=null;break;case"dragenter":case"dragleave":zi=null;break;case"mouseover":case"mouseout":Bi=null;break;case"pointerover":case"pointerout":Pa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Na.delete(e.pointerId)}}function Qs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Za(e),e!==null&&Jd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function xx(t,e,n,i,r){switch(e){case"focusin":return ki=Qs(ki,t,e,n,i,r),!0;case"dragenter":return zi=Qs(zi,t,e,n,i,r),!0;case"mouseover":return Bi=Qs(Bi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Pa.set(s,Qs(Pa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Na.set(s,Qs(Na.get(s)||null,t,e,n,i,r)),!0}return!1}function Hg(t){var e=gr(t.target);if(e!==null){var n=Ir(e);if(n!==null){if(e=n.tag,e===13){if(e=Pg(n),e!==null){t.blockedOn=e,jg(t.priority,function(){zg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ko(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Bu=i,n.target.dispatchEvent(i),Bu=null}else return e=Za(n),e!==null&&Jd(e),t.blockedOn=n,!1;e.shift()}return!0}function pf(t,e,n){Ko(t)&&n.delete(e)}function yx(){Wu=!1,ki!==null&&Ko(ki)&&(ki=null),zi!==null&&Ko(zi)&&(zi=null),Bi!==null&&Ko(Bi)&&(Bi=null),Pa.forEach(pf),Na.forEach(pf)}function ea(t,e){t.blockedOn===e&&(t.blockedOn=null,Wu||(Wu=!0,_n.unstable_scheduleCallback(_n.unstable_NormalPriority,yx)))}function La(t){function e(r){return ea(r,t)}if(0<ho.length){ea(ho[0],t);for(var n=1;n<ho.length;n++){var i=ho[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ki!==null&&ea(ki,t),zi!==null&&ea(zi,t),Bi!==null&&ea(Bi,t),Pa.forEach(e),Na.forEach(e),n=0;n<Ni.length;n++)i=Ni[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ni.length&&(n=Ni[0],n.blockedOn===null);)Hg(n),n.blockedOn===null&&Ni.shift()}var bs=xi.ReactCurrentBatchConfig,pl=!0;function Sx(t,e,n,i){var r=tt,s=bs.transition;bs.transition=null;try{tt=1,Qd(t,e,n,i)}finally{tt=r,bs.transition=s}}function Mx(t,e,n,i){var r=tt,s=bs.transition;bs.transition=null;try{tt=4,Qd(t,e,n,i)}finally{tt=r,bs.transition=s}}function Qd(t,e,n,i){if(pl){var r=Xu(t,e,n,i);if(r===null)Pc(t,e,i,ml,n),ff(t,i);else if(xx(r,t,e,n,i))i.stopPropagation();else if(ff(t,i),e&4&&-1<_x.indexOf(t)){for(;r!==null;){var s=Za(r);if(s!==null&&kg(s),s=Xu(t,e,n,i),s===null&&Pc(t,e,i,ml,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Pc(t,e,i,null,n)}}var ml=null;function Xu(t,e,n,i){if(ml=null,t=qd(i),t=gr(t),t!==null)if(e=Ir(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Pg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ml=t,null}function Vg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cx()){case Kd:return 1;case Ug:return 4;case hl:case ux:return 16;case Ig:return 536870912;default:return 16}default:return 16}}var Di=null,eh=null,Zo=null;function Gg(){if(Zo)return Zo;var t,e=eh,n=e.length,i,r="value"in Di?Di.value:Di.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Zo=r.slice(t,1<i?1-i:void 0)}function Jo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fo(){return!0}function mf(){return!1}function yn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?fo:mf,this.isPropagationStopped=mf,this}return ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fo)},persist:function(){},isPersistent:fo}),e}var Ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},th=yn(Ws),Ka=ft({},Ws,{view:0,detail:0}),Ex=yn(Ka),Sc,Mc,ta,Gl=ft({},Ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ta&&(ta&&t.type==="mousemove"?(Sc=t.screenX-ta.screenX,Mc=t.screenY-ta.screenY):Mc=Sc=0,ta=t),Sc)},movementY:function(t){return"movementY"in t?t.movementY:Mc}}),gf=yn(Gl),wx=ft({},Gl,{dataTransfer:0}),Tx=yn(wx),bx=ft({},Ka,{relatedTarget:0}),Ec=yn(bx),Ax=ft({},Ws,{animationName:0,elapsedTime:0,pseudoElement:0}),Cx=yn(Ax),Rx=ft({},Ws,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Px=yn(Rx),Nx=ft({},Ws,{data:0}),vf=yn(Nx),Lx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ux={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ix(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ux[t])?!!e[t]:!1}function nh(){return Ix}var Ox=ft({},Ka,{key:function(t){if(t.key){var e=Lx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Jo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Dx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nh,charCode:function(t){return t.type==="keypress"?Jo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Jo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Fx=yn(Ox),kx=ft({},Gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_f=yn(kx),zx=ft({},Ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nh}),Bx=yn(zx),jx=ft({},Ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hx=yn(jx),Vx=ft({},Gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Gx=yn(Vx),Wx=[9,13,27,32],ih=fi&&"CompositionEvent"in window,va=null;fi&&"documentMode"in document&&(va=document.documentMode);var Xx=fi&&"TextEvent"in window&&!va,Wg=fi&&(!ih||va&&8<va&&11>=va),xf=" ",yf=!1;function Xg(t,e){switch(t){case"keyup":return Wx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $g(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cs=!1;function $x(t,e){switch(t){case"compositionend":return $g(e);case"keypress":return e.which!==32?null:(yf=!0,xf);case"textInput":return t=e.data,t===xf&&yf?null:t;default:return null}}function Yx(t,e){if(cs)return t==="compositionend"||!ih&&Xg(t,e)?(t=Gg(),Zo=eh=Di=null,cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Wg&&e.locale!=="ko"?null:e.data;default:return null}}var qx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qx[t.type]:e==="textarea"}function Yg(t,e,n,i){Tg(i),e=gl(e,"onChange"),0<e.length&&(n=new th("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var _a=null,Da=null;function Kx(t){sv(t,0)}function Wl(t){var e=hs(t);if(_g(e))return t}function Zx(t,e){if(t==="change")return e}var qg=!1;if(fi){var wc;if(fi){var Tc="oninput"in document;if(!Tc){var Mf=document.createElement("div");Mf.setAttribute("oninput","return;"),Tc=typeof Mf.oninput=="function"}wc=Tc}else wc=!1;qg=wc&&(!document.documentMode||9<document.documentMode)}function Ef(){_a&&(_a.detachEvent("onpropertychange",Kg),Da=_a=null)}function Kg(t){if(t.propertyName==="value"&&Wl(Da)){var e=[];Yg(e,Da,t,qd(t)),Rg(Kx,e)}}function Jx(t,e,n){t==="focusin"?(Ef(),_a=e,Da=n,_a.attachEvent("onpropertychange",Kg)):t==="focusout"&&Ef()}function Qx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wl(Da)}function ey(t,e){if(t==="click")return Wl(e)}function ty(t,e){if(t==="input"||t==="change")return Wl(e)}function ny(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wn=typeof Object.is=="function"?Object.is:ny;function Ua(t,e){if(Wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Cu.call(e,r)||!Wn(t[r],e[r]))return!1}return!0}function wf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Tf(t,e){var n=wf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wf(n)}}function Zg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Zg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Jg(){for(var t=window,e=cl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=cl(t.document)}return e}function rh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function iy(t){var e=Jg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Zg(n.ownerDocument.documentElement,n)){if(i!==null&&rh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Tf(n,s);var a=Tf(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ry=fi&&"documentMode"in document&&11>=document.documentMode,us=null,$u=null,xa=null,Yu=!1;function bf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yu||us==null||us!==cl(i)||(i=us,"selectionStart"in i&&rh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),xa&&Ua(xa,i)||(xa=i,i=gl($u,"onSelect"),0<i.length&&(e=new th("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=us)))}function po(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ds={animationend:po("Animation","AnimationEnd"),animationiteration:po("Animation","AnimationIteration"),animationstart:po("Animation","AnimationStart"),transitionend:po("Transition","TransitionEnd")},bc={},Qg={};fi&&(Qg=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function Xl(t){if(bc[t])return bc[t];if(!ds[t])return t;var e=ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Qg)return bc[t]=e[n];return t}var ev=Xl("animationend"),tv=Xl("animationiteration"),nv=Xl("animationstart"),iv=Xl("transitionend"),rv=new Map,Af="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(t,e){rv.set(t,e),Ur(e,[t])}for(var Ac=0;Ac<Af.length;Ac++){var Cc=Af[Ac],sy=Cc.toLowerCase(),ay=Cc[0].toUpperCase()+Cc.slice(1);er(sy,"on"+ay)}er(ev,"onAnimationEnd");er(tv,"onAnimationIteration");er(nv,"onAnimationStart");er("dblclick","onDoubleClick");er("focusin","onFocus");er("focusout","onBlur");er(iv,"onTransitionEnd");Ns("onMouseEnter",["mouseout","mouseover"]);Ns("onMouseLeave",["mouseout","mouseover"]);Ns("onPointerEnter",["pointerout","pointerover"]);Ns("onPointerLeave",["pointerout","pointerover"]);Ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oy=new Set("cancel close invalid load scroll toggle".split(" ").concat(pa));function Cf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,sx(i,e,void 0,t),t.currentTarget=null}function sv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Cf(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Cf(r,o,u),s=l}}}if(dl)throw t=Vu,dl=!1,Vu=null,t}function at(t,e){var n=e[Qu];n===void 0&&(n=e[Qu]=new Set);var i=t+"__bubble";n.has(i)||(av(e,t,2,!1),n.add(i))}function Rc(t,e,n){var i=0;e&&(i|=4),av(n,t,i,e)}var mo="_reactListening"+Math.random().toString(36).slice(2);function Ia(t){if(!t[mo]){t[mo]=!0,fg.forEach(function(n){n!=="selectionchange"&&(oy.has(n)||Rc(n,!1,t),Rc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[mo]||(e[mo]=!0,Rc("selectionchange",!1,e))}}function av(t,e,n,i){switch(Vg(e)){case 1:var r=Sx;break;case 4:r=Mx;break;default:r=Qd}n=r.bind(null,e,n,t),r=void 0,!Hu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Pc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=gr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Rg(function(){var u=s,d=qd(n),f=[];e:{var p=rv.get(t);if(p!==void 0){var g=th,_=t;switch(t){case"keypress":if(Jo(n)===0)break e;case"keydown":case"keyup":g=Fx;break;case"focusin":_="focus",g=Ec;break;case"focusout":_="blur",g=Ec;break;case"beforeblur":case"afterblur":g=Ec;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=gf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Tx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Bx;break;case ev:case tv:case nv:g=Cx;break;case iv:g=Hx;break;case"scroll":g=Ex;break;case"wheel":g=Gx;break;case"copy":case"cut":case"paste":g=Px;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=_f}var y=(e&4)!==0,m=!y&&t==="scroll",h=y?p!==null?p+"Capture":null:p;y=[];for(var x=u,v;x!==null;){v=x;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,h!==null&&(S=Ra(x,h),S!=null&&y.push(Oa(x,S,v)))),m)break;x=x.return}0<y.length&&(p=new g(p,_,null,n,d),f.push({event:p,listeners:y}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==Bu&&(_=n.relatedTarget||n.fromElement)&&(gr(_)||_[pi]))break e;if((g||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?gr(_):null,_!==null&&(m=Ir(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(y=gf,S="onMouseLeave",h="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(y=_f,S="onPointerLeave",h="onPointerEnter",x="pointer"),m=g==null?p:hs(g),v=_==null?p:hs(_),p=new y(S,x+"leave",g,n,d),p.target=m,p.relatedTarget=v,S=null,gr(d)===u&&(y=new y(h,x+"enter",_,n,d),y.target=v,y.relatedTarget=m,S=y),m=S,g&&_)t:{for(y=g,h=_,x=0,v=y;v;v=zr(v))x++;for(v=0,S=h;S;S=zr(S))v++;for(;0<x-v;)y=zr(y),x--;for(;0<v-x;)h=zr(h),v--;for(;x--;){if(y===h||h!==null&&y===h.alternate)break t;y=zr(y),h=zr(h)}y=null}else y=null;g!==null&&Rf(f,p,g,y,!1),_!==null&&m!==null&&Rf(f,m,_,y,!0)}}e:{if(p=u?hs(u):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var C=Zx;else if(Sf(p))if(qg)C=ty;else{C=Qx;var b=Jx}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=ey);if(C&&(C=C(t,u))){Yg(f,C,n,d);break e}b&&b(t,p,u),t==="focusout"&&(b=p._wrapperState)&&b.controlled&&p.type==="number"&&Iu(p,"number",p.value)}switch(b=u?hs(u):window,t){case"focusin":(Sf(b)||b.contentEditable==="true")&&(us=b,$u=u,xa=null);break;case"focusout":xa=$u=us=null;break;case"mousedown":Yu=!0;break;case"contextmenu":case"mouseup":case"dragend":Yu=!1,bf(f,n,d);break;case"selectionchange":if(ry)break;case"keydown":case"keyup":bf(f,n,d)}var M;if(ih)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else cs?Xg(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Wg&&n.locale!=="ko"&&(cs||D!=="onCompositionStart"?D==="onCompositionEnd"&&cs&&(M=Gg()):(Di=d,eh="value"in Di?Di.value:Di.textContent,cs=!0)),b=gl(u,D),0<b.length&&(D=new vf(D,t,null,n,d),f.push({event:D,listeners:b}),M?D.data=M:(M=$g(n),M!==null&&(D.data=M)))),(M=Xx?$x(t,n):Yx(t,n))&&(u=gl(u,"onBeforeInput"),0<u.length&&(d=new vf("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=M))}sv(f,e)})}function Oa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function gl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ra(t,n),s!=null&&i.unshift(Oa(t,s,r)),s=Ra(t,e),s!=null&&i.push(Oa(t,s,r))),t=t.return}return i}function zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Rf(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=Ra(n,s),l!=null&&a.unshift(Oa(n,l,o))):r||(l=Ra(n,s),l!=null&&a.push(Oa(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var ly=/\r\n?/g,cy=/\u0000|\uFFFD/g;function Pf(t){return(typeof t=="string"?t:""+t).replace(ly,`
`).replace(cy,"")}function go(t,e,n){if(e=Pf(e),Pf(t)!==e&&n)throw Error(de(425))}function vl(){}var qu=null,Ku=null;function Zu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ju=typeof setTimeout=="function"?setTimeout:void 0,uy=typeof clearTimeout=="function"?clearTimeout:void 0,Nf=typeof Promise=="function"?Promise:void 0,dy=typeof queueMicrotask=="function"?queueMicrotask:typeof Nf<"u"?function(t){return Nf.resolve(null).then(t).catch(hy)}:Ju;function hy(t){setTimeout(function(){throw t})}function Nc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),La(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);La(e)}function ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Lf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Xs=Math.random().toString(36).slice(2),Zn="__reactFiber$"+Xs,Fa="__reactProps$"+Xs,pi="__reactContainer$"+Xs,Qu="__reactEvents$"+Xs,fy="__reactListeners$"+Xs,py="__reactHandles$"+Xs;function gr(t){var e=t[Zn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pi]||n[Zn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Lf(t);t!==null;){if(n=t[Zn])return n;t=Lf(t)}return e}t=n,n=t.parentNode}return null}function Za(t){return t=t[Zn]||t[pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(de(33))}function $l(t){return t[Fa]||null}var ed=[],fs=-1;function tr(t){return{current:t}}function lt(t){0>fs||(t.current=ed[fs],ed[fs]=null,fs--)}function st(t,e){fs++,ed[fs]=t.current,t.current=e}var Ji={},$t=tr(Ji),an=tr(!1),br=Ji;function Ls(t,e){var n=t.type.contextTypes;if(!n)return Ji;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function on(t){return t=t.childContextTypes,t!=null}function _l(){lt(an),lt($t)}function Df(t,e,n){if($t.current!==Ji)throw Error(de(168));st($t,e),st(an,n)}function ov(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(de(108,J_(t)||"Unknown",r));return ft({},n,i)}function xl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ji,br=$t.current,st($t,t),st(an,an.current),!0}function Uf(t,e,n){var i=t.stateNode;if(!i)throw Error(de(169));n?(t=ov(t,e,br),i.__reactInternalMemoizedMergedChildContext=t,lt(an),lt($t),st($t,t)):lt(an),st(an,n)}var li=null,Yl=!1,Lc=!1;function lv(t){li===null?li=[t]:li.push(t)}function my(t){Yl=!0,lv(t)}function nr(){if(!Lc&&li!==null){Lc=!0;var t=0,e=tt;try{var n=li;for(tt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}li=null,Yl=!1}catch(r){throw li!==null&&(li=li.slice(t+1)),Dg(Kd,nr),r}finally{tt=e,Lc=!1}}return null}var ps=[],ms=0,yl=null,Sl=0,En=[],wn=0,Ar=null,ci=1,ui="";function dr(t,e){ps[ms++]=Sl,ps[ms++]=yl,yl=t,Sl=e}function cv(t,e,n){En[wn++]=ci,En[wn++]=ui,En[wn++]=Ar,Ar=t;var i=ci;t=ui;var r=32-Hn(i)-1;i&=~(1<<r),n+=1;var s=32-Hn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ci=1<<32-Hn(e)+r|n<<r|i,ui=s+t}else ci=1<<s|n<<r|i,ui=t}function sh(t){t.return!==null&&(dr(t,1),cv(t,1,0))}function ah(t){for(;t===yl;)yl=ps[--ms],ps[ms]=null,Sl=ps[--ms],ps[ms]=null;for(;t===Ar;)Ar=En[--wn],En[wn]=null,ui=En[--wn],En[wn]=null,ci=En[--wn],En[wn]=null}var gn=null,mn=null,ct=!1,kn=null;function uv(t,e){var n=Cn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function If(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gn=t,mn=ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gn=t,mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ar!==null?{id:ci,overflow:ui}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Cn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gn=t,mn=null,!0):!1;default:return!1}}function td(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nd(t){if(ct){var e=mn;if(e){var n=e;if(!If(t,e)){if(td(t))throw Error(de(418));e=ji(n.nextSibling);var i=gn;e&&If(t,e)?uv(i,n):(t.flags=t.flags&-4097|2,ct=!1,gn=t)}}else{if(td(t))throw Error(de(418));t.flags=t.flags&-4097|2,ct=!1,gn=t}}}function Of(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gn=t}function vo(t){if(t!==gn)return!1;if(!ct)return Of(t),ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zu(t.type,t.memoizedProps)),e&&(e=mn)){if(td(t))throw dv(),Error(de(418));for(;e;)uv(t,e),e=ji(e.nextSibling)}if(Of(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(de(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mn=ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mn=null}}else mn=gn?ji(t.stateNode.nextSibling):null;return!0}function dv(){for(var t=mn;t;)t=ji(t.nextSibling)}function Ds(){mn=gn=null,ct=!1}function oh(t){kn===null?kn=[t]:kn.push(t)}var gy=xi.ReactCurrentBatchConfig;function na(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(de(309));var i=n.stateNode}if(!i)throw Error(de(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(de(284));if(!n._owner)throw Error(de(290,t))}return t}function _o(t,e){throw t=Object.prototype.toString.call(e),Error(de(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ff(t){var e=t._init;return e(t._payload)}function hv(t){function e(h,x){if(t){var v=h.deletions;v===null?(h.deletions=[x],h.flags|=16):v.push(x)}}function n(h,x){if(!t)return null;for(;x!==null;)e(h,x),x=x.sibling;return null}function i(h,x){for(h=new Map;x!==null;)x.key!==null?h.set(x.key,x):h.set(x.index,x),x=x.sibling;return h}function r(h,x){return h=Wi(h,x),h.index=0,h.sibling=null,h}function s(h,x,v){return h.index=v,t?(v=h.alternate,v!==null?(v=v.index,v<x?(h.flags|=2,x):v):(h.flags|=2,x)):(h.flags|=1048576,x)}function a(h){return t&&h.alternate===null&&(h.flags|=2),h}function o(h,x,v,S){return x===null||x.tag!==6?(x=zc(v,h.mode,S),x.return=h,x):(x=r(x,v),x.return=h,x)}function l(h,x,v,S){var C=v.type;return C===ls?d(h,x,v.props.children,S,v.key):x!==null&&(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ci&&Ff(C)===x.type)?(S=r(x,v.props),S.ref=na(h,x,v),S.return=h,S):(S=sl(v.type,v.key,v.props,null,h.mode,S),S.ref=na(h,x,v),S.return=h,S)}function u(h,x,v,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=Bc(v,h.mode,S),x.return=h,x):(x=r(x,v.children||[]),x.return=h,x)}function d(h,x,v,S,C){return x===null||x.tag!==7?(x=Mr(v,h.mode,S,C),x.return=h,x):(x=r(x,v),x.return=h,x)}function f(h,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=zc(""+x,h.mode,v),x.return=h,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ao:return v=sl(x.type,x.key,x.props,null,h.mode,v),v.ref=na(h,null,x),v.return=h,v;case os:return x=Bc(x,h.mode,v),x.return=h,x;case Ci:var S=x._init;return f(h,S(x._payload),v)}if(ha(x)||Zs(x))return x=Mr(x,h.mode,v,null),x.return=h,x;_o(h,x)}return null}function p(h,x,v,S){var C=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:o(h,x,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ao:return v.key===C?l(h,x,v,S):null;case os:return v.key===C?u(h,x,v,S):null;case Ci:return C=v._init,p(h,x,C(v._payload),S)}if(ha(v)||Zs(v))return C!==null?null:d(h,x,v,S,null);_o(h,v)}return null}function g(h,x,v,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(v)||null,o(x,h,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ao:return h=h.get(S.key===null?v:S.key)||null,l(x,h,S,C);case os:return h=h.get(S.key===null?v:S.key)||null,u(x,h,S,C);case Ci:var b=S._init;return g(h,x,v,b(S._payload),C)}if(ha(S)||Zs(S))return h=h.get(v)||null,d(x,h,S,C,null);_o(x,S)}return null}function _(h,x,v,S){for(var C=null,b=null,M=x,D=x=0,T=null;M!==null&&D<v.length;D++){M.index>D?(T=M,M=null):T=M.sibling;var w=p(h,M,v[D],S);if(w===null){M===null&&(M=T);break}t&&M&&w.alternate===null&&e(h,M),x=s(w,x,D),b===null?C=w:b.sibling=w,b=w,M=T}if(D===v.length)return n(h,M),ct&&dr(h,D),C;if(M===null){for(;D<v.length;D++)M=f(h,v[D],S),M!==null&&(x=s(M,x,D),b===null?C=M:b.sibling=M,b=M);return ct&&dr(h,D),C}for(M=i(h,M);D<v.length;D++)T=g(M,h,D,v[D],S),T!==null&&(t&&T.alternate!==null&&M.delete(T.key===null?D:T.key),x=s(T,x,D),b===null?C=T:b.sibling=T,b=T);return t&&M.forEach(function(z){return e(h,z)}),ct&&dr(h,D),C}function y(h,x,v,S){var C=Zs(v);if(typeof C!="function")throw Error(de(150));if(v=C.call(v),v==null)throw Error(de(151));for(var b=C=null,M=x,D=x=0,T=null,w=v.next();M!==null&&!w.done;D++,w=v.next()){M.index>D?(T=M,M=null):T=M.sibling;var z=p(h,M,w.value,S);if(z===null){M===null&&(M=T);break}t&&M&&z.alternate===null&&e(h,M),x=s(z,x,D),b===null?C=z:b.sibling=z,b=z,M=T}if(w.done)return n(h,M),ct&&dr(h,D),C;if(M===null){for(;!w.done;D++,w=v.next())w=f(h,w.value,S),w!==null&&(x=s(w,x,D),b===null?C=w:b.sibling=w,b=w);return ct&&dr(h,D),C}for(M=i(h,M);!w.done;D++,w=v.next())w=g(M,h,D,w.value,S),w!==null&&(t&&w.alternate!==null&&M.delete(w.key===null?D:w.key),x=s(w,x,D),b===null?C=w:b.sibling=w,b=w);return t&&M.forEach(function($){return e(h,$)}),ct&&dr(h,D),C}function m(h,x,v,S){if(typeof v=="object"&&v!==null&&v.type===ls&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ao:e:{for(var C=v.key,b=x;b!==null;){if(b.key===C){if(C=v.type,C===ls){if(b.tag===7){n(h,b.sibling),x=r(b,v.props.children),x.return=h,h=x;break e}}else if(b.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ci&&Ff(C)===b.type){n(h,b.sibling),x=r(b,v.props),x.ref=na(h,b,v),x.return=h,h=x;break e}n(h,b);break}else e(h,b);b=b.sibling}v.type===ls?(x=Mr(v.props.children,h.mode,S,v.key),x.return=h,h=x):(S=sl(v.type,v.key,v.props,null,h.mode,S),S.ref=na(h,x,v),S.return=h,h=S)}return a(h);case os:e:{for(b=v.key;x!==null;){if(x.key===b)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(h,x.sibling),x=r(x,v.children||[]),x.return=h,h=x;break e}else{n(h,x);break}else e(h,x);x=x.sibling}x=Bc(v,h.mode,S),x.return=h,h=x}return a(h);case Ci:return b=v._init,m(h,x,b(v._payload),S)}if(ha(v))return _(h,x,v,S);if(Zs(v))return y(h,x,v,S);_o(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(h,x.sibling),x=r(x,v),x.return=h,h=x):(n(h,x),x=zc(v,h.mode,S),x.return=h,h=x),a(h)):n(h,x)}return m}var Us=hv(!0),fv=hv(!1),Ml=tr(null),El=null,gs=null,lh=null;function ch(){lh=gs=El=null}function uh(t){var e=Ml.current;lt(Ml),t._currentValue=e}function id(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function As(t,e){El=t,lh=gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(sn=!0),t.firstContext=null)}function Pn(t){var e=t._currentValue;if(lh!==t)if(t={context:t,memoizedValue:e,next:null},gs===null){if(El===null)throw Error(de(308));gs=t,El.dependencies={lanes:0,firstContext:t}}else gs=gs.next=t;return e}var vr=null;function dh(t){vr===null?vr=[t]:vr.push(t)}function pv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,dh(e)):(n.next=r.next,r.next=n),e.interleaved=n,mi(t,i)}function mi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ri=!1;function hh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Hi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,mi(t,n)}return r=i.interleaved,r===null?(e.next=e,dh(i)):(e.next=r.next,r.next=e),i.interleaved=e,mi(t,n)}function Qo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Zd(t,n)}}function kf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wl(t,e,n,i){var r=t.updateQueue;Ri=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=u:o.next=u,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,d=u=l=null,o=s;do{var p=o.lane,g=o.eventTime;if((i&p)===p){d!==null&&(d=d.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,y=o;switch(p=e,g=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(g,f,p);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,p=typeof _=="function"?_.call(g,f,p):_,p==null)break e;f=ft({},f,p);break e;case 2:Ri=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[o]:p.push(o))}else g={eventTime:g,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=g,l=f):d=d.next=g,a|=p;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;p=o,o=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Rr|=a,t.lanes=a,t.memoizedState=f}}function zf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(de(191,r));r.call(i)}}}var Ja={},Qn=tr(Ja),ka=tr(Ja),za=tr(Ja);function _r(t){if(t===Ja)throw Error(de(174));return t}function fh(t,e){switch(st(za,e),st(ka,t),st(Qn,Ja),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fu(e,t)}lt(Qn),st(Qn,e)}function Is(){lt(Qn),lt(ka),lt(za)}function gv(t){_r(za.current);var e=_r(Qn.current),n=Fu(e,t.type);e!==n&&(st(ka,t),st(Qn,n))}function ph(t){ka.current===t&&(lt(Qn),lt(ka))}var dt=tr(0);function Tl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Dc=[];function mh(){for(var t=0;t<Dc.length;t++)Dc[t]._workInProgressVersionPrimary=null;Dc.length=0}var el=xi.ReactCurrentDispatcher,Uc=xi.ReactCurrentBatchConfig,Cr=0,ht=null,Et=null,Nt=null,bl=!1,ya=!1,Ba=0,vy=0;function jt(){throw Error(de(321))}function gh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wn(t[n],e[n]))return!1;return!0}function vh(t,e,n,i,r,s){if(Cr=s,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,el.current=t===null||t.memoizedState===null?Sy:My,t=n(i,r),ya){s=0;do{if(ya=!1,Ba=0,25<=s)throw Error(de(301));s+=1,Nt=Et=null,e.updateQueue=null,el.current=Ey,t=n(i,r)}while(ya)}if(el.current=Al,e=Et!==null&&Et.next!==null,Cr=0,Nt=Et=ht=null,bl=!1,e)throw Error(de(300));return t}function _h(){var t=Ba!==0;return Ba=0,t}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?ht.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function Nn(){if(Et===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var e=Nt===null?ht.memoizedState:Nt.next;if(e!==null)Nt=e,Et=t;else{if(t===null)throw Error(de(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},Nt===null?ht.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function ja(t,e){return typeof e=="function"?e(t):e}function Ic(t){var e=Nn(),n=e.queue;if(n===null)throw Error(de(311));n.lastRenderedReducer=t;var i=Et,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var d=u.lane;if((Cr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,ht.lanes|=d,Rr|=d}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,Wn(i,e.memoizedState)||(sn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ht.lanes|=s,Rr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Oc(t){var e=Nn(),n=e.queue;if(n===null)throw Error(de(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Wn(s,e.memoizedState)||(sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function vv(){}function _v(t,e){var n=ht,i=Nn(),r=e(),s=!Wn(i.memoizedState,r);if(s&&(i.memoizedState=r,sn=!0),i=i.queue,xh(Sv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,Ha(9,yv.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(de(349));Cr&30||xv(n,e,r)}return r}function xv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function yv(t,e,n,i){e.value=n,e.getSnapshot=i,Mv(e)&&Ev(t)}function Sv(t,e,n){return n(function(){Mv(e)&&Ev(t)})}function Mv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wn(t,n)}catch{return!0}}function Ev(t){var e=mi(t,1);e!==null&&Vn(e,t,1,-1)}function Bf(t){var e=qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:t},e.queue=t,t=t.dispatch=yy.bind(null,ht,t),[e.memoizedState,t]}function Ha(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function wv(){return Nn().memoizedState}function tl(t,e,n,i){var r=qn();ht.flags|=t,r.memoizedState=Ha(1|e,n,void 0,i===void 0?null:i)}function ql(t,e,n,i){var r=Nn();i=i===void 0?null:i;var s=void 0;if(Et!==null){var a=Et.memoizedState;if(s=a.destroy,i!==null&&gh(i,a.deps)){r.memoizedState=Ha(e,n,s,i);return}}ht.flags|=t,r.memoizedState=Ha(1|e,n,s,i)}function jf(t,e){return tl(8390656,8,t,e)}function xh(t,e){return ql(2048,8,t,e)}function Tv(t,e){return ql(4,2,t,e)}function bv(t,e){return ql(4,4,t,e)}function Av(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Cv(t,e,n){return n=n!=null?n.concat([t]):null,ql(4,4,Av.bind(null,e,t),n)}function yh(){}function Rv(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&gh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Pv(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&gh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Nv(t,e,n){return Cr&21?(Wn(n,e)||(n=Og(),ht.lanes|=n,Rr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,sn=!0),t.memoizedState=n)}function _y(t,e){var n=tt;tt=n!==0&&4>n?n:4,t(!0);var i=Uc.transition;Uc.transition={};try{t(!1),e()}finally{tt=n,Uc.transition=i}}function Lv(){return Nn().memoizedState}function xy(t,e,n){var i=Gi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Dv(t))Uv(e,n);else if(n=pv(t,e,n,i),n!==null){var r=Qt();Vn(n,t,i,r),Iv(n,e,i)}}function yy(t,e,n){var i=Gi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Dv(t))Uv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Wn(o,a)){var l=e.interleaved;l===null?(r.next=r,dh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=pv(t,e,r,i),n!==null&&(r=Qt(),Vn(n,t,i,r),Iv(n,e,i))}}function Dv(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function Uv(t,e){ya=bl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Iv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Zd(t,n)}}var Al={readContext:Pn,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},Sy={readContext:Pn,useCallback:function(t,e){return qn().memoizedState=[t,e===void 0?null:e],t},useContext:Pn,useEffect:jf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,tl(4194308,4,Av.bind(null,e,t),n)},useLayoutEffect:function(t,e){return tl(4194308,4,t,e)},useInsertionEffect:function(t,e){return tl(4,2,t,e)},useMemo:function(t,e){var n=qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=qn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=xy.bind(null,ht,t),[i.memoizedState,t]},useRef:function(t){var e=qn();return t={current:t},e.memoizedState=t},useState:Bf,useDebugValue:yh,useDeferredValue:function(t){return qn().memoizedState=t},useTransition:function(){var t=Bf(!1),e=t[0];return t=_y.bind(null,t[1]),qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ht,r=qn();if(ct){if(n===void 0)throw Error(de(407));n=n()}else{if(n=e(),Dt===null)throw Error(de(349));Cr&30||xv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,jf(Sv.bind(null,i,s,t),[t]),i.flags|=2048,Ha(9,yv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=qn(),e=Dt.identifierPrefix;if(ct){var n=ui,i=ci;n=(i&~(1<<32-Hn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ba++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=vy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},My={readContext:Pn,useCallback:Rv,useContext:Pn,useEffect:xh,useImperativeHandle:Cv,useInsertionEffect:Tv,useLayoutEffect:bv,useMemo:Pv,useReducer:Ic,useRef:wv,useState:function(){return Ic(ja)},useDebugValue:yh,useDeferredValue:function(t){var e=Nn();return Nv(e,Et.memoizedState,t)},useTransition:function(){var t=Ic(ja)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:vv,useSyncExternalStore:_v,useId:Lv,unstable_isNewReconciler:!1},Ey={readContext:Pn,useCallback:Rv,useContext:Pn,useEffect:xh,useImperativeHandle:Cv,useInsertionEffect:Tv,useLayoutEffect:bv,useMemo:Pv,useReducer:Oc,useRef:wv,useState:function(){return Oc(ja)},useDebugValue:yh,useDeferredValue:function(t){var e=Nn();return Et===null?e.memoizedState=t:Nv(e,Et.memoizedState,t)},useTransition:function(){var t=Oc(ja)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:vv,useSyncExternalStore:_v,useId:Lv,unstable_isNewReconciler:!1};function On(t,e){if(t&&t.defaultProps){e=ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function rd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Kl={isMounted:function(t){return(t=t._reactInternals)?Ir(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=Gi(t),s=hi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Hi(t,s,r),e!==null&&(Vn(e,t,r,i),Qo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=Gi(t),s=hi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Hi(t,s,r),e!==null&&(Vn(e,t,r,i),Qo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qt(),i=Gi(t),r=hi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Hi(t,r,i),e!==null&&(Vn(e,t,i,n),Qo(e,t,i))}};function Hf(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ua(n,i)||!Ua(r,s):!0}function Ov(t,e,n){var i=!1,r=Ji,s=e.contextType;return typeof s=="object"&&s!==null?s=Pn(s):(r=on(e)?br:$t.current,i=e.contextTypes,s=(i=i!=null)?Ls(t,r):Ji),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Kl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Vf(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Kl.enqueueReplaceState(e,e.state,null)}function sd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},hh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Pn(s):(s=on(e)?br:$t.current,r.context=Ls(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Kl.enqueueReplaceState(r,r.state,null),wl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Os(t,e){try{var n="",i=e;do n+=Z_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Fc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ad(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var wy=typeof WeakMap=="function"?WeakMap:Map;function Fv(t,e,n){n=hi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Rl||(Rl=!0,gd=i),ad(t,e)},n}function kv(t,e,n){n=hi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ad(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ad(t,e),typeof i!="function"&&(Vi===null?Vi=new Set([this]):Vi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Gf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new wy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=ky.bind(null,t,e,n),e.then(t,t))}function Wf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Xf(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hi(-1,1),e.tag=2,Hi(n,e,1))),n.lanes|=1),t)}var Ty=xi.ReactCurrentOwner,sn=!1;function Zt(t,e,n,i){e.child=t===null?fv(e,null,n,i):Us(e,t.child,n,i)}function $f(t,e,n,i,r){n=n.render;var s=e.ref;return As(e,r),i=vh(t,e,n,i,s,r),n=_h(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(ct&&n&&sh(e),e.flags|=1,Zt(t,e,i,r),e.child)}function Yf(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Ch(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,zv(t,e,s,i,r)):(t=sl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ua,n(a,i)&&t.ref===e.ref)return gi(t,e,r)}return e.flags|=1,t=Wi(s,i),t.ref=e.ref,t.return=e,e.child=t}function zv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ua(s,i)&&t.ref===e.ref)if(sn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(sn=!0);else return e.lanes=t.lanes,gi(t,e,r)}return od(t,e,n,i,r)}function Bv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(_s,fn),fn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(_s,fn),fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(_s,fn),fn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(_s,fn),fn|=i;return Zt(t,e,r,n),e.child}function jv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function od(t,e,n,i,r){var s=on(n)?br:$t.current;return s=Ls(e,s),As(e,r),n=vh(t,e,n,i,s,r),i=_h(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(ct&&i&&sh(e),e.flags|=1,Zt(t,e,n,r),e.child)}function qf(t,e,n,i,r){if(on(n)){var s=!0;xl(e)}else s=!1;if(As(e,r),e.stateNode===null)nl(t,e),Ov(e,n,i),sd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Pn(u):(u=on(n)?br:$t.current,u=Ls(e,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&Vf(e,a,i,u),Ri=!1;var p=e.memoizedState;a.state=p,wl(e,i,a,r),l=e.memoizedState,o!==i||p!==l||an.current||Ri?(typeof d=="function"&&(rd(e,n,d,i),l=e.memoizedState),(o=Ri||Hf(e,n,o,i,p,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,mv(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:On(e.type,o),a.props=u,f=e.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pn(l):(l=on(n)?br:$t.current,l=Ls(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||p!==l)&&Vf(e,a,i,l),Ri=!1,p=e.memoizedState,a.state=p,wl(e,i,a,r);var _=e.memoizedState;o!==f||p!==_||an.current||Ri?(typeof g=="function"&&(rd(e,n,g,i),_=e.memoizedState),(u=Ri||Hf(e,n,u,i,p,_,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return ld(t,e,n,i,s,r)}function ld(t,e,n,i,r,s){jv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Uf(e,n,!1),gi(t,e,s);i=e.stateNode,Ty.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Us(e,t.child,null,s),e.child=Us(e,null,o,s)):Zt(t,e,o,s),e.memoizedState=i.state,r&&Uf(e,n,!0),e.child}function Hv(t){var e=t.stateNode;e.pendingContext?Df(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Df(t,e.context,!1),fh(t,e.containerInfo)}function Kf(t,e,n,i,r){return Ds(),oh(r),e.flags|=256,Zt(t,e,n,i),e.child}var cd={dehydrated:null,treeContext:null,retryLane:0};function ud(t){return{baseLanes:t,cachePool:null,transitions:null}}function Vv(t,e,n){var i=e.pendingProps,r=dt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(dt,r&1),t===null)return nd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Ql(a,i,0,null),t=Mr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ud(n),e.memoizedState=cd,t):Sh(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return by(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Wi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Wi(o,s):(s=Mr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?ud(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=cd,i}return s=t.child,t=s.sibling,i=Wi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Sh(t,e){return e=Ql({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function xo(t,e,n,i){return i!==null&&oh(i),Us(e,t.child,null,n),t=Sh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function by(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Fc(Error(de(422))),xo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ql({mode:"visible",children:i.children},r,0,null),s=Mr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Us(e,t.child,null,a),e.child.memoizedState=ud(a),e.memoizedState=cd,s);if(!(e.mode&1))return xo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(de(419)),i=Fc(s,i,void 0),xo(t,e,a,i)}if(o=(a&t.childLanes)!==0,sn||o){if(i=Dt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,mi(t,r),Vn(i,t,r,-1))}return Ah(),i=Fc(Error(de(421))),xo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=zy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,mn=ji(r.nextSibling),gn=e,ct=!0,kn=null,t!==null&&(En[wn++]=ci,En[wn++]=ui,En[wn++]=Ar,ci=t.id,ui=t.overflow,Ar=e),e=Sh(e,i.children),e.flags|=4096,e)}function Zf(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),id(t.return,e,n)}function kc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Gv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Zt(t,e,i.children,n),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zf(t,n,e);else if(t.tag===19)Zf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Tl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),kc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Tl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}kc(e,!0,n,null,s);break;case"together":kc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Rr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(de(153));if(e.child!==null){for(t=e.child,n=Wi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ay(t,e,n){switch(e.tag){case 3:Hv(e),Ds();break;case 5:gv(e);break;case 1:on(e.type)&&xl(e);break;case 4:fh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(Ml,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(dt,dt.current&1),e.flags|=128,null):n&e.child.childLanes?Vv(t,e,n):(st(dt,dt.current&1),t=gi(t,e,n),t!==null?t.sibling:null);st(dt,dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Gv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,Bv(t,e,n)}return gi(t,e,n)}var Wv,dd,Xv,$v;Wv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};dd=function(){};Xv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,_r(Qn.current);var s=null;switch(n){case"input":r=Du(t,r),i=Du(t,i),s=[];break;case"select":r=ft({},r,{value:void 0}),i=ft({},i,{value:void 0}),s=[];break;case"textarea":r=Ou(t,r),i=Ou(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=vl)}ku(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Aa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Aa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&at("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};$v=function(t,e,n,i){n!==i&&(e.flags|=4)};function ia(t,e){if(!ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Cy(t,e,n){var i=e.pendingProps;switch(ah(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(e),null;case 1:return on(e.type)&&_l(),Ht(e),null;case 3:return i=e.stateNode,Is(),lt(an),lt($t),mh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(vo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kn!==null&&(xd(kn),kn=null))),dd(t,e),Ht(e),null;case 5:ph(e);var r=_r(za.current);if(n=e.type,t!==null&&e.stateNode!=null)Xv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(de(166));return Ht(e),null}if(t=_r(Qn.current),vo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Zn]=e,i[Fa]=s,t=(e.mode&1)!==0,n){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<pa.length;r++)at(pa[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":af(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":lf(i,s),at("invalid",i)}ku(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&go(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&go(i.textContent,o,t),r=["children",""+o]):Aa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&at("scroll",i)}switch(n){case"input":oo(i),of(i,s,!0);break;case"textarea":oo(i),cf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=vl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Sg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Zn]=e,t[Fa]=i,Wv(t,e,!1,!1),e.stateNode=t;e:{switch(a=zu(n,i),n){case"dialog":at("cancel",t),at("close",t),r=i;break;case"iframe":case"object":case"embed":at("load",t),r=i;break;case"video":case"audio":for(r=0;r<pa.length;r++)at(pa[r],t);r=i;break;case"source":at("error",t),r=i;break;case"img":case"image":case"link":at("error",t),at("load",t),r=i;break;case"details":at("toggle",t),r=i;break;case"input":af(t,i),r=Du(t,i),at("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ft({},i,{value:void 0}),at("invalid",t);break;case"textarea":lf(t,i),r=Ou(t,i),at("invalid",t);break;default:r=i}ku(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?wg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Mg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ca(t,l):typeof l=="number"&&Ca(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Aa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",t):l!=null&&Wd(t,s,l,a))}switch(n){case"input":oo(t),of(t,i,!1);break;case"textarea":oo(t),cf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Zi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Es(t,!!i.multiple,s,!1):i.defaultValue!=null&&Es(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=vl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ht(e),null;case 6:if(t&&e.stateNode!=null)$v(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(de(166));if(n=_r(za.current),_r(Qn.current),vo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Zn]=e,(s=i.nodeValue!==n)&&(t=gn,t!==null))switch(t.tag){case 3:go(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&go(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Zn]=e,e.stateNode=i}return Ht(e),null;case 13:if(lt(dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ct&&mn!==null&&e.mode&1&&!(e.flags&128))dv(),Ds(),e.flags|=98560,s=!1;else if(s=vo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(de(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(de(317));s[Zn]=e}else Ds(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ht(e),s=!1}else kn!==null&&(xd(kn),kn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||dt.current&1?wt===0&&(wt=3):Ah())),e.updateQueue!==null&&(e.flags|=4),Ht(e),null);case 4:return Is(),dd(t,e),t===null&&Ia(e.stateNode.containerInfo),Ht(e),null;case 10:return uh(e.type._context),Ht(e),null;case 17:return on(e.type)&&_l(),Ht(e),null;case 19:if(lt(dt),s=e.memoizedState,s===null)return Ht(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)ia(s,!1);else{if(wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Tl(t),a!==null){for(e.flags|=128,ia(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(dt,dt.current&1|2),e.child}t=t.sibling}s.tail!==null&&xt()>Fs&&(e.flags|=128,i=!0,ia(s,!1),e.lanes=4194304)}else{if(!i)if(t=Tl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ia(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ct)return Ht(e),null}else 2*xt()-s.renderingStartTime>Fs&&n!==1073741824&&(e.flags|=128,i=!0,ia(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xt(),e.sibling=null,n=dt.current,st(dt,i?n&1|2:n&1),e):(Ht(e),null);case 22:case 23:return bh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?fn&1073741824&&(Ht(e),e.subtreeFlags&6&&(e.flags|=8192)):Ht(e),null;case 24:return null;case 25:return null}throw Error(de(156,e.tag))}function Ry(t,e){switch(ah(e),e.tag){case 1:return on(e.type)&&_l(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Is(),lt(an),lt($t),mh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ph(e),null;case 13:if(lt(dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(de(340));Ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(dt),null;case 4:return Is(),null;case 10:return uh(e.type._context),null;case 22:case 23:return bh(),null;case 24:return null;default:return null}}var yo=!1,Wt=!1,Py=typeof WeakSet=="function"?WeakSet:Set,Te=null;function vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){mt(t,e,i)}else n.current=null}function hd(t,e,n){try{n()}catch(i){mt(t,e,i)}}var Jf=!1;function Ny(t,e){if(qu=pl,t=Jg(),rh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,d=0,f=t,p=null;t:for(;;){for(var g;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===t)break t;if(p===n&&++u===r&&(o=a),p===s&&++d===i&&(l=a),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ku={focusedElem:t,selectionRange:n},pl=!1,Te=e;Te!==null;)if(e=Te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Te=t;else for(;Te!==null;){e=Te;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,h=e.stateNode,x=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:On(e.type,y),m);h.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(de(163))}}catch(S){mt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}return _=Jf,Jf=!1,_}function Sa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&hd(e,n,s)}r=r.next}while(r!==i)}}function Zl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function fd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Yv(t){var e=t.alternate;e!==null&&(t.alternate=null,Yv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zn],delete e[Fa],delete e[Qu],delete e[fy],delete e[py])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function qv(t){return t.tag===5||t.tag===3||t.tag===4}function Qf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||qv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=vl));else if(i!==4&&(t=t.child,t!==null))for(pd(t,e,n),t=t.sibling;t!==null;)pd(t,e,n),t=t.sibling}function md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(md(t,e,n),t=t.sibling;t!==null;)md(t,e,n),t=t.sibling}var Ut=null,Fn=!1;function Si(t,e,n){for(n=n.child;n!==null;)Kv(t,e,n),n=n.sibling}function Kv(t,e,n){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(Vl,n)}catch{}switch(n.tag){case 5:Wt||vs(n,e);case 6:var i=Ut,r=Fn;Ut=null,Si(t,e,n),Ut=i,Fn=r,Ut!==null&&(Fn?(t=Ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(Fn?(t=Ut,n=n.stateNode,t.nodeType===8?Nc(t.parentNode,n):t.nodeType===1&&Nc(t,n),La(t)):Nc(Ut,n.stateNode));break;case 4:i=Ut,r=Fn,Ut=n.stateNode.containerInfo,Fn=!0,Si(t,e,n),Ut=i,Fn=r;break;case 0:case 11:case 14:case 15:if(!Wt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&hd(n,e,a),r=r.next}while(r!==i)}Si(t,e,n);break;case 1:if(!Wt&&(vs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){mt(n,e,o)}Si(t,e,n);break;case 21:Si(t,e,n);break;case 22:n.mode&1?(Wt=(i=Wt)||n.memoizedState!==null,Si(t,e,n),Wt=i):Si(t,e,n);break;default:Si(t,e,n)}}function ep(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Py),e.forEach(function(i){var r=By.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Ln(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ut=o.stateNode,Fn=!1;break e;case 3:Ut=o.stateNode.containerInfo,Fn=!0;break e;case 4:Ut=o.stateNode.containerInfo,Fn=!0;break e}o=o.return}if(Ut===null)throw Error(de(160));Kv(s,a,r),Ut=null,Fn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){mt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Zv(e,t),e=e.sibling}function Zv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ln(e,t),Yn(t),i&4){try{Sa(3,t,t.return),Zl(3,t)}catch(y){mt(t,t.return,y)}try{Sa(5,t,t.return)}catch(y){mt(t,t.return,y)}}break;case 1:Ln(e,t),Yn(t),i&512&&n!==null&&vs(n,n.return);break;case 5:if(Ln(e,t),Yn(t),i&512&&n!==null&&vs(n,n.return),t.flags&32){var r=t.stateNode;try{Ca(r,"")}catch(y){mt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&xg(r,s),zu(o,a);var u=zu(o,s);for(a=0;a<l.length;a+=2){var d=l[a],f=l[a+1];d==="style"?wg(r,f):d==="dangerouslySetInnerHTML"?Mg(r,f):d==="children"?Ca(r,f):Wd(r,d,f,u)}switch(o){case"input":Uu(r,s);break;case"textarea":yg(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Es(r,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?Es(r,!!s.multiple,s.defaultValue,!0):Es(r,!!s.multiple,s.multiple?[]:"",!1))}r[Fa]=s}catch(y){mt(t,t.return,y)}}break;case 6:if(Ln(e,t),Yn(t),i&4){if(t.stateNode===null)throw Error(de(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){mt(t,t.return,y)}}break;case 3:if(Ln(e,t),Yn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{La(e.containerInfo)}catch(y){mt(t,t.return,y)}break;case 4:Ln(e,t),Yn(t);break;case 13:Ln(e,t),Yn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(wh=xt())),i&4&&ep(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Wt=(u=Wt)||d,Ln(e,t),Wt=u):Ln(e,t),Yn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(Te=t,d=t.child;d!==null;){for(f=Te=d;Te!==null;){switch(p=Te,g=p.child,p.tag){case 0:case 11:case 14:case 15:Sa(4,p,p.return);break;case 1:vs(p,p.return);var _=p.stateNode;if(typeof _.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){mt(i,n,y)}}break;case 5:vs(p,p.return);break;case 22:if(p.memoizedState!==null){np(f);continue}}g!==null?(g.return=p,Te=g):np(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Eg("display",a))}catch(y){mt(t,t.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){mt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ln(e,t),Yn(t),i&4&&ep(t);break;case 21:break;default:Ln(e,t),Yn(t)}}function Yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(qv(n)){var i=n;break e}n=n.return}throw Error(de(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ca(r,""),i.flags&=-33);var s=Qf(t);md(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Qf(t);pd(t,o,a);break;default:throw Error(de(161))}}catch(l){mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ly(t,e,n){Te=t,Jv(t)}function Jv(t,e,n){for(var i=(t.mode&1)!==0;Te!==null;){var r=Te,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||yo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Wt;o=yo;var u=Wt;if(yo=a,(Wt=l)&&!u)for(Te=r;Te!==null;)a=Te,l=a.child,a.tag===22&&a.memoizedState!==null?ip(r):l!==null?(l.return=a,Te=l):ip(r);for(;s!==null;)Te=s,Jv(s),s=s.sibling;Te=r,yo=o,Wt=u}tp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Te=s):tp(t)}}function tp(t){for(;Te!==null;){var e=Te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Wt||Zl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Wt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:On(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&zf(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zf(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&La(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(de(163))}Wt||e.flags&512&&fd(e)}catch(p){mt(e,e.return,p)}}if(e===t){Te=null;break}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}}function np(t){for(;Te!==null;){var e=Te;if(e===t){Te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Te=n;break}Te=e.return}}function ip(t){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Zl(4,e)}catch(l){mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){mt(e,r,l)}}var s=e.return;try{fd(e)}catch(l){mt(e,s,l)}break;case 5:var a=e.return;try{fd(e)}catch(l){mt(e,a,l)}}}catch(l){mt(e,e.return,l)}if(e===t){Te=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Te=o;break}Te=e.return}}var Dy=Math.ceil,Cl=xi.ReactCurrentDispatcher,Mh=xi.ReactCurrentOwner,Rn=xi.ReactCurrentBatchConfig,Je=0,Dt=null,St=null,Ft=0,fn=0,_s=tr(0),wt=0,Va=null,Rr=0,Jl=0,Eh=0,Ma=null,rn=null,wh=0,Fs=1/0,oi=null,Rl=!1,gd=null,Vi=null,So=!1,Ui=null,Pl=0,Ea=0,vd=null,il=-1,rl=0;function Qt(){return Je&6?xt():il!==-1?il:il=xt()}function Gi(t){return t.mode&1?Je&2&&Ft!==0?Ft&-Ft:gy.transition!==null?(rl===0&&(rl=Og()),rl):(t=tt,t!==0||(t=window.event,t=t===void 0?16:Vg(t.type)),t):1}function Vn(t,e,n,i){if(50<Ea)throw Ea=0,vd=null,Error(de(185));qa(t,n,i),(!(Je&2)||t!==Dt)&&(t===Dt&&(!(Je&2)&&(Jl|=n),wt===4&&Li(t,Ft)),ln(t,i),n===1&&Je===0&&!(e.mode&1)&&(Fs=xt()+500,Yl&&nr()))}function ln(t,e){var n=t.callbackNode;gx(t,e);var i=fl(t,t===Dt?Ft:0);if(i===0)n!==null&&hf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&hf(n),e===1)t.tag===0?my(rp.bind(null,t)):lv(rp.bind(null,t)),dy(function(){!(Je&6)&&nr()}),n=null;else{switch(Fg(i)){case 1:n=Kd;break;case 4:n=Ug;break;case 16:n=hl;break;case 536870912:n=Ig;break;default:n=hl}n=a0(n,Qv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Qv(t,e){if(il=-1,rl=0,Je&6)throw Error(de(327));var n=t.callbackNode;if(Cs()&&t.callbackNode!==n)return null;var i=fl(t,t===Dt?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Nl(t,i);else{e=i;var r=Je;Je|=2;var s=t0();(Dt!==t||Ft!==e)&&(oi=null,Fs=xt()+500,Sr(t,e));do try{Oy();break}catch(o){e0(t,o)}while(!0);ch(),Cl.current=s,Je=r,St!==null?e=0:(Dt=null,Ft=0,e=wt)}if(e!==0){if(e===2&&(r=Gu(t),r!==0&&(i=r,e=_d(t,r))),e===1)throw n=Va,Sr(t,0),Li(t,i),ln(t,xt()),n;if(e===6)Li(t,i);else{if(r=t.current.alternate,!(i&30)&&!Uy(r)&&(e=Nl(t,i),e===2&&(s=Gu(t),s!==0&&(i=s,e=_d(t,s))),e===1))throw n=Va,Sr(t,0),Li(t,i),ln(t,xt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(de(345));case 2:hr(t,rn,oi);break;case 3:if(Li(t,i),(i&130023424)===i&&(e=wh+500-xt(),10<e)){if(fl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ju(hr.bind(null,t,rn,oi),e);break}hr(t,rn,oi);break;case 4:if(Li(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Hn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Dy(i/1960))-i,10<i){t.timeoutHandle=Ju(hr.bind(null,t,rn,oi),i);break}hr(t,rn,oi);break;case 5:hr(t,rn,oi);break;default:throw Error(de(329))}}}return ln(t,xt()),t.callbackNode===n?Qv.bind(null,t):null}function _d(t,e){var n=Ma;return t.current.memoizedState.isDehydrated&&(Sr(t,e).flags|=256),t=Nl(t,e),t!==2&&(e=rn,rn=n,e!==null&&xd(e)),t}function xd(t){rn===null?rn=t:rn.push.apply(rn,t)}function Uy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Wn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Li(t,e){for(e&=~Eh,e&=~Jl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Hn(e),i=1<<n;t[n]=-1,e&=~i}}function rp(t){if(Je&6)throw Error(de(327));Cs();var e=fl(t,0);if(!(e&1))return ln(t,xt()),null;var n=Nl(t,e);if(t.tag!==0&&n===2){var i=Gu(t);i!==0&&(e=i,n=_d(t,i))}if(n===1)throw n=Va,Sr(t,0),Li(t,e),ln(t,xt()),n;if(n===6)throw Error(de(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,hr(t,rn,oi),ln(t,xt()),null}function Th(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(Fs=xt()+500,Yl&&nr())}}function Pr(t){Ui!==null&&Ui.tag===0&&!(Je&6)&&Cs();var e=Je;Je|=1;var n=Rn.transition,i=tt;try{if(Rn.transition=null,tt=1,t)return t()}finally{tt=i,Rn.transition=n,Je=e,!(Je&6)&&nr()}}function bh(){fn=_s.current,lt(_s)}function Sr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,uy(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(ah(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&_l();break;case 3:Is(),lt(an),lt($t),mh();break;case 5:ph(i);break;case 4:Is();break;case 13:lt(dt);break;case 19:lt(dt);break;case 10:uh(i.type._context);break;case 22:case 23:bh()}n=n.return}if(Dt=t,St=t=Wi(t.current,null),Ft=fn=e,wt=0,Va=null,Eh=Jl=Rr=0,rn=Ma=null,vr!==null){for(e=0;e<vr.length;e++)if(n=vr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}vr=null}return t}function e0(t,e){do{var n=St;try{if(ch(),el.current=Al,bl){for(var i=ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}bl=!1}if(Cr=0,Nt=Et=ht=null,ya=!1,Ba=0,Mh.current=null,n===null||n.return===null){wt=1,Va=e,St=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Ft,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Wf(a);if(g!==null){g.flags&=-257,Xf(g,a,o,s,e),g.mode&1&&Gf(s,u,e),e=g,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Gf(s,u,e),Ah();break e}l=Error(de(426))}}else if(ct&&o.mode&1){var m=Wf(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Xf(m,a,o,s,e),oh(Os(l,o));break e}}s=l=Os(l,o),wt!==4&&(wt=2),Ma===null?Ma=[s]:Ma.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Fv(s,l,e);kf(s,h);break e;case 1:o=l;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Vi===null||!Vi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=kv(s,o,e);kf(s,S);break e}}s=s.return}while(s!==null)}i0(n)}catch(C){e=C,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function t0(){var t=Cl.current;return Cl.current=Al,t===null?Al:t}function Ah(){(wt===0||wt===3||wt===2)&&(wt=4),Dt===null||!(Rr&268435455)&&!(Jl&268435455)||Li(Dt,Ft)}function Nl(t,e){var n=Je;Je|=2;var i=t0();(Dt!==t||Ft!==e)&&(oi=null,Sr(t,e));do try{Iy();break}catch(r){e0(t,r)}while(!0);if(ch(),Je=n,Cl.current=i,St!==null)throw Error(de(261));return Dt=null,Ft=0,wt}function Iy(){for(;St!==null;)n0(St)}function Oy(){for(;St!==null&&!ox();)n0(St)}function n0(t){var e=s0(t.alternate,t,fn);t.memoizedProps=t.pendingProps,e===null?i0(t):St=e,Mh.current=null}function i0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ry(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{wt=6,St=null;return}}else if(n=Cy(n,e,fn),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);wt===0&&(wt=5)}function hr(t,e,n){var i=tt,r=Rn.transition;try{Rn.transition=null,tt=1,Fy(t,e,n,i)}finally{Rn.transition=r,tt=i}return null}function Fy(t,e,n,i){do Cs();while(Ui!==null);if(Je&6)throw Error(de(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(de(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(vx(t,s),t===Dt&&(St=Dt=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||So||(So=!0,a0(hl,function(){return Cs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rn.transition,Rn.transition=null;var a=tt;tt=1;var o=Je;Je|=4,Mh.current=null,Ny(t,n),Zv(n,t),iy(Ku),pl=!!qu,Ku=qu=null,t.current=n,Ly(n),lx(),Je=o,tt=a,Rn.transition=s}else t.current=n;if(So&&(So=!1,Ui=t,Pl=r),s=t.pendingLanes,s===0&&(Vi=null),dx(n.stateNode),ln(t,xt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Rl)throw Rl=!1,t=gd,gd=null,t;return Pl&1&&t.tag!==0&&Cs(),s=t.pendingLanes,s&1?t===vd?Ea++:(Ea=0,vd=t):Ea=0,nr(),null}function Cs(){if(Ui!==null){var t=Fg(Pl),e=Rn.transition,n=tt;try{if(Rn.transition=null,tt=16>t?16:t,Ui===null)var i=!1;else{if(t=Ui,Ui=null,Pl=0,Je&6)throw Error(de(331));var r=Je;for(Je|=4,Te=t.current;Te!==null;){var s=Te,a=s.child;if(Te.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(Te=u;Te!==null;){var d=Te;switch(d.tag){case 0:case 11:case 15:Sa(8,d,s)}var f=d.child;if(f!==null)f.return=d,Te=f;else for(;Te!==null;){d=Te;var p=d.sibling,g=d.return;if(Yv(d),d===u){Te=null;break}if(p!==null){p.return=g,Te=p;break}Te=g}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}Te=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Te=a;else e:for(;Te!==null;){if(s=Te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Sa(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Te=h;break e}Te=s.return}}var x=t.current;for(Te=x;Te!==null;){a=Te;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,Te=v;else e:for(a=x;Te!==null;){if(o=Te,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Zl(9,o)}}catch(C){mt(o,o.return,C)}if(o===a){Te=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,Te=S;break e}Te=o.return}}if(Je=r,nr(),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(Vl,t)}catch{}i=!0}return i}finally{tt=n,Rn.transition=e}}return!1}function sp(t,e,n){e=Os(n,e),e=Fv(t,e,1),t=Hi(t,e,1),e=Qt(),t!==null&&(qa(t,1,e),ln(t,e))}function mt(t,e,n){if(t.tag===3)sp(t,t,n);else for(;e!==null;){if(e.tag===3){sp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Vi===null||!Vi.has(i))){t=Os(n,t),t=kv(e,t,1),e=Hi(e,t,1),t=Qt(),e!==null&&(qa(e,1,t),ln(e,t));break}}e=e.return}}function ky(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Qt(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(Ft&n)===n&&(wt===4||wt===3&&(Ft&130023424)===Ft&&500>xt()-wh?Sr(t,0):Eh|=n),ln(t,e)}function r0(t,e){e===0&&(t.mode&1?(e=uo,uo<<=1,!(uo&130023424)&&(uo=4194304)):e=1);var n=Qt();t=mi(t,e),t!==null&&(qa(t,e,n),ln(t,n))}function zy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),r0(t,n)}function By(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(de(314))}i!==null&&i.delete(e),r0(t,n)}var s0;s0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||an.current)sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return sn=!1,Ay(t,e,n);sn=!!(t.flags&131072)}else sn=!1,ct&&e.flags&1048576&&cv(e,Sl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;nl(t,e),t=e.pendingProps;var r=Ls(e,$t.current);As(e,n),r=vh(null,e,i,t,r,n);var s=_h();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(i)?(s=!0,xl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,hh(e),r.updater=Kl,e.stateNode=r,r._reactInternals=e,sd(e,i,t,n),e=ld(null,e,i,!0,s,n)):(e.tag=0,ct&&s&&sh(e),Zt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(nl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Hy(i),t=On(i,t),r){case 0:e=od(null,e,i,t,n);break e;case 1:e=qf(null,e,i,t,n);break e;case 11:e=$f(null,e,i,t,n);break e;case 14:e=Yf(null,e,i,On(i.type,t),n);break e}throw Error(de(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),od(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),qf(t,e,i,r,n);case 3:e:{if(Hv(e),t===null)throw Error(de(387));i=e.pendingProps,s=e.memoizedState,r=s.element,mv(t,e),wl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Os(Error(de(423)),e),e=Kf(t,e,i,n,r);break e}else if(i!==r){r=Os(Error(de(424)),e),e=Kf(t,e,i,n,r);break e}else for(mn=ji(e.stateNode.containerInfo.firstChild),gn=e,ct=!0,kn=null,n=fv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ds(),i===r){e=gi(t,e,n);break e}Zt(t,e,i,n)}e=e.child}return e;case 5:return gv(e),t===null&&nd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Zu(i,r)?a=null:s!==null&&Zu(i,s)&&(e.flags|=32),jv(t,e),Zt(t,e,a,n),e.child;case 6:return t===null&&nd(e),null;case 13:return Vv(t,e,n);case 4:return fh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Us(e,null,i,n):Zt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),$f(t,e,i,r,n);case 7:return Zt(t,e,e.pendingProps,n),e.child;case 8:return Zt(t,e,e.pendingProps.children,n),e.child;case 12:return Zt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,st(Ml,i._currentValue),i._currentValue=a,s!==null)if(Wn(s.value,a)){if(s.children===r.children&&!an.current){e=gi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=hi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),id(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(de(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),id(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Zt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,As(e,n),r=Pn(r),i=i(r),e.flags|=1,Zt(t,e,i,n),e.child;case 14:return i=e.type,r=On(i,e.pendingProps),r=On(i.type,r),Yf(t,e,i,r,n);case 15:return zv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),nl(t,e),e.tag=1,on(i)?(t=!0,xl(e)):t=!1,As(e,n),Ov(e,i,r),sd(e,i,r,n),ld(null,e,i,!0,t,n);case 19:return Gv(t,e,n);case 22:return Bv(t,e,n)}throw Error(de(156,e.tag))};function a0(t,e){return Dg(t,e)}function jy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(t,e,n,i){return new jy(t,e,n,i)}function Ch(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Hy(t){if(typeof t=="function")return Ch(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$d)return 11;if(t===Yd)return 14}return 2}function Wi(t,e){var n=t.alternate;return n===null?(n=Cn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function sl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Ch(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ls:return Mr(n.children,r,s,e);case Xd:a=8,r|=8;break;case Ru:return t=Cn(12,n,e,r|2),t.elementType=Ru,t.lanes=s,t;case Pu:return t=Cn(13,n,e,r),t.elementType=Pu,t.lanes=s,t;case Nu:return t=Cn(19,n,e,r),t.elementType=Nu,t.lanes=s,t;case gg:return Ql(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case pg:a=10;break e;case mg:a=9;break e;case $d:a=11;break e;case Yd:a=14;break e;case Ci:a=16,i=null;break e}throw Error(de(130,t==null?t:typeof t,""))}return e=Cn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Mr(t,e,n,i){return t=Cn(7,t,i,e),t.lanes=n,t}function Ql(t,e,n,i){return t=Cn(22,t,i,e),t.elementType=gg,t.lanes=n,t.stateNode={isHidden:!1},t}function zc(t,e,n){return t=Cn(6,t,null,e),t.lanes=n,t}function Bc(t,e,n){return e=Cn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Vy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yc(0),this.expirationTimes=yc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Rh(t,e,n,i,r,s,a,o,l){return t=new Vy(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Cn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hh(s),t}function Gy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:os,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function o0(t){if(!t)return Ji;t=t._reactInternals;e:{if(Ir(t)!==t||t.tag!==1)throw Error(de(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(de(171))}if(t.tag===1){var n=t.type;if(on(n))return ov(t,n,e)}return e}function l0(t,e,n,i,r,s,a,o,l){return t=Rh(n,i,!0,t,r,s,a,o,l),t.context=o0(null),n=t.current,i=Qt(),r=Gi(n),s=hi(i,r),s.callback=e??null,Hi(n,s,r),t.current.lanes=r,qa(t,r,i),ln(t,i),t}function ec(t,e,n,i){var r=e.current,s=Qt(),a=Gi(r);return n=o0(n),e.context===null?e.context=n:e.pendingContext=n,e=hi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Hi(r,e,a),t!==null&&(Vn(t,r,a,s),Qo(t,r,a)),a}function Ll(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ap(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ph(t,e){ap(t,e),(t=t.alternate)&&ap(t,e)}function Wy(){return null}var c0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nh(t){this._internalRoot=t}tc.prototype.render=Nh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(de(409));ec(t,e,null,null)};tc.prototype.unmount=Nh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Pr(function(){ec(null,t,null,null)}),e[pi]=null}};function tc(t){this._internalRoot=t}tc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Bg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ni.length&&e!==0&&e<Ni[n].priority;n++);Ni.splice(n,0,t),n===0&&Hg(t)}};function Lh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function op(){}function Xy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Ll(a);s.call(u)}}var a=l0(e,i,t,0,null,!1,!1,"",op);return t._reactRootContainer=a,t[pi]=a.current,Ia(t.nodeType===8?t.parentNode:t),Pr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Ll(l);o.call(u)}}var l=Rh(t,0,!1,null,null,!1,!1,"",op);return t._reactRootContainer=l,t[pi]=l.current,Ia(t.nodeType===8?t.parentNode:t),Pr(function(){ec(e,l,n,i)}),l}function ic(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Ll(a);o.call(l)}}ec(e,a,t,r)}else a=Xy(n,e,t,r,i);return Ll(a)}kg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=fa(e.pendingLanes);n!==0&&(Zd(e,n|1),ln(e,xt()),!(Je&6)&&(Fs=xt()+500,nr()))}break;case 13:Pr(function(){var i=mi(t,1);if(i!==null){var r=Qt();Vn(i,t,1,r)}}),Ph(t,1)}};Jd=function(t){if(t.tag===13){var e=mi(t,134217728);if(e!==null){var n=Qt();Vn(e,t,134217728,n)}Ph(t,134217728)}};zg=function(t){if(t.tag===13){var e=Gi(t),n=mi(t,e);if(n!==null){var i=Qt();Vn(n,t,e,i)}Ph(t,e)}};Bg=function(){return tt};jg=function(t,e){var n=tt;try{return tt=t,e()}finally{tt=n}};ju=function(t,e,n){switch(e){case"input":if(Uu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=$l(i);if(!r)throw Error(de(90));_g(i),Uu(i,r)}}}break;case"textarea":yg(t,n);break;case"select":e=n.value,e!=null&&Es(t,!!n.multiple,e,!1)}};Ag=Th;Cg=Pr;var $y={usingClientEntryPoint:!1,Events:[Za,hs,$l,Tg,bg,Th]},ra={findFiberByHostInstance:gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yy={bundleType:ra.bundleType,version:ra.version,rendererPackageName:ra.rendererPackageName,rendererConfig:ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ng(t),t===null?null:t.stateNode},findFiberByHostInstance:ra.findFiberByHostInstance||Wy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mo.isDisabled&&Mo.supportsFiber)try{Vl=Mo.inject(Yy),Jn=Mo}catch{}}xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$y;xn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lh(e))throw Error(de(200));return Gy(t,e,null,n)};xn.createRoot=function(t,e){if(!Lh(t))throw Error(de(299));var n=!1,i="",r=c0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Rh(t,1,!1,null,null,n,!1,i,r),t[pi]=e.current,Ia(t.nodeType===8?t.parentNode:t),new Nh(e)};xn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(de(188)):(t=Object.keys(t).join(","),Error(de(268,t)));return t=Ng(e),t=t===null?null:t.stateNode,t};xn.flushSync=function(t){return Pr(t)};xn.hydrate=function(t,e,n){if(!nc(e))throw Error(de(200));return ic(null,t,e,!0,n)};xn.hydrateRoot=function(t,e,n){if(!Lh(t))throw Error(de(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=c0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=l0(e,null,t,1,n??null,r,!1,s,a),t[pi]=e.current,Ia(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new tc(e)};xn.render=function(t,e,n){if(!nc(e))throw Error(de(200));return ic(null,t,e,!1,n)};xn.unmountComponentAtNode=function(t){if(!nc(t))throw Error(de(40));return t._reactRootContainer?(Pr(function(){ic(null,null,t,!1,function(){t._reactRootContainer=null,t[pi]=null})}),!0):!1};xn.unstable_batchedUpdates=Th;xn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!nc(n))throw Error(de(200));if(t==null||t._reactInternals===void 0)throw Error(de(38));return ic(t,e,n,!1,i)};xn.version="18.3.1-next-f1338f8080-20240426";function u0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u0)}catch(t){console.error(t)}}u0(),ug.exports=xn;var qy=ug.exports,d0,lp=qy;d0=lp.createRoot,lp.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ga(){return Ga=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ga.apply(null,arguments)}var Ii;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ii||(Ii={}));const cp="popstate";function Ky(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:a,hash:o}=i.location;return yd("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Dl(r)}return Jy(e,n,null,t)}function vt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function h0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Zy(){return Math.random().toString(36).substr(2,8)}function up(t,e){return{usr:t.state,key:t.key,idx:e}}function yd(t,e,n,i){return n===void 0&&(n=null),Ga({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?$s(e):e,{state:n,key:e&&e.key||i||Zy()})}function Dl(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function $s(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function Jy(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=Ii.Pop,l=null,u=d();u==null&&(u=0,a.replaceState(Ga({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function f(){o=Ii.Pop;let m=d(),h=m==null?null:m-u;u=m,l&&l({action:o,location:y.location,delta:h})}function p(m,h){o=Ii.Push;let x=yd(y.location,m,h);u=d()+1;let v=up(x,u),S=y.createHref(x);try{a.pushState(v,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;r.location.assign(S)}s&&l&&l({action:o,location:y.location,delta:1})}function g(m,h){o=Ii.Replace;let x=yd(y.location,m,h);u=d();let v=up(x,u),S=y.createHref(x);a.replaceState(v,"",S),s&&l&&l({action:o,location:y.location,delta:0})}function _(m){let h=r.location.origin!=="null"?r.location.origin:r.location.href,x=typeof m=="string"?m:Dl(m);return x=x.replace(/ $/,"%20"),vt(h,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,h)}let y={get action(){return o},get location(){return t(r,a)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(cp,f),l=m,()=>{r.removeEventListener(cp,f),l=null}},createHref(m){return e(r,m)},createURL:_,encodeLocation(m){let h=_(m);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:g,go(m){return a.go(m)}};return y}var dp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(dp||(dp={}));function Qy(t,e,n){return n===void 0&&(n="/"),eS(t,e,n)}function eS(t,e,n,i){let r=typeof e=="string"?$s(e):e,s=ks(r.pathname||"/",n);if(s==null)return null;let a=f0(t);tS(a);let o=null,l=hS(s);for(let u=0;o==null&&u<a.length;++u)o=uS(a[u],l);return o}function f0(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(vt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=Xi([i,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(vt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),f0(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:lS(u,s.index),routesMeta:d})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of p0(s.path))r(s,a,l)}),e}function p0(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=p0(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function tS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:cS(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const nS=/^:[\w-]+$/,iS=3,rS=2,sS=1,aS=10,oS=-2,hp=t=>t==="*";function lS(t,e){let n=t.split("/"),i=n.length;return n.some(hp)&&(i+=oS),e&&(i+=rS),n.filter(r=>!hp(r)).reduce((r,s)=>r+(nS.test(s)?iS:s===""?sS:aS),i)}function cS(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function uS(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],u=o===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=Sd({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),p=l.route;if(!f)return null;Object.assign(r,f.params),a.push({params:r,pathname:Xi([s,f.pathname]),pathnameBase:mS(Xi([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=Xi([s,f.pathnameBase]))}return a}function Sd(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=dS(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((u,d,f)=>{let{paramName:p,isOptional:g}=d;if(p==="*"){let y=o[f]||"";a=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const _=o[f];return g&&!_?u[p]=void 0:u[p]=(_||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:t}}function dS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),h0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function hS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return h0(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ks(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function fS(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?$s(t):t,s;return n?(n=v0(n),n.startsWith("/")?s=fp(n.substring(1),"/"):s=fp(n,e)):s=e,{pathname:s,search:gS(i),hash:vS(r)}}function fp(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function jc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function pS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function m0(t,e){let n=pS(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function g0(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=$s(t):(r=Ga({},t),vt(!r.pathname||!r.pathname.includes("?"),jc("?","pathname","search",r)),vt(!r.pathname||!r.pathname.includes("#"),jc("#","pathname","hash",r)),vt(!r.search||!r.search.includes("#"),jc("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let f=e.length-1;if(!i&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),f-=1;r.pathname=p.join("/")}o=f>=0?e[f]:"/"}let l=fS(r,o),u=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const v0=t=>t.replace(/\/\/+/g,"/"),Xi=t=>v0(t.join("/")),mS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),gS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,vS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function _S(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const _0=["post","put","patch","delete"];new Set(_0);const xS=["get",..._0];new Set(xS);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wa(){return Wa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Wa.apply(null,arguments)}const rc=P.createContext(null),x0=P.createContext(null),ir=P.createContext(null),sc=P.createContext(null),Or=P.createContext({outlet:null,matches:[],isDataRoute:!1}),y0=P.createContext(null);function yS(t,e){let{relative:n}=e===void 0?{}:e;Qa()||vt(!1);let{basename:i,navigator:r}=P.useContext(ir),{hash:s,pathname:a,search:o}=ac(t,{relative:n}),l=a;return i!=="/"&&(l=a==="/"?i:Xi([i,a])),r.createHref({pathname:l,search:o,hash:s})}function Qa(){return P.useContext(sc)!=null}function Fr(){return Qa()||vt(!1),P.useContext(sc).location}function S0(t){P.useContext(ir).static||P.useLayoutEffect(t)}function M0(){let{isDataRoute:t}=P.useContext(Or);return t?DS():SS()}function SS(){Qa()||vt(!1);let t=P.useContext(rc),{basename:e,future:n,navigator:i}=P.useContext(ir),{matches:r}=P.useContext(Or),{pathname:s}=Fr(),a=JSON.stringify(m0(r,n.v7_relativeSplatPath)),o=P.useRef(!1);return S0(()=>{o.current=!0}),P.useCallback(function(u,d){if(d===void 0&&(d={}),!o.current)return;if(typeof u=="number"){i.go(u);return}let f=g0(u,JSON.parse(a),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Xi([e,f.pathname])),(d.replace?i.replace:i.push)(f,d.state,d)},[e,i,a,s,t])}function ac(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=P.useContext(ir),{matches:r}=P.useContext(Or),{pathname:s}=Fr(),a=JSON.stringify(m0(r,i.v7_relativeSplatPath));return P.useMemo(()=>g0(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function MS(t,e){return ES(t,e)}function ES(t,e,n,i){Qa()||vt(!1);let{navigator:r}=P.useContext(ir),{matches:s}=P.useContext(Or),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=Fr(),d;if(e){var f;let m=typeof e=="string"?$s(e):e;l==="/"||(f=m.pathname)!=null&&f.startsWith(l)||vt(!1),d=m}else d=u;let p=d.pathname||"/",g=p;if(l!=="/"){let m=l.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(m.length).join("/")}let _=Qy(t,{pathname:g}),y=CS(_&&_.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:Xi([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:Xi([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,n,i);return e&&y?P.createElement(sc.Provider,{value:{location:Wa({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Ii.Pop}},y):y}function wS(){let t=LS(),e=_S(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},e),n?P.createElement("pre",{style:r},n):null,null)}const TS=P.createElement(wS,null);class bS extends P.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?P.createElement(Or.Provider,{value:this.props.routeContext},P.createElement(y0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function AS(t){let{routeContext:e,match:n,children:i}=t,r=P.useContext(rc);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(Or.Provider,{value:e},i)}function CS(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let d=a.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);d>=0||vt(!1),a=a.slice(0,Math.min(a.length,d+1))}let l=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<a.length;d++){let f=a[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:p,errors:g}=n,_=f.route.loader&&p[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||_){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,f,p)=>{let g,_=!1,y=null,m=null;n&&(g=o&&f.route.id?o[f.route.id]:void 0,y=f.route.errorElement||TS,l&&(u<0&&p===0?(US("route-fallback"),_=!0,m=null):u===p&&(_=!0,m=f.route.hydrateFallbackElement||null)));let h=e.concat(a.slice(0,p+1)),x=()=>{let v;return g?v=y:_?v=m:f.route.Component?v=P.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=d,P.createElement(AS,{match:f,routeContext:{outlet:d,matches:h,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?P.createElement(bS,{location:n.location,revalidation:n.revalidation,component:y,error:g,children:x(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):x()},null)}var E0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(E0||{}),w0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(w0||{});function RS(t){let e=P.useContext(rc);return e||vt(!1),e}function PS(t){let e=P.useContext(x0);return e||vt(!1),e}function NS(t){let e=P.useContext(Or);return e||vt(!1),e}function T0(t){let e=NS(),n=e.matches[e.matches.length-1];return n.route.id||vt(!1),n.route.id}function LS(){var t;let e=P.useContext(y0),n=PS(),i=T0();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function DS(){let{router:t}=RS(E0.UseNavigateStable),e=T0(w0.UseNavigateStable),n=P.useRef(!1);return S0(()=>{n.current=!0}),P.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Wa({fromRouteId:e},s)))},[t,e])}const pp={};function US(t,e,n){pp[t]||(pp[t]=!0)}function IS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Ai(t){vt(!1)}function OS(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Ii.Pop,navigator:s,static:a=!1,future:o}=t;Qa()&&vt(!1);let l=e.replace(/^\/*/,"/"),u=P.useMemo(()=>({basename:l,navigator:s,static:a,future:Wa({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=$s(i));let{pathname:d="/",search:f="",hash:p="",state:g=null,key:_="default"}=i,y=P.useMemo(()=>{let m=ks(d,l);return m==null?null:{location:{pathname:m,search:f,hash:p,state:g,key:_},navigationType:r}},[l,d,f,p,g,_,r]);return y==null?null:P.createElement(ir.Provider,{value:u},P.createElement(sc.Provider,{children:n,value:y}))}function mp(t){let{children:e,location:n}=t;return MS(Md(e),n)}new Promise(()=>{});function Md(t,e){e===void 0&&(e=[]);let n=[];return P.Children.forEach(t,(i,r)=>{if(!P.isValidElement(i))return;let s=[...e,r];if(i.type===P.Fragment){n.push.apply(n,Md(i.props.children,s));return}i.type!==Ai&&vt(!1),!i.props.index||!i.props.children||vt(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=Md(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ul(){return Ul=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ul.apply(null,arguments)}function b0(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function FS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function kS(t,e){return t.button===0&&(!e||e==="_self")&&!FS(t)}function Ed(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let i=t[n];return e.concat(Array.isArray(i)?i.map(r=>[n,r]):[[n,i]])},[]))}function zS(t,e){let n=Ed(t);return e&&e.forEach((i,r)=>{n.has(r)||e.getAll(r).forEach(s=>{n.append(r,s)})}),n}const BS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],jS=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],HS="6";try{window.__reactRouterVersion=HS}catch{}const VS=P.createContext({isTransitioning:!1}),GS="startTransition",gp=k_[GS];function WS(t){let{basename:e,children:n,future:i,window:r}=t,s=P.useRef();s.current==null&&(s.current=Ky({window:r,v5Compat:!0}));let a=s.current,[o,l]=P.useState({action:a.action,location:a.location}),{v7_startTransition:u}=i||{},d=P.useCallback(f=>{u&&gp?gp(()=>l(f)):l(f)},[l,u]);return P.useLayoutEffect(()=>a.listen(d),[a,d]),P.useEffect(()=>IS(i),[i]),P.createElement(OS,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}const XS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$S=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Dh=P.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:u,preventScrollReset:d,viewTransition:f}=e,p=b0(e,BS),{basename:g}=P.useContext(ir),_,y=!1;if(typeof u=="string"&&$S.test(u)&&(_=u,XS))try{let v=new URL(window.location.href),S=u.startsWith("//")?new URL(v.protocol+u):new URL(u),C=ks(S.pathname,g);S.origin===v.origin&&C!=null?u=C+S.search+S.hash:y=!0}catch{}let m=yS(u,{relative:r}),h=qS(u,{replace:a,state:o,target:l,preventScrollReset:d,relative:r,viewTransition:f});function x(v){i&&i(v),v.defaultPrevented||h(v)}return P.createElement("a",Ul({},p,{href:_||m,onClick:y||s?i:x,ref:n,target:l}))}),ar=P.forwardRef(function(e,n){let{"aria-current":i="page",caseSensitive:r=!1,className:s="",end:a=!1,style:o,to:l,viewTransition:u,children:d}=e,f=b0(e,jS),p=ac(l,{relative:f.relative}),g=Fr(),_=P.useContext(x0),{navigator:y,basename:m}=P.useContext(ir),h=_!=null&&ZS(p)&&u===!0,x=y.encodeLocation?y.encodeLocation(p).pathname:p.pathname,v=g.pathname,S=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;r||(v=v.toLowerCase(),S=S?S.toLowerCase():null,x=x.toLowerCase()),S&&m&&(S=ks(S,m)||S);const C=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let b=v===x||!a&&v.startsWith(x)&&v.charAt(C)==="/",M=S!=null&&(S===x||!a&&S.startsWith(x)&&S.charAt(x.length)==="/"),D={isActive:b,isPending:M,isTransitioning:h},T=b?i:void 0,w;typeof s=="function"?w=s(D):w=[s,b?"active":null,M?"pending":null,h?"transitioning":null].filter(Boolean).join(" ");let z=typeof o=="function"?o(D):o;return P.createElement(Dh,Ul({},f,{"aria-current":T,className:w,ref:n,style:z,to:l,viewTransition:u}),typeof d=="function"?d(D):d)});var wd;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(wd||(wd={}));var vp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(vp||(vp={}));function YS(t){let e=P.useContext(rc);return e||vt(!1),e}function qS(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,l=M0(),u=Fr(),d=ac(t,{relative:a});return P.useCallback(f=>{if(kS(f,n)){f.preventDefault();let p=i!==void 0?i:Dl(u)===Dl(d);l(t,{replace:p,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[u,l,d,i,r,n,t,s,a,o])}function KS(t){let e=P.useRef(Ed(t)),n=P.useRef(!1),i=Fr(),r=P.useMemo(()=>zS(i.search,n.current?null:e.current),[i.search]),s=M0(),a=P.useCallback((o,l)=>{const u=Ed(typeof o=="function"?o(r):o);n.current=!0,s("?"+u,l)},[s,r]);return[r,a]}function ZS(t,e){e===void 0&&(e={});let n=P.useContext(VS);n==null&&vt(!1);let{basename:i}=YS(wd.useViewTransitionState),r=ac(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=ks(n.currentLocation.pathname,i)||n.currentLocation.pathname,a=ks(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Sd(r.pathname,a)!=null||Sd(r.pathname,s)!=null}const JS="",A0=()=>{try{return localStorage.getItem("fitscan_plan")||"free"}catch{return"free"}},QS=t=>{try{localStorage.setItem("fitscan_plan",t)}catch{}},eM=()=>{try{return localStorage.getItem("fitscan_store_key")||""}catch{return""}},Eo=t=>{try{t?localStorage.setItem("fitscan_store_key",t):localStorage.removeItem("fitscan_store_key")}catch{}},C0=()=>{try{return localStorage.getItem("fitscan_token")||""}catch{return""}},al=t=>{try{t?localStorage.setItem("fitscan_token",t):localStorage.removeItem("fitscan_token")}catch{}};class vi extends Error{constructor(e,n){super(n),this.status=e}}function tM(t,e){const n=t&&t.detail;return typeof n=="string"?n:Array.isArray(n)?n.map(i=>(i.msg||"").replace(/^Value error, /,"")).filter(Boolean).join("; ")||"Please check your inputs.":e===413?"That file is too large.":e===429?"Too many requests. Please wait a minute.":`Something went wrong (${e}).`}async function Ye(t,{method:e="GET",json:n,form:i,headers:r={},store:s}={}){const a={"X-Plan":A0(),...r},o=C0();o&&(a.Authorization=`Bearer ${o}`),s&&(a["X-Store-Key"]=s);let l;n!==void 0?(a["Content-Type"]="application/json",l=JSON.stringify(n)):i&&(l=i);let u;try{u=await fetch(JS+t,{method:e,headers:a,body:l})}catch{throw new vi(0,"Cannot reach the FitScan server. Is it running?")}const f=(u.headers.get("content-type")||"").includes("json")?await u.json().catch(()=>null):await u.text();if(!u.ok)throw new vi(u.status,tM(f,u.status));return f}const R0=2.54,nM=t=>t/R0,iM=t=>t*R0,xr=(t,e=1)=>t==null||Number.isNaN(t)?"":Number(t).toFixed(e),gt=t=>`${Math.round(t*100)}%`,Uh={F:{bust:"Bust",waist:"Waist",hip:"Hip",shoulder:"Shoulder",neck:"Neck"},M:{bust:"Chest",waist:"Waist",hip:"Hip",shoulder:"Shoulder",neck:"Neck"}};function rM({plan:t,onClose:e,onChoose:n}){return c.jsx("div",{className:"modal-bg",onClick:i=>{i.target===i.currentTarget&&e()},role:"dialog","aria-modal":"true","aria-label":"Plans",children:c.jsxs("div",{className:"modal",children:[c.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[c.jsx("h2",{children:"Choose your plan"}),c.jsx("button",{className:"btn plain small",onClick:e,children:"Close"})]}),c.jsx("p",{className:"muted small",children:'Prototype note: no payment is taken. "Activate Pro" simply switches the app into Pro mode so you can demo the subscription features.'}),c.jsxs("div",{className:"grid2",children:[c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Free"}),c.jsx("div",{className:"price",children:"Rs 0"}),c.jsxs("ul",{className:"small muted",children:[c.jsx("li",{children:"Body scan from 2 photos"}),c.jsx("li",{children:"General sizes (works across brands)"}),c.jsx("li",{children:"Probability of fit for every garment type"})]}),c.jsx("button",{className:"btn ghost",disabled:t==="free",onClick:()=>n("free"),children:t==="free"?"Current plan":"Switch to Free"})]}),c.jsxs("div",{className:"card",style:{borderColor:"var(--accent)"},children:[c.jsxs("h3",{children:["Pro ",c.jsx("span",{className:"badge pro",children:"Subscription"})]}),c.jsxs("div",{className:"price",children:["Rs 99",c.jsx("span",{className:"small muted",children:"/month (example)"})]}),c.jsxs("ul",{className:"small muted",children:[c.jsx("li",{children:"Everything in Free"}),c.jsx("li",{children:"Pick a brand and get sizes from that brand's own chart"}),c.jsx("li",{children:"Biba, Aurelia, Fabindia, Trends, Zara"}),c.jsx("li",{children:"Brand quirks (Zara runs slim, cotton shrinkage)"})]}),c.jsx("button",{className:"btn",disabled:t==="pro",onClick:()=>n("pro"),children:t==="pro"?"Current plan":"Activate Pro (demo)"})]})]}),c.jsx("p",{className:"small muted",style:{marginTop:12},children:"Stores and marketplaces don't need a subscription: they integrate the widget and use their own size charts (see the Stores page)."})]})})}function sM(){const[t,e]=P.useState(!1);P.useEffect(()=>{try{if(localStorage.getItem("fitscan-welcomed"))return}catch{}const i=setTimeout(()=>e(!0),700);return()=>clearTimeout(i)},[]);function n(){e(!1);try{localStorage.setItem("fitscan-welcomed","1")}catch{}}return t?c.jsx("div",{className:"modal-bg",role:"dialog","aria-modal":"true","aria-label":"How FitScan works",onClick:i=>{i.target===i.currentTarget&&n()},children:c.jsxs("div",{className:"modal small-modal",children:[c.jsx("h2",{children:"Welcome to FitScan"}),c.jsx("p",{className:"muted",children:"Stop guessing sizes. In under a minute:"}),c.jsxs("ol",{children:[c.jsxs("li",{children:[c.jsx("b",{children:"Two photos"})," (front and side) or type your measurements."]}),c.jsxs("li",{children:[c.jsx("b",{children:"See the chance"})," every size fits you, for tops, kurtas, jeans, sarees and more."]}),c.jsxs("li",{children:[c.jsx("b",{children:"Buy once"}),", with less risk of a return."]})]}),c.jsx("p",{className:"small muted",children:"Your photos are never stored."}),c.jsx("button",{className:"btn",onClick:n,children:"Let's start"})]})}):null}const aM=1600;async function oM(t){try{if(!t||!t.type||!t.type.startsWith("image/")||typeof createImageBitmap!="function"||typeof document>"u"||t.size<350*1024)return t;const e=await createImageBitmap(t),n=Math.min(1,aM/Math.max(e.width,e.height));if(n===1&&t.size<900*1024)return e.close&&e.close(),t;const i=Math.round(e.width*n),r=Math.round(e.height*n),s=document.createElement("canvas");s.width=i,s.height=r;const a=s.getContext("2d");if(!a)return t;a.drawImage(e,0,0,i,r),e.close&&e.close();const o=await new Promise(l=>s.toBlob(l,"image/jpeg",.88));return!o||o.size>=t.size?t:new File([o],(t.name||"photo").replace(/\.\w+$/,"")+".jpg",{type:"image/jpeg"})}catch{return t}}const lM=c.jsxs("svg",{viewBox:"0 0 90 150",fill:"none",stroke:"#b0829a",strokeWidth:"3",strokeLinecap:"round","aria-hidden":"true",children:[c.jsx("circle",{cx:"45",cy:"14",r:"10"}),c.jsx("path",{d:"M45 24v6M27 34h36M27 34l-14 46M63 34l14 46M32 34l-2 52h30l-2-52M38 86l-3 56M52 86l3 56"})]}),cM=c.jsxs("svg",{viewBox:"0 0 90 150",fill:"none",stroke:"#b0829a",strokeWidth:"3",strokeLinecap:"round","aria-hidden":"true",children:[c.jsx("circle",{cx:"45",cy:"14",r:"10"}),c.jsx("path",{d:"M45 24v8M38 34c-2 20 0 34 2 52M52 34c4 18 2 34 0 52M40 86l2 56M50 86l-2 56M46 40l6 28"})]}),_p=!1;function zs({kind:t,file:e,onFile:n,hint:i}){const r=P.useRef(null),[s,a]=P.useState(""),[o,l]=P.useState(!1),[u,d]=P.useState(!1);return P.useEffect(()=>{if(!e){a("");return}const f=URL.createObjectURL(e);return a(f),()=>URL.revokeObjectURL(f)},[e]),c.jsxs("div",{className:"slotwrap",children:[c.jsxs("div",{className:`slot ${o?"working":""}`,role:"button",tabIndex:0,"aria-label":`Choose ${t} photo`,onClick:()=>r.current&&r.current.click(),onKeyDown:f=>{(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),r.current&&r.current.click())},children:[c.jsx("span",{className:"badge tag",children:t==="front"?"Front":"Side"}),s?c.jsx("img",{src:s,alt:`${t} view preview`}):c.jsxs(c.Fragment,{children:[t==="front"?lM:cM,c.jsx("strong",{style:{marginTop:10},children:t==="front"?"Front view":"Side view"}),c.jsx("span",{className:"muted small",children:i}),c.jsx("span",{className:"cta",children:"Tap to take or choose a photo"})]}),c.jsx("input",{ref:r,type:"file",accept:"image/*",capture:"environment","data-testid":`file-${t}`,onChange:async f=>{const p=f.target.files&&f.target.files[0];if(p){l(!0);try{n(await oM(p))}finally{l(!1)}}}})]}),_p,_p]})}function uM({value:t,unit:e,label:n,onValue:i}){const r=l=>l===""||l===null||l===void 0?"":xr(e==="cm"?iM(l):l,1),s=l=>{const u=parseFloat(l);return l.trim()===""||Number.isNaN(u)?"":e==="cm"?nM(u):u},[a,o]=P.useState(r(t));return P.useEffect(()=>{const l=s(a);l===t||l!==""&&t!==""&&t!==null&&Math.abs(l-Number(t))<1e-6||o(r(t))},[t,e]),c.jsx("input",{type:"text",inputMode:"decimal",autoComplete:"off","aria-label":n,value:a,onBlur:()=>o(r(t)),onChange:l=>{const u=l.target.value;/^\d*\.?\d*$/.test(u)&&(o(u),i(s(u)))}})}function P0({gender:t,values:e,onChange:n,unit:i,setUnit:r,scanned:s,optional:a=!0}){const o=Uh[t],l=[["bust",!0],["waist",!0],["hip",!0],...a?[["neck",!1],["shoulder",!1]]:[]];return c.jsxs("div",{children:[c.jsxs("div",{className:"row",style:{justifyContent:"space-between",marginBottom:6},children:[c.jsx("span",{className:"small muted",children:"Edit any value if you have a tape measure. Optional rows improve shirts and blazers."}),c.jsxs("div",{className:"seg",role:"group","aria-label":"Units",children:[c.jsx("button",{"aria-pressed":i==="in",onClick:()=>r("in"),children:"inches"}),c.jsx("button",{"aria-pressed":i==="cm",onClick:()=>r("cm"),children:"cm"})]})]}),c.jsxs("table",{className:"mtable",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Measurement"}),c.jsxs("th",{children:["Value (",i,")"]}),c.jsx("th",{children:s?"Scan estimate":""})]})}),c.jsx("tbody",{children:l.map(([u,d])=>c.jsxs("tr",{children:[c.jsxs("td",{children:[c.jsx("b",{children:o[u]}),!d&&c.jsx("span",{className:"faint small",children:" (optional)"})]}),c.jsx("td",{children:c.jsx(uM,{value:e[u],unit:i,label:`${o[u]} (${i})`,onValue:f=>n({...e,[u]:f})})}),c.jsx("td",{className:"small muted",children:s&&s[u]?`${xr(i==="cm"?s[u].cm:s[u].inches,1)} ${i}`:""})]},u))})]})]})}function N0(t){const e={};for(const[n,i]of Object.entries(t))i!==""&&i!==null&&i!==void 0&&!Number.isNaN(Number(i))&&(e[n]=Number(i));return e}function dM(t){const e=t.p_fit,n=t.alternative,i=n?e+(t.alternative_p_fit||0):e;return e>=.85?{tone:"hi",title:"Order just one size",text:`Size ${t.size} has a ${gt(e)} chance of fitting. A second size would almost certainly be wasted, so skip the "just in case" order.`}:n&&e>=.5?{tone:"mid",title:"One size is likely enough",text:`Size ${t.size} fits with ${gt(e)} chance. If you want a safety net, add ${n}: together they cover ${gt(i)}, but you would probably return one.`}:n?{tone:"lo",title:"You are between two sizes",text:`${t.size} (${gt(e)}) and ${n} (${gt(t.alternative_p_fit)}) are close. Check the fabric stretch, or order both if returns are free: together they cover ${gt(i)}.`}:{tone:"mid",title:"Order one size, check the details",text:`Size ${t.size} fits with ${gt(e)} chance. Check the product page for stretch or cut notes.`}}function hM({rec:t}){const e=dM(t),n=Math.round((1-t.p_fit)*100);return c.jsxs("div",{className:`advisor ${e.tone}`,"data-testid":"risk-advisor",children:[c.jsxs("div",{className:"gauge","aria-label":`Return risk ${n} percent`,children:[c.jsxs("b",{children:[n,"%"]}),c.jsx("span",{children:"return risk"})]}),c.jsxs("div",{children:[c.jsx("div",{className:"atitle",children:e.title}),c.jsx("div",{className:"small muted",children:e.text})]})]})}function fM({tight:t,fit:e,loose:n}){return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"stackbar",role:"img","aria-label":`Too tight ${gt(t)}, fits ${gt(e)}, too loose ${gt(n)}`,children:[c.jsx("div",{className:"seg-tight",style:{width:`${t*100}%`}}),c.jsx("div",{className:"seg-fit",style:{width:`${e*100}%`}}),c.jsx("div",{className:"seg-loose",style:{width:`${n*100}%`}})]}),c.jsxs("div",{className:"legend",children:[c.jsxs("span",{children:[c.jsx("i",{className:"seg-tight"}),"Too tight ",gt(t)]}),c.jsxs("span",{children:[c.jsx("i",{className:"seg-fit"}),"Fits ",gt(e)]}),c.jsxs("span",{children:[c.jsx("i",{className:"seg-loose"}),"Too loose ",gt(n)]})]})]})}function Ih({r:t,measures:e,showFeedback:n=!0}){const[i,r]=P.useState(""),s=t.recommended,a=Math.max(...t.sizes.map(l=>l.p_fit),.01);async function o(l){if(s){r(l);try{await Ye("/api/feedback",{method:"POST",json:{chart_id:t.chart_id,size:s.size,outcome:l,p_fit:s.p_fit,p_tight:s.p_tight,p_loose:s.p_loose,measures:e}})}catch{r("error")}}}return c.jsxs("div",{className:"card result","data-testid":`result-${t.category}`,children:[c.jsxs("header",{children:[c.jsxs("div",{children:[c.jsx("div",{className:"muted small",style:{fontWeight:700},children:t.category_label}),s?c.jsx("div",{className:"bigsize","data-testid":"rec-size",children:s.size}):c.jsx("div",{className:"bigsize na",children:"No size in this chart fits"})]}),s&&c.jsxs("div",{style:{textAlign:"right"},children:[c.jsx("div",{style:{fontWeight:800,fontSize:"1.3rem"},children:gt(s.p_fit)}),c.jsx("div",{className:"muted small",children:"chance it fits"}),s.alternative&&c.jsxs("div",{className:"small muted",style:{marginTop:4},children:["Next best: ",c.jsx("b",{children:s.alternative})," (",gt(s.alternative_p_fit),")"]})]})]}),s&&c.jsx(fM,{tight:s.p_tight,fit:s.p_fit,loose:s.p_loose}),c.jsx("div",{className:"dist","aria-label":"Probability each size fits",children:t.sizes.map(l=>c.jsxs("div",{className:`col ${s&&l.size===s.size?"pick":""}`,title:`${l.size}: ${gt(l.p_fit)} fits`,children:[c.jsx("div",{className:"bar",children:c.jsx("span",{style:{height:`${Math.max(l.p_fit/a*100,3)}%`}})}),c.jsx("div",{className:"lbl",children:l.size.split(" ")[0]}),c.jsx("div",{children:gt(l.p_fit)})]},l.size))}),s&&c.jsx(hM,{rec:s}),(t.reasons.length>0||t.shift_notes.length>0)&&c.jsxs("ul",{className:"reasons",children:[t.reasons.map(l=>c.jsx("li",{children:l},l)),t.shift_notes.length>0&&c.jsxs("li",{children:["Adjusted for: ",t.shift_notes.join("; "),"."]})]}),t.missing_dims.length>0&&c.jsxs("p",{className:"small muted",style:{marginTop:8},children:["Not used (not measured): ",t.missing_dims.join(", "),"."]}),n&&s&&c.jsx("div",{className:"fb",children:i&&i!=="error"?c.jsxs("span",{children:["Thanks! That helps us calibrate. (",i,")"]}):c.jsxs(c.Fragment,{children:[c.jsx("span",{children:"Bought it? How did it fit:"}),c.jsx("button",{className:"chip",onClick:()=>o("tight"),children:"Too tight"}),c.jsx("button",{className:"chip",onClick:()=>o("fit"),children:"Perfect"}),c.jsx("button",{className:"chip",onClick:()=>o("loose"),children:"Too loose"}),i==="error"&&c.jsx("span",{style:{color:"var(--bad)"},children:"Could not save."})]})})]})}function pM({id:t,delay:e=1500,onAction:n,actionLabel:i,children:r}){const s=`fitscan-toast-${t}`,[a,o]=P.useState(!1);P.useEffect(()=>{try{if(sessionStorage.getItem(s))return}catch{}const u=setTimeout(()=>o(!0),e);return()=>clearTimeout(u)},[s,e]);function l(){o(!1);try{sessionStorage.setItem(s,"1")}catch{}}return a?c.jsxs("div",{className:"toast",role:"status",children:[c.jsx("button",{className:"x","aria-label":"Dismiss",onClick:l,children:"×"}),c.jsx("p",{children:r}),c.jsx("button",{className:"btn small",onClick:()=>{l(),n&&n()},children:i})]}):null}function mM(){return c.jsxs("div",{className:"scanart","aria-hidden":"true",children:[c.jsxs("svg",{viewBox:"0 0 280 340",role:"presentation",children:[c.jsxs("defs",{children:[c.jsxs("linearGradient",{id:"fsBody",x1:"0",y1:"0",x2:"1",y2:"1",children:[c.jsx("stop",{offset:"0",stopColor:"#c93b55"}),c.jsx("stop",{offset:"1",stopColor:"#ff8a5b"})]}),c.jsxs("linearGradient",{id:"fsBeam",x1:"0",y1:"0",x2:"0",y2:"1",children:[c.jsx("stop",{offset:"0",stopColor:"#ff8a5b",stopOpacity:"0"}),c.jsx("stop",{offset:"0.5",stopColor:"#ff8a5b",stopOpacity:".55"}),c.jsx("stop",{offset:"1",stopColor:"#ff8a5b",stopOpacity:"0"})]}),c.jsx("clipPath",{id:"fsClip",children:c.jsx("path",{d:"M140 28a24 24 0 110 48 24 24 0 010-48zM112 86c-18 4-30 16-34 40l-10 78c-1 9 12 11 14 2l12-64 6 44-8 70c-1 8 4 14 12 14h12l4-60h4l4 60h12c8 0 13-6 12-14l-8-70 6-44 12 64c2 9 15 7 14-2l-10-78c-4-24-16-36-34-40z"})})]}),c.jsx("circle",{cx:"140",cy:"170",r:"128",fill:"var(--accent-soft)",opacity:".7"}),c.jsxs("g",{className:"fs-rings",fill:"none",stroke:"var(--accent-2)",strokeWidth:"1.4",opacity:".5",children:[c.jsx("circle",{cx:"140",cy:"170",r:"150",strokeDasharray:"3 9"}),c.jsx("circle",{cx:"140",cy:"170",r:"110",strokeDasharray:"2 7"})]}),c.jsx("path",{fill:"url(#fsBody)",d:"M140 28a24 24 0 110 48 24 24 0 010-48zM112 86c-18 4-30 16-34 40l-10 78c-1 9 12 11 14 2l12-64 6 44-8 70c-1 8 4 14 12 14h12l4-60h4l4 60h12c8 0 13-6 12-14l-8-70 6-44 12 64c2 9 15 7 14-2l-10-78c-4-24-16-36-34-40z"}),c.jsx("g",{clipPath:"url(#fsClip)",children:c.jsx("rect",{className:"fs-beam",x:"40",y:"-60",width:"200",height:"60",fill:"url(#fsBeam)"})}),c.jsxs("g",{stroke:"#fff",strokeWidth:"1.5",strokeDasharray:"4 4",opacity:".9",children:[c.jsx("line",{x1:"70",y1:"112",x2:"210",y2:"112"}),c.jsx("line",{x1:"76",y1:"160",x2:"204",y2:"160"}),c.jsx("line",{x1:"72",y1:"204",x2:"208",y2:"204"})]})]}),c.jsxs("span",{className:"chipfloat c1",children:["Bust ",c.jsx("b",{children:"36 in"})]}),c.jsxs("span",{className:"chipfloat c2",children:["Waist ",c.jsx("b",{children:"30 in"})]}),c.jsxs("span",{className:"chipfloat c3",children:["Hip ",c.jsx("b",{children:"39 in"})]}),c.jsxs("span",{className:"chipfloat c4",children:["Size M fits ",c.jsx("b",{children:"94%"})]})]})}function gM({onStart:t}){return c.jsxs("section",{className:"hero herogrid",children:[c.jsxs("div",{children:[c.jsx("span",{className:"eyebrow",children:"Size prediction for Indian fashion"}),c.jsx("h1",{children:"Know your size before you buy."}),c.jsxs("p",{children:["Take two photos once. FitScan estimates your measurements and tells you the ",c.jsx("b",{children:"probability"}),' that each size fits, for every kind of clothing, so you stop ordering two sizes "just in case".']}),c.jsxs("div",{className:"row",style:{marginTop:6},children:[c.jsx("button",{className:"btn",onClick:t,children:"Start scanning"}),c.jsx("span",{className:"small muted",children:"Free. Under a minute."})]}),c.jsxs("div",{className:"trust",children:[c.jsx("span",{children:"Photos never stored"}),c.jsx("span",{children:"Kurtas, sarees, jeans and more"}),c.jsx("span",{children:"Men and women"})]})]}),c.jsx(mM,{})]})}const Hc={fill:"none",stroke:"currentColor",strokeWidth:1.9,strokeLinecap:"round",strokeLinejoin:"round"},vM=[{t:"Scan once",d:"Two quick photos, front and side. No app, no tape measure.",icon:c.jsxs("svg",{viewBox:"0 0 24 24",width:"26",height:"26",...Hc,children:[c.jsx("path",{d:"M4 8V6a2 2 0 012-2h2M16 4h2a2 2 0 012 2v2M20 16v2a2 2 0 01-2 2h-2M8 20H6a2 2 0 01-2-2v-2"}),c.jsx("circle",{cx:"12",cy:"9",r:"2.4"}),c.jsx("path",{d:"M8.5 17c.4-2.4 1.9-3.6 3.5-3.6s3.1 1.2 3.5 3.6"})]})},{t:"See the odds",d:"The chance every size fits you, for each type of clothing.",icon:c.jsx("svg",{viewBox:"0 0 24 24",width:"26",height:"26",...Hc,children:c.jsx("path",{d:"M4 20V10M10 20V4M16 20v-7M22 20H2"})})},{t:"Buy with confidence",d:"Brand-specific sizes for Biba, Zara, Fabindia and more.",icon:c.jsxs("svg",{viewBox:"0 0 24 24",width:"26",height:"26",...Hc,children:[c.jsx("path",{d:"M5 8h14l-1 12H6L5 8z"}),c.jsx("path",{d:"M9 8V6a3 3 0 016 0v2"}),c.jsx("path",{d:"M9.5 14l2 2 3.5-4"})]})}];function _M(){return c.jsxs("section",{"aria-label":"How it works",style:{marginTop:34},children:[c.jsx("h2",{style:{textAlign:"center"},children:"How it works"}),c.jsx("div",{className:"grid3 how",children:vM.map((t,e)=>c.jsxs("div",{className:"card how-card",style:{animationDelay:`${e*90}ms`},children:[c.jsx("div",{className:"how-ico",children:t.icon}),c.jsx("h3",{children:t.t}),c.jsx("p",{className:"muted small",style:{margin:0},children:t.d})]},t.t))}),c.jsxs("div",{className:"brandrow","aria-label":"Brand size charts included",children:[c.jsx("span",{className:"muted small",children:"Size charts included for"}),["Biba","Aurelia","Fabindia","Trends","Zara"].map(t=>c.jsx("b",{children:t},t))]})]})}const xp=["#c93b55","#ff8a5b","#ffc46b","#e6d6ff","#1f9d6e","#ffc2cf"];function xM(){const[t,e]=P.useState(!0);return P.useEffect(()=>{const n=setTimeout(()=>e(!1),2600);return()=>clearTimeout(n)},[]),t?c.jsx("div",{className:"confetti","aria-hidden":"true",children:Array.from({length:26}).map((n,i)=>c.jsx("i",{style:{left:`${i*37%100}%`,background:xp[i%xp.length],animationDelay:`${i%9*60}ms`,animationDuration:`${1500+i%5*240}ms`,transform:`rotate(${i*47%360}deg)`}},i))}):null}function yM({results:t,onJump:e}){const n=t.filter(r=>r.recommended);if(!n.length)return null;const i=n.reduce((r,s)=>r+s.recommended.p_fit,0)/n.length;return c.jsxs("section",{className:"card summary","aria-label":"Your sizes at a glance","data-testid":"summary",children:[c.jsx(xM,{}),c.jsxs("div",{className:"row",style:{justifyContent:"space-between",alignItems:"flex-end"},children:[c.jsxs("div",{children:[c.jsx("div",{className:"steplabel",children:"Your sizes at a glance"}),c.jsx("h2",{style:{margin:"4px 0 0"},children:"Here is what fits you"})]}),c.jsxs("div",{className:"avgchip",title:"Average chance the recommended sizes fit",children:[c.jsx("b",{children:gt(i)}),c.jsx("span",{children:"average confidence"})]})]}),c.jsx("div",{className:"tiles",children:n.map((r,s)=>{const a=r.recommended.p_fit,o=a>=.8?"hi":a>=.5?"mid":"lo";return c.jsxs("button",{className:`tile ${o}`,style:{animationDelay:`${s*70}ms`},onClick:()=>e&&e(r.chart_id),children:[c.jsx("span",{className:"tlabel",children:r.category_label}),c.jsx("span",{className:"tsize",children:r.recommended.size.split(" ")[0]}),c.jsxs("span",{className:"tpct",children:[gt(a)," fits"]})]},r.chart_id)})})]})}function SM({gender:t,catalog:e}){const n=e?e.brands.filter(S=>S.genders.includes(t)):[],[i,r]=P.useState(""),[s,a]=P.useState(""),[o,l]=P.useState([]),[u,d]=P.useState(""),[f,p]=P.useState(null),[g,_]=P.useState(""),[y,m]=P.useState(!1);P.useEffect(()=>{n.length&&!n.find(S=>S.key===i)&&r(n[0].key)},[t,e]);const h=n.find(S=>S.key===i),x=h?h.categories[t]||[]:[];P.useEffect(()=>{x.length&&!x.includes(s)&&a(x.includes("tops")?"tops":x[0])},[i,t]),P.useEffect(()=>{if(!i||!s)return;let S=!0;return p(null),_(""),Ye(`/api/chart/${i}/${t}/${s}`).then(C=>{if(!S)return;const b=C.rows.map(M=>M.size);l(b),d(b.find(M=>M.split(" ")[0]==="M")||b[Math.floor(b.length/2)])}).catch(C=>{S&&(l([]),_(C.message))}),()=>{S=!1}},[i,s,t]),P.useEffect(()=>{if(!i||!s||!u)return;let S=!0;return m(!0),_(""),Ye("/api/convert",{method:"POST",json:{gender:t,from_brand:i,category:s,size:u}}).then(C=>{S&&p(C)}).catch(C=>{S&&(p(null),_(C.message))}).finally(()=>{S&&m(!1)}),()=>{S=!1}},[i,s,u,t]);const v=S=>e&&e.category_labels[t]&&e.category_labels[t][S]||S;return c.jsxs("div",{className:"stack","data-testid":"converter",children:[c.jsxs("div",{className:"card",style:{background:"var(--soft-bg)",boxShadow:"none"},children:[c.jsx("h3",{children:"Size converter"}),c.jsx("p",{className:"muted small",children:"Already know a size you wear? Pick it and see the matching size in every other brand."}),c.jsxs("div",{className:"grid2",style:{gap:10},children:[c.jsxs("label",{className:"field",children:[c.jsx("span",{children:"Brand you know"}),c.jsx("select",{value:i,onChange:S=>r(S.target.value),"aria-label":"Brand you know",children:n.map(S=>c.jsx("option",{value:S.key,children:S.name},S.key))})]}),c.jsxs("label",{className:"field",children:[c.jsx("span",{children:"Clothing type"}),c.jsx("select",{value:s,onChange:S=>a(S.target.value),"aria-label":"Clothing type",children:x.filter(S=>S!=="saree").map(S=>c.jsx("option",{value:S,children:v(S)},S))})]})]}),c.jsxs("div",{style:{marginTop:12},children:[c.jsx("div",{className:"small muted",style:{fontWeight:700,marginBottom:6},children:"The size you wear"}),c.jsx("div",{className:"chips",role:"group","aria-label":"Size you wear",children:o.map(S=>c.jsx("button",{className:"chip","aria-pressed":u===S,onClick:()=>d(S),children:S},S))})]})]}),g&&c.jsx("div",{className:"alert err",role:"alert",children:g}),y&&!f&&c.jsxs("div",{className:"row muted small",children:[c.jsx("span",{className:"spinner dark"})," Converting..."]}),f&&c.jsxs("div",{className:"card result",children:[c.jsxs("div",{className:"muted small",style:{fontWeight:700},children:["You wear ",c.jsx("b",{children:f.from.size})," in ",f.from.name,". That matches:"]}),c.jsx("div",{className:"conv",children:f.to.map(S=>c.jsxs("div",{className:"convrow","data-testid":`conv-${S.brand}`,children:[c.jsx("span",{className:"cname",children:S.name}),c.jsx("span",{className:"csize",children:S.size?S.size.split(" ")[0]:"n/a"}),c.jsx("span",{className:"cmeta small muted",children:S.size?`${gt(S.p_fit)} fit${S.alternative?`, or ${S.alternative.split(" ")[0]}`:""}`:S.status==="above_range"?"above their range":"below their range"})]},S.brand))}),f.note&&c.jsx("div",{className:"alert info small",style:{marginTop:10},"data-testid":"conv-note",children:f.note}),f.to.length===0&&c.jsx("p",{className:"small muted",children:"No other brand has this clothing type for you."}),c.jsx("p",{className:"small muted",style:{marginTop:10},children:'Based on the body measurements each size is made for, including brand quirks such as "Zara runs slim".'})]})]})}const MM=`Size	Bust (in)	Waist (in)	Hip (in)
XS	32	26	35
S	34	28	37
M	36	30	39
L	38	32	41
XL	40	34	43`;function EM({gender:t,catalog:e,measures:n,source:i,prefs:r}){const s=e&&e.category_labels[t]||{},a=Object.keys(s).filter(w=>w!=="saree"),[o,l]=P.useState(""),[u,d]=P.useState("tops"),[f,p]=P.useState("auto"),[g,_]=P.useState("auto"),[y,m]=P.useState(null),[h,x]=P.useState(""),[v,S]=P.useState(!1),C=P.useRef(null);P.useEffect(()=>{(y||h)&&C.current&&C.current.scrollIntoView&&C.current.scrollIntoView({behavior:"smooth",block:"start"})},[y,h]);async function b(){S(!0),x(""),m(null);try{m(await Ye("/api/paste-chart",{method:"POST",json:{gender:t,measures:n,source:i,prefs:r,text:o,category:u,unit:f,measure:g}}))}catch(w){x(w.message)}finally{S(!1)}}const M=y&&y.result.recommended,D=y&&y.assumptions,T=(w,z,$,Q)=>c.jsx("div",{className:"chips",role:"group","aria-label":Q,children:$.map(([U,H])=>c.jsx("button",{className:"chip","aria-pressed":w===U,onClick:()=>z(U),children:H},U))});return c.jsxs("div",{className:"stack","data-testid":"paste-chart",children:[c.jsxs("div",{className:"card",style:{background:"var(--soft-bg)",boxShadow:"none"},children:[c.jsx("h3",{children:"Paste a size chart"}),c.jsxs("p",{className:"muted small",children:["On any shopping site, select the product's size table, copy it, and paste it here. We read it and tell you which size fits ",c.jsx("b",{children:"you"}),"."]}),c.jsxs("label",{className:"field",children:[c.jsx("span",{children:"Clothing type"}),c.jsx("select",{value:u,onChange:w=>d(w.target.value),"aria-label":"Clothing type",children:a.map(w=>c.jsx("option",{value:w,children:s[w]},w))})]}),c.jsxs("label",{className:"field",children:[c.jsx("span",{children:"Size chart from the shop"}),c.jsx("textarea",{rows:8,value:o,onChange:w=>l(w.target.value),"aria-label":"Pasted size chart",placeholder:`Size   Bust   Waist   Hip
S      34     28      37
M      36     30      39
...`,style:{fontFamily:"monospace"}})]}),c.jsxs("div",{className:"row",style:{gap:18,flexWrap:"wrap"},children:[c.jsxs("div",{children:[c.jsx("div",{className:"small muted",style:{fontWeight:700,marginBottom:4},children:"Units"}),T(f,p,[["auto","Detect"],["in","Inches"],["cm","cm"]],"Units")]}),c.jsxs("div",{children:[c.jsx("div",{className:"small muted",style:{fontWeight:700,marginBottom:4},children:"The chart lists"}),T(g,_,[["auto","Detect"],["body","Body measurements"],["garment","Garment measurements"]],"Chart type")]})]}),c.jsxs("div",{className:"row",style:{marginTop:12,gap:10},children:[c.jsx("button",{className:"btn",onClick:b,disabled:v||o.trim().length<10,children:v?"Reading chart…":"Which size fits me?"}),c.jsx("button",{className:"btn ghost",type:"button",onClick:()=>l(MM),children:"Try an example"})]})]}),c.jsxs("div",{ref:C,style:{scrollMarginTop:90},children:[v&&c.jsx("div",{className:"card",children:"Reading your chart…"}),h&&c.jsxs("div",{className:"card",role:"alert",style:{borderColor:"#d9534f"},children:[c.jsx("b",{style:{color:"#e0605c"},children:"Couldn't read that chart."}),c.jsx("div",{style:{marginTop:4},children:h})]})]}),y&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:`card verdict ${M?"ok":"none"}`,"data-testid":"paste-verdict",children:[c.jsx("div",{style:{fontSize:"1.35rem",fontWeight:800},children:M?c.jsxs(c.Fragment,{children:["Size ",M.size," fits you, ",gt(M.p_fit)," chance"]}):c.jsx(c.Fragment,{children:"None of the sizes in this chart fit you well"})}),M&&M.alternative&&c.jsxs("div",{className:"muted small",children:["Next best: ",M.alternative," (",gt(M.alternative_p_fit),"). ",M.p_tight>M.p_loose?"If unsure, size up.":M.p_loose>M.p_tight?"If unsure, size down.":""]})]}),c.jsx(Ih,{r:y.result,measures:n,showFeedback:!1}),c.jsxs("div",{className:"card small muted","data-testid":"paste-assumptions",style:{boxShadow:"none"},children:[c.jsx("b",{children:"How we read your chart"}),c.jsxs("ul",{style:{margin:"6px 0 0 18px"},children:[c.jsxs("li",{children:["Units: ",D.unit==="cm"?"centimetres":"inches"," (",D.unit_how,")."]}),c.jsxs("li",{children:["Numbers are ",D.measure," measurements (",D.measure_how,")."]}),c.jsxs("li",{children:["Sizes found: ",y.table.map(w=>w.size).join(", "),"."]}),y.warnings.map(w=>c.jsx("li",{children:w},w))]}),c.jsx("p",{style:{marginTop:6},children:"Wrong? Change “Units” or “The chart lists” above and try again."})]})]})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oh="160",Br={ROTATE:0,DOLLY:1,PAN:2},jr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wM=0,yp=1,TM=2,L0=1,bM=2,ai=3,Qi=0,cn=1,pn=2,$i=0,Rs=1,Sp=2,Mp=3,Ep=4,AM=5,pr=100,CM=101,RM=102,wp=103,Tp=104,PM=200,NM=201,LM=202,DM=203,Td=204,bd=205,UM=206,IM=207,OM=208,FM=209,kM=210,zM=211,BM=212,jM=213,HM=214,VM=0,GM=1,WM=2,Il=3,XM=4,$M=5,YM=6,qM=7,D0=0,KM=1,ZM=2,Yi=0,JM=1,QM=2,eE=3,tE=4,nE=5,iE=6,U0=300,Bs=301,js=302,Ad=303,Cd=304,oc=306,Rd=1e3,Bn=1001,Pd=1002,Jt=1003,bp=1004,Vc=1005,Tn=1006,rE=1007,Xa=1008,qi=1009,sE=1010,aE=1011,Fh=1012,I0=1013,Oi=1014,Fi=1015,$a=1016,O0=1017,F0=1018,Er=1020,oE=1021,jn=1023,lE=1024,cE=1025,wr=1026,Hs=1027,uE=1028,k0=1029,dE=1030,z0=1031,B0=1033,Gc=33776,Wc=33777,Xc=33778,$c=33779,Ap=35840,Cp=35841,Rp=35842,Pp=35843,j0=36196,Np=37492,Lp=37496,Dp=37808,Up=37809,Ip=37810,Op=37811,Fp=37812,kp=37813,zp=37814,Bp=37815,jp=37816,Hp=37817,Vp=37818,Gp=37819,Wp=37820,Xp=37821,Yc=36492,$p=36494,Yp=36495,hE=36283,qp=36284,Kp=36285,Zp=36286,H0=3e3,Tr=3001,fE=3200,pE=3201,V0=0,mE=1,An="",It="srgb",_i="srgb-linear",kh="display-p3",lc="display-p3-linear",Ol="linear",ot="srgb",Fl="rec709",kl="p3",Hr=7680,Jp=519,gE=512,vE=513,_E=514,G0=515,xE=516,yE=517,SE=518,ME=519,Qp=35044,em="300 es",Nd=1035,di=2e3,zl=2001;class kr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ol=Math.PI/180,Ld=180/Math.PI;function eo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[t&255]+Vt[t>>8&255]+Vt[t>>16&255]+Vt[t>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[n&63|128]+Vt[n>>8&255]+"-"+Vt[n>>16&255]+Vt[n>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function Ot(t,e,n){return Math.max(e,Math.min(n,t))}function EE(t,e){return(t%e+e)%e}function qc(t,e,n){return(1-n)*t+n*e}function tm(t){return(t&t-1)===0&&t!==0}function Dd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function sa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const wE={DEG2RAD:ol};class Ae{constructor(e=0,n=0){Ae.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,n,i,r,s,a,o,l,u){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],d=i[4],f=i[7],p=i[2],g=i[5],_=i[8],y=r[0],m=r[3],h=r[6],x=r[1],v=r[4],S=r[7],C=r[2],b=r[5],M=r[8];return s[0]=a*y+o*x+l*C,s[3]=a*m+o*v+l*b,s[6]=a*h+o*S+l*M,s[1]=u*y+d*x+f*C,s[4]=u*m+d*v+f*b,s[7]=u*h+d*S+f*M,s[2]=p*y+g*x+_*C,s[5]=p*m+g*v+_*b,s[8]=p*h+g*S+_*M,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8];return n*a*d-n*o*u-i*s*d+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8],f=d*a-o*u,p=o*l-d*s,g=u*s-a*l,_=n*f+i*p+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=f*y,e[1]=(r*u-d*i)*y,e[2]=(o*i-r*a)*y,e[3]=p*y,e[4]=(d*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=g*y,e[7]=(i*l-u*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Kc.makeScale(e,n)),this}rotate(e){return this.premultiply(Kc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Kc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Kc=new Xe;function W0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Bl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function TE(){const t=Bl("canvas");return t.style.display="block",t}const nm={};function wa(t){t in nm||(nm[t]=!0,console.warn(t))}const im=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),rm=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wo={[_i]:{transfer:Ol,primaries:Fl,toReference:t=>t,fromReference:t=>t},[It]:{transfer:ot,primaries:Fl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[lc]:{transfer:Ol,primaries:kl,toReference:t=>t.applyMatrix3(rm),fromReference:t=>t.applyMatrix3(im)},[kh]:{transfer:ot,primaries:kl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(rm),fromReference:t=>t.applyMatrix3(im).convertLinearToSRGB()}},bE=new Set([_i,lc]),it={enabled:!0,_workingColorSpace:_i,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!bE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=wo[e].toReference,r=wo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return wo[t].primaries},getTransfer:function(t){return t===An?Ol:wo[t].transfer}};function Ps(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Zc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Vr;class X0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vr===void 0&&(Vr=Bl("canvas")),Vr.width=e.width,Vr.height=e.height;const i=Vr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Vr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Bl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ps(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ps(n[i]/255)*255):n[i]=Ps(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let AE=0;class $0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=eo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Jc(r[a].image)):s.push(Jc(r[a]))}else s=Jc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Jc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?X0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let CE=0;class vn extends kr{constructor(e=vn.DEFAULT_IMAGE,n=vn.DEFAULT_MAPPING,i=Bn,r=Bn,s=Tn,a=Xa,o=jn,l=qi,u=vn.DEFAULT_ANISOTROPY,d=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=eo(),this.name="",this.source=new $0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(wa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Tr?It:An),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==U0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rd:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case Pd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rd:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case Pd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return wa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===It?Tr:H0}set encoding(e){wa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Tr?It:An}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=U0;vn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],d=l[4],f=l[8],p=l[1],g=l[5],_=l[9],y=l[2],m=l[6],h=l[10];if(Math.abs(d-p)<.01&&Math.abs(f-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+y)<.1&&Math.abs(_+m)<.1&&Math.abs(u+g+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,S=(g+1)/2,C=(h+1)/2,b=(d+p)/4,M=(f+y)/4,D=(_+m)/4;return v>S&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=b/i,s=M/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=b/r,s=D/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=M/s,r=D/s),this.set(i,r,s,n),this}let x=Math.sqrt((m-_)*(m-_)+(f-y)*(f-y)+(p-d)*(p-d));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(f-y)/x,this.z=(p-d)/x,this.w=Math.acos((u+g+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RE extends kr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(wa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Tr?It:An),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new vn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new $0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nr extends RE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Y0 extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class PE extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],d=i[r+2],f=i[r+3];const p=s[a+0],g=s[a+1],_=s[a+2],y=s[a+3];if(o===0){e[n+0]=l,e[n+1]=u,e[n+2]=d,e[n+3]=f;return}if(o===1){e[n+0]=p,e[n+1]=g,e[n+2]=_,e[n+3]=y;return}if(f!==y||l!==p||u!==g||d!==_){let m=1-o;const h=l*p+u*g+d*_+f*y,x=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const C=Math.sqrt(v),b=Math.atan2(C,h*x);m=Math.sin(m*b)/C,o=Math.sin(o*b)/C}const S=o*x;if(l=l*m+p*S,u=u*m+g*S,d=d*m+_*S,f=f*m+y*S,m===1-o){const C=1/Math.sqrt(l*l+u*u+d*d+f*f);l*=C,u*=C,d*=C,f*=C}}e[n]=l,e[n+1]=u,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],d=i[r+3],f=s[a],p=s[a+1],g=s[a+2],_=s[a+3];return e[n]=o*_+d*f+l*g-u*p,e[n+1]=l*_+d*p+u*f-o*g,e[n+2]=u*_+d*g+o*p-l*f,e[n+3]=d*_-o*f-l*p-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),d=o(r/2),f=o(s/2),p=l(i/2),g=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=p*d*f+u*g*_,this._y=u*g*f-p*d*_,this._z=u*d*_+p*g*f,this._w=u*d*f-p*g*_;break;case"YXZ":this._x=p*d*f+u*g*_,this._y=u*g*f-p*d*_,this._z=u*d*_-p*g*f,this._w=u*d*f+p*g*_;break;case"ZXY":this._x=p*d*f-u*g*_,this._y=u*g*f+p*d*_,this._z=u*d*_+p*g*f,this._w=u*d*f-p*g*_;break;case"ZYX":this._x=p*d*f-u*g*_,this._y=u*g*f+p*d*_,this._z=u*d*_-p*g*f,this._w=u*d*f+p*g*_;break;case"YZX":this._x=p*d*f+u*g*_,this._y=u*g*f+p*d*_,this._z=u*d*_-p*g*f,this._w=u*d*f-p*g*_;break;case"XZY":this._x=p*d*f-u*g*_,this._y=u*g*f-p*d*_,this._z=u*d*_+p*g*f,this._w=u*d*f+p*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],d=n[6],f=n[10],p=i+o+f;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(d-l)*g,this._y=(s-u)*g,this._z=(a-r)*g}else if(i>o&&i>f){const g=2*Math.sqrt(1+i-o-f);this._w=(d-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+u)/g}else if(o>f){const g=2*Math.sqrt(1+o-i-f);this._w=(s-u)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+f-i-o);this._w=(a-r)/g,this._x=(s+u)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,d=n._w;return this._x=i*d+a*o+r*u-s*l,this._y=r*d+a*l+s*o-i*u,this._z=s*d+a*u+i*l-r*o,this._w=a*d-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-n;return this._w=g*a+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),d=Math.atan2(u,o),f=Math.sin((1-n)*d)/u,p=Math.sin(n*d)/u;return this._w=a*f+this._w*p,this._x=i*f+this._x*p,this._y=r*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(sm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(sm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),d=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*u+a*f-o*d,this.y=i+l*d+o*u-s*f,this.z=r+l*f+s*d-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qc.copy(this).projectOnVector(e),this.sub(Qc)}reflect(e){return this.sub(Qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qc=new F,sm=new Lr;class to{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Dn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Dn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Dn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Dn):Dn.fromBufferAttribute(s,a),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),To.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),To.copy(i.boundingBox)),To.applyMatrix4(e.matrixWorld),this.union(To)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(aa),bo.subVectors(this.max,aa),Gr.subVectors(e.a,aa),Wr.subVectors(e.b,aa),Xr.subVectors(e.c,aa),Mi.subVectors(Wr,Gr),Ei.subVectors(Xr,Wr),or.subVectors(Gr,Xr);let n=[0,-Mi.z,Mi.y,0,-Ei.z,Ei.y,0,-or.z,or.y,Mi.z,0,-Mi.x,Ei.z,0,-Ei.x,or.z,0,-or.x,-Mi.y,Mi.x,0,-Ei.y,Ei.x,0,-or.y,or.x,0];return!eu(n,Gr,Wr,Xr,bo)||(n=[1,0,0,0,1,0,0,0,1],!eu(n,Gr,Wr,Xr,bo))?!1:(Ao.crossVectors(Mi,Ei),n=[Ao.x,Ao.y,Ao.z],eu(n,Gr,Wr,Xr,bo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new F,new F,new F,new F,new F,new F,new F,new F],Dn=new F,To=new to,Gr=new F,Wr=new F,Xr=new F,Mi=new F,Ei=new F,or=new F,aa=new F,bo=new F,Ao=new F,lr=new F;function eu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){lr.fromArray(t,s);const o=r.x*Math.abs(lr.x)+r.y*Math.abs(lr.y)+r.z*Math.abs(lr.z),l=e.dot(lr),u=n.dot(lr),d=i.dot(lr);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>o)return!1}return!0}const NE=new to,oa=new F,tu=new F;class zh{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):NE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oa.subVectors(e,this.center);const n=oa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(oa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oa.copy(e.center).add(tu)),this.expandByPoint(oa.copy(e.center).sub(tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new F,nu=new F,Co=new F,wi=new F,iu=new F,Ro=new F,ru=new F;class q0{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,n),ni.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){nu.copy(e).add(n).multiplyScalar(.5),Co.copy(n).sub(e).normalize(),wi.copy(this.origin).sub(nu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Co),o=wi.dot(this.direction),l=-wi.dot(Co),u=wi.lengthSq(),d=Math.abs(1-a*a);let f,p,g,_;if(d>0)if(f=a*l-o,p=a*o-l,_=s*d,f>=0)if(p>=-_)if(p<=_){const y=1/d;f*=y,p*=y,g=f*(f+a*p+2*o)+p*(a*f+p+2*l)+u}else p=s,f=Math.max(0,-(a*p+o)),g=-f*f+p*(p+2*l)+u;else p=-s,f=Math.max(0,-(a*p+o)),g=-f*f+p*(p+2*l)+u;else p<=-_?(f=Math.max(0,-(-a*s+o)),p=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+p*(p+2*l)+u):p<=_?(f=0,p=Math.min(Math.max(-s,-l),s),g=p*(p+2*l)+u):(f=Math.max(0,-(a*s+o)),p=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+p*(p+2*l)+u);else p=a>0?-s:s,f=Math.max(0,-(a*p+o)),g=-f*f+p*(p+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(nu).addScaledVector(Co,p),g}intersectSphere(e,n){ni.subVectors(e.center,this.origin);const i=ni.dot(this.direction),r=ni.dot(ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return u>=0?(i=(e.min.x-p.x)*u,r=(e.max.x-p.x)*u):(i=(e.max.x-p.x)*u,r=(e.min.x-p.x)*u),d>=0?(s=(e.min.y-p.y)*d,a=(e.max.y-p.y)*d):(s=(e.max.y-p.y)*d,a=(e.min.y-p.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(o=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,n,i,r,s){iu.subVectors(n,e),Ro.subVectors(i,e),ru.crossVectors(iu,Ro);let a=this.direction.dot(ru),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wi.subVectors(this.origin,e);const l=o*this.direction.dot(Ro.crossVectors(wi,Ro));if(l<0)return null;const u=o*this.direction.dot(iu.cross(wi));if(u<0||l+u>a)return null;const d=-o*wi.dot(ru);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,n,i,r,s,a,o,l,u,d,f,p,g,_,y,m){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,d,f,p,g,_,y,m)}set(e,n,i,r,s,a,o,l,u,d,f,p,g,_,y,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=u,h[6]=d,h[10]=f,h[14]=p,h[3]=g,h[7]=_,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/$r.setFromMatrixColumn(e,0).length(),s=1/$r.setFromMatrixColumn(e,1).length(),a=1/$r.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const p=a*d,g=a*f,_=o*d,y=o*f;n[0]=l*d,n[4]=-l*f,n[8]=u,n[1]=g+_*u,n[5]=p-y*u,n[9]=-o*l,n[2]=y-p*u,n[6]=_+g*u,n[10]=a*l}else if(e.order==="YXZ"){const p=l*d,g=l*f,_=u*d,y=u*f;n[0]=p+y*o,n[4]=_*o-g,n[8]=a*u,n[1]=a*f,n[5]=a*d,n[9]=-o,n[2]=g*o-_,n[6]=y+p*o,n[10]=a*l}else if(e.order==="ZXY"){const p=l*d,g=l*f,_=u*d,y=u*f;n[0]=p-y*o,n[4]=-a*f,n[8]=_+g*o,n[1]=g+_*o,n[5]=a*d,n[9]=y-p*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const p=a*d,g=a*f,_=o*d,y=o*f;n[0]=l*d,n[4]=_*u-g,n[8]=p*u+y,n[1]=l*f,n[5]=y*u+p,n[9]=g*u-_,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const p=a*l,g=a*u,_=o*l,y=o*u;n[0]=l*d,n[4]=y-p*f,n[8]=_*f+g,n[1]=f,n[5]=a*d,n[9]=-o*d,n[2]=-u*d,n[6]=g*f+_,n[10]=p-y*f}else if(e.order==="XZY"){const p=a*l,g=a*u,_=o*l,y=o*u;n[0]=l*d,n[4]=-f,n[8]=u*d,n[1]=p*f+y,n[5]=a*d,n[9]=g*f-_,n[2]=_*f-g,n[6]=o*d,n[10]=y*f+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(LE,e,DE)}lookAt(e,n,i){const r=this.elements;return dn.subVectors(e,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ti.crossVectors(i,dn),Ti.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ti.crossVectors(i,dn)),Ti.normalize(),Po.crossVectors(dn,Ti),r[0]=Ti.x,r[4]=Po.x,r[8]=dn.x,r[1]=Ti.y,r[5]=Po.y,r[9]=dn.y,r[2]=Ti.z,r[6]=Po.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],d=i[1],f=i[5],p=i[9],g=i[13],_=i[2],y=i[6],m=i[10],h=i[14],x=i[3],v=i[7],S=i[11],C=i[15],b=r[0],M=r[4],D=r[8],T=r[12],w=r[1],z=r[5],$=r[9],Q=r[13],U=r[2],H=r[6],B=r[10],O=r[14],L=r[3],k=r[7],G=r[11],j=r[15];return s[0]=a*b+o*w+l*U+u*L,s[4]=a*M+o*z+l*H+u*k,s[8]=a*D+o*$+l*B+u*G,s[12]=a*T+o*Q+l*O+u*j,s[1]=d*b+f*w+p*U+g*L,s[5]=d*M+f*z+p*H+g*k,s[9]=d*D+f*$+p*B+g*G,s[13]=d*T+f*Q+p*O+g*j,s[2]=_*b+y*w+m*U+h*L,s[6]=_*M+y*z+m*H+h*k,s[10]=_*D+y*$+m*B+h*G,s[14]=_*T+y*Q+m*O+h*j,s[3]=x*b+v*w+S*U+C*L,s[7]=x*M+v*z+S*H+C*k,s[11]=x*D+v*$+S*B+C*G,s[15]=x*T+v*Q+S*O+C*j,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],d=e[2],f=e[6],p=e[10],g=e[14],_=e[3],y=e[7],m=e[11],h=e[15];return _*(+s*l*f-r*u*f-s*o*p+i*u*p+r*o*g-i*l*g)+y*(+n*l*g-n*u*p+s*a*p-r*a*g+r*u*d-s*l*d)+m*(+n*u*f-n*o*g-s*a*f+i*a*g+s*o*d-i*u*d)+h*(-r*o*d-n*l*f+n*o*p+r*a*f-i*a*p+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8],f=e[9],p=e[10],g=e[11],_=e[12],y=e[13],m=e[14],h=e[15],x=f*m*u-y*p*u+y*l*g-o*m*g-f*l*h+o*p*h,v=_*p*u-d*m*u-_*l*g+a*m*g+d*l*h-a*p*h,S=d*y*u-_*f*u+_*o*g-a*y*g-d*o*h+a*f*h,C=_*f*l-d*y*l-_*o*p+a*y*p+d*o*m-a*f*m,b=n*x+i*v+r*S+s*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/b;return e[0]=x*M,e[1]=(y*p*s-f*m*s-y*r*g+i*m*g+f*r*h-i*p*h)*M,e[2]=(o*m*s-y*l*s+y*r*u-i*m*u-o*r*h+i*l*h)*M,e[3]=(f*l*s-o*p*s-f*r*u+i*p*u+o*r*g-i*l*g)*M,e[4]=v*M,e[5]=(d*m*s-_*p*s+_*r*g-n*m*g-d*r*h+n*p*h)*M,e[6]=(_*l*s-a*m*s-_*r*u+n*m*u+a*r*h-n*l*h)*M,e[7]=(a*p*s-d*l*s+d*r*u-n*p*u-a*r*g+n*l*g)*M,e[8]=S*M,e[9]=(_*f*s-d*y*s-_*i*g+n*y*g+d*i*h-n*f*h)*M,e[10]=(a*y*s-_*o*s+_*i*u-n*y*u-a*i*h+n*o*h)*M,e[11]=(d*o*s-a*f*s-d*i*u+n*f*u+a*i*g-n*o*g)*M,e[12]=C*M,e[13]=(d*y*r-_*f*r+_*i*p-n*y*p-d*i*m+n*f*m)*M,e[14]=(_*o*r-a*y*r-_*i*l+n*y*l+a*i*m-n*o*m)*M,e[15]=(a*f*r-d*o*r+d*i*l-n*f*l-a*i*p+n*o*p)*M,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,d=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,d*o+i,d*l-r*a,0,u*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,d=a+a,f=o+o,p=s*u,g=s*d,_=s*f,y=a*d,m=a*f,h=o*f,x=l*u,v=l*d,S=l*f,C=i.x,b=i.y,M=i.z;return r[0]=(1-(y+h))*C,r[1]=(g+S)*C,r[2]=(_-v)*C,r[3]=0,r[4]=(g-S)*b,r[5]=(1-(p+h))*b,r[6]=(m+x)*b,r[7]=0,r[8]=(_+v)*M,r[9]=(m-x)*M,r[10]=(1-(p+y))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=$r.set(r[0],r[1],r[2]).length();const a=$r.set(r[4],r[5],r[6]).length(),o=$r.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Un.copy(this);const u=1/s,d=1/a,f=1/o;return Un.elements[0]*=u,Un.elements[1]*=u,Un.elements[2]*=u,Un.elements[4]*=d,Un.elements[5]*=d,Un.elements[6]*=d,Un.elements[8]*=f,Un.elements[9]*=f,Un.elements[10]*=f,n.setFromRotationMatrix(Un),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=di){const l=this.elements,u=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let g,_;if(o===di)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===zl)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=di){const l=this.elements,u=1/(n-e),d=1/(i-r),f=1/(a-s),p=(n+e)*u,g=(i+r)*d;let _,y;if(o===di)_=(a+s)*f,y=-2*f;else if(o===zl)_=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const $r=new F,Un=new Mt,LE=new F(0,0,0),DE=new F(1,1,1),Ti=new F,Po=new F,dn=new F,am=new Mt,om=new Lr;class cc{constructor(e=0,n=0,i=0,r=cc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],d=r[9],f=r[2],p=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return am.makeRotationFromQuaternion(e),this.setFromRotationMatrix(am,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return om.setFromEuler(this),this.setFromQuaternion(om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cc.DEFAULT_ORDER="XYZ";class K0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let UE=0;const lm=new F,Yr=new Lr,ii=new Mt,No=new F,la=new F,IE=new F,OE=new Lr,cm=new F(1,0,0),um=new F(0,1,0),dm=new F(0,0,1),FE={type:"added"},kE={type:"removed"};class kt extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new F,n=new cc,i=new Lr,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Xe}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new K0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Yr.setFromAxisAngle(e,n),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(e,n){return Yr.setFromAxisAngle(e,n),this.quaternion.premultiply(Yr),this}rotateX(e){return this.rotateOnAxis(cm,e)}rotateY(e){return this.rotateOnAxis(um,e)}rotateZ(e){return this.rotateOnAxis(dm,e)}translateOnAxis(e,n){return lm.copy(e).applyQuaternion(this.quaternion),this.position.add(lm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(cm,e)}translateY(e){return this.translateOnAxis(um,e)}translateZ(e){return this.translateOnAxis(dm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?No.copy(e):No.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),la.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(la,No,this.up):ii.lookAt(No,la,this.up),this.quaternion.setFromRotationMatrix(ii),r&&(ii.extractRotation(r.matrixWorld),Yr.setFromRotationMatrix(ii),this.quaternion.premultiply(Yr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(FE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(kE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,e,IE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,OE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),d=a(e.images),f=a(e.shapes),p=a(e.skeletons),g=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const u in o){const d=o[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}kt.DEFAULT_UP=new F(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new F,ri=new F,su=new F,si=new F,qr=new F,Kr=new F,hm=new F,au=new F,ou=new F,lu=new F;let Lo=!1;class zn{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),In.subVectors(e,n),r.cross(In);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){In.subVectors(r,n),ri.subVectors(i,n),su.subVectors(e,n);const a=In.dot(In),o=In.dot(ri),l=In.dot(su),u=ri.dot(ri),d=ri.dot(su),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;const p=1/f,g=(u*l-o*d)*p,_=(a*d-o*l)*p;return s.set(1-g-_,_,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getUV(e,n,i,r,s,a,o,l){return Lo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Lo=!0),this.getInterpolation(e,n,i,r,s,a,o,l)}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,si.x),l.addScaledVector(a,si.y),l.addScaledVector(o,si.z),l)}static isFrontFacing(e,n,i,r){return In.subVectors(i,n),ri.subVectors(e,n),In.cross(ri).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),In.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return zn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Lo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Lo=!0),zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;qr.subVectors(r,i),Kr.subVectors(s,i),au.subVectors(e,i);const l=qr.dot(au),u=Kr.dot(au);if(l<=0&&u<=0)return n.copy(i);ou.subVectors(e,r);const d=qr.dot(ou),f=Kr.dot(ou);if(d>=0&&f<=d)return n.copy(r);const p=l*f-d*u;if(p<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(qr,a);lu.subVectors(e,s);const g=qr.dot(lu),_=Kr.dot(lu);if(_>=0&&g<=_)return n.copy(s);const y=g*u-l*_;if(y<=0&&u>=0&&_<=0)return o=u/(u-_),n.copy(i).addScaledVector(Kr,o);const m=d*_-g*f;if(m<=0&&f-d>=0&&g-_>=0)return hm.subVectors(s,r),o=(f-d)/(f-d+(g-_)),n.copy(r).addScaledVector(hm,o);const h=1/(m+y+p);return a=y*h,o=p*h,n.copy(i).addScaledVector(qr,a).addScaledVector(Kr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Z0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Do={h:0,s:0,l:0};function cu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=EE(e,1),n=Ot(n,0,1),i=Ot(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=cu(a,s,e+1/3),this.g=cu(a,s,e),this.b=cu(a,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,n=It){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=It){const i=Z0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}copyLinearToSRGB(e){return this.r=Zc(e.r),this.g=Zc(e.g),this.b=Zc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return it.fromWorkingColorSpace(Gt.copy(this),e),Math.round(Ot(Gt.r*255,0,255))*65536+Math.round(Ot(Gt.g*255,0,255))*256+Math.round(Ot(Gt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.fromWorkingColorSpace(Gt.copy(this),n);const i=Gt.r,r=Gt.g,s=Gt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const d=(o+a)/2;if(o===a)l=0,u=0;else{const f=a-o;switch(u=d<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,n=it.workingColorSpace){return it.fromWorkingColorSpace(Gt.copy(this),n),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=It){it.fromWorkingColorSpace(Gt.copy(this),e);const n=Gt.r,i=Gt.g,r=Gt.b;return e!==It?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+n,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(bi),e.getHSL(Do);const i=qc(bi.h,Do.h,n),r=qc(bi.s,Do.s,n),s=qc(bi.l,Do.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Ze;Ze.NAMES=Z0;let zE=0;class no extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=eo(),this.name="",this.type="Material",this.blending=Rs,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Td,this.blendDst=bd,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Il,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Td&&(i.blendSrc=this.blendSrc),this.blendDst!==bd&&(i.blendDst=this.blendDst),this.blendEquation!==pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Il&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Bh extends no{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=D0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new F,Uo=new Ae;class Gn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Qp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Uo.fromBufferAttribute(this,n),Uo.applyMatrix3(e),this.setXY(n,Uo.x,Uo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=sa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=sa(n,this.array)),n}setX(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=sa(n,this.array)),n}setY(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=sa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=sa(n,this.array)),n}setW(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qp&&(e.usage=this.usage),e}}class J0 extends Gn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Q0 extends Gn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Xt extends Gn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let BE=0;const Mn=new Mt,uu=new kt,Zr=new F,hn=new to,ca=new to,Rt=new F;class Xn extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:BE++}),this.uuid=eo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(W0(e)?Q0:J0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,n,i){return Mn.makeTranslation(e,n,i),this.applyMatrix4(Mn),this}scale(e,n,i){return Mn.makeScale(e,n,i),this.applyMatrix4(Mn),this}lookAt(e){return uu.lookAt(e),uu.updateMatrix(),this.applyMatrix4(uu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Xt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new to);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ca.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(hn.min,ca.min),hn.expandByPoint(Rt),Rt.addVectors(hn.max,ca.max),hn.expandByPoint(Rt)):(hn.expandByPoint(ca.min),hn.expandByPoint(ca.max))}hn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,d=o.count;u<d;u++)Rt.fromBufferAttribute(o,u),l&&(Zr.fromBufferAttribute(e,u),Rt.add(Zr)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,u=[],d=[];for(let w=0;w<o;w++)u[w]=new F,d[w]=new F;const f=new F,p=new F,g=new F,_=new Ae,y=new Ae,m=new Ae,h=new F,x=new F;function v(w,z,$){f.fromArray(r,w*3),p.fromArray(r,z*3),g.fromArray(r,$*3),_.fromArray(a,w*2),y.fromArray(a,z*2),m.fromArray(a,$*2),p.sub(f),g.sub(f),y.sub(_),m.sub(_);const Q=1/(y.x*m.y-m.x*y.y);isFinite(Q)&&(h.copy(p).multiplyScalar(m.y).addScaledVector(g,-y.y).multiplyScalar(Q),x.copy(g).multiplyScalar(y.x).addScaledVector(p,-m.x).multiplyScalar(Q),u[w].add(h),u[z].add(h),u[$].add(h),d[w].add(x),d[z].add(x),d[$].add(x))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let w=0,z=S.length;w<z;++w){const $=S[w],Q=$.start,U=$.count;for(let H=Q,B=Q+U;H<B;H+=3)v(i[H+0],i[H+1],i[H+2])}const C=new F,b=new F,M=new F,D=new F;function T(w){M.fromArray(s,w*3),D.copy(M);const z=u[w];C.copy(z),C.sub(M.multiplyScalar(M.dot(z))).normalize(),b.crossVectors(D,z);const Q=b.dot(d[w])<0?-1:1;l[w*4]=C.x,l[w*4+1]=C.y,l[w*4+2]=C.z,l[w*4+3]=Q}for(let w=0,z=S.length;w<z;++w){const $=S[w],Q=$.start,U=$.count;for(let H=Q,B=Q+U;H<B;H+=3)T(i[H+0]),T(i[H+1]),T(i[H+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);const r=new F,s=new F,a=new F,o=new F,l=new F,u=new F,d=new F,f=new F;if(e)for(let p=0,g=e.count;p<g;p+=3){const _=e.getX(p+0),y=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,m),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),o.add(d),l.add(d),u.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let p=0,g=n.count;p<g;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),a.fromBufferAttribute(n,p+2),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Rt.fromBufferAttribute(e,n),Rt.normalize(),e.setXYZ(n,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,l){const u=o.array,d=o.itemSize,f=o.normalized,p=new u.constructor(l.length*d);let g=0,_=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?g=l[y]*o.data.stride+o.offset:g=l[y]*d;for(let h=0;h<d;h++)p[_++]=u[g++]}return new Gn(p,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Xn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let d=0,f=u.length;d<f;d++){const p=u[d],g=e(p,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let f=0,p=u.length;f<p;f++){const g=u[f];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(n))}const s=e.morphAttributes;for(const u in s){const d=[],f=s[u];for(let p=0,g=f.length;p<g;p++)d.push(f[p].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,d=a.length;u<d;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fm=new Mt,cr=new q0,Io=new zh,pm=new F,Jr=new F,Qr=new F,es=new F,du=new F,Oo=new F,Fo=new Ae,ko=new Ae,zo=new Ae,mm=new F,gm=new F,vm=new F,Bo=new F,jo=new F;class Pt extends kt{constructor(e=new Xn,n=new Bh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Oo.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const d=o[l],f=s[l];d!==0&&(du.fromBufferAttribute(f,e),a?Oo.addScaledVector(du,d):Oo.addScaledVector(du.sub(n),d))}n.add(Oo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(s),cr.copy(e.ray).recast(e.near),!(Io.containsPoint(cr.origin)===!1&&(cr.intersectSphere(Io,pm)===null||cr.origin.distanceToSquared(pm)>(e.far-e.near)**2))&&(fm.copy(s).invert(),cr.copy(e.ray).applyMatrix4(fm),!(i.boundingBox!==null&&cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,cr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,p=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=p.length;_<y;_++){const m=p[_],h=a[m.materialIndex],x=Math.max(m.start,g.start),v=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let S=x,C=v;S<C;S+=3){const b=o.getX(S),M=o.getX(S+1),D=o.getX(S+2);r=Ho(this,h,e,i,u,d,f,b,M,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),y=Math.min(o.count,g.start+g.count);for(let m=_,h=y;m<h;m+=3){const x=o.getX(m),v=o.getX(m+1),S=o.getX(m+2);r=Ho(this,a,e,i,u,d,f,x,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=p.length;_<y;_++){const m=p[_],h=a[m.materialIndex],x=Math.max(m.start,g.start),v=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let S=x,C=v;S<C;S+=3){const b=S,M=S+1,D=S+2;r=Ho(this,h,e,i,u,d,f,b,M,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let m=_,h=y;m<h;m+=3){const x=m,v=m+1,S=m+2;r=Ho(this,a,e,i,u,d,f,x,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function jE(t,e,n,i,r,s,a,o){let l;if(e.side===cn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Qi,o),l===null)return null;jo.copy(o),jo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(jo);return u<n.near||u>n.far?null:{distance:u,point:jo.clone(),object:t}}function Ho(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,Jr),t.getVertexPosition(l,Qr),t.getVertexPosition(u,es);const d=jE(t,e,n,i,Jr,Qr,es,Bo);if(d){r&&(Fo.fromBufferAttribute(r,o),ko.fromBufferAttribute(r,l),zo.fromBufferAttribute(r,u),d.uv=zn.getInterpolation(Bo,Jr,Qr,es,Fo,ko,zo,new Ae)),s&&(Fo.fromBufferAttribute(s,o),ko.fromBufferAttribute(s,l),zo.fromBufferAttribute(s,u),d.uv1=zn.getInterpolation(Bo,Jr,Qr,es,Fo,ko,zo,new Ae),d.uv2=d.uv1),a&&(mm.fromBufferAttribute(a,o),gm.fromBufferAttribute(a,l),vm.fromBufferAttribute(a,u),d.normal=zn.getInterpolation(Bo,Jr,Qr,es,mm,gm,vm,new F),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new F,materialIndex:0};zn.getNormal(Jr,Qr,es,f.normal),d.face=f}return d}class Ys extends Xn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],d=[],f=[];let p=0,g=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(f,2));function _(y,m,h,x,v,S,C,b,M,D,T){const w=S/M,z=C/D,$=S/2,Q=C/2,U=b/2,H=M+1,B=D+1;let O=0,L=0;const k=new F;for(let G=0;G<B;G++){const j=G*z-Q;for(let q=0;q<H;q++){const K=q*w-$;k[y]=K*x,k[m]=j*v,k[h]=U,u.push(k.x,k.y,k.z),k[y]=0,k[m]=0,k[h]=b>0?1:-1,d.push(k.x,k.y,k.z),f.push(q/M),f.push(1-G/D),O+=1}}for(let G=0;G<D;G++)for(let j=0;j<M;j++){const q=p+j+H*G,K=p+j+H*(G+1),te=p+(j+1)+H*(G+1),ne=p+(j+1)+H*G;l.push(q,K,ne),l.push(K,te,ne),L+=6}o.addGroup(g,L,T),g+=L,p+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Kt(t){const e={};for(let n=0;n<t.length;n++){const i=Vs(t[n]);for(const r in i)e[r]=i[r]}return e}function HE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function e_(t){return t.getRenderTarget()===null?t.outputColorSpace:it.workingColorSpace}const VE={clone:Vs,merge:Kt};var GE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dr extends no{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GE,this.fragmentShader=WE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=HE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class t_ extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=di}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class bn extends t_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ld*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ol*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ld*2*Math.atan(Math.tan(ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ol*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ts=-90,ns=1;class XE extends kt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(ts,ns,e,n);r.layers=this.layers,this.add(r);const s=new bn(ts,ns,e,n);s.layers=this.layers,this.add(s);const a=new bn(ts,ns,e,n);a.layers=this.layers,this.add(a);const o=new bn(ts,ns,e,n);o.layers=this.layers,this.add(o);const l=new bn(ts,ns,e,n);l.layers=this.layers,this.add(l);const u=new bn(ts,ns,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,d]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,p,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class n_ extends vn{constructor(e,n,i,r,s,a,o,l,u,d){e=e!==void 0?e:[],n=n!==void 0?n:Bs,super(e,n,i,r,s,a,o,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $E extends Nr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(wa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Tr?It:An),this.texture=new n_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Tn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ys(5,5,5),s=new Dr({name:"CubemapFromEquirect",uniforms:Vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:$i});s.uniforms.tEquirect.value=n;const a=new Pt(r,s),o=n.minFilter;return n.minFilter===Xa&&(n.minFilter=Tn),new XE(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const hu=new F,YE=new F,qE=new Xe;class Pi{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=hu.subVectors(i,n).cross(YE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(hu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||qE.getNormalMatrix(e),r=this.coplanarPoint(hu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new zh,Vo=new F;class jh{constructor(e=new Pi,n=new Pi,i=new Pi,r=new Pi,s=new Pi,a=new Pi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=di){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],d=r[5],f=r[6],p=r[7],g=r[8],_=r[9],y=r[10],m=r[11],h=r[12],x=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,p-u,m-g,S-h).normalize(),i[1].setComponents(l+s,p+u,m+g,S+h).normalize(),i[2].setComponents(l+a,p+d,m+_,S+x).normalize(),i[3].setComponents(l-a,p-d,m-_,S-x).normalize(),i[4].setComponents(l-o,p-f,m-y,S-v).normalize(),n===di)i[5].setComponents(l+o,p+f,m+y,S+v).normalize();else if(n===zl)i[5].setComponents(o,f,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Vo.x=r.normal.x>0?e.max.x:e.min.x,Vo.y=r.normal.y>0?e.max.y:e.min.y,Vo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function i_(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function KE(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,d){const f=u.array,p=u.usage,g=f.byteLength,_=t.createBuffer();t.bindBuffer(d,_),t.bufferData(d,f,p),u.onUploadCallback();let y;if(f instanceof Float32Array)y=t.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=t.SHORT;else if(f instanceof Uint32Array)y=t.UNSIGNED_INT;else if(f instanceof Int32Array)y=t.INT;else if(f instanceof Int8Array)y=t.BYTE;else if(f instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:g}}function s(u,d,f){const p=d.array,g=d._updateRange,_=d.updateRanges;if(t.bindBuffer(f,u),g.count===-1&&_.length===0&&t.bufferSubData(f,0,p),_.length!==0){for(let y=0,m=_.length;y<m;y++){const h=_[y];n?t.bufferSubData(f,h.start*p.BYTES_PER_ELEMENT,p,h.start,h.count):t.bufferSubData(f,h.start*p.BYTES_PER_ELEMENT,p.subarray(h.start,h.start+h.count))}d.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(f,g.offset*p.BYTES_PER_ELEMENT,p,g.offset,g.count):t.bufferSubData(f,g.offset*p.BYTES_PER_ELEMENT,p.subarray(g.offset,g.offset+g.count)),g.count=-1),d.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d&&(t.deleteBuffer(d.buffer),i.delete(u))}function l(u,d){if(u.isGLBufferAttribute){const p=i.get(u);(!p||p.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);if(f===void 0)i.set(u,r(u,d));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,u,d),f.version=u.version}}return{get:a,remove:o,update:l}}class Hh extends Xn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,d=l+1,f=e/o,p=n/l,g=[],_=[],y=[],m=[];for(let h=0;h<d;h++){const x=h*p-a;for(let v=0;v<u;v++){const S=v*f-s;_.push(S,-x,0),y.push(0,0,1),m.push(v/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let x=0;x<o;x++){const v=x+u*h,S=x+u*(h+1),C=x+1+u*(h+1),b=x+1+u*h;g.push(v,S,b),g.push(S,C,b)}this.setIndex(g),this.setAttribute("position",new Xt(_,3)),this.setAttribute("normal",new Xt(y,3)),this.setAttribute("uv",new Xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hh(e.width,e.height,e.widthSegments,e.heightSegments)}}var ZE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,QE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ew=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tw=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,nw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sw=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,aw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ow=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,fw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_w=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ew=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ww=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Aw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cw=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Rw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Uw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Iw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ow=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ww=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$w=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,e1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,t1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,i1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,r1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,a1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,o1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,d1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,h1=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,f1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,p1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,m1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,g1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,x1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,y1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,S1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,E1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,T1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,b1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,C1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,N1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,D1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,U1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,I1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,O1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,k1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,z1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,B1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,G1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,W1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,X1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,q1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const K1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Z1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,rT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_T=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ST=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ET=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,TT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,CT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:ZE,alphahash_pars_fragment:JE,alphamap_fragment:QE,alphamap_pars_fragment:ew,alphatest_fragment:tw,alphatest_pars_fragment:nw,aomap_fragment:iw,aomap_pars_fragment:rw,batching_pars_vertex:sw,batching_vertex:aw,begin_vertex:ow,beginnormal_vertex:lw,bsdfs:cw,iridescence_fragment:uw,bumpmap_pars_fragment:dw,clipping_planes_fragment:hw,clipping_planes_pars_fragment:fw,clipping_planes_pars_vertex:pw,clipping_planes_vertex:mw,color_fragment:gw,color_pars_fragment:vw,color_pars_vertex:_w,color_vertex:xw,common:yw,cube_uv_reflection_fragment:Sw,defaultnormal_vertex:Mw,displacementmap_pars_vertex:Ew,displacementmap_vertex:ww,emissivemap_fragment:Tw,emissivemap_pars_fragment:bw,colorspace_fragment:Aw,colorspace_pars_fragment:Cw,envmap_fragment:Rw,envmap_common_pars_fragment:Pw,envmap_pars_fragment:Nw,envmap_pars_vertex:Lw,envmap_physical_pars_fragment:Gw,envmap_vertex:Dw,fog_vertex:Uw,fog_pars_vertex:Iw,fog_fragment:Ow,fog_pars_fragment:Fw,gradientmap_pars_fragment:kw,lightmap_fragment:zw,lightmap_pars_fragment:Bw,lights_lambert_fragment:jw,lights_lambert_pars_fragment:Hw,lights_pars_begin:Vw,lights_toon_fragment:Ww,lights_toon_pars_fragment:Xw,lights_phong_fragment:$w,lights_phong_pars_fragment:Yw,lights_physical_fragment:qw,lights_physical_pars_fragment:Kw,lights_fragment_begin:Zw,lights_fragment_maps:Jw,lights_fragment_end:Qw,logdepthbuf_fragment:e1,logdepthbuf_pars_fragment:t1,logdepthbuf_pars_vertex:n1,logdepthbuf_vertex:i1,map_fragment:r1,map_pars_fragment:s1,map_particle_fragment:a1,map_particle_pars_fragment:o1,metalnessmap_fragment:l1,metalnessmap_pars_fragment:c1,morphcolor_vertex:u1,morphnormal_vertex:d1,morphtarget_pars_vertex:h1,morphtarget_vertex:f1,normal_fragment_begin:p1,normal_fragment_maps:m1,normal_pars_fragment:g1,normal_pars_vertex:v1,normal_vertex:_1,normalmap_pars_fragment:x1,clearcoat_normal_fragment_begin:y1,clearcoat_normal_fragment_maps:S1,clearcoat_pars_fragment:M1,iridescence_pars_fragment:E1,opaque_fragment:w1,packing:T1,premultiplied_alpha_fragment:b1,project_vertex:A1,dithering_fragment:C1,dithering_pars_fragment:R1,roughnessmap_fragment:P1,roughnessmap_pars_fragment:N1,shadowmap_pars_fragment:L1,shadowmap_pars_vertex:D1,shadowmap_vertex:U1,shadowmask_pars_fragment:I1,skinbase_vertex:O1,skinning_pars_vertex:F1,skinning_vertex:k1,skinnormal_vertex:z1,specularmap_fragment:B1,specularmap_pars_fragment:j1,tonemapping_fragment:H1,tonemapping_pars_fragment:V1,transmission_fragment:G1,transmission_pars_fragment:W1,uv_pars_fragment:X1,uv_pars_vertex:$1,uv_vertex:Y1,worldpos_vertex:q1,background_vert:K1,background_frag:Z1,backgroundCube_vert:J1,backgroundCube_frag:Q1,cube_vert:eT,cube_frag:tT,depth_vert:nT,depth_frag:iT,distanceRGBA_vert:rT,distanceRGBA_frag:sT,equirect_vert:aT,equirect_frag:oT,linedashed_vert:lT,linedashed_frag:cT,meshbasic_vert:uT,meshbasic_frag:dT,meshlambert_vert:hT,meshlambert_frag:fT,meshmatcap_vert:pT,meshmatcap_frag:mT,meshnormal_vert:gT,meshnormal_frag:vT,meshphong_vert:_T,meshphong_frag:xT,meshphysical_vert:yT,meshphysical_frag:ST,meshtoon_vert:MT,meshtoon_frag:ET,points_vert:wT,points_frag:TT,shadow_vert:bT,shadow_frag:AT,sprite_vert:CT,sprite_frag:RT},xe={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Kn={basic:{uniforms:Kt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Kt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Kt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Kt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Kt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Kt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Kt([xe.points,xe.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Kt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Kt([xe.common,xe.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Kt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Kt([xe.sprite,xe.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Kt([xe.common,xe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Kt([xe.lights,xe.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Kn.physical={uniforms:Kt([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Go={r:0,b:0,g:0};function PT(t,e,n,i,r,s,a){const o=new Ze(0);let l=s===!0?0:1,u,d,f=null,p=0,g=null;function _(m,h){let x=!1,v=h.isScene===!0?h.background:null;v&&v.isTexture&&(v=(h.backgroundBlurriness>0?n:e).get(v)),v===null?y(o,l):v&&v.isColor&&(y(v,1),x=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||x)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===oc)?(d===void 0&&(d=new Pt(new Ys(1,1,1),new Dr({name:"BackgroundCubeMaterial",uniforms:Vs(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,b,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,d.material.toneMapped=it.getTransfer(v.colorSpace)!==ot,(f!==v||p!==v.version||g!==t.toneMapping)&&(d.material.needsUpdate=!0,f=v,p=v.version,g=t.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new Pt(new Hh(2,2),new Dr({name:"BackgroundMaterial",uniforms:Vs(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=it.getTransfer(v.colorSpace)!==ot,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||p!==v.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,f=v,p=v.version,g=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function y(m,h){m.getRGB(Go,e_(t)),i.buffers.color.setClear(Go.r,Go.g,Go.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(m,h=1){o.set(m),l=h,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(o,l)},render:_}}function NT(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let u=l,d=!1;function f(U,H,B,O,L){let k=!1;if(a){const G=y(O,B,H);u!==G&&(u=G,g(u.object)),k=h(U,O,B,L),k&&x(U,O,B,L)}else{const G=H.wireframe===!0;(u.geometry!==O.id||u.program!==B.id||u.wireframe!==G)&&(u.geometry=O.id,u.program=B.id,u.wireframe=G,k=!0)}L!==null&&n.update(L,t.ELEMENT_ARRAY_BUFFER),(k||d)&&(d=!1,D(U,H,B,O),L!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(L).buffer))}function p(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(U){return i.isWebGL2?t.bindVertexArray(U):s.bindVertexArrayOES(U)}function _(U){return i.isWebGL2?t.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function y(U,H,B){const O=B.wireframe===!0;let L=o[U.id];L===void 0&&(L={},o[U.id]=L);let k=L[H.id];k===void 0&&(k={},L[H.id]=k);let G=k[O];return G===void 0&&(G=m(p()),k[O]=G),G}function m(U){const H=[],B=[],O=[];for(let L=0;L<r;L++)H[L]=0,B[L]=0,O[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:B,attributeDivisors:O,object:U,attributes:{},index:null}}function h(U,H,B,O){const L=u.attributes,k=H.attributes;let G=0;const j=B.getAttributes();for(const q in j)if(j[q].location>=0){const te=L[q];let ne=k[q];if(ne===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(ne=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(ne=U.instanceColor)),te===void 0||te.attribute!==ne||ne&&te.data!==ne.data)return!0;G++}return u.attributesNum!==G||u.index!==O}function x(U,H,B,O){const L={},k=H.attributes;let G=0;const j=B.getAttributes();for(const q in j)if(j[q].location>=0){let te=k[q];te===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(te=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(te=U.instanceColor));const ne={};ne.attribute=te,te&&te.data&&(ne.data=te.data),L[q]=ne,G++}u.attributes=L,u.attributesNum=G,u.index=O}function v(){const U=u.newAttributes;for(let H=0,B=U.length;H<B;H++)U[H]=0}function S(U){C(U,0)}function C(U,H){const B=u.newAttributes,O=u.enabledAttributes,L=u.attributeDivisors;B[U]=1,O[U]===0&&(t.enableVertexAttribArray(U),O[U]=1),L[U]!==H&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,H),L[U]=H)}function b(){const U=u.newAttributes,H=u.enabledAttributes;for(let B=0,O=H.length;B<O;B++)H[B]!==U[B]&&(t.disableVertexAttribArray(B),H[B]=0)}function M(U,H,B,O,L,k,G){G===!0?t.vertexAttribIPointer(U,H,B,L,k):t.vertexAttribPointer(U,H,B,O,L,k)}function D(U,H,B,O){if(i.isWebGL2===!1&&(U.isInstancedMesh||O.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const L=O.attributes,k=B.getAttributes(),G=H.defaultAttributeValues;for(const j in k){const q=k[j];if(q.location>=0){let K=L[j];if(K===void 0&&(j==="instanceMatrix"&&U.instanceMatrix&&(K=U.instanceMatrix),j==="instanceColor"&&U.instanceColor&&(K=U.instanceColor)),K!==void 0){const te=K.normalized,ne=K.itemSize,he=n.get(K);if(he===void 0)continue;const oe=he.buffer,re=he.type,Ee=he.bytesPerElement,Ce=i.isWebGL2===!0&&(re===t.INT||re===t.UNSIGNED_INT||K.gpuType===I0);if(K.isInterleavedBufferAttribute){const Be=K.data,Y=Be.stride,nt=K.offset;if(Be.isInstancedInterleavedBuffer){for(let Re=0;Re<q.locationSize;Re++)C(q.location+Re,Be.meshPerAttribute);U.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Be.meshPerAttribute*Be.count)}else for(let Re=0;Re<q.locationSize;Re++)S(q.location+Re);t.bindBuffer(t.ARRAY_BUFFER,oe);for(let Re=0;Re<q.locationSize;Re++)M(q.location+Re,ne/q.locationSize,re,te,Y*Ee,(nt+ne/q.locationSize*Re)*Ee,Ce)}else{if(K.isInstancedBufferAttribute){for(let Be=0;Be<q.locationSize;Be++)C(q.location+Be,K.meshPerAttribute);U.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Be=0;Be<q.locationSize;Be++)S(q.location+Be);t.bindBuffer(t.ARRAY_BUFFER,oe);for(let Be=0;Be<q.locationSize;Be++)M(q.location+Be,ne/q.locationSize,re,te,ne*Ee,ne/q.locationSize*Be*Ee,Ce)}}else if(G!==void 0){const te=G[j];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv(q.location,te);break;case 3:t.vertexAttrib3fv(q.location,te);break;case 4:t.vertexAttrib4fv(q.location,te);break;default:t.vertexAttrib1fv(q.location,te)}}}}b()}function T(){$();for(const U in o){const H=o[U];for(const B in H){const O=H[B];for(const L in O)_(O[L].object),delete O[L];delete H[B]}delete o[U]}}function w(U){if(o[U.id]===void 0)return;const H=o[U.id];for(const B in H){const O=H[B];for(const L in O)_(O[L].object),delete O[L];delete H[B]}delete o[U.id]}function z(U){for(const H in o){const B=o[H];if(B[U.id]===void 0)continue;const O=B[U.id];for(const L in O)_(O[L].object),delete O[L];delete B[U.id]}}function $(){Q(),d=!0,u!==l&&(u=l,g(u.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:$,resetDefaultState:Q,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:z,initAttributes:v,enableAttribute:S,disableUnusedAttributes:b}}function LT(t,e,n,i){const r=i.isWebGL2;let s;function a(d){s=d}function o(d,f){t.drawArrays(s,d,f),n.update(f,s,1)}function l(d,f,p){if(p===0)return;let g,_;if(r)g=t,_="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](s,d,f,p),n.update(f,s,p)}function u(d,f,p){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<p;_++)this.render(d[_],f[_]);else{g.multiDrawArraysWEBGL(s,d,0,f,0,p);let _=0;for(let y=0;y<p;y++)_+=f[y];n.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=u}function DT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){if(M==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=a||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),h=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,S=a||e.has("OES_texture_float"),C=v&&S,b=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:C,maxSamples:b}}function UT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Pi,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const g=f.length!==0||p||i!==0||r;return r=p,i=f.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){n=d(f,p,0)},this.setState=function(f,p,g){const _=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||_===null||_.length===0||s&&!m)s?d(null):u();else{const x=s?0:i,v=x*4;let S=h.clippingState||null;l.value=S,S=d(_,p,v,g);for(let C=0;C!==v;++C)S[C]=n[C];h.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,p,g,_){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const h=g+y*4,x=p.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<h)&&(m=new Float32Array(h));for(let v=0,S=g;v!==y;++v,S+=4)a.copy(f[v]).applyMatrix4(x,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function IT(t){let e=new WeakMap;function n(a,o){return o===Ad?a.mapping=Bs:o===Cd&&(a.mapping=js),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ad||o===Cd)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new $E(l.height/2);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class r_ extends t_{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const xs=4,_m=[.125,.215,.35,.446,.526,.582],mr=20,fu=new r_,xm=new Ze;let pu=null,mu=0,gu=0;const fr=(1+Math.sqrt(5))/2,is=1/fr,ym=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,fr,is),new F(0,fr,-is),new F(is,0,fr),new F(-is,0,fr),new F(fr,is,0),new F(-fr,is,0)];class Sm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){pu=this._renderer.getRenderTarget(),mu=this._renderer.getActiveCubeFace(),gu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Em(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pu,mu,gu),e.scissorTest=!1,Wo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Bs||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pu=this._renderer.getRenderTarget(),mu=this._renderer.getActiveCubeFace(),gu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:$a,format:jn,colorSpace:_i,depthBuffer:!1},r=Mm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=OT(s)),this._blurMaterial=FT(s,e,n)}return r}_compileMaterial(e){const n=new Pt(this._lodPlanes[0],e);this._renderer.compile(n,fu)}_sceneToCubeUV(e,n,i,r){const o=new bn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(xm),d.toneMapping=Yi,d.autoClear=!1;const g=new Bh({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),_=new Pt(new Ys,g);let y=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,y=!0):(g.color.copy(xm),y=!0);for(let h=0;h<6;h++){const x=h%3;x===0?(o.up.set(0,l[h],0),o.lookAt(u[h],0,0)):x===1?(o.up.set(0,0,l[h]),o.lookAt(0,u[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,u[h]));const v=this._cubeSize;Wo(r,x*v,h>2?v:0,v,v),d.setRenderTarget(r),y&&d.render(_,o),d.render(e,o)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Bs||e.mapping===js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Em());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Pt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Wo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,fu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ym[(r-1)%ym.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Pt(this._lodPlanes[r],u),p=u.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*mr-1),y=s/_,m=isFinite(s)?1+Math.floor(d*y):mr;m>mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mr}`);const h=[];let x=0;for(let M=0;M<mr;++M){const D=M/y,T=Math.exp(-D*D/2);h.push(T),M===0?x+=T:M<m&&(x+=2*T)}for(let M=0;M<h.length;M++)h[M]=h[M]/x;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=h,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:v}=this;p.dTheta.value=_,p.mipInt.value=v-i;const S=this._sizeLods[r],C=3*S*(r>v-xs?r-v+xs:0),b=4*(this._cubeSize-S);Wo(n,C,b,3*S,2*S),l.setRenderTarget(n),l.render(f,fu)}}function OT(t){const e=[],n=[],i=[];let r=t;const s=t-xs+1+_m.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-xs?l=_m[a-t+xs-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),d=-u,f=1+u,p=[d,d,f,d,f,f,d,d,f,f,d,f],g=6,_=6,y=3,m=2,h=1,x=new Float32Array(y*_*g),v=new Float32Array(m*_*g),S=new Float32Array(h*_*g);for(let b=0;b<g;b++){const M=b%3*2/3-1,D=b>2?0:-1,T=[M,D,0,M+2/3,D,0,M+2/3,D+1,0,M,D,0,M+2/3,D+1,0,M,D+1,0];x.set(T,y*_*b),v.set(p,m*_*b);const w=[b,b,b,b,b,b];S.set(w,h*_*b)}const C=new Xn;C.setAttribute("position",new Gn(x,y)),C.setAttribute("uv",new Gn(v,m)),C.setAttribute("faceIndex",new Gn(S,h)),e.push(C),r>xs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Mm(t,e,n){const i=new Nr(t,e,n);return i.texture.mapping=oc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function FT(t,e,n){const i=new Float32Array(mr),r=new F(0,1,0);return new Dr({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Em(){return new Dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function wm(){return new Dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Vh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kT(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===Ad||l===Cd,d=l===Bs||l===js;if(u||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return n===null&&(n=new Sm(t)),f=u?n.fromEquirectangular(o,f):n.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(u&&f&&f.height>0||d&&f&&r(f)){n===null&&(n=new Sm(t));const p=u?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",s),p.texture}else return null}}}return o}function r(o){let l=0;const u=6;for(let d=0;d<u;d++)o[d]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function zT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function BT(t,e,n,i){const r={},s=new WeakMap;function a(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const _ in p.attributes)e.remove(p.attributes[_]);for(const _ in p.morphAttributes){const y=p.morphAttributes[_];for(let m=0,h=y.length;m<h;m++)e.remove(y[m])}p.removeEventListener("dispose",a),delete r[p.id];const g=s.get(p);g&&(e.remove(g),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function o(f,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,n.memory.geometries++),p}function l(f){const p=f.attributes;for(const _ in p)e.update(p[_],t.ARRAY_BUFFER);const g=f.morphAttributes;for(const _ in g){const y=g[_];for(let m=0,h=y.length;m<h;m++)e.update(y[m],t.ARRAY_BUFFER)}}function u(f){const p=[],g=f.index,_=f.attributes.position;let y=0;if(g!==null){const x=g.array;y=g.version;for(let v=0,S=x.length;v<S;v+=3){const C=x[v+0],b=x[v+1],M=x[v+2];p.push(C,b,b,M,M,C)}}else if(_!==void 0){const x=_.array;y=_.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const C=v+0,b=v+1,M=v+2;p.push(C,b,b,M,M,C)}}else return;const m=new(W0(p)?Q0:J0)(p,1);m.version=y;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function d(f){const p=s.get(f);if(p){const g=f.index;g!==null&&p.version<g.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function jT(t,e,n,i){const r=i.isWebGL2;let s;function a(g){s=g}let o,l;function u(g){o=g.type,l=g.bytesPerElement}function d(g,_){t.drawElements(s,_,o,g*l),n.update(_,s,1)}function f(g,_,y){if(y===0)return;let m,h;if(r)m=t,h="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](s,_,o,g*l,y),n.update(_,s,y)}function p(g,_,y){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<y;h++)this.render(g[h]/l,_[h]);else{m.multiDrawElementsWEBGL(s,_,0,o,g,0,y);let h=0;for(let x=0;x<y;x++)h+=_[x];n.update(h,s,1)}}this.setMode=a,this.setIndex=u,this.render=d,this.renderInstances=f,this.renderMultiDraw=p}function HT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function VT(t,e){return t[0]-e[0]}function GT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function WT(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new Lt,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,d,f){const p=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=_!==void 0?_.length:0;let m=s.get(d);if(m===void 0||m.count!==y){let H=function(){Q.dispose(),s.delete(d),d.removeEventListener("dispose",H)};var g=H;m!==void 0&&m.texture.dispose();const v=d.morphAttributes.position!==void 0,S=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,b=d.morphAttributes.position||[],M=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let T=0;v===!0&&(T=1),S===!0&&(T=2),C===!0&&(T=3);let w=d.attributes.position.count*T,z=1;w>e.maxTextureSize&&(z=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const $=new Float32Array(w*z*4*y),Q=new Y0($,w,z,y);Q.type=Fi,Q.needsUpdate=!0;const U=T*4;for(let B=0;B<y;B++){const O=b[B],L=M[B],k=D[B],G=w*z*4*B;for(let j=0;j<O.count;j++){const q=j*U;v===!0&&(a.fromBufferAttribute(O,j),$[G+q+0]=a.x,$[G+q+1]=a.y,$[G+q+2]=a.z,$[G+q+3]=0),S===!0&&(a.fromBufferAttribute(L,j),$[G+q+4]=a.x,$[G+q+5]=a.y,$[G+q+6]=a.z,$[G+q+7]=0),C===!0&&(a.fromBufferAttribute(k,j),$[G+q+8]=a.x,$[G+q+9]=a.y,$[G+q+10]=a.z,$[G+q+11]=k.itemSize===4?a.w:1)}}m={count:y,texture:Q,size:new Ae(w,z)},s.set(d,m),d.addEventListener("dispose",H)}let h=0;for(let v=0;v<p.length;v++)h+=p[v];const x=d.morphTargetsRelative?1:1-h;f.getUniforms().setValue(t,"morphTargetBaseInfluence",x),f.getUniforms().setValue(t,"morphTargetInfluences",p),f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const _=p===void 0?0:p.length;let y=i[d.id];if(y===void 0||y.length!==_){y=[];for(let S=0;S<_;S++)y[S]=[S,0];i[d.id]=y}for(let S=0;S<_;S++){const C=y[S];C[0]=S,C[1]=p[S]}y.sort(GT);for(let S=0;S<8;S++)S<_&&y[S][1]?(o[S][0]=y[S][0],o[S][1]=y[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(VT);const m=d.morphAttributes.position,h=d.morphAttributes.normal;let x=0;for(let S=0;S<8;S++){const C=o[S],b=C[0],M=C[1];b!==Number.MAX_SAFE_INTEGER&&M?(m&&d.getAttribute("morphTarget"+S)!==m[b]&&d.setAttribute("morphTarget"+S,m[b]),h&&d.getAttribute("morphNormal"+S)!==h[b]&&d.setAttribute("morphNormal"+S,h[b]),r[S]=M,x+=M):(m&&d.hasAttribute("morphTarget"+S)===!0&&d.deleteAttribute("morphTarget"+S),h&&d.hasAttribute("morphNormal"+S)===!0&&d.deleteAttribute("morphNormal"+S),r[S]=0)}const v=d.morphTargetsRelative?1:1-x;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function XT(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return f}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:a}}class s_ extends vn{constructor(e,n,i,r,s,a,o,l,u,d){if(d=d!==void 0?d:wr,d!==wr&&d!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===wr&&(i=Oi),i===void 0&&d===Hs&&(i=Er),super(null,r,s,a,o,l,d,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const a_=new vn,o_=new s_(1,1);o_.compareFunction=G0;const l_=new Y0,c_=new PE,u_=new n_,Tm=[],bm=[],Am=new Float32Array(16),Cm=new Float32Array(9),Rm=new Float32Array(4);function qs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Tm[r];if(s===void 0&&(s=new Float32Array(r),Tm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function uc(t,e){let n=bm[e];n===void 0&&(n=new Int32Array(e),bm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function $T(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function YT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function qT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function KT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function ZT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(Tt(n,i))return;Rm.set(i),t.uniformMatrix2fv(this.addr,!1,Rm),bt(n,i)}}function JT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(Tt(n,i))return;Cm.set(i),t.uniformMatrix3fv(this.addr,!1,Cm),bt(n,i)}}function QT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(Tt(n,i))return;Am.set(i),t.uniformMatrix4fv(this.addr,!1,Am),bt(n,i)}}function eb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function tb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function nb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function ib(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function rb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function sb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function ab(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function ob(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function lb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?o_:a_;n.setTexture2D(e||s,r)}function cb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||c_,r)}function ub(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||u_,r)}function db(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||l_,r)}function hb(t){switch(t){case 5126:return $T;case 35664:return YT;case 35665:return qT;case 35666:return KT;case 35674:return ZT;case 35675:return JT;case 35676:return QT;case 5124:case 35670:return eb;case 35667:case 35671:return tb;case 35668:case 35672:return nb;case 35669:case 35673:return ib;case 5125:return rb;case 36294:return sb;case 36295:return ab;case 36296:return ob;case 35678:case 36198:case 36298:case 36306:case 35682:return lb;case 35679:case 36299:case 36307:return cb;case 35680:case 36300:case 36308:case 36293:return ub;case 36289:case 36303:case 36311:case 36292:return db}}function fb(t,e){t.uniform1fv(this.addr,e)}function pb(t,e){const n=qs(e,this.size,2);t.uniform2fv(this.addr,n)}function mb(t,e){const n=qs(e,this.size,3);t.uniform3fv(this.addr,n)}function gb(t,e){const n=qs(e,this.size,4);t.uniform4fv(this.addr,n)}function vb(t,e){const n=qs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function _b(t,e){const n=qs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function xb(t,e){const n=qs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function yb(t,e){t.uniform1iv(this.addr,e)}function Sb(t,e){t.uniform2iv(this.addr,e)}function Mb(t,e){t.uniform3iv(this.addr,e)}function Eb(t,e){t.uniform4iv(this.addr,e)}function wb(t,e){t.uniform1uiv(this.addr,e)}function Tb(t,e){t.uniform2uiv(this.addr,e)}function bb(t,e){t.uniform3uiv(this.addr,e)}function Ab(t,e){t.uniform4uiv(this.addr,e)}function Cb(t,e,n){const i=this.cache,r=e.length,s=uc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||a_,s[a])}function Rb(t,e,n){const i=this.cache,r=e.length,s=uc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||c_,s[a])}function Pb(t,e,n){const i=this.cache,r=e.length,s=uc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||u_,s[a])}function Nb(t,e,n){const i=this.cache,r=e.length,s=uc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||l_,s[a])}function Lb(t){switch(t){case 5126:return fb;case 35664:return pb;case 35665:return mb;case 35666:return gb;case 35674:return vb;case 35675:return _b;case 35676:return xb;case 5124:case 35670:return yb;case 35667:case 35671:return Sb;case 35668:case 35672:return Mb;case 35669:case 35673:return Eb;case 5125:return wb;case 36294:return Tb;case 36295:return bb;case 36296:return Ab;case 35678:case 36198:case 36298:case 36306:case 35682:return Cb;case 35679:case 36299:case 36307:return Rb;case 35680:case 36300:case 36308:case 36293:return Pb;case 36289:case 36303:case 36311:case 36292:return Nb}}class Db{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=hb(n.type)}}class Ub{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Lb(n.type)}}class Ib{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const vu=/(\w+)(\])?(\[|\.)?/g;function Pm(t,e){t.seq.push(e),t.map[e.id]=e}function Ob(t,e,n){const i=t.name,r=i.length;for(vu.lastIndex=0;;){const s=vu.exec(i),a=vu.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){Pm(n,u===void 0?new Db(o,t,e):new Ub(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new Ib(o),Pm(n,f)),n=f}}}class ll{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);Ob(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Nm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Fb=37297;let kb=0;function zb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function Bb(t){const e=it.getPrimaries(it.workingColorSpace),n=it.getPrimaries(t);let i;switch(e===n?i="":e===kl&&n===Fl?i="LinearDisplayP3ToLinearSRGB":e===Fl&&n===kl&&(i="LinearSRGBToLinearDisplayP3"),t){case _i:case lc:return[i,"LinearTransferOETF"];case It:case kh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Lm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+zb(t.getShaderSource(e),a)}else return r}function jb(t,e){const n=Bb(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Hb(t,e){let n;switch(e){case JM:n="Linear";break;case QM:n="Reinhard";break;case eE:n="OptimizedCineon";break;case tE:n="ACESFilmic";break;case iE:n="AgX";break;case nE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Vb(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ys).join(`
`)}function Gb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ys).join(`
`)}function Wb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Xb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ys(t){return t!==""}function Dm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Um(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $b=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ud(t){return t.replace($b,qb)}const Yb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function qb(t,e){let n=je[e];if(n===void 0){const i=Yb.get(e);if(i!==void 0)n=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ud(n)}const Kb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Im(t){return t.replace(Kb,Zb)}function Zb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Om(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Jb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===L0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===bM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function Qb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Bs:case js:e="ENVMAP_TYPE_CUBE";break;case oc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case js:e="ENVMAP_MODE_REFRACTION";break}return e}function tA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case D0:e="ENVMAP_BLENDING_MULTIPLY";break;case KM:e="ENVMAP_BLENDING_MIX";break;case ZM:e="ENVMAP_BLENDING_ADD";break}return e}function nA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function iA(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Jb(n),u=Qb(n),d=eA(n),f=tA(n),p=nA(n),g=n.isWebGL2?"":Vb(n),_=Gb(n),y=Wb(s),m=r.createProgram();let h,x,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ys).join(`
`),h.length>0&&(h+=`
`),x=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ys).join(`
`),x.length>0&&(x+=`
`)):(h=[Om(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),x=[g,Om(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Yi?"#define TONE_MAPPING":"",n.toneMapping!==Yi?je.tonemapping_pars_fragment:"",n.toneMapping!==Yi?Hb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,jb("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ys).join(`
`)),a=Ud(a),a=Dm(a,n),a=Um(a,n),o=Ud(o),o=Dm(o,n),o=Um(o,n),a=Im(a),o=Im(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,h=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,x=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===em?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===em?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const S=v+h+a,C=v+x+o,b=Nm(r,r.VERTEX_SHADER,S),M=Nm(r,r.FRAGMENT_SHADER,C);r.attachShader(m,b),r.attachShader(m,M),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function D($){if(t.debug.checkShaderErrors){const Q=r.getProgramInfoLog(m).trim(),U=r.getShaderInfoLog(b).trim(),H=r.getShaderInfoLog(M).trim();let B=!0,O=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,b,M);else{const L=Lm(r,b,"vertex"),k=Lm(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+L+`
`+k)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(U===""||H==="")&&(O=!1);O&&($.diagnostics={runnable:B,programLog:Q,vertexShader:{log:U,prefix:h},fragmentShader:{log:H,prefix:x}})}r.deleteShader(b),r.deleteShader(M),T=new ll(r,m),w=Xb(r,m)}let T;this.getUniforms=function(){return T===void 0&&D(this),T};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let z=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(m,Fb)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=kb++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=M,this}let rA=0;class sA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new aA(e),n.set(e,i)),i}}class aA{constructor(e){this.id=rA++,this.code=e,this.usedTimes=0}}function oA(t,e,n,i,r,s,a){const o=new K0,l=new sA,u=[],d=r.isWebGL2,f=r.logarithmicDepthBuffer,p=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return T===0?"uv":`uv${T}`}function m(T,w,z,$,Q){const U=$.fog,H=Q.geometry,B=T.isMeshStandardMaterial?$.environment:null,O=(T.isMeshStandardMaterial?n:e).get(T.envMap||B),L=O&&O.mapping===oc?O.image.height:null,k=_[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const G=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,j=G!==void 0?G.length:0;let q=0;H.morphAttributes.position!==void 0&&(q=1),H.morphAttributes.normal!==void 0&&(q=2),H.morphAttributes.color!==void 0&&(q=3);let K,te,ne,he;if(k){const Yt=Kn[k];K=Yt.vertexShader,te=Yt.fragmentShader}else K=T.vertexShader,te=T.fragmentShader,l.update(T),ne=l.getVertexShaderID(T),he=l.getFragmentShaderID(T);const oe=t.getRenderTarget(),re=Q.isInstancedMesh===!0,Ee=Q.isBatchedMesh===!0,Ce=!!T.map,Be=!!T.matcap,Y=!!O,nt=!!T.aoMap,Re=!!T.lightMap,Ue=!!T.bumpMap,le=!!T.normalMap,ve=!!T.displacementMap,Se=!!T.emissiveMap,A=!!T.metalnessMap,E=!!T.roughnessMap,W=T.anisotropy>0,ce=T.clearcoat>0,ie=T.iridescence>0,se=T.sheen>0,be=T.transmission>0,ye=W&&!!T.anisotropyMap,X=ce&&!!T.clearcoatMap,Me=ce&&!!T.clearcoatNormalMap,De=ce&&!!T.clearcoatRoughnessMap,ue=ie&&!!T.iridescenceMap,qe=ie&&!!T.iridescenceThicknessMap,N=se&&!!T.sheenColorMap,ae=se&&!!T.sheenRoughnessMap,_e=!!T.specularMap,fe=!!T.specularColorMap,Pe=!!T.specularIntensityMap,Ge=be&&!!T.transmissionMap,Ke=be&&!!T.thicknessMap,He=!!T.gradientMap,ge=!!T.alphaMap,I=T.alphaTest>0,pe=!!T.alphaHash,me=!!T.extensions,Ie=!!H.attributes.uv1,Ne=!!H.attributes.uv2,Qe=!!H.attributes.uv3;let et=Yi;return T.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(et=t.toneMapping),{isWebGL2:d,shaderID:k,shaderType:T.type,shaderName:T.name,vertexShader:K,fragmentShader:te,defines:T.defines,customVertexShaderID:ne,customFragmentShaderID:he,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Ee,instancing:re,instancingColor:re&&Q.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:_i,map:Ce,matcap:Be,envMap:Y,envMapMode:Y&&O.mapping,envMapCubeUVHeight:L,aoMap:nt,lightMap:Re,bumpMap:Ue,normalMap:le,displacementMap:p&&ve,emissiveMap:Se,normalMapObjectSpace:le&&T.normalMapType===mE,normalMapTangentSpace:le&&T.normalMapType===V0,metalnessMap:A,roughnessMap:E,anisotropy:W,anisotropyMap:ye,clearcoat:ce,clearcoatMap:X,clearcoatNormalMap:Me,clearcoatRoughnessMap:De,iridescence:ie,iridescenceMap:ue,iridescenceThicknessMap:qe,sheen:se,sheenColorMap:N,sheenRoughnessMap:ae,specularMap:_e,specularColorMap:fe,specularIntensityMap:Pe,transmission:be,transmissionMap:Ge,thicknessMap:Ke,gradientMap:He,opaque:T.transparent===!1&&T.blending===Rs,alphaMap:ge,alphaTest:I,alphaHash:pe,combine:T.combine,mapUv:Ce&&y(T.map.channel),aoMapUv:nt&&y(T.aoMap.channel),lightMapUv:Re&&y(T.lightMap.channel),bumpMapUv:Ue&&y(T.bumpMap.channel),normalMapUv:le&&y(T.normalMap.channel),displacementMapUv:ve&&y(T.displacementMap.channel),emissiveMapUv:Se&&y(T.emissiveMap.channel),metalnessMapUv:A&&y(T.metalnessMap.channel),roughnessMapUv:E&&y(T.roughnessMap.channel),anisotropyMapUv:ye&&y(T.anisotropyMap.channel),clearcoatMapUv:X&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:Me&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:N&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:ae&&y(T.sheenRoughnessMap.channel),specularMapUv:_e&&y(T.specularMap.channel),specularColorMapUv:fe&&y(T.specularColorMap.channel),specularIntensityMapUv:Pe&&y(T.specularIntensityMap.channel),transmissionMapUv:Ge&&y(T.transmissionMap.channel),thicknessMapUv:Ke&&y(T.thicknessMap.channel),alphaMapUv:ge&&y(T.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(le||W),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:Ie,vertexUv2s:Ne,vertexUv3s:Qe,pointsUvs:Q.isPoints===!0&&!!H.attributes.uv&&(Ce||ge),fog:!!U,useFog:T.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:Q.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:q,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:et,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ce&&T.map.isVideoTexture===!0&&it.getTransfer(T.map.colorSpace)===ot,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===pn,flipSided:T.side===cn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:me&&T.extensions.derivatives===!0,extensionFragDepth:me&&T.extensions.fragDepth===!0,extensionDrawBuffers:me&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&T.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()}}function h(T){const w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(const z in T.defines)w.push(z),w.push(T.defines[z]);return T.isRawShaderMaterial===!1&&(x(w,T),v(w,T),w.push(t.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function x(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function v(T,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),T.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),T.push(o.mask)}function S(T){const w=_[T.type];let z;if(w){const $=Kn[w];z=VE.clone($.uniforms)}else z=T.uniforms;return z}function C(T,w){let z;for(let $=0,Q=u.length;$<Q;$++){const U=u[$];if(U.cacheKey===w){z=U,++z.usedTimes;break}}return z===void 0&&(z=new iA(t,w,T,s),u.push(z)),z}function b(T){if(--T.usedTimes===0){const w=u.indexOf(T);u[w]=u[u.length-1],u.pop(),T.destroy()}}function M(T){l.remove(T)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:C,releaseProgram:b,releaseShaderCache:M,programs:u,dispose:D}}function lA(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function cA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Fm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function km(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,p,g,_,y,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:p,material:g,groupOrder:_,renderOrder:f.renderOrder,z:y,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=p,h.material=g,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=y,h.group=m),e++,h}function o(f,p,g,_,y,m){const h=a(f,p,g,_,y,m);g.transmission>0?i.push(h):g.transparent===!0?r.push(h):n.push(h)}function l(f,p,g,_,y,m){const h=a(f,p,g,_,y,m);g.transmission>0?i.unshift(h):g.transparent===!0?r.unshift(h):n.unshift(h)}function u(f,p){n.length>1&&n.sort(f||cA),i.length>1&&i.sort(p||Fm),r.length>1&&r.sort(p||Fm)}function d(){for(let f=e,p=t.length;f<p;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:d,sort:u}}function uA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new km,t.set(i,[a])):r>=s.length?(a=new km,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function dA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new Ze};break;case"SpotLight":n={position:new F,direction:new F,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function hA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let fA=0;function pA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function mA(t,e){const n=new dA,i=hA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new F);const s=new F,a=new Mt,o=new Mt;function l(d,f){let p=0,g=0,_=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let y=0,m=0,h=0,x=0,v=0,S=0,C=0,b=0,M=0,D=0,T=0;d.sort(pA);const w=f===!0?Math.PI:1;for(let $=0,Q=d.length;$<Q;$++){const U=d[$],H=U.color,B=U.intensity,O=U.distance,L=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)p+=H.r*B*w,g+=H.g*B*w,_+=H.b*B*w;else if(U.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(U.sh.coefficients[k],B);T++}else if(U.isDirectionalLight){const k=n.get(U);if(k.color.copy(U.color).multiplyScalar(U.intensity*w),U.castShadow){const G=U.shadow,j=i.get(U);j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,r.directionalShadow[y]=j,r.directionalShadowMap[y]=L,r.directionalShadowMatrix[y]=U.shadow.matrix,S++}r.directional[y]=k,y++}else if(U.isSpotLight){const k=n.get(U);k.position.setFromMatrixPosition(U.matrixWorld),k.color.copy(H).multiplyScalar(B*w),k.distance=O,k.coneCos=Math.cos(U.angle),k.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),k.decay=U.decay,r.spot[h]=k;const G=U.shadow;if(U.map&&(r.spotLightMap[M]=U.map,M++,G.updateMatrices(U),U.castShadow&&D++),r.spotLightMatrix[h]=G.matrix,U.castShadow){const j=i.get(U);j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,r.spotShadow[h]=j,r.spotShadowMap[h]=L,b++}h++}else if(U.isRectAreaLight){const k=n.get(U);k.color.copy(H).multiplyScalar(B),k.halfWidth.set(U.width*.5,0,0),k.halfHeight.set(0,U.height*.5,0),r.rectArea[x]=k,x++}else if(U.isPointLight){const k=n.get(U);if(k.color.copy(U.color).multiplyScalar(U.intensity*w),k.distance=U.distance,k.decay=U.decay,U.castShadow){const G=U.shadow,j=i.get(U);j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,j.shadowCameraNear=G.camera.near,j.shadowCameraFar=G.camera.far,r.pointShadow[m]=j,r.pointShadowMap[m]=L,r.pointShadowMatrix[m]=U.shadow.matrix,C++}r.point[m]=k,m++}else if(U.isHemisphereLight){const k=n.get(U);k.skyColor.copy(U.color).multiplyScalar(B*w),k.groundColor.copy(U.groundColor).multiplyScalar(B*w),r.hemi[v]=k,v++}}x>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=g,r.ambient[2]=_;const z=r.hash;(z.directionalLength!==y||z.pointLength!==m||z.spotLength!==h||z.rectAreaLength!==x||z.hemiLength!==v||z.numDirectionalShadows!==S||z.numPointShadows!==C||z.numSpotShadows!==b||z.numSpotMaps!==M||z.numLightProbes!==T)&&(r.directional.length=y,r.spot.length=h,r.rectArea.length=x,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=b+M-D,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=T,z.directionalLength=y,z.pointLength=m,z.spotLength=h,z.rectAreaLength=x,z.hemiLength=v,z.numDirectionalShadows=S,z.numPointShadows=C,z.numSpotShadows=b,z.numSpotMaps=M,z.numLightProbes=T,r.version=fA++)}function u(d,f){let p=0,g=0,_=0,y=0,m=0;const h=f.matrixWorldInverse;for(let x=0,v=d.length;x<v;x++){const S=d[x];if(S.isDirectionalLight){const C=r.directional[p];C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(h),p++}else if(S.isSpotLight){const C=r.spot[_];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(h),C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(h),_++}else if(S.isRectAreaLight){const C=r.rectArea[y];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(h),o.identity(),a.copy(S.matrixWorld),a.premultiply(h),o.extractRotation(a),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),y++}else if(S.isPointLight){const C=r.point[g];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(h),g++}else if(S.isHemisphereLight){const C=r.hemi[m];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(h),m++}}}return{setup:l,setupView:u,state:r}}function zm(t,e){const n=new mA(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){n.setup(i,f)}function u(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function gA(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new zm(t,e),n.set(s,[l])):a>=o.length?(l=new zm(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class vA extends no{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _A extends no{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function SA(t,e,n){let i=new jh;const r=new Ae,s=new Ae,a=new Lt,o=new vA({depthPacking:pE}),l=new _A,u={},d=n.maxTextureSize,f={[Qi]:cn,[cn]:Qi,[pn]:pn},p=new Dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:xA,fragmentShader:yA}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const _=new Xn;_.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Pt(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=L0;let h=this.type;this.render=function(b,M,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const T=t.getRenderTarget(),w=t.getActiveCubeFace(),z=t.getActiveMipmapLevel(),$=t.state;$.setBlending($i),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const Q=h!==ai&&this.type===ai,U=h===ai&&this.type!==ai;for(let H=0,B=b.length;H<B;H++){const O=b[H],L=O.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const k=L.getFrameExtents();if(r.multiply(k),s.copy(L.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/k.x),r.x=s.x*k.x,L.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/k.y),r.y=s.y*k.y,L.mapSize.y=s.y)),L.map===null||Q===!0||U===!0){const j=this.type!==ai?{minFilter:Jt,magFilter:Jt}:{};L.map!==null&&L.map.dispose(),L.map=new Nr(r.x,r.y,j),L.map.texture.name=O.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const G=L.getViewportCount();for(let j=0;j<G;j++){const q=L.getViewport(j);a.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),$.viewport(a),L.updateMatrices(O,j),i=L.getFrustum(),S(M,D,L.camera,O,this.type)}L.isPointLightShadow!==!0&&this.type===ai&&x(L,D),L.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(T,w,z)};function x(b,M){const D=e.update(y);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,g.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Nr(r.x,r.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(M,null,D,p,y,null),g.uniforms.shadow_pass.value=b.mapPass.texture,g.uniforms.resolution.value=b.mapSize,g.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(M,null,D,g,y,null)}function v(b,M,D,T){let w=null;const z=D.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(z!==void 0)w=z;else if(w=D.isPointLight===!0?l:o,t.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const $=w.uuid,Q=M.uuid;let U=u[$];U===void 0&&(U={},u[$]=U);let H=U[Q];H===void 0&&(H=w.clone(),U[Q]=H,M.addEventListener("dispose",C)),w=H}if(w.visible=M.visible,w.wireframe=M.wireframe,T===ai?w.side=M.shadowSide!==null?M.shadowSide:M.side:w.side=M.shadowSide!==null?M.shadowSide:f[M.side],w.alphaMap=M.alphaMap,w.alphaTest=M.alphaTest,w.map=M.map,w.clipShadows=M.clipShadows,w.clippingPlanes=M.clippingPlanes,w.clipIntersection=M.clipIntersection,w.displacementMap=M.displacementMap,w.displacementScale=M.displacementScale,w.displacementBias=M.displacementBias,w.wireframeLinewidth=M.wireframeLinewidth,w.linewidth=M.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const $=t.properties.get(w);$.light=D}return w}function S(b,M,D,T,w){if(b.visible===!1)return;if(b.layers.test(M.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&w===ai)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,b.matrixWorld);const Q=e.update(b),U=b.material;if(Array.isArray(U)){const H=Q.groups;for(let B=0,O=H.length;B<O;B++){const L=H[B],k=U[L.materialIndex];if(k&&k.visible){const G=v(b,k,T,w);b.onBeforeShadow(t,b,M,D,Q,G,L),t.renderBufferDirect(D,null,Q,G,b,L),b.onAfterShadow(t,b,M,D,Q,G,L)}}}else if(U.visible){const H=v(b,U,T,w);b.onBeforeShadow(t,b,M,D,Q,H,null),t.renderBufferDirect(D,null,Q,H,b,null),b.onAfterShadow(t,b,M,D,Q,H,null)}}const $=b.children;for(let Q=0,U=$.length;Q<U;Q++)S($[Q],M,D,T,w)}function C(b){b.target.removeEventListener("dispose",C);for(const D in u){const T=u[D],w=b.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}function MA(t,e,n){const i=n.isWebGL2;function r(){let I=!1;const pe=new Lt;let me=null;const Ie=new Lt(0,0,0,0);return{setMask:function(Ne){me!==Ne&&!I&&(t.colorMask(Ne,Ne,Ne,Ne),me=Ne)},setLocked:function(Ne){I=Ne},setClear:function(Ne,Qe,et,At,Yt){Yt===!0&&(Ne*=At,Qe*=At,et*=At),pe.set(Ne,Qe,et,At),Ie.equals(pe)===!1&&(t.clearColor(Ne,Qe,et,At),Ie.copy(pe))},reset:function(){I=!1,me=null,Ie.set(-1,0,0,0)}}}function s(){let I=!1,pe=null,me=null,Ie=null;return{setTest:function(Ne){Ne?Ee(t.DEPTH_TEST):Ce(t.DEPTH_TEST)},setMask:function(Ne){pe!==Ne&&!I&&(t.depthMask(Ne),pe=Ne)},setFunc:function(Ne){if(me!==Ne){switch(Ne){case VM:t.depthFunc(t.NEVER);break;case GM:t.depthFunc(t.ALWAYS);break;case WM:t.depthFunc(t.LESS);break;case Il:t.depthFunc(t.LEQUAL);break;case XM:t.depthFunc(t.EQUAL);break;case $M:t.depthFunc(t.GEQUAL);break;case YM:t.depthFunc(t.GREATER);break;case qM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=Ne}},setLocked:function(Ne){I=Ne},setClear:function(Ne){Ie!==Ne&&(t.clearDepth(Ne),Ie=Ne)},reset:function(){I=!1,pe=null,me=null,Ie=null}}}function a(){let I=!1,pe=null,me=null,Ie=null,Ne=null,Qe=null,et=null,At=null,Yt=null;return{setTest:function(rt){I||(rt?Ee(t.STENCIL_TEST):Ce(t.STENCIL_TEST))},setMask:function(rt){pe!==rt&&!I&&(t.stencilMask(rt),pe=rt)},setFunc:function(rt,qt,$n){(me!==rt||Ie!==qt||Ne!==$n)&&(t.stencilFunc(rt,qt,$n),me=rt,Ie=qt,Ne=$n)},setOp:function(rt,qt,$n){(Qe!==rt||et!==qt||At!==$n)&&(t.stencilOp(rt,qt,$n),Qe=rt,et=qt,At=$n)},setLocked:function(rt){I=rt},setClear:function(rt){Yt!==rt&&(t.clearStencil(rt),Yt=rt)},reset:function(){I=!1,pe=null,me=null,Ie=null,Ne=null,Qe=null,et=null,At=null,Yt=null}}}const o=new r,l=new s,u=new a,d=new WeakMap,f=new WeakMap;let p={},g={},_=new WeakMap,y=[],m=null,h=!1,x=null,v=null,S=null,C=null,b=null,M=null,D=null,T=new Ze(0,0,0),w=0,z=!1,$=null,Q=null,U=null,H=null,B=null;const O=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,k=0;const G=t.getParameter(t.VERSION);G.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(G)[1]),L=k>=1):G.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),L=k>=2);let j=null,q={};const K=t.getParameter(t.SCISSOR_BOX),te=t.getParameter(t.VIEWPORT),ne=new Lt().fromArray(K),he=new Lt().fromArray(te);function oe(I,pe,me,Ie){const Ne=new Uint8Array(4),Qe=t.createTexture();t.bindTexture(I,Qe),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let et=0;et<me;et++)i&&(I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY)?t.texImage3D(pe,0,t.RGBA,1,1,Ie,0,t.RGBA,t.UNSIGNED_BYTE,Ne):t.texImage2D(pe+et,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ne);return Qe}const re={};re[t.TEXTURE_2D]=oe(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=oe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(re[t.TEXTURE_2D_ARRAY]=oe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=oe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ee(t.DEPTH_TEST),l.setFunc(Il),Se(!1),A(yp),Ee(t.CULL_FACE),le($i);function Ee(I){p[I]!==!0&&(t.enable(I),p[I]=!0)}function Ce(I){p[I]!==!1&&(t.disable(I),p[I]=!1)}function Be(I,pe){return g[I]!==pe?(t.bindFramebuffer(I,pe),g[I]=pe,i&&(I===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=pe),I===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=pe)),!0):!1}function Y(I,pe){let me=y,Ie=!1;if(I)if(me=_.get(pe),me===void 0&&(me=[],_.set(pe,me)),I.isWebGLMultipleRenderTargets){const Ne=I.texture;if(me.length!==Ne.length||me[0]!==t.COLOR_ATTACHMENT0){for(let Qe=0,et=Ne.length;Qe<et;Qe++)me[Qe]=t.COLOR_ATTACHMENT0+Qe;me.length=Ne.length,Ie=!0}}else me[0]!==t.COLOR_ATTACHMENT0&&(me[0]=t.COLOR_ATTACHMENT0,Ie=!0);else me[0]!==t.BACK&&(me[0]=t.BACK,Ie=!0);Ie&&(n.isWebGL2?t.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function nt(I){return m!==I?(t.useProgram(I),m=I,!0):!1}const Re={[pr]:t.FUNC_ADD,[CM]:t.FUNC_SUBTRACT,[RM]:t.FUNC_REVERSE_SUBTRACT};if(i)Re[wp]=t.MIN,Re[Tp]=t.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(Re[wp]=I.MIN_EXT,Re[Tp]=I.MAX_EXT)}const Ue={[PM]:t.ZERO,[NM]:t.ONE,[LM]:t.SRC_COLOR,[Td]:t.SRC_ALPHA,[kM]:t.SRC_ALPHA_SATURATE,[OM]:t.DST_COLOR,[UM]:t.DST_ALPHA,[DM]:t.ONE_MINUS_SRC_COLOR,[bd]:t.ONE_MINUS_SRC_ALPHA,[FM]:t.ONE_MINUS_DST_COLOR,[IM]:t.ONE_MINUS_DST_ALPHA,[zM]:t.CONSTANT_COLOR,[BM]:t.ONE_MINUS_CONSTANT_COLOR,[jM]:t.CONSTANT_ALPHA,[HM]:t.ONE_MINUS_CONSTANT_ALPHA};function le(I,pe,me,Ie,Ne,Qe,et,At,Yt,rt){if(I===$i){h===!0&&(Ce(t.BLEND),h=!1);return}if(h===!1&&(Ee(t.BLEND),h=!0),I!==AM){if(I!==x||rt!==z){if((v!==pr||b!==pr)&&(t.blendEquation(t.FUNC_ADD),v=pr,b=pr),rt)switch(I){case Rs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Sp:t.blendFunc(t.ONE,t.ONE);break;case Mp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ep:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Rs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Sp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Mp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ep:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,C=null,M=null,D=null,T.set(0,0,0),w=0,x=I,z=rt}return}Ne=Ne||pe,Qe=Qe||me,et=et||Ie,(pe!==v||Ne!==b)&&(t.blendEquationSeparate(Re[pe],Re[Ne]),v=pe,b=Ne),(me!==S||Ie!==C||Qe!==M||et!==D)&&(t.blendFuncSeparate(Ue[me],Ue[Ie],Ue[Qe],Ue[et]),S=me,C=Ie,M=Qe,D=et),(At.equals(T)===!1||Yt!==w)&&(t.blendColor(At.r,At.g,At.b,Yt),T.copy(At),w=Yt),x=I,z=!1}function ve(I,pe){I.side===pn?Ce(t.CULL_FACE):Ee(t.CULL_FACE);let me=I.side===cn;pe&&(me=!me),Se(me),I.blending===Rs&&I.transparent===!1?le($i):le(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const Ie=I.stencilWrite;u.setTest(Ie),Ie&&(u.setMask(I.stencilWriteMask),u.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),u.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),W(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ee(t.SAMPLE_ALPHA_TO_COVERAGE):Ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function Se(I){$!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),$=I)}function A(I){I!==wM?(Ee(t.CULL_FACE),I!==Q&&(I===yp?t.cullFace(t.BACK):I===TM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ce(t.CULL_FACE),Q=I}function E(I){I!==U&&(L&&t.lineWidth(I),U=I)}function W(I,pe,me){I?(Ee(t.POLYGON_OFFSET_FILL),(H!==pe||B!==me)&&(t.polygonOffset(pe,me),H=pe,B=me)):Ce(t.POLYGON_OFFSET_FILL)}function ce(I){I?Ee(t.SCISSOR_TEST):Ce(t.SCISSOR_TEST)}function ie(I){I===void 0&&(I=t.TEXTURE0+O-1),j!==I&&(t.activeTexture(I),j=I)}function se(I,pe,me){me===void 0&&(j===null?me=t.TEXTURE0+O-1:me=j);let Ie=q[me];Ie===void 0&&(Ie={type:void 0,texture:void 0},q[me]=Ie),(Ie.type!==I||Ie.texture!==pe)&&(j!==me&&(t.activeTexture(me),j=me),t.bindTexture(I,pe||re[I]),Ie.type=I,Ie.texture=pe)}function be(){const I=q[j];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ye(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function qe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function N(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(I){ne.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),ne.copy(I))}function Ge(I){he.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),he.copy(I))}function Ke(I,pe){let me=f.get(pe);me===void 0&&(me=new WeakMap,f.set(pe,me));let Ie=me.get(I);Ie===void 0&&(Ie=t.getUniformBlockIndex(pe,I.name),me.set(I,Ie))}function He(I,pe){const Ie=f.get(pe).get(I);d.get(pe)!==Ie&&(t.uniformBlockBinding(pe,Ie,I.__bindingPointIndex),d.set(pe,Ie))}function ge(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),p={},j=null,q={},g={},_=new WeakMap,y=[],m=null,h=!1,x=null,v=null,S=null,C=null,b=null,M=null,D=null,T=new Ze(0,0,0),w=0,z=!1,$=null,Q=null,U=null,H=null,B=null,ne.set(0,0,t.canvas.width,t.canvas.height),he.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:Ee,disable:Ce,bindFramebuffer:Be,drawBuffers:Y,useProgram:nt,setBlending:le,setMaterial:ve,setFlipSided:Se,setCullFace:A,setLineWidth:E,setPolygonOffset:W,setScissorTest:ce,activeTexture:ie,bindTexture:se,unbindTexture:be,compressedTexImage2D:ye,compressedTexImage3D:X,texImage2D:_e,texImage3D:fe,updateUBOMapping:Ke,uniformBlockBinding:He,texStorage2D:N,texStorage3D:ae,texSubImage2D:Me,texSubImage3D:De,compressedTexSubImage2D:ue,compressedTexSubImage3D:qe,scissor:Pe,viewport:Ge,reset:ge}}function EA(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let f;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,E){return g?new OffscreenCanvas(A,E):Bl("canvas")}function y(A,E,W,ce){let ie=1;if((A.width>ce||A.height>ce)&&(ie=ce/Math.max(A.width,A.height)),ie<1||E===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const se=E?Dd:Math.floor,be=se(ie*A.width),ye=se(ie*A.height);f===void 0&&(f=_(be,ye));const X=W?_(be,ye):f;return X.width=be,X.height=ye,X.getContext("2d").drawImage(A,0,0,be,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+be+"x"+ye+")."),X}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return tm(A.width)&&tm(A.height)}function h(A){return o?!1:A.wrapS!==Bn||A.wrapT!==Bn||A.minFilter!==Jt&&A.minFilter!==Tn}function x(A,E){return A.generateMipmaps&&E&&A.minFilter!==Jt&&A.minFilter!==Tn}function v(A){t.generateMipmap(A)}function S(A,E,W,ce,ie=!1){if(o===!1)return E;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let se=E;if(E===t.RED&&(W===t.FLOAT&&(se=t.R32F),W===t.HALF_FLOAT&&(se=t.R16F),W===t.UNSIGNED_BYTE&&(se=t.R8)),E===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(se=t.R8UI),W===t.UNSIGNED_SHORT&&(se=t.R16UI),W===t.UNSIGNED_INT&&(se=t.R32UI),W===t.BYTE&&(se=t.R8I),W===t.SHORT&&(se=t.R16I),W===t.INT&&(se=t.R32I)),E===t.RG&&(W===t.FLOAT&&(se=t.RG32F),W===t.HALF_FLOAT&&(se=t.RG16F),W===t.UNSIGNED_BYTE&&(se=t.RG8)),E===t.RGBA){const be=ie?Ol:it.getTransfer(ce);W===t.FLOAT&&(se=t.RGBA32F),W===t.HALF_FLOAT&&(se=t.RGBA16F),W===t.UNSIGNED_BYTE&&(se=be===ot?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(se=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(se=t.RGB5_A1)}return(se===t.R16F||se===t.R32F||se===t.RG16F||se===t.RG32F||se===t.RGBA16F||se===t.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function C(A,E,W){return x(A,W)===!0||A.isFramebufferTexture&&A.minFilter!==Jt&&A.minFilter!==Tn?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function b(A){return A===Jt||A===bp||A===Vc?t.NEAREST:t.LINEAR}function M(A){const E=A.target;E.removeEventListener("dispose",M),T(E),E.isVideoTexture&&d.delete(E)}function D(A){const E=A.target;E.removeEventListener("dispose",D),z(E)}function T(A){const E=i.get(A);if(E.__webglInit===void 0)return;const W=A.source,ce=p.get(W);if(ce){const ie=ce[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&w(A),Object.keys(ce).length===0&&p.delete(W)}i.remove(A)}function w(A){const E=i.get(A);t.deleteTexture(E.__webglTexture);const W=A.source,ce=p.get(W);delete ce[E.__cacheKey],a.memory.textures--}function z(A){const E=A.texture,W=i.get(A),ce=i.get(E);if(ce.__webglTexture!==void 0&&(t.deleteTexture(ce.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(W.__webglFramebuffer[ie]))for(let se=0;se<W.__webglFramebuffer[ie].length;se++)t.deleteFramebuffer(W.__webglFramebuffer[ie][se]);else t.deleteFramebuffer(W.__webglFramebuffer[ie]);W.__webglDepthbuffer&&t.deleteRenderbuffer(W.__webglDepthbuffer[ie])}else{if(Array.isArray(W.__webglFramebuffer))for(let ie=0;ie<W.__webglFramebuffer.length;ie++)t.deleteFramebuffer(W.__webglFramebuffer[ie]);else t.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&t.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&t.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let ie=0;ie<W.__webglColorRenderbuffer.length;ie++)W.__webglColorRenderbuffer[ie]&&t.deleteRenderbuffer(W.__webglColorRenderbuffer[ie]);W.__webglDepthRenderbuffer&&t.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ie=0,se=E.length;ie<se;ie++){const be=i.get(E[ie]);be.__webglTexture&&(t.deleteTexture(be.__webglTexture),a.memory.textures--),i.remove(E[ie])}i.remove(E),i.remove(A)}let $=0;function Q(){$=0}function U(){const A=$;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),$+=1,A}function H(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function B(A,E){const W=i.get(A);if(A.isVideoTexture&&ve(A),A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){const ce=A.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(W,A,E);return}}n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+E)}function O(A,E){const W=i.get(A);if(A.version>0&&W.__version!==A.version){ne(W,A,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+E)}function L(A,E){const W=i.get(A);if(A.version>0&&W.__version!==A.version){ne(W,A,E);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+E)}function k(A,E){const W=i.get(A);if(A.version>0&&W.__version!==A.version){he(W,A,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+E)}const G={[Rd]:t.REPEAT,[Bn]:t.CLAMP_TO_EDGE,[Pd]:t.MIRRORED_REPEAT},j={[Jt]:t.NEAREST,[bp]:t.NEAREST_MIPMAP_NEAREST,[Vc]:t.NEAREST_MIPMAP_LINEAR,[Tn]:t.LINEAR,[rE]:t.LINEAR_MIPMAP_NEAREST,[Xa]:t.LINEAR_MIPMAP_LINEAR},q={[gE]:t.NEVER,[ME]:t.ALWAYS,[vE]:t.LESS,[G0]:t.LEQUAL,[_E]:t.EQUAL,[SE]:t.GEQUAL,[xE]:t.GREATER,[yE]:t.NOTEQUAL};function K(A,E,W){if(W?(t.texParameteri(A,t.TEXTURE_WRAP_S,G[E.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,G[E.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,G[E.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,j[E.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,j[E.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==Bn||E.wrapT!==Bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,b(E.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,b(E.minFilter)),E.minFilter!==Jt&&E.minFilter!==Tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,q[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ce=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Jt||E.minFilter!==Vc&&E.minFilter!==Xa||E.type===Fi&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===$a&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(t.texParameterf(A,ce.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function te(A,E){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",M));const ce=E.source;let ie=p.get(ce);ie===void 0&&(ie={},p.set(ce,ie));const se=H(E);if(se!==A.__cacheKey){ie[se]===void 0&&(ie[se]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ie[se].usedTimes++;const be=ie[A.__cacheKey];be!==void 0&&(ie[A.__cacheKey].usedTimes--,be.usedTimes===0&&w(E)),A.__cacheKey=se,A.__webglTexture=ie[se].texture}return W}function ne(A,E,W){let ce=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ce=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ce=t.TEXTURE_3D);const ie=te(A,E),se=E.source;n.bindTexture(ce,A.__webglTexture,t.TEXTURE0+W);const be=i.get(se);if(se.version!==be.__version||ie===!0){n.activeTexture(t.TEXTURE0+W);const ye=it.getPrimaries(it.workingColorSpace),X=E.colorSpace===An?null:it.getPrimaries(E.colorSpace),Me=E.colorSpace===An||ye===X?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const De=h(E)&&m(E.image)===!1;let ue=y(E.image,De,!1,r.maxTextureSize);ue=Se(E,ue);const qe=m(ue)||o,N=s.convert(E.format,E.colorSpace);let ae=s.convert(E.type),_e=S(E.internalFormat,N,ae,E.colorSpace,E.isVideoTexture);K(ce,E,qe);let fe;const Pe=E.mipmaps,Ge=o&&E.isVideoTexture!==!0&&_e!==j0,Ke=be.__version===void 0||ie===!0,He=C(E,ue,qe);if(E.isDepthTexture)_e=t.DEPTH_COMPONENT,o?E.type===Fi?_e=t.DEPTH_COMPONENT32F:E.type===Oi?_e=t.DEPTH_COMPONENT24:E.type===Er?_e=t.DEPTH24_STENCIL8:_e=t.DEPTH_COMPONENT16:E.type===Fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===wr&&_e===t.DEPTH_COMPONENT&&E.type!==Fh&&E.type!==Oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Oi,ae=s.convert(E.type)),E.format===Hs&&_e===t.DEPTH_COMPONENT&&(_e=t.DEPTH_STENCIL,E.type!==Er&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Er,ae=s.convert(E.type))),Ke&&(Ge?n.texStorage2D(t.TEXTURE_2D,1,_e,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,_e,ue.width,ue.height,0,N,ae,null));else if(E.isDataTexture)if(Pe.length>0&&qe){Ge&&Ke&&n.texStorage2D(t.TEXTURE_2D,He,_e,Pe[0].width,Pe[0].height);for(let ge=0,I=Pe.length;ge<I;ge++)fe=Pe[ge],Ge?n.texSubImage2D(t.TEXTURE_2D,ge,0,0,fe.width,fe.height,N,ae,fe.data):n.texImage2D(t.TEXTURE_2D,ge,_e,fe.width,fe.height,0,N,ae,fe.data);E.generateMipmaps=!1}else Ge?(Ke&&n.texStorage2D(t.TEXTURE_2D,He,_e,ue.width,ue.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue.width,ue.height,N,ae,ue.data)):n.texImage2D(t.TEXTURE_2D,0,_e,ue.width,ue.height,0,N,ae,ue.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ge&&Ke&&n.texStorage3D(t.TEXTURE_2D_ARRAY,He,_e,Pe[0].width,Pe[0].height,ue.depth);for(let ge=0,I=Pe.length;ge<I;ge++)fe=Pe[ge],E.format!==jn?N!==null?Ge?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,fe.width,fe.height,ue.depth,N,fe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ge,_e,fe.width,fe.height,ue.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,fe.width,fe.height,ue.depth,N,ae,fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ge,_e,fe.width,fe.height,ue.depth,0,N,ae,fe.data)}else{Ge&&Ke&&n.texStorage2D(t.TEXTURE_2D,He,_e,Pe[0].width,Pe[0].height);for(let ge=0,I=Pe.length;ge<I;ge++)fe=Pe[ge],E.format!==jn?N!==null?Ge?n.compressedTexSubImage2D(t.TEXTURE_2D,ge,0,0,fe.width,fe.height,N,fe.data):n.compressedTexImage2D(t.TEXTURE_2D,ge,_e,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?n.texSubImage2D(t.TEXTURE_2D,ge,0,0,fe.width,fe.height,N,ae,fe.data):n.texImage2D(t.TEXTURE_2D,ge,_e,fe.width,fe.height,0,N,ae,fe.data)}else if(E.isDataArrayTexture)Ge?(Ke&&n.texStorage3D(t.TEXTURE_2D_ARRAY,He,_e,ue.width,ue.height,ue.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,N,ae,ue.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,_e,ue.width,ue.height,ue.depth,0,N,ae,ue.data);else if(E.isData3DTexture)Ge?(Ke&&n.texStorage3D(t.TEXTURE_3D,He,_e,ue.width,ue.height,ue.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,N,ae,ue.data)):n.texImage3D(t.TEXTURE_3D,0,_e,ue.width,ue.height,ue.depth,0,N,ae,ue.data);else if(E.isFramebufferTexture){if(Ke)if(Ge)n.texStorage2D(t.TEXTURE_2D,He,_e,ue.width,ue.height);else{let ge=ue.width,I=ue.height;for(let pe=0;pe<He;pe++)n.texImage2D(t.TEXTURE_2D,pe,_e,ge,I,0,N,ae,null),ge>>=1,I>>=1}}else if(Pe.length>0&&qe){Ge&&Ke&&n.texStorage2D(t.TEXTURE_2D,He,_e,Pe[0].width,Pe[0].height);for(let ge=0,I=Pe.length;ge<I;ge++)fe=Pe[ge],Ge?n.texSubImage2D(t.TEXTURE_2D,ge,0,0,N,ae,fe):n.texImage2D(t.TEXTURE_2D,ge,_e,N,ae,fe);E.generateMipmaps=!1}else Ge?(Ke&&n.texStorage2D(t.TEXTURE_2D,He,_e,ue.width,ue.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,N,ae,ue)):n.texImage2D(t.TEXTURE_2D,0,_e,N,ae,ue);x(E,qe)&&v(ce),be.__version=se.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function he(A,E,W){if(E.image.length!==6)return;const ce=te(A,E),ie=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+W);const se=i.get(ie);if(ie.version!==se.__version||ce===!0){n.activeTexture(t.TEXTURE0+W);const be=it.getPrimaries(it.workingColorSpace),ye=E.colorSpace===An?null:it.getPrimaries(E.colorSpace),X=E.colorSpace===An||be===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,X);const Me=E.isCompressedTexture||E.image[0].isCompressedTexture,De=E.image[0]&&E.image[0].isDataTexture,ue=[];for(let ge=0;ge<6;ge++)!Me&&!De?ue[ge]=y(E.image[ge],!1,!0,r.maxCubemapSize):ue[ge]=De?E.image[ge].image:E.image[ge],ue[ge]=Se(E,ue[ge]);const qe=ue[0],N=m(qe)||o,ae=s.convert(E.format,E.colorSpace),_e=s.convert(E.type),fe=S(E.internalFormat,ae,_e,E.colorSpace),Pe=o&&E.isVideoTexture!==!0,Ge=se.__version===void 0||ce===!0;let Ke=C(E,qe,N);K(t.TEXTURE_CUBE_MAP,E,N);let He;if(Me){Pe&&Ge&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ke,fe,qe.width,qe.height);for(let ge=0;ge<6;ge++){He=ue[ge].mipmaps;for(let I=0;I<He.length;I++){const pe=He[I];E.format!==jn?ae!==null?Pe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,I,0,0,pe.width,pe.height,ae,pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,I,fe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,I,0,0,pe.width,pe.height,ae,_e,pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,I,fe,pe.width,pe.height,0,ae,_e,pe.data)}}}else{He=E.mipmaps,Pe&&Ge&&(He.length>0&&Ke++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Ke,fe,ue[0].width,ue[0].height));for(let ge=0;ge<6;ge++)if(De){Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ue[ge].width,ue[ge].height,ae,_e,ue[ge].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,fe,ue[ge].width,ue[ge].height,0,ae,_e,ue[ge].data);for(let I=0;I<He.length;I++){const me=He[I].image[ge].image;Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,I+1,0,0,me.width,me.height,ae,_e,me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,I+1,fe,me.width,me.height,0,ae,_e,me.data)}}else{Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ae,_e,ue[ge]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,fe,ae,_e,ue[ge]);for(let I=0;I<He.length;I++){const pe=He[I];Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,I+1,0,0,ae,_e,pe.image[ge]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,I+1,fe,ae,_e,pe.image[ge])}}}x(E,N)&&v(t.TEXTURE_CUBE_MAP),se.__version=ie.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function oe(A,E,W,ce,ie,se){const be=s.convert(W.format,W.colorSpace),ye=s.convert(W.type),X=S(W.internalFormat,be,ye,W.colorSpace);if(!i.get(E).__hasExternalTextures){const De=Math.max(1,E.width>>se),ue=Math.max(1,E.height>>se);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,se,X,De,ue,E.depth,0,be,ye,null):n.texImage2D(ie,se,X,De,ue,0,be,ye,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),le(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ce,ie,i.get(W).__webglTexture,0,Ue(E)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ce,ie,i.get(W).__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function re(A,E,W){if(t.bindRenderbuffer(t.RENDERBUFFER,A),E.depthBuffer&&!E.stencilBuffer){let ce=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(W||le(E)){const ie=E.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Fi?ce=t.DEPTH_COMPONENT32F:ie.type===Oi&&(ce=t.DEPTH_COMPONENT24));const se=Ue(E);le(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,ce,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,se,ce,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,ce,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(E.depthBuffer&&E.stencilBuffer){const ce=Ue(E);W&&le(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,t.DEPTH24_STENCIL8,E.width,E.height):le(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const ce=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ie=0;ie<ce.length;ie++){const se=ce[ie],be=s.convert(se.format,se.colorSpace),ye=s.convert(se.type),X=S(se.internalFormat,be,ye,se.colorSpace),Me=Ue(E);W&&le(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,X,E.width,E.height):le(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Me,X,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,X,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ee(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),B(E.depthTexture,0);const ce=i.get(E.depthTexture).__webglTexture,ie=Ue(E);if(E.depthTexture.format===wr)le(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ce,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ce,0);else if(E.depthTexture.format===Hs)le(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ce,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function Ce(A){const E=i.get(A),W=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Ee(E.__webglFramebuffer,A)}else if(W){E.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ce]),E.__webglDepthbuffer[ce]=t.createRenderbuffer(),re(E.__webglDepthbuffer[ce],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),re(E.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(A,E,W){const ce=i.get(A);E!==void 0&&oe(ce.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&Ce(A)}function Y(A){const E=A.texture,W=i.get(A),ce=i.get(E);A.addEventListener("dispose",D),A.isWebGLMultipleRenderTargets!==!0&&(ce.__webglTexture===void 0&&(ce.__webglTexture=t.createTexture()),ce.__version=E.version,a.memory.textures++);const ie=A.isWebGLCubeRenderTarget===!0,se=A.isWebGLMultipleRenderTargets===!0,be=m(A)||o;if(ie){W.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(o&&E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[ye]=[];for(let X=0;X<E.mipmaps.length;X++)W.__webglFramebuffer[ye][X]=t.createFramebuffer()}else W.__webglFramebuffer[ye]=t.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let ye=0;ye<E.mipmaps.length;ye++)W.__webglFramebuffer[ye]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(se)if(r.drawBuffers){const ye=A.texture;for(let X=0,Me=ye.length;X<Me;X++){const De=i.get(ye[X]);De.__webglTexture===void 0&&(De.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&le(A)===!1){const ye=se?E:[E];W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let X=0;X<ye.length;X++){const Me=ye[X];W.__webglColorRenderbuffer[X]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[X]);const De=s.convert(Me.format,Me.colorSpace),ue=s.convert(Me.type),qe=S(Me.internalFormat,De,ue,Me.colorSpace,A.isXRRenderTarget===!0),N=Ue(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,N,qe,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+X,t.RENDERBUFFER,W.__webglColorRenderbuffer[X])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),re(W.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ie){n.bindTexture(t.TEXTURE_CUBE_MAP,ce.__webglTexture),K(t.TEXTURE_CUBE_MAP,E,be);for(let ye=0;ye<6;ye++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let X=0;X<E.mipmaps.length;X++)oe(W.__webglFramebuffer[ye][X],A,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,X);else oe(W.__webglFramebuffer[ye],A,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);x(E,be)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(se){const ye=A.texture;for(let X=0,Me=ye.length;X<Me;X++){const De=ye[X],ue=i.get(De);n.bindTexture(t.TEXTURE_2D,ue.__webglTexture),K(t.TEXTURE_2D,De,be),oe(W.__webglFramebuffer,A,De,t.COLOR_ATTACHMENT0+X,t.TEXTURE_2D,0),x(De,be)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let ye=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?ye=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ye,ce.__webglTexture),K(ye,E,be),o&&E.mipmaps&&E.mipmaps.length>0)for(let X=0;X<E.mipmaps.length;X++)oe(W.__webglFramebuffer[X],A,E,t.COLOR_ATTACHMENT0,ye,X);else oe(W.__webglFramebuffer,A,E,t.COLOR_ATTACHMENT0,ye,0);x(E,be)&&v(ye),n.unbindTexture()}A.depthBuffer&&Ce(A)}function nt(A){const E=m(A)||o,W=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ce=0,ie=W.length;ce<ie;ce++){const se=W[ce];if(x(se,E)){const be=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ye=i.get(se).__webglTexture;n.bindTexture(be,ye),v(be),n.unbindTexture()}}}function Re(A){if(o&&A.samples>0&&le(A)===!1){const E=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],W=A.width,ce=A.height;let ie=t.COLOR_BUFFER_BIT;const se=[],be=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=i.get(A),X=A.isWebGLMultipleRenderTargets===!0;if(X)for(let Me=0;Me<E.length;Me++)n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Me=0;Me<E.length;Me++){se.push(t.COLOR_ATTACHMENT0+Me),A.depthBuffer&&se.push(be);const De=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(De===!1&&(A.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),X&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ye.__webglColorRenderbuffer[Me]),De===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[be]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[be])),X){const ue=i.get(E[Me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ue,0)}t.blitFramebuffer(0,0,W,ce,0,0,W,ce,ie,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,se)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),X)for(let Me=0;Me<E.length;Me++){n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,ye.__webglColorRenderbuffer[Me]);const De=i.get(E[Me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,De,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}}function Ue(A){return Math.min(r.maxSamples,A.samples)}function le(A){const E=i.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ve(A){const E=a.render.frame;d.get(A)!==E&&(d.set(A,E),A.update())}function Se(A,E){const W=A.colorSpace,ce=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Nd||W!==_i&&W!==An&&(it.getTransfer(W)===ot?o===!1?e.has("EXT_sRGB")===!0&&ce===jn?(A.format=Nd,A.minFilter=Tn,A.generateMipmaps=!1):E=X0.sRGBToLinear(E):(ce!==jn||ie!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}this.allocateTextureUnit=U,this.resetTextureUnits=Q,this.setTexture2D=B,this.setTexture2DArray=O,this.setTexture3D=L,this.setTextureCube=k,this.rebindTextures=Be,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=le}function wA(t,e,n){const i=n.isWebGL2;function r(s,a=An){let o;const l=it.getTransfer(a);if(s===qi)return t.UNSIGNED_BYTE;if(s===O0)return t.UNSIGNED_SHORT_4_4_4_4;if(s===F0)return t.UNSIGNED_SHORT_5_5_5_1;if(s===sE)return t.BYTE;if(s===aE)return t.SHORT;if(s===Fh)return t.UNSIGNED_SHORT;if(s===I0)return t.INT;if(s===Oi)return t.UNSIGNED_INT;if(s===Fi)return t.FLOAT;if(s===$a)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===oE)return t.ALPHA;if(s===jn)return t.RGBA;if(s===lE)return t.LUMINANCE;if(s===cE)return t.LUMINANCE_ALPHA;if(s===wr)return t.DEPTH_COMPONENT;if(s===Hs)return t.DEPTH_STENCIL;if(s===Nd)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===uE)return t.RED;if(s===k0)return t.RED_INTEGER;if(s===dE)return t.RG;if(s===z0)return t.RG_INTEGER;if(s===B0)return t.RGBA_INTEGER;if(s===Gc||s===Wc||s===Xc||s===$c)if(l===ot)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Gc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Wc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===$c)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Gc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Wc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===$c)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ap||s===Cp||s===Rp||s===Pp)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ap)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Cp)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Rp)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Pp)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===j0)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Np||s===Lp)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Np)return l===ot?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Lp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Dp||s===Up||s===Ip||s===Op||s===Fp||s===kp||s===zp||s===Bp||s===jp||s===Hp||s===Vp||s===Gp||s===Wp||s===Xp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Dp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Up)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ip)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Op)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Fp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===kp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===zp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Bp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===jp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Hp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Gp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Wp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Xp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Yc||s===$p||s===Yp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Yc)return l===ot?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===$p)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Yp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===hE||s===qp||s===Kp||s===Zp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Yc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===qp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Kp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Zp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Er?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class TA extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yr extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bA={type:"move"};class _u{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),h=this._getHandJoint(u,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const d=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],p=d.position.distanceTo(f.position),g=.02,_=.005;u.inputState.pinching&&p>g+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&p<=g-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bA)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new yr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class AA extends kr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,d=null,f=null,p=null,g=null,_=null;const y=n.getContextAttributes();let m=null,h=null;const x=[],v=[],S=new Ae;let C=null;const b=new bn;b.layers.enable(1),b.viewport=new Lt;const M=new bn;M.layers.enable(2),M.viewport=new Lt;const D=[b,M],T=new TA;T.layers.enable(1),T.layers.enable(2);let w=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let te=x[K];return te===void 0&&(te=new _u,x[K]=te),te.getTargetRaySpace()},this.getControllerGrip=function(K){let te=x[K];return te===void 0&&(te=new _u,x[K]=te),te.getGripSpace()},this.getHand=function(K){let te=x[K];return te===void 0&&(te=new _u,x[K]=te),te.getHandSpace()};function $(K){const te=v.indexOf(K.inputSource);if(te===-1)return;const ne=x[te];ne!==void 0&&(ne.update(K.inputSource,K.frame,u||a),ne.dispatchEvent({type:K.type,data:K.inputSource}))}function Q(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",U);for(let K=0;K<x.length;K++){const te=v[K];te!==null&&(v[K]=null,x[K].disconnect(te))}w=null,z=null,e.setRenderTarget(m),g=null,p=null,f=null,r=null,h=null,q.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(K){u=K},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",U),y.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const te={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),h=new Nr(g.framebufferWidth,g.framebufferHeight,{format:jn,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let te=null,ne=null,he=null;y.depth&&(he=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=y.stencil?Hs:wr,ne=y.stencil?Er:Oi);const oe={colorFormat:n.RGBA8,depthFormat:he,scaleFactor:s};f=new XRWebGLBinding(r,n),p=f.createProjectionLayer(oe),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),h=new Nr(p.textureWidth,p.textureHeight,{format:jn,type:qi,depthTexture:new s_(p.textureWidth,p.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const re=e.properties.get(h);re.__ignoreDepthValues=p.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),q.setContext(r),q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function U(K){for(let te=0;te<K.removed.length;te++){const ne=K.removed[te],he=v.indexOf(ne);he>=0&&(v[he]=null,x[he].disconnect(ne))}for(let te=0;te<K.added.length;te++){const ne=K.added[te];let he=v.indexOf(ne);if(he===-1){for(let re=0;re<x.length;re++)if(re>=v.length){v.push(ne),he=re;break}else if(v[re]===null){v[re]=ne,he=re;break}if(he===-1)break}const oe=x[he];oe&&oe.connect(ne)}}const H=new F,B=new F;function O(K,te,ne){H.setFromMatrixPosition(te.matrixWorld),B.setFromMatrixPosition(ne.matrixWorld);const he=H.distanceTo(B),oe=te.projectionMatrix.elements,re=ne.projectionMatrix.elements,Ee=oe[14]/(oe[10]-1),Ce=oe[14]/(oe[10]+1),Be=(oe[9]+1)/oe[5],Y=(oe[9]-1)/oe[5],nt=(oe[8]-1)/oe[0],Re=(re[8]+1)/re[0],Ue=Ee*nt,le=Ee*Re,ve=he/(-nt+Re),Se=ve*-nt;te.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Se),K.translateZ(ve),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const A=Ee+ve,E=Ce+ve,W=Ue-Se,ce=le+(he-Se),ie=Be*Ce/E*A,se=Y*Ce/E*A;K.projectionMatrix.makePerspective(W,ce,ie,se,A,E),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function L(K,te){te===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(te.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;T.near=M.near=b.near=K.near,T.far=M.far=b.far=K.far,(w!==T.near||z!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),w=T.near,z=T.far);const te=K.parent,ne=T.cameras;L(T,te);for(let he=0;he<ne.length;he++)L(ne[he],te);ne.length===2?O(T,b,M):T.projectionMatrix.copy(b.projectionMatrix),k(K,T,te)};function k(K,te,ne){ne===null?K.matrix.copy(te.matrixWorld):(K.matrix.copy(ne.matrixWorld),K.matrix.invert(),K.matrix.multiply(te.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ld*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(p===null&&g===null))return l},this.setFoveation=function(K){l=K,p!==null&&(p.fixedFoveation=K),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=K)};let G=null;function j(K,te){if(d=te.getViewerPose(u||a),_=te,d!==null){const ne=d.views;g!==null&&(e.setRenderTargetFramebuffer(h,g.framebuffer),e.setRenderTarget(h));let he=!1;ne.length!==T.cameras.length&&(T.cameras.length=0,he=!0);for(let oe=0;oe<ne.length;oe++){const re=ne[oe];let Ee=null;if(g!==null)Ee=g.getViewport(re);else{const Be=f.getViewSubImage(p,re);Ee=Be.viewport,oe===0&&(e.setRenderTargetTextures(h,Be.colorTexture,p.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(h))}let Ce=D[oe];Ce===void 0&&(Ce=new bn,Ce.layers.enable(oe),Ce.viewport=new Lt,D[oe]=Ce),Ce.matrix.fromArray(re.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(re.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),oe===0&&(T.matrix.copy(Ce.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),he===!0&&T.cameras.push(Ce)}}for(let ne=0;ne<x.length;ne++){const he=v[ne],oe=x[ne];he!==null&&oe!==void 0&&oe.update(he,te,u||a)}G&&G(K,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),_=null}const q=new i_;q.setAnimationLoop(j),this.setAnimationLoop=function(K){G=K},this.dispose=function(){}}}function CA(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,e_(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,x,v,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),d(m,h)):h.isMeshStandardMaterial?(s(m,h),p(m,h),h.isMeshPhysicalMaterial&&g(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),y(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,x,v):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===cn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===cn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const x=e.get(h).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*v,n(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,x,v){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*x,m.scale.value=v*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function p(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function g(m,h,x){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===cn&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){const x=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function RA(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const S=v.program;i.uniformBlockBinding(x,S)}function u(x,v){let S=r[x.id];S===void 0&&(_(x),S=d(x),r[x.id]=S,x.addEventListener("dispose",m));const C=v.program;i.updateUBOMapping(x,C);const b=e.render.frame;s[x.id]!==b&&(p(x),s[x.id]=b)}function d(x){const v=f();x.__bindingPointIndex=v;const S=t.createBuffer(),C=x.__size,b=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){const v=r[x.id],S=x.uniforms,C=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let b=0,M=S.length;b<M;b++){const D=Array.isArray(S[b])?S[b]:[S[b]];for(let T=0,w=D.length;T<w;T++){const z=D[T];if(g(z,b,T,C)===!0){const $=z.__offset,Q=Array.isArray(z.value)?z.value:[z.value];let U=0;for(let H=0;H<Q.length;H++){const B=Q[H],O=y(B);typeof B=="number"||typeof B=="boolean"?(z.__data[0]=B,t.bufferSubData(t.UNIFORM_BUFFER,$+U,z.__data)):B.isMatrix3?(z.__data[0]=B.elements[0],z.__data[1]=B.elements[1],z.__data[2]=B.elements[2],z.__data[3]=0,z.__data[4]=B.elements[3],z.__data[5]=B.elements[4],z.__data[6]=B.elements[5],z.__data[7]=0,z.__data[8]=B.elements[6],z.__data[9]=B.elements[7],z.__data[10]=B.elements[8],z.__data[11]=0):(B.toArray(z.__data,U),U+=O.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,$,z.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(x,v,S,C){const b=x.value,M=v+"_"+S;if(C[M]===void 0)return typeof b=="number"||typeof b=="boolean"?C[M]=b:C[M]=b.clone(),!0;{const D=C[M];if(typeof b=="number"||typeof b=="boolean"){if(D!==b)return C[M]=b,!0}else if(D.equals(b)===!1)return D.copy(b),!0}return!1}function _(x){const v=x.uniforms;let S=0;const C=16;for(let M=0,D=v.length;M<D;M++){const T=Array.isArray(v[M])?v[M]:[v[M]];for(let w=0,z=T.length;w<z;w++){const $=T[w],Q=Array.isArray($.value)?$.value:[$.value];for(let U=0,H=Q.length;U<H;U++){const B=Q[U],O=y(B),L=S%C;L!==0&&C-L<O.boundary&&(S+=C-L),$.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=S,S+=O.storage}}}const b=S%C;return b>0&&(S+=C-b),x.__size=S,x.__cache={},this}function y(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const x in r)t.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:u,dispose:h}}class d_{constructor(e={}){const{canvas:n=TE(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=a;const g=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const h=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this._useLegacyLights=!1,this.toneMapping=Yi,this.toneMappingExposure=1;const v=this;let S=!1,C=0,b=0,M=null,D=-1,T=null;const w=new Lt,z=new Lt;let $=null;const Q=new Ze(0);let U=0,H=n.width,B=n.height,O=1,L=null,k=null;const G=new Lt(0,0,H,B),j=new Lt(0,0,H,B);let q=!1;const K=new jh;let te=!1,ne=!1,he=null;const oe=new Mt,re=new Ae,Ee=new F,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Be(){return M===null?O:1}let Y=i;function nt(R,V){for(let J=0;J<R.length;J++){const ee=R[J],Z=n.getContext(ee,V);if(Z!==null)return Z}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Oh}`),n.addEventListener("webglcontextlost",ge,!1),n.addEventListener("webglcontextrestored",I,!1),n.addEventListener("webglcontextcreationerror",pe,!1),Y===null){const V=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&V.shift(),Y=nt(V,R),Y===null)throw nt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Re,Ue,le,ve,Se,A,E,W,ce,ie,se,be,ye,X,Me,De,ue,qe,N,ae,_e,fe,Pe,Ge;function Ke(){Re=new zT(Y),Ue=new DT(Y,Re,e),Re.init(Ue),fe=new wA(Y,Re,Ue),le=new MA(Y,Re,Ue),ve=new HT(Y),Se=new lA,A=new EA(Y,Re,le,Se,Ue,fe,ve),E=new IT(v),W=new kT(v),ce=new KE(Y,Ue),Pe=new NT(Y,Re,ce,Ue),ie=new BT(Y,ce,ve,Pe),se=new XT(Y,ie,ce,ve),N=new WT(Y,Ue,A),De=new UT(Se),be=new oA(v,E,W,Re,Ue,Pe,De),ye=new CA(v,Se),X=new uA,Me=new gA(Re,Ue),qe=new PT(v,E,W,le,se,p,l),ue=new SA(v,se,Ue),Ge=new RA(Y,ve,Ue,le),ae=new LT(Y,Re,ve,Ue),_e=new jT(Y,Re,ve,Ue),ve.programs=be.programs,v.capabilities=Ue,v.extensions=Re,v.properties=Se,v.renderLists=X,v.shadowMap=ue,v.state=le,v.info=ve}Ke();const He=new AA(v,Y);this.xr=He,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const R=Re.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Re.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(R){R!==void 0&&(O=R,this.setSize(H,B,!1))},this.getSize=function(R){return R.set(H,B)},this.setSize=function(R,V,J=!0){if(He.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=R,B=V,n.width=Math.floor(R*O),n.height=Math.floor(V*O),J===!0&&(n.style.width=R+"px",n.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(H*O,B*O).floor()},this.setDrawingBufferSize=function(R,V,J){H=R,B=V,O=J,n.width=Math.floor(R*J),n.height=Math.floor(V*J),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(w)},this.getViewport=function(R){return R.copy(G)},this.setViewport=function(R,V,J,ee){R.isVector4?G.set(R.x,R.y,R.z,R.w):G.set(R,V,J,ee),le.viewport(w.copy(G).multiplyScalar(O).floor())},this.getScissor=function(R){return R.copy(j)},this.setScissor=function(R,V,J,ee){R.isVector4?j.set(R.x,R.y,R.z,R.w):j.set(R,V,J,ee),le.scissor(z.copy(j).multiplyScalar(O).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(R){le.setScissorTest(q=R)},this.setOpaqueSort=function(R){L=R},this.setTransparentSort=function(R){k=R},this.getClearColor=function(R){return R.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(R=!0,V=!0,J=!0){let ee=0;if(R){let Z=!1;if(M!==null){const we=M.texture.format;Z=we===B0||we===z0||we===k0}if(Z){const we=M.texture.type,Le=we===qi||we===Oi||we===Fh||we===Er||we===O0||we===F0,Oe=qe.getClearColor(),Fe=qe.getClearAlpha(),Ve=Oe.r,ke=Oe.g,ze=Oe.b;Le?(g[0]=Ve,g[1]=ke,g[2]=ze,g[3]=Fe,Y.clearBufferuiv(Y.COLOR,0,g)):(_[0]=Ve,_[1]=ke,_[2]=ze,_[3]=Fe,Y.clearBufferiv(Y.COLOR,0,_))}else ee|=Y.COLOR_BUFFER_BIT}V&&(ee|=Y.DEPTH_BUFFER_BIT),J&&(ee|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ge,!1),n.removeEventListener("webglcontextrestored",I,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),X.dispose(),Me.dispose(),Se.dispose(),E.dispose(),W.dispose(),se.dispose(),Pe.dispose(),Ge.dispose(),be.dispose(),He.dispose(),He.removeEventListener("sessionstart",Yt),He.removeEventListener("sessionend",rt),he&&(he.dispose(),he=null),qt.stop()};function ge(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=ve.autoReset,V=ue.enabled,J=ue.autoUpdate,ee=ue.needsUpdate,Z=ue.type;Ke(),ve.autoReset=R,ue.enabled=V,ue.autoUpdate=J,ue.needsUpdate=ee,ue.type=Z}function pe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function me(R){const V=R.target;V.removeEventListener("dispose",me),Ie(V)}function Ie(R){Ne(R),Se.remove(R)}function Ne(R){const V=Se.get(R).programs;V!==void 0&&(V.forEach(function(J){be.releaseProgram(J)}),R.isShaderMaterial&&be.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,J,ee,Z,we){V===null&&(V=Ce);const Le=Z.isMesh&&Z.matrixWorld.determinant()<0,Oe=v_(R,V,J,ee,Z);le.setMaterial(ee,Le);let Fe=J.index,Ve=1;if(ee.wireframe===!0){if(Fe=ie.getWireframeAttribute(J),Fe===void 0)return;Ve=2}const ke=J.drawRange,ze=J.attributes.position;let _t=ke.start*Ve,un=(ke.start+ke.count)*Ve;we!==null&&(_t=Math.max(_t,we.start*Ve),un=Math.min(un,(we.start+we.count)*Ve)),Fe!==null?(_t=Math.max(_t,0),un=Math.min(un,Fe.count)):ze!=null&&(_t=Math.max(_t,0),un=Math.min(un,ze.count));const Ct=un-_t;if(Ct<0||Ct===1/0)return;Pe.setup(Z,ee,Oe,J,Fe);let ei,ut=ae;if(Fe!==null&&(ei=ce.get(Fe),ut=_e,ut.setIndex(ei)),Z.isMesh)ee.wireframe===!0?(le.setLineWidth(ee.wireframeLinewidth*Be()),ut.setMode(Y.LINES)):ut.setMode(Y.TRIANGLES);else if(Z.isLine){let We=ee.linewidth;We===void 0&&(We=1),le.setLineWidth(We*Be()),Z.isLineSegments?ut.setMode(Y.LINES):Z.isLineLoop?ut.setMode(Y.LINE_LOOP):ut.setMode(Y.LINE_STRIP)}else Z.isPoints?ut.setMode(Y.POINTS):Z.isSprite&&ut.setMode(Y.TRIANGLES);if(Z.isBatchedMesh)ut.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)ut.renderInstances(_t,Ct,Z.count);else if(J.isInstancedBufferGeometry){const We=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,dc=Math.min(J.instanceCount,We);ut.renderInstances(_t,Ct,dc)}else ut.render(_t,Ct)};function Qe(R,V,J){R.transparent===!0&&R.side===pn&&R.forceSinglePass===!1?(R.side=cn,R.needsUpdate=!0,ro(R,V,J),R.side=Qi,R.needsUpdate=!0,ro(R,V,J),R.side=pn):ro(R,V,J)}this.compile=function(R,V,J=null){J===null&&(J=R),m=Me.get(J),m.init(),x.push(m),J.traverseVisible(function(Z){Z.isLight&&Z.layers.test(V.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),R!==J&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(V.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),m.setupLights(v._useLegacyLights);const ee=new Set;return R.traverse(function(Z){const we=Z.material;if(we)if(Array.isArray(we))for(let Le=0;Le<we.length;Le++){const Oe=we[Le];Qe(Oe,J,Z),ee.add(Oe)}else Qe(we,J,Z),ee.add(we)}),x.pop(),m=null,ee},this.compileAsync=function(R,V,J=null){const ee=this.compile(R,V,J);return new Promise(Z=>{function we(){if(ee.forEach(function(Le){Se.get(Le).currentProgram.isReady()&&ee.delete(Le)}),ee.size===0){Z(R);return}setTimeout(we,10)}Re.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let et=null;function At(R){et&&et(R)}function Yt(){qt.stop()}function rt(){qt.start()}const qt=new i_;qt.setAnimationLoop(At),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(R){et=R,He.setAnimationLoop(R),R===null?qt.stop():qt.start()},He.addEventListener("sessionstart",Yt),He.addEventListener("sessionend",rt),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(He.cameraAutoUpdate===!0&&He.updateCamera(V),V=He.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,V,M),m=Me.get(R,x.length),m.init(),x.push(m),oe.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),K.setFromProjectionMatrix(oe),ne=this.localClippingEnabled,te=De.init(this.clippingPlanes,ne),y=X.get(R,h.length),y.init(),h.push(y),$n(R,V,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(L,k),this.info.render.frame++,te===!0&&De.beginShadows();const J=m.state.shadowsArray;if(ue.render(J,R,V),te===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset(),qe.render(y,R),m.setupLights(v._useLegacyLights),V.isArrayCamera){const ee=V.cameras;for(let Z=0,we=ee.length;Z<we;Z++){const Le=ee[Z];$h(y,R,Le,Le.viewport)}}else $h(y,R,V);M!==null&&(A.updateMultisampleRenderTarget(M),A.updateRenderTargetMipmap(M)),R.isScene===!0&&R.onAfterRender(v,R,V),Pe.resetDefaultState(),D=-1,T=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function $n(R,V,J,ee){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)J=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||K.intersectsSprite(R)){ee&&Ee.setFromMatrixPosition(R.matrixWorld).applyMatrix4(oe);const Le=se.update(R),Oe=R.material;Oe.visible&&y.push(R,Le,Oe,J,Ee.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||K.intersectsObject(R))){const Le=se.update(R),Oe=R.material;if(ee&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ee.copy(R.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Ee.copy(Le.boundingSphere.center)),Ee.applyMatrix4(R.matrixWorld).applyMatrix4(oe)),Array.isArray(Oe)){const Fe=Le.groups;for(let Ve=0,ke=Fe.length;Ve<ke;Ve++){const ze=Fe[Ve],_t=Oe[ze.materialIndex];_t&&_t.visible&&y.push(R,Le,_t,J,Ee.z,ze)}}else Oe.visible&&y.push(R,Le,Oe,J,Ee.z,null)}}const we=R.children;for(let Le=0,Oe=we.length;Le<Oe;Le++)$n(we[Le],V,J,ee)}function $h(R,V,J,ee){const Z=R.opaque,we=R.transmissive,Le=R.transparent;m.setupLightsView(J),te===!0&&De.setGlobalState(v.clippingPlanes,J),we.length>0&&g_(Z,we,V,J),ee&&le.viewport(w.copy(ee)),Z.length>0&&io(Z,V,J),we.length>0&&io(we,V,J),Le.length>0&&io(Le,V,J),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function g_(R,V,J,ee){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;const we=Ue.isWebGL2;he===null&&(he=new Nr(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")?$a:qi,minFilter:Xa,samples:we?4:0})),v.getDrawingBufferSize(re),we?he.setSize(re.x,re.y):he.setSize(Dd(re.x),Dd(re.y));const Le=v.getRenderTarget();v.setRenderTarget(he),v.getClearColor(Q),U=v.getClearAlpha(),U<1&&v.setClearColor(16777215,.5),v.clear();const Oe=v.toneMapping;v.toneMapping=Yi,io(R,J,ee),A.updateMultisampleRenderTarget(he),A.updateRenderTargetMipmap(he);let Fe=!1;for(let Ve=0,ke=V.length;Ve<ke;Ve++){const ze=V[Ve],_t=ze.object,un=ze.geometry,Ct=ze.material,ei=ze.group;if(Ct.side===pn&&_t.layers.test(ee.layers)){const ut=Ct.side;Ct.side=cn,Ct.needsUpdate=!0,Yh(_t,J,ee,un,Ct,ei),Ct.side=ut,Ct.needsUpdate=!0,Fe=!0}}Fe===!0&&(A.updateMultisampleRenderTarget(he),A.updateRenderTargetMipmap(he)),v.setRenderTarget(Le),v.setClearColor(Q,U),v.toneMapping=Oe}function io(R,V,J){const ee=V.isScene===!0?V.overrideMaterial:null;for(let Z=0,we=R.length;Z<we;Z++){const Le=R[Z],Oe=Le.object,Fe=Le.geometry,Ve=ee===null?Le.material:ee,ke=Le.group;Oe.layers.test(J.layers)&&Yh(Oe,V,J,Fe,Ve,ke)}}function Yh(R,V,J,ee,Z,we){R.onBeforeRender(v,V,J,ee,Z,we),R.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(v,V,J,ee,R,we),Z.transparent===!0&&Z.side===pn&&Z.forceSinglePass===!1?(Z.side=cn,Z.needsUpdate=!0,v.renderBufferDirect(J,V,ee,Z,R,we),Z.side=Qi,Z.needsUpdate=!0,v.renderBufferDirect(J,V,ee,Z,R,we),Z.side=pn):v.renderBufferDirect(J,V,ee,Z,R,we),R.onAfterRender(v,V,J,ee,Z,we)}function ro(R,V,J){V.isScene!==!0&&(V=Ce);const ee=Se.get(R),Z=m.state.lights,we=m.state.shadowsArray,Le=Z.state.version,Oe=be.getParameters(R,Z.state,we,V,J),Fe=be.getProgramCacheKey(Oe);let Ve=ee.programs;ee.environment=R.isMeshStandardMaterial?V.environment:null,ee.fog=V.fog,ee.envMap=(R.isMeshStandardMaterial?W:E).get(R.envMap||ee.environment),Ve===void 0&&(R.addEventListener("dispose",me),Ve=new Map,ee.programs=Ve);let ke=Ve.get(Fe);if(ke!==void 0){if(ee.currentProgram===ke&&ee.lightsStateVersion===Le)return Kh(R,Oe),ke}else Oe.uniforms=be.getUniforms(R),R.onBuild(J,Oe,v),R.onBeforeCompile(Oe,v),ke=be.acquireProgram(Oe,Fe),Ve.set(Fe,ke),ee.uniforms=Oe.uniforms;const ze=ee.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ze.clippingPlanes=De.uniform),Kh(R,Oe),ee.needsLights=x_(R),ee.lightsStateVersion=Le,ee.needsLights&&(ze.ambientLightColor.value=Z.state.ambient,ze.lightProbe.value=Z.state.probe,ze.directionalLights.value=Z.state.directional,ze.directionalLightShadows.value=Z.state.directionalShadow,ze.spotLights.value=Z.state.spot,ze.spotLightShadows.value=Z.state.spotShadow,ze.rectAreaLights.value=Z.state.rectArea,ze.ltc_1.value=Z.state.rectAreaLTC1,ze.ltc_2.value=Z.state.rectAreaLTC2,ze.pointLights.value=Z.state.point,ze.pointLightShadows.value=Z.state.pointShadow,ze.hemisphereLights.value=Z.state.hemi,ze.directionalShadowMap.value=Z.state.directionalShadowMap,ze.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,ze.spotShadowMap.value=Z.state.spotShadowMap,ze.spotLightMatrix.value=Z.state.spotLightMatrix,ze.spotLightMap.value=Z.state.spotLightMap,ze.pointShadowMap.value=Z.state.pointShadowMap,ze.pointShadowMatrix.value=Z.state.pointShadowMatrix),ee.currentProgram=ke,ee.uniformsList=null,ke}function qh(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=ll.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function Kh(R,V){const J=Se.get(R);J.outputColorSpace=V.outputColorSpace,J.batching=V.batching,J.instancing=V.instancing,J.instancingColor=V.instancingColor,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function v_(R,V,J,ee,Z){V.isScene!==!0&&(V=Ce),A.resetTextureUnits();const we=V.fog,Le=ee.isMeshStandardMaterial?V.environment:null,Oe=M===null?v.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:_i,Fe=(ee.isMeshStandardMaterial?W:E).get(ee.envMap||Le),Ve=ee.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ke=!!J.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),ze=!!J.morphAttributes.position,_t=!!J.morphAttributes.normal,un=!!J.morphAttributes.color;let Ct=Yi;ee.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Ct=v.toneMapping);const ei=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ut=ei!==void 0?ei.length:0,We=Se.get(ee),dc=m.state.lights;if(te===!0&&(ne===!0||R!==T)){const Sn=R===T&&ee.id===D;De.setState(ee,R,Sn)}let pt=!1;ee.version===We.__version?(We.needsLights&&We.lightsStateVersion!==dc.state.version||We.outputColorSpace!==Oe||Z.isBatchedMesh&&We.batching===!1||!Z.isBatchedMesh&&We.batching===!0||Z.isInstancedMesh&&We.instancing===!1||!Z.isInstancedMesh&&We.instancing===!0||Z.isSkinnedMesh&&We.skinning===!1||!Z.isSkinnedMesh&&We.skinning===!0||Z.isInstancedMesh&&We.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&We.instancingColor===!1&&Z.instanceColor!==null||We.envMap!==Fe||ee.fog===!0&&We.fog!==we||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==De.numPlanes||We.numIntersection!==De.numIntersection)||We.vertexAlphas!==Ve||We.vertexTangents!==ke||We.morphTargets!==ze||We.morphNormals!==_t||We.morphColors!==un||We.toneMapping!==Ct||Ue.isWebGL2===!0&&We.morphTargetsCount!==ut)&&(pt=!0):(pt=!0,We.__version=ee.version);let rr=We.currentProgram;pt===!0&&(rr=ro(ee,V,Z));let Zh=!1,Ks=!1,hc=!1;const Bt=rr.getUniforms(),sr=We.uniforms;if(le.useProgram(rr.program)&&(Zh=!0,Ks=!0,hc=!0),ee.id!==D&&(D=ee.id,Ks=!0),Zh||T!==R){Bt.setValue(Y,"projectionMatrix",R.projectionMatrix),Bt.setValue(Y,"viewMatrix",R.matrixWorldInverse);const Sn=Bt.map.cameraPosition;Sn!==void 0&&Sn.setValue(Y,Ee.setFromMatrixPosition(R.matrixWorld)),Ue.logarithmicDepthBuffer&&Bt.setValue(Y,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Bt.setValue(Y,"isOrthographic",R.isOrthographicCamera===!0),T!==R&&(T=R,Ks=!0,hc=!0)}if(Z.isSkinnedMesh){Bt.setOptional(Y,Z,"bindMatrix"),Bt.setOptional(Y,Z,"bindMatrixInverse");const Sn=Z.skeleton;Sn&&(Ue.floatVertexTextures?(Sn.boneTexture===null&&Sn.computeBoneTexture(),Bt.setValue(Y,"boneTexture",Sn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Z.isBatchedMesh&&(Bt.setOptional(Y,Z,"batchingTexture"),Bt.setValue(Y,"batchingTexture",Z._matricesTexture,A));const fc=J.morphAttributes;if((fc.position!==void 0||fc.normal!==void 0||fc.color!==void 0&&Ue.isWebGL2===!0)&&N.update(Z,J,rr),(Ks||We.receiveShadow!==Z.receiveShadow)&&(We.receiveShadow=Z.receiveShadow,Bt.setValue(Y,"receiveShadow",Z.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(sr.envMap.value=Fe,sr.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Ks&&(Bt.setValue(Y,"toneMappingExposure",v.toneMappingExposure),We.needsLights&&__(sr,hc),we&&ee.fog===!0&&ye.refreshFogUniforms(sr,we),ye.refreshMaterialUniforms(sr,ee,O,B,he),ll.upload(Y,qh(We),sr,A)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(ll.upload(Y,qh(We),sr,A),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Bt.setValue(Y,"center",Z.center),Bt.setValue(Y,"modelViewMatrix",Z.modelViewMatrix),Bt.setValue(Y,"normalMatrix",Z.normalMatrix),Bt.setValue(Y,"modelMatrix",Z.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Sn=ee.uniformsGroups;for(let pc=0,y_=Sn.length;pc<y_;pc++)if(Ue.isWebGL2){const Jh=Sn[pc];Ge.update(Jh,rr),Ge.bind(Jh,rr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return rr}function __(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function x_(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(R,V,J){Se.get(R.texture).__webglTexture=V,Se.get(R.depthTexture).__webglTexture=J;const ee=Se.get(R);ee.__hasExternalTextures=!0,ee.__hasExternalTextures&&(ee.__autoAllocateDepthBuffer=J===void 0,ee.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,V){const J=Se.get(R);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,J=0){M=R,C=V,b=J;let ee=!0,Z=null,we=!1,Le=!1;if(R){const Fe=Se.get(R);Fe.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(Y.FRAMEBUFFER,null),ee=!1):Fe.__webglFramebuffer===void 0?A.setupRenderTarget(R):Fe.__hasExternalTextures&&A.rebindTextures(R,Se.get(R.texture).__webglTexture,Se.get(R.depthTexture).__webglTexture);const Ve=R.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Le=!0);const ke=Se.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ke[V])?Z=ke[V][J]:Z=ke[V],we=!0):Ue.isWebGL2&&R.samples>0&&A.useMultisampledRTT(R)===!1?Z=Se.get(R).__webglMultisampledFramebuffer:Array.isArray(ke)?Z=ke[J]:Z=ke,w.copy(R.viewport),z.copy(R.scissor),$=R.scissorTest}else w.copy(G).multiplyScalar(O).floor(),z.copy(j).multiplyScalar(O).floor(),$=q;if(le.bindFramebuffer(Y.FRAMEBUFFER,Z)&&Ue.drawBuffers&&ee&&le.drawBuffers(R,Z),le.viewport(w),le.scissor(z),le.setScissorTest($),we){const Fe=Se.get(R.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+V,Fe.__webglTexture,J)}else if(Le){const Fe=Se.get(R.texture),Ve=V||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Fe.__webglTexture,J||0,Ve)}D=-1},this.readRenderTargetPixels=function(R,V,J,ee,Z,we,Le){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Se.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(Oe=Oe[Le]),Oe){le.bindFramebuffer(Y.FRAMEBUFFER,Oe);try{const Fe=R.texture,Ve=Fe.format,ke=Fe.type;if(Ve!==jn&&fe.convert(Ve)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=ke===$a&&(Re.has("EXT_color_buffer_half_float")||Ue.isWebGL2&&Re.has("EXT_color_buffer_float"));if(ke!==qi&&fe.convert(ke)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===Fi&&(Ue.isWebGL2||Re.has("OES_texture_float")||Re.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-ee&&J>=0&&J<=R.height-Z&&Y.readPixels(V,J,ee,Z,fe.convert(Ve),fe.convert(ke),we)}finally{const Fe=M!==null?Se.get(M).__webglFramebuffer:null;le.bindFramebuffer(Y.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(R,V,J=0){const ee=Math.pow(2,-J),Z=Math.floor(V.image.width*ee),we=Math.floor(V.image.height*ee);A.setTexture2D(V,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,J,0,0,R.x,R.y,Z,we),le.unbindTexture()},this.copyTextureToTexture=function(R,V,J,ee=0){const Z=V.image.width,we=V.image.height,Le=fe.convert(J.format),Oe=fe.convert(J.type);A.setTexture2D(J,0),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,J.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,J.unpackAlignment),V.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,ee,R.x,R.y,Z,we,Le,Oe,V.image.data):V.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,ee,R.x,R.y,V.mipmaps[0].width,V.mipmaps[0].height,Le,V.mipmaps[0].data):Y.texSubImage2D(Y.TEXTURE_2D,ee,R.x,R.y,Le,Oe,V.image),ee===0&&J.generateMipmaps&&Y.generateMipmap(Y.TEXTURE_2D),le.unbindTexture()},this.copyTextureToTexture3D=function(R,V,J,ee,Z=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=R.max.x-R.min.x+1,Le=R.max.y-R.min.y+1,Oe=R.max.z-R.min.z+1,Fe=fe.convert(ee.format),Ve=fe.convert(ee.type);let ke;if(ee.isData3DTexture)A.setTexture3D(ee,0),ke=Y.TEXTURE_3D;else if(ee.isDataArrayTexture||ee.isCompressedArrayTexture)A.setTexture2DArray(ee,0),ke=Y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,ee.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,ee.unpackAlignment);const ze=Y.getParameter(Y.UNPACK_ROW_LENGTH),_t=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),un=Y.getParameter(Y.UNPACK_SKIP_PIXELS),Ct=Y.getParameter(Y.UNPACK_SKIP_ROWS),ei=Y.getParameter(Y.UNPACK_SKIP_IMAGES),ut=J.isCompressedTexture?J.mipmaps[Z]:J.image;Y.pixelStorei(Y.UNPACK_ROW_LENGTH,ut.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,ut.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,R.min.x),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,R.min.y),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,R.min.z),J.isDataTexture||J.isData3DTexture?Y.texSubImage3D(ke,Z,V.x,V.y,V.z,we,Le,Oe,Fe,Ve,ut.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(ke,Z,V.x,V.y,V.z,we,Le,Oe,Fe,ut.data)):Y.texSubImage3D(ke,Z,V.x,V.y,V.z,we,Le,Oe,Fe,Ve,ut),Y.pixelStorei(Y.UNPACK_ROW_LENGTH,ze),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,_t),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,un),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,Ct),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,ei),Z===0&&ee.generateMipmaps&&Y.generateMipmap(ke),le.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?A.setTextureCube(R,0):R.isData3DTexture?A.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?A.setTexture2DArray(R,0):A.setTexture2D(R,0),le.unbindTexture()},this.resetState=function(){C=0,b=0,M=null,le.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===kh?"display-p3":"srgb",n.unpackColorSpace=it.workingColorSpace===lc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===It?Tr:H0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Tr?It:_i}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class PA extends d_{}PA.prototype.isWebGL1Renderer=!0;let NA=class extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}};class yi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let a;n?a=n:a=e*i[s-1];let o=0,l=s-1,u;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),u=i[r]-a,u<0)o=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const d=i[r],p=i[r+1]-d,g=(a-d)/p;return(r+g)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=n||(a.isVector2?new Ae:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new F,r=[],s=[],a=[],o=new F,l=new Mt;for(let g=0;g<=e;g++){const _=g/e;r[g]=this.getTangentAt(_,new F)}s[0]=new F,a[0]=new F;let u=Number.MAX_VALUE;const d=Math.abs(r[0].x),f=Math.abs(r[0].y),p=Math.abs(r[0].z);d<=u&&(u=d,i.set(1,0,0)),f<=u&&(u=f,i.set(0,1,0)),p<=u&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),a[g]=a[g-1].clone(),o.crossVectors(r[g-1],r[g]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Ot(r[g-1].dot(r[g]),-1,1));s[g].applyMatrix4(l.makeRotationAxis(o,_))}a[g].crossVectors(r[g],s[g])}if(n===!0){let g=Math.acos(Ot(s[0].dot(s[e]),-1,1));g/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(g=-g);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],g*_)),a[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class h_ extends yi{constructor(e=0,n=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,n){const i=n||new Ae,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),u=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=l-this.aX,g=u-this.aY;l=p*d-g*f+this.aX,u=p*f+g*d+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class LA extends h_{constructor(e,n,i,r,s,a){super(e,n,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Gh(){let t=0,e=0,n=0,i=0;function r(s,a,o,l){t=s,e=o,n=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,u){r(a,o,u*(o-s),u*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,u,d,f){let p=(a-s)/u-(o-s)/(u+d)+(o-a)/d,g=(o-a)/d-(l-a)/(d+f)+(l-o)/f;p*=d,g*=d,r(a,o,p,g)},calc:function(s){const a=s*s,o=a*s;return t+e*s+n*a+i*o}}}const Xo=new F,xu=new Gh,yu=new Gh,Su=new Gh;class jl extends yi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new F){const i=n,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let u,d;this.closed||o>0?u=r[(o-1)%s]:(Xo.subVectors(r[0],r[1]).add(r[0]),u=Xo);const f=r[o%s],p=r[(o+1)%s];if(this.closed||o+2<s?d=r[(o+2)%s]:(Xo.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=Xo),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let _=Math.pow(u.distanceToSquared(f),g),y=Math.pow(f.distanceToSquared(p),g),m=Math.pow(p.distanceToSquared(d),g);y<1e-4&&(y=1),_<1e-4&&(_=y),m<1e-4&&(m=y),xu.initNonuniformCatmullRom(u.x,f.x,p.x,d.x,_,y,m),yu.initNonuniformCatmullRom(u.y,f.y,p.y,d.y,_,y,m),Su.initNonuniformCatmullRom(u.z,f.z,p.z,d.z,_,y,m)}else this.curveType==="catmullrom"&&(xu.initCatmullRom(u.x,f.x,p.x,d.x,this.tension),yu.initCatmullRom(u.y,f.y,p.y,d.y,this.tension),Su.initCatmullRom(u.z,f.z,p.z,d.z,this.tension));return i.set(xu.calc(l),yu.calc(l),Su.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new F().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Bm(t,e,n,i,r){const s=(i-e)*.5,a=(r-n)*.5,o=t*t,l=t*o;return(2*n-2*i+s+a)*l+(-3*n+3*i-2*s-a)*o+s*t+n}function DA(t,e){const n=1-t;return n*n*e}function UA(t,e){return 2*(1-t)*t*e}function IA(t,e){return t*t*e}function Ta(t,e,n,i){return DA(t,e)+UA(t,n)+IA(t,i)}function OA(t,e){const n=1-t;return n*n*n*e}function FA(t,e){const n=1-t;return 3*n*n*t*e}function kA(t,e){return 3*(1-t)*t*t*e}function zA(t,e){return t*t*t*e}function ba(t,e,n,i,r){return OA(t,e)+FA(t,n)+kA(t,i)+zA(t,r)}class BA extends yi{constructor(e=new Ae,n=new Ae,i=new Ae,r=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Ae){const i=n,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ba(e,r.x,s.x,a.x,o.x),ba(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class jA extends yi{constructor(e=new F,n=new F,i=new F,r=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new F){const i=n,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ba(e,r.x,s.x,a.x,o.x),ba(e,r.y,s.y,a.y,o.y),ba(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class HA extends yi{constructor(e=new Ae,n=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Ae){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Ae){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class VA extends yi{constructor(e=new F,n=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new F){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new F){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class GA extends yi{constructor(e=new Ae,n=new Ae,i=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Ae){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(Ta(e,r.x,s.x,a.x),Ta(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class f_ extends yi{constructor(e=new F,n=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new F){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(Ta(e,r.x,s.x,a.x),Ta(e,r.y,s.y,a.y),Ta(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class WA extends yi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Ae){const i=n,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],u=r[a],d=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return i.set(Bm(o,l.x,u.x,d.x,f.x),Bm(o,l.y,u.y,d.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Ae().fromArray(r))}return this}}var XA=Object.freeze({__proto__:null,ArcCurve:LA,CatmullRomCurve3:jl,CubicBezierCurve:BA,CubicBezierCurve3:jA,EllipseCurve:h_,LineCurve:HA,LineCurve3:VA,QuadraticBezierCurve:GA,QuadraticBezierCurve3:f_,SplineCurve:WA});class Wh extends Xn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],a=[],o=[],l=[],u=new F,d=new Ae;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,p=3;f<=n;f++,p+=3){const g=i+f/n*r;u.x=e*Math.cos(g),u.y=e*Math.sin(g),a.push(u.x,u.y,u.z),o.push(0,0,1),d.x=(a[p]/e+1)/2,d.y=(a[p+1]/e+1)/2,l.push(d.x,d.y)}for(let f=1;f<=n;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Xt(a,3)),this.setAttribute("normal",new Xt(o,3)),this.setAttribute("uv",new Xt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ss extends Xn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let u=0;const d=[],f=new F,p=new F,g=[],_=[],y=[],m=[];for(let h=0;h<=i;h++){const x=[],v=h/i;let S=0;h===0&&a===0?S=.5/n:h===i&&l===Math.PI&&(S=-.5/n);for(let C=0;C<=n;C++){const b=C/n;f.x=-e*Math.cos(r+b*s)*Math.sin(a+v*o),f.y=e*Math.cos(a+v*o),f.z=e*Math.sin(r+b*s)*Math.sin(a+v*o),_.push(f.x,f.y,f.z),p.copy(f).normalize(),y.push(p.x,p.y,p.z),m.push(b+S,1-v),x.push(u++)}d.push(x)}for(let h=0;h<i;h++)for(let x=0;x<n;x++){const v=d[h][x+1],S=d[h][x],C=d[h+1][x],b=d[h+1][x+1];(h!==0||a>0)&&g.push(v,S,b),(h!==i-1||l<Math.PI)&&g.push(S,C,b)}this.setIndex(g),this.setAttribute("position",new Xt(_,3)),this.setAttribute("normal",new Xt(y,3)),this.setAttribute("uv",new Xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xh extends Xn{constructor(e=new f_(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const a=e.computeFrenetFrames(n,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new F,l=new F,u=new Ae;let d=new F;const f=[],p=[],g=[],_=[];y(),this.setIndex(_),this.setAttribute("position",new Xt(f,3)),this.setAttribute("normal",new Xt(p,3)),this.setAttribute("uv",new Xt(g,2));function y(){for(let v=0;v<n;v++)m(v);m(s===!1?n:0),x(),h()}function m(v){d=e.getPointAt(v/n,d);const S=a.normals[v],C=a.binormals[v];for(let b=0;b<=r;b++){const M=b/r*Math.PI*2,D=Math.sin(M),T=-Math.cos(M);l.x=T*S.x+D*C.x,l.y=T*S.y+D*C.y,l.z=T*S.z+D*C.z,l.normalize(),p.push(l.x,l.y,l.z),o.x=d.x+i*l.x,o.y=d.y+i*l.y,o.z=d.z+i*l.z,f.push(o.x,o.y,o.z)}}function h(){for(let v=1;v<=n;v++)for(let S=1;S<=r;S++){const C=(r+1)*(v-1)+(S-1),b=(r+1)*v+(S-1),M=(r+1)*v+S,D=(r+1)*(v-1)+S;_.push(C,b,D),_.push(b,M,D)}}function x(){for(let v=0;v<=n;v++)for(let S=0;S<=r;S++)u.x=v/n,u.y=S/r,g.push(u.x,u.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Xh(new XA[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class rs extends no{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=V0,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class p_ extends kt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class $A extends p_{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Mu=new Mt,jm=new F,Hm=new F;class YA{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jh,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;jm.setFromMatrixPosition(e.matrixWorld),n.position.copy(jm),Hm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Hm),n.updateMatrixWorld(),Mu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Mu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qA extends YA{constructor(){super(new r_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Eu extends p_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new qA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Vm{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ot(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oh);const Gm={type:"change"},wu={type:"start"},Wm={type:"end"},$o=new q0,Xm=new Pi,KA=Math.cos(70*wE.DEG2RAD);class ZA extends kr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Br.ROTATE,MIDDLE:Br.DOLLY,RIGHT:Br.PAN},this.touches={ONE:jr.ROTATE,TWO:jr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",se),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",se),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Gm),i.update(),s=r.NONE},this.update=function(){const N=new F,ae=new Lr().setFromUnitVectors(e.up,new F(0,1,0)),_e=ae.clone().invert(),fe=new F,Pe=new Lr,Ge=new F,Ke=2*Math.PI;return function(ge=null){const I=i.object.position;N.copy(I).sub(i.target),N.applyQuaternion(ae),o.setFromVector3(N),i.autoRotate&&s===r.NONE&&z(T(ge)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let pe=i.minAzimuthAngle,me=i.maxAzimuthAngle;isFinite(pe)&&isFinite(me)&&(pe<-Math.PI?pe+=Ke:pe>Math.PI&&(pe-=Ke),me<-Math.PI?me+=Ke:me>Math.PI&&(me-=Ke),pe<=me?o.theta=Math.max(pe,Math.min(me,o.theta)):o.theta=o.theta>(pe+me)/2?Math.max(pe,o.theta):Math.min(me,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(d,i.dampingFactor):i.target.add(d),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&b||i.object.isOrthographicCamera?o.radius=k(o.radius):o.radius=k(o.radius*u),N.setFromSpherical(o),N.applyQuaternion(_e),I.copy(i.target).add(N),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,d.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),d.set(0,0,0));let Ie=!1;if(i.zoomToCursor&&b){let Ne=null;if(i.object.isPerspectiveCamera){const Qe=N.length();Ne=k(Qe*u);const et=Qe-Ne;i.object.position.addScaledVector(S,et),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Qe=new F(C.x,C.y,0);Qe.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),Ie=!0;const et=new F(C.x,C.y,0);et.unproject(i.object),i.object.position.sub(et).add(Qe),i.object.updateMatrixWorld(),Ne=N.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Ne!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Ne).add(i.object.position):($o.origin.copy(i.object.position),$o.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot($o.direction))<KA?e.lookAt(i.target):(Xm.setFromNormalAndCoplanarPoint(i.object.up,i.target),$o.intersectPlane(Xm,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),Ie=!0);return u=1,b=!1,Ie||fe.distanceToSquared(i.object.position)>a||8*(1-Pe.dot(i.object.quaternion))>a||Ge.distanceToSquared(i.target)>0?(i.dispatchEvent(Gm),fe.copy(i.object.position),Pe.copy(i.object.quaternion),Ge.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",X),i.domElement.removeEventListener("pointerdown",Se),i.domElement.removeEventListener("pointercancel",E),i.domElement.removeEventListener("wheel",ie),i.domElement.removeEventListener("pointermove",A),i.domElement.removeEventListener("pointerup",E),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",se),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Vm,l=new Vm;let u=1;const d=new F,f=new Ae,p=new Ae,g=new Ae,_=new Ae,y=new Ae,m=new Ae,h=new Ae,x=new Ae,v=new Ae,S=new F,C=new Ae;let b=!1;const M=[],D={};function T(N){return N!==null?2*Math.PI/60*i.autoRotateSpeed*N:2*Math.PI/60/60*i.autoRotateSpeed}function w(N){const ae=Math.abs(N)/(100*(window.devicePixelRatio|0));return Math.pow(.95,i.zoomSpeed*ae)}function z(N){l.theta-=N}function $(N){l.phi-=N}const Q=function(){const N=new F;return function(_e,fe){N.setFromMatrixColumn(fe,0),N.multiplyScalar(-_e),d.add(N)}}(),U=function(){const N=new F;return function(_e,fe){i.screenSpacePanning===!0?N.setFromMatrixColumn(fe,1):(N.setFromMatrixColumn(fe,0),N.crossVectors(i.object.up,N)),N.multiplyScalar(_e),d.add(N)}}(),H=function(){const N=new F;return function(_e,fe){const Pe=i.domElement;if(i.object.isPerspectiveCamera){const Ge=i.object.position;N.copy(Ge).sub(i.target);let Ke=N.length();Ke*=Math.tan(i.object.fov/2*Math.PI/180),Q(2*_e*Ke/Pe.clientHeight,i.object.matrix),U(2*fe*Ke/Pe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Q(_e*(i.object.right-i.object.left)/i.object.zoom/Pe.clientWidth,i.object.matrix),U(fe*(i.object.top-i.object.bottom)/i.object.zoom/Pe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function B(N){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function O(N){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function L(N,ae){if(!i.zoomToCursor)return;b=!0;const _e=i.domElement.getBoundingClientRect(),fe=N-_e.left,Pe=ae-_e.top,Ge=_e.width,Ke=_e.height;C.x=fe/Ge*2-1,C.y=-(Pe/Ke)*2+1,S.set(C.x,C.y,1).unproject(i.object).sub(i.object.position).normalize()}function k(N){return Math.max(i.minDistance,Math.min(i.maxDistance,N))}function G(N){f.set(N.clientX,N.clientY)}function j(N){L(N.clientX,N.clientX),h.set(N.clientX,N.clientY)}function q(N){_.set(N.clientX,N.clientY)}function K(N){p.set(N.clientX,N.clientY),g.subVectors(p,f).multiplyScalar(i.rotateSpeed);const ae=i.domElement;z(2*Math.PI*g.x/ae.clientHeight),$(2*Math.PI*g.y/ae.clientHeight),f.copy(p),i.update()}function te(N){x.set(N.clientX,N.clientY),v.subVectors(x,h),v.y>0?B(w(v.y)):v.y<0&&O(w(v.y)),h.copy(x),i.update()}function ne(N){y.set(N.clientX,N.clientY),m.subVectors(y,_).multiplyScalar(i.panSpeed),H(m.x,m.y),_.copy(y),i.update()}function he(N){L(N.clientX,N.clientY),N.deltaY<0?O(w(N.deltaY)):N.deltaY>0&&B(w(N.deltaY)),i.update()}function oe(N){let ae=!1;switch(N.code){case i.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?$(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,i.keyPanSpeed),ae=!0;break;case i.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?$(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,-i.keyPanSpeed),ae=!0;break;case i.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?z(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(i.keyPanSpeed,0),ae=!0;break;case i.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?z(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(-i.keyPanSpeed,0),ae=!0;break}ae&&(N.preventDefault(),i.update())}function re(N){if(M.length===1)f.set(N.pageX,N.pageY);else{const ae=qe(N),_e=.5*(N.pageX+ae.x),fe=.5*(N.pageY+ae.y);f.set(_e,fe)}}function Ee(N){if(M.length===1)_.set(N.pageX,N.pageY);else{const ae=qe(N),_e=.5*(N.pageX+ae.x),fe=.5*(N.pageY+ae.y);_.set(_e,fe)}}function Ce(N){const ae=qe(N),_e=N.pageX-ae.x,fe=N.pageY-ae.y,Pe=Math.sqrt(_e*_e+fe*fe);h.set(0,Pe)}function Be(N){i.enableZoom&&Ce(N),i.enablePan&&Ee(N)}function Y(N){i.enableZoom&&Ce(N),i.enableRotate&&re(N)}function nt(N){if(M.length==1)p.set(N.pageX,N.pageY);else{const _e=qe(N),fe=.5*(N.pageX+_e.x),Pe=.5*(N.pageY+_e.y);p.set(fe,Pe)}g.subVectors(p,f).multiplyScalar(i.rotateSpeed);const ae=i.domElement;z(2*Math.PI*g.x/ae.clientHeight),$(2*Math.PI*g.y/ae.clientHeight),f.copy(p)}function Re(N){if(M.length===1)y.set(N.pageX,N.pageY);else{const ae=qe(N),_e=.5*(N.pageX+ae.x),fe=.5*(N.pageY+ae.y);y.set(_e,fe)}m.subVectors(y,_).multiplyScalar(i.panSpeed),H(m.x,m.y),_.copy(y)}function Ue(N){const ae=qe(N),_e=N.pageX-ae.x,fe=N.pageY-ae.y,Pe=Math.sqrt(_e*_e+fe*fe);x.set(0,Pe),v.set(0,Math.pow(x.y/h.y,i.zoomSpeed)),B(v.y),h.copy(x);const Ge=(N.pageX+ae.x)*.5,Ke=(N.pageY+ae.y)*.5;L(Ge,Ke)}function le(N){i.enableZoom&&Ue(N),i.enablePan&&Re(N)}function ve(N){i.enableZoom&&Ue(N),i.enableRotate&&nt(N)}function Se(N){i.enabled!==!1&&(M.length===0&&(i.domElement.setPointerCapture(N.pointerId),i.domElement.addEventListener("pointermove",A),i.domElement.addEventListener("pointerup",E)),Me(N),N.pointerType==="touch"?be(N):W(N))}function A(N){i.enabled!==!1&&(N.pointerType==="touch"?ye(N):ce(N))}function E(N){De(N),M.length===0&&(i.domElement.releasePointerCapture(N.pointerId),i.domElement.removeEventListener("pointermove",A),i.domElement.removeEventListener("pointerup",E)),i.dispatchEvent(Wm),s=r.NONE}function W(N){let ae;switch(N.button){case 0:ae=i.mouseButtons.LEFT;break;case 1:ae=i.mouseButtons.MIDDLE;break;case 2:ae=i.mouseButtons.RIGHT;break;default:ae=-1}switch(ae){case Br.DOLLY:if(i.enableZoom===!1)return;j(N),s=r.DOLLY;break;case Br.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(i.enablePan===!1)return;q(N),s=r.PAN}else{if(i.enableRotate===!1)return;G(N),s=r.ROTATE}break;case Br.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(i.enableRotate===!1)return;G(N),s=r.ROTATE}else{if(i.enablePan===!1)return;q(N),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(wu)}function ce(N){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;K(N);break;case r.DOLLY:if(i.enableZoom===!1)return;te(N);break;case r.PAN:if(i.enablePan===!1)return;ne(N);break}}function ie(N){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(N.preventDefault(),i.dispatchEvent(wu),he(N),i.dispatchEvent(Wm))}function se(N){i.enabled===!1||i.enablePan===!1||oe(N)}function be(N){switch(ue(N),M.length){case 1:switch(i.touches.ONE){case jr.ROTATE:if(i.enableRotate===!1)return;re(N),s=r.TOUCH_ROTATE;break;case jr.PAN:if(i.enablePan===!1)return;Ee(N),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case jr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Be(N),s=r.TOUCH_DOLLY_PAN;break;case jr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Y(N),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(wu)}function ye(N){switch(ue(N),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;nt(N),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Re(N),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;le(N),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ve(N),i.update();break;default:s=r.NONE}}function X(N){i.enabled!==!1&&N.preventDefault()}function Me(N){M.push(N.pointerId)}function De(N){delete D[N.pointerId];for(let ae=0;ae<M.length;ae++)if(M[ae]==N.pointerId){M.splice(ae,1);return}}function ue(N){let ae=D[N.pointerId];ae===void 0&&(ae=new Ae,D[N.pointerId]=ae),ae.set(N.pageX,N.pageY)}function qe(N){const ae=N.pointerId===M[0]?M[1]:M[0];return D[ae]}i.domElement.addEventListener("contextmenu",X),i.domElement.addEventListener("pointerdown",Se),i.domElement.addEventListener("pointercancel",E),i.domElement.addEventListener("wheel",ie,{passive:!1}),this.update()}}const Ms=.0254,Ki=Math.PI*2,ss=56,JA=["tops","tshirt","shirt","kurta","blouse","blazer","jeans"];function QA(t){const e=2+5*((t.p_loose||0)-(t.p_tight||0));return Math.max(-1,Math.min(7,e))}function eC(t){return t.p_tight>=.5?{key:"tight",text:"Likely too tight",color:"#d64550"}:t.p_loose>=.5?{key:"loose",text:"Likely too loose",color:"#8a6fd1"}:{key:"fit",text:"Likely fits",color:"#1f9d6e"}}const ua=(t,e)=>t*Ms/(Ki*Math.sqrt((1+e*e)/2)),Id=(t,e)=>Math.exp(-((t/e)**2)),tC=(t,e)=>{let n=t-e;for(;n>Math.PI;)n-=Ki;for(;n<-Math.PI;)n+=Ki;return n};function Tu(t,e){const n=t.length,i=new Float32Array(n*(ss+1)*3);let r=0;for(let s=0;s<n;s++){const a=t[s];for(let o=0;o<=ss;o++){const l=o/ss*Ki;let u=0;if(a.bumps)for(const p of a.bumps)u+=p.amt*Id(tC(l,p.t),p.w);const d=Math.cos(l),f=Math.sin(l);i[r++]=(a.cx||0)+(a.rx+u)*d,i[r++]=a.y,i[r++]=(a.cz||0)+(a.rz+u)*f}}if(!e){e=new Xn;const s=[];for(let a=0;a<n-1;a++)for(let o=0;o<ss;o++){const l=a*(ss+1)+o,u=l+ss+1;s.push(l,u,l+1,l+1,u,u+1)}e.setIndex(s)}return e.setAttribute("position",new Gn(i,3)),e.computeVertexNormals(),e}function as(t,e){const n=new jl(t.map(a=>new F(a[1],a[0],a[2])),!1,"centripetal"),i=new jl(t.map(a=>new F(a[3]||0,a[0],a[4]||0)),!1,"centripetal"),r=n.getPoints(e),s=i.getPoints(e);return r.map((a,o)=>({y:a.y,rx:Math.max(.004,a.x),rz:Math.max(.004,a.z),cx:s[o].x,cz:s[o].z}))}function nC(t,e,n){const i=e==="F",r=t.bust||(i?36:40),s=t.waist||(i?30:34),a=t.hip||38,o=t.shoulder?t.shoulder*Ms:n*(i?.225:.255)*(.92+.08*(r/(i?36:40))),u=(t.neck||(i?12.2:14.8)*Math.sqrt(r/(i?36:40)))*Ms/Ki,d=i?.72:.7,f=i?.74:.78,p=i?.72:.74,g=ua(a,d),_=ua(s,f),y=ua(r,p),m=i?(r+s)/2+1:r*.97,h=[[.455*n,g*.9,g*d*.9],[.525*n,g,g*d],[.625*n,_,_*f],[.69*n,ua(m,p),ua(m,p)*p],[.725*n,y,y*p],[.77*n,y*.95,y*p*.88],[.815*n,o/2*.93,y*p*.58],[.842*n,u*1.55,u*1.4]],x=as(h,56),v=[],S=Math.PI/2,C=-Math.PI/2;if(i){const ne=Math.max(.006,Math.min(.04,.006+.0016*(r-30)));for(const he of[-.42,.42])v.push({yc:.722*n,sy:.03*n,t:S+he,w:.4,amt:ne});for(const he of[-.32,.32])v.push({yc:.5*n,sy:.035*n,t:C+he,w:.45,amt:.016})}else{for(const ne of[-.5,.5])v.push({yc:.745*n,sy:.03*n,t:S+ne,w:.5,amt:.014});for(const ne of[-.3,.3])v.push({yc:.5*n,sy:.035*n,t:C+ne,w:.45,amt:.009})}const b=Math.max(0,s-r*(i?.9:.88))*.0032;b>.002&&v.push({yc:.6*n,sy:.04*n,t:S,w:.9,amt:b}),v.push({yc:.7*n,sy:.075*n,t:C,w:1.05,rel:i?-.24:-.2});const D=(ne=>ne.map(he=>({...he,bumps:v.map(oe=>({t:oe.t,w:oe.w,amt:(oe.rel!==void 0?oe.rel*he.rz:oe.amt)*Id(he.y-oe.yc,oe.sy)}))})))(x),T=i?.6:.56,w=ne=>{const he=re=>ne*g*(.52-.18*(1-(re-.045)/.43)*0-.2*(1-(re-.045)/.43)),oe=re=>re*Ms/Ki;return[[.045*n,oe(a*.25),oe(a*.25)*1.15,he(.045),0],[.1*n,oe(a*.29),oe(a*.29),he(.1),-.002],[.2*n,oe(a*.42),oe(a*.42)*.96,he(.2),-.006],[.29*n,oe(a*.4),oe(a*.4)*.98,he(.29),0],[.38*n,oe(a*(T-.04)),oe(a*(T-.04))*.97,he(.38),.004],[.45*n,oe(a*T),oe(a*T)*.95,he(.45),.004],[.485*n,oe(a*T)*.98,oe(a*T)*.95,he(.485),.004]]},z=[-1,1].map(ne=>as(w(ne),28)),$=ne=>ne*r*Ms/Ki,Q=i?1:1.04,U=[[-.322*n,$(.15),$(.14)],[-.27*n,$(.2*Q),$(.18*Q)],[-.2*n,$(.245*Q),$(.225*Q)],[-.172*n,$(.235*Q),$(.22*Q)],[-.1*n,$(.275*Q),$(.26*Q)],[-.03*n,$(.3*Q),$(.28*Q)],[.012*n,$(.27*Q),$(.25*Q)]],H=as(U,24),B=Math.max(o/2-$(.3)*.55,y*.7),O=.132*n,L=n-O,k=[[0,.12,.14],[.08,.26,.3],[.2,.36,.4],[.4,.4,.45],[.6,.42,.47],[.8,.385,.435],[.92,.27,.31],[1,.05,.06]].map(([ne,he,oe])=>[L+ne*O,he*O*(i?.96:1.04),oe*O,0,.012*O]),G=as(k,30).map(ne=>({...ne,bumps:[{t:S,w:.22,amt:.075*O*Id(ne.y-(L+.47*O),.1*O)}]})),j=as([[.832*n,u*1.15,u*1.1,0,0],[.86*n,u,u*.98,0,.004],[L+.2*O,u*.96,u*.96,0,.01]],8),q=i?.56:.64,K=G.filter(ne=>ne.y>=L+q*O).map(ne=>({...ne,rx:ne.rx*1.06,rz:ne.rz*1.07,cz:(ne.cz||0)-.004,bumps:void 0})),te=i?as([[.7*n,.05,.022,0,-.1*O*1.2],[.8*n,.062,.03,0,-.1*O*1],[.9*n,.075,.04,0,-.085*O],[L+.65*O,.082*O*1.2,.07*O,0,-.06*O]],20):null;return{torsoRings:D,legs:z,arm:H,shoulderX:B,shoulderY:.805*n,headRings:G,neckRings:j,hair:K,longHair:te,aH:g,hh:O,H:n,armLen:.322*n,F:i,footR:[.03*n,.022*n,.072*n],handR:[.021*n,.05*n,.012*n],bustC:r,waistC:s,hipC:a}}function bu(t,e){const n=Math.max(.003,e);return t.map(i=>({...i,rx:i.rx+n,rz:i.rz+n}))}const m_=t=>t*Ms/Ki;function $m(t,e,n){const{H:i}=t,r=m_(n),s=[],a=.832*i;if(e==="jeans"){const p=.605*i,g=t.torsoRings.filter(v=>v.y>=.505*i&&v.y<=p),_=t.torsoRings[0],y=t.legs[1],m=v=>y.reduce((S,C)=>Math.abs(C.y-v)<Math.abs(S.y-v)?C:S,y[0]),h=[[.485,1],[.46,.94],[.435,.85]].map(([v,S])=>{const C=m(v*i),b=t.torsoRings.reduce((M,D)=>Math.abs(D.y-.525*i)<Math.abs(M.y-.525*i)?D:M,t.torsoRings[0]);return{..._,y:v*i,rx:Math.abs(C.cx)+C.rx,rz:Math.max(C.rz*1.04,b.rz*S+.01),bumps:void 0}});s.push({key:"jt",rings:bu([...h,...g].sort((v,S)=>v.y-S.y),r*.9+.002)});const x=t.torsoRings.filter(v=>v.y>=p-.028*i&&v.y<=p);return s.push({key:"jb",dark:!0,rings:bu(x,r*.9+.007)}),t.legs.forEach((v,S)=>{const C=S===0?-1:1,b=v.filter(z=>z.y<=.44*i&&z.y>=.03*i),M=.29*i,D=.03*i,T=.052*i,w=b.map(z=>{const $=Math.max(.003,r*.55+.014);let Q=z.rx+$,U=z.rz+$;if(z.y<M){const B=Math.pow((M-z.y)/(M-D),1.15),O=(b.find(L=>L.y>=M)||z).rx+$;Q=O+(T-O)*B,U=Q*.92}const H=z.y<M?C*Math.max(Math.abs(z.cx),Q*1.04):z.cx;return{...z,rx:Q,rz:U,cx:H}});s.push({key:"jl"+S,rings:w})}),s}const o=e==="kurta"?.34*i:e==="blouse"?.615*i:e==="tops"?.45*i:.47*i;let l=t.torsoRings.filter(p=>p.y>=o&&p.y<=a);if(t.torsoRings.filter(p=>p.y<=.47*i),e==="kurta"||o<t.torsoRings[0].y){const p=t.torsoRings[0];l=[...[.34,.38,.42].map(_=>({...p,y:_*i,rx:p.rx*1.04,rz:p.rz*1.04,bumps:void 0})).filter(_=>_.y>=o-1e-6),...l]}const u=p=>Math.max(.15,Math.min(1,(a-p.y)/(.1*i)+.2));s.push({key:"t",rings:l.map(p=>{const g=Math.max(.003,r*u(p));return{...p,rx:p.rx+g,rz:p.rz+g}})});const d={tops:.1,tshirt:.11,blouse:.08,kurta:.22,shirt:.31,blazer:.31}[e]||.1,f=t.arm.filter(p=>p.y>=-d*i);return s.push({key:"sl",arm:!0,rings:bu(f,r*.4+.002)}),s}function iC(){try{const t=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(t.getContext("webgl")||t.getContext("experimental-webgl")))}catch{return!1}}const Od=2.1,Fd=1,Ym=t=>(Fd+Od/2-t)/Od*100;function rC({measures:t,gender:e,heightCm:n,cat:i,ease:r,color:s,mood:a}){const o=P.useRef(null),l=P.useRef({});l.current.mood=a,l.current.target=r,l.current.targetColor=s;const u=JSON.stringify(t)+"|"+e+"|"+n+"|"+i;return P.useEffect(()=>{const d=o.current;if(!d)return;const f=Math.max(1,Math.min(2.3,(n||165)/100)),p=new d_({antialias:!0,alpha:!0});p.setPixelRatio(Math.min(window.devicePixelRatio||1,2));const g=d.clientWidth||340,_=d.clientHeight||480;p.setSize(g,_),d.appendChild(p.domElement),p.domElement.setAttribute("data-testid","avatar-canvas");const y=new NA,m=26,h=new bn(m,g/_,.1,50),x=Od/2/Math.tan(m/2*Math.PI/180);h.position.set(0,Fd,x);const v=new ZA(h,p.domElement);v.target.set(0,Fd,0),v.enablePan=!1,v.enableZoom=!1,v.autoRotate=!0,v.autoRotateSpeed=1.4,v.minPolarAngle=Math.PI/2,v.maxPolarAngle=Math.PI/2,v.update(),y.add(new $A("#ffffff","#d9c9d3",.9));const S=new Eu("#ffffff",1.15);S.position.set(2,3,4),y.add(S);const C=new Eu("#ffd6c8",.7);C.position.set(-3,2,-3),y.add(C);const b=new Eu("#dfe6ff",.35);b.position.set(-3,1,3),y.add(b);const M=nC(t,e,f),D=new rs({color:"#e2bba3",roughness:.62,metalness:.02,side:pn}),T=new rs({color:e==="F"?"#3a2824":"#2c211d",roughness:.8,side:pn}),w=new yr;y.add(w);const z=(le,ve,Se=w)=>{const A=new Pt(Tu(le),ve);return Se.add(A),A};z(M.torsoRings,D),M.legs.forEach(le=>z(le,D)),z(M.neckRings,D),z(M.headRings,D),z(M.hair,T),M.longHair&&z(M.longHair,T);const $=(le,ve,Se,A,E)=>{const W=new Pt(new Ss(1,28,20),ve);return W.scale.set(le[0],le[1],le[2]),W.position.set(Se,A,E),W};M.legs.forEach(le=>{const ve=le[0];w.add($(M.footR,D,ve.cx,M.footR[1],M.footR[2]*.45))});const Q=M.hh,U=f-Q,H=(le,ve)=>{let Se=M.headRings[0];for(const E of M.headRings)Math.abs(E.y-le)<Math.abs(Se.y-le)&&(Se=E);const A=Math.min(.98,Math.abs(ve)/Se.rx);return(Se.cz||0)+Se.rz*Math.sqrt(1-A*A)},B=new rs({color:"#2a1f24",roughness:.5}),O=new rs({color:"#9b3d4f",roughness:.5}),L=new yr;w.add(L);const k=U+.56*Q,G=[];for(const le of[-1,1]){const ve=le*.16*Q,Se=new Pt(new Ss(1,16,12),B);Se.scale.set(.05*Q,.06*Q,.03*Q),Se.position.set(ve,k,H(k,ve)-.004),L.add(Se);const A=k+.12*Q,E=new Pt(new Ys(.14*Q,.022*Q,.02*Q),B);E.position.set(ve,A,H(A,ve)-.002),E.userData.sx=le,L.add(E),G.push(E)}const j=le=>{const ve=.15*Q,Se=U+.27*Q,A=[];for(let W=0;W<=12;W++){const ce=-ve+2*ve*W/12,ie=ce/ve,se=le?Se+.06*Q*ie*ie-.02*Q:Se-.055*Q*ie*ie+.03*Q;A.push(new F(ce,se,H(se,ce)+.001))}const E=new Pt(new Xh(new jl(A),24,.012*Q,8,!1),O);return L.add(E),E},q=j(!0),K=j(!1),te=[-1,1].map(le=>{const ve=new yr;ve.position.set(le*M.shoulderX,M.shoulderY,0),ve.rotation.z=le*.16,w.add(ve),z(M.arm,D,ve);const Se=new Pt(new Ss(1,24,18),D),A=M.arm[M.arm.length-2];return Se.scale.set(A.rx*1.02,A.rx*1.05,A.rz*1.05),Se.position.y=-.005,ve.add(Se),ve.add($(M.handR,D,0,-M.armLen-M.handR[1]*.85,0)),ve}),ne=new rs({color:l.current.targetColor||s,roughness:.55,transparent:!0,opacity:.94,side:pn}),he=new rs({color:l.current.targetColor||s,roughness:.6,side:pn});let oe=l.current.target;const re=$m(M,i,oe).map(le=>{const ve=Tu(le.rings),Se=new Pt(ve,le.dark?he:ne);return le.arm?te.forEach(A=>{const E=new Pt(ve,ne);A.add(E)}):w.add(Se),{key:le.key,geo:ve}}),Ee=i==="jeans"?[]:te.map(le=>{const ve=new Pt(new Ss(1,24,18),ne);return ve.position.y=-.004,le.add(ve),ve}),Ce=M.arm[M.arm.length-2],Be=le=>{const ve=m_(le)*.4+.004;Ee.forEach(Se=>Se.scale.set(Ce.rx*.97+ve,Ce.rx*1+ve,Ce.rz*1+ve))};Be(oe);const Y=new Pt(new Wh(.4,48),new Bh({color:"#c93b55",transparent:!0,opacity:.1}));Y.rotation.x=-Math.PI/2,Y.position.y=.001,y.add(Y);const nt=new Ze(l.current.targetColor||s);let Re=0;const Ue=()=>{Re=requestAnimationFrame(Ue);const le=l.current.target;Math.abs(le-oe)>.005&&(oe+=(le-oe)*.14,$m(M,i,oe).forEach(A=>{const E=re.find(W=>W.key===A.key);E&&Tu(A.rings,E.geo)}),Be(oe));const ve=l.current.mood==="sad";q.visible=!ve,K.visible=ve,G.forEach(Se=>{const A=ve?-Se.userData.sx*.38:Se.userData.sx*.06;Se.rotation.z+=(A-Se.rotation.z)*.2}),nt.lerp(new Ze(l.current.targetColor),.12),ne.color.copy(nt),he.color.copy(nt).multiplyScalar(.72),v.update(),p.render(y,h)};return Ue(),()=>{cancelAnimationFrame(Re),v.dispose(),p.dispose(),y.traverse(le=>{le.geometry&&le.geometry.dispose(),le.material&&le.material.dispose()}),p.domElement.parentNode===d&&d.removeChild(p.domElement)}},[u]),c.jsx("div",{ref:o,className:"avatar3d"})}function sC({results:t,measures:e,heightCm:n,gender:i="F"}){const r=P.useMemo(()=>t.filter(h=>JA.includes(h.category)&&h.sizes&&h.sizes.length),[t]),[s,a]=P.useState(""),o=r.find(h=>h.chart_id===s)||r[0],l=o&&o.recommended?o.recommended.size:null,[u,d]=P.useState("");if(P.useEffect(()=>{d("")},[l,o&&o.chart_id]),!o)return null;const f=o.sizes.find(h=>h.size===(u||l))||o.sizes[0],p=eC(f),g=f.size===l&&p.key!=="fit"?{...p,text:p.key==="tight"?"Best match, a little snug":"Best match, a little roomy"}:p,_=p.key==="fit"||f.p_fit>=.3?"happy":"sad",y=iC(),m=Math.max(100,Math.min(230,n||165));return c.jsxs("section",{className:"card avatarcard","aria-label":"Your avatar","data-testid":"avatar",children:[c.jsx("div",{className:"steplabel",children:"Your avatar"}),c.jsx("h2",{style:{margin:"4px 0 2px"},children:"See how each size sits on you"}),c.jsxs("p",{className:"muted small",style:{margin:0},children:["A ",i==="M"?"man's":"woman's"," body built from your height and measurements. Drag to turn it, tap a size to try it on."]}),r.length>1&&c.jsx("div",{className:"chips",role:"group","aria-label":"Garment type",style:{marginTop:10},children:r.map(h=>c.jsx("button",{className:"chip","aria-pressed":h.chart_id===o.chart_id,onClick:()=>a(h.chart_id),children:h.category_label},h.chart_id))}),c.jsxs("div",{className:"avatarbox",children:[y?c.jsx(rC,{measures:e,gender:i,heightCm:m,cat:o.category,ease:QA(f),color:g.color,mood:_}):c.jsx("div",{className:"avatarfallback muted small",children:"3D view needs a browser with WebGL. Your sizes below are unaffected."}),y&&c.jsxs("div",{className:"ruler","aria-hidden":"true",children:[[.5,1,1.5,2].map(h=>c.jsxs("span",{style:{top:`${Ym(h)}%`},children:[Math.round(h*100)," cm"]},h)),c.jsx("i",{className:"hmark",style:{top:`${Ym(m/100)}%`},children:c.jsxs("b",{children:[Math.round(m)," cm"]})})]}),c.jsxs("div",{className:"avatarverdict",style:{borderColor:g.color,color:g.color},"data-testid":"avatar-verdict",children:[c.jsx("b",{children:f.size.split(" ")[0]})," ",g.text]})]}),c.jsx("div",{className:"chips",role:"group","aria-label":"Try a size",style:{justifyContent:"center"},children:o.sizes.map(h=>c.jsxs("button",{className:"chip","aria-pressed":h.size===f.size,onClick:()=>d(h.size),"data-testid":`try-${h.size.split(" ")[0]}`,children:[h.size.split(" ")[0],l===h.size?" ★":""]},h.size))})]})}function kd({value:t,size:e=16}){return c.jsx("span",{className:"stars",role:"img","aria-label":`${t} out of 5 stars`,children:[1,2,3,4,5].map(n=>c.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24","aria-hidden":"true",className:n<=Math.round(t)?"on":"",children:c.jsx("path",{d:"M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"})},n))})}function aC(t){const[e,n]=P.useState(0);return P.useEffect(()=>{if(!t){n(0);return}let i;const r=performance.now(),s=a=>{const o=Math.min(1,(a-r)/900);n(Math.round(t*(1-(1-o)**3))),o<1&&(i=requestAnimationFrame(s))};return i=requestAnimationFrame(s),()=>cancelAnimationFrame(i)},[t]),e}function oC(){const[t,e]=P.useState(null),[n,i]=P.useState(null);P.useEffect(()=>{Ye("/api/stats").then(e).catch(()=>{}),Ye("/api/reviews/summary").then(i).catch(()=>{})},[]);const r=aC(t?t.customers:0);return t?c.jsxs("section",{className:"card socialproof","aria-label":"Customers","data-testid":"socialproof",children:[c.jsxs("div",{className:"spstats",children:[c.jsxs("div",{children:[c.jsx("b",{"data-testid":"customer-count",children:r.toLocaleString("en-IN")}),c.jsx("span",{children:t.customers===1?"customer registered":"customers registered"})]}),c.jsxs("div",{children:[c.jsx("b",{children:t.saved_scans.toLocaleString("en-IN")}),c.jsx("span",{children:t.saved_scans===1?"size profile saved":"size profiles saved"})]}),c.jsx("div",{children:t.average_rating?c.jsxs(c.Fragment,{children:[c.jsxs("b",{children:[t.average_rating.toFixed(1),c.jsx("small",{children:" / 5"})]}),c.jsxs("span",{children:[c.jsx(kd,{value:t.average_rating,size:14})," ",t.reviews," ",t.reviews===1?"review":"reviews"]})]}):c.jsxs(c.Fragment,{children:[c.jsx("b",{children:"-"}),c.jsx("span",{children:"No reviews yet. Be the first!"})]})})]}),n&&n.recent.length>0&&c.jsx("div",{className:"spquotes",children:n.recent.slice(0,3).map((s,a)=>c.jsxs("figure",{className:"quote",children:[c.jsx(kd,{value:s.rating,size:13}),c.jsx("blockquote",{children:s.comment}),c.jsx("figcaption",{children:s.name})]},a))})]}):null}const lC=["","Poor","Could be better","Okay","Good","Loved it"];function cC({customer:t}){const[e,n]=P.useState(0),[i,r]=P.useState(0),[s,a]=P.useState(""),[o,l]=P.useState(!1),[u,d]=P.useState(!1),[f,p]=P.useState(""),g=i||e;async function _(y){if(y.preventDefault(),!e){p("Tap a star to rate first.");return}p(""),l(!0);try{await Ye("/api/reviews",{method:"POST",json:{rating:e,comment:s}}),d(!0)}catch(m){p(m instanceof vi?m.message:"Could not send feedback.")}finally{l(!1)}}return u?c.jsxs("section",{className:"card feedbackcard","data-testid":"feedback-done",children:[c.jsxs("h3",{style:{margin:0},children:["Thank you",t&&t.name?`, ${t.name.split(" ")[0]}`:"","!"]}),c.jsx("p",{className:"muted small",style:{margin:"4px 0 0"},children:"Your feedback helps us make the size predictions better."})]}):c.jsx("section",{className:"card feedbackcard","aria-label":"Feedback","data-testid":"feedback",children:c.jsxs("form",{onSubmit:_,className:"stack",children:[c.jsxs("div",{children:[c.jsx("div",{className:"steplabel",children:"Your feedback"}),c.jsx("h3",{style:{margin:"2px 0 0"},children:"How did FitScan do?"})]}),c.jsxs("div",{className:"starpick",role:"radiogroup","aria-label":"Rating",onMouseLeave:()=>r(0),children:[[1,2,3,4,5].map(y=>c.jsx("button",{type:"button",role:"radio","aria-checked":e===y,"aria-label":`${y} star${y>1?"s":""}`,className:y<=g?"on":"",onMouseEnter:()=>r(y),onClick:()=>n(y),"data-testid":`star-${y}`,children:c.jsx("svg",{width:"30",height:"30",viewBox:"0 0 24 24","aria-hidden":"true",children:c.jsx("path",{d:"M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"})})},y)),c.jsx("span",{className:"small muted",style:{marginLeft:8},children:lC[g]})]}),c.jsxs("label",{className:"field",children:[c.jsxs("span",{children:["Tell us more ",c.jsx("span",{className:"faint",children:"(optional)"})]}),c.jsx("textarea",{rows:3,maxLength:500,value:s,onChange:y=>a(y.target.value),"aria-label":"Comment",placeholder:"Did the size match? Anything confusing or missing?"})]}),f&&c.jsx("div",{className:"alert err",role:"alert",children:f}),c.jsxs("div",{className:"row",children:[c.jsx("button",{className:"btn",disabled:o,children:o?"Sending...":"Send feedback"}),c.jsx("span",{className:"small muted",children:"Only your first name is shown, never your contact details."})]})]})})}function uC(){return c.jsx("div",{className:"stack","aria-busy":"true","aria-label":"Calculating your sizes",children:[0,1].map(t=>c.jsxs("div",{className:"card skel-card",children:[c.jsx("div",{className:"skel",style:{height:14,width:"30%"}}),c.jsx("div",{className:"skel",style:{height:44,width:"22%"}}),c.jsx("div",{className:"skel",style:{height:16}}),c.jsx("div",{className:"skel",style:{height:60}})]},t))})}const qm=["About you","Photos","Check measurements","Your sizes"];function dC({step:t}){return c.jsxs(c.Fragment,{children:[c.jsx("ol",{className:"steps","aria-label":"Progress",children:qm.map((e,n)=>c.jsx("li",{className:n+1<t?"done":n+1===t?"now":""},e))}),c.jsxs("div",{className:"steplabel",children:["Step ",t," of 4 - ",qm[t-1]]})]})}const hC=t=>new Date(t*1e3).toLocaleDateString("en-IN",{day:"numeric",month:"short"});function fC({plan:t,onUpgrade:e,customer:n,onLogin:i}){const[r,s]=P.useState(1),[a,o]=P.useState("F"),[l,u]=P.useState(!1),[d,f]=P.useState(""),[p,g]=P.useState(null),[_,y]=P.useState(null),[m,h]=P.useState(!1),[x,v]=P.useState(!1),[S,C]=P.useState(""),[b,M]=P.useState(null),[D,T]=P.useState(!1),[w,z]=P.useState({bust:"",waist:"",hip:"",neck:"",shoulder:""}),[$,Q]=P.useState("in"),[U,H]=P.useState({fit_pref:"regular",slim_fit:!1,cotton_shrink:!1}),[B,O]=P.useState("general"),[L,k]=P.useState(null),[G,j]=P.useState("fabindia"),[q,K]=P.useState(null),[te,ne]=P.useState(!1),[he,oe]=P.useState(""),[re,Ee]=P.useState(null),[Ce,Be]=P.useState(!1);P.useEffect(()=>{Ye("/api/catalog").then(k).catch(()=>{})},[]),P.useEffect(()=>{if(!n){Ee(null);return}let X=!0;return Ye("/api/me/profile").then(Me=>{X&&Ee(Me)}).catch(()=>{}),()=>{X=!1}},[n&&n.id]);function Y(X){o(X.gender),u(!0),f(X.height_cm?String(X.height_cm):""),X.unit&&Q(X.unit),T(!0),M(null),C(""),z({bust:"",waist:"",hip:"",neck:"",shoulder:"",...X.measures}),s(4)}const nt=parseFloat(d),Re=nt>=90&&nt<=230;async function Ue(){C(""),v(!0);try{const X=new FormData;X.append("front",p),X.append("side",_),X.append("height_cm",String(nt)),X.append("gender",a);const Me=await Ye("/api/scan",{method:"POST",form:X});M(Me),T(!1);const De=Me.measurements;z({bust:De.bust.inches,waist:De.waist.inches,hip:De.hip.inches,neck:"",shoulder:""}),s(3)}catch(X){C(X instanceof vi?X.message:"Scan failed. Please try again.")}finally{v(!1)}}function le(){T(!0),M(null),z({bust:"",waist:"",hip:"",neck:"",shoulder:""}),C(""),s(3)}const ve=P.useMemo(()=>N0(w),[w]),Se=P.useMemo(()=>{const X={};for(const Me of Object.keys(ve))D||!b?X[Me]=.4:b.measurements[Me]&&Math.abs(b.measurements[Me].inches-ve[Me])<.05?X[Me]=b.sigma_in[Me]:X[Me]=.5;return X},[ve,D,b]),A=["bust","waist","hip"].every(X=>ve[X]>=15&&ve[X]<=80);P.useEffect(()=>{if(r!==4)return;if(B==="convert"||B==="paste"){K(null),ne(!1);return}if(B==="brand"&&t!=="pro"){K(null);return}let X=!0;return ne(!0),oe(""),Ye("/api/recommend",{method:"POST",json:{gender:a,measures:ve,sigma:Se,source:D?"tape":"scan",brand:B==="brand"?G:"general",prefs:U}}).then(Me=>{X&&K(Me)}).catch(Me=>{X&&(K(null),oe(Me.message))}).finally(()=>{X&&ne(!1)}),()=>{X=!1}},[r,B,G,t,U,a,D,JSON.stringify(ve),JSON.stringify(Se)]),P.useEffect(()=>{if(r!==4||!n||!q||te||B!=="general"||!["bust","waist","hip"].every(De=>ve[De]>=15&&ve[De]<=80))return;const X={};for(const De of q.results)De.recommended&&(X[De.category_label]=De.recommended.size.split(" ")[0]);const Me=setTimeout(()=>{Ye("/api/me/profile",{method:"PUT",json:{gender:a,height_cm:Re?nt:null,unit:$,measures:ve,sizes:X}}).then(()=>(Be(!0),Ye("/api/me/profile"))).then(Ee).catch(()=>{})},700);return()=>clearTimeout(Me)},[r,n&&n.id,q,te,B]);const E=L?L.brands.filter(X=>X.genders.includes(a)):[];P.useEffect(()=>{E.length&&!E.find(X=>X.key===G)&&j(E[0].key)},[a,L]);const W=E.find(X=>X.key===G);function ce(){s(1),g(null),y(null),M(null),K(null),T(!1),C(""),z({bust:"",waist:"",hip:"",neck:"",shoulder:""})}const ie=B==="convert"||B==="paste",se=q&&a==="F"&&B==="general"&&q.saree,be=q&&q.results.find(X=>X.category==="blouse"),ye=q&&q.results.find(X=>X.category==="petticoat");return c.jsxs(c.Fragment,{children:[r===1&&c.jsx(gM,{onStart:()=>{const X=document.getElementById("scan-card");X&&X.scrollIntoView&&X.scrollIntoView({behavior:"smooth",block:"center"})}}),c.jsxs("div",{className:"narrow",style:{margin:"0 auto"},children:[c.jsxs("div",{className:"card",id:"scan-card",children:[c.jsx(dC,{step:r}),r===1&&c.jsxs("div",{className:"stack",style:{marginTop:14},children:[n&&re&&re.profile&&c.jsxs("div",{className:"welcomeback","data-testid":"welcome-back",children:[c.jsxs("div",{children:[c.jsxs("b",{children:["Welcome back",n.name?`, ${n.name.split(" ")[0]}`:"","!"]}),c.jsxs("div",{className:"small muted",children:["We remembered your ",re.profile.gender==="M"?"chest":"bust"," / waist / hip: ",re.profile.measures.bust," / ",re.profile.measures.waist," / ",re.profile.measures.hip," in",re.profile.height_cm?`, height ${re.profile.height_cm} cm`:"","."]})]}),c.jsxs("div",{className:"row",children:[c.jsx("button",{className:"btn",onClick:()=>Y(re.profile),"data-testid":"use-saved",children:"Show my sizes"}),c.jsx("span",{className:"small muted",children:"or fill the form below to start fresh"})]}),re.history.length>1&&c.jsxs("div",{className:"histlist",children:[c.jsx("span",{className:"small muted",children:"Earlier scans:"}),re.history.slice(1,5).map(X=>c.jsxs("button",{className:"chip",onClick:()=>Y({gender:X.gender,height_cm:X.height_cm,unit:$,measures:X.measures}),children:[hC(X.created)," · ",X.measures.bust,"/",X.measures.waist,"/",X.measures.hip]},X.id))]})]}),!n&&c.jsxs("div",{className:"small muted",children:["Been here before? ",c.jsx("button",{type:"button",className:"linkbtn",onClick:i,children:"Log in"})," to see your saved sizes."]}),c.jsxs("div",{children:[c.jsx("h2",{style:{margin:"0 0 4px"},children:"Who is this for?"}),c.jsx("p",{className:"small muted",style:{margin:"0 0 10px"},children:"This sets the size charts and the body shape of your avatar."}),c.jsxs("div",{className:"genderpick",role:"group","aria-label":"Gender",children:[c.jsxs("button",{type:"button","aria-pressed":l&&a==="F",onClick:()=>{o("F"),u(!0)},children:[c.jsxs("svg",{viewBox:"0 0 60 110",width:"46",height:"84",fill:"currentColor","aria-hidden":"true",children:[c.jsx("circle",{cx:"30",cy:"11",r:"9"}),c.jsx("path",{d:"M30 22c-9 0-14 6-15 16l-4 28h8l-3 14h28l-3-14h8l-4-28c-1-10-6-16-15-16z",opacity:".9"}),c.jsx("path",{d:"M22 80l-3 28h8l3-22 3 22h8l-3-28z"})]}),c.jsx("b",{children:"Woman"})]}),c.jsxs("button",{type:"button","aria-pressed":l&&a==="M",onClick:()=>{o("M"),u(!0)},children:[c.jsxs("svg",{viewBox:"0 0 60 110",width:"46",height:"84",fill:"currentColor","aria-hidden":"true",children:[c.jsx("circle",{cx:"30",cy:"11",r:"9"}),c.jsx("path",{d:"M30 22c-12 0-19 5-20 17l-2 30h8l2-22 2 40h20l2-40 2 22h8l-2-30c-1-12-8-17-20-17z",opacity:".9"}),c.jsx("path",{d:"M21 76l-2 32h8l3-26 3 26h8l-2-32z"})]}),c.jsx("b",{children:"Man"})]})]})]}),c.jsxs("label",{className:"field",children:[c.jsx("span",{children:"Your height (cm)"}),c.jsx("input",{type:"number",inputMode:"decimal",min:"90",max:"230",placeholder:"e.g. 165",value:d,onChange:X=>f(X.target.value),"aria-label":"Height in centimetres"}),c.jsx("span",{className:"small muted",style:{marginTop:4},children:"Needed to turn the photo into real centimetres."})]}),!l&&c.jsx("div",{className:"small muted",children:"Choose Woman or Man to continue."}),d!==""&&!Re&&c.jsx("div",{className:"alert err",children:"Enter a height between 90 and 230 cm."}),c.jsxs("div",{className:"row",children:[c.jsx("button",{className:"btn",disabled:!Re||!l,onClick:()=>s(2),children:"Continue to photos"}),c.jsx("button",{className:"btn plain",disabled:!l,onClick:le,children:"I'll type my measurements instead"})]}),c.jsx("p",{className:"small muted",children:"Adult size charts only: kids' sizes are not covered yet."})]}),r===2&&c.jsxs("div",{className:"stack",style:{marginTop:14},children:[c.jsxs("div",{className:"alert info",children:[c.jsx("b",{children:"For the best result"}),c.jsxs("ul",{children:[c.jsx("li",{children:"Plain wall behind you, good light, a friend or a propped-up phone about 2.5 m away."}),c.jsx("li",{children:"Wear fitted clothes (or light clothing). Full body visible, head to feet."}),c.jsxs("li",{children:[c.jsx("b",{children:"Front:"})," arms about 30 degrees away from your sides. ",c.jsx("b",{children:"Side:"})," turn 90 degrees, arms forward or relaxed."]})]})]}),c.jsxs("div",{className:"grid2",children:[c.jsx(zs,{kind:"front",file:p,onFile:g,hint:"Facing the camera, arms slightly out"}),c.jsx(zs,{kind:"side",file:_,onFile:y,hint:"Turn 90 degrees, stand straight"})]}),c.jsxs("label",{className:"row small",style:{alignItems:"flex-start",gap:8},children:[c.jsx("input",{type:"checkbox",checked:m,onChange:X=>h(X.target.checked),style:{marginTop:3},"aria-label":"Consent"}),c.jsx("span",{children:"I agree that these photos are processed on this server only to estimate my measurements. They are not saved, and only the numbers are kept in my browser."})]}),S&&c.jsx("div",{className:"alert err",role:"alert",children:S}),c.jsxs("div",{className:"row",children:[c.jsx("button",{className:"btn plain",onClick:()=>s(1),children:"Back"}),c.jsx("button",{className:"btn",disabled:!p||!_||!m||x,onClick:Ue,children:x?c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"spinner"})," Scanning..."]}):"Scan my body"}),c.jsx("button",{className:"btn plain",onClick:le,children:"Type measurements instead"})]})]}),r===3&&c.jsxs("div",{className:"stack",style:{marginTop:14},children:[b&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"row",children:[c.jsxs("span",{className:`badge ${b.quality}`,children:["Scan quality: ",b.quality]}),c.jsx("span",{className:"small muted",children:"Typical error of a 2-photo estimate is about 2-4 cm, so please double-check with a tape if you can."})]}),b.backend!=="mediapipe"&&c.jsx("div",{className:"alert warn small",children:"Running in basic scanner mode (the pose model is not installed on this server). Accuracy is lower: please verify the numbers."}),b.warnings.length>0&&c.jsxs("div",{className:"alert warn",role:"alert",children:[c.jsx("b",{children:"Tips to improve this scan"}),c.jsx("ul",{children:b.warnings.map(X=>c.jsx("li",{children:X},X))})]}),b.overlay_jpeg_b64&&c.jsx("img",{className:"overlay-img",alt:"Scan overlay showing where each width was measured",src:`data:image/jpeg;base64,${b.overlay_jpeg_b64}`})]}),D&&c.jsxs("div",{className:"alert info small",children:["Enter measurements in ",$==="in"?"inches":"cm",". Measure around the fullest part of the ",Uh[a].bust.toLowerCase(),", the narrowest part of the waist and the fullest part of the hips."]}),c.jsx(P0,{gender:a,values:w,onChange:z,unit:$,setUnit:Q,scanned:b?b.measurements:null}),!A&&c.jsx("div",{className:"alert err small",children:"Bust/chest, waist and hip are needed (15-80 in)."}),c.jsxs("div",{className:"row",children:[c.jsx("button",{className:"btn plain",onClick:()=>s(D?1:2),children:"Back"}),c.jsx("button",{className:"btn",disabled:!A,onClick:()=>s(4),children:"Get my sizes"})]})]}),r===4&&c.jsxs("div",{className:"stack",style:{marginTop:14},children:[c.jsxs("div",{className:"tabs",role:"tablist",children:[c.jsxs("button",{role:"tab","aria-selected":B==="general",onClick:()=>O("general"),children:["General sizes ",c.jsx("span",{className:"badge good",children:"Free"})]}),c.jsxs("button",{role:"tab","aria-selected":B==="brand",onClick:()=>O("brand"),children:["Brand sizes ",c.jsx("span",{className:"badge pro",children:"Pro"})]}),c.jsxs("button",{role:"tab","aria-selected":B==="convert",onClick:()=>O("convert"),children:["Size converter ",c.jsx("span",{className:"badge pro",children:"Pro"})]}),c.jsxs("button",{role:"tab","aria-selected":B==="paste",onClick:()=>O("paste"),children:["Paste a size chart ",c.jsx("span",{className:"badge pro",children:"Pro"})]})]}),!ie&&c.jsx("div",{className:"card",style:{boxShadow:"none",background:"var(--soft-bg)"},children:c.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[c.jsx("div",{className:"chips",role:"group","aria-label":"Fit preference",children:["snug","regular","relaxed"].map(X=>c.jsxs("button",{className:"chip","aria-pressed":U.fit_pref===X,onClick:()=>H({...U,fit_pref:X}),children:[X[0].toUpperCase()+X.slice(1)," fit"]},X))}),c.jsxs("label",{className:"small row",style:{gap:6},children:[c.jsx("input",{type:"checkbox",checked:U.slim_fit,onChange:X=>H({...U,slim_fit:X.target.checked})}),"Slim-fit cut"]}),c.jsxs("label",{className:"small row",style:{gap:6},children:[c.jsx("input",{type:"checkbox",checked:U.cotton_shrink,onChange:X=>H({...U,cotton_shrink:X.target.checked})}),"Cotton may shrink"]})]})}),B==="convert"&&t!=="pro"&&c.jsxs("div",{className:"card locked",children:[c.jsx("div",{className:"lock-ico","aria-hidden":"true",children:"🔒"}),c.jsx("h3",{children:"The size converter is a Pro feature"}),c.jsx("p",{className:"muted",children:"Know you are an M in Zara? See your matching size in Biba, Aurelia, Fabindia and Trends in one tap."}),c.jsx("button",{className:"btn",onClick:e,children:"See plans"})]}),B==="convert"&&t==="pro"&&c.jsx(SM,{gender:a,catalog:L}),B==="paste"&&t!=="pro"&&c.jsxs("div",{className:"card locked",children:[c.jsx("div",{className:"lock-ico","aria-hidden":"true",children:"🔒"}),c.jsx("h3",{children:"Paste a size chart is a Pro feature"}),c.jsx("p",{className:"muted",children:'Copy the size table from any shopping site, paste it here, and get "Size L fits you, 78% chance". Works with every store.'}),c.jsx("button",{className:"btn",onClick:e,children:"See plans"})]}),B==="paste"&&t==="pro"&&c.jsx(EM,{gender:a,catalog:L,measures:ve,source:D?"tape":"scan",prefs:U}),B==="brand"&&t!=="pro"&&c.jsxs("div",{className:"card locked",children:[c.jsx("div",{className:"lock-ico","aria-hidden":"true",children:"🔒"}),c.jsx("h3",{children:"Brand-specific sizes are a Pro feature"}),c.jsx("p",{className:"muted",children:`Pick Biba, Aurelia, Fabindia, Trends or Zara and get the size from that brand's own chart, including quirks like "Zara runs slim".`}),c.jsx("button",{className:"btn",onClick:e,children:"See plans"})]}),B==="brand"&&t==="pro"&&c.jsxs("div",{children:[c.jsx("div",{className:"chips",role:"group","aria-label":"Brand",children:E.map(X=>c.jsx("button",{className:"chip","aria-pressed":G===X.key,onClick:()=>j(X.key),children:X.name},X.key))}),W&&W.notes.map(X=>c.jsx("p",{className:"small muted",style:{marginTop:8},children:X},X))]}),!ie&&te&&!q&&c.jsx(uC,{}),te&&q&&c.jsxs("div",{className:"row muted small",children:[c.jsx("span",{className:"spinner dark"})," Updating..."]}),he&&c.jsx("div",{className:"alert err",role:"alert",children:he}),!ie&&q&&!(B==="brand"&&t!=="pro")&&c.jsxs("div",{className:"stack",children:[c.jsx(yM,{results:q.results,onJump:X=>{const Me=document.getElementById(`rc-${X}`);Me&&Me.scrollIntoView&&Me.scrollIntoView({behavior:"smooth",block:"start"})}}),c.jsx(sC,{results:q.results,measures:ve,heightCm:nt,gender:a}),q.results.map(X=>c.jsx("div",{id:`rc-${X.chart_id}`,style:{scrollMarginTop:80},children:c.jsx(Ih,{r:X,measures:ve})},X.chart_id)),se&&c.jsxs("div",{className:"card result","data-testid":"result-saree",children:[c.jsx("div",{className:"muted small",style:{fontWeight:700},children:"Saree set"}),c.jsxs("div",{className:"grid3",style:{marginTop:8},children:[c.jsxs("div",{children:[c.jsx("div",{className:"small muted",children:"Saree length"}),c.jsxs("b",{children:[se.lengths[0].metres," m standard"]}),c.jsxs("div",{className:"small muted",children:[se.lengths[1].metres," m for a fuller drape"]})]}),c.jsxs("div",{children:[c.jsx("div",{className:"small muted",children:"Blouse size"}),c.jsx("b",{children:be&&be.recommended?be.recommended.size:"-"}),c.jsxs("div",{className:"small muted",children:["+ ",se.blouse_piece_m," m blouse piece"]})]}),c.jsxs("div",{children:[c.jsx("div",{className:"small muted",children:"Petticoat (waist)"}),c.jsx("b",{children:ye&&ye.recommended?ye.recommended.size:"-"})]})]}),c.jsx("p",{className:"small muted",style:{marginTop:8},children:se.note})]})]}),q&&!ie&&!(B==="brand"&&t!=="pro")&&c.jsxs(c.Fragment,{children:[n?Ce&&c.jsx("div",{className:"alert info small","data-testid":"saved-note",children:"Saved to your profile. We will remember these next time you log in."}):c.jsxs("div",{className:"card saveprompt","data-testid":"save-prompt",children:[c.jsxs("div",{children:[c.jsx("b",{children:"Save these sizes?"}),c.jsx("div",{className:"small muted",children:"Log in with your email or mobile and we will remember your measurements for next time."})]}),c.jsx("button",{className:"btn",onClick:i,children:"Log in to save"})]}),c.jsx(cC,{customer:n})]}),c.jsxs("div",{className:"row",children:[c.jsx("button",{className:"btn plain",onClick:()=>s(3),children:"Edit measurements"}),c.jsx("button",{className:"btn plain",onClick:ce,children:"Start over"})]}),t!=="pro"&&B==="general"&&q&&!te&&c.jsx(pM,{id:"pro-nudge",delay:1800,onAction:e,actionLabel:"See Pro",children:"Want your exact size in Biba, Zara, Fabindia and more? Brand-specific sizes are in Pro."}),c.jsx("p",{className:"small muted",children:'Probabilities come from your measurements, their uncertainty and the size chart. Tell us how clothes fit ("Bought it?") and we use that to check and improve these numbers.'})]})]}),r===1&&c.jsx(oC,{}),r===1&&c.jsx(_M,{})]})]})}const Km="demo_boutique_key";function pC(){const[t,e]=P.useState(eM()),[n,i]=P.useState(null),[r,s]=P.useState(""),[a,o]=P.useState(""),[l,u]=P.useState(!1),[d,f]=P.useState(!1),[p,g]=P.useState(""),[_,y]=P.useState("in"),[m,h]=P.useState("body"),[x,v]=P.useState("2"),[S,C]=P.useState(null),[b,M]=P.useState("jeans"),[D,T]=P.useState("");async function w(j){try{i(await Ye("/api/stores/me",{store:j})),o("")}catch(q){o(q.message),q.status===401&&(Eo(""),e(""),i(null))}}P.useEffect(()=>{t&&w(t)},[t]),P.useEffect(()=>{n&&n.charts.length&&!n.charts.find(j=>j.category===b)&&M(n.charts[0].category)},[n]);async function z(j){j.preventDefault(),u(!0),o("");try{const q=await Ye("/api/stores",{method:"POST",json:{name:r}});Eo(q.api_key),e(q.api_key)}catch(q){o(q.message)}finally{u(!1)}}function $(){Eo(Km),e(Km)}function Q(){Eo(""),e(""),i(null),g("")}async function U(){if(S){u(!0),o(""),g("");try{const j=new FormData;j.append("file",S),j.append("unit",_),j.append("measure_type",m),j.append("ease_in",x||"2");const q=await Ye("/api/stores/charts",{method:"POST",form:j,store:t});g(`Saved: ${q.saved.map(K=>`${K.gender==="F"?"Women":"Men"} ${K.category} (${K.sizes} sizes)`).join(", ")}`),C(null),await w(t)}catch(j){o(j.message)}finally{u(!1)}}}async function H(j){try{await Ye(`/api/stores/charts/${j}`,{method:"DELETE",store:t}),await w(t)}catch(q){o(q.message)}}async function B(){const j=await Ye("/api/stores/sample-csv"),q=document.createElement("a");q.href=URL.createObjectURL(new Blob([j],{type:"text/csv"})),q.download="fitscan-sample-size-chart.csv",q.click()}const O=(j,q)=>{navigator.clipboard&&navigator.clipboard.writeText(q),T(j),setTimeout(()=>T(""),1500)},L=window.location.origin,k=`<select id="size-select"> ... your size options ... </select>

<script src="${L}/widget.js"
        data-store-key="${t}"
        data-category="${b}"
        data-size-selector="#size-select"><\/script>`,G=`curl -X POST ${L}/api/embed/recommend \\
  -H "X-Store-Key: ${t}" -H "Content-Type: application/json" \\
  -d '{"gender":"F","category":"${b}","measures":{"bust":35,"waist":29,"hip":38},"source":"tape"}'`;return t?c.jsxs("div",{className:"stack",children:[c.jsxs("div",{className:"card",children:[c.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[c.jsxs("div",{children:[c.jsx("h2",{style:{marginBottom:2},children:n?n.name:"Loading..."}),c.jsx("span",{className:"muted small",children:"Store dashboard"})]}),c.jsxs("div",{className:"row",children:[c.jsx(Dh,{className:"btn ghost small",to:"/demo-store",children:"See it on a product page"}),c.jsx("button",{className:"btn plain small",onClick:Q,children:"Switch store"})]})]}),c.jsxs("div",{className:"row",style:{marginTop:12},children:[c.jsx("span",{className:"small muted",children:"API key"}),c.jsx("code",{className:"k",children:d?t:`${t.slice(0,6)}${"•".repeat(10)}`}),c.jsx("button",{className:"btn plain small",onClick:()=>f(!d),children:d?"Hide":"Show"}),c.jsx("button",{className:"btn plain small",onClick:()=>O("key",t),children:D==="key"?"Copied":"Copy"})]})]}),a&&c.jsx("div",{className:"alert err",role:"alert",children:a}),p&&c.jsx("div",{className:"alert info",role:"status",children:p}),c.jsxs("div",{className:"card stack",children:[c.jsx("h3",{children:"1. Upload your size charts"}),c.jsxs("p",{className:"muted small",children:["One CSV for all products. Columns: ",c.jsx("code",{className:"k",children:"gender,category,size"})," plus any of ",c.jsx("code",{className:"k",children:"bust,waist,hip,shoulder,neck"}),". Values can be ranges like ",c.jsx("code",{className:"k",children:"30-32"}),". Each gender + category becomes one chart (e.g. women's jeans)."]}),c.jsxs("div",{className:"grid3",children:[c.jsxs("label",{className:"field",children:[c.jsx("span",{children:"Units"}),c.jsxs("select",{value:_,onChange:j=>y(j.target.value),"aria-label":"Units",children:[c.jsx("option",{value:"in",children:"inches"}),c.jsx("option",{value:"cm",children:"cm"})]})]}),c.jsxs("label",{className:"field",children:[c.jsx("span",{children:"Chart shows"}),c.jsxs("select",{value:m,onChange:j=>h(j.target.value),"aria-label":"Chart type",children:[c.jsx("option",{value:"body",children:"Body measurements"}),c.jsx("option",{value:"garment",children:"Garment measurements"})]})]}),m==="garment"&&c.jsxs("label",{className:"field",children:[c.jsx("span",{children:"Ease to remove (in)"}),c.jsx("input",{type:"number",step:"0.5",value:x,onChange:j=>v(j.target.value),"aria-label":"Ease"})]})]}),c.jsxs("div",{className:"row",children:[c.jsx("input",{type:"file",accept:".csv,text/csv",onChange:j=>C(j.target.files[0]||null),"aria-label":"CSV file"}),c.jsx("button",{className:"btn",onClick:U,disabled:!S||l,children:l?"Uploading...":"Upload chart"}),c.jsx("button",{className:"btn plain small",onClick:B,children:"Download sample CSV"})]}),n&&n.charts.length>0&&c.jsx("div",{className:"scroll",style:{maxHeight:280},children:c.jsxs("table",{className:"simple",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"For"}),c.jsx("th",{children:"Category"}),c.jsx("th",{children:"Sizes"}),c.jsx("th",{children:"Measurements used"}),c.jsx("th",{})]})}),c.jsx("tbody",{children:n.charts.map(j=>c.jsxs("tr",{children:[c.jsx("td",{children:j.gender==="F"?"Women":"Men"}),c.jsx("td",{children:j.category}),c.jsx("td",{children:j.sizes.join(", ")}),c.jsx("td",{children:j.dims.join(", ")}),c.jsx("td",{children:c.jsx("button",{className:"btn plain small",onClick:()=>H(j.id),"aria-label":`Delete ${j.category}`,children:"Delete"})})]},j.id))})]})})]}),c.jsxs("div",{className:"card stack",children:[c.jsx("h3",{children:"2. Add the button to your product page"}),c.jsxs("label",{className:"field",style:{maxWidth:280},children:[c.jsx("span",{children:"Product category on this page"}),c.jsx("select",{value:b,onChange:j=>M(j.target.value),"aria-label":"Category",children:[...new Set([...n?n.charts.map(j=>j.category):[],"jeans"])].map(j=>c.jsx("option",{value:j,children:j},j))})]}),c.jsx("pre",{className:"code","aria-label":"Embed code",children:k}),c.jsxs("div",{className:"row",children:[c.jsx("button",{className:"btn small",onClick:()=>O("snip",k),children:D==="snip"?"Copied":"Copy code"}),c.jsxs("span",{className:"small muted",children:["When a shopper finishes, the page receives a ",c.jsx("code",{className:"k",children:"fitscan:size"})," event and the size menu is filled in automatically."]})]})]}),c.jsxs("div",{className:"card stack",children:[c.jsx("h3",{children:"3. Or call the API from your own app (marketplaces)"}),c.jsx("pre",{className:"code",children:G}),c.jsx("button",{className:"btn small",style:{alignSelf:"flex-start"},onClick:()=>O("curl",G),children:D==="curl"?"Copied":"Copy"}),c.jsx("p",{className:"small muted",children:"Marketplaces can pass each brand's chart in via CSV and let shoppers scan inside the platform. Only measurements and the chosen size are exchanged, never photos."})]})]}):c.jsxs("div",{className:"narrow",style:{margin:"0 auto"},children:[c.jsxs("div",{className:"hero",children:[c.jsx("h1",{children:"FitScan for stores and marketplaces"}),c.jsxs("p",{children:['Add a "Find my size" button to your product pages. Shoppers scan once, and the widget recommends a size from ',c.jsx("b",{children:"your own size chart"}),", cutting wrong-size returns and cancellations."]})]}),c.jsxs("div",{className:"card stack",children:[c.jsxs("form",{onSubmit:z,className:"stack",children:[c.jsxs("label",{className:"field",children:[c.jsx("span",{children:"Store or brand name"}),c.jsx("input",{type:"text",value:r,onChange:j=>s(j.target.value),placeholder:"e.g. Kerala Threads",minLength:2,required:!0,"aria-label":"Store name"})]}),c.jsxs("div",{className:"row",children:[c.jsx("button",{className:"btn",disabled:l||r.trim().length<2,children:"Create store"}),c.jsx("button",{type:"button",className:"btn ghost",onClick:$,children:"Use the demo store instead"})]})]}),a&&c.jsx("div",{className:"alert err",children:a})]})]})}const mC="demo_boutique_key",gC=["XS","S","M","L","XL","XXL"];function vC(){const t=P.useRef(null),[e,n]=P.useState(null),[i,r]=P.useState(""),[s,a]=P.useState("");return P.useEffect(()=>{const o=t.current;if(!o)return;o.innerHTML="";const l=document.createElement("script");l.src=`${window.location.origin}/widget.js`,l.setAttribute("data-store-key",mC),l.setAttribute("data-category","jeans"),l.setAttribute("data-size-selector","#size-select"),l.setAttribute("data-button-text","Find my size"),o.appendChild(l);const u=d=>{n(d.detail),r(d.detail.size)};return window.addEventListener("fitscan:size",u),()=>{window.removeEventListener("fitscan:size",u),o.innerHTML=""}},[]),c.jsxs("div",{className:"stack",children:[c.jsxs("div",{className:"alert info",children:['This is a pretend shop ("Demo Boutique") showing how a store plugs FitScan into its own product page. Click ',c.jsx("b",{children:"Find my size"}),", scan (or type measurements), and watch the size menu fill itself in."]}),c.jsxs("div",{className:"card product",children:[c.jsx("div",{className:"img","aria-hidden":"true",children:"DEMO BOUTIQUE"}),c.jsxs("div",{className:"stack",children:[c.jsxs("div",{children:[c.jsx("div",{className:"small muted",children:"Demo Boutique / Bottoms"}),c.jsx("h1",{style:{fontSize:"1.7rem"},children:"Classic Straight Jeans"}),c.jsx("div",{className:"price",children:"Rs 1,499"})]}),c.jsxs("label",{className:"field",children:[c.jsx("span",{children:"Size"}),c.jsxs("select",{id:"size-select",value:i,onChange:o=>r(o.target.value),"aria-label":"Size",children:[c.jsx("option",{value:"",children:"Select a size"}),gC.map(o=>c.jsx("option",{value:o,children:o},o))]})]}),c.jsx("div",{ref:t}),e&&c.jsxs("div",{className:"alert info",role:"status","data-testid":"demo-picked",children:["FitScan recommends ",c.jsx("b",{children:e.size})," (",Math.round(e.p_fit*100),"% chance it fits). The size menu was filled in for you."]}),c.jsx("button",{className:"btn",disabled:!i,onClick:()=>a(`Added: Classic Straight Jeans, size ${i}`),children:"Add to cart"}),s&&c.jsx("div",{className:"alert info small",children:s}),c.jsxs("p",{className:"small muted",children:["Store owners: see ",c.jsx(Dh,{to:"/store",children:"For stores"})," to upload your own size chart and copy the embed code."]})]})]})]})}function _C(){const[t]=KS(),e=t.get("store")||"",n=t.get("category")||"",i=t.get("gender")||"",[r,s]=P.useState(null),[a,o]=P.useState(""),[l,u]=P.useState(1),[d,f]=P.useState(i||"F"),[p,g]=P.useState(""),[_,y]=P.useState(null),[m,h]=P.useState(null),[x,v]=P.useState(!1),[S,C]=P.useState(!1),[b,M]=P.useState(""),[D,T]=P.useState(null),[w,z]=P.useState(!1),[$,Q]=P.useState({bust:"",waist:"",hip:"",neck:"",shoulder:""}),[U,H]=P.useState("in"),[B,O]=P.useState(null);P.useEffect(()=>{if(!e){o("This size finder is missing its store key.");return}Ye("/api/embed/info",{store:e}).then(re=>{s(re);const Ee=re.charts.filter(Ce=>Ce.category===n).map(Ce=>Ce.gender);Ee.length?!i&&Ee.length===1&&f(Ee[0]):o("This store has not added a size chart for this product type yet.")}).catch(re=>o(re.message))},[e,n,i]);const L=r?r.charts.filter(re=>re.category===n).map(re=>re.gender):[],k=parseFloat(p),G=k>=90&&k<=230,j=P.useMemo(()=>N0($),[$]),q=r&&r.charts.find(re=>re.category===n&&re.gender===d),te=(q?q.required:["bust","waist","hip"]).every(re=>j[re]>=8);async function ne(){M(""),C(!0);try{const re=new FormData;re.append("front",_),re.append("side",m),re.append("height_cm",String(k)),re.append("gender",d);const Ee=await Ye("/api/embed/scan",{method:"POST",form:re,store:e});T(Ee),z(!1),Q({bust:Ee.measurements.bust.inches,waist:Ee.measurements.waist.inches,hip:Ee.measurements.hip.inches,neck:"",shoulder:""}),u(3)}catch(re){M(re instanceof vi?re.message:"Scan failed.")}finally{C(!1)}}async function he(){M(""),C(!0);const re={};for(const Ee of Object.keys(j))re[Ee]=!w&&D&&D.measurements[Ee]&&Math.abs(D.measurements[Ee].inches-j[Ee])<.05?D.sigma_in[Ee]:w?.4:.5;try{const Ee=await Ye("/api/embed/recommend",{method:"POST",store:e,json:{gender:d,category:n,measures:j,sigma:re,source:w?"tape":"scan"}});O(Ee.result),u(4)}catch(Ee){M(Ee.message)}finally{C(!1)}}function oe(){const re=B.recommended;re&&window.parent.postMessage({type:"fitscan:size",size:re.size,p_fit:re.p_fit,category:n,close:!0},"*")}return a?c.jsx("div",{className:"embed",children:c.jsx("div",{className:"alert err",role:"alert",children:a})}):c.jsxs("div",{className:"embed","data-testid":"embed",children:[c.jsxs("h2",{style:{paddingRight:40},children:["Find my size",r?` - ${r.store}`:""]}),c.jsxs("p",{className:"muted small",children:["Using this store's own size chart for ",c.jsx("b",{children:n}),". Your photos are never stored."]}),l===1&&c.jsxs("div",{className:"stack",children:[!i&&L.length>1&&c.jsxs("div",{className:"seg",role:"group","aria-label":"Gender",children:[c.jsx("button",{"aria-pressed":d==="F",onClick:()=>f("F"),children:"Women"}),c.jsx("button",{"aria-pressed":d==="M",onClick:()=>f("M"),children:"Men"})]}),c.jsxs("label",{className:"field",children:[c.jsx("span",{children:"Your height (cm)"}),c.jsx("input",{type:"number",min:"90",max:"230",value:p,onChange:re=>g(re.target.value),placeholder:"e.g. 165","aria-label":"Height in centimetres"})]}),c.jsxs("div",{className:"row",children:[c.jsx("button",{className:"btn",disabled:!G,onClick:()=>u(2),children:"Continue"}),c.jsx("button",{className:"btn plain",onClick:()=>{z(!0),T(null),u(3)},children:"Type measurements"})]})]}),l===2&&c.jsxs("div",{className:"stack",children:[c.jsx("div",{className:"small muted",children:"Plain background, full body, arms slightly away from your sides. Side photo: turn 90 degrees."}),c.jsxs("div",{className:"grid2",children:[c.jsx(zs,{kind:"front",file:_,onFile:y,hint:"Facing the camera"}),c.jsx(zs,{kind:"side",file:m,onFile:h,hint:"Turn 90 degrees"})]}),c.jsxs("label",{className:"row small",style:{alignItems:"flex-start",gap:8},children:[c.jsx("input",{type:"checkbox",checked:x,onChange:re=>v(re.target.checked),style:{marginTop:3},"aria-label":"Consent"}),c.jsx("span",{children:"I agree my photos are processed only to estimate measurements and are not saved."})]}),b&&c.jsx("div",{className:"alert err",role:"alert",children:b}),c.jsxs("div",{className:"row",children:[c.jsx("button",{className:"btn plain",onClick:()=>u(1),children:"Back"}),c.jsx("button",{className:"btn",disabled:!_||!m||!x||S,onClick:ne,children:S?"Scanning...":"Scan"})]})]}),l===3&&c.jsxs("div",{className:"stack",children:[D&&c.jsxs(c.Fragment,{children:[c.jsxs("span",{className:`badge ${D.quality}`,children:["Scan quality: ",D.quality]}),D.warnings.length>0&&c.jsx("div",{className:"alert warn small",children:c.jsx("ul",{children:D.warnings.map(re=>c.jsx("li",{children:re},re))})}),D.overlay_jpeg_b64&&c.jsx("img",{className:"overlay-img",alt:"Scan overlay",src:`data:image/jpeg;base64,${D.overlay_jpeg_b64}`})]}),c.jsx(P0,{gender:d,values:$,onChange:Q,unit:U,setUnit:H,scanned:D?D.measurements:null}),q&&c.jsxs("p",{className:"small muted",children:["This product uses: ",q.dims.map(re=>Uh[d][re]).join(", "),"."]}),b&&c.jsx("div",{className:"alert err",role:"alert",children:b}),c.jsxs("div",{className:"row",children:[c.jsx("button",{className:"btn plain",onClick:()=>u(w?1:2),children:"Back"}),c.jsx("button",{className:"btn",disabled:!te||S,onClick:he,children:S?"Working...":"Get my size"})]})]}),l===4&&B&&c.jsxs("div",{className:"stack",children:[c.jsx(Ih,{r:B,measures:j,showFeedback:!1}),c.jsxs("div",{className:"row",children:[c.jsx("button",{className:"btn",disabled:!B.recommended,onClick:oe,"data-testid":"use-size",children:B.recommended?`Use size ${B.recommended.size}`:"No size fits"}),c.jsx("button",{className:"btn plain",onClick:()=>u(3),children:"Adjust"})]})]})]})}function xC({cell:t}){if(!t)return c.jsx("span",{className:"pill na",children:"n/a"});if(!t.size)return c.jsx("span",{className:"pill na",title:t.status,children:t.status==="above_range"?"too large":"too small"});const e=t.p_fit>=.75?"hi":t.p_fit>=.5?"mid":"lo";return c.jsxs("span",{className:`pill ${e}`,title:`${Math.round(t.p_fit*100)}% fits`,children:[t.size.split(" ")[0]," · ",Math.round(t.p_fit*100),"%"]})}function yC(){const[t,e]=P.useState([]),[n,i]=P.useState("general"),[r,s]=P.useState("regular"),[a,o]=P.useState(null),[l,u]=P.useState(""),[d,f]=P.useState(!1);P.useEffect(()=>{Ye("/api/catalog").then(_=>e(_.brands)).catch(()=>{})},[]);async function p(){f(!0),u("");try{const _=await Ye("/api/lab/run",{method:"POST",json:{brand:n,fit_pref:r}});o(_.rows)}catch(_){u(_.message)}finally{f(!1)}}P.useEffect(()=>{p()},[n,r]);const g=P.useMemo(()=>{if(!a)return[];const _=new Map;a.forEach(m=>Object.entries(m.results).forEach(([h,x])=>{_.has(`${m.person.sex}:${h}`)||_.set(`${m.person.sex}:${h}`,x.label)}));const y=[];return a.forEach(m=>Object.keys(m.results).forEach(h=>{y.includes(h)||y.push(h)})),y},[a]);return c.jsxs("div",{className:"card stack",children:[c.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[c.jsxs("div",{children:[c.jsx("h2",{style:{marginBottom:2},children:"1. Reference people"}),c.jsx("span",{className:"muted small",children:"The 20 body types (ages 6-74) run through the size engine using their tape measurements."})]}),c.jsxs("div",{className:"row",children:[c.jsxs("select",{value:n,onChange:_=>i(_.target.value),"aria-label":"Brand",style:{width:"auto"},children:[c.jsx("option",{value:"general",children:"General sizes"}),t.map(_=>c.jsx("option",{value:_.key,children:_.name},_.key))]}),c.jsxs("select",{value:r,onChange:_=>s(_.target.value),"aria-label":"Fit preference",style:{width:"auto"},children:[c.jsx("option",{value:"snug",children:"Snug"}),c.jsx("option",{value:"regular",children:"Regular"}),c.jsx("option",{value:"relaxed",children:"Relaxed"})]})]})]}),l&&c.jsx("div",{className:"alert err",children:l}),d&&!a&&c.jsx("div",{className:"muted",children:"Running..."}),a&&c.jsx("div",{className:"scroll",children:c.jsxs("table",{className:"simple","data-testid":"people-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"#"}),c.jsx("th",{children:"Sex"}),c.jsx("th",{children:"Age"}),c.jsx("th",{children:"Body"}),c.jsx("th",{children:"Ht"}),c.jsx("th",{children:"Bust/Chest"}),c.jsx("th",{children:"Waist"}),c.jsx("th",{children:"Hip"}),g.map(_=>c.jsx("th",{children:_},_))]})}),c.jsx("tbody",{children:a.map(({person:_,results:y})=>c.jsxs("tr",{children:[c.jsx("td",{children:_.id}),c.jsx("td",{children:_.sex}),c.jsx("td",{children:_.age}),c.jsx("td",{children:_.body_type}),c.jsx("td",{children:_.height}),c.jsx("td",{children:_.bust}),c.jsx("td",{children:_.waist}),c.jsx("td",{children:_.hip}),g.map(m=>c.jsx("td",{children:y[m]?c.jsx(xC,{cell:y[m]}):c.jsx("span",{className:"pill na",children:"-"})},m))]},_.id))})]})}),c.jsx("p",{className:"small muted",children:`Measurements in cm. "too small / too large" means the person falls outside the chart's range (these charts are adult sizes S-XXL; kids and plus sizes need extra charts).`})]})}function SC(){const[t,e]=P.useState([]),[n,i]=P.useState("custom"),[r,s]=P.useState(""),[a,o]=P.useState(""),[l,u]=P.useState("F"),[d,f]=P.useState({bust:"",waist:"",hip:""}),[p,g]=P.useState(null),[_,y]=P.useState(null),[m,h]=P.useState(null),[x,v]=P.useState(!1),[S,C]=P.useState(""),[b,M]=P.useState(""),[D,T]=P.useState(null),w=()=>Ye("/api/lab/accuracy").then(T).catch(()=>{});P.useEffect(()=>{Ye("/api/lab/people").then(e).catch(()=>{}),w()},[]);function z(O){if(i(O),O==="custom")return;const L=t.find(k=>String(k.id)===O);L&&(f({bust:L.bust,waist:L.waist,hip:L.hip}),o(L.height),u(L.sex),s(`Person ${L.id}`))}async function $(){v(!0),C(""),M(""),h(null);try{const O=new FormData;O.append("front",p),O.append("side",_),O.append("height_cm",String(a)),O.append("gender",l),h(await Ye("/api/scan",{method:"POST",form:O}))}catch(O){C(O instanceof vi?O.message:"Scan failed")}finally{v(!1)}}async function Q(){const O={},L={};for(const k of["bust","waist","hip"])d[k]!==""&&(O[k]=m.measurements[k].raw_cm,L[k]=Number(d[k]));try{const k=await Ye("/api/lab/record",{method:"POST",json:{label:r,raw_cm:O,tape_cm:L}});M(`Saved ${k.recorded} pairs.`),w()}catch(k){C(k.message)}}async function U(){try{const O=await Ye("/api/lab/apply-calibration",{method:"POST"});M(`Calibration applied to: ${O.applied.join(", ")}. New scans use it.`),w()}catch(O){C(O.message)}}async function H(){await Ye("/api/lab/records",{method:"DELETE"}),M("Log cleared."),w()}const B=p&&_&&a&&Object.values(d).every(O=>O!=="");return c.jsxs("div",{className:"card stack",children:[c.jsxs("div",{children:[c.jsx("h2",{style:{marginBottom:2},children:"2. Scan accuracy (scan vs tape measure)"}),c.jsx("span",{className:"muted small",children:"This produces the validation result for your report: how far the photo scan is from a real tape measurement."})]}),c.jsxs("div",{className:"grid3",children:[c.jsxs("label",{className:"field",children:[c.jsx("span",{children:"Person"}),c.jsxs("select",{value:n,onChange:O=>z(O.target.value),"aria-label":"Person",children:[c.jsx("option",{value:"custom",children:"Custom (volunteer)"}),t.map(O=>c.jsxs("option",{value:O.id,children:["#",O.id," ",O.sex," ",O.age,"y ",O.body_type]},O.id))]})]}),c.jsxs("label",{className:"field",children:[c.jsx("span",{children:"Label"}),c.jsx("input",{type:"text",value:r,onChange:O=>s(O.target.value),"aria-label":"Label"})]}),c.jsxs("label",{className:"field",children:[c.jsx("span",{children:"Height (cm)"}),c.jsx("input",{type:"number",value:a,onChange:O=>o(O.target.value),"aria-label":"Height cm"})]}),c.jsxs("label",{className:"field",children:[c.jsx("span",{children:"Sex"}),c.jsxs("select",{value:l,onChange:O=>u(O.target.value),"aria-label":"Sex",children:[c.jsx("option",{value:"F",children:"F"}),c.jsx("option",{value:"M",children:"M"})]})]}),["bust","waist","hip"].map(O=>c.jsxs("label",{className:"field",children:[c.jsxs("span",{children:["Tape ",O," (cm)"]}),c.jsx("input",{type:"number",value:d[O],onChange:L=>f({...d,[O]:L.target.value}),"aria-label":`Tape ${O} cm`})]},O))]}),c.jsxs("div",{className:"grid2",children:[c.jsx(zs,{kind:"front",file:p,onFile:g,hint:"Front photo"}),c.jsx(zs,{kind:"side",file:_,onFile:y,hint:"Side photo"})]}),S&&c.jsx("div",{className:"alert err",role:"alert",children:S}),b&&c.jsx("div",{className:"alert info",role:"status",children:b}),c.jsx("div",{className:"row",children:c.jsx("button",{className:"btn",disabled:!B||x,onClick:$,children:x?"Scanning...":"Scan and compare"})}),m&&c.jsxs("div",{className:"stack",children:[c.jsxs("table",{className:"simple",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Measurement"}),c.jsx("th",{children:"Scan (raw)"}),c.jsx("th",{children:"Scan (calibrated)"}),c.jsx("th",{children:"Tape"}),c.jsx("th",{children:"Error (cm)"})]})}),c.jsx("tbody",{children:["bust","waist","hip"].map(O=>{const L=m.measurements[O],k=d[O]===""?null:Number(d[O]);return c.jsxs("tr",{children:[c.jsx("td",{children:O}),c.jsx("td",{children:xr(L.raw_cm)}),c.jsx("td",{children:xr(L.cm)}),c.jsx("td",{children:k===null?"-":xr(k)}),c.jsx("td",{children:k===null?"-":xr(L.cm-k)})]},O)})})]}),c.jsxs("div",{className:"row",children:[c.jsx("button",{className:"btn ghost",onClick:Q,children:"Save to validation log"}),c.jsxs("span",{className:"small muted",children:["Scanner: ",m.backend]})]})]}),D&&c.jsxs("div",{className:"stack",children:[c.jsxs("h3",{children:["Validation log (",D.records," pairs)"]}),c.jsxs("table",{className:"simple","data-testid":"accuracy-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Measurement"}),c.jsx("th",{children:"Pairs"}),c.jsx("th",{children:"Mean abs. error (cm)"}),c.jsx("th",{children:"Bias (cm)"}),c.jsx("th",{children:"Suggested calibration"})]})}),c.jsx("tbody",{children:["bust","waist","hip"].map(O=>{const L=D.dims[O];return c.jsxs("tr",{children:[c.jsx("td",{children:O}),c.jsx("td",{children:L.n}),c.jsx("td",{children:L.n?L.mae_cm:"-"}),c.jsx("td",{children:L.n?L.bias_cm:"-"}),c.jsx("td",{children:L.suggested?`x${L.suggested.scale} + ${L.suggested.offset_cm} cm`:L.n?"needs 8+ pairs":"-"})]},O)})})]}),c.jsxs("div",{className:"row",children:[c.jsx("button",{className:"btn ghost small",onClick:U,children:"Apply suggested calibration"}),c.jsx("button",{className:"btn plain small",onClick:H,children:"Clear log"})]})]})]})}function MC(){const[t,e]=P.useState(null);return P.useEffect(()=>{Ye("/api/feedback/summary").then(e).catch(()=>{})},[]),c.jsxs("div",{className:"card stack",children:[c.jsxs("div",{children:[c.jsx("h2",{style:{marginBottom:2},children:"3. Are the probabilities honest?"}),c.jsx("span",{className:"muted small",children:'From "Bought it? How did it fit" answers. If we say 70% fits, about 70% of those buyers should say "Perfect". The Brier score is lower-is-better (0 = perfect).'})]}),!t||t.n===0?c.jsx("p",{className:"muted",children:'No fit feedback yet. Use the "Bought it?" buttons on results to collect some.'}):c.jsxs(c.Fragment,{children:[c.jsxs("table",{className:"simple",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Predicted chance"}),c.jsx("th",{children:"Answers"}),c.jsx("th",{children:"Avg predicted"}),c.jsx("th",{children:"Actually fit"})]})}),c.jsx("tbody",{children:t.bins.map(n=>c.jsxs("tr",{children:[c.jsx("td",{children:n.range}),c.jsx("td",{children:n.n}),c.jsxs("td",{children:[Math.round(n.predicted*100),"%"]}),c.jsxs("td",{children:[Math.round(n.observed*100),"%"]})]},n.range))})]}),c.jsxs("div",{className:"small muted",children:[t.n," answers - Brier score ",t.brier]})]})]})}function EC(){return c.jsxs("div",{className:"stack",children:[c.jsxs("div",{className:"hero",style:{paddingBottom:0},children:[c.jsx("h1",{children:"Lab"}),c.jsx("p",{children:"Test the engine on your reference people, measure the scanner's accuracy against a tape, and check that the probabilities are calibrated. These are the numbers for your report."})]}),c.jsx(yC,{}),c.jsx(SC,{}),c.jsx(MC,{})]})}const Zm="fitscan_admin_key",Au=t=>new Date(t*1e3).toLocaleString("en-IN",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"});function wC(){const[t,e]=P.useState(()=>{try{return sessionStorage.getItem(Zm)||""}catch{return""}}),[n,i]=P.useState(null),[r,s]=P.useState("");async function a(d=t){s("");try{const f=await Ye("/api/admin/overview",{headers:{"X-Admin-Key":d}});i(f);try{sessionStorage.setItem(Zm,d)}catch{}}catch(f){i(null),s(f instanceof vi?f.message:"Could not load.")}}P.useEffect(()=>{t&&a()},[]);async function o(){const f=await(await fetch("/api/admin/customers.csv",{headers:{"X-Admin-Key":t}})).blob(),p=document.createElement("a");p.href=URL.createObjectURL(f),p.download="fitscan-customers.csv",p.click()}if(!n)return c.jsxs("div",{className:"card stack",style:{maxWidth:440,margin:"30px auto"},children:[c.jsx("h2",{style:{margin:0},children:"Admin"}),c.jsxs("p",{className:"muted small",style:{margin:0},children:["Customers, sign-ups and feedback. Enter the admin key (default for the demo: ",c.jsx("code",{children:"fitscan-admin"}),"; change it with the FITSCAN_ADMIN_KEY setting)."]}),c.jsxs("label",{className:"field",children:[c.jsx("span",{children:"Admin key"}),c.jsx("input",{type:"password",value:t,onChange:d=>e(d.target.value),"aria-label":"Admin key"})]}),r&&c.jsx("div",{className:"alert err",role:"alert",children:r}),c.jsx("button",{className:"btn",onClick:()=>a(),children:"Open dashboard"})]});const l=n.totals,u=Math.max(1,...n.daily.map(d=>d.signups));return c.jsxs("div",{className:"stack",children:[c.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[c.jsx("h2",{style:{margin:0},children:"Customers and feedback"}),c.jsxs("div",{className:"row",children:[c.jsx("button",{className:"btn small ghost",onClick:()=>a(),children:"Refresh"}),c.jsx("button",{className:"btn small",onClick:o,children:"Download customers (CSV)"})]})]}),c.jsxs("div",{className:"grid3",children:[c.jsxs("div",{className:"card kpi",children:[c.jsx("span",{children:"Customers registered"}),c.jsx("b",{"data-testid":"admin-customers",children:l.customers}),c.jsxs("small",{children:[l.email," email, ",l.mobile," mobile"]})]}),c.jsxs("div",{className:"card kpi",children:[c.jsx("span",{children:"Size profiles saved"}),c.jsx("b",{children:l.saved_scans}),c.jsx("small",{children:"re-scans included"})]}),c.jsxs("div",{className:"card kpi",children:[c.jsx("span",{children:"Average rating"}),c.jsx("b",{children:l.average_rating?l.average_rating.toFixed(1):"-"}),c.jsxs("small",{children:[l.reviews," reviews"]})]})]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{style:{marginTop:0},children:"New customers, last 14 days"}),c.jsx("div",{className:"bars",role:"img","aria-label":"Sign-ups per day",children:n.daily.map(d=>c.jsxs("div",{className:"barcol",children:[c.jsx("i",{style:{height:`${d.signups/u*100}%`},title:`${d.date}: ${d.signups}`}),c.jsx("span",{children:d.signups||""}),c.jsx("small",{children:d.date.split(" ")[0]})]},d.date))})]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{style:{marginTop:0},children:"Feedback"}),n.reviews.length===0&&c.jsx("p",{className:"muted small",children:"No feedback yet."}),n.reviews.map(d=>c.jsxs("div",{className:"reviewrow",children:[c.jsx(kd,{value:d.rating,size:14})," ",c.jsx("b",{children:d.name})," ",c.jsxs("span",{className:"faint small",children:[d.who," - ",Au(d.created)]}),d.comment&&c.jsx("div",{className:"small",children:d.comment})]},d.id))]}),c.jsxs("div",{className:"card",style:{overflowX:"auto"},children:[c.jsx("h3",{style:{marginTop:0},children:"Registered customers"}),c.jsxs("table",{className:"mtable",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Name"}),c.jsx("th",{children:"Contact"}),c.jsx("th",{children:"Registered"}),c.jsx("th",{children:"Last login"}),c.jsx("th",{children:"Saved scans"})]})}),c.jsx("tbody",{children:n.customers.map(d=>c.jsxs("tr",{children:[c.jsx("td",{children:d.name||c.jsx("span",{className:"faint",children:"-"})}),c.jsx("td",{children:d.masked}),c.jsx("td",{className:"small",children:Au(d.created)}),c.jsx("td",{className:"small",children:Au(d.last_login)}),c.jsx("td",{children:d.scans})]},d.id))})]}),c.jsx("p",{className:"small muted",children:"Contacts are masked here. Photos are never stored."})]})]})}function TC(t){const e=(t||"").trim();return e?e.includes("@")?"email":/^[+\d][\d\s\-().]*$/.test(e)?"mobile":"":""}function bC({onClose:t,onLoggedIn:e,reason:n}){const[i,r]=P.useState(1),[s,a]=P.useState(""),[o,l]=P.useState(""),[u,d]=P.useState(""),[f,p]=P.useState(null),[g,_]=P.useState(!1),[y,m]=P.useState(""),[h,x]=P.useState(0),v=P.useRef(null),S=TC(s);P.useEffect(()=>{v.current&&v.current.focus()},[i]),P.useEffect(()=>{if(h<=0)return;const M=setTimeout(()=>x(h-1),1e3);return()=>clearTimeout(M)},[h]);async function C(M){M&&M.preventDefault(),m(""),_(!0);try{const D=await Ye("/api/auth/request",{method:"POST",json:{identifier:s}});p(D),r(2),d(""),x(30)}catch(D){m(D instanceof vi?D.message:"Could not send the code.")}finally{_(!1)}}async function b(M){M&&M.preventDefault(),m(""),_(!0);try{const D=await Ye("/api/auth/verify",{method:"POST",json:{identifier:s,code:u,name:o||void 0}});al(D.token),e(D.customer,D.is_new)}catch(D){m(D instanceof vi?D.message:"Could not verify the code.")}finally{_(!1)}}return c.jsx("div",{className:"modal-bg",onClick:M=>{M.target===M.currentTarget&&t()},role:"dialog","aria-modal":"true","aria-label":"Log in",children:c.jsxs("div",{className:"modal small-modal",children:[c.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[c.jsx("h2",{style:{margin:0},children:i===1?"Log in or sign up":"Enter your code"}),c.jsx("button",{className:"btn plain small",onClick:t,children:"Close"})]}),i===1&&c.jsxs("form",{onSubmit:C,className:"stack",style:{marginTop:10},children:[c.jsx("p",{className:"muted small",style:{margin:0},children:n||"We will remember your measurements and sizes so you never start from scratch."}),c.jsxs("label",{className:"field",children:[c.jsx("span",{children:"Email or mobile number"}),c.jsx("input",{ref:v,value:s,onChange:M=>a(M.target.value),inputMode:S==="mobile"?"tel":"email",autoComplete:"username",placeholder:"you@example.com or 98765 43210","aria-label":"Email or mobile number"})]}),c.jsxs("div",{className:"small muted","aria-live":"polite","data-testid":"detect-hint",children:[S==="email"&&"Looks like an email. We will send a 6-digit code there.",S==="mobile"&&"Looks like a mobile number. We will text a 6-digit code (India +91 is assumed unless you add a country code).",!S&&"No password needed. Type either one."]}),c.jsxs("label",{className:"field",children:[c.jsxs("span",{children:["Your name ",c.jsx("span",{className:"faint",children:"(optional)"})]}),c.jsx("input",{value:o,onChange:M=>l(M.target.value),maxLength:40,autoComplete:"given-name","aria-label":"Your name"})]}),y&&c.jsx("div",{className:"alert err",role:"alert",children:y}),c.jsx("button",{className:"btn",disabled:g||!S,children:g?c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"spinner"})," Sending..."]}):"Send code"}),c.jsx("p",{className:"small muted",style:{margin:0},children:"We only keep your contact and the measurements you choose to save. Photos are never stored. You can delete your account any time."})]}),i===2&&f&&c.jsxs("form",{onSubmit:b,className:"stack",style:{marginTop:10},children:[c.jsxs("p",{className:"muted small",style:{margin:0},children:[f.sent?`We sent a code to ${f.masked}.`:`Code for ${f.masked}.`," ",f.existing?"Welcome back!":"Creating your account."]}),f.demo&&c.jsxs("div",{className:"alert info small","data-testid":"demo-code",children:[c.jsx("b",{children:"Demo mode:"})," no SMS or email service is connected yet, so the code is shown here: ",c.jsx("b",{className:"democode",children:f.demo_code}),c.jsx("div",{children:c.jsx("button",{type:"button",className:"btn small ghost",style:{marginTop:6},onClick:()=>d(f.demo_code),children:"Fill it in for me"})})]}),c.jsxs("label",{className:"field",children:[c.jsx("span",{children:"6-digit code"}),c.jsx("input",{ref:v,value:u,onChange:M=>d(M.target.value.replace(/\D/g,"").slice(0,6)),inputMode:"numeric",autoComplete:"one-time-code","aria-label":"6-digit code",placeholder:"123456"})]}),y&&c.jsx("div",{className:"alert err",role:"alert",children:y}),c.jsx("button",{className:"btn",disabled:g||u.length<6,children:g?c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"spinner"})," Checking..."]}):"Log in"}),c.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[c.jsxs("button",{type:"button",className:"btn plain small",onClick:()=>{r(1),m("")},children:["Change ",S==="mobile"?"number":"email"]}),c.jsx("button",{type:"button",className:"btn plain small",disabled:h>0||g,onClick:C,children:h>0?`Resend in ${h}s`:"Resend code"})]})]})]})})}function AC(){return c.jsx("span",{className:"logo","aria-hidden":"true",children:c.jsx("svg",{width:"18",height:"18",viewBox:"0 0 32 32",fill:"none",stroke:"#fff",strokeWidth:"2.6",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M9 22V10h6M9 16h5M19 10v12M19 10h4a3 3 0 010 6h-4"})})})}function CC(){const[t,e]=P.useState(A0()),[n,i]=P.useState(!1),r=Fr(),[s,a]=P.useState(null),[o,l]=P.useState(!1),[u,d]=P.useState(!1),[f,p]=P.useState("");P.useEffect(()=>{C0()&&Ye("/api/me").then(h=>a(h.customer)).catch(h=>{h.status===401&&al("")})},[]);const g=(h,x)=>{a(h),l(!1),p(x?"Welcome to FitScan! Your account is ready.":`Welcome back${h.name?`, ${h.name.split(" ")[0]}`:""}!`),setTimeout(()=>p(""),4e3)},_=async()=>{try{await Ye("/api/auth/logout",{method:"POST"})}catch{}al(""),a(null),d(!1)},y=async()=>{if(window.confirm("Delete your account and everything we saved about you? This cannot be undone.")){try{await Ye("/api/me",{method:"DELETE"})}catch{}al(""),a(null),d(!1)}},m=h=>{QS(h),e(h),i(!1)};return r.pathname.startsWith("/embed")?c.jsx(mp,{children:c.jsx(Ai,{path:"/embed",element:c.jsx(_C,{})})}):c.jsxs(c.Fragment,{children:[c.jsx("header",{className:"top",children:c.jsxs("div",{className:"wrap",children:[c.jsxs(ar,{to:"/",className:"brand",children:[c.jsx(AC,{}),c.jsx("span",{className:"t",children:"FitScan"})]}),c.jsxs("nav",{className:"nav","aria-label":"Main",children:[c.jsx(ar,{to:"/",end:!0,children:"Find my size"}),c.jsx(ar,{to:"/store",children:"For stores"}),c.jsx(ar,{to:"/demo-store",children:"Store demo"}),c.jsx(ar,{to:"/lab",children:"Lab"})]}),c.jsxs("div",{className:"plan",children:[s?c.jsxs("div",{className:"acct",children:[c.jsxs("button",{className:"btn small ghost","aria-haspopup":"menu","aria-expanded":u,onClick:()=>d(!u),"data-testid":"account-btn",children:[c.jsx("span",{className:"avatardot","aria-hidden":"true",children:(s.name||s.masked).charAt(0).toUpperCase()}),s.name?s.name.split(" ")[0]:"Account"]}),u&&c.jsxs("div",{className:"acctmenu",role:"menu",children:[c.jsxs("div",{className:"small muted",style:{padding:"6px 10px"},children:["Signed in as",c.jsx("br",{}),c.jsx("b",{children:s.masked})]}),c.jsx("button",{role:"menuitem",onClick:_,"data-testid":"logout",children:"Log out"}),c.jsx("button",{role:"menuitem",className:"danger",onClick:y,children:"Delete my account"})]})]}):c.jsx("button",{className:"btn small ghost",onClick:()=>l(!0),"data-testid":"login-btn",children:"Log in"}),c.jsx("span",{className:`badge ${t==="pro"?"pro":""}`,children:t==="pro"?"Pro":"Free"}),c.jsx("button",{className:"btn small ghost",onClick:()=>i(!0),children:t==="pro"?"Plan":"Upgrade"})]})]})}),c.jsx("main",{className:"wrap",style:{paddingTop:18,paddingBottom:30},children:c.jsxs(mp,{children:[c.jsx(Ai,{path:"/",element:c.jsx(fC,{plan:t,onUpgrade:()=>i(!0),customer:s,onLogin:()=>l(!0)})}),c.jsx(Ai,{path:"/store",element:c.jsx(pC,{})}),c.jsx(Ai,{path:"/demo-store",element:c.jsx(vC,{})}),c.jsx(Ai,{path:"/lab",element:c.jsx(EC,{})}),c.jsx(Ai,{path:"/admin",element:c.jsx(wC,{})}),c.jsx(Ai,{path:"*",element:c.jsxs("div",{className:"card",children:[c.jsx("h2",{children:"Page not found"}),c.jsx(ar,{to:"/",children:"Go home"})]})})]})}),c.jsxs("footer",{className:"wrap footer",children:[c.jsx(ar,{to:"/admin",className:"adminlink",children:"Admin"})," · FitScan prototype. Photos are processed in memory to estimate measurements and are never stored. Size charts are approximate; always check the product page."]}),c.jsx(sM,{}),f&&c.jsx("div",{className:"hello",role:"status",children:f}),o&&c.jsx(bC,{onClose:()=>l(!1),onLoggedIn:g}),n&&c.jsx(rM,{plan:t,onClose:()=>i(!1),onChoose:m})]})}d0(document.getElementById("root")).render(c.jsx(lg.StrictMode,{children:c.jsx(WS,{children:c.jsx(CC,{})})}));
