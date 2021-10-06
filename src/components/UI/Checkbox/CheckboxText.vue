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
  <p :id="[`${props.name}-description`]" class="text-gray-500">
    <slot></slot>
  </p>
</template>

<style scoped>

</style>