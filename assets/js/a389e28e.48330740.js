"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2472],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||s;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},425:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(6010),s="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,o),hidden:n},t)}},3992:function(e,t,n){n.d(t,{Z:function(){return E}});var r=n(7462),a=n(7294),s=n(6010),o=n(6775),u=n(5238),i=n(3609),l=n(2560);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function c(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,i.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function d(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,s=(0,o.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,u._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(s.location.search);t.set(i,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[i,s])]}function f(e){var t,n,r,s,o=e.defaultValue,u=e.queryString,i=void 0!==u&&u,p=e.groupId,f=c(e),g=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:f})})),v=g[0],b=g[1],h=d({queryString:i,groupId:p}),k=h[0],y=h[1],j=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),n=(0,l.Nk)(t),r=n[0],s=n[1],[r,(0,a.useCallback)((function(e){t&&s.set(e)}),[t,s])]),E=j[0],N=j[1],w=function(){var e=null!=k?k:E;return m({value:e,tabValues:f})?e:null}();return(0,a.useLayoutEffect)((function(){w&&b(w)}),[w]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),N(e)}),[y,N,f]),tabValues:f}}var g=n(2957),v=n(1048),b="tabList__CuJ",h="tabItem_LNqP";function k(e){var t=e.className,n=e.block,o=e.selectedValue,u=e.selectValue,i=e.tabValues,l=[],p=(0,g.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=l.indexOf(t),r=i[n].value;r!==o&&(p(t),u(r))},m=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;n=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var s,o=l.indexOf(e.currentTarget)-1;n=null!=(s=l[o])?s:l[l.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},i.map((function(e){var t=e.value,n=e.label,u=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return l.push(e)},onKeyDown:m,onClick:c},u,{className:(0,s.Z)("tabs__item",h,null==u?void 0:u.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var s=n.find((function(e){return e.props.value===r}));return s?(0,a.cloneElement)(s,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function j(e){var t=f(e);return a.createElement("div",{className:(0,s.Z)("tabs-container",b)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function E(e){var t=(0,v.Z)();return a.createElement(j,(0,r.Z)({key:String(t)},e))}},7077:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(7462),a=n(3366),s=(n(7294),n(4137)),o=n(3992),u=n(425),i=["components"],l={id:"esm-support",title:"ESM Support"},p=void 0,c={unversionedId:"guides/esm-support",id:"version-12.0/guides/esm-support",title:"ESM Support",description:"To use jest-preset-angular with ESM support, you'll first need to check ESM Jest documentation.",source:"@site/versioned_docs/version-12.0/guides/esm-support.md",sourceDirName:"guides",slug:"/guides/esm-support",permalink:"/jest-preset-angular/docs/guides/esm-support",draft:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-12.0/guides/esm-support.md",tags:[],version:"12.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1675516814,formattedLastUpdatedAt:"Feb 4, 2023",frontMatter:{id:"esm-support",title:"ESM Support"},sidebar:"version-12.0-docs",previous:{title:"Angular >=13",permalink:"/jest-preset-angular/docs/guides/angular-13+"},next:{title:"Configure other JSDOM versions",permalink:"/jest-preset-angular/docs/guides/jsdom-version"}},m={},d=[{value:"Examples",id:"examples",level:3},{value:"Manual configuration",id:"manual-configuration",level:4},{value:"Use ESM presets",id:"use-esm-presets",level:4}],f={toc:d};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"To use ",(0,s.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," with ESM support, you'll first need to check ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/ecmascript-modules"},"ESM Jest documentation"),"."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," supports ESM via a ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-jest")," config option ",(0,s.kt)("a",{parentName:"p",href:"https://kulshekhar.github.io/ts-jest/docs/getting-started/options/useESM"},"useESM")," in combination with jest config option ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/configuration#extensionstotreatasesm-arraystring"},"extensionsToTreatAsEsm"),"."),(0,s.kt)("p",null,"There is also a ",(0,s.kt)("a",{parentName:"p",href:"/jest-preset-angular/docs/getting-started/presets"},"preset")," to work with ESM."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"We have ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/thymikee/jest-preset-angular/tree/main/examples"},"example apps")," which contains base ESM setup to work with Jest and Angular.")),(0,s.kt)("p",null,"Besides, there is ",(0,s.kt)("inlineCode",{parentName:"p"},"setup-jest.mjs")," to add to Jest setup file to ensure that Jest can set up test environment properly."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import 'jest-preset-angular/setup-jest.mjs';\n")),(0,s.kt)("h3",{id:"examples"},"Examples"),(0,s.kt)("h4",{id:"manual-configuration"},"Manual configuration"),(0,s.kt)(o.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,s.kt)(u.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"module.exports = {\n  //...\n  extensionsToTreatAsEsm: ['.ts'],\n  globals: {\n    'ts-jest': {\n      tsconfig: '<rootDir>/tsconfig.spec.json',\n      stringifyContentPathRegex: '\\\\.html$',\n      useESM: true,\n    },\n  },\n};\n"))),(0,s.kt)(u.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  //...\n  extensionsToTreatAsEsm: ['.ts'],\n  globals: {\n    'ts-jest': {\n      tsconfig: '<rootDir>/tsconfig.spec.json',\n      stringifyContentPathRegex: '\\\\.html$',\n      useESM: true,\n    },\n  },\n};\n\nexport default jestConfig;\n"))),(0,s.kt)(u.Z,{value:"JSON",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  //...\n  "jest": {\n    "extensionsToTreatAsEsm": [".ts"],\n    "globals": {\n      "ts-jest": {\n        "tsconfig": "<rootDir>/tsconfig.spec.json",\n        "stringifyContentPathRegex": "\\\\.html$",\n        "useESM": true\n      }\n    }\n  }\n}\n')))),(0,s.kt)("h4",{id:"use-esm-presets"},"Use ESM presets"),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Jest will attempt to load ",(0,s.kt)("strong",{parentName:"p"},"ESM")," files from ",(0,s.kt)("inlineCode",{parentName:"p"},"node_modules")," with default ",(0,s.kt)("inlineCode",{parentName:"p"},"jest-resolve")," which usually works for most of the cases.\nHowever, there are cases like Angular libraries ",(0,s.kt)("strong",{parentName:"p"},"ESM")," built files or ",(0,s.kt)("strong",{parentName:"p"},"ESM")," files which are outside ",(0,s.kt)("inlineCode",{parentName:"p"},"node_modules")," might not be loaded\ncorrectly."),(0,s.kt)("p",{parentName:"admonition"},"To fix that, one can use ",(0,s.kt)("inlineCode",{parentName:"p"},"moduleNameMapper")," in jest config to instruct Jest to load the correct ",(0,s.kt)("strong",{parentName:"p"},"ESM")," files or create a\ncustom Jest ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/configuration#resolver-string"},"resolver"),".")),(0,s.kt)(o.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,s.kt)(u.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"module.exports = {\n  //...\n  preset: 'jest-preset-angular/presets/defaults-esm',\n};\n"))),(0,s.kt)(u.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { Config } from 'jest';\n\nconst jestConfig = {\n  //...\n  preset: 'jest-preset-angular/presets/defaults-esm',\n};\n\nexport default jestConfig;\n"))),(0,s.kt)(u.Z,{value:"JSON",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'// OR package.json\n{\n  //...\n  "jest": {\n    "preset": "jest-preset-angular/presets/defaults-esm"\n  }\n}\n')))))}g.isMDXComponent=!0}}]);