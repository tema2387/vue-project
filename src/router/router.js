import {createRouter, createWebHistory} from 'vue-router';
// Компоненты
// Страницы демонстрационные
import LandingPage from '@/pages/front/LandingPage.vue';
import PaymentPage from '@/pages/front/PaymentPage.vue';
import PricingPage from '@/pages/front/PricingPage.vue';
import HelpPage from '@/pages/front/HelpPage.vue';
import CheckoutPage from '@/pages/front/CheckoutPage.vue';
// Страницы админки
import MainPage from '@/pages/admin/MainPage.vue';
import AuthPage from '@/pages/admin/AuthPage.vue';
import RegistrationPage from '@/pages/admin/RegistrationPage.vue';
// Демо
import AuthDemoPage from '@/pages/auth_demo/AuthDemoPage.vue';
import RegistrationDemoPage from '@/pages/auth_demo/RegistrationDemoPage.vue';
// Остальные
import NotFoundPage from '@/pages/others/NotFoundPage.vue';

const routes = [
  { path: '/', component: MainPage },
  { path: '/auth', component: AuthPage },
  { path: '/registration', component: RegistrationPage },
  { path: '/landing', component: LandingPage },
  { path: '/payment', component: PaymentPage },
  { path: '/pricing', component: PricingPage },
  { path: '/help', component: HelpPage },
  { path: '/checkout', component: CheckoutPage  },
  { path: '/registration-demo', component: RegistrationDemoPage },
  { path: '/auth-demo', component: AuthDemoPage },
  { path: '/not-found', component: NotFoundPage  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;