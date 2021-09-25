<script setup>
import Simple from '.././UI/SelectMenus/Simple.vue'
import MenuItem from '.././UI/SelectMenus/MenuItem.vue'
</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Select Menus</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">Simple native</h5>
  <div class="w-full max-w-xs mx-auto">
    <Simple>
      <MenuItem>
        USA
      </MenuItem>
      <MenuItem :selected="true">
        Canada
      </MenuItem>
      <MenuItem>
        EU
      </MenuItem>
    </Simple>
  </div>
</template>

<style scoped>

</style>