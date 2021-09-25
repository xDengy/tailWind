<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
    default: 'comments',
  },
  type: {
    type: String,
    required: false,
    default: 'notifications',
  },
});
</script>

<template>
  <div class="min-w-0 flex-1 text-sm" v-if="props.type === 'notifications'">
    <slot></slot>
  </div>
  <div class="ml-3 flex items-center h-5" v-if="props.type === 'notifications'">
    <input :id="props.name" :aria-describedby="[`${props.name}-description`]" :name="props.name" type="checkbox"
           class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
  </div>

  <div class="flex items-center h-5" v-if="props.type === 'leftNotifications'">
    <input :id="props.name" :aria-describedby="[`${props.name}-description`]" :name="props.name" type="checkbox"
           class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
  </div>
  <div class="ml-3 text-sm" v-if="props.type === 'leftNotifications'">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>