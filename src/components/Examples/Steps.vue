<script setup>
import Steps from '.././UI/Steps/Steps.vue'

const steps = [
  { id: 'Step 1', name: 'Job details', href: '#', status: 'complete' },
  { id: 'Step 2', name: 'Application form', href: '#', status: 'current' },
  { id: 'Step 3', name: 'Preview', href: '#', status: 'upcoming' },
]
const circlesSteps = [
  { name: 'Create account', description: 'Vitae sed mi luctus laoreet.', href: '#', status: 'complete' },
  {
    name: 'Profile information',
    description: 'Cursus semper viverra facilisis et et some more.',
    href: '#',
    status: 'current',
  },
  { name: 'Business information', description: 'Penatibus eu quis ante.', href: '#', status: 'upcoming' },
  { name: 'Theme', description: 'Faucibus nec enim leo et.', href: '#', status: 'upcoming' },
  { name: 'Preview', description: 'Iusto et officia maiores porro ad non quas.', href: '#', status: 'upcoming' },
]

</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Steps</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">Simple</h5>
  <div class="p-6 mx-auto max-w-7xl">
      <Steps :items="steps" />
  </div>

  <div class="px-4 flex justify-center sm:px-6 lg:px-8 py-12">
    <Steps :items="circlesSteps" type="circles" />
  </div>
</template>

<style scoped>

</style>