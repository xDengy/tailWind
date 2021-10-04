<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <nav class="space-y-1" aria-label="Sidebar" v-if="props.type !== 'second'">
    <slot name="content"></slot>
  </nav>

  <nav aria-label="Sidebar" v-else>
    <div class="space-y-1">
      <slot name="content"></slot>
    </div>
    <div class="mt-8">
      <slot name="header"></slot>
      <div class="mt-1 space-y-1" aria-labelledby="projects-headline">
        <slot name="footer"></slot>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>