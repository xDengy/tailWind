<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: 'avatar',
  },
});
const styles = [];
if (props.type === 'avatar') {
  styles.push('flex items-center space-x-4');
}
if (props.type === 'action') {
  styles.push('relative focus-within:ring-2 focus-within:ring-indigo-500');
}
if (props.type === 'preview') {
  styles.push('flex justify-between space-x-3');
}
</script>

<template>
  <div :class="styles">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>