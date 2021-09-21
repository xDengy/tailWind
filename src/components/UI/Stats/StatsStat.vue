<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: 'simple',
  },
});
const styles = [];
if (props.type === 'simple') {
  styles.push('mt-1 text-3xl font-semibold text-gray-900');
}
if (props.type === 'icon') {
  styles.push('ml-16 pb-6 flex items-baseline sm:pb-7');
}
</script>

<template>
  <dd :class="styles">
    <slot></slot>
  </dd>
</template>

<style scoped>

</style>