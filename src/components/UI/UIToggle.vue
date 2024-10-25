<script setup>
import { watch, onMounted } from "vue";
import { VueToggles } from "vue-toggles";

const props = defineProps({
  leftTextFalse: {
    type: String,
    default() {
      return '';
    }
  },
  rightTextTrue: {
    type: String,
    default() {
      return '';
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
    <div 
      v-if="leftTextFalse" 
      class="toggle-text__false"
    >
      {{ leftTextFalse }}
    </div>
    <VueToggles 
      :width="30" 
      :height="18"
      :checkedBg="'var(--primary-500)'"
      :uncheckedBg="'var(--action-focus)'"
      v-model="model"
    />
    <div 
      v-if="rightTextTrue" 
      class="toggle-text__true"
    >
      {{ rightTextTrue }}
    </div>
  </div>
</template>