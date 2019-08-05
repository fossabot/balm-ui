(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"x7+/":function(e,a,i){"use strict";i.r(a);var o=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{class:[e.$tt("body1"),"demo--event"]},[i("section",{staticClass:"hero plugin"},[i("h2",{class:e.$tt("headline4")},[e._v("$balmUI")])]),e._v(" "),i("ui-toc-affix",{attrs:{withoutCss:""}}),e._v(" "),i("div",{class:e.$tt("body2")},[i("h4",{directives:[{name:"anchor",rawName:"v-anchor:id",value:"ui-usage",expression:"'ui-usage'",arg:"id"}],class:e.$tt("headline4")},[e._v("0. Usage")]),e._v(" "),i("ui-markdown",{attrs:{text:e.code[0]}}),e._v(" "),i("h4",{directives:[{name:"anchor",rawName:"v-anchor:id",value:"ui-example",expression:"'ui-example'",arg:"id"}],class:e.$tt("headline4")},[e._v("1. Example")]),e._v(" "),i("div",{staticClass:"example"},[i("h6",{class:e.$tt("headline6")},[e._v("1.1 onChange")]),e._v(" "),i("ui-grid",[i("ui-grid-cell",{attrs:{colspan:"6"}},[i("label",[e._v("Vue methods")]),e._v(" "),i("p",[i("ui-button",{attrs:{raised:""},on:{click:e.showMessage}},[e._v("Show message")]),e._v(" "),i("ui-button",{attrs:{outlined:""},on:{click:e.clearMessage}},[e._v("Clear")])],1),e._v(" "),i("p",[e._v(e._s(e.message1))]),e._v(" "),i("ui-accordion",[i("ui-markdown",{attrs:{code:e.code[1]}})],1)],1),e._v(" "),i("ui-grid-cell",{attrs:{colspan:"6"}},[i("label",[e._v("$balmUI")]),e._v(" "),i("p",[i("ui-button",{attrs:{raised:""},on:{click:function(a){return e.$balmUI.onChange("message2","Hello BalmUI")}}},[e._v("Show message")]),e._v(" "),i("ui-button",{attrs:{outlined:""},on:{click:function(a){return e.$balmUI.onChange("message2","")}}},[e._v("Clear")])],1),e._v(" "),i("p",[e._v(e._s(e.message2))]),e._v(" "),i("ui-accordion",[i("ui-markdown",{attrs:{code:e.code[2]}})],1)],1)],1)],1),e._v(" "),i("div",{staticClass:"example"},[i("h6",{class:e.$tt("headline6")},[e._v("1.2 onShow/onHide")]),e._v(" "),i("ui-grid",[i("ui-grid-cell",{attrs:{colspan:"6"}},[i("label",[e._v("Vue methods")]),e._v(" "),i("p",[i("ui-button",{attrs:{raised:""},on:{click:e.openDialog}},[e._v("Open dialog")])],1),e._v(" "),i("ui-dialog",{model:{value:e.open1,callback:function(a){e.open1=a},expression:"open1"}},[i("ui-dialog-content",[e._v("Dialog content")]),e._v(" "),i("ui-dialog-actions",[i("ui-button",{on:{click:e.closeDialog}},[e._v("Close dialog")])],1)],1),e._v(" "),i("ui-accordion",[i("ui-markdown",{attrs:{text:e.code[3]}})],1)],1),e._v(" "),i("ui-grid-cell",{attrs:{colspan:"6"}},[i("label",[e._v("$balmUI")]),e._v(" "),i("p",[i("ui-button",{attrs:{raised:""},on:{click:function(a){return e.$balmUI.onShow("open2")}}},[e._v("Open dialog")])],1),e._v(" "),i("ui-dialog",{model:{value:e.open2,callback:function(a){e.open2=a},expression:"open2"}},[i("ui-dialog-content",[i("p",[e._v("Open dialog: `$balmUI.onShow('open')`")]),e._v(" "),i("p",[e._v("Close dialog: `$balmUI.onHide('open')`")])]),e._v(" "),i("ui-dialog-actions",[i("ui-button",{on:{click:function(a){return e.$balmUI.onHide("open2")}}},[e._v("Close dialog")])],1)],1),e._v(" "),i("ui-accordion",[i("ui-markdown",{attrs:{text:e.code[4]}})],1)],1)],1)],1),e._v(" "),i("h4",{directives:[{name:"anchor",rawName:"v-anchor:id",value:"ui-apis",expression:"'ui-apis'",arg:"id"}],class:e.$tt("headline4")},[e._v("2. APIs")]),e._v(" "),i("ui-apidocs",{attrs:{name:"event",type:"plugin"}})],1)],1)};o._withStripped=!0;var t={metaInfo:{titleTemplate:"%s - Event"},mixins:[i("HRpM").a],data:function(){return{message1:"No message",message2:"No message",open1:!1,open2:!1}},created:function(){this.showCode("event",4)},methods:{showMessage:function(){this.message1="Hello BalmUI"},clearMessage:function(){this.message1=""},openDialog:function(){this.open1=!0},closeDialog:function(){this.open1=!1}}},n=i("KHd+"),s=Object(n.a)(t,o,[],!1,null,null,null);s.options.__file="docs/scripts/views/plugins/event.vue";a.default=s.exports}}]);