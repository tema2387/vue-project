<script lang="ts" setup>
import { computed, ref } from 'vue';
// Пропс size может быть 'lg', 'md', 'sm' 
// Пропс labelBgColor может быть 'footer', 'main'
type TypeProps = {
  id: string,
  label: string,
  placeholder?: string,
  size?: string,
}

const props = withDefaults(defineProps<TypeProps>(), {
  size: 'md',
});

const model = defineModel<string>();

const focusOnInput = ref<boolean>(false);

// Размеры textarea
const sizeLg: string = 'py-[16px] px-[16px]';
const sizeMd: string  = 'py-[12px] px-[16px]';
const sizeSm: string  = 'py-[8px] px-[16px]';

const sizeTextarea = computed<string>(() => {
  return props.size === 'md' ? sizeMd : props.size === 'sm' ? sizeSm : sizeLg;
})
</script>
<template>
  <div class="textarea group relative text-input-text">
    <textarea
      :id="id" 
      :placeholder="placeholder"
      @focus="focusOnInput = true"
      @blur="focusOnInput = false"
      class="peer w-full h-full text-text-primary duration-200 placeholder-transparent bg-transparent focus:placeholder-text-disabled outline-none resize-none"
      :class="sizeTextarea"
      v-model="model"
    />
    <label 
      :for="id"
      class="absolute left-[16px] flex pointer-events-none text-text-primary items-center duration-200 translate-y-[-50%] peer-focus:text-primary-500 peer-focus:top-0 peer-focus:text-13"
      :class="[model ? 'top-0' : 'top-[12%]', { 'text-13': model }]"
    >
      {{ label }} 
    </label>
    <div class="absolute duration-200 flex pointer-events-none top-0 left-0 w-full h-full">
      <div 
        class="input__part-1 w-[11px] relative border-input-border border-l border-t border-b rounded-l-md before:content-[''] before:w-[calc(100%_+_1px)] before:h-[calc(100%_+_2px)] before:absolute before:border-l-[2px] before:border-t-[2px] before:border-b-[2px] before:rounded-l-md before:top-[-1px] before:left-[-1px]"
        :class="[focusOnInput ? 'border-primary-500 group-hover:border-primary-500 before:border-primary-500' : 'border-input-border group-hover:border-action-active before:border-transparent']"
      >
      </div>
      <div 
        class="input__part-2 relative text-transparent border-b text-13 h-full w-max before:content-[''] before:w-full before:h-[calc(100%_+_2px)] before:absolute before:border-b-[2px] before:top-[-1px]"
        :class="[focusOnInput ? 'border-primary-500 group-hover:border-primary-500 before:border-primary-500' : 'border-input-border group-hover:border-action-active before:border-transparent', focusOnInput || model ? 'border-t-0 before:border-t-0' : 'border-t before:border-t-[2px]']"
      >
        <span class="mx-[5px]">{{ label }}</span>
      </div>
      <div 
        class="input__part-3 relative flex-1 border-r border-t border-b rounded-r-md before:content-[''] before:w-[calc(100%_+_1px)] before:h-[calc(100%_+_2px)] before:flex before:absolute before:border-r-[2px] before:border-t-[2px] before:border-b-[2px] before:rounded-r-md before:top-[-1px]"
        :class="[focusOnInput ? 'border-primary-500 group-hover:border-primary-500 before:border-primary-500' : 'border-input-border group-hover:border-action-active before:border-transparent']"
      >
      </div>
    </div>
  </div>
</template>