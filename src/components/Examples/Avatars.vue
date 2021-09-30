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
</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Аватары</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">Круглые аватары</h5>
  <div class="flex justify-around items-end w-full max-w-lg mx-auto">
    <RoundedAvatars
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
    <RoundedAvatars size="8"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
    <RoundedAvatars size="10"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
    <RoundedAvatars size="12"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
    <RoundedAvatars size="14"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Квадратные аватары</h5>
  <div class="flex justify-around items-end w-full max-w-lg mx-auto">
    <RoundedAvatars rounded="md"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
    <RoundedAvatars rounded="md" size="8"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
    <RoundedAvatars rounded="md" size="10"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
    <RoundedAvatars rounded="md" size="12"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
    <RoundedAvatars rounded="md" size="14"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Круглые аватары с уведомлением сверху</h5>
  <div class="flex justify-around items-end w-full max-w-lg mx-auto">
    <NotificationAvatarsGroup>
      <NotificationAvatars
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <NotificationAvatarsIcon/>
    </NotificationAvatarsGroup>

    <NotificationAvatarsGroup>
      <NotificationAvatars size="8"
                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <NotificationAvatarsIcon color="red-400" iconSize="2"/>
    </NotificationAvatarsGroup>

    <NotificationAvatarsGroup>
      <NotificationAvatars size="10"
                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <NotificationAvatarsIcon color="green-400" iconSize="2.5"/>
    </NotificationAvatarsGroup>

    <NotificationAvatarsGroup>
      <NotificationAvatars size="12"
                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <NotificationAvatarsIcon iconSize="3"/>
    </NotificationAvatarsGroup>

    <NotificationAvatarsGroup>
      <NotificationAvatars size="14"
                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <NotificationAvatarsIcon color="red-400" iconSize="3.5"/>
    </NotificationAvatarsGroup>

    <NotificationAvatarsGroup>
      <NotificationAvatars size="16"
                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <NotificationAvatarsIcon color="green-400" iconSize="4"/>
    </NotificationAvatarsGroup>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Квадратные аватары с уведомлением сверху</h5>
  <div class="flex justify-around items-end w-full max-w-lg mx-auto">
    <NotificationAvatarsGroup>
      <NotificationAvatars rounded="md"
                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <NotificationAvatarsIcon type="roundTop"/>
    </NotificationAvatarsGroup>

    <NotificationAvatarsGroup>
      <NotificationAvatars rounded="md" size="8"
                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <NotificationAvatarsIcon color="red-400" iconSize="2" type="roundTop"/>
    </NotificationAvatarsGroup>

    <NotificationAvatarsGroup>
      <NotificationAvatars rounded="md" size="10"
                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <NotificationAvatarsIcon color="green-400" iconSize="2.5" type="roundTop"/>
    </NotificationAvatarsGroup>

    <NotificationAvatarsGroup>
      <NotificationAvatars rounded="md" size="12"
                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <NotificationAvatarsIcon iconSize="3" type="roundTop"/>
    </NotificationAvatarsGroup>

    <NotificationAvatarsGroup>
      <NotificationAvatars rounded="md" size="14"
                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <NotificationAvatarsIcon color="red-400" iconSize="3.5" type="roundTop"/>
    </NotificationAvatarsGroup>

    <NotificationAvatarsGroup>
      <NotificationAvatars rounded="md" size="16"
                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <NotificationAvatarsIcon color="green-400" iconSize="4" type="roundTop"/>
    </NotificationAvatarsGroup>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Круглые аватары с уведомлением снизу</h5>
  <div class="flex justify-around items-end w-full max-w-lg mx-auto">
    <NotificationAvatarsGroup>
      <NotificationAvatars
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <NotificationAvatarsIcon type="circBot"/>
    </NotificationAvatarsGroup>

    <NotificationAvatarsGroup>
      <NotificationAvatars size="8"
                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <NotificationAvatarsIcon color="red-400" iconSize="2" type="circBot"/>
    </NotificationAvatarsGroup>

    <NotificationAvatarsGroup>
      <NotificationAvatars size="10"
                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <NotificationAvatarsIcon color="green-400" iconSize="2.5" type="circBot"/>
    </NotificationAvatarsGroup>

    <NotificationAvatarsGroup>
      <NotificationAvatars size="12"
                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <NotificationAvatarsIcon iconSize="3" type="circBot"/>
    </NotificationAvatarsGroup>

    <NotificationAvatarsGroup>
      <NotificationAvatars size="14"
                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <NotificationAvatarsIcon color="red-400" iconSize="3.5" type="circBot"/>
    </NotificationAvatarsGroup>

    <NotificationAvatarsGroup>
      <NotificationAvatars size="16"
                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <NotificationAvatarsIcon color="green-400" iconSize="4" type="circBot"/>
    </NotificationAvatarsGroup>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Квадратные аватары с уведомлением снизу</h5>
  <div class="flex justify-around items-end w-full max-w-lg mx-auto">
    <NotificationAvatarsGroup>
      <NotificationAvatars rounded="md"
                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <NotificationAvatarsIcon type="roundBot"/>
    </NotificationAvatarsGroup>

    <NotificationAvatarsGroup>
      <NotificationAvatars rounded="md" size="8"
                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <NotificationAvatarsIcon color="red-400" iconSize="2" type="roundBot"/>
    </NotificationAvatarsGroup>

    <NotificationAvatarsGroup>
      <NotificationAvatars rounded="md" size="10"
                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <NotificationAvatarsIcon color="green-400" iconSize="2.5" type="roundBot"/>
    </NotificationAvatarsGroup>

    <NotificationAvatarsGroup>
      <NotificationAvatars rounded="md" size="12"
                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <NotificationAvatarsIcon iconSize="3" type="roundBot"/>
    </NotificationAvatarsGroup>

    <NotificationAvatarsGroup>
      <NotificationAvatars rounded="md" size="14"
                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <NotificationAvatarsIcon color="red-400" iconSize="3.5" type="roundBot"/>
    </NotificationAvatarsGroup>

    <NotificationAvatarsGroup>
      <NotificationAvatars rounded="md" size="16"
                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <NotificationAvatarsIcon color="green-400" iconSize="4" type="roundBot"/>
    </NotificationAvatarsGroup>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Круглые аватары с иконкой</h5>
  <div class="flex justify-around items-end w-full max-w-lg mx-auto">
    <Icon/>
    <Icon size="8"/>
    <Icon size="10"/>
    <Icon size="12"/>
    <Icon size="14"/>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Круглые аватары с инициалами</h5>
  <div class="flex justify-around items-end w-full max-w-lg mx-auto">
    <Initials textSize="xs">
      TW
    </Initials>

    <Initials size="8" textSize="sm">
      TW
    </Initials>

    <Initials size="10">
      TW
    </Initials>

    <Initials size="12" textSize="lg">
      TW
    </Initials>

    <Initials size="14" textSize="xl">
      TW
    </Initials>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Группа аватаров объединенная снизу вверх</h5>
  <div class="flex justify-around items-end w-full max-w-lg mx-auto">
    <AvatarGroup>
      <AvatarGroupImages
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <AvatarGroupImages
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <AvatarGroupImages
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <AvatarGroupImages
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
    </AvatarGroup>

    <AvatarGroup size="2">
      <AvatarGroupImages imgSize="8"
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <AvatarGroupImages imgSize="8"
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <AvatarGroupImages imgSize="8"
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <AvatarGroupImages imgSize="8"
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
    </AvatarGroup>

    <AvatarGroup size="2">
      <AvatarGroupImages imgSize="10"
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <AvatarGroupImages imgSize="10"
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <AvatarGroupImages imgSize="10"
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <AvatarGroupImages imgSize="10"
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
    </AvatarGroup>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Группа аватаров объединенная сверху вниз</h5>
  <div class="flex justify-around items-end w-full max-w-lg mx-auto">
    <AvatarGroup type="top">
      <AvatarGroupImages indexSize="30" type="top"
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <AvatarGroupImages indexSize="20" type="top"
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <AvatarGroupImages indexSize="10" type="top"
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <AvatarGroupImages indexSize="0" type="top"
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
    </AvatarGroup>

    <AvatarGroup type="top" size="2">
      <AvatarGroupImages indexSize="30" imgSize="8" type="top"
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <AvatarGroupImages indexSize="20" imgSize="8" type="top"
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <AvatarGroupImages indexSize="10" imgSize="8" type="top"
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <AvatarGroupImages indexSize="0" imgSize="8" type="top"
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
    </AvatarGroup>

    <AvatarGroup type="top" size="2">
      <AvatarGroupImages indexSize="30" imgSize="10" type="top"
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <AvatarGroupImages indexSize="20" imgSize="10" type="top"
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <AvatarGroupImages indexSize="10" imgSize="10" type="top"
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
      <AvatarGroupImages indexSize="0" imgSize="10" type="top"
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
    </AvatarGroup>
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