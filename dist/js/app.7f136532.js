(function(t){function e(e){for(var a,s,o=e[0],l=e[1],c=e[2],u=0,v=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&v.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(v.length)v.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function s(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"52122cd2"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=s(t);var c=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,n[1](c)}r[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"0532":function(t,e,n){t.exports=n.p+"img/illustration-working.5029d049.svg"},5287:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],s={name:"App",componemts:{}},o=s,l=(n("034f"),n("2877")),c=Object(l["a"])(o,r,i,!1,null,null,null),u=c.exports,d=(n("d3b7"),n("8c4f")),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar"),n("Header"),n("Search"),n("Footer")],1)},f=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"navbar navbar-expand-lg navbar-light p-4"},[n("div",{staticClass:"container"},[t._m(0),t._m(1),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav mr-auto"},[n("li",{staticClass:"nav-item active"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/features"}},[t._v("Features "),n("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/pricing"}},[t._v("Pricing")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/resources"}},[t._v("Resources")])],1)]),n("ul",{staticClass:"navbar-nav ml-auto"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[t._v("Login")])],1),n("li",{staticClass:"nav-item ml-3"},[n("router-link",{staticClass:"nav-link signup-btn",attrs:{to:"/signup"}},[t._v("Sign Up")])],1)])])])])])},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[a("img",{attrs:{src:n("e347"),alt:"logo"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],h={},m=h,g=(n("6de2"),Object(l["a"])(m,p,_,!1,null,"78166ce4",null)),b=g.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container header__container"},[a("div",{staticClass:"row mobile"},[a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"header__text"},[a("h1",[t._v("More than just shorter links")]),a("p",[t._v("Build your brand's recognition and get detailed "),a("br"),t._v(" insights on how your links are performing")]),a("button",{staticClass:"btn get__btn mt-3",attrs:{type:"button"}},[t._v("Get Started")])])]),a("div",{staticClass:"col-lg-6"},[a("img",{staticClass:"img-fluid",attrs:{src:n("0532"),alt:""}})])])])])}],y={},w=y,x=(n("d804"),Object(l["a"])(w,C,k,!1,null,"845e08e2",null)),S=x.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"overlay"},[n("div",{staticClass:"container"},[n("div",{staticClass:"search__layout"},[n("div",{staticClass:"search__field form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Shorten a link here..."},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}}),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.handleShorten}},[t._v("Shorten it!")])]),t._m(0)]),t._l(t.links,(function(e,a){return n("div",{key:a},[n("div",{staticClass:"display__results"},[n("div",{staticClass:"real__link"},[n("p",[t._v(t._s(e.url))])]),n("div",{staticClass:"shorten__link"},[n("p",[t._v(t._s(t._f("relink")(e.hashid)))]),n("button",{staticClass:"btn btn-primary add__copied",class:"Copied"==t.message?"add__copied":"",attrs:{type:"button"},on:{click:function(n){return t.copy(e.hashid,n)}}},[t._v(t._s(t.text))])])])])}))],2),t._m(1),n("div",{staticClass:"container card__container"},[n("div",{staticClass:"line"}),n("div",{staticClass:"mobile__line"}),n("div",{staticClass:"row"},t._l(t.cardJson,(function(e,a){return n("div",{key:a,staticClass:"col-md-4"},[n("div",{staticClass:"card__info",class:["detailed"==e.text?"card__margin__1":"","fully"==e.text?"card__margin__2":""]},[n("div",{staticClass:"icon"},[n("img",{attrs:{src:e.img,alt:""}})]),n("div",{staticClass:"content__info"},[n("h5",[t._v(t._s(e.title))]),n("p",{staticClass:"mt-3"},[t._v(t._s(e.subtitle))])])])])})),0)])])])},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"error__div"},[n("p",{staticClass:"error"},[n("em")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container content text-center"},[n("h3",[t._v("Advanced Statistics")]),n("p",{staticClass:"mt-4"},[t._v("Track how your links are performing across web with "),n("br"),t._v(" our advanced statistics dashboard.")])])}],E=(n("7db0"),n("a630"),n("d81d"),n("fb6a"),n("6062"),n("3ca3"),n("ddb0"),n("bc3a")),$=n.n(E),P=n("596b"),T=n.n(P),A={data:function(){return{url:"",hashid:"",links:[],error:"",text:"Copy",message:"Copied",cardJson:[{title:"Brand Recognition",subtitle:"Boost your brand recognition with each click. Generic links doesn't mean a thing. Branded links help instil confidence in your content.",img:"/img/icon-brand-recognition.svg"},{title:"Detailed Records",subtitle:"Gain insights into who is clicking your links knowing when and where people engage with your content helps inform better decisions.",img:"/img/icon-detailed-records.svg",text:"detailed"},{title:"Fully Customizable",subtitle:"Improve brand awareness and content discoverability through customizable links, superchanging audience engagement.",img:"/img/icon-fully-customizable.svg",text:"fully"}]}},computed:{validated:function(){return this.Validation&&!this.url}},mounted:function(){if(localStorage.getItem("links"))try{this.links=JSON.parse(localStorage.getItem("links"))}catch(t){console.log(t)}},watch:{url:function(t){this.hashid&&(this.hashid=null)}},methods:{copy:function(t,e){event.preventDefault(),T()(this.$options.filters.relink(t)),console.log("message")},handleShorten:function(){var t=this;$.a.post("https://rel.ink/api/links/",{url:this.url}).then((function(e){var n=t.links;n.push(e.data),t.url="",t.hashid=e.data.hashid,t.links=Array.from(new Set(n.map((function(t){return t.hashid})))).map((function(t){return n.find((function(e){return e.hashid===t}))})).slice(0,5),localStorage.setItem("links",JSON.stringify(t.links))})).catch((function(t){console.log("oops fix this error",t)}))}},filters:{relink:function(t){return"https://rel.ink/".concat(t)}}},B=A,L=(n("ecb6"),Object(l["a"])(B,O,j,!1,null,"87a9da82",null)),J=L.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("div",{staticClass:"footer__links"},[n("div",{staticClass:"container foot"},[t._m(1),n("div",{staticClass:"link"},[n("ul",[n("h6",[t._v("Features")]),n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Link Shortening")])],1),n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Branded Links")])],1),n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Analytics")])],1)])]),n("div",{staticClass:"link"},[n("ul",[n("h6",[t._v("Resources")]),n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Blog")])],1),n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Developers")])],1),n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Support")])],1)])]),n("div",{staticClass:"link"},[n("ul",[n("h6",[t._v("Company")]),n("li",[n("router-link",{attrs:{to:"/"}},[t._v("About")])],1),n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Our Team")])],1),n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Career")])],1),n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Contact")])],1)])]),t._m(2)])])])},M=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer__content"},[n("div",{staticClass:"container text-center"},[n("h3",[t._v("Boost your links today")]),n("button",{staticClass:"btn btn-primary mt-4",attrs:{type:"button"}},[t._v("Get Started")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer__logo"},[n("h1",[t._v("Shortly")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"link__icon"},[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-facebook-f"})]),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-twitter"})]),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-pinterest"})]),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-instagram"})])])}],N={},G=N,I=(n("ee05"),Object(l["a"])(G,F,M,!1,null,"7913c5c6",null)),R=I.exports,z={name:"LandingPage",components:{Navbar:b,Header:S,Search:J,Footer:R}},D=z,H=Object(l["a"])(D,v,f,!1,null,null,null),q=H.exports;a["a"].use(d["a"]);var U=[{path:"/",name:"LandingPage",component:q},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],V=new d["a"]({mode:"history",base:"/",routes:U}),K=V,Q=(n("4989"),n("ab8b"),n("9537"),n("3e48"),n("4eb5")),W=n.n(Q);a["a"].use(W.a),a["a"].config.productionTip=!1,new a["a"]({router:K,render:function(t){return t(u)}}).$mount("#app")},"6de2":function(t,e,n){"use strict";var a=n("7609"),r=n.n(a);r.a},7609:function(t,e,n){},"7ecd":function(t,e,n){},"85ec":function(t,e,n){},"913a":function(t,e,n){},d804:function(t,e,n){"use strict";var a=n("913a"),r=n.n(a);r.a},e347:function(t,e,n){t.exports=n.p+"img/logo.6387840f.svg"},ecb6:function(t,e,n){"use strict";var a=n("7ecd"),r=n.n(a);r.a},ee05:function(t,e,n){"use strict";var a=n("5287"),r=n.n(a);r.a}});
//# sourceMappingURL=app.7f136532.js.map