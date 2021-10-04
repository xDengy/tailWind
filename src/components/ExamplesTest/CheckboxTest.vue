<script setup>
import Checkbox from '.././UI/Checkboxes/CheckboxTest.vue'

const members = [
  { id: 1, name: 'Анита Блэк' },
  { id: 2, name: 'Коди Фишер' },
  { id: 3, name: 'Кортни Генри' },
  { id: 4, name: 'Кэтрин Мерфи' },
  { id: 5, name: 'Тереза Вебб' },
]
</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Флажки</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">Список флажков справа</h5>
  <div class="w-full max-w-lg mx-auto">
    <Checkbox>
      <template v-slot:legend>
        Уведомления
      </template>
      <template v-slot:content>
        <div class="relative flex items-start py-4">
          <div class="min-w-0 flex-1 text-sm">
            <label for="comments" class="font-medium text-gray-700">Comments</label>
            <p id="comments-description" class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
          </div>
          <div class="ml-3 flex items-center h-5">
            <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
          </div>
        </div>
        <div class="relative flex items-start py-4">
          <div class="min-w-0 flex-1 text-sm">
            <label for="candidates" class="font-medium text-gray-700">Candidates</label>
            <p id="candidates-description" class="text-gray-500">Get notified when a candidate applies for a job.</p>
          </div>
          <div class="ml-3 flex items-center h-5">
            <input id="candidates" aria-describedby="candidates-description" name="candidates" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
          </div>
        </div>
        <div class="relative flex items-start py-4">
          <div class="min-w-0 flex-1 text-sm">
            <label for="offers" class="font-medium text-gray-700">Offers</label>
            <p id="offers-description" class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
          </div>
          <div class="ml-3 flex items-center h-5">
            <input id="offers" aria-describedby="offers-description" name="offers" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
          </div>
        </div>
      </template>
    </Checkbox>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Простой список с заголовком </h5>
  <div class="w-full max-w-lg mx-auto">
    <Checkbox type="members">
      <template v-slot:legend>
        Участники
      </template>
      <template v-slot:content>
        <div v-for="(person, personIdx) in members" :key="personIdx" class="relative flex items-start py-4">
          <div class="min-w-0 flex-1 text-sm">
            <label :for="`person-${person.id}`" class="font-medium text-gray-700 select-none">{{ person.name }}</label>
          </div>
          <div class="ml-3 flex items-center h-5">
            <input :id="`person-${person.id}`" :name="`person-${person.id}`" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
          </div>
        </div>
      </template>
    </Checkbox>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Список с описанием</h5>
  <div class="w-full max-w-lg mx-auto">
    <Checkbox type="leftNotifications">
      <template v-slot:legend>
        Уведомления
      </template>
      <template v-slot:leftContent>
        <div class="relative flex items-start">
          <div class="flex items-center h-5">
            <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
          </div>
          <div class="ml-3 text-sm">
            <label for="comments" class="font-medium text-gray-700">Comments</label>
            <p id="comments-description" class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
          </div>
        </div>
        <div class="relative flex items-start">
          <div class="flex items-center h-5">
            <input id="candidates" aria-describedby="candidates-description" name="candidates" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
          </div>
          <div class="ml-3 text-sm">
            <label for="candidates" class="font-medium text-gray-700">Candidates</label>
            <p id="candidates-description" class="text-gray-500">Get notified when a candidate applies for a job.</p>
          </div>
        </div>
        <div class="relative flex items-start">
          <div class="flex items-center h-5">
            <input id="offers" aria-describedby="offers-description" name="offers" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
          </div>
          <div class="ml-3 text-sm">
            <label for="offers" class="font-medium text-gray-700">Offers</label>
            <p id="offers-description" class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
          </div>
        </div>
      </template>
    </Checkbox>
  </div>
</template>

<style scoped>

</style>