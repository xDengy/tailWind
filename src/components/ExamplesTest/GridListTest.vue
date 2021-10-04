<script setup>
import Cards from '.././UI/GridList/CardsTest.vue'
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CashIcon,
  ClockIcon,
  MailIcon,
  PhoneIcon,
  ReceiptRefundIcon,
  UsersIcon,
  DotsVerticalIcon
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
    <Cards type="smallAvatars">
      <template v-slot:content>
        <li v-for="item in peopleRoles" :key="item.email"
            class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
          <div class="w-full flex items-center justify-between p-6 space-x-6">
            <div class="flex-1 truncate">
              <div class="flex items-center space-x-3">
                <h3 class="text-gray-900 text-sm font-medium truncate">{{ item.name }}</h3>
                <span
                    class="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">{{
                    item.role
                  }}</span>
              </div>
              <p class="mt-1 text-gray-500 text-sm truncate">{{ item.title }}</p>
            </div>
            <img class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" :src="item.image" alt=""/>
          </div>
          <div>
            <div class="-mt-px flex divide-x divide-gray-200">
              <div class="w-0 flex-1 flex">
                <a :href="`mailto:${item.email}`"
                   class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                  <MailIcon class="w-5 h-5 text-gray-400" aria-hidden="true"/>
                  <span class="ml-3">Написать</span>
                </a>
              </div>
              <div class="-ml-px w-0 flex-1 flex">
                <a :href="`tel:${item.telephone}`"
                   class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
                  <PhoneIcon class="w-5 h-5 text-gray-400" aria-hidden="true"/>
                  <span class="ml-3">Позвонить</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      </template>
    </Cards>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Контактные карточки</h5>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <Cards type="contactCards">
      <template v-slot:content>
        <li v-for="item in peopleRoles" :key="item.email" class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
          <div class="flex-1 flex flex-col p-8">
            <img class="w-32 h-32 flex-shrink-0 mx-auto rounded-full" :src="item.image" alt="" />
            <h3 class="mt-6 text-gray-900 text-sm font-medium">{{ item.name }}</h3>
            <dl class="mt-1 flex-grow flex flex-col justify-between">
              <dt class="sr-only">Название</dt>
              <dd class="text-gray-500 text-sm">{{ item.title }}</dd>
              <dt class="sr-only">Роль</dt>
              <dd class="mt-3">
                <span class="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">{{ item.role }}</span>
              </dd>
            </dl>
          </div>
          <div>
            <div class="-mt-px flex divide-x divide-gray-200">
              <div class="w-0 flex-1 flex">
                <a :href="`mailto:${item.email}`" class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                  <MailIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span class="ml-3">Написать</span>
                </a>
              </div>
              <div class="-ml-px w-0 flex-1 flex">
                <a :href="`tel:${item.telephone}`" class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
                  <PhoneIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span class="ml-3">Позвонить</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      </template>
    </Cards>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Изображения с деталями</h5>
  <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <Cards :items="files" type="images">
      <template v-slot:content>
        <li v-for="item in files" :key="item.source" class="relative">
          <div class="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
            <img :src="item.source" alt="" class="object-cover pointer-events-none group-hover:opacity-75" />
            <button type="button" class="absolute inset-0 focus:outline-none">
              <span class="sr-only">Посмотреть детали для {{ item.title }}</span>
            </button>
          </div>
          <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{{ item.title }}</p>
          <p class="block text-sm font-medium text-gray-500 pointer-events-none">{{ item.size }}</p>
        </li>
      </template>
    </Cards>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Простые карты</h5>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <Cards type="simple">
      <template v-slot:header>
        Закрепленные проекты
      </template>

      <template v-slot:content>
          <li v-for="item in projects" :key="item.name" class="col-span-1 flex shadow-sm rounded-md">
            <div :class="[item.bgColor, 'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md']">
              {{ item.initials }}
            </div>
            <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div class="flex-1 px-4 py-2 text-sm truncate">
                <a :href="item.href" class="text-gray-900 font-medium hover:text-gray-600">{{ item.name }}</a>
                <p class="text-gray-500">{{ item.members }} Участников</p>
              </div>
              <div class="flex-shrink-0 pr-2">
                <button type="button" class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span class="sr-only">Открыть опции</span>
                  <DotsVerticalIcon class="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </li>
        </template>
    </Cards>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Карты горизонтальных ссылок</h5>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <Cards type="horizontal">
      <template v-slot:content>
        <div v-for="item in peopleRoles" :key="item.email" class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" :src="item.image" alt="" />
          </div>
          <div class="flex-1 min-w-0">
            <a href="#" class="focus:outline-none">
              <span class="absolute inset-0" aria-hidden="true" />
              <p class="text-sm font-medium text-gray-900">
                {{ item.name }}
              </p>
              <p class="text-sm text-gray-500 truncate">
                {{ item.role }}
              </p>
            </a>
          </div>
        </div>
      </template>
    </Cards>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Действия с общими границами</h5>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <Cards type="action">
      <template v-slot:content>
        <div v-for="(item, itemIndex) in actions" :key="item.title"
             :class="[itemIndex === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
         itemIndex === 1 ? 'sm:rounded-tr-lg' : '', itemIndex === item.length - 2 ? 'sm:rounded-bl-lg' : '',
         itemIndex === item.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
         'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500']">
          <div>
        <span :class="[item.iconBackground, item.iconForeground, 'rounded-lg inline-flex p-3 ring-4 ring-white']">
          <component :is="item.icon" class="h-6 w-6" aria-hidden="true"/>
        </span>
          </div>
          <div class="mt-8">
            <h3 class="text-lg font-medium">
              <a :href="item.href" class="focus:outline-none">
                <span class="absolute inset-0" aria-hidden="true"/>
                {{ item.title }}
              </a>
            </h3>
            <p class="mt-2 text-sm text-gray-500">
              Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo
              et molestiae.
            </p>
          </div>
          <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true">
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path
              d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"/>
        </svg>
      </span>
        </div>
      </template>
    </Cards>
  </div>

</template>

<style scoped>

</style>