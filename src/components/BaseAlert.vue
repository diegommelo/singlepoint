<template>
  <div class="alert" role="alert">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseAlert',
  props: {
    type: {
      type: String,
      default: 'info'
    },
    message: {
      type: String,
      default: ''
    }
  },
  
}
</script>

<style lang="scss">
@import '@/styles/_variables';

.alert {
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
}
.alert-info {
    color: $info-color;
    background-color: #d9edf7;
    border-color: #bce8f1;
  }
.alert-success {
    color: $success-color;
    background-color: #dff0d8;
    border-color: #d6e9c6;
  }
.alert-warning {
    color: $warning-color;
    background-color: #fcf8e3;
    border-color: #faebcc;
  }
.alert-danger {
    color: $danger-color;
    background-color: #f2dede;
    border-color: #ebccd1;
  }
</style>