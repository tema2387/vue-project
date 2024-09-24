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
    type: Number,
    default() {
      return 50;
    }
  },
  height: {
    type: Number,
    default() {
      return 50;
    }
  },
  widthFull: {
    type: Boolean,
    default() {
      return false;
    }
  },
  heightFull: {
    type: Boolean,
    default() {
      return false;
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
    :style="{ width: widthFull ? '100%' : props.width + 'px', height: heightFull ? '100%' : props.height + 'px' }"
  >
    <div class="loader"></div>
  </div>
</template>