<script lang="ts" setup>
import { computed } from 'vue';
// Пропс size может быть 'lg', 'md', 'sm' 
// Пропс labelBgColor может быть 'footer', 'main'
type TypeProps = {
  id: string,
  label: string,
  labelBgColor?: string,
  placeholder?: string,
  size?: string,
}

const props = withDefaults(defineProps<TypeProps>(), {
  size: 'md',
});
const model = defineModel<string>();

// Размеры textarea
const sizeLg: string = 'py-[16px] px-[16px]';
const sizeMd: string  = 'py-[12px] px-[16px]';
const sizeSm: string  = 'py-[8px] px-[16px]';

// Позиционирование label
const posLabelLg: string  = 'top-[16px] left-[16px]';
const posLabelMd: string  = 'top-[12px] left-[16px]';
const posLabelSm: string  = 'top-[8px] left-[16px]';

// Цвет бэкграунда label
const footerLabelBgColor: string  = 'bg-footer-bg-color';
const mainLabelBgColor: string  = 'bg-paper-bg';

const sizeTextarea = computed<string>(() => {
  return props.size === 'md' ? sizeMd : props.size === 'sm' ? sizeSm : sizeLg;
})

const posLabel = computed<string>(() => {
  return props.size === 'md' ? posLabelMd : props.size === 'sm' ? posLabelSm : posLabelLg;
})

const labelBgColor = computed<string>(() => {
  return props.labelBgColor === 'footer' ? footerLabelBgColor : mainLabelBgColor;
})
</script>
<template>
  <div class="textarea relative text-input-text">
    <textarea
      :id="id" 
      :placeholder="placeholder"
      class="peer w-full h-full resize-none text-input-text duration-200 bg-transparent outline outline-transparent outline-offset-[-2px] border border-input-border rounded-lg text-text-disabled placeholder-transparent focus:placeholder-text-disabled focus:border-primary-500 focus:outline-primary-500 focus:text-text-primary hover:border-action-active hover:text-text-primary"
      :class="sizeTextarea"
      v-model="model"
    />
    <label 
      :for="id"
      class="absolute flex pointer-events-none z-[1] text-text-disabled items-center duration-200 peer-hover:text-text-primary peer-focus:top-0 peer-focus:text-primary-500 peer-focus:translate-y-[-50%] peer-focus:text-13"
      :class="[{'translate-y-[-50%]': model, 'text-13': model, '!top-0': model}, posLabel]"
    >
      {{ label }}
    </label>
    <div 
      class="textarea-label-background text-13 duration-200 absolute h-[4px] top-[-1px] left-[14px] px-[2px] opacity-0 peer-focus:opacity-100"
      :class="[{'opacity-100': model}, labelBgColor]"
    >
      <span class="invisible">
        {{ label }}
      </span>
    </div>
  </div>
</template>