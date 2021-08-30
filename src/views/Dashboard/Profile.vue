<template>
  <div class="container page-container">
    <TheSpinner v-if="isLoading" />
    <transition name="fade">
      <BaseAlert :class="alertClass" v-if="alertMessage">{{alertMessage}}</BaseAlert>
    </transition>
    <span class="title">Edite seu perfil</span>
    <form @submit.prevent="onSubmit">
      <FormUserData :$v="$v" />
      <button type="submit" class="button is-primary">Salvar</button>
    </form>
  </div>
</template>


<script>
import BaseAlert from '@/components/BaseAlert'
import TheSpinner from '@/components/TheSpinner'
import FormUserData from '@/components/FormUserData'
import formRegister from '@/validations/formRegister'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Profile',
  components: {
    BaseAlert,
    TheSpinner,
    FormUserData
  },
  data () {
    return {
      password_confirm: "",
      isLoading: false,
      alertMessage: '',
      onSubmitSuccess: false,
      onSubmitError: false
    }
  },
  validations: { ...formRegister },
  computed: {
    ...mapGetters({
      form: 'getUser'
    }),
    alertClass() {
      return {
        'alert-danger': this.onSubmitError,
        'alert-success': this.onSubmitSuccess,
      }
    }    
  },
  methods: {
    ...mapActions({
      updateUser: 'edit'
    }),
    onSubmit() {
      this.onSubmitSuccess = false
      this.onSubmitError = false
      this.alertMessage = ""
      
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }
      //Parâmetro "resolver" é usado para testar a resposta da API
      let payload = {user: this.$v.form.$model, resolver: true}
      this.isLoading = true
      this.updateUser(payload).then(() => {
          this.onSubmitSuccess = true
          this.alertMessage = "Perfil atualizado com sucesso"
          this.isLoading = false
        setTimeout(() => {
          this.onSubmitSuccess = false
          this.alertMessage = ""
        }, 2500)          
      }).catch(() => {
        this.onSubmitError = true
        this.alertMessage = "Erro ao atualizar perfil"
        this.isLoading = false
        setTimeout(() => {
          this.onSubmitError = false
          this.alertMessage = ""
        }, 2500)
      })
    }
  }    
}
</script>

<style>

</style>