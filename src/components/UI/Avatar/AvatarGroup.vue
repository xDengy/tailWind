<script setup>
const props = defineProps({
  size: {
    type: String,
    required: false,
    default: '1',
  },
  type: {
    type: String,
    required: false,
    default: 'bot',
  },
  items: {
    type: Array,
    required: false
  }
});
const styles = ['flex overflow-hidden'];
if (props.type === 'top') {
  styles.push('relative z-0')
}
</script>

<template>
  <div :class="[styles, `-space-x-${props.size}`]">
    <img v-for="item in items"
         :class="['inline-block rounded-full ring-2 ring-white relative', `z-${item.indexSize}`, `h-${item.imgSize}`, `w-${item.imgSize}`]"
         :src="item.src" alt="" v-if="props.type === 'top'"/>

    <img v-for="item in items"
         :class="['inline-block rounded-full ring-2 ring-white', `h-${item.imgSize}`, `w-${item.imgSize}`]"
         :src="item.src" alt="" v-else/>
  </div>
</template>

<style scoped>

</style>