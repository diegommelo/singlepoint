import required from 'vuelidate/lib/validators/required'

export default {
  form: {
    username: {
      required,
    },
    password: {
      required,
    },
  }  
}