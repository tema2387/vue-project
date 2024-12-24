// Этот код сообщает TypeScript, что все файлы с расширением .vue являются компонентами Vue.
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}