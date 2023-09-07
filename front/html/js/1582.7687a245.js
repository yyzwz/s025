"use strict";(self["webpackChunks025"]=self["webpackChunks025"]||[]).push([[1582,7204],{1582:(t,s,e)=>{e.r(s),e.d(s,{default:()=>p});var a=function(){var t=this,s=t._self._c;return s("div",[s("Card",{staticClass:"change-pass"},[s("p",{attrs:{slot:"title"},slot:"title"},[s("Icon",{attrs:{type:"key"}}),t._v("修改密码 ")],1),s("div",[s("Form",{ref:"editPasswordForm",staticStyle:{width:"450px"},attrs:{model:t.editPasswordForm,"label-width":100,"label-position":"right",rules:t.passwordValidate}},[s("FormItem",{attrs:{label:"原密码",prop:"oldPass"}},[s("Input",{attrs:{type:"password",placeholder:"请输入现在使用的密码"},model:{value:t.editPasswordForm.oldPass,callback:function(s){t.$set(t.editPasswordForm,"oldPass",s)},expression:"editPasswordForm.oldPass"}})],1),s("FormItem",{attrs:{label:"新密码",prop:"newPass"}},[s("SetPassword",{on:{"on-change":t.changeInputPass},model:{value:t.editPasswordForm.newPass,callback:function(s){t.$set(t.editPasswordForm,"newPass",s)},expression:"editPasswordForm.newPass"}})],1),s("FormItem",{attrs:{label:"确认新密码",prop:"rePass"}},[s("Input",{attrs:{type:"password",placeholder:"请再次输入新密码"},model:{value:t.editPasswordForm.rePass,callback:function(s){t.$set(t.editPasswordForm,"rePass",s)},expression:"editPasswordForm.rePass"}})],1),s("FormItem",[s("Button",{staticStyle:{width:"100px","margin-right":"5px"},attrs:{type:"primary",loading:t.savePassLoading},on:{click:t.saveEditPass}},[t._v("保存")]),s("Button",{on:{click:t.cancelEditPass}},[t._v("取消")])],1)],1)],1)])],1)},r=[],i=e(7184);const n=t=>(0,i.j0)("/user/modifyPass",t);var o=e(7204);const l={name:"change_pass",components:{SetPassword:o["default"]},data(){const t=(t,s,e)=>{s!==this.editPasswordForm.newPass?e(new Error("两次输入密码不一致")):e()};return{savePassLoading:!1,editPasswordForm:{oldPass:"",newPass:"",rePass:""},strength:"",passwordValidate:{oldPass:[{required:!0,message:"请输入原密码",trigger:"blur"}],newPass:[{required:!0,message:"请输入新密码",trigger:"blur"},{min:6,message:"请至少输入6个字符",trigger:"blur"},{max:32,message:"最多输入32个字符",trigger:"blur"}],rePass:[{required:!0,message:"请再次输入新密码",trigger:"blur"},{validator:t,trigger:"blur"}]}}},methods:{changeInputPass(t,s,e){this.strength=e},saveEditPass(){let t={password:this.editPasswordForm.oldPass,newPass:this.editPasswordForm.newPass,passStrength:this.strength};this.$refs["editPasswordForm"].validate((s=>{s&&(this.savePassLoading=!0,n(t).then((t=>{this.savePassLoading=!1,t.success&&this.$Modal.success({title:"修改密码成功",content:"修改密码成功，需重新登录",onOk:()=>{this.$store.commit("logout",this),this.$store.commit("clearOpenedSubmenu"),this.$router.push({name:"login"})}})})))}))},cancelEditPass(){this.$store.commit("removeTag","password"),localStorage.pageOpenedList=JSON.stringify(this.$store.state.app.pageOpenedList);let t="",s=this.$store.state.app.pageOpenedList.length;t=s>1?this.$store.state.app.pageOpenedList[s-1].name:this.$store.state.app.pageOpenedList[0].name,this.$router.push({name:t})}},mounted(){}},d=l;var h=e(1001),u=(0,h.Z)(d,a,r,!1,null,null,null);const p=u.exports},7204:(t,s,e)=>{e.r(s),e.d(s,{default:()=>d});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"set-password"},[s("Poptip",{attrs:{transfer:"",trigger:"focus",placement:"right",width:"250"}},[s("Input",{attrs:{type:"password",password:"",maxlength:t.maxlength,size:t.size,placeholder:t.placeholder,disabled:t.disabled,readonly:t.readonly},on:{"on-change":t.handleChange},model:{value:t.currentValue,callback:function(s){t.currentValue=s},expression:"currentValue"}}),s("div",{class:t.tipStyle,attrs:{slot:"content"},slot:"content"},[s("div",{staticClass:"words"},[t._v("强度 : "+t._s(t.strength))]),s("Progress",{staticStyle:{margin:"13px 0"},attrs:{percent:t.strengthValue,status:t.progressStatus,"hide-info":""}})],1)],1)],1)},r=[];const i={name:"setPassword",props:{value:String,size:String,placeholder:{type:String,default:"请输入密码，长度为6-20个字符"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},maxlength:{type:Number,default:20}},data(){return{currentValue:this.value,tipStyle:"password-tip-none",strengthValue:0,progressStatus:"normal",strength:"无",grade:0}},methods:{checkStrengthValue(t){let s=0;return/\d/.test(t)&&s++,/[a-z]/.test(t)&&s++,/[A-Z]/.test(t)&&s++,/\W/.test(t)&&s++,t.length>=10&&s++,this.grade=s,s},strengthChange(){if(!this.currentValue)return this.tipStyle="password-tip-none",this.strength="无",void(this.strengthValue=0);let t=this.checkStrengthValue(this.currentValue);t<=1?(this.progressStatus="wrong",this.tipStyle="password-tip-weak",this.strength="弱",this.strengthValue=33):t>=2&&t<=4?(this.progressStatus="normal",this.tipStyle="password-tip-middle",this.strength="中",this.strengthValue=66):(this.progressStatus="success",this.tipStyle="password-tip-strong",this.strength="强",this.strengthValue=100)},handleChange(t){this.strengthChange(),this.$emit("input",this.currentValue),this.$emit("on-change",this.currentValue,this.grade,this.strength)},setCurrentValue(t){t!==this.currentValue&&(this.currentValue=t,this.strengthChange(),this.$emit("on-change",this.currentValue,this.grade,this.strength))}},watch:{value(t){this.setCurrentValue(t)}}},n=i;var o=e(1001),l=(0,o.Z)(n,a,r,!1,null,null,null);const d=l.exports}}]);