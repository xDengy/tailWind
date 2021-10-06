<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: 'notifications',
  },
});
const styles = ['relative flex items-start'];
if (props.type === 'notifications') {
  styles.push('py-4')
}
</script>

<template>
  <div :class="styles">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>