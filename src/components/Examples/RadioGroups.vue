<script setup>
import Simple from '.././UI/RadioGroups/Stacked.vue'

const plans = [
  { name: 'Hobby', ram: '8GB', cpus: '4 CPUs', disk: '160 GB SSD disk', price: '$40' },
  { name: 'Startup', ram: '12GB', cpus: '6 CPUs', disk: '256 GB SSD disk', price: '$80' },
  { name: 'Business', ram: '16GB', cpus: '8 CPUs', disk: '512 GB SSD disk', price: '$160' },
  { name: 'Enterprise', ram: '32GB', cpus: '12 CPUs', disk: '1024 GB SSD disk', price: '$240' },
]
</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Radio Groups</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">Stacked cards</h5>
  <div class="w-full max-w-xl mx-auto">
    <Simple :items="plans">
      Server size
    </Simple>
  </div>
</template>

<style scoped>

</style>