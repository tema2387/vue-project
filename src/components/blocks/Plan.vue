<script setup>
import { ref } from 'vue';

const props = defineProps({
  plan: {
    type: String,
    default() {
      return 'plan';
    }
  },
  wallet: {
    type: String,
    default() {
      return '$';
    }
  },
  price: {
    type: String,
    default() {
      return '00';
    }
  },
  possibilities: {
    type: Array,
    default() {
      return [];
    }
  },
  supportPlan: {
    type: String,
    default() {
      return 'supportPlan';
    }
  },
  supportHow: {
    type: String,
    default() {
      return 'supportHow';
    }
  },
  supportTime: {
    type: String,
    default() {
      return 'supportTime';
    }
  },
})

const isHovered = ref(false);

</script>
<template>
  <div 
    @mouseover="isHovered = true" 
    @mouseleave="isHovered = false" 
    class="plan bg-paper-bg p-[32px] duration-200 outline outline-1 outline-transparent border border-devider rounded-md w-[364px] hover:border-primary-500 hover:outline-primary-500"
  >
    <h4 class="plan__title text-center">{{ plan }}</h4>
    <div class="plan__price relative flex items-center mt-[12px] gap-[12px]">
      <div class="plan__price-title flex">
        <h5 class="mt-[7px]">{{ wallet }}</h5>
        <span class="text-price-bold">{{ price }}</span>
      </div>
      <div class="plan__price-more">
        <div class="text-15-500">Per month</div>
        <div class="text-text-secondary text-13">10% off for yearly subscription</div>
      </div>
      <img src="/public/icon/icon-plan.svg" alt="icon-plan" class="absolute left-0 bottom-[-19px]" />
    </div>
    <div class="plan__possibilities flex flex-col mt-[51px] mb-[16px] gap-[12px]">
      <div v-for="poss in possibilities" :key="poss" class="plant__possibility flex gap-[12px]">
        <img src="/public/icon/arrow-right-plan.svg" alt="arrow-right" />
        <h5>{{ poss }}</h5>
      </div>
    </div>
    <div class="plan__support pt-[16px] mb-[27px] border-t-[1px] flex items-center justify-between border-devider">
      <div class="plan__support-desc">
        <div class="text-15-500">{{ supportPlan }}</div>
        <div class="mt-[4px] text-13 text-text-secondary">{{ supportHow }}</div>
      </div>
      <div class="plan__support-time text-13 text-primary-500 bg-primary-opacity/[16%] px-[12px] py-[2px] rounded-full">{{ supportTime }}</div>
    </div>
    <UiLink :type="'inside'" :href="'/order'">
      <UiButton :type="isHovered ? 'default': 'outline'">Get Started</UiButton>
    </UiLink>
  </div>
</template>