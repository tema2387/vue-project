import {createRouter, createWebHistory} from 'vue-router';

// Components
import MainPage from '@/pages/front/MainPage.vue';
import OrderPage from '@/pages/front/OrderPage.vue';
import PlansPage from '@/pages/front/PlansPage.vue';
import HelpPage from '@/pages/front/HelpPage.vue';

const routes = [
  { path: '/', component: MainPage },
  { path: '/order', component: OrderPage },
  { path: '/plans', component: PlansPage },
  { path: '/help', component: HelpPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;