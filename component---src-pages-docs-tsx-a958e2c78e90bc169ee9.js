"use strict";(self.webpackChunkfan_control=self.webpackChunkfan_control||[]).push([[962],{8117:function(e,n,t){t.d(n,{xj:function(){return r},y9:function(){return l},zE:function(){return a}});var r=[{name:"Max",invoke:function(e){return e.map((function(e){return e.getValue()})).reduce((function(e,n){return e>n?e:n}),-1)}},{name:"Min",invoke:function(e){return e.map((function(e){return e.getValue()})).reduce((function(e,n){return e<n?e:n}),101)}},{name:"Average",invoke:function(e){return e.map((function(e){return e.getValue()})).reduce((function(e,n){return e+n}),0)/e.length}}],a=function(e,n,t){return{name:e,selectedTemperature:n,getValue:function(){var e,r,a,l=t.find((function(e){return e.name==n}));return l?(e=3*(l.value-30),r=0,a=100,Math.min(Math.max(e,r),a)):-1}}},l=function(e,n,t){return{name:e,selectedMixFunction:n,getValue:function(){return n.invoke(t)}}}},5720:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(7294),a=t(2939);function l(e){var n,t,l=e.iconPath,u=e.fanCurve,c=e.controlValueSuffix,i=e.children,m=u.getValue();return r.createElement(a.Z,{className:"bg-blue-500"},r.createElement("div",{className:"flex w-52 flex-col text-white"},r.createElement("div",{className:"flex flex-row items-center justify-center"},(t=l,r.createElement("svg",{className:"h-12 w-12",viewBox:"0 0 24 24"},r.createElement("path",{fill:"currentColor",d:t}))),r.createElement("div",{className:"ml-4 w-full border-b-2 border-white "},u.name)),r.createElement("div",null,i),r.createElement("div",{className:"mt-1 flex flex-row justify-between"},r.createElement("div",null,r.createElement("span",null,(n=m)>=0&&n<=100?m.toFixed(1):"-"," %")," ",r.createElement("span",null,c)))))}},8436:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(5785),a=t(7294),l=t(2475),u=t(6337),c=t(8117),i=t(5720);function m(e){var n,t,m=e.name,o=e.fanCurves,s=e.selectedFanCurvesDefault,f=(0,a.useState)(null!=s?s:o.map((function(e){return e.name}))),d=f[0],v=f[1],E=o.filter((function(e){return d.includes(e.name)})),p=(0,a.useState)(c.xj[0]),g=p[0],x=p[1],h=(0,c.y9)(m,g,E),b=d.length>0?null!==(n=null===(t=E.find((function(e){return e.getValue()==h.getValue()})))||void 0===t?void 0:t.name)&&void 0!==n?n:"Average":g.name;return a.createElement(i.Z,{iconPath:l.Z.svgPaths.mix,fanCurve:h,controlValueSuffix:" ("+b+")"},a.createElement(u.Z,{onChange:function(e){return x(c.xj[e.target.selectedIndex])},value:h.selectedMixFunction.name,label:"Function"},c.xj.map((function(e){return a.createElement("option",{key:e.name,value:e.name},e.name)}))),a.createElement(u.Z,{value:"default",onChange:function(e){return n=e.target.selectedIndex,t=o[n-1],void(d.includes(t.name)||v((function(e){return[].concat((0,r.Z)(e),[t.name])})));var n,t},label:"",className:"mt-1"},a.createElement("option",{key:"-1",disabled:!0,value:"default"},"Add a fan curve..."),o.map((function(e,n){return a.createElement("option",{key:n},e.name)}))),E.map((function(e,n){return a.createElement("div",{key:n,className:"my-2 ml-2 text-sm"},a.createElement("span",{className:"mr-1"},"○")," ",a.createElement("span",null,e.name),a.createElement("span",null," (",e.getValue()," %)"),a.createElement("button",{onClick:function(){return v(d.filter((function(n){return n!=e.name})))},className:"float-right rounded border border-white px-1"},"X"))})))}},5900:function(e,n,t){function r(e,n,t){return{name:e,value:Math.round(Math.random()*(t-n)+n)}}function a(e,n){return{name:e,value:n}}t.d(n,{T:function(){return a},f:function(){return r}})},9435:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.icon,t=e.text;return r.createElement("h1",{className:"mb-2 flex items-center text-left"},n?r.createElement("svg",{className:"mr-5 h-12 w-12",viewBox:"0 0 24 24"},r.createElement("path",{fill:"currentColor",d:n})):r.createElement(r.Fragment,null),r.createElement("span",{className:"align-middle text-2xl font-semibold"},t))}},6337:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(3366),a=t(7294),l=t(9940),u=["className","label"];function c(e){var n=e.className,t=(e.label,(0,r.Z)(e,u));return a.createElement(a.Fragment,null,a.createElement("label",{className:"mb-2 text-sm font-medium"},e.label),a.createElement("select",Object.assign({className:(0,l.m)("text-base font-normal text-white w-full bg-transparent border-white border-spacing-1 border-b focus:text-gray-700 focus:bg-white",n)},t)))}},6113:function(e,n,t){t.r(n),t.d(n,{Head:function(){return C},default:function(){return N}});var r=t(7294),a=t(9940),l=t(2475),u=t(8436),c=t(5900),i=t(4419),m="Minimum temperature difference for a change to occur.",o="Minimum time for a change to occur.",s="Source to use as input.",f={key:"Linear",icon:l.Z.svgPaths.linear,render:function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"The linear fan curve applies a linear function based on a temperature source."),r.createElement("br",null),r.createElement("p",null,"Below the minimum temperature, minimum speed is applied."),r.createElement("p",null,"Above the maximum temperature, maximum speed is applied."),r.createElement("br",null),r.createElement("h2",null,"Parameters:"),r.createElement("ul",null,r.createElement("li",null,"Min. and max. temperature : Temperature bounds between to interpolate between."),r.createElement("li",null,"Min. and max. speed : Fan speeds as % to be interpolated between the min. and max. temperature."," "),r.createElement("li",null,"Temperature source: ",s),r.createElement("li",null,"Hysteresis: ",m),r.createElement("li",null,"Response time: ",o)))}},d={key:"Graph",icon:l.Z.svgPaths.graph,render:function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"The graph fan curve applies a custom drawn function based on a temperature source."),r.createElement("br",null),r.createElement("h2",null,"Parameters:"),r.createElement("ul",null,r.createElement("li",null,"Temperature source: ",s),r.createElement("li",null,"Hysteresis: ",m),r.createElement("li",null,"Response time: ",o)))}},v=function(){var e=(0,r.useState)([(0,c.T)("a",50),(0,c.T)("b",50)]),n=e[0],t=e[1];(0,i.Y)(1e3,(function(){t([(0,c.f)("a",30,70),(0,c.f)("b",30,70)])}));var a=[{name:"A linear fan curve",getValue:function(){return n[0].value}},{name:"Graph fan curve",getValue:function(){return n[1].value}}];return r.createElement(u.Z,{name:"Mix demo",fanCurves:a,selectedFanCurvesDefault:a.slice(0,1).map((function(e){return e.name}))})},E={key:"Mix",icon:l.Z.svgPaths.mix,render:function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"The mix fan curve will combine multiple existing fan curves using a mix function, like max or average."),r.createElement("div",{className:"my-5"},r.createElement(v,null)),r.createElement("h2",null,"Parameters:"),r.createElement("ul",null,r.createElement("li",null,"Function: Choose between Max, Min, Average, Sum, Subtract."),r.createElement("li",null,"Fan curves: Add any existing fan curve to the mix. ")))}},p=t(7206),g=t(9435),x=[f,d,E],h=[{key:"-c --config",render:function(){return r.createElement("div",null,r.createElement("div",null,"Usage: FanControl.exe -c yourConfig.json"),r.createElement("div",null,"Start using the specified config, or change the config if the software is already running."))}},{key:"-w",render:function(){return r.createElement(r.Fragment,null,"Force the UI window to open, override the minimize option.")}}],b=function(e,n){var t;null===(t=e.current.get(n.key))||void 0===t||t.scrollIntoView({behavior:"smooth"})},w=function(e,n){return r.createElement("li",{key:e,className:"cursor-pointer rounded p-1 hover:bg-slate-200",onClick:function(){return n()}},e)},y=function(e,n){return r.createElement("div",{key:e.key,ref:function(t){return n.current.set(e.key,t)}},r.createElement(g.Z,{icon:e.icon,text:e.key}),e.render())},k=function(e){var n=e.text;return r.createElement("h3",{className:"my-2 font-medium underline"},n)},N=function(){var e=(0,r.useRef)(new Map);return r.createElement(p.Z,{pageTitle:"Docs"},r.createElement("div",{className:"m-auto flex max-w-5xl p-5"},r.createElement("div",{className:"flex flex-col border-r-2 border-slate-200 pr-5"},r.createElement(k,{text:"Fan Curves"}),r.createElement("ul",{className:"mr-5"},x.map((function(n){return w(n.key,(function(){return b(e,n)}))}))),r.createElement(k,{text:"Custom Sensors"}),r.createElement("ul",{className:"mr-5"},w("Coming soon...",(function(){}))),r.createElement(k,{text:"Command line arguments"}),r.createElement("ul",{className:"mr-5"},h.map((function(n){return w(n.key,(function(){return b(e,n)}))})))),r.createElement("div",{className:(0,a.m)("docs-module--doc--5783a","ml-5 space-y-12")},x.map((function(n){return y(n,e)})),h.map((function(n){return y(n,e)})))))},C=function(){return r.createElement("title",null,"Docs")}}}]);
//# sourceMappingURL=component---src-pages-docs-tsx-a958e2c78e90bc169ee9.js.map