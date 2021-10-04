<script setup>
import Menu from '.././UI/SelectMenus/MenuTest.vue'
</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Меню выбора</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">Простой нативный</h5>
  <div class="w-full max-w-xs mx-auto">
    <Menu>
      <template v-slot:header>
        Местонахождение
      </template>
      <template v-slot:option>
        <option>
          США
        </option>
        <option selected>
          Канада
        </option>
        <option>
          Европа
        </option>
      </template>
    </Menu>
  </div>
</template>

<style scoped>

</style>