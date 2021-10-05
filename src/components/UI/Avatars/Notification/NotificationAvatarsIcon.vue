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

</template>

<style scoped>

</style>