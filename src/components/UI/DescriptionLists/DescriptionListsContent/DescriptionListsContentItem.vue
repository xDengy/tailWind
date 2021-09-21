<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: 'Left',
  },
  col: {
    type: String,
    required: false,
    default: '1',
  }
});
const styles = [];
if (props.type === 'left') {
  styles.push('py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6');
}
if (props.type === 'column') {
  styles.push(`sm:col-span-${props.col}`);
}
</script>

<template>
  <div :class="styles">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>