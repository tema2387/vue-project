import {createRouter, createWebHistory} from 'vue-router';
// Компоненты
// Страницы демонстрационные
import MainPage from '@/pages/front/MainPage.vue';
import OrderPage from '@/pages/front/OrderPage.vue';
import PlansPage from '@/pages/front/PlansPage.vue';
import HelpPage from '@/pages/front/HelpPage.vue';
import QuestionPage from '@/pages/front/QuestionPage.vue';
import CheckoutPage from '@/pages/front/CheckoutPage.vue';
// Страницы админки
import RegistrationPage from '@/pages/admin/RegistrationPage.vue';
import AuthPage from '@/pages/admin/AuthPage.vue';
import AdminPage from '@/pages/admin/AdminPage.vue';

const routes = [
  { path: '/', component: MainPage },
  { path: '/order', component: OrderPage },
  { path: '/plans', component: PlansPage },
  { path: '/help', component: HelpPage },
  { path: '/question/:id', component: QuestionPage },
  { path: '/checkout', component: CheckoutPage  },
  { path: '/registration', component: RegistrationPage },
  { path: '/auth', component: AuthPage },
  { path: '/admin', component: AdminPage  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;