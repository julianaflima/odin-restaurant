(()=>{"use strict";var n={513:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(81),r=e.n(o),i=e(645),a=e.n(i)()(r());a.push([n.id,"#over-img-contact {\n\tbackground-color: rgba(0, 0, 0, 0.5);\n\tcolor: white;\n\tgrid-row: 1;\n\tgrid-column: 1;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: column;\n\ttext-align: center;\n\tgap: 40px;\n}\n\n#over-img-contact p {\n\tanimation: fadeIn .5s linear;\n}",""]);const s=a},491:(n,t,e)=>{e.d(t,{Z:()=>f});var o=e(81),r=e.n(o),i=e(645),a=e.n(i),s=e(667),c=e.n(s),l=new URL(e(454),e.b),d=new URL(e(799),e.b),p=a()(r()),m=c()(l),u=c()(d);p.push([n.id,"@font-face {\n  font-family: 'NameFont';\n  src: url("+m+") format('TrueType');\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'BodyFont';\n  src: url("+u+") format('TrueType');\n  font-weight: 300;\n  font-style: normal;\n}\n\n@keyframes fadeIn{\n  from{\n    opacity:0;\n  }\n  to{\n    opacity:1;\n  }\n}\n\n*, ul, li{\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbody {\n\tbackground-color: Snow;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.over-img,\n#links,\n#over-img,\n#footer {\n\tfont-family: BodyFont, sans-serif;\n}\n\n#links li {\n\tlist-style: none;\n\t/*font-family: BodyFont, sans-serif;*/\n}\n\n#name {\n\ttext-align: center;\n\tfont-family: 'NameFont';\n\tmargin: 20px 0px;\n\tcolor: #241623;\n}\n\n#links {\n\tdisplay: flex;\n\tjustify-content: center;\n\tgap: 50px;\n}\n\n#links li {\n\ttransition: transform 0.4s;\n}\n\n#links li:hover {\n\t/*background-color: red;*/\n\ttransform: translateY(-20%);\n\tcursor:pointer;\n}\n\n.active {\n\tborder-bottom: 3px solid #241623;\n}\n\n#container {\n\tdisplay: grid;\n\tgrid-template-columns: 1;\n\tgrid-template-rows: 1fr;\n\twidth: 100vw;\n\theight: 78vh;\n}\n\n#images {\n\tdisplay: flex;\n\tgrid-row: 1;\n\tgrid-column: 1;\n}\n\n#over-img-home {\n\tbackground-color: rgba(0, 0, 0, 0.5);\n\tcolor: white;\n\tgrid-row: 1;\n\tgrid-column: 1;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: column;\n\ttext-align: center;\n\tgap: 40px;\n\t/*font-family: BodyFont, sans-serif;*/\n}\n\n#over-img-home p {\n\tanimation: fadeIn .5s linear;\n}\n\n.img-center{\n\tobject-fit: cover;\n\tobject-position: center;\n\tflex: 1;\n\tmax-width: 25%;\n}\n\n.img-not-center {\n\tobject-fit: cover;\n\tobject-position: 66%;\n\tflex: 1;\n\tmax-width: 25%;\n}\n\nimg {\n\tobject-fit: cover;\n\tobject-position: 0%;\n\tflex: 1;\n\tmax-width: 25%;\n}\n\n#footer {\n\ttext-align: center;\n\t/*font-family: BodyFont, sans-serif;*/\n}\n\n#footer a {\n\ttext-decoration: none;\n\tcolor: black;\n}",""]);const f=p},63:(n,t,e)=>{e.d(t,{Z:()=>s});var o=e(81),r=e.n(o),i=e(645),a=e.n(i)()(r());a.push([n.id,"#over-img-menu {\n\tbackground-color: rgba(0, 0, 0, 0.5);\n\tcolor: white;\n\tgrid-row: 1;\n\tgrid-column: 1;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: column;\n\ttext-align: center;\n\theight: inherit;\n\toverflow: scroll;\n}\n\n#list-of-dishes {\n\tmargin: 60px 0px;\n\tanimation: fadeIn .5s linear;\n\tdisplay: flex;\n\tjustify-content: center;\n\t/*align-items: center;*/\n\tflex-direction: column;\n\tgap: 80px;\n\tpadding: 0px 50px;\n}\n\n#list-of-dishes > div {\n\tpadding: 2px 10px;\n\tborder-bottom: 4px solid #241623;\n}\n\n#list-of-dishes > div:nth-child(even){\n\talign-self: start;\n\tjustify-self: start;\n\tbox-shadow: -27px 23px 0px -13px snow;\n\t/*border-bottom: 4px solid red;*/\n\ttext-align: left;\n}\n\n#list-of-dishes > div:nth-child(odd){\n\t/*border-bottom: 4px solid green;*/\n\talign-self: end;\n\tbox-shadow: 27px 23px 0px -13px snow;\n\ttext-align: right;\n}\n\n\n\n\n",""]);const s=a},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},667:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=o.base?c[0]+o.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var m=e(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var f=r(u,o);o.byIndex=s,t.splice(s,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=e(i[a]);t[s].references--}for(var c=o(n,r),l=0;l<i.length;l++){var d=e(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=c}}},569:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},454:(n,t,e)=>{n.exports=e.p+"28f31f8d70f98c1592a6.ttf"},799:(n,t,e)=>{n.exports=e.p+"3faa3eef13649db02044.ttf"}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return n[o](i,i.exports,e),i.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var o=t.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var n=e(379),t=e.n(n),o=e(795),r=e.n(o),i=e(569),a=e.n(i),s=e(565),c=e.n(s),l=e(216),d=e.n(l),p=e(589),m=e.n(p),u=e(491),f={};f.styleTagTransform=m(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),t()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;var g=e(63),v={};v.styleTagTransform=m(),v.setAttributes=c(),v.insert=a().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=d(),t()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals;var h=e(513),y={};y.styleTagTransform=m(),y.setAttributes=c(),y.insert=a().bind(null,"head"),y.domAPI=r(),y.insertStyleElement=d(),t()(h.Z,y),h.Z&&h.Z.locals&&h.Z.locals;const x="<p>Passionate about making vegan food look and taste good</p>\n\t<p> We are open Monday--Friday</p>\n\t<p>10am -- 8pm</p>";function b(n){const t=document.querySelectorAll("#links .active");for(const n of t)n.classList.remove("active");document.querySelector(n).classList.add("active")}function w(n,t,e){const o=document.createElement("div");return o.id=t,o.innerHTML=n,void 0!==arguments[2]&&o.classList.add(arguments[2]),o}document.body.appendChild(w('<h1 id="name">Sage Bistro</h1>\n<ul id="links"> \n\t<li id="home" class="active">Home</li> \n\t<li id="menu">Menu</li>\n\t<li id="contact">Contact</li>\n</ul>',"header")),document.body.appendChild(w('<div id="images">\n\t<img class="img-not-center" src="../src/img/1.webp">\n\t<img class="img-center" src="../src/img/2.webp" alt="">\n\t<img class="img-center" src="../src/img/3.webp" alt="">\n\t<img src="../src/img/4.webp">\n</div>',"container")),document.querySelector("#container").appendChild(w(x,"over-img-home","over-img")),document.body.appendChild(w('<div id="footer"> Copyright &#169; 2023 <a href="https://github.com/julianaflima">julianaflima</a> </div>',"footer")),document.getElementById("links").addEventListener("click",(n=>{const t=document.querySelector(".over-img"),e=document.querySelector("#container");switch(n.target.textContent){case"Home":t.remove(),e.appendChild(w(x,"over-img-home","over-img")),b("#home");break;case"Menu":t.remove(),e.appendChild(w('<div id="list-of-dishes"> \n\t<div>\n\t\t<h3>Lorem Ipsum</h3>\n\t\t<p>Lorem ipsum dolor sit amet consectetur adipisicing</p>\n\t</div>\n\t<div>\n\t \t<h3>Lorem Ipsum Dolor Sit</h3>\n\t \t<p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</p>\n\t</div>\n\t<div>\n\t\t<h3>Lorem Ipsum</h3>\n\t\t<p>Lorem ipsum dolor sit amet consectetur adipisicing</p>\n\t</div>\n\t<div>\n\t \t<h3>Lorem Ipsum Dolor Sit</h3>\n\t \t<p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</p>\n\t</div>\n\t<div>\n\t\t<h3>Lorem Ipsum</h3>\n\t\t<p>Lorem ipsum dolor sit amet consectetur adipisicing</p>\n\t</div>\n\t<div>\n\t \t<h3>Lorem Ipsum Dolor Sit</h3>\n\t \t<p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</p>\n\t</div>\n</div>',"over-img-menu","over-img")),b("#menu");break;case"Contact":t.remove(),e.appendChild(w("<p>Phone: 555-555-5555</p>\n<p>Address: 666 Cat Street,<br>\nNext to Dog Store\n</p>","over-img-contact","over-img")),b("#contact")}}))})()})();