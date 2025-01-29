<script lang="ts" setup>
import { computed, ref } from 'vue';
// Иконки
import SearchIcon from '@/components/UI/svg/SearchIcon.vue'
import EyePasswordIcon from '@/components/UI/svg/EyePasswordIcon.vue';
import { before } from 'node:test';

// Пропс type может быть 'outlined', 'filled' or 'custom'
// Пропс size может быть 'lg', 'md', 'sm' 
// Пропс labelBgColor может быть 'footer', 'main'
// Пропс status может быть 'default' (default), success, error
type TypeProps = {
  id: string,
  label?: string,
  type?: string,
  size?: string,
  placeholder?: string,
  searchIcon?: boolean
  readonly?: boolean,
  helpText?: string | null,
  eyeIcon?: boolean,
  passwordInput?: boolean,
}

const props = withDefaults(defineProps<TypeProps>(), {
  size: 'md',
});

const focusOnInput = ref<boolean>(false);

// Размеры input
const sizeLg: string = 'px-[16px] py-[16px]';
const sizeMd: string = 'px-[16px] py-[12px]';
const sizeSm: string = 'px-[16px] py-[8px]';

const model = defineModel<string | null>();
const emit = defineEmits<{
  (e: 'toggleInput'): void,
}>();

const sizeInput = computed<string>(() => {
  return props.size === 'md' ? sizeMd : props.size === 'sm' ? sizeSm : sizeLg;
})

const posLeftIcon = computed<string>(() => {
  return props.size === 'md' 
    ? 'left-[16px] top-[12px]' : props.size === 'sm' 
      ? 'left-[16px] top-[8px]' : 'left-[16px] top-[16px]';
})

const posRightIcon = computed<string>(() => {
  return props.size === 'md' 
    ? 'right-[16px] top-[12px]' : props.size === 'sm' 
      ? 'right-[16px] top-[8px]' : 'right-[16px] top-[16px]';
})

</script>
<template>
  <div 
    v-if="type === 'outlined'" 
    class="input group relative text-input-text"
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
      :readonly="readonly"
      @focus="focusOnInput = true"
      @blur="focusOnInput = false"
      :type="passwordInput ? 'password' : 'text'" 
      class="peer w-full text-text-primary duration-200 placeholder-transparent bg-transparent focus:placeholder-text-disabled outline-none"
      :class="[sizeInput, { 'pl-[46px]': searchIcon }]"
      v-model="model"
    />
    <label 
      :for="id"
      class="absolute flex pointer-events-none text-text-primary items-center duration-200 translate-y-[-50%] peer-focus:text-primary-500 peer-focus:top-0 peer-focus:text-13"
      :class="[searchIcon ? 'left-[46px]' : 'left-[16px]', model ? 'top-0' : 'top-[50%]', { 'text-13': model }]"
    >
      {{ label }} 
    </label>
    <div class="absolute duration-200 flex pointer-events-none top-0 left-0 w-full h-full">
      <div 
        class="input__part-1 w-[11px] relative border-input-border border-l border-t border-b rounded-l-md before:content-[''] before:w-[calc(100%_+_1px)] before:h-[calc(100%_+_2px)] before:absolute before:border-l-[2px] before:border-t-[2px] before:border-b-[2px] before:rounded-l-md before:top-[-1px] before:left-[-1px]"
        :class="[focusOnInput ? 'border-primary-500 group-hover:border-primary-500 before:border-primary-500' : 'border-input-border group-hover:border-action-active before:border-transparent', { 'w-[41px]': searchIcon }]"
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
    <EyePasswordIcon
      v-if="eyeIcon"
      class="absolute translate-y-[15%] cursor-pointer" 
      :class="posRightIcon" 
      @click="emit('toggleInput')"
    />
    <span 
      v-if="helpText" 
      class="help-text absolute left-[16px] bottom-[-2px] translate-y-[100%] text-helper-text"
    >
      {{ helpText }}
    </span>
  </div>
  <div 
    v-else 
    class="input group relative text-input-text"
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
      :readonly="readonly"
      @focus="focusOnInput = true"
      @blur="focusOnInput = false"
      :type="passwordInput ? 'password' : 'text'" 
      class="peer w-full text-text-primary duration-200 bg-transparent placeholder-text-disabled outline-none"
      :class="[sizeInput, { 'pl-[46px]': searchIcon }]"
      v-model="model"
    />
    <div class="absolute duration-200 flex pointer-events-none top-0 left-0 w-full h-full">
      <div 
        class="input__part-1 w-[11px] relative border-input-border border-l border-t border-b rounded-l-md before:content-[''] before:w-[calc(100%_+_1px)] before:h-[calc(100%_+_2px)] before:absolute before:border-l-[2px] before:border-t-[2px] before:border-b-[2px] before:rounded-l-md before:top-[-1px] before:left-[-1px]"
        :class="[focusOnInput ? 'border-primary-500 group-hover:border-primary-500 before:border-primary-500' : 'border-input-border group-hover:border-action-active before:border-transparent', { 'w-[41px]': searchIcon }]"
      >
      </div>
      <div 
        class="input__part-2 relative text-transparent border-t border-b text-13 h-full w-max before:content-[''] before:w-full before:h-[calc(100%_+_2px)] before:absolute before:border-t-[2px] before:border-b-[2px] before:top-[-1px]"
        :class="[focusOnInput ? 'border-primary-500 group-hover:border-primary-500 before:border-primary-500' : 'border-input-border group-hover:border-action-active before:border-transparent']"
      >
        <span class="mx-[5px]">{{ label }}</span>
      </div>
      <div 
        class="input__part-3 relative flex-1 border-r border-t border-b rounded-r-md before:content-[''] before:w-[calc(100%_+_1px)] before:h-[calc(100%_+_2px)] before:flex before:absolute before:border-r-[2px] before:border-t-[2px] before:border-b-[2px] before:rounded-r-md before:top-[-1px]"
        :class="[focusOnInput ? 'border-primary-500 group-hover:border-primary-500 before:border-primary-500' : 'border-input-border group-hover:border-action-active before:border-transparent']"
      >
      </div>
    </div>
    <EyePasswordIcon
      v-if="eyeIcon"
      class="absolute translate-y-[15%] cursor-pointer" 
      :class="posRightIcon" 
      @click="emit('toggleInput')"
    />
  </div>
</template>