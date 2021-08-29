<template>
  <div class="error" v-if="!validation">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    validation: {
      type: Boolean,
      required: true
    },
  }
}
</script>

<style>

</style>