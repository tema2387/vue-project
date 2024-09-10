<script setup>
import { computed, ref } from 'vue';
 
const props = defineProps({
  active: {
    type: Boolean,
    default() {
      return false;
    }
  },
  src: {
    type: String,
    default() {
      return '/public/img/logos/levis-logo.png'
    }
  },
  desc: {
    type: String,
    default() {
      return 'desc';
    }
  },
  stars: {
    type: Number,
    default() {
      return 5;
    }
  },
  authorName: {
    type: String,
    default() {
      return 'name';
    }
  },
  authorJob: {
    type: String,
    default() {
      return 'job';
    }
  },
})

const integerStars = ref(Number.isInteger(props.stars));

const amountStars = computed(() => {
  return integerStars.value ? props.stars : props.stars - (props.stars % 1);
})
</script>
<template>
  <div 
    class="slide duration-200 flex flex-col gap-[16px] items-center text-center w-[360px] bg-paper-bg p-[32px] rounded-md shadow-md opacity-[50%]" 
    :class="{ '!opacity-100': active}"
  >
    <img 
      :src="src" 
      class="max-w-max" 
      alt="brand-logo" 
    />
    <p class="slide__desc text-13"> {{ desc }} </p>
    <div 
      v-if="integerStars" 
      class="slide__rating flex gap-[2px]"
    >
      <img 
        v-for="star in amountStars" 
        :key="star" 
        src="/public/icon/star-fill-icon.svg" 
        alt="star-fill" 
      />
    </div>
    <div 
      v-else 
      class="slide__rating flex gap-[2px]"
    >
      <img 
        v-for="star in amountStars" 
        :key="star" 
        src="/public/icon/star-fill-icon.svg" 
        alt="star-fill" 
      />
      <img 
        src="/public/icon/star-half-icon.svg" 
        alt="star-half" 
      />
    </div>
    <div class="slide__author">
      <div class="slide__author-name text-13-500">{{ authorName }}</div>
      <div class="slide__author-job text-13 text-text-secondary">{{ authorJob }}</div>
    </div>
  </div>
</template>