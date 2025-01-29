<script lang="ts" setup>
import { computed, ref } from 'vue';

type TypeProps = {
  active: boolean,
  src: string,
  desc: string,
  authorName: string,
  authorJob: string,
  stars?: number,
}
 
const props = withDefaults(defineProps<TypeProps>(), {
  stars: 5,
});

const integerStars = ref<boolean>(Number.isInteger(props.stars));

const amountStars = computed<number>(() => {
  return integerStars.value ? props.stars : props.stars - (props.stars % 1);
})
</script>
<template>
  <div 
    class="slide duration-200 flex flex-col gap-[16px] items-center text-center w-full bg-paper-bg p-[32px] rounded-md shadow-md" 
    :class="[ active ? 'opacity-100' : 'opacity-[50%]']"
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
        src="/icon/star-fill-icon.svg" 
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
        src="/icon/star-fill-icon.svg" 
        alt="star-fill" 
      />
      <img 
        src="/icon/star-half-icon.svg" 
        alt="star-half" 
      />
    </div>
    <div class="slide__author">
      <div class="slide__author-name text-13-500">{{ authorName }}</div>
      <div class="slide__author-job text-13 text-text-secondary">{{ authorJob }}</div>
    </div>
  </div>
</template>