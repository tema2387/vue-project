<script setup>
import FrontHeader from '@/components/FrontHeader.vue';
import FrontFooter from '@/components/FrontFooter.vue';

// Пропс header может быть 'fixed' или любое другое текстовое значение
const props = defineProps({
  header: {
    type: String,
    default() {
      return '';
    },
  }
})
</script>
<template>
  <FrontHeader :type="header" />
  <div class="page-content grow">
    <slot></slot>
  </div>
  <FrontFooter />
</template>