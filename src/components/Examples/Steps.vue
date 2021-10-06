<script setup>
import Step from '../UI/Step/Step.vue'
import {steps, circlesSteps} from '../Arrays/StepArrays.vue'
</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Шаги</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">Простые</h5>
  <div class="p-6 mx-auto max-w-7xl">
      <Step :items="steps" />
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Круглые с текстом</h5>
  <div class="px-4 flex justify-center sm:px-6 lg:px-8 py-12">
    <Step :items="circlesSteps" />
  </div>
</template>

<style scoped>

</style>