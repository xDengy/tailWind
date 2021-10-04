<script setup>
import Headings from '.././UI/StackedList/Headings.vue'
import StackedList from '.././UI/StackedList/StackedListTest.vue'
import TwoColumnAvatar from '.././UI/StackedList/TwoColumnAvatar.vue'

import {MailIcon, ChevronRightIcon, CheckCircleIcon} from "@heroicons/vue/outline";

import {peopleEmail, peopleHandle, announcements, messages, directory, applications} from '../Arrays/StackedListArrays.vue'

</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Составной список</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">Простой с группой аватаров</h5>
  <div class="max-w-md mx-auto py-12 px-4 sm:px-0 md:py-16">
    <StackedList type="simple">
        <template v-slot:simple>
          <li class="py-4 flex" v-for="item in peopleEmail" :key="item.email">
            <img class="h-10 w-10 rounded-full" :src="item.image ?? ''" alt=""/>
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">{{ item.name ?? '' }}</p>
              <p class="text-sm text-gray-500">{{ item.email ?? '' }}</p>
            </div>
          </li>
        </template>
    </StackedList>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Группы аватаров с действиями</h5>
  <div class="max-w-sm mx-auto py-12 px-4 sm:px-0 md:py-16">
    <StackedList type="flow">
      <template v-slot:flow>
        <li class="py-4" v-for="item in peopleHandle" :key="item.handle">
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
      </template>
      <template v-slot:link>
        Посмотреть все
      </template>
    </StackedList>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Ссылки на контент с действием</h5>
  <div class="max-w-sm mx-auto py-12 px-4 sm:px-0 md:py-16">
    <StackedList type="flow">
      <template v-slot:flow>
        <li class="py-5"
            v-for="item in announcements" :key="item.id">
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
      </template>
      <template v-slot:link>
        Посмотреть все
      </template>
    </StackedList>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">С предварительным просмотром сокращенным содержимого</h5>
  <div class="max-w-sm mx-auto py-12 px-4 sm:px-0 md:py-16">
    <StackedList type="simple">
      <template v-slot:simple>
        <li class="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
            v-for="item in messages" :key="item.id">
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
      </template>
    </StackedList>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Двухколонный с аватарами</h5>
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
    <StackedList type="twoColumns">
      <template v-slot:twoColumns>
        <li v-for="item in applications" :key="item.applicant.email">
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
      </template>
    </StackedList>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">С объединенными заголовками</h5>
  <div class="max-w-xl mx-auto sm:px-6 lg:px-8" style="height: 26rem;">
    <StackedList type="headings">
      <template v-slot:headings>
        <div class="relative" v-for="item in Object.keys(directory)" :key="item">
          <div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
            <h3>
              {{ item }}
            </h3>
          </div>
          <ul role="list" class="relative z-0 divide-y divide-gray-200">
            <li class="bg-white" v-for="value in directory[item]" :key="value.id">
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
      </template>
    </StackedList>
  </div>
</template>

<style scoped>

</style>