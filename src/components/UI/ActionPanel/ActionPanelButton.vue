<script setup>
const props = defineProps({
  text: {
    type: String,
    required: false,
    default: '',
  },
});
</script>

<template>
  <div class="mt-5">
    <button type="button" class="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm">
      {{ props.text }}
    </button>
  </div>
</template>

<style scoped>

</style>