<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <nav class="h-full overflow-y-auto" aria-label="Directory" v-if="props.type === 'headings'">
    <slot name="headings"></slot>
  </nav>

  <div class="bg-white shadow overflow-hidden sm:rounded-md" v-else-if="props.type === 'twoColumns'">
    <ul role="list" class="divide-y divide-gray-200">
      <slot name="twoColumns"></slot>
    </ul>
  </div>

  <ul role="list" class="divide-y divide-gray-200" v-else-if="props.type === 'simple'">
    <slot name="simple"></slot>
  </ul>

  <div class="flow-root mt-6" v-else-if="props.type === 'flow'">
    <ul role="list" class="-my-5 divide-y divide-gray-200">
      <slot name="flow"></slot>
    </ul>
  </div>

  <div class="mt-6" v-if="props.type === 'flow'">
    <a href="#"
       class="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
      <slot name="link"></slot>
    </a>
  </div>
</template>

<style scoped>

</style>