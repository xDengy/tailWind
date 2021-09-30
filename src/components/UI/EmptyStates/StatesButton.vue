<script setup>
import {PlusIcon} from '@heroicons/vue/solid'
</script>

<template>
  <div class="mt-6">
    <button type="button"
            class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <PlusIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true"/>
      <slot></slot>
    </button>
  </div>
</template>

<style scoped>

</style>