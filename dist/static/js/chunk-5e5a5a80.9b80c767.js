(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e5a5a80"],{"2ffb":function(t,i,e){"use strict";var s=e("a666"),a=e.n(s);a.a},6713:function(t,i,e){t.exports=e.p+"static/img/4_u6308.cf0095cf.png"},"92ef":function(t,i,e){t.exports=e.p+"static/img/1_u6302.50d9f354.png"},"94c5":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("div",{staticClass:"wit-page"},[s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.videoShow,expression:"videoShow"}],staticClass:"video-dialog"},[s("div",{staticClass:"dialog_movie_box"},[s("video",{attrs:{controls:"controls",autoplay:"autoplay",loop:"loop"}},[s("source",{attrs:{src:e("ec43"),type:"video/mp4"}})])]),s("a",{staticClass:"el-icon-close table_task_name",attrs:{size:"big"},on:{click:function(i){return t.showVideo()}}})])]),s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.pictureShow,expression:"pictureShow"}],staticClass:"picture-dialog"},[s("div",{staticClass:"swiper-container"},[s("div",{staticClass:"swiper-wrapper"},t._l(t.pictureList,(function(i,a){return s("div",{key:a,staticClass:"swiper-slide pictureItem"},[s("img",{directives:[{name:"show",rawName:"v-show",value:0==i.id,expression:"item.id==0"}],attrs:{src:e("92ef"),alt:""},on:{click:t.showVideo}}),s("img",{directives:[{name:"show",rawName:"v-show",value:1==i.id,expression:"item.id==1"}],attrs:{src:e("db58"),alt:""},on:{click:t.showVideo}}),s("img",{directives:[{name:"show",rawName:"v-show",value:2==i.id,expression:"item.id==2"}],attrs:{src:e("b254"),alt:""},on:{click:t.showVideo}}),s("img",{directives:[{name:"show",rawName:"v-show",value:3==i.id,expression:"item.id==3"}],attrs:{src:e("6713"),alt:""},on:{click:t.showVideo}}),s("a",{staticClass:"el-icon-close table_task_name",attrs:{size:"big"},on:{click:function(e){return t.close_one(i.id)}}})])})),0)])])]),s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"list-dialog",style:{top:t.pageHeight-360+"px"}},[s("div",{staticClass:"dialog-header"},[s("i",{staticClass:"header-icon icon-left"}),s("span",{staticClass:"header-title"},[s("span",{staticClass:"text"},[t._v("监控详细信息")]),s("span",[t._v("Monitoring details")])]),s("i",{staticClass:"header-icon icon-right"})]),s("div",{staticClass:"dialog-body"},[s("el-table",{attrs:{data:t.tableData,stripe:"",height:"235"}},[s("el-table-column",{attrs:{prop:"name",label:"节点负责人",align:"center","show-overflow-tooltip":""}}),s("el-table-column",{attrs:{prop:"starteTime",label:"开始时间",align:"center","show-overflow-tooltip":""}}),s("el-table-column",{attrs:{prop:"endTime",label:"结束时间",align:"center","show-overflow-tooltip":""}}),s("el-table-column",{attrs:{prop:"human",label:"关键节点",align:"center","show-overflow-tooltip":""}}),s("el-table-column",{attrs:{prop:"reson",label:"实际施工进度",width:"120",align:"center","show-overflow-tooltip":""}}),s("el-table-column",{attrs:{prop:"jihua",label:"计划匹配度",align:"center","show-overflow-tooltip":""}})],1)],1),s("a",{staticClass:"el-icon-close table_task_name",attrs:{size:"big"},on:{click:function(i){return t.list_delete()}}})])])],1)])},a=[],o=e("d090"),n=e.n(o),l={props:{onMapClick:{type:Object,default:function(t){}}},watch:{onMapClick:function(t,i){this.handleOnMapClick(t,i)}},data:function(){return{pageHeight:window.innerHeight-96,tableData:[{name:"倪飞飞",reson:"50%",starteTime:"2020/2/5",human:"项目初期",endTime:"2020/6/5",jihua:"100%"},{name:"赵一",reson:"80%",starteTime:"2020/2/5",human:"实测期",endTime:"2020/6/5",jihua:"100%"},{name:"李柏凝",reson:"50%",starteTime:"2020/2/5",human:"共轨证",endTime:"2020/6/5",jihua:"100%"},{name:"赵一",reson:"80%",starteTime:"2020/2/5",human:"项目立项",endTime:"2020/6/5",jihua:"100%"}],pictureList:[{imgUrl:"../../assets/img/1_u6302.png",id:0},{imgUrl:"../../assets/img/2_u6304.png",id:1},{imgUrl:"../../assets/img/3_u6306.png",id:2},{imgUrl:"../../assets/img/4_u6308.png",id:3}],videoShow:!1,pictureShow:!1,listShow:!1,oneShow:!1,twoShow:!1}},created:function(){},mounted:function(){this.$nextTick((function(){}))},computed:{},methods:{swiperInit:function(){new n.a(".swiper-container",{loop:!1,speed:200,notNextTick:!0,initialSlide:0,slidesPerView:2,spaceBetween:10})},handleOnMapClick:function(t,i){var e=this;this.pictureShow=!this.pictureShow,this.listShow=!this.listShow,this.oneShow=!this.oneShow,this.twoShow=!this.twoShow,this.pictureList=[{imgUrl:"../../assets/img/1_u6302.png",id:0},{imgUrl:"../../assets/img/2_u6304.png",id:1},{imgUrl:"../../assets/img/3_u6306.png",id:2},{imgUrl:"../../assets/img/4_u6308.png",id:3}],setTimeout((function(){e.swiperInit()}),1e3)},showVideo:function(){this.videoShow=!this.videoShow},list_delete:function(){this.handleOnMapClick()},close_delete:function(){this.videoShow=!this.videoShow},close_one:function(t){var i=this;this.pictureList.some((function(e,s){if(e.id==t)return i.pictureList.splice(s,1),!0}))}},components:{}},r=l,c=(e("2ffb"),e("0c7c")),p=Object(c["a"])(r,s,a,!1,null,"9701fab4",null);i["default"]=p.exports},a666:function(t,i,e){},b254:function(t,i,e){t.exports=e.p+"static/img/3_u6306.281102d5.png"},db58:function(t,i,e){t.exports=e.p+"static/img/2_u6304.68b621d7.png"},ec43:function(t,i,e){t.exports=e.p+"static/media/3.0cfa331b.mp4"}}]);