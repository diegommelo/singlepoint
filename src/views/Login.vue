<template>
  <div class="container login-container">
    <TheSpinner v-if="isLoading" />
    <transition name="fade">
      <BaseAlert class="alert-danger" v-if="onLoginError">{{alertMessage}}</BaseAlert>
    </transition>    
    <form>
      <div class="login-form-group">
        <label for="login-username">Usuário</label>
        <input id="login-username" type="text" v-model="form.username" class="input" />
        <BaseError :validation="$v.form.username.required" v-if="$v.form.username.$dirty">Informe o nome de usuário</BaseError>
        <label for="login-password">Senha</label>
        <input id="login-password" type="password" v-model="form.password" class="input" />
        <BaseError :validation="$v.form.password.required" v-if="$v.form.password.$dirty">Informe a senha</BaseError>
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
import BaseAlert from '@/components/BaseAlert'
import BaseError from '@/components/BaseError.vue'
import TheSpinner from '@/components/TheSpinner.vue'
import { required } from 'vuelidate/lib/validators'

export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      alertMessage: "",
      onLoginError: false,
      isLoading: false
    }
  },
  validations: {
    form: {
      username: {
        required,
      },
      password: {
        required,
      },
    },
  },
  components: {
    BaseAlert,
    BaseError,
    TheSpinner,
  },
  methods: {
    login() {
      this.onLoginError = false;
      this.alertMessage = "";
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }

      let payload = {
        form: this.form,
        resolver: true
      }
      this.isLoading = true
      
      this.$store.dispatch('login', payload).then(resp => {
        this.isLoading = false
        this.$router.push(`/profile/${resp.id}`)
      }).catch(() => {
        this.isLoading = false
        this.onLoginError = true
        this.alertMessage = "Nome de usuário ou senha incorreto"
        setTimeout(() => {
          this.onLoginError = false
          this.alertMessage = ""
        }, 3000)        
      })
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
  margin-bottom: 20px;
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
