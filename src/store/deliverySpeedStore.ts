import { ref } from 'vue';

type TypeDeliver =  {
  name: string,
  desc: string,
  price: string,
}

export const selectedDeliver = ref<string>('Standard');

export const deliveries: TypeDeliver[] = [
  {name: 'Standard', desc: 'Get your product in 1 Week.', price: 'Free' },
  {name: 'Express', desc: 'Get your product in 4 days.', price: '$10' },
  {name: 'Overnight', desc: 'Get your product in 1 day.', price: '$15' },
]