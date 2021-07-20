(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7993],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),g=l(r),m=a,f=g["".concat(s,".").concat(m)]||g[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2915:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s},default:function(){return c}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i={id:"angular-ivy",title:"Angular Ivy"},u={unversionedId:"guides/angular-ivy",id:"guides/angular-ivy",isDocsHomePage:!1,title:"Angular Ivy",description:"Starting from v9.0.0+, jest-preset-angular is fully compatible with Angular Ivy. To make sure that Jest uses the",source:"@site/docs/guides/angular-ivy.md",sourceDirName:"guides",slug:"/guides/angular-ivy",permalink:"/jest-preset-angular/docs/next/guides/angular-ivy",editUrl:"https://github.com/thymikee/jest-preset-angular/edit/master/website/docs/guides/angular-ivy.md",version:"current",frontMatter:{id:"angular-ivy",title:"Angular Ivy"},sidebar:"docs",previous:{title:"Test environment",permalink:"/jest-preset-angular/docs/next/getting-started/test-environment"},next:{title:"ESM Support",permalink:"/jest-preset-angular/docs/next/guides/esm-support"}},s=[],l={toc:s};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Starting from ",(0,o.kt)("strong",{parentName:"p"},"v9.0.0+"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," is fully compatible with Angular Ivy. To make sure that Jest uses the\nAngular Ivy, you must run ",(0,o.kt)("inlineCode",{parentName:"p"},"ngcc")," before running tests. ",(0,o.kt)("inlineCode",{parentName:"p"},"ngcc")," will transform all Angular-format packages to be compatible\nwith Ivy compiler."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," also provides util script to help you to run ",(0,o.kt)("inlineCode",{parentName:"p"},"ngcc")," with Jest but this script only works via the\nJavaScript version of Jest config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nrequire('jest-preset-angular/ngcc-jest-processor');\n\nmodule.exports = {\n  // [...]\n};\n")))}c.isMDXComponent=!0}}]);