<script setup>
import Navigation from '.././UI/Navigation/NavigationTest.vue'
import {CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon} from '@heroicons/vue/outline'

const navigation = [
  {name: 'Главная', href: '#', icon: HomeIcon, current: true, count: '5'},
  {name: 'Команда', href: '#', icon: UsersIcon, current: false, count: ''},
  {name: 'Проекты', href: '#', icon: FolderIcon, current: false, count: '19'},
  {name: 'Календарь', href: '#', icon: CalendarIcon, current: false, count: '20+'},
  {name: 'Документы', href: '#', icon: InboxIcon, current: false, count: ''},
  {name: 'Доклады', href: '#', icon: ChartBarIcon, current: false, count: ''},
]
const secondaryNavigation = [
  {name: 'Редизайн сайта', href: '#'},
  {name: 'GraphQL API', href: '#'},
  {name: 'Руководства по миграции для клиентов', href: '#'},
  {name: 'Программа распределения прибыли', href: '#'},
]
</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Вертикальная навигация</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">В сером цвете</h5>
  <div class="w-64 mx-auto">
    <Navigation>
      <template v-slot:content>
        <a v-for="item in navigation" :key="item.name" :href="item.href"
           :class="[item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'flex items-center px-3 py-2 text-sm font-medium rounded-md']"
           :aria-current="item.current ? 'page' : undefined">
          <component :is="item.icon"
                     :class="[item.current ? 'text-gray-500' : 'text-gray-400', 'flex-shrink-0 -ml-1 mr-3 h-6 w-6']"
                     aria-hidden="true"/>
          <span class="truncate">
        {{ item.name }}
      </span>
          <span v-if="item.count"
                :class="[item.current ? 'bg-gray-50' : 'bg-gray-200 text-gray-600', 'ml-auto inline-block py-0.5 px-3 text-xs rounded-full']">
        {{ item.count }}
      </span>
        </a>
      </template>
    </Navigation>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Простой</h5>
  <div class="w-64 mx-auto">
    <Navigation>
      <template v-slot:content>
        <a v-for="item in navigation" :key="item.name" :href="item.href"
           :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'flex items-center px-3 py-2 text-sm font-medium rounded-md']"
           :aria-current="item.current ? 'page' : undefined">
      <span class="truncate">
        {{ item.name }}
      </span>
        </a>
      </template>
    </Navigation>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Со значками</h5>
  <div class="w-64 mx-auto">
    <Navigation>
      <template v-slot:content>
        <a v-for="item in navigation" :key="item.name" :href="item.href"
           :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-3 py-2 text-sm font-medium rounded-md']"
           :aria-current="item.current ? 'page' : undefined">
      <span class="truncate">
        {{ item.name }}
      </span>
          <span v-if="item.count"
                :class="[item.current ? 'bg-white' : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200', 'ml-auto inline-block py-0.5 px-3 text-xs rounded-full']">
        {{ item.count }}
      </span>
        </a>
      </template>
    </Navigation>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">С иконками и значками</h5>
  <div class="w-64 mx-auto">
    <Navigation>
      <template v-slot:content>
        <a v-for="item in navigation" :key="item.name" :href="item.href"
           :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-3 py-2 text-sm font-medium rounded-md']"
           :aria-current="item.current ? 'page' : undefined">
          <component :is="item.icon"
                     :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'flex-shrink-0 -ml-1 mr-3 h-6 w-6']"
                     aria-hidden="true"/>
          <span class="truncate">
        {{ item.name }}
      </span>
          <span v-if="item.count"
                :class="[item.current ? 'bg-white' : 'bg-gray-100 group-hover:bg-gray-200', 'ml-auto inline-block py-0.5 px-3 text-xs rounded-full']">
        {{ item.count }}
      </span>
        </a>
      </template>
    </Navigation>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">С иконками</h5>
  <div class="w-64 mx-auto">
    <Navigation>
      <template v-slot:content>
        <a v-for="item in navigation" :key="item.name" :href="item.href"
           :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-3 py-2 text-sm font-medium rounded-md']"
           :aria-current="item.current ? 'page' : undefined">
          <component :is="item.icon"
                     :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'flex-shrink-0 -ml-1 mr-3 h-6 w-6']"
                     aria-hidden="true"/>
          <span class="truncate">
        {{ item.name }}
      </span>
        </a>
      </template>
    </Navigation>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Со вторичной навигацией</h5>
  <div class="w-64 mx-auto">
    <Navigation type="second">
      <template v-slot:content>
        <a v-for="item in navigation" :key="item.name" :href="item.href"
           :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-3 py-2 text-sm font-medium rounded-md']"
           :aria-current="item.current ? 'page' : undefined">
          <component :is="item.icon"
                     :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'flex-shrink-0 -ml-1 mr-3 h-6 w-6']"
                     aria-hidden="true"/>
          <span class="truncate">
          {{ item.name }}
        </span>
        </a>
      </template>

      <template v-slot:header>
        <h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="projects-headline">
          Проекты
        </h3>
      </template>

      <template v-slot:footer>
        <a v-for="item in secondaryNavigation" :key="item.name" :href="item.href"
           class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
          <span class="truncate">
            {{ item.name }}
          </span>
        </a>
      </template>
    </Navigation>
  </div>
</template>

<style scoped>

</style>