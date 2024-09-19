import {createRouter, createWebHistory} from 'vue-router';

// Components
import MainPage from '@/pages/front/MainPage.vue';
import OrderPage from '@/pages/front/OrderPage.vue';
import PlansPage from '@/pages/front/PlansPage.vue';

const routes = [
  { path: '/', component: MainPage },
  { path: '/order', component: OrderPage },
  { path: '/plans', component: PlansPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }; // Плавный скролл к элементу с ID, указанным в hash
    } else {
      return { top: 0 }; // Прокрутка к верхней части страницы 
    }
  },
})

export default router;