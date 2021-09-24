<script setup>
import RoundedAvatars from '.././UI/Avatars/RoundedAvatars.vue'
import NotificationAvatars from '.././UI/Avatars/NotificationAvatars.vue'
import Icon from '.././UI/Avatars/Icon.vue'
import Initials from '.././UI/Avatars/Initials.vue'
import AvatarGroup from '.././UI/Avatars/AvatarGroup.vue'
import AvatarGroupImages from '.././UI/Avatars/AvatarGroupImages.vue'
import AvatarText from '.././UI/Avatars/AvatarText.vue'
</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Avatars</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">Circular avatars</h5>
  <div class="flex justify-around items-end w-full max-w-lg mx-auto">
    <RoundedAvatars />
    <RoundedAvatars size="8" />
    <RoundedAvatars size="10" />
    <RoundedAvatars size="12" />
    <RoundedAvatars size="14" />
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Rounded avatars</h5>
  <div class="flex justify-around items-end w-full max-w-lg mx-auto">
    <RoundedAvatars rounded="md" />
    <RoundedAvatars rounded="md" size="8" />
    <RoundedAvatars rounded="md" size="10" />
    <RoundedAvatars rounded="md" size="12" />
    <RoundedAvatars rounded="md" size="14" />
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Circular avatars with top notification</h5>
  <div class="flex justify-around items-end w-full max-w-lg mx-auto">
    <NotificationAvatars/>
    <NotificationAvatars size="8" color="red-400" iconSize="2"/>
    <NotificationAvatars size="10" color="green-400" iconSize="2.5"/>
    <NotificationAvatars size="12" iconSize="3"/>
    <NotificationAvatars size="14" color="red-400" iconSize="3.5"/>
    <NotificationAvatars size="16" color="green-400" iconSize="4"/>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Rounded avatars with top notification</h5>
  <div class="flex justify-around items-end w-full max-w-lg mx-auto">
    <NotificationAvatars rounded="md" type="roundTop"/>
    <NotificationAvatars rounded="md" type="roundTop" size="8" color="red-400" iconSize="2"/>
    <NotificationAvatars rounded="md" type="roundTop" size="10" color="green-400" iconSize="2.5"/>
    <NotificationAvatars rounded="md" type="roundTop" size="12" iconSize="3"/>
    <NotificationAvatars rounded="md" type="roundTop" size="14" color="red-400" iconSize="3.5"/>
    <NotificationAvatars rounded="md" type="roundTop" size="16" color="green-400" iconSize="4"/>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Circular avatars with bottom notification</h5>
  <div class="flex justify-around items-end w-full max-w-lg mx-auto">
    <NotificationAvatars type="circBot"/>
    <NotificationAvatars type="circBot" size="8" color="red-400" iconSize="2"/>
    <NotificationAvatars type="circBot" size="10" color="green-400" iconSize="2.5"/>
    <NotificationAvatars type="circBot" size="12" iconSize="3"/>
    <NotificationAvatars type="circBot" size="14" color="red-400" iconSize="3.5"/>
    <NotificationAvatars type="circBot" size="16" color="green-400" iconSize="4"/>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Rounded avatars with bottom notification</h5>
  <div class="flex justify-around items-end w-full max-w-lg mx-auto">
    <NotificationAvatars rounded="md" type="roundBot"/>
    <NotificationAvatars rounded="md" type="roundBot" size="8" color="red-400" iconSize="2"/>
    <NotificationAvatars rounded="md" type="roundBot" size="10" color="green-400" iconSize="2.5"/>
    <NotificationAvatars rounded="md" type="roundBot" size="12" iconSize="3"/>
    <NotificationAvatars rounded="md" type="roundBot" size="14" color="red-400" iconSize="3.5"/>
    <NotificationAvatars rounded="md" type="roundBot" size="16" color="green-400" iconSize="4"/>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Circular avatars with placeholder icon</h5>
  <div class="flex justify-around items-end w-full max-w-lg mx-auto">
    <Icon/>
    <Icon size="8" />
    <Icon size="10" />
    <Icon size="12" />
    <Icon size="14" />
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Circular avatars with placeholder initials</h5>
  <div class="flex justify-around items-end w-full max-w-lg mx-auto">
    <Initials textSize="xs" />
    <Initials size="8" textSize="sm" />
    <Initials size="10" />
    <Initials size="12" textSize="lg" />
    <Initials size="14" textSize="xl" />
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Avatar group stacked bottom to top</h5>
  <div class="flex justify-around items-end w-full max-w-lg mx-auto">
    <AvatarGroup>
      <AvatarGroupImages />
      <AvatarGroupImages />
      <AvatarGroupImages />
      <AvatarGroupImages />
    </AvatarGroup>

    <AvatarGroup size="2">
      <AvatarGroupImages imgSize="8" />
      <AvatarGroupImages imgSize="8" />
      <AvatarGroupImages imgSize="8" />
      <AvatarGroupImages imgSize="8" />
    </AvatarGroup>

    <AvatarGroup size="2">
      <AvatarGroupImages imgSize="10" />
      <AvatarGroupImages imgSize="10" />
      <AvatarGroupImages imgSize="10" />
      <AvatarGroupImages imgSize="10" />
    </AvatarGroup>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Avatar group stacked top to bottom</h5>
  <div class="flex justify-around items-end w-full max-w-lg mx-auto">
    <AvatarGroup type="top" >
      <AvatarGroupImages indexSize="30" type="top" />
      <AvatarGroupImages indexSize="20" type="top" />
      <AvatarGroupImages indexSize="10" type="top" />
      <AvatarGroupImages indexSize="0" type="top" />
    </AvatarGroup>

    <AvatarGroup type="top" size="2">
      <AvatarGroupImages indexSize="30" imgSize="8" type="top" />
      <AvatarGroupImages indexSize="20" imgSize="8" type="top" />
      <AvatarGroupImages indexSize="10" imgSize="8" type="top" />
      <AvatarGroupImages indexSize="0" imgSize="8" type="top" />
    </AvatarGroup>

    <AvatarGroup type="top" size="2">
      <AvatarGroupImages indexSize="30" imgSize="10" type="top" />
      <AvatarGroupImages indexSize="20" imgSize="10" type="top" />
      <AvatarGroupImages indexSize="10" imgSize="10" type="top" />
      <AvatarGroupImages indexSize="0" imgSize="10" type="top" />
    </AvatarGroup>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">With text</h5>
  <div class="flex justify-around items-end w-full max-w-lg mx-auto">
    <AvatarText />
  </div>
</template>

<style scoped>

</style>