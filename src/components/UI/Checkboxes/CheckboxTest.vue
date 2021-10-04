<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: 'notifications',
  },
});
const styles = ['divide-y divide-gray-200'];
if (props.type === 'members') {
  styles.push('mt-4 border-t border-b border-gray-200')
}
const fieldStyle = [];
if (props.type !== 'leftNotifications') {
  fieldStyle.push('border-t border-b border-gray-200')
} else {
  fieldStyle.push('space-y-5')
}
</script>

<template>
  <fieldset :class="fieldStyle">
    <legend class="sr-only">
      <slot name="legend"></slot>
    </legend>

    <div :class="styles" v-if="props.type !== 'leftNotifications'">
      <slot name="content"></slot>
    </div>

    <slot name="leftContent" v-else></slot>
  </fieldset>
</template>

<style scoped>

</style>