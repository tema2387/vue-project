<script setup>
import { computed } from 'vue';

// type can be 'outlined', 'filled' or 'custom'
// size can be 'lg', 'md', 'sm' 
// labelBgColor can be 'footer', 'main'
const props = defineProps({
  id: {
    type: [String, Number],
    required: true,
  },
  type: {
    type: String,
    default() {
      return 'outlined';
    }
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

// sizes input
const sizeLg = 'py-[16px] px-[16px]';
const sizeMd = 'py-[12px] px-[16px]';
const sizeSm = 'py-[8px] px-[16px]';

// colors background label
const footerLabelBgColor = 'bg-footer-bg-color';
const mainLabelBgColor = 'bg-paper-bg';

const model = defineModel();

const sizeInput = computed(() => {
  return props.size === 'md' ? sizeMd : props.size === 'sm' ? sizeSm : sizeLg;
})

const labelBgColor = computed(() => {
  return props.labelBgColor === 'footer' ? footerLabelBgColor : mainLabelBgColor;
})

</script>

<template>
  <div 
    v-if="type === 'outlined'" 
    class="input relative text-input-text"
  >
    <input 
      :id="id" 
      :placeholder="placeholder"
      type="text" 
      class="peer w-full text-input-text duration-200 bg-transparent outline outline-transparent outline-offset-[-2px] border border-input-border rounded-lg text-text-disabled placeholder-transparent focus:placeholder-text-disabled focus:border-primary-500 focus:outline-primary-500 focus:text-text-primary hover:border-action-active hover:text-text-primary"
      :class="sizeInput"
      v-model="model"
    />
    <label 
      :for="id"
      class="absolute flex h-full pointer-events-none z-[1] text-text-disabled items-center duration-200 left-[16px] top-0 peer-hover:text-text-primary peer-focus:text-primary-500 peer-focus:translate-y-[-50%] peer-focus:text-13"
      :class="{'translate-y-[-50%]': model, 'text-13': model}"
    >
      {{ label }}
    </label>
    <div 
      class="input-label-background text-13 duration-200 absolute h-[4px] top-[-1px] left-[14px] px-[2px] opacity-0 peer-focus:opacity-100"
      :class="[{'opacity-100': model}, labelBgColor]"
    >
      <span class="invisible">
        {{ label }}
      </span>
    </div>
  </div>
</template>