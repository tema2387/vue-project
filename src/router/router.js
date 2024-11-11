import {createRouter, createWebHistory} from 'vue-router';

// Components
// front pages
import MainPage from '@/pages/front/MainPage.vue';
import OrderPage from '@/pages/front/OrderPage.vue';
import PlansPage from '@/pages/front/PlansPage.vue';
import HelpPage from '@/pages/front/HelpPage.vue';
import QuestionPage from '@/pages/front/QuestionPage.vue';
import CheckoutPage from '@/pages/front/CheckoutPage.vue';

// admin pages
import RegistrationPage from '@/pages/admin/RegistrationPage.vue';
import AuthPage from '@/pages/admin/AuthPage.vue';

const routes = [
  { path: '/', component: MainPage },
  { path: '/order', component: OrderPage },
  { path: '/plans', component: PlansPage },
  { path: '/help', component: HelpPage },
  { path: '/question/:id', component: QuestionPage },
  { path: '/checkout', component: CheckoutPage  },
  { path: '/registration', component: RegistrationPage },
  { path: '/auth', component: AuthPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;