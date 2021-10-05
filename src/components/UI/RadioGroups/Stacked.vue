<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
import { ref } from 'vue'
import { RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
const selected = ref(props.items[0])
</script>

<template>
  <RadioGroup v-model="selected">
    <RadioGroupLabel class="sr-only">
      <slot name="title"></slot>
    </RadioGroupLabel>
    <div class="space-y-4">
      <RadioGroupOption as="template" v-for="item in props.items" :key="item.name" :value="item" v-slot="{ active, checked }">
        <div :class="[active ? 'ring-1 ring-offset-2 ring-indigo-500' : '', 'relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus:outline-none']">
          <div class="flex items-center">
            <div class="text-sm">
              <RadioGroupLabel as="p" class="font-medium text-gray-900">
                {{ item.name }}
              </RadioGroupLabel>
              <RadioGroupDescription as="div" class="text-gray-500">
                <p class="sm:inline">{{ item.ram }} / {{ item.cpus }}</p>
                {{ ' ' }}
                <span class="hidden sm:inline sm:mx-1" aria-hidden="true">&middot;</span>
                {{ ' ' }}
                <p class="sm:inline">{{ item.disk }}</p>
              </RadioGroupDescription>
            </div>
          </div>
          <RadioGroupDescription as="div" class="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
            <div class="font-medium text-gray-900">{{ item.price }}</div>
            <div class="ml-1 text-gray-500 sm:ml-0">/мес</div>
          </RadioGroupDescription>
          <div :class="[checked ? 'border-indigo-500' : 'border-transparent', 'absolute -inset-px rounded-lg border-2 pointer-events-none']" aria-hidden="true" />
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>

<style scoped>

</style>
