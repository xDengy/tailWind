<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Badge from './components/UI/Badge.vue';
import Button from './components/UI/Button.vue';
import ButtonGroup from './components/UI/ButtonGroup.vue';

import {MailIcon, PlusSmIcon as PlusSmIconSolid} from '@heroicons/vue/solid'
import {PlusSmIcon as PlusSmIconOutline} from '@heroicons/vue/outline'

const log = (msg) => console.log(msg);
</script>

<script>
import {CursorClickIcon, MailOpenIcon, UsersIcon} from "@heroicons/vue/outline";
import {
  ArrowSmDownIcon,
  ArrowSmUpIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  MailIcon,
  PaperClipIcon
} from "@heroicons/vue/solid";

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
const peopleEmail = [
  {
    name: 'Calvin Hawkins',
    email: 'calvin.hawkins@example.com',
    image:
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Kristen Ramos',
    email: 'kristen.ramos@example.com',
    image:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]
const peopleHandle = [
  {
    name: 'Leonard Krasner',
    handle: 'leonardkrasner',
    imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Floyd Miles',
    handle: 'floydmiles',
    imageUrl:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Emily Selman',
    handle: 'emilyselman',
    imageUrl:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Kristin Watson',
    handle: 'kristinwatson',
    imageUrl:
        'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]
const announcements = [
  {
    id: 1,
    title: 'Office closed on July 2nd',
    preview:
        'Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.',
  },
  {
    id: 2,
    title: 'New password policy',
    preview:
        'Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.',
  },
  {
    id: 3,
    title: 'Office closed on July 2nd',
    preview:
        'Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi.',
  },
]
const messages = [
  {
    id: 1,
    subject: 'Velit placeat sit ducimus non sed',
    sender: 'Gloria Roberston',
    time: '1d ago',
    datetime: '2021-01-27T16:35',
    preview:
        'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
  },
  {
    id: 2,
    subject: 'Velit placeat sit ducimus non sed',
    sender: 'Gloria Roberston',
    time: '2d ago',
    datetime: '2021-01-27T16:35',
    preview:
        'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
  },
  {
    id: 3,
    subject: 'Velit placeat sit ducimus non sed',
    sender: 'Gloria Roberston',
    time: '3d ago',
    datetime: '2021-01-27T16:35',
    preview:
        'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
  },
  {
    id: 4,
    subject: 'Velit placeat sit ducimus non sed',
    sender: 'Gloria Roberston',
    time: '4d ago',
    datetime: '2021-01-27T16:35',
    preview:
        'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
  },
  {
    id: 5,
    subject: 'Velit placeat sit ducimus non sed',
    sender: 'Gloria Roberston',
    time: '5d ago',
    datetime: '2021-01-27T16:35',
    preview:
        'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
  },
]
const directory = {
  A: [
    {
      id: 1,
      name: 'Leslie Abbott',
      role: 'Co-Founder / CEO',
      imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 2,
      name: 'Hector Adams',
      role: 'VP, Marketing',
      imageUrl:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 3,
      name: 'Blake Alexander',
      role: 'Account Coordinator',
      imageUrl:
          'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 4,
      name: 'Fabricio Andrews',
      role: 'Senior Art Director',
      imageUrl:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  B: [
    {
      id: 5,
      name: 'Angela Beaver',
      role: 'Chief Strategy Officer',
      imageUrl:
          'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 6,
      name: 'Yvette Blanchard',
      role: 'Studio Artist',
      imageUrl:
          'https://images.unsplash.com/photo-1506980595904-70325b7fdd90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 7,
      name: 'Lawrence Brooks',
      role: 'Content Specialist',
      imageUrl:
          'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  C: [
    {
      id: 8,
      name: 'Jeffrey Clark',
      role: 'Senior Art Director',
      imageUrl:
          'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 9,
      name: 'Kathryn Cooper',
      role: 'Associate Creative Director',
      imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  E: [
    {
      id: 10,
      name: 'Alicia Edwards',
      role: 'Junior Copywriter',
      imageUrl:
          'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 11,
      name: 'Benjamin Emerson',
      role: 'Director, Print Operations',
      imageUrl:
          'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 12,
      name: 'Jillian Erics',
      role: 'Designer',
      imageUrl:
          'https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 13,
      name: 'Chelsea Evans',
      role: 'Human Resources Manager',
      imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  G: [
    {
      id: 14,
      name: 'Michael Gillard',
      role: 'Co-Founder / CTO',
      imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 15,
      name: 'Dries Giuessepe',
      role: 'Manager, Business Relations',
      imageUrl:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  M: [
    {
      id: 16,
      name: 'Jenny Harrison',
      role: 'Studio Artist',
      imageUrl:
          'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 17,
      name: 'Lindsay Hatley',
      role: 'Front-end Developer',
      imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 18,
      name: 'Anna Hill',
      role: 'Partner, Creative',
      imageUrl:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  S: [
    {
      id: 19,
      name: 'Courtney Samuels',
      role: 'Designer',
      imageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 20,
      name: 'Tom Simpson',
      role: 'Director, Product Development',
      imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  T: [
    {
      id: 21,
      name: 'Floyd Thompson',
      role: 'Principal Designer',
      imageUrl:
          'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 22,
      name: 'Leonard Timmons',
      role: 'Senior Designer',
      imageUrl:
          'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 23,
      name: 'Whitney Trudeau',
      role: 'Copywriter',
      imageUrl:
          'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  W: [
    {
      id: 24,
      name: 'Kristin Watson',
      role: 'VP, Human Resources',
      imageUrl:
          'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 25,
      name: 'Emily Wilson',
      role: 'VP, User Experience',
      imageUrl:
          'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  Y: [
    {
      id: 26,
      name: 'Emma Young',
      role: 'Senior Front-end Developer',
      imageUrl:
          'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
}
const applications = [
  {
    applicant: {
      name: 'Ricardo Cooper',
      email: 'ricardo.cooper@example.com',
      imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    date: '2020-01-07',
    dateFull: 'January 7, 2020',
    stage: 'Completed phone screening',
    href: '#',
  },
  {
    applicant: {
      name: 'Kristen Ramos',
      email: 'kristen.ramos@example.com',
      imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    date: '2020-01-07',
    dateFull: 'January 7, 2020',
    stage: 'Completed phone screening',
    href: '#',
  },
  {
    applicant: {
      name: 'Ted Fox',
      email: 'ted.fox@example.com',
      imageUrl:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    date: '2020-01-07',
    dateFull: 'January 7, 2020',
    stage: 'Completed phone screening',
    href: '#',
  },
]

export default {
  components: {
    ArrowSmDownIcon,
    ArrowSmUpIcon,
    PaperClipIcon,
    CheckCircleIcon,
    ChevronRightIcon,
    MailIcon,
  },
  setup()
  {
    return {
      stats,
      peopleEmail,
      peopleHandle,
      announcements,
      messages,
      directory,
      applications,
    }
  },
}
</script>

<template>
  <div class="p-5">
    <!-- Badges -->
    <h2 class="font-bold mb-1 text-xl">Метки</h2>
    <div>
      <Badge class="mr-2">
        Метка
      </Badge>

      <Badge class="mr-2" color="red">
        Метка
      </Badge>

      <Badge class="mr-2" color="yellow">
        Метка
      </Badge>

      <Badge class="mr-2" color="purple">
        Метка
      </Badge>

      <Badge class="mr-2" color="blue">
        Метка
      </Badge>
    </div>
    <div class="mt-4">
      <Badge class="mr-2" size="sm">
        Метка
      </Badge>

      <Badge class="mr-2" color="red" size="sm">
        Метка
      </Badge>

      <Badge class="mr-2" color="yellow" size="sm">
        Метка
      </Badge>

      <Badge class="mr-2" color="purple" size="sm">
        Метка
      </Badge>

      <Badge class="mr-2" color="blue" size="sm">
        Метка
      </Badge>
    </div>
    <div class="mt-4">
      <Badge class="mr-2" :point="true">
        Метка
      </Badge>

      <Badge class="mr-2" color="red" :point="true">
        Метка
      </Badge>

      <Badge class="mr-2" color="yellow" :point="true">
        Метка
      </Badge>

      <Badge class="mr-2" color="purple" :point="true">
        Метка
      </Badge>

      <Badge class="mr-2" color="blue" :point="true">
        Метка
      </Badge>
    </div>
    <div class="mt-4">
      <Badge class="mr-2" size="sm" :point="true">
        Метка
      </Badge>

      <Badge class="mr-2" color="red" size="sm" :point="true">
        Метка
      </Badge>

      <Badge class="mr-2" color="yellow" size="sm" :point="true">
        Метка
      </Badge>

      <Badge class="mr-2" color="purple" size="sm" :point="true">
        Метка
      </Badge>

      <Badge class="mr-2" color="blue" size="sm" :point="true">
        Метка
      </Badge>
    </div>

    <!-- Buttons -->
    <h2 class="mt-5 mb-1 font-bold text-xl">Кнопки</h2>
    <div>
      <Button @click="log('button click')">
        Кнопка
      </Button>

      <Button color="indigo" class="ml-2">
        Кнопка
      </Button>

      <Button color="red" class="ml-2">
        Кнопка
      </Button>

      <Button color="yellow" class="ml-2">
        Кнопка
      </Button>

      <Button color="purple" class="ml-2">
        Кнопка
      </Button>
    </div>
    <div class="mt-4">
      <Button size="xs">
        Кнопка
      </Button>

      <Button color="indigo" class="ml-2" size="sm">
        Кнопка
      </Button>

      <Button color="red" class="ml-2" size="md">
        Кнопка
      </Button>

      <Button color="yellow" class="ml-2" size="lg">
        Кнопка
      </Button>

      <Button color="purple" class="ml-2" size="xl">
        Кнопка
      </Button>
    </div>
    <div class="mt-4 flex">
      <Button @click="log('button click')">
        <MailIcon class="mr-1 -ml-1 h-5 w-5" aria-hidden="true"/>
        Кнопка
      </Button>

      <Button color="indigo" class="ml-2">
        Кнопка
        <MailIcon class="ml-1 h-5 w-5" aria-hidden="true"/>
      </Button>

      <Button color="red" class="ml-2">
        <MailIcon class="mr-1 -ml-1 h-5 w-5" aria-hidden="true"/>
        Кнопка
      </Button>

      <Button color="yellow" class="ml-2">
        Кнопка
        <MailIcon class="ml-1 h-5 w-5" aria-hidden="true"/>
      </Button>

      <Button color="purple" class="ml-2">
        <MailIcon class="mr-1 -ml-1 h-5 w-5" aria-hidden="true"/>
        Кнопка
      </Button>
    </div>
    <div class="mt-4">
      <Button size="xs" :circle="true">
        <PlusSmIconSolid class="h-5 w-5" aria-hidden="true"/>
      </Button>

      <Button color="indigo" class="ml-2" size="sm" :circle="true">
        <PlusSmIconSolid class="h-5 w-5" aria-hidden="true"/>
      </Button>

      <Button color="red" class="ml-2" size="md" :circle="true">
        <PlusSmIconSolid class="h-5 w-5" aria-hidden="true"/>
      </Button>

      <Button color="yellow" class="ml-2" size="lg" :circle="true">
        <PlusSmIconOutline class="h-6 w-6" aria-hidden="true"/>
      </Button>

      <Button color="purple" class="ml-2" size="xl" :circle="true">
        <PlusSmIconOutline class="h-6 w-6" aria-hidden="true"/>
      </Button>
    </div>

    <!-- Button Groups -->
    <h2 class="mt-5 mb-1 font-bold text-xl">Группы кнопок</h2>
    <div class="flex">
      <ButtonGroup>
        <Button color="indigo" group="left">
          Кнопка
        </Button>
        <Button color="indigo" group="center">
          Кнопка
        </Button>
        <Button color="indigo" group="right">
          Кнопка
        </Button>
      </ButtonGroup>

      <ButtonGroup class="ml-2">
        <Button type="secondary" group="left">
          Кнопка
        </Button>
        <Button type="secondary" group="center">
          Кнопка
        </Button>
        <Button type="secondary" group="right">
          Кнопка
        </Button>
      </ButtonGroup>

      <ButtonGroup class="ml-2">
        <Button type="secondary" group="left">
          <span class="sr-only">Previous</span>
          <!-- Heroicon name: solid/chevron-left -->
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
               aria-hidden="true">
            <path fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"/>
          </svg>
        </Button>
        <Button type="secondary" group="right">
          <span class="sr-only">Next</span>
          <!-- Heroicon name: solid/chevron-right -->
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
               aria-hidden="true">
            <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"/>
          </svg>
        </Button>
      </ButtonGroup>
    </div>

    <!-- Description List -->
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

    <!-- Stats -->
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

    <!-- Stacked List -->
    <h2 class="mt-5 mb-1 font-bold text-xl">Stacked List</h2>
    <h5 class="mt-5 mb-1 font-bold text-m">Narrow with avatar group</h5>
    <div class="max-w-md mx-auto py-12 px-4 sm:px-0 md:py-16">
      <StackedListNarrow :items="peopleEmail" :arrayName="'peopleEmail'" />
    </div>

    <h5 class="mt-5 mb-1 font-bold text-m">Avatar groups with actions</h5>
    <div class="max-w-sm mx-auto py-12 px-4 sm:px-0 md:py-16">
      <div class="flow-root mt-6">
        <StackedListNarrow :items="peopleHandle" :arrayName="'peopleHandle'" />
      </div>
    </div>

    <h5 class="mt-5 mb-1 font-bold text-m">Content links with action</h5>
    <div class="max-w-sm mx-auto py-12 px-4 sm:px-0 md:py-16">
      <div class="flow-root mt-6">
        <StackedListNarrow :items="announcements" :arrayName="'announcements'" />
      </div>
    </div>

    <h5 class="mt-5 mb-1 font-bold text-m">With truncated content preview</h5>
    <div class="max-w-sm mx-auto py-12 px-4 sm:px-0 md:py-16">
      <StackedListNarrow :items="messages" :arrayName="'messages'" />
    </div>

    <h5 class="mt-5 mb-1 font-bold text-m">With sticky headings</h5>
    <div class="max-w-xl mx-auto sm:px-6 lg:px-8" style="height: 26rem;">
      <Headings>
        <HeadingsItem v-for="letter in Object.keys(directory)" :key="letter">
          <HeadingsTitle>
            {{ letter }}
          </HeadingsTitle>
          <HeadingsContent>
            <HeadingsContentItem v-for="person in directory[letter]" :key="person.id">
              <HeadingsInfo>
                <div class="flex-shrink-0">
                  <img class="h-10 w-10 rounded-full" :src="person.imageUrl" alt=""/>
                </div>
                <div class="flex-1 min-w-0">
                  <a href="#" class="focus:outline-none">
                    <span class="absolute inset-0" aria-hidden="true"/>
                    <p class="text-sm font-medium text-gray-900">
                      {{ person.name }}
                    </p>
                    <p class="text-sm text-gray-500 truncate">
                      {{ person.role }}
                    </p>
                  </a>
                </div>
              </HeadingsInfo>
            </HeadingsContentItem>
          </HeadingsContent>
        </HeadingsItem>
      </Headings>
    </div>

    <h5 class="mt-5 mb-1 font-bold text-m">With sticky headings</h5>
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <TwoColumnAvatar>
        <TwoColumnAvatarList>
          <TwoColumnAvatarItem v-for="application in applications" :key="application.applicant.email">
            <TwoColumnAvatarLink :href="application.href">
              <TwoColumnAvatarContent>
                <TwoColumnAvatarInfo>
                  <div class="flex-shrink-0">
                    <img class="h-12 w-12 rounded-full" :src="application.applicant.imageUrl" alt=""/>
                  </div>
                  <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <p class="text-sm font-medium text-indigo-600 truncate">{{ application.applicant.name }}</p>
                      <p class="mt-2 flex items-center text-sm text-gray-500">
                        <MailIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true"/>
                        <span class="truncate">{{ application.applicant.email }}</span>
                      </p>
                    </div>
                    <div class="hidden md:block">
                      <div>
                        <p class="text-sm text-gray-900">
                          Applied on
                          {{ ' ' }}
                          <time :datetime="application.date">{{ application.dateFull }}</time>
                        </p>
                        <p class="mt-2 flex items-center text-sm text-gray-500">
                          <CheckCircleIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" aria-hidden="true"/>
                          {{ application.stage }}
                        </p>
                      </div>
                    </div>
                  </div>
                </TwoColumnAvatarInfo>

                <TwoColumnAvatarIcon>
                  <ChevronRightIcon class="h-5 w-5 text-gray-400" aria-hidden="true"/>
                </TwoColumnAvatarIcon>
              </TwoColumnAvatarContent>
            </TwoColumnAvatarLink>
          </TwoColumnAvatarItem>
        </TwoColumnAvatarList>
      </TwoColumnAvatar>
    </div>

  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
