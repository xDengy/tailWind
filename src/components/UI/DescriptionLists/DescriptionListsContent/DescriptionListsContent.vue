<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: 'Left',
  }
});
const styles = [
  'border-t border-gray-200 px-4 py-5'
];
if (props.type === 'left') {
  styles.push('sm:p-0');
}
if (props.type === 'column') {
  styles.push('sm:px-6');
}
</script>

<template>
  <div :class="styles">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>