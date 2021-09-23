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
  styles.push('text-sm font-medium text-gray-500 truncate');
}
if (props.type === 'icon') {
  styles.push('');
}
</script>

<template>
  <dt :class="styles">
    <slot></slot>
  </dt>
</template>

<style scoped>

</style>