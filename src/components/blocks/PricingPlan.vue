<script setup>
const props = defineProps({
  alreadyActivePlan: {
    type: Boolean,
    default() {
      return false;
    }
  },
  plan: {
    type: String,
    default() {
      return 'plan';
    }
  },
  subtitle: {
    type: String,
    default() {
      return 'subtitle';
    }
  },
  wallet: {
    type: String,
    default() {
      return '$';
    }
  },
  img: {
    type: String,
    default() {
      return '/'
    }
  },
  price: {
    type: String,
    default() {
      return '00';
    }
  },
  priceYear: {
    type: String,
    default() {
      return '00';
    }
  },
  priceYearActive: {
    type: Boolean,
    default() {
      return false;
    }
  },
  possibilities: {
    type: Array,
    default() {
      return [];
    }
  },
  popular: {
    type: Boolean,
    default() {
      return false;
    }
  }
})
</script>
<template>
  <div class="pricing-plan flex-1 flex flex-col min-w-[280px] gap-[20px] px-[24px] pt-[60px] pb-[20px] border border-devider rounded-md text-center relative">
    <div v-if="popular" class="pricing-plan__popular absolute px-[12px] py-[2px] rounded-full text-primary-500 bg-primary-opacity/[16%] right-[20px] top-[16px]">Popular</div>
    <UiImage :src="img" class="h-[120px] mx-auto" :alt="'pricing-plan-image'" />
    <div class="flex flex-col gap-[8px]">
      <h4 class="pricing-plan__title">{{ plan }}</h4>
      <p class="pricing-plan__subtitle text-text-secondary">{{ subtitle }}</p>
    </div>
    <div class="pricing-plan__price flex flex-col justify-center">
      <div class="flex justify-center">
        <div class="text-text-secondary text-15-500 self-start">{{ wallet }}</div>
        <h1 class="text-primary-500">{{ price }}</h1>
        <div class="text-text-secondary text-15-500 self-end">/month</div>
      </div>
      <div 
        class="opacity-0 pricing-plan__price-year h-[18px] text-text-disabled"
        :class="{ 'opacity-100': priceYearActive}"
      >
        USD {{ priceYear }}/year
      </div>
    </div>
    <ul class="pricing-plan__possibilities flex text-start flex-col gap-[16px]">
      <li 
        v-for="(poss, index) in possibilities"
        :key="index" 
        class="pricing-plan__possibility flex items-center"
      >
        <span class="w-[14px] h-[14px] border-[2px] border-text-secondary bg-transparent rounded-full mr-[21px]" />
        <div>{{ poss }}</div>
      </li>
    </ul>
    <UiButton 
      v-if="alreadyActivePlan" 
      :type="'outline'" 
      :size="'md'" 
      :text="'md'" 
      :color="'success'" 
      class="mt-[20px]" 
    >
      Your Current Plan
    </UiButton>
    <UiButton 
      v-else 
      :type="'outline'" 
      :size="'md'" 
      :text="'md'" 
      class="mt-[20px]"
    >
      Upgrade
    </UiButton>
  </div>
</template>