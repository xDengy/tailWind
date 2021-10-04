<script setup>
import {steps, circlesSteps} from '../.././Arrays/StepsArrays.vue'
const props = defineProps({
  type: {
    type: String,
    required: false,
  },
});
import {CheckIcon} from '@heroicons/vue/outline'

const styles = [];
if (props.type === 'steps') {
  styles.push('space-y-4 md:flex md:space-y-0 md:space-x-8')
}
if (props.type === 'circlesSteps') {
  styles.push('overflow-hidden')
}
</script>

<template>
  <nav aria-label="Progress">
    <ol role="list" :class="styles">
      <slot name="steps"></slot>
      <slot name="circlesSteps"></slot>
    </ol>
  </nav>
</template>

<style scoped>

</style>