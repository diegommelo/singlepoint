<template>
  <div class="nav">
    <span v-if="isLoggedIn">
      <router-link :to='{name: "Profile", params: {id: userId}}'>Perfil</router-link> | 
      <a @click="logout">Logout</a>
    </span>
    <span v-else>
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Cadastro</router-link>
    </span>
  </div>  
</template>

<script>
export default {
  name: 'TheNavBar',
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated
    },
    userId() {
      return this.$store.getters.getUserId
    }    
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/_variables';

.nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $navbar-color;

    &.router-link-exact-active {
      color: $navbar-color-active;
    }
  }
}
</style>