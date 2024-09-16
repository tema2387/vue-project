<script setup>
import { ref, computed } from 'vue';
import CheckAccordionIcon from '@/components/UI/svg/CheckAccordionIcon.vue';

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
  selects: {
    type: Array,
    default() {
      return [];
    }
  }
});

// sizes select
const sizeLg = 'py-[16px] px-[16px]';
const sizeMd = 'py-[12px] px-[16px]';
const sizeSm = 'py-[8px] px-[16px]';

// colors background label
const footerLabelBgColor = 'bg-footer-bg-color';
const mainLabelBgColor = 'bg-paper-bg';

const model = defineModel();
const openSelect = ref(false);

const sizeSelectField = computed(() => {
  return props.size === 'md' ? sizeMd : props.size === 'sm' ? sizeSm : sizeLg;
})

const labelBgColor = computed(() => {
  return props.labelBgColor === 'footer' ? footerLabelBgColor : mainLabelBgColor;
})

// remove focus from select
function handlerSelect(event) {
  event.target.blur();
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
      <option v-for="select in selects" :value="select">{{ select }}</option>
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
      class="select-label-background text-13 duration-200 absolute h-[4px] top-[-1px] left-[14px] px-[2px] opacity-0 peer-focus:opacity-100"
      :class="[{'opacity-100': model}, labelBgColor]"
    >
      <span class="invisible">
        {{ label }}
      </span>
    </div>
  </div>
</template>