<template>
  <div class="container login-container">
    <form>
      <div class="login-form-group">
        <label for="login-username">Usuário</label>
        <input id="login-username" type="text" v-model="form.username" class="input" />
        <label for="login-password">Senha</label>
        <input id="login-password" type="password" v-model="form.password" class="input" />
        <button type="button" @click="login" class="button is-primary">
          Entrar
        </button>
      </div>
    </form>
    <div class="login-form-footer">
      <p><a href="#">Esqueceu a senha?</a></p>
      <p>Ainda não tem uma conta? <router-link to="/register">Cadastre-se</router-link></p>
    </div>
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
    }
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
    width: 80vw;
  }
.login-form-group {
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color:white;
  padding: 20px;
  border-radius: 5px;
}
.login-form-group input {
  margin-bottom: 30px;
}
.login-form-footer {
  margin-top: 30px;
}

@media screen and (min-width: 768px) {
  .login-container {
    width: 50vw;
  }
}

@media screen and (min-width: 992px) {
  .login-container {
    width: 30vw;
  }
}

@media screen and (min-width: 1200px) {
  .login-container {
    width: 20vw;
  }
}
</style>
