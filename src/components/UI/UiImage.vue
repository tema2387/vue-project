<script lang="ts" setup>
import { onMounted, watch } from 'vue';
// Модули
import loadingImage from '@/modules/loadingImage';

type TypeProps = {
  src: string,
  alt: string,
}

const props = defineProps<TypeProps>();

const { loaded, loading } = loadingImage();

onMounted((): void => {
  loading(props.src);
})

watch(() => props.src, (newValue: string) => {
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
  <img 
    v-else 
    src="/img/opacity-loader-bg.png" 
    class="preloader-image bg-gray-linear bg-[length:50%_100%] bg-no-repeat animate-line rounded-md"
  >
</template>