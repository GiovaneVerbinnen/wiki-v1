(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"2e93":function(t,e,a){},"32f6":function(t,e,a){"use strict";a("2e93")},"57ab":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",icon:"account_box",label:"Wiki Crud"}}),a("q-tabs",{staticClass:"bg-primary text-white",attrs:{flat:"",align:"center",breakpoint:0},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-route-tab",{attrs:{exact:"",to:"/View",name:"View",label:"Listar"}}),a("q-route-tab",{attrs:{exact:"",to:"/Create",name:"Create",label:"Cadastrar"}})],1)],1)],1)},l=[],r={name:"Header",data(){return{tab:"",text:""}}},o=r,s=a("a6c2"),i=a("8738"),u=a("66cf"),c=a("ef9c"),b=a("6471"),m=a("0de0"),p=a("63c1"),d=a.n(p),f=Object(s["a"])(o,n,l,!1,null,null,null);e["a"]=f.exports;d()(f,"components",{QHeader:i["a"],QToolbar:u["a"],QBtn:c["a"],QTabs:b["a"],QRouteTab:m["a"]})},"9ab0":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md",staticStyle:{"max-width":"400px"}},[a("q-form",{staticClass:"q-gutter-md",on:{submit:t.onSubmit,reset:t.onReset}},[a("q-input",{attrs:{filled:"",label:"Seu nome",hint:"Digite seu nome","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Não pode ser vazio"}]},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("q-input",{attrs:{filled:"",label:"Seu Trabalho","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Não pode ser vazio"}]},model:{value:t.job,callback:function(e){t.job=e},expression:"job"}}),a("div",[a("q-btn",{attrs:{label:"Enviar",type:"submit",color:"primary"}}),a("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Limpar",type:"reset",color:"primary",flat:""}})],1)],1)],1)},l=[],r=(a("7338"),a("c545"),a("57ab")),o={components:{Header:r["a"]},name:"CreateUser",data(){return{name:null,job:null}},methods:{onSubmit(){},onReset(){this.name=null,this.job=null}}},s=o,i=(a("32f6"),a("a6c2")),u=a("3548"),c=a("a3be"),b=a("ef9c"),m=a("63c1"),p=a.n(m),d=Object(i["a"])(s,n,l,!1,null,"f3b79490",null);e["default"]=d.exports;p()(d,"components",{QForm:u["a"],QInput:c["a"],QBtn:b["a"]})}}]);