<template>
  <div class="container register-container">
    <span class="title">Cadastre-se em nossa plataforma</span>
    <form>
      <div class="register-form-group">
        <div class="register-form-group-item">
          <label for="register-name">Nome</label>
          <input type="text" class="input" id="register-name" v-model.trim="$v.form.name.$model">
          <Error :validation="$v.form.name.required" v-if="$v.form.name.$dirty">Campo obrigatório</Error>
          <Error :validation="$v.form.name.minLength">Nome precisa ter pelo menos {{$v.form.name.$params.minLength.min}} caracteres</Error>
        </div>
        <div class="register-form-group-item">
          <label for="register-lastname">Sobrenome</label>
          <input type="text" class="input" id="register-lastname" v-model.trim="$v.form.lastname.$model">
          <Error :validation="$v.form.lastname.required" v-if="$v.form.lastname.$dirty">Campo obrigatório</Error>
        </div>
        <div class="register-form-group-item">
          <label for="register-username">Nome de usuário</label>
          <input type="text" class="input" id="register-username">
        </div>
        <div class="register-form-group-item">
          <label for="register-email">Email</label>
          <input type="email" class="input" id="register-email">
        </div>
        <div class="register-form-group-item">
          <label for="register-cpf">CPF</label>
          <input type="text" class="input" id="register-cpf">
        </div>
        <div class="register-form-group-item">
          <label for="register-phone">Telefone</label>
          <input type="text" class="input" id="register-phone">
        </div>
        <div class="register-form-group-item">
          <label for="register-password">Senha</label>
          <input type="password" class="input" id="register-password">
        </div>
        <div class="register-form-group-item">
          <label for="register-password-confirm">Confirmar senha</label>
          <input type="password" class="input" id="register-password-confirm">
        </div>
      </div>
        <button type="submit" class="button is-primary">Criar Conta</button>
    </form>
  </div>
</template>

<script>
import { required, email, minLength, maxLength, sameAs } from 'vuelidate/lib/validators'
import Error from '@/components/Error.vue'

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
        password_confirm: ""
      }
    }
  },
  components: {
    Error
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
        minLength: minLength(3),
        maxLength: maxLength(50),
      },
      email: {
        required,
        email
      },
      cpf: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
      },
      phone: {
        required,
        minLength: minLength(10),
        maxLength: maxLength(10),
      },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(50)
      },
      password_confirm: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(50),
        sameAs: sameAs('password'),
      }
    }
  },
}
</script>

<style lang="scss" scoped>
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
  background-color:white;
  padding: 20px;
  border-radius: 5px;
  }
  .register-form-group-item {
    width: 100%;
  }
  .register-form-group-item input {
    width: 90%;
    margin-bottom: 1rem;
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