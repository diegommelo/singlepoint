export default {
  data() {
    return {
      password_confirm: "",
      isLoading: false,
      alertMessage: "",
      onSubmitSuccess: false,
      onSubmitError: false,
    };
  },
  computed: {
    alertClass() {
      return {
        "alert-danger": this.onSubmitError,
        "alert-success": this.onSubmitSuccess,
      };
    },
  },
}