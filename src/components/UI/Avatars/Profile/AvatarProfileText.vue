<script setup>
const props = defineProps({
  fontSize: {
    type: String,
    required: false,
    default: 'sm',
  },
  color: {
    type: String,
    required: false,
    default: 'gray-700',
  },
  hoverColor: {
    type: String,
    required: false,
    default: 'gray-900',
  },
});
</script>

<template>
  <p :class="['font-medium', `text-${props.fontSize}`, `text-${props.color}`, `group-hover:text-${props.hoverColor}`]">
    <slot></slot>
  </p>
</template>

<style scoped>

</style>