<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: 'desc',
  },
});
import {ExclamationIcon, XCircleIcon, CheckCircleIcon} from '@heroicons/vue/outline'
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
</script>

<template>
  <div :class="styles">
    <div class="flex">
      <div class="flex-shrink-0">
        <ExclamationIcon class="h-5 w-5 text-yellow-400" aria-hidden="true" v-if="props.type === 'desc'" />
        <XCircleIcon class="h-5 w-5 text-red-400" aria-hidden="true" v-else-if="props.type === 'list'" />
        <CheckCircleIcon class="h-5 w-5 text-green-400" aria-hidden="true" v-else-if="props.type === 'actions'" />
      </div>
      <div class="ml-3" v-if="props.type === 'desc'">
        <slot></slot>
      </div>

      <div class="ml-3" v-else-if="props.type === 'list'">
        <slot></slot>
      </div>

      <div class="ml-3" v-else-if="props.type === 'actions'">
        <slot></slot>
        <div class="mt-4">
          <div class="-mx-2 -my-1.5 flex">
            <button type="button" class="bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600">
              View status
            </button>
            <button type="button" class="ml-3 bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600">
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>