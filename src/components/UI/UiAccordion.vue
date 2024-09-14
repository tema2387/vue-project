<script setup>
import CheckAccordionIcon from '@/components/UI/svg/CheckAccordionIcon.vue';

const props = defineProps({
  title: {
    type: String,
    default() {
      return 'title';
    }
  },
  text: {
    type: String,
    default() {
      return 'text';
    }
  },
  status: {
    type: Boolean,
    default() {
      return false;
    }
  }
})

const emit = defineEmits(['show'])

</script>
<template>
  <div 
    @click="$emit('show')" 
    class="accordion rounded-md shadow-sm px-[20px] py-[12px] bg-paper-bg cursor-pointer"
  >
    <div class="accordion__top flex items-center justify-between">
      <div class="accordion__title text-15-500">{{ title }}</div>
      <CheckAccordionIcon 
        class="duration-200" 
        :class="{ '-rotate-180': status }" 
      />
    </div>
    <p 
      v-show="status" 
      class="accordion__text mt-[12px] text-text-secondary"
    >
      {{ text }}
    </p>
  </div>
</template>