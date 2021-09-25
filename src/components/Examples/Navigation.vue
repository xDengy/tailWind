<script setup>
import Navigation from '.././UI/Navigation/Navigation.vue'
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/vue/outline'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true, count: '5' },
  { name: 'Team', href: '#', icon: UsersIcon, current: false, count: '' },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false, count: '19' },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false, count: '20+' },
  { name: 'Documents', href: '#', icon: InboxIcon, current: false, count: '' },
  { name: 'Reports', href: '#', icon: ChartBarIcon, current: false, count: '' },
]
const secondaryNavigation = [
  { name: 'Website redesign', href: '#' },
  { name: 'GraphQL API', href: '#' },
  { name: 'Customer migration guides', href: '#' },
  { name: 'Profit sharing program', href: '#' },
]

</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Vertical Navigation</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">On gray</h5>
  <div class="w-64 mx-auto">
    <Navigation :items="navigation" />
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Simple</h5>
  <div class="w-64 mx-auto">
    <Navigation :items="navigation" type="simple" />
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">With badges</h5>
  <div class="w-64 mx-auto">
    <Navigation :items="navigation" type="badges" />
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">With icons and badges</h5>
  <div class="w-64 mx-auto">
    <Navigation :items="navigation" type="badgesIcons" />
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">With icons</h5>
  <div class="w-64 mx-auto">
    <Navigation :items="navigation" type="icons" />
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">With secondary navigation</h5>
  <div class="w-64 mx-auto">
    <Navigation :items="navigation" :second="secondaryNavigation" type="second" />
  </div>
</template>

<style scoped>

</style>