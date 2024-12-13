<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
// Страницы
import NotFoundPage from '@/pages/others/NotFoundPage.vue';
// Компоненты
import UiPopup from '@/components/UI/UIPopup.vue';
// Модули
import { popupText, popupStatus, popupColor, closePopup } from '@/modules/togglePopup.js';

const route = useRoute();

const currentComponent = computed(() => {
  if(route.matched[0]) {
    return route.matched[0]?.components.default;
  }
});
</script>
<template>
  <div class="app flex flex-col min-h-screen bg-paper-bg overflow-hidden text-text-primary text-15 relative">
    <Transition name="popup">
      <div
        v-if="popupStatus" 
        class="popup-wrapper fixed z-[999] top-[50px] left-[50%] w-max"
      >
        <UiPopup 
          :title="popupText" 
          :color="popupColor"
          class="translate-x-[-50%]"
          @close="closePopup"
        >
        </UiPopup>
      </div> 
    </Transition>
    <component v-if="currentComponent" :is="currentComponent"></component>
    <NotFoundPage v-else />
  </div>
</template>