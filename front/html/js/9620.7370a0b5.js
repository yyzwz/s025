"use strict";(self["webpackChunks025"]=self["webpackChunks025"]||[]).push([[9620,8387],{8387:(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var a=function(){var e=this,t=e._self._c;return t("div",[t("Cascader",{attrs:{data:e.department,"load-data":e.loadData,"change-on-select":"",filterable:"",clearable:"",placeholder:"选择部门"},on:{"on-change":e.handleChangeDep},model:{value:e.selectDep,callback:function(t){e.selectDep=t},expression:"selectDep"}})],1)},r=[],l=s(7877);const i={name:"departmentChoose",props:{},data(){return{selectDep:[],department:[]}},methods:{initDepartmentData(){(0,l.E5)().then((e=>{e.success&&(e.result.forEach((function(e){e.isParent?(e.value=e.id,e.label=e.title,e.loading=!1,e.children=[]):(e.value=e.id,e.label=e.title),-1==e.status&&(e.label="[已禁用] "+e.label,e.disabled=!0)})),this.department=e.result)}))},loadData(e,t){e.loading=!0,(0,l.E5)({parentId:e.value}).then((s=>{e.loading=!1,s.success&&(s.result.forEach((function(e){e.isParent?(e.value=e.id,e.label=e.title,e.loading=!1,e.children=[]):(e.value=e.id,e.label=e.title),-1==e.status&&(e.label="[已禁用] "+e.label,e.disabled=!0)})),e.children=s.result,t())}))},handleChangeDep(e,t){let s="";e&&e.length>0&&(s=e[e.length-1]),this.$emit("on-change",s)},clearSelect(){this.selectDep=[]}},mounted(){this.initDepartmentData()}},n=i;var c=s(1001),o=(0,c.Z)(n,a,r,!1,null,null,null);const h=o.exports},9620:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"user-choose"},[t("Button",{attrs:{icon:e.icon},on:{click:function(t){e.userModalVisible=!0}}},[e._v(e._s(e.text))]),t("span",{staticClass:"clear",on:{click:e.clearSelectData}},[e._v("清空已选")]),t("Collapse",{staticClass:"collapse",attrs:{simple:""}},[t("Panel",{attrs:{name:"1"}},[e._v(" 已选择 "),t("span",{staticClass:"select-count"},[e._v(e._s(e.selectUsers.length))]),e._v(" 人 "),t("p",{attrs:{slot:"content"},slot:"content"},e._l(e.selectUsers,(function(s,a){return t("Tag",{key:a,attrs:{name:s.id,color:"default",closable:""},on:{"on-close":e.handleCancelUser}},[t("Tooltip",{attrs:{placement:"top",content:s.username}},[e._v(e._s(s.nickname))])],1)})),1)])],1),t("Drawer",{attrs:{title:"选择用户",closable:"",width:"800",draggable:""},model:{value:e.userModalVisible,callback:function(t){e.userModalVisible=t},expression:"userModalVisible"}},[t("Form",{ref:"searchUserForm",attrs:{model:e.searchUserForm,inline:"","label-width":55}},[t("Form-item",{attrs:{label:"用户名",prop:"nickname"}},[t("Input",{staticStyle:{width:"200px"},attrs:{type:"text",clearable:"",placeholder:"请输入用户名"},model:{value:e.searchUserForm.nickname,callback:function(t){e.$set(e.searchUserForm,"nickname",t)},expression:"searchUserForm.nickname"}})],1),t("Form-item",{attrs:{label:"部门",prop:"department"}},[t("department-choose",{ref:"dep",staticStyle:{width:"200px"},on:{"on-change":e.handleSelectDep}})],1),t("Form-item",{staticClass:"br",staticStyle:{"margin-left":"-35px"}},[t("Button",{attrs:{type:"primary",icon:"ios-search"},on:{click:e.handleSearchUser}},[e._v("搜索")]),t("Button",{on:{click:e.handleResetUser}},[e._v("重置")])],1)],1),t("Alert",{attrs:{"show-icon":""}},[e._v(" 已选择 "),t("span",{staticClass:"select-count"},[e._v(e._s(e.selectUsers.length))]),e._v(" 项 "),t("a",{staticStyle:{"margin-left":"10px"},on:{click:e.clearSelectData}},[e._v("清空已选")])]),t("Table",{staticStyle:{margin:"2vh 0"},attrs:{loading:e.userLoading,border:"",columns:e.userColumns,data:e.userData}}),t("Row",{attrs:{type:"flex",justify:"end"}},[t("Page",{attrs:{current:e.searchUserForm.pageNumber,total:e.totalUser,"page-size":e.searchUserForm.pageSize,"page-size-opts":[10,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":"",transfer:""},on:{"on-change":e.changeUserPage,"on-page-size-change":e.changeUserPageSize}})],1)],1)],1)},r=[],l=s(7877),i=s(8387);const n={name:"userChoose",components:{departmentChoose:i["default"]},props:{text:{type:String,default:"选择用户"},icon:{type:String,default:"md-person-add"}},data(){return{userLoading:!0,userModalVisible:!1,selectUsers:[],searchUserForm:{id:"",nickname:"",type:"",status:"",pageNumber:1,pageSize:10,sort:"createTime",order:"desc"},userColumns:[{type:"index",width:60,align:"center"},{title:"用户名",key:"nickname",minWidth:130,sortable:!0},{title:"登录账号",key:"username",minWidth:130,sortable:!0},{title:"头像",key:"avatar",width:80,align:"center",render:(e,t)=>e("Avatar",{props:{src:t.row.avatar}})},{title:"所属部门",key:"departmentTitle",width:120},{title:"手机",key:"mobile",width:125,sortable:!0},{title:"邮箱",key:"email",width:180,sortable:!0},{title:"性别",key:"sex",width:70,align:"center"},{title:"创建时间",key:"createTime",sortable:!0,sortType:"desc",width:170},{title:"操作",key:"action",width:130,align:"center",fixed:"right",render:(e,t)=>e("div",[e("Button",{props:{type:"info",size:"small"},on:{click:()=>{this.chooseUser(t.row)}}},"添加该用户")])}],userData:[],totalUser:0}},methods:{handleSelectDep(e){this.searchUserForm.departmentId=e},changeUserPage(e){this.searchUserForm.pageNumber=e,this.getUserDataList()},changeUserPageSize(e){this.searchUserForm.pageSize=e,this.getUserDataList()},getUserDataList(){this.userLoading=!0,(0,l.qn)(this.searchUserForm).then((e=>{this.userLoading=!1,e.success&&(this.userData=e.result.records,this.totalUser=e.result.total)}))},handleSearchUser(){this.searchUserForm.pageNumber=1,this.searchUserForm.pageSize=10,this.getUserDataList()},handleResetUser(){this.$refs.searchUserForm.resetFields(),this.searchUserForm.pageNumber=1,this.searchUserForm.pageSize=10,this.$refs.dep.clearSelect(),this.searchUserForm.departmentId="",this.getUserDataList()},setData(e){this.selectUsers=e,this.$emit("on-change",this.selectUsers)},chooseUser(e){let t=this,s=!0;if(this.selectUsers.forEach((a=>{e.id==a.id&&(t.$Message.warning("已经添加过啦，请勿重复选择"),s=!1)})),s){let t={id:e.id,username:e.username,nickname:e.nickname};this.selectUsers.push(t),this.$emit("on-change",this.selectUsers),this.$Message.success(`添加用户 ${e.nickname} 成功`)}},clearSelectData(){this.selectUsers=[],this.$emit("on-change",this.selectUsers)},handleCancelUser(e,t){this.selectUsers=this.selectUsers.filter((e=>e.id!=t)),this.$emit("on-change",this.selectUsers),this.$Message.success("删除所选用户成功")}},mounted(){this.getUserDataList()}},c=n;var o=s(1001),h=(0,o.Z)(c,a,r,!1,null,null,null);const d=h.exports}}]);