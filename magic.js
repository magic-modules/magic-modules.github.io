"use strict";function c(a){return s(a)||d(a)||o(a)||n()}function d(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}function e(a,b){if(null==a)return{};var c,d,e=f(a,b);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(d=0;d<g.length;d++)c=g[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function f(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function j(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function k(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?j(Object(b),!0).forEach(function(c){l(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):j(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function l(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function m(a,b){return s(a)||r(a,b)||o(a,b)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(a,b){if(a){if("string"==typeof a)return q(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?q(a,b):void 0}}function q(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function r(a,b){var c=a&&("undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"]);if(null!=c){var d,e,f=[],g=!0,h=!1;try{for(c=c.call(a);!(g=(d=c.next()).done)&&(f.push(d.value),!(b&&f.length===b));g=!0);}catch(a){h=!0,e=a}finally{try{g||null==c["return"]||c["return"]()}finally{if(h)throw e}}return f}}function s(a){if(Array.isArray(a))return a}function t(a){"@babel/helpers - typeof";return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},t(a)}var u=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,h=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=h(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},m=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},n=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||m(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},o=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2)]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=h(d)))?a.setAttribute(b,d):a.removeAttribute(b)},p=function(a,c,d){var e=a.props,f=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name,{is:e.is}):document.createElement(a.name,{is:e.is});for(var g in e)o(f,g,null,e[g],c,d);for(var h=0,j=a.children.length;h<j;h++)f.appendChild(p(a.children[h]=v(a.children[h]),c,d));return a.node=f},q=function(a){return null==a?null:a.key},r=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(p(e=v(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,s=e.props,t=d.children,u=e.children,w=0,x=0,y=t.length-1,z=u.length-1;for(var A in g=g||"svg"===e.name,j(n,s))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==s[A]&&o(c,A,n[A],s[A],f,g);for(;x<=z&&w<=y&&null!=(l=q(t[w]))&&l===q(u[x]);)r(c,t[w].node,t[w],u[x]=v(u[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=q(t[y]))&&l===q(u[z]);)r(c,t[y].node,t[y],u[z]=v(u[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(p(u[x]=v(u[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=q(k=t[w]),m=q(u[x]=v(u[x],k)),C[l]||null!=m&&m===q(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(r(c,k&&k.node,k,u[x],f,g),x++),w++):(l===m?(r(c,k.node,k,u[x],f,g),C[m]=!0,w++):null==(h=B[m])?r(c,k&&k.node,null,u[x],f,g):(r(c,c.insertBefore(h.node,k&&k.node),h,u[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==q(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},s=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(a){return"object"===t(a)?a:x(a)},v=function(b,c){return b.type===a?((!c||!c.lazy||s(c.lazy,b.lazy))&&((c=u(b.lazy.view(b.lazy))).lazy=b.lazy),c):b},w=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},x=function(a,e){return w(a,c,d,e,void 0,b)},y=function(a){return a.nodeType===b?x(a.nodeValue,a):w(a.nodeName.toLowerCase(),c,e.call(a.childNodes,y),a,void 0,1)};return{h:function h(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push(u(d));return b=b||c,"function"==typeof a?a(b,g):w(a,b,g,void 0,b.key)},app:function app(a){var b={},c=!1,d=a.view,e=a.node,h=e&&y(e),i=a.subscriptions,j=[],l=function(a){q(this.actions[a.type],a)},m=function(a){return b!==a&&(b=a,i&&(j=n(j,k([i(b)]),q)),d&&!c&&g(s,c=!0)),b},o=a.middleware,p=void 0===o?function(a){return a}:o,q=p(function(a,c){return"function"==typeof a?q(a(b,c)):f(a)?"function"==typeof a[0]||f(a[0])?q(a[0],"function"==typeof a[1]?a[1](c):a[1]):(k(a.slice(1)).map(function(a){a&&a[0](q,a[1])},m(a[0])),b):m(a)}),s=function(){c=!1,e=r(e.parentNode,e,h,h=u(d(b)),l)};q(a.init)}}}(),v=u.h,h=u.app,i=function(a){return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},d=1<arguments.length?arguments[1]:void 0,e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===t(a)})};if(e(d,"undefined")){if(b.props)return v(a,{},[b]);e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})}return v(a,b,d)}},w=i("a"),a=i("b"),b=i("circle"),x=i("div"),y=i("footer"),z=i("g"),g=i("h1"),A=i("h2"),B=i("h3"),C=i("h4"),D=i("header"),E=i("img"),F=i("input"),G=i("li"),H=i("link"),I=i("main"),J=i("meta"),K=i("nav"),L=i("p"),p=i("path"),M=i("script"),N=i("span"),O=i("svg"),P=i("title"),Q=i("ul"),R=i("view"),S={branding:["@magic","-modules"],description:"@magic-modules. building blocks for your @magic app.",footer:{one:{before:["modules","created by","Wizards & Witches"],title:"@magic"},three:{menu:[{text:"npm",to:"https://www.npmjs.com/org/magic-modules"},{text:"github",to:"https://github.com/magic-modules/"}],title:"social"},two:{menu:[{text:"@magic",to:"https://github.com/magic/"},{text:"@grundstein",to:"https://github.com/grundstein/"},{text:"@webboot",to:"https://github.com/webboot/"}],title:"projects"}},hero:{description:"building blocks for your @magic app.",title:"modules"},menu:[{text:"about",to:"/"},{text:"modules",to:"/#gl-magic-modules"}],nospy:{show:!1},pageClass:{},pages:{"/":{},"/404/":{description:"404 - not found.",title:"404 - not found"}},root:"/",seo:{about:"magic is a jamstack generator. @magic-modules are components including html, css, actions and other functionality.",author:{"@type":"person",image:"https:/jaeh.at/img/jascha.ehrenreich.jpg",jobTitle:"Technomancer",name:"Jascha Ehrenreich",url:"https://jaeh.at"},image:"https://magic-modules.github.io/magic-modules-preview.jpg",name:"@magic-modules",url:"https://magic-modules.github.io/"},theme:"dark",title:"@magic-modules",url:"/"},T={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}}},U=function(){return x({class:"AboutMagic"},[A([fa({text:"@magic",to:"https://magic.github.io"})," is"]),B(["a ",fa({text:"jamstack",to:"https://jamstack.org/"})," generator:"]),L([a("j"),"avascript, ",a("a"),"pis and (static) ",a("m"),"arkup."]),B("minimal:"),L("less than 15kb of html + css + javascript boilerplate."),B("modular:"),L("separation of concerns makes customization easy."),B("\"jsomorphic\":"),L("html loads first and provides basic functionality, javascript enhances where needed."),B("full stack:"),L(["if needed, @magic generates server side apis, and ",fa({text:"@grundstein",to:"https://grundstein.it"})," will soon take care of hosting said app bundles"]),L(fa({to:"https://magic.github.io"},"Do you want to know more?")),_("@magic/core")])},V=function(a){var b,c=a.blog,d=a.link,e=a.month,f=a.url,g=a.year,h=Object.entries(c[g][e]),i=[e];return d?b="".concat(d).concat(e,"/"):i.push(" - ",g),[B(b?fa({to:b},i):i),h.map(function(c){var d=m(c,2),e=d[0],f=d[1];return f.map(function(c){return W(k(k(k({},a),c.state),{},{name:c.name,link:b,day:e}))})})]},W=function(a){return x([C([a.day,"-",a.month,"-",a.year," - ",fa({to:a.name},a.title)]),L(a.description)])},X=function(a){var b,c=a.link,d=a.year,e=a.blog,f=a.url;return c?b="".concat(c).concat(d,"/"):f.endsWith("".concat(d,"/"))&&(b=f),x([A(c?fa({to:b},d):d),Object.entries(e[d]).map(function(c){var d=m(c,2),e=d[0],f=d[1];return V(k(k({},a),{},{month:e,days:f,link:b}))})])},Y=function(){return x({class:"Credits"},["made with a few bits of ",fa({to:"https://magic.github.io/",target:"_blank",rel:"noopener"},"magic")])},Z=function(a,b){var c=a.footer,d=void 0===c?{}:c,e=a.url,f=d.one,g=d.two,h=d.three;return y({class:"Footer"},[x({class:"Container"},[(f||g||h)&&x({class:"Menus"},[f&&$(k(k({class:"Info"},f),{},{url:e})),g&&$(k(k({},g),{},{url:e})),h&&$(k(k({},h),{},{url:e}))]),Y(),b])])},$=function(a){var b=a.title,c=a.before,d=a.menu,f=a.after,g=a.url,h=e(a,["title","before","menu","after","url"]);return h["class"]?!h["class"].includes("FooterSection")&&(h["class"]="FooterSection ".concat(h["class"]).trim()):h["class"]="FooterSection",x(h,[b&&A(b),c&&c.map(function(b){return L(b)}),d&&ha({menu:d,url:g}),f&&f.map(function(b){return L(b)})])},_=function(a){if("string"==typeof a)a={project:a};else if(!a.project)return;var b=a,c=b.branch,d=void 0===c?"master":c,e=b.host,f=void 0===e?"github":e,g=a,h=g.project,i=void 0!==h&&h,j="",k=i;i.startsWith("@")?(j="@",i=i.substr(1)):k=i.split("/")[1];var l=[["npm",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return a&&{to:"https://www.npmjs.com/package/".concat(k),src:"https://img.shields.io/npm/v/".concat(j).concat(a,"?color=blue")}}],["node",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return a&&{src:"https://img.shields.io/node/v/".concat(j).concat(a,"?color=blue")}}],["license",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return a&&{src:"https://img.shields.io/npm/l/".concat(j).concat(a,"?color=blue")}}],["travis",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://img.shields.io/travis/com/".concat(a,"/").concat(d)}}],["appveyor",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;if(a){var b=a.split("/"),c=m(b,2),e=c[0],f=c[1];return e=e.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(e,"/").concat(f,"/branch/").concat(d),src:"https://img.shields.io/appveyor/ci/".concat(e,"/").concat(f,"/").concat(d,".svg")}}}],["coveralls",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return{to:"https://coveralls.io/".concat(f,"/").concat(a),src:"https://img.shields.io/coveralls/".concat(f,"/").concat(a,"/").concat(d,".svg")}}],["snyk",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return a&&{to:"https://snyk.io/test/".concat(f,"/").concat(a),src:"https://img.shields.io/snyk/vulnerabilities/github/".concat(a,".svg")}}]].map(function(b){var c=m(b,2),d=c[0],e=c[1];return e(a[d])});return l.length?Q({class:"GitBadges"},l.map(function(a){var b=a.to,c=a.src;if(c){var d=da({src:c,height:"23"});return b?G(fa({to:b},d)):G(d)}})):void 0},aa=function(a){var b=a.badges,c=a.items,d=void 0===c?[]:c,e=a.org,f=a.host,g=void 0===f?"github":f,h=a.header,i=a.desc,j=void 0===i?a.description:i,l={};return a["class"]?!a["class"].includes("GitList")&&(l["class"]="GitList ".concat(a["class"])):l["class"]="GitList",l.id=a.id?a.id:e,l.id.startsWith("gl")||(l.id="gl-".concat(l.id)),x(l,[h&&A(h),j&&x({class:"description"},j),Q({id:"".concat(l.id,"-ul")},[d.map(function(a){return aa.Item(k({badges:void 0===b||b,org:e,id:"".concat(l.id,"-li"),host:g},a))})])])};aa.Item=function(a){var b=a.name,c=a.org,d=a.id,e=a.host,f=a.badges,g=a.desc||a.description;return G({id:"".concat(d,"-").concat(b),class:"GitListItem"},[B([fa({to:"https://".concat(c,".").concat(e,".io/").concat(b)},"@".concat(c,"/").concat(b," demo"))]),g&&L(g),L(fa({to:"https://".concat(e,".com/").concat(c,"/").concat(b)},"git repository")),(!(void 0!==f)||f)&&_("@".concat(c,"/").concat(b))])};var ba=function(a){var b=a.menu,d=a.url,e=a.hash,f=a.branding,g=void 0===f?[]:f;Array.isArray(g)||(g=[g]);var h=g,i=c(h),j=i[0],k=i.slice(1);return D({class:"Header"},x([ga(),j&&fa({to:"/",class:"branding"},[N(j),k]),b&&ha({url:d,hash:e,menu:b})]))},ca=function(a){var b=a.state,c=b.hero,d=b.url,e=b.hash,f=b.root,h=Array.isArray(c.title)?c.title:[c.title],i=c.content,j=c.menu;return i&&!Array.isArray(i)&&(i=[i]),x({id:"hero",class:"Hero"},[x({class:"LogoWrapper"},[ga(f),c.title&&g([N(h[0]),h[1]]),c.description&&L(c.description)]),i&&x({class:"content"},i.map(function(b){return L(b)})),j&&ha({url:d,hash:e,menu:j})])},da=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="",a.loading=a.loading||"lazy")),E(a)},ea=function(){0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return O({class:"LightSwitch icon",onclick:na.changeTheme,height:25,width:25,viewBox:"0 0 352 460"},[p({d:"M149 48C96 48 48 95 47 143c-1 13 19 17 20 0-1-35 48-75 83-75 15 0 12-22-1-20z"}),p({d:"M176 0C74 0 0 83 0 176c9 91 84 118 100 204h20c-16-92-97-138-100-204C22 70 105 21 176 20zM95 400c2 68 20 48 40 60h82c20-12 38 8 40-60z"}),p({d:"M175 0c102 0 177 83 177 176-9 91-86 118-102 204h-20c16-92 99-138 102-204-2-106-86-155-157-156z"})])},fa=function(a,b){var c=a.to,d=a.action,f=void 0===d?na.go:d,g=a.text,h=e(a,["to","action","text"]),i=h.href,j=h.nofollow,k=h.noreferrer,l=e(h,["href","nofollow","noreferrer"]);c=c||i||"",l.href=c,g&&b?g=[g,b]:!g&&(b?g=b:g=c);var m="/"===c[0]||"#"===c[0];return m?l.onclick=[f,ma.preventDefault]:(l.target="_blank",l.rel="noopener",j&&(l.rel+=" nofollow"),k&&(l.rel+=" noreferrer")),w(l,g)},ga=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"/";return fa({to:a,class:"Logo"},[O({viewBox:"0 0 512 444"},[p({d:"M512 444L256 0 0 444z",fill:"#663695"}),b({cx:"256",cy:"294",r:"130",fill:"#fff"}),p({d:"M256 81v53m184 270l-43-29M72 404l43-29",class:"stroke round white l"}),p({d:"M234 346l-2-84 74-33 M311 346l1-83-76-35 M232 262l40 19 74-35m-74 35v88m73-84l-74 41-63-36 M186 260l1 39zm-33-17l33 17 38-14",class:"stroke sm"}),p({d:"M225 271l7-3m-36 28l1 27 75 47 72-45 2-79-74-33-36 15 1 32 M154 281l33 19 38-17-1-37-36-16-37 13z",class:"stroke md"})])])},ha=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a.collapse,c=a.menu,d=a.hash,e=a["class"],f=void 0===e?"":e,g=a.url;return f.includes("Menu")||(f="Menu ".concat(f).trim()),d&&!g.endsWith(d)&&(g+="#".concat(d)),K({className:f},Q(c.map(function(a){return ia(k(k({},a),{},{url:g,collapse:void 0===b||b}))})))},ia=function(a){var b=a.collapse,c=a.items,d=void 0===c?[]:c,f=a.text,g=a.url,h=e(a,["collapse","items","text","url"]),i={class:{}},j=h.to;j===g&&(i["class"].active=!0);var l=[],m=!b||g.includes(j);return m&&d.length&&(l=Q(d.map(function(a){return ia(k({url:g,collapse:b},a))}))),G(i,[j?fa(h,f):N(h,f),l])},ja=function(){return aa({class:"ModuleList",org:"magic-modules",header:[fa({to:"https://magic-modules.github.io/"},"@magic-modules")],description:["modules are the building blocks of ",fa({to:"https://magic.github.io/core/"},"@magic"),". modules can be used to add both client and server functionality to your @magic app."],items:[{name:"about-magic",description:"AboutMagic shows some information about @magic."},{name:"accordion",description:"Accordion shows a list of items that horizontally open/close."},{name:"cite",description:"Makes Citations easy. Adds Quote around quotes and a minimally styled paragraph around the author."},{name:"example-list",description:"ExampleList shows a list of @magic-examples pages."},{name:"gdpr",description:"Gdpr compliant popup that allows users to allow or deny cookies."},{name:"git-badges",description:"GitBadges shows a list of github repository status badges."},{name:"git-list",description:"show a list of git repositories like the one you are looking at."},{name:"hero",description:"Hero modules are full screen top of page content."},{name:"language-switch",description:"LanguageSwitch provides simple multilanguage support for magic."},{name:"library-list",description:"LibraryList shows a list of all @magic-libraries libraries."},{name:"light-box",description:"images that show a bigger view of themselves when clicked."},{name:"light-switch",description:"dark/light theme color switch button."},{name:"messages",description:"Messages shows popup messages."},{name:"module-list",description:"ModuleList shows the list of @magic-modules you are looking at."},{name:"no-spy",description:"Minimal interface for \"we do not spy\" modal."},{name:"pre",description:"Pre allows you to display javascript code with syntax highlighting."},{name:"quote",description:"adds \u201C\u201D around the quote and sets font-style: italic."},{name:"sound-cloud",description:"embed soundcloud track, playlist and user widgets"},{name:"theme-list",description:"ThemeList shows a list of all @magic-themes."},{name:"theme-vars",description:"ThemeVars shows a preview of all colors used in a @magic-themes."},{name:"video-embed",description:"VideoEmbed embeds videos from any video hoster."},{name:"xkcd",description:"Xkcd embeds xkcd comics."}]})},ka=function(a){var c=a.nospy,d=void 0===c?{}:c,e=a.cookies,f=void 0===e?[]:e,g=d.show,h=d.title,i=void 0===h?"Privacy Notice":h,j=d.content,k=void 0===j?"This app neither saves, collects, nor shares any data about you.":j,l=d.buttonText,m=void 0===l?"Awesome!":l;return g?x({class:"NoSpy"},[x({class:"Container"},[i&&B(i),k&&L(k),F({onclick:na.nospy.toggle,value:m,type:"button"})])]):x({class:"NoSpy"},O({class:"icon",onclick:na.nospy.toggle,width:"25",height:"25",viewBox:"0 0 512 512"},[z([p({d:"\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"}),b({cx:"192",cy:"128",r:"32"}),b({cx:"128",cy:"256",r:"32"}),b({cx:"288",cy:"384",r:"32"}),b({cx:"272",cy:"272",r:"16"}),b({cx:"400",cy:"336",r:"16"}),b({cx:"176",cy:"368",r:"16"})])]))},la=function(a,b){var c=a.page,d=a.state,e={id:"Magic",class:d.pageClass};return I(e,x({class:{Wrapper:!0}},[ba(d),x({class:"Page",id:"page"},c(d)),Z(d),b]))},ma={preventDefault:function preventDefault(a){return a.preventDefault(),a}},na={changeTheme:function changeTheme(a){return k(k({},a),{},{pageClass:k(k({},a.pageClass),{},{light:"dark"===a.theme}),theme:"dark"===a.theme?"light":"dark"})},go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),d=c.split("#"),e=m(d,2),f=e[0],g=e[1],h=void 0===g?"":g;if(f===a.url&&h===a.hash)return h&&(window.location.hash=h),a;var i=a.pages&&a.pages[f]&&a.pages[f].title;i&&(document.title=a.title=i),f===a.url?window.location.hash=h:!h&&window.scrollTo({top:0});var j=window,l=j.scrollY;return window.history.pushState({url:f,hash:h,scrollY:l},a.title,c),k(k({},a),{},{url:f,hash:h,prev:a.url})},nospy:{toggle:function toggle(a){return a.nospy.show=!a.nospy.show,k({},a)}},pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;e=e.substring(1);var f=0;return b.state&&(d=b.state.url,e=b.state.hash,f=b.state.scrollY||0),e?window.location.hash=e:window.scroll({top:f}),k(k({},a),{},{url:d,hash:e})}},oa={"/":function _(a){return[ca({state:a}),x([U(),ja()])]},"/404/":function _(){return x("404 - not found.")}};h({init:k(k({},S),{},{url:window.location.pathname,hash:window.location.hash.substr(1)}),subscriptions:function subscriptions(){return[[T.listenPopState,na.pop]]},view:function(a){var b=oa[a.url]?a.url:"/404/",c=oa[b],d=a.pages&&a.pages[b];return d&&Object.keys(d).forEach(function(b){a[b]=d[b]}),a.url=b,la({page:c,state:a},[ea(a),ka(a)])},node:document.getElementById("Magic")});