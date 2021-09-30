<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: 'circTop',
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
  <span :class="styles" v-if="props.type === 'roundBot'">
      <span :class="['block rounded-full', `h-${props.iconSize}`, `w-${props.iconSize}`, `bg-${props.color}`]"/>
    </span>
  <span :class="[styles, `h-${props.iconSize}`, `w-${props.iconSize}`, `bg-${props.color}`]" v-else/>
</template>

<style scoped>

</style>