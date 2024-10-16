<script setup>
import { computed, readonly } from 'vue';

// icons
import SearchIcon from '@/components/UI/svg/SearchIcon.vue'

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
  label: [Number, String],
  placeholder: [Number, String],
  searchIcon: {
    type: Boolean,
    default() {
      return false;
    }
  },
  readonly: {
    type: Boolean,
    default() {
      return false;
    }
  }
});

// sizes input
const sizeLg = 'px-[16px] py-[16px]';
const sizeMd = 'px-[16px] py-[12px]';
const sizeSm = 'px-[16px] py-[8px]';

// colors background label
const footerLabelBgColor = 'bg-footer-bg-color';
const mainLabelBgColor = 'bg-paper-bg';

const model = defineModel();

const sizeInput = computed(() => {
  return props.size === 'md' ? sizeMd : props.size === 'sm' ? sizeSm : sizeLg;
})

const posLeftIcon = computed(() => {
  return props.size === 'md' 
    ? 'left-[16px] top-[12px]' : props.size === 'sm' 
      ? 'left-[16px] top-[8px]' : 'left-[16px] top-[16px]';
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
    <label
      v-if="searchIcon" 
      :for="id"
      class="absolute translate-y-[15%]"
      :class="posLeftIcon"
    >
      <SearchIcon />
    </label>
    <input 
      :id="id" 
      :placeholder="placeholder"
      :readonly="props.readonly"
      type="text" 
      class="peer w-full text-input-text duration-200 bg-transparent outline outline-transparent outline-offset-[-2px] border border-input-border rounded-lg text-text-disabled focus:placeholder-text-disabled focus:border-primary-500 focus:outline-primary-500 focus:text-text-primary hover:border-action-active hover:text-text-primary"
      :class="[sizeInput, { 'pl-[46px]': searchIcon }, {'placeholder-transparent': label}]"
      v-model="model"
    />
    <label 
      :for="id"
      class="absolute flex h-full pointer-events-none z-[1] text-text-disabled items-center duration-200 left-[16px] top-0 peer-hover:text-text-primary peer-focus:text-primary-500 peer-focus:translate-y-[-50%] peer-focus:text-13"
      :class="[{'translate-y-[-50%]': model, 'text-13': model, '!left-[46px]': searchIcon}]"
    >
      {{ label }} 
    </label>
    <div 
      v-if="label"
      class="input-label-background text-13 duration-200 absolute h-[4px] left-[14px] top-[-1px] px-[2px] opacity-0 peer-focus:opacity-100"
      :class="[{'opacity-100': model, '!left-[44px]': searchIcon}, labelBgColor]"
    >
      <span class="invisible">
        {{ label }}
      </span>
    </div>
  </div>
</template>