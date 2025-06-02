import {createRouter, createWebHistory} from 'vue-router';
// Компоненты
// Страницы демонстрационные
import LandingPage from '@/pages/front/LandingPage.vue';
import PaymentPage from '@/pages/front/PaymentPage.vue';
import PricingPage from '@/pages/front/PricingPage.vue';
import HelpCenterPage from '@/pages/front/HelpCenterPage.vue';
import CheckoutPage from '@/pages/front/CheckoutPage.vue';
// Страницы админки
import AdminPage from '@/pages/admin/AdminPage.vue';
import AuthPage from '@/pages/admin/AuthPage.vue';
import RegistrationPage from '@/pages/admin/RegistrationPage.vue';
// Демо
import DemoAuthPage from '@/pages/demo/DemoAuthPage.vue';
import DemoRegistrationPage from '@/pages/demo/DemoRegistrationPage.vue';
// Остальные
import NotFoundPage from '@/pages/others/NotFoundPage.vue';
import UnderMaintenancePage from '@/pages/others/UnderMaintenancePage.vue';
import LaunchSoonPage from '@/pages/others/LaunchSoonPage.vue';
import NotAuthorizedPage from '@/pages/others/NotAuthorizedPage.vue';
import InternalServerErrorPage from '@/pages/others/InternalServerErrorPage.vue';

const routes = [
  { path: '/', component: AdminPage },
  { path: '/users', component: AdminPage },
  { path: '/auth', component: AuthPage },
  { path: '/registration', component: RegistrationPage },
  { path: '/front/landing', component: LandingPage },
  { path: '/front/payment', component: PaymentPage },
  { path: '/front/pricing', component: PricingPage },
  { path: '/front/help-center', component: HelpCenterPage },
  { path: '/front/checkout', component: CheckoutPage },
  { path: '/demo/registration', component: DemoRegistrationPage },
  { path: '/demo/auth', component: DemoAuthPage },
  { path: '/:pathMath(.*)*', component: NotFoundPage },
  { path: '/others/not-found', component: NotFoundPage },
  { path: '/others/under-maintenance', component: UnderMaintenancePage },
  { path: '/others/launch-soon', component: LaunchSoonPage },
  { path: '/others/not-authorized', component: NotAuthorizedPage },
  { path: '/others/internal-server-error', component: InternalServerErrorPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Если в пути указана секция
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth', // для плавной прокрутки
      };
    }
    // Всегда прокручивать к верху страницы
    return { top: 0 };
  },
})

export default router;