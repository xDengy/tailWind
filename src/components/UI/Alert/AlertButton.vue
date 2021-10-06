<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: 'left',
  },
});
const styles = ['focus:ring-green-600 bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50'];
if (props.type === 'right') {
  styles.push('ml-3')
}
</script>

<template>
  <button type="button"
          :class="styles">
    <slot></slot>
  </button>
</template>

<style scoped>

</style>