!function(e,o){"object"===typeof exports&&"object"===typeof module?module.exports=o():"function"===typeof define&&define.amd?define([],o):"object"===typeof exports?exports.BalmUI=o():e.BalmUI=o()}("undefined"!==typeof self?self:this,function(){return function(e){function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}var t={};return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},o.p="",o(o.s="ZyCO")}({Zbun:function(e,o,t){var n=t("iANj"),r=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return r.stringify.apply(r,arguments)}},ZyCO:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=t("mvHQ"),r=t.n(n),i=["primary","primary-light","primary-dark","secondary","secondary-light","secondary-dark","background"],u=["primary","secondary","hint","disabled","icon"],c=["light","dark"],a=i.concat(c),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t="",n=e.toLowerCase();if(i.includes(n)){t="mdc-theme--"+n;o&&"background"!==n&&(t+="-bg")}else console.warn("Please choose a theme color: "+r()(i));return t},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t="";return u.includes(e.toLowerCase())?a.includes(o.toLowerCase())?t="mdc-theme--text-"+e+"-on-"+o:console.warn("Please choose a text theme color: "+r()(a)):console.warn("Please choose a text color: "+r()(u)),t},d={install:function(e){e.prototype.$themeColor=s,e.prototype.$textColor=l}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(d),o.default=d},iANj:function(e,o){var t=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=t)},mvHQ:function(e,o,t){e.exports={default:t("Zbun"),__esModule:!0}}})});