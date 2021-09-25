<script setup>
import Alerts from '.././UI/Alerts/Alerts.vue'
import AlertsHeader from '.././UI/Alerts/AlertsHeader.vue'
import AlertsContent from '.././UI/Alerts/AlertsContent.vue'
</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Alerts</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">With description</h5>
  <div class="max-w-4xl mx-auto">
      <Alerts>
        <AlertsHeader>
          Attention needed
        </AlertsHeader>
        <AlertsContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
          </p>
        </AlertsContent>
      </Alerts>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">With list</h5>
  <div class="max-w-4xl mx-auto">
    <Alerts type="list">
      <AlertsHeader type="list">
        There were 2 errors with your submission
      </AlertsHeader>
      <AlertsContent type="list">
        <li>
          Your password must be at least 8 characters
        </li>
        <li>
          Your password must include at least one pro wrestling finishing move
        </li>
      </AlertsContent>
    </Alerts>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">With actions</h5>
  <div class="max-w-4xl mx-auto">
    <Alerts type="actions">
      <AlertsHeader type="actions">
        Order completed
      </AlertsHeader>
      <AlertsContent type="actions">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
        </p>
      </AlertsContent>
    </Alerts>
  </div>

</template>

<style scoped>

</style>