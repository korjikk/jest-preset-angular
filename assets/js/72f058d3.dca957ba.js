"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1688],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8410:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(3117),o=n(102),a=(n(7294),n(4137)),i=["components"],s={id:"troubleshooting",title:"Troubleshooting"},l=void 0,u={unversionedId:"guides/troubleshooting",id:"version-8.x/guides/troubleshooting",title:"Troubleshooting",description:"You can check Jest troubleshooting guide",source:"@site/versioned_docs/version-8.x/guides/troubleshooting.md",sourceDirName:"guides",slug:"/guides/troubleshooting",permalink:"/jest-preset-angular/docs/8.x/guides/troubleshooting",draft:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-8.x/guides/troubleshooting.md",tags:[],version:"8.x",frontMatter:{id:"troubleshooting",title:"Troubleshooting"},sidebar:"version-8.x-docs",previous:{title:"Absolute Imports",permalink:"/jest-preset-angular/docs/8.x/guides/absolute-imports"}},p={},c=[{value:"Common issues",id:"common-issues",level:2},{value:"Can&#39;t resolve all parameters for SomeClass(?)",id:"cant-resolve-all-parameters-for-someclass",level:3},{value:"@Input() bindings are not reflected into fixture when <code>ChangeDetectionStrategy.OnPush</code> is used",id:"input-bindings-are-not-reflected-into-fixture-when-changedetectionstrategyonpush-is-used",level:3},{value:"The animation trigger &quot;transformMenu&quot; has failed",id:"the-animation-trigger-transformmenu-has-failed",level:3},{value:"Unexpected token import|export|other",id:"unexpected-token-importexportother",level:3},{value:"Allow vendor libraries like jQuery, etc...",id:"allow-vendor-libraries-like-jquery-etc",level:3},{value:"Coverage fail but tests pass",id:"coverage-fail-but-tests-pass",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can check Jest ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/troubleshooting"},"troubleshooting guide")),(0,a.kt)("h2",{id:"common-issues"},"Common issues"),(0,a.kt)("p",null,"Problems may arise if you're using custom builds (this preset is tailored for ",(0,a.kt)("inlineCode",{parentName:"p"},"angular-cli")," as firstly priority). Please be advised that every entry in default configuration may be overridden to best suite your app's needs."),(0,a.kt)("h3",{id:"cant-resolve-all-parameters-for-someclass"},"Can't resolve all parameters for SomeClass(?)"),(0,a.kt)("p",null,"With Angular 8 and higher, a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/thymikee/jest-preset-angular/issues/288"},"change to the way the Angular CLI works")," may be causing your metadata to be lost. You can update your ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.spec.json")," to include the ",(0,a.kt)("inlineCode",{parentName:"p"},"emitDecoratorMetadata")," compiler option:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  "compilerOptions": {\n    "emitDecoratorMetadata": true\n')),(0,a.kt)("p",null,"In general, this is related to Angular's reflection and also depends on a reflection library, as e. g. included in ",(0,a.kt)("inlineCode",{parentName:"p"},"core-js"),". We use our own minimal reflection that satisfy Angular's current requirements, but in case these change, you can install ",(0,a.kt)("inlineCode",{parentName:"p"},"core-js")," and import the reflection library in your ",(0,a.kt)("inlineCode",{parentName:"p"},"setup-jest.ts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"require('core-js/es/reflect');\nrequire('core-js/proposals/reflect-metadata');\n")),(0,a.kt)("p",null,"Note that this might also be related to other issues with the dependency injection and parameter type reflection."),(0,a.kt)("h3",{id:"input-bindings-are-not-reflected-into-fixture-when-changedetectionstrategyonpush-is-used"},"@Input() bindings are not reflected into fixture when ",(0,a.kt)("inlineCode",{parentName:"h3"},"ChangeDetectionStrategy.OnPush")," is used"),(0,a.kt)("p",null,"This issue is not related to Jest, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/angular/angular/issues/12313"},"it's a known Angular bug")),(0,a.kt)("p",null,"To mitigate this, you need to wrap your component under test, into some container component with default change detection strategy (",(0,a.kt)("inlineCode",{parentName:"p"},"ChangeDetectionStrategy.Default"),") and pass props through it, or overwrite change detection strategy within ",(0,a.kt)("inlineCode",{parentName:"p"},"TestBed")," setup, if it's not critical for the test."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// override change detection strategy\nbeforeEach(async(() => {\n  TestBed.configureTestingModule({ declarations: [PizzaItemComponent] })\n    .overrideComponent(PizzaItemComponent, {\n      set: { changeDetection: ChangeDetectionStrategy.Default },\n    })\n    .compileComponents();\n}));\n")),(0,a.kt)("h3",{id:"the-animation-trigger-transformmenu-has-failed"},'The animation trigger "transformMenu" has failed'),(0,a.kt)("p",null,"The currently used JSDOM version handles this, but older versions used before v7 of this preset was missing transform property. To patch it for Angular Material, use this workaround."),(0,a.kt)("p",null,"Add this to your ",(0,a.kt)("inlineCode",{parentName:"p"},"jestGlobalMocks")," file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Object.defineProperty(document.body.style, 'transform', {\n  value: () => {\n    return {\n      enumerable: true,\n      configurable: true,\n    };\n  },\n});\n")),(0,a.kt)("p",null,"Reference: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/angular/material2/issues/7101"},"https://github.com/angular/material2/issues/7101")),(0,a.kt)("h3",{id:"unexpected-token-importexportother"},"Unexpected token ","[import|export|other]"),(0,a.kt)("p",null,"This means, that a file is not transformed through ",(0,a.kt)("inlineCode",{parentName:"p"},"TypeScript")," compiler, e.g. because it is a ",(0,a.kt)("inlineCode",{parentName:"p"},"JS")," file with ",(0,a.kt)("inlineCode",{parentName:"p"},"TS")," syntax, or\nit is published to npm as uncompiled source files. Here's what you can do. A typical Jest error is like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"({\"Object.<anonymous>\":function(module,exports,require,__dirname,__filename,jest){import * as i0 from '@angular/core';\n                                                                                                                                           ^^^^^^\n    SyntaxError: Cannot use import statement outside a module\n")),(0,a.kt)("p",null,"To fix the issue, one needs to adjust ",(0,a.kt)("inlineCode",{parentName:"p"},"transformIgnorePatterns")," whitelist:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // ...other options\n  transformIgnorePatterns: ['node_modules/(?!@angular|@ngrx)'],\n};\n")),(0,a.kt)("p",null,"By default, Jest doesn't transform ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),", because they should be valid JavaScript files. However, it happens that\nlibrary authors assume that you'll compile their sources. So you have to tell this to Jest explicitly.\nAbove snippet means that ",(0,a.kt)("inlineCode",{parentName:"p"},"@angular"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"@ngrx")," will be transformed, even though they're ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,a.kt)("h3",{id:"allow-vendor-libraries-like-jquery-etc"},"Allow vendor libraries like jQuery, etc..."),(0,a.kt)("p",null,"The same like normal Jest configuration, you can load jQuery in your Jest setup file. For example your Jest setup file is ",(0,a.kt)("inlineCode",{parentName:"p"},"setup-jest.ts")," you can declare jQuery:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"window.$ = require('path/to/jquery');\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import $ from 'jquery';\nglobal.$ = global.jQuery = $;\n")),(0,a.kt)("p",null,"The same declaration can be applied to other vendor libraries."),(0,a.kt)("p",null,"Reference: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/issues/708"},"https://github.com/facebook/jest/issues/708")),(0,a.kt)("h3",{id:"coverage-fail-but-tests-pass"},"Coverage fail but tests pass"),(0,a.kt)("p",null,"This issue happens because Jest uses ",(0,a.kt)("inlineCode",{parentName:"p"},"Babel")," behind the screen to create coverage reporter. To fix this issue, one can do the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("inlineCode",{parentName:"li"},"babel-jest"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"@babel/core")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"@babel/preset-env")),(0,a.kt)("li",{parentName:"ul"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},".babelrc")," at the same place where Jest config file locates and define the necessary ",(0,a.kt)("inlineCode",{parentName:"li"},"Babel")," plugins.\nFor example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  // this plugin will fix issue with class inheritance\n  "plugins": ["@babel/plugin-transform-classes"]\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Define the usage of ",(0,a.kt)("inlineCode",{parentName:"li"},"Babel")," in Jest config via ",(0,a.kt)("inlineCode",{parentName:"li"},"ts-jest")," option, for example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// jest.config.js\nmodule.exports = {\n   globals: {\n      'ts-jest': {\n          //...\n          babelConfig: true\n      }\n   }\n}\n")))}m.isMDXComponent=!0}}]);