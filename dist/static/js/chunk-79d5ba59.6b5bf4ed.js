(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79d5ba59"],{"7ae4":function(e,t,a){},8045:function(e,t,a){"use strict";var l=a("7ae4"),s=a.n(l);s.a},c706:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"taskList"},[a("el-row",{staticStyle:{padding:"20px 10px"}},[a("el-breadcrumb",{staticClass:"pageTab",attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{name:"taskManagement",params:{pageName:e.pageName}}},on:{click:e.goTaskaManage}},[e._v("返回")]),a("el-breadcrumb-item",[e._v(e._s(e.pageName))])],1)],1),a("taskselect")],1)},s=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"taskSelect"},[a("el-form",{ref:"form",attrs:{"label-width":"80px",model:e.taskSelectform}},[a("el-row",[a("el-col",{attrs:{span:2}},[a("el-button",{attrs:{type:"primary"},on:{click:e.notFinishTask}},[e._v("未完成任务")])],1),a("el-col",{attrs:{span:2}},[a("el-button",{attrs:{type:"primary"},on:{click:e.finishTask}},[e._v("已完成任务")])],1),a("el-col",{staticClass:"point",attrs:{span:3}},[a("el-form-item",{attrs:{"label-width":"1px"}},[a("span",[a("el-checkbox",{model:{value:e.taskSelectform.pointCheck,callback:function(t){e.$set(e.taskSelectform,"pointCheck",t)},expression:"taskSelectform.pointCheck"}},[e._v("仅显示我指派的")])],1)])],1),a("el-col",{staticStyle:{"margin-left":"0px"},attrs:{span:1}},[a("el-button",{attrs:{type:"primary"},on:{click:e.pointTaskClick}},[e._v("指派任务")])],1),a("el-col",{staticStyle:{"margin-left":"25px"},attrs:{span:3}},[a("el-form-item",{attrs:{label:"指派人"}},[a("el-input",{model:{value:e.taskSelectform.pointName,callback:function(t){e.$set(e.taskSelectform,"pointName",t)},expression:"taskSelectform.pointName"}})],1)],1),a("el-col",{attrs:{span:3}},[a("el-form-item",{attrs:{label:"执行人"}},[a("el-input",{model:{value:e.taskSelectform.playName,callback:function(t){e.$set(e.taskSelectform,"playName",t)},expression:"taskSelectform.playName"}})],1)],1),a("el-col",{attrs:{span:3}},[a("el-form-item",{attrs:{label:"创建日期"}},[a("el-date-picker",{staticStyle:{background:"#355486","border-color":"#355486"},attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.taskSelectform.title,callback:function(t){e.$set(e.taskSelectform,"title",t)},expression:"taskSelectform.title"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:3}},[a("el-form-item",{attrs:{"label-width":"1px"}},[a("el-input",{attrs:{placeholder:"请输入任务名称"},model:{value:e.taskSelectform.playName,callback:function(t){e.$set(e.taskSelectform,"playName",t)},expression:"taskSelectform.playName"}})],1)],1),a("el-col",{attrs:{span:8}},[2!=this.typeId?a("el-form-item",{attrs:{label:"任务状态"}},[a("el-checkbox",{attrs:{indeterminate:e.isIndeterminateStatus},on:{change:e.handleCheckAllStatus},model:{value:e.checkAllStatus,callback:function(t){e.checkAllStatus=t},expression:"checkAllStatus"}},[e._v("全选")]),a("el-checkbox-group",{staticStyle:{display:"inline-block","margin-left":"10px"},on:{change:e.handleCheckedStatus},model:{value:e.taskSelectform.taskStatus,callback:function(t){e.$set(e.taskSelectform,"taskStatus",t)},expression:"taskSelectform.taskStatus"}},e._l(e.taskStatusList,(function(t){return a("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])})),1)],1):e._e()],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"优先级"}},[a("el-checkbox",{attrs:{indeterminate:e.isIndeterminateSequence},on:{change:e.handleCheckAllSequence},model:{value:e.checkAllSequence,callback:function(t){e.checkAllSequence=t},expression:"checkAllSequence"}},[e._v("全选")]),a("el-checkbox-group",{staticStyle:{display:"inline-block","margin-left":"10px"},on:{change:e.handleCheckedSequence},model:{value:e.taskSelectform.sequence,callback:function(t){e.$set(e.taskSelectform,"sequence",t)},expression:"taskSelectform.sequence"}},e._l(e.taskSequenceList,(function(t){return a("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])})),1)],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:5}},[a("el-button",{staticClass:"search_btn",attrs:{type:"primary"}},[e._v("查询")]),a("el-button",{staticClass:"search_btn",attrs:{type:"info"}},[e._v("重置")]),a("el-button",{staticClass:"search_btn",attrs:{type:"primary"}},[e._v("导出")])],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"任务类型"}},[a("el-checkbox",{attrs:{indeterminate:e.isIndeterminateType},on:{change:e.handleCheckAllType},model:{value:e.checkAllType,callback:function(t){e.checkAllType=t},expression:"checkAllType"}},[e._v("全选")]),a("el-checkbox-group",{staticStyle:{display:"inline-block","margin-left":"10px"},on:{change:e.handleCheckedType},model:{value:e.taskSelectform.taskType,callback:function(t){e.$set(e.taskSelectform,"taskType",t)},expression:"taskSelectform.taskType"}},e._l(e.taskTypeList,(function(t){return a("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])})),1)],1)],1)],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.taskTableData}},[a("el-table-column",{attrs:{align:"center",type:"index",label:"序号",width:"50"}}),a("el-table-column",{attrs:{align:"center",label:"任务名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.handleClickTitle(t.row)}}},[e._v(e._s(t.row.tastName))])]}}])}),a("el-table-column",{attrs:{align:"center",sortable:"",prop:"sequence",label:"优先级"}}),a("el-table-column",{attrs:{align:"center",prop:"type",label:"类型"}}),a("el-table-column",{attrs:{align:"center",label:"指派人"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.handleClickTitle(t.row)}}},[e._v(e._s(t.row.pointor))])]}}])}),a("el-table-column",{attrs:{align:"center",sortable:"",prop:"taskStartTime",label:"任务启动时间"}}),a("el-table-column",{attrs:{align:"center",sortable:"",prop:"taskCreateTime",label:"任务创建时间"}}),a("el-table-column",{attrs:{align:"center",prop:"invisible",label:"可见性"}}),a("el-table-column",{attrs:{align:"center",prop:"status",label:"状态"}}),a("el-table-column",{attrs:{width:"200",align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"关闭",placement:"top"}},[a("i",{staticClass:"el-icon-circle-close",staticStyle:{color:"#409EFF"},attrs:{size:"small"},on:{click:function(a){return e.handleClickClose(t.row)}}})]),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"查看",placement:"top"}},[a("i",{staticClass:"el-icon-chat-dot-round",staticStyle:{color:"#409EFF"},attrs:{size:"small"},on:{click:function(a){return e.handleClickView(t.row)}}})])]}}])})],1),a("el-row",{staticClass:"row-bg",staticStyle:{background:"#3f629c",padding:"6px 0"},attrs:{type:"flex",justify:"center"}},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30,40],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:2},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),a("el-dialog",{attrs:{title:"任务详情",top:"5vh",visible:e.dialogTableVisibleTask},on:{"update:visible":function(t){e.dialogTableVisibleTask=t}}},[a("div",{staticClass:"taskDetails taskDetailsForm"},[a("el-form",{attrs:{model:e.formRow}},[a("el-row",[a("el-col",{attrs:{span:7}},[a("el-form-item",{attrs:{label:"指派人："}},[e._v(e._s(e.formRow.pointor))])],1),a("el-col",{attrs:{span:7}},[a("el-form-item",{attrs:{label:"任务类型："}},[e._v(e._s(e.formRow.type))])],1),a("el-col",{attrs:{span:7}},[a("el-form-item",{attrs:{label:"任务状态："}},[e._v(e._s(e.formRow.status))])],1)],1),a("el-row",[a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"任务状态："}},[e._v(e._s(e.formRow.status))])],1)],1),a("el-row",[a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"任务名称："}},[e._v(e._s(e.formRow.tastName))])],1)],1),a("el-row",[a("el-col",{attrs:{span:7}},[a("el-form-item",{attrs:{label:"优先级："}},[e._v(e._s(e.formRow.sequence))])],1),a("el-col",{attrs:{span:7}},[a("el-form-item",{attrs:{label:"可见性："}},[e._v(e._s(e.formRow.invisible))])],1)],1),a("el-row",[a("el-form-item",{attrs:{label:"指派时间："}},[e._v(e._s(e.formRow.taskStartTime))])],1),a("el-row",[a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"区域："}},[e._v(e._s(e.formRow.address))])],1)],1),a("el-row",[a("el-form-item",{attrs:{label:"详情描述："}},[e._v(e._s(e.formRow.sequence))])],1),a("el-row",[a("el-form-item",{attrs:{label:"相关文件："}},[e._v(e._s(e.formRow.file))])],1)],1),a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"执行人员",name:"first"}},[a("el-table",{attrs:{data:e.playPersonData}},[a("el-table-column",{attrs:{align:"center",property:"playId",label:"执行人编号",width:"150"}}),a("el-table-column",{attrs:{align:"center",property:"playName",label:"执行人姓名",width:"200"}}),a("el-table-column",{attrs:{align:"center",property:"playStatus",label:"执行情况"}}),a("el-table-column",{attrs:{align:"center",property:"finishTime",label:"完成时间"}}),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"催办",placement:"top"}},[a("i",{staticClass:"el-icon-chat-dot-round",staticStyle:{color:"#409EFF"},attrs:{size:"small"},on:{click:function(a){return e.handleUrge(t.row)}}})])]}}])})],1)],1),a("el-tab-pane",{attrs:{label:"执行明细",name:"second"}},[a("el-timeline",e._l(e.activities,(function(t,l){return a("el-timeline-item",{key:l,attrs:{placement:"top",timestamp:t.timestamp}},[a("p",[e._v("执行人："+e._s(t.content))]),a("p",[e._v("执行动作："+e._s(t.play))])])})),1)],1),a("el-tab-pane",{attrs:{label:"告警明细",name:"third"}},[a("el-form",{attrs:{model:e.inFormList}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"设备名称："}},[e._v(e._s(e.inFormList.deviceName))])],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"报警级别："}},[e._v(e._s(e.inFormList.levelAlarm))])],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"报警类型："}},[e._v(e._s(e.inFormList.typeAlarm))])],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"报警时间："}},[e._v(e._s(e.inFormList.timeAlarm))])],1)],1)],1)],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.handleClickClose}},[e._v("关 闭")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogTableVisibleTask=!1}}},[e._v("取 消")])],1)]),a("el-dialog",{attrs:{width:"40%",title:"关闭任务",visible:e.taskClose,"append-to-body":""},on:{"update:visible":function(t){e.taskClose=t}}},[a("el-form",{ref:"taskCloseForm",attrs:{model:e.taskCloseForm,rules:e.rules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"关闭原因",prop:"reasonClose"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.taskCloseForm.reasonClose,callback:function(t){e.$set(e.taskCloseForm,"reasonClose",t)},expression:"taskCloseForm.reasonClose"}},e._l(e.reasonCloseList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",[a("el-input",{attrs:{type:"textarea",rows:5,placeholder:"请输入内容",maxlength:"500","show-word-limit":""},model:{value:e.taskCloseForm.inptext,callback:function(t){e.$set(e.taskCloseForm,"inptext",t)},expression:"taskCloseForm.inptext"}})],1),a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleClickClose("taskCloseForm")}}},[e._v("保存")]),a("el-button",{on:{click:function(t){e.taskClose=!1}}},[e._v("取 消")])],1)],1)],1),a("taskappoint-dialog",{attrs:{show:e.show},on:{"update:show":function(t){e.show=t}}})],1)},r=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{staticClass:"pointForm",attrs:{width:"60%",title:"指派任务",top:"5vh",show:e.show,visible:e.pointTaskTabvisible},on:{close:function(t){return e.$emit("update:show",!1)},"update:visible":function(t){e.pointTaskTabvisible=t}}},[a("el-form",{ref:"pointTaskTabForm",attrs:{model:e.pointTaskTabForm,rules:e.pointTaskTabRules,"label-width":"120px"}},[a("div",{staticClass:"taskDetails"},[a("el-row",[a("el-col",{attrs:{span:20}},[a("el-form-item",{attrs:{label:"任务名称",prop:"tastName"}},[a("el-input",{attrs:{type:"text",placeholder:"请输入内容"},model:{value:e.pointTaskTabForm.tastName,callback:function(t){e.$set(e.pointTaskTabForm,"tastName",t)},expression:"pointTaskTabForm.tastName"}})],1)],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"优先级",prop:"sequence"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.pointTaskTabForm.sequence,callback:function(t){e.$set(e.pointTaskTabForm,"sequence",t)},expression:"pointTaskTabForm.sequence"}},e._l(e.sequenceOption,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"可见性",prop:"invisible"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.pointTaskTabForm.invisible,callback:function(t){e.$set(e.pointTaskTabForm,"invisible",t)},expression:"pointTaskTabForm.invisible"}},e._l(e.invisibleOption,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),a("el-col",{attrs:{span:20}},[a("el-form-item",{attrs:{label:"要求开始时间",prop:"taskStartTime"}},[a("el-date-picker",{attrs:{type:"datetime",disabled:3==e.pointTaskTabForm.type,placeholder:"选择日期时间","default-time":"12:00:00"},model:{value:e.pointTaskTabForm.taskStartTime,callback:function(t){e.$set(e.pointTaskTabForm,"taskStartTime",t)},expression:"pointTaskTabForm.taskStartTime"}})],1)],1),a("el-col",{attrs:{span:20}},[a("el-form-item",{attrs:{label:"任务类型",prop:"type"}},[a("el-radio-group",{model:{value:e.pointTaskTabForm.type,callback:function(t){e.$set(e.pointTaskTabForm,"type",t)},expression:"pointTaskTabForm.type"}},[a("el-radio",{attrs:{label:1}},[e._v("手工指派")]),a("el-radio",{attrs:{label:2}},[e._v("安全事件")]),a("el-radio",{attrs:{label:3}},[e._v("设备告警")])],1)],1)],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"区域",prop:"address"}},[a("el-input",{attrs:{type:"text",disabled:""},model:{value:e.pointTaskTabForm.address,callback:function(t){e.$set(e.pointTaskTabForm,"address",t)},expression:"pointTaskTabForm.address"}})],1)],1),a("el-col",{attrs:{span:2}},[a("el-button",{attrs:{type:"text"},on:{click:function(t){e.addressPopup=!0}}},[e._v("选择")])],1)],1),3==e.pointTaskTabForm.type?a("el-row",[a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"设备名称",prop:"deviceName"}},[a("el-input",{attrs:{type:"text"},model:{value:e.pointTaskTabForm.deviceName,callback:function(t){e.$set(e.pointTaskTabForm,"deviceName",t)},expression:"pointTaskTabForm.deviceName"}})],1)],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"告警级别",prop:"levelAlarm"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.pointTaskTabForm.levelAlarm,callback:function(t){e.$set(e.pointTaskTabForm,"levelAlarm",t)},expression:"pointTaskTabForm.levelAlarm"}},e._l(e.levelAlarmOption,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"告警类型",prop:"typeAlarm"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.pointTaskTabForm.typeAlarm,callback:function(t){e.$set(e.pointTaskTabForm,"typeAlarm",t)},expression:"pointTaskTabForm.typeAlarm"}},e._l(e.typeAlarmOption,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),a("el-col",{attrs:{span:20}},[a("el-form-item",{attrs:{label:"报警时间",prop:"timeAlarm"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间","default-time":"12:00:00"},model:{value:e.pointTaskTabForm.timeAlarm,callback:function(t){e.$set(e.pointTaskTabForm,"timeAlarm",t)},expression:"pointTaskTabForm.timeAlarm"}})],1)],1)],1):e._e(),a("el-row",[a("el-col",{attrs:{span:20}},[a("el-form-item",{attrs:{label:"执行人员",prop:"playPerson"}},[a("el-radio-group",{model:{value:e.pointTaskTabForm.playPerson,callback:function(t){e.$set(e.pointTaskTabForm,"playPerson",t)},expression:"pointTaskTabForm.playPerson"}},[a("el-radio",{attrs:{label:1}},[e._v("从分组中选择")]),a("el-radio",{attrs:{label:2}},[e._v("从地图中选择")])],1)],1)],1),1==e.pointTaskTabForm.playPerson?a("el-col",{attrs:{span:6}},[a("el-form-item",[a("div",{staticClass:"box"},[a("ul",[a("el-checkbox-group",{model:{value:e.checkListValue,callback:function(t){e.checkListValue=t},expression:"checkListValue"}},e._l(e.checkList,(function(t){return a("li",{key:t},[a("el-checkbox",{attrs:{label:t}},[e._v(e._s(t))])],1)})),0)],1)])])],1):e._e(),1==e.pointTaskTabForm.playPerson?a("el-col",{attrs:{span:6}},[a("el-form-item",[a("div",{staticClass:"box"})])],1):e._e(),2==e.pointTaskTabForm.playPerson?a("el-col",{attrs:{span:8}},[a("el-form-item",[a("div",{staticClass:"box"})])],1):e._e(),2==e.pointTaskTabForm.playPerson?a("el-col",{attrs:{span:2}},[a("el-button",{attrs:{type:"text"}},[e._v("地图选择《")])],1):e._e(),a("el-col",{staticStyle:{"margin-top":"20px"},attrs:{span:20}},[a("el-form-item",{attrs:{label:"任务描述",prop:"taskText"}},[a("el-input",{attrs:{type:"textarea",rows:4,maxlength:"300","show-word-limit":"",placeholder:"请输入内容"},model:{value:e.pointTaskTabForm.taskText,callback:function(t){e.$set(e.pointTaskTabForm,"taskText",t)},expression:"pointTaskTabForm.taskText"}})],1)],1),a("el-col",{staticStyle:{"margin-top":"20px"},attrs:{span:20}},[a("el-form-item",{attrs:{label:"相关文件",prop:"file"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.imageUrl?a("img",{staticClass:"avatar",attrs:{src:e.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1)],1)],1),a("el-row",{staticClass:"row-bg",staticStyle:{"margin-top":"20px"},attrs:{type:"flex",justify:"center"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleClickSubmit("pointTaskTabForm")}}},[e._v("指派")]),a("el-button",{attrs:{type:"info"},on:{click:function(t){return e.pointTaskTabClose("pointTaskTabForm")}}},[e._v("取 消")])],1)],1)],1),a("el-dialog",{attrs:{visible:e.addressPopup},on:{"update:visible":function(t){e.addressPopup=t}}},[a("div")])],1)},n=[],c={name:"taskappoint",props:{show:{type:Boolean,default:!1}},data:function(){return{pointTaskTabvisible:null,pointTaskTab:this.show,pointTaskTabForm:{playPerson:1},addressPopup:!1,sequenceOption:[],invisibleOption:[],imageUrl:"",checkListValue:[],checkList:[],data:[{id:1,label:"一级 1",children:[{id:4,label:"二级 1-1",children:[{id:9,label:"三级 1-1-1"},{id:10,label:"三级 1-1-2"}]}]}],defaultProps:{children:"children",label:"label"},pointTaskTabRules:{tastName:[{required:!0,message:"请输入任务名称",trigger:"blur"}],sequence:[{required:!0,message:"请选择优先级",trigger:"blur"}],invisible:[{required:!0,message:"请选择可见性",trigger:"blur"}],taskStartTime:[{required:!0,message:"请选择时间",trigger:"blur"}],type:[{required:!0,message:"请选择类型",trigger:"blur"}],address:[{required:!0,message:"请选择区域",trigger:"blur"}],deviceName:[{required:!0,message:"请输入设备名称",trigger:"blur"}],levelAlarm:[{required:!0,message:"请选择告警级别",trigger:"blur"}],typeAlarm:[{required:!0,message:"请选择告警类型",trigger:"blur"}],timeAlarm:[{required:!0,message:"请选择报警时间",trigger:"blur"}],playPerson:[{required:!0,message:"请选择执行人员",trigger:"blur"}]}}},watch:{show:function(){this.pointTaskTabvisible=this.show}},methods:{handleCheckChange:function(e,t,a){console.log(e,t,a)},handleClickSubmit:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")}))},pointTaskTabClose:function(e){this.$emit("update:show",!1),this.$refs[e].resetFields()},handleAvatarSuccess:function(e,t){this.imageUrl=URL.createObjectURL(t.raw)},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type,a=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),a||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&a}}},p=c,m=(a("8045"),a("0c7c")),u=Object(m["a"])(p,i,n,!1,null,"1c5bd971",null),b=u.exports,k={name:"taskSelect",components:{taskappointDialog:b},data:function(){return{currentPage:2,show:!1,typeId:"",taskClose:!1,activeName:"first",dialogTableVisibleTask:!1,checkAllStatus:!1,isIndeterminateStatus:!0,taskStatusList:["未启动","执行中","待审核"],checkAllSequence:!1,isIndeterminateSequence:!0,taskSequenceList:["非常紧急","紧急","一般","低"],checkAllType:!1,isIndeterminateType:!0,taskTypeList:["手工指派","安全事件","设备告警"],taskSelectform:{pointCheck:!1,taskStatus:[],sequence:[],taskType:[]},reasonCloseList:[{label:"任务完成",value:0},{label:"任务结束",value:1},{label:"任务异常",value:2}],formRow:{},taskCloseForm:{},taskTableData:[{tastName:"192_168_0_120-人员黑名单",sequence:"非常紧急",type:"安全事件",pointor:"张三",taskStartTime:"2020-07-02 18:14:19",taskCreateTime:"2020-07-02 18:14:19",invisible:"全员可见",status:"执行中",address:"深圳",file:"区域化建设的楼盘开发"},{tastName:"192_168_0_120-人员黑名单",sequence:"非常紧急",type:"安全事件",pointor:"张三",taskStartTime:"2020-07-02 17:38:21",taskCreateTime:"2020-07-02 17:38:21",invisible:"全员可见",status:"执行中",address:"北京",file:"区域化建设的楼盘开发"}],playPersonData:[{playId:1,playName:"李四",playStatus:"执行中",finishTime:""},{playId:2,playName:"王五",playStatus:"完成",finishTime:"2020-7-4"}],inFormList:{deviceName:"192_168_0_120",levelAlarm:"紧急",typeAlarm:"人员黑名单",timeAlarm:"2020-04-20 15:28:45"},activities:[{content:"张三",timestamp:"2018-04-15",play:"催办"},{content:"李四",timestamp:"2018-04-13",play:"催办"},{content:"王五",timestamp:"2018-04-11",play:"催办"}],rules:{reasonClose:[{required:!0,message:"请选择原因",trigger:"blur"}]}}},created:function(){},filters:{},mounted:function(){this.typeId=this.$route.params.id},watch:{"taskSelectform.pointCheck":function(e){"true"===e&&console.log(111)}},methods:{notFinishTask:function(){},finishTask:function(){},handleClickTitle:function(e){this.dialogTableVisibleTask=!0,this.formRow=Object.assign({},e)},handleClickClose:function(e){this.taskClose=!0},handleClickView:function(e){this.dialogTableVisibleTask=!0,this.formRow=Object.assign({},e)},pointTaskClick:function(){this.show=!0},handleClick:function(e,t){console.log(e,t)},handleUrge:function(){this.$message.success("催办成功")},handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){console.log("当前页: ".concat(e))},handleCheckedStatus:function(e){var t=e.length;this.checkAllStatus=t===this.taskStatusList.length,this.isIndeterminateStatus=t>0&&t<this.taskStatusList.length},handleCheckAllStatus:function(e){this.taskSelectform.taskStatus=e?this.taskStatusList:[],this.isIndeterminateStatus=!1},handleCheckedSequence:function(e){var t=e.length;this.checkAllSequence=t===this.taskSequenceList.length,this.isIndeterminateSequence=t>0&&t<this.taskSequenceList.length},handleCheckAllSequence:function(e){this.taskSelectform.sequence=e?this.taskSequenceList:[],this.isIndeterminateSequence=!1},handleCheckedType:function(e){var t=e.length;this.checkAllType=t===this.taskTypeList.length,this.isIndeterminateType=t>0&&t<this.taskTypeList.length},handleCheckAllType:function(e){this.taskSelectform.taskType=e?this.taskTypeList:[],this.isIndeterminateType=!1}}},d=k,f=(a("fca5"),Object(m["a"])(d,o,r,!1,null,"260172a8",null)),h=f.exports,T={name:"taskMangeList",components:{taskselect:h},data:function(){return{pageName:""}},created:function(){},mounted:function(){this.init()},methods:{init:function(){var e=localStorage.getItem("tabPage")||"";this.pageName=0==e?"所有任务":1==e?"未完成任务":2==e?"已完成任务":"我指派的任务"},goTaskaManage:function(){}}},v=T,y=(a("d619"),Object(m["a"])(v,l,s,!1,null,"4fb3f93c",null));t["default"]=y.exports},d29b:function(e,t,a){},d619:function(e,t,a){"use strict";var l=a("d29b"),s=a.n(l);s.a},ddec:function(e,t,a){},fca5:function(e,t,a){"use strict";var l=a("ddec"),s=a.n(l);s.a}}]);