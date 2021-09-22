<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: 'avatar',
  },
});
const styles = [
    'divide-y divide-gray-200'
];
if (props.type === 'action') {
  styles.push('-my-5');
}
</script>

<template>
  <ul role="list" :class="styles">
    <slot></slot>
  </ul>
</template>

<style scoped>

</style>