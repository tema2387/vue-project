<script setup>
import { computed } from 'vue';

// size can be 'lg', 'md', 'sm' 
// labelBgColor can be 'footer', 'main'
const props = defineProps({
  id: {
    type: [String, Number],
    required: true,
  },
  size: {
    type: String,
    default() {
      return 'lg';
    }
  },
  labelBgColor:{
    type: String,
    default() {
      return 'main'
    }
  },
  label: String,
  placeholder: String,
});

// sizes textarea
const sizeLg = 'py-[16px] px-[16px]';
const sizeMd = 'py-[12px] px-[16px]';
const sizeSm = 'py-[8px] px-[16px]';

// position label
const posLabelLg = 'top-[16px] left-[16px]';
const posLabelMd = 'top-[12px] left-[16px]';
const posLabelSm = 'top-[8px] left-[16px]';

// colors background label
const footerLabelBgColor = 'bg-footer-bg-color';
const mainLabelBgColor = 'bg-paper-bg';

defineEmits(['inputValue'])
const model = defineModel();

const sizeTextarea = computed(() => {
  return props.size === 'md' ? sizeMd : props.size === 'sm' ? sizeSm : sizeLg;
})

const posLabel = computed(() => {
  return props.size === 'md' ? posLabelMd : props.size === 'sm' ? posLabelSm : posLabelLg;
})

const labelBgColor = computed(() => {
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
      @input="$emit('inputValue', model)"
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