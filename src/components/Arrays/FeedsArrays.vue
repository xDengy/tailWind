<script>
import {CheckIcon, ThumbUpIcon, UserIcon} from "@heroicons/vue/outline";

export const simple = [
  {
    id: 1,
    content: 'Применительно к',
    target: 'FrontEnd разработчику',
    href: '#',
    date: 'Сен 20',
    datetime: '2020-09-20',
    icon: UserIcon,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 2,
    content: 'Расширенная проверка телефона от',
    target: 'Бэттани Блейк',
    href: '#',
    date: 'Сен 22',
    datetime: '2020-09-22',
    icon: ThumbUpIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 3,
    content: 'Завершена проверка телефона',
    target: 'Марта Гарден',
    href: '#',
    date: 'Сен 28',
    datetime: '2020-09-28',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 4,
    content: 'Продвинутое интервью от',
    target: 'Бэттани Блейк',
    href: '#',
    date: 'Сен 30',
    datetime: '2020-09-30',
    icon: ThumbUpIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 5,
    content: 'Завершенное интервью',
    target: 'Катерина Снайдер',
    href: '#',
    date: 'Окт 4',
    datetime: '2020-10-04',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
]
export const stacked = [
  { id: 1, person: { name: 'Эдуардо Бенз',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80', },
    project: 'Workcation', commit: '2d89f0c8', environment: 'производство', time: '1ч' },
  { id: 2, person: { name: 'Катерина Снайдер',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80', },
    project: 'Workcation', commit: '2d89f0c8', environment: 'производство', time: '1ч' },
  { id: 3, person: { name: 'Бэттани Блейк',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80', },
    project: 'Workcation', commit: '2d89f0c8', environment: 'производство', time: '1ч' },
]
export const multiple = [
  {
    id: 1,
    type: 'comment',
    person: { name: 'Эдуардо Бенз', href: '#' },
    image:
        'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ',
    date: '6д назад',
  },
  {
    id: 2,
    type: 'assignment',
    person: { name: 'Катерина Снайдер', href: '#' },
    assigned: { name: 'Бэттани Блейк', href: '#' },
    date: '2д назад',
  },
  {
    id: 3,
    type: 'tag',
    person: { name: 'Хиллари Маху', href: '#' },
    tags: [
      { name: 'Баг', href: '#', color: 'bg-rose-500' },
      { name: 'Доступность', href: '#', color: 'bg-indigo-500' },
    ],
    date: '6ч назад',
  },
  {
    id: 4,
    type: 'comment',
    person: { name: 'Эдуардо Бенз', href: '#' },
    image:
        'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.',
    date: '2ч назад',
  },
]

export default {
  simple,
  stacked,
  multiple,
}
</script>
