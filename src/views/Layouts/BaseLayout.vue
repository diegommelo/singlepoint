<template>
  <div class="container page-container">
    <TheSpinner v-if="isLoading" />
    <transition name="fade">
      <BaseAlert :class="alertClass" v-if="alertMessage">{{
        alertMessage
      }}</BaseAlert>
    </transition>
    <slot name="title"></slot>
    <slot name="content"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
import BaseAlert from "@/components/BaseAlert";
import TheSpinner from "@/components/TheSpinner";

export default {
  name: 'BaseLayout',
  props: {
    alertMessage: {
      type: String,
      default: null
    },
    alertClass: {
      type: Object,
      default: null
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  components: {
    BaseAlert,
    TheSpinner,
  },
}
</script>