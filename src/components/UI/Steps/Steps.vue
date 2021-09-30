<script setup>
import {steps, circlesSteps} from '../.././Arrays/StepsArrays.vue'
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
import {CheckIcon} from '@heroicons/vue/outline'

const styles = [];
if (props.items === steps) {
  styles.push('space-y-4 md:flex md:space-y-0 md:space-x-8')
}
if (props.items === circlesSteps) {
  styles.push('overflow-hidden')
}
</script>

<template>
  <nav aria-label="Progress">
    <ol role="list" :class="styles">
      <li v-for="item in items" :key="item.name" class="md:flex-1" v-if="props.items === steps">
        <a v-if="item.status === 'complete'" :href="item.href" class="group pl-4 py-2 flex flex-col border-l-4 border-indigo-600 hover:border-indigo-800 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4">
          <span class="text-xs text-indigo-600 font-semibold tracking-wide uppercase group-hover:text-indigo-800">{{ item.id }}</span>
          <span class="text-sm font-medium">{{ item.name }}</span>
        </a>
        <a v-else-if="item.status === 'current'" :href="item.href" class="pl-4 py-2 flex flex-col border-l-4 border-indigo-600 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4" :aria-current="item">
          <span class="text-xs text-indigo-600 font-semibold tracking-wide uppercase">{{ item.id }}</span>
          <span class="text-sm font-medium">{{ item.name }}</span>
        </a>
        <a v-else :href="item.href" class="group pl-4 py-2 flex flex-col border-l-4 border-gray-200 hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4">
          <span class="text-xs text-gray-500 font-semibold tracking-wide uppercase group-hover:text-gray-700">{{ item.id }}</span>
          <span class="text-sm font-medium">{{ item.name }}</span>
        </a>
      </li>

      <li v-for="(item, itemIndex) in items" :key="item.name" :class="[itemIndex !== items.length - 1 ? 'pb-10' : '', 'relative']" v-if="props.items === circlesSteps">
        <template v-if="item.status === 'complete'">
          <div v-if="(itemIndex !== items.length - 1)" class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-indigo-600" aria-hidden="true" />
          <a :href="item.href" class="relative flex items-start group">
            <span class="h-9 flex items-center">
              <span class="relative z-10 w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
                <CheckIcon class="w-5 h-5 text-white" aria-hidden="true" />
              </span>
            </span>
            <span class="ml-4 min-w-0 flex flex-col">
              <span class="text-xs font-semibold tracking-wide uppercase">{{ item.name }}</span>
              <span class="text-sm text-gray-500">{{ item.description }}</span>
            </span>
          </a>
        </template>
        <template v-else-if="item.status === 'current'" condition="item.status === 'current'">
          <div v-if="(itemIndex !== items.length - 1)" class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true" />
          <a :href="item.href" class="relative flex items-start group" :aria-current="item">
            <span class="h-9 flex items-center" aria-hidden="true">
              <span class="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full">
                <span class="h-2.5 w-2.5 bg-indigo-600 rounded-full" />
              </span>
            </span>
            <span class="ml-4 min-w-0 flex flex-col">
              <span class="text-xs font-semibold tracking-wide uppercase text-indigo-600">{{ item.name }}</span>
              <span class="text-sm text-gray-500">{{ item.description }}</span>
            </span>
          </a>
        </template>
        <template v-else>
          <div v-if="(itemIndex !== items.length - 1)" class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true" />
          <a :href="item.href" class="relative flex items-start group">
            <span class="h-9 flex items-center" aria-hidden="true">
              <span class="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                <span class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" />
              </span>
            </span>
            <span class="ml-4 min-w-0 flex flex-col">
              <span class="text-xs font-semibold tracking-wide uppercase text-gray-500">{{ item.name }}</span>
              <span class="text-sm text-gray-500">{{ item.description }}</span>
            </span>
          </a>
        </template>
      </li>
    </ol>
  </nav>
</template>

<style scoped>

</style>