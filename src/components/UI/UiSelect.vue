<script lang="ts" setup>
import { ref, computed } from 'vue';
// Иконки
import CheckAccordionIcon from '@/components/UI/svg/CheckAccordionIcon.vue';

// Пропс size может быть 'lg', 'md', 'sm' 
// Пропс labelBgColor может быть 'footer', 'main'
type TypeProps = {
  id: string,
  label: string,
  selects: string[],
  labelBgColor?: string,
  size?: string,
}

const props = withDefaults(defineProps<TypeProps>(), {
  size: 'md',
});
const model = defineModel<string>();

const openSelect = ref<boolean>(false);

// Размеры select
const sizeLg: string = 'py-[16px] px-[16px]';
const sizeMd: string = 'py-[12px] px-[16px]';
const sizeSm: string = 'py-[8px] px-[16px]';

// Цвет бэкграунда label
const footerLabelBgColor: string = 'bg-footer-bg-color';
const mainLabelBgColor: string = 'bg-paper-bg';

const sizeSelectField = computed<string>(() => {
  return props.size === 'md' ? sizeMd : props.size === 'sm' ? sizeSm : sizeLg;
})

const labelBgColor = computed<string>(() => {
  return props.labelBgColor === 'footer' ? footerLabelBgColor : mainLabelBgColor;
})

// Удаление состояния фокус с селекта
function handlerSelect(event: Event):void {
  const target = (event.target as HTMLElement);
  target.blur();

  openSelect.value = false;
}
</script>
<template>
  <div 
    class="select relative text-input-text"
  >
    <select 
      :id="id"
      class="peer w-full text-input-text duration-200 bg-transparent outline outline-transparent outline-offset-[-2px] border border-input-border rounded-lg text-text-disabled placeholder-transparent focus:placeholder-text-disabled focus:border-primary-500 focus:outline-primary-500 focus:text-text-primary hover:border-action-active hover:text-text-primary"
      :class="sizeSelectField"
      v-model="model"
      @change="handlerSelect"
      @mouseleave="handlerSelect"
      @click="openSelect = true"
    >
      <option 
        v-for="(select, index) in selects" 
        :key="index"
        :value="select"
      >
        {{ select }}
      </option>
    </select>
    <CheckAccordionIcon 
        class="duration-200 absolute pointer-events-none right-[20px] top-[50%] translate-y-[-50%]" 
        :class="{ '-rotate-180': openSelect }" 
    />
    <label 
      :for="id"
      class="absolute flex h-full pointer-events-none z-[1] text-text-disabled items-center duration-200 left-[16px] top-0 peer-hover:text-text-primary peer-focus:text-primary-500 peer-focus:translate-y-[-50%] peer-focus:text-13"
      :class="{'translate-y-[-50%]': model, 'text-13': model}"
    >
      {{ label }}
    </label>
    <div 
      class="select-label-background text-13 duration-200 absolute h-[4px] top-[-1px] left-[14px] px-[2px] peer-focus:opacity-100"
      :class="[model ? 'opacity-100' : 'opacity-0', labelBgColor]"
    >
      <span class="invisible">
        {{ label }}
      </span>
    </div>
  </div>
</template>