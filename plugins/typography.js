!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports.BalmUI=t():e.BalmUI=t()}("undefined"!==typeof self?self:this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="QZ6M")}({QZ6M:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=["display4","display3","display2","display1","headline","title","subheading2","subheading1","body2","body1","caption"],r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=o.includes(e.toLowerCase())?["mdc-typography--"+e]:[];return t&&n.push("mdc-typography--adjust-margin"),n.join(" ")},i={install:function(e){document.querySelector("body").classList.add("mdc-typography"),e.prototype.$tt=r}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(i),t.default=i}})});