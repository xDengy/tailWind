<script>
import { PaperClipIcon } from '@heroicons/vue/solid'

export default {
  components: {
    PaperClipIcon,
  },
}
</script>

<template>
  <div class="w-0 flex-1 flex items-center">
    <PaperClipIcon class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true"/>
    <span class="ml-2 flex-1 w-0 truncate">
      <slot></slot>
    </span>
  </div>
</template>

<style scoped>

</style>