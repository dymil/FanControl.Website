(self.webpackChunkfan_control=self.webpackChunkfan_control||[]).push([[962],{4944:function(e,t,n){"use strict";var r=n(2109),l=n(6790),a=n(7908),u=n(6244),c=n(9303),i=n(5417);r({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=a(this),n=u(t),r=i(t,0);return r.length=l(r,t,t,n,0,void 0===e?1:c(e)),r}})},3792:function(e,t,n){n(1223)("flat")},8117:function(e,t,n){"use strict";n.d(t,{xj:function(){return r},y9:function(){return a},zE:function(){return l}});var r=[{name:"Max",invoke:function(e){return e.map((function(e){return e.getValue()})).reduce((function(e,t){return e>t?e:t}),-1)}},{name:"Min",invoke:function(e){return e.map((function(e){return e.getValue()})).reduce((function(e,t){return e<t?e:t}),101)}},{name:"Average",invoke:function(e){return e.map((function(e){return e.getValue()})).reduce((function(e,t){return e+t}),0)/e.length}}],l=function(e,t,n){return{name:e,selectedTemperature:t,getValue:function(){var e,r,l,a=n.find((function(e){return e.name==t}));return a?(e=3*(a.value-30),r=0,l=100,Math.min(Math.max(e,r),l)):-1}}},a=function(e,t,n){return{name:e,selectedMixFunction:t,getValue:function(){return t.invoke(n)}}}},5720:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7294),l=n(2939);function a(e){var t,n,a=e.iconPath,u=e.fanCurve,c=e.controlValueSuffix,i=e.children,m=u.getValue();return r.createElement(l.Z,{className:"bg-primary-800"},r.createElement("div",{className:"flex w-56 flex-col text-white"},r.createElement("div",{className:"flex flex-row items-center justify-center"},(n=a,r.createElement("svg",{className:"h-12 w-12",viewBox:"0 0 24 24"},r.createElement("path",{fill:"currentColor",d:n}))),r.createElement("div",{className:"ml-4 w-full border-b-2 border-white "},u.name)),r.createElement("div",null,i),r.createElement("div",{className:"mt-1 flex flex-row justify-between"},r.createElement("div",null,r.createElement("span",null,(t=m)>=0&&t<=100?m.toFixed(1):"-"," %")," ",r.createElement("span",null,c)))))}},8436:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(5785),l=n(7294),a=n(2475),u=n(6337),c=n(8117),i=n(5720);function m(e){var t,n,m=e.name,o=e.fanCurves,s=e.selectedFanCurvesDefault,f=(0,l.useState)(null!=s?s:o.map((function(e){return e.name}))),d=f[0],E=f[1],p=o.filter((function(e){return d.includes(e.name)})),h=(0,l.useState)(c.xj[0]),v=h[0],g=h[1],x=(0,c.y9)(m,v,p),b=d.length>0?null!==(t=null===(n=p.find((function(e){return e.getValue()==x.getValue()})))||void 0===n?void 0:n.name)&&void 0!==t?t:"Average":v.name;return l.createElement(i.Z,{iconPath:a.Z.svgPaths.mix,fanCurve:x,controlValueSuffix:" ("+b+")"},l.createElement(u.Z,{onChange:function(e){return g(c.xj[e.target.selectedIndex])},value:x.selectedMixFunction.name,label:"Function"},c.xj.map((function(e){return l.createElement("option",{key:e.name,value:e.name},e.name)}))),l.createElement(u.Z,{value:"default",onChange:function(e){return t=e.target.selectedIndex,n=o[t-1],void(d.includes(n.name)||E((function(e){return[].concat((0,r.Z)(e),[n.name])})));var t,n},label:"",className:"mt-1"},l.createElement("option",{key:"-1",disabled:!0,value:"default"},"Add a fan curve..."),o.map((function(e,t){return l.createElement("option",{key:t},e.name)}))),p.map((function(e,t){return l.createElement("div",{key:t,className:"my-2 ml-2 text-sm"},l.createElement("span",{className:"mr-1"},"○")," ",l.createElement("span",null,e.name),l.createElement("span",null," (",e.getValue()," %)"),l.createElement("button",{onClick:function(){return E(d.filter((function(t){return t!=e.name})))},className:"float-right rounded border border-white px-1"},"X"))})))}},5900:function(e,t,n){"use strict";function r(e,t,n){return{name:e,value:Math.round(Math.random()*(n-t)+t)}}function l(e,t){return{name:e,value:t}}n.d(t,{T:function(){return l},f:function(){return r}})},9122:function(e,t,n){"use strict";n.d(t,{JO:function(){return a},Wr:function(){return u},bb:function(){return l}});var r=n(7294),l=function(e){return r.createElement("svg",{className:"h-12 w-12",viewBox:"0 0 24 24"},r.createElement("path",{fill:"currentColor",d:e}))},a=function(e){return r.createElement("svg",{className:"h-8 w-8",viewBox:"0 0 24 24"},r.createElement("path",{fill:"currentColor",d:e}))},u=function(e){return r.createElement("svg",{className:"h-5 w-5",viewBox:"0 0 24 24"},r.createElement("path",{fill:"currentColor",d:e}))}},9435:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.icon,n=e.text;return r.createElement("h2",{className:"mb-2 flex items-center text-left"},t?r.createElement("svg",{className:"mr-5 h-12 w-12",viewBox:"0 0 24 24"},r.createElement("path",{fill:"currentColor",d:t})):r.createElement(r.Fragment,null),r.createElement("span",{className:"align-middle text-2xl font-medium"},n))}},6337:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(3366),l=n(7294),a=n(9940),u=["className","label"];function c(e){var t=e.className,n=(e.label,(0,r.Z)(e,u));return l.createElement(l.Fragment,null,l.createElement("label",{className:"mb-2 text-sm font-medium"},e.label),l.createElement("select",Object.assign({className:(0,a.m)("text-base font-normal text-white w-full bg-transparent border-white border-spacing-1 border-b focus:text-gray-700 focus:bg-white",t)},n)))}},6082:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return R},default:function(){return O}});var r=n(7294),l=n(9940),a="Minimum temperature difference for a change to occur.",u="Minimum time for a change to occur.",c="Source to use as input.",i="Choose between Max, Min, Average, Sum, Subtract.",m=function(e){var t=e.children;return r.createElement(r.Fragment,null,t)},o=n(2475),s={key:"Time Average",icon:o.Z.svgPaths.time,render:function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"The time average custom sensor averages the selected sensor over a set ammount of time."),r.createElement("br",null),r.createElement(m,null,r.createElement("h2",null,"Parameters:"),r.createElement("ul",null,r.createElement("li",null,"Temperature source: ",c),r.createElement("li",null,"Time: Averaging period of the selected temperature source."))))}},f={key:"Mix Sensor",icon:o.Z.svgPaths.temperature,render:function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"The mix custom sensor applies a function to the selected temperature sensors."),r.createElement("br",null),r.createElement(m,null,r.createElement("h2",null,"Parameters:"),r.createElement("ul",null,r.createElement("li",null,"Function: ",i),r.createElement("li",null,"Add sensor: Add any existing temperature sensor to the mix."," "))))}},d={key:"File",icon:o.Z.svgPaths.file,render:function(){return r.createElement(r.Fragment,null,r.createElement("p",null,'The file custom sensor reads data from a given file. The temperature must be written directly into the ".sensor" file as text in celcius on the first line. Use this sensor as a way to inject a sensor from any other source that the software doesn\'t support natively.'),r.createElement("br",null),r.createElement(m,null,r.createElement("h2",null,"Parameters:"),r.createElement("ul",null,r.createElement("li",null,"Path: Path of the sensor file."))))}},E=(n(4944),n(3792),n(8436)),p=n(5900),h=n(4419),v={key:"Linear",icon:o.Z.svgPaths.linear,render:function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"The linear fan curve applies a linear function based on a temperature source."),r.createElement("br",null),r.createElement("p",null,"Below the minimum temperature, minimum speed is applied."),r.createElement("p",null,"Above the maximum temperature, maximum speed is applied."),r.createElement("br",null),r.createElement(m,null,r.createElement("h2",null,"Parameters:"),r.createElement("ul",null,r.createElement("li",null,"Min. and max. temperature : Temperature bounds between to interpolate between."),r.createElement("li",null,"Min. and max. speed : Fan speeds as % to be interpolated between the min. and max. temperature."," "),r.createElement("li",null,"Temperature source: ",c),r.createElement("li",null,"Hysteresis: ",a),r.createElement("li",null,"Response time: ",u))))}},g={key:"Graph",icon:o.Z.svgPaths.graph,render:function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"The graph fan curve applies a custom drawn function based on a temperature source."),r.createElement("br",null),r.createElement("p",null,'Press "Edit" to open up the editor. Left click to add a point, right click to remove one. Hover your mouse over a point and use the "Selected Point" input boxes to precisely change its location.'),r.createElement("br",null),r.createElement(m,null,r.createElement("h2",null,"Parameters:"),r.createElement("ul",null,r.createElement("li",null,"Temperature source: ",c),r.createElement("li",null,"Hysteresis: ",a),r.createElement("li",null,"Response time: ",u))))}},x=function(){var e=(0,r.useState)([(0,p.T)("a",50),(0,p.T)("b",50)]),t=e[0],n=e[1];(0,h.Yz)(1e3,(function(){n([(0,p.f)("a",30,70),(0,p.f)("b",30,70)])}));var l=[{name:"A linear fan curve",getValue:function(){return t[0].value}},{name:"Graph fan curve",getValue:function(){return t[1].value}}];return r.createElement(E.Z,{name:"Mix demo",fanCurves:l,selectedFanCurvesDefault:l.slice(0,1).map((function(e){return e.name}))})},b={key:"Flat",icon:o.Z.svgPaths.flat,render:function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"The flat fan curve simply applies a fixed %. Usefull if you want to set and change the % of multiple controls."),r.createElement("br",null),r.createElement(m,null,r.createElement("h2",null,"Parameters:"),r.createElement("ul",null,r.createElement("li",null,"Fan speed %: Percent."))))}},y={key:"Sync",icon:o.Z.svgPaths.sync,render:function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"The sync fan curve will output the same % as the selected control. Use it to sync multiple fans to a single control. Whatever fan curve you apply to that control, all the synced fans will also follow that new fan curve."),r.createElement("br",null),r.createElement(m,null,r.createElement("h2",null,"Parameters:"),r.createElement("ul",null,r.createElement("li",null,"Selected control: The control to sync with."),r.createElement("li",null,"Offset: Offset in % to be applied to the selected control."))))}},w={key:"Trigger",icon:o.Z.svgPaths.trigger,render:function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"The trigger fan curve will hold its fan speed until one of the two changing point is triggered. Below the idle temperature, idle fan speed is applied until the temperature gets back up to the load temperature. Above the load temperature, load fan speed is applied until the temperature gets back down to the idle temperature."),r.createElement("br",null),r.createElement(m,null,r.createElement("h2",null,"Parameters:"),r.createElement("ul",null,r.createElement("li",null,"Response Time: ",u))))}},k={key:"Mix Fan Curve",icon:o.Z.svgPaths.mix,render:function(){return r.createElement(r.Fragment,null,r.createElement("div",{className:"my-5"},r.createElement(x,null)),r.createElement("p",null,"The mix fan curve will combine multiple existing fan curves using a mix function, like max or average."),r.createElement("br",null),r.createElement(m,null,r.createElement("h2",null,"Parameters:"),r.createElement("ul",null,r.createElement("li",null,"Function: ",i),r.createElement("li",null,"Fan curves: Add any existing fan curve to the mix. "))))}},N=n(9122),F=n(7206),C=n(9435),P=n(4001),T="Docs",Z=[v,g,k,w,b,y],M=[s,f,d],A=[{key:"-c --config",render:function(){return r.createElement("div",null,r.createElement("div",null,"Usage: FanControl.exe -c yourConfig.json"),r.createElement("div",null,"Start using the specified config, or change the config if the software is already running."))}},{key:"-w",render:function(){return r.createElement(r.Fragment,null,"Force the UI window to open, override the minimize option.")}}],S=function(e,t){var n=e.current.get(t.key);if(n){var r=n.getBoundingClientRect().top+window.pageYOffset-75;window.scrollTo({top:r,behavior:"smooth"})}},V=function(e,t){return r.createElement("li",{key:e.key,className:"cursor-pointer rounded p-1 hover:bg-body-200",onClick:function(){return t()}},r.createElement("div",{className:"flex items-center"},e.icon?(0,N.Wr)(e.icon):"",r.createElement("span",{className:"ml-2 align-middle"},e.key)))},j=function(e,t){return r.createElement("div",{key:e.key,ref:function(n){return t.current.set(e.key,n)}},r.createElement(C.Z,{icon:e.icon,text:e.key}),e.render())},B=function(e){var t=e.text;return r.createElement("h3",{className:"mb-2 font-medium underline"},t)},H=function(e){var t=e.text;return r.createElement("h2",{className:"mx-auto self-center text-left text-4xl font-semibold"},t)},O=function(){var e=(0,r.useRef)(new Map);return r.createElement(F.Z,{pageTitle:"Docs"},r.createElement("div",{className:"flex px-5 pb-5"},r.createElement("div",{className:"w-fit border-r-2 border-body-200 pr-5"},r.createElement("div",{className:"sticky top-20 flex flex-col "},r.createElement(B,{text:"Fan Curves"}),r.createElement("ul",{className:"mr-5 mb-5"},Z.map((function(t){return V(t,(function(){return S(e,t)}))}))),r.createElement(B,{text:"Custom Sensors"}),r.createElement("ul",{className:"mr-5 mb-5"},M.map((function(t){return V(t,(function(){return S(e,t)}))}))),r.createElement(B,{text:"Command Line Arguments"}),r.createElement("ul",{className:"mr-5 mb-5"},A.map((function(t){return V(t,(function(){return S(e,t)}))}))))),r.createElement("div",{className:(0,l.m)("docs-module--doc--5783a","ml-5 ")},r.createElement("div",{className:"max-w-3xl space-y-16"},r.createElement(H,{text:"Fan Curves"}),Z.map((function(t){return j(t,e)})),r.createElement(H,{text:"Custom Sensors"}),M.map((function(t){return j(t,e)})),r.createElement(H,{text:"Command Line Arguments"}),A.map((function(t){return j(t,e)}))))))},R=function(){return r.createElement(P.H,{pathname:T,title:T})}}}]);
//# sourceMappingURL=component---src-pages-docs-tsx-3adb38164fcb12bd556f.js.map