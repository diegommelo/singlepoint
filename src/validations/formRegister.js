import {
  required,
  email,
  minLength,
  maxLength,
  sameAs,
} from "vuelidate/lib/validators";

export default {
  form: {
    name: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(50),
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
      email,
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
      maxLength: maxLength(50),
    },
  },
  password_confirm: {
    required,
    sameAs: sameAs(function () {
      return this.form.password;
    }),
  },
};
