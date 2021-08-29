<template>
  <div class="grid-container">
    <h3>Cadastre-se em nossa plataforma</h3>
    <form>
      <div class="login-form-group">
        <label for="register-username"></label>
        <input type="text" class="input" id="register-username" placeholder="Nome de usuário">
        <label for="register-email"></label>
        <input type="email" class="input" id="register-email" placeholder="Email">
        <label for="register-name"></label>
        <input type="text" class="input" id="register-name" placeholder="Nome">
        <label for="register-lastname"></label>
        <input type="text" class="input" id="register-lastname" placeholder="Sobrenome">
        <label for="register-cpf"></label>
        <input type="text" class="input" id="register-cpf" placeholder="CPF">
        <label for="register-phone"></label>
        <input type="text" class="input" id="register-phone" placeholder="Telefone">
        <label for="register-password"></label>
        <input type="password" class="input" id="register-password" placeholder="Senha">
        <label for="register-password-confirm"></label>
        <input type="password" class="input" id="register-password-confirm" placeholder="Confirme a senha">
        <button type="submit" class="button is-primary">Cadastrar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      form: {
        name: '',
        lastname: '',
        username: '',
        email: '',
        cpf: '',
        phone: '',
        password: '',
        password_confirm: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form-group label {
  text-align: left;
}
</style>