<template>
  <div id="app">
    <NavBar />
    <Logo />
    <router-view />
  </div>
</template>

<script>
import "@/styles/styles.scss";
import TheNavBar from "@/components/TheNavBar"
import TheLogo from "@/components/TheLogo";

export default {
  name: "App",
  components: {
    'Logo': TheLogo,
    'NavBar': TheNavBar
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
