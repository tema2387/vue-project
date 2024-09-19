<script setup>
import { watch, onMounted } from "vue";
import { VueToggles } from "vue-toggles";

const props = defineProps({
  leftTextFalse: {
    type: String,
    default() {
      return 'false';
    }
  },
  rightTextTrue: {
    type: String,
    default() {
      return 'true';
    }
  }
})

let vueToggleDot;

onMounted(() => {
  vueToggleDot = document.querySelector('.vue-toggles__dot');
})

const model = defineModel();

watch(model, (newValue) => {
  newValue
    ? vueToggleDot.classList.add('vue-toggles__dot-active') 
    : vueToggleDot.classList.remove('vue-toggles__dot-active')
})
</script>
<template>
  <div class="toggle flex items-center gap-[13px]">
    <div class="toggle-text__false text-text-secondary">{{ leftTextFalse }}</div>
    <VueToggles 
      :width="30" 
      :height="18"
      :checkedBg="'var(--primary-500)'"
      :uncheckedBg="'var(--action-focus)'"
      v-model="model"
    />
    <div class="toggle-text__true text-text-secondary">{{ rightTextTrue }}</div>
  </div>
</template>