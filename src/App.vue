<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

// components
import UIPopup from '@/components/UI/UIPopup.vue';

const route = useRoute();

// js
import { popupText, popupStatus, popupColor, closePopup } from '@/modules/showPopup.js';

const currentComponent = computed(() => {
  return route.matched[0]?.components.default;
});

</script>
<template>
  <div class="app flex flex-col min-h-screen bg-paper-bg overflow-hidden text-text-primary text-15 relative">
    <Transition name="popup">
      <div
        v-if="popupStatus" 
        class="popup-wrapper fixed z-[999] top-[50px] left-[50%] w-max"
      >
        <UIPopup 
          :title="popupText" 
          :color="popupColor"
          class="translate-x-[-50%]"
          @close="closePopup"
        >
        </UIPopup>
      </div> 
    </Transition>
    <component :is="currentComponent"></component>
  </div>
</template>