!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n(2);var i=n(35),r=o(i),a=n(89),s=n(94),u=o(s),c=n(152),l=o(c),d=n(155),f=o(d),p=n(183),h=o(p),v=n(184),y=o(v),m=n(190),A=o(m),g=n(192),w=o(g),b=n(195),k=o(b),x=n(196),L=o(x),E=n(199),S=o(E),T=n(201),_=o(T),M=n(202),P=o(M),C=n(203),I=o(C),O=n(209),j=o(O),R=n(210),N=o(R),F=n(211),V=o(F),B=n(212),q=o(B),H=n(213),D=o(H),W=n(214),z=o(W),G=n(215),Y=o(G);r.default.register("FolderToggle",l.default),r.default.register("GalleryLayout",f.default),r.default.register("GalleryVideoHandler",h.default),r.default.register("HeaderOverflow",y.default),r.default.register("HeaderScroll",A.default),r.default.register("IndexGallery",w.default),r.default.register("IndexNavOverflow",k.default),r.default.register("IndexNavScroll",L.default),r.default.register("IndexSetup",S.default),r.default.register("IndexPositioning",_.default),r.default.register("MainContentPositioning",P.default),r.default.register("MercuryLoader",I.default),r.default.register("NavToggle",j.default),r.default.register("OverlayNavOverflow",N.default),r.default.register("PageBanners",V.default),r.default.register("SetActiveNavLink",q.default),r.default.register("SocialIconFadein",D.default),r.default.register("TitleCardHandler",z.default),r.default.register("UserAccountsSetup",Y.default),r.default.register("VideoBackground",function(e){return(0,u.default)(e,function(e){var t=e.handleTweak;a.Tweak.watch(["tweak-page-banner-image-height","tweak-show-page-banner-image"],t)})})},function(e,t,n){n(3),e.exports=n(6).Array.find},function(e,t,n){"use strict";var o=n(4),i=n(22)(5),r="find",a=!0;r in[]&&Array(1)[r](function(){a=!1}),o(o.P+o.F*a,"Array",{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),n(34)(r)},function(e,t,n){var o=n(5),i=n(6),r=n(7),a=n(17),s=n(20),u="prototype",c=function(e,t,n){var l,d,f,p,h=e&c.F,v=e&c.G,y=e&c.S,m=e&c.P,A=e&c.B,g=v?o:y?o[t]||(o[t]={}):(o[t]||{})[u],w=v?i:i[t]||(i[t]={}),b=w[u]||(w[u]={});v&&(n=t);for(l in n)d=!h&&g&&void 0!==g[l],f=(d?g:n)[l],p=A&&d?s(f,o):m&&"function"==typeof f?s(Function.call,f):f,g&&a(g,l,f,e&c.U),w[l]!=f&&r(w,l,p),m&&b[l]!=f&&(b[l]=f)};o.core=i,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t){var n=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(e,t,n){var o=n(8),i=n(16);e.exports=n(12)?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var o=n(9),i=n(11),r=n(15),a=Object.defineProperty;t.f=n(12)?Object.defineProperty:function(e,t,n){if(o(e),t=r(t,!0),o(n),i)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var o=n(10);e.exports=function(e){if(!o(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){e.exports=!n(12)&&!n(13)(function(){return 7!=Object.defineProperty(n(14)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){e.exports=!n(13)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){var o=n(10),i=n(5).document,r=o(i)&&o(i.createElement);e.exports=function(e){return r?i.createElement(e):{}}},function(e,t,n){var o=n(10);e.exports=function(e,t){if(!o(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!o(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!o(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!o(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var o=n(5),i=n(7),r=n(18),a=n(19)("src"),s="toString",u=Function[s],c=(""+u).split(s);n(6).inspectSource=function(e){return u.call(e)},(e.exports=function(e,t,n,s){var u="function"==typeof n;u&&(r(n,"name")||i(n,"name",t)),e[t]!==n&&(u&&(r(n,a)||i(n,a,e[t]?""+e[t]:c.join(String(t)))),e===o?e[t]=n:s?e[t]?e[t]=n:i(e,t,n):(delete e[t],i(e,t,n)))})(Function.prototype,s,function(){return"function"==typeof this&&this[a]||u.call(this)})},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t){var n=0,o=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+o).toString(36))}},function(e,t,n){var o=n(21);e.exports=function(e,t,n){if(o(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,o){return e.call(t,n,o)};case 3:return function(n,o,i){return e.call(t,n,o,i)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){var o=n(20),i=n(23),r=n(25),a=n(27),s=n(29);e.exports=function(e,t){var n=1==e,u=2==e,c=3==e,l=4==e,d=6==e,f=5==e||d,p=t||s;return function(t,s,h){for(var v,y,m=r(t),A=i(m),g=o(s,h,3),w=a(A.length),b=0,k=n?p(t,w):u?p(t,0):void 0;w>b;b++)if((f||b in A)&&(v=A[b],y=g(v,b,m),e))if(n)k[b]=y;else if(y)switch(e){case 3:return!0;case 5:return v;case 6:return b;case 2:k.push(v)}else if(l)return!1;return d?-1:c||l?l:k}}},function(e,t,n){var o=n(24);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==o(e)?e.split(""):Object(e)}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var o=n(26);e.exports=function(e){return Object(o(e))}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,n){var o=n(28),i=Math.min;e.exports=function(e){return e>0?i(o(e),9007199254740991):0}},function(e,t){var n=Math.ceil,o=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?o:n)(e)}},function(e,t,n){var o=n(30);e.exports=function(e,t){return new(o(e))(t)}},function(e,t,n){var o=n(10),i=n(31),r=n(32)("species");e.exports=function(e){var t;return i(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!i(t.prototype)||(t=void 0),o(t)&&(t=t[r],null===t&&(t=void 0))),void 0===t?Array:t}},function(e,t,n){var o=n(24);e.exports=Array.isArray||function(e){return"Array"==o(e)}},function(e,t,n){var o=n(33)("wks"),i=n(19),r=n(5).Symbol,a="function"==typeof r,s=e.exports=function(e){return o[e]||(o[e]=a&&r[e]||(a?r:i)("Symbol."+e))};s.store=o},function(e,t,n){var o=n(5),i="__core-js_shared__",r=o[i]||(o[i]={});e.exports=function(e){return r[e]||(r[e]={})}},function(e,t,n){var o=n(32)("unscopables"),i=Array.prototype;void 0==i[o]&&n(7)(i,o,{}),e.exports=function(e){i[o][e]=!0}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){return e.fn&&e.element?e.fn(e.element):null}function r(e,t){return!!(e.element&&t.element&&e.fn&&t.fn)&&(e.element===t.element&&e.fn===t.fn)}function a(e,t){l[e]=t}function s(){var e=(0,c.default)(document.querySelectorAll("[data-controller]")),t=[];e.forEach(function(e){var n=e.getAttribute("data-controller").split(",");n.forEach(function(n){n=n.trim();var o=l[n];o&&t.push({namespace:n,element:e,fn:o})})}),d=d.filter(function(e){var n=t.some(function(t){return r(e,t)});return n?(e.methods&&e.methods.sync&&e.methods.sync.apply(e.element,null),t=t.filter(function(t){return!r(e,t)})):e.methods&&e.methods.destroy&&e.methods.destroy.apply(e.element,null),n}),t.forEach(function(e){e.methods=i(e),d.push(e);var t=[];if(e.element.hasAttribute("data-controllers-bound")){var n=e.element.getAttribute("data-controllers-bound").split(", ");t=t.concat(n)}t.push(e.namespace),e.element.setAttribute("data-controllers-bound",t.join(", "))})}Object.defineProperty(t,"__esModule",{value:!0});var u=n(36),c=o(u),l={},d=[];document.addEventListener("DOMContentLoaded",s),t.default={refresh:s,register:a},e.exports=t.default},function(e,t,n){e.exports={default:n(37),__esModule:!0}},function(e,t,n){n(38),n(82),e.exports=n(46).Array.from},function(e,t,n){"use strict";var o=n(39)(!0);n(42)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=o(t,n),this._i+=e.length,{value:e,done:!1})})},function(e,t,n){var o=n(40),i=n(41);e.exports=function(e){return function(t,n){var r,a,s=String(i(t)),u=o(n),c=s.length;return u<0||u>=c?e?"":void 0:(r=s.charCodeAt(u),r<55296||r>56319||u+1===c||(a=s.charCodeAt(u+1))<56320||a>57343?e?s.charAt(u):r:e?s.slice(u,u+2):(r-55296<<10)+(a-56320)+65536)}}},function(e,t){var n=Math.ceil,o=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?o:n)(e)}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,n){"use strict";var o=n(43),i=n(44),r=n(59),a=n(49),s=n(60),u=n(61),c=n(62),l=n(78),d=n(80),f=n(79)("iterator"),p=!([].keys&&"next"in[].keys()),h="@@iterator",v="keys",y="values",m=function(){return this};e.exports=function(e,t,n,A,g,w,b){c(n,t,A);var k,x,L,E=function(e){if(!p&&e in M)return M[e];switch(e){case v:return function(){return new n(this,e)};case y:return function(){return new n(this,e)}}return function(){return new n(this,e)}},S=t+" Iterator",T=g==y,_=!1,M=e.prototype,P=M[f]||M[h]||g&&M[g],C=P||E(g),I=g?T?E("entries"):C:void 0,O="Array"==t?M.entries||P:P;if(O&&(L=d(O.call(new e)),L!==Object.prototype&&(l(L,S,!0),o||s(L,f)||a(L,f,m))),T&&P&&P.name!==y&&(_=!0,C=function(){return P.call(this)}),o&&!b||!p&&!_&&M[f]||a(M,f,C),u[t]=C,u[S]=m,g)if(k={values:T?C:E(y),keys:w?C:E(v),entries:I},b)for(x in k)x in M||r(M,x,k[x]);else i(i.P+i.F*(p||_),t,k);return k}},function(e,t){e.exports=!0},function(e,t,n){var o=n(45),i=n(46),r=n(47),a=n(49),s="prototype",u=function(e,t,n){var c,l,d,f=e&u.F,p=e&u.G,h=e&u.S,v=e&u.P,y=e&u.B,m=e&u.W,A=p?i:i[t]||(i[t]={}),g=A[s],w=p?o:h?o[t]:(o[t]||{})[s];p&&(n=t);for(c in n)l=!f&&w&&void 0!==w[c],l&&c in A||(d=l?w[c]:n[c],A[c]=p&&"function"!=typeof w[c]?n[c]:y&&l?r(d,o):m&&w[c]==d?function(e){var t=function(t,n,o){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,o)}return e.apply(this,arguments)};return t[s]=e[s],t}(d):v&&"function"==typeof d?r(Function.call,d):d,v&&((A.virtual||(A.virtual={}))[c]=d,e&u.R&&g&&!g[c]&&a(g,c,d)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,e.exports=u},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t){var n=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(e,t,n){var o=n(48);e.exports=function(e,t,n){if(o(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,o){return e.call(t,n,o)};case 3:return function(n,o,i){return e.call(t,n,o,i)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){var o=n(50),i=n(58);e.exports=n(54)?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var o=n(51),i=n(53),r=n(57),a=Object.defineProperty;t.f=n(54)?Object.defineProperty:function(e,t,n){if(o(e),t=r(t,!0),o(n),i)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var o=n(52);e.exports=function(e){if(!o(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){e.exports=!n(54)&&!n(55)(function(){return 7!=Object.defineProperty(n(56)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){e.exports=!n(55)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){var o=n(52),i=n(45).document,r=o(i)&&o(i.createElement);e.exports=function(e){return r?i.createElement(e):{}}},function(e,t,n){var o=n(52);e.exports=function(e,t){if(!o(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!o(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!o(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!o(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){e.exports=n(49)},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t){e.exports={}},function(e,t,n){"use strict";var o=n(63),i=n(58),r=n(78),a={};n(49)(a,n(79)("iterator"),function(){return this}),e.exports=function(e,t,n){e.prototype=o(a,{next:i(1,n)}),r(e,t+" Iterator")}},function(e,t,n){var o=n(51),i=n(64),r=n(76),a=n(73)("IE_PROTO"),s=function(){},u="prototype",c=function(){var e,t=n(56)("iframe"),o=r.length,i="<",a=">";for(t.style.display="none",n(77).appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write(i+"script"+a+"document.F=Object"+i+"/script"+a),e.close(),c=e.F;o--;)delete c[u][r[o]];return c()};e.exports=Object.create||function(e,t){var n;return null!==e?(s[u]=o(e),n=new s,s[u]=null,n[a]=e):n=c(),void 0===t?n:i(n,t)}},function(e,t,n){var o=n(50),i=n(51),r=n(65);e.exports=n(54)?Object.defineProperties:function(e,t){i(e);for(var n,a=r(t),s=a.length,u=0;s>u;)o.f(e,n=a[u++],t[n]);return e}},function(e,t,n){var o=n(66),i=n(76);e.exports=Object.keys||function(e){return o(e,i)}},function(e,t,n){var o=n(60),i=n(67),r=n(70)(!1),a=n(73)("IE_PROTO");e.exports=function(e,t){var n,s=i(e),u=0,c=[];for(n in s)n!=a&&o(s,n)&&c.push(n);for(;t.length>u;)o(s,n=t[u++])&&(~r(c,n)||c.push(n));return c}},function(e,t,n){var o=n(68),i=n(41);e.exports=function(e){return o(i(e))}},function(e,t,n){var o=n(69);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==o(e)?e.split(""):Object(e)}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var o=n(67),i=n(71),r=n(72);e.exports=function(e){return function(t,n,a){var s,u=o(t),c=i(u.length),l=r(a,c);if(e&&n!=n){for(;c>l;)if(s=u[l++],s!=s)return!0}else for(;c>l;l++)if((e||l in u)&&u[l]===n)return e||l||0;return!e&&-1}}},function(e,t,n){var o=n(40),i=Math.min;e.exports=function(e){return e>0?i(o(e),9007199254740991):0}},function(e,t,n){var o=n(40),i=Math.max,r=Math.min;e.exports=function(e,t){return e=o(e),e<0?i(e+t,0):r(e,t)}},function(e,t,n){var o=n(74)("keys"),i=n(75);e.exports=function(e){return o[e]||(o[e]=i(e))}},function(e,t,n){var o=n(45),i="__core-js_shared__",r=o[i]||(o[i]={});e.exports=function(e){return r[e]||(r[e]={})}},function(e,t){var n=0,o=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+o).toString(36))}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,n){e.exports=n(45).document&&document.documentElement},function(e,t,n){var o=n(50).f,i=n(60),r=n(79)("toStringTag");e.exports=function(e,t,n){e&&!i(e=n?e:e.prototype,r)&&o(e,r,{configurable:!0,value:t})}},function(e,t,n){var o=n(74)("wks"),i=n(75),r=n(45).Symbol,a="function"==typeof r,s=e.exports=function(e){return o[e]||(o[e]=a&&r[e]||(a?r:i)("Symbol."+e))};s.store=o},function(e,t,n){var o=n(60),i=n(81),r=n(73)("IE_PROTO"),a=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=i(e),o(e,r)?e[r]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?a:null}},function(e,t,n){var o=n(41);e.exports=function(e){return Object(o(e))}},function(e,t,n){"use strict";var o=n(47),i=n(44),r=n(81),a=n(83),s=n(84),u=n(71),c=n(85),l=n(86);i(i.S+i.F*!n(88)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,i,d,f=r(e),p="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,y=void 0!==v,m=0,A=l(f);if(y&&(v=o(v,h>2?arguments[2]:void 0,2)),void 0==A||p==Array&&s(A))for(t=u(f.length),n=new p(t);t>m;m++)c(n,m,y?v(f[m],m):f[m]);else for(d=A.call(f),n=new p;!(i=d.next()).done;m++)c(n,m,y?a(d,v,[i.value,m],!0):i.value);return n.length=m,n}})},function(e,t,n){var o=n(51);e.exports=function(e,t,n,i){try{return i?t(o(n)[0],n[1]):t(n)}catch(t){var r=e.return;throw void 0!==r&&o(r.call(e)),t}}},function(e,t,n){var o=n(61),i=n(79)("iterator"),r=Array.prototype;e.exports=function(e){return void 0!==e&&(o.Array===e||r[i]===e)}},function(e,t,n){"use strict";var o=n(50),i=n(58);e.exports=function(e,t,n){t in e?o.f(e,t,i(0,n)):e[t]=n}},function(e,t,n){var o=n(87),i=n(79)("iterator"),r=n(61);e.exports=n(46).getIteratorMethod=function(e){if(void 0!=e)return e[i]||e["@@iterator"]||r[o(e)]}},function(e,t,n){var o=n(69),i=n(79)("toStringTag"),r="Arguments"==o(function(){return arguments}()),a=function(e,t){try{return e[t]}catch(e){}};e.exports=function(e){var t,n,s;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=a(t=Object(e),i))?n:r?o(t):"Object"==(s=o(t))&&"function"==typeof t.callee?"Arguments":s}},function(e,t,n){var o=n(79)("iterator"),i=!1;try{var r=[7][o]();r.return=function(){i=!0},Array.from(r,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!i)return!1;var n=!1;try{var r=[7],a=r[o]();a.next=function(){return{done:n=!0}},r[o]=function(){return a},e(r)}catch(e){}return n}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(90),r=o(i),a=n(91),s=o(a),u=n(92),c=o(u),l=n(93),d=o(l),f={ImageLoader:r.default,Lifecycle:s.default,Tweak:c.default,UserAccounts:d.default};t.default=f,e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});/**
	 * @license
	 * Copyright 2016 Squarespace, INC.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *    http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
var n={load:function(e,t){return window.ImageLoader.load(e,t)}};t.default=n,e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});/**
	 * @license
	 * Copyright 2016 Squarespace, INC.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *    http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
var n={init:function(){window.Squarespace.AFTER_BODY_LOADED=!1,window.Squarespace.afterBodyLoad()},destroy:function(){window.Squarespace.globalDestroy(Y)}};t.default=n,e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});/**
	 * @license
	 * Copyright 2016 Squarespace, INC.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *    http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
var n=Static.SQUARESPACE_CONTEXT.authenticatedAccount,o={all:{callbacks:[]}},i={getValue:function(e){return e&&"string"==typeof e?window.Static.SQUARESPACE_CONTEXT.tweakJSON[e]||window.Static.SQUARESPACE_CONTEXT.tweakJSON[e.replace("@","").replace(".","")]:(console.error("squarespace-core: Invalid tweak name "+e),null)},watch:function(){var e=arguments;if(n){if(0===arguments.length)return void console.error("squarespace-core: Tweak.watch must be called with at least one parameter");if(1===arguments.length)return void("function"==typeof arguments[0]&&o.all.callbacks.push(arguments[0]));if("string"==typeof arguments[0]&&"function"==typeof arguments[1]){var t=arguments[0];o[t]||(o[t]={callbacks:[]}),o[t].callbacks.push(arguments[1])}else arguments[0].constructor===Array&&"function"==typeof arguments[1]&&arguments[0].forEach(function(t){o[t]||(o[t]={callbacks:[]}),o[t].callbacks.push(e[1])})}}};n&&window.Y&&window.Y.Global&&window.Y.Global.on("tweak:change",function(e){var t=e.getName(),n={name:t,value:e.config&&e.config.value||e.value};o[t]&&o[t].callbacks.forEach(function(e){try{e(n)}catch(e){console.error(e)}}),o.all.callbacks.length>0&&o.all.callbacks.forEach(function(e){try{e(n)}catch(e){console.error(e)}})}),t.default=i,e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});/**
	 * @license
	 * Copyright 2016 Squarespace, INC.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *    http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
var n="UserAccounts API not available",o=window.UserAccountApi,i=function(){console.warn(n)},r=o?o.isUserAuthenticated:i,a=o?o.openAccountScreen:i;t.default={isUserAuthenticated:r,openAccountScreen:a},e.exports=t.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=e.querySelector(".sqs-video-background"),o=(0,s.default)(n),i=new r.VideoBackground(o),a=function(){i.scaleVideo()},u=function(){i.destroy(),i=new r.VideoBackground(o)};return"function"==typeof t&&t({handleResize:a,handleTweak:u}),{destroy:function(){i.destroy()}}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(95),a=n(151),s=o(a);t.default=i,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.videoAutoplayTest=t.VideoFilterPropertyValues=t.VideoBackground=void 0,n(96);var o=n(97);t.VideoBackground=o.VideoBackground,t.VideoFilterPropertyValues=o.VideoFilterPropertyValues,t.videoAutoplayTest=o.videoAutoplayTest},function(e,t){!function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}return"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,void(window.CustomEvent=e))}()},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.videoAutoplayTest=t.VideoFilterPropertyValues=t.VideoBackground=void 0;var i=n(98),r=o(i),a=n(150),s=n(137),u=o(s);t.VideoBackground=r.default,t.VideoFilterPropertyValues=a.filterProperties,t.videoAutoplayTest=u.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(99),r=o(i),a=n(123),s=o(a),u=n(125),c=o(u),l=n(129),d=o(l),f=n(130),p=o(f),h=n(134),v=o(h),y=n(137),m=o(y),A=!1,g={container:".background-wrapper",url:"https://youtu.be/xkEmYQvJ_68",fitMode:"fill",maxLoops:"",scaleFactor:1,playbackSpeed:1,filter:1,filterStrength:50,timeCode:{start:0,end:null},useCustomFallbackImage:!0},w=n(150).filterOptions,b=n(150).filterProperties,k=/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]{11}).*/,x=/^.*(vimeo\.com\/)([0-9]{7,}(#t\=.*s)?)/,L=function(){function e(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;(0,d.default)(this,e),this.windowContext=o,this.events=[],this.initializeProperties(t),(0,m.default)().then(function(e){n.canAutoPlay=!0},function(e){n.canAutoPlay=!1,n.container.classList.add("mobile"),n.logger("added mobile")}).then(function(e){n.setDisplayEffects(),n.setFallbackImage(),n.callVideoAPI(),n.bindUI(),A===!0&&(window.vdbg=n,n.debugInterval=setInterval(function(){n.player.getCurrentTime&&n.logger((n.player.getCurrentTime()/n.player.getDuration()).toFixed(2))},900))})}return(0,p.default)(e,[{key:"destroy",value:function(){this.events&&this.events.forEach(function(e){return e.target.removeEventListener(e.type,e.handler,!0)}),this.events=null,this.player&&"function"==typeof this.player.destroy&&(this.player.iframe.classList.remove("ready"),clearTimeout(this.player.playTimeout),this.player.playTimeout=null,this.player.destroy(),this.player={}),"number"==typeof this.timer&&(clearTimeout(this.timer),this.timer=null),"number"==typeof this.debugInterval&&(clearInterval(this.debugInterval),this.debugInterval=null)}},{key:"bindUI",value:function(){var e=this,t="undefined"==typeof window.orientation?"resize":"orientationchange",n=function(){if("resize"===t&&e.player.iframe)e.windowContext.requestAnimationFrame(function(){e.scaleVideo()});else if(e.useCustomFallbackImage&&e.windowContext.ImageLoader){var n=e.container.querySelector("img[data-src]");e.windowContext.ImageLoader.load(n,{load:!0})}};this.events.push({target:this.windowContext,type:"resize",handler:n}),this.windowContext.addEventListener(t,n,!0)}},{key:"initializeProperties",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e=(0,c.default)({},g,e),1===e.container.nodeType)this.container=e.container;else{if("string"!=typeof e.container)return console.error("Container "+e.container+" not found"),!1;this.container=document.querySelector(e.container)}this.videoId=this.getVideoID(e.url),this.filter=e.filter,this.filterStrength=e.filterStrength,this.useCustomFallbackImage=e.useCustomFallbackImage,this.fitMode=e.fitMode,this.maxLoops=parseInt(e.maxLoops,10)||null,this.scaleFactor=e.scaleFactor,this.playbackSpeed=0===parseFloat(e.playbackSpeed)?1:parseFloat(e.playbackSpeed),this.timeCode={start:this._getStartTime(e.url)||e.timeCode.start,end:e.timeCode.end},this.player={},this.currentLoop=0}},{key:"getVideoID",value:function(e){e||(e=g.url);var t=e.match(k);return t&&t[2].length?(this.videoSource="youtube",t[2]):(t=e.match(x),t&&t[2].length?(this.videoSource="vimeo",t[2]):"")}},{key:"setFallbackImage",value:function(){if(this.useCustomFallbackImage){var e=this.container.querySelector("img[data-src]");if(!e)return;e.addEventListener("load",function(){e.classList.add("loaded")}),window.ImageLoader.load(e,{load:!0})}}},{key:"callVideoAPI",value:function(){"youtube"===this.videoSource&&this.initializeYouTubeAPI(),"vimeo"===this.videoSource&&this.initializeVimeoAPI()}},{key:"initializeYouTubeAPI",value:function(){var e=this;if(this.canAutoPlay){if(this.windowContext.document.documentElement.querySelector('script[src*="www.youtube.com/iframe_api"].loaded'))return void this.setVideoPlayer();this.player.ready=!1;var t=this.windowContext.document.createElement("script");t.src="https://www.youtube.com/iframe_api";var n=this.windowContext.document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n),t.addEventListener("load",function(t){t.currentTarget.classList.add("loaded"),e.setVideoPlayer()},!0)}}},{key:"initializeVimeoAPI",value:function(){this.canAutoPlay&&this.setVideoPlayer()}},{key:"setVideoPlayer",value:function(){if(this.player.ready)try{this.player.destroy(),this.player.ready=!1}catch(e){}"youtube"===this.videoSource?this.initializeYouTubePlayer():"vimeo"===this.videoSource&&this.initializeVimeoPlayer()}},{key:"initializeYouTubePlayer",value:function(){var e=this,t=null;if(1!==this.windowContext.YT.loaded)return setTimeout(this.setVideoPlayer.bind(this),100),!1;var n=function(t){var n=e.player;n.iframe=n.getIframe(),n.iframe.classList.add("background-video"),e.syncPlayer(),n.mute();var o=new CustomEvent("ready");e.container.dispatchEvent(o),document.body.classList.add("ready"),n.ready=!0,e.canAutoPlay&&(e.timeCode.start>=n.getDuration()&&(e.timeCode.start=0),n.seekTo(e.timeCode.start),n.playVideo(),e.logger("playing"))},o=function(n){var o=e.player,i=o.getIframe(),r=(o.getDuration()-e.timeCode.start)/e.playbackSpeed,a=function n(){if(null===t){if(o.getCurrentTime()+.1>=o.getDuration()){if(e.maxLoops&&(e.currentLoop++,e.currentLoop>e.maxLoops))return o.pauseVideo(),void(e.currentLoop=0);t=o.getCurrentTime(),o.pauseVideo(),o.seekTo(e.timeCode.start)}}else o.getCurrentTime()<t&&(t=null,o.playVideo());requestAnimationFrame(n.bind(e))};n.data===e.windowContext.YT.PlayerState.BUFFERING&&1!==o.getVideoLoadedFraction()&&(0===o.getCurrentTime()||o.getCurrentTime()>r- -.1)?(e.logger("BUFFERING"),e.autoPlayTestTimeout()):n.data===e.windowContext.YT.PlayerState.PLAYING?(null!==e.player.playTimeout&&(clearTimeout(e.player.playTimeout),e.player.playTimeout=null),e.canAutoPlay||(e.canAutoPlay=!0,e.container.classList.remove("mobile")),e.logger("PLAYING"),i.classList.add("ready"),requestAnimationFrame(a.bind(e))):n.data===e.windowContext.YT.PlayerState.ENDED&&o.playVideo()},i=this.container.querySelector("#player");i||(i=document.createElement("div"),i.id="player",this.container.appendChild(i)),this.player=new this.windowContext.YT.Player(i,{height:"315",width:"560",videoId:this.videoId,playerVars:{autohide:1,autoplay:0,controls:0,enablejsapi:1,iv_load_policy:3,loop:0,modestbranding:1,playsinline:1,rel:0,showinfo:0,wmode:"opaque"},events:{onReady:function(e){n(e)},onStateChange:function(e){o(e)}}})}},{key:"initializeVimeoPlayer",value:function(){var e=this,t=this.windowContext.document.createElement("iframe");t.id="vimeoplayer",t.classList.add("background-video");var n="&background=1";t.src="//player.vimeo.com/video/"+this.videoId+"?api=1"+n,this.container.appendChild(t),this.player.iframe=t;var o=this.player,i="*",r=function(t,n){var o={method:t};n&&(o.value=n);var r=(0,s.default)(o);e.windowContext.eval("(function(ctx){ ctx.player.iframe.contentWindow.postMessage("+r+", "+(0,s.default)(i)+"); })")(e)};o.postMessageManager=r;var a=function(){if(o.dimensions.width&&o.dimensions.height&&o.duration){e.syncPlayer();var t=new CustomEvent("ready");e.container.dispatchEvent(t),document.body.classList.add("ready"),r("setVolume","0"),r("setLoop","true"),r("seekTo",e.timeCode.start),r("play"),r("addEventListener","playProgress")}},u=function(){o.dimensions={},r("getDuration"),r("getVideoHeight"),r("getVideoWidth")},c=function(){clearTimeout(o.playTimeout),o.playTimeout=null,o.ready=!0,o.iframe.classList.add("ready"),e.canAutoPlay||(e.canAutoPlay=!0,e.container.classList.remove("mobile"))},l=function(t){if(!/^https?:\/\/player.vimeo.com/.test(t.origin))return!1;i=t.origin;var n=t.data;switch("string"==typeof n&&(n=JSON.parse(n)),e.logger(n),n.event){case"ready":u();break;case"playProgress":case"timeupdate":r("setVolume","0"),null!==o.playTimeout&&c(),n.data.percent>=.98&&e.timeCode.start>0&&r("seekTo",e.timeCode.start)}switch(n.method){case"getVideoHeight":o.dimensions.height=n.value,a();break;case"getVideoWidth":o.dimensions.width=n.value,a();break;case"getDuration":o.duration=n.value,e.timeCode.start>=o.duration&&(e.timeCode.start=0),a()}},d=function(e){l(e)};this.windowContext.addEventListener("message",d,!1),this.autoPlayTestTimeout(),o.destroy=function(){e.windowContext.removeEventListener("message",d),o.iframe.parentElement&&o.iframe.parentElement.removeChild(o.iframe)}}},{key:"scaleVideo",value:function(e){var t=e||this.scaleFactor,n=this.player.iframe,o=this._findPlayerDimensions();if("fill"!==this.fitMode)return n.style.width="",n.style.height="",!1;var i=n.parentNode.clientWidth,r=n.parentNode.clientHeight,a=i/r,s=o.width/o.height,u=0,c=0;a>s?(u=i*t,c=i*t/s,n.style.width=u+"px",n.style.height=c+"px"):s>a?(u=r*t*s,c=r*t,n.style.width=u+"px",n.style.height=c+"px"):(u=i*t,c=r*t,n.style.width=u+"px",n.style.height=c+"px"),n.style.left=0-(u-i)/2+"px",n.style.top=0-(c-r)/2+"px"}},{key:"setSpeed",value:function(e){this.playbackSpeed=parseFloat(this.playbackSpeed),this.player.setPlaybackRate(this.playbackSpeed)}},{key:"setDisplayEffects",value:function(){this.setFilter()}},{key:"setFilter",value:function(){var e=this.container.style,t=w[this.filter-1],n="";"none"!==t&&(n=this.getFilterStyle(t,this.filterStrength)),"blur"===t?(e.webkitFilter="",e.filter="",this.container.classList.add("filter-blur"),Array.prototype.slice.call(this.container.children).forEach(function(e){e.style.webkitFilter=n,e.style.filter=n})):(e.webkitFilter=n,e.filter=n,this.container.classList.remove("filter-blur"),Array.prototype.slice.call(this.container.children).forEach(function(e){e.style.webkitFilter="",e.style.filter=""}))}},{key:"getFilterStyle",value:function(e,t){return e+"("+(b[e].modifier(t)+b[e].unit)+")"}},{key:"_findPlayerDimensions",value:function(){var e=void 0,t=void 0,n=this.player;if("youtube"===this.videoSource&&n)for(var o in n){var i=n[o];if("object"===("undefined"==typeof i?"undefined":(0,r.default)(i))&&i.width&&i.height){e=i.width,t=i.height;break}}else"vimeo"===this.videoSource&&n&&(n.dimensions?(e=n.dimensions.width,t=n.dimensions.height):n.iframe&&(e=n.iframe.clientWidth,t=n.iframe.clientHeight));return e&&t||(e=this.container.clientWidth,t=this.container.clientHeight,console.warn("Video player dimensions not found.")),{width:e,height:t}}},{key:"_getStartTime",value:function(e){var t=new v.default(e,!0),n=this._getTimeParameter(t);if(!n)return!1;var o=/[hms]/,i=/[#t=s]/,r=void 0;switch(this.videoSource){case"youtube":r=n.split(o).filter(Boolean);break;case"vimeo":r=n.split(i).filter(Boolean)}var a=parseInt(r.pop(),10)||0,s=60*parseInt(r.pop(),10)||0,u=3600*parseInt(r.pop(),10)||0;return u+s+a}},{key:"_getTimeParameter",value:function(e){if("youtube"===this.videoSource&&(!e.query||!e.query.t)||"vimeo"===this.videoSource&&!e.hash)return!1;var t=void 0;return"youtube"===this.videoSource?t=e.query.t:"vimeo"===this.videoSource&&(t=e.hash),t}},{key:"autoPlayTestTimeout",value:function(){var e=this;this.player.playTimeout=setTimeout(function(){e.canAutoPlay=!1,e.container.classList.add("mobile"),e.logger("added mobile")},2500)}},{key:"syncPlayer",value:function(){this.setDisplayEffects(),"youtube"===this.videoSource&&this.setSpeed(),this.scaleVideo()}},{key:"logger",value:function(e){A&&console.log(e)}}]),e}();t.default=L},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=n(100),r=o(i),a=n(107),s=o(a),u="function"==typeof s.default&&"symbol"==typeof r.default?function(e){return typeof e}:function(e){return e&&"function"==typeof s.default&&e.constructor===s.default?"symbol":typeof e};t.default="function"==typeof s.default&&"symbol"===u(r.default)?function(e){return"undefined"==typeof e?"undefined":u(e)}:function(e){return e&&"function"==typeof s.default&&e.constructor===s.default?"symbol":"undefined"==typeof e?"undefined":u(e)}},function(e,t,n){e.exports={default:n(101),__esModule:!0}},function(e,t,n){n(38),n(102),e.exports=n(106).f("iterator")},function(e,t,n){n(103);for(var o=n(45),i=n(49),r=n(61),a=n(79)("toStringTag"),s=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],u=0;u<5;u++){var c=s[u],l=o[c],d=l&&l.prototype;d&&!d[a]&&i(d,a,c),r[c]=r.Array}},function(e,t,n){"use strict";var o=n(104),i=n(105),r=n(61),a=n(67);e.exports=n(42)(Array,"Array",function(e,t){this._t=a(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,i(1)):"keys"==t?i(0,n):"values"==t?i(0,e[n]):i(0,[n,e[n]])},"values"),r.Arguments=r.Array,o("keys"),o("values"),o("entries")},function(e,t){e.exports=function(){}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,n){t.f=n(79)},function(e,t,n){e.exports={default:n(108),__esModule:!0}},function(e,t,n){n(109),n(120),n(121),n(122),e.exports=n(46).Symbol},function(e,t,n){"use strict";var o=n(45),i=n(60),r=n(54),a=n(44),s=n(59),u=n(110).KEY,c=n(55),l=n(74),d=n(78),f=n(75),p=n(79),h=n(106),v=n(111),y=n(112),m=n(113),A=n(116),g=n(51),w=n(67),b=n(57),k=n(58),x=n(63),L=n(117),E=n(119),S=n(50),T=n(65),_=E.f,M=S.f,P=L.f,C=o.Symbol,I=o.JSON,O=I&&I.stringify,j="prototype",R=p("_hidden"),N=p("toPrimitive"),F={}.propertyIsEnumerable,V=l("symbol-registry"),B=l("symbols"),q=l("op-symbols"),H=Object[j],D="function"==typeof C,W=o.QObject,z=!W||!W[j]||!W[j].findChild,G=r&&c(function(){return 7!=x(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a})?function(e,t,n){var o=_(H,t);o&&delete H[t],M(e,t,n),o&&e!==H&&M(H,t,o)}:M,Y=function(e){var t=B[e]=x(C[j]);return t._k=e,t},U=D&&"symbol"==typeof C.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof C},Q=function(e,t,n){return e===H&&Q(q,t,n),g(e),t=b(t,!0),g(n),i(B,t)?(n.enumerable?(i(e,R)&&e[R][t]&&(e[R][t]=!1),n=x(n,{enumerable:k(0,!1)})):(i(e,R)||M(e,R,k(1,{})),e[R][t]=!0),G(e,t,n)):M(e,t,n)},Z=function(e,t){g(e);for(var n,o=m(t=w(t)),i=0,r=o.length;r>i;)Q(e,n=o[i++],t[n]);return e},J=function(e,t){return void 0===t?x(e):Z(x(e),t)},X=function(e){var t=F.call(this,e=b(e,!0));return!(this===H&&i(B,e)&&!i(q,e))&&(!(t||!i(this,e)||!i(B,e)||i(this,R)&&this[R][e])||t)},K=function(e,t){if(e=w(e),t=b(t,!0),e!==H||!i(B,t)||i(q,t)){var n=_(e,t);return!n||!i(B,t)||i(e,R)&&e[R][t]||(n.enumerable=!0),n}},$=function(e){for(var t,n=P(w(e)),o=[],r=0;n.length>r;)i(B,t=n[r++])||t==R||t==u||o.push(t);return o},ee=function(e){for(var t,n=e===H,o=P(n?q:w(e)),r=[],a=0;o.length>a;)!i(B,t=o[a++])||n&&!i(H,t)||r.push(B[t]);return r};D||(C=function(){if(this instanceof C)throw TypeError("Symbol is not a constructor!");var e=f(arguments.length>0?arguments[0]:void 0),t=function(n){this===H&&t.call(q,n),i(this,R)&&i(this[R],e)&&(this[R][e]=!1),G(this,e,k(1,n))};return r&&z&&G(H,e,{configurable:!0,set:t}),Y(e)},s(C[j],"toString",function(){return this._k}),E.f=K,S.f=Q,n(118).f=L.f=$,n(115).f=X,n(114).f=ee,r&&!n(43)&&s(H,"propertyIsEnumerable",X,!0),h.f=function(e){return Y(p(e))}),a(a.G+a.W+a.F*!D,{Symbol:C});for(var te="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ne=0;te.length>ne;)p(te[ne++]);for(var te=T(p.store),ne=0;te.length>ne;)v(te[ne++]);a(a.S+a.F*!D,"Symbol",{for:function(e){return i(V,e+="")?V[e]:V[e]=C(e)},keyFor:function(e){if(U(e))return y(V,e);throw TypeError(e+" is not a symbol!")},useSetter:function(){z=!0},useSimple:function(){z=!1}}),a(a.S+a.F*!D,"Object",{create:J,defineProperty:Q,defineProperties:Z,getOwnPropertyDescriptor:K,getOwnPropertyNames:$,getOwnPropertySymbols:ee}),I&&a(a.S+a.F*(!D||c(function(){var e=C();return"[null]"!=O([e])||"{}"!=O({a:e})||"{}"!=O(Object(e))})),"JSON",{stringify:function(e){if(void 0!==e&&!U(e)){for(var t,n,o=[e],i=1;arguments.length>i;)o.push(arguments[i++]);return t=o[1],"function"==typeof t&&(n=t),!n&&A(t)||(t=function(e,t){if(n&&(t=n.call(this,e,t)),!U(t))return t}),o[1]=t,O.apply(I,o)}}}),C[j][N]||n(49)(C[j],N,C[j].valueOf),d(C,"Symbol"),d(Math,"Math",!0),d(o.JSON,"JSON",!0)},function(e,t,n){var o=n(75)("meta"),i=n(52),r=n(60),a=n(50).f,s=0,u=Object.isExtensible||function(){return!0},c=!n(55)(function(){return u(Object.preventExtensions({}))}),l=function(e){a(e,o,{value:{i:"O"+ ++s,w:{}}})},d=function(e,t){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!r(e,o)){if(!u(e))return"F";if(!t)return"E";l(e)}return e[o].i},f=function(e,t){if(!r(e,o)){if(!u(e))return!0;if(!t)return!1;l(e)}return e[o].w},p=function(e){return c&&h.NEED&&u(e)&&!r(e,o)&&l(e),e},h=e.exports={KEY:o,NEED:!1,fastKey:d,getWeak:f,onFreeze:p}},function(e,t,n){var o=n(45),i=n(46),r=n(43),a=n(106),s=n(50).f;e.exports=function(e){var t=i.Symbol||(i.Symbol=r?{}:o.Symbol||{});"_"==e.charAt(0)||e in t||s(t,e,{value:a.f(e)})}},function(e,t,n){var o=n(65),i=n(67);e.exports=function(e,t){for(var n,r=i(e),a=o(r),s=a.length,u=0;s>u;)if(r[n=a[u++]]===t)return n}},function(e,t,n){var o=n(65),i=n(114),r=n(115);e.exports=function(e){var t=o(e),n=i.f;if(n)for(var a,s=n(e),u=r.f,c=0;s.length>c;)u.call(e,a=s[c++])&&t.push(a);return t}},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t){t.f={}.propertyIsEnumerable},function(e,t,n){var o=n(69);e.exports=Array.isArray||function(e){return"Array"==o(e)}},function(e,t,n){var o=n(67),i=n(118).f,r={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return i(e)}catch(e){return a.slice()}};e.exports.f=function(e){return a&&"[object Window]"==r.call(e)?s(e):i(o(e))}},function(e,t,n){var o=n(66),i=n(76).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return o(e,i)}},function(e,t,n){var o=n(115),i=n(58),r=n(67),a=n(57),s=n(60),u=n(53),c=Object.getOwnPropertyDescriptor;t.f=n(54)?c:function(e,t){if(e=r(e),t=a(t,!0),u)try{return c(e,t)}catch(e){}if(s(e,t))return i(!o.f.call(e,t),e[t])}},function(e,t){},function(e,t,n){n(111)("asyncIterator")},function(e,t,n){n(111)("observable")},function(e,t,n){e.exports={default:n(124),__esModule:!0}},function(e,t,n){var o=n(46),i=o.JSON||(o.JSON={stringify:JSON.stringify});e.exports=function(e){return i.stringify.apply(i,arguments)}},function(e,t,n){e.exports={default:n(126),__esModule:!0}},function(e,t,n){n(127),e.exports=n(46).Object.assign},function(e,t,n){var o=n(44);o(o.S+o.F,"Object",{assign:n(128)})},function(e,t,n){"use strict";var o=n(65),i=n(114),r=n(115),a=n(81),s=n(68),u=Object.assign;e.exports=!u||n(55)(function(){var e={},t={},n=Symbol(),o="abcdefghijklmnopqrst";return e[n]=7,o.split("").forEach(function(e){t[e]=e}),7!=u({},e)[n]||Object.keys(u({},t)).join("")!=o})?function(e,t){for(var n=a(e),u=arguments.length,c=1,l=i.f,d=r.f;u>c;)for(var f,p=s(arguments[c++]),h=l?o(p).concat(l(p)):o(p),v=h.length,y=0;v>y;)d.call(p,f=h[y++])&&(n[f]=p[f]);return n}:u},function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=n(131),r=o(i);t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,r.default)(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()},function(e,t,n){e.exports={default:n(132),__esModule:!0}},function(e,t,n){n(133);var o=n(46).Object;e.exports=function(e,t,n){return o.defineProperty(e,t,n)}},function(e,t,n){var o=n(44);o(o.S+o.F*!n(54),"Object",{defineProperty:n(50).f})},function(e,t,n){(function(t){"use strict";function o(e){e=e||t.location||{};var n,o={},i=typeof e;if("blob:"===e.protocol)o=new a(unescape(e.pathname),{});else if("string"===i){o=new a(e,{});for(n in h)delete o[n]}else if("object"===i){for(n in e)n in h||(o[n]=e[n]);void 0===o.slashes&&(o.slashes=f.test(e.href))}return o}function i(e){var t=d.exec(e);return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!t[2],rest:t[3]}}function r(e,t){for(var n=(t||"/").split("/").slice(0,-1).concat(e.split("/")),o=n.length,i=n[o-1],r=!1,a=0;o--;)"."===n[o]?n.splice(o,1):".."===n[o]?(n.splice(o,1),a++):a&&(0===o&&(r=!0),n.splice(o,1),a--);return r&&n.unshift(""),"."!==i&&".."!==i||n.push(""),n.join("/")}function a(e,t,n){if(!(this instanceof a))return new a(e,t,n);var s,u,d,f,h,v,y=p.slice(),m=typeof t,A=this,g=0;for("object"!==m&&"string"!==m&&(n=t,t=null),n&&"function"!=typeof n&&(n=l.parse),t=o(t),u=i(e||""),s=!u.protocol&&!u.slashes,A.slashes=u.slashes||s&&t.slashes,A.protocol=u.protocol||t.protocol||"",e=u.rest,u.slashes||(y[2]=[/(.*)/,"pathname"]);g<y.length;g++)f=y[g],d=f[0],v=f[1],d!==d?A[v]=e:"string"==typeof d?~(h=e.indexOf(d))&&("number"==typeof f[2]?(A[v]=e.slice(0,h),e=e.slice(h+f[2])):(A[v]=e.slice(h),e=e.slice(0,h))):(h=d.exec(e))&&(A[v]=h[1],e=e.slice(0,h.index)),A[v]=A[v]||(s&&f[3]?t[v]||"":""),f[4]&&(A[v]=A[v].toLowerCase());n&&(A.query=n(A.query)),s&&t.slashes&&"/"!==A.pathname.charAt(0)&&(""!==A.pathname||""!==t.pathname)&&(A.pathname=r(A.pathname,t.pathname)),c(A.port,A.protocol)||(A.host=A.hostname,A.port=""),A.username=A.password="",A.auth&&(f=A.auth.split(":"),A.username=f[0]||"",A.password=f[1]||""),A.origin=A.protocol&&A.host&&"file:"!==A.protocol?A.protocol+"//"+A.host:"null",A.href=A.toString()}function s(e,t,n){var o=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(n||l.parse)(t)),o[e]=t;break;case"port":o[e]=t,c(t,o.protocol)?t&&(o.host=o.hostname+":"+t):(o.host=o.hostname,o[e]="");break;case"hostname":o[e]=t,o.port&&(t+=":"+o.port),o.host=t;break;case"host":o[e]=t,/:\d+$/.test(t)?(t=t.split(":"),o.port=t.pop(),o.hostname=t.join(":")):(o.hostname=t,o.port="");break;case"protocol":o.protocol=t.toLowerCase(),o.slashes=!n;break;case"pathname":case"hash":if(t){var i="pathname"===e?"/":"#";o[e]=t.charAt(0)!==i?i+t:t}else o[e]=t;break;default:o[e]=t}for(var r=0;r<p.length;r++){var a=p[r];a[4]&&(o[a[1]]=o[a[1]].toLowerCase())}return o.origin=o.protocol&&o.host&&"file:"!==o.protocol?o.protocol+"//"+o.host:"null",o.href=o.toString(),o}function u(e){e&&"function"==typeof e||(e=l.stringify);var t,n=this,o=n.protocol;o&&":"!==o.charAt(o.length-1)&&(o+=":");var i=o+(n.slashes?"//":"");return n.username&&(i+=n.username,n.password&&(i+=":"+n.password),i+="@"),i+=n.host+n.pathname,t="object"==typeof n.query?e(n.query):n.query,t&&(i+="?"!==t.charAt(0)?"?"+t:t),n.hash&&(i+=n.hash),i}var c=n(135),l=n(136),d=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,f=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,p=[["#","hash"],["?","query"],["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],h={hash:1,query:1};a.prototype={set:s,toString:u},a.extractProtocol=i,a.location=o,a.qs=l,e.exports=a}).call(t,function(){return this}())},function(e,t){"use strict";e.exports=function(e,t){if(t=t.split(":")[0],e=+e,!e)return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}},function(e,t){"use strict";function n(e){return decodeURIComponent(e.replace(/\+/g," "))}function o(e){for(var t,o=/([^=?&]+)=?([^&]*)/g,i={};t=o.exec(e);i[n(t[1])]=n(t[2]));return i}function i(e,t){t=t||"";var n=[];"string"!=typeof t&&(t="?");for(var o in e)r.call(e,o)&&n.push(encodeURIComponent(o)+"="+encodeURIComponent(e[o]));return n.length?t+n.join("&"):""}var r=Object.prototype.hasOwnProperty;t.stringify=i,t.parse=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(138),r=o(i),a=!1,s=n(149),u=s.OggVideo,c=s.Mp4Video,l=function(){return new r.default(function(e,t){if("resolve"===a)return void e(!0);if("reject"===a)return void t("rejected for debugging");var n=document.createElement("video");n.autoplay=!0,n.muted=!0,n.volume=0,n.setAttribute("data-is-playing","false"),n.style.display="none",document.body.appendChild(n);var o=null;try{if(n.canPlayType('video/ogg; codecs="theora"').match(/^(probably)|(maybe)/))n.src=u;else{if(!n.canPlayType('video/mp4; codecs="avc1.42E01E"').match(/^(probably)|(maybe)/))return void t("no autoplay: element does not support mp4 or ogg format");n.src=c}}catch(e){return void t("no autoplay: "+e)}n.addEventListener("play",function(){n.setAttribute("data-is-playing","true")}),n.addEventListener("canplay",function(){return"true"===n.getAttribute("data-is-playing")?(e("autoplay supported"),clearTimeout(o),!0):(t("no autoplay: browser does not support autoplay"),clearTimeout(o),!1)}),n.load(),n.play(),o=setTimeout(function(){t("no autoplay: unsure")},1e3)})};t.default=l},function(e,t,n){e.exports={default:n(139),__esModule:!0}},function(e,t,n){n(120),n(38),n(102),n(140),e.exports=n(46).Promise},function(e,t,n){"use strict";var o,i,r,a=n(43),s=n(45),u=n(47),c=n(87),l=n(44),d=n(52),f=n(48),p=n(141),h=n(142),v=n(143),y=n(144).set,m=n(146)(),A="Promise",g=s.TypeError,w=s.process,b=s[A],w=s.process,k="process"==c(w),x=function(){},L=!!function(){try{var e=b.resolve(1),t=(e.constructor={})[n(79)("species")]=function(e){e(x,x)};return(k||"function"==typeof PromiseRejectionEvent)&&e.then(x)instanceof t}catch(e){}}(),E=function(e,t){return e===t||e===b&&t===r},S=function(e){var t;return!(!d(e)||"function"!=typeof(t=e.then))&&t},T=function(e){return E(b,e)?new _(e):new i(e)},_=i=function(e){var t,n;this.promise=new e(function(e,o){if(void 0!==t||void 0!==n)throw g("Bad Promise constructor");t=e,n=o}),this.resolve=f(t),this.reject=f(n)},M=function(e){try{e()}catch(e){return{error:e}}},P=function(e,t){if(!e._n){e._n=!0;var n=e._c;m(function(){for(var o=e._v,i=1==e._s,r=0,a=function(t){var n,r,a=i?t.ok:t.fail,s=t.resolve,u=t.reject,c=t.domain;try{a?(i||(2==e._h&&O(e),e._h=1),a===!0?n=o:(c&&c.enter(),n=a(o),c&&c.exit()),n===t.promise?u(g("Promise-chain cycle")):(r=S(n))?r.call(n,s,u):s(n)):u(o)}catch(e){u(e)}};n.length>r;)a(n[r++]);e._c=[],e._n=!1,t&&!e._h&&C(e)})}},C=function(e){y.call(s,function(){var t,n,o,i=e._v;if(I(e)&&(t=M(function(){k?w.emit("unhandledRejection",i,e):(n=s.onunhandledrejection)?n({promise:e,reason:i}):(o=s.console)&&o.error&&o.error("Unhandled promise rejection",i)}),e._h=k||I(e)?2:1),e._a=void 0,t)throw t.error})},I=function(e){if(1==e._h)return!1;for(var t,n=e._a||e._c,o=0;n.length>o;)if(t=n[o++],t.fail||!I(t.promise))return!1;return!0},O=function(e){y.call(s,function(){var t;k?w.emit("rejectionHandled",e):(t=s.onrejectionhandled)&&t({promise:e,reason:e._v})})},j=function(e){var t=this;t._d||(t._d=!0,t=t._w||t,t._v=e,t._s=2,t._a||(t._a=t._c.slice()),P(t,!0))},R=function(e){var t,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===e)throw g("Promise can't be resolved itself");(t=S(e))?m(function(){var o={_w:n,_d:!1};try{t.call(e,u(R,o,1),u(j,o,1))}catch(e){j.call(o,e)}}):(n._v=e,n._s=1,P(n,!1))}catch(e){j.call({_w:n,_d:!1},e)}}};L||(b=function(e){p(this,b,A,"_h"),f(e),o.call(this);try{e(u(R,this,1),u(j,this,1))}catch(e){j.call(this,e)}},o=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},o.prototype=n(147)(b.prototype,{then:function(e,t){var n=T(v(this,b));return n.ok="function"!=typeof e||e,n.fail="function"==typeof t&&t,n.domain=k?w.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&P(this,!1),n.promise},catch:function(e){return this.then(void 0,e)}}),_=function(){var e=new o;this.promise=e,this.resolve=u(R,e,1),this.reject=u(j,e,1)}),l(l.G+l.W+l.F*!L,{Promise:b}),n(78)(b,A),n(148)(A),r=n(46)[A],l(l.S+l.F*!L,A,{reject:function(e){var t=T(this),n=t.reject;return n(e),t.promise}}),l(l.S+l.F*(a||!L),A,{resolve:function(e){if(e instanceof b&&E(e.constructor,this))return e;var t=T(this),n=t.resolve;return n(e),t.promise}}),l(l.S+l.F*!(L&&n(88)(function(e){b.all(e).catch(x)})),A,{all:function(e){var t=this,n=T(t),o=n.resolve,i=n.reject,r=M(function(){var n=[],r=0,a=1;h(e,!1,function(e){var s=r++,u=!1;n.push(void 0),a++,t.resolve(e).then(function(e){u||(u=!0,n[s]=e,--a||o(n))},i)}),--a||o(n)});return r&&i(r.error),n.promise},race:function(e){var t=this,n=T(t),o=n.reject,i=M(function(){h(e,!1,function(e){t.resolve(e).then(n.resolve,o)})});return i&&o(i.error),n.promise}})},function(e,t){e.exports=function(e,t,n,o){if(!(e instanceof t)||void 0!==o&&o in e)throw TypeError(n+": incorrect invocation!");return e}},function(e,t,n){var o=n(47),i=n(83),r=n(84),a=n(51),s=n(71),u=n(86),c={},l={},t=e.exports=function(e,t,n,d,f){var p,h,v,y,m=f?function(){return e}:u(e),A=o(n,d,t?2:1),g=0;if("function"!=typeof m)throw TypeError(e+" is not iterable!");if(r(m)){for(p=s(e.length);p>g;g++)if(y=t?A(a(h=e[g])[0],h[1]):A(e[g]),y===c||y===l)return y}else for(v=m.call(e);!(h=v.next()).done;)if(y=i(v,A,h.value,t),y===c||y===l)return y};t.BREAK=c,t.RETURN=l},function(e,t,n){var o=n(51),i=n(48),r=n(79)("species");e.exports=function(e,t){var n,a=o(e).constructor;return void 0===a||void 0==(n=o(a)[r])?t:i(n)}},function(e,t,n){var o,i,r,a=n(47),s=n(145),u=n(77),c=n(56),l=n(45),d=l.process,f=l.setImmediate,p=l.clearImmediate,h=l.MessageChannel,v=0,y={},m="onreadystatechange",A=function(){var e=+this;if(y.hasOwnProperty(e)){var t=y[e];delete y[e],t()}},g=function(e){A.call(e.data)};f&&p||(f=function(e){for(var t=[],n=1;arguments.length>n;)t.push(arguments[n++]);return y[++v]=function(){s("function"==typeof e?e:Function(e),t)},o(v),v},p=function(e){delete y[e]},"process"==n(69)(d)?o=function(e){d.nextTick(a(A,e,1))}:h?(i=new h,r=i.port2,i.port1.onmessage=g,o=a(r.postMessage,r,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(o=function(e){l.postMessage(e+"","*")},l.addEventListener("message",g,!1)):o=m in c("script")?function(e){u.appendChild(c("script"))[m]=function(){u.removeChild(this),A.call(e)}}:function(e){setTimeout(a(A,e,1),0)}),e.exports={set:f,clear:p}},function(e,t){e.exports=function(e,t,n){var o=void 0===n;switch(t.length){case 0:return o?e():e.call(n);case 1:return o?e(t[0]):e.call(n,t[0]);case 2:return o?e(t[0],t[1]):e.call(n,t[0],t[1]);case 3:return o?e(t[0],t[1],t[2]):e.call(n,t[0],t[1],t[2]);case 4:return o?e(t[0],t[1],t[2],t[3]):e.call(n,t[0],t[1],t[2],t[3])}return e.apply(n,t)}},function(e,t,n){var o=n(45),i=n(144).set,r=o.MutationObserver||o.WebKitMutationObserver,a=o.process,s=o.Promise,u="process"==n(69)(a);e.exports=function(){var e,t,n,c=function(){var o,i;for(u&&(o=a.domain)&&o.exit();e;){i=e.fn,e=e.next;try{i()}catch(o){throw e?n():t=void 0,o}}t=void 0,o&&o.enter()};if(u)n=function(){
a.nextTick(c)};else if(r){var l=!0,d=document.createTextNode("");new r(c).observe(d,{characterData:!0}),n=function(){d.data=l=!l}}else if(s&&s.resolve){var f=s.resolve();n=function(){f.then(c)}}else n=function(){i.call(o,c)};return function(o){var i={fn:o,next:void 0};t&&(t.next=i),e||(e=i,n()),t=i}}},function(e,t,n){var o=n(49);e.exports=function(e,t,n){for(var i in t)n&&e[i]?e[i]=t[i]:o(e,i,t[i]);return e}},function(e,t,n){"use strict";var o=n(45),i=n(46),r=n(50),a=n(54),s=n(79)("species");e.exports=function(e){var t="function"==typeof i[e]?i[e]:o[e];a&&t&&!t[s]&&r.f(t,s,{configurable:!0,get:function(){return this}})}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="data:video/ogg;base64,T2dnUwACAAAAAAAAAABmnCATAAAAAHDEixYBKoB0aGVvcmEDAgEAAQABAAAQAAAQAAAAAAAFAAAAAQAAAAAAAAAAAGIAYE9nZ1MAAAAAAAAAAAAAZpwgEwEAAAACrA7TDlj///////////////+QgXRoZW9yYSsAAABYaXBoLk9yZyBsaWJ0aGVvcmEgMS4xIDIwMDkwODIyIChUaHVzbmVsZGEpAQAAABoAAABFTkNPREVSPWZmbXBlZzJ0aGVvcmEtMC4yOYJ0aGVvcmG+zSj3uc1rGLWpSUoQc5zmMYxSlKQhCDGMYhCEIQhAAAAAAAAAAAAAEW2uU2eSyPxWEvx4OVts5ir1aKtUKBMpJFoQ/nk5m41mUwl4slUpk4kkghkIfDwdjgajQYC8VioUCQRiIQh8PBwMhgLBQIg4FRba5TZ5LI/FYS/Hg5W2zmKvVoq1QoEykkWhD+eTmbjWZTCXiyVSmTiSSCGQh8PB2OBqNBgLxWKhQJBGIhCHw8HAyGAsFAiDgUCw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDAwPEhQUFQ0NDhESFRUUDg4PEhQVFRUOEBETFBUVFRARFBUVFRUVEhMUFRUVFRUUFRUVFRUVFRUVFRUVFRUVEAwLEBQZGxwNDQ4SFRwcGw4NEBQZHBwcDhATFhsdHRwRExkcHB4eHRQYGxwdHh4dGxwdHR4eHh4dHR0dHh4eHRALChAYKDM9DAwOExo6PDcODRAYKDlFOA4RFh0zV1A+EhYlOkRtZ00YIzdAUWhxXDFATldneXhlSFxfYnBkZ2MTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEhIVGRoaGhoSFBYaGhoaGhUWGRoaGhoaGRoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhESFh8kJCQkEhQYIiQkJCQWGCEkJCQkJB8iJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQREhgvY2NjYxIVGkJjY2NjGBo4Y2NjY2MvQmNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRISEhUXGBkbEhIVFxgZGxwSFRcYGRscHRUXGBkbHB0dFxgZGxwdHR0YGRscHR0dHhkbHB0dHR4eGxwdHR0eHh4REREUFxocIBERFBcaHCAiERQXGhwgIiUUFxocICIlJRcaHCAiJSUlGhwgIiUlJSkcICIlJSUpKiAiJSUlKSoqEBAQFBgcICgQEBQYHCAoMBAUGBwgKDBAFBgcICgwQEAYHCAoMEBAQBwgKDBAQEBgICgwQEBAYIAoMEBAQGCAgAfF5cdH1e3Ow/L66wGmYnfIUbwdUTe3LMRbqON8B+5RJEvcGxkvrVUjTMrsXYhAnIwe0dTJfOYbWrDYyqUrz7dw/JO4hpmV2LsQQvkUeGq1BsZLx+cu5iV0e0eScJ91VIQYrmqfdVSK7GgjOU0oPaPOu5IcDK1mNvnD+K8LwS87f8Jx2mHtHnUkTGAurWZlNQa74ZLSFH9oF6FPGxzLsjQO5Qe0edcpttd7BXBSqMCL4k/4tFrHIPuEQ7m1/uIWkbDMWVoDdOSuRQ9286kvVUlQjzOE6VrNguN4oRXYGkgcnih7t13/9kxvLYKQezwLTrO44sVmMPgMqORo1E0sm1/9SludkcWHwfJwTSybR4LeAz6ugWVgRaY8mV/9SluQmtHrzsBtRF/wPY+X0JuYTs+ltgrXAmlk10xQHmTu9VSIAk1+vcvU4ml2oNzrNhEtQ3CysNP8UeR35wqpKUBdGdZMSjX4WVi8nJpdpHnbhzEIdx7mwf6W1FKAiucMXrWUWVjyRf23chNtR9mIzDoT/6ZLYailAjhFlZuvPtSeZ+2oREubDoWmT3TguY+JHPdRVSLKxfKH3vgNqJ/9emeEYikGXDFNzaLjvTeGAL61mogOoeG3y6oU4rW55ydoj0lUTSR/mmRhPmF86uwIfzp3FtiufQCmppaHDlGE0r2iTzXIw3zBq5hvaTldjG4CPb9wdxAme0SyedVKczJ9AtYbgPOzYKJvZZImsN7ecrxWZg5dR6ZLj/j4qpWsIA+vYwE+Tca9ounMIsrXMB4Stiib2SPQtZv+FVIpfEbzv8ncZoLBXc3YBqTG1HsskTTotZOYTG+oVUjLk6zhP8bg4RhMUNtfZdO7FdpBuXzhJ5Fh8IKlJG7wtD9ik8rWOJxy6iQ3NwzBpQ219mlyv+FLicYs2iJGSE0u2txzed++D61ZWCiHD/cZdQVCqkO2gJpdpNaObhnDfAPrT89RxdWFZ5hO3MseBSIlANppdZNIV/Rwe5eLTDvkfWKzFnH+QJ7m9QWV1KdwnuIwTNtZdJMoXBf74OhRnh2t+OTGL+AVUnIkyYY+QG7g9itHXyF3OIygG2s2kud679ZWKqSFa9n3IHD6MeLv1lZ0XyduRhiDRtrNnKoyiFVLcBm0ba5Yy3fQkDh4XsFE34isVpOzpa9nR8iCpS4HoxG2rJpnRhf3YboVa1PcRouh5LIJv/uQcPNd095ickTaiGBnWLKVWRc0OnYTSyex/n2FofEPnDG8y3PztHrzOLK1xo6RAml2k9owKajOC0Wr4D5x+3nA0UEhK2m198wuBHF3zlWWVKWLN1CHzLClUfuoYBcx4b1llpeBKmbayaR58njtE9onD66lUcsg0Spm2snsb+8HaJRn4dYcLbCuBuYwziB8/5U1C1DOOz2gZjSZtrLJk6vrLF3hwY4Io9xuT/ruUFRSBkNtUzTOWhjh26irLEPx4jPZL3Fo3QrReoGTTM21xYTT9oFdhTUIvjqTkfkvt0bzgVUjq/hOYY8j60IaO/0AzRBtqkTS6R5ellZd5uKdzzhb8BFlDdAcrwkE0rbXTOPB+7Y0FlZO96qFL4Ykg21StJs8qIW7h16H5hGiv8V2Cflau7QVDepTAHa6Lgt6feiEvJDM21StJsmOH/hynURrKxvUpQ8BH0JF7BiyG2qZpnL/7AOU66gt+reLEXY8pVOCQvSsBtqZTNM8bk9ohRcwD18o/WVkbvrceVKRb9I59IEKysjBeTMmmbA21xu/6iHadLRxuIzkLpi8wZYmmbbWi32RVAUjruxWlJ//iFxE38FI9hNKOoCdhwf5fDe4xZ81lgREhK2m1j78vW1CqkuMu/AjBNK210kzRUX/B+69cMMUG5bYrIeZxVSEZISmkzbXOi9yxwIfPgdsov7R71xuJ7rFcACjG/9PzApqFq7wEgzNJm2suWESPuwrQvejj7cbnQxMkxpm21lUYJL0fKmogPPqywn7e3FvB/FCNxPJ85iVUkCE9/tLKx31G4CgNtWTTPFhMvlu8G4/TrgaZttTChljfNJGgOT2X6EqpETy2tYd9cCBI4lIXJ1/3uVUllZEJz4baqGF64yxaZ+zPLYwde8Uqn1oKANtUrSaTOPHkhvuQP3bBlEJ/LFe4pqQOHUI8T8q7AXx3fLVBgSCVpMba55YxN3rv8U1Dv51bAPSOLlZWebkL8vSMGI21lJmmeVxPRwFlZF1CpqCN8uLwymaZyjbXHCRytogPN3o/n74CNykfT+qqRv5AQlHcRxYrC5KvGmbbUwmZY/29BvF6C1/93x4WVglXDLFpmbapmF89HKTogRwqqSlGbu+oiAkcWFbklC6Zhf+NtTLFpn8oWz+HsNRVSgIxZWON+yVyJlE5tq/+GWLTMutYX9ekTySEQPLVNQQ3OfycwJBM0zNtZcse7CvcKI0V/zh16Dr9OSA21MpmmcrHC+6pTAPHPwoit3LHHqs7jhFNRD6W8+EBGoSEoaZttTCZljfduH/fFisn+dRBGAZYtMzbVMwvul/T/crK1NQh8gN0SRRa9cOux6clC0/mDLFpmbarmF8/e6CopeOLCNW6S/IUUg3jJIYiAcDoMcGeRbOvuTPjXR/tyo79LK3kqqkbxkkMRAOB0GODPItnX3Jnxro/25Ud+llbyVVSN4ySGIgHA6DHBnkWzr7kz410f7cqO/Syt5KqpFVJwn6gBEvBM0zNtZcpGOEPiysW8vvRd2R0f7gtjhqUvXL+gWVwHm4XJDBiMpmmZtrLfPwd/IugP5+fKVSysH1EXreFAcEhelGmbbUmZY4Xdo1vQWVnK19P4RuEnbf0gQnR+lDCZlivNM22t1ESmopPIgfT0duOfQrsjgG4tPxli0zJmF5trdL1JDUIUT1ZXSqQDeR4B8mX3TrRro/2McGeUvLtwo6jIEKMkCUXWsLyZROd9P/rFYNtXPBli0z398iVUlVKAjFlY437JXImUTm2r/4ZYtMy61hf16RPJIU9nZ1MABAwAAAAAAAAAZpwgEwIAAABhp658BScAAAAAAADnUFBQXIDGXLhwtttNHDhw5OcpQRMETBEwRPduylKVB0HRdF0A",o="data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ==";t.OggVideo=n,t.Mp4Video=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=["none","blur","brightness","contrast","invert","opacity","saturate","sepia","drop-shadow","grayscale","hue-rotate"],o={blur:{modifier:function(e){return.3*e},unit:"px"},brightness:{modifier:function(e){return.009*e+.1},unit:""},contrast:{modifier:function(e){return.4*e+80},unit:"%"},grayscale:{modifier:function(e){return e},unit:"%"},"hue-rotate":{modifier:function(e){return 3.6*e},unit:"deg"},invert:{modifier:function(e){return 1},unit:""},opacity:{modifier:function(e){return e},unit:"%"},saturate:{modifier:function(e){return 2*e},unit:"%"},sepia:{modifier:function(e){return e},unit:"%"}};t.filterOptions=n,t.filterProperties=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){var t={container:e};return e.getAttribute("data-config-url")&&(t.url=e.getAttribute("data-config-url")),e.getAttribute("data-config-playback-speed")&&(t.playbackSpeed=e.getAttribute("data-config-playback-speed")),e.getAttribute("data-config-filter")&&(t.filter=e.getAttribute("data-config-filter")),e.getAttribute("data-config-filter-strength")&&(t.filterStrength=e.getAttribute("data-config-filter-strength")),t};t.default=n,e.exports=t.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=document.querySelector(".site-header"),n=200,o=function(e){return(0,a.default)(e,".folder-open").length>0},i=function(i){e.classList.contains("folder-open")?(e.classList.remove("folder-open"),setTimeout(function(){t.classList.remove("folder-overflow")},n)):(o(e)&&document.querySelector(".folder-open").classList.remove("folder-open"),e.classList.add("folder-open"),t.classList.add("folder-overflow"))};e.addEventListener("click",i)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(153),a=o(r);t.default=i},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=n(36),r=o(i);n(154),e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"*",n=(0,r.default)(e.parentNode.children);return n.filter(function(n){return n!==e&&n.matches(t)})}},function(e,t){!function(){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1})}()},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=(0,a.default)(e.querySelectorAll(".grid-image-wrapper img")),n=void 0,o=void 0,i=e.querySelector(".grid-wrapper"),r=document.documentElement.clientWidth,s=["tweak-gallery-gutter","tweak-gallery-style","tweak-full-width-first-landscape","tweak-show-gallery-image-captions","tweak-site-outer-padding","tweak-gallery-title-overlay"],c=function(){return{galleryStyle:p.Tweak.getValue("tweak-gallery-style").toLowerCase(),titleOverlaySetting:p.Tweak.getValue("tweak-show-gallery-title-overlay").toLowerCase(),gutter:p.Tweak.getValue("tweak-gallery-gutter"),isFullWidthLandscape:"true"===p.Tweak.getValue("tweak-full-width-first-landscape")}},d=function(){var t=e.querySelectorAll(".grid-hidden"),n=0,o=setInterval(function(){t[n]?(t[n].classList.remove("grid-hidden"),n++):clearInterval(o)},130)},h=function(t){if(t.target.classList.contains("info-button")){e.querySelector(".grid-image-wrapper").classList.remove("info-view");var n='[data-slide-id="'+t.target.getAttribute("data-slide-id")+'"]';o&&clearTimeout(o),e.querySelector(".grid-image-wrapper"+n).classList.add("info-view")}},y=function(t){if(t.target.classList.contains("info-button")){var n='[data-slide-id="'+t.target.getAttribute("data-slide-id")+'"]';o&&clearTimeout(o),o=setTimeout(function(){e.querySelector(".grid-image-wrapper"+n).classList.remove("info-view")},200)}},A=function(t){if(t.target.classList.contains("info-button")){var n='[data-slide-id="'+t.target.getAttribute("data-slide-id")+'"]';e.querySelector(".grid-image-wrapper"+n).classList.toggle("info-view")}},g=function(){if(window.innerWidth>m.default.mobileBreakpoint)return window.innerWidth*parseFloat(c().gutter)/100},w=function(e){e&&n&&(n.destroy(),n=null);var o=c();window.innerWidth<=m.default.mobileBreakpoint?t.forEach(function(e){p.ImageLoader.load(e,{mode:null,load:!0})}):"masonry"===o.galleryStyle?(n=new l.default(i,{gutter:window.innerWidth*parseFloat(o.gutter)/100,minColumns:2,maxColumns:2,childSelector:".grid-item-wrapper",imageWrapperSelector:".grid-image-wrapper",afterLayout:d,autoLoadImages:!0}),n.layout()):"horizontal"===o.galleryStyle?(n=new f.default(i,{gutter:window.innerWidth*parseFloat(o.gutter)/100,columns:2,childSelector:"grid-item-wrapper",imgWrapperSelector:"grid-image-wrapper",isFullWidthLandscape:o.isFullWidthLandscape,afterLayout:d,autoLoadImages:!0}),n.layout()):t.forEach(function(e){p.ImageLoader.load(e,{mode:null,load:!0})})},b=function(e){if(document.documentElement.clientWidth!==r){if(window.innerWidth<=m.default.mobileBreakpoint)n&&(n.destroy(),n=null),t.forEach(function(e){p.ImageLoader.load(e,{mode:null,load:!0})});else if(n){var o=g();n.layout({gutter:o})}else w(!1);r=document.documentElement.clientWidth}},k=(0,u.default)(b,120),x=function(){window.addEventListener("resize",k),(0,v.default)()?i.addEventListener("click",A):(i.addEventListener("mouseover",h),i.addEventListener("mouseout",y))},L=function(){w(!1)},E=function(){w(!1),x()},S=function(){k.cancel(),window.removeEventListener("resize",k),i.removeEventListener("mouseover",h),i.removeEventListener("mouseout",y),i.removeEventListener("click",A)};return E(),p.Tweak.watch(s,function(e){var t=["tweak-gallery-style","tweak-gallery-gutter","tweak-site-outer-padding","tweak-full-width-first-landscape"],n=t.some(function(t){return e.name===t});n&&w(!0),"tweak-show-gallery-image-captions"===e.name&&(i.removeEventListener("mouseover",h),i.removeEventListener("mouseout",y),i.removeEventListener("click",A),"on hover"===e.value.toLowerCase()&&(0,v.default)()?i.addEventListener("click",A):"on hover"===e.value.toLowerCase()&&(i.addEventListener("mouseover",h),i.addEventListener("mouseout",y)))}),{sync:L,destroy:S}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(36),a=o(r),s=n(156),u=o(s),c=n(164),l=o(c),d=n(170),f=o(d),p=n(89),h=n(181),v=o(h),y=n(182),m=o(y);t.default=i},function(e,t,n){function o(e,t,n){function o(t){var n=A,o=g;return A=g=void 0,L=t,b=e.apply(o,n)}function l(e){return L=e,k=setTimeout(p,t),E?o(e):b}function d(e){var n=e-x,o=e-L,i=t-n;return S?c(i,w-o):i}function f(e){var n=e-x,o=e-L;return void 0===x||n>=t||n<0||S&&o>=w}function p(){var e=r();return f(e)?h(e):void(k=setTimeout(p,d(e)))}function h(e){return k=void 0,T&&A?o(e):(A=g=void 0,b)}function v(){void 0!==k&&clearTimeout(k),L=0,A=x=g=k=void 0}function y(){return void 0===k?b:h(r())}function m(){var e=r(),n=f(e);if(A=arguments,g=this,x=e,n){if(void 0===k)return l(x);if(S)return k=setTimeout(p,t),o(x)}return void 0===k&&(k=setTimeout(p,t)),b}var A,g,w,b,k,x,L=0,E=!1,S=!1,T=!0;if("function"!=typeof e)throw new TypeError(s);return t=a(t)||0,i(n)&&(E=!!n.leading,S="maxWait"in n,w=S?u(a(n.maxWait)||0,t):w,T="trailing"in n?!!n.trailing:T),m.cancel=v,m.flush=y,m}var i=n(157),r=n(158),a=n(161),s="Expected a function",u=Math.max,c=Math.min;e.exports=o},function(e,t){function n(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}e.exports=n},function(e,t,n){var o=n(159),i=function(){return o.Date.now()};e.exports=i},function(e,t,n){var o=n(160),i="object"==typeof self&&self&&self.Object===Object&&self,r=o||i||Function("return this")();e.exports=r},function(e,t){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(t,function(){return this}())},function(e,t,n){function o(e){if("number"==typeof e)return e;if(r(e))return a;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var n=c.test(e);return n||l.test(e)?d(e.slice(2),n?2:8):u.test(e)?a:+e}var i=n(157),r=n(162),a=NaN,s=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,d=parseInt;e.exports=o},function(e,t,n){function o(e){return"symbol"==typeof e||i(e)&&s.call(e)==r}var i=n(163),r="[object Symbol]",a=Object.prototype,s=a.toString;e.exports=o},function(e,t){function n(e){return!!e&&"object"==typeof e}e.exports=n},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&s.return&&s.return()}finally{if(i)throw r}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(165),d=o(l),f=n(89),p={rootNode:"autocolumns-wrapper",childNodes:"autocolumns-item-wrapper",imageNodes:"autocolumns-image-wrapper"},h={minColumns:1,maxColumns:12,minColumnWidth:300,gutter:5,autoLoadImages:!1},v=function(e){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,u({},h,n)));return o.rootNode.classList.add(p.rootNode),o.childNodes.forEach(function(e){e.classList.add(p.childNodes);var t=e.querySelector(o.config.imageWrapperSelector);t&&t.classList.add(p.imageNodes)}),o}return a(t,e),c(t,[{key:"getImageRatio",value:function(e){if(""!==e.getAttribute("data-image-dimensions")){var t=e.getAttribute("data-image-dimensions").split("x").map(function(e){return parseFloat(e,10)}),n=s(t,2),o=n[0],i=n[1];return i/o}return 1}},{key:"setIntrinsicPadding",value:function(e){var t=this.getImageRatio(e.querySelector("img"));e.style.paddingBottom=Math.floor(100*t)+"%"}},{key:"loadImage",value:function(e){f.ImageLoader.load(e,{mode:"none",load:!0})}},{key:"getNumberOfColumns",value:function(e){var t=e+this.config.gutter,n=this.config.minColumnWidth+this.config.gutter,o=Math.floor(t/n);return o=Math.min(o,this.config.maxColumns),o=Math.max(o,this.config.minColumns),Math.max(o,1)}},{key:"getFinalColumnWidth",value:function(e,t){return(e-(t-1)*this.config.gutter)/t}},{key:"placeitem",value:function(e,t,n){e.style.top=n+"px",e.style.left=t+"px"}},{key:"afterChildLoaded",value:function(e){"function"==typeof this.config.afterChildLoaded&&this.config.afterChildLoaded(e)}},{key:"layout",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.beforeLayout(t);var n=this.rootNode.offsetWidth,o=this.getNumberOfColumns(n),i=this.getFinalColumnWidth(n,o),r=0,a=0,s=0,u=[];this.childNodes.forEach(function(t,n){var c=t.querySelector("img[data-src]"),l=void 0,d=void 0;t.style.width=i+"px",c&&(c.removeAttribute("data-load"),e.setIntrinsicPadding(t.querySelector("."+p.imageNodes)),e.config.autoLoadImages&&e.loadImage(c)),n<o?(e.placeitem(t,a,s),l=t.offsetTop,d=t.offsetHeight,u.push([a,l+d]),a+=i+e.config.gutter):(u.sort(function(e,t){return e[1]-t[1]}),s=u[0][1]+e.config.gutter,a=u[0][0],e.placeitem(t,a,s),u.splice(0,1),l=t.offsetTop,d=t.offsetHeight,u.push([a,l+d])),e.afterChildLoaded(t),r=Math.max(r,l+d)}),this.rootNode.style.height=r+"px",this.afterLayout()}},{key:"reset",value:function(){this.childNodes.forEach(function(e){var t=e.querySelector("."+p.imageNodes);t&&(t.style.paddingBottom=""),e.style.top="",e.style.left="",e.style.width=""})}},{key:"afterResize",value:function(){this.reset(),this.layout()}},{key:"destroy",value:function(){var e=this;this.beforeDestroy(),this.reset(),this.rootNode.style.height="",this.config.rootNode!==p.rootNode&&this.rootNode.classList.remove(p.rootNode),this.childNodes.forEach(function(t){e.config.childNodes!==p.childNodes&&t.classList.remove(p.childNodes);var n=t.querySelector("."+p.imageNodes);n&&e.config.imageNodes!==p.imageNodes&&n.classList.remove(p.imageNodes)}),this.afterDestroy()}}]),t}(d.default);t.default=v,e.exports=t.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(36),r=o(i),a=n(166),s=o(a),u=n(125),c=o(u),l=n(129),d=o(l),f=n(130),p=o(f),h=n(156),v={resizeHandler:!0,resizeDebounceTime:250,resizeMaxWait:2500},y=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((0,d.default)(this,e),1!==t.nodeType)throw new Error("rootNode must be a DOM Node!");this.rootNode=t,this.document=this.rootNode.ownerDocument,this.window=this.document.defaultView;var o=v;if(Object.defineProperty(this,"config",{configurable:!1,enumerable:!0,get:function(){return o},set:function(e){o=(0,c.default)({},o,e),(0,s.default)(o)}}),this.config=n,this.childNodes=[],this.config.childSelector)try{var i=this.rootNode.querySelectorAll(this.config.childSelector);this.childNodes=(0,r.default)(i)}catch(e){throw new Error("childNode error: "+e)}this.config.resizeHandler&&(this._boundResize=this._handleResize.bind(this),this._createResizeListeners()),this.hasRunInitialLayout=!1}return(0,p.default)(e,[{key:"_createResizeListeners",value:function(){var e=this,t=function(){"function"==typeof e.beforeResize&&e.beforeResize(),"function"==typeof e.config.beforeResize&&e.config.beforeResize(e.layout.bind(e))},n=function(){"function"==typeof e.afterResize?e.afterResize():e.layout(),"function"==typeof e.config.afterResize&&e.config.afterResize(e.layout.bind(e))};this._boundBeforeResize=h(t,this.config.resizeDebounceTime,{leading:!0,trailing:!1}),this._boundAfterResize=h(n,this.config.resizeDebounceTime,{maxWait:this.config.resizeMaxWait,leading:!1,trailing:!0})}},{key:"_handleResize",value:function(){this._boundBeforeResize&&this._boundBeforeResize(),this._boundAfterResize&&this._boundAfterResize()}},{key:"beforeLayout",value:function(e){this.config=e,this.hasRunInitialLayout||this.beforeInitialLayout(),"function"==typeof this.config.beforeLayout&&this.config.beforeLayout.apply(this)}},{key:"beforeInitialLayout",value:function(){"function"==typeof this.config.beforeInitialLayout&&this.config.beforeInitialLayout.apply(this)}},{key:"afterLayout",value:function(){this.hasRunInitialLayout||(this.afterInitialLayout(),this.hasRunInitialLayout=!0),"function"==typeof this.config.afterLayout&&this.config.afterLayout.apply(this)}},{key:"afterInitialLayout",value:function(){"function"==typeof this.config.afterInitialLayout&&this.config.afterInitialLayout.apply(this),this.config.resizeHandler&&this.window.addEventListener("resize",this._boundResize)}},{key:"beforeDestroy",value:function(){this.config.resizeHandler&&this.window.removeEventListener("resize",this._boundResize),"function"==typeof this.config.beforeDestroy&&this.config.beforeDestroy.apply(this)}},{key:"afterDestroy",value:function(){"function"==typeof this.config.afterDestroy&&this.config.afterDestroy.apply(this)}}]),e}();t.default=y,e.exports=t.default},function(e,t,n){e.exports={default:n(167),__esModule:!0}},function(e,t,n){n(168),e.exports=n(46).Object.freeze},function(e,t,n){var o=n(52),i=n(110).onFreeze;n(169)("freeze",function(e){return function(t){return e&&o(t)?e(i(t)):t}})},function(e,t,n){var o=n(44),i=n(46),r=n(55);e.exports=function(e,t){var n=(i.Object||{})[e]||Object[e],a={};a[e]=t(n),o(o.S+o.F*r(function(){n(1)}),"Object",a)}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(171),r=o(i),a=n(174),s=o(a),u=n(36),c=o(u),l=n(125),d=o(l),f=n(129),p=o(f),h=n(130),v=o(h),y=n(156),m=(o(y),n(89)),A={wrapperSelector:"autorows-wrapper",childSelector:"autorows-item-wrapper",imgWrapperSelector:"autorows-image-wrapper"},g={columns:4,gutter:5,autoLoadImages:!1,isFullWidthLandscape:!1},w=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((0,p.default)(this,e),this.rootNode=t,this.config=(0,d.default)({},g,n),!this.rootNode.nodeName)throw new Error("No root element given");t.classList.contains(A.wrapperSelector)||this.rootNode.classList.add(A.wrapperSelector),this.items=this.setupItems()}return(0,v.default)(e,[{key:"setupItems",value:function(){var e=this,t=(0,c.default)(this.rootNode.querySelectorAll("."+this.config.childSelector));t.forEach(function(t){t.classList.add(A.childSelector),t.querySelector("."+e.config.imgWrapperSelector).classList.add(A.imgWrapperSelector)})}},{key:"loadImage",value:function(e){m.ImageLoader.load(e,{mode:null,load:!0})}},{key:"getImageRatio",value:function(e){if(""!==e.getAttribute("data-image-dimensions")){var t=e.getAttribute("data-image-dimensions").split("x").map(function(e){return parseFloat(e,10)}),n=(0,s.default)(t,2),o=n[0],i=n[1];return 100*i/o}return 100}},{key:"setIntrinsicPadding",value:function(e){var t=this.getImageRatio(e.querySelector("img"));e.style.paddingBottom=t+"%"}},{key:"getRowWidthRatios",value:function(e){var t=0,n=600,o=e.map(function(e){var o=void 0;return o=""!==e.getAttribute("data-image-dimensions")?JSON.parse("["+e.getAttribute("data-image-dimensions").split("x")+"]"):[100,100],t+=o[0]*n/o[1],o});return o.map(function(e){var o=n/e[1];return e[0]*o/t})}},{key:"positionItemsInRow",value:function(e,t,n,o){var i=this,r=0;e.forEach(function(e,a){e.style.width=t[a]*n+"px",e.style.left=r+"px",e.style.top=o+"px",r+=Math.floor(t[a]*n+i.config.gutter)})}},{key:"afterLayout",value:function(e){this.rootNode.style.height=e+"px","function"==typeof this.config.afterLayout&&this.config.afterLayout()}},{key:"layout",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t&&(0,r.default)(t).forEach(function(n){e.config.hasOwnProperty(n)&&(e.config[n]=t[n])});for(var n=this.rootNode.offsetWidth-this.config.gutter*(this.config.columns-1),o=(0,c.default)(this.rootNode.querySelectorAll("."+this.config.childSelector)),i=(0,c.default)(this.rootNode.querySelectorAll("."+this.config.imgWrapperSelector+" img")),a=0,s=0,u=this.config.columns,l=0,d=o.slice(s,u),f=i.slice(s,u),p=o.length;p>0;){if(this.getImageRatio(f[0])<100&&this.config.isFullWidthLandscape||1===p)this.setIntrinsicPadding(f[0].parentNode),d[0].style.width=Math.ceil(this.rootNode.offsetWidth)+"px",d[0].style.left="0px",d[0].style.top=l+"px",l=Math.floor(d[0].offsetTop+d[0].offsetHeight+this.config.gutter-1),s+=1,u+=1,d=o.slice(s,u),f=i.slice(s,u),p--;else{var h=this.getRowWidthRatios(f);f.forEach(function(t){e.setIntrinsicPadding(t.parentNode)}),this.positionItemsInRow(d,h,n,l),l=Math.floor(d[0].offsetTop+d[0].offsetHeight+this.config.gutter-1),s+=this.config.columns,u+=this.config.columns,p-=this.config.columns,d=o.slice(s,u),f=i.slice(s,u)}a=l-this.config.gutter}i.forEach(function(t){e.config.autoLoadImages&&(t.removeAttribute("data-load"),e.loadImage(t))}),this.afterLayout(a)}},{key:"reset",value:function(){var e=this,t=this.rootNode.querySelectorAll("."+this.config.childSelector);(0,c.default)(t).forEach(function(t){t.style.top="",t.style.left="",t.style.width="",t.querySelector("."+e.config.imgWrapperSelector).style.paddingBottom=""}),this.rootNode.style.height=""}},{key:"afterResize",value:function(){this.reset(),this.layout()}},{key:"destroy",value:function(){var e=this;this.reset(),this.rootNode.classList.remove(A.wrapperSelector);var t=this.rootNode.querySelectorAll("."+A.childSelector);(0,c.default)(t).forEach(function(t){t.classList.remove(A.childSelector),t.querySelector("."+e.config.imgWrapperSelector).classList.remove(A.imgWrapperSelector)})}}]),e}();t.default=w},function(e,t,n){e.exports={default:n(172),__esModule:!0}},function(e,t,n){n(173),e.exports=n(46).Object.keys},function(e,t,n){var o=n(81),i=n(65);n(169)("keys",function(){return function(e){return i(o(e))}})},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=n(175),r=o(i),a=n(178),s=o(a);t.default=function(){function e(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var a,u=(0,s.default)(e);!(o=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&u.return&&u.return()}finally{if(i)throw r}}return n}return function(t,n){if(Array.isArray(t))return t;if((0,r.default)(Object(t)))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},function(e,t,n){e.exports={default:n(176),__esModule:!0}},function(e,t,n){n(102),n(38),e.exports=n(177)},function(e,t,n){var o=n(87),i=n(79)("iterator"),r=n(61);e.exports=n(46).isIterable=function(e){var t=Object(e);return void 0!==t[i]||"@@iterator"in t||r.hasOwnProperty(o(t))}},function(e,t,n){e.exports={default:n(179),__esModule:!0}},function(e,t,n){n(102),n(38),e.exports=n(180)},function(e,t,n){var o=n(51),i=n(86);e.exports=n(46).getIterator=function(e){var t=i(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return o(t.call(e))}},function(e,t){"use strict";e.exports=function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||window.navigator.msMaxTouchPoints)}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={isAuthenticated:document.documentElement.classList.contains("authenticated-account"),debug:!0,mobileBreakpoint:640,tabletBreakpoint:1024};t.default=n},function(e,t){"use strict";function n(e){var t=e.querySelector(".sqs-video-wrapper"),n=function(e){e.preventDefault();var n=new window.Y.Squarespace.Lightbox2({content:window.Y.one(t),controls:{previous:!1,next:!1}});n.render()},o=function(){t&&(t.parentNode.removeChild(t),e.addEventListener("click",n))},i=function(){e.removeEventListener("click",n)};return o(),{sync:o,destroy:i}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.querySelector(".site-header"),n=void 0,o={header:".site-header",siteTitle:".site-branding h1",siteTagline:".site-tagline",icon:".nav-toggle",nav:".main-navigation",socialNav:".header-social-icons-with-nav",socialRight:".header-social-icons-right",cartIcon:".Cart--icon",customerAccountsIcon:".user-accounts-link--icon"},i=["tweak-site-title-font","tweak-site-tagline-font","tweak-nav-font","tweak-logo-height","tweak-header-outer-padding","tweak-header-element-spacing","tweak-display-social-icons","tweak-social-icons-on-right","tweak-nav-link-spacing","tweak-nav-style","tweak-menu-icon-size","tweak-template-social-icon-size","tweak-cart-link-display"],r=function(e){var t=parseFloat(e);return(0,u.default)(t)?0:t},s=function(t){var n={};return t.forEach(function(t){var i=e.querySelector(o[t]);i?n[t]=r(window.getComputedStyle(i).width):n[t]=0}),n},c=function(){var e="true"===d.Tweak.getValue("tweak-display-social-icons"),i="icon on right"===d.Tweak.getValue("tweak-cart-link-display").toLowerCase(),r="icon on right"===d.Tweak.getValue("tweak-user-account-link-position").toLowerCase(),u=window.innerWidth<=v.default.tabletBreakpoint?1.5:1,c=parseFloat(d.Tweak.getValue("tweak-header-element-spacing")),l=c*u*window.innerWidth/100,f=s((0,a.default)(o)),p=f.siteTitle+f.siteTagline,h=f.header;document.body.classList.remove("mobile-style-nav","hide-tagline","move-social"),h-=f.icon+l,e&&(h-=f.socialRight+l),i&&(h-=f.cartIcon+l),r&&(h-=f.customerAccountsIcon+l),p+n+l>h&&document.body.classList.add("mobile-style-nav"),p+l>h&&document.body.classList.add("hide-tagline"),f.siteTitle>h&&document.body.classList.add("move-social"),
t.classList.add("show")},f=function(){var t=window.getComputedStyle(e.querySelector(".main-navigation")).width;n=r(parseInt(t,10)),c()},h=function(){t.classList.remove("show"),c()},y=(0,l.default)(h,120),m=function(){t.classList.remove("show"),window.removeEventListener("resize",y)},A=function(){var t=new p.default([e.querySelector(".site-branding")]);t.check().then(f),window.addEventListener("resize",y)};return A(),d.Tweak.watch(i,c),{sync:f,destroy:m}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(171),a=o(r),s=n(185),u=o(s),c=n(156),l=o(c),d=n(89),f=n(188),p=o(f),h=n(182),v=o(h);t.default=i},function(e,t,n){e.exports={default:n(186),__esModule:!0}},function(e,t,n){n(187),e.exports=n(46).Number.isNaN},function(e,t,n){var o=n(44);o(o.S,"Number",{isNaN:function(e){return e!=e}})},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(189),r=o(i);t.default=r.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(138),r=o(i),a=n(129),s=o(a),u=n(130),c=o(u),l="#%-&GgWwOoqQLlAaSs680",d=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;(0,s.default)(this,e),this.getFontFamilies(t),this.createFontElements(),this.initialWidths=this.getWidths(),this.hasLoaded=!1,this.maxCheckCount=n}return(0,c.default)(e,[{key:"destroy",value:function(){clearInterval(this.checkInterval);var e=this.testWrapper.parentNode;e&&e.removeChild(this.testWrapper)}},{key:"check",value:function(){var e=this;return new r.default(function(t){var n=e.maxCheckCount,o=0;e.checkInterval=setInterval(function(){(o===n||e.allChanged())&&(e.hasLoaded=!0,t({checkCount:o,maxCheckCount:n}),e.destroy()),o++},50)})}},{key:"getFontFamilies",value:function(e){this.fontFamilies=e.map(function(e){return getComputedStyle(e)["font-family"]})}},{key:"createFontElements",value:function(){var e=document.createElement("div");this.testWrapper=e,e.style.cssText="position: absolute; visibility: hidden; z-index: -1; pointer-events: none;",e.setAttribute("aria-role","hidden"),this.fontFamilies.forEach(function(t){var n=document.createElement("span");n.style.cssText="font-family: "+t+"font-size: 300px; white-space: nowrap;",n.setAttribute("aria-role","hidden"),n.innerHTML=l,e.appendChild(n)}),document.body.appendChild(e)}},{key:"getWidths",value:function(){var e=Array.prototype.slice.call(this.testWrapper.childNodes);return e.map(function(e){return e.offsetWidth})}},{key:"allChanged",value:function(){var e=this;return this.getWidths().every(function(t,n){return t!==e.initialWidths[n]})}}]),e}();t.default=d},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=void 0,n=e.querySelector(".site-header"),o=function(){var o=window.pageYOffset,i=e.offsetHeight;o>0&&n.classList.add("hide-header"),(o<t||o>=i||0===o)&&n.classList.remove("hide-header"),document.body.classList.remove("swap-header-color"),o>=i-40&&document.body.classList.add("swap-header-color"),t=window.pageYOffset},i=(0,a.default)(o,10),r=function(){t=window.pageYOffset},s=function(){window.removeEventListener("scroll",i),r(),window.addEventListener("scroll",i)},c=(0,u.default)(s,120);window.addEventListener("resize",c),window.addEventListener("scroll",i);var l=function(){n.classList.remove("hide-header"),document.body.classList.remove("swap-header-color"),window.removeEventListener("scroll",i),window.removeEventListener("resize",c)};return window.onLoad=function(){r()},{sync:r,destroy:l}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(191),a=o(r),s=n(156),u=o(s);t.default=i},function(e,t,n){function o(e,t,n){var o=!0,s=!0;if("function"!=typeof e)throw new TypeError(a);return r(n)&&(o="leading"in n?!!n.leading:o,s="trailing"in n?!!n.trailing:s),i(e,t,{leading:o,maxWait:t,trailing:s})}var i=n(156),r=n(157),a="Expected a function";e.exports=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=void 0,n=["tweak-site-outer-padding","tweak-index-slideshow-on","tweak-index-slideshow-delay","tweak-index-inactive-on-load"],o=e.querySelector(".index-main-image"),i=function(){e.classList.remove("hide-desc"),f()||(0,c.default)()&&p()?(t&&t.destroy(),t=new s.default(e,{selector:v(),slideshowDelay:h(),afterSetSlide:function(t){var n=t===o;d()&&!n?e.classList.add("hide-desc"):e.classList.remove("hide-desc")}}),t.init()):t&&t.destroy()},a=function(){t&&t.destroy()};return r.Tweak.watch(n,i),i(),{destroy:a}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(89),a=n(193),s=o(a),u=n(181),c=o(u),l=function(){return"true"===r.Tweak.getValue("tweak-index-inactive-on-load")},d=function(){return"true"===r.Tweak.getValue("tweak-hide-index-desc-on-hover")},f=function(){return"true"===r.Tweak.getValue("tweak-index-slideshow-on")},p=function(){return"true"===r.Tweak.getValue("tweak-index-slideshow-touch-on")},h=function(){return 1e3*parseFloat(r.Tweak.getValue("tweak-index-slideshow-delay"))},v=function(){return l()?".collection-images .image-container":".collection-images .image-container:not(.index-main-image)"};t.default=i},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=n(36),r=o(i),a=n(129),s=o(a),u=n(130),c=o(u),l=n(194),d=".collection-nav",f=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,s.default)(this,e),this.rootNode=t,this.config=n,this.imageWrappers=(0,r.default)(t.querySelectorAll(n.selector)),this.collectionNav=t.querySelector(d),this.collectionLinks=(0,r.default)(t.querySelectorAll(d+" div")),this.slideInterval=null,this._currentSlide=0,this.boundHandleMouseover=this.handleMouseover.bind(this),this.boundHandleMouseleave=this.handleMouseleave.bind(this)}return(0,c.default)(e,[{key:"startSlideshow",value:function(){var e=this;this.rootNode.classList.remove("animation-paused"),this.slideInterval=setInterval(function(){"number"==typeof e.currentSlide&&e.currentSlide<e.imageWrappers.length-1?e.currentSlide++:e.currentSlide=0},this.config.slideshowDelay)}},{key:"handleMouseover",value:function(e){e.target.classList.contains("collection-nav-item-span")&&(this.slideInterval&&clearInterval(this.slideInterval),this.rootNode.classList.add("animation-paused"))}},{key:"handleMouseleave",value:function(){this.slideInterval&&clearInterval(this.slideInterval),(0,l.setActive)(this.imageWrappers[this.currentSlide]),(0,l.setActive)((0,l.getCurrentLink)(this.imageWrappers[this._currentSlide],this.collectionLinks)),this.startSlideshow()}},{key:"destroy",value:function(){this.slideInterval&&clearInterval(this.slideInterval),this.collectionNav.removeEventListener("mouseover",this.boundHandleMouseover),this.collectionNav.removeEventListener("mouseleave",this.boundHandleMouseleave)}},{key:"init",value:function(){this.startSlideshow(),this.collectionNav.addEventListener("mouseover",this.boundHandleMouseover),this.collectionNav.addEventListener("mouseleave",this.boundHandleMouseleave)}},{key:"currentSlide",get:function(){return this._currentSlide},set:function(e){this._currentSlide=e||0,this.imageWrappers.forEach(l.removeActive),this.collectionLinks.forEach(l.removeActive),(0,l.setActive)(this.imageWrappers[e]),(0,l.setActive)((0,l.getCurrentLink)(this.imageWrappers[e],this.collectionLinks)),"function"==typeof this.config.afterSetSlide&&this.config.afterSetSlide(this.imageWrappers[e],e)}}]),e}();e.exports=f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.setActive=function(e){return e&&e.classList.add("active")},t.removeActive=function(e){return e&&e.classList.remove("active")},t.getCurrentLink=function(e,t){return t.find(function(t){return t.getAttribute("data-url-id")===e.getAttribute("data-url-id")})}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.querySelector(".collection-nav"),n=e.querySelector(".collection-nav-desc-wrapper"),o=e.querySelector(".collection-desc"),i=document.querySelector(".site-header"),r=function(){return{descPosition:s.Tweak.getValue("tweak-index-desc-position").toLowerCase(),descVisible:"true"===s.Tweak.getValue("tweak-show-index-desc"),hasDescription:null!==o,menuDescSpacing:parseFloat(s.Tweak.getValue("tweak-index-menu-desc-spacing")),menuPadding:parseFloat(s.Tweak.getValue("tweak-index-menu-padding")),menuPosition:s.Tweak.getValue("tweak-index-nav-position").toLowerCase(),spacingMultiplier:window.innerWidth<=d.default.tabletBreakpoint?1.5:1}},u=["tweak-header-outer-padding","tweak-logo-height","tweak-index-menu-font","tweak-site-outer-padding","tweak-index-menu-font-min","tweak-index-desc-font","tweak-index-desc-font-min","tweak-index-nav-position","tweak-index-nav-layout","tweak-index-menu-max-width","tweak-index-menu-spacing","tweak-index-menu-padding","tweak-index-desc-position","tweak-index-desc-max-width","tweak-index-menu-desc-spacing","tweak-show-index-desc"],l=function(e,r){var a=i.offsetHeight,s=e.menuPadding*window.innerWidth/100,u=window.innerHeight,c=r?n:t,l="left"===e.menuPosition||"center"===e.menuPosition,d=u-a-s;e.descVisible&&e.hasDescription&&"middle"===e.descPosition&&!r?d=u/2-o.offsetHeight/2-s:e.descVisible&&e.hasDescription&&l&&!r?d=u-2*o.getBoundingClientRect().bottom:e.descVisible&&e.hasDescription&&!r?d=u-o.getBoundingClientRect().bottom-s:!e.descVisible&&l&&(d=u-2*a);var f=c.offsetHeight;return f>d},f=function(){n.classList.remove("too-tall","show"),t.style.cssText="",n.style.cssText=""},p=function(){var e=r(),a="middle"===e.descPosition&&("left"===e.menuPosition||"center"===e.menuPosition),s=i.offsetHeight;if(e.descVisible&&e.hasDescription&&"middle"===e.descPosition&&!a?s=window.innerHeight/2+o.offsetHeight/2:e.descVisible&&e.hasDescription&&!a&&(s=o.getBoundingClientRect().bottom),l(e,a)){var u=a?n:t;n.classList.add("too-tall"),u.style.top=s+"px",u.style.bottom="auto",u.style.paddingBottom=e.menuPadding+"vw"}n.classList.add("show")},h=function(){f(),p()},v=(0,a.default)(h,120),y=function(){window.removeEventListener("resize",v)},m=function(){var t=new c.default([e.querySelector(".collection-nav")]);t.check().then(p),window.addEventListener("resize",v)};return m(),s.Tweak.watch(u,function(e){f(),p()}),{destroy:y}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(156),a=o(r),s=n(89),u=n(188),c=o(u),l=n(182),d=o(l);t.default=i},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=void 0,n=function(){var n=window.pageYOffset;n>=t-20?e.classList.add("scrollable"):e.classList.remove("scrollable")},o=(0,a.default)(n,10),i=function(){t=document.querySelector(".content-outer-wrapper").offsetHeight,window.addEventListener("scroll",o)},r=function(){window.removeEventListener("scroll",o),i()},s=(0,u.default)(r,120),c=function(){window.removeEventListener("scroll",o),window.removeEventListener("resize",s)};return window.addEventListener("resize",s),(0,l.default)(document.querySelector(".content-outer-wrapper"),function(){i()}),{destroy:c}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(191),a=o(r),s=n(156),u=o(s),c=n(197),l=o(c);t.default=i},function(e,t,n){var o,i;/*!
	 * imagesLoaded v4.1.0
	 * JavaScript is all like "You images are done yet or what?"
	 * MIT License
	 */
! function(r, a) {
    "use strict";
    o = [n(198)], i = function(e) {
        return a(r, e)
    }.apply(t, o), !(void 0 !== i && (e.exports = i))
}(window, function(e, t) {
    "use strict";

    function n(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function o(e) {
        var t = [];
        if (Array.isArray(e)) t = e;
        else if ("number" == typeof e.length)
            for (var n = 0; n < e.length; n++) t.push(e[n]);
        else t.push(e);
        return t
    }

    function i(e, t, r) {
        return this instanceof i ? ("string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = n({}, this.options), "function" == typeof t ? r = t : n(this.options, t), r && this.on("always", r), this.getImages(), s && (this.jqDeferred = new s.Deferred), void setTimeout(function() {
            this.check()
        }.bind(this))) : new i(e, t, r)
    }

    function r(e) {
        this.img = e
    }

    function a(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }
    var s = e.jQuery,
        u = e.console;
    i.prototype = Object.create(t.prototype), i.prototype.options = {}, i.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, i.prototype.addElementImages = function(e) {
        "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && c[t]) {
            for (var n = e.querySelectorAll("img"), o = 0; o < n.length; o++) {
                var i = n[o];
                this.addImage(i)
            }
            if ("string" == typeof this.options.background) {
                var r = e.querySelectorAll(this.options.background);
                for (o = 0; o < r.length; o++) {
                    var a = r[o];
                    this.addElementBackgroundImages(a)
                }
            }
        }
    };
    var c = {
        1: !0,
        9: !0,
        11: !0
    };
    return i.prototype.addElementBackgroundImages = function(e) {
        var t = getComputedStyle(e);
        if (t)
            for (var n = /url\((['"])?(.*?)\1\)/gi, o = n.exec(t.backgroundImage); null !== o;) {
                var i = o && o[2];
                i && this.addBackground(i, e), o = n.exec(t.backgroundImage)
            }
    }, i.prototype.addImage = function(e) {
        var t = new r(e);
        this.images.push(t)
    }, i.prototype.addBackground = function(e, t) {
        var n = new a(e, t);
        this.images.push(n)
    }, i.prototype.check = function() {
        function e(e, n, o) {
            setTimeout(function() {
                t.progress(e, n, o)
            })
        }
        var t = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(t) {
            t.once("progress", e), t.check()
        }) : void this.complete()
    }, i.prototype.progress = function(e, t, n) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && u && u.log("progress: " + n, e, t)
    }, i.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, r.prototype = Object.create(t.prototype), r.prototype.check = function() {
        var e = this.getIsImageComplete();
        return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, r.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }, r.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
    }, r.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, r.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, r.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, r.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, a.prototype = Object.create(r.prototype), a.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var e = this.getIsImageComplete();
        e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, a.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, a.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
    }, i.makeJQueryPlugin = function(t) {
        t = t || e.jQuery, t && (s = t, s.fn.imagesLoaded = function(e, t) {
            var n = new i(this, e, t);
            return n.jqDeferred.promise(s(this))
        })
    }, i.makeJQueryPlugin(), i
})
},
function(e, t, n) {
    var o, i;
    ! function(r, a) {
        o = a, i = "function" == typeof o ? o.call(t, n, t, e) : o, !(void 0 !== i && (e.exports = i))
    }("undefined" != typeof window ? window : this, function() {
        "use strict";

        function e() {}
        var t = e.prototype;
        return t.on = function(e, t) {
            if (e && t) {
                var n = this._events = this._events || {},
                    o = n[e] = n[e] || [];
                return o.indexOf(t) == -1 && o.push(t), this
            }
        }, t.once = function(e, t) {
            if (e && t) {
                this.on(e, t);
                var n = this._onceEvents = this._onceEvents || {},
                    o = n[e] = n[e] || {};
                return o[t] = !0, this
            }
        }, t.off = function(e, t) {
            var n = this._events && this._events[e];
            if (n && n.length) {
                var o = n.indexOf(t);
                return o != -1 && n.splice(o, 1), this
            }
        }, t.emitEvent = function(e, t) {
            var n = this._events && this._events[e];
            if (n && n.length) {
                var o = 0,
                    i = n[o];
                t = t || [];
                for (var r = this._onceEvents && this._onceEvents[e]; i;) {
                    var a = r && r[i];
                    a && (this.off(e, i), delete r[i]), i.apply(this, t), o += a ? 0 : 1, i = n[o]
                }
                return this
            }
        }, e
    })
},
function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        var t = e.querySelector(".collection-nav"),
            n = (0, a.default)(e.querySelectorAll(".collection-nav-item")),
            o = (0, a.default)(e.querySelectorAll(".collection-images .image-container")),
            i = (0, a.default)(e.querySelectorAll(".collection-images .image-container img[data-src]")),
            r = "true" === d.Tweak.getValue("tweak-hide-index-desc-on-hover"),
            s = "true" === d.Tweak.getValue("tweak-index-slideshow-on"),
            c = n.find(h),
            v = o.find(h),
            y = function() {
                var t = "true" === d.Tweak.getValue("tweak-index-inactive-on-load");
                return t && !e.classList.contains("index-item-navigation")
            },
            m = function(t) {
                if (t.target.classList.contains("collection-nav-item-span")) {
                    var i = t.target.closest("[data-url-id]"),
                        a = i.getAttribute("data-url-id"),
                        s = e.querySelector('.collection-images .image-container[data-url-id="' + a + '"]');
                    n.forEach(f.removeActive), o.forEach(f.removeActive), (0, f.setActive)(i), (0, f.setActive)(s), e.classList.add("nav-hovered"), r && e.classList.add("hide-desc")
                }
            },
            A = function() {
                n.forEach(f.removeActive), o.forEach(f.removeActive), s && !e.classList.contains("index-item-navigation") || (c ? ((0, f.setActive)(c), (0, f.setActive)(v)) : y() ? (0, f.setActive)(o[0]) : ((0, f.setActive)(o[1]), (0, f.setActive)((0, f.getCurrentLink)(o[1], n)))), e.classList.remove("nav-hovered"), s || e.classList.remove("hide-desc")
            },
            g = function() {
                i.forEach(function(e) {
                    d.ImageLoader.load(e, {
                        mode: "fill",
                        load: !0
                    })
                })
            },
            w = function() {
                e.style.height = window.innerHeight + "px", g()
            },
            b = (0, u.default)(w, 120),
            k = function() {
                t.addEventListener("mouseover", m), t.addEventListener("mouseleave", A), window.addEventListener("resize", b)
            },
            x = function() {
                t.removeEventListener("mouseover", m), t.removeEventListener("mouseleave", A), window.removeEventListener("resize", b)
            },
            L = function() {
                (0, l.default)() && e.classList.add("has-touch"), e.style.height = window.innerHeight + "px", k(), g(), e.classList.contains("index-item-navigation") && c ? ((0, f.setActive)(c), (0, f.setActive)(v)) : y() ? (0, f.setActive)(o[0]) : ((0, f.setActive)(o[1]), (0, f.setActive)((0, f.getCurrentLink)(o[1], n)))
            },
            E = function() {
                x(), k(), n.forEach(f.removeActive), o.forEach(f.removeActive), y() ? (0, f.setActive)(o[0]) : ((0, f.setActive)(o[1]), (0, f.setActive)((0, f.getCurrentLink)(o[1], n)))
            };
        return d.Tweak.watch(p, E), L(), {
            destroy: x
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(36),
        a = o(r),
        s = n(156),
        u = o(s);
    n(200);
    var c = n(181),
        l = o(c),
        d = n(89),
        f = n(194),
        p = ["tweak-index-inactive-on-load", "tweak-index-slideshow-on", "tweak-hide-index-desc-on-hover"],
        h = function(e) {
            return e.classList.contains("active-page")
        };
    t.default = i
},
function(e, t, n) {
    n(154),
        function(e) {
            "function" != typeof e.closest && (e.closest = function(e) {
                for (var t = this; t && 1 === t.nodeType;) {
                    if (t.matches(e)) return t;
                    t = t.parentNode
                }
                return null
            })
        }(window.Element.prototype)
},
function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    // NOTE: This function removes the navigation listener somehow
    function i(e) {

        var t = e.querySelector(".collection-desc"),
            n = document.querySelector(".site-header"),
            o = function() {
                t.style.top = n.offsetHeight + "px"
            },
            i = (0, a.default)(o, 120),
            r = function(e) {
                t.style.top = "", window.removeEventListener("resize", i), "top" === e.value.toLowerCase() && (o(), window.addEventListener("resize", i))
            },
            u = function() {
                window.removeEventListener("resize", i)
            },
            c = function() {
                var e = "top" === s.Tweak.getValue("tweak-index-desc-position").toLowerCase();
                t && e && (o(), window.addEventListener("resize", i))
            };
        return c(), s.Tweak.watch("tweak-index-desc-position", r), {
            destroy: u
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(156),
        a = o(r),
        s = n(89);
    t.default = i
},
function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        var t = e.querySelector(".main-content"),
            n = e.querySelector(".site-header"),
            o = function() {
                var o = e.classList.contains("collection-type-gallery") || e.classList.contains("collection-type-index");
                t.style.paddingTop = "";
                var i = e.matches(".tweak-show-page-banner-image-always.has-main-image:not(.view-item)") || e.matches(".tweak-show-page-banner-image-in-index.has-index-nav.has-main-image:not(.view-item)") || e.matches(".tweak-show-page-banner-image-not-in-index:not(.has-index-nav).has-main-image:not(.view-item)");
                if (!o && !i) {
                    var r = n.offsetHeight;
                    t.style.paddingTop = r + "px"
                }
            },
            i = (0, a.default)(o, 120),
            r = ["tweak-header-outer-padding", "tweak-display-social-icons", "tweak-site-title-font", "tweak-site-tagline-font", "tweak-logo-height", "tweak-nav-font", "tweak-menu-icon-size", "tweak-nav-style", "tweak-template-social-icon-size", "tweak-show-page-banner-image"],
            u = function() {
                window.removeEventListener("resize", i)
            };
        return o(), window.addEventListener("resize", i), s.Tweak.watch(r, o), {
            sync: o,
            destroy: u
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(156),
        a = o(r);
    n(154);
    var s = n(89);
    t.default = i
},
function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        var t = document.querySelector(".sqs-slide-container"),
            n = "true" === c.Tweak.getValue("tweak-site-ajax-loading-enable");
        if (n && !a.default.isAuthenticated && !t) {
            new d.default({
                enableCache: !0,
                updateMatrix: [{
                    selector: "body",
                    updateHTML: !1,
                    updateAttrs: !0
                }, {
                    selector: "head meta",
                    updateHTML: !1,
                    updateAttrs: !0
                }, {
                    selector: "head title",
                    updateHTML: !0,
                    updateAttrs: !0
                }, {
                    selector: ".content-outer-wrapper",
                    updateHTML: !1,
                    updateAttrs: !0
                }, {
                    selector: ".index-gallery-wrapper",
                    updateHTML: !1,
                    updateAttrs: !0
                }, {
                    selector: ".gallery-wrapper",
                    updateHTML: !1,
                    updateAttrs: !0
                }, {
                    selector: ".nav-item.folder",
                    updateHTML: !1,
                    updateAttrs: !0
                }, {
                    selector: ".main-content",
                    updateHTML: !0,
                    updateAttrs: !1
                }, {
                    selector: ".index-nav",
                    updateHTML: !0,
                    updateAttrs: !1
                }, {
                    selector: ".page-banner-wrapper",
                    updateHTML: !1,
                    updateAttrs: !0
                }, {
                    selector: ".page-banner-image-wrapper",
                    updateHTML: !1,
                    updateAttrs: !0
                }, {
                    selector: ".title-card-wrapper",
                    updateHTML: !1,
                    updateAttrs: !0
                }, {
                    selector: ".main-navigation",
                    updateHTML: !1,
                    updateAttrs: !0
                }, {
                    selector: ".header-social-icons-with-nav",
                    updateHMTL: !1,
                    updateAttrs: !0
                }, {
                    selector: ".header-social-icons-on-right",
                    updateHMTL: !1,
                    updateAttrs: !0
                }, {
                    selector: ".header-social-icons--overlay",
                    updateHMTL: !1,
                    updateAttrs: !0
                }, {
                    selector: ".overlay-nav-wrapper",
                    updateHMTL: !1,
                    updateAttrs: !0
                }, {
                    selector: 'meta[property="og:title"]',
                    updateAttrs: !0
                }, {
                    selector: 'meta[property="og:latitude"]',
                    updateAttrs: !0
                }, {
                    selector: 'meta[property="og:longitude"]',
                    updateAttrs: !0
                }, {
                    selector: 'meta[property="og:url"]',
                    updateAttrs: !0
                }, {
                    selector: 'meta[property="og:type"]',
                    updateAttrs: !0
                }, {
                    selector: 'meta[property="og:description"]',
                    updateAttrs: !0
                }, {
                    selector: 'meta[property="og:image"]',
                    updateAttrs: !0
                }, {
                    selector: 'meta[itemprop="name"]',
                    updateAttrs: !0
                }, {
                    selector: 'meta[itemprop="url"]',
                    updateAttrs: !0
                }, {
                    selector: 'meta[itemprop="description"]',
                    updateAttrs: !0
                }, {
                    selector: 'meta[itemprop="thumbnailUrl"]',
                    updateAttrs: !0
                }, {
                    selector: 'meta[itemprop="image"]',
                    updateAttrs: !0
                }, {
                    selector: 'meta[name="twitter:title"]',
                    updateAttrs: !0
                }, {
                    selector: 'meta[name="twitter:image"]',
                    updateAttrs: !0
                }, {
                    selector: 'meta[name="twitter:url"]',
                    updateAttrs: !0
                }, {
                    selector: 'meta[name="twitter:card"]',
                    updateAttrs: !0
                }, {
                    selector: 'meta[name="twitter:description"]',
                    updateAttrs: !0
                }, {
                    selector: 'meta[name="twitter:url"]',
                    updateAttrs: !0
                }, {
                    selector: 'meta[name="description"]',
                    updateAttrs: !0
                }, {
                    selector: 'link[rel="canonical"]',
                    updateAttrs: !0
                }, {
                    selector: 'link[rel="image_src"]',
                    updateAttrs: !0
                }, {
                    selector: 'link[rel="alternate"]',
                    updateAttrs: !0
                }, {
                    selector: 'script[data-name="static-context"]',
                    updateScript: !0
                }],
                onClickExceptions: ['[href^="/commerce"]'],
                onRequestExceptions: ["sqs-slide-container"],
                onLoadDelay: 500,
                onLoad: function() {
                    document.querySelector(".mercury-transition-wrapper").classList.remove("fade"), c.Lifecycle.init(), u.default.refresh()
                },
                onUnload: function(e) {
                    c.Lifecycle.destroy()
                },
                onNavigate: function() {
                    document.querySelector(".mercury-transition-wrapper").classList.add("fade")
                }
            })
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(182),
        a = o(r),
        s = n(35),
        u = o(s),
        c = n(89),
        l = n(204),
        d = o(l);
    t.default = i
},
function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n(96);
    var i = n(205),
        r = o(i);
    t.default = r.default, e.exports = t.default
},
function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(129),
        r = o(i),
        a = n(130),
        s = o(a),
        u = n(206),
        c = n(207),
        l = n(208),
        d = function() {
            function e(t) {
                return (0, r.default)(this, e), window.history && window.history.pushState && document.querySelector ? void(this.validateAndAssignConfig(t) && ("scrollRestoration" in window.history && (window.history.scrollRestoration = "manual"), this.enableCache && (this.cache = {}), this.loadEvent = new CustomEvent("mercury:load"), this.unloadEvent = new CustomEvent("mercury:unload"), this.navigateEvent = new CustomEvent("mercury:navigate"), this.boundOnClick = this.onClick.bind(this), this.boundOnPopState = this.onPopState.bind(this), this.bindListeners())) : void console.error("Your browser does not support Mercury.")
            }
            return (0, s.default)(e, [{
                key: "validateAndAssignConfig",
                value: function(e) {
                    var t = e.updateMatrix,
                        n = e.onClickExceptions,
                        o = void 0 === n ? [] : n,
                        i = e.onRequestExceptions,
                        r = void 0 === i ? [] : i,
                        a = e.enableCache,
                        s = e.timeout,
                        u = e.onLoad,
                        d = e.onUnload,
                        // f = e.onNavigate,   I commented this out and change it to true because onNavigate is not found
                        f = e.onNavigate ? e.onNavigate : true,    // this is throwing error because true is not a function
                        p = e.onLoadDelay;
                    return !!(0, l.isValidUpdateMatrix)(t) && (this.updateMatrix = t, this.timeout = (0, l.validateOptionalParam)(s, "number", 5e3), this.enableCache = (0, l.validateOptionalParam)(a, "boolean", !1), this.onLoad = (0, l.validateOptionalParam)(u, "function", function() {}), this.onUnload = (0, l.validateOptionalParam)(d, "function", function() {}), this.onNavigate = (0, l.validateOptionalParam)(f, "function", function() {}), this.onLoadDelay = (0, l.validateOnLoadDelay)(p), Array.isArray(o) ? this.onClickExceptionSelector = c.BASE_ON_CLICK_EXCEPTIONS.concat(o).join(",") : this.onClickExceptionSelector = c.BASE_ON_CLICK_EXCEPTIONS.join(","), Array.isArray(r) && r.length && (this.onRequestExceptionRegex = new RegExp(r.join("|"), "gi")), !0)
                }
            }, {
                key: "replaceHistoryStateWithScrollPosition",
                value: function() {
                    var e = window.location.pathname + window.location.search,
                        t = {
                            url: e,
                            scroll: {
                                x: window.pageXOffset,
                                y: window.pageYOffset
                            },
                            type: "mercury"
                        };
                    window.history.replaceState(t, document.title, e)
                }
            }, {
                key: "updateDOM",
                value: function(e, t) {
                    var n = this,
                        o = new DOMParser,
                        i = o.parseFromString(t, "text/html");
                    this.updateMatrix.forEach(function(t) {
                        var o = document.querySelector(t.selector),
                            r = i.querySelector(t.selector);
                        if (o && r) {
                            if (t.updateHTML) {
                                var a = n.enableCache && n.cache[e] && n.cache[e][t.selector],
                                    s = a ? n.cache[e][t.selector] : r.innerHTML;
                                o.innerHTML = s
                            }
                            t.updateAttrs && (0, u.replaceAttributes)(o, r), t.updateScript && (0, u.replaceScript)(o, r)
                        } else o && o.parentNode.removeChild(o)
                    }), window.scrollTo(0, 0)
                }
            }, {
                key: "makeRequest",
                value: function(e, t, n) {
                    var o = this;
                    window.dispatchEvent(this.navigateEvent), this.onNavigate && this.onNavigate(), this.replaceHistoryStateWithScrollPosition(), this.XHR = new XMLHttpRequest, this.XHR.onreadystatechange = function(i) {
                        if (i.target.readyState === XMLHttpRequest.DONE) {
                            if (200 !== i.target.status) return void(window.location = e);
                            try {
                                var r = o.onRequestExceptionRegex && o.onRequestExceptionRegex.constructor === RegExp,
                                    a = null !== i.target.responseText.match(o.onRequestExceptionRegex);
                                if (r && a) return void(window.location = e);
                                window.dispatchEvent(o.unloadEvent), o.onLoadDelay ? o.onLoadDelayTimeout = window.setTimeout(function() {
                                    o.modifyPageAndHistory(e, t, n, i.target.responseText)
                                }, o.onLoadDelay) : o.modifyPageAndHistory(e, t, n, i.target.responseText)
                            } catch (e) {
                                console.error(e)
                            }
                        }
                    }, this.XHR.ontimeout = function() {
                        window.location = e
                    }, this.XHR.onerror = function() {
                        window.location = e
                    }, this.XHR.open("GET", e, !0), this.XHR.timeout = this.timeout, this.XHR.send()
                }
            }, {
                key: "modifyPageAndHistory",
                value: function(e, t, n, o) {

                	// console.log('bundle: ', e, e.value)
                	// HACK XIAO: I added this hack to throttle message

                    if (!t) {
                        var i = {
                            url: e,
                            type: "mercury"
                        };
                        window.history.pushState(i, document.title, e)
                    }
                    this.updateDOM(e, o), n && n(), window.dispatchEvent(this.loadEvent)
                }
            }, {
                key: "isKeyModified",
                value: function(e) {
                    return e.metaKey || e.ctrlKey || e.altKey || e.shiftKey
                }
            }, {
                key: "onClick",
                value: function(e) {
                    if (!this.isKeyModified(e)) {
                        for (var t = e.target; t && t !== document.body && "A" !== t.tagName.toUpperCase();) t = t.parentElement;
                        t && t !== document.body && !t.matches(this.onClickExceptionSelector) && (e.preventDefault(), this.XHR && (this.XHR.abort(), window.clearTimeout(this.onLoadDelayTimeout)), this.makeRequest(t.getAttribute("href"), !1, null))
                    }
                }
            }, {
                key: "onPopState",
                value: function(e) {
                    if (e.state && "mercury" === e.state.type) {
                        var t = function() {
                            e.state.scroll ? window.scrollTo(e.state.scroll.x, e.state.scroll.y) : window.scrollTo(0, 0)
                        };
                        this.XHR && (this.XHR.abort(), window.clearTimeout(this.onLoadDelayTimeout)), this.makeRequest(e.state.url, !0, t)
                    }
                }
            }, {
                key: "commitCacheEntry",
                value: function(e, t) {
                    this.enableCache && e && t && (this.cache[e] = this.cache[e] || {}, this.cache[e][t] = document.querySelector(t).innerHTML)
                }
            }, {
                key: "bindListeners",
                value: function() {
                    document.body.addEventListener("click", this.boundOnClick), window.addEventListener("popstate", this.boundOnPopState), window.addEventListener(this.loadEvent.type, this.onLoad), window.addEventListener(this.unloadEvent.type, this.onUnload)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.XHR && this.XHR.abort(), window.clearTimeout(this.onLoadDelayTimeout), document.body.removeEventListener("click", this.boundOnClick), window.removeEventListener("popstate", this.boundOnPopState), window.removeEventListener(this.loadEvent.type, this.onLoad), window.removeEventListener(this.unloadEvent.type, this.onUnload)
                }
            }]), e
        }();
    t.default = d, e.exports = t.default
},
function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.replaceScript = t.replaceAttributes = void 0;
    var i = n(36),
        r = o(i),
        a = t.replaceAttributes = function(e, t) {
            for (var n = (0, r.default)(e.attributes), o = 0; o < n.length; o++) e.removeAttribute(n[o].name);
            for (var i = 0; i < t.attributes.length; i++) e.setAttribute(t.attributes[i].name, t.attributes[i].value)
        };
    t.replaceScript = function(e, t) {
        var n = e.parentElement,
            o = document.createElement("script");
        o.innerHTML = t.innerHTML, a(o, e), n.removeChild(e), n.appendChild(o)
    }
},
function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.BASE_ON_CLICK_EXCEPTIONS = ["a:not([href])", '[href^="http"]', '[href^="#"]', '[href^="/#"]', '[target="_blank"]', '[href^="tel"]', '[href^="mailto"]', '[href^="javascript"]']
},
function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.validateOnLoadDelay = t.validateOptionalParam = t.isValidUpdateMatrix = void 0;
    var i = n(99),
        r = o(i);
    t.isValidUpdateMatrix = function(e) {
        return Array.isArray(e) ? e.every(function(e) {
            var t = e.selector,
                n = e.updateHTML,
                o = e.updateAttrs,
                i = e.updateScript;
            if ("string" != typeof t) return console.error(t + " is not a valid selector."), !1;
            var r = "undefined" != typeof n && "boolean" != typeof n,
                a = "undefined" != typeof o && "boolean" != typeof o,
                s = "undefined" != typeof i && "boolean" != typeof i;
            return !(r || a || s) || (console.error("Non-boolean updateHTML, updateAttrs, or updateScript provided for selector " + t + "."), !1)
        }) : (console.error("updateMatrix is not an Array"), !1)
    }, t.validateOptionalParam = function(e, t, n) {
        return void 0 === e ? n : ("undefined" == typeof e ? "undefined" : (0, r.default)(e)) !== t ? (console.error(e + " is not a " + t + "."), n) : e
    }, t.validateOnLoadDelay = function(e) {
        return void 0 === e ? 0 : "number" != typeof e ? (console.error(e + " is not a number."), 0) : e < 0 ? (console.error(e + " is less than 0."), 0) : e
    }
},
function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        var t = function() {
                return (0, a.default)() && document.body.classList.contains("mobile-style-nav")
            },
            n = e.querySelector(".overlay-nav-wrapper"),
            o = function(e) {
                n.classList.contains("too-tall") || e.preventDefault()
            },
            i = function() {
                document.body.classList.contains("nav-open") ? (n.removeEventListener("touchmove", o, !1), document.body.classList.remove("nav-open")) : (t() && n.addEventListener("touchmove", o, !1), document.body.classList.add("nav-open"))
            };
        e.querySelector(".nav-toggle").addEventListener("click", i)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(181),
        a = o(r);
    t.default = i
},
function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        var t = e.querySelector(".overlay-nav-wrapper"),
            n = e.querySelector(".overlay-nav-inner-wrapper"),
            o = e.querySelector(".site-header"),
            i = e.querySelector(".overlay-nav-inner-wrapper .folder"),
            r = function() {
                var e = n.offsetHeight,
                    i = o.offsetHeight,
                    r = window.innerHeight - 2 * i;
                e > r && (t.classList.add("too-tall"), t.style.paddingTop = i + "px")
            },
            s = function() {
                t.classList.remove("too-tall"), t.style.paddingTop = "", r()
            },
            u = function(e) {
                e.target.parentNode.classList.contains("folder") && s()
            },
            c = (0, a.default)(s, 120),
            l = function() {
                t.classList.remove("too-tall"), t.style.paddingTop = "", t.removeEventListener("click", u), window.removeEventListener("resize", c)
            };
        return window.addEventListener("resize", c), i && t.addEventListener("click", u), r(), {
            destroy: l
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(156),
        a = o(r);
    t.default = i
},
function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        var t = void 0,
            n = function() {
                t && s.ImageLoader.load(t, {
                    mode: "fill",
                    load: !0
                })
            },
            o = (0, a.default)(n, 120),
            i = function() {
                t = e.querySelector(".page-banner-wrapper img"), t && s.ImageLoader.load(t, {
                    mode: "fill",
                    load: !0
                })
            },
            r = function() {
                window.removeEventListener("resize", o)
            };
        return i(), window.addEventListener("resize", o), s.Tweak.watch(["tweak-page-banner-image-height", "tweak-show-page-banner-image"], function(e) {
            t && s.ImageLoader.load(t, {
                mode: "fill",
                load: !0
            })
        }), {
            sync: i,
            destroy: r
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(156),
        a = o(r),
        s = n(89);
    t.default = i
},
function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        var t = document.querySelector(".sqs-slide-container"),
            n = "true" === c.Tweak.getValue("tweak-site-ajax-loading-enable"),
            o = e.querySelector(".site-branding .image") ? "h1.image img" : ".site-title",
            i = function(e) {
                return e.target.parentNode.getAttribute("href")
            },
            r = function(t) {
                if (t.target.parentNode.hasAttribute("href")) {
                    var n = 'a[href="' + i(t) + '"]';
                    e.querySelector(".folder-open") && (0, a.default)(e.querySelectorAll(".folder-open")).forEach(function(e) {
                        e.classList.remove("folder-open")
                    }), e.querySelector(".main-navigation .active") && (e.querySelector(".main-navigation .active").classList.remove("active"), e.querySelector(".main-navigation--overlay .active").classList.remove("active")), e.querySelector(".main-navigation " + n) && e.querySelector(".main-navigation " + n).parentNode.classList.add("active"), e.querySelector(".main-navigation--overlay " + n) && e.querySelector(".main-navigation--overlay " + n).parentNode.classList.add("active")
                }
            };
        !n || u.default.isAuthenticated || t || (e.querySelector(".main-navigation").addEventListener("click", r), e.querySelector(".main-navigation--overlay").addEventListener("click", r), e.querySelector(o).addEventListener("click", r))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(36),
        a = o(r),
        s = n(182),
        u = o(s),
        c = n(89);
    t.default = i
},
function(e, t, n) {
    "use strict";

    function o(e) {
        var t = e.querySelector(".header-social-icons-with-nav");
        if (t) {
            var n = e.querySelector(".nav-toggle"),
                o = e.querySelector(".header-social-icons--overlay"),
                r = e.querySelector(".nav-item:nth-last-child(2)"),
                a = "right" === i.Tweak.getValue("tweak-nav-position").toLowerCase(),
                s = function() {
                    var e = document.createElement("transition-tester"),
                        t = {
                            transition: "transitionend",
                            OTransition: "oTransitionEnd",
                            MozTransition: "transitionend",
                            WebkitTransition: "webkitTransitionEnd"
                        };
                    for (var n in t)
                        if (void 0 !== e.style[n]) return t[n]
                },
                u = s(),
                c = function e(n) {
                    "opacity" === n.propertyName && (document.body.classList.contains("nav-open") ? (t.classList.add("show"), o.classList.add("show")) : (t.classList.remove("show"), o.classList.remove("show")), r.removeEventListener(u, e))
                },
                l = function() {
                    !a || document.body.classList.contains("mobile-style-nav") ? r.addEventListener(u, c) : document.body.classList.contains("nav-open") ? t.classList.add("show") : t.classList.remove("show")
                },
                d = function() {
                    n.removeEventListener("click", l), r.removeEventListener(u, c)
                };
            return n.addEventListener("click", l), {
                destroy: d
            }
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(89);
    t.default = o
},
function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function i(e) {
        var t = ["tweak-show-gallery-title-overlay", "tweak-show-page-title-overlay", "tweak-header-outer-padding", "tweak-display-social-icons", "tweak-site-title-font", "tweak-site-tagline-font", "tweak-logo-height", "tweak-nav-font", "tweak-menu-icon-size", "tweak-nav-style", "tweak-template-social-icon-size", "tweak-gallery-title-position", "tweak-page-title-position"],
            n = e.querySelector(".title-desc-inner-wrapper"),
            o = e.querySelector(".title-card"),
            i = document.body.classList.contains("collection-type-gallery"),
            r = function() {
                return document.querySelector(".site-header").offsetHeight
            },
            s = function() {
                var e = i ? "tweak-gallery-title-position" : "tweak-page-title-position",
                    t = c.Tweak.getValue(e).toLowerCase().indexOf("top") >= 0;
                return t ? void(n.style.marginTop = r() + "px") : void(n.style.marginTop = "")
            },
            l = function() {
                window.pageYOffset > 0 ? e.classList.add("hide-title-card") : e.classList.remove("hide-title-card")
            },
            d = function() {
                e.classList.add("hide-title-card")
            },
            f = (0, u.default)(s, 120),
            p = (0, a.default)(l, 10),
            h = function() {
                window.addEventListener("scroll", p), o.addEventListener("click", d), window.addEventListener("resize", f)
            },
            v = function() {
                var e = i ? c.Tweak.getValue("tweak-show-gallery-title-overlay").toLowerCase() : c.Tweak.getValue("tweak-show-page-title-overlay").toLowerCase();
                "never" !== e && h()
            },
            y = function() {
                window.removeEventListener("scroll", p), o.removeEventListener("click", d), window.removeEventListener("resize", f)
            },
            m = function() {
                s()
            };
        return m(), v(), c.Tweak.watch(t, function(e) {
            "tweak-show-gallery-title-overlay" === e.name || "tweak-show-page-title-overlay" === e.name ? (y(), "never" !== e.value.toLowerCase() && h()) : s()
        }), {
            destroy: y
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(191),
        a = o(r),
        s = n(156),
        u = o(s),
        c = n(89);
    t.default = i
},
function(e, t, n) {
    "use strict";

    function o(e) {
        var t = function(e) {
                e.preventDefault(), i.UserAccounts.openAccountScreen()
            },
            n = function() {
                var n = i.UserAccounts.isUserAuthenticated() ? ".sign-in" : ".my-account",
                    o = e.querySelector(n);
                o && o.parentNode.removeChild(o), e.classList.add("loaded"), e.addEventListener("click", t)
            },
            o = function() {
                e.removeEventListener("click", t)
            };
        return n(), {
            destroy: o
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(89);
    t.default = o
}]);	 
// !function(r,a){"use strict";o=[n(198)],i=function(e){return a(r,e)}.apply(t,o),!(void 0!==i&&(e.exports=i))}(window,function(e,t){"use strict";function n(e,t){for(var n in t)e[n]=t[n];return e}function o(e){var t=[];if(Array.isArray(e))t=e;else if("number"==typeof e.length)for(var n=0;n<e.length;n++)t.push(e[n]);else t.push(e);return t}function i(e,t,r){return this instanceof i?("string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=n({},this.options),"function"==typeof t?r=t:n(this.options,t),r&&this.on("always",r),this.getImages(),s&&(this.jqDeferred=new s.Deferred),void setTimeout(function(){this.check()}.bind(this))):new i(e,t,r)}function r(e){this.img=e}function a(e,t){this.url=e,this.element=t,this.img=new Image}var s=e.jQuery,u=e.console;i.prototype=Object.create(t.prototype),i.prototype.options={},i.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},i.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&c[t]){for(var n=e.querySelectorAll("img"),o=0;o<n.length;o++){var i=n[o];this.addImage(i)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(o=0;o<r.length;o++){var a=r[o];this.addElementBackgroundImages(a)}}}};var c={1:!0,9:!0,11:!0};return i.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var n=/url\((['"])?(.*?)\1\)/gi,o=n.exec(t.backgroundImage);null!==o;){var i=o&&o[2];i&&this.addBackground(i,e),o=n.exec(t.backgroundImage)}},i.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},i.prototype.addBackground=function(e,t){var n=new a(e,t);this.images.push(n)},i.prototype.check=function(){function e(e,n,o){setTimeout(function(){t.progress(e,n,o)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},i.prototype.progress=function(e,t,n){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&u&&u.log("progress: "+n,e,t)},i.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},a.prototype=Object.create(r.prototype),a.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},a.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},a.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},i.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(s=t,s.fn.imagesLoaded=function(e,t){var n=new i(this,e,t);return n.jqDeferred.promise(s(this))})},i.makeJQueryPlugin(),i})},function(e,t,n){var o,i;!function(r,a){o=a,i="function"==typeof o?o.call(t,n,t,e):o,!(void 0!==i&&(e.exports=i))}("undefined"!=typeof window?window:this,function(){"use strict";function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var n=this._events=this._events||{},o=n[e]=n[e]||[];return o.indexOf(t)==-1&&o.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var n=this._onceEvents=this._onceEvents||{},o=n[e]=n[e]||{};return o[t]=!0,this}},t.off=function(e,t){var n=this._events&&this._events[e];if(n&&n.length){var o=n.indexOf(t);return o!=-1&&n.splice(o,1),this}},t.emitEvent=function(e,t){var n=this._events&&this._events[e];if(n&&n.length){var o=0,i=n[o];t=t||[];for(var r=this._onceEvents&&this._onceEvents[e];i;){var a=r&&r[i];a&&(this.off(e,i),delete r[i]),i.apply(this,t),o+=a?0:1,i=n[o]}return this}},e})},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.querySelector(".collection-nav"),n=(0,a.default)(e.querySelectorAll(".collection-nav-item")),o=(0,a.default)(e.querySelectorAll(".collection-images .image-container")),i=(0,a.default)(e.querySelectorAll(".collection-images .image-container img[data-src]")),r="true"===d.Tweak.getValue("tweak-hide-index-desc-on-hover"),s="true"===d.Tweak.getValue("tweak-index-slideshow-on"),c=n.find(h),v=o.find(h),y=function(){var t="true"===d.Tweak.getValue("tweak-index-inactive-on-load");return t&&!e.classList.contains("index-item-navigation")},m=function(t){if(t.target.classList.contains("collection-nav-item-span")){var i=t.target.closest("[data-url-id]"),a=i.getAttribute("data-url-id"),s=e.querySelector('.collection-images .image-container[data-url-id="'+a+'"]');n.forEach(f.removeActive),o.forEach(f.removeActive),(0,f.setActive)(i),(0,f.setActive)(s),e.classList.add("nav-hovered"),r&&e.classList.add("hide-desc")}},A=function(){n.forEach(f.removeActive),o.forEach(f.removeActive),s&&!e.classList.contains("index-item-navigation")||(c?((0,f.setActive)(c),(0,f.setActive)(v)):y()?(0,f.setActive)(o[0]):((0,f.setActive)(o[1]),(0,f.setActive)((0,f.getCurrentLink)(o[1],n)))),e.classList.remove("nav-hovered"),s||e.classList.remove("hide-desc")},g=function(){i.forEach(function(e){d.ImageLoader.load(e,{mode:"fill",load:!0})})},w=function(){e.style.height=window.innerHeight+"px",g()},b=(0,u.default)(w,120),k=function(){t.addEventListener("mouseover",m),t.addEventListener("mouseleave",A),window.addEventListener("resize",b)},x=function(){t.removeEventListener("mouseover",m),t.removeEventListener("mouseleave",A),window.removeEventListener("resize",b)},L=function(){(0,l.default)()&&e.classList.add("has-touch"),e.style.height=window.innerHeight+"px",k(),g(),e.classList.contains("index-item-navigation")&&c?((0,f.setActive)(c),(0,f.setActive)(v)):y()?(0,f.setActive)(o[0]):((0,f.setActive)(o[1]),(0,f.setActive)((0,f.getCurrentLink)(o[1],n)))},E=function(){x(),k(),n.forEach(f.removeActive),o.forEach(f.removeActive),y()?(0,f.setActive)(o[0]):((0,f.setActive)(o[1]),(0,f.setActive)((0,f.getCurrentLink)(o[1],n)))};return d.Tweak.watch(p,E),L(),{destroy:x}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(36),a=o(r),s=n(156),u=o(s);n(200);var c=n(181),l=o(c),d=n(89),f=n(194),p=["tweak-index-inactive-on-load","tweak-index-slideshow-on","tweak-hide-index-desc-on-hover"],h=function(e){return e.classList.contains("active-page")};t.default=i},function(e,t,n){n(154),function(e){"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.querySelector(".collection-desc"),n=document.querySelector(".site-header"),o=function(){t.style.top=n.offsetHeight+"px"},i=(0,a.default)(o,120),r=function(e){t.style.top="",window.removeEventListener("resize",i),"top"===e.value.toLowerCase()&&(o(),window.addEventListener("resize",i))},u=function(){window.removeEventListener("resize",i)},c=function(){var e="top"===s.Tweak.getValue("tweak-index-desc-position").toLowerCase();t&&e&&(o(),window.addEventListener("resize",i))};return c(),s.Tweak.watch("tweak-index-desc-position",r),{destroy:u}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(156),a=o(r),s=n(89);t.default=i},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.querySelector(".main-content"),n=e.querySelector(".site-header"),o=function(){var o=e.classList.contains("collection-type-gallery")||e.classList.contains("collection-type-index");t.style.paddingTop="";var i=e.matches(".tweak-show-page-banner-image-always.has-main-image:not(.view-item)")||e.matches(".tweak-show-page-banner-image-in-index.has-index-nav.has-main-image:not(.view-item)")||e.matches(".tweak-show-page-banner-image-not-in-index:not(.has-index-nav).has-main-image:not(.view-item)");if(!o&&!i){var r=n.offsetHeight;t.style.paddingTop=r+"px"}},i=(0,a.default)(o,120),r=["tweak-header-outer-padding","tweak-display-social-icons","tweak-site-title-font","tweak-site-tagline-font","tweak-logo-height","tweak-nav-font","tweak-menu-icon-size","tweak-nav-style","tweak-template-social-icon-size","tweak-show-page-banner-image"],u=function(){window.removeEventListener("resize",i)};return o(),window.addEventListener("resize",i),s.Tweak.watch(r,o),{sync:o,destroy:u}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(156),a=o(r);n(154);var s=n(89);t.default=i},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=document.querySelector(".sqs-slide-container"),n="true"===c.Tweak.getValue("tweak-site-ajax-loading-enable");if(n&&!a.default.isAuthenticated&&!t){new d.default({enableCache:!0,updateMatrix:[{selector:"body",updateHTML:!1,updateAttrs:!0},{selector:"head meta",updateHTML:!1,updateAttrs:!0},{selector:"head title",updateHTML:!0,updateAttrs:!0},{selector:".content-outer-wrapper",updateHTML:!1,updateAttrs:!0},{selector:".index-gallery-wrapper",updateHTML:!1,updateAttrs:!0},{selector:".gallery-wrapper",updateHTML:!1,updateAttrs:!0},{selector:".nav-item.folder",updateHTML:!1,updateAttrs:!0},{selector:".main-content",updateHTML:!0,updateAttrs:!1},{selector:".index-nav",updateHTML:!0,updateAttrs:!1},{selector:".page-banner-wrapper",updateHTML:!1,updateAttrs:!0},{selector:".page-banner-image-wrapper",updateHTML:!1,updateAttrs:!0},{selector:".title-card-wrapper",updateHTML:!1,updateAttrs:!0},{selector:".main-navigation",updateHTML:!1,updateAttrs:!0},{selector:".header-social-icons-with-nav",updateHMTL:!1,updateAttrs:!0},{selector:".header-social-icons-on-right",updateHMTL:!1,updateAttrs:!0},{selector:".header-social-icons--overlay",updateHMTL:!1,updateAttrs:!0},{selector:".overlay-nav-wrapper",updateHMTL:!1,updateAttrs:!0},{selector:'meta[property="og:title"]',updateAttrs:!0},{selector:'meta[property="og:latitude"]',updateAttrs:!0},{selector:'meta[property="og:longitude"]',updateAttrs:!0},{selector:'meta[property="og:url"]',updateAttrs:!0},{selector:'meta[property="og:type"]',updateAttrs:!0},{selector:'meta[property="og:description"]',updateAttrs:!0},{selector:'meta[property="og:image"]',updateAttrs:!0},{selector:'meta[itemprop="name"]',updateAttrs:!0},{selector:'meta[itemprop="url"]',updateAttrs:!0},{selector:'meta[itemprop="description"]',updateAttrs:!0},{selector:'meta[itemprop="thumbnailUrl"]',updateAttrs:!0},{selector:'meta[itemprop="image"]',updateAttrs:!0},{selector:'meta[name="twitter:title"]',updateAttrs:!0},{selector:'meta[name="twitter:image"]',updateAttrs:!0},{selector:'meta[name="twitter:url"]',updateAttrs:!0},{selector:'meta[name="twitter:card"]',updateAttrs:!0},{selector:'meta[name="twitter:description"]',updateAttrs:!0},{selector:'meta[name="twitter:url"]',updateAttrs:!0},{selector:'meta[name="description"]',updateAttrs:!0},{selector:'link[rel="canonical"]',updateAttrs:!0},{selector:'link[rel="image_src"]',updateAttrs:!0},{selector:'link[rel="alternate"]',updateAttrs:!0},{selector:'script[data-name="static-context"]',updateScript:!0}],onClickExceptions:['[href^="/commerce"]'],onRequestExceptions:["sqs-slide-container"],onLoadDelay:500,onLoad:function(){document.querySelector(".mercury-transition-wrapper").classList.remove("fade"),c.Lifecycle.init(),u.default.refresh()},onUnload:function(e){c.Lifecycle.destroy()},onNavigate:function(){document.querySelector(".mercury-transition-wrapper").classList.add("fade")}})}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(182),a=o(r),s=n(35),u=o(s),c=n(89),l=n(204),d=o(l);t.default=i},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),n(96);var i=n(205),r=o(i);t.default=r.default,e.exports=t.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(129),r=o(i),a=n(130),s=o(a),u=n(206),c=n(207),l=n(208),d=function(){function e(t){return(0,r.default)(this,e),window.history&&window.history.pushState&&document.querySelector?void(this.validateAndAssignConfig(t)&&("scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),this.enableCache&&(this.cache={}),this.loadEvent=new CustomEvent("mercury:load"),this.unloadEvent=new CustomEvent("mercury:unload"),this.navigateEvent=new CustomEvent("mercury:navigate"),this.boundOnClick=this.onClick.bind(this),this.boundOnPopState=this.onPopState.bind(this),this.bindListeners())):void console.error("Your browser does not support Mercury.")}return(0,s.default)(e,[{key:"validateAndAssignConfig",value:function(e){var t=e.updateMatrix,n=e.onClickExceptions,o=void 0===n?[]:n,i=e.onRequestExceptions,r=void 0===i?[]:i,a=e.enableCache,s=e.timeout,u=e.onLoad,d=e.onUnload,f=e.onNavigate,p=e.onLoadDelay;return!!(0,l.isValidUpdateMatrix)(t)&&(this.updateMatrix=t,this.timeout=(0,l.validateOptionalParam)(s,"number",5e3),this.enableCache=(0,l.validateOptionalParam)(a,"boolean",!1),this.onLoad=(0,l.validateOptionalParam)(u,"function",function(){}),this.onUnload=(0,l.validateOptionalParam)(d,"function",function(){}),this.onNavigate=(0,l.validateOptionalParam)(f,"function",function(){}),this.onLoadDelay=(0,l.validateOnLoadDelay)(p),Array.isArray(o)?this.onClickExceptionSelector=c.BASE_ON_CLICK_EXCEPTIONS.concat(o).join(","):this.onClickExceptionSelector=c.BASE_ON_CLICK_EXCEPTIONS.join(","),Array.isArray(r)&&r.length&&(this.onRequestExceptionRegex=new RegExp(r.join("|"),"gi")),!0)}},{key:"replaceHistoryStateWithScrollPosition",value:function(){var e=window.location.pathname+window.location.search,t={url:e,scroll:{x:window.pageXOffset,y:window.pageYOffset},type:"mercury"};window.history.replaceState(t,document.title,e)}},{key:"updateDOM",value:function(e,t){var n=this,o=new DOMParser,i=o.parseFromString(t,"text/html");this.updateMatrix.forEach(function(t){var o=document.querySelector(t.selector),r=i.querySelector(t.selector);if(o&&r){if(t.updateHTML){var a=n.enableCache&&n.cache[e]&&n.cache[e][t.selector],s=a?n.cache[e][t.selector]:r.innerHTML;o.innerHTML=s}t.updateAttrs&&(0,u.replaceAttributes)(o,r),t.updateScript&&(0,u.replaceScript)(o,r)}else o&&o.parentNode.removeChild(o)}),window.scrollTo(0,0)}},{key:"makeRequest",value:function(e,t,n){var o=this;window.dispatchEvent(this.navigateEvent),this.onNavigate&&this.onNavigate(),this.replaceHistoryStateWithScrollPosition(),this.XHR=new XMLHttpRequest,this.XHR.onreadystatechange=function(i){if(i.target.readyState===XMLHttpRequest.DONE){if(200!==i.target.status)return void(window.location=e);try{var r=o.onRequestExceptionRegex&&o.onRequestExceptionRegex.constructor===RegExp,a=null!==i.target.responseText.match(o.onRequestExceptionRegex);if(r&&a)return void(window.location=e);window.dispatchEvent(o.unloadEvent),o.onLoadDelay?o.onLoadDelayTimeout=window.setTimeout(function(){o.modifyPageAndHistory(e,t,n,i.target.responseText)},o.onLoadDelay):o.modifyPageAndHistory(e,t,n,i.target.responseText)}catch(e){console.error(e)}}},this.XHR.ontimeout=function(){window.location=e},this.XHR.onerror=function(){window.location=e},this.XHR.open("GET",e,!0),this.XHR.timeout=this.timeout,this.XHR.send()}},{key:"modifyPageAndHistory",value:function(e,t,n,o){if(!t){var i={url:e,type:"mercury"};window.history.pushState(i,document.title,e)}this.updateDOM(e,o),n&&n(),window.dispatchEvent(this.loadEvent)}},{key:"isKeyModified",value:function(e){return e.metaKey||e.ctrlKey||e.altKey||e.shiftKey}},{key:"onClick",value:function(e){if(!this.isKeyModified(e)){for(var t=e.target;t&&t!==document.body&&"A"!==t.tagName.toUpperCase();)t=t.parentElement;t&&t!==document.body&&!t.matches(this.onClickExceptionSelector)&&(e.preventDefault(),this.XHR&&(this.XHR.abort(),window.clearTimeout(this.onLoadDelayTimeout)),this.makeRequest(t.getAttribute("href"),!1,null))}}},{key:"onPopState",value:function(e){if(e.state&&"mercury"===e.state.type){var t=function(){e.state.scroll?window.scrollTo(e.state.scroll.x,e.state.scroll.y):window.scrollTo(0,0)};this.XHR&&(this.XHR.abort(),window.clearTimeout(this.onLoadDelayTimeout)),this.makeRequest(e.state.url,!0,t)}}},{key:"commitCacheEntry",value:function(e,t){this.enableCache&&e&&t&&(this.cache[e]=this.cache[e]||{},this.cache[e][t]=document.querySelector(t).innerHTML)}},{key:"bindListeners",value:function(){document.body.addEventListener("click",this.boundOnClick),window.addEventListener("popstate",this.boundOnPopState),window.addEventListener(this.loadEvent.type,this.onLoad),window.addEventListener(this.unloadEvent.type,this.onUnload)}},{key:"destroy",value:function(){this.XHR&&this.XHR.abort(),window.clearTimeout(this.onLoadDelayTimeout),document.body.removeEventListener("click",this.boundOnClick),window.removeEventListener("popstate",this.boundOnPopState),window.removeEventListener(this.loadEvent.type,this.onLoad),window.removeEventListener(this.unloadEvent.type,this.onUnload)}}]),e}();t.default=d,e.exports=t.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.replaceScript=t.replaceAttributes=void 0;var i=n(36),r=o(i),a=t.replaceAttributes=function(e,t){for(var n=(0,r.default)(e.attributes),o=0;o<n.length;o++)e.removeAttribute(n[o].name);for(var i=0;i<t.attributes.length;i++)e.setAttribute(t.attributes[i].name,t.attributes[i].value)};t.replaceScript=function(e,t){var n=e.parentElement,o=document.createElement("script");o.innerHTML=t.innerHTML,a(o,e),n.removeChild(e),n.appendChild(o)}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.BASE_ON_CLICK_EXCEPTIONS=["a:not([href])",'[href^="http"]','[href^="#"]','[href^="/#"]','[target="_blank"]','[href^="tel"]','[href^="mailto"]','[href^="javascript"]']},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.validateOnLoadDelay=t.validateOptionalParam=t.isValidUpdateMatrix=void 0;var i=n(99),r=o(i);t.isValidUpdateMatrix=function(e){return Array.isArray(e)?e.every(function(e){var t=e.selector,n=e.updateHTML,o=e.updateAttrs,i=e.updateScript;if("string"!=typeof t)return console.error(t+" is not a valid selector."),!1;var r="undefined"!=typeof n&&"boolean"!=typeof n,a="undefined"!=typeof o&&"boolean"!=typeof o,s="undefined"!=typeof i&&"boolean"!=typeof i;return!(r||a||s)||(console.error("Non-boolean updateHTML, updateAttrs, or updateScript provided for selector "+t+"."),!1)}):(console.error("updateMatrix is not an Array"),!1)},t.validateOptionalParam=function(e,t,n){return void 0===e?n:("undefined"==typeof e?"undefined":(0,r.default)(e))!==t?(console.error(e+" is not a "+t+"."),n):e},t.validateOnLoadDelay=function(e){return void 0===e?0:"number"!=typeof e?(console.error(e+" is not a number."),0):e<0?(console.error(e+" is less than 0."),0):e}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=function(){return(0,a.default)()&&document.body.classList.contains("mobile-style-nav")},n=e.querySelector(".overlay-nav-wrapper"),o=function(e){n.classList.contains("too-tall")||e.preventDefault()},i=function(){document.body.classList.contains("nav-open")?(n.removeEventListener("touchmove",o,!1),document.body.classList.remove("nav-open")):(t()&&n.addEventListener("touchmove",o,!1),document.body.classList.add("nav-open"))};e.querySelector(".nav-toggle").addEventListener("click",i)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(181),a=o(r);t.default=i},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.querySelector(".overlay-nav-wrapper"),n=e.querySelector(".overlay-nav-inner-wrapper"),o=e.querySelector(".site-header"),i=e.querySelector(".overlay-nav-inner-wrapper .folder"),r=function(){var e=n.offsetHeight,i=o.offsetHeight,r=window.innerHeight-2*i;e>r&&(t.classList.add("too-tall"),t.style.paddingTop=i+"px")},s=function(){t.classList.remove("too-tall"),t.style.paddingTop="",r()},u=function(e){e.target.parentNode.classList.contains("folder")&&s()},c=(0,a.default)(s,120),l=function(){t.classList.remove("too-tall"),t.style.paddingTop="",t.removeEventListener("click",u),window.removeEventListener("resize",c)};return window.addEventListener("resize",c),i&&t.addEventListener("click",u),r(),{destroy:l}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(156),a=o(r);t.default=i},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=void 0,n=function(){t&&s.ImageLoader.load(t,{mode:"fill",load:!0})},o=(0,a.default)(n,120),i=function(){t=e.querySelector(".page-banner-wrapper img"),t&&s.ImageLoader.load(t,{mode:"fill",load:!0})},r=function(){window.removeEventListener("resize",o)};return i(),window.addEventListener("resize",o),s.Tweak.watch(["tweak-page-banner-image-height","tweak-show-page-banner-image"],function(e){t&&s.ImageLoader.load(t,{mode:"fill",load:!0})}),{sync:i,destroy:r}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(156),a=o(r),s=n(89);t.default=i},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=document.querySelector(".sqs-slide-container"),n="true"===c.Tweak.getValue("tweak-site-ajax-loading-enable"),o=e.querySelector(".site-branding .image")?"h1.image img":".site-title",i=function(e){return e.target.parentNode.getAttribute("href")},r=function(t){if(t.target.parentNode.hasAttribute("href")){var n='a[href="'+i(t)+'"]';e.querySelector(".folder-open")&&(0,a.default)(e.querySelectorAll(".folder-open")).forEach(function(e){e.classList.remove("folder-open")}),e.querySelector(".main-navigation .active")&&(e.querySelector(".main-navigation .active").classList.remove("active"),e.querySelector(".main-navigation--overlay .active").classList.remove("active")),e.querySelector(".main-navigation "+n)&&e.querySelector(".main-navigation "+n).parentNode.classList.add("active"),e.querySelector(".main-navigation--overlay "+n)&&e.querySelector(".main-navigation--overlay "+n).parentNode.classList.add("active")}};!n||u.default.isAuthenticated||t||(e.querySelector(".main-navigation").addEventListener("click",r),e.querySelector(".main-navigation--overlay").addEventListener("click",r),e.querySelector(o).addEventListener("click",r))}Object.defineProperty(t,"__esModule",{value:!0});var r=n(36),a=o(r),s=n(182),u=o(s),c=n(89);t.default=i},function(e,t,n){"use strict";function o(e){var t=e.querySelector(".header-social-icons-with-nav");if(t){var n=e.querySelector(".nav-toggle"),o=e.querySelector(".header-social-icons--overlay"),r=e.querySelector(".nav-item:nth-last-child(2)"),a="right"===i.Tweak.getValue("tweak-nav-position").toLowerCase(),s=function(){var e=document.createElement("transition-tester"),t={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var n in t)if(void 0!==e.style[n])return t[n]},u=s(),c=function e(n){"opacity"===n.propertyName&&(document.body.classList.contains("nav-open")?(t.classList.add("show"),o.classList.add("show")):(t.classList.remove("show"),o.classList.remove("show")),r.removeEventListener(u,e))},l=function(){!a||document.body.classList.contains("mobile-style-nav")?r.addEventListener(u,c):document.body.classList.contains("nav-open")?t.classList.add("show"):t.classList.remove("show")},d=function(){n.removeEventListener("click",l),r.removeEventListener(u,c)};return n.addEventListener("click",l),{destroy:d}}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(89);t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=["tweak-show-gallery-title-overlay","tweak-show-page-title-overlay","tweak-header-outer-padding","tweak-display-social-icons","tweak-site-title-font","tweak-site-tagline-font","tweak-logo-height","tweak-nav-font","tweak-menu-icon-size","tweak-nav-style","tweak-template-social-icon-size","tweak-gallery-title-position","tweak-page-title-position"],n=e.querySelector(".title-desc-inner-wrapper"),o=e.querySelector(".title-card"),i=document.body.classList.contains("collection-type-gallery"),r=function(){return document.querySelector(".site-header").offsetHeight},s=function(){var e=i?"tweak-gallery-title-position":"tweak-page-title-position",t=c.Tweak.getValue(e).toLowerCase().indexOf("top")>=0;return t?void(n.style.marginTop=r()+"px"):void(n.style.marginTop="")},l=function(){window.pageYOffset>0?e.classList.add("hide-title-card"):e.classList.remove("hide-title-card")},d=function(){e.classList.add("hide-title-card")},f=(0,u.default)(s,120),p=(0,a.default)(l,10),h=function(){window.addEventListener("scroll",p),o.addEventListener("click",d),window.addEventListener("resize",f)},v=function(){var e=i?c.Tweak.getValue("tweak-show-gallery-title-overlay").toLowerCase():c.Tweak.getValue("tweak-show-page-title-overlay").toLowerCase();"never"!==e&&h()},y=function(){window.removeEventListener("scroll",p),o.removeEventListener("click",d),window.removeEventListener("resize",f)},m=function(){s()};return m(),v(),c.Tweak.watch(t,function(e){"tweak-show-gallery-title-overlay"===e.name||"tweak-show-page-title-overlay"===e.name?(y(),"never"!==e.value.toLowerCase()&&h()):s()}),{destroy:y}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(191),a=o(r),s=n(156),u=o(s),c=n(89);t.default=i},function(e,t,n){"use strict";function o(e){var t=function(e){e.preventDefault(),i.UserAccounts.openAccountScreen()},n=function(){var n=i.UserAccounts.isUserAuthenticated()?".sign-in":".my-account",o=e.querySelector(n);o&&o.parentNode.removeChild(o),e.classList.add("loaded"),e.addEventListener("click",t)},o=function(){e.removeEventListener("click",t)};return n(),{destroy:o}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(89);t.default=o}]);