<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: 'gray',
  },
  items: {
    type: Array,
    required: true,
  },
  second: {
    type: Array,
    required: false,
  },
});
</script>

<template>
  <nav class="space-y-1" aria-label="Sidebar" v-if="props.type !== 'second'">
    <a v-for="item in items" :key="item.name" :href="item.href"
       :class="[item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'flex items-center px-3 py-2 text-sm font-medium rounded-md']"
       :aria-current="item.current ? 'page' : undefined" v-if="props.type === 'gray'">
      <component :is="item.icon"
                 :class="[item.current ? 'text-gray-500' : 'text-gray-400', 'flex-shrink-0 -ml-1 mr-3 h-6 w-6']"
                 aria-hidden="true"/>
      <span class="truncate">
        {{ item.name }}
      </span>
      <span v-if="item.count"
            :class="[item.current ? 'bg-gray-50' : 'bg-gray-200 text-gray-600', 'ml-auto inline-block py-0.5 px-3 text-xs rounded-full']">
        {{ item.count }}
      </span>
    </a>

    <a v-for="item in items" :key="item.name" :href="item.href"
       :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'flex items-center px-3 py-2 text-sm font-medium rounded-md']"
       :aria-current="item.current ? 'page' : undefined" v-if="props.type === 'simple'">
      <span class="truncate">
        {{ item.name }}
      </span>
    </a>

    <a v-for="item in items" :key="item.name" :href="item.href"
       :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-3 py-2 text-sm font-medium rounded-md']"
       :aria-current="item.current ? 'page' : undefined" v-if="props.type === 'badges'">
      <span class="truncate">
        {{ item.name }}
      </span>
      <span v-if="item.count"
            :class="[item.current ? 'bg-white' : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200', 'ml-auto inline-block py-0.5 px-3 text-xs rounded-full']">
        {{ item.count }}
      </span>
    </a>

    <a v-for="item in items" :key="item.name" :href="item.href"
       :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-3 py-2 text-sm font-medium rounded-md']"
       :aria-current="item.current ? 'page' : undefined" v-if="props.type === 'badgesIcons'">
      <component :is="item.icon"
                 :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'flex-shrink-0 -ml-1 mr-3 h-6 w-6']"
                 aria-hidden="true"/>
      <span class="truncate">
        {{ item.name }}
      </span>
      <span v-if="item.count"
            :class="[item.current ? 'bg-white' : 'bg-gray-100 group-hover:bg-gray-200', 'ml-auto inline-block py-0.5 px-3 text-xs rounded-full']">
        {{ item.count }}
      </span>
    </a>

    <a v-for="item in items" :key="item.name" :href="item.href"
       :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-3 py-2 text-sm font-medium rounded-md']"
       :aria-current="item.current ? 'page' : undefined" v-if="props.type === 'icons'">
      <component :is="item.icon"
                 :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'flex-shrink-0 -ml-1 mr-3 h-6 w-6']"
                 aria-hidden="true"/>
      <span class="truncate">
        {{ item.name }}
      </span>
    </a>
  </nav>

  <nav aria-label="Sidebar" v-else>
    <div class="space-y-1">
      <a v-for="item in items" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-3 py-2 text-sm font-medium rounded-md']" :aria-current="item.current ? 'page' : undefined">
        <component :is="item.icon" :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'flex-shrink-0 -ml-1 mr-3 h-6 w-6']" aria-hidden="true" />
        <span class="truncate">
          {{ item.name }}
        </span>
      </a>
    </div>
    <div class="mt-8">
      <h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="projects-headline">
        Projects
      </h3>
      <div class="mt-1 space-y-1" aria-labelledby="projects-headline" v-if="second">
        <a v-for="item in second" :key="item.name" :href="item.href" class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
          <span class="truncate">
            {{ item.name }}
          </span>
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>