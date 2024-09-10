<script setup>
const props = defineProps({
  title: {
    type: String,
    default() {
      return 'title';
    }
  },
  subtitleSmall: {
    type: String,
    default() {
      return 'subtitle';
    }
  },
  subtitleBold: {
    type: String,
    default() {
      return 'SUBTITLE BOLD'
    }
  },
  desc: {
    type: String,
    default() {
      return 'description';
    }
  },
  descTwo: {
    type: String,
    default() {
      return null;
    }
  },
  subtitleBoldOnRight:{
    type: Boolean,
    default() {
      return false;
    },
  }
})
</script>
<template>
  <div class="section text-15-50">
    <div class="section__top flex flex-col items-center">
      <div class="section__title flex gap-[12px] items-center">
        <img 
          src="/public/icon/section-tilte-icon.svg" 
          alt="section-title-icon"
        >
        <span>{{ title }}</span>
      </div>
      <h5 v-if="subtitleBoldOnRight" class="section__subtitle mt-[24px]">
        {{ subtitleSmall }} <span class="text-subtitle-bold">{{ subtitleBold }}</span>
      </h5>
      <h5 v-else class="section__subtitle mt-[24px]">
        <span class="text-subtitle-bold">{{ subtitleBold }}</span> {{ subtitleSmall }}
      </h5>
      <p class="section__desc mt-[8px] text-text-secondary">{{ desc }}</p>
      <p v-if="descTwo" class="section__desc-two text-text-secondary">{{ descTwo }}</p>
    </div>
    <div class="section__content">
      <slot></slot>
    </div>
  </div>
</template>