(document.register||{}).__polyfill__||function(){function e(e){var t={},r=Object.getOwnPropertyNames(e),n=r.length;if(n)for(;n--;)t[r[n]]=Object.getOwnPropertyDescriptor(e,r[n]);return t}function t(e){return{}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function r(e,n){var i=r[n||t(e)];return i?i(e):e}function n(e){return-1==O.indexOf(typeof e)?Array.prototype.slice.call(e,0):[e]}function a(e,t){return e&&t&&t.length?n(e.querySelectorAll(t)):[]}function o(e){return e.nodeName?y[e.nodeName.toLowerCase()]:!1}function s(e,t){var r=e.nextSibling,n=e.parentNode,i=h.createDocumentFragment(),a=t.call(i.appendChild(e),i)||e;r?n.insertBefore(a,r):n.appendChild(a)}function l(e,t){if(!e._elementupgraded&&!e._suppressObservers){var r=o(e);if(r){var n=e;t&&(e._suppressObservers=!0,s(e,function(){for(n=x.call(h,e.nodeName),n._suppressObservers=!0;e.firstChild;)n.appendChild(e.firstChild);for(var t=e.attributes.length;t--;){var r=e.attributes[t];n.setAttribute(r.name,r.value)}return n})),h.__proto__?n.__proto__=r.prototype:Object.defineProperties(n,r._prototype),n.constructor=r.constructor,n._elementupgraded=!0,_||delete n._suppressObservers,r.lifecycle.created.call(n,r.prototype),t&&m(e,"elementreplace",{upgrade:n},{bubbles:!1}),m(n,"elementupgrade")}}}function c(e){var t=o(e);if(t)if(e._elementupgraded){if(e._suppressObservers)return delete e._suppressObservers,e;!e._suppressObservers&&h.documentElement.contains(e)&&t.lifecycle.inserted.call(e),u(e)}else l(e,!0);else u(e)}function u(e){e.childNodes.length&&a(e,b).forEach(function(e){e._elementupgraded||l(e,!0),o(e).lifecycle.inserted.call(e)})}function d(e){e._elementupgraded&&(e._suppressObservers?delete e._suppressObservers:(o(e).lifecycle.removed.call(e),e.childNodes.length&&a(e,b).forEach(function(e){d(e)})))}function f(e,t,r){e._records||(e._records={inserted:[],removed:[]},_?(e._observer=new _(function(t){g(e,t)}),e._observer.observe(e,{subtree:!0,childList:!0,attributes:!!0,characterData:!1})):["Inserted","Removed"].forEach(function(t){e.addEventListener("DOMNode"+t,function(r){r._mutation=!0,e._records[t.toLowerCase()].forEach(function(e){e(r.target,r)})},!1)})),-1==e._records[t].indexOf(r)&&e._records[t].push(r)}function p(e,t,r){var n=e._records;n&&r?n[t].splice(n[t].indexOf(r),1):n[t]=[]}function g(e,t){var r={added:[],removed:[]};t.forEach(function(t){t._mutation=!0;for(var n in r){var a=e._records["added"==n?"inserted":"removed"],o=t[n+"Nodes"],s=o.length;for(i=0;s>i&&-1==r[n].indexOf(o[i]);i++)r[n].push(o[i]),a.forEach(function(e){e(o[i],t)})}})}function m(e,t,r,n){n=n||{};var i=h.createEvent("Event");i.initEvent(t,"bubbles"in n?n.bubbles:!0,"cancelable"in n?n.cancelable:!0);for(var a in r)i[a]=r[a];e.dispatchEvent(i)}var v=window,h=document,y={},b=[],E=!1,_=v.MutationObserver||v.WebKitMutationObserver||v.MozMutationObserver,x=h.createElement,w=function(t,r){if(y[t]||b.push(t),r=r||{},r.prototype&&!("setAttribute"in r.prototype))throw new TypeError("Unexpected prototype for "+t+" element - custom element prototypes must inherit from the Element interface");var n=r.prototype||Object.create((v.HTMLSpanElement||v.HTMLElement).prototype),i=r.lifecycle||{},o=y[t]={constructor:function(){return h.createElement(t)},_prototype:h.__proto__?null:e(n),prototype:n,fragment:r.fragment||h.createDocumentFragment(),lifecycle:{created:i.created||function(){},removed:i.removed||function(){},inserted:i.inserted||function(){},attributeChanged:i.attributeChanged||function(){}}};return o.constructor.prototype=o.prototype,E&&a(h,t).forEach(function(e){l(e,!0)}),o.constructor};r.object=function(e){var t={};for(var n in e)t[n]=r(e[n]);return t},r.array=function(e){for(var t=e.length,n=Array(t);t--;)n[t]=r(e[t]);return n};var O=["number","boolean","string","function"],C=!h.register;if(C){h.register=w,h.createElement=function(e){var t=x.call(h,e);return l(t),t};var A=Element.prototype.setAttribute;Element.prototype.setAttribute=function(e,t,r){var n=o(this),i=this.getAttribute(e);A.call(this,e,t),n&&i!=this.getAttribute(e)&&n.lifecycle.attributeChanged.call(this,e,t,i,r)};var k=function(){f(h.documentElement,"inserted",c),f(h.documentElement,"removed",d),b.length&&a(h,b).forEach(function(e){l(e,!0)}),E=!0,m(h,"DOMComponentsLoaded"),m(h,"__DOMComponentsLoaded__")};"complete"==h.readyState?k():h.addEventListener("interactive"==h.readyState?"readystatechange":"DOMContentLoaded",k)}h.register.__polyfill__={query:a,clone:r,typeOf:t,toArray:n,fireEvent:m,manipulate:s,addObserver:f,removeObserver:p,observerElement:h.documentElement,parseMutations:g,_inserted:c,_createElement:x,_polyfilled:C}}(),function(){function e(e,t,r){var n=u.typeOf(r);return"object"==n&&"object"==u.typeOf(e[t])?u.merge(e[t],r):e[t]=u.clone(r,n),e}function t(e,t,r){var n={};for(var i in r)n[i.split(":")[0]]=!0;for(var a in t)n[a.split(":")[0]]||(r[a]=t[a])}function r(e){return e.mixins.forEach(function(r){var n=u.mixins[r];for(var i in n)switch(i){case"lifecycle":case"methods":t(i,n[i],e[i]);break;case"accessors":case"prototype":for(var a in n[i])t(a,n[i],e.accessors);break;case"events":}}),e}var n=window,i=document,a={action:function(e,t){return e.value.match(/(\d+)/g).indexOf(t.keyCode+"")>-1==("keypass"==e.name)}},o=function(e,t){return e.listener.touched?e.listener.touched=!1:(t.type.match("touch")&&(e.listener.touched=!0),void 0)},s=function(e){var t="over"==e;return{base:"OverflowEvent"in n?"overflowchanged":e+"flow",condition:function(r,n){return n.flow=e,n.type==e+"flow"||0===n.orient&&n.horizontalOverflow==t||1==n.orient&&n.verticalOverflow==t||2==n.orient&&n.horizontalOverflow==t&&n.verticalOverflow==t}}},l=function(){var e=n.getComputedStyle(i.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1],r="WebKit|Moz|MS|O".match(RegExp("("+t+")","i"))[1];return{dom:r,lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.substr(1)}}(),c=Element.prototype.matchesSelector||Element.prototype[l.lowercase+"MatchesSelector"],u={tags:{},defaultOptions:{pseudos:[],mixins:[],events:{},methods:{},accessors:{},lifecycle:{},prototype:{xtag:{get:function(){return this.__xtag__?this.__xtag__:this.__xtag__={data:{}}}}}},register:function(e,t){var a=e.toLowerCase(),o=u.tags[a]=r(u.merge({},u.defaultOptions,t));u.attributeSetters[a]={};for(var s in o.events)o.events[s]=u.parseEvent(s,o.events[s]);for(var s in o.lifecycle)o.lifecycle[s.split(":")[0]]=u.applyPseudos(s,o.lifecycle[s],o.pseudos);for(var s in o.methods)o.prototype[s.split(":")[0]]={value:u.applyPseudos(s,o.methods[s],o.pseudos)};for(var l in o.accessors){o.prototype[l]={};var c=o.accessors[l];for(var s in c){var d=s.split(":"),f=d[0];"get"==f||"set"==f?(d[0]=l,o.prototype[l][f]=u.applyPseudos(d.join(":"),c[s],o.pseudos)):o.prototype[l][s]=c[s]}}var p=o.lifecycle.attributeChanged;o.lifecycle.attributeChanged=function(e,t,r,n){var i=u.attributeSetters[a][e.toLowerCase()];return!n&&i&&(this[i]=t),p?p.apply(this,u.toArray(arguments)):null};var g=o.lifecycle.created;o.lifecycle.created=function(){var e=this;return o.pseudos.forEach(function(t){t.onAdd.call(e,t)}),u.addEvents(this,o.events),o.mixins.forEach(function(t){u.mixins[t].events&&u.addEvents(e,u.mixins[t].events)}),g?g.apply(this,u.toArray(arguments)):null};var m=i.register(a,{prototype:"nodeName"in o.prototype?o.prototype:Object.create((n.HTMLSpanElement||n.HTMLElement).prototype,o.prototype),lifecycle:o.lifecycle});return m},mixins:{},prefix:l,attributeSetters:{},captureEvents:["focus","blur"],customEvents:{overflow:s("over"),underflow:s("under"),animationstart:{base:["animationstart","oAnimationStart","MSAnimationStart","webkitAnimationStart"]},transitionend:{base:["transitionend","oTransitionEnd","MSTransitionEnd","webkitTransitionEnd"]},tap:{base:["click","touchend"],condition:o},tapstart:{base:["mousedown","touchstart"],condition:o},tapend:{base:["mouseup","touchend"],condition:o},tapenter:{base:["mouseover","touchenter"],condition:o},tapleave:{base:["mouseout","touchleave"],condition:o},tapmove:{base:["mousemove","touchmove"],condition:o}},pseudos:{keypass:a,keyfail:a,delegate:{action:function(e,t){var r=u.query(this,e.value).filter(function(e){return e==t.target||e.contains?e.contains(t.target):!1})[0];return r?e.listener=e.listener.bind(r):!1}},preventable:{action:function(e,t){return!t.defaultPrevented}},attribute:{onAdd:function(e){var t=(e.value||e.key.split(":")[0]).toLowerCase();u.attributeSetters[this.nodeName.toLowerCase()][t]=e.key.split(":")[0]},action:function(e,t){this.setAttribute(e.value||e.key.split(":")[0],t,!0)}}},wrap:function(e,t){return function(){var r=u.toArray(arguments),n=e.apply(this,r);return n===!1?!1:t.apply(this,n!==void 0?u.toArray(n):r)}},merge:function(t,r,n){if("string"==u.typeOf(r))return e(t,r,n);for(var i=1,a=arguments.length;a>i;i++){var o=arguments[i];for(var s in o)e(t,s,o[s])}return t},skipTransition:function(e,t,r){var n=l.js+"TransitionDuration";e.style[n]="0.001s",t.call(r),u.addEvent(e,"transitionend",function(){e.style[n]=""})},matchSelector:function(e,t){return c.call(e,t)},innerHTML:function(e,t){e.innerHTML=t,u._polyfilled&&(u.observerElement._observer?u.parseMutations(u.observerElement,u.observerElement._observer.takeRecords()):u._inserted(e))},hasClass:function(e,t){return e.className.split(" ").indexOf(t.trim())>-1},addClass:function(e,t){var r=e.className.trim().split(" ");return t.trim().split(" ").forEach(function(e){~r.indexOf(e)||r.push(e)}),e.className=r.join(" ").trim(),e},removeClass:function(e,t){var r=t.trim().split(" ");return e.className=e.className.trim().split(" ").filter(function(e){return e&&!~r.indexOf(e)}).join(" "),e},toggleClass:function(e,t){return u[u.hasClass(e,t)?"removeClass":"addClass"].call(null,e,t)},query:function(e,t){return u.toArray(e.querySelectorAll(t))},queryChildren:function(e,t){var r=e.id,n=e.id=r||"x_"+(new Date).getTime(),i="#"+n+" > ";t=i+(t+"").replace(",",","+i,"g");var a=e.parentNode.querySelectorAll(t);return r||e.removeAttribute("id"),u.toArray(a)},createFragment:function(e){var t=i.createDocumentFragment();if(e){for(var r=t.appendChild(i.createElement("div")),n=u.toArray(e.nodeName?arguments:!(r.innerHTML=e)||r.children),a=n.length;a--;)t.insertBefore(n[a],r);t.removeChild(r)}return t},applyPseudos:function(e,t,r){var n=t;if(e.match(":"))for(var i=e.match(/(\w+(?:\([^\)]+\))?)/g),a=i.length;--a;)i[a].replace(/(\w*)(?:\(([^\)]*)\))?/,function(t,i,a){var o=u.pseudos[i];if(o.key=e,o.name=i,o.value=a,!o)throw"pseudo not found: "+i;var s=n;n=function(){var t=u.toArray(arguments),r={key:e,name:i,value:a,listener:s};return o.action.apply(this,[r].concat(t))===!1?!1:r.listener.apply(this,t)},r&&o.onAdd&&(r.getAttribute?o.onAdd.call(r,o):r.push(o))});return n},parseEvent:function(e,t){var r=e.split(":"),n=function(){},i=r.shift(),a=u.merge({base:i,pseudos:"",_pseudos:[],onAdd:n,onRemove:n,condition:n},u.customEvents[i]||{});if(a.type=i+(a.pseudos.length?":"+a.pseudos:"")+(r.length?":"+r.join(":"):""),t){var o=u.applyPseudos(a.type,t,a._pseudos);a.listener=function(){var e=u.toArray(arguments);return a.condition.apply(this,[a].concat(e))===!1?!1:o.apply(this,e)}}return a},addEvent:function(e,t,r){var n="function"==typeof r?u.parseEvent(t,r):r;return n._pseudos.forEach(function(t){t.onAdd.call(e,t)}),n.onAdd.call(e,n,n.listener),u.toArray(n.base).forEach(function(t){e.addEventListener(t,n.listener,u.captureEvents.indexOf(t)>-1)}),n.listener},addEvents:function(e,t){for(var r in t)u.addEvent(e,r,t[r])},removeEvent:function(e,t,r){var n=u.parseEvent(t);n.onRemove.call(e,n,r),u.removePseudos(e,n.type,r),u.toArray(n.base).forEach(function(t){e.removeEventListener(t,r)})}};u.typeOf=i.register.__polyfill__.typeOf,u.clone=i.register.__polyfill__.clone,u.merge(u,i.register.__polyfill__),"function"==typeof define&&define.amd?define(u):n.xtag=u}();