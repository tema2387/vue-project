import {createRouter, createWebHistory} from 'vue-router';

// Components
import MainPage from '@/pages/front/MainPage.vue';

const routes = [
  { path: '/', component: MainPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;