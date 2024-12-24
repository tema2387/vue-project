<script lang="ts" setup>
import CheckAccordionIcon from '@/components/UI/svg/CheckAccordionIcon.vue';

type TypeProps = {
  title: string,
  text: string,
  status: boolean,
}

const props = defineProps<TypeProps>();

const emit = defineEmits<{
  (e: 'show'): void,
}>();
</script>
<template>
  <div 
    @click="emit('show')" 
    class="accordion rounded-md shadow-sm px-[20px] py-[12px] bg-paper-bg cursor-pointer"
  >
    <div class="accordion__top flex items-center justify-between">
      <div class="accordion__title text-15-500">{{ props.title }}</div>
      <CheckAccordionIcon 
        class="duration-200" 
        :class="{ '-rotate-180': props.status }" 
      />
    </div>
    <p 
      v-show="props.status" 
      class="accordion__text mt-[12px] text-text-secondary"
    >
      {{ props.text }}
    </p>
  </div>
</template>