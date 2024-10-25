<script setup>
import VueSlider from 'vue-3-slider-component';

const model = defineModel();
</script>
<template>
  <div>
    <VueSlider v-model="model" />
  </div>
</template>