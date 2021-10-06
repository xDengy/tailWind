<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: 'img',
  },
});
</script>

<template>
  <div v-if="props.type === 'img'">
    <slot></slot>
  </div>
  <div class="ml-3" v-else-if="props.type === 'text'">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>