<script lang="ts" setup>
type TypeProps = {
  id: string,
  name: string,
}

const props = defineProps<TypeProps>();
const model = defineModel<boolean>();
</script>
<template>
  <label 
    class="radio-custom max-w-max inline-flex gap-[9px] items-center cursor-pointer"
  >
    <input 
      :id="id" 
      type="checkbox" 
      :name="name" 
      :value="id" 
      v-model="model"
      class="hidden"
    >
    <div 
      class="square flex flex-shrink-0 relative w-[16px] h-[16px] rounded-md border-[2px]"
      :class="[model ? 'bg-primary-500 border-primary-500' : 'bg-transparent border-text-secondary' ]"
    >
      <img 
        src="/icon/check-mark-checkbox.svg" 
        alt="check-icon" 
        class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]" 
        :class="[model ? 'block' : 'hidden ']"
      />
    </div>
    <slot></slot>
  </label>
</template>