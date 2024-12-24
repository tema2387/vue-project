<script lang="ts" setup>
type TypeProps = {
  img: string,
  name: string,
}
const props = defineProps<TypeProps>();
</script>
<template>
  <div class="product-card-delivery flex items-center gap-[16px]">
    <UiImage 
      :src="img" 
      :alt="'product-card-icon'"
      class="max-w-[56px] aspect-[1]"
    />
    <div class="product-card-delivery__content text-text-secondary">
      <div class="title">{{ name }}</div>
      <div class="text-15-500">20th Nov 2021</div>
    </div>
  </div>
</template>