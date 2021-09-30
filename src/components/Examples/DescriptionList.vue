<script setup>
import DescriptionList from '.././UI/DescriptionLists/DescriptionList.vue'
import DescriptionListsContent from '.././UI/DescriptionLists/DescriptionListsContent.vue'
import DescriptionListsHeader from '.././UI/DescriptionLists/DescriptionListsHeader.vue'
import DescriptionListsItems from '.././UI/DescriptionLists/DescriptionListsItems.vue'
import DescriptionListsItem from '.././UI/DescriptionLists/DescriptionListsItem.vue'
import DescriptionListsKey from '.././UI/DescriptionLists/DescriptionListsKey.vue'
import DescriptionListsSubtitle from '.././UI/DescriptionLists/DescriptionListsSubtitle.vue'
import DescriptionListsTitle from '.././UI/DescriptionLists/DescriptionListsTitle.vue'
import DescriptionListsValue from '.././UI/DescriptionLists/DescriptionListsValue.vue'
import {PaperClipIcon} from "@heroicons/vue/solid";
</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Список описаний</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">Окно прижатое к левому краю</h5>
  <div class="flex mx-auto max-w-4xl">
    <DescriptionList>
      <DescriptionListsHeader>
        <DescriptionListsTitle>
          Информация о заявителе
        </DescriptionListsTitle>

        <DescriptionListsSubtitle>
          Личные данные и заявление.
        </DescriptionListsSubtitle>
      </DescriptionListsHeader>

      <DescriptionListsContent>
        <DescriptionListsItems>
          <DescriptionListsItem>
            <DescriptionListsKey>
              Полное имя
            </DescriptionListsKey>

            <DescriptionListsValue>
              Марго Фостер
            </DescriptionListsValue>
          </DescriptionListsItem>

          <DescriptionListsItem>
            <DescriptionListsKey>
              Приложение для
            </DescriptionListsKey>

            <DescriptionListsValue>
              Backend разработчика
            </DescriptionListsValue>
          </DescriptionListsItem>

          <DescriptionListsItem>
            <DescriptionListsKey>
              Адрес электронной почты
            </DescriptionListsKey>

            <DescriptionListsValue>
              margotfoster@example.com
            </DescriptionListsValue>
          </DescriptionListsItem>

          <DescriptionListsItem>
            <DescriptionListsKey>
              Пожелания по зарплате
            </DescriptionListsKey>

            <DescriptionListsValue>
              120,000 руб.
            </DescriptionListsValue>
          </DescriptionListsItem>

          <DescriptionListsItem>
            <DescriptionListsKey>
              О себе
            </DescriptionListsKey>

            <DescriptionListsValue>
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure
              nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </DescriptionListsValue>
          </DescriptionListsItem>

          <DescriptionListsItem>
            <DescriptionListsKey>
              Вложения
            </DescriptionListsKey>

            <DescriptionListsValue>
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
            </DescriptionListsValue>
          </DescriptionListsItem>

        </DescriptionListsItems>
      </DescriptionListsContent>
    </DescriptionList>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Окно с двумя столбцами</h5>
  <div class="flex mx-auto max-w-4xl">
    <DescriptionList>
      <DescriptionListsHeader>
        <DescriptionListsTitle>
          Информация о заявителе
        </DescriptionListsTitle>

        <DescriptionListsSubtitle>
          Личные данные и заявление.
        </DescriptionListsSubtitle>
      </DescriptionListsHeader>

      <DescriptionListsContent type="column">
        <DescriptionListsItems type="column">
          <DescriptionListsItem type="column" col="1">
            <DescriptionListsKey>
              Полное имя
            </DescriptionListsKey>

            <DescriptionListsValue>
              Марго Фостер
            </DescriptionListsValue>
          </DescriptionListsItem>

          <DescriptionListsItem type="column" col="1">
            <DescriptionListsKey>
              Приложение для
            </DescriptionListsKey>

            <DescriptionListsValue>
              Backend разработчика
            </DescriptionListsValue>
          </DescriptionListsItem>

          <DescriptionListsItem type="column" col="1">
            <DescriptionListsKey>
              Адрес электронной почты
            </DescriptionListsKey>

            <DescriptionListsValue>
              margotfoster@example.com
            </DescriptionListsValue>
          </DescriptionListsItem>

          <DescriptionListsItem type="column" col="1">
            <DescriptionListsKey>
              Пожелания по зарплате
            </DescriptionListsKey>

            <DescriptionListsValue>
              120,000 руб.
            </DescriptionListsValue>
          </DescriptionListsItem>

          <DescriptionListsItem type="column" col="2">
            <DescriptionListsKey>
              О себе
            </DescriptionListsKey>

            <DescriptionListsValue>
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure
              nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </DescriptionListsValue>
          </DescriptionListsItem>

          <DescriptionListsItem type="column" col="2">
            <DescriptionListsKey>
              Вложения
            </DescriptionListsKey>

            <DescriptionListsValue>
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
            </DescriptionListsValue>
          </DescriptionListsItem>

        </DescriptionListsItems>
      </DescriptionListsContent>
    </DescriptionList>
  </div>
</template>

<style scoped>

</style>
