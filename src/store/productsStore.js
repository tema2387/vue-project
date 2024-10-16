import { ref } from 'vue';

export const products = ref([
  { id: 1, img: '/public/img/product-1.png', name: 'Google - Google Home - White', brand: 'Google', rating: 4 , price: '$299', oldPrice: '$359', count: 1},
  { id: 2, img: '/public/img/product-1.png', name: 'Google - Google Home - White', brand: 'Google', rating: 4 , price: '$299', oldPrice: '$359', count: 1}
])

export function removeProduct(id) {
  products.value = products.value.filter((el) => el.id !== id);
}