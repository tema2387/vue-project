<script setup>
import { ref } from "vue";
import VueSlider from "vue-3-slider-component";

const value = ref(0);
</script>
<template>
  <div>
    <VueSlider v-model="value" />
  </div>
</template>