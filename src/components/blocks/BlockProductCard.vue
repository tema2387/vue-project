<script lang="ts" setup>
// Компоненты
import UiInputText from '@/components/UI/UiInputText.vue';
// Иконки
import CloseLineIcon from '@/components/UI/svg/CloseLineIcon.vue';

// Пропс type может быть default или confirm
type TypeProps = {
  id: string,
  img: string,
  name: string,
  brand: string,
  price: string,
  oldPrice: string,
  count: number,
  rating?: number,
  type?: string,
}

const props = withDefaults(defineProps<TypeProps>(), {
  rating: 5,
})

const emit = defineEmits<{
  (e: 'remove'):void,
}>();
</script>
<template>
  <div 
    v-if="type === 'confirm'" 
    class="product-card flex items-center gap-[10px] sm:gap-[0px] flex-col sm:flex-row border-devider p-[20px]"
  >
    <UiImage 
      :src="img" 
      class="w-[80px] aspect-[1]" 
      alt="product-card-img"
    />
    <div class="product-card__center items-center sm:items-start flex flex-1 flex-col gap-[8px]">
      <div class="text-15-500">{{ name }}</div>
      <div>
        <span class="text-text-secondary">Sold by: </span>
        <span class="text-primary-500">{{ brand }}</span>
      </div>
      <div class="py-[2px] px-[12px] max-w-max rounded-full text-success-500 bg-success-opacity/[16%]">In Stock</div>
    </div>
    <div class="product-card__left flex flex-col items-end gap-[16px]">
      <div>
        <span class="text-primary-500">{{ price }}/</span>
        <span>{{ oldPrice }}</span>
      </div>
    </div>
  </div>
  <div v-else class="product-card flex relative flex-col sm:flex-row items-center gap-[10px] sm:gap-[0px] border-devider p-[20px]">
    <CloseLineIcon 
        @click="emit('remove')" 
        class="cursor-pointer absolute sm:hidden right-[20px] opacity-[0.4]" 
    />
    <UiImage 
      :src="img" 
      class="w-[140px] aspect-[1]" 
      alt="product-card-img"
    />
    <div class="product-card__center flex items-center sm:items-start flex-1 flex-col gap-[8px]">
      <div class="text-15-500">{{ name }}</div>
      <div class="flex items-center">
        <div>
          <span class="text-text-secondary">Sold by: </span>
          <span class="text-primary-500">{{ brand }}</span>
        </div>
        <div class="py-[2px] px-[12px] ml-[16px] flex-shrink-0 rounded-full text-success-500 bg-success-opacity/[16%]">In Stock</div>
      </div>
      <div class="product-card__rating flex">
        <img 
          v-for="num in rating" 
          :key="num" 
          src="/icon/star-fill-icon.svg" 
          alt="fill-star-icon" 
        />
        <img 
          v-for="num in (5 - rating)" 
          :key="num" 
          src="/icon/star-void-icon.svg" 
          alt="fill-star-icon" 
        />
      </div>
      <UiInputText 
        :id="id"
        :size="'sm'"
        :readonly="true"
        :placeholder="count.toString()"
        class="max-w-[150px]"
      />
    </div>
    <div class="product-card__left flex flex-col items-center sm:items-end gap-[16px]">
      <CloseLineIcon 
        @click="emit('remove')" 
        class="cursor-pointer hidden sm:block opacity-[0.4]" 
      />
      <div>
        <span class="text-primary-500">{{ price }}/</span>
        <span>{{ oldPrice }}</span>
      </div>
      <UiButton 
        :type="'outline'" 
        :size="'md'" 
        :text="'md'"
      >
        Move to Wishlist
      </UiButton>
    </div>
  </div>
</template>