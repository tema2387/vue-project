<script setup>
import FrontHeader from '@/components/FrontHeader.vue';
import FrontFooter from '@/components/FrontFooter.vue';

// header can be 'fixed' or without value
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