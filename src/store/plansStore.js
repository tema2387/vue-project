import { ref, watch } from 'vue';

const planPrices = {
  plan1: '$20',
  plan2: '$51',
  plan3: '$99'
}

export const planPrice = ref(localStorage.getItem('planPrice') || 'No price');

watch(planPrice, (newValue) => {
  localStorage.setItem('planPrice', newValue);
})

export function setPlanPrice(id) {
  planPrice.value = planPrices[`plan${id}`] ?? 'No price';
}