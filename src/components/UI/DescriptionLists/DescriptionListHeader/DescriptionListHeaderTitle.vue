<script>
export default {
  name: "DescriptionListHeaderTitle"
}
const props = defineProps({
  color: {
    type: String,
    required: false,
    default: 'gray',
  },
  font: {
    type: String,
    required: false,
    default: 'medium',
  }
});
</script>

<template>
  <h3 :class="['text-lg leading-6',
   `font-${props.font}`, `text-${props.color}-900`]">
    <slot></slot>
  </h3>
</template>

<style scoped>

</style>