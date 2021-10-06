<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: 'circTop',
  },
  items: {
    type: Array,
    required: false,
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
  <span class="inline-block relative" v-for="item in props.items">
    <img :class="[`h-${item.size}`, `w-${item.size}`, `rounded-${item.rounded}`]" :src="item.src" alt=""/>
    <span :class="styles" v-if="props.type === 'roundBot'">
      <span :class="['block rounded-full', `h-${item.iconSize}`, `w-${item.iconSize}`, `bg-${item.color}`]"/>
    </span>
    <span :class="[styles, `h-${item.iconSize}`, `w-${item.iconSize}`, `bg-${item.color}`]" v-else/>
  </span>
</template>

<style scoped>

</style>