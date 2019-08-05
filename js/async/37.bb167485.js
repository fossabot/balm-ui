(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"/NPr":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:[e.$tt("body1"),"demo--table"]},[a("section",{staticClass:"hero component"},[a("ui-table",{attrs:{rowCheckbox:"",data:e.heroData,thead:e.thead1,tbody:e.tbody1}})],1),e._v(" "),a("ui-toc-affix"),e._v(" "),a("div",{class:e.$tt("body2")},[a("h4",{directives:[{name:"anchor",rawName:"v-anchor:id",value:"ui-usage",expression:"'ui-usage'",arg:"id"}],class:e.$tt("headline4")},[e._v("0. Usage")]),e._v(" "),a("ui-markdown",{attrs:{text:e.code[0]}}),e._v(" "),a("h4",{directives:[{name:"anchor",rawName:"v-anchor:id",value:"ui-example",expression:"'ui-example'",arg:"id"}],class:e.$tt("headline4")},[e._v("1. Example")]),e._v(" "),a("section",{staticClass:"example"},[a("h6",{class:e.$tt("headline6")},[e._v("1.1 Default Usage")]),e._v(" "),a("ui-table",{attrs:{data:e.heroData,thead:e.thead1,tbody:e.tbody1}})],1),e._v(" "),a("ui-accordion",[a("ui-markdown",{attrs:{code:e.code[1]}})],1),e._v(" "),a("section",{staticClass:"example"},[a("h6",{class:e.$tt("headline6")},[e._v("1.2 Advanced Usage")]),e._v(" "),a("p",[e._v("Selected rows: "+e._s(e.selectedRows)+" ( Selected key: "+e._s(e.selectedKey)+")")]),e._v(" "),a("ui-table",{attrs:{fullwidth:"",rowCheckbox:"",data:e.data,thead:e.thead2,tbody:e.tbody2,tfoot:e.tfoot,selectedKey:e.selectedKey},scopedSlots:e._u([{key:"actions",fn:function(t){var s=t.data;return[a("ui-icon",{on:{click:function(t){return e.show(s)}}},[e._v("description")]),e._v(" "),a("ui-icon",{on:{click:function(t){return e.show(s)}}},[e._v("edit")]),e._v(" "),a("ui-icon",{on:{click:function(t){return e.show(s)}}},[e._v("delete")])]}}]),model:{value:e.selectedRows,callback:function(t){e.selectedRows=t},expression:"selectedRows"}})],1),e._v(" "),a("ui-accordion",[a("ui-markdown",{attrs:{code:e.code[2]}})],1),e._v(" "),a("h4",{directives:[{name:"anchor",rawName:"v-anchor:id",value:"ui-apis",expression:"'ui-apis'",arg:"id"}],class:e.$tt("headline4")},[e._v("2. APIs")]),e._v(" "),a("ui-apidocs",{attrs:{name:"table"}}),e._v(" "),a("h4",{directives:[{name:"anchor",rawName:"v-anchor:id",value:"ui-sass",expression:"'ui-sass'",arg:"id"}],class:e.$tt("headline4")},[e._v("3. Sass Variables")]),e._v(" "),a("ui-cssdocs",{attrs:{name:"table"}})],1)],1)};s._withStripped=!0;var i=a("o0o1"),n=a.n(i),o=a("yXPU"),r=a.n(o),c={metaInfo:{titleTemplate:"%s - Table"},mixins:[a("HRpM").a],data:function(){return{heroData:[],data:[],thead1:["ID","Dessert (100g serving)","Calories","Fat (g)","Carbs (g)","Protein (g)"],tbody1:["id","dessert","calories","fat","carbs","protein"],thead2:[[{value:"ID",rowspan:2},{value:"Type1",colspan:2,align:"center"},{value:"Type2",colspan:3,align:"center"},{value:"Actions",rowspan:2}],[{value:"Dessert (100g serving)",class:"gg"},"Calories","Fat (g)","Carbs (g)","Protein (g)"]],tbody2:["id","dessert",{field:"calories",numeric:!0,class:"test"},{field:"fat",fn:function(e){return e.fat.toFixed(1)}},"carbs",{field:"protein",class:function(e){return e.protein>5?"red":"green"}},{slot:"actions"}],tfoot:[{field:"id",fnName:"count"},null,{field:"calories",fnName:"sum",align:"right",class:"test"},{field:"fat",fnName:"avg"},{field:"carbs",fnName:"max"},{field:"protein",fnName:"min"}],selectedRows:[1,2,4],selectedKey:"id"}},created:function(){var e=r()(n.a.mark(function e(){var t,a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.showCode("table",2),e.next=3,this.$http.get("/data/table.json");case 3:t=e.sent,a=t.data,this.data=a,this.heroData=a.slice(0,3);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),methods:{show:function(e){console.log(e)}}},d=a("KHd+"),l=Object(d.a)(c,s,[],!1,null,null,null);l.options.__file="docs/scripts/views/components/table.vue";t.default=l.exports}}]);