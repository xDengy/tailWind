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
  <img :class="[`h-${props.size}`, `w-${props.size}`, `rounded-${props.rounded}`]" src="" alt=""/>
</template>

<style scoped>

</style>