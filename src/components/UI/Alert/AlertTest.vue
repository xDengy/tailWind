<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: 'desc',
  },
});
const styles = ['rounded-md p-4'];
if (props.type === 'desc') {
  styles.push('bg-yellow-50')
}
if (props.type === 'list') {
  styles.push('bg-red-50')
}
if (props.type === 'actions') {
  styles.push('bg-green-50')
}

const titleStyle = ['text-sm font-medium'];
if (props.type === 'desc') {
  styles.push('text-yellow-800')
}
if (props.type === 'list') {
  styles.push('text-red-400')
}
if (props.type === 'actions') {
  styles.push('text-green-800')
}

import {ExclamationIcon, XCircleIcon, CheckCircleIcon} from '@heroicons/vue/outline'
</script>

<template>
  <div :class="styles">
    <div class="flex">
      <div class="flex-shrink-0">
        <slot name="icon" v-if="props.type === 'desc'">
          <ExclamationIcon class="h-5 w-5 text-yellow-400" aria-hidden="true"/>
        </slot>
        <slot name="icon" v-else-if="props.type === 'list'">
          <XCircleIcon class="h-5 w-5 text-red-400" aria-hidden="true"/>
        </slot>
        <slot name="icon" v-else-if="props.type === 'actions'">
          <CheckCircleIcon class="h-5 w-5 text-green-400" aria-hidden="true"/>
        </slot>
      </div>

      <div class="ml-3">
        <h3 :class="titleStyle">
          <slot name="title"></slot>
        </h3>

        <div class="mt-2 text-sm text-yellow-700" v-if="props.type === 'desc'">
          <slot name="text"></slot>
        </div>

        <div class="mt-2 text-sm text-red-700" v-else-if="props.type === 'list'">
          <ul role="list" class="list-disc pl-5 space-y-1">
            <slot name="text"></slot>
          </ul>
        </div>

        <div class="mt-2 text-sm text-green-700" v-else-if="props.type === 'actions'">
          <slot name="text"></slot>
        </div>

        <div class="mt-4">
          <div class="-mx-2 -my-1.5 flex">
            <slot name="button" class="focus:ring-green-600 bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>