"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9574],{4137:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2723:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(4137)),a=["components"],s={id:"test-environment",title:"Test environment"},c=void 0,u={unversionedId:"getting-started/test-environment",id:"version-9.x/getting-started/test-environment",title:"Test environment",description:"If you look at setup-jest.ts,",source:"@site/versioned_docs/version-9.x/getting-started/test-environment.md",sourceDirName:"getting-started",slug:"/getting-started/test-environment",permalink:"/jest-preset-angular/docs/9.x/getting-started/test-environment",draft:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-9.x/getting-started/test-environment.md",tags:[],version:"9.x",lastUpdatedBy:"Ahn",lastUpdatedAt:1669287098,formattedLastUpdatedAt:"Nov 24, 2022",frontMatter:{id:"test-environment",title:"Test environment"},sidebar:"version-9.x-docs",previous:{title:"Options",permalink:"/jest-preset-angular/docs/9.x/getting-started/options"},next:{title:"Angular Ivy",permalink:"/jest-preset-angular/docs/9.x/guides/angular-ivy"}},l={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you look at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/thymikee/jest-preset-angular/blob/main/src/config/setup-jest.ts"},(0,i.kt)("inlineCode",{parentName:"a"},"setup-jest.ts")),",\nwhat we're doing here is we're adding globals required by Angular. With the included ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/thymikee/jest-preset-angular/tree/main/src/zone-patch"},"jest-zone-patch"),"\nwe also make sure Jest test methods run in Zone context. Then we initialize the Angular testing environment like normal."))}m.isMDXComponent=!0}}]);