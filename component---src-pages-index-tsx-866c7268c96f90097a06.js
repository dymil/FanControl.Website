"use strict";(self.webpackChunkfan_control=self.webpackChunkfan_control||[]).push([[691],{3723:function(e,t,n){n.d(t,{L:function(){return p},M:function(){return E},P:function(){return w},S:function(){return _},_:function(){return s},a:function(){return i},b:function(){return c},g:function(){return u},h:function(){return l}});var r=n(7294),a=(n(2369),n(5697)),o=n.n(a);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(a[n]=e[n]);return a}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,n,r,a){return void 0===a&&(a={}),i({},n,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},a,{opacity:t?1:0})})}function u(e,t,n,r,a,o,s,l){var c={};o&&(c.backgroundColor=o,"fixed"===n?(c.width=r,c.height=a,c.backgroundColor=o,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);var u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var d,m=["children"],f=function(e){var t=e.layout,n=e.width,a=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/n*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:n,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+a+"' width='"+n+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){var t=e.children,n=s(e,m);return r.createElement(r.Fragment,null,r.createElement(f,i({},n)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],g=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,n=e.srcSet,a=e.loading,o=e.alt,l=void 0===o?"":o,c=e.shouldLoad,u=s(e,h);return r.createElement("img",i({},u,{decoding:"async",loading:a,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?n:void 0,"data-srcset":c?void 0:n,alt:l}))},y=function(e){var t=e.fallback,n=e.sources,a=void 0===n?[]:n,o=e.shouldLoad,l=void 0===o||o,c=s(e,g),u=c.sizes||(null==t?void 0:t.sizes),d=r.createElement(v,i({},c,t,{sizes:u,shouldLoad:l}));return a.length?r.createElement("picture",null,a.map((function(e){var t=e.media,n=e.srcSet,a=e.type;return r.createElement("source",{key:t+"-"+a+"-"+n,type:a,media:t,srcSet:l?n:void 0,"data-srcset":l?void 0:n,sizes:u})})),d):d};v.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},y.displayName="Picture",y.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};var b=["fallback"],w=function(e){var t=e.fallback,n=s(e,b);return t?r.createElement(y,i({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},n))};w.displayName="Placeholder",w.propTypes={fallback:a.string,sources:null==(d=y.propTypes)?void 0:d.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};var E=function(e){return r.createElement(r.Fragment,null,r.createElement(y,i({},e)),r.createElement("noscript",null,r.createElement(y,i({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=y.propTypes;var x,C,k=function(e,t,n){for(var r=arguments.length,a=new Array(r>3?r-3:0),i=3;i<r;i++)a[i-3]=arguments[i];return e.alt||""===e.alt?o().string.apply(o(),[e,t,n].concat(a)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},N={image:o().object.isRequired,alt:k},O=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],P=new Set,Z=function(e){var t=e.as,a=void 0===t?"div":t,o=e.image,c=e.style,u=e.backgroundColor,d=e.className,m=e.class,f=e.onStartLoad,p=e.onLoad,h=e.onError,g=s(e,O),v=o.width,y=o.height,b=o.layout,w=function(e,t,n){var r={},a="gatsby-image-wrapper";return"fixed"===n?(r.width=e,r.height=t):"constrained"===n&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:r}}(v,y,b),E=w.style,k=w.className,N=s(w,S),Z=(0,r.useRef)(),T=(0,r.useMemo)((function(){return JSON.stringify(o.images)}),[o.images]);m&&(d=m);var L=function(e,t,n){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+n+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,v,y);return(0,r.useEffect)((function(){x||(x=Promise.all([n.e(774),n.e(217)]).then(n.bind(n,9217)).then((function(e){var t=e.renderImageToString,n=e.swapPlaceholderImage;return C=t,{renderImageToString:t,swapPlaceholderImage:n}})));var e,t,r=Z.current.querySelector("[data-gatsby-image-ssr]");return r&&l()?(r.complete?(null==f||f({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):(null==f||f({wasCached:!0}),r.addEventListener("load",(function e(){r.removeEventListener("load",e),null==p||p({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)}))),void P.add(T)):C&&P.has(T)?void 0:(x.then((function(n){var r=n.renderImageToString,a=n.swapPlaceholderImage;Z.current&&(Z.current.innerHTML=r(i({isLoading:!0,isLoaded:P.has(T),image:o},g)),P.has(T)||(e=requestAnimationFrame((function(){Z.current&&(t=a(Z.current,T,P,c,f,p,h))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[o]),(0,r.useLayoutEffect)((function(){P.has(T)&&C&&(Z.current.innerHTML=C(i({isLoading:P.has(T),isLoaded:P.has(T),image:o},g)),null==f||f({wasCached:!0}),null==p||p({wasCached:!0}))}),[o]),(0,r.createElement)(a,i({},N,{style:i({},E,c,{backgroundColor:u}),className:k+(d?" "+d:""),ref:Z,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},T=(0,r.memo)((function(e){return e.image?(0,r.createElement)(Z,e):null}));T.propTypes=N,T.displayName="GatsbyImage";var L,I=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],V=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},j=new Set(["fixed","fullWidth","constrained"]),M={src:o().string.isRequired,alt:k,width:V,height:V,sizes:o().string,layout:function(e){if(void 0!==e.layout&&!j.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},_=(L=T,function(e){var t=e.src,n=e.__imageData,a=e.__error,o=s(e,I);return a&&console.warn(a),n?r.createElement(L,i({image:n},o)):(console.warn("Image not loaded",t),null)});_.displayName="StaticImage",_.propTypes=M},2369:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var n;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,n=!1,r=!1,a=0;a<e.length;a++){var o=e[a];t&&/[a-zA-Z]/.test(o)&&o.toUpperCase()===o?(e=e.slice(0,a)+"-"+e.slice(a),t=!1,r=n,n=!0,a++):n&&r&&/[a-zA-Z]/.test(o)&&o.toLowerCase()===o?(e=e.slice(0,a-1)+"-"+e.slice(a-1),r=n,n=!1,t=!0):(t=o.toLowerCase()===o&&o.toUpperCase()!==o,r=n,n=o.toUpperCase()===o&&o.toLowerCase()!==o)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),n=e,t.pascalCase?n.charAt(0).toUpperCase()+n.slice(1):n)};e.exports=t,e.exports.default=t},8117:function(e,t,n){n.d(t,{xj:function(){return r},y9:function(){return o},zE:function(){return a}});var r=[{name:"Max",invoke:function(e){return e.map((function(e){return e.getValue()})).reduce((function(e,t){return e>t?e:t}),-1)}},{name:"Min",invoke:function(e){return e.map((function(e){return e.getValue()})).reduce((function(e,t){return e<t?e:t}),101)}},{name:"Average",invoke:function(e){return e.map((function(e){return e.getValue()})).reduce((function(e,t){return e+t}),0)/e.length}}],a=function(e,t,n){return{name:e,selectedTemperature:t,getValue:function(){var e,r,a,o=n.find((function(e){return e.name==t}));return o?(e=3*(o.value-30),r=0,a=100,Math.min(Math.max(e,r),a)):-1}}},o=function(e,t,n){return{name:e,selectedMixFunction:t,getValue:function(){return t.invoke(n)}}}},5720:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(2939);function o(e){var t,n,o=e.iconPath,i=e.fanCurve,s=e.controlValueSuffix,l=e.children,c=i.getValue();return r.createElement(a.Z,{className:"bg-primary-800"},r.createElement("div",{className:"flex w-56 flex-col text-white"},r.createElement("div",{className:"flex flex-row items-center justify-center"},(n=o,r.createElement("svg",{className:"h-12 w-12",viewBox:"0 0 24 24"},r.createElement("path",{fill:"currentColor",d:n}))),r.createElement("div",{className:"ml-4 w-full border-b-2 border-white "},i.name)),r.createElement("div",null,l),r.createElement("div",{className:"mt-1 flex flex-row justify-between"},r.createElement("div",null,r.createElement("span",null,(t=c)>=0&&t<=100?c.toFixed(1):"-"," %")," ",r.createElement("span",null,s)))))}},8436:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(5785),a=n(7294),o=n(2475),i=n(6337),s=n(8117),l=n(5720);function c(e){var t,n,c=e.name,u=e.fanCurves,d=e.selectedFanCurvesDefault,m=(0,a.useState)(null!=d?d:u.map((function(e){return e.name}))),f=m[0],p=m[1],h=u.filter((function(e){return f.includes(e.name)})),g=(0,a.useState)(s.xj[0]),v=g[0],y=g[1],b=(0,s.y9)(c,v,h),w=f.length>0?null!==(t=null===(n=h.find((function(e){return e.getValue()==b.getValue()})))||void 0===n?void 0:n.name)&&void 0!==t?t:"Average":v.name;return a.createElement(l.Z,{iconPath:o.Z.svgPaths.mix,fanCurve:b,controlValueSuffix:" ("+w+")"},a.createElement(i.Z,{onChange:function(e){return y(s.xj[e.target.selectedIndex])},value:b.selectedMixFunction.name,label:"Function"},s.xj.map((function(e){return a.createElement("option",{key:e.name,value:e.name},e.name)}))),a.createElement(i.Z,{value:"default",onChange:function(e){return t=e.target.selectedIndex,n=u[t-1],void(f.includes(n.name)||p((function(e){return[].concat((0,r.Z)(e),[n.name])})));var t,n},label:"",className:"mt-1"},a.createElement("option",{key:"-1",disabled:!0,value:"default"},"Add a fan curve..."),u.map((function(e,t){return a.createElement("option",{key:t},e.name)}))),h.map((function(e,t){return a.createElement("div",{key:t,className:"my-2 ml-2 text-sm"},a.createElement("span",{className:"mr-1"},"○")," ",a.createElement("span",null,e.name),a.createElement("span",null," (",e.getValue()," %)"),a.createElement("button",{onClick:function(){return p(f.filter((function(t){return t!=e.name})))},className:"float-right rounded border border-white px-1"},"X"))})))}},5900:function(e,t,n){function r(e,t,n){return{name:e,value:Math.round(Math.random()*(n-t)+t)}}function a(e,t){return{name:e,value:t}}n.d(t,{T:function(){return a},f:function(){return r}})},9435:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.icon,n=e.text;return r.createElement("h2",{className:"mb-2 flex items-center text-left"},t?r.createElement("svg",{className:"mr-5 h-12 w-12",viewBox:"0 0 24 24"},r.createElement("path",{fill:"currentColor",d:t})):r.createElement(r.Fragment,null),r.createElement("span",{className:"align-middle text-2xl font-medium"},n))}},6337:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(3366),a=n(7294),o=n(9940),i=["className","label"];function s(e){var t=e.className,n=(e.label,(0,r.Z)(e,i));return a.createElement(a.Fragment,null,a.createElement("label",{className:"mb-2 text-sm font-medium"},e.label),a.createElement("select",Object.assign({className:(0,o.m)("text-base font-normal text-white w-full bg-transparent border-white border-spacing-1 border-b focus:text-gray-700 focus:bg-white",t)},n)))}},8900:function(e,t,n){n.r(t),n.d(t,{Head:function(){return U},default:function(){return A}});var r=n(7294),a=n(7206),o=n(2939),i=n(3723),s=n(2475),l=n(880),c=n(4419),u=n(8436),d=n(5900),m=n(6464),f=n(757),p=n(9435),h=n(4001);function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=n(9611);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function b(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=w(e);if(t){var a=w(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return b(this,n)}}function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}var C=new Map,k=new WeakMap,N=0,O=void 0;function S(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return"".concat(t,"_").concat("root"===t?(n=e.root)?(k.has(n)||(N+=1,k.set(n,N.toString())),k.get(n)):"0":e[t]);var n})).toString()}function P(e){var t=S(e),n=C.get(t);if(!n){var r,a=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var n,o=t.isIntersecting&&r.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(n=a.get(t.target))||n.forEach((function(e){e(o,t)}))}))}),e);r=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:a},C.set(t,n)}return n}function Z(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:O;if(void 0===window.IntersectionObserver&&void 0!==r){var a=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),function(){}}var o=P(n),i=o.id,s=o.observer,l=o.elements,c=l.get(e)||[];return l.has(e)||l.set(e,c),c.push(t),s.observe(e),function(){c.splice(c.indexOf(t),1),0===c.length&&(l.delete(e),s.unobserve(e)),0===l.size&&(s.disconnect(),C.delete(i))}}var T=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function L(e){return"function"!=typeof e.children}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,v.Z)(e,t)}(i,e);var t,n,a,o=E(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).node=null,t._unobserveCb=null,t.handleNode=function(e){t.node&&(t.unobserve(),e||t.props.triggerOnce||t.props.skip||t.setState({inView:!!t.props.initialInView,entry:void 0})),t.node=e||null,t.observeNode()},t.handleChange=function(e,n){e&&t.props.triggerOnce&&t.unobserve(),L(t.props)||t.setState({inView:e,entry:n}),t.props.onChange&&t.props.onChange(e,n)},t.state={inView:!!e.initialInView,entry:void 0},t}return t=i,(n=[{key:"componentDidUpdate",value:function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())}},{key:"componentWillUnmount",value:function(){this.unobserve(),this.node=null}},{key:"observeNode",value:function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin,a=e.trackVisibility,o=e.delay,i=e.fallbackInView;this._unobserveCb=Z(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r,trackVisibility:a,delay:o},i)}}},{key:"unobserve",value:function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}},{key:"render",value:function(){if(!L(this.props)){var e=this.state,t=e.inView,n=e.entry;return this.props.children({inView:t,entry:n,ref:this.handleNode})}var a=this.props,o=a.children,i=a.as,s=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(a,T);return r.createElement(i||"div",x({ref:this.handleNode},s),o)}}])&&g(t.prototype,n),a&&g(t,a),Object.defineProperty(t,"prototype",{writable:!1}),i}(r.Component);var V="Fan Control",j=function(e){var t,n=e.background,a=e.textColor,i=e.text,s=e.icon,l=e.onClick;return r.createElement("button",{onClick:function(){return l?l():null}},r.createElement(o.Z,{className:n},r.createElement("div",{className:"flex w-44 gap-2 "+a},(t=s,r.createElement("svg",{className:"h-8 w-8",viewBox:"0 0 24 24"},r.createElement("path",{fill:"currentColor",d:t}))),r.createElement("span",{className:"m-auto font-semibold"},i))))},M=function(){var e=(0,r.useState)(0),t=e[0],n=e[1];(0,r.useEffect)((function(){fetch(l.Z.urls.versionJsonUrl).then((function(e){return e.json()})).then((function(e){return n(e.Number)}))}),[]);var a="Download";return t>0&&(a+=" V"+t),r.createElement(f.M,{href:l.Z.urls.directDownloadUrl},r.createElement(j,{background:"bg-primary-800 hover:bg-primary-600",icon:s.Z.svgPaths.download,textColor:"text-white",text:a}))},_=function(){return r.createElement(f.M,{href:l.Z.urls.githubPageUrl},r.createElement(j,{background:"bg-gray-300 hover:bg-gray-400",icon:s.Z.svgPaths.github,textColor:"text-black",text:"GitHub Page"}))},R=function(){var e=(0,c.l$)(!0,3e3),t=e[0],n=e[1];return r.createElement("svg",{onMouseEnter:function(){return n(!0)},className:(t?"animate-spin":"")+" mt-10 h-36 w-36 hover:animate-spin",viewBox:"0 0 24 24"},r.createElement("path",{fill:"currentColor",d:s.Z.svgPaths.fan}))},F=function(e){var t=e.refreshId,n=(0,r.useState)([(0,d.T)("a",50),(0,d.T)("b",50),(0,d.T)("c",50)]),a=n[0],o=n[1];(0,c.Yz)(1e3,(function(){o([(0,d.f)("a",40,60),(0,d.f)("b",30,70),(0,d.f)("c",26,65)])}));var i=(0,c.l$)(!1,500),s=i[0],l=i[1];(0,r.useEffect)((function(){l(!0)}),[t]);var m=[{name:"CPU -> Case fans",getValue:function(){return a[0].value}},{name:"GPU -> Case fans",getValue:function(){return a[1].value}},{name:"SSD -> Case fans",getValue:function(){return a[2].value}}];return r.createElement(I,{className:s?"animate-wiggle":"",triggerOnce:!0,delay:500,threshold:1,onChange:function(e,t){e&&l(!0)}},r.createElement(u.Z,{name:"Demo Case Fans",fanCurves:m,selectedFanCurvesDefault:m.slice(0,1).map((function(e){return e.name}))}))},A=function(){var e=(0,c.Lx)(),t=e[0],u=e[1],d=(0,r.useRef)(null),f=function(e){e&&d.current&&d.current.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),u()};return r.createElement(a.Z,null,r.createElement("div",{className:"flex flex-col place-items-center gap-12 text-center"},r.createElement(R,null),r.createElement("h1",{className:"mx-5 max-w-lg text-4xl font-extrabold"},"Fan Control is a highly focused fan controlling software for Windows."),r.createElement("div",{className:"mx-5 text-2xl font-semibold text-body-700"},r.createElement("p",null,"No installation required."),r.createElement("br",null),r.createElement("p",null,"Low on ressources, high on power.")),r.createElement("div",{className:"flex gap-6"},r.createElement(_,null),r.createElement(M,null)),r.createElement(o.Z,{className:"m-5 p-0"},r.createElement(i.S,{className:"rounded",width:1037,src:"./../images/main.png",alt:"Main interface",__imageData:n(5689)})),r.createElement("section",{className:"my-10 mx-5 max-w-xl text-xl italic"},'" No third-party software, at all, as much as they might want to tout that they do, do not have this level of control. This is what happens when someone that sees a problem, is an enthusiast, and is a programmer, gets involved and says I\'m gonna do something that nobody has been doing a way I feel they should do it, and they did it right in my opinion. " ',r.createElement("br",null)," ",r.createElement("br",null)," -"," ",r.createElement(m.n,{href:l.Z.urls.videoUrl},"JayzTwoCents")),r.createElement("section",{className:"my-10 w-full bg-body-200 px-5 py-20"},r.createElement("div",{className:"wrap mx-auto flex max-w-5xl flex-wrap place-content-center content-evenly gap-12 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3"},[[s.Z.svgPaths.bulb,"Flexible by design"],[s.Z.svgPaths.graph,"7 Fan Curve types"],[s.Z.svgPaths.save,"Create multiple configurations"],[s.Z.svgPaths.brush,"UI Themes"],[s.Z.svgPaths.wrench,"Assisted setup"],[s.Z.svgPaths.temperature,"Temperature Tray Icon"]].map((function(e,t){var n,a=e[0],i=e[1];return r.createElement("div",{key:t,className:"m-auto flex items-center"},r.createElement(o.Z,{className:"bg-body-700 font-medium text-body-100 shadow-lg shadow-body-500 hover:animate-wiggle hover:bg-primary-800"},r.createElement("div",{className:"h-18 justify-left flex w-52 items-center text-center text-xl"},r.createElement("div",{className:"mr-2"},(n=a,r.createElement("svg",{className:"h-12 w-12",viewBox:"0 0 24 24"},r.createElement("path",{fill:"currentColor",d:n})))),r.createElement("div",{className:"mx-auto"},i))))})))),r.createElement("section",{className:"wrap my-10 mx-5 grid justify-center gap-20 text-left sm:grid-cols-1 md:grid-cols-2"},r.createElement("div",{className:"max-w-sm"},r.createElement(p.Z,{text:"CPU, GPU, and case fans",icon:s.Z.svgPaths.check}),r.createElement("p",null,'Yup, that\'s covered. Fan Control has extensive support for a variety of motherboards, GPUs, and other hardware, like AIOs. Say goodbye to the "silo" approach of using multiple softwares to control your different fans. Have all your them controlled by a single smart entity, and start thinking about cooling and noise as a system-wide concern.')),r.createElement("div",{className:"max-w-sm"},r.createElement(p.Z,{text:"Tinkerers rejoice",icon:s.Z.svgPaths.parameters}),r.createElement("p",null,"Fan Control has ALL the parameters. Response time, hysteresis, hysteresis direction, step up, step down... Fine tune to your heart's desire. Control your fan's start and stopping logic, for smooth 0 RPM operation ",r.createElement("i",null,"(when supported)"),".")),r.createElement("div",{className:"max-w-sm"},r.createElement(p.Z,{text:"It's all about the mix",icon:s.Z.svgPaths.mix}),r.createElement("p",null,"THE missing function that originates this whole project. Mix fan curves take the possibilities to a whole new level. Combine any type of fan curves together and apply a function like maximum or average to create a whole new control logic. Different curves bound to different temperature sensors, mixed together, your case fans never asked for better. ",r.createElement("br",null),r.createElement("br",null)," "),r.createElement("p",{className:"text-body-90 cursor-pointer rounded border border-body-900 p-1 text-center font-medium hover:border-primary-800 hover:text-primary-800",onClick:function(){return f(!0)},onMouseEnter:function(){return f(!1)}},"Try it out on the demo card!")),r.createElement("div",{className:"m-auto w-fit",ref:d},r.createElement(F,{refreshId:t})),r.createElement("div",{className:"max-w-sm"},r.createElement(p.Z,{text:"Expansion through plugins",icon:s.Z.svgPaths.plugin}),r.createElement("p",null,"Want to add more sensors and controls from a third party? No problem! Fan Control has a simple"," ",r.createElement(m.n,{href:l.Z.urls.pluginUrl},"plugin")," ","system with .NET that allow any third party developer to add temperature, speed or control sensors. Installing is as easy as dropping a dll in the plugin folder, that's it.")),r.createElement("div",{className:"max-w-sm"},r.createElement(p.Z,{text:"Open source backend",icon:s.Z.svgPaths.backend}),r.createElement("p",null,"Fan Control backend is mainly based on"," ",r.createElement(m.d,{href:l.Z.urls.lhmGithubPageUrl},"LibreHardwareMonitor"),", an open source fork of the original OpenHardwareMonitor. This means that hardware compatiblity is entierely open for anyone to contribute, and doesn't rely on a single developer which may stop caring at some point. Combined with the plugin system, Fan Control is unlocked for many generations of hardware to come.")))))},U=function(){return r.createElement(h.H,{pathname:V,title:V})}},5689:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/466fa929e3c8624c0001863c50ab03e7/5a3cc/main.png","srcSet":"/static/466fa929e3c8624c0001863c50ab03e7/cc43e/main.png 259w,\\n/static/466fa929e3c8624c0001863c50ab03e7/f2f31/main.png 519w,\\n/static/466fa929e3c8624c0001863c50ab03e7/5a3cc/main.png 1037w","sizes":"(min-width: 1037px) 1037px, 100vw"},"sources":[{"srcSet":"/static/466fa929e3c8624c0001863c50ab03e7/aaa76/main.webp 259w,\\n/static/466fa929e3c8624c0001863c50ab03e7/1d8c7/main.webp 519w,\\n/static/466fa929e3c8624c0001863c50ab03e7/6bd43/main.webp 1037w","type":"image/webp","sizes":"(min-width: 1037px) 1037px, 100vw"}]},"width":1037,"height":622}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-866c7268c96f90097a06.js.map