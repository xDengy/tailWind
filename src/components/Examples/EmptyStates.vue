<script setup>
import SimpleStates from '../UI/EmptyState/SimpleState.vue'
import StatesButton from '../UI/EmptyState/StateButton.vue'
</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Пустые состояния</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">Простые</h5>
  <div class="bg-white px-4 py-12">
    <SimpleStates>
      <template v-slot:title>
        Нет проектов
      </template>

      <template v-slot:subtitle>
        Начните, создав новый проект.
      </template>

      <template v-slot:button>
        <StatesButton>
          Новый проект
        </StatesButton>
      </template>
    </SimpleStates>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">С пунктирной границей</h5>
  <div class="max-w-lg mx-auto">
    <StatesButton type="border">
      Создать новую базу данных
    </StatesButton>
  </div>
</template>

<style scoped>

</style>