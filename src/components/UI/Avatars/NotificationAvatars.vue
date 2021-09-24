<script setup>
const props = defineProps({
  rounded: {
    type: String,
    required: false,
    default: 'full',
  },
  type: {
    type: String,
    required: false,
    default: 'circTop',
  },
  size: {
    type: String,
    required: false,
    default: '6',
  },
  iconSize: {
    type: String,
    required: false,
    default: '1.5',
  },
  color: {
    type: String,
    required: false,
    default: 'gray-300',
  },
});
const styles = ['absolute right-0']
if (props.type === 'circTop') {
  styles.push('top-0 block rounded-full ring-2 ring-white');
}
if (props.type === 'roundTop') {
  styles.push('top-0 block transform -translate-y-1/2 translate-x-1/2 rounded-full ring-2 ring-white');
}
if (props.type === 'circBot') {
  styles.push('bottom-0 block rounded-full ring-2 ring-white');
}
if (props.type === 'roundBot') {
  styles.push('bottom-0 transform translate-y-1/2 translate-x-1/2 block border-2 border-white rounded-full');
}
</script>

<template>
  <span class="inline-block relative">
    <img :class="[`h-${props.size}`, `w-${props.size}`, `rounded-${props.rounded}`]" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
    <span :class="styles" v-if="props.type === 'roundBot'">
      <span :class="['block rounded-full', `h-${props.iconSize}`, `w-${props.iconSize}`, `bg-${props.color}`]" />
    </span>
    <span :class="[styles, `h-${props.iconSize}`, `w-${props.iconSize}`, `bg-${props.color}`]" v-else />
  </span>
</template>

<style scoped>

</style>