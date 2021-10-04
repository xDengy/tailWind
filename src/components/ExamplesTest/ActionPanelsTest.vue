<script setup>
import ActionPanels from '.././UI/ActionPanels/ActionPanelsTest.vue'
</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Панель действий</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">Простая</h5>
  <div class="max-w-3xl mx-auto">
      <ActionPanels>
        <template v-slot:header>
          Удалить свой аккаунт
        </template>
        <template v-slot:text>
          Удалив аккаунт однажды, вы потеряете все данные связанные с ним.
        </template>
        <template v-slot:button>
          Удалить аккаунт
        </template>
      </ActionPanels>
  </div>
</template>

<style scoped>

</style>