<script lang="ts" setup>
import { computed } from 'vue';
// Иконки
import ArrowRightIcon from '@/components/UI/svg/ArrowRightIcon.vue';
import ArrowLeftIcon from '@/components/UI/svg/ArrowLeftIcon.vue';

// Пропс type может быть 'default', 'label', 'outline', 'text', 'inline-text'
// Пропс size может быть 'lg', 'md', 'sm'
// Пропс text может быть 'lg', 'md', 'sm'
// Пропс color может быть  'primary', 'secondary', 'error', 'warning', 'info', 'success'
type TypeProps = {
  type?: string,
  color?: string,
  size?: string,
  text?: string,
  leftIcon?: boolean,
  rightIcon?: boolean,
}

const props = withDefaults(defineProps<TypeProps>(), {
  type: 'default',
  size: 'md',
  text: 'md',
});

const btnLg: string = 'py-[8px] px-[22px]';
const btnMd: string = 'py-[8px] px-[18px]';
const btnSm: string = 'py-[8px] px-[14px]';

const textLg: string = 'text-button-lg';
const textMd: string = 'text-button-md';
const textSm: string = 'text-button-sm';

const colorPrimaryDefault: string = 'bg-primary-500 hover:bg-primary-600 active:bg-primary-600 focus:bg-primary-600';
const colorSecondaryDefault: string = 'bg-secondary-500 hover:bg-secondary-600 active:bg-secondary-600 focus:bg-secondary-600';
const colorErrorDefault: string = 'bg-error-500 hover:bg-error-600 active:bg-error-600 focus:bg-error-600';
const colorWarningDefault: string = 'bg-warning-500 hover:bg-warning-600 active:bg-warning-600 focus:bg-warning-600';
const colorInfoDefault: string = 'bg-info-500 hover:bg-info-600 active:bg-info-600 focus:bg-info-600';
const colorSuccessDefault: string = 'bg-success-500 hover:bg-success-600 active:bg-success-600 focus:bg-success-600';

const colorPrimaryLabel: string = 'text-primary-500 bg-primary-opacity/[16%] hover:bg-primary-opacity/[24%] active:bg-primary-opacity/[24%] focus:bg-primary-opacity/[24%]';
const colorSecondaryLabel: string = 'text-secondary-500 bg-secondary-opacity/[16%] hover:bg-secondary-opacity/[24%] active:bg-secondary-opacity/[24%] focus:bg-secondary-opacity/[24%]';
const colorErrorLabel: string = 'text-error-500 bg-error-opacity/[16%] hover:bg-error-opacity/[24%] active:bg-error-opacity/[24%] focus:bg-error-opacity/[24%]';
const colorWarningLabel: string = 'text-warning-500 bg-warning-opacity/[16%] hover:bg-warning-opacity/[24%] active:bg-warning-opacity/[24%] focus:bg-warning-opacity/[24%]';
const colorInfoLabel: string = 'text-info-500 bg-info-opacity/[16%] hover:bg-info-opacity/[24%] active:bg-info-opacity/[24%] focus:bg-info-opacity/[24%]';
const colorSuccessLabel: string = 'text-success-500 bg-success-opacity/[16%] hover:bg-success-opacity/[24%] active:bg-success-opacity/[24%] focus:bg-success-opacity/[24%]';

const colorPrimaryOutline: string = 'text-primary-500 hover:bg-primary-opacity/[8%] active:bg-primary-opacity/[8%] focus:bg-primary-opacity/[8%] border-primary-500';
const colorSecondaryOutline: string = 'text-secondary-500 hover:bg-secondary-opacity/[8%] active:bg-secondary-opacity/[8%] focus:bg-secondary-opacity/[8%] border-secondary-500';
const colorErrorOutline: string = 'text-error-500 hover:bg-error-opacity/[8%] active:bg-error-opacity/[8%] focus:bg-error-opacity/[8%] border-error-500';
const colorWarningOutline: string = 'text-warning-500 hover:bg-warning-opacity/[8%] active:bg-warning-opacity/[8%] focus:bg-warning-opacity/[8%] border-warning-500';
const colorInfoOutline: string = 'text-info-500 hover:bg-info-opacity/[8%] active:bg-info-opacity/[8%] focus:bg-info-opacity/[8%] border-info-500';
const colorSuccessOutline: string = 'text-success-500 hover:bg-success-opacity/[8%] active:bg-success-opacity/[8%] focus:bg-success-opacity/[8%] border-success-500';

