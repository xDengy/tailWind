<script setup>
import StatsContent from '.././UI/Stats/StatsContent.vue'
import StatsItem from '.././UI/Stats/StatsItem.vue'
import StatsName from '.././UI/Stats/StatsName.vue'
import StatsStat from '.././UI/Stats/StatsStat.vue'
import StatsTitle from '.././UI/Stats/StatsTitle.vue'
</script>

<script>
import {ArrowSmUpIcon, ArrowSmDownIcon, CursorClickIcon, MailOpenIcon, UsersIcon} from "@heroicons/vue/outline";
const stats = [
  {
    id: 1,
    label: 'Total Subscribers',
    value: '71,897',
    difference: {
      type: 'increase',
      value: '122',
    },
    icon: UsersIcon,
    link: {
      title: 'show all',
      href: '/sdfsdf/sdfsdf'
    }
  },
  {
    id: 2,
    label: 'Avg. Open Rate',
    value: '58.16%',
    difference: {
      type: 'increase',
      value: '5.4%',
    },
    icon: MailOpenIcon,
    link: {
      title: 'show all',
      href: '/sdfsdf/sdfsdf'
    }
  },
  {
    id: 3,
    label: 'Avg. Click Rate',
    value: '24.57%',
    difference: {
      type: 'decrease',
      value: '3.2%',
    },
    icon: CursorClickIcon,
    link: {
      title: 'show all',
      href: '/sdfsdf/sdfsdf'
    }
  },
]

export default {
  components: {
    ArrowSmUpIcon,
    ArrowSmDownIcon,
    CursorClickIcon,
    MailOpenIcon,
    UsersIcon
  },
  setup()
  {
    return {
      stats,
    }
  },
}
</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Stats</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">Simple</h5>
  <div>
    <StatsTitle>
      Last 30 days
    </StatsTitle>

    <StatsContent type="simple">
      <StatsItem v-for="item in stats" :key="item.label" type="simple">
        <StatsName type="simple">
          {{ item.label }}
        </StatsName>
        <StatsStat type="simple">
          {{ item.value }}
        </StatsStat>
      </StatsItem>
    </StatsContent>
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Icon</h5>
  <div>
    <StatsTitle>
      Last 30 days
    </StatsTitle>

    <StatsContent type="icon">
      <StatsItem v-for="item in stats" :key="item.id" type="icon">
        <StatsName type="icon">
          <div class="absolute bg-indigo-500 rounded-md p-3">
            <component :is="item.icon" class="h-6 w-6 text-white" aria-hidden="true"/>
          </div>
          <p class="ml-16 text-sm font-medium text-gray-500 truncate">{{ item.label }}</p>
        </StatsName>
        <StatsStat type="icon">
          <p class="text-2xl font-semibold text-gray-900">
            {{ item.value }}
          </p>
          <p :class="[item.difference.type === 'increase' ? 'text-green-600' : 'text-red-600', 'ml-2 flex items-baseline text-sm font-semibold']">
            <ArrowSmUpIcon v-if="item.difference.type === 'increase'"
                           class="self-center flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true"/>
            <ArrowSmDownIcon v-else class="self-center flex-shrink-0 h-5 w-5 text-red-500" aria-hidden="true"/>
            <span class="sr-only"> {{ item.difference.type === 'increase' ? 'Increased' : 'Decreased' }} by </span>
            {{ item.difference.value }}
          </p>
          <div class="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
            <div class="text-sm">
              <a :href="item.link" class="font-medium text-indigo-600 hover:text-indigo-500">
                View all
                <span class="sr-only"> {{ item.label }} stats</span>
              </a>
            </div>
          </div>
        </StatsStat>
      </StatsItem>
    </StatsContent>
  </div>
</template>

<style scoped>

</style>