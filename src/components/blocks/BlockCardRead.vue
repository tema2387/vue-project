<script lang="ts" setup>
type TypeProps = {
  title: string,
  subtitle1: string,
  subtitle2: string,
}

const props = defineProps<TypeProps>()
</script>
<template>
  <div class="card-read flex flex-1 flex-col min-w-[200px] justify-between p-[20px] rounded-md border border-devider text-center items-center gap-[12px] text-text-secondary">
    <div class="flex flex-col items-center gap-[12px]">
      <slot name="icon"></slot>
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