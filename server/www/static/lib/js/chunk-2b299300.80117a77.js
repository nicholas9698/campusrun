(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b299300","chunk-a66a7880","chunk-3e0777df","chunk-6b687609","chunk-2d0aa640","chunk-2d0a3ac9"],{"02d5":function(t,e,s){"use strict";s.r(e);var a,n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.thisValue,callback:function(e){t.thisValue=e},expression:"thisValue"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[t._v("审核资料")])]),s("v-card-text",[s("v-container",[s("p",{staticClass:"mt-4"},[t._v("状态")]),s("v-radio-group",{attrs:{mandatory:!1,row:""},model:{value:t.thisMsg.status,callback:function(e){t.$set(t.thisMsg,"status",e)},expression:"thisMsg.status"}},[s("v-radio",{attrs:{label:"拒绝",value:2}}),s("v-radio",{attrs:{label:"通过",value:1}})],1),s("v-text-field",{attrs:{label:"拒绝理由"},model:{value:t.thisMsg.refuse_msg,callback:function(e){t.$set(t.thisMsg,"refuse_msg",e)},expression:"thisMsg.refuse_msg"}})],1)],1),s("v-card-actions",{staticClass:"justify-space-between"},[s("v-btn",{attrs:{color:"blue gray",text:""},on:{click:function(e){t.thisValue=!1}}},[t._v("取消")]),t._v("-\n      "),s("v-btn",{attrs:{color:"dark darken-1",loading:t.loading,text:""},on:{click:function(e){return t.doUpdate()}}},[t._v("提交")])],1)],1)],1)},i=[],l={props:{value:{type:Boolean,required:!0,default:!1},msg:{type:Object,default:function(){return{}}}},data:function(){return{api:this.$api,thisValue:this.value,thisMsg:JSON.parse(JSON.stringify(this.msg)),loading:!1,roles:[]}},watch:{value:function(t){this.thisValue=t},thisValue:function(t){this.$emit("change",t)},msg:function(t){this.thisMsg=JSON.parse(JSON.stringify(t))}},mounted:function(){a=this},methods:{doUpdate:function(){0==this.thisMsg.status?a.$message({showClose:!0,message:"请选择状态",type:"warning"}):(this.loading=!0,this.$post("cash/verify",{id:this.thisMsg.id,status:this.thisMsg.status,refuse_msg:this.thisMsg.refuse_msg},function(t){a.loading=!1,0==t.errno&&(a.$message({showClose:!0,message:t.errmsg,type:"success"}),a.thisValue=!1,a.$emit("changemsg",t))}))}}},r=l,o=s("6691"),u=Object(o["a"])(r,n,i,!1,null,null,null);e["default"]=u.exports},"0857":function(t,e,s){"use strict";s("a0e0");var a=s("a013"),n=s("f425"),i=s("dad2"),l="toString",r=/./[l],o=function(t){s("e5ef")(RegExp.prototype,l,t,!0)};s("b6f1")(function(){return"/a/b"!=r.call({source:"a",flags:"b"})})?o(function(){var t=a(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?n.call(t):void 0)}):r.name!=l&&o(function(){return r.call(this)})},"118b":function(t,e,s){"use strict";s.r(e);var a,n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{persistent:"","max-width":"900px"},model:{value:t.thisValue,callback:function(e){t.thisValue=e},expression:"thisValue"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[t._v("审核资料")])]),s("v-card-text",[s("v-container",[s("img",{attrs:{src:t.api+t.thisMsg.card_z_img,width:"100%"}}),s("img",{attrs:{src:t.api+t.thisMsg.card_f_img,width:"100%"}}),s("v-text-field",{attrs:{label:"姓名",disabled:""},model:{value:t.thisMsg.realname,callback:function(e){t.$set(t.thisMsg,"realname",e)},expression:"thisMsg.realname"}}),s("v-text-field",{attrs:{label:"身份证号码",disabled:""},model:{value:t.thisMsg.id_number,callback:function(e){t.$set(t.thisMsg,"id_number",e)},expression:"thisMsg.id_number"}}),s("p",[t._v("身份证有效日期")]),s("el-date-picker",{attrs:{value:"yyyy-MM-dd","value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:t.thisMsg.start_date,callback:function(e){t.$set(t.thisMsg,"start_date",e)},expression:"thisMsg.start_date"}}),t._v("-\n        "),s("el-date-picker",{attrs:{value:"yyyy-MM-dd","value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:t.thisMsg.end_date,callback:function(e){t.$set(t.thisMsg,"end_date",e)},expression:"thisMsg.end_date"}}),s("p",{staticClass:"mt-4"},[t._v("状态")]),s("v-radio-group",{attrs:{mandatory:!1,row:""},model:{value:t.thisMsg.status,callback:function(e){t.$set(t.thisMsg,"status",e)},expression:"thisMsg.status"}},[s("v-radio",{attrs:{label:"拒绝",value:1}}),s("v-radio",{attrs:{label:"通过",value:2}})],1),s("v-text-field",{attrs:{label:"拒绝理由"},model:{value:t.thisMsg.refuse_msg,callback:function(e){t.$set(t.thisMsg,"refuse_msg",e)},expression:"thisMsg.refuse_msg"}})],1)],1),s("v-card-actions",{staticClass:"justify-space-between"},[s("v-btn",{attrs:{color:"blue gray",text:""},on:{click:function(e){t.thisValue=!1,t.loading=!1}}},[t._v("取消")]),t._v("-\n      "),s("v-btn",{attrs:{color:"dark darken-1",loading:t.loading,text:""},on:{click:function(e){return t.doUpdate()}}},[t._v("提交")])],1)],1)],1)},i=[],l={props:{value:{type:Boolean,required:!0,default:!1},msg:{type:Object,default:function(){return{}}}},data:function(){return{api:this.$api,thisValue:this.value,thisMsg:JSON.parse(JSON.stringify(this.msg)),loading:!1,roles:[]}},watch:{value:function(t){this.thisValue=t},thisValue:function(t){this.$emit("change",t)},msg:function(t){this.thisMsg=JSON.parse(JSON.stringify(t))}},mounted:function(){a=this},methods:{doUpdate:function(){0==this.thisMsg.status?a.$message({showClose:!0,message:"请选择状态",type:"warning"}):(this.loading=!0,this.$post("verify/handle",{id:this.thisMsg.id,start_date:this.thisMsg.start_date,end_date:this.thisMsg.end_date,status:this.thisMsg.status,refuse_msg:this.thisMsg.refuse_msg},function(t){a.loading=!1,0==t.errno&&(a.$message({showClose:!0,message:t.errmsg,type:"success"}),a.thisValue=!1,a.$emit("changemsg",t))}))}}},r=l,o=s("6691"),u=Object(o["a"])(r,n,i,!1,null,null,null);e["default"]=u.exports},8716:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{"fill-height":"",fluid:""}},[s("v-layout",{attrs:{"justify-center":"","align-center":""}},[s("v-flex",{attrs:{xs12:""}},[s("material-card",{staticClass:"card-tabs",attrs:{color:"green"}},[s("v-flex",{attrs:{slot:"header"},slot:"header"},[s("v-tabs",{attrs:{color:"transparent","slider-color":"white"},model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[s("span",{staticClass:"subheading font-weight-light mr-3",staticStyle:{"align-self":"center"}}),s("v-tab",{staticClass:"mr-3"},[t._v("跑男审核列表")]),s("v-tab",{staticClass:"mr-3"},[t._v("跑男审核日志")]),s("v-tab",{staticClass:"mr-3"},[t._v("提现审核")])],1)],1),s("v-tabs-items",{model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[s("v-tab-item",[s("vrm",{attrs:{load:!0}})],1),s("v-tab-item",[s("log",{attrs:{load:1==t.tabs}})],1),s("v-tab-item",[s("cash",{attrs:{load:2==t.tabs}})],1)],1)],1)],1)],1)],1)},n=[],i=s("8b6f"),l=s("f7c6"),r=s("c3fb"),o={components:{vrm:i["default"],log:l["default"],cash:r["default"]},data:function(){return{tabs:0,list:{0:!1,1:!1,2:!1}}},mounted:function(){},methods:{complete:function(t){this.list[t]=!this.list[t]}}},u=o,c=s("6691"),d=Object(c["a"])(u,a,n,!1,null,null,null);e["default"]=d.exports},"8b6f":function(t,e,s){"use strict";s.r(e);var a,n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:"","grid-list-xl":""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{md3:"",lg2:""}},[s("v-text-field",{staticClass:"pr-2",attrs:{label:"手机号"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList()}},model:{value:t.query.phone_number,callback:function(e){t.$set(t.query,"phone_number",e)},expression:"query.phone_number"}})],1),s("v-flex",{attrs:{md3:"",lg2:""}},[s("v-text-field",{staticClass:"pr-2",attrs:{label:"真实姓名"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList()}},model:{value:t.query.realname,callback:function(e){t.$set(t.query,"realname",e)},expression:"query.realname"}})],1),s("v-flex",{attrs:{md3:"",lg2:""}},[s("v-text-field",{staticClass:"pr-2",attrs:{label:"身份证号"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList()}},model:{value:t.query.id_number,callback:function(e){t.$set(t.query,"id_number",e)},expression:"query.id_number"}})],1),s("v-flex",{attrs:{md3:"",lg2:""}},[s("v-select",{attrs:{items:[{label:"全部",value:""},{label:"拒绝",value:1},{label:"待审核",value:0}],label:"状态","item-text":"label","item-value":"value"},on:{change:function(e){return t.getList()}},model:{value:t.query.status,callback:function(e){t.$set(t.query,"status",e)},expression:"query.status"}})],1)],1),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{"xs-12":"","md-12":"","lg-12":"","sm-12":""}},[s("v-btn",{attrs:{color:"gray"},on:{click:function(e){return t.resetSearch()}}},[t._v("重置")]),s("v-btn",{attrs:{color:"dark"},on:{click:function(e){return t.getList()}}},[s("v-icon",{attrs:{size:"14"}},[t._v("mdi-account-search")]),t._v(" 搜索\n      ")],1)],1)],1),s("v-divider"),s("v-layout",{attrs:{wrap:"","justify-space-between":""}},[s("v-flex",{attrs:{sm8:"",xs12:"",md8:"",lg8:""}},[s("v-btn",{staticClass:"inline-block",attrs:{color:"gray",icon:""},on:{click:function(e){return t.getList()}}},[s("v-icon",[t._v("mdi-autorenew")])],1)],1),s("div",[s("v-select",{staticClass:"pr-2 inline-block",attrs:{items:t.pageSizes,"item-text":"label","item-value":"value",label:"每页条数",required:""},on:{change:function(e){return t.getList()}},model:{value:t.query.pageSize,callback:function(e){t.$set(t.query,"pageSize",e)},expression:"query.pageSize"}})],1)],1),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{"xs-12":"","md-12":"","lg-12":"","sm-12":""}},[s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoad,expression:"tableLoad"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.items,"tooltip-effect":"dark",border:""},on:{"selection-change":t.handleSelectionChange}},[s("el-table-column",{attrs:{type:"selection",width:"55"}}),s("el-table-column",{attrs:{label:"ID",prop:"id",width:"60"}}),s("el-table-column",{attrs:{label:"姓名"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",[t._v(t._s(e.row.realname||"-- --"))])]}}])}),s("el-table-column",{attrs:{label:"手机号"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",[t._v(t._s(e.row.phone_number||"-- -- --"))])]}}])}),s("el-table-column",{attrs:{label:"身份证号"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",[t._v(t._s(e.row.id_number||"-- -- --"))])]}}])}),s("el-table-column",{attrs:{prop:"",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",[0==e.row.status?s("v-chip",{staticClass:"ma-2",attrs:{"text-color":"white",color:"warning",small:""}},[t._v("待审核")]):t._e(),1==e.row.status?s("v-chip",{staticClass:"ma-2",attrs:{"text-color":"white",color:"red",small:""}},[t._v("拒绝")]):t._e()],1)]}}])}),s("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",[s("v-btn",{attrs:{slot:"activator",small:"",color:"dark"},on:{click:function(s){t.tempAgent=e.row,t.dialog=!0}},slot:"activator"},[t._v("\n                  操作\n                ")])],1)]}}])})],1)],1)],1),s("v-layout",{attrs:{wrap:"","justify-end":"","mt-3":""}},[s("el-pagination",{attrs:{"current-page":t.query.currentPage,"page-size":t.query.pageSize,layout:"total,  prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1),s("dover",{attrs:{msg:t.tempAgent},on:{change:t.updateMsgChange,changemsg:t.changeMsg},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}})],1)},i=[],l=(s("0857"),s("118b")),r={components:{dover:l["default"]},data:function(){return{items:[],query:{phone_number:"",realname:"",id_number:"",status:"",sorts:"erd_wxapp_service.status asc,erd_wxapp_service.create_time desc",currentPage:1,pageSize:10},api:this.$api,multipleSelection:[],pageSizes:this.$pageSizes,tableLoad:!1,total:0,dialog:!1,dialog2:!1,tempAgent:{}}},mounted:function(){a=this,this.getList()},methods:{getList:function(){this.tableLoad=!0,this.$post("verify/list",this.query,function(t){a.tableLoad=!1,0===t.errno&&(a.items=t.data.data,a.total=t.data.count)})},resetSearch:function(){this.query.phone_number="",this.query.id_number="",this.query.status="",this.query.realname="",this.getList()},handleSelectionChange:function(t){this.multipleSelection=t},getIds:function(){var t=[];for(var e in this.multipleSelection)t.push(this.multipleSelection[e].id);return t},handleCurrentChange:function(t){this.query.currentPage=t,this.getList()},statusChange:function(t){this.$checkSelect(this.multipleSelection)&&this.$post("agent/serve",{ids:this.getIds().toString(),is_serve:t},function(t){0==t.errno&&(a.$message({showClose:!0,message:t.errmsg,type:"success"}),a.getList())})},crossChange:function(t){this.$checkSelect(this.multipleSelection)&&this.$post("agent/cross",{ids:this.getIds().toString(),cross_city_service:t},function(t){0==t.errno&&(a.$message({showClose:!0,message:t.errmsg,type:"success"}),a.getList())})},recover:function(){var t=this;this.$checkSelect(this.multipleSelection)&&this.$confirm("删除否此数据将无效，可在回收站恢复, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$post("agent/recover",{ids:t.getIds().toString()},function(t){0==t.errno&&(a.$message({showClose:!0,message:t.errmsg,type:"success"}),a.getList())})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},updateMsgChange:function(t){this.dialog=t},addminChange:function(t){this.dialog2=t},changeMsg:function(t){this.getList()}}},o=r,u=s("6691"),c=Object(u["a"])(o,n,i,!1,null,null,null);e["default"]=c.exports},a0e0:function(t,e,s){s("dad2")&&"g"!=/./g.flags&&s("ddf7").f(RegExp.prototype,"flags",{configurable:!0,get:s("f425")})},c3fb:function(t,e,s){"use strict";s.r(e);var a,n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:"","grid-list-xl":""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{md3:"",lg2:""}},[s("v-text-field",{staticClass:"pr-2",attrs:{label:"真实姓名"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList()}},model:{value:t.query.realname,callback:function(e){t.$set(t.query,"realname",e)},expression:"query.realname"}})],1),s("v-flex",{attrs:{md3:"",lg2:""}},[s("v-text-field",{staticClass:"pr-2",attrs:{label:"账号"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList()}},model:{value:t.query.account_number,callback:function(e){t.$set(t.query,"account_number",e)},expression:"query.account_number"}})],1),s("v-flex",{attrs:{md3:"",lg2:""}},[s("v-select",{attrs:{items:[{label:"全部",value:""},{label:"审核中",value:0},{label:"已提现",value:1},{label:"提现失败",value:2}],label:"状态","item-text":"label","item-value":"value"},on:{change:function(e){return t.getList()}},model:{value:t.query.status,callback:function(e){t.$set(t.query,"status",e)},expression:"query.status"}})],1)],1),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{"xs-12":"","md-12":"","lg-12":"","sm-12":""}},[s("v-btn",{attrs:{color:"gray"},on:{click:function(e){return t.resetSearch()}}},[t._v("重置")]),s("v-btn",{attrs:{color:"dark"},on:{click:function(e){return t.getList()}}},[s("v-icon",{attrs:{size:"14"}},[t._v("mdi-account-search")]),t._v(" 搜索\n      ")],1)],1)],1),s("v-divider"),s("v-layout",{attrs:{wrap:"","justify-space-between":""}},[s("v-flex",{attrs:{sm8:"",xs12:"",md8:"",lg8:""}},[s("v-btn",{staticClass:"inline-block",attrs:{color:"gray",icon:""},on:{click:function(e){return t.getList()}}},[s("v-icon",[t._v("mdi-autorenew")])],1)],1),s("div",[s("v-select",{staticClass:"pr-2 inline-block",attrs:{items:t.pageSizes,"item-text":"label","item-value":"value",label:"每页条数",required:""},on:{change:function(e){return t.getList()}},model:{value:t.query.pageSize,callback:function(e){t.$set(t.query,"pageSize",e)},expression:"query.pageSize"}})],1)],1),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{"xs-12":"","md-12":"","lg-12":"","sm-12":""}},[s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoad,expression:"tableLoad"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.items,"tooltip-effect":"dark",border:""},on:{"selection-change":t.handleSelectionChange}},[s("el-table-column",{attrs:{type:"selection",width:"55"}}),s("el-table-column",{attrs:{label:"ID",prop:"id",width:"60"}}),s("el-table-column",{attrs:{label:"开户行"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",[t._v(t._s(e.row.account_name))])]}}])}),s("el-table-column",{attrs:{label:"账号"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",[t._v(t._s(e.row.account_number))])]}}])}),s("el-table-column",{attrs:{label:"姓名"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",[t._v(t._s(e.row.realname||"-- --"))])]}}])}),s("el-table-column",{attrs:{label:"提现金额"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",[t._v(t._s(e.row.cash_amount)+"元")])]}}])}),s("el-table-column",{attrs:{label:"提现类型"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",[t._v(t._s(1==e.row.user_type?"用户":""))]),s("div",[t._v(t._s(2==e.row.user_type?"跑男":""))]),s("div",[t._v(t._s(3==e.row.user_type?"代理":""))]),s("div",[t._v(t._s(4==e.row.user_type?"平台":""))])]}}])}),s("el-table-column",{attrs:{prop:"",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",[0==e.row.status?s("v-chip",{staticClass:"ma-2",attrs:{"text-color":"white",color:"warning",small:""}},[t._v("待审核")]):t._e(),1==e.row.status?s("v-chip",{staticClass:"ma-2",attrs:{"text-color":"white",color:"green",small:""}},[t._v("过审")]):t._e(),2==e.row.status?s("v-chip",{staticClass:"ma-2",attrs:{"text-color":"white",color:"red",small:""}},[t._v("拒绝")]):t._e(),2==e.row.status?s("div",[t._v(t._s(e.row.status_season))]):t._e()],1)]}}])}),s("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",[0==e.row.status?s("v-btn",{attrs:{slot:"activator",small:"",color:"dark"},on:{click:function(s){t.tempAgent=e.row,t.dialog=!0}},slot:"activator"},[t._v("\n                  操作\n                ")]):t._e()],1)]}}])})],1)],1)],1),s("v-layout",{attrs:{wrap:"","justify-end":"","mt-3":""}},[s("el-pagination",{attrs:{"current-page":t.query.currentPage,"page-size":t.query.pageSize,layout:"total,  prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1),s("dover",{attrs:{msg:t.tempAgent},on:{change:t.updateMsgChange,changemsg:t.changeMsg},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}})],1)},i=[],l=(s("0857"),s("02d5")),r={components:{dover:l["default"]},data:function(){return{items:[],query:{realname:"",account_number:"",status:"",currentPage:1,pageSize:10},api:this.$api,multipleSelection:[],pageSizes:this.$pageSizes,tableLoad:!1,total:0,dialog:!1,dialog2:!1,tempAgent:{},pageLoad:!1}},props:{load:{type:Boolean,default:!1}},watch:{load:function(t){t&&(this.pageLoad=t)},pageLoad:function(t){}},mounted:function(){a=this,this.getList()},methods:{getList:function(){this.tableLoad=!0,this.$post("cash/list",this.query,function(t){a.tableLoad=!1,0===t.errno&&(a.items=t.data.data,a.total=t.data.count)})},resetSearch:function(){this.query.account_number="",this.query.status="",this.query.realname="",this.getList()},handleSelectionChange:function(t){this.multipleSelection=t},getIds:function(){var t=[];for(var e in this.multipleSelection)t.push(this.multipleSelection[e].id);return t},handleCurrentChange:function(t){this.query.currentPage=t,this.getList()},statusChange:function(t){this.$checkSelect(this.multipleSelection)&&this.$post("agent/serve",{ids:this.getIds().toString(),is_serve:t},function(t){0==t.errno&&(a.$message({showClose:!0,message:t.errmsg,type:"success"}),a.getList())})},crossChange:function(t){this.$checkSelect(this.multipleSelection)&&this.$post("agent/cross",{ids:this.getIds().toString(),cross_city_service:t},function(t){0==t.errno&&(a.$message({showClose:!0,message:t.errmsg,type:"success"}),a.getList())})},recover:function(){var t=this;this.$checkSelect(this.multipleSelection)&&this.$confirm("删除否此数据将无效，可在回收站恢复, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$post("agent/recover",{ids:t.getIds().toString()},function(t){0==t.errno&&(a.$message({showClose:!0,message:t.errmsg,type:"success"}),a.getList())})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},updateMsgChange:function(t){this.dialog=t},addminChange:function(t){this.dialog2=t},changeMsg:function(t){this.getList()}}},o=r,u=s("6691"),c=Object(u["a"])(o,n,i,!1,null,null,null);e["default"]=c.exports},f7c6:function(t,e,s){"use strict";s.r(e);var a,n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:"","grid-list-xl":""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{md3:"",lg2:""}},[s("v-text-field",{staticClass:"pr-2",attrs:{label:"手机号"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList()}},model:{value:t.query.phone_number,callback:function(e){t.$set(t.query,"phone_number",e)},expression:"query.phone_number"}})],1),s("v-flex",{attrs:{md3:"",lg2:""}},[s("v-text-field",{staticClass:"pr-2",attrs:{label:"真实姓名"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList()}},model:{value:t.query.realname,callback:function(e){t.$set(t.query,"realname",e)},expression:"query.realname"}})],1),s("v-flex",{attrs:{md3:"",lg2:""}},[s("v-text-field",{staticClass:"pr-2",attrs:{label:"身份证号"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList()}},model:{value:t.query.id_number,callback:function(e){t.$set(t.query,"id_number",e)},expression:"query.id_number"}})],1),s("v-flex",{attrs:{md3:"",lg2:""}},[s("v-select",{attrs:{items:[{label:"全部",value:""},{label:"拒绝",value:1},{label:"待审核",value:0}],label:"状态","item-text":"label","item-value":"value"},on:{change:function(e){return t.getList()}},model:{value:t.query.status,callback:function(e){t.$set(t.query,"status",e)},expression:"query.status"}})],1)],1),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{"xs-12":"","md-12":"","lg-12":"","sm-12":""}},[s("v-btn",{attrs:{color:"gray"},on:{click:function(e){return t.resetSearch()}}},[t._v("重置")]),s("v-btn",{attrs:{color:"dark"},on:{click:function(e){return t.getList()}}},[s("v-icon",{attrs:{size:"14"}},[t._v("mdi-account-search")]),t._v(" 搜索\n      ")],1)],1)],1),s("v-divider"),s("v-layout",{attrs:{wrap:"","justify-space-between":""}},[s("v-flex",{attrs:{sm8:"",xs12:"",md8:"",lg8:""}},[s("v-btn",{staticClass:"inline-block",attrs:{color:"gray",icon:""},on:{click:function(e){return t.getList()}}},[s("v-icon",[t._v("mdi-autorenew")])],1)],1),s("div",[s("v-select",{staticClass:"pr-2 inline-block",attrs:{items:t.pageSizes,"item-text":"label","item-value":"value",label:"每页条数",required:""},on:{change:function(e){return t.getList()}},model:{value:t.query.pageSize,callback:function(e){t.$set(t.query,"pageSize",e)},expression:"query.pageSize"}})],1)],1),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{"xs-12":"","md-12":"","lg-12":"","sm-12":""}},[s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoad,expression:"tableLoad"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.items,"tooltip-effect":"dark",border:""},on:{"selection-change":t.handleSelectionChange}},[s("el-table-column",{attrs:{type:"selection",width:"55"}}),s("el-table-column",{attrs:{label:"ID",prop:"id",width:"60"}}),s("el-table-column",{attrs:{label:"姓名"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",[t._v(t._s(e.row.realname||"-- --"))])]}}])}),s("el-table-column",{attrs:{label:"身份证号"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",[t._v(t._s(e.row.id_number||"-- -- --"))])]}}])}),s("el-table-column",{attrs:{label:"操作描述"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",[t._v(t._s(e.row.refuse_des||"-- -- --"))])]}}])}),s("el-table-column",{attrs:{prop:"",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",[2==e.row.status?s("v-chip",{staticClass:"ma-2",attrs:{"text-color":"white",color:"success",small:""}},[t._v("通过")]):t._e(),1==e.row.status?s("v-chip",{staticClass:"ma-2",attrs:{"text-color":"white",color:"red",small:""}},[t._v("拒绝")]):t._e()],1)]}}])}),s("el-table-column",{attrs:{label:"操作日期"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",[t._v(t._s(e.row.create_time||"-- -- --"))])]}}])})],1)],1)],1),s("v-layout",{attrs:{wrap:"","justify-end":"","mt-3":""}},[s("el-pagination",{attrs:{"current-page":t.query.currentPage,"page-size":t.query.pageSize,layout:"total,  prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1),s("dover",{attrs:{msg:t.tempAgent},on:{change:t.updateMsgChange,changemsg:t.changeMsg},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}})],1)},i=[],l=(s("0857"),s("118b")),r={components:{dover:l["default"]},data:function(){return{items:[],query:{realname:"",id_number:"",status:"",sorts:"erd_wxapp_service_verify.create_time desc",currentPage:1,pageSize:10},api:this.$api,multipleSelection:[],pageSizes:this.$pageSizes,tableLoad:!1,total:0,dialog:!1,dialog2:!1,tempAgent:{}}},mounted:function(){a=this,this.getList()},methods:{getList:function(){this.tableLoad=!0,this.$post("verify/log",this.query,function(t){a.tableLoad=!1,0===t.errno&&(a.items=t.data.data,a.total=t.data.count)})},resetSearch:function(){this.query.phone_number="",this.query.id_number="",this.query.status="",this.query.realname="",this.getList()},handleSelectionChange:function(t){this.multipleSelection=t},getIds:function(){var t=[];for(var e in this.multipleSelection)t.push(this.multipleSelection[e].id);return t},handleCurrentChange:function(t){this.query.currentPage=t,this.getList()},statusChange:function(t){this.$checkSelect(this.multipleSelection)&&this.$post("agent/serve",{ids:this.getIds().toString(),is_serve:t},function(t){0==t.errno&&(a.$message({showClose:!0,message:t.errmsg,type:"success"}),a.getList())})},crossChange:function(t){this.$checkSelect(this.multipleSelection)&&this.$post("agent/cross",{ids:this.getIds().toString(),cross_city_service:t},function(t){0==t.errno&&(a.$message({showClose:!0,message:t.errmsg,type:"success"}),a.getList())})},recover:function(){var t=this;this.$checkSelect(this.multipleSelection)&&this.$confirm("删除否此数据将无效，可在回收站恢复, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$post("agent/recover",{ids:t.getIds().toString()},function(t){0==t.errno&&(a.$message({showClose:!0,message:t.errmsg,type:"success"}),a.getList())})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},updateMsgChange:function(t){this.dialog=t},addminChange:function(t){this.dialog2=t},changeMsg:function(t){this.getList()}}},o=r,u=s("6691"),c=Object(u["a"])(o,n,i,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2b299300.80117a77.js.map