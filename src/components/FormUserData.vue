<template>
  <div class="register-form-group">
    <div class="register-form-group-item">
      <label for="register-name">Nome</label>
      <BaseInput
        type="text"
        id="register-name"
        v-model.trim="$v.form.name.$model"
      />
      <BaseError :validation="$v.form.name.required" v-if="$v.form.name.$dirty"
        >Campo obrigatório</BaseError
      >
      <BaseError :validation="$v.form.name.minLength"
        >Nome precisa ter pelo menos
        {{ $v.form.name.$params.minLength.min }} caracteres</BaseError
      >
    </div>
    <div class="register-form-group-item">
      <label for="register-lastname">Sobrenome</label>
      <BaseInput
        type="text"
        id="register-lastname"
        v-model.trim="$v.form.lastname.$model"
      />
      <BaseError
        :validation="$v.form.lastname.required"
        v-if="$v.form.lastname.$dirty"
        >Campo obrigatório</BaseError
      >
    </div>
    <div class="register-form-group-item">
      <label for="register-username">Nome de usuário</label>
      <BaseInput
        type="text"
        id="register-username"
        v-model.trim="$v.form.username.$model"
      />
      <BaseError
        :validation="$v.form.username.required"
        v-if="$v.form.username.$dirty"
        >Campo obrigatório</BaseError
      >
      <BaseError :validation="$v.form.username.minLength"
        >Nome de usuário inválido</BaseError
      >
    </div>
    <div class="register-form-group-item">
      <label for="register-email">E-mail</label>
      <BaseInput
        type="email"
        id="register-email"
        v-model.trim="$v.form.email.$model"
      />
      <BaseError
        :validation="$v.form.email.required"
        v-if="$v.form.email.$dirty"
        >Campo obrigatório</BaseError
      >
      <BaseError :validation="$v.form.email.email" v-if="$v.form.email.$dirty"
        >E-mail inválido</BaseError
      >
    </div>
    <div class="register-form-group-item">
      <label for="register-cpf">CPF</label>
      <BaseInput
        type="text"
        id="register-cpf"
        v-model="$v.form.cpf.$model"
        v-mask="['###.###.###-##']"
      />
      <BaseError :validation="$v.form.cpf.required" v-if="$v.form.cpf.$dirty"
        >Campo obrigatório</BaseError
      >
      <BaseError :validation="$v.form.cpf.minLength">CPF Inválido</BaseError>
    </div>
    <div class="register-form-group-item">
      <label for="register-phone">Telefone</label>
      <BaseInput
        type="text"
        id="register-phone"
        v-model="$v.form.phone.$model"
        v-mask="['(##) #####-####', '(##) ####-####']"
      />
      <BaseError
        :validation="$v.form.phone.required"
        v-if="$v.form.phone.$dirty"
        >Campo obrigatório</BaseError
      >
      <BaseError :validation="$v.form.phone.minLength"
        >Telefone inválido</BaseError
      >
    </div>
    <div class="register-form-group-item">
      <label for="register-password">Senha</label>
      <BaseInput
        type="password"
        id="register-password"
        v-model.trim="$v.form.password.$model"
      />
      <BaseError
        :validation="$v.form.password.required"
        v-if="$v.form.password.$dirty"
        >Campo obrigatório</BaseError
      >
      <BaseError :validation="$v.form.password.minLength"
        >A senha deve ter no mínimo
        {{ $v.form.password.$params.minLength.min }} caracteres</BaseError
      >
    </div>
    <div class="register-form-group-item">
      <label for="register-password-confirm">Confirmar senha</label>
      <BaseInput
        type="password"
        id="register-password-confirm"
        v-model.trim="$v.password_confirm.$model"
      />
      <BaseError
        :validation="$v.password_confirm.sameAs"
        v-if="$v.password_confirm.$dirty"
        >As senhas devem ser iguais</BaseError
      >
    </div>
  </div>
</template>

<script>
import BaseError from "@/components/BaseError";
import BaseInput from "@/components/BaseInput";
import { mask } from "vue-the-mask";

export default {
  name: "FormUserData",
  props: {
    $v: {
      type: Object,
    },
  },
  directives: {
    mask,
  },
  components: {
    BaseError,
    BaseInput,
  },
};
</script>

<style lang="scss">
@import "@/styles/_variables";

.register-form-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: left;
  background-color: $white-color;
  padding: 20px;
  border-radius: 5px;
}
.register-form-group-item {
  width: 100%;

  & input {
    width: 90%;
    margin-bottom: 1rem;
  }
}
@media screen and (min-width: 768px) {
  .register-form-group-item {
    width: 48%;
  }
}
</style>
