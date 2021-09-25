<script setup>
import CheckboxRight from '.././UI/Checkboxes/CheckboxRight.vue'
import CheckboxContent from '.././UI/Checkboxes/CheckboxContent.vue'
import CheckboxItem from '.././UI/Checkboxes/CheckboxItem.vue'
import CheckboxTitle from '.././UI/Checkboxes/CheckboxTitle.vue'
import CheckboxText from '.././UI/Checkboxes/CheckboxText.vue'

const members = [
  { id: 1, name: 'Annette Black' },
  { id: 2, name: 'Cody Fisher' },
  { id: 3, name: 'Courtney Henry' },
  { id: 4, name: 'Kathryn Murphy' },
  { id: 5, name: 'Theresa Webb' },
]
</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Checkboxes</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">List with checkbox on right</h5>
  <div class="w-full max-w-lg mx-auto">
      <CheckboxRight>
        <CheckboxContent>
          <CheckboxItem name="comments">
            <CheckboxTitle name="comments">
              Comments
            </CheckboxTitle>
            <CheckboxText name="comments">
              Get notified when someones posts a comment on a posting.
            </CheckboxText>
          </CheckboxItem>
        </CheckboxContent>

        <CheckboxContent>
          <CheckboxItem name="candidates">
            <CheckboxTitle name="candidates">
              Candidates
            </CheckboxTitle>
            <CheckboxText name="candidates">
              Get notified when a candidate applies for a job.
            </CheckboxText>
          </CheckboxItem>
        </CheckboxContent>

        <CheckboxContent>
          <CheckboxItem name="offers">
            <CheckboxTitle name="offers">
              Offers
            </CheckboxTitle>
            <CheckboxText name="offers">
              Get notified when a candidate accepts or rejects an offer.
            </CheckboxText>
          </CheckboxItem>
        </CheckboxContent>
      </CheckboxRight>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Simple list with heading</h5>
  <div class="w-full max-w-lg mx-auto">
    <CheckboxRight type="members" :items="members" />
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">List with description</h5>
  <div class="w-full max-w-lg mx-auto">
    <CheckboxRight type="leftNotifications">
      <CheckboxContent type="leftNotifications">
        <CheckboxItem type="leftNotifications" name="comments">
          <CheckboxTitle name="comments">
            Comments
          </CheckboxTitle>
          <CheckboxText name="comments">
            Get notified when someones posts a comment on a posting.
          </CheckboxText>
        </CheckboxItem>
      </CheckboxContent>

      <CheckboxContent type="leftNotifications">
        <CheckboxItem type="leftNotifications" name="candidates">
          <CheckboxTitle name="candidates">
            Candidates
          </CheckboxTitle>
          <CheckboxText name="candidates">
            Get notified when a candidate applies for a job.
          </CheckboxText>
        </CheckboxItem>
      </CheckboxContent>

      <CheckboxContent type="leftNotifications">
        <CheckboxItem type="leftNotifications" name="offers">
          <CheckboxTitle name="offers">
            Offers
          </CheckboxTitle>
          <CheckboxText name="offers">
            Get notified when a candidate accepts or rejects an offer.
          </CheckboxText>
        </CheckboxItem>
      </CheckboxContent>
    </CheckboxRight>
  </div>
</template>

<style scoped>

</style>