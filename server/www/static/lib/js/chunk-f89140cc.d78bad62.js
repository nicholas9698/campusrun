(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f89140cc","chunk-6fe5b2a7","chunk-2d0dcfef","chunk-2d0f0bd5","chunk-2d0f046d","chunk-2d0e9b21"],{"0857":function(t,e,a){"use strict";a("a0e0");var s=a("a013"),n=a("f425"),l=a("dad2"),o="toString",i=/./[o],r=function(t){a("e5ef")(RegExp.prototype,o,t,!0)};a("b6f1")(function(){return"/a/b"!=i.call({source:"a",flags:"b"})})?r(function(){var t=s(this);return"/".concat(t.source,"/","flags"in t?t.flags:!l&&t instanceof RegExp?n.call(t):void 0)}):i.name!=o&&r(function(){return i.call(this)})},8001:function(t,e,a){"use strict";a.r(e);var s,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","grid-list-xl":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{md3:"",lg2:""}},[a("v-text-field",{staticClass:"pr-2",attrs:{label:"真实姓名"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList()}},model:{value:t.query.realname,callback:function(e){t.$set(t.query,"realname",e)},expression:"query.realname"}})],1),a("v-flex",{attrs:{md3:"",lg2:""}},[a("v-text-field",{staticClass:"pr-2",attrs:{label:"身份证号"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList()}},model:{value:t.query.id_number,callback:function(e){t.$set(t.query,"id_number",e)},expression:"query.id_number"}})],1),a("v-flex",{attrs:{md3:"",lg2:""}},[a("v-select",{attrs:{items:[{label:"全部",value:"2,3,4"},{label:"正常",value:2},{label:"停止服务",value:3},{label:"停止服务并冻结账户",value:4}],label:"状态","item-text":"label","item-value":"value"},on:{change:function(e){return t.getList()}},model:{value:t.query.status,callback:function(e){t.$set(t.query,"status",e)},expression:"query.status"}})],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"xs-12":"","md-12":"","lg-12":"","sm-12":""}},[a("v-btn",{attrs:{color:"gray"},on:{click:function(e){return t.resetSearch()}}},[t._v("重置")]),a("v-btn",{attrs:{color:"dark"},on:{click:function(e){return t.getList()}}},[a("v-icon",{attrs:{size:"14"}},[t._v("mdi-account-search")]),t._v(" 搜索\n      ")],1)],1)],1),a("v-divider"),a("v-layout",{attrs:{wrap:"","justify-space-between":""}},[a("v-flex",{attrs:{sm8:"",xs12:"",md8:"",lg8:""}},[a("v-btn",{staticClass:"inline-block",attrs:{color:"gray",icon:""},on:{click:function(e){return t.getList()}}},[a("v-icon",[t._v("mdi-autorenew")])],1)],1),a("div",[a("v-select",{staticClass:"pr-2 inline-block",attrs:{items:t.pageSizes,"item-text":"label","item-value":"value",label:"每页条数",required:""},on:{change:function(e){return t.getList()}},model:{value:t.query.pageSize,callback:function(e){t.$set(t.query,"pageSize",e)},expression:"query.pageSize"}})],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"xs-12":"","md-12":"","lg-12":"","sm-12":""}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoad,expression:"tableLoad"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.items,"tooltip-effect":"dark",border:""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"ID",prop:"id"}}),a("el-table-column",{attrs:{prop:"realname",label:"真实姓名"}}),a("el-table-column",{attrs:{prop:"fans",label:"评分"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(e.row.score)+"分")])]}}])}),a("el-table-column",{attrs:{prop:"commission",label:"余额"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(e.row.surplus_amount)+"元")])]}}])}),a("el-table-column",{attrs:{prop:"cash_amount",label:"累计提现"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(e.row.cash_amount)+"元")])]}}])}),a("el-table-column",{attrs:{prop:"fine_amount",label:"罚款"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(e.row.fine_amount)+"元")])]}}])}),a("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[2==e.row.status?a("v-chip",{staticClass:"ma-2",attrs:{"text-color":"white",color:"green",small:""}},[t._v("正常")]):t._e(),3==e.row.status?a("v-chip",{staticClass:"ma-2",attrs:{"text-color":"white",color:"warning",small:""}},[t._v("停止服务")]):t._e(),4==e.row.status?a("v-chip",{staticClass:"ma-2",attrs:{"text-color":"white",color:"red",small:""}},[t._v("停止服务冻结账户")]):t._e()],1)]}}])}),a("el-table-column",{attrs:{label:"消息提醒"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[1==e.row.is_notice?a("v-chip",{staticClass:"ma-2",attrs:{"text-color":"white",color:"green",small:""}},[t._v("开启")]):t._e(),0==e.row.is_notice?a("v-chip",{staticClass:"ma-2",attrs:{"text-color":"white",color:"warning",small:""}},[t._v("关闭")]):t._e()],1)]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("v-menu",{attrs:{"offset-y":"","content-class":"dropdown-menu",transition:"slide-y-transition"}},[a("v-btn",{attrs:{slot:"activator",small:"",color:"success"},slot:"activator"},[t._v("展开操作")]),a("v-card",[a("v-list",{attrs:{dense:""}},[3==e.row.status||4==e.row.status?a("v-list-tile",{on:{click:function(a){return t.statusChange(e.row.id,2)}}},[a("v-list-tile-title",{domProps:{textContent:t._s("开启服务")}})],1):t._e(),2==e.row.status||4==e.row.status?a("v-list-tile",{on:{click:function(a){return t.statusChange(e.row.id,3)}}},[a("v-list-tile-title",{domProps:{textContent:t._s("停止服务")}})],1):t._e(),2==e.row.status||3==e.row.status?a("v-list-tile",{on:{click:function(a){return t.statusChange(e.row.id,4)}}},[a("v-list-tile-title",{domProps:{textContent:t._s("停止服务并冻结")}})],1):t._e(),0==e.row.is_notice?a("v-list-tile",{on:{click:function(a){return t.noticeChange(e.row.id,1)}}},[a("v-list-tile-title",{domProps:{textContent:t._s("开启提醒")}})],1):t._e(),1==e.row.is_notice?a("v-list-tile",{on:{click:function(a){return t.noticeChange(e.row.id,0)}}},[a("v-list-tile-title",{domProps:{textContent:t._s("关闭提醒")}})],1):t._e()],1)],1)],1)]}}])})],1)],1)],1),a("v-layout",{attrs:{wrap:"","justify-end":"","mt-3":""}},[a("el-pagination",{attrs:{"current-page":t.query.currentPage,"page-size":t.query.pageSize,layout:"total,  prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)},l=[],o={data:function(){return{items:[],query:{id_number:"",realname:"",status:"2,3,4",ws_type:2,currentPage:1,pageSize:10},multipleSelection:[],pageSizes:this.$pageSizes,tableLoad:!1,total:0,dialog:!1,dialog2:!1,tempUser:{},pageLoad:!1}},props:{load:{type:Boolean,default:!1}},watch:{load:function(t){t&&(this.pageLoad=t)},pageLoad:function(t){t&&this.getList()}},mounted:function(){s=this},methods:{getList:function(){s.tableLoad=!0,s.$post("admin/service/list",this.query,function(t){s.tableLoad=!1,0===t.errno&&(s.items=t.data.data,s.total=t.data.count)})},resetSearch:function(){this.query.id_number="",this.query.realname="",this.query.status="2,3,4",this.getList()},handleSelectionChange:function(t){this.multipleSelection=t},getIds:function(){var t=[];for(var e in this.multipleSelection)t.push(this.multipleSelection[e].id);return t},handleCurrentChange:function(t){this.query.currentPage=t,this.getList()},statusChange:function(t,e){this.$post("admin/service/status",{id:t,status:e},function(t){0==t.errno&&(s.$message({showClose:!0,message:t.errmsg,type:"success"}),s.getList())})},noticeChange:function(t,e){this.$post("admin/service/notice",{id:t,is_notice:e},function(t){0==t.errno&&(s.$message({showClose:!0,message:t.errmsg,type:"success"}),s.getList())})},updateMsgChange:function(t){this.dialog=t},addminChange:function(t){this.dialog2=t},changeMsg:function(t){this.getList()}}},i=o,r=a("6691"),u=Object(r["a"])(i,n,l,!1,null,null,null);e["default"]=u.exports},"8f41":function(t,e,a){"use strict";a.r(e);var s,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.thisValue,callback:function(e){t.thisValue=e},expression:"thisValue"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("添加为驾驶员")])]),a("v-card-text",[a("v-container",[a("v-text-field",{attrs:{label:"姓名"},model:{value:t.formData.realname,callback:function(e){t.$set(t.formData,"realname",e)},expression:"formData.realname"}}),a("v-text-field",{attrs:{label:"身份证号码"},model:{value:t.formData.id_number,callback:function(e){t.$set(t.formData,"id_number",e)},expression:"formData.id_number"}}),a("p",[t._v("身份证有效日期")]),a("el-date-picker",{attrs:{value:"yyyy-MM-dd","value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:t.formData.start_date,callback:function(e){t.$set(t.formData,"start_date",e)},expression:"formData.start_date"}}),t._v("-\n        "),a("el-date-picker",{attrs:{value:"yyyy-MM-dd","value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:t.formData.end_date,callback:function(e){t.$set(t.formData,"end_date",e)},expression:"formData.end_date"}})],1)],1),a("v-card-actions",{staticClass:"justify-space-between"},[a("v-btn",{attrs:{color:"blue gray",text:""},on:{click:function(e){t.thisValue=!1}}},[t._v("取消")]),a("v-btn",{attrs:{color:"dark darken-1",loading:t.loading,text:""},on:{click:function(e){return t.doUpdate()}}},[t._v("保存")])],1)],1)],1)},l=[],o={props:{value:{type:Boolean,required:!0,default:!1},msg:{type:Object,required:!0,default:{realname:"",tel_number:""}}},data:function(){return{thisValue:this.value,thisMsg:JSON.parse(JSON.stringify(this.msg)),loading:!1,formData:{realname:"",id_number:"",start_date:"",end_date:""}}},watch:{value:function(t){this.thisValue=t},thisValue:function(t){this.$emit("change",t)},msg:function(t){this.thisMsg=t}},mounted:function(){s=this},methods:{doUpdate:function(){this.loading=!0,this.$post("admin/service/add",{wx_id:this.thisMsg.id,id_number:this.formData.tel_number,realname:this.formData.realname,start_date:this.formData.start_date,end_date:this.formData.end_date},function(t){s.loading=!1,0==t.errno&&(s.$message({showClose:!0,message:t.errmsg,type:"success"}),s.thisValue=!1,s.$emit("changemsg",t))})}}},i=o,r=a("6691"),u=Object(r["a"])(i,n,l,!1,null,null,null);e["default"]=u.exports},"8fcb":function(t,e,a){"use strict";a.r(e);var s,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","grid-list-xl":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{md3:"",lg2:""}},[a("v-text-field",{staticClass:"pr-2",attrs:{label:"手机号"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList()}},model:{value:t.query.phone_number,callback:function(e){t.$set(t.query,"phone_number",e)},expression:"query.phone_number"}})],1),a("v-flex",{attrs:{md3:"",lg2:""}},[a("v-text-field",{staticClass:"pr-2",attrs:{label:"昵称"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList()}},model:{value:t.query.nick_name,callback:function(e){t.$set(t.query,"nick_name",e)},expression:"query.nick_name"}})],1),a("v-flex",{attrs:{md3:"",lg2:""}},[a("v-select",{attrs:{items:[{label:"全部",value:""},{label:"正常",value:1},{label:"封号",value:0}],label:"状态","item-text":"label","item-value":"value"},on:{change:function(e){return t.getList()}},model:{value:t.query.status,callback:function(e){t.$set(t.query,"status",e)},expression:"query.status"}})],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"xs-12":"","md-12":"","lg-12":"","sm-12":""}},[a("v-btn",{attrs:{color:"gray"},on:{click:function(e){return t.resetSearch()}}},[t._v("重置")]),a("v-btn",{attrs:{color:"dark"},on:{click:function(e){return t.getList()}}},[a("v-icon",{attrs:{size:"14"}},[t._v("mdi-account-search")]),t._v(" 搜索\n      ")],1)],1)],1),a("v-divider"),a("v-layout",{attrs:{wrap:"","justify-space-between":""}},[a("v-flex",{attrs:{sm8:"",xs12:"",md8:"",lg8:""}},[a("v-btn",{attrs:{color:"success"},on:{click:function(e){return t.statusChange(1)}}},[t._v("启用账号")]),a("v-btn",{attrs:{color:"warning"},on:{click:function(e){return t.statusChange(0)}}},[t._v("禁用账号")]),a("v-btn",{attrs:{color:"dark"},on:{click:function(e){return t.openCoupon()}}},[t._v("群发优惠券")]),a("v-btn",{staticClass:"inline-block",attrs:{color:"gray",icon:""},on:{click:function(e){return t.getList()}}},[a("v-icon",[t._v("mdi-autorenew")])],1)],1),a("div",[a("v-select",{staticClass:"pr-2 inline-block",attrs:{items:t.pageSizes,"item-text":"label","item-value":"value",label:"每页条数",required:""},on:{change:function(e){return t.getList()}},model:{value:t.query.pageSize,callback:function(e){t.$set(t.query,"pageSize",e)},expression:"query.pageSize"}})],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"xs-12":"","md-12":"","lg-12":"","sm-12":""}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoad,expression:"tableLoad"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.items,"tooltip-effect":"dark",border:""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"ID",prop:"id"}}),a("el-table-column",{attrs:{label:"头像"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("div",[a("v-avatar",[a("img",{attrs:{src:t.row.avatar_url||"https://cdn.vuetifyjs.com/images/john.jpg",alt:"John"}})])],1)]}}])}),a("el-table-column",{attrs:{prop:"phone_number",label:"手机号"}}),a("el-table-column",{attrs:{prop:"nick_name",label:"昵称"}}),a("el-table-column",{attrs:{prop:"gender",label:"性别"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(1==e.row.gender?"男":"女"))])]}}])}),a("el-table-column",{attrs:{prop:"fans",label:"粉丝"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(e.row.s_no+e.row.f_no)+"人")])]}}])}),a("el-table-column",{attrs:{prop:"commission",label:"佣金"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(e.row.surplus_amount)+"元")])]}}])}),a("el-table-column",{attrs:{prop:"grand_cash",label:"累计提现"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(e.row.grand_cash)+"元")])]}}])}),a("el-table-column",{attrs:{prop:"integral",label:"积分"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(e.row.surplus_integral)+"分")])]}}])}),a("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[1==e.row.status?a("v-chip",{staticClass:"ma-2",attrs:{"text-color":"white",color:"green",small:""}},[t._v("正常")]):t._e(),0==e.row.status?a("v-chip",{staticClass:"ma-2",attrs:{"text-color":"white",color:"red",small:""}},[t._v("封号")]):t._e()],1)]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("v-menu",{attrs:{"offset-y":"","content-class":"dropdown-menu",transition:"slide-y-transition"}},[a("v-btn",{attrs:{slot:"activator",small:"",color:"success"},slot:"activator"},[t._v("展开操作")]),a("v-card",[a("v-list",{attrs:{dense:""}},[a("v-list-tile",[a("v-list-tile-title",{domProps:{textContent:t._s("查看详情")}})],1),a("v-list-tile",{on:{click:function(a){return t.addToRetail(e.row.id)}}},[a("v-list-tile-title",{domProps:{textContent:t._s("指定为分销员")}})],1),a("v-list-tile",{on:{click:function(a){t.dialog=!0,t.tempUser=e.row}}},[a("v-list-tile-title",{domProps:{textContent:t._s("添加为代驾员")}})],1)],1)],1)],1)]}}])})],1)],1)],1),a("v-layout",{attrs:{wrap:"","justify-end":"","mt-3":""}},[a("el-pagination",{attrs:{"current-page":t.query.currentPage,"page-size":t.query.pageSize,layout:"total,  prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1),a("driving",{attrs:{msg:t.tempUser},on:{change:t.updateMsgChange,changemsg:t.changeMsg},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}}),a("sendcoupon",{attrs:{ids:t.getIds().toString()},on:{change:t.addminChange,changemsg:t.changeMsg},model:{value:t.dialog2,callback:function(e){t.dialog2=e},expression:"dialog2"}})],1)},l=[],o=(a("0857"),a("8f41")),i=a("9c4a"),r={components:{driving:o["default"],sendcoupon:i["default"]},data:function(){return{items:[],query:{phone_number:"",nick_name:"",status:"",currentPage:1,pageSize:10},multipleSelection:[],pageSizes:this.$pageSizes,tableLoad:!1,total:0,dialog:!1,dialog2:!1,tempUser:{}}},mounted:function(){s=this,this.getList()},methods:{openCoupon:function(){0==this.getIds().length?s.$message({showClose:!0,message:"请先选择用户",type:"warning"}):this.dialog2=!0},getList:function(){s.tableLoad=!0,s.$post("wx/user/list",this.query,function(t){s.tableLoad=!1,0===t.errno&&(s.items=t.data.data,s.total=t.data.count)})},addToRetail:function(t){this.$post("wx/retail/appoint",{wx_id:t},function(t){0===t.errno&&s.$message({showClose:!0,message:t.errmsg,type:"success"})})},resetSearch:function(){this.query.phone_number="",this.query.nick_name="",this.query.status="",this.getList()},handleSelectionChange:function(t){this.multipleSelection=t},getIds:function(){var t=[];for(var e in this.multipleSelection)t.push(this.multipleSelection[e].id);return t},handleCurrentChange:function(t){this.query.currentPage=t,this.getList()},statusChange:function(t){this.$checkSelect(this.multipleSelection)&&this.$post("admin/status",{ids:this.getIds().toString(),status:t},function(t){0==t.errno&&(s.$message({showClose:!0,message:t.errmsg,type:"success"}),s.getList())})},updateMsgChange:function(t){this.dialog=t},addminChange:function(t){this.dialog2=t},changeMsg:function(t){this.getList()}}},u=r,c=a("6691"),d=Object(c["a"])(u,n,l,!1,null,null,null);e["default"]=d.exports},"9c4a":function(t,e,a){"use strict";a.r(e);var s,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.thisValue,callback:function(e){t.thisValue=e},expression:"thisValue"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("群发优惠券")])]),a("v-card-text",[a("v-container",[a("el-select",{attrs:{placeholder:"请选择优惠券"},model:{value:t.couponFlag,callback:function(e){t.couponFlag=e},expression:"couponFlag"}},t._l(t.coupons,function(t,e){return a("el-option",{key:t.id,attrs:{label:t.coupon_name+" "+t.discount_amount+"元",value:e}})}),1),""!=t.couponFlag?a("p",{staticClass:"mt-3"},[t._v("数量限制："+t._s(-1==t.coupons[t.couponFlag].limit_no?"不限制":"剩余可发"+(t.coupons[t.couponFlag].limit_no-t.coupons[t.couponFlag].cumulative_draw_no)+"张"))]):t._e(),a("p",{staticClass:"mt-3"},[t._v("您选择了“"+t._s(t.thisIds.split(",").length)+"”个用户")])],1)],1),a("v-card-actions",{staticClass:"justify-space-between"},[a("v-btn",{attrs:{color:"blue gray",text:""},on:{click:function(e){t.thisValue=!1}}},[t._v("取消")]),a("v-btn",{attrs:{color:"dark darken-1",loading:t.loading,text:""},on:{click:function(e){return t.doUpdate()}}},[t._v("立即发放")])],1)],1)],1)},l=[],o={props:{value:{type:Boolean,required:!0,default:!1},ids:{type:String,required:!0}},data:function(){return{thisValue:this.value,thisIds:this.ids,loading:!1,couponFlag:"",coupons:[]}},watch:{value:function(t){this.thisValue=t},thisValue:function(t){this.$emit("change",t)},ids:function(t){this.thisIds=t}},mounted:function(){s=this,s.getCouponList()},methods:{getCouponList:function(){this.$post("coupon/list",{pageSize:200,currentPage:1,status:1,limit_service:""},function(t){0===t.errno&&(s.coupons=t.data.data)})},doUpdate:function(){this.loading=!0,this.$post("coupon/send",{coupon_id:this.coupons[this.couponFlag].id,ids:this.thisIds},function(t){s.loading=!1,0==t.errno&&(s.$message({showClose:!0,message:t.errmsg,type:"success"}),s.thisValue=!1,s.$emit("changemsg",t))})}}},i=o,r=a("6691"),u=Object(r["a"])(i,n,l,!1,null,null,null);e["default"]=u.exports},"9e3f":function(t,e,a){"use strict";a.r(e);var s,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","grid-list-xl":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{md3:"",lg2:""}},[a("v-text-field",{staticClass:"pr-2",attrs:{label:"真实姓名"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList()}},model:{value:t.query.realname,callback:function(e){t.$set(t.query,"realname",e)},expression:"query.realname"}})],1),a("v-flex",{attrs:{md3:"",lg2:""}},[a("v-text-field",{staticClass:"pr-2",attrs:{label:"身份证号"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList()}},model:{value:t.query.id_number,callback:function(e){t.$set(t.query,"id_number",e)},expression:"query.id_number"}})],1),a("v-flex",{attrs:{md3:"",lg2:""}},[a("v-select",{attrs:{items:[{label:"全部",value:"2,3,4"},{label:"正常",value:2},{label:"停止服务",value:3},{label:"停止服务并冻结账户",value:4}],label:"状态","item-text":"label","item-value":"value"},on:{change:function(e){return t.getList()}},model:{value:t.query.status,callback:function(e){t.$set(t.query,"status",e)},expression:"query.status"}})],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"xs-12":"","md-12":"","lg-12":"","sm-12":""}},[a("v-btn",{attrs:{color:"gray"},on:{click:function(e){return t.resetSearch()}}},[t._v("重置")]),a("v-btn",{attrs:{color:"dark"},on:{click:function(e){return t.getList()}}},[a("v-icon",{attrs:{size:"14"}},[t._v("mdi-account-search")]),t._v(" 搜索\n      ")],1)],1)],1),a("v-divider"),a("v-layout",{attrs:{wrap:"","justify-space-between":""}},[a("v-flex",{attrs:{sm8:"",xs12:"",md8:"",lg8:""}},[a("v-btn",{staticClass:"inline-block",attrs:{color:"gray",icon:""},on:{click:function(e){return t.getList()}}},[a("v-icon",[t._v("mdi-autorenew")])],1)],1),a("div",[a("v-select",{staticClass:"pr-2 inline-block",attrs:{items:t.pageSizes,"item-text":"label","item-value":"value",label:"每页条数",required:""},on:{change:function(e){return t.getList()}},model:{value:t.query.pageSize,callback:function(e){t.$set(t.query,"pageSize",e)},expression:"query.pageSize"}})],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"xs-12":"","md-12":"","lg-12":"","sm-12":""}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoad,expression:"tableLoad"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.items,"tooltip-effect":"dark",border:""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"ID",prop:"id"}}),a("el-table-column",{attrs:{prop:"realname",label:"真实姓名"}}),a("el-table-column",{attrs:{prop:"fans",label:"评分"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(e.row.score)+"分")])]}}])}),a("el-table-column",{attrs:{prop:"commission",label:"余额"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(e.row.surplus_amount)+"元")])]}}])}),a("el-table-column",{attrs:{prop:"cash_amount",label:"累计提现"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(e.row.cash_amount)+"元")])]}}])}),a("el-table-column",{attrs:{prop:"fine_amount",label:"罚款"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(e.row.fine_amount)+"元")])]}}])}),a("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[2==e.row.status?a("v-chip",{staticClass:"ma-2",attrs:{"text-color":"white",color:"green",small:""}},[t._v("正常")]):t._e(),3==e.row.status?a("v-chip",{staticClass:"ma-2",attrs:{"text-color":"white",color:"warning",small:""}},[t._v("停止服务")]):t._e(),4==e.row.status?a("v-chip",{staticClass:"ma-2",attrs:{"text-color":"white",color:"red",small:""}},[t._v("停止服务冻结账户")]):t._e()],1)]}}])}),a("el-table-column",{attrs:{label:"消息提醒"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[1==e.row.is_notice?a("v-chip",{staticClass:"ma-2",attrs:{"text-color":"white",color:"green",small:""}},[t._v("开启")]):t._e(),0==e.row.is_notice?a("v-chip",{staticClass:"ma-2",attrs:{"text-color":"white",color:"warning",small:""}},[t._v("关闭")]):t._e()],1)]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("v-menu",{attrs:{"offset-y":"","content-class":"dropdown-menu",transition:"slide-y-transition"}},[a("v-btn",{attrs:{slot:"activator",small:"",color:"success"},slot:"activator"},[t._v("展开操作")]),a("v-card",[a("v-list",{attrs:{dense:""}},[3==e.row.status||4==e.row.status?a("v-list-tile",{on:{click:function(a){return t.statusChange(e.row.id,2)}}},[a("v-list-tile-title",{domProps:{textContent:t._s("开启服务")}})],1):t._e(),2==e.row.status||4==e.row.status?a("v-list-tile",{on:{click:function(a){return t.statusChange(e.row.id,3)}}},[a("v-list-tile-title",{domProps:{textContent:t._s("停止服务")}})],1):t._e(),2==e.row.status||3==e.row.status?a("v-list-tile",{on:{click:function(a){return t.statusChange(e.row.id,4)}}},[a("v-list-tile-title",{domProps:{textContent:t._s("停止服务并冻结")}})],1):t._e(),0==e.row.is_notice?a("v-list-tile",{on:{click:function(a){return t.noticeChange(e.row.id,1)}}},[a("v-list-tile-title",{domProps:{textContent:t._s("开启提醒")}})],1):t._e(),1==e.row.is_notice?a("v-list-tile",{on:{click:function(a){return t.noticeChange(e.row.id,0)}}},[a("v-list-tile-title",{domProps:{textContent:t._s("关闭提醒")}})],1):t._e()],1)],1)],1)]}}])})],1)],1)],1),a("v-layout",{attrs:{wrap:"","justify-end":"","mt-3":""}},[a("el-pagination",{attrs:{"current-page":t.query.currentPage,"page-size":t.query.pageSize,layout:"total,  prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)},l=[],o={data:function(){return{items:[],query:{id_number:"",realname:"",status:"2,3,4",ws_type:1,currentPage:1,pageSize:10},multipleSelection:[],pageSizes:this.$pageSizes,tableLoad:!1,total:0,dialog:!1,dialog2:!1,tempUser:{},pageLoad:!1}},props:{load:{type:Boolean,default:!1}},watch:{load:function(t){t&&(this.pageLoad=t)},pageLoad:function(t){t&&this.getList()}},mounted:function(){s=this},methods:{getList:function(){s.tableLoad=!0,s.$post("admin/service/list",this.query,function(t){s.tableLoad=!1,0===t.errno&&(s.items=t.data.data,s.total=t.data.count)})},resetSearch:function(){this.query.id_number="",this.query.realname="",this.query.status="2,3,4",this.getList()},handleSelectionChange:function(t){this.multipleSelection=t},getIds:function(){var t=[];for(var e in this.multipleSelection)t.push(this.multipleSelection[e].id);return t},handleCurrentChange:function(t){this.query.currentPage=t,this.getList()},statusChange:function(t,e){this.$post("admin/service/status",{id:t,status:e},function(t){0==t.errno&&(s.$message({showClose:!0,message:t.errmsg,type:"success"}),s.getList())})},noticeChange:function(t,e){this.$post("admin/service/notice",{id:t,is_notice:e},function(t){0==t.errno&&(s.$message({showClose:!0,message:t.errmsg,type:"success"}),s.getList())})},updateMsgChange:function(t){this.dialog=t},addminChange:function(t){this.dialog2=t},changeMsg:function(t){this.getList()}}},i=o,r=a("6691"),u=Object(r["a"])(i,n,l,!1,null,null,null);e["default"]=u.exports},a0e0:function(t,e,a){a("dad2")&&"g"!=/./g.flags&&a("ddf7").f(RegExp.prototype,"flags",{configurable:!0,get:a("f425")})},b3d9:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":"",fluid:""}},[a("v-layout",{attrs:{"justify-center":"","align-center":""}},[a("v-flex",{attrs:{xs12:""}},[a("material-card",{staticClass:"card-tabs",attrs:{color:"green"}},[a("v-flex",{attrs:{slot:"header"},slot:"header"},[a("v-tabs",{attrs:{color:"transparent","slider-color":"white"},model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[a("span",{staticClass:"subheading font-weight-light mr-3",staticStyle:{"align-self":"center"}}),a("v-tab",{staticClass:"mr-3"},[t._v("微信用户列表")]),a("v-tab",{staticClass:"mr-3"},[t._v("跑男列表")]),a("v-tab",{staticClass:"mr-3"},[t._v("代驾员列表")])],1)],1),a("v-tabs-items",{model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[a("v-tab-item",[a("user-list",{attrs:{load:!0}})],1),a("v-tab-item",[a("runman",{attrs:{load:1==t.tabs}})],1),a("v-tab-item",[a("driving",{attrs:{load:2==t.tabs}})],1)],1)],1)],1)],1)],1)},n=[],l=a("8fcb"),o=a("9e3f"),i=a("8001"),r={components:{userList:l["default"],runman:o["default"],driving:i["default"]},data:function(){return{tabs:0,list:{0:!1,1:!1,2:!1}}},mounted:function(){},methods:{complete:function(t){this.list[t]=!this.list[t]}}},u=r,c=a("6691"),d=Object(c["a"])(u,s,n,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-f89140cc.d78bad62.js.map