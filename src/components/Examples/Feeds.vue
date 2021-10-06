<script setup>
import Feeds from '../UI/Feed/Feed.vue'
import {CheckIcon, ThumbUpIcon, UserIcon} from "@heroicons/vue/outline";
import {simple, stacked, multiple} from '../Arrays/FeedArrays.vue';
</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Лента</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">Простая с иконками</h5>
  <div class="max-w-xl mx-auto px-6">
    <Feeds :items="simple" />
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Объединенная с аватарами</h5>
  <div class="max-w-lg mx-auto px-6">
    <Feeds :items="stacked" />
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">С несколькими типами элементов</h5>
  <div class="max-w-lg mx-auto px-6">
    <Feeds :items="multiple" />
  </div>
</template>

<style scoped>

</style>