(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"73cf":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("BaseLayout",{attrs:{isLoading:t.isLoading,alertClass:t.alertClass,alertMessage:t.alertMessage},scopedSlots:t._u([{key:"title",fn:function(){return[e("span",{staticClass:"title"},[t._v("Cadastre-se em nossa plataforma")])]},proxy:!0},{key:"content",fn:function(){return[e("form",{on:{submit:function(a){return a.preventDefault(),t.onSubmit.apply(null,arguments)}}},[e("FormUserData",{attrs:{$v:t.$v}}),e("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[t._v("Criar Conta")])],1)]},proxy:!0},{key:"footer",fn:function(){return[e("div",{staticClass:"register-form-footer"},[e("p",[t._v(" Ao criar uma conta, você concorda com nossos "),e("a",{attrs:{href:"#"}},[t._v("Termos de Uso")]),t._v(" e "),e("a",{attrs:{href:"#"}},[t._v("Políticas de Privacidade")])])])]},proxy:!0}])})},o=[],r=e("5530"),n=e("5636"),i=e("5b34"),u=e("a3e7"),c=e("c6bb"),l=e("2f62"),m={name:"Register",data:function(){return{form:{name:"",lastname:"",username:"",email:"",cpf:"",phone:"",password:""}}},mixins:[n["a"]],validations:Object(r["a"])({},c["a"]),components:{BaseLayout:i["a"],FormUserData:u["a"]},methods:Object(r["a"])(Object(r["a"])({},Object(l["b"])(["register"])),{},{onSubmit:function(){var t=this;if(this.onSubmitSuccess=!1,this.onSubmitError=!1,this.alertMessage="",this.$v.$touch(),!this.$v.$invalid){var a={user:this.$v.form.$model,resolver:!0};this.isLoading=!0,this.register(a).then((function(){t.onSubmitSuccess=!0,t.alertMessage="Cadastrado realizado com sucesso. Redirecionando para o Login...",t.isLoading=!1,setTimeout((function(){t.$router.push("/login")}),2e3)})).catch((function(){t.onSubmitError=!0,t.alertMessage="Erro ao realizar o cadastro",t.isLoading=!1,setTimeout((function(){t.onSubmitError=!1,t.alertMessage=""}),2500)}))}}})},f=m,d=e("2877"),p=Object(d["a"])(f,s,o,!1,null,null,null);a["default"]=p.exports}}]);
//# sourceMappingURL=about.4d4db7cf.js.map