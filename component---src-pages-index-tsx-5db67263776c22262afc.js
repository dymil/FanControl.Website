"use strict";(self.webpackChunkfan_control=self.webpackChunkfan_control||[]).push([[691],{3723:function(e,t,n){n.d(t,{L:function(){return p},M:function(){return E},P:function(){return w},S:function(){return R},_:function(){return l},a:function(){return o},b:function(){return c},g:function(){return u},h:function(){return s}});var r=n(7294),a=(n(2369),n(5697)),i=n.n(a);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(a[n]=e[n]);return a}var s=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,n,r,a){return void 0===a&&(a={}),o({},n,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},a,{opacity:t?1:0})})}function u(e,t,n,r,a,i,l,s){var c={};i&&(c.backgroundColor=i,"fixed"===n?(c.width=r,c.height=a,c.backgroundColor=i,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),s&&(c.objectPosition=s);var u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var m,d=["children"],f=function(e){var t=e.layout,n=e.width,a=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/n*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:n,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+a+"' width='"+n+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){var t=e.children,n=l(e,d);return r.createElement(r.Fragment,null,r.createElement(f,o({},n)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],g=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,n=e.srcSet,a=e.loading,i=e.alt,s=void 0===i?"":i,c=e.shouldLoad,u=l(e,h);return r.createElement("img",o({},u,{decoding:"async",loading:a,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?n:void 0,"data-srcset":c?void 0:n,alt:s}))},y=function(e){var t=e.fallback,n=e.sources,a=void 0===n?[]:n,i=e.shouldLoad,s=void 0===i||i,c=l(e,g),u=c.sizes||(null==t?void 0:t.sizes),m=r.createElement(v,o({},c,t,{sizes:u,shouldLoad:s}));return a.length?r.createElement("picture",null,a.map((function(e){var t=e.media,n=e.srcSet,a=e.type;return r.createElement("source",{key:t+"-"+a+"-"+n,type:a,media:t,srcSet:s?n:void 0,"data-srcset":s?void 0:n,sizes:u})})),m):m};v.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},y.displayName="Picture",y.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};var b=["fallback"],w=function(e){var t=e.fallback,n=l(e,b);return t?r.createElement(y,o({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},n))};w.displayName="Placeholder",w.propTypes={fallback:a.string,sources:null==(m=y.propTypes)?void 0:m.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};var E=function(e){return r.createElement(r.Fragment,null,r.createElement(y,o({},e)),r.createElement("noscript",null,r.createElement(y,o({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=y.propTypes;var x,C,k=function(e,t,n){for(var r=arguments.length,a=new Array(r>3?r-3:0),o=3;o<r;o++)a[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,n].concat(a)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},N={image:i().object.isRequired,alt:k},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],Z=["style","className"],P=new Set,O=function(e){var t=e.as,a=void 0===t?"div":t,i=e.image,c=e.style,u=e.backgroundColor,m=e.className,d=e.class,f=e.onStartLoad,p=e.onLoad,h=e.onError,g=l(e,S),v=i.width,y=i.height,b=i.layout,w=function(e,t,n){var r={},a="gatsby-image-wrapper";return"fixed"===n?(r.width=e,r.height=t):"constrained"===n&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:r}}(v,y,b),E=w.style,k=w.className,N=l(w,Z),O=(0,r.useRef)(),T=(0,r.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);d&&(m=d);var L=function(e,t,n){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+n+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,v,y);return(0,r.useEffect)((function(){x||(x=Promise.all([n.e(774),n.e(217)]).then(n.bind(n,9217)).then((function(e){var t=e.renderImageToString,n=e.swapPlaceholderImage;return C=t,{renderImageToString:t,swapPlaceholderImage:n}})));var e,t,r=O.current.querySelector("[data-gatsby-image-ssr]");return r&&s()?(r.complete?(null==f||f({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):(null==f||f({wasCached:!0}),r.addEventListener("load",(function e(){r.removeEventListener("load",e),null==p||p({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)}))),void P.add(T)):C&&P.has(T)?void 0:(x.then((function(n){var r=n.renderImageToString,a=n.swapPlaceholderImage;O.current&&(O.current.innerHTML=r(o({isLoading:!0,isLoaded:P.has(T),image:i},g)),P.has(T)||(e=requestAnimationFrame((function(){O.current&&(t=a(O.current,T,P,c,f,p,h))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,r.useLayoutEffect)((function(){P.has(T)&&C&&(O.current.innerHTML=C(o({isLoading:P.has(T),isLoaded:P.has(T),image:i},g)),null==f||f({wasCached:!0}),null==p||p({wasCached:!0}))}),[i]),(0,r.createElement)(a,o({},N,{style:o({},E,c,{backgroundColor:u}),className:k+(m?" "+m:""),ref:O,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},T=(0,r.memo)((function(e){return e.image?(0,r.createElement)(O,e):null}));T.propTypes=N,T.displayName="GatsbyImage";var L,I=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],V=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},j=new Set(["fixed","fullWidth","constrained"]),M={src:i().string.isRequired,alt:k,width:V,height:V,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!j.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},R=(L=T,function(e){var t=e.src,n=e.__imageData,a=e.__error,i=l(e,I);return a&&console.warn(a),n?r.createElement(L,o({image:n},i)):(console.warn("Image not loaded",t),null)});R.displayName="StaticImage",R.propTypes=M},2369:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var n;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,n=!1,r=!1,a=0;a<e.length;a++){var i=e[a];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,a)+"-"+e.slice(a),t=!1,r=n,n=!0,a++):n&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,a-1)+"-"+e.slice(a-1),r=n,n=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=n,n=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),n=e,t.pascalCase?n.charAt(0).toUpperCase()+n.slice(1):n)};e.exports=t,e.exports.default=t},8117:function(e,t,n){n.d(t,{xj:function(){return r},y9:function(){return i},zE:function(){return a}});var r=[{name:"Max",invoke:function(e){return e.map((function(e){return e.getValue()})).reduce((function(e,t){return e>t?e:t}),-1)}},{name:"Min",invoke:function(e){return e.map((function(e){return e.getValue()})).reduce((function(e,t){return e<t?e:t}),101)}},{name:"Average",invoke:function(e){return e.map((function(e){return e.getValue()})).reduce((function(e,t){return e+t}),0)/e.length}}],a=function(e,t,n){return{name:e,selectedTemperature:t,getValue:function(){var e,r,a,i=n.find((function(e){return e.name==t}));return i?(e=3*(i.value-30),r=0,a=100,Math.min(Math.max(e,r),a)):-1}}},i=function(e,t,n){return{name:e,selectedMixFunction:t,getValue:function(){return t.invoke(n)}}}},5720:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(2939);function i(e){var t,n,i=e.iconPath,o=e.fanCurve,l=e.controlValueSuffix,s=e.children,c=o.getValue();return r.createElement(a.Z,{className:"bg-primary-800"},r.createElement("div",{className:"flex w-56 flex-col text-white"},r.createElement("div",{className:"flex flex-row items-center justify-center"},(n=i,r.createElement("svg",{className:"h-12 w-12",viewBox:"0 0 24 24"},r.createElement("path",{fill:"currentColor",d:n}))),r.createElement("div",{className:"ml-4 w-full border-b-2 border-white "},o.name)),r.createElement("div",null,s),r.createElement("div",{className:"mt-1 flex flex-row justify-between"},r.createElement("div",null,r.createElement("span",null,(t=c)>=0&&t<=100?c.toFixed(1):"-"," %")," ",r.createElement("span",null,l)))))}},8436:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(2982),a=n(7294),i=n(2475),o=n(6337),l=n(8117),s=n(5720);function c(e){var t,n,c=e.name,u=e.fanCurves,m=e.selectedFanCurvesDefault,d=(0,a.useState)(null!=m?m:u.map((function(e){return e.name}))),f=d[0],p=d[1],h=u.filter((function(e){return f.includes(e.name)})),g=(0,a.useState)(l.xj[0]),v=g[0],y=g[1],b=(0,l.y9)(c,v,h),w=f.length>0?null!==(t=null===(n=h.find((function(e){return e.getValue()==b.getValue()})))||void 0===n?void 0:n.name)&&void 0!==t?t:"Average":v.name;return a.createElement(s.Z,{iconPath:i.Z.svgPaths.mix,fanCurve:b,controlValueSuffix:" ("+w+")"},a.createElement(o.Z,{onChange:function(e){return y(l.xj[e.target.selectedIndex])},value:b.selectedMixFunction.name,label:"Function"},l.xj.map((function(e){return a.createElement("option",{key:e.name,value:e.name},e.name)}))),a.createElement(o.Z,{value:"default",onChange:function(e){return t=e.target.selectedIndex,n=u[t-1],void(f.includes(n.name)||p((function(e){return[].concat((0,r.Z)(e),[n.name])})));var t,n},label:"",className:"mt-1"},a.createElement("option",{key:"-1",disabled:!0,value:"default"},"Add a fan curve..."),u.map((function(e,t){return a.createElement("option",{key:t},e.name)}))),h.map((function(e,t){return a.createElement("div",{key:t,className:"my-2 ml-2 text-sm"},a.createElement("span",{className:"mr-1"},"○")," ",a.createElement("span",null,e.name),a.createElement("span",null," (",e.getValue()," %)"),a.createElement("button",{onClick:function(){return p(f.filter((function(t){return t!=e.name})))},className:"float-right rounded border border-white px-1"},"X"))})))}},5900:function(e,t,n){function r(e,t,n){return{name:e,value:Math.round(Math.random()*(n-t)+t)}}function a(e,t){return{name:e,value:t}}n.d(t,{T:function(){return a},f:function(){return r}})},9435:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.icon,n=e.text;return r.createElement("h2",{className:"mb-2 flex items-center text-left"},t?r.createElement("svg",{className:"mr-5 h-12 w-12",viewBox:"0 0 24 24"},r.createElement("path",{fill:"currentColor",d:t})):r.createElement(r.Fragment,null),r.createElement("span",{className:"align-middle text-2xl font-medium"},n))}},6337:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(3366),a=n(7294),i=n(9940),o=["className","label"];function l(e){var t=e.className,n=(e.label,(0,r.Z)(e,o));return a.createElement(a.Fragment,null,a.createElement("label",{className:"mb-2 text-sm font-medium"},e.label),a.createElement("select",Object.assign({className:(0,i.m)("text-base font-normal text-white w-full bg-transparent border-white border-spacing-1 border-b focus:text-gray-700 focus:bg-white",t)},n)))}},3467:function(e,t,n){n.r(t),n.d(t,{Head:function(){return U},default:function(){return _}});var r=n(7294),a=n(7206),i=n(2939),o=n(3723),l=n(2475),s=n(880),c=n(4419),u=n(8436),m=n(5900),d=n(6464),f=n(757),p=n(9435),h=n(4001);var g=n(181);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(s){l=!0,a=s}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}}(e,t)||(0,g.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=n(9611);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function E(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x(e);if(t){var a=x(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return E(this,n)}}function k(){return k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k.apply(this,arguments)}var N=new Map,S=new WeakMap,Z=0,P=void 0;function O(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return"".concat(t,"_").concat("root"===t?(n=e.root)?(S.has(n)||(Z+=1,S.set(n,Z.toString())),S.get(n)):"0":e[t]);var n})).toString()}function T(e){var t=O(e),n=N.get(t);if(!n){var r,a=new Map,i=new IntersectionObserver((function(t){t.forEach((function(t){var n,i=t.isIntersecting&&r.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=i),null==(n=a.get(t.target))||n.forEach((function(e){e(i,t)}))}))}),e);r=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:a},N.set(t,n)}return n}function L(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:P;if(void 0===window.IntersectionObserver&&void 0!==r){var a=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),function(){}}var i=T(n),o=i.id,l=i.observer,s=i.elements,c=s.get(e)||[];return s.has(e)||s.set(e,c),c.push(t),l.observe(e),function(){c.splice(c.indexOf(t),1),0===c.length&&(s.delete(e),l.unobserve(e)),0===s.size&&(l.disconnect(),N.delete(o))}}var I=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function V(e){return"function"!=typeof e.children}r.Component;var j="Fan Control",M=function(e){var t,n=e.background,a=e.textColor,o=e.text,l=e.icon,s=e.onClick;return r.createElement("button",{onClick:function(){return s?s():null}},r.createElement(i.Z,{className:n},r.createElement("div",{className:"flex w-44 gap-2 "+a},(t=l,r.createElement("svg",{className:"h-8 w-8",viewBox:"0 0 24 24"},r.createElement("path",{fill:"currentColor",d:t}))),r.createElement("span",{className:"m-auto font-semibold"},o))))},R=function(){var e=(0,r.useState)(0),t=e[0],n=e[1];(0,r.useEffect)((function(){fetch(s.Z.urls.versionJsonUrl).then((function(e){return e.json()})).then((function(e){return n(e.Number)}))}),[]);var a="Download";return t>0&&(a+=" V"+t),r.createElement(f.M,{href:s.Z.urls.directDownloadUrl},r.createElement(M,{background:"bg-primary-800 hover:bg-primary-600",icon:l.Z.svgPaths.download,textColor:"text-white",text:a}))},A=function(){return r.createElement(f.M,{href:s.Z.urls.githubPageUrl},r.createElement(M,{background:"bg-gray-300 hover:bg-gray-400",icon:l.Z.svgPaths.github,textColor:"text-black",text:"GitHub Page"}))},F=function(){var e=(0,r.useState)([(0,m.T)("a",50),(0,m.T)("b",50),(0,m.T)("c",50)]),t=e[0],n=e[1];(0,c.Yz)(1e3,(function(){n([(0,m.f)("a",40,60),(0,m.f)("b",30,70),(0,m.f)("c",26,65)])}));var a=[{name:"CPU -> Case fans",getValue:function(){return t[0].value}},{name:"GPU -> Case fans",getValue:function(){return t[1].value}},{name:"SSD -> Case fans",getValue:function(){return t[2].value}}];return r.createElement(u.Z,{name:"Demo Case Fans",fanCurves:a,selectedFanCurvesDefault:a.slice(0,1).map((function(e){return e.name}))})},_=function(){var e=(0,c.l$)(!0,3e3),t=e[0],u=e[1],m=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.threshold,a=t.delay,i=t.trackVisibility,o=t.rootMargin,l=t.root,s=t.triggerOnce,c=t.skip,u=t.initialInView,m=t.fallbackInView,d=t.onChange,f=v(r.useState(null),2),p=f[0],h=f[1],g=r.useRef(),y=v(r.useState({inView:!!u,entry:void 0}),2),b=y[0],w=y[1];g.current=d,r.useEffect((function(){if(!c&&p){var e=L(p,(function(t,n){w({inView:t,entry:n}),g.current&&g.current(t,n),n.isIntersecting&&s&&e&&(e(),e=void 0)}),{root:l,rootMargin:o,threshold:n,trackVisibility:i,delay:a},m);return function(){e&&e()}}}),[Array.isArray(n)?n.toString():n,p,l,o,s,c,i,m,a]);var E=null==(e=b.entry)?void 0:e.target;r.useEffect((function(){p||!E||s||c||w({inView:!!u,entry:void 0})}),[p,E,s,c,u]);var x=[h,b.inView,b.entry];return x.ref=x[0],x.inView=x[1],x.entry=x[2],x}({threshold:1,delay:500,triggerOnce:!0}),f=m.ref,h=m.inView;return r.createElement(a.Z,null,r.createElement("div",{className:"flex flex-col place-items-center gap-12 text-center"},r.createElement("svg",{onMouseEnter:function(){return u(!0)},className:(t?"animate-spin":"")+" mt-10 h-36 w-36 hover:animate-spin",viewBox:"0 0 24 24"},r.createElement("path",{fill:"currentColor",d:l.Z.svgPaths.fan})),r.createElement("h1",{className:"max-w-lg text-4xl font-extrabold mx-5"},"Fan Control is a highly focused fan controlling software for Windows."),r.createElement("div",{className:"text-2xl mx-5 text-body-700 font-semibold"},r.createElement("p",null,"No installation required."),r.createElement("br",null),r.createElement("p",null,"Low on ressources, high on power.")),r.createElement("div",{className:"flex gap-6"},r.createElement(A,null),r.createElement(R,null)),r.createElement(i.Z,{className:"m-5 p-0"},r.createElement(o.S,{className:"rounded",width:1037,src:"./../images/main.png",alt:"Main interface",__imageData:n(5689)})),r.createElement("section",{className:"my-10 max-w-xl text-xl italic mx-5"},'" No third-party software, at all, as much as they might want to tout that they do, do not have this level of control. This is what happens when someone that sees a problem, is an enthusiast, and is a programmer, gets involved and says I\'m gonna do something that nobody has been doing a way I feel they should do it, and they did it right in my opinion. " ',r.createElement("br",null)," ",r.createElement("br",null)," -"," ",r.createElement(d.n,{href:s.Z.urls.videoUrl},"JayzTwoCents")),r.createElement("section",{className:"my-10 w-full bg-body-200 px-5 py-20"},r.createElement("div",{className:"wrap mx-auto flex max-w-5xl flex-wrap place-content-center content-evenly gap-12 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3"},[[l.Z.svgPaths.bulb,"Flexible by design"],[l.Z.svgPaths.graph,"7 Fan Curve types"],[l.Z.svgPaths.save,"Create multiple configurations"],[l.Z.svgPaths.brush,"UI Themes"],[l.Z.svgPaths.wrench,"Assisted setup"],[l.Z.svgPaths.temperature,"Temperature Tray Icon"]].map((function(e,t){var n,a=e[0],o=e[1];return r.createElement("div",{key:t,className:"m-auto flex items-center"},r.createElement(i.Z,{className:"shadow-body-500 shadow-lg bg-body-700 text-body-100 hover:bg-primary-800 hover:animate-wiggle font-medium"},r.createElement("div",{className:"h-18 justify-left flex w-52 items-center text-center text-xl"},r.createElement("div",{className:"mr-2"},(n=a,r.createElement("svg",{className:"h-12 w-12",viewBox:"0 0 24 24"},r.createElement("path",{fill:"currentColor",d:n})))),r.createElement("div",{className:"mx-auto"},o))))})))),r.createElement("section",{className:"wrap my-10 mx-5 grid justify-center gap-20 text-left sm:grid-cols-1 md:grid-cols-2"},r.createElement("div",{className:"max-w-sm"},r.createElement(p.Z,{text:"CPU, GPU, and case fans",icon:l.Z.svgPaths.check}),r.createElement("p",null,'Yup, that\'s covered. Fan Control has extensive support for a variety of motherboards, GPUs, and other hardware, like AIOs. Say goodbye to the "silo" approach of using multiple softwares to control your different fans. Have all your them controlled by a single smart entity, and start thinking about cooling and noise as a system-wide concern.')),r.createElement("div",{className:"max-w-sm"},r.createElement(p.Z,{text:"Tinkerers rejoice",icon:l.Z.svgPaths.parameters}),r.createElement("p",null,"Fan Control has ALL the parameters. Response time, hysteresis, hysteresis direction, step up, step down... Fine tune to your heart's desire. Control your fan's start and stopping logic, for smooth 0 RPM operation ",r.createElement("i",null,"(when supported)"),".")),r.createElement("div",{className:"max-w-sm"},r.createElement(p.Z,{text:"It's all about the mix",icon:l.Z.svgPaths.mix}),r.createElement("p",null,"THE missing function that originates this whole project. Mix fan curves take the possibilities to a whole new level. Combine any type of fan curves together and apply a function like maximum or average to create a whole new control logic. Different curves bound to different temperature sensors, mixed together, your case fans never asked for better. ",r.createElement("br",null),r.createElement("br",null)," ",r.createElement("b",null,"Try it out on the demo card!"))),r.createElement("div",{className:"m-auto "+(h?"animate-wiggle":""),ref:f},r.createElement(F,null)),r.createElement("div",{className:"max-w-sm"},r.createElement(p.Z,{text:"Expansion through plugins",icon:l.Z.svgPaths.plugin}),r.createElement("p",null,"Want to add more sensors and controls from a third party? No problem! Fan Control has a simple"," ",r.createElement(d.n,{href:s.Z.urls.pluginUrl},"plugin")," ","system with .NET that allow any third party developer to add temperature, speed or control sensors. Installing is as easy as dropping a dll in the plugin folder, that's it.")),r.createElement("div",{className:"max-w-sm"},r.createElement(p.Z,{text:"Open source backend",icon:l.Z.svgPaths.backend}),r.createElement("p",null,"Fan Control backend is mainly based on"," ",r.createElement(d.d,{href:s.Z.urls.lhmGithubPageUrl},"LibreHardwareMonitor"),", an open source fork of the original OpenHardwareMonitor. This means that hardware compatiblity is entierely open for anyone to contribute, and doesn't rely on a single developer which may stop caring at some point. Combined with the plugin system, Fan Control is unlocked for many generations of hardware to come.")))))},U=function(){return r.createElement(h.H,{pathname:j,title:j})}},5689:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/466fa929e3c8624c0001863c50ab03e7/5a3cc/main.png","srcSet":"/static/466fa929e3c8624c0001863c50ab03e7/cc43e/main.png 259w,\\n/static/466fa929e3c8624c0001863c50ab03e7/f2f31/main.png 519w,\\n/static/466fa929e3c8624c0001863c50ab03e7/5a3cc/main.png 1037w","sizes":"(min-width: 1037px) 1037px, 100vw"},"sources":[{"srcSet":"/static/466fa929e3c8624c0001863c50ab03e7/aaa76/main.webp 259w,\\n/static/466fa929e3c8624c0001863c50ab03e7/1d8c7/main.webp 519w,\\n/static/466fa929e3c8624c0001863c50ab03e7/6bd43/main.webp 1037w","type":"image/webp","sizes":"(min-width: 1037px) 1037px, 100vw"}]},"width":1037,"height":622}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-5db67263776c22262afc.js.map