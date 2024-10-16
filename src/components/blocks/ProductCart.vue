<script setup>
// components
import UiInputText from '@/components/UI/UiInputText.vue';

// icons
import CloseLineIcon from '@/components/UI/svg/CloseLineIcon.vue';

// js
import { removeProduct } from '@/store/productsStore.js';

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default() {
      return 5;
    }
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: [String, Number],
    required: true, 
  },
  oldPrice: {
    type: [String, Number],
    required: true, 
  },
  count: {
    type: Number,
    required: true,
  }
})

</script>
<template>
  <div class="product-cart flex items-center border-divider p-[20px]">
    <UiImage 
      :src="img" 
      class="w-[140px] aspect-[1]" 
      alt="product-cart-img"
    />
    <div class="product-cart__center flex flex-1 flex-col gap-[8px]">
      <div class="text-15-500">{{ name }}</div>
      <div class="flex items-center">
        <div>
          <span class="text-text-secondary">Sold by: </span>
          <span class="text-primary-500">{{ brand }}</span>
        </div>
        <div class="py-[2px] px-[12px] ml-[16px] rounded-full text-success-500 bg-success-opacity/[16%]">In Stock</div>
      </div>
      <div class="product-cart__rating flex">
        <img 
          v-for="r in rating" 
          :key="r" 
          src="/public/icon/star-fill-icon.svg" 
          alt="fill-star-icon" 
        />
        <img 
          v-for="r in (5 - rating)" 
          :key="r" 
          src="/public/icon/star-void-icon.svg" 
          alt="fill-star-icon" 
        />
      </div>
      <UiInputText 
        :id="id"
        :size="'sm'"
        :readonly="true"
        :placeholder="count"
        class="max-w-[150px]"
      />
    </div>
    <div class="product-cart__left flex flex-col items-end gap-[16px]">
      <CloseLineIcon 
        @click="removeProduct(props.id)" 
        class="cursor-pointer opacity-[0.4]" 
      />
      <div>
        <span class="text-primary-500">{{ price }}/</span>
        <span>{{ oldPrice }}</span>
      </div>
      <UiButton :type="'outline'" :size="'md'" :text="'md'">Move to Wishlist</UiButton>
    </div>
  </div>
</template>