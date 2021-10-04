<script setup>
import Alerts from '.././UI/Alerts/AlertsTest.vue'
import {ExclamationIcon, XCircleIcon, CheckCircleIcon} from '@heroicons/vue/outline'
</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Предупреждения</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">С описанием</h5>
  <div class="max-w-4xl mx-auto">
    <Alerts>
      <template v-slot:icon>
        <ExclamationIcon class="h-5 w-5 text-yellow-400" aria-hidden="true"/>
      </template>

      <template v-slot:header>
        <h3 class="text-sm font-medium text-yellow-800">
          Внимание
        </h3>
      </template>

      <template v-slot:text>
        <div class="mt-2 text-sm text-yellow-700">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam
            eius aperiam dolorum.
          </p>
        </div>
      </template>

    </Alerts>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Со списком</h5>
  <div class="max-w-4xl mx-auto">
    <Alerts type="list">
      <template v-slot:icon>
        <XCircleIcon class="h-5 w-5 text-red-400" aria-hidden="true"/>
      </template>

      <template v-slot:header>
        <h3 class="text-sm font-medium text-red-800">
          В вашей заявке было выявлено 2 ошибки
        </h3>
      </template>

      <template v-slot:text>
        <div class="mt-2 text-sm text-red-700">
          <ul role="list" class="list-disc pl-5 space-y-1">
            <li>
              Ваш пароль должен состоять не менее чем из 8 символов
            </li>
            <li>
              Ваш пароль должен содержать цифры
            </li>
          </ul>
        </div>
      </template>

    </Alerts>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">С действием</h5>
  <div class="max-w-4xl mx-auto">
    <Alerts type="actions">
      <template v-slot:icon>
        <CheckCircleIcon class="h-5 w-5 text-green-400" aria-hidden="true"/>
      </template>

      <template v-slot:header>
        <h3 class="text-sm font-medium text-green-800">
          Заказ выполнен
        </h3>
      </template>

      <template v-slot:text>
        <div class="mt-2 text-sm text-green-700">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
          </p>
        </div>
      </template>

      <template v-slot:button>
        <div class="mt-4">
          <div class="-mx-2 -my-1.5 flex">
            <button type="button"
                    class="focus:ring-green-600 bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50">
              Посмотреть статус
            </button>
            <button type="button"
                    class="focus:ring-green-600 bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 ml-3">
              Закрыть
            </button>
          </div>
        </div>
      </template>

    </Alerts>
  </div>

</template>

<style scoped>

</style>