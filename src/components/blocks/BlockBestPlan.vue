<script setup lang="ts">
type TypeProps = {
    title: string,
    price: string,
    possibilities: string[],
}

const props = defineProps<TypeProps>();
</script>
<template>
  <div class="block-best-plan flex-1 flex flex-col min-w-full sm:min-w-[280px] gap-[20px] px-[24px] pt-[60px] pb-[20px] border border-devider rounded-md text-center relative">
    <div class="flex flex-col gap-[8px]">
      <h4 class="block-best-plan__title">{{ title }}</h4>
      <p class="block-best-plan__subtitle text-text-secondary">{{ price }}</p>
    </div>
    <ul class="block-best-plan__possibilities flex text-start flex-col gap-[16px]">
      <li 
        v-for="(poss, index) in possibilities"
        :key="index" 
        class="block-best-plan__possibility flex items-center"
      >
        <span class="w-[14px] flex flex-shrink-0 h-[14px] border-[2px] border-text-secondary bg-transparent rounded-full mr-[21px]" />
        <div>{{ poss }}</div>
      </li>
    </ul>
    <UiButton 
      :type="'outline'" 
      :size="'md'" 
      :text="'md'" 
      class="mt-[20px]"
    >
      Choose Plan
    </UiButton>
  </div>
</template>