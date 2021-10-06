<script setup>
import Card from '.././UI/GridList/Card.vue'
import SimpleCard from '.././UI/GridList/SimpleCard.vue'
import HorizontalLinkCard from '.././UI/GridList/HorizontalLinkCard.vue'
import ActionCard from '.././UI/GridList/ActionCard.vue'
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
    name: 'Джейн купер',
    title: 'Региональный техник парадигмы',
    role: 'Админ',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Джейн купер',
    title: 'Региональный техник парадигмы',
    role: 'Админ',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Джейн купер',
    title: 'Региональный техник парадигмы',
    role: 'Админ',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Джейн купер',
    title: 'Региональный техник парадигмы',
    role: 'Админ',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Джейн купер',
    title: 'Региональный техник парадигмы',
    role: 'Админ',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    image:
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
    title: 'Запросить перерыв',
    href: '#',
    icon: ClockIcon,
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
  },
  {
    title: 'Преимущества',
    href: '#',
    icon: BadgeCheckIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
  },
  {
    title: 'Назначьте индивидуальную встречу',
    href: '#',
    icon: UsersIcon,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
  },
  {
    title: 'Платежная ведомость',
    href: '#',
    icon: CashIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50'
  },
  {
    title: 'Отправьте счет',
    href: '#',
    icon: ReceiptRefundIcon,
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50',
  },
  {
    title: 'Обучение',
    href: '#',
    icon: AcademicCapIcon,
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50',
  },
]
</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Сетка списков</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">Контактные карточки с маленькими портретами</h5>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <Card :items="peopleRoles" arrayName="SmallAvatars"/>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Контактные карточки</h5>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <Card :items="peopleRoles" arrayName="ContactCard"/>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Изображения с деталями</h5>
  <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <Card :items="files" arrayName="Images"/>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Простые карты</h5>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SimpleCard :items="projects"/>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Карты горизонтальных ссылок</h5>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <HorizontalLinkCard :items="peopleRoles"/>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Действия с общими границами</h5>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <ActionCard :items="actions">
      <template v-slot:text>
        Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo
        et molestiae.
      </template>
    </ActionCard>
  </div>

</template>

<style scoped>

</style>