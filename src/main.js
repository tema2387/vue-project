import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';


import globalComponents from '@/components/UI';
import router from '@/router/router.js';

const app = createApp(App);
const pinia = createPinia();

globalComponents.forEach((component) => {
  app.component(component.name, component.component)
});

app.use(pinia);
app.use(router);
app.mount('#app');
