<script setup>
import {simple, stacked, multiple} from '../../Arrays/FeedArrays.vue'
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
const divStyles = [];
if (props.items === simple || props.items === multiple) {
  divStyles.push('flow-root');
}
if (props.items === stacked) {
  divStyles.push('');
}

const ulStyles = [];
if (props.items === simple || props.items === multiple) {
  ulStyles.push('-mb-8');
}
if (props.items === stacked) {
  ulStyles.push('divide-y divide-gray-200');
}

import {CheckIcon, ThumbUpIcon, UserIcon} from '@heroicons/vue/solid'
import { ChatAltIcon, TagIcon, UserCircleIcon } from '@heroicons/vue/solid'
</script>

<template>
  <div :class="divStyles">
    <ul role="list" :class="ulStyles">
      <li v-for="(item, itemIndex) in props.items" :key="item.id" v-if="props.items === simple">
        <div class="relative pb-8">
          <span v-if="(itemIndex !== props.items.length - 1)" class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
          <div class="relative flex space-x-3">
            <div>
              <span :class="[item.iconBackground, 'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white']">
                <component :is="item.icon" class="h-5 w-5 text-white" aria-hidden="true" />
              </span>
            </div>
            <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
              <div>
                <p class="text-sm text-gray-500">
                  {{ item.content }} <a :href="item.href" class="font-medium text-gray-900">{{ item.target }}</a>
                </p>
              </div>
              <div class="text-right text-sm whitespace-nowrap text-gray-500">
                <time :datetime="item.datetime">{{ item.date }}</time>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li v-for="item in props.items" :key="item.id" class="py-4" v-else-if="props.items === stacked">
        <div class="flex space-x-3">
          <img class="h-6 w-6 rounded-full" :src="item.person.image" alt="" />
          <div class="flex-1 space-y-1">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-medium">{{ item.person.name }}</h3>
              <p class="text-sm text-gray-500">{{ item.time }}</p>
            </div>
            <p class="text-sm text-gray-500">Deployed {{ item.project }} ({{ item.commit }} в мастер) в {{ item.environment }}</p>
          </div>
        </div>
      </li>

      <li v-for="(item, itemIndex) in props.items" :key="item.id" v-else-if="props.items === multiple">
        <div class="relative pb-8">
          <span v-if="(itemIndex !== props.items.length - 1)" class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
          <div class="relative flex items-start space-x-3">
            <template v-if="item.type === 'comment'">
              <div class="relative">
                <img class="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white" :src="item.image" alt="" />

                <span class="absolute -bottom-0.5 -right-1 bg-white rounded-tl px-0.5 py-px">
                  <ChatAltIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </div>
              <div class="min-w-0 flex-1">
                <div>
                  <div class="text-sm">
                    <a :href="item.person.href" class="font-medium text-gray-900">{{ item.person.name }}</a>
                  </div>
                  <p class="mt-0.5 text-sm text-gray-500">Прокоментировал {{ item.date }}</p>
                </div>
                <div class="mt-2 text-sm text-gray-700">
                  <p>
                    {{ item.comment }}
                  </p>
                </div>
              </div>
            </template>
            <template v-else-if="item.type === 'assignment'" condition="item.type === 'assignment'">
              <div>
                <div class="relative px-1">
                  <div class="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                    <UserCircleIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <div class="min-w-0 flex-1 py-1.5">
                <div class="text-sm text-gray-500">
                  <a :href="item.person.href" class="font-medium text-gray-900">{{ item.person.name }}</a>
                  {{ ' ' }}
                  назначил
                  {{ ' ' }}
                  <a :href="item.assigned.href" class="font-medium text-gray-900">{{ item.assigned.name }}</a>
                  {{ ' ' }}
                  <span class="whitespace-nowrap">{{ item.date }}</span>
                </div>
              </div>
            </template>
            <template v-else-if="item.type === 'tags'" condition="item.type === 'tags'">
              <div>
                <div class="relative px-1">
                  <div class="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                    <TagIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <div class="min-w-0 flex-1 py-0">
                <div class="text-sm leading-8 text-gray-500">
                  <span class="mr-0.5">
                    <a :href="item.person.href" class="font-medium text-gray-900">{{ item.person.name }}</a>
                    {{ ' ' }}
                    добавлены тэги
                  </span>
                  {{ ' ' }}
                  <span class="mr-0.5">
                    <template v-for="tag in item.tags" :key="tag.name">
                      <a :href="tag.href" class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                        <span class="absolute flex-shrink-0 flex items-center justify-center">
                          <span :class="[tag.color, 'h-1.5 w-1.5 rounded-full']" aria-hidden="true" />
                        </span>
                        <span class="ml-3.5 font-medium text-gray-900">{{ tag.name }}</span>
                      </a>
                      {{ ' ' }}
                    </template>
                  </span>
                  <span class="whitespace-nowrap">{{ item.date }}</span>
                </div>
              </div>
            </template>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>