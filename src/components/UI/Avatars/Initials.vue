<script setup>
const props = defineProps({
  size: {
    type: String,
    required: false,
    default: '6',
  },
  textSize: {
    type: String,
    required: false,
    default: '',
  },
});
const styles = ['font-medium leading-none text-white'];
if (props.textSize) {
  if (props.textSize === 'xs') {
    styles.push(`text-${props.textSize}`)
  }
  if (props.textSize === 'sm') {
    styles.push(`text-${props.textSize}`)
  }
  if (props.textSize === 'lg') {
    styles.push(`text-${props.textSize}`)
  }
  if (props.textSize === 'xl') {
    styles.push(`text-${props.textSize}`)
  }
}
</script>

<template>
  <span :class="[`inline-flex items-center justify-center rounded-full bg-gray-500`, `h-${props.size}`, `w-${props.size}`]">
    <span :class="styles">TW</span>
  </span>
</template>

<style scoped>

</style>