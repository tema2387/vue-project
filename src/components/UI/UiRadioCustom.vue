<script setup>
// type can be 'basic'(its default), 'icon', 'custom-icon', 'image'

const props = defineProps({
  id: {
    type: [String, Number],
    required: true,
  },
  type: {
    type: String,
    default() {
      return 'basic';
    }
  },
  name: {
    type: String,
    required: true,
  },
});

const model = defineModel();

</script>
<template>
  <label 
    class="radio-custom px-[16px] pt-[28px] pb-[16px] w-full border border-devider cursor-pointer rounded-md flex flex-col items-center"
    :class="{ 'border-primary-500': model === id }"
    v-if="type === 'icon'"
  >
    <input 
      :id="id" 
      type="radio" 
      :name="name" 
      :value="id" 
      v-model="model"
      class="hidden"
    >
    <slot></slot>
    <div
      class="circle-inside w-[16px] m-[9px] h-[16px] bg-transparent border-[2px] border-action-active rounded-full relative after:opacity-0 after:content-[''] after:w-[8px] after:h-[8px] after:absolute after:bg-primary-500 after:rounded-full after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%]"
      :class="{ 'after:opacity-100': model === id, '!border-primary-500': model === id }"
    >
    </div>
  </label>
  <label 
    class="radio-custom p-[16px] w-full border border-devider cursor-pointer rounded-md"
    :class="{ 'border-primary-500': model === id }"
    v-else
  >
    <input 
      :id="id" 
      type="radio" 
      :name="name" 
      :value="id" 
      v-model="model"
      class="hidden"
    >
    <div class="radio-custom__top flex items-center">
      <div 
        class="circle-inside w-[16px] m-[9px] h-[16px] bg-transparent border-[2px] border-action-active rounded-full relative after:opacity-0 after:content-[''] after:w-[8px] after:h-[8px] after:absolute after:bg-primary-500 after:rounded-full after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%]"
        :class="{ 'after:opacity-100': model === id, '!border-primary-500': model === id }"
      >
      </div>
      <slot name="title"></slot>
    </div>
    <slot name="content"></slot>
  </label>
</template>