(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{161:function(t,e,n){"use strict";n.r(e);var r={name:"LogoClaim"},o=(n(279),n(23)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo-claim"},[n("div",{staticClass:"claim-top"},[n("span",[t._v("Bernd")]),t._v(" "),n("span",{staticClass:"siegel-primary"},[t._v("Siegel")])]),t._v(" "),n("span",[t._v("Steingestaltung")])])}],!1,null,"42470c20",null);e.default=component.exports},167:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{scrollY:0,drawer:!1,items:[{title:"Restaurierungen",icon:"subject",url:"/restaurierungen"},{title:"Grabmale",icon:"subject",url:"/grabmale"},{title:"Über uns",icon:"person",url:"/ueber-uns"},{title:"Galerie",icon:"photo_library",url:"/galerie"},{title:"Kontakt",icon:"contact_phone",url:"/kontakt"},{title:"Impressum",icon:"short_text",url:"/impressum"},{title:"Datenschutz",icon:"description",url:"/datenschutz"}]}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.scrollY=window.scrollY},openNavigation:function(){this.drawer=!this.drawer}}},o=(n(277),n(23)),l=n(54),c=n.n(l),d=n(163),v=n(162),f=n(106),m=n(76),h=n(92),_=n(344),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",{staticClass:"document small",class:{scrolled:this.scrollY>64}},[n("Logo"),t._v(" "),n("Navigation"),t._v(" "),n("Menu",{nativeOn:{click:function(e){return t.openNavigation()}}})],1),t._v(" "),n("header",{staticClass:"document"},[n("Logo"),t._v(" "),n("Navigation"),t._v(" "),n("Menu",{nativeOn:{click:function(e){return t.openNavigation()}}})],1),t._v(" "),n("v-navigation-drawer",{staticClass:"white nav-drawer",attrs:{temporary:"",fixed:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("h1",[t._v("Navigation")]),t._v(" "),n("v-list",t._l(t.items,(function(e){return n("v-list-item",{key:e.title},[n("router-link",{attrs:{to:e.url}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))])],1)],1)],1)})),1)],1)],1)}),[],!1,null,"1b784571",null);e.default=component.exports;c()(component,{Logo:n(233).default,Navigation:n(234).default,Menu:n(235).default,Header:n(167).default}),c()(component,{VIcon:d.a,VList:v.a,VListItem:f.a,VListItemContent:m.a,VListItemIcon:h.a,VListItemTitle:m.b,VNavigationDrawer:_.a})},207:function(t,e,n){var content=n(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("7388ab72",content,!0,{sourceMap:!1})},209:function(t,e,n){var content=n(276);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("4e8213bc",content,!0,{sourceMap:!1})},210:function(t,e,n){var content=n(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("f6f2eae6",content,!0,{sourceMap:!1})},211:function(t,e,n){var content=n(280);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("93cee7d8",content,!0,{sourceMap:!1})},212:function(t,e,n){var content=n(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("332005e3",content,!0,{sourceMap:!1})},213:function(t,e,n){var content=n(284);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("0f00d753",content,!0,{sourceMap:!1})},214:function(t,e,n){var content=n(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("6755e324",content,!0,{sourceMap:!1})},223:function(t,e,n){var content=n(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("a34cedb0",content,!0,{sourceMap:!1})},224:function(t,e,n){var content=n(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("751d382e",content,!0,{sourceMap:!1})},231:function(t,e,n){"use strict";var r={},o=(n(275),n(23)),l=n(54),c=n.n(l),d=n(343),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app"}},[n("div",{staticClass:"page-bg"},[n("div",{staticClass:"body-bg"},[n("Header"),t._v(" "),n("Nuxt")],1),t._v(" "),n("Footer")],1)])}),[],!1,null,null,null);e.a=component.exports;c()(component,{Header:n(167).default,Footer:n(337).default}),c()(component,{VApp:d.a})},232:function(t,e,n){"use strict";n.r(e);var r={name:"Split"},o=(n(335),n(23)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"split"},[t._t("default")],2)}),[],!1,null,"90a08b62",null);e.default=component.exports},233:function(t,e,n){"use strict";n.r(e);var r={name:"Logo",components:{LogoClaim:n(161).default}},o=(n(281),n(23)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"logo",attrs:{to:"/"}},[n("svg",{staticClass:"favicon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1572 1600",fill:"none"}},[n("path",{attrs:{fill:"#fff",d:"M1556 971.5V343H0V0h1572v1600h-16V971.5z"}}),t._v(" "),n("path",{attrs:{fill:"#D9DADA",d:"M0 343h1252v1257H0z"}}),t._v(" "),n("path",{attrs:{fill:"#B1B2B3",d:"M1252 971.5V343h304v1257h-304V971.5z"}}),t._v(" "),n("path",{attrs:{fill:"#730A1B",d:"M556.692 1595.58c-50.6-3.1-160.9-23.4-246.6-45.4-82.8-21.3-142.3-40.9-183.6-60.4-10.5-4.9-10.8-5.2-10.8-8.3 0-1.8-.7-23.3-1.5-47.8-1.4-40.1-2.1-59.6-5.5-136-.5-12.4-1.2-38.5-1.5-58-.3-19.5-.7-39-1-43.3-.5-9.3-1-9.3 12 1.8 30.5 26.3 78.2 62.1 115 86.4 49.3 32.6 79.3 50.2 130.5 76.4 77.1 39.5 158.8 68.5 232.5 82.7 49.8 9.5 83.5 12.1 133.5 10.2 102.5-3.9 186.9-29.6 249.9-76 11.3-8.4 33.598-30 42.998-41.6 30.3-37.9 47.2-82.4 50.3-132.4 1.3-20.9.6-30.7-3.7-49.7-11.3-50.8-41.5-104.4-79.098-140.5-20.8-20.105-40-31.705-75.4-45.805-79.9-31.9-220.6-61.1-386-80.2-18.3-2.1-57.4-8.5-73.3-12.1-42.1-9.3-92.7-27.2-123.7-43.6-6.9-3.7-14.2-7.5-16.3-8.5-10.4-5.2-36.9-22.4-53.2-34.7-15.6-11.7-27-21.8-41.8-37.1-23.8-24.5-42.3-48.4-55.6-71.8-6.9-12-19.4-37.2-22.5-45.2-1.6-4.1-3.4-8.8-4.1-10.5-3.4-7.9-10.8-33-13.9-47.2-6.8-30.4-9.2-58.6-8.2-96.8 1.5-61.6 9.8-113.5 26.2-164.8 28.3-88.2 81.2-161.4 154.6-214 23.2-16.6 61.1-37.5 90.9-50.2 62.2-26.5 140.3-43.6 217.4-47.5 119.3-6 239.3 11.1 358.6 51 29.7 9.9 58.498 21 81.698 31.3l11.7 5.3.3 123.3.2 123.3-4.4-3.8c-2.5-2.2-12.2-11.3-21.8-20.3-54.598-51.9-106.798-92.4-147.298-114.3-43.2-23.5-74.7-35.9-116-45.8-26.8-6.5-70.1-12.2-106-14.2-56.1-3-162.6 0-205 5.7-33.5 4.6-62.1 11.1-89.7 20.4-54.6 18.5-93.2 42.7-123.8 77.5-17.1 19.5-31.6 45.1-40.3 71.2-8.5 25.7-11.3 48.5-10.4 86.7 1 45.8 8.4 79.2 25.6 115.2 35.5 74.3 110 124.8 228.6 154.8 36.2 9.2 75.2 16.5 131.5 24.6 219.1 31.7 324.2 58.4 418.5 106.2 33.198 16.8 42.198 22.9 62.598 42.6 44.5 43 75.7 113.1 88.9 199.905 2.8 18 3.1 23 3.7 52.4 1.2 64.5-5.7 111.3-24.8 168.2-7.3 21.8-12.4 34-24.5 57.8-26.7 53.1-56.1 91.2-103.898 135.3-14.4 13.2-38.3 31.7-57.5 44.3-81.8 53.7-188.7 87.1-299 93.4-19.8 1.1-67.2 1.1-86-.1zM1386.19 334.075c-18.7-2-40.8-8.5-57.7-16.9-46.1-22.9-77.8-64.1-89-115.5-2-9.2-2.3-13.3-2.3-33.5s.3-24.3 2.3-33.5c11.2-51.4 42.9-92.6 89-115.5 13.1-6.5 28.2-11.6 43.3-14.7 16.5-3.3 45.3-3.3 61.8 0 64.7 13 114.7 60 130.5 122.7 3.6 14.3 4.6 23.6 4.6 41s-1 26.7-4.6 41c-15.7 62.5-66.1 109.9-129.9 122.5-10.7 2.1-37.9 3.5-48 2.4z"}})]),t._v(" "),n("LogoClaim")],1)}),[],!1,null,"38135bed",null);e.default=component.exports;installComponents(component,{LogoClaim:n(161).default})},234:function(t,e,n){"use strict";n.r(e);var r={name:"Navigation"},o=(n(283),n(23)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"navigation"},[n("router-link",{staticClass:"siegel-primary",attrs:{to:"/restaurierungen"}},[t._v("Restaurierungen")]),t._v(" "),n("router-link",{staticClass:"siegel-primary",attrs:{to:"/grabmale"}},[t._v("Grabmale")]),t._v(" "),n("router-link",{staticClass:"siegel-primary",attrs:{to:"/ueber-uns"}},[t._v("Über uns")]),t._v(" "),n("router-link",{staticClass:"siegel-primary",attrs:{to:"/galerie"}},[t._v("Galerie")]),t._v(" "),n("router-link",{staticClass:"siegel-primary",attrs:{to:"/kontakt"}},[t._v("Kontakt")])],1)}),[],!1,null,"59518074",null);e.default=component.exports},235:function(t,e,n){"use strict";n.r(e);var r={name:"Menu"},o=(n(285),n(23)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"material-icons"},[t._v("menu")])}),[],!1,null,"00b39814",null);e.default=component.exports},237:function(t,e,n){n(238),t.exports=n(239)},269:function(t,e,n){"use strict";n(207)},270:function(t,e,n){var r=n(19)(!1);r.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=r},275:function(t,e,n){"use strict";n(209)},276:function(t,e,n){var r=n(19)(!1);r.push([t.i,'.content-wrapper:after{content:"";display:table;clear:both}.content-wrapper{margin-bottom:1rem}#app{--siegel-red:#770019;--siegel-lightgray:#d9d9da;--siegel-gray:#afafb0;--light-s2:#2e2e2e;--page:#f5f5f5;--document:#fff;--body:#fff}#app,.page-bg{background:var(--page)}.page-bg{min-height:100vh}.body-bg{background:var(--body)}.siegel-primary{color:#770019!important}.bg-lightgray{background-color:var(--siegel-lightgray)}.v-icon.mdi{margin-right:4px;vertical-align:middle;font-size:20px}h1{color:var(--light-s2);margin-bottom:.5rem;white-space:pre-wrap}h1,h2{display:inline-block;word-wrap:break-word}h2{color:var(--siegel-red);text-decoration:none;font-size:1.5rem;font-weight:700;white-space:nowrap;margin:.5rem 0;white-space:pre-wrap}p{font-size:1.1rem;margin:0 0 .5rem;line-height:1.5rem;color:#4b4b4b}a{text-decoration:none}br{margin-bottom:10px;width:1px}.document{width:100%;max-width:1180px;margin-left:auto;margin-right:auto;padding:4px 16px}.document.page{border-radius:4px;background:var(--document)}.text-logo{color:var(--light-s2);font-size:24px;white-space:nowrap;line-height:1.75rem}@media(min-width:600px){.document{min-width:1196px;padding:4px 32px}}',""]),t.exports=r},277:function(t,e,n){"use strict";n(210)},278:function(t,e,n){var r=n(19)(!1);r.push([t.i,"a[data-v-1b784571]{display:inline-flex;color:unset!important}aside[data-v-1b784571]{z-index:1000}h1[data-v-1b784571]{margin:16px 0 0 16px}header[data-v-1b784571]{height:128px;background:var(--document)}header[data-v-1b784571],header.small[data-v-1b784571]{display:flex;justify-content:space-between;z-index:1000}header.small[data-v-1b784571]{top:-64px;height:64px;left:0;right:0;padding:4px 16px;position:fixed;transition:top .4s}header.scrolled[data-v-1b784571]{top:0;box-shadow:0 4px 12px -4px rgba(0,0,0,.16)}.logo+.navigation[data-v-1b784571]{margin-left:1rem}",""]),t.exports=r},279:function(t,e,n){"use strict";n(211)},280:function(t,e,n){var r=n(19)(!1);r.push([t.i,".claim-top[data-v-42470c20]{display:flex;justify-content:space-between}@media(max-width:1023px)and (min-width:801px){header .logo-claim[data-v-42470c20]{display:none}}.small .logo-claim[data-v-42470c20]{margin:auto auto auto 16px}.logo-claim[data-v-42470c20]{margin:auto auto auto 20px}.small span[data-v-42470c20]{font-size:20px}.small span[data-v-42470c20],span[data-v-42470c20]{line-height:1.5rem}span[data-v-42470c20]{color:#2e2e2e;font-size:22px}",""]),t.exports=r},281:function(t,e,n){"use strict";n(212)},282:function(t,e,n){var r=n(19)(!1);r.push([t.i,".small .favicon[data-v-38135bed]{height:48px}.favicon[data-v-38135bed]{height:56px}.logo[data-v-38135bed]{display:flex;text-decoration:none;align-self:center}",""]),t.exports=r},283:function(t,e,n){"use strict";n(213)},284:function(t,e,n){var r=n(19)(!1);r.push([t.i,".navigation[data-v-59518074]{display:flex;align-items:center}@media(max-width:800px){.navigation[data-v-59518074]{display:none}}.small a[data-v-59518074],a[data-v-59518074]{font-size:1.25rem}a[data-v-59518074]{text-decoration:none;font-weight:500;white-space:nowrap;margin:.5rem 1.25rem;display:inline-block}",""]),t.exports=r},285:function(t,e,n){"use strict";n(214)},286:function(t,e,n){var r=n(19)(!1);r.push([t.i,".small span[data-v-00b39814]{font-size:32px}span[data-v-00b39814]{color:#2e2e2e;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;align-self:center;font-size:48px;cursor:pointer}@media (min-width:801px){span[data-v-00b39814]{display:none}}",""]),t.exports=r},333:function(t,e,n){"use strict";n(223)},334:function(t,e,n){var r=n(19)(!1);r.push([t.i,".footer[data-v-1a90a122]{width:100%;background-color:var(--page);padding:32px}.footer div[data-v-1a90a122]{display:flex;justify-content:space-between}a[data-v-1a90a122]{display:block;font-weight:500;width:-webkit-max-content;width:-moz-max-content;width:max-content}a[data-v-1a90a122],i[data-v-1a90a122],p[data-v-1a90a122]{color:#555!important}h3[data-v-1a90a122]{padding-top:0;color:#2e2e2e;border-bottom:2px solid #770019;margin-bottom:12px;display:inline-block}i[data-v-1a90a122]{font-size:20px!important;margin-right:4px}",""]),t.exports=r},335:function(t,e,n){"use strict";n(224)},336:function(t,e,n){var r=n(19)(!1);r.push([t.i,".split[data-v-90a08b62]{display:flex;flex-wrap:wrap}",""]),t.exports=r},337:function(t,e,n){"use strict";n.r(e);n(333);var r=n(23),o=n(54),l=n.n(o),c=n(163),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("Split",{staticClass:"document"},[n("span",[n("h3",[t._v("Navigation")]),t._v(" "),n("router-link",{attrs:{to:"/"}},[t._v("Startseite")]),t._v(" "),n("router-link",{attrs:{to:"/restaurierungen"}},[t._v("Restaurierungen")]),t._v(" "),n("router-link",{attrs:{to:"/grabmale"}},[t._v("Grabmale")]),t._v(" "),n("router-link",{attrs:{to:"/ueber-uns"}},[t._v("Über uns")]),t._v(" "),n("router-link",{attrs:{to:"/galerie"}},[t._v("Galerie")]),t._v(" "),n("router-link",{attrs:{to:"/kontakt"}},[t._v("Kontakt")])],1),t._v(" "),n("span",[n("h3",[t._v("Rechtliches")]),t._v(" "),n("router-link",{attrs:{to:"/impressum"}},[t._v("Impressum")]),t._v(" "),n("router-link",{attrs:{to:"/datenschutz"}},[t._v("Datenschutz")])],1),t._v(" "),n("span",[n("h3",[t._v("Kontakt")]),t._v(" "),n("a",{attrs:{href:"tel:+496264926444"}},[n("v-icon",[t._v("mdi-phone")]),t._v("06264 / 92 64 44\n      ")],1),t._v(" "),n("p",[t._v("\n        Bernd Siegel\n        "),n("br"),t._v("Steingestaltung\n      ")]),t._v(" "),n("p",[t._v("\n        Bahnhofstraße 13\n        "),n("br"),t._v("74861 Neudenau\n      ")])])])],1)}),[],!1,null,"1a90a122",null);e.default=component.exports;l()(component,{Split:n(232).default}),l()(component,{VIcon:c.a})},74:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(269),n(23)),l=n(54),c=n.n(l),d=n(343),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;c()(component,{VApp:d.a})}},[[237,18,1,19]]]);