<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <div v-for="item in props.items" :key="item.email" class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
      <div class="flex-shrink-0">
        <img class="h-10 w-10 rounded-full" :src="item.imageUrl" alt="" />
      </div>
      <div class="flex-1 min-w-0">
        <a href="#" class="focus:outline-none">
          <span class="absolute inset-0" aria-hidden="true" />
          <p class="text-sm font-medium text-gray-900">
            {{ item.name }}
          </p>
          <p class="text-sm text-gray-500 truncate">
            {{ item.role }}
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>