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
  },
  loaderSize: {
    type: Number,
    default() {
      return 50;
    }
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
  >
  <div v-else>
    <div class="loader-wrapper w-full h-full flex justify-center items-center">
      <div class="loader max-w-[50px] max-h-[50px]" :style="{ 'width': loaderSize + 'px' }"></div>
    </div>
  </div>
</template>