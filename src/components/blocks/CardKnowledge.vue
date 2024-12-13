<script setup>
import { computed } from "vue";
// Иконки
import ArrowRightSIcon from "@/components/UI/svg/ArrowRightSIcon.vue";
import ArrowRightIcon from '@/components/UI/svg/ArrowRightIcon.vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  titleIcon: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    default() {
      return [];
    }
  },
})

const itemsMax = computed(() => {
  return props.items.length > 6 ? props.items.slice(0, 6) : props.items;
})
</script>
<template>
  <div class="card-knowledge flex flex-1 flex-col min-w-[250px] justify-between shadow-md p-[20px] rounded-md gap-[24px]">
    <div class="card-knowledge__title flex items-center">
      <img :src="titleIcon" alt="card-base-icon" class="card-knowledge__image p-[6px] rounded-md bg-primary-opacity/[16%]" />
      <h5 class="card-knowledge__title ml-[12px]">{{ title }}</h5>
    </div>
    <div class="card-knowledge__list flex flex-col gap-[8px]">
      <UiLink
        v-for="item in itemsMax" 
        :href="'#'"
        :key="item.id"
        class="flex items-center"
      >
        <div class="flex-1">{{ item.title }}</div>
        <ArrowRightSIcon class="opacity-[0.4]" />
      </UiLink>
    </div>
    <UiLink :href="'#'" class="text-primary-500 flex items-center gap-[8px]">
      <div>See all {{ items.length || '' }} articles</div>
      <ArrowRightIcon />
    </UiLink>
  </div>
</template>