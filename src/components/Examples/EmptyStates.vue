<script setup>
import SimpleStates from '.././UI/EmptyStates/SimpleStates.vue'
import BorderStates from '.././UI/EmptyStates/BorderStates.vue'
</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Empty States</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">Simple</h5>
  <div class="bg-white px-4 py-12">
    <SimpleStates />
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">With dashed border</h5>
  <div class="max-w-lg mx-auto">
    <BorderStates />
  </div>
</template>

<style scoped>

</style>