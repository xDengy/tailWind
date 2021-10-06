<script>
export const steps = [
  { id: 'Шаг 1', name: 'Детали вакансии', href: '#', status: 'complete' },
  { id: 'Шаг 2', name: 'Форма заявки', href: '#', status: 'current' },
  { id: 'Шаг 3', name: 'Предварительный просмотр', href: '#', status: 'upcoming' },
]
export const circlesSteps = [
  { name: 'Создать аккаунт', description: 'Vitae sed mi luctus laoreet.', href: '#', status: 'complete' },
  {
    name: 'Информация профиля',
    description: 'Cursus semper viverra facilisis et et some more.',
    href: '#',
    status: 'current',
  },
  { name: 'Деловая информация', description: 'Penatibus eu quis ante.', href: '#', status: 'upcoming' },
  { name: 'Тема', description: 'Faucibus nec enim leo et.', href: '#', status: 'upcoming' },
  { name: 'Предварительный просмотр', description: 'Iusto et officia maiores porro ad non quas.', href: '#', status: 'upcoming' },
]

export default {
  steps,
  circlesSteps,
}
</script>
