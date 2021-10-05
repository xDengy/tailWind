<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: 'gray'
  },
  items: {
    type: Array,
    required: false,
  },
  second: {
    type: Array,
    required: false,
  },
});

const styles = [];
if (!props.second) {
  styles.push('space-y-1');
}

const linkStyle = [];
if (props.type === 'gray') {
  linkStyle.push('bg-gray-200 text-gray-900');
}
if (props.type === 'simple' || props.type === 'badges' || props.type === 'badgesIcons' || props.type === 'icons' || props.type === 'second') {
  linkStyle.push('bg-gray-100 text-gray-900');
}

const iconStyle = [];
if (props.type === 'gray') {
  iconStyle.push('bg-gray-50');
}
if (props.type === 'badges' || props.type === 'badgesIcons') {
  iconStyle.push('bg-white');
}

const secondaryIconStyle = [];
if (props.type === 'gray') {
  secondaryIconStyle.push('bg-gray-200 text-gray-600');
}
if (props.type === 'badges') {
  secondaryIconStyle.push('bg-gray-100 text-gray-600 group-hover:bg-gray-200');
}
if (props.type === 'badgesIcons') {
  secondaryIconStyle.push('bg-gray-100 group-hover:bg-gray-200');
}

const componentStyle = [];
if (props.type === 'gray') {
  componentStyle.push('text-gray-400');
}
if (props.type === 'badgesIcons' || props.type === 'icons' || props.type === 'second') {
  componentStyle.push('text-gray-400 group-hover:text-gray-500');
}
</script>

<template>
  <nav :class="styles" aria-label="Sidebar">
    <a v-for="item in props.items" :key="item.name" :href="item.href"
       :class="[item.current ? linkStyle : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'flex items-center px-3 py-2 text-sm font-medium rounded-md']"
       :aria-current="item.current ? 'page' : undefined" v-if="props.type !== 'second'">
      <slot name="component" v-if="props.type === 'badgesIcons' || props.type === 'icons' || props.type === 'second'">
        <component :is="item.icon"
                   :class="[item.current ? 'text-gray-500' : componentStyle, 'flex-shrink-0 -ml-1 mr-3 h-6 w-6']"
                   aria-hidden="true"/>
      </slot>
      <span class="truncate">
        {{ item.name }}
      </span>
      <slot name="icon" v-if="props.type === 'gray' || props.type === 'badges' || props.type === 'badgesIcons'">
          <span v-if="item.count"
                :class="[item.current ? iconStyle : secondaryIconStyle, 'ml-auto inline-block py-0.5 px-3 text-xs rounded-full']">
        {{ item.count }}
      </span>
      </slot>
    </a>
  </nav>

  <div class="mt-8" v-if="props.second">
    <h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="projects-headline">
      Проекты
    </h3>
    <div class="mt-1 space-y-1" aria-labelledby="projects-headline">
      <a v-for="item in props.second" :key="item.name" :href="item.href"
         class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
          <span class="truncate">
            {{ item.name }}
          </span>
      </a>
    </div>
  </div>
</template>

<style scoped>

</style>