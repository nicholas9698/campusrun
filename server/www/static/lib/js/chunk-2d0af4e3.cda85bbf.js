(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0af4e3"],{"0e80":function(e,a,t){"use strict";t.r(a);var r,i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",[t("v-form",{directives:[{name:"loading",rawName:"v-loading",value:e.tload,expression:"tload"}],staticStyle:{"max-width":"600px",margin:"auto"}},[t("p",[e._v("城市代理")]),t("v-radio-group",{attrs:{mandatory:!1,row:""},model:{value:e.formData.open_agent,callback:function(a){e.$set(e.formData,"open_agent",a)},expression:"formData.open_agent"}},[t("v-radio",{attrs:{label:"开启",value:1}}),t("v-radio",{attrs:{label:"关闭",value:0}})],1),t("p",[e._v("跨城服务")]),t("v-radio-group",{attrs:{mandatory:!1,row:""},model:{value:e.formData.cross_city_service,callback:function(a){e.$set(e.formData,"cross_city_service",a)},expression:"formData.cross_city_service"}},[t("v-radio",{attrs:{label:"开启",value:1}}),t("v-radio",{attrs:{label:"关闭",value:0}})],1),t("p",[e._v("帮我送服务")]),t("v-radio-group",{attrs:{mandatory:!1,row:""},model:{value:e.formData.send_service,callback:function(a){e.$set(e.formData,"send_service",a)},expression:"formData.send_service"}},[t("v-radio",{attrs:{label:"开启",value:1}}),t("v-radio",{attrs:{label:"关闭",value:0}})],1),t("v-text-field",{attrs:{type:"number",label:"帮我送初始接单时间"},model:{value:e.formData.init_send_time,callback:function(a){e.$set(e.formData,"init_send_time",a)},expression:"formData.init_send_time"}}),t("p",[e._v("帮我取服务")]),t("v-radio-group",{attrs:{mandatory:!1,row:""},model:{value:e.formData.take_service,callback:function(a){e.$set(e.formData,"take_service",a)},expression:"formData.take_service"}},[t("v-radio",{attrs:{label:"开启",value:1}}),t("v-radio",{attrs:{label:"关闭",value:0}})],1),t("v-text-field",{attrs:{type:"number",label:"帮我取初始接单时间"},model:{value:e.formData.init_take_time,callback:function(a){e.$set(e.formData,"init_take_time",a)},expression:"formData.init_take_time"}}),t("p",[e._v("帮我买服务")]),t("v-radio-group",{attrs:{mandatory:!1,row:""},model:{value:e.formData.buy_service,callback:function(a){e.$set(e.formData,"buy_service",a)},expression:"formData.buy_service"}},[t("v-radio",{attrs:{label:"开启",value:1}}),t("v-radio",{attrs:{label:"关闭",value:0}})],1),t("v-text-field",{attrs:{type:"number",label:"帮我买就近多少公里"},model:{value:e.formData.buy_meter,callback:function(a){e.$set(e.formData,"buy_meter",a)},expression:"formData.buy_meter"}}),t("v-text-field",{attrs:{type:"number",label:"帮我买初始接单时间"},model:{value:e.formData.init_buy_time,callback:function(a){e.$set(e.formData,"init_buy_time",a)},expression:"formData.init_buy_time"}}),t("p",[e._v("代驾服务")]),t("v-radio-group",{attrs:{mandatory:!1,row:""},model:{value:e.formData.drive_service,callback:function(a){e.$set(e.formData,"drive_service",a)},expression:"formData.drive_service"}},[t("v-radio",{attrs:{label:"开启",value:1}}),t("v-radio",{attrs:{label:"关闭",value:0}})],1),t("v-text-field",{attrs:{type:"number",label:"代驾初始接单时间"},model:{value:e.formData.init_drive_time,callback:function(a){e.$set(e.formData,"init_drive_time",a)},expression:"formData.init_drive_time"}}),t("v-btn",{staticClass:"mt-3 dark",attrs:{loading:e.tload},on:{click:function(a){return e.submit()}}},[e._v("保存")])],1)],1)},o=[],n={props:{load:{type:Boolean,default:!1}},data:function(){return{formData:{open_agent:0,cross_city_service:1,send_service:1,take_service:1,buy_service:1,drive_service:1,buy_meter:3,init_send_time:15,init_take_time:15,init_buy_time:15,init_drive_time:5},pageLoad:this.load,tload:!1}},watch:{load:function(e){e&&(this.pageLoad=e)},pageLoad:function(e){e&&this.getConfig()}},mounted:function(){r=this},methods:{getConfig:function(){r.tload=!0,this.$post("config/get",{config_key:"service"},function(e){r.tload=!1,0==e.errno&&e.data.config_content&&(r.formData=JSON.parse(e.data.config_content))})},submit:function(){this.tload=!0,this.$post("config/update",{config_key:"service",config_content:JSON.stringify(this.formData)},function(e){r.tload=!1,0===e.errno&&r.$message({showClose:!0,message:e.errmsg,type:"success"})})}}},s=n,l=t("6691"),c=Object(l["a"])(s,i,o,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0af4e3.cda85bbf.js.map