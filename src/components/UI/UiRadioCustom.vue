<script setup>
// type can be 'basic', 'icon', 'custom-icon', 'image'
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
  text: {
    type: String,
    default() {
      return '';
    }
  }
});

const model = defineModel();

</script>
<template>
  <label 
    class="radio-custom p-[20px] w-full border border-devider cursor-pointer rounded-md flex items-center"
    :class="{ 'border-primary-500': model === id }"
  >
    <input 
      :id="id" 
      type="radio" 
      :name="name" 
      :value="id" 
      v-model="model"
      class="hidden"
    >
    <div 
      class="circle-inside w-[16px] h-[16px] bg-transparent mr-[27px] border-[2px] border-action-active rounded-full relative after:opacity-0 after:content-[''] after:w-[8px] after:h-[8px] after:absolute after:bg-primary-500 after:rounded-full after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%]"
      :class="{ 'after:opacity-100': model === id, '!border-primary-500': model === id }"
    >
    </div>
    <div class="radio-custom__content flex items-center gap-[16px]">
      <slot></slot>
    </div>
  </label>
</template>