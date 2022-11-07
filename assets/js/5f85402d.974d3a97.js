"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1430],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},425:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=n(6010),o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},4259:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7462),a=n(7294),o=n(6010),l=n(1048),i=n(3609),s=n(1943),u=n(2957),p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n,l=e.lazy,d=e.block,m=e.defaultValue,f=e.values,g=e.groupId,b=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.l)(k,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==h&&!k.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var j=(0,s.U)(),N=j.tabGroupChoices,w=j.setTabGroupChoices,C=(0,a.useState)(h),O=C[0],T=C[1],E=[],D=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var P=N[g];null!=P&&P!==O&&k.some((function(e){return e.value===P}))&&T(P)}var x=function(e){var t=e.currentTarget,n=E.indexOf(t),r=k[n].value;r!==O&&(D(t),T(r),null!=g&&w(g,String(r)))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=E.indexOf(e.currentTarget)+1;n=null!=(r=E[a])?r:E[0];break;case"ArrowLeft":var o,l=E.indexOf(e.currentTarget)-1;n=null!=(o=E[l])?o:E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},b)},k.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return E.push(e)},onKeyDown:S,onFocus:x,onClick:x},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},4516:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),l=n(4259),i=n(425),s=["components"],u={id:"installation",title:"Installation"},p=void 0,c={unversionedId:"getting-started/installation",id:"version-12.0/getting-started/installation",title:"Installation",description:"Dependencies",source:"@site/versioned_docs/version-12.0/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/jest-preset-angular/docs/getting-started/installation",draft:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-12.0/getting-started/installation.md",tags:[],version:"12.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1667839097,formattedLastUpdatedAt:"Nov 7, 2022",frontMatter:{id:"installation",title:"Installation"},sidebar:"version-12.0-docs",previous:{title:"Processing flow",permalink:"/jest-preset-angular/docs/processing"},next:{title:"Presets",permalink:"/jest-preset-angular/docs/getting-started/presets"}},d={},m=[{value:"Dependencies",id:"dependencies",level:3},{value:"NPM",id:"npm",level:4},{value:"Yarn",id:"yarn",level:4},{value:"Configuration",id:"configuration",level:3},{value:"Customizing",id:"customizing",level:3},{value:"Global mocks",id:"global-mocks",level:4},{value:"Avoid karma conflicts",id:"avoid-karma-conflicts",level:4}],f={toc:m};function g(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"dependencies"},"Dependencies"),(0,o.kt)("p",null,"You can install ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," and dependencies all at once with one of the following commands."),(0,o.kt)("h4",{id:"npm"},"NPM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -D jest jest-preset-angular @types/jest\n")),(0,o.kt)("h4",{id:"yarn"},"Yarn"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add -D jest jest-preset-angular @types/jest\n")),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"In your project root, create ",(0,o.kt)("inlineCode",{parentName:"p"},"setup-jest.ts")," file with following contents:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import 'jest-preset-angular/setup-jest';\n")),(0,o.kt)("p",null,"Add the following section:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"to your root ",(0,o.kt)("inlineCode",{parentName:"li"},"jest.config.js"))),(0,o.kt)(l.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"module.exports = {\n  preset: 'jest-preset-angular',\n  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],\n  globalSetup: 'jest-preset-angular/global-setup',\n};\n"))),(0,o.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  preset: 'jest-preset-angular',\n  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],\n  globalSetup: 'jest-preset-angular/global-setup',\n};\n\nexport default jestConfig;\n"))),(0,o.kt)(i.Z,{value:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  "jest": {\n    "preset": "jest-preset-angular",\n    "setupFilesAfterEnv": ["<rootDir>/setup-jest.ts"],\n    "globalSetup": "jest-preset-angular/global-setup"\n  }\n}\n')))),(0,o.kt)("p",null,"Adjust your ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.spec.json")," to be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": "./tsconfig.json",\n  "compilerOptions": {\n    "outDir": "./out-tsc/spec",\n    "module": "CommonJs",\n    "types": ["jest"]\n  },\n  "include": ["src/**/*.spec.ts", "src/**/*.d.ts"]\n}\n')),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"Angular doesn't support native ",(0,o.kt)("inlineCode",{parentName:"p"},"async/await")," in testing with ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," higher than ",(0,o.kt)("inlineCode",{parentName:"p"},"ES2016"),", see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/angular/components/issues/21632#issuecomment-764975917"},"https://github.com/angular/components/issues/21632#issuecomment-764975917"))),(0,o.kt)("h3",{id:"customizing"},"Customizing"),(0,o.kt)("h4",{id:"global-mocks"},"Global mocks"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},"JSDOM")," which is different from normal browsers. You might need some global browser mocks to\nsimulate the behaviors of real browsers in ",(0,o.kt)("inlineCode",{parentName:"p"},"JSDOM"),". To add global mocks, you can do the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a file ",(0,o.kt)("inlineCode",{parentName:"li"},"jest-global-mocks.ts")," to your root project."),(0,o.kt)("li",{parentName:"ul"},"Import it in your global setup file:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Assuming that your global setup file is setup-jest.ts\nimport 'jest-preset-angular/setup-jest';\nimport './jest-global-mocks';\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"An example for ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-global-mocks.ts")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"Object.defineProperty(window, 'CSS', { value: null });\nObject.defineProperty(document, 'doctype', {\n  value: '<!DOCTYPE html>',\n});\nObject.defineProperty(window, 'getComputedStyle', {\n  value: () => {\n    return {\n      display: 'none',\n      appearance: ['-webkit-appearance'],\n    };\n  },\n});\n/**\n * ISSUE: https://github.com/angular/material2/issues/7101\n * Workaround for JSDOM missing transform property\n */\nObject.defineProperty(document.body.style, 'transform', {\n  value: () => {\n    return {\n      enumerable: true,\n      configurable: true,\n    };\n  },\n});\n"))),(0,o.kt)("h4",{id:"avoid-karma-conflicts"},"Avoid karma conflicts"),(0,o.kt)("p",null,"By Angular CLI defaults you'll have a ",(0,o.kt)("inlineCode",{parentName:"p"},"src/test.ts")," file which will be picked up by jest. To circumvent this you can either rename it to ",(0,o.kt)("inlineCode",{parentName:"p"},"src/karmaTest.ts")," or hide it from jest by adding ",(0,o.kt)("inlineCode",{parentName:"p"},"<rootDir>/src/test.ts")," to jest ",(0,o.kt)("inlineCode",{parentName:"p"},"testPathIgnorePatterns")," option."))}g.isMDXComponent=!0}}]);