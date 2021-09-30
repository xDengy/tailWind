<script setup>
import ActionPanels from '.././UI/ActionPanels/ActionPanels.vue'
import ActionPanelsHeader from '.././UI/ActionPanels/ActionPanelsHeader.vue'
import ActionPanelsText from '.././UI/ActionPanels/ActionPanelsText.vue'
import ActionPanelsButton from '.././UI/ActionPanels/ActionPanelsButton.vue'
</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Панель действий</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">Простая</h5>
  <div class="max-w-3xl mx-auto">
      <ActionPanels>
        <ActionPanelsHeader>
          Удалить свой аккаунт
        </ActionPanelsHeader>
        <ActionPanelsText>
          Удалив аккаунт однажды, вы потеряете все данные связанные с ним.
        </ActionPanelsText>
        <ActionPanelsButton>
          Удалить аккаунт
        </ActionPanelsButton>
      </ActionPanels>
  </div>
</template>

<style scoped>

</style>