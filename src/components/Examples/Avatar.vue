<script setup>
import RoundedAvatars from '.././UI/Avatars/RoundedAvatars.vue'
import NotificationAvatars from '../UI/Avatars/Notification/NotificationAvatars.vue'
import NotificationAvatarsGroup from '../UI/Avatars/Notification/NotificationAvatarsGroup.vue'
import NotificationAvatarsIcon from '../UI/Avatars/Notification/NotificationAvatarsIcon.vue'
import Icon from '.././UI/Avatars/Icon.vue'
import Initials from '.././UI/Avatars/Initials.vue'
import AvatarGroup from '.././UI/Avatars/AvatarGroup.vue'
import AvatarGroupImages from '.././UI/Avatars/AvatarGroupImages.vue'
import AvatarProfile from '../UI/Avatars/Profile/AvatarProfile.vue'
import AvatarProfileGroup from '../UI/Avatars/Profile/AvatarProfileGroup.vue'
import AvatarProfileImage from '../UI/Avatars/Profile/AvatarProfileImage.vue'
import AvatarProfileText from '../UI/Avatars/Profile/AvatarProfileText.vue'

const avatars = {
  simple: [
    [
      {
        size: 6,
        rounded: 'full',
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        size: 8,
        rounded: 'full',
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        size: 10,
        rounded: 'full',
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      {
        size: 12,
        rounded: 'full',
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      {
        size: 14,
        rounded: 'full',
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
    ],
    [
      {
        size: 6,
        rounded: 'md',
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      {
        size: 8,
        rounded: 'md',
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      {
        size: 10,
        rounded: 'md',
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      {
        size: 12,
        rounded: 'md',
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      {
        size: 14,
        rounded: 'md',
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
    ]
  ],
  notifications: {
    full: [
      {
        size: 6,
        rounded: 'full',
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        color: 'gray-300',
        iconSize: 1.5,
      },
      {
        size: 8,
        rounded: 'full',
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        color: 'red-400',
        iconSize: 2
      },
      {
        size: 10,
        rounded: 'full',
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        color: 'green-400',
        iconSize: 2.5
      },
      {
        size: 12,
        rounded: 'full',
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        color: 'gray-300',
        iconSize: 3
      },
      {
        size: 14,
        rounded: 'full',
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        color: 'red-400',
        iconSize: 3.5
      },
      {
        size: 16,
        rounded: 'full',
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        color: 'green-400',
        iconSize: 4
      },
    ],
    md: [
      {
        size: 6,
        rounded: 'md',
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        color: 'gray-300',
        iconSize: 1.5,
      },
      {
        size: 8,
        rounded: 'md',
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        color: 'red-400',
        iconSize: 2
      },
      {
        size: 10,
        rounded: 'md',
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        color: 'green-400',
        iconSize: 2.5
      },
      {
        size: 12,
        rounded: 'md',
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        color: 'gray-300',
        iconSize: 3
      },
      {
        size: 14,
        rounded: 'md',
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        color: 'red-400',
        iconSize: 3.5
      },
      {
        size: 16,
        rounded: 'md',
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        color: 'green-400',
        iconSize: 4
      },
    ]
    },
  icons: [
    {
      size: 6
    },
    {
      size: 8
    },
    {
      size: 10
    },
    {
      size: 12
    },
    {
      size: 14
    },
  ],
  initials: [
    {
      size: 6,
      textSize: 'text-xs',
      text: 'TW'
    },
    {
      size: 8,
      textSize: 'text-sm',
      text: 'TW'
    },
    {
      size: 10,
      textSize: '',
      text: 'TW'
    },
    {
      size: 12,
      textSize: 'text-lg',
      text: 'TW'
    },
    {
      size: 14,
      textSize: 'text-xl',
      text: 'TW'
    },
  ],
  group: {
    bot: [
      [
        {
          imgSize: 6,
          src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          imgSize: 6,
          src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          imgSize: 6,
          src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          imgSize: 6,
          src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      ],
      [
        {
          imgSize: 8,
          src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          imgSize: 8,
          src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          imgSize: 8,
          src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          imgSize: 8,
          src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      ],
      [
        {
          imgSize: 10,
          src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          imgSize: 10,
          src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          imgSize: 10,
          src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          imgSize: 10,
          src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      ],
    ],

    top: [
      [
        {
          indexSize: 30,
          imgSize: 6,
          src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          indexSize: 20,
          imgSize: 6,
          src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          indexSize: 10,
          imgSize: 6,
          src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          indexSize: 0,
          imgSize: 6,
          src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      ],
      [
        {
          indexSize: 30,
          imgSize: 8,
          src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          indexSize: 20,
          imgSize: 8,
          src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          indexSize: 10,
          imgSize: 8,
          src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          indexSize: 0,
          imgSize: 8,
          src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      ],
      [
        {
          indexSize: 30,
          imgSize: 10,
          src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          indexSize: 20,
          imgSize: 10,
          src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          indexSize: 10,
          imgSize: 10,
          src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          indexSize: 0,
          imgSize: 10,
          src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      ],
    ],
  }
}
</script>
<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Аватары</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">Круглые аватары</h5>
  <div class="flex justify-around items-end w-full max-w-lg mx-auto">
    <RoundedAvatars :items="avatars.simple[0]"/>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Квадратные аватары</h5>
  <div class="flex justify-around items-end w-full max-w-lg mx-auto">
    <RoundedAvatars :items="avatars.simple[1]"/>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Круглые аватары с уведомлением сверху</h5>
  <div class="flex justify-around items-end w-full max-w-lg mx-auto">
    <NotificationAvatarsGroup :items="avatars.notifications.full"/>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Квадратные аватары с уведомлением сверху</h5>
  <div class="flex justify-around items-end w-full max-w-lg mx-auto">
    <NotificationAvatarsGroup :items="avatars.notifications.md" type="roundTop"/>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Круглые аватары с уведомлением снизу</h5>
  <div class="flex justify-around items-end w-full max-w-lg mx-auto">
    <NotificationAvatarsGroup :items="avatars.notifications.full" type="circBot"/>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Квадратные аватары с уведомлением снизу</h5>
  <div class="flex justify-around items-end w-full max-w-lg mx-auto">
    <NotificationAvatarsGroup :items="avatars.notifications.md" type="roundBot"/>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Круглые аватары с иконкой</h5>
  <div class="flex justify-around items-end w-full max-w-lg mx-auto">
    <Icon :items="avatars.icons"/>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Круглые аватары с инициалами</h5>
  <div class="flex justify-around items-end w-full max-w-lg mx-auto">
    <Initials :items="avatars.initials"/>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Группа аватаров объединенная снизу вверх</h5>
  <div class="flex justify-around items-end w-full max-w-lg mx-auto">
    <AvatarGroup :items="avatars.group.bot[0]"/>

    <AvatarGroup size="2" :items="avatars.group.bot[1]"/>

    <AvatarGroup size="2" :items="avatars.group.bot[2]"/>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Группа аватаров объединенная сверху вниз</h5>
  <div class="flex justify-around items-end w-full max-w-lg mx-auto">
    <AvatarGroup type="top" :items="avatars.group.top[0]"/>

    <AvatarGroup type="top" size="2" :items="avatars.group.top[1]"/>

    <AvatarGroup type="top" size="2" :items="avatars.group.top[2]"/>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">С текстом</h5>
  <div class="flex justify-around items-end w-full max-w-lg mx-auto">
    <AvatarProfile href="#">
      <AvatarProfileGroup>
        <AvatarProfileImage
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      </AvatarProfileGroup>
      <AvatarProfileGroup type="text">
        <AvatarProfileText>
          Том Кук
        </AvatarProfileText>

        <AvatarProfileText>
          Посмотреть профиль
        </AvatarProfileText>
      </AvatarProfileGroup>
    </AvatarProfile>
  </div>
</template>

<style scoped>

</style>