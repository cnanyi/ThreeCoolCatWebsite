(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fde85d5"],{"2a14":function(t,a,s){"use strict";var e=s("d649"),i=s.n(e);i.a},d649:function(t,a,s){},f869:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"taskManage unoverlay"},[s("el-main",{staticClass:"mainBox",style:t.defaultHeight},[s("div",{staticClass:"boxBack"},[s("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center",gutter:30}},[s("el-col",{attrs:{span:4}},[s("div",{staticClass:"allTask",on:{click:function(a){return t.goPageTask(0)}}},[s("div",{staticClass:"triangle"},[s("span",[t._v(t._s(t.task[0]))])]),s("i",{staticClass:"el-icon-document"}),s("p",[t._v("所有任务")]),s("p",[t._v("数量 "+t._s(t.task[0]))])])]),s("el-col",{attrs:{span:4}},[s("div",{staticClass:"allTask finishedNotTask",on:{click:function(a){return t.goPageTask(1)}}},[s("div",{staticClass:"triangleNot"},[s("span",[t._v(t._s(t.task[1]))])]),s("i",{staticClass:"el-icon-document-delete"}),s("p",[t._v("未完成任务 ")]),s("p",[t._v("数量 "+t._s(t.task[1]))])])]),s("el-col",{attrs:{span:4}},[s("div",{staticClass:"allTask finishedTask",on:{click:function(a){return t.goPageTask(2)}}},[s("div",{staticClass:"triangle"},[s("span",[t._v(t._s(t.task[2]))])]),s("i",{staticClass:"el-icon-document-checked"}),s("p",[t._v("已完成任务")]),s("p",[t._v("数量 "+t._s(t.task[2]))])])]),s("el-col",{attrs:{span:4}},[s("div",{staticClass:"allTask appointTask",on:{click:function(a){return t.goPageTask(3)}}},[s("div",{staticClass:"triangle"},[s("span",[t._v(t._s(t.task[3]))])]),s("i",{staticClass:"el-icon-edit-outline"}),s("p",[t._v("我指派的任务")]),s("p",[t._v("数量 "+t._s(t.task[3]))])])])],1)],1)])],1)},i=[],n={name:"taskManagement",data:function(){return{defaultHeight:{height:""},task:[10,20,30,5]}},created:function(){},filters:{},mounted:function(){var t=this;this.$nextTick((function(){window.addEventListener("resize",t.getHeight),t.getHeight()}))},methods:{getHeight:function(){this.defaultHeight.height=window.innerHeight-90+"px"},goPageTask:function(t){localStorage.setItem("tabPage",t),this.$router.push({path:"/taskManageList/"+t})}}},c=n,l=(s("2a14"),s("0c7c")),o=Object(l["a"])(c,e,i,!1,null,"3e456a28",null);a["default"]=o.exports}}]);