<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: 'desc',
  },
});
const styles = ['text-sm font-medium'];
if (props.type === 'desc') {
  styles.push('text-yellow-800')
}
if (props.type === 'list') {
  styles.push('text-red-800')
}
if (props.type === 'actions') {
  styles.push('text-green-800')
}
</script>

<template>
  <div class="mt-2 text-sm text-yellow-700" v-if="props.type === 'desc'">
    <slot></slot>
  </div>

  <div class="mt-2 text-sm text-red-700" v-else-if="props.type === 'list'">
    <ul role="list" class="list-disc pl-5 space-y-1">
      <slot></slot>
    </ul>
  </div>

  <div class="mt-2 text-sm text-green-700" v-else-if="props.type === 'actions'">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>