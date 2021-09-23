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
</script>

<script>
import {
  PaperClipIcon
} from "@heroicons/vue/solid";

export default {
  components: {
    PaperClipIcon
  },
}
</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Description List</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">Left-aligned in card</h5>
  <div class="flex mx-auto max-w-4xl">
    <DescriptionList>
      <DescriptionListsHeader>
        <DescriptionListsTitle>
          Applicant Information
        </DescriptionListsTitle>

        <DescriptionListsSubtitle>
          Personal details and application.
        </DescriptionListsSubtitle>
      </DescriptionListsHeader>

      <DescriptionListsContent>
        <DescriptionListsItems type="left">
          <DescriptionListsItem type="left">
            <DescriptionListsKey>
              Full name
            </DescriptionListsKey>

            <DescriptionListsValue>
              Margot Foster
            </DescriptionListsValue>
          </DescriptionListsItem>

          <DescriptionListsItem type="left">
            <DescriptionListsKey>
              Application for
            </DescriptionListsKey>

            <DescriptionListsValue>
              Backend Developer
            </DescriptionListsValue>
          </DescriptionListsItem>

          <DescriptionListsItem type="left">
            <DescriptionListsKey>
              Email address
            </DescriptionListsKey>

            <DescriptionListsValue>
              margotfoster@example.com
            </DescriptionListsValue>
          </DescriptionListsItem>

          <DescriptionListsItem type="left">
            <DescriptionListsKey>
              Salary expectation
            </DescriptionListsKey>

            <DescriptionListsValue>
              $120,000
            </DescriptionListsValue>
          </DescriptionListsItem>

          <DescriptionListsItem type="left">
            <DescriptionListsKey>
              About
            </DescriptionListsKey>

            <DescriptionListsValue>
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure
              nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </DescriptionListsValue>
          </DescriptionListsItem>

          <DescriptionListsItem type="left">
            <DescriptionListsKey>
              Attachments
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
                      Download
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
                      Download
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

  <h5 class="mt-5 mb-1 font-bold text-m">Two-column in card</h5>
  <div class="flex mx-auto max-w-4xl">
    <DescriptionList>
      <DescriptionListsHeader>
        <DescriptionListsTitle>
          Applicant Information
        </DescriptionListsTitle>

        <DescriptionListsSubtitle>
          Personal details and application.
        </DescriptionListsSubtitle>
      </DescriptionListsHeader>

      <DescriptionListsContent type="column">
        <DescriptionListsItems type="column">
          <DescriptionListsItem type="column" col="1">
            <DescriptionListsKey>
              Full name
            </DescriptionListsKey>

            <DescriptionListsValue>
              Margot Foster
            </DescriptionListsValue>
          </DescriptionListsItem>

          <DescriptionListsItem type="column" col="1">
            <DescriptionListsKey>
              Application for
            </DescriptionListsKey>

            <DescriptionListsValue>
              Backend Developer
            </DescriptionListsValue>
          </DescriptionListsItem>

          <DescriptionListsItem type="column" col="1">
            <DescriptionListsKey>
              Email address
            </DescriptionListsKey>

            <DescriptionListsValue>
              margotfoster@example.com
            </DescriptionListsValue>
          </DescriptionListsItem>

          <DescriptionListsItem type="column" col="1">
            <DescriptionListsKey>
              Salary expectation
            </DescriptionListsKey>

            <DescriptionListsValue>
              $120,000
            </DescriptionListsValue>
          </DescriptionListsItem>

          <DescriptionListsItem type="column" col="2">
            <DescriptionListsKey>
              About
            </DescriptionListsKey>

            <DescriptionListsValue>
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure
              nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </DescriptionListsValue>
          </DescriptionListsItem>

          <DescriptionListsItem type="column" col="2">
            <DescriptionListsKey>
              Attachments
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
                      Download
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
                      Download
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
