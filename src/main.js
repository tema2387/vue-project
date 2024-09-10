import { createApp } from 'vue';
import App from '@/App.vue';

import globalComponents from '@/components/UI';
import router from '@/router/router.js';

const app = createApp(App);

globalComponents.forEach((component) => {
  app.component(component.name, component.component)
});

app.use(router);
app.mount('#app');
