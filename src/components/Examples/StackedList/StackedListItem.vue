<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: 'avatar',
  },
});
const styles = [
    'py-5'
];
if (props.type === 'avatar') {
  styles.push('flex');
}
if (props.type === 'action') {
  styles.push('relative bg-white px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600');
}
</script>

<template>
  <li :class="styles">
    <slot></slot>
  </li>
</template>

<style scoped>

</style>