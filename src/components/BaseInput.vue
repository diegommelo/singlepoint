<template>
  <input
    class="input"
    :type="type"
    :id="id"
    :placeholder="placeholder"
    :value="value"
    @input="onInput"
  />
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      inputValue: this.value,
    };
  },
  methods: {
    onInput(e) {
      this.inputValue = e.target.value;
      this.$emit("input", this.inputValue);
    },
  },
};
</script>

<style></style>
