<script setup>
import {simple, stacked, multiple} from '../../Arrays/FeedsArrays.vue'
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
});
const divStyles = [];
if (props.type === 'simple' || props.type === 'multiple') {
  divStyles.push('flow-root');
}
if (props.type === 'stacked') {
  divStyles.push('');
}

const ulStyles = [];
if (props.type === 'simple' || props.type === 'multiple') {
  ulStyles.push('-mb-8');
}
if (props.type === 'stacked') {
  ulStyles.push('divide-y divide-gray-200');
}
</script>

<template>
  <div :class="divStyles">
    <ul role="list" :class="ulStyles">
      <slot name="simple"></slot>
      <slot name="stacked"></slot>
      <slot name="multiple"></slot>
    </ul>
  </div>
</template>

<style scoped>

</style>