<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: false,
  },
});
</script>

<template>
  <span v-for="item in props.items" :class="[`inline-flex items-center justify-center rounded-full bg-gray-500`, `h-${item.size}`, `w-${item.size}`]">
    <span :class="[`font-medium leading-none text-white`, `${item.textSize}`]">
      {{ item.text }}
    </span>
  </span>
</template>

<style scoped>

</style>