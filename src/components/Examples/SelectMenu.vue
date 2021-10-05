<script setup>
import Simple from '.././UI/SelectMenus/Simple.vue'
import MenuItem from '.././UI/SelectMenus/MenuItem.vue'
</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Меню выбора</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">Простой нативный</h5>
  <div class="w-full max-w-xs mx-auto">
    <Simple>
      <MenuItem>
        США
      </MenuItem>
      <MenuItem :selected="true">
        Канада
      </MenuItem>
      <MenuItem>
        Европа
      </MenuItem>
    </Simple>
  </div>
</template>

<style scoped>

</style>