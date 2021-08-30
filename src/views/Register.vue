<template>
  <div class="container page-container">
    <TheSpinner v-if="isLoading" />
    <transition name="fade">
      <BaseAlert :class="alertClass" v-if="alertMessage">{{
        alertMessage
      }}</BaseAlert>
    </transition>
    <span class="title">Cadastre-se em nossa plataforma</span>
    <form @submit.prevent="onSubmit">
      <FormUserData :$v="$v" />
      <button type="submit" class="button is-primary">Criar Conta</button>
    </form>
    <div class="register-form-footer">
      <p>
        Ao criar uma conta, você concorda com nossos
        <a href="#">Termos de Uso</a> e <a href="#">Políticas de Privacidade</a>
      </p>
    </div>
  </div>
</template>

<script>
import BaseAlert from "@/components/BaseAlert";
import TheSpinner from "@/components/TheSpinner";
import FormUserData from "@/components/FormUserData";
import formRegister from "@/validations/formRegister";
import { mapActions } from "vuex";
// import {register} from '@/api/api.js'

export default {
  name: "Register",
  data() {
    return {
      form: {
        name: "",
        lastname: "",
        username: "",
        email: "",
        cpf: "",
        phone: "",
        password: "",
      },
      password_confirm: "",
      onSubmitSuccess: false,
      onSubmitError: false,
      alertMessage: "",
      isLoading: false,
    };
  },
  validations: { ...formRegister },
  components: {
    BaseAlert,
    TheSpinner,
    FormUserData,
  },
  methods: {
    ...mapActions({
      register: "register",
    }),
    onSubmit() {
      this.onSubmitSuccess = false;
      this.onSubmitError = false;
      this.alertMessage = "";

      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      //Parâmetro "resolver" é usado para testar a resposta da API
      let payload = { user: this.$v.form.$model, resolver: true };
      this.isLoading = true;
      this.register(payload)
        .then(() => {
          this.onSubmitSuccess = true;
          this.alertMessage =
            "Cadastrado realizado com sucesso. Redirecionando para o Login...";
          this.isLoading = false;
          setTimeout(() => {
            this.$router.push("/login");
          }, 2000);
        })
        .catch(() => {
          this.onSubmitError = true;
          this.alertMessage = "Erro ao realizar o cadastro";
          this.isLoading = false;
          setTimeout(() => {
            this.onSubmitError = false;
            this.alertMessage = "";
          }, 2500);
        });
    },
  },
  computed: {
    alertClass() {
      return {
        "alert-danger": this.onSubmitError,
        "alert-success": this.onSubmitSuccess,
      };
    },
  },
};
</script>

<style lang="scss"></style>
