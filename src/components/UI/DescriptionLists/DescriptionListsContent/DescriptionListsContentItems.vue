<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: 'Left',
  }
});
const styles = [];
if (props.type === 'left') {
  styles.push('sm:divide-y sm:divide-gray-200');
}
if (props.type === 'column') {
  styles.push('grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2');
}
</script>

<template>
  <dl :class="styles">
    <slot></slot>
  </dl>
</template>


<style scoped>

</style>