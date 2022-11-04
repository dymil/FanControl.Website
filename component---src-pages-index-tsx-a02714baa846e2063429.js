"use strict";(self.webpackChunkfan_control=self.webpackChunkfan_control||[]).push([[691],{3723:function(e,t,n){n.d(t,{L:function(){return p},M:function(){return E},P:function(){return w},S:function(){return A},_:function(){return o},a:function(){return l},b:function(){return c},g:function(){return u},h:function(){return s}});var a=n(7294),r=(n(2369),n(5697)),i=n.n(r);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t.indexOf(n=i[a])>=0||(r[n]=e[n]);return r}var s=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,n,a,r){return void 0===r&&(r={}),l({},n,{loading:a,shouldLoad:e,"data-main-image":"",style:l({},r,{opacity:t?1:0})})}function u(e,t,n,a,r,i,o,s){var c={};i&&(c.backgroundColor=i,"fixed"===n?(c.width=a,c.height=r,c.backgroundColor=i,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),s&&(c.objectPosition=s);var u=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var m,d=["children"],f=function(e){var t=e.layout,n=e.width,r=e.height;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/n*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:n,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+n+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){var t=e.children,n=o(e,d);return a.createElement(a.Fragment,null,a.createElement(f,l({},n)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,n=e.srcSet,r=e.loading,i=e.alt,s=void 0===i?"":i,c=e.shouldLoad,u=o(e,g);return a.createElement("img",l({},u,{decoding:"async",loading:r,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?n:void 0,"data-srcset":c?void 0:n,alt:s}))},y=function(e){var t=e.fallback,n=e.sources,r=void 0===n?[]:n,i=e.shouldLoad,s=void 0===i||i,c=o(e,h),u=c.sizes||(null==t?void 0:t.sizes),m=a.createElement(v,l({},c,t,{sizes:u,shouldLoad:s}));return r.length?a.createElement("picture",null,r.map((function(e){var t=e.media,n=e.srcSet,r=e.type;return a.createElement("source",{key:t+"-"+r+"-"+n,type:r,media:t,srcSet:s?n:void 0,"data-srcset":s?void 0:n,sizes:u})})),m):m};v.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},y.displayName="Picture",y.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};var b=["fallback"],w=function(e){var t=e.fallback,n=o(e,b);return t?a.createElement(y,l({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",l({},n))};w.displayName="Placeholder",w.propTypes={fallback:r.string,sources:null==(m=y.propTypes)?void 0:m.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};var E=function(e){return a.createElement(a.Fragment,null,a.createElement(y,l({},e)),a.createElement("noscript",null,a.createElement(y,l({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=y.propTypes;var x,C,N=function(e,t,n){for(var a=arguments.length,r=new Array(a>3?a-3:0),l=3;l<a;l++)r[l-3]=arguments[l];return e.alt||""===e.alt?i().string.apply(i(),[e,t,n].concat(r)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},k={image:i().object.isRequired,alt:N},Z=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],L=["style","className"],S=new Set,P=function(e){var t=e.as,r=void 0===t?"div":t,i=e.image,c=e.style,u=e.backgroundColor,m=e.className,d=e.class,f=e.onStartLoad,p=e.onLoad,g=e.onError,h=o(e,Z),v=i.width,y=i.height,b=i.layout,w=function(e,t,n){var a={},r="gatsby-image-wrapper";return"fixed"===n?(a.width=e,a.height=t):"constrained"===n&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:a}}(v,y,b),E=w.style,N=w.className,k=o(w,L),P=(0,a.useRef)(),T=(0,a.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);d&&(m=d);var M=function(e,t,n){var a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+n+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(b,v,y);return(0,a.useEffect)((function(){x||(x=Promise.all([n.e(774),n.e(217)]).then(n.bind(n,9217)).then((function(e){var t=e.renderImageToString,n=e.swapPlaceholderImage;return C=t,{renderImageToString:t,swapPlaceholderImage:n}})));var e,t,a=P.current.querySelector("[data-gatsby-image-ssr]");return a&&s()?(a.complete?(null==f||f({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)):(null==f||f({wasCached:!0}),a.addEventListener("load",(function e(){a.removeEventListener("load",e),null==p||p({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)}))),void S.add(T)):C&&S.has(T)?void 0:(x.then((function(n){var a=n.renderImageToString,r=n.swapPlaceholderImage;P.current&&(P.current.innerHTML=a(l({isLoading:!0,isLoaded:S.has(T),image:i},h)),S.has(T)||(e=requestAnimationFrame((function(){P.current&&(t=r(P.current,T,S,c,f,p,g))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,a.useLayoutEffect)((function(){S.has(T)&&C&&(P.current.innerHTML=C(l({isLoading:S.has(T),isLoaded:S.has(T),image:i},h)),null==f||f({wasCached:!0}),null==p||p({wasCached:!0}))}),[i]),(0,a.createElement)(r,l({},k,{style:l({},E,c,{backgroundColor:u}),className:N+(m?" "+m:""),ref:P,dangerouslySetInnerHTML:{__html:M},suppressHydrationWarning:!0}))},T=(0,a.memo)((function(e){return e.image?(0,a.createElement)(P,e):null}));T.propTypes=k,T.displayName="GatsbyImage";var M,F=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],j=function(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},O=new Set(["fixed","fullWidth","constrained"]),I={src:i().string.isRequired,alt:N,width:j,height:j,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!O.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},A=(M=T,function(e){var t=e.src,n=e.__imageData,r=e.__error,i=o(e,F);return r&&console.warn(r),n?a.createElement(M,l({image:n},i)):(console.warn("Image not loaded",t),null)});A.displayName="StaticImage",A.propTypes=I},2369:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var n;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,n=!1,a=!1,r=0;r<e.length;r++){var i=e[r];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,r)+"-"+e.slice(r),t=!1,a=n,n=!0,r++):n&&a&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,r-1)+"-"+e.slice(r-1),a=n,n=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,a=n,n=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),n=e,t.pascalCase?n.charAt(0).toUpperCase()+n.slice(1):n)};e.exports=t,e.exports.default=t},8117:function(e,t,n){n.d(t,{xj:function(){return a},y9:function(){return i},zE:function(){return r}});var a=[{name:"Max",invoke:function(e){return e.map((function(e){return e.getValue()})).reduce((function(e,t){return e>t?e:t}),-1)}},{name:"Min",invoke:function(e){return e.map((function(e){return e.getValue()})).reduce((function(e,t){return e<t?e:t}),101)}},{name:"Average",invoke:function(e){return e.map((function(e){return e.getValue()})).reduce((function(e,t){return e+t}),0)/e.length}}],r=function(e,t,n){return{name:e,selectedTemperature:t,getValue:function(){var e,a,r,i=n.find((function(e){return e.name==t}));return i?(e=3*(i.value-30),a=0,r=100,Math.min(Math.max(e,a),r)):-1}}},i=function(e,t,n){return{name:e,selectedMixFunction:t,getValue:function(){return t.invoke(n)}}}},5720:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r=n(2939);function i(e){var t,n,i=e.iconPath,l=e.fanCurve,o=e.controlValueSuffix,s=e.children,c=l.getValue();return a.createElement(r.Z,{className:"bg-blue-500"},a.createElement("div",{className:"flex w-52 flex-col text-white"},a.createElement("div",{className:"flex flex-row items-center justify-center"},(n=i,a.createElement("svg",{className:"h-12 w-12",viewBox:"0 0 24 24"},a.createElement("path",{fill:"currentColor",d:n}))),a.createElement("div",{className:"ml-4 w-full border-b-2 border-white "},l.name)),a.createElement("div",null,s),a.createElement("div",{className:"mt-1 flex flex-row justify-between"},a.createElement("div",null,a.createElement("span",null,(t=c)>=0&&t<=100?c.toFixed(1):"-"," %")," ",a.createElement("span",null,o)))))}},8436:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(5785),r=n(7294),i=n(2475),l=n(6337),o=n(8117),s=n(5720);function c(e){var t,n,c=e.name,u=e.fanCurves,m=e.selectedFanCurvesDefault,d=(0,r.useState)(null!=m?m:u.map((function(e){return e.name}))),f=d[0],p=d[1],g=u.filter((function(e){return f.includes(e.name)})),h=(0,r.useState)(o.xj[0]),v=h[0],y=h[1],b=(0,o.y9)(c,v,g),w=f.length>0?null!==(t=null===(n=g.find((function(e){return e.getValue()==b.getValue()})))||void 0===n?void 0:n.name)&&void 0!==t?t:"Average":v.name;return r.createElement(s.Z,{iconPath:i.Z.svgPaths.mix,fanCurve:b,controlValueSuffix:" ("+w+")"},r.createElement(l.Z,{onChange:function(e){return y(o.xj[e.target.selectedIndex])},value:b.selectedMixFunction.name,label:"Function"},o.xj.map((function(e){return r.createElement("option",{key:e.name,value:e.name},e.name)}))),r.createElement(l.Z,{value:"default",onChange:function(e){return t=e.target.selectedIndex,n=u[t-1],void(f.includes(n.name)||p((function(e){return[].concat((0,a.Z)(e),[n.name])})));var t,n},label:"",className:"mt-1"},r.createElement("option",{key:"-1",disabled:!0,value:"default"},"Add a fan curve..."),u.map((function(e,t){return r.createElement("option",{key:t},e.name)}))),g.map((function(e,t){return r.createElement("div",{key:t,className:"my-2 ml-2 text-sm"},r.createElement("span",{className:"mr-1"},"○")," ",r.createElement("span",null,e.name),r.createElement("span",null," (",e.getValue()," %)"),r.createElement("button",{onClick:function(){return p(f.filter((function(t){return t!=e.name})))},className:"float-right rounded border border-white px-1"},"X"))})))}},5900:function(e,t,n){function a(e,t,n){return{name:e,value:Math.round(Math.random()*(n-t)+t)}}function r(e,t){return{name:e,value:t}}n.d(t,{T:function(){return r},f:function(){return a}})},9435:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.icon,n=e.text;return a.createElement("h1",{className:"mb-2 flex items-center text-left"},t?a.createElement("svg",{className:"mr-5 h-12 w-12",viewBox:"0 0 24 24"},a.createElement("path",{fill:"currentColor",d:t})):a.createElement(a.Fragment,null),a.createElement("span",{className:"align-middle text-2xl font-semibold"},n))}},6337:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(3366),r=n(7294),i=n(9940),l=["className","label"];function o(e){var t=e.className,n=(e.label,(0,a.Z)(e,l));return r.createElement(r.Fragment,null,r.createElement("label",{className:"mb-2 text-sm font-medium"},e.label),r.createElement("select",Object.assign({className:(0,i.m)("text-base font-normal text-white w-full bg-transparent border-white border-spacing-1 border-b focus:text-gray-700 focus:bg-white",t)},n)))}},9485:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return w}});var a=n(7294),r=n(7206),i=n(2939),l=n(3723),o=n(2475),s=function(e){return a.createElement("svg",{className:"h-8 w-8",viewBox:"0 0 24 24"},a.createElement("path",{fill:"currentColor",d:e}))},c=n(880),u=n(4419),m=n(8436),d=n(5900),f=n(6464),p=n(757),g=n(9435),h=function(e){var t=e.background,n=e.textColor,r=e.text,l=e.icon,o=e.onClick;return a.createElement("button",{onClick:function(){return o?o():null}},a.createElement(i.Z,{className:t},a.createElement("div",{className:"flex w-40 gap-2 "+n},s(l),a.createElement("span",{className:"m-auto"},r))))},v=function(){var e=(0,a.useState)(0),t=e[0],n=e[1];(0,a.useEffect)((function(){fetch(c.Z.urls.versionJsonUrl).then((function(e){return e.json()})).then((function(e){return n(e.Number)}))}),[]);var r="Download";return t>0&&(r+=" V"+t),a.createElement(p.M,{href:c.Z.urls.directDownloadUrl},a.createElement(h,{background:"bg-blue-500 hover:bg-blue-600",icon:o.Z.svgPaths.download,textColor:"text-white",text:r}))},y=function(){return a.createElement(p.M,{href:c.Z.urls.githubPageUrl},a.createElement(h,{background:"bg-gray-300 hover:bg-gray-400",icon:o.Z.svgPaths.github,textColor:"text-black",text:"GitHub Page"}))},b=function(){var e=(0,a.useState)([(0,d.T)("a",50),(0,d.T)("b",50),(0,d.T)("c",50)]),t=e[0],n=e[1];(0,u.Y)(1e3,(function(){n([(0,d.f)("a",40,60),(0,d.f)("b",30,70),(0,d.f)("c",26,65)])}));var r=[{name:"CPU -> Case fans",getValue:function(){return t[0].value}},{name:"GPU -> Case fans",getValue:function(){return t[1].value}},{name:"SSD -> Case fans",getValue:function(){return t[2].value}}];return a.createElement(m.Z,{name:"Demo Case Fans",fanCurves:r,selectedFanCurvesDefault:r.slice(0,1).map((function(e){return e.name}))})},w=function(){var e=(0,u.l)(!0,3e3),t=e[0],m=e[1];return a.createElement(r.Z,null,a.createElement("div",{className:"flex flex-col place-items-center gap-12 p-5 text-center"},a.createElement("svg",{onMouseEnter:function(){return m(!0)},className:(t?"animate-spin":"")+" h-36 w-36 hover:animate-spin",viewBox:"0 0 24 24"},a.createElement("path",{fill:"currentColor",d:o.Z.svgPaths.fan})),a.createElement("h1",{className:"max-w-lg text-4xl font-bold"},"Fan Control is a highly focused fan controlling software for Windows."),a.createElement("div",{className:"text-2xl"},a.createElement("p",null,"No installation required."),a.createElement("br",null),a.createElement("p",null,"Low on ressources, high on power.")),a.createElement("div",{className:"flex gap-6"},a.createElement(y,null),a.createElement(v,null)),a.createElement(i.Z,{className:"p-0"},a.createElement(l.S,{className:"rounded",width:800,src:"./../images/main.png",alt:"Main interface",__imageData:n(9792)})),a.createElement("div",null,a.createElement("div",{className:"mb-4 text-2xl font-semibold"},"Features rapid fire"),a.createElement("div",{className:"wrap grid gap-5 sm:grid-cols-1 md:grid-cols-2"},[[o.Z.svgPaths.wrench,"Assisted setup will guide you through your initial config."],[o.Z.svgPaths.bulb,"As simple, or as complex of a config you can create. Start simple, then go crazy."],[o.Z.svgPaths.graph,"Multiple type of fan curves and custom sensors to choose from."],[o.Z.svgPaths.save,"Save, edit and load multiple configurations."],[o.Z.svgPaths.brush,"Customize the look of the software to fit your theme."],[o.Z.svgPaths.temperature,"Use the tray icon as a temperature display."]].map((function(e,t){var n=e[0],r=e[1];return a.createElement("div",{key:t,className:"max-w-xs"},a.createElement(i.Z,{className:"bg-white"},a.createElement("div",{className:"flex items-center text-left align-middle"},a.createElement("div",{className:"mr-3"},s(n)),a.createElement("div",null,r))))})))),a.createElement("div",{className:"wrap grid justify-center gap-10 text-justify sm:grid-cols-1 md:grid-cols-2"},a.createElement("div",{className:"max-w-sm"},a.createElement(g.Z,{text:"CPU, GPU, and case fans",icon:o.Z.svgPaths.check}),a.createElement("p",null,'Yup, that\'s covered. Fan Control has extensive support for a variety of motherboards, GPUs, and other hardware, like AIOs. Say goodbye to the "silo" approach of using multiple softwares to control your different fans. Have all your them controlled by a single smart entity, and start thinking about cooling and noise as a system-wide concern.')),a.createElement("div",{className:"max-w-sm"},a.createElement(g.Z,{text:"Tinkerers rejoice",icon:o.Z.svgPaths.parameters}),a.createElement("p",null,"Fan Control has ALL the parameters. Response time, hysteresis, hysteresis direction, step up, step down... Fine tune to your heart's desire. Control your fan's start and stopping logic, for smooth 0 RPM operation ",a.createElement("i",null,"(when supported)"),".")),a.createElement("div",{className:"max-w-sm"},a.createElement(g.Z,{text:"It's all about the mix",icon:o.Z.svgPaths.mix}),a.createElement("p",null,"THE missing function that originates this whole project. Mix fan curves take the possibilities to a whole new level. Combine any type of fan curves together and apply a function like maximum or average to create a whole new control logic. Different curves bound to different temperature sensors, mixed together, your case fans never asked for better. ",a.createElement("br",null),a.createElement("br",null)," ",a.createElement("b",null,"Try it out on the demo card!"))),a.createElement("div",{className:"m-auto"},a.createElement(b,null)),a.createElement("div",{className:"max-w-sm"},a.createElement(g.Z,{text:"Expansion through plugins",icon:o.Z.svgPaths.plugin}),a.createElement("p",null,"Want to add more sensors and controls from a third party? No problem! Fan Control has a simple"," ",a.createElement(f.n,{href:c.Z.urls.pluginUrl},"plugin")," ","system with .NET that allow any third party developer to add temperature, speed or control sensors. Installing is as easy as dropping a dll in the plugin folder, that's it.")),a.createElement("div",{className:"max-w-sm"},a.createElement(g.Z,{text:"Open source backend",icon:o.Z.svgPaths.backend}),a.createElement("p",null,"Fan Control backend is mainly based on"," ",a.createElement(f.d,{href:c.Z.urls.lhmGithubPageUrl},"LibreHardwareMonitor"),", an open source fork of the original OpenHardwareMonitor. This means that hardware compatiblity is entierely open for anyone to contribute, and doesn't rely on a single developer which may stop caring at some point. Combined with the plugin system, Fan Control is unlocked for many generations of hardware to come.")))))},E=function(){return a.createElement("title",null,"Fan Control")}},9792:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/466fa929e3c8624c0001863c50ab03e7/7c471/main.png","srcSet":"/static/466fa929e3c8624c0001863c50ab03e7/4715e/main.png 200w,\\n/static/466fa929e3c8624c0001863c50ab03e7/3b96c/main.png 400w,\\n/static/466fa929e3c8624c0001863c50ab03e7/7c471/main.png 800w","sizes":"(min-width: 800px) 800px, 100vw"},"sources":[{"srcSet":"/static/466fa929e3c8624c0001863c50ab03e7/f42d9/main.webp 200w,\\n/static/466fa929e3c8624c0001863c50ab03e7/1e622/main.webp 400w,\\n/static/466fa929e3c8624c0001863c50ab03e7/53c1e/main.webp 800w","type":"image/webp","sizes":"(min-width: 800px) 800px, 100vw"}]},"width":800,"height":480}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-a02714baa846e2063429.js.map