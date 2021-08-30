<template>
  <div class="container register-container">
    <TheSpinner v-if="isLoading" />
    <transition name="fade">
      <BaseAlert :class="alertClass" v-if="alertMessage">{{alertMessage}}</BaseAlert>
    </transition>
    <span class="title">Cadastre-se em nossa plataforma</span>
    <form @submit.prevent="onSubmit">
      <div class="register-form-group">
        <div class="register-form-group-item">
          <label for="register-name">Nome</label>
          <input type="text" class="input" id="register-name" v-model.trim="$v.form.name.$model">
          <BaseError :validation="$v.form.name.required" v-if="$v.form.name.$dirty">Campo obrigatório</BaseError>
          <BaseError :validation="$v.form.name.minLength">Nome precisa ter pelo menos {{$v.form.name.$params.minLength.min}} caracteres</BaseError>
        </div>
        <div class="register-form-group-item">
          <label for="register-lastname">Sobrenome</label>
          <input type="text" class="input" id="register-lastname" v-model.trim="$v.form.lastname.$model">
          <BaseError :validation="$v.form.lastname.required" v-if="$v.form.lastname.$dirty">Campo obrigatório</BaseError>
        </div>
        <div class="register-form-group-item">
          <label for="register-username">Nome de usuário</label>
          <input type="text" class="input" id="register-username" v-model="$v.form.username.$model">
          <BaseError :validation="$v.form.username.required" v-if="$v.form.username.$dirty">Campo obrigatório</BaseError>
          <BaseError :validation="$v.form.username.minLength">Nome de usuário inválido</BaseError>          
        </div>
        <div class="register-form-group-item">
          <label for="register-email">E-mail</label>
          <input type="email" class="input" id="register-email" v-model="$v.form.email.$model">
          <BaseError :validation="$v.form.email.required" v-if="$v.form.email.$dirty">Campo obrigatório</BaseError>
          <BaseError :validation="$v.form.email.email" v-if="$v.form.email.$dirty">E-mail inválido</BaseError>
        </div>
        <div class="register-form-group-item">
          <label for="register-cpf">CPF</label>
          <input type="text" class="input" id="register-cpf" v-model="$v.form.cpf.$model" v-mask="['###.###.###-##']" />
          <BaseError :validation="$v.form.cpf.required" v-if="$v.form.cpf.$dirty">Campo obrigatório</BaseError>
          <BaseError :validation="$v.form.cpf.minLength">CPF Inválido</BaseError>
        </div>
        <div class="register-form-group-item">
          <label for="register-phone">Telefone</label>
          <input type="text" class="input" id="register-phone" v-model="$v.form.phone.$model" v-mask="['(##) #####-####', '(##) ####-####']" />
          <BaseError :validation="$v.form.phone.required" v-if="$v.form.phone.$dirty">Campo Obrigatório</BaseError>
          <BaseError :validation="$v.form.phone.minLength">Telefone inválido</BaseError>
        </div>
        <div class="register-form-group-item">
          <label for="register-password">Senha</label>
          <input type="password" class="input" id="register-password" v-model="$v.form.password.$model" />
          <BaseError :validation="$v.form.password.required" v-if="$v.form.password.$dirty">Campo obrigatório</BaseError>
          <BaseError :validation="$v.form.password.minLength">A senha deve ter no mínimo {{$v.form.password.$params.minLength.min}} caracteres</BaseError>
        </div>
        <div class="register-form-group-item">
          <label for="register-password-confirm">Confirmar senha</label>
          <input type="password" class="input" id="register-password-confirm" v-model="$v.password_confirm.$model" />
          <BaseError :validation="$v.password_confirm.sameAs" v-if="$v.password_confirm.$dirty">As senhas devem ser iguais</BaseError>
        </div>
      </div>
      <button type="submit" class="button is-primary">Criar Conta</button>
    </form>
    <div class="register-form-footer">
      <p>Ao criar uma conta, você concorda com nossos <a href="#">Termos de Uso</a> e <a href="#">Políticas de Privacidade</a></p>
    </div>
  </div>
</template>

<script>
import { required, email, minLength, maxLength, sameAs } from 'vuelidate/lib/validators'
import BaseError from '@/components/BaseError.vue'
import BaseAlert from '@/components/BaseAlert.vue'
import TheSpinner from '@/components/TheSpinner.vue'
import {mask} from 'vue-the-mask'
// import {register} from '@/api/api.js'

export default {
  name: 'Register',
  data () {
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
    }
  },
  directives: {
    mask
  },
  components: {
    BaseError,
    BaseAlert,
    TheSpinner
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(50)
      },
      lastname: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(50),
      },
      username: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(50),
      },
      email: {
        required,
        email
      },
      cpf: {
        required,
        minLength: minLength(14),
        maxLength: maxLength(14),
      },
      phone: {
        required,
        minLength: minLength(14),
      },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(50)
      },
    },
    password_confirm: {
      required,
      sameAs: sameAs(function () {return this.form.password}),
    }
  },
  methods: {
    onSubmit() {
      this.onSubmitSuccess = false
      this.onSubmitError = false
      this.alertMessage = ""
      
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }
      let payload = {user: this.$v.form.$model, resolver: true}
      this.isLoading = true
      this.$store.dispatch('register', payload).then(() => {
          this.onSubmitSuccess = true
          this.alertMessage = "Cadastrado realizado com sucesso. Redirecionando para o Login..."
          this.isLoading = false
          setTimeout(() => {
            this.$router.push('/login')
          }, 2000)
      }).catch(() => {
        this.onSubmitError = true
        this.alertMessage = "Erro ao realizar o cadastro"
        setTimeout(() => {
          this.onSubmitError = false
          this.alertMessage = ""
        }, 3000)
      })
    }
  },
  computed: {
    alertClass() {
      return {
        'alert-danger': this.onSubmitError,
        'alert-success': this.onSubmitSuccess,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/_variables';

.title {
  display: block;
  margin: 15px 0 25px 0;
  font-size: 1.2em;
  font-weight: bold;
}
  .register-container {
    width: 80vw;
  }
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

  @media screen and (min-width:768px) {
    .register-container {
      width: 60vw;
    }
    .register-form-group-item {
      width: 48%;
    }
  }
  @media screen and (min-width: 992px) {
    .register-container {
      width: 35vw;
    }
  }

  @media screen and (min-width: 1200px) {
    .register-container {
      width: 40vw;
    }
  }

</style>