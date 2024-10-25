import { ref } from 'vue';

export const selectedDeliver = ref('Standard');

export const deliveries = [
  {name: 'Standard', desc: 'Get your product in 1 Week.', price: 'Free' },
  {name: 'Express', desc: 'Get your product in 4 days.', price: '$10' },
  {name: 'Overnight', desc: 'Get your product in 1 day.', price: '$15' },
]