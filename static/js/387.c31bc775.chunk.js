(self.webpackChunkmodular_app=self.webpackChunkmodular_app||[]).push([[387],{1081:function(e,a,t){"use strict";t.d(a,{Z:function(){return P}});var s=t(7313),i=t(6417),r=function(){return(0,i.jsx)("div",{})},n=t(1413),l=t(6123),c=t.n(l);var o=t.p+"static/media/left-arrow.2371d25ae4da5666885314488cd7e031.svg";var d=t.p+"static/media/burger.95ad86a68af36a771a941051e6301463.svg",m=t(6609);var u=t.p+"static/media/dark-mode.a64ce9a42aec862c162723ef488c3922.svg";var x=t.p+"static/media/light-mode.69c05ba156fdcd0e12357c70b4a0164a.svg";var h=t.p+"static/media/it.7ee7a27e030791474f5325883a3a0b5d.svg";var g=t.p+"static/media/fr.8a07eb7d76b133b1d7e7eb5f58090ee3.svg";var p=t.p+"static/media/en.47367165e20d8ee8fd695ad9809c5bed.svg";var f=t.p+"static/media/de.0c498278a03bc745b591ddb0eba4f00e.svg";var v=t.p+"static/media/es.cc5d62ae82786953f93d0e5a21888e19.svg",j=(0,i.jsx)("img",{alt:"",src:m,width:100,height:100}),b=(0,i.jsx)("img",{alt:"",src:o}),N=(0,i.jsx)("img",{alt:"",src:d,width:60}),w=(0,i.jsx)("img",{alt:"",src:u,width:30}),k=(0,i.jsx)("img",{alt:"",src:x,width:30}),y={it:(0,i.jsx)("img",{alt:"",width:20,height:20,src:h}),de:(0,i.jsx)("img",{alt:"",width:20,height:20,src:f}),fr:(0,i.jsx)("img",{alt:"",width:20,height:20,src:g}),es:(0,i.jsx)("img",{alt:"",width:20,height:20,src:v}),en:(0,i.jsx)("img",{alt:"",width:20,height:20,src:p})},C=t(7995),O=t(6352),E=t(4240),M=t(5005),P={pagesRendering:function(e){return(0,s.lazy)((function(){return t(717)("./".concat(e))}))},content:r,modals:{},darkMode:!0,preloader:function(){return(0,i.jsx)("div",{className:"preloader"})},header:function(){var e=(0,O.I0)(),a=(0,O.v9)(C.getAppName),t=(0,O.v9)(C.isHomePage),r=(0,O.v9)(C.getHomePage),n=(0,O.v9)(C.isInDarkMode),l=(0,s.useCallback)((function(){e((0,C.setDarkMode)(!n))}),[e,n]),c=(0,O.v9)(C.getLanguage),o=Object.keys(y);return(0,i.jsxs)("div",{className:"flex flex-col test-class",children:[(0,i.jsx)("div",{className:"flex flex-col items-end",children:(0,i.jsxs)("div",{className:"flex flex-row",children:[(0,i.jsx)(M.Lt,{dark:!1,value:o.findIndex((function(e){return e===c})),shadow:!0,onChange:function(a){e((0,C.changeLanguage)(o[a]))},content:Object.keys(y).map((function(e){return{name:e,icon:y[e]}}))}),(0,i.jsx)(M.ZD,{onIcon:k,offIcon:w,shadow:!0,dark:n,value:!n,onChange:l,className:"mx-1"})]})}),(0,i.jsxs)("div",{className:"flex flex-row",children:[(0,i.jsx)("div",{className:"my-auto",children:(0,i.jsx)(M.zx,{"aria-label":"drawer button",onClick:function(){e((0,C.openDrawer)())},unstyled:!0,className:"outline-none",children:(0,i.jsx)("div",{className:"p-1 sm:p-2 md:p-2 lg:p-2 xl:p-2",children:N})})}),(0,i.jsx)("div",{className:"my-auto",children:(0,i.jsx)(M.zx,{"aria-label":"back button",onClick:function(){e((0,C.requestRoute)(r))},unstyled:!0,className:"overflow-auto ml-1 outline-none",hide:t,children:b})}),(0,i.jsxs)("div",{className:"m-auto flex flex-row p-2",children:[(0,i.jsxs)("div",{className:"mr-2 my-auto",children:[" ",j]}),(0,i.jsx)("div",{className:"flex flex-col my-auto",children:(0,i.jsx)(M.rU,{dark:n,newTab:!0,to:"https://github.com/CianciarusoCataldo/modular-app",children:(0,i.jsx)("p",{className:"break-words text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl 2xl:text-4xl 3xl:text-4xl 4xl:text-4xl",children:a})})})]})]})]})},footer:function(){return(0,i.jsx)("div",{className:"flex flex-col items-center my-2",children:(0,i.jsxs)("div",{className:"flex flex-row p-2",children:[(0,i.jsx)("img",{alt:"",className:"p-1",src:"https://img.shields.io/github/license/cianciarusocataldo/modular-app",height:"25"}),(0,i.jsx)("img",{alt:"",className:"p-1",src:"https://img.shields.io/github/package-json/v/cianciarusocataldo/modular-app?label=latest%20version",height:"25"})]})})},drawer:{content:function(){var e=(0,O.I0)(),a=(0,O.v9)(C.getPages),t=(0,O.v9)(C.geti18nConfig),s=(0,O.v9)(C.getHomePage),r=(0,O.v9)(C.isInDarkMode),l=(0,E.$)(t.pagesNamespace).t,o=(0,n.Z)((0,n.Z)({},a),{},{HOME_PAGE:s});return(0,i.jsx)("div",{children:Object.keys(o).sort().map((function(a,t){return(0,i.jsxs)("div",{className:"mt-1 mb-3",children:[(0,i.jsx)(M.zx,{unstyled:!0,onClick:function(){e((0,C.requestRoute)(o[a])),e((0,C.closeDrawer)())},className:c()({"text-white":r,"text-gray-600":!r},"hover:text-orange-500 text-xl"),children:l(a)}),(0,i.jsx)(M.iz,{dark:r})]},"drawer_app_element_".concat(t))}))})},logo:function(){var e=(0,O.v9)(C.getAppName),a=(0,C.driveWithDarkMode)(M.rU);return(0,i.jsxs)("div",{className:"flex flex-row",children:[j,(0,i.jsx)(a,{to:"https://github.com/CianciarusoCataldo/modular-app",className:"ml-1 text-lg break-all",newTab:!0,children:e})]})},elements:[]}}},6637:function(e,a){"use strict";a.Z={appName:"Modular-app",redux:{modal:!0,ui:!0,epics:[],reducers:{},preload:{}},router:{basename:"/modular-app",homePage:"/",pages:{}},i18n:{fallbackLanguage:"en",supportedLanguages:["en","it","es","fr","de"],loadPath:"/modular-app/locales/{{lng}}/{{ns}}.json",pagesNamespace:"page-titles",modalsNamespace:"modal-titles"}}},717:function(e,a,t){var s={"./HOME_PAGE":[5218,218],"./HOME_PAGE/":[5218,218],"./HOME_PAGE/index":[5218,218],"./HOME_PAGE/index.tsx":[5218,218]};function i(e){if(!t.o(s,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=s[e],i=a[0];return t.e(a[1]).then((function(){return t(i)}))}i.keys=function(){return Object.keys(s)},i.id=717,e.exports=i},6609:function(e,a,t){"use strict";e.exports=t.p+"static/media/logo.f75eb98212c8f4007cea.png"},9444:function(e){"use strict";e.exports=JSON.parse('{"header":{"height":"20%","className":""},"router":{"height":"70%","className":""},"footer":{"height":"10%","className":""}}')}}]);