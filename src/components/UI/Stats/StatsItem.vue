<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: 'simple',
  },
});
const styles = [
  'bg-white shadow rounded-lg overflow-hidden px-4'
];
if (props.type === 'simple') {
  styles.push('py-5 sm:p-6');
}
if (props.type === 'icon') {
  styles.push('relative pt-5 pb-12 sm:pt-6 sm:px-6');
}
</script>

<template>
  <div :class="styles">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>