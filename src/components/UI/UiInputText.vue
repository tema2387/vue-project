<script setup>
import { computed } from 'vue';
// Иконки
import SearchIcon from '@/components/UI/svg/SearchIcon.vue'
import EyePasswordIcon from '@/components/UI/svg/EyePasswordIcon.vue';

// Пропс type может быть 'outlined', 'filled' or 'custom'
// Пропс size может быть 'lg', 'md', 'sm' 
// Пропс labelBgColor может быть 'footer', 'main'
// Пропс status может быть 'default' (default), success, error
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
  },
  helpText: {
    type: String,
    default() {
      return '';
    }
  },
  status: {
    type: String,
    default() {
      return 'default';
    }
  },
  eyeIcon: {
    type: Boolean,
    default() {
      return false;
    }
  },
  passwordInput: {
    type: Boolean,
    default() {
      return false;
    }
  }
});

// Размеры input
const sizeLg = 'px-[16px] py-[16px]';
const sizeMd = 'px-[16px] py-[12px]';
const sizeSm = 'px-[16px] py-[8px]';

// Цвет border
const borderError = '!border-error-500 !outline-error-500 focus:border-error-500 focus:outline-error-500';
const borderSuccess = '!border-success-500 !outline-success-500 focus:border-success-500 focus:outline-success-500';

// Цвет бэкграунда label
const footerLabelBgColor = 'bg-footer-bg-color';
const mainLabelBgColor = 'bg-paper-bg';

const model = defineModel();
const emits = defineEmits(['toggleInput']);

const sizeInput = computed(() => {
  return props.size === 'md' ? sizeMd : props.size === 'sm' ? sizeSm : sizeLg;
})

const posLeftIcon = computed(() => {
  return props.size === 'md' 
    ? 'left-[16px] top-[12px]' : props.size === 'sm' 
      ? 'left-[16px] top-[8px]' : 'left-[16px] top-[16px]';
})

const posRightIcon = computed(() => {
  return props.size === 'md' 
    ? 'right-[16px] top-[12px]' : props.size === 'sm' 
      ? 'right-[16px] top-[8px]' : 'right-[16px] top-[16px]';
})

const setBorderColor = computed(() => {
  return props.status === 'error' ? borderError : props.status === 'success' ? borderSuccess : '';
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
      :type="passwordInput ? 'password' : 'text'" 
      class="peer w-full text-input-text duration-200 bg-transparent outline outline-transparent outline-offset-[-2px] border border-input-border rounded-lg text-text-disabled focus:placeholder-text-disabled focus:border-primary-500 focus:outline-primary-500 focus:text-text-primary hover:border-action-active hover:text-text-primary"
      :class="[sizeInput, setBorderColor, { 'pl-[46px]': searchIcon, 'placeholder-transparent': label}]"
      v-model="model"
    />
    <label 
      :for="id"
      class="absolute flex h-full pointer-events-none z-[1] text-text-disabled items-center duration-200 left-[16px] top-0 peer-hover:text-text-primary peer-focus:text-primary-500 peer-focus:translate-y-[-50%] peer-focus:text-13"
      :class="{'translate-y-[-50%]': model, 'text-13': model, '!left-[46px]': searchIcon, '!text-error-500': status === 'error', '!text-success-500': status === 'success' }"
    >
      {{ label }} 
    </label>
    <div 
      v-if="label"
      class="input-label-background text-13 duration-200 absolute h-[4px] left-[14px] top-[-1px] px-[2px] opacity-0 peer-focus:opacity-100"
      :class="[{'opacity-100': model, '!left-[44px]': searchIcon }, labelBgColor]"
    >
      <span class="invisible">
        {{ label }}
      </span>
    </div>
    <EyePasswordIcon
      v-if="eyeIcon"
      class="absolute translate-y-[15%] cursor-pointer" 
      :class="posRightIcon" 
      @click="$emit('toggleInput')"
    />
    <span 
      v-if="helpText" 
      class="help-text absolute left-[16px] bottom-[-2px] translate-y-[100%] text-helper-text"
      :class="{ 'text-error-500': status === 'error', 'text-success-500': status === 'success' }"
    >
      {{ helpText }}
    </span>
  </div>
</template>