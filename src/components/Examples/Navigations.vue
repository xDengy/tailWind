<script setup>
import Navigation from '.././UI/Navigation/Navigation.vue'
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/vue/outline'

const navigation = [
  { name: 'Главная', href: '#', icon: HomeIcon, current: true, count: '5' },
  { name: 'Команда', href: '#', icon: UsersIcon, current: false, count: '' },
  { name: 'Проекты', href: '#', icon: FolderIcon, current: false, count: '19' },
  { name: 'Календарь', href: '#', icon: CalendarIcon, current: false, count: '20+' },
  { name: 'Документы', href: '#', icon: InboxIcon, current: false, count: '' },
  { name: 'Доклады', href: '#', icon: ChartBarIcon, current: false, count: '' },
]
const secondaryNavigation = [
  { name: 'Редизайн сайта', href: '#' },
  { name: 'GraphQL API', href: '#' },
  { name: 'Руководства по миграции для клиентов', href: '#' },
  { name: 'Программа распределения прибыли', href: '#' },
]
</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Вертикальная навигация</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">В сером цвете</h5>
  <div class="w-64 mx-auto">
    <Navigation :items="navigation" />
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Простой</h5>
  <div class="w-64 mx-auto">
    <Navigation :items="navigation" type="simple" />
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Со значками</h5>
  <div class="w-64 mx-auto">
    <Navigation :items="navigation" type="badges" />
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">С иконками и значками</h5>
  <div class="w-64 mx-auto">
    <Navigation :items="navigation" type="badgesIcons" />
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">С иконками</h5>
  <div class="w-64 mx-auto">
    <Navigation :items="navigation" type="icons" />
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Со вторичной навигацией</h5>
  <div class="w-64 mx-auto">
    <Navigation :items="navigation" :second="secondaryNavigation" type="second" />
  </div>
</template>

<style scoped>

</style>