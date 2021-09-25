<script setup>
const props = defineProps({
  selected: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <option :selected="selected">
    <slot></slot>
  </option>
</template>

<style scoped>

</style>