const colorPrimaryText: string = 'text-primary-500 hover:bg-primary-opacity/[8%] active:bg-primary-opacity/[8%] focus:bg-primary-opacity/[8%]';
const colorSecondaryText: string = 'text-secondary-500 hover:bg-secondary-opacity/[8%] active:bg-secondary-opacity/[8%] focus:bg-secondary-opacity/[8%]';
const colorErrorText: string = 'text-error-500 hover:bg-error-opacity/[8%] active:bg-error-opacity/[8%] focus:bg-error-opacity/[8%]';
const colorWarningText: string = 'text-warning-500 hover:bg-warning-opacity/[8%] active:bg-warning-opacity/[8%] focus:bg-warning-opacity/[8%]';
const colorInfoText: string = 'text-info-500 hover:bg-info-opacity/[8%] active:bg-info-opacity/[8%] focus:bg-info-opacity/[8%]';
const colorSuccessText: string = 'text-success-500 hover:bg-success-opacity/[8%] active:bg-success-opacity/[8%] focus:bg-success-opacity/[8%]';


const sizeBtn = computed<string>(() => {
  return props.size === 'md' ? btnMd : props.size === 'sm' ? btnSm : btnLg;
})

const sizeText = computed<string>(() => {
  return props.text === 'md' ? textMd : props.text === 'sm' ? textSm : textLg;
})

const colorBtn = computed<string>(() => {
  if(props.type === 'default') {
    return props.color === 'secondary' ? colorSecondaryDefault 
      : props.color === 'error' ? colorErrorDefault 
        : props.color === 'warning' ? colorWarningDefault 
          : props.color === 'info' ? colorInfoDefault
            : props.color === 'success' ? colorSuccessDefault
              : colorPrimaryDefault;
  }

  if(props.type === 'label') {
    return props.color === 'secondary' ? colorSecondaryLabel
      : props.color === 'error' ? colorErrorLabel
        : props.color === 'warning' ? colorWarningLabel
          : props.color === 'info' ? colorInfoLabel
            : props.color === 'success' ? colorSuccessLabel
              : colorPrimaryLabel;
  }

  if(props.type === 'outline') {
    return props.color === 'secondary' ? colorSecondaryOutline 
      : props.color === 'error' ? colorErrorOutline
        : props.color === 'warning' ? colorWarningOutline
          : props.color === 'info' ? colorInfoOutline
            : props.color === 'success' ? colorSuccessOutline
              : colorPrimaryOutline;
  }

  if(props.type === 'text') {
    return props.color === 'secondary' ? colorSecondaryText
      : props.color === 'error' ? colorErrorText
        : props.color === 'warning' ? colorWarningText
          : props.color === 'info' ? colorInfoText
            : props.color === 'success' ? colorSuccessText
              : colorPrimaryText;
  }

  return colorPrimaryDefault;
});
</script>
<template>
<div class="button">
  <button
    v-if="type === 'default'"
    class="w-full duration-200 border border-transparent text-white rounded-md shadow-sm disabled:opacity-[45%] flex justify-center items-center gap-[8px]"
    :class="[sizeBtn, colorBtn, sizeText]"
  >
    <ArrowLeftIcon v-if="leftIcon" />
    <slot></slot>
    <ArrowRightIcon v-if="rightIcon" />
  </button>
  <button 
    v-if="type === 'label'"
    class="w-full button-label duration-200 border border-transparent rounded-md disabled:opacity-[45%]"
    :class="[sizeBtn, colorBtn, sizeText]"
  >
    <slot></slot>
  </button>
  <button 
    v-if="type === 'outline'" 
    class="w-full bg-transparent duration-200 border rounded-md disabled:opacity-[45%]"
    :class="[sizeBtn, colorBtn, sizeText]"
  >
    <slot></slot>
  </button>
  <button 
    v-if="type === 'text'" 
    class="w-full bg-transparent duration-200 border border-transparent rounded-md disabled:opacity-[45%]"
    :class="[sizeBtn, colorBtn, sizeText]"
  >
    <slot></slot>
  </button>
  <button 
    v-if="type === 'inline-text'" 
    class="bg-transparent duration-200 border border-transparent rounded-md disabled:opacity-[45%]"
  >
    <slot></slot>
  </button>
</div>
</template>