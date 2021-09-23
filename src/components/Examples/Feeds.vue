<script setup>
import Feeds from '.././UI/Feeds/Feeds.vue'
</script>

<script>
import {
  CheckIcon,
  ThumbUpIcon,
  UserIcon
} from "@heroicons/vue/outline";

const simple = [
  {
    id: 1,
    content: 'Applied to',
    target: 'Front End Developer',
    href: '#',
    date: 'Sep 20',
    datetime: '2020-09-20',
    icon: UserIcon,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 2,
    content: 'Advanced to phone screening by',
    target: 'Bethany Blake',
    href: '#',
    date: 'Sep 22',
    datetime: '2020-09-22',
    icon: ThumbUpIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 3,
    content: 'Completed phone screening with',
    target: 'Martha Gardner',
    href: '#',
    date: 'Sep 28',
    datetime: '2020-09-28',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 4,
    content: 'Advanced to interview by',
    target: 'Bethany Blake',
    href: '#',
    date: 'Sep 30',
    datetime: '2020-09-30',
    icon: ThumbUpIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 5,
    content: 'Completed interview with',
    target: 'Katherine Snyder',
    href: '#',
    date: 'Oct 4',
    datetime: '2020-10-04',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
]
const stacked = [
  { id: 1, person: { name: 'Eduardo Benz', imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80', },
    project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
  { id: 2, person: { name: 'Eduardo Benz', imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80', },
    project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
  { id: 3, person: { name: 'Eduardo Benz', imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80', },
    project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
]
const multiple = [
  {
    id: 1,
    type: 'comment',
    person: { name: 'Eduardo Benz', href: '#' },
    imageUrl:
        'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ',
    date: '6d ago',
  },
  {
    id: 2,
    type: 'assignment',
    person: { name: 'Hilary Mahy', href: '#' },
    assigned: { name: 'Kristin Watson', href: '#' },
    date: '2d ago',
  },
  {
    id: 3,
    type: 'tags',
    person: { name: 'Hilary Mahy', href: '#' },
    tags: [
      { name: 'Bug', href: '#', color: 'bg-rose-500' },
      { name: 'Accessibility', href: '#', color: 'bg-indigo-500' },
    ],
    date: '6h ago',
  },
  {
    id: 4,
    type: 'comment',
    person: { name: 'Jason Meyers', href: '#' },
    imageUrl:
        'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.',
    date: '2h ago',
  },
]
export default {
  components: {
    CheckIcon,
    ThumbUpIcon,
    UserIcon
  },
  setup() {
    return {
      simple,
      stacked,
      multiple,
    }
  },
}
</script>

<template>
  <h2 class="mt-5 mb-1 font-bold text-xl">Feeds</h2>
  <h5 class="mt-5 mb-1 font-bold text-m">Simple with icons</h5>
  <div class="max-w-xl mx-auto px-6">
    <Feeds :items="simple" :arrayName="'Simple'" />
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">Stacked with avatars</h5>
  <div class="max-w-lg mx-auto px-6">
    <Feeds :items="stacked" :arrayName="'Stacked'" />
  </div>

  <h5 class="mt-5 mb-1 font-bold text-m">With multiple item types</h5>
  <div class="max-w-lg mx-auto px-6">
    <Feeds :items="multiple" :arrayName="'Multiple'" />
  </div>
</template>

<style scoped>

</style>