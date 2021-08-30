<template>
  <BaseLayout :isLoading="isLoading" :alertClass="alertClass" :alertMessage="alertMessage">
    <template v-slot:title>
      <span class="title">Edite seu perfil</span>
    </template>
    <template v-slot:content>
      <form @submit.prevent="onSubmit">
        <FormUserData :$v="$v" />
        <button type="submit" class="button is-primary">Salvar</button>
      </form>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/views/Layouts/BaseLayout";
import FormUserData from "@/components/FormUserData";
import formRegister from "@/validations/formRegister";
import pageMixin from '@/mixins/pageMixin';
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Profile",
  components: {
    BaseLayout,
    FormUserData,
  },
  mixins: [pageMixin],
  validations: { ...formRegister },
  computed: {
    ...mapGetters({
      form: "getUser",
    }),
  },
  methods: {
    ...mapActions({
      updateUser: "edit",
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
      this.updateUser(payload)
        .then(() => {
          this.onSubmitSuccess = true;
          this.alertMessage = "Perfil atualizado com sucesso";
          this.isLoading = false;
          setTimeout(() => {
            this.onSubmitSuccess = false;
            this.alertMessage = "";
          }, 2500);
        })
        .catch(() => {
          this.onSubmitError = true;
          this.alertMessage = "Erro ao atualizar perfil";
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