<script setup>
import SimpleStates from '.././UI/EmptyStates/SimpleStates.vue'
import StatesTitle from '.././UI/EmptyStates/StatesTitle.vue'
import StatesSubtitle from '.././UI/EmptyStates/StatesSubtitle.vue'
import StatesButton from '.././UI/EmptyStates/StatesButton.vue'
import BorderStates from '.././UI/EmptyStates/BorderStates.vue'
import StatesButtonText from '.././UI/EmptyStates/StatesButtonText.vue'
</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Пустые состояния</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">Простые</h5>
  <div class="bg-white px-4 py-12">
    <SimpleStates>
      <StatesTitle>
        Нет проектов
      </StatesTitle>

      <StatesSubtitle>
        Начните, создав новый проект.
      </StatesSubtitle>

      <StatesButton>
        Новый проект
      </StatesButton>
    </SimpleStates>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">С пунктирной границей</h5>
  <div class="max-w-lg mx-auto">
    <BorderStates>
      <StatesButtonText>
        Создать новую базу данных
      </StatesButtonText>
    </BorderStates>
  </div>
</template>

<style scoped>

</style>