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
  <img :class="[styles, `h-${props.imgSize}`, `w-${props.imgSize}`]" src="" alt=""/>
</template>

<style scoped>

</style>