/*! For license information please see 311.2029c4c5.chunk.js.LICENSE.txt */
(self.webpackChunkmodular_app=self.webpackChunkmodular_app||[]).push([[311],{123:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var c in n)r.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},729:function(e,t,n){"use strict";var r=n(165);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},192:function(e,t,n){e.exports=n(729)()},165:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},240:function(e,t,n){"use strict";n.d(t,{$:function(){return y}});var r=n(878);var o=n(181),a=n(267);function i(e,t){return(0,r.Z)(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||(0,o.Z)(e,t)||(0,a.Z)()}var c=n(942),l=n(313),s=n(15);function u(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var p={};function f(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"===typeof t[0]&&p[t[0]]||("string"===typeof t[0]&&(p[t[0]]=new Date),u.apply(void 0,t))}function m(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function d(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return f("i18n.languages were undefined or empty",t.languages),!0;var r=t.languages[0],o=!!t.options&&t.options.fallbackLng,a=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var i=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!i(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||(!t.services.backendConnector.backend||!(!i(r,e)||o&&!i(a,e))))}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=(0,l.useContext)(s.OO)||{},o=r.i18n,a=r.defaultNS,c=n||o||(0,s.nI)();if(c&&!c.reportNamespaces&&(c.reportNamespaces=new s.zv),!c){f("You will need to pass in an i18next instance by using initReactI18next");var u=function(e){return Array.isArray(e)?e[e.length-1]:e},p=[u,{},!1];return p.t=u,p.i18n={},p.ready=!1,p}c.options.react&&void 0!==c.options.react.wait&&f("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var h=v(v(v({},(0,s.JP)()),c.options.react),t),y=h.useSuspense,g=h.keyPrefix,b=e||a||c.options&&c.options.defaultNS;b="string"===typeof b?[b]:b||["translation"],c.reportNamespaces.addUsedNamespaces&&c.reportNamespaces.addUsedNamespaces(b);var E=(c.isInitialized||c.initializedStoreOnce)&&b.every((function(e){return d(e,c,h)}));function x(){return c.getFixedT(null,"fallback"===h.nsMode?b:b[0],g)}var w=(0,l.useState)(x),_=i(w,2),C=_[0],k=_[1],N=(0,l.useRef)(!0);(0,l.useEffect)((function(){var e=h.bindI18n,t=h.bindI18nStore;function n(){N.current&&k(x)}return N.current=!0,E||y||m(c,b,(function(){N.current&&k(x)})),e&&c&&c.on(e,n),t&&c&&c.store.on(t,n),function(){N.current=!1,e&&c&&e.split(" ").forEach((function(e){return c.off(e,n)})),t&&c&&t.split(" ").forEach((function(e){return c.store.off(e,n)}))}}),[c,b.join()]);var O=(0,l.useRef)(!0);(0,l.useEffect)((function(){N.current&&!O.current&&k(x),O.current=!1}),[c]);var S=[C,c,E];if(S.t=C,S.i18n=c,S.ready=E,E)return S;if(!E&&!y)return S;throw new Promise((function(e){m(c,b,(function(){e()}))}))}},197:function(e,t,n){"use strict";n.d(t,{l_:function(){return N},AW:function(){return M},F0:function(){return x},rs:function(){return A}});var r=n(611);function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,(0,r.Z)(e,t)}var a=n(313),i=n(480),c=n(192),l=n.n(c),s=1073741823,u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{};function p(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(n,r){e=n,t.forEach((function(t){return t(e,r)}))}}}var f=a.createContext||function(e,t){var n,r,i="__create-react-context-"+function(){var e="__global_unique_id__";return u[e]=(u[e]||0)+1}()+"__",c=function(e){function n(){var t;return(t=e.apply(this,arguments)||this).emitter=p(t.props.value),t}o(n,e);var r=n.prototype;return r.getChildContext=function(){var e;return(e={})[i]=this.emitter,e},r.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n,r=this.props.value,o=e.value;((a=r)===(i=o)?0!==a||1/a===1/i:a!==a&&i!==i)?n=0:(n="function"===typeof t?t(r,o):s,0!==(n|=0)&&this.emitter.set(e.value,n))}var a,i},r.render=function(){return this.props.children},n}(a.Component);c.childContextTypes=((n={})[i]=l().object.isRequired,n);var f=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).state={value:e.getValue()},e.onUpdate=function(t,n){0!==((0|e.observedBits)&n)&&e.setState({value:e.getValue()})},e}o(n,t);var r=n.prototype;return r.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=void 0===t||null===t?s:t},r.componentDidMount=function(){this.context[i]&&this.context[i].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=void 0===e||null===e?s:e},r.componentWillUnmount=function(){this.context[i]&&this.context[i].off(this.onUpdate)},r.getValue=function(){return this.context[i]?this.context[i].get():e},r.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(a.Component);return f.contextTypes=((r={})[i]=l().object,r),{Provider:c,Consumer:f}},m=f,d=n(618),h=n(462),v=n(958),y=n.n(v);n(335);n(861);var g=function(e){var t=m();return t.displayName=e,t},b=g("Router-History"),E=g("Router"),x=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={location:t.history.location},n._isMounted=!1,n._pendingLocation=null,t.staticContext||(n.unlisten=t.history.listen((function(e){n._isMounted?n.setState({location:e}):n._pendingLocation=e}))),n}o(t,e),t.computeRootMatch=function(e){return{path:"/",url:"/",params:{},isExact:"/"===e}};var n=t.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},n.render=function(){return a.createElement(E.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},a.createElement(b.Provider,{children:this.props.children||null,value:this.props.history}))},t}(a.Component);a.Component;var w=function(e){function t(){return e.apply(this,arguments)||this}o(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},n.componentDidUpdate=function(e){this.props.onUpdate&&this.props.onUpdate.call(this,this,e)},n.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},n.render=function(){return null},t}(a.Component);var _={},C=0;function k(e,t){return void 0===e&&(e="/"),void 0===t&&(t={}),"/"===e?e:function(e){if(_[e])return _[e];var t=y().compile(e);return C<1e4&&(_[e]=t,C++),t}(e)(t,{pretty:!0})}function N(e){var t=e.computedMatch,n=e.to,r=e.push,o=void 0!==r&&r;return a.createElement(E.Consumer,null,(function(e){e||(0,d.Z)(!1);var r=e.history,c=e.staticContext,l=o?r.push:r.replace,s=(0,i.ob)(t?"string"===typeof n?k(n,t.params):(0,h.Z)({},n,{pathname:k(n.pathname,t.params)}):n);return c?(l(s),null):a.createElement(w,{onMount:function(){l(s)},onUpdate:function(e,t){var n=(0,i.ob)(t.to);(0,i.Hp)(n,(0,h.Z)({},s,{key:n.key}))||l(s)},to:n})}))}var O={},S=0;function P(e,t){void 0===t&&(t={}),("string"===typeof t||Array.isArray(t))&&(t={path:t});var n=t,r=n.path,o=n.exact,a=void 0!==o&&o,i=n.strict,c=void 0!==i&&i,l=n.sensitive,s=void 0!==l&&l;return[].concat(r).reduce((function(t,n){if(!n&&""!==n)return null;if(t)return t;var r=function(e,t){var n=""+t.end+t.strict+t.sensitive,r=O[n]||(O[n]={});if(r[e])return r[e];var o=[],a={regexp:y()(e,o,t),keys:o};return S<1e4&&(r[e]=a,S++),a}(n,{end:a,strict:c,sensitive:s}),o=r.regexp,i=r.keys,l=o.exec(e);if(!l)return null;var u=l[0],p=l.slice(1),f=e===u;return a&&!f?null:{path:n,url:"/"===n&&""===u?"/":u,isExact:f,params:i.reduce((function(e,t,n){return e[t.name]=p[n],e}),{})}}),null)}var M=function(e){function t(){return e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){var e=this;return a.createElement(E.Consumer,null,(function(t){t||(0,d.Z)(!1);var n=e.props.location||t.location,r=e.props.computedMatch?e.props.computedMatch:e.props.path?P(n.pathname,e.props):t.match,o=(0,h.Z)({},t,{location:n,match:r}),i=e.props,c=i.children,l=i.component,s=i.render;return Array.isArray(c)&&function(e){return 0===a.Children.count(e)}(c)&&(c=null),a.createElement(E.Provider,{value:o},o.match?c?"function"===typeof c?c(o):c:l?a.createElement(l,o):s?s(o):null:"function"===typeof c?c(o):null)}))},t}(a.Component);function j(e){return"/"===e.charAt(0)?e:"/"+e}function z(e,t){if(!e)return t;var n=j(e);return 0!==t.pathname.indexOf(n)?t:(0,h.Z)({},t,{pathname:t.pathname.substr(n.length)})}function R(e){return"string"===typeof e?e:(0,i.Ep)(e)}function T(e){return function(){(0,d.Z)(!1)}}function L(){}a.Component;var A=function(e){function t(){return e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){var e=this;return a.createElement(E.Consumer,null,(function(t){t||(0,d.Z)(!1);var n,r,o=e.props.location||t.location;return a.Children.forEach(e.props.children,(function(e){if(null==r&&a.isValidElement(e)){n=e;var i=e.props.path||e.props.from;r=i?P(o.pathname,(0,h.Z)({},e.props,{path:i})):t.match}})),r?a.cloneElement(n,{location:o,computedMatch:r}):null}))},t}(a.Component);a.useContext},134:function(e){e.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},958:function(e,t,n){var r=n(134);e.exports=m,e.exports.parse=a,e.exports.compile=function(e,t){return c(a(e,t),t)},e.exports.tokensToFunction=c,e.exports.tokensToRegExp=f;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function a(e,t){for(var n,r=[],a=0,i=0,c="",u=t&&t.delimiter||"/";null!=(n=o.exec(e));){var p=n[0],f=n[1],m=n.index;if(c+=e.slice(i,m),i=m+p.length,f)c+=f[1];else{var d=e[i],h=n[2],v=n[3],y=n[4],g=n[5],b=n[6],E=n[7];c&&(r.push(c),c="");var x=null!=h&&null!=d&&d!==h,w="+"===b||"*"===b,_="?"===b||"*"===b,C=n[2]||u,k=y||g;r.push({name:v||a++,prefix:h||"",delimiter:C,optional:_,repeat:w,partial:x,asterisk:!!E,pattern:k?s(k):E?".*":"[^"+l(C)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function i(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function c(e,t){for(var n=new Array(e.length),o=0;o<e.length;o++)"object"===typeof e[o]&&(n[o]=new RegExp("^(?:"+e[o].pattern+")$",p(t)));return function(t,o){for(var a="",c=t||{},l=(o||{}).pretty?i:encodeURIComponent,s=0;s<e.length;s++){var u=e[s];if("string"!==typeof u){var p,f=c[u.name];if(null==f){if(u.optional){u.partial&&(a+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(r(f)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var m=0;m<f.length;m++){if(p=l(f[m]),!n[s].test(p))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(p)+"`");a+=(0===m?u.prefix:u.delimiter)+p}}else{if(p=u.asterisk?encodeURI(f).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})):l(f),!n[s].test(p))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+p+'"');a+=u.prefix+p}}else a+=u}return a}}function l(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function u(e,t){return e.keys=t,e}function p(e){return e&&e.sensitive?"":"i"}function f(e,t,n){r(t)||(n=t||n,t=[]);for(var o=(n=n||{}).strict,a=!1!==n.end,i="",c=0;c<e.length;c++){var s=e[c];if("string"===typeof s)i+=l(s);else{var f=l(s.prefix),m="(?:"+s.pattern+")";t.push(s),s.repeat&&(m+="(?:"+f+m+")*"),i+=m=s.optional?s.partial?f+"("+m+")?":"(?:"+f+"("+m+"))?":f+"("+m+")"}}var d=l(n.delimiter||"/"),h=i.slice(-d.length)===d;return o||(i=(h?i.slice(0,-d.length):i)+"(?:"+d+"(?=$))?"),i+=a?"$":o&&h?"":"(?="+d+"|$)",u(new RegExp("^"+i,p(n)),t)}function m(e,t,n){return r(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return u(e,t)}(e,t):r(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(m(e[o],t,n).source);return u(new RegExp("(?:"+r.join("|")+")",p(n)),t)}(e,t,n):function(e,t,n){return f(a(e,n),t,n)}(e,t,n)}},740:function(e,t){"use strict";var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,a=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,s=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,m=n?Symbol.for("react.suspense"):60113,d=n?Symbol.for("react.suspense_list"):60120,h=n?Symbol.for("react.memo"):60115,v=n?Symbol.for("react.lazy"):60116,y=n?Symbol.for("react.block"):60121,g=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118,E=n?Symbol.for("react.scope"):60119;function x(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case u:case p:case a:case c:case i:case m:return e;default:switch(e=e&&e.$$typeof){case s:case f:case v:case h:case l:return e;default:return t}}case o:return t}}}function w(e){return x(e)===p}},335:function(e,t,n){"use strict";n(740)},918:function(e,t,n){"use strict";n(843);var r=n(313),o=60103;if(60107,"function"===typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),a("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,a={},s=null,u=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(u=t.ref),t)c.call(t,r)&&!l.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:u,props:a,_owner:i.current}}t.jsx=s,t.jsxs=s},417:function(e,t,n){"use strict";e.exports=n(918)},282:function(){},5:function(e,t,n){"use strict";n.d(t,{zx:function(){return s},W2:function(){return d},iz:function(){return u},dy:function(){return h},Lt:function(){return v},rU:function(){return p},u_:function(){return y},ZD:function(){return m}});var r=n(313),o=n(123),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}var c=function(e){var t=e.name,n=e.Component,i=e.commonProps,c=e.additionalProps,l=e.wrapper||"div";return r.createElement(l,a({"data-id":i.id,id:t,className:o(i.className,{dark:i.dark,"component-hidden":i.hide,shadowed:i.shadow,styled:!i.unstyled}),style:i.style},c),n)},l=function(e){var t=e.value,n=e.defaultValue,l=e.label,s=e.callBack,u=t||n,p=r.useState(u),f=p[0],m=p[1];r.useEffect((function(){void 0!==t&&null!==t&&m(t)}),[t]);var d=s(f,m),h=d.commonProps,v=d.additionalProps,y=i(d,["commonProps","additionalProps"]);return c(a(a({},y),{commonProps:a(a({},h),{shadow:!1,className:void 0}),Component:r.createElement("div",{className:"box-component"},l&&r.createElement("div",{className:"box-label"},l),r.createElement("div",a({className:o(h.className,{shadowed:h.shadow},"container")},v),y.Component))}))},s=function(e){var t=e.disabled,n=e.children,a=e.onClick,l=e.className,s=e.onMouseEnter,u=e.onMouseLeave,p=i(e,["disabled","children","onClick","className","onMouseEnter","onMouseLeave"]);return c({name:"modular-button",Component:r.createElement("button",{"data-id":p.id,disabled:t,onClick:a,onMouseEnter:s,onMouseLeave:u,className:o(l,{disabled:t,enabled:!t})},n),commonProps:p})},u=function(e){return c({name:"modular-divider",commonProps:e})},p=function(e){var t=e.to,n=e.children,r=e.newTab,o=i(e,["to","children","newTab"]);return c({name:"modular-link",Component:n,commonProps:o,additionalProps:{href:t,target:r?"_blank":void 0},wrapper:"a"})},f=r.createElement("svg",{x:0,y:0,viewBox:"0 0 64 64",xmlSpace:"preserve",width:"30px",height:"30px"},r.createElement("circle",{cx:32,cy:32,r:32,fill:"var(--svgexternalcolor)"}),r.createElement("g",{className:"wrapper"},r.createElement("path",{className:"external",d:"M32 52c-9.9 0-18-8.1-18-18 0-6.4 3.4-12.3 8.9-15.5 1-.6 2.2-.2 2.7.7.6 1 .2 2.2-.7 2.7C20.7 24.4 18 29.1 18 34c0 7.7 6.3 14 14 14s14-6.3 14-14c0-5.1-2.7-9.7-7.2-12.2-1-.5-1.3-1.8-.8-2.7.5-1 1.8-1.3 2.7-.8C46.5 21.5 50 27.5 50 34c0 9.9-8.1 18-18 18z"})),r.createElement("g",{className:"wrapper"},r.createElement("path",{className:"external",d:"M32 36c-1.1 0-2-.9-2-2V14c0-1.1.9-2 2-2s2 .9 2 2v20c0 1.1-.9 2-2 2z"})),r.createElement("path",{className:"internal",d:"M39.8 18c4.9 2.7 8.2 8 8.2 14 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-5.9 3.2-11 7.9-13.8M32 32V12"})),m=function(e){var t=e.value,n=e.icon,a=e.onChange,c=e.className,s=e.shadow,u=e.label,p=e.offIcon,m=e.onIcon,d=i(e,["value","icon","onChange","className","shadow","label","offIcon","onIcon"]),h=n||f,v=!0===t?m||h:p||h;return l({callBack:function(e,t){return{name:"modular-toggle",Component:r.createElement("div",{className:o("toggle-icon",{flip:!e,"flip-back":e})},v),commonProps:d,additionalProps:{onClick:function(){a&&a(!e),t(e)},className:o("container",c,{off:!e,shadowed:s})}}},defaultValue:!0,value:t,label:u})},d=(r.createElement("svg",{viewBox:"0 0 194.22 184.73",width:"30px",height:"30px",className:"icon"},r.createElement("path",{d:"M157.096 184.718l-60.01-31.565-60.025 31.542 11.476-66.828-48.546-47.34 67.103-9.737L97.115-.008l29.997 60.811 67.099 9.764-48.564 47.319z",fill:"#fc0"}),r.createElement("path",{d:"M127.315 60.416l-30.72 41.819 97.411-31.899z",fill:"#ffe680"}),r.createElement("path",{d:"M97.095 101.346v51.942l-60.63 31.117zM97.095 101.346l59.613 81.476-11.189-65.984z",fill:"#fd5"}),r.createElement("path",{d:"M.385 70.406L97.1 101.348 67.218 60.506z",fill:"#ffe680"}),r.createElement("path",{d:"M97.095 101.346V.126l29.83 60.357z",fill:"#fd5"}),r.createElement("path",{d:"M37.085 183.566l11.261-66.541 48.757-15.679z",fill:"#ffd42a"})),r.createElement("svg",{viewBox:"0 0 122.88 117.42",width:"30px",height:"30px",className:"icon"},r.createElement("path",{d:"M66.71 3.55L81.1 37.26l36.58 3.28v-.01c1.55.13 2.91.89 3.85 2.01a5.663 5.663 0 011.32 4.13v.01a5.673 5.673 0 01-1.69 3.57c-.12.13-.25.25-.39.36L93.25 74.64l8.19 35.83c.35 1.53.05 3.06-.73 4.29a5.652 5.652 0 01-3.54 2.52l-.14.03c-.71.14-1.43.15-2.12.02v.01c-.75-.13-1.47-.42-2.11-.84l-.05-.03-31.3-18.71-31.55 18.86a5.664 5.664 0 01-7.79-1.96c-.38-.64-.62-1.33-.73-2.02-.1-.63-.09-1.27.02-1.89.02-.13.04-.27.08-.4l8.16-35.7c-9.24-8.07-18.74-16.1-27.83-24.3l-.08-.08a5.64 5.64 0 01-1.72-3.7c-.1-1.45.36-2.93 1.4-4.12l.12-.13.08-.08a5.668 5.668 0 013.77-1.72h.06l36.34-3.26 14.44-33.8c.61-1.44 1.76-2.5 3.11-3.05 1.35-.54 2.9-.57 4.34.04.69.29 1.3.71 1.8 1.22.53.53.94 1.15 1.22 1.82l.02.06zm10.19 37.2L61.85 5.51a.42.42 0 00-.09-.14.42.42 0 00-.14-.09.427.427 0 00-.35 0c-.1.04-.19.12-.24.24L45.98 40.75c-.37.86-1.18 1.49-2.18 1.58l-37.9 3.4c-.08.01-.16.02-.24.02-.06 0-.13.02-.18.05-.03.01-.05.03-.07.05l-.1.12c-.05.08-.07.17-.06.26.01.09.04.18.09.25.06.05.13.11.19.17l28.63 25c.77.61 1.17 1.62.94 2.65l-8.51 37.22-.03.14c-.01.06-.02.12-.01.17a.454.454 0 00.33.36c.12.03.24.02.34-.04l32.85-19.64c.8-.5 1.85-.54 2.72-.02L95.43 112c.08.04.16.09.24.14.05.03.1.05.16.06v.01c.04.01.09.01.14 0l.04-.01c.12-.03.22-.1.28-.2.06-.09.08-.21.05-.33L87.8 74.28a2.6 2.6 0 01.83-2.55l28.86-25.2c.04-.03.07-.08.1-.13.02-.04.03-.1.04-.17a.497.497 0 00-.09-.33.48.48 0 00-.3-.15v-.01c-.01 0-.03 0-.03-.01l-37.97-3.41c-1-.01-1.93-.6-2.34-1.57z",fill:"#ffcf00"})),r.createElement("svg",{viewBox:"0 0 640 480",width:"30px",height:"30px",className:"icon"},r.createElement("defs",null,r.createElement("linearGradient",{id:"prefix__a"},r.createElement("stop",{stopColor:"#fff",offset:0}),r.createElement("stop",{stopColor:"#fff",stopOpacity:0,offset:1})),r.createElement("linearGradient",{y2:.892,x2:.5,y1:0,x1:.5,id:"prefix__b",xlinkHref:"#prefix__a"})),r.createElement("g",{fill:"#fff"},r.createElement("path",{d:"M223.68 193.958h225.4V389h-225.4z"}),r.createElement("path",{d:"M178.596 215.074s156.274-108.026 156.35-109.797c.075-1.772 151.033 106.496 151.033 106.496l-307.383 3.301z"})),r.createElement("circle",{fill:"#ff7f00",cx:330,cy:242,r:230}),r.createElement("path",{opacity:.75,fill:"url(#prefix__b)",fillRule:"evenodd",d:"M527.64 189.227a196.774 157.93 0 11-393.549 0 196.774 157.93 0 11393.55 0z"})),r.createElement("svg",{viewBox:"0 0 400 400",width:"30px",height:"30px",className:"icon"},r.createElement("path",{d:"M349.417 199.627c0 82.844-67.16 150.003-150.004 150.003S49.41 282.471 49.41 199.627 116.57 49.624 199.413 49.624s150.004 67.158 150.004 150.003z",fill:"#999"}),r.createElement("path",{transform:"matrix(2.7878 0 0 2.7878 -647.405 -765.254)",d:"M356.79 346.11c0 29.291-23.745 53.036-53.036 53.036s-53.036-23.745-53.036-53.036 23.745-53.036 53.036-53.036 53.036 23.745 53.036 53.036z",fill:"url(#prefix__b)"}),r.createElement("path",{transform:"matrix(2.53784 0 0 2.53784 -571.472 -678.737)",d:"M356.79 346.11c0 29.291-23.745 53.036-53.036 53.036s-53.036-23.745-53.036-53.036 23.745-53.036 53.036-53.036 53.036 23.745 53.036 53.036z",fill:"#ececec",filter:"url(#prefix__c)"}),r.createElement("path",{transform:"translate(-540.441 -643.38) scale(2.43566)",d:"M356.79 346.11c0 29.291-23.745 53.036-53.036 53.036s-53.036-23.745-53.036-53.036 23.745-53.036 53.036-53.036 53.036 23.745 53.036 53.036z",fill:"#999",filter:"url(#prefix__c)"}),r.createElement("path",{transform:"matrix(2.34121 0 0 2.34121 -511.747 -610.697)",d:"M356.79 346.11c0 29.291-23.745 53.036-53.036 53.036s-53.036-23.745-53.036-53.036 23.745-53.036 53.036-53.036 53.036 23.745 53.036 53.036z",fill:"url(#prefix__e)"}),r.createElement("path",{d:"M193.79 862.76c-13.331.3-26.186 7.358-33.336 19.742-7.69 13.32-6.714 29.266 1.155 41.331.853-26.532 21.132-46.515 46.324-45.054 8.258.48 16.054 3.2 22.859 7.59a39.222 39.222 0 00-16.394-18.326 39.368 39.368 0 00-20.608-5.282z",fill:"url(#prefix__e)",opacity:.318,transform:"translate(-366.51 -2423.6) scale(2.9052)"})),function(e){var t=e.children,n=e.wrapper,r=e.animated,l=i(e,["children","wrapper","animated"]);return c({name:"modular-container",Component:t,commonProps:a(a({},l),{className:o(l.className,{animated:r&&!l.hide})}),wrapper:n})}),h=function(e){var t=e.children,n=e.elements,l=e.onClose,p=e.logo,f=e.hide,m=e.className,d=i(e,["children","elements","onClose","logo","hide","className"]);return c({name:"modular-drawer",commonProps:a(a({},d),{className:o({"ease-in":!f,"ease-out":f},m)}),Component:r.createElement("div",{className:"container-internal"},r.createElement("div",{className:"buttons-panel"},p,r.createElement(s,{dark:d.dark,unstyled:!0,id:"drawer_close_button",onClick:function(){l()},className:"close-button"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"37",viewBox:"0 0 11 18"},r.createElement("path",{d:"M8.6812.1963l2.1208928 2.120293-8.484 8.4864L.1972 8.6827z"}),r.createElement("path",{d:"M10.8032656 15.0470656l-2.1213 2.1213-8.4852-8.4852 2.1213-2.1213z"})))),r.createElement("div",{className:"elements"},r.createElement("div",null,n&&n.map((function(e,t){var n=e.isActiveCallback&&e.isActiveCallback();return r.createElement("div",{key:"drawer_element_".concat(t),"data-id":"drawer_element_".concat(t),className:"element"},r.createElement(s,{unstyled:!0,id:"drawer_button_".concat(t),onClick:e.actionCallback},r.createElement("div",{className:"button"},r.createElement("div",{className:"icon"},e.icon),r.createElement("div",{className:o("text",{active:n,inactive:!n})},e.text))),r.createElement(u,{dark:d.dark}))})),t)))})},v=function(e){var t=e.content,n=void 0===t?[]:t,a=e.onChange,c=e.shadow,u=e.value;e.label,e.icon;var p=i(e,["content","onChange","shadow","value","label","icon"]),f=r.useState(!1),m=f[0],d=f[1];return l({defaultValue:0,value:u,callBack:function(e,t){var i=n[e]||{name:"",icon:r.createElement("div",null)};return{name:"modular-dropdown",Component:[r.createElement(s,{unstyled:!0,onClick:function(){d(!m)},shadow:c,dark:p.dark,className:"button",id:"options-menu",key:"options-menu"},r.createElement("div",{key:"label",className:"label"},r.createElement("div",{className:"label"},i.icon),r.createElement("div",{className:"label"},i.name)),r.createElement("div",{key:"icon",className:o("icon",{rotate:m,"rotate-back":!m})},r.createElement("p",null,r.createElement("i",{className:"arrow-icon"})))),r.createElement("div",{key:"options",className:o("options",{"component-hidden":!m,shadowed:c})},n.map((function(e,i){return r.createElement("div",{key:"dropdown_option_".concat(i),className:"option"},r.createElement(s,{unstyled:!0,id:"dropdown_option_".concat(i),onClick:function(){a&&a(i),t(i),d(!1)},key:"item_".concat(i),className:o("regular",{first:0===i,last:i===n.length-1})},e.icon,r.createElement("div",{className:"label"},e.name)))})))],commonProps:p}}})},y=function(e){var t=e.children,n=e.onClose,o=e.title,c=e.overlayClassName,u=i(e,["children","onClose","title","overlayClassName"]);return l({callBack:function(){return{name:"modular-modal",Component:[r.createElement("div",{className:"header",key:"modal_header"},r.createElement("div",{className:"title"},o),r.createElement(s,{dark:u.dark,unstyled:!0,className:"close-button",onClick:n},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 400 400",version:"1.0",height:"1.6rem",width:"1.6rem"},r.createElement("path",{fill:"var(--modular-text-color)",d:"m119.7496 67.5187-52.186 52.186 69.5301 69.5012c5.9668 5.9667 5.9668 15.5958 0 21.5625l-69.53 69.53 52.186 52.186 69.53-69.53c5.9667-5.9668 15.5958-5.9668 21.5625 0l69.53 69.53 52.186-52.186-69.53-69.53c-5.9668-5.9667-5.9668-15.5958 0-21.5625l69.53-69.5013-52.186-52.186-69.53 69.5013c-5.9667 5.9667-15.5958 5.9667-21.5625 0l-69.53-69.5012z"})))),r.createElement("div",{className:"content",key:"modal_content"},t)],commonProps:a(a({},u),{className:c})}}})}}}]);