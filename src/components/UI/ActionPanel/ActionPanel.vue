<script setup>
const props = defineProps({
  title: {
    type: String,
    required: false,
    default: '',
  },
  text: {
    type: String,
    required: false,
    default: '',
  },
});
</script>

<template>
  <div class="bg-white shadow sm:rounded-lg">
    <div class="px-4 py-5 sm:p-6">

      <slot name="title">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          {{ props.title }}
        </h3>
      </slot>

      <div class="mt-2 max-w-xl text-sm text-gray-500">
        <slot name="text">
          {{ props.text }}
        </slot>
      </div>

      <div class="mt-5">
        <slot name="button">
          <button type="button"
                  class="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm">
            Удалить
          </button>
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>