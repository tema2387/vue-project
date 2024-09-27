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
  width: {
    type: [String, Number],
    default() {
      return 'auto';
    }
  },
  height: {
    type: [String, Number],
    default() {
      return 'auto';
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
  <div
    v-else
    class="loader-wrapper flex items-center justify-center"
  >
      <div class="loader"></div>
  </div>
</template>