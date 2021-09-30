<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: 'notifications',
  },
  items: {
    type: Array,
    required: false,
  },
});
const styles = ['divide-y divide-gray-200'];
if (props.type === 'members') {
  styles.push('mt-4 border-t border-b border-gray-200')
}
const fieldStyle = [];
if (props.type !== 'leftNotifications') {
  fieldStyle.push('border-t border-b border-gray-200')
} else {
  fieldStyle.push('space-y-5')
}
</script>

<template>
  <fieldset :class="fieldStyle">
    <legend class="sr-only" v-if="props.type === 'notifications' || props.type === 'leftNotifications'">Уведомления
    </legend>
    <legend class="sr-only" v-else-if="props.type === 'members'">Участники</legend>
    <div :class="styles" v-if="props.type === 'notifications' || props.type === 'members'">

      <slot v-if="props.type === 'notifications'"></slot>

      <div v-for="(item, itemIndex) in props.items" :key="itemIndex" class="relative flex items-start py-4"
           v-if="props.items && props.type === 'members'">
        <div class="min-w-0 flex-1 text-sm">
          <label :for="`person-${item.id}`" class="font-medium text-gray-700 select-none">{{ item.name }}</label>
        </div>
        <div class="ml-3 flex items-center h-5">
          <input :id="`person-${item.id}`" :name="`person-${item.id}`" type="checkbox"
                 class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
        </div>
      </div>
    </div>

    <slot v-else-if="props.type === 'leftNotifications'"></slot>
  </fieldset>
</template>

<style scoped>

</style>