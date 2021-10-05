<script setup>
import Simple from '.././UI/RadioGroups/Stacked.vue'

const plans = [
  { name: 'Хобби', ram: '8GB', cpus: '4 CPUs', disk: '160 GB SSD диск', price: '$40' },
  { name: 'Стартап', ram: '12GB', cpus: '6 CPUs', disk: '256 GB SSD диск', price: '$80' },
  { name: 'Бизнес', ram: '16GB', cpus: '8 CPUs', disk: '512 GB SSD диск', price: '$160' },
  { name: 'Предприятие', ram: '32GB', cpus: '12 CPUs', disk: '1024 GB SSD диск', price: '$240' },
]
</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Радиогруппы</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">Сложенные карточки</h5>
  <div class="w-full max-w-xl mx-auto">
    <Simple :items="plans">
      <template v-slot:title>
        Размер сервера
      </template>
    </Simple>
  </div>
</template>

<style scoped>

</style>