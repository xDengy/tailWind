<script setup>
import Stats from '.././UI/Stats/Stats.vue'
import {ArrowSmUpIcon, ArrowSmDownIcon, CursorClickIcon, MailOpenIcon, UsersIcon} from "@heroicons/vue/outline";
const stats = [
  {
    id: 1,
    label: 'Total Subscribers',
    value: '71,897',
    difference: {
      type: 'increase',
      value: '122',
    },
    icon: UsersIcon,
    link: {
      title: 'show all',
      href: '/sdfsdf/sdfsdf'
    }
  },
  {
    id: 2,
    label: 'Avg. Open Rate',
    value: '58.16%',
    difference: {
      type: 'increase',
      value: '5.4%',
    },
    icon: MailOpenIcon,
    link: {
      title: 'show all',
      href: '/sdfsdf/sdfsdf'
    }
  },
  {
    id: 3,
    label: 'Avg. Click Rate',
    value: '24.57%',
    difference: {
      type: 'decrease',
      value: '3.2%',
    },
    icon: CursorClickIcon,
    link: {
      title: 'show all',
      href: '/sdfsdf/sdfsdf'
    }
  },
]
</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Stats</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">Simple</h5>
  <Stats :type="'simple'" :items="stats" />

  <h5 class="mt-5 mb-1 font-bold text-m">Icon</h5>
  <Stats :type="'icon'" :items="stats" />
</template>

<style scoped>

</style>