<script setup>
// components
import UiInputText from '@/components/UI/UiInputText.vue';

// icons
import CloseLineIcon from '@/components/UI/svg/CloseLineIcon.vue';

// js
import { removeProduct } from '@/store/productsStore.js';

// type can be default(default) or confirm
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    default() {
      return 'default';
    }
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
  <div 
    v-if="type === 'confirm'" 
    class="product-cart flex items-center gap-[10px] sm:gap-[0px] flex-col sm:flex-row border-devider p-[20px]"
  >
    <UiImage 
      :src="img" 
      class="w-[80px] aspect-[1]" 
      alt="product-cart-img"
    />
    <div class="product-cart__center items-center sm:items-start flex flex-1 flex-col gap-[8px]">
      <div class="text-15-500">{{ name }}</div>
      <div>
        <span class="text-text-secondary">Sold by: </span>
        <span class="text-primary-500">{{ brand }}</span>
      </div>
      <div class="py-[2px] px-[12px] max-w-max rounded-full text-success-500 bg-success-opacity/[16%]">In Stock</div>
    </div>
    <div class="product-cart__left flex flex-col items-end gap-[16px]">
      <div>
        <span class="text-primary-500">{{ price }}/</span>
        <span>{{ oldPrice }}</span>
      </div>
    </div>
  </div>
  <div v-else class="product-cart flex relative flex-col sm:flex-row items-center gap-[10px] sm:gap-[0px] border-devider p-[20px]">
    <CloseLineIcon 
        @click="removeProduct(props.id)" 
        class="cursor-pointer absolute sm:hidden right-[20px] opacity-[0.4]" 
    />
    <UiImage 
      :src="img" 
      class="w-[140px] aspect-[1]" 
      alt="product-cart-img"
    />
    <div class="product-cart__center flex items-center sm:items-start flex-1 flex-col gap-[8px]">
      <div class="text-15-500">{{ name }}</div>
      <div class="flex items-center">
        <div>
          <span class="text-text-secondary">Sold by: </span>
          <span class="text-primary-500">{{ brand }}</span>
        </div>
        <div class="py-[2px] px-[12px] ml-[16px] flex-shrink-0 rounded-full text-success-500 bg-success-opacity/[16%]">In Stock</div>
      </div>
      <div class="product-cart__rating flex">
        <img 
          v-for="r in rating" 
          :key="r" 
          src="/icon/star-fill-icon.svg" 
          alt="fill-star-icon" 
        />
        <img 
          v-for="r in (5 - rating)" 
          :key="r" 
          src="/icon/star-void-icon.svg" 
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
    <div class="product-cart__left flex flex-col items-center sm:items-end gap-[16px]">
      <CloseLineIcon 
        @click="removeProduct(props.id)" 
        class="cursor-pointer hidden sm:block opacity-[0.4]" 
      />
      <div>
        <span class="text-primary-500">{{ price }}/</span>
        <span>{{ oldPrice }}</span>
      </div>
      <UiButton :type="'outline'" :size="'md'" :text="'md'">Move to Wishlist</UiButton>
    </div>
  </div>
</template>