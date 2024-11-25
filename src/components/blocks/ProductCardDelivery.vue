<script setup>
const props = defineProps({
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <div class="product-cart-delivery flex items-center gap-[16px]">
    <UiImage 
      :src="img" 
      :alt="'product-cart-icon'"
      class="max-w-[56px] aspect-[1]"
    />
    <div class="product-cart-delivery__content text-text-secondary">
      <div class="title">{{ name }}</div>
      <div class="text-15-500">20th Nov 2021</div>
    </div>
  </div>
</template>