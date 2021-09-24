<script setup>
const props = defineProps({
  imgSize: {
    type: String,
    required: false,
    default: '6',
  },
  indexSize: {
    type: String,
    required: false,
    default: '',
  },
  type: {
    type: String,
    required: false,
    default: 'bot',
  },
});
const styles = ['inline-block rounded-full ring-2 ring-white']
if (props.type === 'top') {
  styles.push('relative', `z-${props.indexSize}`)
}
</script>

<template>
  <img :class="[styles, `h-${props.imgSize}`, `w-${props.imgSize}`]" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
</template>

<style scoped>

</style>