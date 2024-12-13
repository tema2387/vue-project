<script setup>
import VueSlider from 'vue-3-slider-component';

const model = defineModel();
</script>
<template>
  <div class="input-range">
    <VueSlider v-model="model" />
  </div>
</template>