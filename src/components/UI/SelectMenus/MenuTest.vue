<script setup>

</script>

<template>
  <div>
    <label for="location" class="block text-sm font-medium text-gray-700">
      <slot name="header"></slot>
    </label>
    <select id="location" name="location"
            class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
      <slot name="option"></slot>
    </select>
  </div>
</template>

<style scoped>

</style>
