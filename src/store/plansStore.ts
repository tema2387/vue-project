import { ref, watch } from 'vue';

type TypePlan = {
  id: string,
  name: string,
  price: string,
}

const planPrices:TypePlan[] = [
  { id: '1', name: 'basic', price: '$20'},
  { id: '2', name: 'favorite', price: '$51'},
  { id: '3', name: 'standard', price: '$99'},
]

export const planPrice = ref<string>('$10');

export function setPlanPrice(id: string): void {
  const findPlan = planPrices.find((el) => el.id === id);

  if(findPlan) {
    planPrice.value = findPlan.price;
  }
}