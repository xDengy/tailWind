<script setup>
import Steps from '../UI/Steps/StepsTest.vue'
import {steps, circlesSteps} from '../Arrays/StepsArrays.vue'
import {CheckIcon} from '@heroicons/vue/outline'
</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Шаги</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">Простые</h5>
  <div class="p-6 mx-auto max-w-7xl">
      <Steps type="steps">
        <template v-slot:steps>
          <li v-for="item in steps" :key="item.name" class="md:flex-1">
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
        </template>
      </Steps>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Круглые с текстом</h5>
  <div class="px-4 flex justify-center sm:px-6 lg:px-8 py-12">
    <Steps type="circlesSteps">
      <template v-slot:circlesSteps>
        <li v-for="(item, itemIndex) in circlesSteps" :key="item.name" :class="[itemIndex !== circlesSteps.length - 1 ? 'pb-10' : '', 'relative']">
          <template v-if="item.status === 'complete'">
            <div v-if="(itemIndex !== circlesSteps.length - 1)" class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-indigo-600" aria-hidden="true" />
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
            <div v-if="(itemIndex !== circlesSteps.length - 1)" class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true" />
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
            <div v-if="(itemIndex !== circlesSteps.length - 1)" class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true" />
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
      </template>
    </Steps>
  </div>
</template>

<style scoped>

</style>