<script setup>
const props = defineProps({
  size: {
    type: String,
    required: false,
    default: '1',
  },
  type: {
    type: String,
    required: false,
    default: 'bot',
  },
});
const styles = ['flex overflow-hidden'];
if (props.type === 'top') {
  styles.push('relative z-0')
}
</script>

<template>
  <div :class="[styles, `-space-x-${props.size}`]">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>