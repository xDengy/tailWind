<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: 'simple',
  },
});
const styles = [
  'mt-5 grid grid-cols-1 gap-5'
];
if (props.type === 'simple') {
  styles.push('sm:grid-cols-3');
}
if (props.type === 'icon') {
  styles.push('sm:grid-cols-2 lg:grid-cols-3');
}
</script>

<template>
  <dl :class="styles">
    <slot></slot>
  </dl>
</template>

<style scoped>

</style>