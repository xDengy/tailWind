<script setup>
import ActionPanel from '../UI/ActionPanel/ActionPanel.vue'
import ActionPanelButton from '../UI/ActionPanel/ActionPanelButton.vue'

import {ref} from 'vue';

const deleteAction = ref(false);
</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Панель действий</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">Простая</h5>
  <div class="max-w-3xl mx-auto">
    <ActionPanel title="Удалить свой аккаунт"
                     text="Удалив аккаунт однажды, вы потеряете все данные связанные с ним.">
      <template v-slot:button>
        <ActionPanelButton @click="() => (deleteAction = !deleteAction)" text="Удалить аккаунт" />
      </template>
    </ActionPanel>
  </div>
</template>

<style scoped>

</style>