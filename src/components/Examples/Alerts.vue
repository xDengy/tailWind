<script setup>
import Alert from '../UI/Alert/Alert.vue'
import AlertHeader from '../UI/Alert/AlertHeader.vue'
import AlertContent from '../UI/Alert/AlertContent.vue'
import AlertButton from '../UI/Alert/AlertButton.vue'
</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Предупреждения</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">С описанием</h5>
  <div class="max-w-4xl mx-auto">
      <Alert>
        <AlertHeader>
          Внимание
        </AlertHeader>
        <AlertContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
          </p>
        </AlertContent>
      </Alert>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Со списком</h5>
  <div class="max-w-4xl mx-auto">
    <Alert type="list">
      <AlertHeader type="list">
        В вашей заявке было выявлено 2 ошибки
      </AlertHeader>
      <AlertContent type="list">
        <li>
          Ваш пароль должен состоять не менее чем из 8 символов
        </li>
        <li>
          Ваш пароль должен содержать цифры
        </li>
      </AlertContent>
    </Alert>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">С действием</h5>
  <div class="max-w-4xl mx-auto">
    <Alert type="actions">
      <AlertHeader type="actions">
        Заказ выполнен
      </AlertHeader>
      <AlertContent type="actions">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
        </p>
      </AlertContent>
      <AlertContent type="button">
        <AlertButton>
          Посмотреть статус
        </AlertButton>

        <AlertButton type="right">
          Закрыть
        </AlertButton>
      </AlertContent>
    </Alert>
  </div>

</template>

<style scoped>

</style>