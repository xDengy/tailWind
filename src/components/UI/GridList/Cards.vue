<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  arrayName: {
    type: String,
    required: true,
  },
});
const ulStyles = [];
if (props.arrayName === 'SmallAvatars') {
  ulStyles.push('grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3');
}
if (props.arrayName === 'ContactCards') {
  ulStyles.push('grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4');
}
if (props.arrayName === 'Images') {
  ulStyles.push('grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8');
}

const liStyles = [];
if (props.arrayName === 'SmallAvatars') {
  liStyles.push('col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200');
}
if (props.arrayName === 'ContactCards') {
  liStyles.push('col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200');
}
if (props.arrayName === 'Images') {
  liStyles.push('relative');
}
import {MailIcon, PhoneIcon} from "@heroicons/vue/outline";
</script>

<template>
  <ul role="list" :class="ulStyles">
    <li v-for="item in props.items" :key="item.email" :class="liStyles" v-if="props.arrayName === 'SmallAvatars'">
      <div class="w-full flex items-center justify-between p-6 space-x-6">
        <div class="flex-1 truncate">
          <div class="flex items-center space-x-3">
            <h3 class="text-gray-900 text-sm font-medium truncate">{{ item.name }}</h3>
            <span class="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">{{ item.role }}</span>
          </div>
          <p class="mt-1 text-gray-500 text-sm truncate">{{ item.title }}</p>
        </div>
        <img class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" :src="item.image" alt="" />
      </div>
      <div>
        <div class="-mt-px flex divide-x divide-gray-200">
          <div class="w-0 flex-1 flex">
            <a :href="`mailto:${item.email}`" class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
              <MailIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
              <span class="ml-3">Email</span>
            </a>
          </div>
          <div class="-ml-px w-0 flex-1 flex">
            <a :href="`tel:${item.telephone}`" class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
              <PhoneIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
              <span class="ml-3">Call</span>
            </a>
          </div>
        </div>
      </div>
    </li>

    <li v-for="item in props.items" :key="item.email" :class="liStyles" v-else-if="props.arrayName === 'ContactCards'">
      <div class="flex-1 flex flex-col p-8">
        <img class="w-32 h-32 flex-shrink-0 mx-auto rounded-full" :src="item.image" alt="" />
        <h3 class="mt-6 text-gray-900 text-sm font-medium">{{ item.name }}</h3>
        <dl class="mt-1 flex-grow flex flex-col justify-between">
          <dt class="sr-only">Title</dt>
          <dd class="text-gray-500 text-sm">{{ item.title }}</dd>
          <dt class="sr-only">Role</dt>
          <dd class="mt-3">
            <span class="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">{{ item.role }}</span>
          </dd>
        </dl>
      </div>
      <div>
        <div class="-mt-px flex divide-x divide-gray-200">
          <div class="w-0 flex-1 flex">
            <a :href="`mailto:${item.email}`" class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
              <MailIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
              <span class="ml-3">Email</span>
            </a>
          </div>
          <div class="-ml-px w-0 flex-1 flex">
            <a :href="`tel:${item.telephone}`" class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
              <PhoneIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
              <span class="ml-3">Call</span>
            </a>
          </div>
        </div>
      </div>
    </li>

    <li v-for="item in props.items" :key="item.source" :class="liStyles" v-else-if="props.arrayName === 'Images'">
      <div class="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
        <img :src="item.source" alt="" class="object-cover pointer-events-none group-hover:opacity-75" />
        <button type="button" class="absolute inset-0 focus:outline-none">
          <span class="sr-only">View details for {{ item.title }}</span>
        </button>
      </div>
      <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{{ item.title }}</p>
      <p class="block text-sm font-medium text-gray-500 pointer-events-none">{{ item.size }}</p>
    </li>
  </ul>
</template>

<style scoped>

</style>