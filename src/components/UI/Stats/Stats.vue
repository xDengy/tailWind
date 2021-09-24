<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: 'simple',
  },
  items: {
    type: Array,
    required: true,
  },
});
import {ArrowSmUpIcon, ArrowSmDownIcon} from '@heroicons/vue/outline'
</script>

<template>
  <div v-if="props.type === 'simple'">
    <h3 class="text-lg leading-6 font-medium text-gray-900">
      Last 30 days
    </h3>

    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
      <div class="bg-white shadow rounded-lg overflow-hidden px-4 py-5 sm:p-6" v-for="item in props.items" :key="item.label">
        <dt class="text-sm font-medium text-gray-500 truncate">
          {{ item.label }}
        </dt>
        <dd class="mt-1 text-3xl font-semibold text-gray-900">
          {{ item.value }}
        </dd>
      </div>
    </dl>
  </div>

  <div v-else-if="props.type === 'icon'">
    <h3 class="text-lg leading-6 font-medium text-gray-900">
      Last 30 days
    </h3>

    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <div class="bg-white shadow rounded-lg overflow-hidden px-4 relative pt-5 pb-12 sm:pt-6 sm:px-6"
           v-for="item in props.items" :key="item.id">
        <dt>
          <div class="absolute bg-indigo-500 rounded-md p-3">
            <component :is="item.icon" class="h-6 w-6 text-white" aria-hidden="true"/>
          </div>
          <p class="ml-16 text-sm font-medium text-gray-500 truncate">{{ item.label }}</p>
        </dt>
        <dd class="ml-16 pb-6 flex items-baseline sm:pb-7">
          <p class="text-2xl font-semibold text-gray-900">
            {{ item.value }}
          </p>
          <p :class="[item.difference.type === 'increase' ? 'text-green-600' : 'text-red-600', 'ml-2 flex items-baseline text-sm font-semibold']">
            <ArrowSmUpIcon v-if="item.difference.type === 'increase'"
                           class="self-center flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true"/>
            <ArrowSmDownIcon v-else class="self-center flex-shrink-0 h-5 w-5 text-red-500" aria-hidden="true"/>
            <span class="sr-only"> {{ item.difference.type === 'increase' ? 'Increased' : 'Decreased' }} by </span>
            {{ item.difference.value }}
          </p>
          <div class="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
            <div class="text-sm">
              <a :href="item.link" class="font-medium text-indigo-600 hover:text-indigo-500">
                View all
                <span class="sr-only"> {{ item.label }} stats</span>
              </a>
            </div>
          </div>
        </dd>
      </div>
    </dl>
  </div>
</template>

<style scoped>

</style>