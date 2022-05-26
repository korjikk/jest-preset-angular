"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7119],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),g=a,d=m["".concat(l,".").concat(g)]||m[g]||c[g]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5938:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(3117),a=n(102),o=(n(7294),n(4137)),i=["components"],s={id:"test-environment",title:"Test environment"},l=void 0,p={unversionedId:"getting-started/test-environment",id:"getting-started/test-environment",title:"Test environment",description:"If you look at setup-jest.js,",source:"@site/docs/getting-started/test-environment.md",sourceDirName:"getting-started",slug:"/getting-started/test-environment",permalink:"/jest-preset-angular/docs/next/getting-started/test-environment",draft:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/docs/getting-started/test-environment.md",tags:[],version:"current",frontMatter:{id:"test-environment",title:"Test environment"},sidebar:"docs",previous:{title:"Options",permalink:"/jest-preset-angular/docs/next/getting-started/options"},next:{title:"Angular Ivy",permalink:"/jest-preset-angular/docs/next/guides/angular-ivy"}},u={},c=[{value:"Configure test environment",id:"configure-test-environment",level:3}],m={toc:c};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you look at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/thymikee/jest-preset-angular/blob/main/setup-jest.js"},(0,o.kt)("inlineCode",{parentName:"a"},"setup-jest.js")),",\nwhat we're doing here is we're adding globals required by Angular. With the included ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/angular/angular/tree/main/packages/zone.js"},"Angular zone patch"),"\nwe also make sure Jest test methods run in Zone context. Then we initialize the Angular testing environment like normal."),(0,o.kt)("p",null,"While ",(0,o.kt)("inlineCode",{parentName:"p"},"setup-jest.js")," above is for running Jest with ",(0,o.kt)("strong",{parentName:"p"},"CommonJS")," mode, we also provide ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/thymikee/jest-preset-angular/blob/main/setup-jest.mjs"},(0,o.kt)("inlineCode",{parentName:"a"},"setup-jest.mjs")),"\nto run with ",(0,o.kt)("strong",{parentName:"p"},"ESM")," mode."),(0,o.kt)("h3",{id:"configure-test-environment"},"Configure test environment"),(0,o.kt)("p",null,"When creating Angular test environment with ",(0,o.kt)("inlineCode",{parentName:"p"},"TestBed"),", it is possible to specify the behavior of ",(0,o.kt)("inlineCode",{parentName:"p"},"teardown")," via ",(0,o.kt)("inlineCode",{parentName:"p"},"globalThis")," in the Jest setup file.\nFor example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// setup-test.ts\nglobalThis.ngJest = {\n  destroyAfterEach: true,\n};\n\nimport 'jest-preset-angular/setup-jest';\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," will look at ",(0,o.kt)("inlineCode",{parentName:"p"},"globalThis.ngJest")," and pass the correct ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/angular/angular/blob/6952a0a3e68481564b2bc4955afb3ac186df6e34/packages/core/testing/src/test_bed_common.ts#L98"},(0,o.kt)("inlineCode",{parentName:"a"},"ModuleTearDownOptions"))," object to ",(0,o.kt)("inlineCode",{parentName:"p"},"TestBed"),"."))}g.isMDXComponent=!0}}]);