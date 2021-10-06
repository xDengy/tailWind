<script setup>
import Checkbox from '../UI/Checkbox/Checkbox.vue'
import CheckboxContent from '../UI/Checkbox/CheckboxContent.vue'
import CheckboxItem from '../UI/Checkbox/CheckboxItem.vue'
import CheckboxTitle from '../UI/Checkbox/CheckboxTitle.vue'
import CheckboxText from '../UI/Checkbox/CheckboxText.vue'

const members = [
  { id: 1, name: 'Анита Блэк' },
  { id: 2, name: 'Коди Фишер' },
  { id: 3, name: 'Кортни Генри' },
  { id: 4, name: 'Кэтрин Мерфи' },
  { id: 5, name: 'Тереза Вебб' },
]
</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Флажки</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">Список флажков справа</h5>
  <div class="w-full max-w-lg mx-auto">
      <Checkbox>
        <CheckboxContent>
          <CheckboxItem name="comments">
            <CheckboxTitle name="comments">
              Комментарии
            </CheckboxTitle>
            <CheckboxText name="comments">
              Получать уведомления, когда кто-то публикует комментарий к публикации.
            </CheckboxText>
          </CheckboxItem>
        </CheckboxContent>

        <CheckboxContent>
          <CheckboxItem name="candidates">
            <CheckboxTitle name="candidates">
              Кандидаты
            </CheckboxTitle>
            <CheckboxText name="candidates">
              Получать уведомления, когда кандидат подает заявку на работу.
            </CheckboxText>
          </CheckboxItem>
        </CheckboxContent>

        <CheckboxContent>
          <CheckboxItem name="offers">
            <CheckboxTitle name="offers">
              Предложения
            </CheckboxTitle>
            <CheckboxText name="offers">
              Получать уведомления, когда кандидат принимает или отклоняет предложение.
            </CheckboxText>
          </CheckboxItem>
        </CheckboxContent>
      </Checkbox>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Простой список с заголовком </h5>
  <div class="w-full max-w-lg mx-auto">
    <Checkbox type="members" :items="members" />
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Список с описанием</h5>
  <div class="w-full max-w-lg mx-auto">
    <Checkbox type="leftNotifications">
      <CheckboxContent type="leftNotifications">
        <CheckboxItem type="leftNotifications" name="comments">
          <CheckboxTitle name="comments">
            Комментарии
          </CheckboxTitle>
          <CheckboxText name="comments">
            Получать уведомления, когда кто-то публикует комментарий к публикации.
          </CheckboxText>
        </CheckboxItem>
      </CheckboxContent>

      <CheckboxContent type="leftNotifications">
        <CheckboxItem type="leftNotifications" name="candidates">
          <CheckboxTitle name="candidates">
            Кандидаты
          </CheckboxTitle>
          <CheckboxText name="candidates">
            Получать уведомления, когда кандидат подает заявку на работу.
          </CheckboxText>
        </CheckboxItem>
      </CheckboxContent>

      <CheckboxContent type="leftNotifications">
        <CheckboxItem type="leftNotifications" name="offers">
          <CheckboxTitle name="offers">
            Предложения
          </CheckboxTitle>
          <CheckboxText name="offers">
            Получать уведомления, когда кандидат принимает или отклоняет предложение.
          </CheckboxText>
        </CheckboxItem>
      </CheckboxContent>
    </Checkbox>
  </div>
</template>

<style scoped>

</style>