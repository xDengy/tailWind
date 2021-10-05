<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: false,
  },
});
</script>

<template>
  <img v-for="item in props.items" :class="['inline-block', `h-${item.size}`, `w-${item.size}`, `rounded-${item.rounded}`]" alt="" :src="item.src" />
</template>

<style scoped>

</style>