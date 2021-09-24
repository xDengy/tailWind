<script setup>
const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <nav class="h-full overflow-y-auto" aria-label="Directory">
    <div class="relative" v-for="item in Object.keys(props.items)" :key="item">
      <div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
        <h3>
          {{ item }}
        </h3>
      </div>
      <ul role="list" class="relative z-0 divide-y divide-gray-200">
        <li class="bg-white" v-for="value in props.items[item]" :key="value.id">
          <div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full" :src="value.image" alt=""/>
            </div>
            <div class="flex-1 min-w-0">
              <a href="#" class="focus:outline-none">
                <span class="absolute inset-0" aria-hidden="true"/>
                <p class="text-sm font-medium text-gray-900">
                  {{ value.name }}
                </p>
                <p class="text-sm text-gray-500 truncate">
                  {{ value.role }}
                </p>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>

</style>