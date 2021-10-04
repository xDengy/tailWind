<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: 'desc',
  },
});
const styles = ['rounded-md p-4'];
if (props.type === 'desc') {
  styles.push('bg-yellow-50')
}
if (props.type === 'list') {
  styles.push('bg-red-50')
}
if (props.type === 'actions') {
  styles.push('bg-green-50')
}
</script>

<template>
  <div :class="styles">
    <div class="flex">
      <div class="flex-shrink-0">
        <slot name="icon"></slot>
      </div>

      <div class="ml-3">
        <slot name="header"></slot>
        <slot name="text"></slot>
        <slot name="button"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>