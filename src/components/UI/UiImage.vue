<script setup>
import { onMounted, watch } from 'vue';
import loadingImage from '@/modules/loadingImage.js';

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true
  }
})

const { loaded, loading } = loadingImage();

onMounted(() => {
  loading(props.src);
})

watch(() => props.src, (newValue) => {
  loading(newValue);
})
</script>
<template>
  <img
    v-if="loaded"
    :src="loaded" 
    :alt="alt"
    class="image"
  />
  <img v-else src="/public/img/opacity-loader-bg.png" class="preloader-image bg-gray-linear bg-[length:50%_100%] bg-no-repeat animate-line rounded-md">
</template>