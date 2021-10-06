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
    <h3 :class="styles"  v-if="props.type === 'desc'">
      <slot></slot>
    </h3>

    <h3 :class="styles" v-if="props.type === 'list'">
      <slot></slot>
    </h3>

    <h3 :class="styles" v-if="props.type === 'actions'">
      <slot></slot>
    </h3>
</template>

<style scoped>

</style>