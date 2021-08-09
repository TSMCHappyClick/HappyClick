(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4bfd"],{"0887":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"header pb-2 pt-5 pt-lg-6 d-flex align-items-center"},[a("b-container",{attrs:{fluid:""}},[a("span",{staticClass:"mask bg-gradient-success opacity-8"}),a("b-container",{staticClass:"d-flex align-items-center",attrs:{fluid:""}},[a("b-row",[a("b-col",{attrs:{lg:"12",md:"8"}},[a("h1",{staticClass:"display-3 text-white"},[t._v("Health Center Page")]),a("p",{staticClass:"text-white mt-0 mb-2"},[t._v("This is for Health Center's staff ONLY")])])],1)],1)],1)],1),a("b-card",{staticClass:"mt-3",attrs:{header:"今日預約施打疫苗名單","header-bg-variant":"info","header-text-variant":"white"}},[a("b-card-text",[t._v("\n            每天於疫苗施打完畢後 (17:00)，更新已施打疫苗的員工資料。\n            ")]),a("b-card-text",[t._v("請勾選施打狀態。")]),a("b-table",{attrs:{striped:"",hover:"",items:t.items,fields:t.fields},scopedSlots:t._u([{key:"cell(status)",fn:function(e){return[a("base-button",{staticClass:"mr-1",attrs:{size:"sm"},on:{click:function(a){return t.myconfirm(e.item)}}},[t._v("\n                        已施打\n                    ")])]}}])})],1),a("b-card",{staticClass:"mt-3",attrs:{header:"新增疫苗資訊","header-bg-variant":"default","header-text-variant":"white"}},[t.show?a("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[a("b-form-group",{attrs:{id:"input-group-1",label:"Vaccine Type:","label-for":"input-1"}},[a("b-form-select",{attrs:{id:"input-1",options:t.vaccines,required:""},model:{value:t.addVaccineForm.vaccine_type,callback:function(e){t.$set(t.addVaccineForm,"vaccine_type",e)},expression:"addVaccineForm.vaccine_type"}})],1),a("b-form-group",{attrs:{id:"input-group-2",label:"Date:","label-for":"input-2",description:"YYYY-MM-DD"}},[a("b-form-input",{attrs:{id:"input-2",type:"date",placeholder:"Enter availible vaccination date",required:""},model:{value:t.addVaccineForm.date,callback:function(e){t.$set(t.addVaccineForm,"date",e)},expression:"addVaccineForm.date"}})],1),a("b-form-group",{attrs:{id:"input-group-3",label:"Amount:","label-for":"input-3"}},[a("b-form-input",{attrs:{id:"input-3",type:"number",placeholder:"Enter availible doses of vaccine",min:"1",max:"999",required:""},model:{value:t.addVaccineForm.vaccine_amount,callback:function(e){t.$set(t.addVaccineForm,"vaccine_amount",e)},expression:"addVaccineForm.vaccine_amount"}})],1),a("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),a("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1):t._e()],1)],1)},c=[],i=(a("7f7f"),a("ac6a"),a("bc3a")),o=a.n(i),r=a("c1df"),s=a.n(r),l={data:function(){return{fields:["employeeID","name","vaccine","status"],items:[],addVaccineForm:{vaccine_type:null,date:"",vaccine_amount:""},vaccines:[{text:"Select One",value:null},"AstraZeneca","Moderna","BioNTech"],show:!0}},created:function(){var t=this,e=new Date,a=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate();a=s()(String(a)).format("YYYY-MM-DD"),console.log(a),o.a.get("https://happyclick-healthcenter.herokuapp.com/searchFormdata",{params:{date:a}}).then((function(e){console.log(e.data),e.data.forEach((function(e){console.log(e),t.items.push({form_id:e.form_id,employeeID:e.id,name:e.username,vaccine:e.vaccine_type})}))})).catch((function(t){return console.log(t)}))},methods:{myconfirm:function(t,e,a){var n={form_id:t.form_id,id:t.employeeID,Name:t.name};1==confirm("請確認已施打人員之資料，確定修改嗎?")&&this.ckeckVaccinated(n)},ckeckVaccinated:function(t){console.log(t),o.a.post("https://happyclick-healthcenter.herokuapp.com/updateVaccinated",t).then((function(t){console.log(t.data)})).catch((function(t){return console.log(t)}))},onSubmit:function(t){t.preventDefault(),console.log(JSON.stringify(this.addVaccineForm)),o.a.post("https://happyclick-healthcenter.herokuapp.com/updateVaccine",JSON.stringify(this.addVaccineForm)).then((function(t){console.log(t.data)})).catch((function(t){return console.log(t)}))},onReset:function(t){var e=this;t.preventDefault(),this.addVaccineForm.vaccine_type=null,this.addVaccineForm.date="",this.addVaccineForm.vaccine_amount="",this.show=!1,this.$nextTick((function(){e.show=!0}))}}},d=l,u=a("2877"),m=Object(u["a"])(d,n,c,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0a4bfd.07f3fd17.js.map