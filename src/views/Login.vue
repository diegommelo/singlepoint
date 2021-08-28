<template>
  <div class="login-container">
    <form>
      <div class="form-group">
        <label for="login-username">Usuário</label>
        <input id="login-username" type="text" v-model="form.username" class="input" />
        <label for="login-password">Senha</label>
        <input id="login-password" type="password" v-model="form.password" class="input" />
        <button type="button" @click="login" class="primary-button">
          Entrar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      // this.$store.dispatch("login", this.form);
      console.log('user: '+this.form.username+' pass: '+this.form.password);
    },
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
}
.form-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.form-group button {
  margin-top: 15px;
}
</style>
