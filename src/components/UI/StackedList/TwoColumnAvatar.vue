<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

import {
  CheckCircleIcon,
  ChevronRightIcon,
  MailIcon,
} from "@heroicons/vue/solid";
</script>

<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-md">
    <ul role="list" class="divide-y divide-gray-200">
      <li v-for="item in props.items" :key="item.applicant.email">
        <a :href="item.href" class="block hover:bg-gray-50">
          <div class="flex items-center px-4 py-4 sm:px-6">
            <div class="min-w-0 flex-1 flex items-center">
              <div class="flex-shrink-0">
                <img class="h-12 w-12 rounded-full" :src="item.applicant.image" alt=""/>
              </div>
              <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <p class="text-sm font-medium text-indigo-600 truncate">{{ item.applicant.name }}</p>
                  <p class="mt-2 flex items-center text-sm text-gray-500">
                    <MailIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true"/>
                    <span class="truncate">{{ item.applicant.email }}</span>
                  </p>
                </div>
                <div class="hidden md:block">
                  <div>
                    <p class="text-sm text-gray-900">
                      Применен
                      {{ ' ' }}
                      <time :datetime="item.date">{{ item.dateFull }}</time>
                    </p>
                    <p class="mt-2 flex items-center text-sm text-gray-500">
                      <CheckCircleIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" aria-hidden="true"/>
                      {{ item.stage }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ChevronRightIcon class="h-5 w-5 text-gray-400" aria-hidden="true"/>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>