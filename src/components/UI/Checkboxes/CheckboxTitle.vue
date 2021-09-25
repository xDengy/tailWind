<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
    default: 'comments',
  },
});
</script>

<template>
  <label :for="props.name" class="font-medium text-gray-700">
    <slot></slot>
  </label>
</template>

<style scoped>

</style>