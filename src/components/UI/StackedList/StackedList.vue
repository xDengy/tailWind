<script setup>
import {peopleEmail, peopleHandle, announcements, messages} from '../../Arrays/StackedListArrays.vue'
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
const styles = [
  'divide-y divide-gray-200'
];
if (props.items === peopleHandle || props.items === announcements) {
  styles.push('-my-5');
}
</script>

<template>
  <ul role="list" :class="styles">
    <li class="py-4 flex" v-for="item in props.items" v-if="props.items === peopleEmail" :key="item.email">
      <img class="h-10 w-10 rounded-full" :src="item.image ?? ''" alt=""/>
      <div class="ml-3">
        <p class="text-sm font-medium text-gray-900">{{ item.name ?? '' }}</p>
        <p class="text-sm text-gray-500">{{ item.email ?? '' }}</p>
      </div>
    </li>

    <li class="py-4" v-for="item in props.items" v-if="props.items === peopleHandle" :key="item.handle">
      <div class="flex items-center space-x-4">
        <div class="flex-shrink-0">
          <img class="h-8 w-8 rounded-full" :src="item.image ?? ''" alt=""/>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 truncate">
            {{ item.name ?? '' }}
          </p>
          <p class="text-sm text-gray-500 truncate">
            {{ '@' + item.handle ?? '' }}
          </p>
        </div>
        <div>
          <a href="#"
             class="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50">
            Посмотреть
          </a>
        </div>
      </div>
    </li>

    <li class="py-5"
        v-for="item in props.items" v-else-if="props.items === announcements" :key="item.id">
      <div class="relative focus-within:ring-2 focus-within:ring-indigo-500">
        <h3 class="text-sm font-semibold text-gray-800">
          <a href="#" class="hover:underline focus:outline-none">
            <span class="absolute inset-0" aria-hidden="true"/>
            {{ item.title ?? '' }}
          </a>
        </h3>
        <p class="mt-1 text-sm text-gray-600 line-clamp-2">
          {{ item.preview ?? '' }}
        </p>
      </div>
    </li>

    <li class="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
        v-for="item in props.items" v-else-if="props.items === messages" :key="item.id">
      <div class="flex justify-between space-x-3">
        <div class="min-w-0 flex-1">
          <a href="#" class="block focus:outline-none">
            <span class="absolute inset-0" aria-hidden="true"/>
            <p class="text-sm font-medium text-gray-900 truncate">{{ item.sender ?? '' }}</p>
            <p class="text-sm text-gray-500 truncate">{{ item.subject ?? '' }}</p>
          </a>
        </div>
        <time :datetime="item.datetime ?? ''" class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">
          {{ item.time ?? '' }}
        </time>
      </div>
      <div class="mt-1">
        <p class="line-clamp-2 text-sm text-gray-600">
          {{ item.preview ?? '' }}
        </p>
      </div>
    </li>
  </ul>

  <div class="mt-6" v-if="props.items === announcements || props.items === peopleHandle">
    <a href="#"
       class="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
      Посмотреть все
    </a>
  </div>
</template>

<style scoped>

</style>