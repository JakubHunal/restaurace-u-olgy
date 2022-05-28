(()=>{var t={459:(t,e,a)=>{var n={"./1.webp":519,"./2.webp":780,"./3.webp":840,"./4.webp":868,"./5.webp":654,"./6.webp":538,"./7.webp":193,"./8.webp":53,"./9.webp":425,"./justLogo.svg":731,"./mainLogo.svg":132,"./newBeyondMeatLogo.svg":696,"./oatlyLogo.svg":61};function s(t){var e=o(t);return a(e)}function o(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=o,t.exports=s,s.id=459},817:(t,e,a)=>{"use strict";var n=a(144),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",{class:{navActive:t.navIsActive}},[n("router-link",{staticClass:"logo",attrs:{to:"/"}},[n("img",{attrs:{src:a(132),alt:""}})]),n("ul",{class:{openNav:t.openNav}},[n("li",[n("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#landingScrollTo",expression:"'#landingScrollTo'"}],attrs:{to:"/"}},[t._v("Domů")])],1),n("li",[n("router-link",{attrs:{to:"/nutritionCalculation"}},[t._v("Nutriční kalkulace")])],1),n("li",[n("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#menuScrollTo",expression:"'#menuScrollTo'"}],attrs:{to:"/"}},[t._v("Menu")])],1),n("li",[n("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#aboutUsScrollTo",expression:"'#aboutUsScrollTo'"}],attrs:{to:"/"}},[t._v("O nás")])],1),n("li",[n("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#gallery",expression:"'#gallery'"}],attrs:{to:"/"}},[t._v("Galerie")])],1),n("li",[n("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact",expression:"'#contact'"}],staticClass:"btnSq",attrs:{to:"/"}},[t._v("Kontakt")])],1)]),n("div",{staticClass:"hamburger"},[n("div",{staticClass:"icon",on:{click:t.OpenNav}},[t.openNav?n("font-awesome-icon",{attrs:{icon:"fa-solid fa-bars"}}):n("font-awesome-icon",{attrs:{icon:"fa-solid fa-xmark"}})],1)])],1),n("router-view"),n("Footer")],1)},o=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("p",[t._v(" © "+t._s(t.year)+" Restaurace U Olgy | Vytvořil: Daniel Muláč a Jakub Hunal ")])])},i=[];const c={name:"Footer",data(){return{year:0}},created(){this.year=(new Date).getFullYear()}},l=c;var d=a(1),u=(0,d.Z)(l,r,i,!1,null,"61a1b579",null);const v=u.exports,m={components:{Footer:v},data(){return{navIsActive:!1,openNav:!0}},methods:{OnScroll(){window.scrollY>20?this.navIsActive=!0:this.navIsActive=!1},OpenNav(){this.openNav=!this.openNav}},created(){window.addEventListener("scroll",this.OnScroll)}},p=m;var f=(0,d.Z)(p,s,o,!1,null,null,null);const h=f.exports;var g=a(345),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{attrs:{id:"landingScrollTo"}}),a("Landing"),a("Options"),a("Gallery"),a("div",{attrs:{id:"aboutUsScrollTo"}}),a("AboutUs"),a("WhyVegan"),a("div",{attrs:{id:"menuScrollTo"}}),a("Menu"),a("Contact")],1)},b=[],k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"landing"}},[a("main",[a("div",{staticClass:"left"},[a("div",{staticClass:"card"},[a("h2",[t._v("Vítejte na stránkách veganské restaurace U Olgy")]),a("h3",[t._v("U nás se najíte opravdu do syta!")])])]),a("div",{staticClass:"right"},[a("div",{staticClass:"image"})])])])}];const y={name:"Landing"},C=y;var z=(0,d.Z)(C,k,w,!1,null,"fa48fb88",null);const j=z.exports;var x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"menu"}},[a("h1",[t._v("Menu")]),a("main",[a("div",{staticClass:"menuNav"},t._l(t.menu,(function(e){return a("h3",{key:e.id,on:{click:function(a){t.clickedMenuId=e.id}}},[t._v(" "+t._s(e.name)+" "),t.clickedMenuId==e.id?a("span",{staticClass:"active"}):t._e()])})),0),a("div",{staticClass:"offers"},t._l(t.clickedMenu,(function(e){return a("div",{key:e.name,staticClass:"offer"},[a("h4",[t._v(t._s(e.name))]),a("p",{staticClass:"description"},[t._v(" "+t._s(e.description)+" ")]),a("p",{staticClass:"price"},[t._v(t._s(e.price)+" Kč")])])})),0)])])},S=[];const E={name:"Menu",data(){return{menu:[{id:0,name:"Hlavní jídla",food:[{name:"Vegeburger",description:"Burger na bázi sójových bobů s česnekovým dipem a zeleninou. V celozrnné či sezonní housce.",price:223},{name:"Zeleninové wrapy",description:"Různá sezónní zelenina zabalená v zelí. Podáváno s dipem.",price:170},{name:"Celozrnné plněné wrapy",description:"Celozrnné wrapy plněné zeleninou a „vegemasem“ ze seitanu.",price:210}]},{id:1,name:"Zákusky",food:[{name:"Čajový puding",description:"Puding ochucený různými čaji. Pro ztužení se používá agar agar.",price:70},{name:"Kokosový dort",description:"Borůvkovo kokosový dort typu „cheesecake“.",price:55},{name:"Kaše",description:"Kaše z různého sezonního ovoce.",price:55}]},{id:2,name:"Nápoje",food:[{name:"Sezonní limonáda",description:"",price:40},{name:"Káva",description:"",price:40},{name:"Káva s přírodním mlékem",description:"",price:55},{name:"Voda",description:"",price:12}]}],clickedMenuId:0}},computed:{clickedMenu(){return this.menu.find((t=>t.id===this.clickedMenuId)).food}}},Z=E;var O=(0,d.Z)(Z,x,S,!1,null,"02d44969",null);const $=O.exports;var N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"gallery"}},[a("VueAgile",t._l(t.items,(function(t,e){return a("img",{key:e,staticClass:"slide",attrs:{src:t,alt:""}})})),0)],1)},M=[],V=a(632);const F={name:"Gallery",components:{VueAgile:V.I},data(){return{items:[a(519),a(780),a(654),a(538)]}}},P=F;var T=(0,d.Z)(P,N,M,!1,null,"78bb35e4",null);const A=T.exports;var L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"about"}},[a("main",[a("div",{staticClass:"left"}),a("div",{staticClass:"right"},[a("div",{staticClass:"card"},[a("h1",[t._v("O nás")]),t._m(0),a("div",{staticClass:"links"},[a("div",{staticClass:"btnSq"},[a("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact",expression:"'#contact'"}],attrs:{to:"/"}},[a("span",[t._v("Navštivte nás!")])])],1)])])])])])},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("p",[t._v(" Ahoj! Já jsem Olga a provedu tě příběhem mojí restaurace. S nápadem veganské restaurace jsem přišla skoro ihned, co jsem se začala vegansky stravovat. Vždy jsem měla ráda společenské akce - a tam hodně jídla. Restaurací v té době moc nebylo, a saláty jsem již jíst nechtěla. Proto jsem začala pracovat na nápadu - snu restaurace a ten se mi brzy splnil. ")])])}];const K={name:"AboutUs"},U=K;var D=(0,d.Z)(U,L,I,!1,null,"5a4670c5",null);const B=D.exports;var q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"whyVegan"}},[a("main",[a("div",{staticClass:"left"},[a("div",{staticClass:"card"},[a("h1",[t._v("Proč se stát veganem")]),t._m(0),a("div",{staticClass:"links"},[a("div",{staticClass:"btnSq"},[a("router-link",{attrs:{to:"/partners"}},[a("span",[t._v("Naši partneři")])])],1)])])]),a("div",{staticClass:"right"})])])},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("p",[t._v(" Veganská strava není vhodná pro všechny, ale důvodů se stát jedním je mnoho. V základu se jedná o zdravotní, etické, společenské a environmentální. Zdravotně nařízená veganská či vegetariánská strava je z různých důvodů a jsou doporučena lékaři. Většinou mají za cíl odstranit všechny výrobky, které způsobují nějaký problém v těle. Etické jsou nejjednoznačnější - danému jedinci nepřijde normální co se se zvířaty děje a chce tomu zamezit svým dočiněním. Společenské jsou například důvody, kdy lidem nechutná normální strava. Environmentální zapadají skoro do každé dříve uvedené - zvířata produkují spoustu CO2 a způsobují oteplování planety. ")])])}];const G={name:"WhyVegan"},H=G;var R=(0,d.Z)(H,q,J,!1,null,"3ad66c9a",null);const W=R.exports;var Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"options"}},[a("main",[a("div",{staticClass:"cardS"},[a("div",{staticClass:"image"}),a("div",{staticClass:"content"},[a("h2",[t._v("Denní menu")]),a("p",[t._v(" Denní menu se mění skoro obden. Je sestaven z roční doby a dostupných surovin. ")]),a("div",{staticClass:"links"},[a("div",{staticClass:"btnSq"},[a("router-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#menuScrollTo",expression:"'#menuScrollTo'"}],attrs:{to:"/"}},[a("span",[t._v("Menu")])])],1)])])]),a("div",{staticClass:"cardM"},[a("div",{staticClass:"image"}),a("div",{staticClass:"content"},[a("h2",[t._v("Nutriční kalkulace")]),a("p",[t._v(" Pomáháme Vám zůstat zdraví a proto pro Vás máme nutriční kalkulačku, ve které si spočítáte co si z našich věcí můžete dát. ")]),a("p",[t._v(" Podporujeme různé diety a proto vždy uvádíme veškeré použité ingredience. ")]),a("div",{staticClass:"links"},[a("div",{staticClass:"btnSq"},[a("router-link",{attrs:{to:"/nutritionCalculation"}},[a("span",[t._v("Spočítat")])])],1)])])])])])},X=[];const Q={name:"Options"},tt=Q;var et=(0,d.Z)(tt,Y,X,!1,null,"a5a1ae5e",null);const at=et.exports;var nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"contact"}},[a("main",[t._m(0),a("div",{staticClass:"right"},[a("div",{staticClass:"box"},[a("h1",[t._v("Kontaktujte nás")]),t._m(1),t._m(2),t._m(3),a("div",{staticClass:"socialSites"},[a("div",{staticClass:"fb"},[a("a",{attrs:{href:"https://www.facebook.com/",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:"fa-brands fa-facebook"}})],1)]),a("div",{staticClass:"ig"},[a("a",{attrs:{href:"https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2F%3F__coig_login%3D1",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:"fa-brands fa-instagram"}})],1)]),a("div",{staticClass:"email"},[a("a",{attrs:{href:"mailto: restauraceolga@seznam.cz",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:"fa-solid fa-envelope"}})],1)])])])])])])},st=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left"},[a("iframe",{staticClass:"map",attrs:{src:"https://frame.mapy.cz/s/kofaretula",frameborder:"0"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"openHours"},[a("p",[t._v("Po - Pá: 8:00 - 20:00")]),a("p",[t._v("So - Ne: 10:00 - 00:00")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"address"},[a("p",[t._v("V Krajní 203")]),a("p",[t._v("Praha 39, 100 00")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contactInfo"},[a("p",[t._v("Telefon: +420 383 838 242")]),a("p",[t._v("E-mail: restauraceolga@seznam.cz")])])}];const ot={name:"Contact"},rt=ot;var it=(0,d.Z)(rt,nt,st,!1,null,"01bf94d5",null);const ct=it.exports,lt={name:"HomeView",components:{Landing:j,Menu:$,Gallery:A,AboutUs:B,WhyVegan:W,Options:at,Contact:ct}},dt=lt;var ut=(0,d.Z)(dt,_,b,!1,null,"dc5de44e",null);const vt=ut.exports;var mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nutritionCalculation"},[a("FoodSelection",{on:{selected:t.add}}),a("div",{staticClass:"spacer"}),a("FoodSelected",{attrs:{food:t.selectedFood},on:{remove:t.remove}})],1)},pt=[],ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"food_holder"},t._l(t.food,(function(e,s){return n("div",{key:s,staticClass:"food",on:{click:function(a){return t.send(e)}}},[n("img",{attrs:{src:a(459)("./"+e.img),alt:""}}),n("span",[t._v(t._s(e.name))])])})),0)},ht=[];const gt={data(){return{food:[{id:0,name:"Vegeburger",img:"3.webp",weight:350,proteins:30,carbs:20,fats:5,energy:451},{id:2,name:"Kokosový dort",img:"1.webp",weight:80,proteins:10,carbs:36,fats:12,energy:624},{id:3,name:"Kaše",img:"2.webp",weight:100,proteins:30,carbs:18,fats:4,energy:204},{id:5,name:"Čajový puding",img:"5.webp",weight:231,proteins:3,carbs:17,fats:2,energy:91},{id:7,name:"Zeleninové wrapy",img:"7.webp",weight:280,proteins:32,carbs:10,fats:2,energy:324},{id:8,name:"Celozrnné plněné wrapy",img:"8.webp",weight:280,proteins:42,carbs:24,fats:15,energy:424}]}},methods:{send(t){this.$emit("selected",t)}}},_t=gt;var bt=(0,d.Z)(_t,ft,ht,!1,null,"47e8a93f",null);const kt=bt.exports;var wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table_holder"},[t.food.length>0?a("div",[a("table",[t._m(0),a("tbody",[t._l(t.food,(function(e,n){return a("tr",{key:n},[a("td",[t._v(t._s(e.name)+" ("+t._s(e.weight*e.amount)+"g)")]),a("td",{staticClass:"amount"},[a("span",[a("i",{staticClass:"fas fa-minus",on:{click:function(a){return t.down(e.id)}}}),t._v(" "+t._s(e.amount)+" "),a("i",{staticClass:"fas fa-plus",on:{click:function(a){return t.up(e.id)}}})])]),a("td",[t._v(t._s(Math.floor(e.proteins*(e.weight/100))*e.amount)+"g")]),a("td",[t._v(t._s(Math.floor(e.carbs*(e.weight/100))*e.amount)+"g")]),a("td",[t._v(t._s(Math.floor(e.fats*(e.weight/100))*e.amount)+"g")]),a("td",[t._v(t._s(Math.floor(e.energy*(e.weight/100))*e.amount)+"kcal")]),a("td",[a("i",{staticClass:"fas fa-trash red",on:{click:function(a){return t.remove(e.id)}}})])])})),a("tr",{staticClass:"sum"},[a("td",[t._v("Celkem")]),a("td",[t._v(t._s(t.sum.amount))]),a("td",[t._v(t._s(t.sum.proteins)+"g")]),a("td",[t._v(t._s(t.sum.carbs)+"g")]),a("td",[t._v(t._s(t.sum.fats)+"g")]),a("td",[t._v(t._s(t.sum.energy)+"kcal")]),a("td")])],2)])]):t._e(),t.food.length>0?a("div",{staticClass:"recomendation"},[a("p",[t._v(" Protože se požadavky na výživu mění v závislosti na věku, hmotnosti, výšce, pohlaví a úrovni fyzické aktivity, nepředstavují tato denní množství cíle, jichý má být dosaženo, ale doporučené hodnoty, které byly stanoveny pro zdravého člověka s průměrnou hmotností a průměrnou fyzickou aktivitou. ")]),a("p",[t._v("Požadavky na energii se pohybují v rozmezí:")]),a("p",[t._v("1 500 až 2 000 kcal (6 300 až 8 400 kJ) denně u dětí")]),a("p",[t._v("2 200 až 2 700 kcal (9 240 až 11 340 kJ) denně u mužů")]),a("p",[t._v("1 800 až 2 200 kcal (7 560 až 9 240 kJ) denně u žen")])]):a("div",{staticClass:"nothing"},[a("p",[t._v("Vyberte si jídlo z nabídky")])])])},yt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("th",{attrs:{id:"name"}},[t._v("Název")]),a("th",{attrs:{id:"count"}},[t._v("Počet")]),a("th",{attrs:{id:"prot"}},[t._v("Bílkoviny")]),a("th",{attrs:{id:"carb"}},[t._v("Sacharidy")]),a("th",{attrs:{id:"fats"}},[t._v("Tuky")]),a("th",{attrs:{id:"ener"}},[t._v("Energie")]),a("th",{attrs:{id:"action"}})])}];const Ct={props:{food:{type:Array,required:!0}},methods:{up(t){this.food.find((e=>e.id===t)).amount++},down(t){this.food.find((e=>e.id===t)).amount>1?this.food.find((e=>e.id===t)).amount--:this.$emit("remove",t)},remove(t){this.$emit("remove",t)}},computed:{sum(){return this.food.reduce(((t,e)=>(t.proteins+=Math.floor(e.proteins*(e.weight/100))*e.amount,t.carbs+=Math.floor(e.carbs*(e.weight/100))*e.amount,t.fats+=Math.floor(e.fats*(e.weight/100))*e.amount,t.energy+=Math.floor(e.energy*(e.weight/100))*e.amount,t.amount+=e.amount,t)),{proteins:0,carbs:0,fats:0,energy:0,amount:0})}}},zt=Ct;var jt=(0,d.Z)(zt,wt,yt,!1,null,"22102b08",null);const xt=jt.exports,St={name:"NutritionCalculationView",components:{FoodSelection:kt,FoodSelected:xt},data(){return{selectedFood:[]}},methods:{add(t){console.log(t),this.selectedFood.some((e=>e.id===t.id))?this.selectedFood.find((e=>e.id===t.id)).amount++:this.selectedFood.push({amount:1,...t})},remove(t){this.selectedFood=this.selectedFood.filter((e=>e.id!==t))}}},Et=St;var Zt=(0,d.Z)(Et,mt,pt,!1,null,"3edc591e",null);const Ot=Zt.exports;var $t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"partnersView"},[a("Partners")],1)},Nt=[],Mt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Vt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"partners"}},[n("h1",[t._v("S jakými značkami spolupracujeme?")]),n("main",[n("div",{staticClass:"left"},[n("div",{staticClass:"small"},[n("a",{attrs:{href:"https://www.beyondmeat.com/",target:"_blank"}},[n("img",{attrs:{src:a(696),alt:""}})])]),n("div",{staticClass:"emptyBox"}),n("div",{staticClass:"big"},[n("a",{attrs:{href:"https://www.ju.st/",target:"_blank"}},[n("img",{attrs:{src:a(731),alt:""}})])]),n("div",{staticClass:"small"},[n("a",{attrs:{href:"https://www.oatly.com/",target:"_blank"}},[n("img",{attrs:{src:a(61),alt:""}})])])]),n("div",{staticClass:"right"},[n("p",[t._v(' Spolupracujeme s různými značkami, kteří netestují na zvířatech a jsou čistě veganské. Většina značek se snaží napodobit chuť a konzistenci různých neveganských věcí, ale ne-všichni jsou na této stravě z etických důvodů. Beyond emat používáme na naše burgery a podobné "masné" výrobky. ')])])])])}];const Ft={name:"Partners"},Pt=Ft;var Tt=(0,d.Z)(Pt,Mt,Vt,!1,null,"24b3f092",null);const At=Tt.exports,Lt={name:"PartnersView",components:{Partners:At}},It=Lt;var Kt=(0,d.Z)(It,$t,Nt,!1,null,"307cb98a",null);const Ut=Kt.exports;n.Z.use(g.Z);const Dt=[{path:"/",name:"home",component:vt},{path:"/nutritionCalculation",name:"nutritionCalculation",component:Ot},{path:"/partners",name:"partnersView",component:Ut}],Bt=new g.Z({mode:"history",base:"/restaurace-u-olgy/",routes:Dt}),qt=Bt;var Jt=a(629);n.Z.use(Jt.ZP);const Gt=new Jt.ZP.Store({state:{},mutations:{},actions:{}});var Ht=a(947),Rt=a(436),Wt=a(417),Yt=a(810);n.Z.config.productionTip=!1,Ht.vI.add(Rt.mRB,Wt.vnX),n.Z.component("font-awesome-icon",Yt.GN);var Xt=a(81);n.Z.use(Xt),n.Z.use(Xt,{container:"body",duration:500,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),new n.Z({router:qt,store:Gt,render:function(t){return t(h)}}).$mount("#app")},731:(t,e,a)=>{"use strict";t.exports=a.p+"img/justLogo.95832c8a.svg"},132:(t,e,a)=>{"use strict";t.exports=a.p+"img/mainLogo.b53fbf1d.svg"},696:(t,e,a)=>{"use strict";t.exports=a.p+"img/newBeyondMeatLogo.d3364bc7.svg"},61:(t,e,a)=>{"use strict";t.exports=a.p+"img/oatlyLogo.b0f7819c.svg"},519:(t,e,a)=>{"use strict";t.exports=a.p+"img/1.312933fc.webp"},780:(t,e,a)=>{"use strict";t.exports=a.p+"img/2.4ab61599.webp"},840:(t,e,a)=>{"use strict";t.exports=a.p+"img/3.0d3aa211.webp"},868:(t,e,a)=>{"use strict";t.exports=a.p+"img/4.535ad47a.webp"},654:(t,e,a)=>{"use strict";t.exports=a.p+"img/5.d71cbf05.webp"},538:(t,e,a)=>{"use strict";t.exports=a.p+"img/6.a2d684bc.webp"},193:(t,e,a)=>{"use strict";t.exports=a.p+"img/7.5e64b839.webp"},53:(t,e,a)=>{"use strict";t.exports=a.p+"img/8.a5952573.webp"},425:(t,e,a)=>{"use strict";t.exports=a.p+"img/9.170f81b7.webp"}},e={};function a(n){var s=e[n];if(void 0!==s)return s.exports;var o=e[n]={id:n,loaded:!1,exports:{}};return t[n].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}a.m=t,(()=>{var t=[];a.O=(e,n,s,o)=>{if(!n){var r=1/0;for(d=0;d<t.length;d++){for(var[n,s,o]=t[d],i=!0,c=0;c<n.length;c++)(!1&o||r>=o)&&Object.keys(a.O).every((t=>a.O[t](n[c])))?n.splice(c--,1):(i=!1,o<r&&(r=o));if(i){t.splice(d--,1);var l=s();void 0!==l&&(e=l)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[n,s,o]}})(),(()=>{a.n=t=>{var e=t&&t.__esModule?()=>t["default"]:()=>t;return a.d(e,{a:e}),e}})(),(()=>{a.d=(t,e)=>{for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()})(),(()=>{a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e)})(),(()=>{a.nmd=t=>(t.paths=[],t.children||(t.children=[]),t)})(),(()=>{a.p="/restaurace-u-olgy/"})(),(()=>{var t={143:0};a.O.j=e=>0===t[e];var e=(e,n)=>{var s,o,[r,i,c]=n,l=0;if(r.some((e=>0!==t[e]))){for(s in i)a.o(i,s)&&(a.m[s]=i[s]);if(c)var d=c(a)}for(e&&e(n);l<r.length;l++)o=r[l],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(d)},n=self["webpackChunkvegan"]=self["webpackChunkvegan"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var n=a.O(void 0,[998],(()=>a(817)));n=a.O(n)})();
//# sourceMappingURL=app.07f19a3a.js.map