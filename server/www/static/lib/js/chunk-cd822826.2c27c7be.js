(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd822826"],{"58f2":function(t,a,e){"use strict";var o=e("f9bc"),s=e.n(o);s.a},d6e4:function(t,a,e){"use strict";e.r(a);var o,s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-form",{directives:[{name:"loading",rawName:"v-loading",value:t.tload,expression:"tload"}],staticStyle:{"max-width":"600px",margin:"auto"}},[e("el-upload",{staticClass:"upload-demo",attrs:{action:t.api+"file/img",headers:t.headers,"with-credentials":!0,"on-success":t.uploadSuccess}},[e("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传会员卡封面")]),e("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，且不超过1mb")])],1),t.formData.cover?e("div",{staticClass:"img",style:"background-image:url("+t.api+t.formData.cover+")"}):t._e(),e("v-text-field",{staticClass:"mt-3",attrs:{label:"月卡价格(元)"},model:{value:t.formData.monthPrice,callback:function(a){t.$set(t.formData,"monthPrice",a)},expression:"formData.monthPrice"}}),e("v-text-field",{staticClass:"mt-3",attrs:{label:"季卡价格(元)"},model:{value:t.formData.seasonPrice,callback:function(a){t.$set(t.formData,"seasonPrice",a)},expression:"formData.seasonPrice"}}),e("v-text-field",{staticClass:"mt-3",attrs:{label:"年卡价格(元)"},model:{value:t.formData.yearPrie,callback:function(a){t.$set(t.formData,"yearPrie",a)},expression:"formData.yearPrie"}}),e("v-text-field",{staticClass:"mt-3",attrs:{label:"每日可领的优惠券,填写优惠券ID，可填多个ID用英文“,”隔开"},model:{value:t.formData.dayCoupons,callback:function(a){t.$set(t.formData,"dayCoupons",a)},expression:"formData.dayCoupons"}}),e("v-text-field",{staticClass:"mt-3",attrs:{label:"每周可领的优惠券,填写优惠券ID，可填多个ID用英文“,”隔开"},model:{value:t.formData.weekCoupons,callback:function(a){t.$set(t.formData,"weekCoupons",a)},expression:"formData.weekCoupons"}}),e("v-text-field",{staticClass:"mt-3",attrs:{label:"每月可领的优惠券,填写优惠券ID，可填多个ID用英文“,”隔开"},model:{value:t.formData.monthCoupons,callback:function(a){t.$set(t.formData,"monthCoupons",a)},expression:"formData.monthCoupons"}}),e("p",[t._v("是否开启双倍积分")]),e("v-radio-group",{attrs:{mandatory:!1,row:""},model:{value:t.formData.cross_city_service,callback:function(a){t.$set(t.formData,"cross_city_service",a)},expression:"formData.cross_city_service"}},[e("v-radio",{attrs:{label:"开启",value:1}}),e("v-radio",{attrs:{label:"关闭",value:0}})],1),e("v-textarea",{attrs:{label:"会员说明"},model:{value:t.formData.vip_text,callback:function(a){t.$set(t.formData,"vip_text",a)},expression:"formData.vip_text"}}),e("v-btn",{staticClass:"mt-3 dark",attrs:{loading:t.tload},on:{click:function(a){return t.submit()}}},[t._v("保存")])],1)],1)},i=[],n={props:{load:{type:Boolean,default:!1}},data:function(){return{formData:{cover:"",monthPrice:"",seasonPrice:"",yearPrie:"",dayCoupons:"",weekCoupons:"",monthCoupons:"",open_double:"",vip_text:""},headers:{token:sessionStorage.getItem("token")},api:this.$api,pageLoad:this.load,tload:!1}},watch:{load:function(t){t&&(this.pageLoad=t)},pageLoad:function(t){t&&this.getConfig()}},mounted:function(){o=this,o.getConfig()},methods:{getConfig:function(){o.tload=!0,this.$post("config/get",{config_key:"vip_set"},function(t){o.tload=!1,0==t.errno&&t.data.config_content&&(o.formData=JSON.parse(t.data.config_content))})},uploadSuccess:function(t){0==t.errno&&(this.formData.cover=t.data.url)},submit:function(){this.tload=!0,this.$post("config/update",{config_key:"vip_set",config_content:JSON.stringify(this.formData)},function(t){o.tload=!1,0===t.errno&&o.$message({showClose:!0,message:t.errmsg,type:"success"})})}}},r=n,l=(e("58f2"),e("6691")),c=Object(l["a"])(r,s,i,!1,null,null,null);a["default"]=c.exports},f9bc:function(t,a,e){}}]);
//# sourceMappingURL=chunk-cd822826.2c27c7be.js.map