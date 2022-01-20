(function(e){function t(t){for(var r,a,u=t[0],s=t[1],i=t[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==c[s]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var b=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2ab3":function(e,t,n){"use strict";n("7fab")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(e,t,n,c,o,a){var u=Object(r["i"])("Container");return Object(r["e"])(),Object(r["c"])(u,{msg:"Welcome to Your Vue.js App"})}var o=n("8861"),a=n.n(o),u=n("e7c9"),s=n.n(u),i=Object(r["l"])("data-v-5dd05691");Object(r["g"])("data-v-5dd05691");var b={class:"container"},l=Object(r["d"])("div",{class:"title"},[Object(r["d"])("img",{class:"logo",src:a.a})],-1),d={class:"content"},f={key:0},m={class:"top-row"},p={class:"bottom-row"},O={key:1,class:"instructions"},j=Object(r["d"])("span",{style:{color:"white","font-size":"1.5rem","letter-spacing":"3px"}},"Press button to generate numbers!",-1),v=Object(r["d"])("div",{style:{height:"100px"}},[Object(r["d"])("img",{class:"arrows",src:s.a})],-1),g=Object(r["d"])("span",{class:"footer"},"Made by Pavlek",-1);Object(r["f"])();var h=i((function(e,t,n,c,o,a){var u=Object(r["i"])("digit");return Object(r["e"])(),Object(r["c"])("div",b,[l,Object(r["d"])("div",d,[a.numbersExist?(Object(r["e"])(),Object(r["c"])("div",f,[Object(r["d"])("div",m,[(Object(r["e"])(!0),Object(r["c"])(r["a"],null,Object(r["h"])(e.mainNumbers,(function(e){return Object(r["e"])(),Object(r["c"])(u,{number:e,key:e,color:"purple"},null,8,["number"])})),128))]),Object(r["d"])("div",p,[(Object(r["e"])(!0),Object(r["c"])(r["a"],null,Object(r["h"])(e.secondaryNumbers,(function(e){return Object(r["e"])(),Object(r["c"])(u,{number:e,key:e,color:"yellow"},null,8,["number"])})),128))])])):(Object(r["e"])(),Object(r["c"])("div",O,[j,v]))]),Object(r["d"])("div",{class:"myButton",onClick:t[1]||(t[1]=Object(r["k"])((function(){return a.generateNumbers&&a.generateNumbers.apply(a,arguments)}),["stop"]))}),g])})),y=n("1da1"),w=(n("caad"),n("2532"),n("96cf"),Object(r["l"])("data-v-719105f5"));Object(r["g"])("data-v-719105f5");var N={class:"number-container"};Object(r["f"])();var k=w((function(e,t,n,c,o,a){return Object(r["e"])(),Object(r["c"])("div",N,[Object(r["d"])("span",{class:["text",n.color]},Object(r["j"])(n.number),3)])})),x=(n("a9e3"),{name:"Digit",props:{number:Number,color:String}}),_=(n("2ab3"),n("d959")),P=n.n(_);const C=P()(x,[["render",k],["__scopeId","data-v-719105f5"]]);var M=C,S={name:"Container",components:{Digit:M},props:{msg:String},data:function(){return{mainNumbers:[],secondaryNumbers:[]}},methods:{generateNumbers:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.mainNumbers=[],e.secondaryNumbers=[];case 2:return t.next=4,e.generate5();case 4:e.checkTwoThreeConstraint(e.mainNumbers)&&e.checkOddEvenConstraint(e.mainNumbers)||(e.mainNumbers=[]);case 5:if(e.mainNumbers.length<5){t.next=2;break}case 6:while(e.secondaryNumbers.length<2)e.generateNewNumber(e.secondaryNumbers,10);e.mainNumbers.sort((function(e,t){return e-t})),e.secondaryNumbers.sort((function(e,t){return e-t}));case 9:case"end":return t.stop()}}),t)})))()},generateNewNumber:function(e,t){var n=Math.floor(Math.random()*t)+1;e.includes(n)||e.push(n)},generate5:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:while(e.mainNumbers.length<5)e.generateNewNumber(e.mainNumbers,50);case 1:case"end":return t.stop()}}),t)})))()},checkTwoThreeConstraint:function(e){for(var t=0,n=0,r=0;r<e.length;r++)e[r]<25?t++:n++;return 3===t&&2===n||2===t&&3===n},checkOddEvenConstraint:function(e){for(var t=0,n=0,r=0;r<e.length;r++)e[r]%2!=0?t++:n++;return 3===t&&2===n||2===t&&3===n}},computed:{numbersExist:function(){return this.mainNumbers.length>0}}};n("9b84");const T=P()(S,[["render",h],["__scopeId","data-v-5dd05691"]]);var E=T,R={name:"App",components:{Container:E}};n("5e8b");const A=P()(R,[["render",c]]);var D=A;Object(r["b"])(D).mount("#app")},"5e8b":function(e,t,n){"use strict";n("ece5")},"6c5f":function(e,t,n){},"7fab":function(e,t,n){},8861:function(e,t,n){e.exports=n.p+"img/coin.2ec1806a.svg"},"9b84":function(e,t,n){"use strict";n("6c5f")},e7c9:function(e,t,n){e.exports=n.p+"img/arrows.b73016b3.png"},ece5:function(e,t,n){}});
//# sourceMappingURL=app.8d9eae7a.js.map