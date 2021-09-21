<script>
export default {
  name: "DescriptionListHeaderSubtitle"
}
const props = defineProps({
  color: {
    type: String,
    required: false,
    default: 'gray',
  },
});
</script>

<template>
  <p :class="['mt-1 max-w-2xl text-sm',
   `text-${props.color}-500`]">
    <slot></slot>
  </p>
</template>

<style scoped>

</style>