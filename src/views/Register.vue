<template>
  <BaseLayout
    :isLoading="isLoading"
    :alertClass="alertClass"
    :alertMessage="alertMessage"
  >
    <template v-slot:title>
      <span class="title">Cadastre-se em nossa plataforma</span>
    </template>
    <template v-slot:content>
      <form @submit.prevent="onSubmit">
        <FormUserData :$v="$v" />
        <button type="submit" class="button is-primary">Criar Conta</button>
      </form>
    </template>
    <template v-slot:footer>
      <div class="register-form-footer">
        <p>
          Ao criar uma conta, você concorda com nossos
          <a href="#">Termos de Uso</a> e
          <a href="#">Políticas de Privacidade</a>
        </p>
      </div>
    </template>
  </BaseLayout>
</template>

<script>
import pageMixin from "@/mixins/pageMixin";
import BaseLayout from "@/views/Layouts/BaseLayout";
import FormUserData from "@/components/FormUserData";
import formRegister from "@/validations/formRegister";
import { mapActions } from "vuex";

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
    };
  },
  mixins: [pageMixin],
  validations: { ...formRegister },
  components: {
    BaseLayout,
    FormUserData,
  },
  methods: {
    ...mapActions(["register"]),
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
};
</script>
