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
  <div class="card-read flex flex-1 flex-col p-[20px] rounded-md border border-devider text-center items-center gap-[12px] text-text-secondary">
    <component :is="img" class="text-text-secondary"></component>
    <h5>{{ title }}</h5>
    <div class="text-text-secondary">
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