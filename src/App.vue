<script setup>
// import { computed } from 'vue';
// import { useRoute } from 'vue-router';
// Компоненты
import UiPopup from '@/components/UI/UiPopup.vue';
// Модули
import { popupText, popupStatus, popupColor, closePopup } from '@/modules/togglePopup';

// const route = useRoute();

// Отрисовка страницы с перезагрузкой
// const currentComponent = computed(() => {
//   if(route.matched[0]) {
//     return route.matched[0]?.components.default;
//   }
// });
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
    <!-- <component v-if="currentComponent" :is="currentComponent"></component> -->
    <RouterView></RouterView>
  </div>
</template>