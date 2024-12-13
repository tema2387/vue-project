<script setup>
const props = defineProps({
  img: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    default() {
      return '';
    }
  },
  subtitle1: {
    type: String,
    default() {
      return '';
    }
  },
  subtitle2: {
    type: String,
    default() {
      return '';
    }
  },
})
</script>
<template>
  <div class="card-read flex flex-1 flex-col min-w-[200px] justify-between p-[20px] rounded-md border border-devider text-center items-center gap-[12px] text-text-secondary">
    <div class="flex flex-col items-center gap-[12px]">
      <component :is="img" class="text-text-secondary"></component>
      <h5 class="card-read__title">{{ title }}</h5>
    </div>
    <div class="card-read__desc text-text-secondary">
      <div>{{ subtitle1 }}</div>
      <div>{{ subtitle2 }}</div>
    </div>
    <UiButton 
      :type="'outline'" 
      :size="'md'"
      :text="'md'"
    >
      Read More
    </UiButton>
  </div>
</template>