<script>

</script>

<template>
  <div class="bg-white shadow sm:rounded-lg">
    <div class="px-4 py-5 sm:p-6">

      <slot name="header"></slot>
      
      <div class="mt-2 max-w-xl text-sm text-gray-500">
        <slot name="text"></slot>
      </div>

      <div class="mt-5">
        <button type="button" class="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm">
          <slot name="button"></slot>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>