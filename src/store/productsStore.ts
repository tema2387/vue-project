import { defineStore } from 'pinia';
import { ref } from 'vue';

type TypeProduct = {
  id: string,
  img: string,
  name: string,
  brand: string,
  rating: number,
  price: string,
  oldPrice: string,
  count: number,
}

export const useProductsStore = defineStore('productsStore', () => {
  const products = ref<TypeProduct[]>([
    { id: '1', img: '/img/product-1.png', name: 'Google - Google Home - White', brand: 'Google', rating: 4 , price: '$299', oldPrice: '$359', count: 1},
    { id: '2', img: '/img/product-1.png', name: 'Google - Google Home - White', brand: 'Google', rating: 4 , price: '$299', oldPrice: '$359', count: 1}
  ])

  function removeProduct(id: string): void {
    products.value = products.value.filter((el) => el.id !== id);
  }

  return { products, removeProduct }
})
