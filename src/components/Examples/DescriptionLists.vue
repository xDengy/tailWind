<script setup>
import DescriptionList from '../UI/DescriptionList/DescriptionList.vue'
import DescriptionListContent from '../UI/DescriptionList/DescriptionListContent.vue'
import DescriptionListHeader from '../UI/DescriptionList/DescriptionListHeader.vue'
import DescriptionListItems from '../UI/DescriptionList/DescriptionListItems.vue'
import DescriptionListItem from '../UI/DescriptionList/DescriptionListItem.vue'
import DescriptionListKey from '../UI/DescriptionList/DescriptionListKey.vue'
import DescriptionListSubtitle from '../UI/DescriptionList/DescriptionListSubtitle.vue'
import DescriptionListTitle from '../UI/DescriptionList/DescriptionListTitle.vue'
import DescriptionListValue from '../UI/DescriptionList/DescriptionListValue.vue'
import {PaperClipIcon} from "@heroicons/vue/solid";
</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Список описаний</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">Окно прижатое к левому краю</h5>
  <div class="flex mx-auto max-w-4xl">
    <DescriptionList>
      <DescriptionListHeader>
        <DescriptionListTitle>
          Информация о заявителе
        </DescriptionListTitle>

        <DescriptionListSubtitle>
          Личные данные и заявление.
        </DescriptionListSubtitle>
      </DescriptionListHeader>

      <DescriptionListContent>
        <DescriptionListItems>
          <DescriptionListItem>
            <DescriptionListKey>
              Полное имя
            </DescriptionListKey>

            <DescriptionListValue>
              Марго Фостер
            </DescriptionListValue>
          </DescriptionListItem>

          <DescriptionListItem>
            <DescriptionListKey>
              Приложение для
            </DescriptionListKey>

            <DescriptionListValue>
              Backend разработчика
            </DescriptionListValue>
          </DescriptionListItem>

          <DescriptionListItem>
            <DescriptionListKey>
              Адрес электронной почты
            </DescriptionListKey>

            <DescriptionListValue>
              margotfoster@example.com
            </DescriptionListValue>
          </DescriptionListItem>

          <DescriptionListItem>
            <DescriptionListKey>
              Пожелания по зарплате
            </DescriptionListKey>

            <DescriptionListValue>
              120,000 руб.
            </DescriptionListValue>
          </DescriptionListItem>

          <DescriptionListItem>
            <DescriptionListKey>
              О себе
            </DescriptionListKey>

            <DescriptionListValue>
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure
              nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </DescriptionListValue>
          </DescriptionListItem>

          <DescriptionListItem>
            <DescriptionListKey>
              Вложения
            </DescriptionListKey>

            <DescriptionListValue>
              <ul role="list" class="border border-gray-200 rounded-md divide-y divide-gray-200">
                <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div class="w-0 flex-1 flex items-center">
                    <PaperClipIcon class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true"/>
                    <span class="ml-2 flex-1 w-0 truncate">
                    resume_back_end_developer.pdf
                  </span>
                  </div>
                  <div class="ml-4 flex-shrink-0">
                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                      Загрузить
                    </a>
                  </div>
                </li>
                <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div class="w-0 flex-1 flex items-center">
                    <PaperClipIcon class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true"/>
                    <span class="ml-2 flex-1 w-0 truncate">
                    coverletter_back_end_developer.pdf
                  </span>
                  </div>
                  <div class="ml-4 flex-shrink-0">
                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                      Загрузить
                    </a>
                  </div>
                </li>
              </ul>
            </DescriptionListValue>
          </DescriptionListItem>

        </DescriptionListItems>
      </DescriptionListContent>
    </DescriptionList>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Окно с двумя столбцами</h5>
  <div class="flex mx-auto max-w-4xl">
    <DescriptionList>
      <DescriptionListHeader>
        <DescriptionListTitle>
          Информация о заявителе
        </DescriptionListTitle>

        <DescriptionListSubtitle>
          Личные данные и заявление.
        </DescriptionListSubtitle>
      </DescriptionListHeader>

      <DescriptionListContent type="column">
        <DescriptionListItems type="column">
          <DescriptionListItem type="column" col="1">
            <DescriptionListKey>
              Полное имя
            </DescriptionListKey>

            <DescriptionListValue>
              Марго Фостер
            </DescriptionListValue>
          </DescriptionListItem>

          <DescriptionListItem type="column" col="1">
            <DescriptionListKey>
              Приложение для
            </DescriptionListKey>

            <DescriptionListValue>
              Backend разработчика
            </DescriptionListValue>
          </DescriptionListItem>

          <DescriptionListItem type="column" col="1">
            <DescriptionListKey>
              Адрес электронной почты
            </DescriptionListKey>

            <DescriptionListValue>
              margotfoster@example.com
            </DescriptionListValue>
          </DescriptionListItem>

          <DescriptionListItem type="column" col="1">
            <DescriptionListKey>
              Пожелания по зарплате
            </DescriptionListKey>

            <DescriptionListValue>
              120,000 руб.
            </DescriptionListValue>
          </DescriptionListItem>

          <DescriptionListItem type="column" col="2">
            <DescriptionListKey>
              О себе
            </DescriptionListKey>

            <DescriptionListValue>
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure
              nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </DescriptionListValue>
          </DescriptionListItem>

          <DescriptionListItem type="column" col="2">
            <DescriptionListKey>
              Вложения
            </DescriptionListKey>

            <DescriptionListValue>
              <ul role="list" class="border border-gray-200 rounded-md divide-y divide-gray-200">
                <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div class="w-0 flex-1 flex items-center">
                    <PaperClipIcon class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true"/>
                    <span class="ml-2 flex-1 w-0 truncate">
                    resume_back_end_developer.pdf
                  </span>
                  </div>
                  <div class="ml-4 flex-shrink-0">
                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                      Загрузить
                    </a>
                  </div>
                </li>
                <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div class="w-0 flex-1 flex items-center">
                    <PaperClipIcon class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true"/>
                    <span class="ml-2 flex-1 w-0 truncate">
                    coverletter_back_end_developer.pdf
                  </span>
                  </div>
                  <div class="ml-4 flex-shrink-0">
                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                      Загрузить
                    </a>
                  </div>
                </li>
              </ul>
            </DescriptionListValue>
          </DescriptionListItem>

        </DescriptionListItems>
      </DescriptionListContent>
    </DescriptionList>
  </div>
</template>

<style scoped>

</style>
