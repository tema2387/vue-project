<script setup>
// Компоненты
import FrontHeader from '@/components/FrontHeader.vue';
import FrontFooter from '@/components/FrontFooter.vue';
</script>
<template>
  <FrontHeader />
  <div class="page-content grow">
    <slot></slot>
  </div>
  <FrontFooter />
</template>