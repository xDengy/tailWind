<script setup>
import Heading from '../UI/StackedList/Heading.vue'
import StackedList from '.././UI/StackedList/StackedList.vue'
import TwoColumnAvatar from '.././UI/StackedList/TwoColumnAvatar.vue'

import {CursorClickIcon, MailOpenIcon, UsersIcon} from "@heroicons/vue/outline";

import {peopleEmail, peopleHandle, announcements, messages, directory, applications} from '../Arrays/StackedListArrays.vue'

</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Составной список</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">Простой с группой аватаров</h5>
  <div class="max-w-md mx-auto py-12 px-4 sm:px-0 md:py-16">
    <StackedList :items="peopleEmail" />
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Группы аватаров с действиями</h5>
  <div class="max-w-sm mx-auto py-12 px-4 sm:px-0 md:py-16">
    <div class="flow-root mt-6">
      <StackedList :items="peopleHandle" />
    </div>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Ссылки на контент с действием</h5>
  <div class="max-w-sm mx-auto py-12 px-4 sm:px-0 md:py-16">
    <div class="flow-root mt-6">
      <StackedList :items="announcements" />
    </div>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">С предварительным просмотром сокращенным содержимого</h5>
  <div class="max-w-sm mx-auto py-12 px-4 sm:px-0 md:py-16">
    <StackedList :items="messages" />
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Двухколонный с аватарами</h5>
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
    <TwoColumnAvatar :items="applications" />
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">С объединенными заголовками</h5>
  <div class="max-w-xl mx-auto sm:px-6 lg:px-8" style="height: 26rem;">
    <Heading :items="directory" />
  </div>
</template>

<style scoped>

</style>