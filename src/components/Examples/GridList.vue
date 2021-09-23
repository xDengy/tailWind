<script setup>
import Cards from '.././UI/GridList/Cards.vue'
import SimpleCards from '.././UI/GridList/SimpleCards.vue'
import HorizontalLinkCards from '.././UI/GridList/HorizontalLinkCards.vue'
import Actions from '.././UI/GridList/Actions.vue'
</script>

<script>
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CashIcon,
  ClockIcon,
  MailIcon,
  PhoneIcon,
  ReceiptRefundIcon,
  UsersIcon
} from "@heroicons/vue/outline";

const peopleRoles = [
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
]
const files = [
  {
    title: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
        'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'IMG_11111.HEIC',
    size: '1 MB',
    source:
        'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'IMG_222222.HEIC',
    size: '2 MB',
    source:
        'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'IMG_33333.HEIC',
    size: '3 MB',
    source:
        'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
]
const projects = [
  {name: 'Graph API', initials: 'GA', href: '#', members: 16, bgColor: 'bg-pink-600'},
  {name: 'Component Design', initials: 'CD', href: '#', members: 12, bgColor: 'bg-purple-600'},
  {name: 'Templates', initials: 'T', href: '#', members: 16, bgColor: 'bg-yellow-500'},
  {name: 'React Components', initials: 'RC', href: '#', members: 8, bgColor: 'bg-green-500'},
]
const actions = [
  {
    title: 'Request time off',
    href: '#',
    icon: ClockIcon,
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
  },
  {
    title: 'Benefits',
    href: '#',
    icon: BadgeCheckIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
  },
  {
    title: 'Schedule a one-on-one',
    href: '#',
    icon: UsersIcon,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
  },
  {title: 'Payroll', href: '#', icon: CashIcon, iconForeground: 'text-yellow-700', iconBackground: 'bg-yellow-50'},
  {
    title: 'Submit an expense',
    href: '#',
    icon: ReceiptRefundIcon,
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50',
  },
  {
    title: 'Training',
    href: '#',
    icon: AcademicCapIcon,
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50',
  },
]

export default {
  components: {
    AcademicCapIcon,
    BadgeCheckIcon,
    CashIcon,
    ClockIcon,
    MailIcon,
    PhoneIcon,
    ReceiptRefundIcon,
    UsersIcon
  },
  setup() {
    return {
      peopleRoles,
      files,
      projects,
      actions,
    }
  },
}
</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Grid List</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">Contact cards with small portraits</h5>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <Cards :items="peopleRoles" :arrayName="'SmallAvatars'"/>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Contact cards</h5>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <Cards :items="peopleRoles" :arrayName="'ContactCards'"/>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Images with details</h5>
  <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <Cards :items="files" :arrayName="'Images'"/>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Simple cards</h5>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SimpleCards :items="projects"/>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Horizontal Link Cards</h5>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <HorizontalLinkCards :items="peopleRoles"/>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Actions with shared borders</h5>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <Actions :items="actions"/>
  </div>

</template>

<style scoped>

</style>