<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
  },
});
const ulStyles = [];
if (props.type === 'smallAvatars') {
  ulStyles.push('grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3');
}
if (props.type === 'contactCards') {
  ulStyles.push('grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4');
}
if (props.type === 'images') {
  ulStyles.push('grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8');
}

const liStyles = [];
if (props.type === 'smallAvatars') {
  liStyles.push('col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200');
}
if (props.type === 'contactCards') {
  liStyles.push('col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200');
}
if (props.type === 'images') {
  liStyles.push('relative');
}
import {MailIcon, PhoneIcon} from "@heroicons/vue/outline";
</script>

<template>
  <ul role="list" :class="ulStyles"
      v-if="props.type === 'smallAvatars' || props.type === 'contactCards' || props.type === 'images'">
    <slot name="content"></slot>
  </ul>

  <div
      class="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px"
      v-else-if="props.type === 'action'">
    <slot name="content"></slot>
  </div>

  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2" v-else-if="props.type === 'horizontal'">
    <slot name="content"></slot>
  </div>

  <div v-else-if="props.type === 'simple'">
    <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">
      <slot name="header">
      </slot>
    </h2>
    <ul role="list" class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <slot name="content"></slot>
    </ul>
  </div>
</template>

<style scoped>

</style>