"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7964],{4137:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(r),g=a,d=f["".concat(u,".").concat(g)]||f[g]||p[g]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9528:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(4137)),i=["components"],s={id:"angular-ivy",title:"Angular Ivy"},u=void 0,l={unversionedId:"guides/angular-ivy",id:"version-9.x/guides/angular-ivy",title:"Angular Ivy",description:"Starting from v9.0.0+, jest-preset-angular is fully compatible with Angular Ivy. To make sure that Jest uses the",source:"@site/versioned_docs/version-9.x/guides/angular-ivy.md",sourceDirName:"guides",slug:"/guides/angular-ivy",permalink:"/jest-preset-angular/docs/9.x/guides/angular-ivy",draft:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-9.x/guides/angular-ivy.md",tags:[],version:"9.x",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1675223179,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{id:"angular-ivy",title:"Angular Ivy"},sidebar:"version-9.x-docs",previous:{title:"Test environment",permalink:"/jest-preset-angular/docs/9.x/getting-started/test-environment"},next:{title:"ESM Support",permalink:"/jest-preset-angular/docs/9.x/guides/esm-support"}},c={},p=[],f={toc:p};function g(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Starting from ",(0,o.kt)("strong",{parentName:"p"},"v9.0.0+"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," is fully compatible with Angular Ivy. To make sure that Jest uses the\nAngular Ivy, you must run ",(0,o.kt)("inlineCode",{parentName:"p"},"ngcc")," before running tests. ",(0,o.kt)("inlineCode",{parentName:"p"},"ngcc")," will transform all Angular-format packages to be compatible\nwith Ivy compiler."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," also provides util script to help you to run ",(0,o.kt)("inlineCode",{parentName:"p"},"ngcc")," with Jest but this script only works via the\nJavaScript version of Jest config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nrequire('jest-preset-angular/ngcc-jest-processor');\n\nmodule.exports = {\n  // [...]\n};\n")))}g.isMDXComponent=!0}}]);