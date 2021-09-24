<script setup>
const props = defineProps({
  rounded: {
    type: String,
    required: false,
    default: 'full',
  },
  size: {
    type: String,
    required: false,
    default: '6',
  },
});
</script>

<template>
  <img :class="['inline-block', `h-${props.size}`, `w-${props.size}`, `rounded-${props.rounded}`]" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
</template>

<style scoped>

</style>