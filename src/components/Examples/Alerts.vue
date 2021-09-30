<script setup>
import Alerts from '.././UI/Alerts/Alerts.vue'
import AlertsHeader from '.././UI/Alerts/AlertsHeader.vue'
import AlertsContent from '.././UI/Alerts/AlertsContent.vue'
import AlertsButton from '.././UI/Alerts/AlertsButton.vue'
</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Предупреждения</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">С описанием</h5>
  <div class="max-w-4xl mx-auto">
      <Alerts>
        <AlertsHeader>
          Внимание
        </AlertsHeader>
        <AlertsContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
          </p>
        </AlertsContent>
      </Alerts>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Со списком</h5>
  <div class="max-w-4xl mx-auto">
    <Alerts type="list">
      <AlertsHeader type="list">
        В вашей заявке было выявлено 2 ошибки
      </AlertsHeader>
      <AlertsContent type="list">
        <li>
          Ваш пароль должен состоять не менее чем из 8 символов
        </li>
        <li>
          Ваш пароль должен содержать цифры
        </li>
      </AlertsContent>
    </Alerts>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">С действием</h5>
  <div class="max-w-4xl mx-auto">
    <Alerts type="actions">
      <AlertsHeader type="actions">
        Заказ выполнен
      </AlertsHeader>
      <AlertsContent type="actions">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
        </p>
      </AlertsContent>
      <AlertsContent type="button">
        <AlertsButton>
          Посмотреть статус
        </AlertsButton>

        <AlertsButton type="right">
          Закрыть
        </AlertsButton>
      </AlertsContent>
    </Alerts>
  </div>

</template>

<style scoped>

</style>