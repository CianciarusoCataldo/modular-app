(self.webpackChunkmodular_app=self.webpackChunkmodular_app||[]).push([[59,637],{1081:function(e,a,t){"use strict";t.d(a,{Z:function(){return O}});var s=t(7313),r=t(6417),i=function(){return(0,r.jsx)("div",{})},l=t(1413),n=t(6123),c=t.n(n);var o=t.p+"static/media/left-arrow.2371d25ae4da5666885314488cd7e031.svg";var d=t.p+"static/media/burger.95ad86a68af36a771a941051e6301463.svg",u=t(6609);var m=t.p+"static/media/dark-mode.a64ce9a42aec862c162723ef488c3922.svg";var x=t.p+"static/media/light-mode.69c05ba156fdcd0e12357c70b4a0164a.svg";var g=t.p+"static/media/it.7ee7a27e030791474f5325883a3a0b5d.svg";var h=t.p+"static/media/fr.8a07eb7d76b133b1d7e7eb5f58090ee3.svg";var p=t.p+"static/media/en.47367165e20d8ee8fd695ad9809c5bed.svg";var f=t.p+"static/media/de.0c498278a03bc745b591ddb0eba4f00e.svg";var v=t.p+"static/media/es.cc5d62ae82786953f93d0e5a21888e19.svg",j=(0,r.jsx)("img",{alt:"",src:u,width:100,height:100}),b=(0,r.jsx)("img",{alt:"",src:o}),w=(0,r.jsx)("img",{alt:"",src:d,width:60}),N=(0,r.jsx)("img",{alt:"",src:m,width:30}),k=(0,r.jsx)("img",{alt:"",src:x,width:30}),y={it:(0,r.jsx)("img",{alt:"",width:20,height:20,src:g}),de:(0,r.jsx)("img",{alt:"",width:20,height:20,src:f}),fr:(0,r.jsx)("img",{alt:"",width:20,height:20,src:h}),es:(0,r.jsx)("img",{alt:"",width:20,height:20,src:v}),en:(0,r.jsx)("img",{alt:"",width:20,height:20,src:p})},C=t(9196),D=t(1084),E=t(8629),M=t(5005),O={pagesRendering:function(e){return(0,s.lazy)((function(){return t(717)("./".concat(e))}))},content:i,modals:{},preloader:function(){return(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"preloader"})})},header:function(){var e=(0,D.useDispatch)(),a=(0,D.useSelector)(C.getAppName),t=(0,D.useSelector)(C.isHomePage),i=(0,D.useSelector)(C.getHomePage),l=(0,D.useSelector)(C.isInDarkMode),n=(0,s.useCallback)((function(){e((0,C.setDarkMode)(!l))}),[e,l]),c=(0,D.useSelector)(C.getLanguage),o=Object.keys(y);return(0,r.jsxs)("div",{className:"flex flex-col test-class",children:[(0,r.jsx)("div",{className:"flex flex-col items-end",children:(0,r.jsxs)("div",{className:"flex flex-row",children:[(0,r.jsx)(M.Dropdown,{dark:!1,value:o.findIndex((function(e){return e===c})),shadow:!0,onChange:function(a){e((0,C.changeLanguage)(o[a]))},content:Object.keys(y).map((function(e){return{name:e,icon:y[e]}}))}),(0,r.jsx)(M.Toggle,{onIcon:k,offIcon:N,shadow:!0,dark:l,value:!l,onChange:n,className:"mx-1"})]})}),(0,r.jsxs)("div",{className:"flex flex-row",children:[(0,r.jsx)("div",{className:"my-auto",children:(0,r.jsx)(M.Button,{"aria-label":"drawer button",onClick:function(){e((0,C.openDrawer)())},unstyled:!0,className:"outline-none",children:(0,r.jsx)("div",{className:"p-1 sm:p-2 md:p-2 lg:p-2 xl:p-2",children:w})})}),(0,r.jsx)("div",{className:"my-auto",children:(0,r.jsx)(M.Button,{"aria-label":"back button",onClick:function(){e((0,C.requestRoute)(i))},unstyled:!0,className:"overflow-auto ml-1 outline-none",hide:t,children:b})}),(0,r.jsxs)("div",{className:"m-auto flex flex-row p-2",children:[(0,r.jsxs)("div",{className:"mr-2 my-auto",children:[" ",j]}),(0,r.jsx)("div",{className:"flex flex-col my-auto",children:(0,r.jsx)(M.Link,{dark:l,newTab:!0,to:"https://github.com/CianciarusoCataldo/modular-app",children:(0,r.jsx)("p",{className:"break-words text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl 2xl:text-4xl 3xl:text-4xl 4xl:text-4xl",children:a})})})]})]})]})},footer:function(){return(0,r.jsx)("div",{className:"flex flex-col items-center my-2",children:(0,r.jsxs)("div",{className:"flex flex-row p-2",children:[(0,r.jsx)("img",{alt:"",className:"p-1",src:"https://img.shields.io/github/license/cianciarusocataldo/modular-app",height:"25"}),(0,r.jsx)("img",{alt:"",className:"p-1",src:"https://img.shields.io/github/package-json/v/cianciarusocataldo/modular-app?label=latest%20version",height:"25"})]})})},drawer:{content:function(){var e=(0,D.useDispatch)(),a=(0,D.useSelector)(C.getPages),t=(0,D.useSelector)(C.geti18nConfig),s=(0,D.useSelector)(C.getHomePage),i=(0,D.useSelector)(C.isInDarkMode),n=(0,E.$)(t.pagesNamespace).t,o=(0,l.Z)((0,l.Z)({},a),{},{HOME_PAGE:s});return(0,r.jsx)("div",{children:Object.keys(o).sort().map((function(a,t){return(0,r.jsxs)("div",{className:"mt-1 mb-3",children:[(0,r.jsx)(M.Button,{unstyled:!0,onClick:function(){e((0,C.requestRoute)(o[a])),e((0,C.closeDrawer)())},className:c()({"text-white":i,"text-gray-600":!i},"hover:text-orange-500 text-xl"),children:n(a)}),(0,r.jsx)(M.Divider,{dark:i})]},"drawer_app_element_".concat(t))}))})},logo:function(){var e=(0,D.useSelector)(C.getAppName),a=(0,C.driveWithDarkMode)(M.Link);return(0,r.jsxs)("div",{className:"flex flex-row",children:[j,(0,r.jsx)(a,{to:"https://github.com/CianciarusoCataldo/modular-app",className:"ml-1 text-lg break-all",newTab:!0,children:e})]})},elements:[]}}},6637:function(e,a,t){"use strict";t.r(a);a.default={appName:"Modular-app",redux:{modal:!0,ui:!0,reducers:{},preload:{},epics:[],darkMode:!0},router:{basename:"/modular-app",homePage:"/",pages:{}},i18n:{fallbackLanguage:"en",supportedLanguages:["en","it","es","fr","de"],loadPath:"/modular-app/locales/{{lng}}/{{ns}}.json",pagesNamespace:"page-titles",modalsNamespace:"modal-titles"}}},717:function(e,a,t){var s={"./HOME_PAGE":[5218,218],"./HOME_PAGE/":[5218,218],"./HOME_PAGE/index":[5218,218],"./HOME_PAGE/index.tsx":[5218,218]};function r(e){if(!t.o(s,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=s[e],r=a[0];return t.e(a[1]).then((function(){return t(r)}))}r.keys=function(){return Object.keys(s)},r.id=717,e.exports=r},6609:function(e,a,t){"use strict";e.exports=t.p+"static/media/logo.f75eb98212c8f4007cea.png"}}]);