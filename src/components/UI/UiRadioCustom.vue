<script lang="ts" setup>
// Пропс может быть 'basic', 'icon', 'custom-icon', 'image'
type TypeProps = {
  id: string,
  name: string,
  type?: string,
}

const props = defineProps<TypeProps>();
const model = defineModel<string>();
</script>
<template>
  <label 
    v-if="type === 'icon'"
    class="radio-custom px-[16px] pt-[28px] pb-[16px] w-full border cursor-pointer rounded-md flex flex-col items-center"
    :class="[model === id ? 'border-primary-500' : 'border-devider']"
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
      :class="[model === id ? 'border-primary-500 after:opacity-100' : 'border-action-active  after:opacity-0 ']"
    >
    </div>
  </label>
  <label 
    v-else
    class="radio-custom p-[16px] w-full border cursor-pointer rounded-md"
    :class="[model === id ? 'border-primary-500' : 'border-devider']"
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
        class="circle-inside flex flex-shrink-0 w-[16px] m-[9px] h-[16px] bg-transparent border-[2px] rounded-full relative after:content-[''] after:w-[8px] after:h-[8px] after:absolute after:bg-primary-500 after:rounded-full after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%]"
        :class="[model === id ? 'border-primary-500 after:opacity-100' : 'border-action-active after:opacity-0']"
      >
      </div>
      <slot name="title"></slot>
    </div>
    <slot name="content"></slot>
  </label>
</template>