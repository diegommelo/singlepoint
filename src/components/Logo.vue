<template>
  <img src="@/assets/logofino.png" class="logo" />
</template>

<script>
export default {
  name: 'Logo',
}
</script>

<style lang="scss">
.logo {
  width: 55vw;
  margin: 20px 0;
}

@media screen and (min-width: 768px) {
  .logo {
    width: 30vw;
  }
}

@media screen and (min-width: 992px) {
  .logo {
    width: 15vw;
  }
}

@media screen and (min-width: 1200px) {
  .logo {
    width: 15vw;
  }  
}
</style>