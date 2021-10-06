<script setup>
import Menu from '../UI/SelectMenu/Menu.vue'
import MenuItem from '../UI/SelectMenu/MenuItem.vue'
</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Меню выбора</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">Простой нативный</h5>
  <div class="w-full max-w-xs mx-auto">
    <Menu>
      <MenuItem>
        США
      </MenuItem>
      <MenuItem :selected="true">
        Канада
      </MenuItem>
      <MenuItem>
        Европа
      </MenuItem>
    </Menu>
  </div>
</template>

<style scoped>

</style>